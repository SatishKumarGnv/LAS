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
import * as yup from "yup";

import {
  IAddAllocaionValues,
  IAddAllocationProps,
  IAllocationTypeMasterValues
} from "../../Container/AllocationTypeMasterState";

const AddAllocationInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IAddAllocaionValues & IAddAllocationProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <div className="child-card">
        <h4>
          Allocate To <span className="star"> *</span>
        </h4>
        <FormControl error={!!(touched.AllocationId && errors.AllocationId)}>
          <Select
            name="AllocationId"
            value={values.AllocationId}
            inputProps={{
              id: "AllocationId",
              name: "AllocationId"
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={handleChange}
          >
            {values.allocationNameValues.map(
              (e: IAllocationTypeMasterValues, id: number) => (
                <MenuItem
                  className="select-dropdown-bottom"
                  key={id}
                  value={e.AllocationId}
                >
                  {e.AllocationName}
                </MenuItem>
              )
            )}
          </Select>
          {!!touched.AllocationId && errors.AllocationId && (
            <div className="error-msg">
              <div> Select Allocation To Is Required Field</div>
            </div>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          Allocation Type <span className="star">*</span>
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
            <div>Allocation Name Is Required</div>
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
        <Button className="main-btn" color="primary" type="submit">
          Save
        </Button>
      </div>
    </div>
  </form>
);

export const modelSchema = yup.object().shape({
  AllocationId: yup.number().required(),
  newAllocationName: yup.string().required()
});

const AddAllocationMasterForm = (
  props: IAddAllocaionValues & IAddAllocationProps & any
) => (
  <div>
    <Formik
      validationSchema={modelSchema}
      initialValues={{
        ...props,
        AllocationId: props.allocationTypeList.AllocationId,
        newAllocationName: props.newAllocationName
      }}
      // tslint:disable-next-line:jsx-no-lambda
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IAddAllocaionValues & IAddAllocationProps>
      ) => (
        <AddAllocationInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            allocationTypeList: props.allocationTypeList,
            onHandleAddSave: props.onHandleAddSave,
            // tslint:disable-next-line:object-literal-sort-keys
            onHandleAddChange: props.onHandleAddChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            allocationNameValues: props.allocationNameValues
          }}
        />
      )}
    />
  </div>
);

export default AddAllocationMasterForm;
