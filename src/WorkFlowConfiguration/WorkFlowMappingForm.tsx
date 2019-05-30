import FormControl from "@material-ui/core/FormControl";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";

// // tslint:disable-next-line:ordered-imports
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Checkbox from "@material-ui/core/Checkbox";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import ListItemText from "@material-ui/core/ListItemText";
// import { isArray } from "util";
import { FormHelperText } from "@material-ui/core";
import { IAllocationToValues } from "../Container/WorkFlowActivityState";
import { IWorkFlowStateValues } from "../Container/WorkFlowMappingState";
import {
  IAgremmentTypeValues,
  IAllocationValues,
  ISelectAgrementTypeProps,
  ISelectAllocationProps
} from "../DefaultLayout/HomePage";

const WorkFlowInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IWorkFlowStateValues & ISelectAllocationProps>) => (
  <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
    <div className="white-card work-card ">
      <div className="child-card">
        <h4>
          Allocation To <span className="star">*</span>
        </h4>
        <FormControl
          error={!!(touched.LandAllocatedToId && errors.LandAllocatedToId)}
        >
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
          {!!touched.LandAllocatedToId && errors.LandAllocatedToId && (
            <FormHelperText className="error-msg">
              Allocation To Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      {/* <TextField
        name="authorizedPersonName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.authorizedPersonName}
      /> */}
      <div className="child-card">
        <h4>
          Allocation Type <span className="star">*</span>
        </h4>
        <FormControl error={!!(touched.AllocationId && errors.AllocationId)}>
          <Select
            required={true}
           
            name="AllocationId"
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
          {!!touched.AllocationId && errors.AllocationId && (
            <FormHelperText className="error-msg">
              Allocation Type Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="child-card">
        <h4>
          Agreement Type <span className="star">*</span>
        </h4>
        <FormControl error={!!(touched.AgreementId && errors.AgreementId)}>
          <Select
           
            name="AgreementId"
            value={values.AgreementId}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleAgreementClick(event);
            }}
            inputProps={{
              id: "AgreementId",
              name: "AgreementId"
            }}
          >
            {values.agreementTypeValues.map(
              (e: IAgremmentTypeValues, id: number) => (
                <MenuItem
                  className="select-dropdown-bottom"
                  key={id}
                  value={e.AgreementId}
                >
                  {e.AgreementName}
                </MenuItem>
              )
            )}
          </Select>
          {!!touched.AgreementId && errors.AgreementId && (
            <FormHelperText className="error-msg">
              Agreement Type Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <br />
      <div className="work-flow-grid ">
        <div className="child-card">
          <div className="title-row">
            <h4> Activities</h4>
            <div className="title-btn forgot-container">
              <Button
                className="main-btn "
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handleAddWorkFlowPopUp()}
              >
                Add New
              </Button>
            </div>
          </div>
          <FormControl>
            <select
              className="activities-list"
              name="Activities"
              value={values.Activities.map(x => x.WorkFlowActivityName)}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleActivityChange(event);
              }}
              multiple={true}
            >
              {values.ActivityList.map(x => x.WorkFlowActivityName).map(
                (name, id) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                )
              )}
            </select>
          </FormControl>
        </div>
        <div className="child-card">
          <div className="sub-card activities-list">
            <Button
              className="work-btn"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                values.handleSpecificSelectClick(values.Activities)
              }
            >
              <img src="/images/get.png" />
            </Button>
            <Button
              className="work-btn"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.handleAllSelectClick()}
            >
              <img src="/images/gettwo.png" />
            </Button>

            <Button
              className="work-btn"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.handleAllLeftSelectClick()}
            >
              <img src="/images/leftgettwo.png" />
            </Button>
            <Button
              className="work-btn"
              // className="get-btn"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={event =>
                values.handleLeftSelectClick(values.selectedActivitiesList)
              }
            >
              <img src="/images/left.png" />
            </Button>
          </div>
        </div>

        <div className="child-card ">
          <h4> Selected Activities</h4>
          <FormControl>
            <select
              className="activities-list"
              name="selectedActivitiesList"
              value={values.selectedActivitiesList.map(
                x => x.WorkFlowActivityName
              )}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleSelectActivityChange(event);
              }}
              multiple={true}
            >
              {values.selectedActivitiesList
                .map(x => x.WorkFlowActivityName)
                .map((name, id) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
            </select>
          </FormControl>
        </div>

        <br />
      </div>
      <div className="bottom-save-btn">
        <Button type="reset" className="reset-btn">
          RESET
        </Button>
        <Button type="submit" className="save-btn">
          SUBMIT
        </Button>
      </div>
    </div>
  </form>
);

export interface ILandSaveAndContinueProps {
  onHandleSubmit(values: IWorkFlowStateValues & ISelectAllocationProps): void;
}
export const modelSchema = yup.object().shape({
  AgreementId: yup.number().required(),
  AllocationId: yup.number().required(),
  LandAllocatedToId: yup.number().required()
});

export const WorkFlowMappingForm = (
  props: IWorkFlowStateValues &
    ILandSaveAndContinueProps &
    ISelectAllocationProps &
    ISelectAgrementTypeProps &
    any
) => (
  <Formik
    className="work-grid"
    // validationSchema={modelSchema}
    initialValues={{
      ...props,
      AgreementId: props.agreementTypeValues.AgreementId,
      AllocationId: props.selectAllocationTypeValues.AllocationId,
      LandAllocatedToId: props.Activities.LandAllocatedToId
    }}
    validationSchema={modelSchema}
    onSubmit={props.onHandleSubmit}
    onReset={props.handleReset}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<IWorkFlowStateValues & ISelectAllocationProps>
    ) => (
      <div>
        <WorkFlowInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            handleLeftSelectClick: props.handleLeftSelectClick,
            // tslint:disable-next-line:object-literal-sort-keys
            handleAddWorkFlowPopUp: props.handleAddWorkFlowPopUp,
            handleAllLeftSelectClick: props.handleAllLeftSelectClick,
            handleAllSelectClick: props.handleAllSelectClick,
            handleSpecificSelectClick: props.handleSpecificSelectClick,
            // tslint:disable-next-line:object-literal-sort-keys
            handleSelectActivityChange: props.handleSelectActivityChange,
            // tslint:disable-next-line:object-literal-sort-keys
            handleActivityChange: props.handleActivityChange,
            // tslint:disable-next-line:object-literal-sort-keys
            Activities: props.Activities,
            ActivityList: props.ActivityList,
            selectedActivities: props.selectedActivities,
            selectedActivitiesList: props.selectedActivitiesList,
            // tslint:disable-next-line:object-literal-sort-keys
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
