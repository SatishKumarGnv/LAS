import { Formik, FormikProps } from "formik";
import * as React from "react";

import * as yup from "yup";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { ILoginState } from "../Container/LoginState";

export interface ILoginFormValues {
  readonly password: string;
  readonly username: string;
}

const LogIn = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<ILoginFormValues>) => {
  return (
    <div className="login-card-main">
      <div className="login-card">
        <div className="login-logo-bg">
          <img src="/images/logo-crda.jpg" className="login-logo" />
        </div>
        <h2 className="login-heading">Land Allocation System</h2>

        <h5 className="login-text">Welcome back, please login.</h5>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="user-input ">
            <div className="password-img">
              <img src="/images/usericon.png" />
              <TextField
                placeholder="Username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>
            {/* text-align-popup */}
            <div className="error-msg-login">
              {touched.username && errors.username && (
                <div>{errors.username}</div>
              )}
            </div>
          </div>

          <div className="password-input">
            <div className="password-img">
              <img src="/images/password.png" />
              <TextField
                placeholder="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>

            <div className="error-msg-login">
              {touched.password && errors.password && (
                <div>{errors.password} </div>
              )}
            </div>
          </div>

          <div className="forgot-container">
            <a href="/forgotPassword" className="forgot-text">
              Forgot your password?
            </a>
          </div>
          <Button className="submit-btn" type="submit">
            LogIn
          </Button>
        </form>
      </div>
    </div>
    // </div>
  );
};
export const modelSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .min(6)
    .max(14),
  username: yup.string().required()
});

interface ILoginFormProps {
  onLogIn(values: ILoginFormValues, errors: any): void;
}

const LoginForm = (props: ILoginFormProps & ILoginState) => (
  <Formik
    validationSchema={modelSchema}
    initialValues={{
      password: "",
      username: ""
    }}
    onSubmit={props.onLogIn}
    render={LogIn}
  />
);

export default LoginForm;
