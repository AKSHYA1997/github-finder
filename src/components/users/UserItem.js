import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={user.avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{user.login}</h3>
        <div>
          <a href={user.html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
