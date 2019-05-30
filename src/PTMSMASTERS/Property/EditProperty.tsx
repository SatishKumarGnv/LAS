import { Button, FormControl, MenuItem, Select } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

import {
  IEditProValues,
  IProTypeMasterValues
} from "src/DefaultLayout/HomePage";
import { IEditProProps } from "./PropertyType";

const EditAllocationTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditProProps & IEditProValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2>Edit Property Type</h2>
        </div>

        <div className="child-card">
          <FormControl>
            <h4>
              Category Ownership <span className="star">*</span>
            </h4>
            <Select
              name="CategoryOwnershipId"
              value={values.CategoryOwnershipId}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleCategoryOwnershipIdChange(event);
              }}
              inputProps={{
                id: "CategoryOwnershipId",
                name: "CategoryOwnershipId"
              }}
            >
              {values.allocationNameValues.map(
                (x: IProTypeMasterValues, id) => (
                  <MenuItem key={id} value={x.CategoryOwnershipId}>
                    {x.CategoryOwnershipName}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
        <div className="child-card">
          <h4>
            Property Type Name <span className="star">*</span>
          </h4>
          <TextField
            name="PropertyTypeName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.PropertyTypeName}
          />
          <div className="error-msg">
            {touched.PropertyTypeName && errors.PropertyTypeName && (
              <div>Property Type Name Is Required</div>
            )}
          </div>
        </div>

        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleEditPopUpClosePro()}
          >
            cancel
          </Button>
          <Button className="main-btn" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  CategoryOwnershipId: yup.number().required(),
  PropertyTypeName: yup.string().required()
});

export const EditPropertyTypeForm = (props: IEditProProps & IEditProValues) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleEditSavePro}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IEditProProps & IEditProValues>) => (
        <EditAllocationTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            onHandleEditPopUpClosePro: props.onHandleEditPopUpClosePro,
            onHandleEditSavePro: props.onHandleEditSavePro,
            propTypeValues: props.propTypeValues,
            // tslint:disable-next-line:object-literal-sort-keys
            CategoryOwnershipId: props.CategoryOwnershipId,
            PropertyTypeId: props.PropertyTypeId
          }}
        />
      )}
    />
  </div>
);

export default EditPropertyTypeForm;
