// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
import { ShopMainMenu } from "#components/shop_main_menu";
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
    //         // icon: Home, // edit this
    //         active: true
    //     },
    //     // {
    //     //     name: "ProductPage",
    //     //     route: "/shop/product_page",
    //     //     icon: UserIcon // edit this
    //     // },
    //     // {
    //     //     name: "Cart",
    //     //     route: "/shop/cart",
    //     //     icon: Recipe // edit this
    //     // },
    //     {
    //         name: "User",
    //         route: "/shop/user",
    //         // icon: Profile // edit this
    //     }
    // ];

    return (
        <ShopLayout
            title={'Products'}
            navigation={
            <ShopHeader loggedUser={user} userUrl={"shop/profile"}/>
            }
            main={
                <ShopMainMenu
                products={[]}
                bgImage={'images/[BACKGROUND]crazy_vg.webp'}
                ></ShopMainMenu>
            }
            footer={
                <div class="text-black absolute bottom-[-99vh]">
                    Copyright © 2024 All rights reserved - CrazyVg
                </div>
            }
        />
    );
}
