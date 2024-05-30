import { HttpContext } from '@adonisjs/core/http'
import StripeController from '#controllers/stripe_controller'
import Product from '#models/product'

export default class ShopController {
    public async index({ view }: HttpContext) {
        // Récupérer tous les produits depuis la base de données
        const products = await Product.all()
        return view.render('shop.index', { products })
    }

    public async initiatePayment({ request, response }: HttpContext) {
        const productId = request.input('productId')
        // Récupérer les détails du produit depuis la base de données
        const product = await Product.find(productId)
        if (!product) {
            return response.status(404).send('Product not found')
        }

        // Créer une session de paiement avec Stripe et récupérer la session ID
        const stripeController = new StripeController()
        const sessionId = await stripeController.createSession(product)

        // Rediriger l'utilisateur vers la page de paiement Stripe avec la session ID
        return response.redirect(`/pay/checkout?sessionId=${sessionId}`)
    }
}
