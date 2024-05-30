import { Dashboard } from '#pages/admin/dashboard'
import { Users } from "#pages/admin/users";
import { Profile } from "#pages/shop/profile";

import { Home } from '#pages/home'
import { Login } from "#pages/login";
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import { Products } from "#pages/shop/products";
import { ProductPage } from "#pages/shop/product";

const AuthController = () => import('#controllers/auth_controller')
// const ProductsController = () => import('#controllers/products_controller')
// import { ProductsController } from '#controllers/products_controller';


router.get('/', () => {
    return <Home />
})



router
    .get('/admin', async (ctx) => {
        return <Dashboard user={ctx.auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('admin')

router
    .get('/admin/users', async (ctx) => {
        return <Users user={ctx.auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('admin.users')


router
    .get('/shop', async (ctx) => {
        return <Products user={ctx.auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('shop')

router
    .get('/shop/profile', async (ctx) => {
        return <Profile user={ctx.auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('shop.profile')

//faux product
let product = {
    id: '1',
    name: 'FIFA 22',
    description: 'La nouvelle version de FIFA',
    price: 69.99,
    thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/fifa-22-ps4-psn-account-account-global-i10000263306047/6a3e5c2f2d144e9c9135a112',
    averageRating: 4.5,
    activationCode: 'FIFA22-2024',
    createdAt: new Date(),
    updatedAt: new Date()
}

// make a toute for the product page according to the product id
router
    .get('shop/product/:id', async (ctx) => {
        return <ProductPage product={product} user={ctx.auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('shop.product')

/*
|--------------------------------------------------------------------------
| Authentification & Social OAuth
|--------------------------------------------------------------------------
 */
router.get('/login', () => {
    return <Login />
}).as('auth.login')

router
    .group(() => {
        router.get('/:provider', [AuthController, 'redirect']).as('auth.social')
        router.get('/:provider/callback', [AuthController, 'callback']).as('auth.callback')
        router.get('/logout', [AuthController, 'logout']).as('auth.logout')
    })
    .prefix('/auth')

/*
|--------------------------------------------------------------------------
| Stripe Payments Intent
|--------------------------------------------------------------------------
*/
import StripeController from '#controllers/stripe_controller';

router.post('/payments/create-payment-intent', async ({ request, response }) => {
    const productId = request.input('productId');
    const stripeController = new StripeController();
    const clientSecret = await stripeController.createPaymentIntent(productId);
    return response.json({ clientSecret });
});



