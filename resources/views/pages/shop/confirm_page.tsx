// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
import Product from "#models/product";
import { ConfirmOrder } from "#ressources/views/components/confirm_order";

interface Props {
    user: User,
    product: Product
}

export function ConfirmPage(props: Props) {
    const { user, product } = props;

    return (
        <ShopLayout
            title={ product.name }
            navigation={
                <div></div>
            }
            main={
            <ConfirmOrder product={product} />
        }
            footer={
                <div class="text-black">
                    Copyright © 2024 All rights reserved - CrazyVg
                </div>
            }
        />
    );
}
