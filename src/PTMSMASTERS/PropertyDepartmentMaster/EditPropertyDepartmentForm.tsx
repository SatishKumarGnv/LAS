import { Button, FormControl, MenuItem, Select } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IEditPropertyDepartmentValues } from "src/DefaultLayout/HomePage";

const EditPropertyDepartmentInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditPropertyDepartmentValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {/* <div className="white-card-form"> */}
      <div>
        <div className="popup-title">
          <h2>Edit Property Department</h2>
        </div>
        <div className="child-card">
          <h4>
            Category Ownership <span className="star"> *</span>
          </h4>
          <FormControl
            error={
              !!(touched.CategoryOwnershipId && errors.CategoryOwnershipId)
            }
          >
            <Select
              name="CategoryOwnershipId"
              value={values.CategoryOwnershipId}
              inputProps={{
                id: "CategoryOwnershipId",
                name: "CategoryOwnershipId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleCategoryOwnershipIdChange(event);
              }}
            >
              {values.categoryOwnerShipDropDownDataValues.map(
                (e: any, id: number) => (
                  <MenuItem
                    className="select-dropdown-bottom"
                    key={id}
                    value={e.CategoryOwnershipId}
                  >
                    {e.CategoryOwnershipName}
                  </MenuItem>
                )
              )}
            </Select>
            {!!touched.CategoryOwnershipId && errors.CategoryOwnershipId && (
              <div className="error-msg">
                <div>Category Ownership Is Required Field</div>
              </div>
            )}
          </FormControl>
        </div>
        <br />
        <div className="child-card">
          <h4>
            Property Department Name <span className="star">*</span>{" "}
          </h4>
          <TextField
            name="PropertyDepartmentName"
            // required={true}

            value={values.PropertyDepartmentName}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.onHandleEditPropertyDepartmetNameChange(event);
            }}
            margin="normal"
          />
          <div className="error-msg">
            {touched.PropertyDepartmentName &&
              errors.PropertyDepartmentName && (
                <div>Property Department Name is Required Field</div>
              )}
          </div>
        </div>
        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            color="secondary"
            onClick={values.onHandleEditPopUpClose}
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
      </div>
      {/* </div> */}
    </form>
  );
};

export const modelSchema = yup.object().shape({
  CategoryOwnershipId: yup
    .number()
    .min(1)
    .required(),
  PropertyDepartmentName: yup.string().required()
});

export const EditPropertyDepartmentForm = (
  props: IEditPropertyDepartmentValues
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleEditSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IEditPropertyDepartmentValues>) => (
        <EditPropertyDepartmentInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            CategoryOwnershipId: props.CategoryOwnershipId,
            PropertyDepartmentId: props.PropertyDepartmentId,
            PropertyDepartmentName: props.PropertyDepartmentName,
            categoryOwnerShipDropDownDataValues:
              props.categoryOwnerShipDropDownDataValues,
            // tslint:disable-next-line:object-literal-sort-keys
            handleCategoryOwnershipIdChange:
              props.handleCategoryOwnershipIdChange,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditPropertyDepartmetNameChange:
              props.onHandleEditPropertyDepartmetNameChange,
            onHandleEditSave: props.onHandleEditSave,
            propertyDepartmentItems: props.propertyDepartmentItems
          }}
        />
      )}
    />
  </div>
);

export default EditPropertyDepartmentForm;
