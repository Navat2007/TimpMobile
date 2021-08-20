import React from 'react';
import './modal.component.css';

const Modal = ({active, setActive, children}) => {

    return (
        <div className={active ? "a-popup" : "a-popup --hide"} onClick={() => setActive(false)}>
            <div className={"a-popup__card"} onClick={e => e.stopPropagation()}>
                <div className={"a-popup__header"}>

                </div>
                <div className={"a-popup__body"}>
                    {children}
                </div>
                <div className={"a-popup__controls"}>

                </div>
            </div>
        </div>
    );

}

export default Modal;