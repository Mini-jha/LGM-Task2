import React from "react";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="img/loader.gif"
        alt="Loading....."
        className="Loader"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project grid">
          {console.log(user)}
          <div className="card">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
             <div className="details"> 
            <p className="email">{user.email}</p>
            <p className="id">User ID: {user.id}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;