import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {
  // IAuthorisedProps,
  IAuthorisedProps,
  IAuthorizedPersonValues,
  // IProposalTabFormsProps,
  IChangeValues,
  ICountryValues,
  ICreateProposalProps,
  IPhotoIdTypeProps,
  IRelationTypeProps,
  IResetValues,
  IStateValues
} from "../DefaultLayout/HomePage";

import {
  Checkbox,
  // FormControlLabel,
  Dialog,
  // InputAdornment,
  DialogTitle,
  FormHelperText,
  MobileStepper
} from "@material-ui/core";
// tslint:disable-next-line:ordered-imports
// import { getYear } from "date-fns";
import * as yup from "yup";
import { min } from "./WitnessDetails";

import {
  IDetailsFromMap,
  IProposalTabStateValues,
  ISelectAgrementTypeProps,
  ISelectAllocationProps,
  ISelectCountryProps,
  ISelectStateProps,
  ISelectTypeOfAllocationProps
} from "../DefaultLayout/HomePage";
import { regex } from "./OrganizationForm";
// export const phoneregex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){9}\d$/;

// const modelSchema = yup.object().shape({
//   AuthorisedPersonEmailAddress: yup
//     .string()
//     .email()
//     .required(),
//   FirstName: yup.string().required(),
//   // HouseNo: yup.string().required(),
//   LastName: yup.string().required(),
//   MobileNumber: yup
//     .string()
//     .max(16)
//     .matches(phoneregex)
//     .required(),
//   // tslint:disable-next-line:object-literal-sort-keys
//   AuthDateOfBirth: yup
//     .date()
//     // .default(new Date(min))
//     .max(min, `Age Should Be Greater Than Or Equal To 21 Years `)
//     .required("DateOfBirth required"),
//   // PhotoIdNumber: yup.string().required(),
//   RelationName: yup.string().required(),

//   AuthRelationTypeId: yup
//     .number()
//     .min(1)
//     .required()
//   // StreetName: yup.string().required()
// });

const modelSchema2 = yup.object().shape({
  AuthRelationTypeId: yup
    .number()
    .min(1)
    .required(),
  AuthorisedPersonEmailAddress: yup
    .string()
    .email()
    .required(),
  FirstName: yup.string().required(),
  HouseNo: yup.string().when("check", {
    is: false,
    then: yup.string().required("House No is Required"),
    // tslint:disable-next-line:object-literal-sort-keys
    otherwise: yup.string().notRequired()
  }),
  LastName: yup.string().required(),
  MobileNumber: yup
    .string()
    .max(16)
    .matches(regex)
    .required(),

  StreetName: yup.string().when("check", {
    is: false,
    then: yup.string().required("Street Name is Required"),
    // tslint:disable-next-line:object-literal-sort-keys
    otherwise: yup.string().notRequired()
  }),
  // tslint:disable-next-line:object-literal-sort-keys
  AuthDateOfBirth: yup
    .date()
    // .default(new Date(min))
    .max(min, `Age Should Be Greater Than Or Equal To 21 Years `)
    .required("DateOfBirth required"),
  // PhotoIdNumber: yup.string().required(),
  RelationName: yup.string().required(),
  // tslint:disable-next-line:object-literal-sort-keys
  // PhotoIdType: yup.number().required(),
  check: yup.boolean()
});

const AuthorizedPersonInnerForm = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleReset,
  handleBlur
}: FormikProps<
  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps
