import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";

import {
  IAddAgreementProps,
  IAddAgreementValues,
  IAgreementTypeAllocationDetails,
  IAgreementTypeAllocationSubTypeDetails
} from "src/Container/AgreementTypeMasterState";

const AddAgreementMasterInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IAddAgreementValues & IAddAgreementProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <div className="child-card">
        <FormControl
          error={!!(touched.AllocationTypeId && errors.AllocationTypeId)}
        >
          <h4>
            Allocation Type Name <span className="star"> *</span>
          </h4>
          <Select
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
                <MenuItem
                  className="select-dropdown-bottom"
                  key={id}
                  value={x.AllocationId}
                >
                  {x.AllocationName}
                </MenuItem>
              )
            )}
          </Select>
          {!!touched.AllocationTypeId && errors.AllocationTypeId && (
            <FormHelperText className="error-msg">
              Select Allocation To Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <FormControl
          error={!!(touched.AllocationSubTypeId && errors.AllocationSubTypeId)}
        >
          <h4>
            Allocation SubType Name<span className="star"> *</span>
          </h4>
          <Select
            name="AllocationSubTypeId"
            value={values.AllocationSubTypeId}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              //  values.handleEditAllocationChange(event);
            }}
            inputProps={{
              id: "AllocationSubTypeId",
              name: "AllocationSubTypeId"
            }}
          >
            {values.allocationTypeValues.map(
              (x: IAgreementTypeAllocationSubTypeDetails, id) => (
                <MenuItem
                  className="select-dropdown-bottom"
                  key={id}
                  value={x.AllocationId}
                >
                  {x.AllocationName}
                </MenuItem>
              )
            )}
          </Select>
          {!!touched.AllocationSubTypeId && errors.AllocationSubTypeId && (
            <FormHelperText className="error-msg">
              Allocation Sub Type Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>

      <div className="child-card">
        <h4>
          Agreement Type Name here <span className="star">*</span>
        </h4>
        <TextField
          name="newAgreementName"
          value={values.newAgreementName}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={handleChange}
          margin="normal"
        />
        <div className="error-msg">
          {touched.newAgreementName && errors.newAgreementName && (
            <div>Agreement Name Is Required</div>
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
  AllocationSubTypeId: yup.number().required(),
  AllocationTypeId: yup.number().required(),
  newAgreementName: yup.string().required()
});

const AddAgreementMasterForm = (
  props: IAddAgreementValues & IAddAgreementProps & any
) => (
  <div>
    <Formik
      validationSchema={modelSchema}
      initialValues={{
        ...props,
        AllocationSubTypeId: props.allocationTypeList.AllocationSubTypeId,
        AllocationTypeId: props.allocationTypeList.AllocationTypeId,
        newAgreementName: props.allocationTypeList.newAgreementName
      }}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IAddAgreementValues & IAddAgreementProps>
      ) => (
        <AddAgreementMasterInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            AllocationName: props.AllocationName,
            allocationTypeList: props.allocationTypeList,
            onHandleAddSave: props.onHandleAddSave,
            // tslint:disable-next-line:object-literal-sort-keys
            onHandleAddChange: props.onHandleAddChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            allocationNameValues: props.allocationNameValues,
            allocationTypeValues: props.allocationTypeValues,
            handleLandAllocationClick: props.handleLandAllocationClick
          }}
        />
      )}
    />
  </div>
);

export default AddAgreementMasterForm;
