import { LoginForm } from "#components/login_form";
import { Layout } from '#layouts/app'

export function Login() {
    return (
        <Layout
            title={"Se connecter"}
            children={
                <div class="h-full flex justify-center items-center">
                    <LoginForm />
                </div>
            }
        />
    )
}
