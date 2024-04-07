import AuthService from '#services/auth_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async redirect({ ally, params }: HttpContext) {
        return await ally.use(params.provider).redirect()
    }

    async callback({ response, auth, ally, params }: HttpContext) {
        const social = ally.use(params.provider)

        const { success, user } = await AuthService.getUser(social)
        if (!success || !user) return response.redirect().toPath('/login')

        await auth.use('web').login(user)
        return response.redirect().toPath('/')
    }

    async logout({ response, auth }: HttpContext) {
        await auth.use('web').logout()
        return response.redirect().toPath('/')
    }
}
