import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  public async create({ view }: HttpContext) {
    return view.render('products.create')
  }

  /**
   * Handle form submission for the create action
   */
  public async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'description', 'price', 'thumbnailUrl', 'averageRating', 'activationCode'])
    const product = await Product.create(data)
    return response.redirect('/products')
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  /* async update({ params, request }: HttpContext) {} */

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}