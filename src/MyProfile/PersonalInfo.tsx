import * as React from "react";

import Button from "@material-ui/core/Button";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {
  IPersonalInfo,
  IPersonalInfoValueProps,
  IPersonalInfoValues,
  ISelectDepartmentProps,
  ISelectRoleProps
} from "../DefaultLayout/HomePage";

const PersonalInfo = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<
  IPersonalInfoValues &
    ISelectRoleProps &
    ISelectDepartmentProps &
    IPersonalInfoValueProps &
    IPersonalInfo
>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off" noValidate={false}>
      <div className="white-card ">
        <div className="child-card">
          <h4>
            First Name <span className="star">*</span>
          </h4>
          <TextField
           
            name="FirstName"
            type="text"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleFirstNameChange(event);
            }}
            value={values.myProfileValues.FirstName}
          />

          <div className="error-msg">
            {!!(touched.FirstName && errors.FirstName) && (
              <div>First Name Required</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>Middle Name</h4>
          <TextField
           
            name="MiddleName"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleMiddleNameChange(event);
            }}
            onBlur={handleBlur}
            value={
              values.myProfileValues.MiddleName !== null &&
              values.myProfileValues.MiddleName !== "null"
                ? values.myProfileValues.MiddleName
                : undefined
            }
          />
        </div>
        <div className="child-card">
          <h4>
            Surname <span className="star">*</span>
          </h4>
          <TextField
           
            name="SurName"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleSurNameChange(event);
            }}
            onBlur={handleBlur}
            value={values.myProfileValues.SurName}
          />
          <div className="error-msg">
            {!!(touched.SurName && errors.SurName) && (
              <div>Surname Is Required </div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>
            Display Name <span className="star">*</span>
          </h4>
          <TextField
           
            name="DisplayName"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleDisplayChange(event);
            }}
            onBlur={handleBlur}
            value={values.myProfileValues.DisplayName}
          />
          <div className="error-msg">
            {!!(touched.DisplayName && errors.DisplayName) && (
              <div>Display Name Is Required </div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>
            Email Address <span className="star">*</span>
          </h4>
          <TextField
           
            name="Email"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleEmailAddressChange(event);
            }}
            onBlur={handleBlur}
            value={values.myProfileValues.Email}
          />
          <div className="error-msg">
            {!!(touched.Email && errors.Email) && <div>Enter Valid Email</div>}
          </div>
        </div>
        <div className="child-card">
          <h4>Mobile Number </h4>
          <TextField
           
            name="PhoneNumber"
            type="number"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleMobileNumberChange(event);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91-</InputAdornment>
              )
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onInput={(e: any) => {
              e.target.value = parseInt(
                Math.max(0, parseInt(e.target.value, 10))
                  .toString()
                  .slice(0, 10),
                10
              );
            }}
            onBlur={handleBlur}
            value={values.myProfileValues.PhoneNumber}
          />
          <div className="error-msg">
            {!!(touched.PhoneNumber && errors.PhoneNumber) && (
              <div>Enter Valid Mobile Number </div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>
            Select Role <span className="star"> *</span>
          </h4>
          <FormControl>
            <Select
             
              inputProps={{
                id: "RoleId",
                name: "RoleId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={handleChange}
              value={values.myProfileValues.RoleId}
              disabled={true}
            >
              {values.roleTypeValues.map((e: any, id: number) => (
                <MenuItem
                  key={id}
                  className="select-dropdown-bottom"
                  value={e.RoleId}
                >
                  {e.RoleName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="child-card">
          <h4>
            Select Department<span className="star"> *</span>
          </h4>
          <FormControl>
            <Select
             
              inputProps={{
                id: "DepartmentId",
                name: "DepartmentId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={handleChange}
              value={values.myProfileValues.Department}
              disabled={true}
            >
              {values.departmentTypeValues.map((e: any, id: number) => (
                <MenuItem
                  key={id}
                  className="select-dropdown-bottom"
                  value={e.DepartmentId}
                >
                  {e.DepartmentName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="bottom-save-btn">
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={(event: any) => values.handleCancelClickInfo(event)}
            className="reset-btn"
            type="submit"
          >
            Cancel
          </Button>
          <Button className="save-btn" type="submit">
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  );
};
export const regex = /^[a-z A-Z 0-9._%+-]+@[a-z A-Z 0-9.-]+\.[a-z A-Z]{2,4}$/;

export const modelSchema = yup.object().shape({
  Email: yup
    .string()
    .email()
    .matches(regex)
    .required(),

  FirstName: yup.string().required(),

  SurName: yup.string().required(),

  DisplayName: yup.string().required(),

  PhoneNumber: yup
    .number()
    .required()
    .min(1000000000)
    .max(999999999999)
    .required()
});

interface IPersonalInfoProps {
  onSave(values: IPersonalInfoValues): void;
}

const PersonalInfoForm = (
  props: IPersonalInfoProps &
    IPersonalInfoValues &
    IPersonalInfoValueProps &
    ISelectRoleProps &
    ISelectDepartmentProps &
    IPersonalInfo
) => {
 
  return (
    <Formik
      isInitialValid={true}
      enableReinitialize={true}
      validationSchema={modelSchema}
      initialValues={{
        ...props
      }}
      onSubmit={props.handleSaveChangesClick}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          IPersonalInfoValues &
            ISelectRoleProps &
            ISelectDepartmentProps &
            IPersonalInfoValueProps &
            IPersonalInfo
        >
      ) => (
        <PersonalInfo
          {...fprops}
          values={{
            ...fprops.values,
            departmentTypeValues: props.departmentTypeValues,
            handleCancelClickInfo: props.handleCancelClickInfo,
            myProfileValues: props.myProfileValues,
            roleTypeValues: props.roleTypeValues
          }}
        />
      )}
    />
  );
};

export default PersonalInfoForm;
