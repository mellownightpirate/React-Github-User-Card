import React from 'react';

const UserCard = (props) =>{

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.login}</p>
            <p>{props.email}</p>
            <img src = {props.avatar} alt="GitHub Avatar"/>
        </div>
    );
}

export default UserCard; 