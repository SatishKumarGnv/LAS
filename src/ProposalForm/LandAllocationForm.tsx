import FormControl from "@material-ui/core/FormControl";

import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import { Field, FieldArray, Formik, FormikProps, getIn } from "formik";
import * as React from "react";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// tslint:disable-next-line:ordered-imports

import { isArray } from "util";

import {
  FormControlLabel,
  Popover,
  Radio,
  RadioGroup
} from "@material-ui/core";
// import { IDashboardStateValues } from "src/Container/Dashboard";
import * as yup from "yup";
import {
  IAuthorisedProps,
  IAuthorizedPersonValues,
  IChangeValues,
  IConditionValueProps,
  IDetailsFromMap,
  IGoValues,
  ILandallocationFormStatevalues,
  // tslint:disable-next-line:ordered-imports
  ILandAllocationValues,
  ILeaseTenureProps,
  ILeaseValues,
  IMileStoneDetailsProps,
  IMileStoneDetailsStateValues,
  IMilestoneDropDownProps,
  IMileStoneDropDownValues,
  IMileStoneValues,
  IPhotoIdTypeProps,
  IProjectRuleTypeProps,
  IProjectValuesProps,
  IProposalTabStateValues,
  IRelationTypeProps,
  IRuleTypeValuesProps,
  ISelectAgrementTypeProps,
  ISelectAllocationProps,
  ISelectCountryProps,
  ISelectLandAllocationProps,
  ISelectStateProps,
  ISelectThemeCityProps,
  ISelectTypeOfAllocationProps,
  ISourceValueProps,
  ITownshipValues,
  IUnitProps,
  IUnitValues,
  IWitnessDetailsProps,
  IWitnessDetailsStateValues,
  IwitnessValues
} from "../DefaultLayout/HomePage";
import { ICreateProposalProps } from "../DefaultLayout/HomePage";
import DetailsFromMapForm from "./DetailsFromMap";

export const range = (start: number, stop: number) => {
  const result = [];
  const begin = stop !== undefined ? start : 0;
  const end = stop !== undefined ? stop : start;
  // eslint-disable-next-line
  for (let i = begin; i < end; i += 1) {
    result.push(i);
  }
  return result;
};

const LandAllocationInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
  setFieldTouched
}: FormikProps<
  ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ILandSaveAndContinueProps &
    ICreateProposalProps &
    IDetailsFromMap &
    ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectThemeCityProps &
    ISelectLandAllocationProps &
    IProjectRuleTypeProps &
    IProposalTabStateValues &
    IMileStoneDetailsStateValues &
    IWitnessDetailsStateValues &
    IAuthorizedPersonValues
