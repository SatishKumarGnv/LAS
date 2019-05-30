import { Formik, FormikProps } from "formik";
import * as React from "react";

import * as yup from "yup";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { ILoginState } from "./LandingAssetLoginState";

export interface ILoginFormValues {
  readonly password: string;
  readonly username: string;
}

const LandingLogInnerForm = ({
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
        <h2 className="login-heading">Asset Management System</h2>

        <h5 className="login-text">Welcome back, please login.</h5>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="user-input ">
            <TextField
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              InputProps={{
                disableUnderline: true
              }}
            />
          </div>

          <div className="password-input">
            <TextField
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

          <div className="forgot-container">
            <a className="forgot-text">Forgot your password?</a>
          </div>

          <Button className="submit-btn" type="submit">
            LogIn
          </Button>
        </form>
        {/* <div className="login-footer">
          <h5 className="login-footer-text">Continue as Guest </h5>
          <h5 className="login-footer-text">Application Search</h5>
        </div> */}
      </div>
    </div>
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

const LandingLoginForm = (props: ILoginFormProps & ILoginState) => (
  <Formik
    validationSchema={modelSchema}
    initialValues={{
      password: "",
      username: ""
    }}
    onSubmit={props.onLogIn}
    render={LandingLogInnerForm}
  />
);

export default LandingLoginForm;
