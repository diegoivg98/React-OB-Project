import React, { useState, useEffect } from "react";
import { getRandomUser } from "../../services/axios-service";

const AxiosExample = () => {
  const [user, setUser] = useState(null);

  const obtainUser = () => {
    getRandomUser()
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.results[0]);
        }
      })
      .catch((error) => {
        alert(`Somethin went wrong: ${error}`);
      });
  };

  useEffect(() => {
    obtainUser();
  }, []);

  return (
    <div>
      <h1>Axios Example</h1>
      {user != null ? (
        <div>
          <img alt="avatar" src={user.picture.large} />
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <div>
          <p>Generate a new User</p>
          <button onClick={obtainUser}>Random User</button>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;
