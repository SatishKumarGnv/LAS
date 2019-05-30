import { Button } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

import { ISMTPDataProps, ISMTPValues } from "src/Container/EmailTemplateState";

const SMTPInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<ISMTPDataProps & ISMTPValues>) => {
  return (
    <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
      {/* <div>{JSON.stringify(errors)}</div> */}
      <div>
        <div className="child-card">
          <h4>Host Name</h4>
          <TextField
           
            name="Host"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={
              // tslint:disable-next-line:jsx-no-lambda
              event => {
                handleChange(event);
                // values.onHandleChange(event);
              }
            }
            onBlur={handleBlur}
            value={values.Host}
          />
          <div className="error-msg">
            {touched.Host && errors.Host && <div>{errors.Host}</div>}
          </div>
        </div>
        <div className="child-card">
          <h4>SMTP PORT</h4>
          <TextField
           
            name="SMTPport"
            onChange={
              // tslint:disable-next-line:jsx-no-lambda
              event => {
                handleChange(event);
                // values.onHandleChange(event);
              }
            }
            onBlur={handleBlur}
            value={values.SMTPport}
          />
          <div className="error-msg">
            {touched.SMTPport && errors.SMTPport && (
              <div>{errors.SMTPport}</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>User Id </h4>
          <TextField
           
            name="HostUserId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.HostUserId}
          />
          <div className="error-msg">
            {touched.HostUserId && errors.HostUserId && (
              <div>{errors.HostUserId}</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>Password</h4>
          <TextField
           
            name="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Password}
          />
          <div className="error-msg">
            {touched.Password && errors.Password && (
              <div>{errors.Password}</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>From E-mail Address</h4>
          <TextField
           
            name="FromEmail"
            // tslint:disable-next-line:jsx-no-lambda

            value={values.FromEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="error-msg">
            {touched.FromEmail && errors.FromEmail && (
              <div>{errors.FromEmail} </div>
            )}
          </div>
        </div>

        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleSMTPClose()}
          >
            Close
          </Button>

          <Button className="main-btn" type="submit">
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  FromEmail: yup.string().required(),
  Host: yup.string().required(),
  HostUserId: yup.string().required(),
  Password: yup.string().required(),
  SMTPport: yup.number().required()
});

export const SMTPPopUpForm = (props: ISMTPDataProps & ISMTPValues) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleSMTPSubmit}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<ISMTPDataProps & ISMTPValues>) => (
        <SMTPInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            SMTPData: props.SMTPData,
            //   onHandleChange: props.onHandleChange,
            onHandleSMTPClose: props.onHandleSMTPClose,
            onHandleSMTPSubmit: props.onHandleSMTPSubmit
          }}
        />
      )}
    />
  </div>
);

export default SMTPPopUpForm;
