// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
import { ShopMainMenu } from "#components/shop_main_menu";
import Product from "#models/product";

interface Props {
    user: User,
}

export async function Products(props: Props) {
    const { user } = props;

    const products = await Product.all();

    return (
        <ShopLayout
            title={'Products'}
            navigation={
            <ShopHeader loggedUser={user} userUrl={"shop/profile"} isAbsolute={true}/>
            }
            main={
                <ShopMainMenu
                    products={products} user={user} bgImage={'images/[BACKGROUND]crazy_vg.webp'}></ShopMainMenu>
            }
            footer={
                <div class="text-black absolute bottom-[-99vh]">
                    Copyright © 2024 All rights reserved - CrazyVg
                </div>
            }
        />
    );
}