>) => (
  <div className="innerpage-container">
    <div className="inner-header-titile">
      <h2> Land Allocation Form </h2>
    </div>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="white-card-form">
        <div className="white-card-auth">
          <div className="child-card">
            <h4>
              Township Name<span className="star"> *</span>
            </h4>
            <FormControl className="px-5">
              <Select
                disabled={true}
                value={values.TownshipId}
                inputProps={{
                  id: "TownshipId",
                  name: "TownshipId"
                }}
              >
                {values.selectThemeCityTypeValues.map(
                  (e: ITownshipValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.TownshipId}
                    >
                      {e.TownshipName}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="white-card-form">
        <div className="white-card-auth">
          <div className="card-title">
            <h2 className="text-title">Land Details</h2>
          </div>
          <div className="child-card">
            <h4>
              Land Allocation Type <span className="star"> *</span>
            </h4>
            <FormControl
              error={!!(touched.LandAllocationId && errors.LandAllocationId)}
            >
              <Select
                value={values.LandAllocationId}
                inputProps={{
                  id: "LandAllocationId",
                  name: "LandAllocationId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleLandDetailsChangeClick(event, values);
                }}
              >
                {values.selectLandAllocationTypeValues.map(
                  (e: ILandAllocationValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.LandAllocationId}
                    >
                      {e.LandAllocationTypeName}
                    </MenuItem>
                  )
                )}
              </Select>
              {!!touched.LandAllocationId && errors.LandAllocationId && (
                <div className="error-msg">
                  Land Allocation Type Is Required Field
                </div>
              )}
            </FormControl>
          </div>

          <div className="child-card">
            <h4>
              Available Land Area (in Acres) <span className="star">*</span>
            </h4>
            <TextField
              name="AvailableLandArea"
              // tslint:disable-next-line:jsx-no-lambda
              // onChange={event => {
              //   handleChange(event);
              //   values.handleAvailableLandAreaChange(event, values);
              // }}
              onBlur={handleBlur}
              value={
                values.AvailableLandArea === 0
                  ? undefined
                  : values.AvailableLandArea
              }
            />
            <div className="error-msg">
              {touched.AvailableLandArea && errors.AvailableLandArea && (
                <div>Available Land Area Is Required</div>
              )}
            </div>
          </div>

          <div className="child-card">
            <h4>
              Units <span className="star"> *</span>
            </h4>
            <FormControl error={!!(touched.UnitId && errors.UnitId)}>
              <Select
                value={0}
                inputProps={{
                  id: "UnitId",
                  name: "UnitId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                // onChange={event => {
                //   handleChange(event);
                //   values.handleUnitChange(event, values);
                // }}
              >
                {/* {values.unitValues.map((e: IUnitValues, id: number) => ( */}
                <MenuItem className="select-dropdown-bottom" value={0}>
                  Acres
                </MenuItem>
                {/* ))} */}
              </Select>
              {!!touched.UnitId && errors.UnitId && (
                <div className="error-msg">
                  Units Is Required Field
                </div>
              )}
            </FormControl>
          </div>
        </div>
      </div>
      <div className="white-card-form">
        <div className="white-card-auth">
          <div className="card-title">
            <h2 className="text-title">Value From Map</h2>
          </div>
          <div className="child-card">
            <h4>
              Required Land Size <span className="star">*</span>
            </h4>
            <TextField
              type="number"
              name="RequiredLandSize"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleRequiredLandSizeChange(event, values);
              }}
              onBlur={handleBlur}
              value={
                values.RequiredLandSize === 0
                  ? undefined
                  : values.RequiredLandSize
              }
              error={
                values.AvailableLandArea -
                  values.RequiredLandSizeBeforeAllocation <
                0
              }
              helperText={
                values.AvailableLandArea -
                  values.RequiredLandSizeBeforeAllocation <
                0 ? (
                  <div className="error-msg">
                    Required Land Size Should Be Less Than Available Land Area
                  </div>
                ) : (
                  ""
                )
              }
            />

            <div className="error-msg">
              {touched.RequiredLandSize && errors.RequiredLandSize && (
                <div>Required Land Size Is Required </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Required Units
              <span className="star">*</span>
            </h4>
            <FormControl
              error={
                !!(touched.requiredLandUnitId && errors.requiredLandUnitId)
              }
            >
              <Select
                value={values.requiredLandUnitId}
                inputProps={{
                  id: "requiredLandUnitId",
                  name: "requiredLandUnitId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleConvertedChange(event, values);
                }}
              >
                {values.unitValues.map((e: IUnitValues, id: number) => (
                  <MenuItem
                    key={id}
                    className="select-dropdown-bottom"
                    value={e.PlotAreaId}
                  >
                    {e.PlotAreaType}
                  </MenuItem>
                ))}
              </Select>
              {!!touched.requiredLandUnitId && errors.requiredLandUnitId && (
                <div className="error-msg">
                  Required Units Is Required Field
                </div>
              )}
            </FormControl>
          </div>

          <div className="child-card quation-btn">
            <Button
              aria-owns={values.PopOverForAcres ? "simple-popper" : undefined}
              aria-haspopup="true"
              variant="contained"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={event => values.handlePopoverOpen(event)}
            >
              ?
            </Button>

            <Popover
              id="simple-popper"
              open={values.PopOverForAcres}
              anchorEl={values.anchorEl}
              // tslint:disable-next-line:jsx-no-lambda
              onClose={() => values.handlePopoverClose()}

              // anchorOrigin={{

              //   vertical: 'bottom',

              //   horizontal: 'center',

              // }}

              // transformOrigin={{

              //   vertical: 'top',

              //   horizontal: 'center',

              // }}
            >
              <div className="cls-btn-popup">
                <Button
                  color="primary"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => values.handlePopoverClose()}
                >
                  X
                </Button>
              </div>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Units</TableCell>

                    <TableCell>Conversions</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>1 Acres</TableCell>

                    <TableCell>43560 Sq Feet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres </TableCell>

                    <TableCell>4046.8564224 Sq Metres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres </TableCell>

                    <TableCell>1 Acres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres </TableCell>

                    <TableCell> 4840 Sq.Yard </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres</TableCell>

                    <TableCell>40468564.224 Sq Centimeter</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres </TableCell>

                    <TableCell>0.40468564224 hectare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres </TableCell>

                    <TableCell> 0.0040468564224 Sq Kilometer </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres </TableCell>

                    <TableCell>6272640 Sq Inch</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Acres </TableCell>

                    <TableCell> 0.0015625000000217 Sq Mile </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell>100000000 Sq Centimeter </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell> 10000 Sq Metres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell>1 hectare </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell> 10.01 Sq Kilometer </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell>15500031.000062 Sq Inch </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell>107639 Sq.Feet </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare</TableCell>

                    <TableCell> 11959.9 Sq.Yard</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell> 0.00386102 Sq Mile </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 hectare </TableCell>

                    <TableCell> 2.47105 Acres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell> 1 Sq Metres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell>0.000247105 Acres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell> 10000 Sq Centimeter </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell> 0.0001 hectare </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell> 0.000001 Sq Kilometer </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell> 1550 Sq Inch </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell> 10.7639 Sq.Feet </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres </TableCell>

                    <TableCell>1.19599 Sq.Yard</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Metres</TableCell>

                    <TableCell>3.8610215854781E-07 Sq Mile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet </TableCell>

                    <TableCell> 0.092903 Sq Metres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet </TableCell>

                    <TableCell> 0.111111 Sq.Yard </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet </TableCell>

                    <TableCell>1 Sq Feet </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet </TableCell>

                    <TableCell> 929.0304 Sq Centimeter </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet</TableCell>

                    <TableCell> 0.000009290304 hectare </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet</TableCell>

                    <TableCell>0.00000009290304 Sq Kilometer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet </TableCell>

                    <TableCell>144 Sq Inch </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet </TableCell>

                    <TableCell> 3.5870064279654E-08 Sq Mile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet </TableCell>

                    <TableCell> 0.000022956841138659 Acres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell> 0.83612736 Sq Metres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq Feet</TableCell>

                    <TableCell>0.000206612 Acres0.83612736 Sq Metres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell> 0.83612736 Sq Metres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell> 0.000206612 Acres </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell> 9 Sq.Feet </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell>1 Sq.Yard</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell> 8361.2736 Sq Centimeter</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell> 0.000083612736 hectare </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard</TableCell>

                    <TableCell>0.00000083612736 Sq Kilometer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell>1296 Sq Inch </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq.Yard </TableCell>

                    <TableCell> 3.2283057851688E-07 Sq Mile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter</TableCell>

                    <TableCell>1 Sq Centimeter</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter</TableCell>

                    <TableCell>0.0001 Sq Metres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter </TableCell>

                    <TableCell> 0.00000001 hectare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter </TableCell>

                    <TableCell>0.155 Sq Inch</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter </TableCell>

                    <TableCell>0.00107639 Sq.Feet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter </TableCell>

                    <TableCell>0.000119599 Sq.Yard</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter </TableCell>

                    <TableCell>3.8610215854781E-11 Sq Mile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq centimeter </TableCell>

                    <TableCell>2.4710538146717E-08 Acres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>6.4516 Sq Centimeter</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>0.00064516 Sq Metres</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>0.000000064516 hectare</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>0.00000000064516 Sq Kilometer</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>1 Sq Inch</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>0.00694444 Sq.Feet</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>0.000771605 Sq.Yard</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>2.4909766860871E-10 Sq Mile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq inch </TableCell>

                    <TableCell>1.5942250790736E-07 Acres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>10000000000 Sq Centimeter</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>1000000 Sq Metres</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>100 hectare</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>1 Sq Kilometer</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>1550003100.0062 Sq Inch</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>10763910.41671 Sq.Feet</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>1195990.0463011 Sq.Yard</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>0.38610215854781 Sq Mile</TableCell>
                  </TableRow>{" "}
                  <TableRow>
                    <TableCell>1 Sq kilometer </TableCell>

                    <TableCell>247.105 Acres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>25899881103 Sq Centimeter</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>2589988.1103 Sq Metres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>258.99881103 hectare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>2.5899881103 Sq Kilometer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>4014489599.9442 Sq Inch</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>27878399.999612 Sq.Feet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>3097599.9999569 Sq.Yard</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>1 Sq Mile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1 Sq mile </TableCell>

                    <TableCell>639.9999999911 Acres</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Popover>
          </div>

          {values.requiredLandUnitId !== 0 ? (
            <div className="second-card">
              Converted To(in Acres)
              {isNaN(values.RequiredLandSizeBeforeAllocation)
                ? 0
                : values.RequiredLandSizeBeforeAllocation}
            </div>
          ) : (
            <div />
          )}
          {values.LandAllocationId === 2 ? (
            <div className="second-card">
              <div className="child-card">
                <h4>
                  Initial Allocation Land Size <span className="star">*</span>
                </h4>
                <TextField
                  type="number"
                  name="InitialAllocationLandSize"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleInitialAllocationLandSizeChange(event, values);
                  }}
                  onBlur={handleBlur}
                  value={
                    values.InitialAllocationLandSize === 0
                      ? undefined
                      : values.InitialAllocationLandSize
                  }
                  error={
                    values.RequiredLandSizeBeforeAllocation -
                      values.InitialAllocationSizeInAcres <
                    0
                  }
                  helperText={
                    values.RequiredLandSizeBeforeAllocation -
                      values.InitialAllocationSizeInAcres <
                    0 ? (
                      <div className="error-msg">
                        Initial Allocation Land Size Should Be Less Than
                        Required Land Area
                      </div>
                    ) : (
                      ""
                    )
                  }
                />
                <div className="error-msg">
                  {touched.InitialAllocationLandSize &&
                    errors.InitialAllocationLandSize && (
                      <div>Initial Allocation Land Size Is Required </div>
                    )}
                </div>
              </div>

              <div className="child-card">
                <h4>
                  Units <span className="star"> *</span>
                </h4>
                <FormControl
                  error={!!(touched.initialUnitId && errors.initialUnitId)}
                >
                  <Select
                    value={values.initialUnitId}
                    inputProps={{
                      id: "initialUnitId",
                      name: "initialUnitId"
                    }}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handleInitialConvertedChange(event, values);
                    }}
                  >
                    {values.unitValues.map((e: IUnitValues, id: number) => (
                      <MenuItem
                        key={id}
                        className="select-dropdown-bottom"
                        value={e.PlotAreaId}
                      >
                        {e.PlotAreaType}
                      </MenuItem>
                    ))}
                  </Select>
                  {!!touched.initialUnitId && errors.initialUnitId && (
                    <div className="error-msg">
                      Required Units Is Required Field
                    </div>
                  )}
                </FormControl>
              </div>
              {values.initialUnitId !== 0 ? (
                <div className="second-card">
                  Converted To(in Acres)
                  {values.InitialAllocationSizeInAcres}
                </div>
              ) : (
                <div />
              )}
            </div>
          ) : (
            <div />
          )}

          {values.mapDataValues === true ? (
            <DetailsFromMapForm
              handleMapSelectClick={values.handleMapSelectClick}
              handleAllocationChange={values.handleAllocationChange}
              handleLandAllocationClick={values.handleLandAllocationClick}
              handleCountryClick={values.handleCountryClick}
              handleAgreementChange={values.handleAgreementChange}
              handleTypeOfAllocationChange={values.handleTypeOfAllocationChange}
              handleBack={values.handleBack}
              handleStateChange={values.handleStateChange}
              TownshipId={values.TownshipId}
              OutOfAGC={values.OutOfAGC}
              buttonDisable1={values.buttonDisable1}
              WithInAGC={values.WithInAGC}
              mapPopUpOpen={values.mapPopUpOpen}
              LandAllocatedToId={values.LandAllocatedToId}
              landAllocatedTo={values.landAllocatedTo}
              allocationTypeId={values.allocationTypeId}
              AuthorisedPersonEmailAddress={values.AuthorisedPersonEmailAddress}
              AgreementTypeId={values.AgreementTypeId}
              enterApplicationId={values.enterApplicationId}
              mobileNumber={values.mobileNumber}
              agreementTypeValues={values.agreementTypeValues}
              typesOfAllocationValues={values.typesOfAllocationValues}
              AllocationName={values.AllocationName}
              AllocationId={values.AllocationId}
              AllocationSubTypeId={values.AllocationSubTypeId}
              CountryId={values.CountryId}
              CountryName={values.CountryName}
              StateId={values.StateId}
              StateName={values.StateName}
              TypeOfAllocationId={values.TypeOfAllocationId}
              AllocationType={values.AllocationType}
              OrganizationName={values.OrganizationName}
              OrgPhoneNumber={values.OrgPhoneNumber}
              OrgEmailAddress={values.OrgEmailAddress}
              HouseNoBuildingName={values.HouseNoBuildingName}
              StreetNameLocality={values.StreetNameLocality}
              GSTNumber={values.GSTNumber}
              City={values.City}
              WitnessName={values.WitnessName}
              ZipCode={values.ZipCode}
              RegistrationNumber={values.RegistrationNumber}
              selectMapValuesPopUp={values.selectMapValuesPopUp}
              handleMapPopUpClose1={values.handleMapPopUpClose1}
              handleMapClose={values.handleMapClose}
              handleMapPopUpClose={values.handleMapPopUpClose}
              handleEditMapDetails={values.handleEditMapDetails}
              activeStep={values.activeStep}
              Village={values.Village}
              TownShip={values.TownShip}
              ParcelId={values.ParcelId}
              Mandal={values.Mandal}
              GeometryDataFromMap={values.GeometryDataFromMap}
              GeometricString={values.GeometricString}
              CompleteDetails={values.CompleteDetails}
              District={values.District}
              Boundaries={values.Boundaries}
              Colony={values.Colony}
              Block={values.Block}
              Plot={values.Plot}
              GlobalId={values.GlobalId}
              TempGlobalId={values.TempGlobalId}
              Sector={values.Sector}
              SurveyNumberByPlanning={values.SurveyNumberByPlanning}
              AvailableLandArea={values.AvailableLandArea}
              mapDataValues={values.mapDataValues}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      {values.TypeOfAllocationId === 1 ? (
        <div className="white-card-form">
          <div className="white-card-auth">
            <div className="card-title">
              <h2 className="text-title">Lease Details</h2>
            </div>
            <div className="child-card">
              <h4>
                Lease Tenure <span className="star"> *</span>
              </h4>
              <FormControl error={!!(touched.Number && errors.Number)}>
                <Select
                  value={values.Number}
                  inputProps={{
                    id: "Number",
                    name: "Number"
                  }}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleLeaseTenureChange(event, values);
                  }}
                >
                  {values.leaseTenure.map((e: ILeaseValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.Number}
                    >
                      {e.Number === 1 ? e.Number + "Year" : e.Number + "Years"}
                    </MenuItem>
                  ))}
                </Select>
                {!!touched.Number && errors.Number && (
                  <div className="error-msg">
                    Lease Tenure Is Required Field
                  </div>
                )}
              </FormControl>
            </div>
            <div className="child-card">
              <h4>
                Lease Amount(Per Acre) <span className="star">*</span>
              </h4>
              <TextField
                type="number"
                name="LeaseAmount"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleLeaseAmountChange(event, values);
                }}
                onBlur={handleBlur}
                value={values.LeaseAmount === 0 ? "" : values.LeaseAmount}
              />
              <div className="error-msg">
                {touched.LeaseAmount && errors.LeaseAmount && (
                  <div>Lease Amount Is Required </div>
                )}
              </div>
            </div>

            <div className="child-card">
              <h4>
                Total Land Cost <span className="star">*</span>
              </h4>
              <TextField
                type="number"
                name="TotalLandCost"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleTotalLandCostChange(event, values);
                }}
                onBlur={handleBlur}
                value={values.TotalLandCost === 0 ? "" : values.TotalLandCost}
              />
              <div className="error-msg">
                {touched.TotalLandCost && errors.TotalLandCost && (
                  <div>Total Land Cost Is Required </div>
                )}
              </div>
            </div>

            <div className="child-card">
              <h4>
                Amount Paid <span className="star">*</span>
              </h4>
              <TextField
                type="number"
                name="AmountPaid"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleAmountPaidChange(event, values);
                }}
                onBlur={handleBlur}
                value={values.AmountPaid === 0 ? undefined : values.AmountPaid}
              />
              <div className="error-msg">
                {touched.AmountPaid && errors.AmountPaid && (
                  <div>Amount Paid Is Required </div>
                )}
              </div>
            </div>

            <div className="child-card">
              <h4>Amount to be Paid</h4>
              <TextField
                type="number"
                name="AmountToBePaid"
                // tslint:disable-next-line:jsx-no-lambda
                // onChange={event => {
                // //  handleChange(event);
                //   values.handleAmountToBePaidChange(event);
                // }}
                onBlur={handleBlur}
                value={values.AmountToBePaid === 0 ? 0 : values.AmountToBePaid}
              />
              <div className="error-msg">
                {touched.AmountToBePaid && errors.AmountToBePaid && (
                  <div>Amount To Be Paid Is Required </div>
                )}
              </div>
            </div>
            <div className="second-card">
              <FormControl component="fieldset">
                <h4>
                  Registered Or Not
                  <span className="star">*</span>
                </h4>
                <RadioGroup
                  className="radio-grp"
                  name="registerOrNot"
                  // className={classes.group}
                  value={values.registerOrNot}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleRegisterOrNotChange(event, values);
                  }}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Registered"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Not Registered"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="child-card">
              <div className="search-col">
                <h4 className="date-label">
                  Lease Start Date <span className="star">*</span>
                </h4>
                <div className="input-select-one">
                  <input
                    className="select-date-one"
                    // required={true}
                    name="LeaseStartDate"
                    type="date"
                    max="9999-12-31"
                    min="2016-01-01"
                    value={values.LeaseStartDate}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handleLeaseStartDateChange(event, values);
                    }}
                    // error={isLeaseStartDate(values.LeaseStartDate)}
                    // helperText={
                    //   isLeaseStartDate(values.LeaseStartDate) ? (
                    //     <div>Please Select From Year 2016</div>
                    //   ) : (
                    //     ""
                    //   )
                    // }
                  />
                </div>
              </div>
              <div className="error-msg">
                {touched.LeaseStartDate && errors.LeaseStartDate && (
                  <div>Lease Start Date is Required </div>
                )}
              </div>
            </div>
            <div className="child-card">
              <h4>
                Lease End Date <span className="star">*</span>
              </h4>
              <TextField
                name="LeaseEndDate"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                value={values.LeaseEndDate}
                onChange={handleChange}
              />
              <div className="error-msg">
                {touched.LeaseEndDate && errors.LeaseEndDate && (
                  <div>Lease End Date is Required </div>
                )}
              </div>
            </div>
            <div className="title-btn">
              Total Lease Amount : ₹
              {isNaN(
                values.RequiredLandSizeBeforeAllocation *
                  values.LeaseAmount *
                  values.Number
              )
                ? 0
                : values.RequiredLandSizeBeforeAllocation *
                  values.LeaseAmount *
                  values.Number}
            </div>
            {values.Number !== 0 && values.LeaseAmount !== 0 ? (
              <div className="year-table-bg">
                <Table className="year-table">
                  <TableHead className="tablehead">
                    <TableRow>
                      <TableCell>Years</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {range(1, values.Number + 1).map((x: number, i: number) => (
                      <TableRow key={i}>
                        <TableCell component="td" scope="row">
                          {x === 1 ? x + "Year" : x + "Years"}
                        </TableCell>
                        <TableCell>
                          {x * values.RequiredLandSize * values.LeaseAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div />
      )}
      <div className="white-card-form">
        <div className="white-card-auth">
          <div className="card-title">
            <h2 className="text-title">Project Details</h2>
          </div>
          <div className="gom-data">
            <FieldArray
              name="ProjectDetailsArray"
              // tslint:disable-next-line:jsx-no-lambda
              render={helpers => (
                <div>
                  {values.ProjectDetailsArray &&
                  values.ProjectDetailsArray.length > 0
                    ? values.ProjectDetailsArray.map(
                        (x: IGoValues, index: number) => (
                          <React.Fragment key={index}>
                            <div className="buttons-flex">
                              <div className="flex-row width-grid">
                                <div className="child-card-two">
                                  <h4>GOM Number</h4>
                                  <Field
                                    name={`ProjectDetailsArray.${index}.GoNumber`}
                                    render={() => {
                                      return (
                                        <TextField
                                          type="text"
                                          name={`ProjectDetailsArray.${index}.GoNumber`}
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={event => {
                                            handleChange(event);
                                            values.handleGoNumberChange(
                                              event,
                                              x,
                                              index
                                            );
                                          }}
                                          onBlur={handleBlur}
                                          value={x.GoNumber}
                                        />
                                      );
                                    }}
                                  />
                                  <ErrorMessageGo
                                    name={`ProjectDetailsArray.${index}.GoNumber`}
                                    index={index}
                                    value={x.GoNumber}
                                  />
                                </div>
                                <div className="child-card-two">
                                  <h4>GOM Date</h4>
                                  <Field
                                    name={`ProjectDetailsArray.${index}.GoDate`}
                                    render={() => {
                                      return (
                                        <div className="input-select-border">
                                          <input
                                            className="select-date-one"
                                            name={`ProjectDetailsArray.${index}.GoDate`}
                                            type="date"
                                            // max="9999-12-31"
                                            id="GoDate"
                                            value={x.GoDate}
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onChange={event => {
                                              handleChange(event);
                                              values.handleGoDateChange(
                                                event,
                                                x,
                                                index
                                              );
                                            }}
                                            min="2016-01-01"
                                            max="9999-12-31"
                                            // error={!isGoDate(x.GoDate)}
                                            // helperText={
                                            //   !isGoDate(x.GoDate) ? (
                                            //     <div>
                                            //       Please Select Date From Year
                                            //       2016
                                            //     </div>
                                            //   ) : (
                                            //     ""
                                            //   )
                                            // }
                                          />
                                        </div>
                                      );
                                    }}
                                  />
                                  <ErrorMessageGo
                                    name={`ProjectDetailsArray.${index}.GoDate`}
                                    index={index}
                                    value={x.GoDate}
                                  />
                                </div>
                              </div>
                              {index === 0 ? (
                                <div />
                              ) : (
                                <div className="project-btn">
                                  <Button
                                    className="delete-btn"
                                    type="button"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onClick={() => {
                                      helpers.remove(index);
                                      values.onGoValuesDeleteClick(index);
                                    }}
                                  >
                                    -
                                  </Button>
                                </div>
                              )}
                            </div>
                            {values.ProjectDetailsArray.length === index + 1 ? (
                              <div className="continue-btn">
                                <Button
                                  className="save-btn-plus gomadd-btn"
                                  type="button"
                                  // tslint:disable-next-line:jsx-no-lambda
                                  onClick={() => {
                                    helpers.insert(index + 1, {
                                      AddGoValueClickCount:
                                        values.AddGoValueClickCount + 1,
                                      id: values.AddGoValueClickCount + 1,
                                      // tslint:disable-next-line:object-literal-sort-keys
                                      GoNumber: "",
                                      GoDate: ""
                                    });
                                    values.onAddGoValuesClick(index + 1);
                                  }}
                                >
                                  +
                                </Button>
                              </div>
                            ) : (
                              <div />
                            )}
                          </React.Fragment>
                        )
                      )
                    : null}
                </div>
              )}
            />
          </div>

          <div className="child-card">
            <h4>
              Project Name <span className="star">*</span>
            </h4>
            <TextField
              name="ProjectName"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleProjectNameChange(event, values);
              }}
              onBlur={handleBlur}
              value={values.ProjectName}
            />
            <div className="error-msg">
              {touched.ProjectName && errors.ProjectName && (
                <div>Project Name Is Required </div>
              )}
            </div>
          </div>

          <div className="child-card">
            <h4>
              Project Purpose <span className="star">*</span>
            </h4>
            <TextField
              name="ProjectPurpose"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleProjectPurposeChange(event, values);
              }}
              onBlur={handleBlur}
              value={values.ProjectPurpose}
            />
            <div className="error-msg">
              {touched.ProjectPurpose && errors.ProjectPurpose && (
                <div>Project Purpose Is Required </div>
              )}
            </div>
          </div>

          <div className="child-card ">
            <FormControl
              error={!!(touched.projectTypes && errors.projectTypes)}
            >
              <h4>
                Project Rules
                <span className="star"> *</span>
              </h4>

              <Select
                multiple={true}
                name="projectTypes"
                value={values.projectTypes.map(x => x)}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleMultiSelectChange(event, values);
                }}
                input={<Input id="select-multiple-checkbox" />}
                // tslint:disable-next-line:jsx-no-lambda
                renderValue={(selected: string[] | string) =>
                  isArray(selected) ? selected.join(", ") : selected
                }
                // MenuProps={MenuProps}
              >
                {values.projectValues
                  .map(x => x.RuleName)
                  .map((name, i) => (
                    <MenuItem className="" key={i} value={name}>
                      <Checkbox
                        checked={values.projectTypes.indexOf(name) > -1}
                      />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
              {!!touched.projectTypes && errors.projectTypes && (
                <div className="error-msg">
                  Project Rules Is Required Field
                </div>
              )}
            </FormControl>
          </div>

          <div className="child-card-two  ">
            <h4 className="land-scroll">
              Project Description <span className="star">*</span>
            </h4>
            <TextField
              className="scroll-text"
              multiline={true}
              // rows="1"
              name="ProjectDescription"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleProjectDescriptionChange(event, values);
              }}
              onBlur={handleBlur}
              value={values.ProjectDescription}
            />
            <div className="error-msg">
              {touched.ProjectDescription && errors.ProjectDescription && (
                <div>Project Description Is atmost 4000 characters </div>
              )}
            </div>
          </div>
          <div className="bottom-save-btn ">
            <a
              type="button"
              className="text-link"
              onClick={values.handlePopUpOpenClick}
            >
              Add New rule Type
            </a>
          </div>
        </div>
      </div>

      <div className="white-card-form">
        {/*  <div className="gom-data"> */}
        {values.LandAllocationId === 2 ? (
          <div className="white-card-auth">
            <div className="card-title">
              <h2 className="text-title">Milestone Details</h2>
            </div>
            <FieldArray
              name="MileStoneArray"
              // tslint:disable-next-line:jsx-no-lambda
              render={helpers => (
                <div className="width-grid">
                  {values.MileStoneArray && values.MileStoneArray.length > 0
                    ? values.MileStoneArray.map(
                        (x: IMileStoneValues, index: number) => (
                          <React.Fragment key={index}>
                            <h3>Milestone {index + 1}</h3>
                            {/* <div calssName="button-flex"> */}
                            <div className="width-grid-one">
                              <div className="buttons-flex">
                                <div className="flex-row width-grid-one">
                                  <div
                                    className="child-card"
                                    // className="child-card-two"
                                  >
                                    <h4>
                                      MileStone Name{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`MileStoneArray.${index}.RuleId`}
                                      render={() => {
                                        return (
                                          <FormControl>
                                            <Select
                                              name={`MileStoneArray.${index}.RuleId`}
                                              value={x.RuleId}
                                              // tslint:disable-next-line:jsx-no-lambda
                                              onChange={event => {
                                                handleChange(event);
                                                values.handleMileStoneChange(
                                                  event,
                                                  index,
                                                  values
                                                );
                                              }}
                                            >
                                              <MenuItem
                                                className="select-dropdown-bottom"
                                                value={1}
                                              >
                                                1 Year
                                              </MenuItem>
                                              <MenuItem
                                                className="select-dropdown-bottom"
                                                value={2}
                                              >
                                                2 Years
                                              </MenuItem>
                                              <MenuItem
                                                className="select-dropdown-bottom"
                                                value={3}
                                              >
                                                3 Years
                                              </MenuItem>
                                              <MenuItem
                                                className="select-dropdown-bottom"
                                                value={4}
                                              >
                                                4 Years
                                              </MenuItem>
                                              <MenuItem
                                                className="select-dropdown-bottom"
                                                value={5}
                                              >
                                                5 Years
                                              </MenuItem>
                                            </Select>
                                          </FormControl>
                                        );
                                      }}
                                    />
                                    <ErrorMessage
                                      name={`MileStoneArray.${index}.RuleId`}
                                      className="error-msg"
                                      index={index}
                                      value={x.RuleId}
                                    />
                                  </div>
                                  <div
                                    // className="child-card-projectrule"
                                    className="child-card"
                                  >
                                    <h4>
                                      Land Release(In Acres)
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`MileStoneArray.${index}.LandRelease`}
                                      render={() => {
                                        return (
                                          <TextField
                                            type="number"
                                            name={`MileStoneArray.${index}.LandRelease`}
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onChange={event => {
                                              handleChange(event);
                                              values.handleLandReleaseChange(
                                                event,
                                                index
                                              );
                                            }}
                                            onBlur={handleBlur}
                                            value={x.LandRelease}
                                          />
                                        );
                                      }}
                                    />
                                    <ErrorMessage
                                      name={`MileStoneArray.${index}.LandRelease`}
                                      className="error-msg"
                                      index={index}
                                      value={x.LandRelease}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="buttons-flex ">
                                <div className="flex-row width-grid-one">
                                  <div
                                    // className="effective-date-field"
                                    className="child-card"
                                  >
                                    <h4>Effective Date Of Completion</h4>

                                    <Field
                                      name={`MileStoneArray.${index}.DateOfCompletion`}
                                      render={() => {
                                        return (
                                          <div className="input-select-border">
                                            <input
                                              type="date"
                                              // max="9999-12-31"
                                              className="select-date-one"
                                              value={x.DateOfCompletion}
                                              // tslint:disable-next-line:jsx-no-lambda
                                              onChange={event => {
                                                handleChange(event);
                                                values.handleDateOfCompletionChange(
                                                  event,
                                                  index
                                                );
                                              }}
                                              name={`MileStoneArray.${index}.DateOfCompletion`}
                                            />
                                          </div>
                                        );
                                      }}
                                    />
                                    <ErrorMessage
                                      className="error-msg"
                                      name={`MileStoneArray.${index}.DateOfCompletion`}
                                      index={index}
                                      value={x.DateOfCompletion}
                                    />
                                  </div>
                                  <div
                                    className="child-card"
                                    // className="child-card-two"
                                  >
                                    <h4>Project Rule</h4>

                                    <Field
                                      name={`MileStoneArray.${index}.ProjectRuleTypes`}
                                      render={() => {
                                        return (
                                          <FormControl>
                                            <Select
                                              name={`MileStoneArray.${index}.ProjectRuleTypes`}
                                              multiple={true}
                                              value={x.ProjectRuleTypes.map(
                                                (y: string) => y
                                              )}
                                              // tslint:disable-next-line:jsx-no-lambda
                                              onChange={event => {
                                                handleChange(event);
                                                values.handleMultiSelectMileStoneChange(
                                                  event,
                                                  index
                                                );
                                              }}
                                              input={
                                                <Input id="select-multiple-checkbox" />
                                              }
                                              // tslint:disable-next-line:jsx-no-lambda
                                              renderValue={(
                                                selected: string[] | string
                                              ) =>
                                                isArray(selected)
                                                  ? selected.join(", ")
                                                  : selected
                                              }
                                              // MenuProps={MenuProps}
                                            >
                                              {x.mileStoneValues
                                                .map(
                                                  (
                                                    y: IMileStoneDropDownValues
                                                  ) => y.RuleName
                                                )
                                                .map(name => (
                                                  <MenuItem
                                                    key={name}
                                                    value={name}
                                                  >
                                                    <Checkbox
                                                      checked={
                                                        x.ProjectRuleTypes.indexOf(
                                                          name
                                                        ) > -1
                                                      }
                                                    />
                                                    <ListItemText
                                                      primary={name}
                                                    />
                                                  </MenuItem>
                                                ))}
                                            </Select>
                                          </FormControl>
                                        );
                                      }}
                                    />
                                    <ErrorMessage
                                      name={`MileStoneArray.${index}.ProjectRuleTypes`}
                                      className="error-msg"
                                      index={index}
                                      value={x.ProjectRuleTypes}
                                    />
                                    <div className="bottom-save-btn ">
                                      <a
                                        type="button"
                                        className="text-link"
                                        onClick={values.handlePopUpOpenClick}
                                      >
                                        Add New rule
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {index === 0 ? (
                                <div />
                              ) : (
                                <div className="continue-btn-milestone ms-btn-grid">
                                  <Button
                                    className="delete-btn ms-delet-btn"
                                    type="button"
                                    // tslint:disable-next-line:jsx-no-lambda
                                    onClick={() => {
                                      helpers.remove(index);
                                      values.onMileStoneDeleteClick(index);
                                    }}
                                  >
                                    -
                                  </Button>
                                </div>
                              )}
                              {values.MileStoneArray.length === index + 1 ? (
                                <div>
                                  <div className="continue-btn-milestone">
                                    <Button
                                      className="save-btn-plus  ms-add-btn "
                                      type="button"
                                      // tslint:disable-next-line:jsx-no-lambda
                                      onClick={() => {
                                        helpers.insert(index + 1, {
                                          AddMilestoneClickCount:
                                            values.AddMilestoneClickCount + 1,
                                          LandRelease: "",
                                          RuleName: "",
                                          id: values.AddMilestoneClickCount + 1,
                                          // tslint:disable-next-line:object-literal-sort-keys
                                          RuleId: 0,
                                          DateOfCompletion: "",
                                          mileStoneValues:
                                            values.mileStoneValues,
                                          ProjectRuleTypes: [],
                                          ProjectTypeId: 0,
                                          ruleTypeValues: values.ruleTypeValues,
                                          sourceTypeValues:
                                            values.sourceTypeValues,
                                          RuleSourceTypeId: 0,
                                          ConditionTypeId: 0,
                                          ConditionTypeValues:
                                            values.ConditionTypeValues,
                                          projectValues: values.projectValues
                                        });
                                        values.onMileStoneAddClick(index + 1);
                                      }}
                                    >
                                      +
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <div />
                              )}
                            </div>
                          </React.Fragment>
                        )
                      )
                    : null}
                </div>
              )}
            />
          </div>
        ) : (
          <div />
        )}
        <div className="bottom-save-btn">
          <Button
            className="reset-btn"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.handleBack()}
          >
            Back
          </Button>

          <Button
            variant="contained"
            className="save-btn"
            type="submit"
            // disabled={values.buttonDisable4}
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </form>
    <div className="bottom-card">
      Completed : Step {values.activeStep + 1} of 5
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={values.activeStep}
        nextButton={<KeyboardArrowRight />}
        backButton={<KeyboardArrowLeft />}
      />
    </div>
  </div>
);

