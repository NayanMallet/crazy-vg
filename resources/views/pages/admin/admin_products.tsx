import { AdminHeader } from "#components/admin_header";
import { AdminLayout } from "#layouts/admin_layout";
import { ProductsList } from "#components/products_list";
import User from "#models/user";
import Product from "#models/product"; // Importer le modèle Product

interface Props {
    user: User,
}

export async function AdminProducts(props: Props) {
    const { user } = props;

    // Fonction pour récupérer les produits
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
    const products = await fetchProducts();

    return (
        <AdminLayout
            title={'Products'}
            navigation={<div>Products</div>}
            header={<AdminHeader pageTitle={"Hey " + user.firstName + " !"} loggedUser={user} />}
            main={<ProductsList products={products} />}
        />
    );
}
