import React from 'react';
import './button.component.css';

const ButtonComponent = ({children, ...props}) => {
    return (
        <button {...props} className="button">
            {children}
        </button>
    );
};

export default ButtonComponent;