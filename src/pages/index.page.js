import React from 'react';

const IndexPage = (props) => {
    return (
        <div>
            <h1>Index landing</h1>
            <button onClick={() => {
                props.history.push("/login");
            }}>Login</button>
        </div>
    )
}

export default IndexPage;