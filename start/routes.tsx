import { Dashboard } from '#pages/admin/dashboard'
import { Users } from "#pages/admin/users";
import { Profile } from "#pages/shop/profile";
import { AdminProducts } from "#pages/admin/admin_products";

import { Home } from '#pages/home'
import { Login } from "#pages/login";
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import { Products } from "#pages/shop/products";
import { ProductPage } from "#pages/shop/product";

import User from "#models/user";

import { ConfirmPage } from "#pages/shop/confirm_page";

const AuthController = () => import('#controllers/auth_controller')

const ProductsController = () => import('#controllers/products_controller')

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
    .get('/admin/products', async (ctx) => {
        return <AdminProducts user={ctx.auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('admin.products')


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



// make a toute for the product page according to the product id
router
    .get('shop/product/:id', async ({ request, auth }) => {
        const product = await Product.find(request.param('id'))
        return <ProductPage product={product} user={auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('shop.product')


router
    .post('/products/create', async ({request, response}) => {
        const data = request.only(['name', 'description', 'price', 'thumbnail_url', 'average_rating', 'activation_code']);
        const product = await Product.create(data)
        return response.redirect('/admin/products')
    })

// update product
router
    .post('/products/update/:id', async ({request, response}) => {
        const data = request.only(['name', 'description', 'price', 'thumbnail_url', 'average_rating', 'activation_code']);
        const product = await Product.find(request.param('id'))
        if (!product) {
            return 'Product not found'
        }
        product.merge(data)
        await product.save()
        return response.redirect('/admin/products')
    })

// delete product

router
    .get('/products/delete/:id', async ({request, response}) => {
        const product = await
            Product.find(request.param('id'))
        if (!product) {
            return 'Product not found'
        }
        await product.delete()
        return response.redirect('/admin/products')
    })

// create user
router
    .post('/users/create', async ({request, response}) => {
        const data = request.only(['email', 'password']);
        const user = await User.create(data)
        return response.redirect('/')
    })

// update user
router
    .post('/users/update/:id', async ({request, response}) => {
        const data = request.only(['first_name', 'last_name', 'email', 'password', 'is_admin']);
        const user = await User.find(request.param('id'))
        if (!user) {
            return 'User not found'
        }
        user.merge(data)
        user.updatedAt = DateTime.now();
        await user.save()
        return response.redirect('/admin/users')
    })

// delete user

router
    .get('/users/delete/:id', async ({request, response}) => {
        const user = await
            User.find(request.param('id'))
        if (!user) {
            return 'User not found'
        }
        await user.delete()
        return response.redirect('/admin/users')
    })
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
    })
    .prefix('/auth')

    router.get('/logout', [AuthController, 'logout']).as('auth.logout')

/*
|--------------------------------------------------------------------------
| Stripe Payments Intent
|--------------------------------------------------------------------------
*/
import StripeController from '#controllers/stripe_controller';
import Product from "#models/product";
import { DateTime } from "luxon";

router.get('/payments/create-payment-intent/:productId', [StripeController, 'createPaymentIntent'])
    .use(middleware.auth())


router.get('/code/:productId', async ({ request, auth }) => {
    const product = await Product.find(request.param('productId'))
    if (!product) {
        return 'Product not found'
    }
    return <ConfirmPage product={product} user={auth.user!} />
})

