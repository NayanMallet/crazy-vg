import Product from "#models/product"
import { ProductCard } from "#components/product_card";

type Props = {
    products: Product[],
    bgImage?: string
}

export function ShopMainMenu(props: Props) {
    const { products, bgImage } = props;

    const backgroundImageStyle = bgImage ?{
        backgroundImage: 'url("' + props.bgImage + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } : {};

    return (
        <main class="flex flex-col items-center jusitfy-center w-full h-fit">
            <div class="w-screen h-screen" style={backgroundImageStyle}></div>
            <div class="w-full bg-white">
                <p class="w-full h-20 text-3xl flex bg-black color-white justify-center items-center">Catalogue</p>
                <div class="flex flex-wrap justify-around overflow-x-scroll" style={"height: calc(100vh - 5rem);"}>
                    {products.map(product => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </div>

        </main>
    );
}

