import { Vite } from "#start/view";
import type { Children } from "@kitajs/html";

interface LayoutProps {
    title: string;
    header: Children;
    navigation: Children;
    main: Children;
}
export function AdminLayout(props: LayoutProps) {
    const { title, header, navigation, main } = props;

    return (
        <>
            {"<!DOCTYPE html>"}
            <html lang="fr" class="h-full v-full">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <title>{title}</title>

                    <Vite.Entrypoint entrypoints={["resources/assets/css/index.css"]} />
                </head>
                <body class="v-full h-full flex flex-row">
                    <nav class="hidden md:flex w-1/5 h-full flex-col">
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
                </body>
            </html>
        </>
    );
}
