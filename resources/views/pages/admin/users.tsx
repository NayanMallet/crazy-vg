import { AdminHeader } from "#components/admin_header";
import { UsersList } from "#components/users_list";
import { AdminLayout } from "#layouts/admin_layout";

import User from "#models/user";

interface Props {
    user: User,
}

export async function Users(props: Props) {
    const { user } = props;
    const users = await User.all();

    return (
        <AdminLayout
            title={'Users'}
            navigation={<div>Users</div>}
            header={<AdminHeader pageTitle={"Hey " + user.firstName + " !"} loggedUser={user} />}
            main={
                <UsersList users={users} />
            }
        />
    );
}
