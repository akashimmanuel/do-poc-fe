import React, { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {
  const [user, setUser] = useState([]);

  const getusers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <div>
      {user.length === 0 && <h1>Loading...</h1>}
      {user?.map((user) => (
        <p>{(user as any).name}</p>
      ))}
    </div>
  );
};
