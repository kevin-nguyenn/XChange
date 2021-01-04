import React, { useEffect, useState } from 'react';
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
import db from '../firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => (
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            ))
        );
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Pragmatic Programer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
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
            <SideBarOption Icon={Add} addChannelOption title="Add Channel" />

            {channels.map((channel) => (
                <SideBarOption title={channel.name} id={channel.id}/>
            ))}
        </div>
    );
}

export default Sidebar;