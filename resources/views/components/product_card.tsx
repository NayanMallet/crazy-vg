import Product from "#models/product";
import { Html } from "@kitajs/html";

type Props = {
    product: Product
}

export function ProductCard(props: Props) {
    const { product } = props

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product.thumbnailUrl} alt="Shoes"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    {product.name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
}
