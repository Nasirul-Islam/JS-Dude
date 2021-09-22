import React, { useEffect, useState } from 'react';
import SingleTutorial from '../SingleTutorial/SingleTutorial';
import './Tutorial.css'
import tutorialdata from '../../tutorials.json'

const Tutorial = () => {
    const [tutorials, setTutorials] = useState([]);
    useEffect(() => {
        setTutorials(tutorialdata)
    }, [])

    return (
        <div className="tutorials">
            {
                tutorials.map(tutorial => <SingleTutorial
                    key={tutorial.id}
                    tutorial={tutorial}
                ></SingleTutorial>)
            }
        </div>
    );
};

export default Tutorial;