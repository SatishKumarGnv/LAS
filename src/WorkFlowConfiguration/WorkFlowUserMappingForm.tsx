import FormControl from "@material-ui/core/FormControl";

import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";

import {
  IAgremmentTypeValues,
  IAllocationValues,
  ISelectAgrementTypeProps,
  ISelectAllocationProps
} from "../DefaultLayout/HomePage";
import {
  // IActivityValues,
  // tslint:disable-next-line:ordered-imports
  IAllocationToValues
} from "../Container/WorkFlowMappingState";
import { IWorkFlowUserStateValues } from "../Container/WorkFlowUserMappingState";
const WorkFlowInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IWorkFlowUserStateValues & ISelectAllocationProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className="white-card ">
      <div className="child-card">
        <h4>
          Allocation To <span className="star">*</span>
        </h4>
        <FormControl>
          <Select
           
            value={values.LandAllocatedToId}
            inputProps={{
              id: "LandAllocatedToId",
              name: "LandAllocatedToId"
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              handleChange(event);
              values.handleLandAllocationClick(event);
            }}
          >
            {values.selectLandAllocationTypeValues.map(
              (e: IAllocationToValues, id: number) => (
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
        </FormControl>
      </div>
      <br />
      {/* <TextField
        name="authorizedPersonName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.authorizedPersonName}
      /> */}

      <br />
      <div className="child-card">
        <h4>
          Allocation Type <span className="star">*</span>
        </h4>
        <FormControl>
          <Select
           
            value={values.AllocationId}
            inputProps={{
              id: "AllocationId",
              name: "AllocationId"
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              handleChange(event);
              values.handleAllocationChange(event);
            }}
          >
            {values.selectAllocationTypeValues.map(
              (e: IAllocationValues, id: number) => (
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
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          {" "}
          Agreement Type <span className="star">*</span>
        </h4>
        <FormControl>
          <Select
           
            value={values.AgreementId}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleAgreementClick(event);
            }}
            inputProps={{
              name: "AgreementId"
            }}
          >
            {values.agreementTypeValues.map(
              (e: IAgremmentTypeValues, id: number) => (
                <MenuItem key={id} value={e.AgreementId}>
                  {e.AgreementName}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </div>

      {/* <div>
        <Button type="submit" className="submit-btn">
          SUBMIT
        </Button>
      </div> */}
    </div>
  </form>
);

export interface ILandSaveAndContinueProps {
  onHandleSubmit(
    values: IWorkFlowUserStateValues & ISelectAllocationProps
  ): void;
}
export const modelSchema = yup.object().shape({});

export const WorkFlowMappingForm = (
  props: IWorkFlowUserStateValues &
    ILandSaveAndContinueProps &
    ISelectAllocationProps &
    ISelectAgrementTypeProps
) => (
  <Formik
    // validationSchema={modelSchema}
    initialValues={{
      ...props
    }}
    onSubmit={props.onHandleSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<IWorkFlowUserStateValues & ISelectAllocationProps>
    ) => (
      <div>
        <WorkFlowInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            LandAllocatedToId: props.LandAllocatedToId,
            agreementTypeValues: props.agreementTypeValues,
            selectAllocationTypeValues: props.selectAllocationTypeValues,
            selectLandAllocationTypeValues: props.selectLandAllocationTypeValues
          }}
        />
      </div>
    )}
  />
);

export default WorkFlowMappingForm;
