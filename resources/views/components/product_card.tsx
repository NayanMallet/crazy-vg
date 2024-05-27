import Product from "#models/product";
import { Html } from "@kitajs/html";

type Props = {
    product: Product
}

export function ProductCard(props: Props) {
    const { product } = props;

    const ratingPercentage = (product.averageRating / 5) * 100;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={product.thumbnailUrl} alt={product.name} />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div class="card-actions justify-end">
                    <span class="badge badge-secondary">Price: ${product.price}</span>
                    <div class="rating gap-1">
                        <input type="radio" name="rating" class="mask mask-heart bg-red-400" style={{ "--tw-radio-ring-color": "transparent" }} checked={product.averageRating >= 0.5} />
                        <input type="radio" name="rating" class="mask mask-heart bg-orange-400" style={{ "--tw-radio-ring-color": "transparent" }} checked={product.averageRating >= 1.5} />
                        <input type="radio" name="rating" class="mask mask-heart bg-yellow-400" style={{ "--tw-radio-ring-color": "transparent" }} checked={product.averageRating >= 2.5} />
                        <input type="radio" name="rating" class="mask mask-heart bg-lime-400" style={{ "--tw-radio-ring-color": "transparent" }} checked={product.averageRating >= 3.5} />
                        <input type="radio" name="rating" class="mask mask-heart bg-green-400" style={{ "--tw-radio-ring-color": "transparent" }} checked={product.averageRating >= 4.5} />
                    </div>
                </div>
            </div>
        </div>
    );
}
