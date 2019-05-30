import { Button, FormControl, MenuItem, Select } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IAllocationTypeMasterValues,
  IEditAllocationValues
} from "src/Container/AllocationTypeMasterState";
import { IEditAllocationProps } from "./AllocationTypeMasterTable";

const EditAllocationTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditAllocationProps & IEditAllocationValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2>Edit Allocation Type</h2>
        </div>

        <div className="child-card">
          <FormControl>
            <h4>
              Allocated To <span className="star">*</span>
            </h4>
            <Select
             
              name="AllocationId"
              value={values.AllocationId}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={handleChange}
              inputProps={{
                id: "AllocationId",
                name: "AllocationId"
              }}
            >
              {values.allocationNameValues.map(
                (x: IAllocationTypeMasterValues, id) => (
                  <MenuItem key={id} value={x.AllocationId}>
                    {x.AllocationName}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
        <div className="child-card">
          <h4>
            AllocationSubType Name <span className="star">*</span>
          </h4>
          <TextField
           
            name="AllocationSubTypeName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.AllocationSubTypeName}
          />
          <div className="error-msg">
            {touched.AllocationSubTypeName && errors.AllocationSubTypeName && (
              <div>Allocation Sub Type Name Is Required</div>
            )}
          </div>
        </div>

        <div className="title-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleEditPopUpClose()}
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
  AllocationId: yup.number().required(),
  AllocationSubTypeName: yup.string().required()
});

export const EditAllocationTypeForm = (
  props: IEditAllocationProps & IEditAllocationValues
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
        fprops: FormikProps<IEditAllocationProps & IEditAllocationValues>
      ) => (
        <EditAllocationTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            allocationValues: props.allocationValues,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSave: props.onHandleEditSave
          }}
        />
      )}
    />
  </div>
);

export default EditAllocationTypeForm;
