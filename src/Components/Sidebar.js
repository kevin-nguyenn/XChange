import React from 'react';
import '../Stylesheets/Sidebar.css';
import SideBarOption from './SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import { Add, Apps, 
    BookmarkBorder, 
    Drafts, 
    ExpandLess, 
    ExpandMore, 
    FileCopy, 
    Inbox, 
    InsertComment, 
    PeopleAlt 
} from '@material-ui/icons/';

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
            </div>
            <SideBarOption Icon={InsertComment} title="Threads" />
            <SideBarOption Icon={Inbox} title="Mentions & reactions" />
            <SideBarOption Icon={Drafts} title="Saved Items" />
            <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
            <SideBarOption Icon={FileCopy} title="People & user groups" />
            <SideBarOption Icon={PeopleAlt} title="Apps" />
            <SideBarOption Icon={Apps} title="FileBrowser" />
            <SideBarOption Icon={ExpandLess} title="Show less" />
            <hr/>
            <SideBarOption Icon={ExpandMore} title="Channels" />
            <hr/>
            <SideBarOption Icon={Add} title="Add Channel" />
        </div>
    );
}

export default Sidebar;