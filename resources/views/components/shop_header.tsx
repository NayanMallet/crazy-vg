import User from "#models/user";

type Props = {
    loggedUser: User;
    userUrl: string;
    isAbsolute?: boolean;
}

export function ShopHeader(props: Props) {
    const { loggedUser, userUrl, isAbsolute } = props;

    return (
        <main class={`navbar bg-transparent top-0 flex w-full flex-row items-center justify-between ${isAbsolute ? 'absolute' : ''}`}
              x-data="{ toggleOn: false }">

            <div class="flex gap-2">
                <label class="btn btn-circle swap swap-rotate" x-on="toggleOn = true" >
                    {/* Hamburguer menu icon for mobile */}
                    <input type="checkbox" />
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                         viewBox="0 0 512 512">
                        <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
            </div>

            {/* Affichage du menu utilisateur */}
            <div class="flex gap-2">

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="h-12 rounded-full">
                            <img alt="avatar"
                                 src={loggedUser.avatarUrl ?? "https://i.pravatar.cc/500?img=32"} />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                        <li>
                            <a class="justify-between" href={userUrl}>
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="/logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
