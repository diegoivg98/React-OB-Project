import React from "react";
import {
  login,
  getAllUsers,
  getAllPagedUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "../../services/axiosCRUDService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AxiosCRUDExample = () => {
  const initalCredentials = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure");
        }
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
        sessionStorage.removeItem("token");
      })
      .finally(() => console.log("Login done"));
  };

  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
      });
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
      });
  };

  const obtainUserByID = (id) => {
    getUserByID(id)
      .then((response) => {
        alert(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
      });
  };

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error("User not created");
        }
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
      });
  };

  const updateUser = (id, name, job) => {
    updateUserByID(id, name, job)
      .then((response) => {
        alert(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
      });
  };

  const deleteUser = (id) => {
    deleteUserByID(id)
      .then((response) => {
        alert(`User with ID ${id} successfully deleted`);
      })
      .catch((error) => {
        alert(`Somethin went wrong ${error}`);
      });
  };

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initalCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          authUser(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            ></Field>
            {/* Checking if the email field has an error and if it has been touched. If it
                    has an error and has been touched, it will display the error message. */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            ></Field>

            {/* Checking if the password field has an error and if it has been touched. If
                    it has an error and has been touched, it will display the error message.  */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
      <div>
        <button onClick={obtainAllUsers}>get All Users with Axios</button>
        <button onClick={() => obtainAllPagedUsers(1)}>
          get All Paged Users with Axios
        </button>
        <button onClick={() => obtainUserByID(1)}>get User 1</button>
        <button onClick={() => createNewUser("morpheus", "leader")}>
          Create User
        </button>
        <button onClick={() => updateUser(1, "morpheus", "Developer")}>
          Update User
        </button>
        <button onClick={() => deleteUser(1)}>
          Delete User
        </button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
