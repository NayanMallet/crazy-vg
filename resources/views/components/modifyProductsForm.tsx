export function AddProductForm() {
    // const { product } = props;

    return (
        <div>
            <button class="btn btn-primary" onclick="document.getElementById('my_modal_4').showModal()"></button>
            <dialog id="my_modal_4" class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">Add a new Product</h3>
                    <form action="/products/create" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_csrf" value="{{ csrfToken }}" />
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
                            <label for="thumbnail_url">Image Url</label>
                            <input type="text" name="thumbnail_url" id="thumbnail_url" class="form-control" required />
                        </div>
                        <div>
                            <label for="average_rating">Average Rating</label>
                            <input type="number" name="average_rating" id="average_rating" class="form-control" required />
                        </div>
                        <div>
                            <label for="activation_code">Activation Code</label>
                            <input type="text" name="activation_code" id="activation_code" class="form-control" required />
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