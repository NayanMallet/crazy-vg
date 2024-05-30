import Stripe from 'stripe'
import env from '#start/env'
import Product from '#models/product'

export default class StripeController {
    public async createSession(product: Product): Promise<string> {
        const stripe = new Stripe(env.get('STRIPE_SECRET_KEY'), {
            apiVersion: '2022-11-15',
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eu',
                        product_data: {
                            name: product.name,
                            description: product.description,
                            images: [product.thumbnailUrl],
                        },
                        unit_amount: product.price * 100, // Stripe expects amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        })

        return session.id
    }
}
