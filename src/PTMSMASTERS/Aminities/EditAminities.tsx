import { Button } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IEditAminitiesValues } from "src/DefaultLayout/HomePage";
import { IEditAminityProps } from "./Aminities";

const EditDocumentTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditAminityProps & IEditAminitiesValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2>Edit Amenities </h2>
        </div>
        <div className="child-card">
          <h4>
            Amenity Name <span className="star">*</span>
          </h4>
          <TextField
            name="AmenitiesName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.AmenitiesName}
          />
          <div className="error-msg">
            {touched.AmenitiesName && errors.AmenitiesName && (
              <div>Amenity Name Is Required</div>
            )}
          </div>
        </div>

        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleEditPopUpCloseAminity()}
          >
            cancel
          </Button>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button className="main-btn" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  AmenitiesName: yup.string().required()
});

export const EditAminityTypeForm = (
  props: IEditAminityProps & IEditAminitiesValues
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleEditSaveAminity}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IEditAminityProps & IEditAminitiesValues>
      ) => (
        <EditDocumentTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            aminityValues: props.aminityValues,
            onHandleEditPopUpCloseAminity: props.onHandleEditPopUpCloseAminity,
            onHandleEditSaveAminity: props.onHandleEditSaveAminity
          }}
        />
      )}
    />
  </div>
);

export default EditAminityTypeForm;
