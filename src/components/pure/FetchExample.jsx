import React, { useState, useEffect } from "react";
import {
  getAllPagedUser,
  getAllUser,
  getUsersDetails,
  login
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setselectedUser] = useState(null);
  const [totalUsers, settotalUsers] = useState(12);
  const [UsersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(2);

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUser()
      .then((response) => {
        console.log("All user", response.data);
        setUsers(response.data);
        settotalUsers(response.total);
        setUsersPerPage(response.per_page);
        setPages(response.total_pages);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users");
        console.table(users);
      });
  };

  const obtainPagedUsers = (page) => {
    getAllPagedUser(page)
      .then((response) => {
        console.log("All user", response.data);
        setUsers(response.data);
        settotalUsers(response.total);
        setUsersPerPage(response.per_page);
        setPages(response.total_pages);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users");
        console.table(users);
      });
  };

  const obtainUsersDetails = (id) => {
    getUsersDetails(id)
      .then((response) => {
        console.log("All user", response.data);
        setselectedUser(response.data);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users");
        console.table(selectedUser);
      });
  };

  const authUser = () => {
    login('eve.holt@reqres.in', 'cityslicka')
      .then((response) => {
        console.log('TOKEN', response.token)
        sessionStorage.setItem('token', response.token)
      })
      .catch((error) => {
        alert(`Error while login user: ${error}`);
      })
      .finally(() => {
        console.log("Ended login use");
        console.table(selectedUser);
      })
  }

  return (
    <div>

      <button onClick={authUser}>Auth User</button>

      <h2>Users:</h2>
      {users.map((user, index) => (
        <p key={index} onClick={() => obtainUsersDetails(user.id)}>
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {UsersPerPage} users of {totalUsers} in total
      </p>
      <button onClick={() => obtainPagedUsers(1)}>1</button>
      <button onClick={() => obtainPagedUsers(2)}>2</button>
      <div>
        {selectedUser != null ? (
          <div>
            <h3>User Details</h3>
            <p>Name:{selectedUser.first_name}</p>
            <p>Last Name:{selectedUser.last_name}</p>
            <p>Email:{selectedUser.email}</p>
            <img
              alt="avatar"
              src={selectedUser.avatar}
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        ) : (
          <h6>Please click on a User to see its details</h6>
        )}
      </div>
    </div>
  );
};

export default FetchExample;
