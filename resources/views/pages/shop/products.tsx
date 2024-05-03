// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
// import Product from "#models/product";

interface Props {
    user: User,
    // products: Product
}

export function Products(props: Props) {
    // const { user, products } = props;
    const {user } = props;
    // const routes = [
    //     {
    //         name: "Products",
    //         route: "/shop/products",
    //         icon: Home, // edit this
    //         active: true
    //     },
    //     {
    //         name: "ProductPage",
    //         route: "/shop/product_page",
    //         icon: UserIcon // edit this
    //     },
    //     {
    //         name: "Cart",
    //         route: "/shop/cart",
    //         icon: Recipe // edit this
    //     },
    //     {
    //         name: "User",
    //         route: "/shop/user",
    //         icon: Wallet // edit this
    //     }
    // ];

    return (
        <ShopLayout
            title={'Products'}
            navigation={
            <ShopHeader pageTitle={"Hey " + user.firstName + " !"} loggedUser={user} />
            }
            main={
                <div class="flex flex-col w-full h-full items-center space-y-4">
                    <h1 class="text-2xl font-bold">Products</h1>
                    <div class="flex flex-col w-full md:w-3/4 space-y-4">
                        {/*{products.map((product: Product) => (*/}
                        {/*    <div class="flex w-full p-4 space-x-4 items-center bg-white shadow-md rounded-md">*/}
                        {/*        <div class="w-1/4 h-24 bg-gray-300 rounded-md"></div>*/}
                        {/*        <div class="flex flex-col w-3/4 space-y-2">*/}
                        {/*            <h2 class="text-lg font-semibold">{product.name}</h2>*/}
                        {/*            <p class="text-sm">{*/}
                        {/*                product.description.length > 100*/}
                        {/*                    ? product.description.slice(0, 100) + '...'*/}
                        {/*                    : product.description*/}
                        {/*            }</p>*/}
                        {/*            <div class="flex items-center justify-between">*/}
                        {/*                <p class="text-lg font-semibold">{product.price} €</p>*/}
                        {/*                <button class="btn btn-primary">Add to cart</button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>
            }
            footer={
                <div>
                    Copyright © 2024 All rights reserved - CrazyVg
                </div>
            }
        />
    );
}
