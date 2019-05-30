import { Button } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IEditLandAreaValues } from "src/Container/LandAreaUnitsState";
import { IEditLandAreaProps } from "./LandAreaUnits";

const EditLandAreaTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditLandAreaProps & IEditLandAreaValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2>Edit Land Area Units</h2>
        </div>

        <div className="child-card">
          <h4>
            Units Name <span className="star">*</span>
          </h4>
          <TextField
           
            name="UnitsName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.UnitsName}
          />
          <div className="error-msg">
            {touched.UnitsName && errors.UnitsName && (
              <div>{errors.UnitsName}</div>
            )}
          </div>
        </div>

        <div className="title-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleEditPopUpClose()}
          >
            cancel
          </Button>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button
            className="main-btn"
            type="submit"
            // tslint:disable-next-line:jsx-no-lambda
            // onClick={() => values.onHandleEditSave(values)}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  UnitsName: yup.string().required()
});

export const EditLandAreaTypeForm = (
  props: IEditLandAreaProps & IEditLandAreaValues
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
        fprops: FormikProps<IEditLandAreaProps & IEditLandAreaValues>
      ) => (
        <EditLandAreaTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            landAreaValues: props.landAreaValues,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSave: props.onHandleEditSave
          }}
        />
      )}
    />
  </div>
);

export default EditLandAreaTypeForm;
