import { Formik, FormikProps } from "formik";
import * as React from "react";

import * as yup from "yup";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export interface IForgotPasswordValues {
  readonly Email: string;
  readonly UserName: string;
  handleForgotPassword(evt: any): void;
}

const ForgotPassword = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IForgotPasswordValues>) => {
  return (
    <div className="login-card-main">
      <div className="forget-card">
        <div className="login-logo-bg">
          <img src="/images/logo-crda.jpg" className="login-logo" />
        </div>
        <h2 className="login-heading">Land Allocation System</h2>

        <h5 className="login-text">Forgot Password</h5>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="user-input ">
            <div className="password-img">
              <img src="/images/usericon.png" />
              <TextField
                placeholder="Username"
                name="UserName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.UserName}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>

            <div className="error-msg-login text-align-popup">
              {touched.UserName && errors.UserName && (
                <div>User Name Is Required </div>
              )}
            </div>
          </div>

          <div className="password-input">
            <div className="password-img">
              <img src="/images/email.png" />
              <TextField
                placeholder="Email"
                type="Email"
                name="Email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </div>

            <div className="error-msg-login text-align-popup">
              {touched.Email && errors.Email && <div>Email Is Required</div>}
            </div>
          </div>
          <br />

          <Button className="submit-btn" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export const modelSchema = yup.object().shape({
  Email: yup
    .string()
    .email()
    .required(),
  UserName: yup.string().required()
});

interface IForgotPasswordProps {
  onSubmit(values: IForgotPasswordValues, errors: any): void;
}

const ForgotPasswordForm = (
  props: IForgotPasswordProps & IForgotPasswordValues
) => (
  <Formik
    validationSchema={modelSchema}
    initialValues={{
      Email: "",
      UserName: ""
    }}
    onSubmit={props.handleForgotPassword}
    render={ForgotPassword}
  />
);

export default ForgotPasswordForm;
