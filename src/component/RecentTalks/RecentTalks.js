import React from 'react';
import './RecentTalks.css'

const RecentTalks = () => {
    return (
        <div className="recentTalks mar">
            <h3>Recent Talks</h3>
            <ul className="listStyle">
                <li>Functional Programming: What, Why and How</li>
                <li>JavaScript Code Quality</li>
                <li>Angular JS for Absolute Beginners</li>
                <li>Getting started with React JS</li>
                <li>High Perf JS</li>
                <li>Are you sure, you know JavaScripts</li>
                <li>High Performance JS and CSS</li>
                <li>What's New in ES6</li>
                <li>Make Web Faster</li>
            </ul>
            <button className="Btn">speaker profile</button>
        </div>
    );
};

export default RecentTalks;