import { Formik, FormikProps } from "formik";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { regex } from "src/ProposalForm/OrganizationForm";
import * as yup from "yup";

export interface IPayerInfoProps {
  readonly payerName: string;
  readonly emailId: string;
  readonly mobileNumber: string;
  readonly houseNoBuildingName: string;
  readonly isPayerOwner: boolean;
  handleContinueClick(): void;
  handleIsPayerOwnerChange(event: any, name: string): void;
  handlePayerInfoChange(event: any, name: string): void;
}

const ProcessFeeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IPayerInfoProps>) => (
  <div>
    <div className="white-card background-white-card">
      <div className="child-card">
        <form onSubmit={handleSubmit}>
          <FormGroup row={true}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isPayerOwner}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleIsPayerOwnerChange(event, "isPayerOwner");
                  }}
                  value="isPayerOwner"
                />
              }
              label="is Payer Owner"
            />
          </FormGroup>
          <div className="child-card">
            <h4>
              Payer Name <span className="star">*</span>
            </h4>

            <TextField
              name="payerName"
              value={values.payerName}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handlePayerInfoChange(event, "payerName");
              }}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.payerName && errors.payerName && (
                <div> Payer Name Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Email Id for future Communication <span className="star">*</span>
            </h4>

            <TextField
              name="emailId"
              value={values.emailId}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handlePayerInfoChange(event, "emailId");
              }}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.emailId && errors.emailId && (
                <div> Enter Valid Email Id </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Mobile Number <span className="star">*</span>
            </h4>

            <TextField
              name="mobileNumber"
              value={values.mobileNumber}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handlePayerInfoChange(event, "mobileNumber");
              }}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.mobileNumber && errors.mobileNumber && (
                <div> Mobile Number Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              House No, Buildin Name <span className="star">*</span>
            </h4>

            <TextField
              name="houseNoBuildingName"
              value={values.houseNoBuildingName}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handlePayerInfoChange(event, "houseNoBuildingName");
              }}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.houseNoBuildingName && errors.houseNoBuildingName && (
                <div> house No,Building Name Is Required</div>
              )}
            </div>
          </div>
          <div className="bottom-save-btn">
            <Button
              className="save-btn"
              // className="loading"
              type="submit"
              // tslint:disable-next-line:jsx-no-lambda
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const modelSchema = yup.object().shape({
  isPayerOwner: yup.boolean().required(),
  payerName: yup.string().required(),
  // tslint:disable-next-line:object-literal-sort-keys
  emailId: yup
    .string()
    .email()
    .required(),
  mobileNumber: yup
    .string()
    .max(16)
    .matches(regex)
    .required(),
  houseNoBuildingName: yup.string().required()
});

const PayerInfoForm = (props: IPayerInfoProps) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props,
      emailId: props.emailId,
      houseNoBuildingName: props.houseNoBuildingName,
      mobileNumber: props.mobileNumber,
      payerName: props.payerName
    }}
    validationSchema={modelSchema}
    onSubmit={props.handleContinueClick}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<IPayerInfoProps>) => (
      <ProcessFeeInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          emailId: props.emailId,
          houseNoBuildingName: props.houseNoBuildingName,
          isPayerOwner: props.isPayerOwner,
          mobileNumber: props.mobileNumber,
          payerName: props.payerName
        }}
      />
    )}
  />
);

export default PayerInfoForm;
