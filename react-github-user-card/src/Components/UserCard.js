import React from 'react';

class UserCard extends React.Component{
 render(){

     return (
        <div>
         <p>{this.props.name}</p>
            <p>{this.props.login}</p>
            <p>{this.props.email}</p>
            <img src = {this.props.avatar} alt="GitHub Avatar"/>
               </div>
     )
}
}
export default UserCard; 