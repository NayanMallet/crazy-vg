import { AdminHeader } from "#components/admin_header";
import { AdminMenu } from "#components/admin_menu";
import { AdminLayout } from "#layouts/admin_layout";
import { ProductsList } from "#components/products_list";
import User from "#models/user";
import Product from "#models/product"; // Importer le modèle Product
import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";



interface Props {
    user: User
}

export async function AdminProducts(props: Props) {
    const { user } = props;
    const products = await Product.all(); // Récupérer tous les produits

    const routes = [
        /* {
            name: "Dashboard",
            route: "/admin",
            icon: Home,
        }, */
        {
            name: "Utilisateurs",
            route: "/admin/users",
            icon: UserIcon
        },/* 
        {
            name: "Commandes",
            route: "/admin/orders",
            icon: Recipe
        }, */
        {
            name: "Produits",
            route: "/admin/products",
            icon: Wallet,
            active: true
        }
    ];

    /* // Fonction pour récupérer les produits
    const fetchProducts = async () => {
        try {
            const products = await Product.all();
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    };

    // Appeler la fonction pour récupérer les produits
    const products = await fetchProducts(); */

    return (
        <AdminLayout
            title={'Products'}
            navigation={<AdminMenu items={routes} settingsUrl={"admin/products"}/>}
            header={<AdminHeader pageTitle={"Hey " + user.firstName + " !"} loggedUser={user} />}
            main={<ProductsList products={products} />}
        />
    );
}
