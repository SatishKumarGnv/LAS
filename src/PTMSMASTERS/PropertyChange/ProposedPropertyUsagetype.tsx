import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Field, FieldArray, Formik, FormikProps, getIn } from "formik";
import * as React from "react";

import { FormControl, MenuItem, Select } from "@material-ui/core";
import {
  IFloorValues,
  IGenderValues,
  INature,
  IpropertyDetails
} from "src/DefaultLayout/HomePage";

const ErrorMessage = ({ name, index, value }: any) => (
  <Field
    name={name}
    // tslint:disable-next-line:jsx-no-lambda
    render={({ form }: any) => {
      const touch = getIn(form.touched, name);
      const error = getIn(form.errors, name);
      return touch && error ? errorDisplay(name, error, index) : null;
    }}
  />
);
const errorDisplay = (name: any, error: any, index: any) => {
  switch (error) {
    case error:
    default:
      return "Required Field";
  }
};
const ProposedPropertyUsageForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IpropertyDetails>) => (
  <div>
    <form onSubmit={handleSubmit} autoComplete="off">
      {/* tslint:disable-next-line:no-console */}
      {console.log(values.FloorArray)}
      <div>
        <div>
          <FieldArray
            name="FloorArray"
            // tslint:disable-next-line:jsx-no-lambda
            render={helpers => (
              <div>
                <div className="first-container">
                  {values.FloorArray && values.FloorArray.length > 0
                    ? values.FloorArray.map(
                        (x: IFloorValues, index: number) => (
                          <React.Fragment key={index}>
                            <div className="child-card">
                              <h4>
                                Floor Number
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.FloorNumber`}
                                render={() => {
                                  return (
                                    <FormControl>
                                      <Select
                                        name={`FloorArray.${index}.FloorNumber`}
                                        value={x.FloorNumber}
                                        onChange={(event: any) => {
                                          handleChange(event);
                                          values.handleFloorNumberIdChange(
                                            event,
                                            index,
                                            values
                                          );
                                        }}
                                      >
                                        {x.selectFloorValues &&
                                          x.selectFloorValues.map(
                                            (e: IGenderValues, id: number) => (
                                              <MenuItem
                                                key={id}
                                                className="select-dropdown-bottom"
                                                value={e.EnumMasterID}
                                              >
                                                {e.EnumMasterDesc}
                                              </MenuItem>
                                            )
                                          )}
                                      </Select>
                                    </FormControl>
                                  );
                                }}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.FloorNumber`}
                                  index={index}
                                  value={x.FloorNumber}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Classification Of Building{" "}
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.BuildingClassification`}
                                render={() => {
                                  return (
                                    <FormControl>
                                      <Select
                                        name={`FloorArray.${index}.BuildingClassification`}
                                        value={x.BuildingClassification}
                                        onChange={(event: any) => {
                                          handleChange(event);
                                          values.handleBuildingClassificationChange(
                                            event,
                                            index,
                                            values
                                          );
                                        }}
                                      >
                                        {x.selectClassificationValues &&
                                          x.selectClassificationValues.map(
                                            (e: IGenderValues, id: number) => (
                                              <MenuItem
                                                key={id}
                                                className="select-dropdown-bottom"
                                                value={e.EnumMasterID}
                                              >
                                                {e.EnumMasterDesc}
                                              </MenuItem>
                                            )
                                          )}
                                      </Select>
                                    </FormControl>
                                  );
                                }}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.BuildingClassification`}
                                  index={index}
                                  value={x.BuildingClassification}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Nature Of Usage <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.NatureOfUsage`}
                                render={() => {
                                  return (
                                    <FormControl>
                                      <Select
                                        name={`FloorArray.${index}.NatureOfUsage`}
                                        value={x.NatureOfUsage}
                                        onChange={(event: any) => {
                                          handleChange(event);
                                          values.handleNatureChange(
                                            event,
                                            index,
                                            values
                                          );
                                        }}
                                      >
                                        {/*  tslint:disable-next-line:no-console*/}
                                        {console.log(x.selectNatUsageValues)}
                                        {x.selectNatUsageValues &&
                                          x.selectNatUsageValues.length !== 0 &&
                                          x.selectNatUsageValues.map(
                                            (e: INature, id: number) => (
                                              <MenuItem
                                                key={id}
                                                className="select-dropdown-bottom"
                                                value={e.EnumMasterID}
                                              >
                                                {e.EnumMasterDesc}
                                              </MenuItem>
                                            )
                                          )}
                                      </Select>
                                    </FormControl>
                                  );
                                }}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.NatureOfUsage`}
                                  index={index}
                                  value={x.NatureOfUsage}
                                />
                              </div>
                            </div>

                            <div className="child-card">
                              <h4>
                                Firm Name <span className="star"> *</span>
                              </h4>
                              <Field
                                className="select-textfield"
                                name={`FloorArray.${index}.FirmName`}
                                render={() => (
                                  <TextField
                                    type="text"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleFirmNameChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    onBlur={handleBlur}
                                    value={x.FirmName}
                                    name={`FloorArray.${index}.FirmName`}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.FirmName`}
                                  index={index}
                                  value={x.FirmName}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Occupancy <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.Occupancy`}
                                render={() => {
                                  return (
                                    <FormControl>
                                      <Select
                                        name={`FloorArray.${index}.Occupancy`}
                                        value={x.Occupancy}
                                        onChange={(event: any) => {
                                          handleChange(event);
                                          values.handleOccupancyChange(
                                            event,
                                            index,
                                            values
                                          );
                                        }}
                                      >
                                        {x.selectOccupancyValues &&
                                          x.selectOccupancyValues.map(
                                            (e: IGenderValues, id: number) => (
                                              <MenuItem
                                                key={id}
                                                className="select-dropdown-bottom"
                                                value={e.EnumMasterID}
                                              >
                                                {e.EnumMasterDesc}
                                              </MenuItem>
                                            )
                                          )}
                                      </Select>
                                    </FormControl>
                                  );
                                }}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.Occupancy`}
                                  index={index}
                                  value={x.Occupancy}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Occupant Name <span className="star"> *</span>
                              </h4>
                              <Field
                                className="select-textfield"
                                name={`FloorArray.${index}.OccupantName`}
                                render={() => (
                                  <TextField
                                    type="text"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleOccupantNameChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    onBlur={handleBlur}
                                    value={x.OccupantName}
                                    name={`FloorArray.${index}.OccupantName`}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.OccupantName`}
                                  index={index}
                                  value={x.OccupantName}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Construction Date{" "}
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.ConstructionDate`}
                                render={() => (
                                  <TextField
                                    type="date"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleConstructionDateChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.ConstructionDate`}
                                    value={x.ConstructionDate}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.ConstructionDate`}
                                  index={index}
                                  value={x.ConstructionDate}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Effective From Date{" "}
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.EffectiveFromDate`}
                                render={() => (
                                  <TextField
                                    type="date"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleEffectiveFromDateChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.EffectiveFromDate`}
                                    value={x.EffectiveFromDate}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.EffectiveFromDate`}
                                  index={index}
                                  value={x.EffectiveFromDate}
                                />
                              </div>
                            </div>
                            {/* <div className="child-card-two">
                          <h4>
                            Unstructered Land <span className="star"> *</span>
                          </h4>
                          <Field
                            name={`FloorArray.${index}.GuardianReg`}
                            render={() => {
                              return (
                                <FormControl>
                                  <Select
                                    name={`FloorArray.${index}.GuardianReg`}
                                    value={x.GuardianReg}
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleGuardianIdChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    error={
                                      !!(
                                        touched.GuardianReg &&
                                        errors.GuardianReg
                                      )
                                    }
                                  >
                                    {x.selectGuardianValues &&
                                      x.selectGuardianValues.map(
                                        (e: IGenderValues, id: number) => (
                                          <MenuItem
                                            key={id}
                                            className="select-dropdown-bottom"
                                            value={e.EnumMasterID}
                                          >
                                            {e.EnumMasterDesc}
                                          </MenuItem>
                                        )
                                      )}
                                  </Select>
                                </FormControl>
                              );
                            }}
                          />
                          <div className="error-msg">
                            <ErrorMessage
                              className="error-msg"
                              name={`FloorArray.${index}.GuardianReg`}
                              index={index}
                              value={x.GuardianReg}
                            />
                          </div>
                        </div> */}
                            <div className="child-card">
                              <h4>
                                Length (Mtrs) <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.Length`}
                                render={() => (
                                  <TextField
                                    type="number"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleLengthChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.Length`}
                                    value={x.Length}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.Length`}
                                  index={index}
                                  value={x.Length}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Breadth (Mtrs)
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.Breadth`}
                                render={() => (
                                  <TextField
                                    type="number"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleBreadthChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.Breadth`}
                                    value={x.Breadth}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.Breadth`}
                                  index={index}
                                  value={x.Breadth}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Plinth Area (Sq.Mtrs)
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.PlinthArea`}
                                render={() => (
                                  <TextField
                                    type="number"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handlePlinthAreaChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.PlinthArea`}
                                    value={x.PlinthArea}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.PlinthArea`}
                                  index={index}
                                  value={x.PlinthArea}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Building Permission No{" "}
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.BuildingPermissionNo`}
                                render={() => (
                                  <TextField
                                    type="number"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleBildingPermissionChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.BuildingPermissionNo`}
                                    value={x.BuildingPermissionNo}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.BuildingPermissionNo`}
                                  index={index}
                                  value={x.BuildingPermissionNo}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Building Permission Date{" "}
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.BuildingPermissionDate`}
                                render={() => (
                                  <TextField
                                    type="date"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleBuildingDateChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.BuildingPermissionDate`}
                                    value={x.BuildingPermissionDate}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.BuildingPermissionDate`}
                                  index={index}
                                  value={x.BuildingPermissionDate}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Plinth Area in Building Plan{" "}
                                <span className="star"> *</span>
                              </h4>
                              <Field
                                name={`FloorArray.${index}.PlinthAreaInBuildingPlan`}
                                render={() => (
                                  <TextField
                                    type="text"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleBuildingPlanChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    name={`FloorArray.${index}.PlinthAreaInBuildingPlan`}
                                    value={x.PlinthAreaInBuildingPlan}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.PlinthAreaInBuildingPlan`}
                                  index={index}
                                  value={x.PlinthAreaInBuildingPlan}
                                />
                              </div>
                            </div>
                            <div className="child-card">
                              <h4>
                                Tax Amount<span className="star"> *</span>
                              </h4>
                              <Field
                                className="select-textfield"
                                name={`FloorArray.${index}.taxAmount`}
                                render={() => (
                                  <TextField
                                    type="number"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onChange={(event: any) => {
                                      handleChange(event);
                                      values.handleTaxChange(
                                        event,
                                        index,
                                        values
                                      );
                                    }}
                                    onBlur={handleBlur}
                                    value={x.taxAmount}
                                    name={`FloorArray.${index}.taxAmount`}
                                  />
                                )}
                              />
                              <div className="error-msg">
                                <ErrorMessage
                                  className="error-msg"
                                  name={`FloorArray.${index}.taxAmount`}
                                  index={index}
                                  value={x.taxAmount}
                                />
                              </div>
                            </div>
                            {index === 0 ? (
                              <div />
                            ) : (
                              <div className="continue-btn saveand-btn">
                                <Button
                                  className="main-btn"
                                  type="button"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onClick={() => {
                                    helpers.remove(index);
                                    values.onDeleteClickRegProp(index);
                                  }}
                                >
                                  <img src="/images/delete.png" />
                                </Button>
                              </div>
                            )}
                            {values.FloorArray.length === index + 1 ? (
                              <div className="bottom-save-btn">
                                <a
                                  className="text-link"
                                  type="button"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onClick={() => {
                                    helpers.insert(index + 1, {
                                      AddClickCount: values.AddClickCount,
                                      FirmName: "",
                                      OccupantName: "",
                                      // tslint:disable-next-line:object-literal-sort-keys
                                      ConstructionDate: "",
                                      EffectiveFromDate: "",
                                      Length: "",
                                      Breadth: "",
                                      PlinthArea: "",
                                      BuildingPermissionNo: "",
                                      BuildingPermissionDate: "",
                                      PlinthAreaInBuildingPlan: "",
                                      selectFloorValues:
                                        values.selectFloorValues,
                                      selectClassificationValues:
                                        values.selectClassificationValues,
                                      selectOccupancyValues:
                                        values.selectOccupancyValues,
                                      id: values.AddClickCount + 1
                                    });
                                    values.onHandleAddClickRegProp(index + 1);
                                  }}
                                >
                                  Add Another
                                </a>
                              </div>
                            ) : (
                              <div />
                            )}
                          </React.Fragment>
                        )
                      )
                    : null}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </form>
  </div>
);

export const ProposedDetailsForm = (props: IpropertyDetails) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props
    }}
    onSubmit={props.onPropertyHandleSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<IpropertyDetails>) => (
      <ProposedPropertyUsageForm
        {...fprops}
        values={{
          ...fprops.values,
          // tslint:disable-next-line:object-literal-sort-keys
          CategoryOwnershipId: props.CategoryOwnershipId,
          selectClassificationValues: props.selectClassificationValues,
          selectFloorValues: props.selectFloorValues,
          // tslint:disable-next-line:object-literal-sort-keys
          aminityTypes: props.aminityTypes,
          aminityValues1: props.aminityValues1,
          selectroofValues: props.selectroofValues,
          selectwallValues: props.selectwallValues,
          selectwoodValues: props.selectwoodValues,
          FloorArray: props.FloorArray,
          // tslint:disable-next-line:object-literal-sort-keys
          selectfloorValues: props.selectfloorValues,
          selectNatUsageValues: props.selectNatUsageValues
        }}
      />
    )}
  />
);

export default ProposedDetailsForm;
