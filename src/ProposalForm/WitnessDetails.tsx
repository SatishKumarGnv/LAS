// import FormControl from "@material-ui/core/FormControl";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import MobileStepper from "@material-ui/core/MobileStepper";
import Select from "@material-ui/core/Select";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import * as moment from "moment";

import {
  Field,
  FieldArray,
  // FieldProps,
  Form,
  Formik,
  FormikProps,
  getIn
} from "formik";
import * as React from "react";
import * as yup from "yup";
import {
  IAuthorisedProps,
  IAuthorizedPersonValues,
  // IProposalTabFormsProps,
  IChangeValues,
  ICountryValues,
  IDetailsFromMap,
  IPhotoIdTypeProps,
  IProposalTabStateValues,
  IRelationTypeProps,
  // ISelectAllocationProps,
  // ISelectCountryProps,
  // ISelectStateProps,
  IRelationTypeValues,
  IStateValues,
  IWitnessDetailsProps,
  IWitnessDetailsStateValues,
  IwitnessValues
} from "../DefaultLayout/HomePage";

export interface IwitnessProps {
  readonly WitnessName: string;
}

const errorDisplay = (name: any, error: any, index: any) => {
  switch (error) {
    case error:
      if (name === `WitnessDetailsFormArray.${index}.RelationDateOfBirth`) {
        return "Age Should be Greater or Equal To 21 Years";
      }
    default:
      return "Required Field";
  }
};

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

const WitnessDetailsInnerForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}: FormikProps<
  IWitnessDetailsStateValues &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    IDetailsFromMap
