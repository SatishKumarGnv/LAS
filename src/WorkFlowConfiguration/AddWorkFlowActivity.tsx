import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";

import {
  IAddActivityProps,
  IAddActivityValues
} from "../Container/WorkFlowActivityState";
const AddWorkFlowInnerForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit
}: FormikProps<IAddActivityValues & IAddActivityProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className="child-card">
      <h4>
        Work Flow Activity <span className="star">*</span>
      </h4>
      <TextField
       
        id="newWorkFlowActivityName"
        name="newWorkFlowActivityName"
        value={values.newWorkFlowActivityName}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={event => {
          handleChange(event);
          values.onHandleAddChange(event);
        }}
        margin="normal"
      />
      <div className="error-msg">
        {touched.newWorkFlowActivityName && errors.newWorkFlowActivityName && (
          <div> Workflow Activity Name Is Required</div>
        )}
      </div>
      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          color="secondary"
          onClick={values.onHandleAddPopUpClose}
        >
          Close
        </Button>
        <Button
          type="submit"
          className="main-btn"
          color="primary"
          // tslint:disable-next-line:jsx-no-lambda
          // onClick={() =>
          //   props.onHandleAddSave(
          //     props.WorkFlowActivityList.length + 1,
          //     props.newWorkFlowActivityName
          //   )
          // }
        >
          Save Changes
        </Button>
      </div>
    </div>
  </form>
);
export const modelSchema = yup.object().shape({
  newWorkFlowActivityName: yup.string().required()
});

const AddWorkFlowActivityForm = (
  props: IAddActivityValues & IAddActivityProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddActivityValues & IAddActivityProps>) => (
        <AddWorkFlowInnerForm
          {...fprops}
          values={{
            WorkFlowActivityList: props.WorkFlowActivityList,
            id: props.id,
            newWorkFlowActivityName: props.newWorkFlowActivityName,
            onHandleAddChange: props.onHandleAddChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave
          }}
        />
      )}
    />
  </div>
);

export default AddWorkFlowActivityForm;