// const isGoDate = (godate: string) => {
//   if (godate === "") {
//     return false;
//   } else {
//     const goDateResult = new Date(godate) >= new Date(2016, 0, 1);

//     return goDateResult;
//   }
// };

// const isLeaseStartDate = (date: string) => {
//   if (date === "") {
//     return false;
//   } else {
//     const result = new Date(date) <= new Date(2016, 0, 1);
//     return result;
//   }
// };

const isMileStoneDate = (date: string) => {
  if (date === "") {
    return false;
  } else {
    const result = new Date(date) >= new Date() || new Date();
    return result;
  }
};

const dateOfCompletion = new Date();

// const goDate = new Date(2016, 0, 1);

export const modelSchema = yup.object().shape({
  LeaseAmount: yup
    .number()
    .min(1)
    .required(),

  AmountPaid: yup
    .number()
    .min(1)
    .required(),
  // AmountToBePaid: yup
  //   .number()
  //   .min(1)
  //   .required(),
  LeaseEndDate: yup.string().required(),
  LeaseStartDate: yup.string().required(),
  Number: yup
    .number()
    .min(1)
    .required(),
  ProjectDescription: yup
    .string()
    .max(4000)
    .required(),
  TotalLandCost: yup
    .number()
    .min(1)
    .required(),
  registerOrNot: yup.string().required(),
  // tslint:disable-next-line:object-literal-sort-keys
  AvailableLandArea: yup
    .number()
    .min(1)
    .required(),
  // GoDate: yup.string().required(),
  // GoNumber: yup.string().required(),
  LandAllocationId: yup
    .number()
    .min(1)
    .required(),

  ProjectName: yup.string().required(),
  ProjectPurpose: yup.string().required(),
  RequiredLandSize: yup
    .number()
    .min(1)
    .required(),
  TownshipId: yup.number().required(),
  // UnitId: yup
  //   .number()
  //   .min(1)
  //   .required(),

  projectTypes: yup.array().required(),
  requiredLandUnitId: yup
    .number()
    .min(1)
    .required(),

  InitialAllocationLandSize: yup
    .number()
    .notRequired()
    .when("LandAllocationId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.number().notRequired()
    }),
  initialUnitId: yup
    .number()
    .notRequired()
    .when("LandAllocationId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.number().notRequired()
    }),

  MileStoneArray: yup
    .array()
    .notRequired()
    .when("LandAllocationId", {
      is: val => val === 2,
      then: yup
        .array()
        .of(
          yup.object().shape({
            DateOfCompletion: yup
              .string()
              // .max(dateOfCompletion, `Please select date from Current Date`)
              .required("DateOfCompletion required"),
            LandRelease: yup.number().required(),
            RuleId: yup
              .number()
              .min(1)
              .required()
          })
        )
        .required("required"),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.array().notRequired()
    })
  // ProjectDetailsArray: yup
  //   .array()
  //   .of(
  //     yup.object().shape({
  //       GoDate: yup
  //         .string()
  //         // .max(goDate, `Please select date from 2016`)
  //         .required("required"),
  //       GoNumber: yup.string().required()
  //     })
  //   )
  //   .required("required")
});

