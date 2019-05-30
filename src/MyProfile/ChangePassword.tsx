import * as React from "react";

import Button from "@material-ui/core/Button";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import {
  Dialog,
  DialogTitle,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  IChangePasswordValues,
  ISelectFingerListProps
} from "../DefaultLayout/HomePage";

const ChangePassword = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IChangePasswordValues & ISelectFingerListProps>) => {
  return (
    <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
      <div className="white-card ">
        <div className="child-card">
          <h4>
            Current Password <span className="star">*</span>
          </h4>
          <TextField
            name="CurrentPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.CurrentPassword}
          />
          <div className="error-msg">
            {touched.CurrentPassword && errors.CurrentPassword && (
              <div> Current Password Is Required </div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>
            New Password <span className="star">*</span>
          </h4>
          <TextField
            name="NewPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.NewPassword}
          />
          <div className="error-msg">
            {touched.NewPassword && errors.NewPassword}
          </div>
        </div>
        <div className="child-card">
          <h4>
            Re Enter New Password <span className="star">*</span>
          </h4>
          <TextField
            name="ReEnterNewPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ReEnterNewPassword}
          />
          <div className="error-msg">
            {touched.ReEnterNewPassword &&
            values.NewPassword !== values.ReEnterNewPassword
              ? "Passwords Don't Match"
              : ""}
          </div>
          <div>
            {touched.ReEnterNewPassword && errors.ReEnterNewPassword && (
              <div className="error-msg">
                Re Enter New Password Is Required{" "}
              </div>
            )}
          </div>
        </div>

        <div className="title-btn">
          <Button className="save-btn" type="submit">
            Change Password
          </Button>

          {/*tslint:disable-next-line:jsx-no-lambda*/}
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={(event: any) => values.handleCancelClick(event)}
            className="save-btn"
            type="submit"
          >
            Cancel
          </Button>
        </div>
        <div className="second-card">
          <h3>BioMetric Request</h3>
        </div>
        <div className="child-card">
          <h4>
            Current Password <span className="star">*</span>
          </h4>
          <TextField
            name="CurrentPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.CurrentPassword}
          />
          <div className="error-msg">
            {touched.CurrentPassword && errors.CurrentPassword && (
              <div>Current Password Is Required </div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>
            Select Finger <span className="star">*</span>
          </h4>
          <FormControl>
            <Select
              inputProps={{
                id: "FingerId",
                name: "FingerId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
              }}
              value={values.FingerId}
            >
              {values.fingerTypeValues.map((e: any, id: number) => (
                <MenuItem
                  key={id}
                  className="select-dropdown-bottom"
                  value={e.FingerId}
                >
                  {e.FingerName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="title-btn">
          <Button
            className={
              values.FingerId === 0 && values.CurrentPassword !== ""
                ? "disable-btn"
                : "save-btn"
            }
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              values.handleCaptureFingerClick(
                values.CurrentPassword,
                values.FingerId
              )
            }
            type="button"
            disabled={values.FingerId === 0}
          >
            Capture Finger
          </Button>
          {
            <Dialog
              open={values.captureFingerPopUp}
              // tslint:disable-next-line:jsx-no-lambda
              // onClose={() => values.onHandleReviewPopUpClose()}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Capture Finger Device is Not Connected the System
              </DialogTitle>

              <div className="login-card-main">
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  color="primary"
                  autoFocus={true}
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => values.onHandleClose()}
                >
                  OK
                </Button>
              </div>
            </Dialog>
          }
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  // EmailAddress: yup
  //   .string()
  //   .email()
  //   .required(),

  CurrentPassword: yup.string().required(),

  NewPassword: yup
    .string()
    .nullable(true)
    .min(8, "At Least 8 Chars")
    .matches(/[a-z]/, "Select At Least One LowerCase Char")
    .matches(/[A-Z]/, "Select At Least One UpperCase Char")
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "Select At Least 1 Number And 1 Special Char "
    )
    .required("New Password Is Required"),

  ReEnterNewPassword: yup.string().required()
});

const ChangePasswordForm = (
  props: IChangePasswordValues & ISelectFingerListProps
) => (
  <Formik
    validationSchema={modelSchema}
    initialValues={{ ...props }}
    onSubmit={props.handleChangePassword}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<IChangePasswordValues & ISelectFingerListProps>
    ) => (
      <ChangePassword
        {...fprops}
        values={{
          ...fprops.values,
          captureFingerPopUp: props.captureFingerPopUp,
          fingerTypeValues: props.fingerTypeValues
        }}
      />
    )}
  />
);

export default ChangePasswordForm;
