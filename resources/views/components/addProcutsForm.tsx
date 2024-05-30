import type Product from "#models/product";

type Props = {
    product: Product
}

export function AddProductForm(props: Props) {
    const { product } = props;

    return (
        <form action="/products" method="POST">
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control" required />
            </div>
            <div>
                <label for="price">Price</label>
                <input type="number" name="price" id="price" class="form-control" required />
            </div>
            <div>
                <label for="description">Description</label>
                <textarea name="description" id="description" class="form-control" required></textarea>
            </div>
            <div>
                <label for="thumbnail">Thumbnail</label>
                <input type="file" name="thumbnail" id="thumbnail" class="form-control" required />
            </div>
            <div>
                <label for="price">Price</label>
                <input type="number" name="price" id="price" class="form-control" required />
            </div>
            <div>
                <label for="averageRating">Average Rating</label>
                <input type="number" name="averageRating" id="averageRating" class="form-control" required />
            </div>
            <div>
                <label for="activationCode">Activation Code</label>
                <input type="text" name="activationCode" id="activationCode" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    );
}
