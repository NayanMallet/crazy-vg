import { Admin } from '#pages/admin'
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
        return <Admin loggedUser={ctx.auth.user!} />
    })
    .use([middleware.auth(), middleware.admin()])
    .as('admin')


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
