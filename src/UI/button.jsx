import React from 'react';
import './button.scss';

function Button({text}) {
    return (
            <button className={'buttonUI'}>{text}</button>
    );
}

export default Button;