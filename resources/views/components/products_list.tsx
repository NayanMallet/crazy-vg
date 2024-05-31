import { ListItem } from "#components/list_item";
import type Product from "#models/product";
import { AddProductForm } from "#components/addProcutsForm";
import { drivers } from "@adonisjs/core/hash";

type Props = {
    products: Product[]
}


export function ProductsList(props: Props) {


    const { products } = props;

    return (
        <div class="p-5">
            <AddProductForm product={products[0]} />
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th class="text-center">Nom</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Activation Code</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                        {products.map(product => (
                            <ListItem
                                id={product.id}
                                thumbnailUrl={product.thumbnailUrl}
                                name={product.name}
                                property={product.price.toString()}
                                otherData={[product.averageRating.toString(), product.activationCode]}
                                actions={
                                    <div class="">
                                        <button class="btn btn-primary btn-sm btn-square btn-outline p-2" onclick="document.getElementById('my_modal_4').showModal()">
                                            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
                                            </svg>
                                        </button>
                                        <dialog id="my_modal_4" class="modal">
                                            <div class="modal-box w-11/12 max-w-5xl flex flex-col gap-2">
                                                <h3 class="font-bold text-lg">Modify Products</h3>
                                                <form class="flex gap-5 flex-col items-center" action={`/products/update/${product.id}`} method="POST" enctype="multipart/form-data">
                                                    <input type="hidden" name="_csrf" value="{{ csrfToken }}" class="" />
                                                    <div class="flex flex-col gap-2">
                                                        <label for="name">Name</label>
                                                        <input type="text" name="name" id="name" value={product.name} class="form-control bg-gray-100 rounded-lg text-black p-1" required />
                                                    </div>
                                                    <div class="flex flex-col gap-2">
                                                        <label for="price">Price</label>
                                                        <input type="number" name="price" id="price" value={product.price.toString()} class="form-control bg-gray-100 rounded-lg text-black p-1" required />
                                                    </div>
                                                    <div class="flex flex-col gap-2">
                                                        <label for="description">Description</label>
                                                        <textarea name="description" id="description" class="form-control bg-gray-100 rounded-lg text-black p-1" required>{product.description}</textarea>
                                                    </div>
                                                    <div class="flex flex-col gap-2">
                                                        <label for="thumbnail_url">Image Url</label>
                                                        <input type="text" name="thumbnail_url" value={product.thumbnailUrl} id="thumbnail_url" class="form-control bg-gray-100 rounded-lg text-black p-1" required />
                                                    </div>
                                                    <div class="flex flex-col gap-2">
                                                        <label for="average_rating">Average Rating</label>
                                                        <input type="float" name="average_rating" id="average_rating" value={product.averageRating.toString()} class="form-control bg-gray-100 rounded-lg text-black p-1" required />
                                                    </div>
                                                    <div class="flex flex-col gap-2">
                                                        <label for="activation_code">Activation Code</label>
                                                        <input type="text" name="activation_code" id="activation_code" value={product.activationCode} class="form-control bg-gray-100 rounded-lg text-black p-1" required />
                                                    </div>

                                                    <button type="submit" class="btn btn-primary">Modify</button>

                                                </form>
                                                <div class="modal-action">
                                                    <form action={`/products/delete/${product.id}`} method="POST" enctype="multipart/form-data">
                                                        <button type="submit" class="btn btn-danger">Delete</button>
                                                    </form>
                                                    <form method="dialog">
                                                            <button class="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                }
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
