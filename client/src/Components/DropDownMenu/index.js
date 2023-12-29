import React from 'react'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Dropdown } from 'antd';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

const items = [
    {
        key: '1',
        label: (
            <div className="options" >
                <GroupsRoundedIcon style={{ color: "var(--dark)" }} />
                <div>New Group</div>
            </div>
        ),
    },
    {
        key: '2',
        label: (
            <div className="options">
                <SettingsRoundedIcon style={{ color: "var(--dark)" }} />
                <div>Setting</div>
            </div>
        ),
    },
    {
        key: '3',
        label: (
            <>
                <div className="options" >
                    <LogoutRoundedIcon style={{ color: "var(--dark)" }} />
                    <div>Logout</div>
                </div>
            </>
        ),
    },
];
export default function DropDownMenu() {
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomRight"
                arrow
            >
                <MoreVertRoundedIcon />
            </Dropdown>
        </>
    )
}
