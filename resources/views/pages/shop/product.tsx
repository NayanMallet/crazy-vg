// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
import Product from "#models/product";

interface Props {
    user: User,
    product: Product
}

export function ProductPage(props: Props) {
    // const { user, products } = props;
    const { user, product } = props;

    return (
        <ShopLayout
            title={ product.name }
            navigation={
                <ShopHeader loggedUser={user} userUrl={"zob/zob"} />
            }
            main={}
            footer={
                <div class="text-black">
                    Copyright © 2024 All rights reserved - CrazyVg
                </div>
            }
        />
    );
}
