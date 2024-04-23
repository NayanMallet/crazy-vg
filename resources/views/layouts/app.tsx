import { Vite } from "#start/view";
import type { Children } from "@kitajs/html";

interface LayoutProps {
    children: Children;
    title: string;
}

export function Layout(props: LayoutProps) {
    const { children , title } = props;

    return (
        <>
            {"<!DOCTYPE html>"}
            <html lang="fr" data-theme="synthwave" class="h-full v-full">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>{title}</title>

                <Vite.Entrypoint entrypoints={["resources/assets/css/index.css"]} />
                <script src="//unpkg.com/alpinejs" defer></script>
            </head>
            <body class="v-full h-full">{children}</body>
            </html>
        </>
    );
}
