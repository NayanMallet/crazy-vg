import Product from "#models/product";
import { Html } from "@kitajs/html";

type Props = {
    product: Product
}



export function ConfirmOrder({ product }: Props) {

    return (
            
        <div class="flex flex-col w-full gap-5 lg:flex-row justify-center items-center lg:items-start p-4">
            <img class="h-1/3 lg:my-auto lg:h-2/3" src={product.thumbnailUrl} alt={product.name} />
            <div class="divider w-52 lg:divider-horizontal lg:!h-2/3 self-center"></div>
            <div class="flex flex-col gap-2 items-center lg:items-start lg:h-2/3 lg:my-auto">
                <h1 class="text-5xl font-semibold">Thanks For Your Order !</h1>
                <h1 class="text-3xl font-semibold">{product.name}</h1>
                <h3>{product.description}</h3>
                <h1 class="text-lg">{product.price} €</h1>
                <h3>There is your Activate Code</h3>
                    <div class="bg-white p-4 rounded-lg shadow-lg w-2/3">
                        <input type="text" class="text-lg text-center bg-white text-black border-none focus:outline-none flex-grow w-full" value={product.activationCode} />
                    </div>
            </div>
        </div>

    );
}