export const modelSchema1 = yup.object().shape({
  AvailableLandArea: yup
    .number()
    .min(1)
    .required(),
  // GoDate: yup.string().required(),
  // GoNumber: yup.string().required(),
  LandAllocationId: yup
    .number()
    .min(1)
    .required(),

  ProjectDescription: yup
    .string()
    .max(4000)
    .required(),
  ProjectName: yup.string().required(),
  ProjectPurpose: yup.string().required(),
  RequiredLandSize: yup
    .number()
    .min(1)
    .required(),
  TownshipId: yup.number().required(),
  // UnitId: yup
  //   .number()
  //   .min(1)
  //   .required(),

  projectTypes: yup.array().required(),
  requiredLandUnitId: yup
    .number()
    .min(1)
    .required(),

  InitialAllocationLandSize: yup
    .number()
    .notRequired()
    .when("LandAllocationId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.number().notRequired()
    }),
  initialUnitId: yup
    .number()
    .notRequired()
    .when("LandAllocationId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.number().notRequired()
    }),

  MileStoneArray: yup
    .array()
    .notRequired()
    .when("LandAllocationId", {
      is: val => val === 2,
      then: yup
        .array()
        .of(
          yup.object().shape({
            DateOfCompletion: yup
              .string()
              .max(dateOfCompletion, `Please select date from Current Date`)
              .required("DateOfCompletion required"),
            LandRelease: yup.number().required(),
            RuleId: yup
              .number()
              .min(1)
              .required()
          })
        )
        .required("required"),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.array().notRequired()
    })
  // ProjectDetailsArray: yup
  //   .array()
  //   .of(
  //     yup.object().shape({
  //       GoDate: yup
  //         .string()
  //         // .max(goDate, `Please select date from 2016`)
  //         .required("required"),
  //       GoNumber: yup.string().required()
  //     })
  //   )
  //   .required("required")
});

