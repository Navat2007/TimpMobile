import React from 'react';
import './input.component.css';

const InputComponent = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className="input" {...props}/>
    );
});

export default InputComponent;