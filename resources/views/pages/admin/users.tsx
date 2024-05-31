import { AdminHeader } from "#components/admin_header";
import { UsersList } from "#components/users_list";
import { AdminLayout } from "#layouts/admin_layout";
import { AdminMenu } from "#components/admin_menu";
import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";

import User from "#models/user";

interface Props {
    user: User,
}

const routes = [
   /*  {
        name: "Dashboard",
        route: "/admin",
        icon: Home,
    }, */
    {
        name: "Utilisateurs",
        route: "/admin/users",
        icon: UserIcon,
        active: true
    },
    /* {
        name: "Commandes",
        route: "/admin/orders",
        icon: Recipe
    }, */
    {
        name: "Produits",
        route: "/admin/products",
        icon: Wallet,
    }
];

export async function Users(props: Props) {
    const { user } = props;
    const users = await User.all();

    return (
        <AdminLayout
            title={'Users'}
            navigation={<AdminMenu items={routes} settingsUrl={"admin/users"}/>}
            header={<AdminHeader pageTitle={"Hey " + user.firstName + " !"} loggedUser={user} />}
            main={
                <UsersList users={users} />
            }
        />
    );
}
