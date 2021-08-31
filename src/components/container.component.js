import React from 'react';

const Container = ({children}) => {
    return (
        <div className="o-container">
            <div className="o-container__wrap">
                {children}
            </div>
        </div>
    );
};

export default Container;