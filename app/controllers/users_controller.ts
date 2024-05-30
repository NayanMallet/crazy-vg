import type { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";

export default class UsersController {
    async index({}: HttpContext) {
    }

    public async create({view}: HttpContext) {
        return view.render('users.create')
    }


    async store({ request, response }: HttpContext) {
        const data = request.only(['email', 'password'])
        const user = await User.create(data)
        return response.redirect('/')
    }



    async edit({ params, view }: HttpContext) {
        const user = await User.find(params.id)
        return view.render('users.edit', { user })
    }


    async update({ params, request, response }: HttpContext) {
        const user = await User.find(params.id)
        const data = request.only(['email', 'password'])
        if (!user) {
            return response.notFound('User not found')
        }
        user.merge(data)
        await user.save()
        return response.redirect('/admin/users')
    }


    async destroy({ params, response }: HttpContext) {
        const user = await User.find(params.id)
        if (!user) {
            return response.notFound('User not found')
        }
        await user.delete()
        return response.redirect('/admin/users')
    }
}
