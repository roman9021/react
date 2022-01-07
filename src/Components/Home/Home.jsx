import React from 'react';
import './Home.scss';
import Button from "../../UI/button";

function Home() {
    return (
        <div className={'home'}>
            <div className="home-flter">
                <div className="home__content">
                    <h1>WE ARE A LANDING PAGE</h1>
                    <p className={'mb-5 mt-2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum</p>
                    <Button  text={'Learn More'}/>
                </div>
            </div>
        </div>
    );
}

export default Home;