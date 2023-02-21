import React, { useState, useEffect } from "react";
import {getAllPagedUser,getAllUser,getUsersDetails,} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setselectedUser] = useState({});
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

  return (
    <div>
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
        <h3>User Detail</h3>
        {selectedUser && (
          <div>
            <p>Name:{selectedUser.first_name}</p>
            <p>Last Name:{selectedUser.last_name}</p>
            <p>Email:{selectedUser.email}</p>
            <img src={selectedUser.avatar} style={{height:'50px', width:'50px'}}></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchExample;
