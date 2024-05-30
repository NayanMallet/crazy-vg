import Stripe from 'stripe';
import env from '#start/env';
import Product from '#models/product';
import { HttpContext} from "@adonisjs/core/http";
import { json } from "node:stream/consumers";

export default class StripeController {
    private stripe: Stripe;

    constructor() {
        this.stripe = new Stripe(env.get('STRIPE_SECRET_KEY'), {
            apiVersion: '2024-04-10',
        });
    }

    public async createPaymentIntent({ request, auth, response }: HttpContext) {
        const productId = request.param('productId');

        const product = await Product.find(productId);


        if (!product) {
            return response.status(404).send('Product not found');
        }

        const paymentIntent = await this.stripe.checkout.sessions.create({
            customer_email: auth.user?.email,
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: Math.round(product.price * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${env.get('APP_URL')}/code/${product.id}`,
            cancel_url: `${env.get('APP_URL')}/shop/product/${product.id}`,
        });

        if (!paymentIntent.url) {
            return response.status(500).send('Error creating payment intent');
        }
        return response.redirect(paymentIntent.url);
    }
}
