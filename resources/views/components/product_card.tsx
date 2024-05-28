import Product from "#models/product";
import { Rating } from "#components/rating";
import { Html } from "@kitajs/html";

type Props = {
    product: Product
}

export function ProductCard(props: Props) {
    const { product } = props;

    return (
        <div class="card w-96 bg-base-100 shadow-xl mt-4 mb-1">
            <figure class="h-64 overflow-hidden">
                <img src={product.thumbnailUrl} alt={product.name} class="object-cover w-full h-full" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    <a class="hover:underline cursor-pointer" href={"/products/" + product.id}>
                        {product.name}
                    </a>
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{product.description}</p>
                <div class="card-actions justify-between items-center">
                    <Rating product={product} />
                    <span class="badge badge-secondary">Price: ${product.price}</span>
                </div>
            </div>
        </div>

    );
}
