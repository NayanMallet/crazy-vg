import { Children } from "@kitajs/html";

type Props = {
    id?: string,
    checkbox?: boolean,
    thumbnailUrl?: string,
    name: string,
    property: string,
    badges?: string[],
    actions?: Children,
    otherData?: string[],
}

export function ListItem(props: Props) {

    return (
        <tr>
            <th>
                {props.checkbox ? (
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                ) : <span>{props.id}</span>}
            </th>

            <td>
                <div class="flex items-center gap-3">
                    {props.thumbnailUrl && (
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={props.thumbnailUrl}
                                    alt={props.name} />
                            </div>
                        </div>
                    )}
                    <div>
                        <div class="font-bold">{props.name}</div>
                        {props.badges && (props.badges.map(badge => (
                            <span class="badge badge-ghost badge-sm">{badge}</span>)))}
                    </div>
                </div>
            </td>

            <td>
                {props.property}
            </td>

            {props.otherData && (
                props.otherData.map((data) => (
                    <td>{data}</td>
                ))
            )}

            {
                props.actions && (
                    <td>
                        <div class="flex items-center gap-2">
                            {props.actions}
                        </div>
                    </td>
                )
            }
        </tr>
    );
}
