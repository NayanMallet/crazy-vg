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
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const product = await Product.find(params.id)
    return view.render('products.edit', { product })

  }

  /**
   * Handle form submission for the edit action
   */

  async update({ params, request, response }: HttpContext) {
    const product = await Product.find(params.id)
    const data = request.only(['name', 'description', 'price', 'thumbnailUrl', 'averageRating', 'activationCode'])
    if (!product) {
        return response.notFound('Product not found')
    }
    product.merge(data)
    await product.save()
    return response.redirect('/products')
    }


  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const product = await Product.find(params.id)
    if (!product) {
        return response.notFound('Product not found')
    }
    await product.delete()
    return response.redirect('/products')
  }

}
