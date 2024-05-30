import { ListItem } from "#components/list_item";
import type User from "#models/user";

type Props = {
    users: User[]
}

export function UsersList(props: Props) {
    const { users } = props;

    return (
        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {users.map((user) => (
                    <ListItem
                        checkbox={false}
                        name={`${user.firstName} ${user.lastName ?? ""}`}
                        property={user.email}
                        badges={user.isAdmin ? ["Admin"] : []}
                        thumbnailUrl={user.avatarUrl ?? undefined}
                        otherData={[user.balance.toString()]}
                        actions={
                        <div class="flex gap-2 p-5">
                            <button class="btn btn-primary btn-sm btn-square btn-outline p-2" onclick="document.getElementById('my_modal_4').showModal()">
                                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                            <dialog id="my_modal_4" class="modal">
                                <div class="modal-box w-11/12 max-w-5xl flex flex-col gap-2">
                                    <h3 class="font-bold text-lg">Modify Users</h3>
                                    <form class="flex gap-5 flex-col items-center" action={`/users/update/${user.id}`} method="POST" enctype="multipart/form-data">
                                        <input type="hidden" name="_csrf" value="{{ csrfToken }}" class="" />
                                        <div class="flex flex-col gap-2">
                                            <label for="first_name">First Name</label>
                                            <input type="text" name="first_name" id="firs_name" value={user.firstName} class="form-control bg-gray-100 rounded-lg text-black p-1" />
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <label for="last_name">Last Name</label>
                                            <input type="text" name="last_name" id="last_name" value={user.lastName} class="form-control bg-gray-100 rounded-lg text-black p-1" />
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" value={user.email} class="form-control bg-gray-100 rounded-lg text-black p-1" required />
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <label for="password">Password</label>
                                            <input type="password" name="password" value={user.password} id="thumbnail_url" class="form-control bg-gray-100 rounded-lg text-black p-1" />
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <label for="is_admin">Is Admin</label>
                                            <select name="is_admin" id="is_admin" class="form-control bg-gray-100 rounded-lg text-black p-1" required>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>

                                        <button type="submit" class="btn btn-primary">Modify</button>
                                        
                                    </form>
                                    <div class="modal-action">
                                        <form action={`/users/delete/${user.id}`} method="POST" enctype="multipart/form-data">
                                            <button type="submit" class="btn btn-danger">Delete</button>
                                        </form>
                                        <form method="dialog">
                                                <button class="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                            {!user.isAdmin ? (
                                <button class="btn btn-sm btn-square btn-outline btn-error p-2">
                                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                                    </svg>
                                </button>
                            ) : ''}
                        </div>}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};
