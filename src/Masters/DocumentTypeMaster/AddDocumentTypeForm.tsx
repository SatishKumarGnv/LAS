import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import * as React from "react";
import {
  IAddDocumentProps,
  IAddDocumentValues
} from "../../Container/MasterState";

const AddDocumentTypeInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched
}: FormikProps<IAddDocumentValues & IAddDocumentProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    {/* <div className="white-card-form"> */}
    <div className="white-cards">
      <h4>
        Document Type Name <span className="star">*</span>{" "}
      </h4>
      <TextField
        name="newDocumentName"
        // required={true}

        value={values.newDocumentName}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={event => {
          handleChange(event);
          values.onHandleAddChange(event);
        }}
        margin="normal"
      />
      <div className="error-msg">
        {touched.newDocumentName && errors.newDocumentName && (
          <div>Document Name Is Required</div>
        )}
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
      <Button
        className="main-btn"
        color="primary"
        type="submit"
        // tslint:disable-next-line:jsx-no-lambda
        // onClick={() =>
        //   values.onHandleAddSave(
        //     values.documentTypeMasterList.length + 1,
        //     values.newDocumentName
        //   )
        // }
      >
        Save
      </Button>
    </div>
  </form>
);

export const modelSchema = yup.object().shape({
  newDocumentName: yup.string().required()
});

const AddDocumentTypeForm = (props: IAddDocumentValues & IAddDocumentProps) => (
  <div className="white-cards">
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddDocumentValues & IAddDocumentProps>) => (
        <AddDocumentTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            DocumentId: props.DocumentId,
            documentTypeMasterList: props.documentTypeMasterList,
            newDocumentName: props.newDocumentName,
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

export default AddDocumentTypeForm;
