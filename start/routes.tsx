import { Home } from '#pages/home';
import router from '@adonisjs/core/services/router'

router.get('/', () => {
    return <Home />
})
