import User from '#models/user'
import { DiscordDriver } from '@adonisjs/ally/drivers/discord'
import logger from '@adonisjs/core/services/logger'

export default class AuthService {
    static async getUser(social: any) {
        const state = this.checkForErrors(social)

        logger.debug('[%s] (%s)', social)

        if (!state.success) return { ...state, user: null }

        return this.findOrCreateUser(social)
    }

    static checkForErrors(social: DiscordDriver) {
        if (social.accessDenied()) {
            return { success: false, message: 'Access was denied' }
        }

        if (social.stateMisMatch()) {
            return {
                success: false,
                message: 'Request expired, please try again',
            }
        }

        if (social.hasError()) {
            return {
                success: false,
                message: social.getError() ?? 'An unexpected error occurred',
            }
        }

        return { success: true, message: '' }
    }

    static async findOrCreateUser(social: DiscordDriver) {
        const user = await social.user()
        const match = await User.firstOrCreate(
            {
                email: user.email,
                oauthId: user.id,
            },
            {
                email: user.email,
                oauthId: user.id,
                firstName: user.name,
                avatarUrl: user.avatarUrl,
            }
        )

        return { success: true, user: match }
    }
}
