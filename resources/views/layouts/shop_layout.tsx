import type { Children } from "@kitajs/html";
import { Layout } from "#layouts/app";

interface LayoutProps {
    title: string;
    navigation: Children;
    main: Children;
    footer: Children;
}
export function ShopLayout(props: LayoutProps) {
    const { title, navigation, main, footer } = props;

    return (
        <Layout title={title} children={
            <div class="flex w-full h-full flex-col">
                <nav class="flex w-full flex-col justify-center items-center sticky top-0 z-40">
                    {navigation}
                </nav>
                <main class="flex w-full md:h-[90%] h-[88%]">
                    {main}
                </main>
                <footer class="text-white flex md:h-[5%] h-[12%] w-full justify-center items-center">
                    {footer}
                </footer>
            </div>
        } />
    );
}
