import { Dashboard } from '#pages/admin/dashboard'
import { Users } from "#pages/admin/users";

import { Home } from '#pages/home'
import { Login } from "#pages/login";
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')

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
