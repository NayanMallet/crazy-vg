import type Product from "#models/product";

type Props = {
    product: Product
}

export function AddProductForm(props: Props) {
    const { product } = props;

    return (
        <div>
            <button class="btn btn-primary" onclick="document.getElementById('my_modal_4').showModal()">Add Product</button>
            <dialog id="my_modal_4" class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">Add a new Product</h3>
                    <form action="/products/create" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_csrf" value="{{ csrfToken }}"/>
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
                            <label for="thumbnail">Image Url</label>
                            <input type="text" name="thumbnail" id="thumbnail" class="form-control" required />
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
                    <div class="modal-action">
                        <form method="dialog">
                            <button class="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
