import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as React from "react";
import { IAddPropertyDepartmentValues } from "src/DefaultLayout/HomePage";

const AddPropertyDepartmentInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched
}: FormikProps<IAddPropertyDepartmentValues>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    {/* <div className="white-card-form"> */}
    <div>
      <div className="child-card">
        <h4>
          Category Ownership <span className="star"> *</span>
        </h4>
        <FormControl
          error={!!(touched.CategoryOwnershipId && errors.CategoryOwnershipId)}
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
                  key={id}
                  className="select-dropdown-bottom"
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
            values.onHandlePropertyDepartmentNameChange(event);
          }}
          margin="normal"
        />
        <div className="error-msg">
          {touched.PropertyDepartmentName && errors.PropertyDepartmentName && (
            <div>Property Department Name is Required Field </div>
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
  CategoryOwnershipId: yup
    .number()
    .min(1)
    .required(),
  PropertyDepartmentName: yup.string().required()
});

const AddPropertyDepartmentForm = (props: IAddPropertyDepartmentValues) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddPropertyDepartmentValues>) => (
        <AddPropertyDepartmentInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            CategoryOwnershipId: props.CategoryOwnershipId,
            PropertyDepartmentName: props.PropertyDepartmentName,
            categoryOwnerShipDropDownDataValues:
              props.categoryOwnerShipDropDownDataValues,
            propertyDepartmentMasterList: props.propertyDepartmentMasterList,

            // tslint:disable-next-line:object-literal-sort-keys
            handleCategoryOwnershipIdChange:
              props.handleCategoryOwnershipIdChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave,
            propertyDepartmentItems: props.propertyDepartmentItems
            // onHandleAddChange: props.onHandleAddChange,
          }}
        />
      )}
    />
  </div>
);

export default AddPropertyDepartmentForm;
