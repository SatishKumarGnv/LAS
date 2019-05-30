import {
  FormControl,
  // FormHelperText,
  MenuItem,
  Select
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IAddProProps,
  IAddProValues,
  IProTypeMasterValues
} from "src/DefaultLayout/HomePage";
import * as yup from "yup";

const AddAllocationInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IAddProValues & IAddProProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
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
            onChange={handleChange}
          >
            {values.allocationNameValues.map(
              (e: IProTypeMasterValues, id: number) => (
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
              <div> Category Ownership Is Required Field</div>
            </div>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          Property Type Name <span className="star">*</span>
        </h4>
        <TextField
          name="newAllocationName"
          value={values.newAllocationName}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={handleChange}
          margin="normal"
        />
        <div className="error-msg">
          {touched.newAllocationName && errors.newAllocationName && (
            <div>Property Type Name Is Required Field</div>
          )}
        </div>
      </div>

      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          color="secondary"
          onClick={values.onHandleAddPopUpClosePro}
        >
          Cancel
        </Button>
        <Button className="main-btn" color="primary" type="submit">
          Save
        </Button>
      </div>
    </div>
  </form>
);

export const modelSchema = yup.object().shape({
  CategoryOwnershipId: yup.number().required(),
  newAllocationName: yup.string().required()
});

const AddPropertyMasterForm = (props: IAddProValues & IAddProProps & any) => (
  <div>
    <Formik
      validationSchema={modelSchema}
      initialValues={{
        ...props,
        CategoryOwnershipId: props.allocationTypeList.CategoryOwnershipId,
        newAllocationName: props.newAllocationName
      }}
      // tslint:disable-next-line:jsx-no-lambda
      onSubmit={props.onHandleAddSavePro}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddProValues & IAddProProps>) => (
        <AddAllocationInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            allocationTypeList: props.allocationTypeList,
            onHandleAddSavePro: props.onHandleAddSavePro,
            // tslint:disable-next-line:object-literal-sort-keys
            onHandleAddChangePro: props.onHandleAddChangePro,
            onHandleAddPopUpPro: props.onHandleAddPopUpPro,
            onHandleAddPopUpClosePro: props.onHandleAddPopUpClosePro,
            allocationNameValues: props.allocationNameValues
          }}
        />
      )}
    />
  </div>
);

export default AddPropertyMasterForm;
