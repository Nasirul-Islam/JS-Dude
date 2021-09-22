import React from 'react';
import JsConfusing from '../JsConfusing/JsConfusing';
import Tutorial from '../Tutorial/Tutorial';
import './MainLeft.css'

const MainLeft = () => {
    return (
        <div className="mainLeft">
            <JsConfusing></JsConfusing>
            <Tutorial></Tutorial>
        </div>
    );
};

export default MainLeft;