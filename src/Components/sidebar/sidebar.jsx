import React from 'react';
import './sidebar.scss';

function Sidebar({active}) {
    return (
        <div className={(active)?'sidebar activeSidebar':'sidebar'}>
            <ul>
                <li><a href="#">FEATURES</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
                <li><a href="#">TEAM</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;