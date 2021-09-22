import React from 'react';
import './RecentVideos.css'

const RecentVideos = () => {
    return (
        <div className="recentVideos mar">
            <h3>Recent Videos</h3>
            <ul className="listStyle">
                <li>15+ tricks for dev tool</li>
                <li>Understanding this</li>
                <li>be expert in JS Array</li>
                <li>How Browsers works in 4 min</li>
            </ul>
            <button className="Btn">More on youtube</button>
        </div>
    );
};

export default RecentVideos;