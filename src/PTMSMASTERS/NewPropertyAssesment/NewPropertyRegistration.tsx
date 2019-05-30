import FormControl from "@material-ui/core/FormControl";

import { FormHelperText, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import MobileStepper from "@material-ui/core/MobileStepper";

import Select from "@material-ui/core/Select";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Field, FieldArray, Formik, FormikProps, getIn } from "formik";
import * as React from "react";
import {
  IApartmentValues,
  ICategoryOwnershipDetails,
  ICategoryTextFieldValues,
  IGenderValues,
  IOwnershipValues,
  IPropertyDepartmentValues,
  IPropertyValues
} from "src/DefaultLayout/HomePage";
import * as yup from "yup";

const ErrorMessage = ({ name, index, value }: any) => (
  <Field
    name={name}
    // tslint:disable-next-line:jsx-no-lambda
    render={({ form }: any) => {
      const touch = getIn(form.touched, name);
      const error = getIn(form.errors, name);
      return touch && error ? errorDisplay(name, error, index) : null;
    }}
  />
);
const errorDisplay = (name: any, error: any, index: any) => {
  switch (error) {
    case error:
      if (name === `OwnershipArray.${index}.EmailAddress`) {
        return "Please Enter Valid Email Id";
      }
    default:
      return "Required Field";
  }
};
const RegistrationForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<ICategoryTextFieldValues>) => (
  <div className="innerpage-container">
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="inner-header-titile">
        <h2>New Property Registration</h2>
      </div>

      <div>
        <div className="white-card background-white-card">
          <div className="card-title">
            <h3> Header Details</h3>
          </div>

          <div className="child-card-two">
            <h4>
              Ownership Category <span className="star"> *</span>
            </h4>
            <FormControl
              error={
                !!(touched.CategoryOwnershipId && errors.CategoryOwnershipId)
              }
            >
              <Select
                value={values.CategoryOwnershipId}
                name="CategoryOwnershipId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  handleChange(event);
                  values.handlePropertyRegChange(event);
                }}
              >
                {values.selectCategoryOwnershipValues &&
                  values.selectCategoryOwnershipValues.map(
                    (e: ICategoryOwnershipDetails, id: number) => (
                      <MenuItem
                        key={id}
                        className="select-dropdown-bottom"
                        value={e.CategoryOwnershipId}
                      >
                        {e.CategoryOwnershipName}
                      </MenuItem>
                    )
                  )}
              </Select>
              {!!touched.CategoryOwnershipId && errors.CategoryOwnershipId ? (
                <FormHelperText className="error-msg">
                  Ownership Category Is Required Field
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </div>

          <div className="child-card-two">
            <h4>
              Property Category<span className="star"> *</span>
            </h4>
            <FormControl
              error={!!(touched.PropertyTypeId && errors.PropertyTypeId)}
            >
              <Select
                value={values.PropertyTypeId}
                name="PropertyTypeId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleRegistrationPropertyTypeChange(event);
                }}
              >
                {values.selectPropertyValues.map(
                  (e: IPropertyValues, id: number) => (
                    <MenuItem
                      className="select-dropdown-bottom"
                      key={id}
                      value={e.PropertyTypeId}
                    >
                      {e.PropertyTypeName}
                    </MenuItem>
                  )
                )}
              </Select>
              {!!(touched.PropertyTypeId && errors.PropertyTypeId) && (
                <FormHelperText className="error-msg">
                  Property Category Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="child-card-two">
            <h4>
              Property Department<span className="star"> *</span>
            </h4>
            <FormControl
              error={
                !!(touched.PropertyDepartmentId && errors.PropertyDepartmentId)
              }
            >
              <Select
                value={values.PropertyDepartmentId}
                name="PropertyDepartmentId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={handleChange}
              >
                {values.selectDepartmentValues.map(
                  (e: IPropertyDepartmentValues, id: number) => (
                    <MenuItem
                      className="select-dropdown-bottom"
                      key={id}
                      value={e.PropertyDepartmentId}
                    >
                      {e.PropertyDepartmentName}
                    </MenuItem>
                  )
                )}
              </Select>
              {!!(
                touched.PropertyDepartmentId && errors.PropertyDepartmentId
              ) && (
                <FormHelperText className="error-msg">
                  Property Department Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="child-card-two">
            <h4>Apartment/Complex Name</h4>
            <FormControl>
              <Select
                value={values.ApartmentNameId}
                name="ApartmentNameId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={handleChange}
              >
                {values.selectApartmentValues.map(
                  (e: IApartmentValues, id: number) => (
                    <MenuItem
                      className="select-dropdown-bottom"
                      key={id}
                      value={e.ApartmentNameId}
                    >
                      {e.ApartmentName}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </div>
          <div className="card-title">
            <h3>Ownership Details</h3>
          </div>

          <FieldArray
            name="OwnershipArray"
            // tslint:disable-next-line:jsx-no-lambda
            render={helpers => (
              <div className="first-container">
                {values.OwnershipArray && values.OwnershipArray.length > 0
                  ? values.OwnershipArray.map(
                      (x: IOwnershipValues, index: number) => (
                        <React.Fragment key={index}>
                          <div className="child-card-two">
                            <h4>
                              Owner Name <span className="star"> *</span>
                            </h4>
                            <Field
                              className="select-textfield"
                              name={`OwnershipArray.${index}.OwnerName`}
                              render={() => (
                                <TextField
                                  type="text"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onChange={(event: any) => {
                                    handleChange(event);
                                    values.handleOwnerNameChange(
                                      event,
                                      index,
                                      values
                                    );
                                  }}
                                  onBlur={handleBlur}
                                  value={x.OwnerName}
                                  name={`OwnershipArray.${index}.OwnerName`}
                                />
                              )}
                            />
                            <div className="error-msg">
                              <ErrorMessage
                                className="error-msg"
                                name={`OwnershipArray.${index}.OwnerName`}
                              />
                            </div>
                          </div>
                          <div className="child-card-two">
                            <h4>
                              Mobile Number <span className="star"> *</span>
                            </h4>
                            <Field
                              className="select-textfield"
                              name={`OwnershipArray.${index}.MobileNo`}
                              render={() => (
                                <TextField
                                  type="number"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onChange={(event: any) => {
                                    handleChange(event);
                                    values.handleMobileNoChange(
                                      event,
                                      index,
                                      values
                                    );
                                  }}
                                  onBlur={handleBlur}
                                  value={x.MobileNo}
                                  name={`OwnershipArray.${index}.MobileNo`}
                                />
                              )}
                            />
                            <div className="error-msg">
                              <ErrorMessage
                                className="error-msg"
                                name={`OwnershipArray.${index}.MobileNo`}
                              />
                            </div>
                          </div>

                          <div className="child-card-two">
                            <h4>
                              Gender <span className="star"> *</span>
                            </h4>
                            <Field
                              name={`OwnershipArray.${index}.Gender`}
                              render={() => {
                                return (
                                  <FormControl>
                                    <Select
                                      name={`OwnershipArray.${index}.Gender`}
                                      value={x.Gender}
                                      onChange={(event: any) => {
                                        handleChange(event);
                                        values.handleGenderIdChange(
                                          event,
                                          index,
                                          values
                                        );
                                      }}
                                      error={
                                        !!(touched.Gender && errors.Gender)
                                      }
                                    >
                                      {x.selectGenderValues &&
                                        x.selectGenderValues.map(
                                          (e: IGenderValues, id: number) => (
                                            <MenuItem
                                              key={id}
                                              className="select-dropdown-bottom"
                                              value={e.EnumMasterID}
                                            >
                                              {e.EnumMasterDesc}
                                            </MenuItem>
                                          )
                                        )}
                                    </Select>
                                  </FormControl>
                                );
                              }}
                            />
                            <div className="error-msg">
                              <ErrorMessage
                                className="error-msg"
                                name={`OwnershipArray.${index}.Gender`}
                                index={index}
                                value={x.Gender}
                              />
                            </div>
                          </div>
                          <div className="child-card-two">
                            <h4>
                              Email Address<span className="star"> *</span>
                            </h4>
                            <Field
                              name={`OwnershipArray.${index}.EmailAddress`}
                              render={() => (
                                <TextField
                                  type="email"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onChange={(event: any) => {
                                    handleChange(event);
                                    values.handleEmailAddressRegChange(
                                      event,
                                      index,
                                      values
                                    );
                                  }}
                                  name={`OwnershipArray.${index}.EmailAddress`}
                                  value={x.EmailAddress}
                                />
                              )}
                            />
                            <div className="error-msg">
                              <ErrorMessage
                                className="error-msg"
                                name={`OwnershipArray.${index}.EmailAddress`}
                                index={index}
                                value={x.EmailAddress}
                              />
                            </div>
                          </div>

                          <div className="child-card-two">
                            <h4>
                              Guardian Relation <span className="star"> *</span>
                            </h4>
                            <Field
                              name={`OwnershipArray.${index}.GuardianReg`}
                              render={() => {
                                return (
                                  <FormControl>
                                    <Select
                                      name={`OwnershipArray.${index}.GuardianReg`}
                                      value={x.GuardianReg}
                                      onChange={(event: any) => {
                                        handleChange(event);
                                        values.handleGuardianIdChange(
                                          event,
                                          index,
                                          values
                                        );
                                      }}
                                      error={
                                        !!(
                                          touched.GuardianReg &&
                                          errors.GuardianReg
                                        )
                                      }
                                    >
                                      {x.selectGuardianValues &&
                                        x.selectGuardianValues.map(
                                          (e: IGenderValues, id: number) => (
                                            <MenuItem
                                              key={id}
                                              className="select-dropdown-bottom"
                                              value={e.EnumMasterID}
                                            >
                                              {e.EnumMasterDesc}
                                            </MenuItem>
                                          )
                                        )}
                                    </Select>
                                  </FormControl>
                                );
                              }}
                            />
                            <div className="error-msg">
                              <ErrorMessage
                                className="error-msg"
                                name={`OwnershipArray.${index}.GuardianReg`}
                                index={index}
                                value={x.GuardianReg}
                              />
                            </div>
                          </div>
                          <div className="child-card-two">
                            <h4>
                              Guardian<span className="star"> *</span>
                            </h4>
                            <Field
                              name={`OwnershipArray.${index}.Guardian`}
                              render={() => (
                                <TextField
                                  type="text"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onChange={(event: any) => {
                                    handleChange(event);
                                    values.handleGuardianChange(
                                      event,
                                      index,
                                      values
                                    );
                                  }}
                                  name={`OwnershipArray.${index}.Guardian`}
                                  value={x.Guardian}
                                />
                              )}
                            />
                            <div className="error-msg">
                              <ErrorMessage
                                className="error-msg"
                                name={`OwnershipArray.${index}.Guardian`}
                                index={index}
                                value={x.Guardian}
                              />
                            </div>
                          </div>
                          {index === 0 ? (
                            <div />
                          ) : (
                            <div className="continue-btn saveand-btn">
                              <Button
                                className="main-btn"
                                type="button"
                                // tslint:disable-next-line:jsx-no-lambda
                                onClick={() => {
                                  helpers.remove(index);
                                  values.onDeleteClickReg(index);
                                }}
                              >
                                <img src="/images/delete.png" />
                              </Button>
                            </div>
                          )}
                          {values.OwnershipArray.length === index + 1 ? (
                            <div className="bottom-save-btn">
                              <a
                                className="text-link"
                                type="button"
                                // tslint:disable-next-line:jsx-no-lambda
                                onClick={() => {
                                  helpers.insert(index + 1, {
                                    AddClickCount: values.AddClickCount + 1,
                                    OwnerName: "",
                                    // tslint:disable-next-line:object-literal-sort-keys
                                    EmailAddress: "",
                                    MobileNo: "",
                                    Guardian: "",
                                    GuardianReg: 0,
                                    Gender: 0,
                                    selectGenderValues:
                                      values.selectGenderValues,
                                    selectGuardianValues:
                                      values.selectGuardianValues,
                                    id: values.AddClickCount + 1
                                  });
                                  values.onHandleAddClickReg(index + 1);
                                }}
                              >
                                Add Another
                              </a>
                            </div>
                          ) : (
                            <div />
                          )}
                        </React.Fragment>
                      )
                    )
                  : null}
              </div>
            )}
          />
          <div className="bottom-save-btn">
            <Button className="main-btn" type="submit">
              Save & Continue
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="bottom-card">
          Completed : Step {values.activeStep + 1} of 5
          <div>
            <MobileStepper
              className="mobile-stepper"
              variant="progress"
              steps={5}
              position="static"
              activeStep={values.activeStep}
              nextButton={<KeyboardArrowRight />}
              backButton={<KeyboardArrowLeft />}
            />
          </div>
        </div>
      </div>
    </form>
  </div>
);

export const regex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){9}\d$/;

const modelSchema = yup.object().shape({
  OwnershipArray: yup
    .array()
    .of(
      yup.object().shape({
        EmailAddress: yup
          .string()
          .email()
          .required(),
        Gender: yup
          .number()
          .min(1)
          .required(),
        Guardian: yup.string().required(),
        GuardianReg: yup
          .number()
          .min(1)
          .required(),
        MobileNo: yup
          .string()
          .max(16)
          .matches(regex)
          .required(),
        OwnerName: yup.string().required()

        // RelationTypeId: yup
        //   .number()
        //   .min(1)
        //   .required(),
        // WitnessName: yup.string().required()
      })
    )
    .required("required"),

  CategoryOwnershipId: yup
    .number()
    .min(1)
    .required(),
  PropertyDepartmentId: yup
    .number()
    .min(1)
    .required(),
  PropertyTypeId: yup
    .number()
    .min(1)
    .required()
});

export const NewPropertyRegistrationForm = (
  props: ICategoryTextFieldValues
) => (
  <Formik
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.onRegistration1Submit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<ICategoryTextFieldValues>) => (
      <RegistrationForm
        {...fprops}
        values={{
          ...fprops.values,
          OwnershipArray: props.OwnershipArray,
          selectCategoryOwnershipValues: props.selectCategoryOwnershipValues,
          selectDepartmentValues: props.selectDepartmentValues,
          selectGenderValues: props.selectGenderValues,
          selectPropertyValues: props.selectPropertyValues
        }}
      />
    )}
  />
);

export default NewPropertyRegistrationForm;
