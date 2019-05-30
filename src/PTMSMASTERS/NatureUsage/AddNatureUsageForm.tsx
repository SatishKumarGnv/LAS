import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as React from "react";
import {
  IAddNatureUsageValues,
  IBuildingClassificationDropDownValues,
  IPropertyTypeDropDownValues
} from "src/DefaultLayout/HomePage";

const AddNatureUsageInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched
}: FormikProps<IAddNatureUsageValues>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    {/* <div className="white-card-form"> */}
    <div>
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
            {values.propertyTypeDropDownValues &&
              values.propertyTypeDropDownValues.map(
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
              values.handleBuildingClassificatioIdChange(event);
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
      <br />
      <div className="child-card">
        <h4>
          Nature Usage Name <span className="star">*</span>{" "}
        </h4>
        <TextField
          name="NatureUsageName"
          // required={true}

          value={values.NatureUsageName}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            handleChange(event);
            values.onHandleNatureUsageNameChange(event);
          }}
          margin="normal"
        />
        <div className="error-msg">
          {touched.NatureUsageName && errors.NatureUsageName && (
            <div>Nature Usage Name Is Required Field</div>
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
    </div>
    {/* </div> */}
  </form>
);

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

const AddNatureUsageForm = (props: IAddNatureUsageValues) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddNatureUsageValues>) => (
        <AddNatureUsageInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            BuildingClassificationId: props.BuildingClassificationId,
            NatureUsageName: props.NatureUsageName,
            PropertyTypeId: props.PropertyTypeId,
            // tslint:disable-next-line:object-literal-sort-keys
            propertyTypeDropDownValues: props.propertyTypeDropDownValues,
            // tslint:disable-next-line:object-literal-sort-keys
            buildingClassificationDropDownData:
              props.buildingClassificationDropDownData,
            handleBuildingClassificatioIdChange:
              props.handleBuildingClassificatioIdChange,
            onHandleNatureUsageNameChange: props.onHandleNatureUsageNameChange,
            handlePropertyTypeIdChange: props.handlePropertyTypeIdChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave
            // onHandleAddChange: props.onHandleAddChange,
          }}
        />
      )}
    />
  </div>
);

export default AddNatureUsageForm;
