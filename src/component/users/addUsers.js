import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Addusers = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    websitle: "",
  });

  const { name, username, email, phone, website } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    history.push("/");
  };

  return (
    <div className="container text-center">
      <div className="col-xl-8 offset-xl-2 my-4">
        <h1>Add Users</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="phone"
              className="form-control"
              placeholder="Enter Your Phonenumber"
              name="phone"
              value={phone}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Website"
              name="website"
              value={website}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Addusers;
