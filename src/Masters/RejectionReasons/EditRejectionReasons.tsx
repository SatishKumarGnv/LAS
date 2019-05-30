import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  IAgreementValues,
  IAllocationSubTypeValues,
  IAllocationTypeIdValues,
  IEditRejectionProps,
  IEditRejectionValues

  //   IRejectionTypeMasterValues
} from "../../Container/RejectionReasonsState";

const EditRejectionInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IEditRejectionValues & IEditRejectionProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <div className="child-card">
        <h4>
          Select Allocation To <span className="star">*</span>
        </h4>
        <FormControl error={!!(touched.AllocationId && errors.AllocationId)}>
          <Select
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
              Select Allocation To Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          Allocation Sub Type Name <span className="star">*</span>
        </h4>
        <FormControl error={!!(touched.AllocationId && errors.AllocationId)}>
          <Select
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
              Select AllocationSubType To Is Required Field
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
              Select Agreement Type To Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          RejectionType <span className="star">*</span>
        </h4>
        <TextField
          name="RejectionType"
          required={true}
          // label="RejectionType"
          value={values.RejectionType}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={handleChange}
          margin="normal"
        />
      </div>

      <Button
        className="save-btn"
        color="secondary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => values.onHandleEditPopUpClose()}
      >
        Cancel
      </Button>
      <Button
        className="save-btn"
        color="primary"
        type="submit"
        // tslint:disable-next-line:jsx-no-lambda
        // onClick={() => values.onHandleEditSave(values)}
      >
        Save
      </Button>
    </div>
  </form>
);

const EditRejectionReasonForm = (
  props: IEditRejectionValues & IEditRejectionProps
) => (
  <div>
    <Formik
      // validationSchema={modelSchema}
      initialValues={{
        ...props
      }}
      // tslint:disable-next-line:jsx-no-lambda
      onSubmit={props.onHandleEditSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IEditRejectionValues & IEditRejectionProps>
      ) => (
        <EditRejectionInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            // AgreementId: props.AgreementId,
            // AllocationId: props.AllocationId,
            // AllocationSubTypeId: props.AllocationSubTypeId,
            // RejectionType: props.RejectionType,
            agreementValues: props.agreementValues,
            allocationNameValues: props.allocationNameValues,
            allocationSubTypeValues: props.allocationSubTypeValues,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose
            // onHandleEditSave: props.onHandleEditSave
            // tslint:disable-next-line:object-literal-sort-keys
            // onHandleAddChange: props.onHandleAddChange,
            // onHandleAddPopUp: props.onHandleAddPopUp,
          }}
        />
      )}
    />
  </div>
);

export default EditRejectionReasonForm;
