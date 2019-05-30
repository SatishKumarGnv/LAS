import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";

import * as React from "react";
import * as yup from "yup";

import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";

export interface IPaymentInfoProps {
  readonly payableAmount: number;
  readonly paymentMode: string;
  readonly selectUserName: number;
  readonly bookReceiptNumber: number;
  readonly selectUserNameValues: ReadonlyArray<any>;
  handleSelectUserNameChange(event: any): void;
  onHandleMakePaymentSubmit(values: IPaymentInfoProps): void;
}

export interface ISelectUserNameValues {
  readonly UserName: string;
  readonly AssignedTo: number;
}

const ProcessFeeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IPaymentInfoProps>) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div className="white-card background-white-card">
        <div className="child-card">
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Payment Mode</FormLabel>
            <RadioGroup
              // aria-label="Gender"
              name="paymentMode"
              //  className={classes.group}
              value={values.paymentMode}
              onChange={handleChange}
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="Cash Payment"
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Net Banking"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel value="3" control={<Radio />} label="Cheque" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="child-card">
          <h4>
            Payable Amount <span className="star">*</span>
          </h4>

          <TextField
            name="payableAmount"
            value={values.payableAmount}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="error-msg">
            {touched.payableAmount && errors.payableAmount && (
              <div> Payable Amount Is Required</div>
            )}
          </div>
        </div>

        <div className="child-card">
          <h4>
            Select User Name <span className="star"> *</span>
          </h4>
          <FormControl
            error={!!(touched.selectUserName && errors.selectUserName)}
          >
            <Select
              value={values.selectUserName}
              name="selectUserName"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleSelectUserNameChange(event);
              }}
            >
              {values.selectUserNameValues &&
                values.selectUserNameValues.map(
                  (e: ISelectUserNameValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.AssignedTo}
                    >
                      {e.UserName}
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.selectUserName && errors.selectUserName ? (
              <FormHelperText className="error-msg">
                select UserName Is Required Field
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
        </div>
        <div className="child-card">
          <h4>
            Book Receipt Number <span className="star">*</span>
          </h4>

          <TextField
            name="bookReceiptNumber"
            value={values.bookReceiptNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="error-msg">
            {touched.bookReceiptNumber && errors.bookReceiptNumber && (
              <div> Book Receipt Number Is Required</div>
            )}
          </div>
        </div>
      </div>

      <div className="bottom-save-btn">
        <Button
          className="save-btn"
          // className="loading"
          type="submit"
          // tslint:disable-next-line:jsx-no-lambda
        >
          Make Payment
        </Button>
      </div>
    </form>
  </div>
);

const modelSchema = yup.object().shape({
  bookReceiptNumber: yup
    .number()
    .min(1)
    .required(),
  //   selectUserName: yup
  //     .number()
  //     .min(1)
  //     .required(),
  // tslint:disable-next-line:object-literal-sort-keys
  payableAmount: yup
    .number()
    .min(1)
    .required(),

  paymentMode: yup.string().required()
});

const PaymentInfoForm = (props: IPaymentInfoProps) => (
  <Formik
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.onHandleMakePaymentSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<IPaymentInfoProps>) => (
      <ProcessFeeInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          selectUserNameValues: props.selectUserNameValues
        }}
      />
    )}
  />
);

export default PaymentInfoForm;
