import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/* A validation schema for the form. */
const loginSchema = Yup.object().shape({
    /* Validating the email field. */
    email: Yup.string()
        .email("Invalid Email Format")
        .required("Email is required"),
    /* Validating the password field. */
    password: Yup.string()
        .required("Password is required")
});

/* Setting the initial values of the form. */
const LoginFormik = () => {
    const initalCredentials = {
        email: "",
        password: "",
    };

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initalCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem("credentials", values);
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
        </div>
    );
};

export default LoginFormik;
