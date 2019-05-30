import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";
import { IAddActivityProps } from "../Container/WorkFlowMappingState";
const AddAllocationInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IAddActivityProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <div className="child-card">
        <h4>
          Work Flow-Activity <span className="star"> *</span>
        </h4>
        <TextField
         
          id="newWorkFlowActivityName"
          name="newWorkFlowActivityName"
          value={values.newWorkFlowActivityName}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={handleChange}
          margin="normal"
        />
        <div className="error-msg ">
          {touched.newWorkFlowActivityName && errors.newWorkFlowActivityName}
        </div>
      </div>
      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          color="secondary"
          onClick={values.onHandleAddPopUpClose}
        >
          Cancel
        </Button>
        <Button className="main-btn" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
  </form>
);
export const modelSchema = yup.object().shape({
  newWorkFlowActivityName: yup
    .string()
    .nullable(true)
    .matches(/^\S+$/, "WorkFlow Activity Name Doesn't Allow Spaces")
    .required("WorkFlow Activity Name Is Required")
});

const AddActivityWorkFlowForm = (props: IAddActivityProps) => (
  <Formik
    // validationSchema={modelSchema}
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    // tslint:disable-next-line:jsx-no-lambda
    onSubmit={props.onHandleAddSave}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<IAddActivityProps>) => (
      <AddAllocationInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          onHandleAddSave: props.onHandleAddSave,
          // tslint:disable-next-line:object-literal-sort-keys
          onHandleAddPopUp: props.onHandleAddPopUp,
          onHandleAddPopUpClose: props.onHandleAddPopUpClose
        }}
      />
    )}
  />
);

export default AddActivityWorkFlowForm;
