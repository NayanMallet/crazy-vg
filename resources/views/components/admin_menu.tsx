import { Cog } from "#components/icons";

interface Props {
    settingsUrl: string;
    items: Array<{
    name: string,
    route: string,
    icon?: Function,
    active?: boolean
    }>;
}

// TODO : Add gap between menus items

export function AdminMenu(props: Props) {
    const { items, settingsUrl } = props;

    return (
        <main class="flex w-full h-full flex-col items-center justify-between bg-base-200">
            <div class="flex flex-row items-center justify-center h-1/6 w-full">
                <img src="/images/[LOGO]crazy_vg.webp" alt="logo" class="w-auto h-full" />

            </div>

            <div class="flex w-full h-full flex-col items-center justify-start">
                <ul class="menu w-full rounded-box">
                    {items.map(item => {
                        return (
                            <li>
                                <a class={item.active ? "active" : ""} href={item.route}>
                                    {item.icon() ?? ""}
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
