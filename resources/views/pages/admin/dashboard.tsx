import { AdminHeader } from "#components/admin_header";
import { AdminMainMenu } from "#components/admin_main_menu";
import { AdminMenu } from "#components/admin_menu";
import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { AdminLayout } from "#layouts/admin_layout";
import type User from "#models/user";

interface Props {
    user: User
}

export function Dashboard(props: Props) {
    const { user } = props;

    const routes = [
        {
            name: "Dashboard",
            route: "/admin/dashboard",
            icon: Home,
            active: true
        },
        {
            name: "Utilisateurs",
            route: "/admin/users",
            icon: UserIcon
        },
        {
            name: "Commandes",
            route: "/admin/orders",
            icon: Recipe
        },
        {
            name: "Produits",
            route: "/admin/products",
            icon: Wallet
        }
    ];

    return (
        <AdminLayout
            title={'Dashboard'}
            navigation={<AdminMenu items={routes} settingsUrl={"admin/settings"}/>}
            header={<AdminHeader pageTitle={"Hey " + user.firstName + " !"} loggedUser={user} />}
            main={<AdminMainMenu/>}
        />
    );
}
