import Product from "#models/product";
import { Rating } from "#components/rating";
import { Html } from "@kitajs/html";

type Props = {
    product: Product
}

export function ProductCard(props: Props) {
    const { product } = props;

    // Calcul du nombre d'étoiles pleines et à moitié
    const fullStars = Math.floor(product.averageRating);
    const hasHalfStar = product.averageRating - fullStars >= 0.5;

    return (
        <div class="card w-96 bg-base-100 shadow-xl mt-4">
            <figure class="h-64 overflow-hidden">
                <img src={product.thumbnailUrl} alt={product.name} class="object-cover w-full h-full" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    {product.name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{product.description}</p>
                <div class="card-actions justify-between">
                    <Rating product={product} />
                    <span class="badge badge-secondary">Price: ${product.price}</span>
                </div>
            </div>
        </div>
    );
}
