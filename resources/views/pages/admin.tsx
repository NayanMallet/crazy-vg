// import { UsersList } from "#components/users_list";
import { AdminLayout } from '#layouts/admin_layout';
import { AdminMenu } from "#components/admin_menu";
import { AdminHeader } from "#components/admin_header";
import { AdminMainMenu } from "#components/admin_main_menu";
import User from "#models/user";


type Props = {
    loggedUser: User;
}

export async function Admin(props: Props) {
    const { loggedUser } = props
    // const users = await User.all()

    return (
        <AdminLayout
            title={'Admin Page'}
            navigation={<AdminMenu appIcon={"images/[LOGO]crazy_vg.webp"} />}
            header={<AdminHeader pageTitle={"Hey " + loggedUser.firstName + " !"} loggedUser={loggedUser} />}
            main={<AdminMainMenu/>}
        />
    )
}

// <div class="h-full w-full flex justify-center items-center">
//     <div class="space-x-4 w-7/12 items-center">
//         <h1 safe class="card-title">Hey {loggedUser.firstName} !</h1>
//         <UsersList users={users} />
//     </div>
// </div>
