import React from 'react';
import '../Stylesheets/Sidebar.css';
import SideBarOption from './SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Kevin Nguyen
                    </h3>
                </div>
                <CreateIcon />
                <SideBarOption Icon={InsertCommentIcon} title="Threads" />
            </div>
        </div>
    );
}

export default Sidebar;