const errorDisplay = (name: any, error: any, index: any, value: any) => {
  switch (error) {
    case error:
      if (name === `MileStoneArray.${index}.DateOfCompletion`) {
        return !isMileStoneDate(value) ? (
          <div className="error-msg">Please Select Date Form Current Date</div>
        ) : (
          <div className="error-msg">DateOfCompletion is a Required Field </div>
        );
      } else if (name === `MileStoneArray.${index}.RuleId`) {
        return <div className="error-msg">RuleId is a Required Field </div>;
      } else if (name === `MileStoneArray.${index}.LandRelease`) {
        return (
          <div className="error-msg">Land Release is a Required Field </div>
        );
      }
    default:
      return <div className="error-msg">"RequiredField"</div>;
  }
};

const ErrorMessage = ({ name, index, value }: any) => (
  <Field
    name={name}
    // tslint:disable-next-line:jsx-no-lambda
    render={({ form }: any) => {
      const touch = getIn(form.touched, name);
      const error = getIn(form.errors, name);
      return touch && error ? errorDisplay(name, error, index, value) : null;
    }}
  />
);

const errorDisplayGO = (name: any, error: any, index: any, value: any) => {
  switch (error) {
    case error:
      if (name === `ProjectDetailsArray.${index}.GoDate`) {
        return <div className="error-msg">Please Select Date From 2016</div>;
      } else if (name === `ProjectDetailsArray.${index}.GoNumber`) {
        return <div className="error-msg">GomNumber is a Required Field </div>;
      }
    default:
      return <div className="error-msg">"RequiredField"</div>;
  }
};

