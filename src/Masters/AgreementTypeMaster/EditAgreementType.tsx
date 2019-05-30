import { Button, FormControl, MenuItem, Select } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IAgreementTypeAllocationDetails,
  IAgreementTypeAllocationSubTypeDetails,
  IEditAgreementValues
} from "src/Container/AgreementTypeMasterState";
import { IEditAgreementProps } from "./AgreementTypeMaster";

const EditAgreementTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditAgreementProps & IEditAgreementValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2> Edit Agreement Type Details</h2>
        </div>

        <div className="child-card">
          <FormControl>
            <h4>
              Allocated To <span className="star">*</span>
            </h4>
            <Select
              className="select-value"
              name="AllocationTypeId"
              value={values.AllocationTypeId}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleLandAllocationClick(event);
              }}
              inputProps={{
                id: "AllocationTypeId",
                name: "AllocationTypeId"
              }}
            >
              {values.allocationNameValues.map(
                (x: IAgreementTypeAllocationDetails, id) => (
                  <MenuItem key={id} value={x.AllocationId}>
                    {x.AllocationName}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
        <div className="child-card">
          <FormControl>
            <h4>
              Allocation SubType <span className="star">*</span>
            </h4>
            <Select
              className="select-value"
              name="AllocationSubTypeId"
              value={values.AllocationSubTypeId}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleEditAllocationChange(event);
              }}
              inputProps={{
                id: "AllocationSubTypeId",
                name: "AllocationSubTypeId"
              }}
            >
              {values.allocationTypeValues.map(
                (x: IAgreementTypeAllocationSubTypeDetails, id) => (
                  <MenuItem
                   
                    key={id}
                    value={x.AllocationId}
                  >
                    {x.AllocationName}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
        <div className="child-card">
          <h4>
            Agreement Name <span className="star">*</span>{" "}
          </h4>
          <TextField
           
            name="AgreementName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.AgreementName}
          />
          <div className="error-msg">
            {touched.AgreementName && errors.AgreementName && (
              <div>Agreement Name Is Required</div>
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
  AgreementName: yup.string().required()
});

export const EditAgreementTypeForm = (
  props: IEditAgreementProps & IEditAgreementValues
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
        fprops: FormikProps<IEditAgreementProps & IEditAgreementValues>
      ) => (
        <EditAgreementTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,

            AgreementId: props.AgreementId,
            AllocationSubTypeId: props.AllocationSubTypeId,
            AllocationTypeId: props.AllocationTypeId,
            EditAgreementValues: props.EditAgreementValues,
            allocationNameValues: props.allocationNameValues,
            allocationTypeValues: props.allocationTypeValues,
            handleLandAllocationClick: props.handleLandAllocationClick,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSave: props.onHandleEditSave
          }}
        />
      )}
    />
  </div>
);

export default EditAgreementTypeForm;
