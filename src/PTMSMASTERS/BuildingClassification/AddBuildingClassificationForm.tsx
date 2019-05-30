import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as React from "react";
import {
  IAddBuildingClassificationValues,
  IPropertyTypeDropDownValues
} from "src/DefaultLayout/HomePage";

const AddBuildingClassificationInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched
}: FormikProps<IAddBuildingClassificationValues>) => (
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
            {values.propertyTypeDropDownValues.map(
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
              <div>Building Classification Name is a Required Field</div>
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
  BuildingClassificationName: yup.string().required(),
  PropertyTypeId: yup
    .number()
    .min(1)
    .required()
});

const AddBuildingClassificationForm = (
  props: IAddBuildingClassificationValues
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddBuildingClassificationValues>) => (
        <AddBuildingClassificationInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            BuildingClassificationName: props.BuildingClassificationName,
            PropertyTypeId: props.PropertyTypeId,
            // tslint:disable-next-line:object-literal-sort-keys
            handlePropertyTypeIdChange: props.handlePropertyTypeIdChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave,
            onHandleBuildingClassificationNameChange:
              props.onHandleBuildingClassificationNameChange
            // onHandleAddChange: props.onHandleAddChange,
          }}
        />
      )}
    />
  </div>
);

export default AddBuildingClassificationForm;
