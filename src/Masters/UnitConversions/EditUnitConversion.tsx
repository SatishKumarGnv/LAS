import { Button, Card, CardContent, Typography } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

import { IEditUnitConversionValues } from "src/Container/UnitConversionState";
import { IEditUnitProps } from "./UnitConversionTypeMaster";

const EditUnitConversionTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditUnitProps & IEditUnitConversionValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <Card>
          <CardContent>
            <Typography
              gutterBottom={true}
              variant="headline"
              component="h4"
              className="grap-heading"
            >
              {/* <img src="/images/table-icon.png" /> */}
              Edit Land Area Units
            </Typography>
          </CardContent>
          <div className="child-card">
            <h4>
              Units Name <span className="star">*</span>
            </h4>
            <TextField
             
              name="UnitName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.UnitName}
            />
            <div className="error-msg">
              {touched.UnitName && errors.UnitName && (
                <div>{errors.UnitName}</div>
              )}
            </div>
          </div>

          <div className="title-btn">
            <Button
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.onHandleEditPopUpClose()}
            >
              cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </Card>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  UnitName: yup.string().required()
});

export const EditUnitConversionTypeForm = (
  props: IEditUnitProps & IEditUnitConversionValues
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
        fprops: FormikProps<IEditUnitProps & IEditUnitConversionValues>
      ) => (
        <EditUnitConversionTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSave: props.onHandleEditSave,
            unitValues: props.unitValues
          }}
        />
      )}
    />
  </div>
);

export default EditUnitConversionTypeForm;
