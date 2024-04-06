import env from '#start/env'
import { defineConfig, services } from '@adonisjs/ally'
import { InferSocialProviders } from '@adonisjs/ally/types'

const allyConfig = defineConfig({
    discord: services.discord({
        clientId: env.get('DISCORD_CLIENT_ID'),
        clientSecret: env.get('DISCORD_CLIENT_SECRET'),
        callbackUrl: '',

        scopes: ['identify', 'email'],
    }),
})

export default allyConfig

declare module '@adonisjs/ally/types' {
    interface SocialProviders extends InferSocialProviders<typeof allyConfig> {}
}
