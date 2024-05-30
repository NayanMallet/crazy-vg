import Stripe from 'stripe';
import env from '#start/env';
import Product from '#models/product';
import { HttpContext} from "@adonisjs/core/http";

export default class StripeController {
    private stripe: Stripe;

    constructor() {
        this.stripe = new Stripe(env.get('STRIPE_SECRET_KEY'), {
            apiVersion: '2024-04-10',
        });
    }

    public async createPaymentIntent({ request, response }: HttpContext) {
        const productId = request.input('productId');
        const product = await Product.find(productId);

        if (!product) {
            return response.status(404).send('Product not found');
        }

        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: product.price * 100,
            currency: 'eur',
            payment_method_types: ['card'],
        });

        return paymentIntent.client_secret;
    }
}
