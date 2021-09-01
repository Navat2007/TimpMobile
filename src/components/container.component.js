import React from 'react';

const Container = ({children, ...props}) => {

    return (
        <div className="o-section" onClick={() => props.onClick ? props.onClick() : ''}>
            <div className="o-section__wrap">
                {children}
            </div>
        </div>
    );

};

export default Container;