const ErrorMessageGo = ({ name, index, value }: any) => (
  <Field
    name={name}
    // tslint:disable-next-line:jsx-no-lambda
    render={({ form }: any) => {
      const touch = getIn(form.touched, name);
      const error = getIn(form.errors, name);
      return touch && error ? errorDisplayGO(name, error, index, value) : null;
    }}
  />
);

export interface ILandSaveAndContinueProps {
  onHandleLandAllocationSaveandContinue(
    values: ILandallocationFormStatevalues &
      ILandAllocationValues &
      ISelectThemeCityProps &
      ISelectLandAllocationProps &
      IProjectRuleTypeProps &
      IProposalTabStateValues &
      IMileStoneDetailsStateValues &
      IWitnessDetailsStateValues &
      IAuthorizedPersonValues
  ): void;
}

export const LandAllocationForm = (
  props: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ILandSaveAndContinueProps &
    ICreateProposalProps &
    IWitnessDetailsStateValues &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IWitnessDetailsStateValues &
    IwitnessValues &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    IDetailsFromMap
) => (
  <div>
    <Formik
      enableReinitialize={true}
      validationSchema={
        props.TypeOfAllocationId === 1 ? modelSchema : modelSchema1
      }
      initialValues={{
        ...props,
        leaseTenure: props.leaseTenure,
        projectTypes: props.projectTypes,
        // tslint:disable-next-line:object-literal-sort-keys
        MileStoneArray: props.MileStoneArray,
        ProjectDetailsArray: props.ProjectDetailsArray,
        TotalLandCost: props.TotalLandCost,
        LeaseAmount: props.LeaseAmount
      }}
      onSubmit={props.onHandleLandAllocationSaveandContinue}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          ILandallocationFormStatevalues &
            ILandAllocationValues &
            ISelectLandAllocationProps &
            ISelectThemeCityProps &
            IUnitProps &
            ILeaseTenureProps &
            ILeaseValues &
            IMileStoneDetailsProps &
            IMileStoneDetailsStateValues &
            IMilestoneDropDownProps &
            IRuleTypeValuesProps &
            IProjectValuesProps &
            ISourceValueProps &
            IConditionValueProps &
            IProjectRuleTypeProps &
            ILandSaveAndContinueProps &
            ICreateProposalProps &
            IDetailsFromMap &
            ILandallocationFormStatevalues &
            ILandAllocationValues &
            ISelectThemeCityProps &
            ISelectLandAllocationProps &
            IProjectRuleTypeProps &
            IProposalTabStateValues &
            IMileStoneDetailsStateValues &
            IWitnessDetailsStateValues &
            IAuthorizedPersonValues
        >
      ) => (
        <LandAllocationInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            InitialAllocationSizeInAcres: props.InitialAllocationSizeInAcres,
            SuccessMileStonePopUp: props.SuccessMileStonePopUp,
            activeStep: props.activeStep,
            // tslint:disable-next-line:object-literal-sort-keys
            Village: props.Village,
            TownShip: props.TownShip,
            ParcelId: props.ParcelId,
            Mandal: props.Mandal,
            GeometryDataFromMap: props.GeometryDataFromMap,
            GeometricString: props.GeometricString,
            CompleteDetails: props.CompleteDetails,
            District: props.District,
            Boundaries: props.Boundaries,
            Colony: props.Colony,
            Block: props.Block,
            Plot: props.Plot,
            GlobalId: props.GlobalId,
            TempGlobalId: props.TempGlobalId,
            Sector: props.Sector,
            SurveyNumberByPlanning: props.SurveyNumberByPlanning,
            AvailableLandArea: props.AvailableLandArea,
            mapDataValues: props.mapDataValues,
            AddMilestoneClickCount: props.AddMilestoneClickCount,
            PopOverForAcres: props.PopOverForAcres,
            RuleSourceTypeId: props.RuleSourceTypeId,
            TownshipId: props.TownshipId,
            anchorEl: props.anchorEl,
            handlePopoverClose: props.handlePopoverClose,
            handlePopoverOpen: props.handlePopoverOpen,
            // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationId: props.LandAllocationId,
            Number: props.Number,
            initialUnitId: props.initialUnitId,
            requiredLandUnitId: props.requiredLandUnitId,
            handleMilestonePopUpClose: props.handleMilestonePopUpClose,
            maxValue: props.maxValue,
            milestonePopUp: props.milestonePopUp,
            minValue: props.minValue,
            projectValues: props.projectValues,
            sourceTypeValues: props.sourceTypeValues,
            townshipValues: props.townshipValues,
            value: props.value,
            // tslint:disable-next-line:object-literal-sort-keys
            ConditionTypeId: props.ConditionTypeId,
            ConditionTypeValues: props.ConditionTypeValues,
            handleConditionTypeChange: props.handleConditionTypeChange,
            selectLandAllocationTypeValues:
              props.selectLandAllocationTypeValues,
            unitValues: props.unitValues,
            // tslint:disable-next-line:object-literal-sort-keys
            selectThemeCityTypeValues: props.selectThemeCityTypeValues,
            leaseTenure: props.leaseTenure,
            onHandleLandAllocationSaveandContinue:
              props.onHandleLandAllocationSaveandContinue,
            LeaseEndDate: props.LeaseEndDate,
            onMileStoneDeleteClick: props.onMileStoneDeleteClick,
            // handleSubmit={props.handleSubmit}
            LandRelease: props.LandRelease,
            RuleName: props.RuleName,
            RuleId: props.RuleId,
            DateOfCompletion: props.DateOfCompletion,
            ProjectRuleTypes: props.ProjectRuleTypes,
            handleProjectTypeChange: props.handleProjectTypeChange,
            MileStoneNewRuleSubmit: props.MileStoneNewRuleSubmit,
            mileStoneValues: props.mileStoneValues,
            ruleTypeValues: props.ruleTypeValues,
            ruleName: props.ruleName,
            ruleName1: props.ruleName1,
            ruleName2: props.ruleName2,
            ProjectTypeId: props.ProjectTypeId,
            handleEditRuleTypeSubmit: props.handleEditRuleTypeSubmit,
            onHandleClose: props.onHandleClose,
            PopUpOpen: props.PopUpOpen,
            handlePopUpOpenClick: props.handlePopUpOpenClick,
            handleMultiSelectChange: props.handleMultiSelectChange,
            onMileStoneAddClick: props.onMileStoneAddClick,
            MileStoneArray: props.MileStoneArray,
            handleBack: props.handleBack,
            onMileStoneSave: props.onMileStoneSave,
            RequiredLandSizeBeforeAllocation:
              props.RequiredLandSizeBeforeAllocation,
            ProjectDetailsArray: props.ProjectDetailsArray,
            AddGoValueClickCount: props.AddGoValueClickCount,
            TotalLandCost: props.TotalLandCost,
            AmountPaid: props.AmountPaid,
            AmountToBePaid: props.AmountToBePaid,
            handleAmountPaidChange: props.handleAmountPaidChange,
            handleTotalLandCostChange: props.handleTotalLandCostChange,
            LeaseAmount: props.LeaseAmount,
            registerOrNot: props.registerOrNot
          }}
        />
      )}
    />
  </div>
);

export default LandAllocationForm;
