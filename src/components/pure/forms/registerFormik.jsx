import React from "react";
import { User } from "../../../models/user.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER,
    };

    const registerSchema = Yup.object().shape({
        username: Yup.string()
                     .min(6, "Username too short")
                     .max(12, "Username too long")
                     .required("Username is required"),
        email: Yup.string()
                  .email("Invalid Email Format")
                  .required("Email is required"),
        role: Yup.string()
                 .oneOf([ROLES.USER,ROLES.ADMIN],'You must select a Role')
                 .required('Role is required'),
        password: Yup.string()
                     .min(8, "Password too short")
                     .required("Password is required"),

        /* Checking if the password and confirm password are the same. */
        confirm: Yup.string()
            .when("password", {
                is: (value) => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref("password")], "Password must match!"),
            })
            .required("You must confirm the password"),
    });

    const submit = (values) => {
        alert("register user");
    };

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => <Form>
                        <label htmlFor="username">Username</label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="Username"
                            type="text"
                        ></Field>
                        {/* Checking if the email field has an error and if it has been touched. If it
                        has an error and has been touched, it will display the error message. */}
                        {errors.username && touched.username && (
                            <ErrorMessage name="username" component="div" />
                        )}

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

                        <label htmlFor="confirm">Confirm Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        ></Field>
                        {errors.confirm && touched.confirm && (
                            <ErrorMessage name="confirm" component="div" />
                        )}
                        <button type="submit">Register Account</button>
                        {isSubmitting ? <p>Sending your credentials...</p> : null}
                    </Form>
                }
            </Formik>
        </div>
    );
};

export default RegisterFormik;
