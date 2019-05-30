import { IEditDocumentValues } from "../Container/MasterState";
import { IEditDocumentProps } from "./DocumentTypeMaster/DocumentTypeMaster";

import { Button } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

const EditDocumentTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditDocumentProps & IEditDocumentValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="child-card">
          <h4>Document Name</h4>
          <TextField
           
            name="DocumentName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.DocumentName}
          />
          <div className="error-msg">
            {touched.DocumentName && errors.DocumentName && (
              <div>{errors.DocumentName}</div>
            )}
          </div>
        </div>

        <div className="title-btn pop-up-grp">
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button type="button" onClick={() => values.onHandleEditPopUpClose()}>
            cancel
          </Button>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  DocumentName: yup.string().required()
});

export const EditDocumentTypeForm = (
  props: IEditDocumentProps & IEditDocumentValues
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleEditSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IEditDocumentProps & IEditDocumentValues>
      ) => (
        <EditDocumentTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            documentValues: props.documentValues,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSave: props.onHandleEditSave
          }}
        />
      )}
    />
  </div>
);

export default EditDocumentTypeForm;
