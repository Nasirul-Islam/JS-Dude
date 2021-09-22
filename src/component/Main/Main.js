import React from 'react';
import MainLeft from '../MainLeft/MainLeft';
import MainRight from '../MainRight/MainRight';
import './Main.css'

const Main = () => {
    return (
        <div className="mainContainer">
            <div className="mainInner">
                <MainLeft></MainLeft>
                <MainRight></MainRight>
            </div>
        </div>
    );
};

export default Main;