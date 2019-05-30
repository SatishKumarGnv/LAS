import { Button, FormControl, MenuItem, Select } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IBuildingClassificationDropDownValues,
  IEditNatureUsageValues,
  IPropertyTypeDropDownValues
} from "src/DefaultLayout/HomePage";

const EditNatureUsageInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditNatureUsageValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2>Edit Nature Usage</h2>
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
              {values.PropertyTypeDropDownDataValues &&
                values.PropertyTypeDropDownDataValues.map(
                  (e: IPropertyTypeDropDownValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.PropertyTypeId}
                    >
                      {e.PropertyTypeName}
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.PropertyTypeId && errors.PropertyTypeId && (
              <div className="error-msg">
                <div>Property Type Is Required Field</div>
              </div>
            )}
          </FormControl>
        </div>
        <br />
        <div className="child-card">
          <h4>
            Building Classification <span className="star"> *</span>
          </h4>
          <FormControl
            error={
              !!(
                touched.BuildingClassificationId &&
                errors.BuildingClassificationId
              )
            }
          >
            <Select
              name="BuildingClassificationId"
              value={values.BuildingClassificationId}
              inputProps={{
                id: "BuildingClassificationId",
                name: "BuildingClassificationId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleBuildingClassificationIdChange(event);
              }}
            >
              {values.buildingClassificationDropDownData &&
                values.buildingClassificationDropDownData.map(
                  (e: IBuildingClassificationDropDownValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.BuildingClassificationId}
                    >
                      {e.BuildingClassificationName}
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.BuildingClassificationId &&
              errors.BuildingClassificationId && (
                <div className="error-msg">
                  <div>Building Classification Is Required Field</div>
                </div>
              )}
          </FormControl>
        </div>
        <div className="child-card">
          <h4>
            Nature Usage Name<span className="star">*</span>{" "}
          </h4>
          <TextField
            name="NatureUsageName"
            // required={true}

            value={values.NatureUsageName}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleNatureUsageNameChange(event);
            }}
            margin="normal"
          />
          <div className="error-msg">
            {touched.NatureUsageName && errors.NatureUsageName && (
              <div>Nature Usage Name is Required Field</div>
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
  BuildingClassificationId: yup
    .number()
    .min(1)
    .required(),
  PropertyTypeId: yup
    .number()
    .min(1)
    .required(),

  NatureUsageName: yup.string().required()
});

export const EditNatureUsageForm = (props: IEditNatureUsageValues) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleEditSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IEditNatureUsageValues>) => (
        <EditNatureUsageInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            BuildingClassificationId: props.BuildingClassificationId,
            BuildingClassificationName: props.BuildingClassificationName,
            NatureUsageId: props.NatureUsageId,
            NatureUsageList: props.NatureUsageList,
            PropertyTypeDropDownDataValues:
              props.PropertyTypeDropDownDataValues,
            PropertyTypeId: props.PropertyTypeId,
            buildingClassificationDropDownData:
              props.buildingClassificationDropDownData,
            handleBuildingClassificationIdChange:
              props.handleBuildingClassificationIdChange,
            handleNatureUsageNameChange: props.handleNatureUsageNameChange,
            handlePropertyTypeIdChange: props.handlePropertyTypeIdChange,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSave: props.onHandleEditSave
          }}
        />
      )}
    />
  </div>
);

export default EditNatureUsageForm;
