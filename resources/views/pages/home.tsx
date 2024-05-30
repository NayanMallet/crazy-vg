import { Layout } from '#layouts/app'
import { route } from '#start/view'

export function Home() {
    return (
        <Layout
            title={'Home Page'}
            children={
                <div class="h-full flex flex-col justify-center items-center space-y-4">
                    <img class="w-auto" src="/images/[LOGO]crazy_vg.webp" alt="logo" />

                    <div class="flex justify-center items-center space-x-2">
                        <a class="btn" href={route('shop')}>
                            Accéder au shop
                        </a>
                        <a class="btn btn-primary" href={route('auth.login')}>
                            Se connecter
                        </a>
                        <a class="btn" href={route('admin')}>
                            Accéder à l'admin
                        </a>
                    </div>
                </div>
            }
        />
    )
}
