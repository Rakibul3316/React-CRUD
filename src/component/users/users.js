import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    websitle: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <Link className="btn btn-primary my-5" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name} </li>
        <li className="list-group-item">user name: {user.username} </li>
        <li className="list-group-item">email: {user.email} </li>
        <li className="list-group-item">phone: {user.phone} </li>
        <li className="list-group-item">website: {user.website} </li>
      </ul>
    </div>
  );
};

export default User;