>) => (
  <div className="innerpage-container">
    <div className="inner-header-titile">
      <h2>Authorized Person Details</h2>
    </div>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="white-card-form">
        <div className="white-card-auth">
          {/* <div className="background-white-card"> */}
          <div className="child-card">
            <h4>
              First Name <span className="star">*</span>
            </h4>
            <TextField
              className="select-auth"
              name="FirstName"
              label=""
              value={values.FirstName}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleFirstNameChange(event, values);
              }}
              margin="normal"
            />
            <div className="error-msg">
              {touched.FirstName && errors.FirstName && (
                <div>First Name Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Last Name <span className="star">*</span>
            </h4>
            <TextField
              className="select-auth"
              name="LastName"
              label=""
              value={values.LastName}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleLastNameChange(event, values);
              }}
              margin="normal"
            />
            <div className="error-msg">
              {touched.LastName && errors.LastName && (
                <div>Last Name Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Select <span className="star"> *</span>
            </h4>
            <FormControl
              error={
                !!(touched.AuthRelationTypeId && errors.AuthRelationTypeId)
              }
            >
              <Select
                value={values.AuthRelationTypeId}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleRelationChange(event, values);
                }}
                inputProps={{
                  id: "AuthRelationTypeId",
                  name: "AuthRelationTypeId"
                }}
                // error={values.RelationTypeId === 0}
              >
                {values.relationTypeValues.map((e, id) => (
                  <MenuItem
                    key={id}
                    className="select-dropdown-bottom"
                    value={e.RelationTypeId}
                    // tslint:disable-next-line:jsx-no-lambda
                  >
                    {e.RelationType}
                  </MenuItem>
                ))}
              </Select>
              {!!touched.AuthRelationTypeId && errors.AuthRelationTypeId && (
                <FormHelperText className="error-msg">
                  Please Select Relation Type Name
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="child-card">
            <h4>
              Relation Name <span className="star">*</span>
            </h4>
            <TextField
              className="select-auth"
              // required={true}
              name="RelationName"
              value={values.RelationName}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleAuthRelationNameChange(event, values);
              }}
              margin="normal"
            />
            <div className="error-msg">
              {touched.RelationName && errors.RelationName && (
                <div>Relation Name Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <div className="search-col">
              <h4 className="date-label">
                Date Of Birth <span className="star">*</span>
              </h4>

              <div className="input-select-one">
                <input
                  className="select-date-one"
                  // required={true}
                  name="AuthDateOfBirth"
                  type="date"
                  max="9999-12-31"
                  value={values.AuthDateOfBirth}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleAuthDateOfBirthChange(event, values);
                  }}
                  // error={dateOfBirth(values.AuthDateOfBirth)}
                  // className={classes.textField}
                  // InputLabelProps={{
                  //   shrink: true
                  // }}
                  // helperText={
                  //   dateOfBirth(values.AuthDateOfBirth) ? (
                  //     <div>Age Should Be Greater Than Or Equal To 21 Years </div>
                  //   ) : (
                  //     ""
                  //   )
                  // }
                />
              </div>
            </div>
            <div className="error-msg">
              {touched.AuthDateOfBirth && errors.AuthDateOfBirth && (
                <div>Age Should Be Greater Than Or Equal To 21 Years </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Authorized Person Email Address <span className="star">*</span>
            </h4>
            <TextField
              className="select-auth"
              // required={true}
              name="AuthorisedPersonEmailAddress"
              value={values.AuthorisedPersonEmailAddress}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleAuthorisedPersonEmailAddresshChange(event, values);
              }}
              margin="normal"
              type="email"
            />
            <div className="error-msg">
              {touched.AuthorisedPersonEmailAddress &&
                errors.AuthorisedPersonEmailAddress && (
                  <div>Enter Valid Email</div>
                )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Mobile Number <span className="star">*</span>
            </h4>
            <TextField
              className="select-auth"
              id="MobileNumber"
              name="MobileNumber"
              type="number"
              value={values.MobileNumber}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleAuthMobileNumberChange(event, values);
              }}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.MobileNumber && errors.MobileNumber && (
                <div>Enter Valid Mobile Number </div>
              )}
            </div>
          </div>
          <div className="check-box-data">
            <Checkbox
              name="check"
              checked={values.check}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(
                event: React.ChangeEvent<HTMLInputElement>,
                checked: boolean
              ) => {
                handleChange(event);
                values.handleCheckClick(checked, values);
              }}
            />
            <h4 className="check-box-data-h4">
              Check if Communication address is same as Organization address
              <span className="star">*</span>
            </h4>
          </div>
          {values.check === false ? (
            <div className="work-flow-grid">
              <div className="child-card">
                <h4>
                  House No,Building Name <span className="star">*</span>
                </h4>
                <TextField
                  className="select-auth"
                  type="text"
                  name="HouseNo"
                  value={values.HouseNo}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={(event: any) => {
                    handleChange(event);
                    values.handleHouseNoChange(event, values);
                  }}
                  margin="normal"
                />
                <div className="error-msg">
                  {touched.HouseNo && errors.HouseNo && (
                    <div>House No, Building Name Is Required</div>
                  )}
                </div>
              </div>

              <div className="child-card">
                <h4>
                  Street Name,Locality <span className="star">*</span>
                </h4>

                <TextField
                  className="select-auth"
                  name="StreetName"
                  type="text"
                  value={values.StreetName}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleStreetNameChange(event, values);
                  }}
                  margin="normal"
                />
                <div className="error-msg">
                  {touched.StreetName && errors.StreetName && (
                    <div>Street Name Is Required </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="second-card1">
              <div className="child-card">
                <h4>House No,Building Name</h4>
                <TextField
                  className="select-auth"
                  type="text"
                  name="HouseNo"
                  // onChange={handleChange}
                  value={values.HouseNo}
                />
              </div>
              <div className="child-card">
                <h4>Street Name,Locality</h4>
                <TextField
                  className="select-auth"
                  name="StreetName"
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.StreetName}
                />
              </div>
            </div>
          )}
          <div className="work-flow-grid">
            <div className="child-card">
              <h4>Photo Id Type</h4>
              <FormControl>
                <Select
                  className="select-auth"
                  value={values.PhotoIdType}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handlePhotoIdChange(event, values);
                  }}
                  inputProps={{
                    id: "PhotoIdType",
                    name: "PhotoIdType"
                  }}
                  // error={values.PhotoIdType === 0}
                >
                  {values.photoIdValues.map((e, id) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.PhotoIdType}
                    >
                      {e.PhotoIdName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="child-card">
              <h4>Photo Id Number</h4>
              <TextField
                className="select-auth"
                name="PhotoIdNumber"
                value={values.PhotoIdNumber}
                onChange={handleChange}
                margin="normal"
              />
            </div>
          </div>
          <div>
            <h4> Upload Photo Id Document</h4>
            <img className="choose-img" id="image" src={values.authImage} />
            <input
              accept="image/png, image/jpeg"
              id="authImage"
              type="file"
              name="authImage"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleUploadImageClick(event, values);
              }}
            />
            <br />
            <label>Max size is 50MB</label>
            <div className="work-grid">
              <Button
                className="reset-btn"
                type="reset"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handleRemoveImage()}
              >
                Remove
              </Button>
            </div>
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
          <div className="bottom-save-btn">
            <Button
              className="reset-btn"
              type="button"
              // disabled={this.state.activeStep === 0}
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.handleBack()}
            >
              Back
            </Button>

            <Button
              variant="contained"
              className="save-btn"
              type="submit"
              // disabled={values.buttonDisable2}
            >
              Save & Continue
            </Button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </form>
    <div className="bottom-card">
      Completed : Step {values.activeStep + 1} of 5
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={values.activeStep}
        nextButton={<KeyboardArrowRight />}
        backButton={<KeyboardArrowLeft />}
      />
    </div>
  </div>
);