>) => (
  <div className="innerpage-container">
    <div className="inner-header-titile">
      <img src="/images/login-audit-icon.png" />
      <h2>Witness Details</h2>
    </div>
    <Form>
      <FieldArray
        name="WitnessDetailsFormArray"
        // tslint:disable-next-line:jsx-no-lambda
        render={helpers => (
          <div className="white-card-form">
            <div className="white-card-auth">
              {values.WitnessDetailsFormArray &&
              values.WitnessDetailsFormArray.length > 0
                ? values.WitnessDetailsFormArray.map(
                    (x: IwitnessValues, index: number) => (
                      <React.Fragment key={index}>
                        <div className="child-card-two">
                          <h4>
                            Witness Name <span className="star"> *</span>
                          </h4>
                          <Field
                            className="select-textfield"
                            name={`WitnessDetailsFormArray.${index}.WitnessName`}
                            render={() => (
                              <TextField
                                type="text"
                                // tslint:disable-next-line:jsx-no-lambda
                                onChange={(event: any) => {
                                  handleChange(event);
                                  values.handleWitnessNameChange(
                                    event,
                                    index,
                                    x
                                  );
                                }}
                                onBlur={handleBlur}
                                value={x.WitnessName}
                                name={`WitnessDetailsFormArray.${index}.WitnessName`}
                              />
                            )}
                          />
                          <div className="error-msg">
                            <ErrorMessage
                              className="error-msg"
                              name={`WitnessDetailsFormArray.${index}.WitnessName`}
                            />
                          </div>
                        </div>
                        <div className="child-card-two">
                          <h4>
                            Select Relation <span className="star"> *</span>
                          </h4>
                          <Field
                            name={`WitnessDetailsFormArray.${index}.RelationType`}
                            render={() => {
                              return (
                                <FormControl>
                                  <Select
                                    name={`WitnessDetailsFormArray.${index}.RelationType`}
                                    value={x.RelationType}
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleRelationTypeIdChange(
                                        event,
                                        index,
                                        x
                                      );
                                    }}
                                    error={
                                      !!(
                                        touched.RelationType &&
                                        errors.RelationType
                                      )
                                    }
                                  >
                                    {x.RelationTypeArray.map(
                                      (e: IRelationTypeValues, id: number) => (
                                        <MenuItem
                                          key={id}
                                          className="select-dropdown-bottom"
                                          value={e.RelationTypeId}
                                        >
                                          {e.RelationType}
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
                              name={`WitnessDetailsFormArray.${index}.RelationType`}
                              index={index}
                              value={x.RelationType}
                            />
                          </div>
                        </div>
                        <div className="child-card-two">
                          <h4>
                            Relation Name <span className="star"> *</span>
                          </h4>
                          <Field
                            className="select-textfield"
                            name={`WitnessDetailsFormArray.${index}.RelationName`}
                            render={() => (
                              <TextField
                                type="text"
                                // tslint:disable-next-line:jsx-no-lambda
                                onChange={(event: any) => {
                                  handleChange(event);
                                  values.handleRelationNameChange(
                                    event,
                                    index,
                                    x
                                  );
                                }}
                                onBlur={handleBlur}
                                value={x.RelationName}
                                name={`WitnessDetailsFormArray.${index}.RelationName`}
                              />
                            )}
                          />
                          <div className="error-msg">
                            <ErrorMessage
                              className="error-msg"
                              name={`WitnessDetailsFormArray.${index}.RelationName`}
                            />
                          </div>
                        </div>
                        <div className="child-card-two">
                          <h4>
                            Date Of Birth <span className="star"> *</span>
                          </h4>
                          <Field
                            name={`WitnessDetailsFormArray.${index}.RelationDateOfBirth`}
                            render={() => (
                              <div className="input-select-border">
                                <input
                                  type="date"
                                  className="select-date-one"
                                  max="9999-12-31"
                                  //  id="date"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onChange={(event: any) => {
                                    handleChange(event);
                                    values.handleDateChange(event, index, x);
                                  }}
                                  name={`WitnessDetailsFormArray.${index}.RelationDateOfBirth`}
                                  value={x.RelationDateOfBirth}
                                  // error={dateOfBirth(values.DateOfBirth)}
                                  // helperText={
                                  //   dateOfBirth(values.DateOfBirth) ? (
                                  //     <div>
                                  //       Age Should Be Greater Than Or Equal To 21
                                  //       Years
                                  //     </div>
                                  //   ) : (
                                  //     ""
                                  //   )
                                  // }
                                />
                              </div>
                            )}
                          />
                          <div className="error-msg">
                            <ErrorMessage
                              className="error-msg"
                              name={`WitnessDetailsFormArray.${index}.RelationDateOfBirth`}
                              index={index}
                              value={x.RelationDateOfBirth}
                            />
                          </div>
                        </div>
                        {x.AddClickCount === 0 ? (
                          <div />
                        ) : (
                          <div className="continue-btn saveand-btn">
                            <Button
                              className="main-btn"
                              type="button"
                              // tslint:disable-next-line:jsx-no-lambda
                              onClick={() => {
                                helpers.remove(index);
                                values.onDeleteClick(index);
                              }}
                            >
                              <img src="/images/delete.png" />
                            </Button>
                          </div>
                        )}
                        {values.WitnessDetailsFormArray.length === index + 1 ? (
                          <div className="bottom-save-btn">
                            <a
                              className="text-link"
                              type="button"
                              // tslint:disable-next-line:jsx-no-lambda
                              onClick={() => {
                                helpers.insert(index + 1, {
                                  AddClickCount: values.AddClickCount + 1,
                                  RelationDateOfBirth: "",
                                  RelationName: "",
                                  RelationType: 0,
                                  RelationTypeArray: values.relationTypeValues,
                                  WitnessName: "",
                                  id: values.AddClickCount + 1
                                });
                                values.onHandleAddClick(index + 1);
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
            <div className="continue-btn saveand-btn">
              <Button
                className="reset-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handleBack()}
              >
                Back
              </Button>
              <Button
                className="save-btn"
                type="submit"
                // disabled={values.buttonDisable3}
              >
                Save & Continue
              </Button>
            </div>
          </div>
        )}
      />
    </Form>

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
export const dateOfBirth = (date: any) =>
  Date.parse(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  ) -
    Date.parse(date) <=
  662688000000;

// const min = (date: any) => {
//   const currentDate = moment(new Date()).format("DD-MM-YYYY");
//   if (Date.parse(currentDate) - Date.parse(date) < 662688000000) {
//     return date;
//   }
//   return currentDate;
// };

// const getAge = (DOB: any): any => {
//   const today = new Date();
//   const birthDate = new Date(DOB);
//   const age = today.getFullYear() - birthDate.getFullYear();
//   // const m = today.getMonth() - birthDate.getMonth();
//   if (age >= 21) {
//     return moment(DOB).format("DD-MM-YYYY");
//   }
//   if (age < 21) {
//     const CountToAddToYear = 21 - age;
//     const year = birthDate.getFullYear() - CountToAddToYear;
//     return moment(new Date(year, birthDate.getMonth())).format("DD-MM-YYYY");
//   }
// };

export const min = moment(
  new Date(
    new Date().getFullYear() - 21,
    new Date().getMonth(),
    new Date().getDay()
  )
).format("YYYY-MM-DD");

export const modelSchema = yup.object().shape({
  WitnessDetailsFormArray: yup
    .array()
    .of(
      yup.object().shape({
        RelationDateOfBirth: yup
          .date()
          // .default(new Date(min))
          .max(min, `Age Should Be Greater Than Or Equal To 21 Years `)
          .required("DateOfBirth is Required"),
        RelationName: yup.string().required(),
        RelationType: yup
          .number()
          .min(1)
          .required(),
        WitnessName: yup.string().required()
      })
    )
    .required("required")
});

export const WitnessDetailsForm = (
  props: IRelationTypeProps &
    IWitnessDetailsProps &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    IDetailsFromMap
) => (
  <div>
    <Formik
      validationSchema={modelSchema}
      initialValues={{
        ...props,
        WitnessDetailsFormArray: props.WitnessDetailsFormArray
      }}
      onSubmit={props.onWitnessSaveAndContinue}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          IRelationTypeProps &
            IWitnessDetailsStateValues &
            IWitnessDetailsProps &
            IRelationTypeProps &
            IWitnessDetailsProps &
            IAuthorizedPersonValues &
            IRelationTypeProps &
            IPhotoIdTypeProps &
            IAuthorisedProps &
            IChangeValues &
            IProposalTabStateValues &
            IDetailsFromMap &
            IProposalTabStateValues &
            ICountryValues &
            IStateValues &
            IDetailsFromMap
        >
      ) => (
        <WitnessDetailsInnerForm
          {...fprops}
          values={{
            ...fprops.values,

            AddClickCount: props.AddClickCount,
            WitnessDetailsFormArray: props.WitnessDetailsFormArray,
            activeStep: props.activeStep,
            handleDateChange: props.handleDateChange,
            handleRelationNameChange: props.handleRelationNameChange,
            handleWitnessNameChange: props.handleWitnessNameChange,
            onHandleAddClick: props.onHandleAddClick,
            onWitnessSaveAndContinue: props.onWitnessSaveAndContinue,
            relationTypeValues: props.relationTypeValues
          }}
        />
      )}
    />
  </div>
);

export default WitnessDetailsForm;
