import React, {useEffect, useRef, useState} from 'react';
import './header.scss';
import Sidebar from "./Components/sidebar/sidebar";

function Header({MenuActive,SetMenuActive}) {
    let [count,setCount] = useState(true);
    let burgerButton = useRef();
    function BBActive (){
        if(count){
            document.querySelector('body').style.overflow='hidden';
            burgerButton.current.classList.add('activeBB');
        }else{
            document.querySelector('body').style.overflow='auto';
            burgerButton.current.classList.remove('activeBB');
        }
        setCount(!count);
        console.log(count);
        SetMenuActive(!MenuActive);
    }


    return (
        <header className={'header w-100'}>
            <div className="wrapperHeader">
                <div className="logo">
                    <h4 className={'text-uppercase fw-bold'}>React Landing Page</h4>
                </div>
                <nav className="navbar">
                    <a href="#">FEATURES</a>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">GALLERY</a>
                    <a href="#">TESTIMONIALS</a>
                    <a href="#">TEAM</a>
                    <a href="#">CONTACT</a>
                </nav>
                <div className="burger-section" onClick={BBActive}>
                    <div className="burgerButton" ref={burgerButton}>
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;