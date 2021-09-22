import React from 'react';
import './HeadContent.css'

const HeadContent = () => {
    return (
        <div className="headContent">
            <div className="container headMain">
                <h1>Exclusive React Workshop for <br /> beginners!</h1>
                <p>Once in a year opportunity to learn and build your
                    <a href="#"> first React app</a>
                </p>
                <button>Learn more</button>
            </div>
        </div>
    );
};

export default HeadContent;