import React from 'react';
import './test_modal.component.css';

const TestModal = ({active, setActive, children}) => {
    return (
        <div className={active ? "test-modal active" : "test-modal"} onClick={() => setActive(false)}>
            <div className="test-modal-container" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default TestModal;