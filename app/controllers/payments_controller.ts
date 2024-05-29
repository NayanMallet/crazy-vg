import { HttpContext } from '@adonisjs/core/http'
import Stripe from 'stripe'
import env from '#start/env'


const stripe = new Stripe(env.get('STRIPE_SECRET_KEY'), {
    apiVersion: '2022-11-15', // Version de l'API Stripe
})

export default class PaymentsController {
    public async createPaymentIntent({ request, response }: HttpContext) {
        const { amount, currency } = request.only(['amount', 'currency'])

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
            })

            response.status(200).json({ clientSecret: paymentIntent.client_secret })
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
}
