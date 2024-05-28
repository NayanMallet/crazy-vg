// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
import { UserMenu } from "#components/user_menu";
// import Product from "#models/product";

interface Props {
    user: User,
    // products: Product
}

export function Profile(props: Props) {
    // const { user, products } = props;
    const {user } = props;

    return (
        <ShopLayout
            title={'Profile'}
            navigation={
                <ShopHeader loggedUser={user} userUrl={"shop/profile"} />
            }
            main={
                <UserMenu loggedUser={user} />
                }
            footer={
                <div class="text-black">
                    Copyright © 2024 All rights reserved - CrazyVg
                </div>
            }
        />
    );
}
