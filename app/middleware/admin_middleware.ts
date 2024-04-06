import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class IsAdminMiddleware {
    async handle({ auth, response }: HttpContext, next: NextFn) {
        /**
         * Middleware logic goes here (before the next call)
         */
        if (!auth.user?.isAdmin) {
            return response.unauthorized({ error: 'Unauthorized access' })
        }

        return await next()
    }
}
