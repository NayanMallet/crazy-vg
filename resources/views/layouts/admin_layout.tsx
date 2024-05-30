import type { Children } from "@kitajs/html";
import { Layout } from "#layouts/app";

interface LayoutProps {
    title: string;
    header: Children;
    navigation: Children;
    main: Children;
}
export function AdminLayout(props: LayoutProps) {
    const { title, header, navigation, main } = props;

    return (
        <Layout title={title} children={
            <div class="flex w-full h-full">
                <nav class="hidden md:flex w-1/5 h-full flex-col"
                     id={'admin-nav'}
                >
                    {navigation}
                </nav>
                <div class="flex w-full md:w-4/5 h-full flex-col">
                    <div class="flex md:h-[10%] h-[12%] w-full justify-center md:justify-between items-center">
                        {header}
                    </div>
                    <main class="flex w-full md:h-[90%] h-[88%]">
                        {main}
                    </main>
                </div>
            </div>
        } />
    );
}
