// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
import Product from "#models/product";
import { ProductCard } from "#components/product_card";
import { ProductInfo } from "#ressources/views/components/product_info";

interface Props {
    user: User,
    product: Product
}

export function ProductPage(props: Props) {
    const { user, product } = props;

    return (
        <ShopLayout
            title={ product.name }
            navigation={
                <ShopHeader loggedUser={user} userUrl={"shop/profile"} />
            }
            main={
            <ProductInfo product={product} />
        }
            footer={
                <div class="text-black">
                    Copyright © 2024 All rights reserved - CrazyVg
                </div>
            }
        />
    );
}
