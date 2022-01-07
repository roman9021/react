import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBullhorn, faComments, faMagic, faUsers} from '@fortawesome/free-solid-svg-icons';
import './FeaturesCard.jsx.scss';

function FeaturesCard({icon}) {
    console.log(icon);
    return (
        <div className={'FeaturesCard'}>
            {/*<FontAwesomeIcon icon={faCoffee} />*/}
            <div className="FeaturesCard__icon">
                {icon == 'comments'&&<FontAwesomeIcon icon={faComments}/>}
                {icon == 'bullhorn'&&<FontAwesomeIcon icon={faBullhorn}/>}
                {icon == 'group'&&<FontAwesomeIcon icon={faUsers}/>}
                {icon == 'magic'&&<FontAwesomeIcon icon={faMagic}/>}
            </div>
            <div className="FeaturesCard__title">
                <h3>Lorem ipsum</h3>
            </div>
            <div className="FeaturesCard__text">
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
            </div>
        </div>
    );
}

export default FeaturesCard;