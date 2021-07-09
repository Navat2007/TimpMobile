import React from 'react';

const Index = () => {
    return (
        <div>
            <h1>Index landing</h1>
            <button onClick={() => {
                this.props.history.push("/login");
            }}>Login</button>
        </div>
    )
}

export default Index;