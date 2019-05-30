// import { FormControl, MenuItem, Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";

import { FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  IAddRejectionProps,
  IAddRejectionValues,
  IAgreementValues,
  IAllocationSubTypeValues,
  IAllocationTypeIdValues
  //   IRejectionTypeMasterValues
} from "../../Container/RejectionReasonsState";

const AddRejectionInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IAddRejectionValues & IAddRejectionProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <div className="child-card">
        <h4>
          Allocation Type Name <span className="star">*</span>
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
            onChange={event => {
              handleChange(event);
              values.handleAllocationTypeChange(event);
            }}
          >
            {values.allocationNameValues.map(
              (e: IAllocationTypeIdValues, id: number) => (
                <MenuItem
                  key={id}
                  className="select-dropdown-bottom"
                  value={e.AllocationId}
                >
                  {e.AllocationName}
                </MenuItem>
              )
            )}
          </Select>
          {!!touched.AllocationId && errors.AllocationId && (
            <FormHelperText className="error-msg">
              Allocation Id Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>

      <div className="child-card">
        <h4>
          Allocation SubType Name<span className="star">*</span>
        </h4>
        <FormControl
          error={!!(touched.AllocationSubTypeId && errors.AllocationSubTypeId)}
        >
          <Select
            name="AllocationSubTypeId"
           
            value={values.AllocationSubTypeId}
            inputProps={{
              id: "AllocationSubTypeId",
              name: "AllocationSubTypeId"
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleAllocationSubtTypeChange(event);
            }}
          >
            {values.allocationSubTypeValues.map(
              (e: IAllocationSubTypeValues, id: number) => (
                <MenuItem
                  key={id}
                  className="select-dropdown-bottom"
                  value={e.AllocationId}
                >
                  {e.AllocationName}
                </MenuItem>
              )
            )}
          </Select>
          {!!touched.AllocationSubTypeId && errors.AllocationSubTypeId && (
            <FormHelperText className="error-msg">
              {" "}
              Allocation Sub Type Name Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          Agreement Type Name here <span className="star">*</span>
        </h4>
        <FormControl error={!!(touched.AgreementId && errors.AgreementId)}>
          <Select
            name="AgreementId"
           
            value={values.AgreementId}
            inputProps={{
              id: "AgreementId",
              name: "AgreementId"
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={handleChange}
          >
            {values.agreementValues.map((e: IAgreementValues, id: number) => (
              <MenuItem
                key={id}
                className="select-dropdown-bottom"
                value={e.AgreementId}
              >
                {e.AgreementName}
              </MenuItem>
            ))}
          </Select>
          {!!touched.AgreementId && errors.AgreementId && (
            <FormHelperText className="error-msg">
              {" "}
              Agreement Type Name Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          Rejection Reasons <span className="star">*</span>
        </h4>
        <TextField
         
          name="RejectionType"
          value={values.RejectionType}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={handleChange}
          margin="normal"
        />
        <div className="error-msg">
          {touched.RejectionType && errors.RejectionType && (
            <div>Rejection Type Is Required</div>
          )}
        </div>
      </div>
      <div className="popup-bottom-btn ">
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
  AgreementId: yup.number().required(),
  AllocationId: yup.number().required(),
  AllocationSubTypeId: yup.number().required(),
  RejectionType: yup.string().required()
});

const AddRejectionReasonForm = (
  props: IAddRejectionValues & IAddRejectionProps & any
) => (
  <div>
    <Formik
      validationSchema={modelSchema}
      initialValues={{
        ...props,
        AgreementId: props.allocationTypeList.AgreementId,
        AllocationId: props.allocationTypeList.AllocationId,
        AllocationSubTypeId: props.allocationTypeList.AllocationSubTypeId,
        RejectionType: props.allocationTypeList.RejectionType
      }}
      // tslint:disable-next-line:jsx-no-lambda
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IAddRejectionValues & IAddRejectionProps & any>
      ) => (
        <AddRejectionInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            agreementValues: props.agreementValues,
            allocationNameValues: props.allocationNameValues,
            allocationSubTypeValues: props.allocationSubTypeValues,
            allocationTypeList: props.allocationTypeList,
            handleAllocationTypeChange: props.handleAllocationTypeChange,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave

            // tslint:disable-next-line:object-literal-sort-keys
            // onHandleAddChange: props.onHandleAddChange,
            // onHandleAddPopUp: props.onHandleAddPopUp,
          }}
        />
      )}
    />
  </div>
);

export default AddRejectionReasonForm;
