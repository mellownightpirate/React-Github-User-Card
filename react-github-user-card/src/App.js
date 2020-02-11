import React, { Component } from "react";
import Axios from "axios";
import UserCard from "./Components/UserCard";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ``,
      email: ``,
      login: ``,
      avatar: ``,
      followers: []
    };
  }

  componentDidMount() {
    Axios.get(`https://api.github.com/users/mellownightpirate`).then(res => {
      // console.log(res.data.name);
      this.setState({
        name: res.data.name,
        email: res.data.email,
        login: res.data.login,
        avatar: res.data.avatar_url
      });
    });
    Axios.get(`https://api.github.com/users/mellownightpirate/followers`).then(
      res => {
        // console.log(res);
        this.setState({
          followers: res.data
        });
      }
    );
  }

  render() {
    return (
      <div className="AppHome">
        <div className="ProfileCard">
        <h1>Amin's GitHub UserCard</h1>
        {/* {console.log(this.state)} */}
        <UserCard
          name={this.state.name}
          email={this.state.email}
          login={this.state.login}
          avatar={this.state.avatar}
        />
        </div>
        {this.state.followers.map(follower => {
          return (
            <div className="Followers">
              <img src={follower.avatar_url} alt="GitHub Avatar" />
              <div className="Creds">
                <p>Name: {follower.name}</p>
                <p>Username: {follower.login}</p>
                <p>{follower.html_url}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
