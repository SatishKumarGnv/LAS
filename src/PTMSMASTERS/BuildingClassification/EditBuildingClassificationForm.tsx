import { Button, FormControl, MenuItem, Select } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IEditBuildingClassificationMasterValues,
  IPropertyTypeDropDownValues
} from "src/DefaultLayout/HomePage";

const EditBuildingClassificationInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditBuildingClassificationMasterValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {/* <div className="white-card-form"> */}
      <div>
        <div className="popup-title">
          <h2>Edit Building Classifcation</h2>
        </div>
        <div className="child-card">
          <h4>
            Property Type <span className="star"> *</span>
          </h4>
          <FormControl
            error={!!(touched.PropertyTypeId && errors.PropertyTypeId)}
          >
            <Select
              name="PropertyTypeId"
              value={values.PropertyTypeId}
              inputProps={{
                id: "PropertyTypeId",
                name: "PropertyTypeId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handlePropertyTypeIdChange(event);
              }}
            >
              {values.propertyTypeDropDownValues.map(
                (e: IPropertyTypeDropDownValues, id: number) => (
                  <MenuItem key={id} value={e.PropertyTypeId}>
                    {e.PropertyTypeName}
                  </MenuItem>
                )
              )}
            </Select>
            {!!touched.PropertyTypeId && errors.PropertyTypeId && (
              <div className="error-msg">
                <div>Category Ownership Is Required Field</div>
              </div>
            )}
          </FormControl>
        </div>
        <br />
        <div className="child-card">
          <h4>
            Building Classification Name <span className="star">*</span>{" "}
          </h4>
          <TextField
            name="BuildingClassificationName"
            // required={true}

            value={values.BuildingClassificationName}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.onHandleBuildingClassificationNameChange(event);
            }}
            margin="normal"
          />
          <div className="error-msg">
            {touched.BuildingClassificationName &&
              errors.BuildingClassificationName && (
                <div>Building Classification Name is Required Field</div>
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
  BuildingClassificationName: yup.string().required(),
  PropertyTypeId: yup
    .number()
    .min(1)
    .required()
});

export const EditBuildingClassificationForm = (
  props: IEditBuildingClassificationMasterValues
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
        fprops: FormikProps<IEditBuildingClassificationMasterValues>
      ) => (
        <EditBuildingClassificationInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            BuildingClassificationId: props.BuildingClassificationId,
            BuildingClassificationName: props.BuildingClassificationName,
            PropertyTypeId: props.PropertyTypeId,
            propertyTypeDropDownValues: props.propertyTypeDropDownValues,
            // tslint:disable-next-line:object-literal-sort-keys
            buildingClassificationItems: props.buildingClassificationItems,

            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditPropertyDepartmetNameChange:
              props.onHandleEditPropertyDepartmetNameChange,
            onHandleEditSave: props.onHandleEditSave
          }}
        />
      )}
    />
  </div>
);

export default EditBuildingClassificationForm;
