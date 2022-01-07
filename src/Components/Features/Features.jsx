import React from 'react';
import './Features.scss';
import '../../App.scss';
import FeaturesCard from "./card/FeaturesCard";

function Features() {
    return (
        <div className={'Features'}>
            <div className="wrapper">
                <div className="Features__title">
                    <h2>Features</h2>
                </div>
            </div>
            <div className="Features-grid">
                <FeaturesCard icon={'comments'}/>
                <FeaturesCard icon={'bullhorn'}/>
                <FeaturesCard icon={'group'}/>
                <FeaturesCard icon={'magic'}/>
            </div>
        </div>
    );
}

export default Features;