import React from 'react';
import {useHistory} from "react-router";

const Header = () => {

    const router = useHistory();

    return (
        <div style={{backgroundColor: 'gray'}}>
            <button onClick={() => router.push('/logout')}>Выход</button>
        </div>
    );
};

export default Header;