import { Formik, FormikProps } from "formik";
import * as React from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  FormControlLabel,
  FormHelperText,
  FormLabel
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import {
  ICreateNewUserValues,
  IDepartmentProps,
  IDepartmentValues,
  IFingerProps,
  IFingerValues,
  IRoleProps,
  IRoleValues
} from "src/Container/CreateNewUserState";
import * as yup from "yup";

const NewUserInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  setFieldValue,
  touched,
  errors
}: FormikProps<
  ICreateNewUserValues &
    IDepartmentProps &
    IDepartmentValues &
    IFingerValues &
    IRoleProps &
    IFingerProps &
    IFingerValues &
    IRoleValues &
    ICreateNewUserValues
>) => {
  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
        <div className="white-card">
          <div className="child-card">
            <h4>
              Display Name <span className="star"> *</span>
            </h4>
            <TextField
              name="displayName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.displayName}
            />
            <div className="error-msg">
              {touched.displayName && errors.displayName && (
                <div>Display Name Is Required </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Email Address <span className="star"> *</span>
            </h4>
            <TextField
              name="emailAddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.emailAddress}
            />
            <div className="error-msg">
              {touched.emailAddress && errors.emailAddress && (
                <div>Email Address Is Required </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              First Name <span className="star"> *</span>
            </h4>
            <TextField
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <div className="error-msg">
              {touched.firstName && errors.firstName && (
                <div>First Name Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>Middle Name</h4>
            <TextField
              name="middleName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.middleName}
            />
          </div>
          <div className="child-card">
            <h4>
              Phone Number <span className="star"> *</span>
            </h4>
            <TextField
              name="phoneNumber"
              type="number"
              // tslint:disable-next-line:jsx-no-lambda
              onInput={(e: any) => {
                e.target.value = parseInt(
                  Math.max(0, parseInt(e.target.value, 10))
                    .toString()
                    .slice(0, 10),
                  10
                );
              }}
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.phoneNumber && errors.phoneNumber && (
                <div>Enter Valid Phone Number </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Surname <span className="star"> *</span>
            </h4>
            <TextField
              name="surName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surName}
            />
            <div className="error-msg">
              {touched.surName && errors.surName && (
                <div>Surname Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              User Name <span className="star"> *</span>
            </h4>
            <TextField
              name="userName"
              // onChange={handleChange}

              // tslint:disable-next-line:jsx-no-lambda
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
            />
            <div className="error-msg ">
              {touched.userName && errors.userName}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Gender <span className="star"> *</span>
            </h4>
            <FormControl error={!!(touched.gender && errors.gender)}>
              <Select
                name="gender"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleGenderChange(event);
                }}
                onBlur={handleBlur}
                value={values.gender}
              >
                <MenuItem className="select-dropdown-bottom" value={1}>
                  Male
                </MenuItem>
                <MenuItem className="select-dropdown-bottom" value={2}>
                  Female
                </MenuItem>
              </Select>
              {!!touched.gender && errors.gender && (
                <FormHelperText className="error-msg">
                  Gender Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="child-card">
            <h4>
              {" "}
              Department <span className="star"> *</span>
            </h4>
            <FormControl
              error={!!(touched.DepartmentId && errors.DepartmentId)}
              className="px-5"
            >
              <Select
                value={values.DepartmentId}
                inputProps={{
                  id: "DepartmentId",
                  name: "DepartmentId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={handleChange}
              >
                {values.departmentList &&
                  values.departmentList.map((e: any, id: number) => (
                    <MenuItem
                      key={e.DepartmentId}
                      className="select-dropdown-bottom"
                      value={e.DepartmentId}
                    >
                      {e.DepartmentName}
                    </MenuItem>
                  ))}
              </Select>
              {!!touched.DepartmentId && errors.DepartmentId && (
                <FormHelperText className="error-msg">
                  {" "}
                  Department Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="child-card">
            <div className="text-align-popup">
              <h4>
                {" "}
                Role Name <span className="star"> *</span>
              </h4>
            </div>
            <FormControl error={!!(touched.RoleId && errors.RoleId)}>
              <Select
                value={values.RoleId}
                inputProps={{
                  id: "RoleId",
                  name: "RoleId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleRoleIdChange(event, values);
                }}
              >
                {values.roleList.map((e: any, id: number) => (
                  <MenuItem
                    key={e.RoleId}
                    className="select-dropdown-bottom"
                    value={e.RoleId}
                  >
                    {e.RoleName}
                  </MenuItem>
                ))}
              </Select>
              {!!touched.RoleId && errors.RoleId && (
                <FormHelperText className="error-msg">
                  {" "}
                  Role Name Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="child-card">
            <FormControl component="fieldset">
              <FormLabel component="legend">Bio Metric Request</FormLabel>
              <RadioGroup
                className="flex-row"
                name="BioMetricRequest"
                // className={classes.group}
                value={values.BioMetricRequest}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={handleChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          {values.BioMetricRequest === "1" ? (
            <div className="child-card">
              <h4>
                {" "}
                Select Finger <span className="star"> *</span>
              </h4>
              <FormControl error={!!(touched.FingerId && errors.FingerId)}>
                <Select
                  value={values.FingerId}
                  inputProps={{
                    id: "FingerId",
                    name: "FingerId"
                  }}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleFingerIdChange(event);
                  }}
                >
                  {values.fingerList.map((e: any, id: number) => (
                    <MenuItem
                      key={e.FingerId}
                      className="select-dropdown-bottom"
                      value={e.FingerId}
                    >
                      {e.FingerName}
                    </MenuItem>
                  ))}
                </Select>
                {!!touched.FingerId && errors.FingerId && (
                  <FormHelperText className="error-msg">
                    {" "}
                    Select Finger Is Required Field
                  </FormHelperText>
                )}
              </FormControl>
              <div className="popup-bottom-btn ">
                <Button
                  // className="save-btn"
                  className={
                    values.FingerId === undefined || values.FingerId === 0
                      ? "save"
                      : "save-btn"
                  }
                  disabled={
                    values.FingerId === 0 || values.FingerId === undefined
                  }
                  type="button"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() =>
                    values.handleCaptureFingerPopUp(values.FingerId)
                  }
                >
                  Capture Finger
                </Button>
              </div>
            </div>
          ) : (
            <div />
          )}
          <div className="child-card">
            <div className="child-card">
              <img
                id="imageOfUser"
                className="Upload-grid-img"
                src={values.image}
              />

              <input
                accept="image/png, image/jpeg"
                id="image1FileControl"
                type="file"
                name="image1FileControl"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={evt => values.handleImageChange(evt)}
              />
            </div>
            {values.userImage === true ? (
              <Button
                // tslint:disable-next-line:jsx-no-lambda
                onClick={evt =>
                  values.handleuserImageClick(
                    evt,
                    document.getElementById("image1FileControl")
                  )
                }
                type="button"
                className="reset-btn remove-btn"
              >
                Remove
              </Button>
            ) : (
              ""
            )}
          </div>
          {
            <Dialog
              open={values.imageWarningPopUp}
              // tslint:disable-next-line:jsx-no-lambda
              // onClose={() => values.onHandleReviewPopUpClose()}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Image Maximum Size should be 50 MB
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
          <div className="child-card">
            <div className="title-btn">
              <Button type="reset" className="reset-btn">
                Reset
              </Button>
              <Button type="submit" className="save-btn">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
// const regex = /^\S+$/;
export const modelSchema = yup.object().shape({
  DepartmentId: yup
    .number()
    .min(1)
    .required(),
  RoleId: yup
    .number()
    .min(1)
    .required(),
  displayName: yup.string().required(),
  emailAddress: yup
    .string()
    .email()
    .required(),
  firstName: yup.string().required(),
  gender: yup
    .number()
    .min(1)
    .required(),
  phoneNumber: yup
    .number()
    .required()
    .min(1000000000)
    .max(999999999999),
  surName: yup.string().required(),
  userName: yup
    .string()
    .nullable(true)
    .matches(/^\S+$/, "UserName Doesn't Allow Spaces")
    .required("User Name Is Required")
});

export const modelSchema1 = yup.object().shape({
  DepartmentId: yup
    .number()
    .min(1)
    .required(),
  FingerId: yup
    .number()
    .min(1)
    .required(),
  RoleId: yup
    .number()
    .min(1)
    .required(),
  // tslint:disable-next-line:object-literal-sort-keys
  // ProjectType: yup
  //   .string()
  //   .min(1)
  //   .required(),
  displayName: yup.string().required(),
  emailAddress: yup
    .string()
    .email()
    .required(),
  firstName: yup.string().required(),
  gender: yup
    .number()
    .min(1)
    .required(),
  phoneNumber: yup
    .number()
    .required()
    .min(1000000000)
    .max(999999999999),
  surName: yup.string().required(),
  userName: yup
    .string()
    .nullable(true)
    .matches(/^\S+$/, "UserName Doesn't Allow Spaces")
    .required("User Name Is Required")
});

interface ICreateNewUserFormProps {
  onSubmit(values: ICreateNewUserValues & IFingerValues): void;
  handleReset(): void;
}

const CreateNewUserForm = (
  props: ICreateNewUserFormProps &
    IDepartmentProps &
    IRoleProps &
    IFingerProps &
    IDepartmentValues &
    IFingerValues &
    ICreateNewUserValues &
    any
) => (
  <Formik
    initialValues={{
      ...props,

      FingerId: props.fingerList.FingerId,
      // // ProjectType: props.ProjectType.ProjectType,
      RoleId: props.roleList.RoleId,
      gender: props.gender
    }}
    validationSchema={
      props.BioMetricRequest === "1" ? modelSchema1 : modelSchema
    }
    onSubmit={props.onSubmit}
    onReset={props.handleReset}
    handleuserImageClick={props.handleuserImageClick}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<
        IDepartmentProps &
          IRoleProps &
          IFingerProps &
          IDepartmentValues &
          IFingerValues &
          IRoleValues &
          ICreateNewUserValues &
          IFingerValues
      >
    ) => (
      <NewUserInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          FingerId: props.FingerId,
          gender: props.gender,
          // ProjectType: props.ProjectType,
          // ProjectTypeIds: props.ProjectTypeIds,
          //  ProjectTypeValues: props.ProjectTypeValues,
          // tslint:disable-next-line:object-literal-sort-keys
          RoleId: props.RoleId,
          departmentList: props.departmentList,
          fingerList: props.fingerList,
          handleCaptureFingerPopUp: props.handleCaptureFingerPopUp,
          // handleProjectTypeChange: props.handleProjectTypeChange,
          image: props.image,
          imageWarningPopUp: props.imageWarningPopUp,
          roleList: props.roleList,
          userImage: props.userImage
        }}
      />
    )}
  />
);

export default CreateNewUserForm;
