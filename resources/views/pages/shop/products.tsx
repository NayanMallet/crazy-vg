// import { Home, User as UserIcon, Recipe, Wallet } from "#components/icons";
import { ShopLayout } from "#layouts/shop_layout";
import type User from "#models/user";
import { ShopHeader } from "#components/shop_header";
import { ShopMainMenu } from "#components/shop_main_menu";
import Product from "#models/product";

interface Props {
    user: User,
    products: Product
}

export function Products(props: Props) {
    const { user, products } = props;
    // const {user } = props;
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
            <ShopHeader loggedUser={user} userUrl={"shop/profile"} isAbsolute={true}/>
            }
            main={
                <ShopMainMenu products={products} user={user} bgImage={'images/[BACKGROUND]crazy_vg.webp'}></ShopMainMenu>

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

// products={
//     [
//         {
//             id: '1',
//             name: 'FIFA 22',
//             description: 'La nouvelle version de FIFA',
//             price: 69.99,
//             thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/fifa-22-ps4-psn-account-account-global-i10000263306047/6a3e5c2f2d144e9c9135a112',
//             averageRating: 4.5,
//             activationCode: 'FIFA22-2024',
//             createdAt: new Date(),
//             updatedAt: new Date()
//         },
// {
//     id: '2',
//         name: 'Cyberpunk 2077',
//     description: 'Le jeu de l\'année',
//     price: 49.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/cyberpunk-2077-pc-steam-account-account-global-i10000156543020/5d64d16146177c08243974c2',
//     averageRating: 4.5,
//     activationCode: 'CYBERPUNK2077-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     id: '3',
//         name: 'Assassin\'s Creed Valhalla',
//     description: 'Le jeu de l\'année',
//     price: 59.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/assassins-creed-valhalla-pc-steam-account-account-global-i10000195319070/5eafb2137e696c3d7e0ba4f2',
//     averageRating: 3.5,
//     activationCode: 'ASSASSINSCREEDVALHALLA-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     id: '4',
//         name: 'FIFA 22',
//     description: 'La nouvelle version de FIFA',
//     price: 69.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/fifa-22-ps4-psn-account-account-global-i10000263306047/6a3e5c2f2d144e9c9135a112',
//     averageRating: 4.5,
//     activationCode: 'FIFA22-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     id: '5',
//         name: 'Cyberpunk 2077',
//     description: 'Le jeu de l\'année',
//     price: 49.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/cyberpunk-2077-pc-steam-account-account-global-i10000156543020/5d64d16146177c08243974c2',
//     averageRating: 4.5,
//     activationCode: 'CYBERPUNK2077-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     id: '6',
//         name: 'Assassin\'s Creed Valhalla',
//     description: 'Le jeu de l\'année',
//     price: 59.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/assassins-creed-valhalla-pc-steam-account-account-global-i10000195319070/5eafb2137e696c3d7e0ba4f2',
//     averageRating: 3.5,
//     activationCode: 'ASSASSINSCREEDVALHALLA-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     id: '7',
//         name: 'FIFA 22',
//     description: 'La nouvelle version de FIFA',
//     price: 69.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/fifa-22-ps4-psn-account-account-global-i10000263306047/6a3e5c2f2d144e9c9135a112',
//     averageRating: 4.5,
//     activationCode: 'FIFA22-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     id: '8',
//         name: 'Cyberpunk 2077',
//     description: 'Le jeu de l\'année',
//     price: 49.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/cyberpunk-2077-pc-steam-account-account-global-i10000156543020/5d64d16146177c08243974c2',
//     averageRating: 4.5,
//     activationCode: 'CYBERPUNK2077-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// },
// {
//     id: '9',
//         name: 'Assassin\'s Creed Valhalla',
//     description: 'Le jeu de l\'année',
//     price: 59.99,
//     thumbnailUrl: 'https://images.g2a.com/300x400/1x1x1/assassins-creed-valhalla-pc-steam-account-account-global-i10000195319070/5eafb2137e696c3d7e0ba4f2',
//     averageRating: 3.5,
//     activationCode: 'ASSASSINSCREEDVALHALLA-2024',
//     createdAt: new Date(),
//     updatedAt: new Date()
// }
// ]
// }
