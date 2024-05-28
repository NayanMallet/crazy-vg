import Product from "#models/product";
import HtmlInputTag = JSX.HtmlInputTag;

type Props = {
    product: Product
    isClickable?: boolean
}

export function Rating(props: Props) {
    const { product, isClickable} = props;

    const rate = product.averageRating;
    const hasHalfStarIndex = Math.floor((rate/5)*10) - 1;

    const stars = [
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-1" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-2" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-1" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-2" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-1" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-2" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-1" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-2" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-1" />,
        <input type="radio" name={product.id} class="bg-green-500 mask mask-star-2 mask-half-2" />,
    ]

    stars[hasHalfStarIndex] =
        (stars[hasHalfStarIndex] as string).replace('/>', 'checked />');

    if (!isClickable) {
        for (let i = 0; i < stars.length; i++) {
            stars[i] = (stars[i] as string).replace('/>', 'disabled />');
        }
    }

    return (
        <div class={"rating rating-md rating-half " + (isClickable ? "" : "pointer-events-none")}>
            {stars}
        </div>
    );
}
