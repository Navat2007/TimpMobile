import React, {useState, useEffect} from "react";
import queryString from 'query-string';

const Chat = ({location}) => {

    useEffect(() => {

        const data = queryString.parse(location.search);

        console.log(location.search);
        console.log(data);

    })

    return (
        <div>

        </div>
    )

}

export default Chat;