export const dateOfBirth = (date: string) =>
  Date.parse(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  ) -
    Date.parse(date) <=
  662688000000;

export interface IAuthorizedSaveAndContinueProps {
  onHandleAuthorisedSaveandContinue(
    values: IAuthorizedPersonValues &
      IRelationTypeProps &
      IPhotoIdTypeProps &
      IAuthorisedProps &
      IProposalTabStateValues &
      ICountryValues &
      IStateValues &
      ISelectAllocationProps &
      ISelectCountryProps &
      ISelectStateProps &
      IDetailsFromMap
  ): void;
}

const AuthorizedPersonForm = (
  props: IAuthorizedPersonValues &
    IAuthorisedProps &
    IAuthorizedSaveAndContinueProps &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IResetValues &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    ICreateProposalProps
) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props,
      check: props.check
      // HouseNo: props.HouseNo,
      // PhotoIdType: props.PhotoIdType,
      //  RelationTypeId: undefined,
      //  authorisedPersonValues: props.authorisedPersonValues,
      //  image: props.image
    }}
    validationSchema={modelSchema2}
    onSubmit={props.onHandleAuthorisedSaveandContinue}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<
        IAuthorizedPersonValues &
          IRelationTypeProps &
          IPhotoIdTypeProps &
          IAuthorisedProps &
          IChangeValues &
          IProposalTabStateValues &
          IDetailsFromMap &
          ISelectAllocationProps &
          ISelectCountryProps &
          ISelectStateProps &
          ISelectAgrementTypeProps &
          ISelectTypeOfAllocationProps
      >
    ) => (
      <AuthorizedPersonInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          imageWarningPopUp: props.imageWarningPopUp,

          AuthRelationTypeId: props.AuthRelationTypeId,
          HouseNo: props.HouseNo,
          PhotoIdTypeName: props.PhotoIdTypeName,
          StreetName: props.StreetName,
          authImage: props.authImage,
          authorisedPersonValues: props.authorisedPersonValues,
          check: props.check,
          handleAuthRelationNameChange: props.handleAuthRelationNameChange,
          handleRemoveImage: props.handleRemoveImage,

          // HouseNoBuildingName: props.HouseNoBuildingName,
          // StreetNameLocality: props.StreetNameLocality,
          // tslint:disable-next-line:object-literal-sort-keys
          handleAuthMobileNumberChange: props.handleAuthMobileNumberChange,
          photoIdValues: props.photoIdValues,
          relationTypeValues: props.relationTypeValues
          // tslint:disable-next-line:object-literal-sort-keys
          // handleStreetNameChange: props.handleStreetNameChange,
          // handleHouseNoChange: props.handleHouseNoChange
        }}
      />
    )}
  />
);

export default AuthorizedPersonForm;
