import { UsersList } from "#components/users_list";
import { Layout } from '#layouts/app'
import User from "#models/user";

type Props = {
    loggedUser: User
}

export async function Admin(props: Props) {
    const { loggedUser } = props
    const users = await User.all()

    return (
        <Layout
            title={'Home Page'}
            children={
                <div class="h-full flex justify-center items-center">
                    <div class="space-x-4 w-7/12 items-center">
                        <h1 safe class="card-title">Hey {loggedUser.firstName} !</h1>
                        <UsersList users={users} />
                    </div>
                </div>
            }
        />
    )
}
