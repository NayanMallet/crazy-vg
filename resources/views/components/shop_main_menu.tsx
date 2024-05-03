import Product from "#models/product"

type Props = {
    products: Product[],
    bgImage?: string
}



export function ShopMainMenu(props: Props = {}) {
    const { products, bgImage } = props;
    
    const backgroundImageStyle = bgImage ?{
        backgroundImage: 'url("' + props.bgImage + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } : {};
    
    return (
        <main class="flex flex-col items-center jusitfy-center w-full !overflow-y-scroll">
            <div class="w-screen h-screen" style={backgroundImageStyle}>

            </div>
            <div class="w-full h-10">
                <p class="w-full h-full flex bg-black color-white justify-center items-center">Catalogue</p>
            </div>
            <div class="w-full h-20"></div>
        </main>
    );
}

