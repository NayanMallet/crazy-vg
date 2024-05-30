import env from '#start/env';
import type { ApplicationService } from '@adonisjs/core/types'
import Stripe from 'stripe';

declare module '@adonisjs/core/types' {
    export interface ContainerBindings {
        'stripe.manager': Stripe
    }
}

export default class StripeProvider {
    constructor(protected app: ApplicationService) {}

    /**
     * Register bindings to the container
     */
    register() {
        this.app.container.singleton('stripe.manager', () => {
            return new Stripe(env.get('STRIPE_SECRET_KEY')!, {
                apiVersion: '2024-04-10',
            });
        });
    }
}
