import React from 'react';
import InviteTalk from '../InviteTalk/InviteTalk';
import RecentTalks from '../RecentTalks/RecentTalks';
import RecentVideos from '../RecentVideos/RecentVideos';
import Training from '../Training/Training';
import './MainRight.css'

const MainRight = () => {
    return (
        <div className="mainRight">
            <Training></Training>
            <RecentVideos></RecentVideos>
            <RecentTalks></RecentTalks>
            <InviteTalk></InviteTalk>
        </div>
    );
};

export default MainRight;