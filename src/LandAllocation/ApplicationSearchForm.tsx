import { Button, FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";
import {
  IApplicationSearchStateValues,
  ILandAllocationValues,
  ISelectAgrementTypeProps,
  ISelectAllocationProps,
  ISelectThemeCityProps
} from "../Container/ApplicationSearchState";
import { IAgremmentTypeValues } from "../DefaultLayout/HomePage";
const ApplicationSearchInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<
  IApplicationSearchStateValues &
    ISelectThemeCityProps &
    ISelectAllocationProps &
    ISelectAgrementTypeProps
>) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="white-card">
        <div className="child-card">
          <FormControl component="fieldset">
            <h4>Land Allocated To</h4>
            <RadioGroup
              className="radio-button"
              name="landAllocatedTo"
              // className={classes.group}
              value={values.landAllocatedTo}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleLandAllocationChange(event);
              }}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Government"
              />
              <FormControlLabel value="2" control={<Radio />} label="Private" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="white-card">
        <div className="child-card">
          <FormControl error={!!(touched.TownshipId && errors.TownshipId)}>
            <h4>
              Township Type <span className="star"> *</span>
            </h4>
            <Select
              value={values.TownshipId}
              inputProps={{
                id: "TownshipId",
                name: "TownshipId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
              }}
            >
              {values.selectThemeCityTYpeValues.map((e: any) => (
                <MenuItem
                  className="select-dropdown-bottom"
                  key={e.TownshipId}
                  value={e.TownshipId}
                >
                  {e.TownshipName}
                </MenuItem>
              ))}
            </Select>
            {!!touched.TownshipId && errors.TownshipId && (
              <FormHelperText className="error-msg">
                Theme City Type Is Required Field
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="child-card">
          <h4>Authorized Person Name</h4>
          <TextField
            name="authorizedPersonName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.authorizedPersonName}
          />
          <div className="error-msg">
            {touched.authorizedPersonName && errors.authorizedPersonName && (
              <div>Authorized Person Name Is Required</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <FormControl
            error={!!(touched.LandAllocationId && errors.LandAllocationId)}
          >
            <h4>
              Allocation Type<span className="star"> *</span>
            </h4>
            <Select
              value={values.LandAllocationId}
              inputProps={{
                id: "LandAllocationId",
                name: "LandAllocationId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleAllocationClick(event);
              }}
            >
              {values.selectLandAllocationTypeValues.map(
                (e: ILandAllocationValues, id: number) => (
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
            {!!touched.LandAllocationId && errors.LandAllocationId && (
              <FormHelperText className="error-msg">
                Select Allocation Type Is Required Field
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="child-card">
          <h4> Organization Name</h4>
          <TextField
            name="organizationName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.organizationName}
          />
          <div className="error-msg">
            {touched.organizationName && errors.organizationName && (
              <div>Organization Name Is Required</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4> Authorized Person Email Address</h4>
          <TextField
            name="authorisedPersonEmailAddress"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.authorisedPersonEmailAddress}
          />
          <div className="error-msg">
            {touched.authorisedPersonEmailAddress &&
              errors.authorisedPersonEmailAddress && (
                <div>Authorised Person EmailAddress Is Required</div>
              )}
          </div>
        </div>
        <div className="child-card">
          <FormControl
            error={!!(touched.LandAllocationId && errors.LandAllocationId)}
          >
            <h4>Agreement Type</h4>
            <Select
              value={values.AgreementId}
              onChange={handleChange}
              inputProps={{
                name: "AgreementId"
              }}
            >
              {values.agreementTypeValues &&
                values.agreementTypeValues.map(
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
                Select Agreement Type Is Required Field
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="child-card">
          <h4> Enter Application Id</h4>
          <TextField
            name="enterApplicationId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.enterApplicationId}
          />
          <div className="error-msg">
            {touched.enterApplicationId && errors.enterApplicationId && (
              <div>Enter ApplicationId Is Required</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <h4>Mobile Number</h4>

          <TextField
            name="mobileNumber"
            type="number"
            // tslint:disable-next-line:jsx-no-lambda
            onInput={(e: any) => {
              e.target.value = parseInt(
                Math.max(0, parseInt(e.target.value, 10))
                  .toString()
                  .slice(0, 10),
                10
              );
            }}
            onBlur={handleBlur}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
            }}
            value={values.mobileNumber}
          />
          <div className="error-msg">
            {touched.mobileNumber && errors.mobileNumber && (
              <div>Mobile Number Is Required</div>
            )}
          </div>
        </div>
        <div className="child-card">
          <FormControl error={!!(touched.TypeOfFilter && errors.TypeOfFilter)}>
            <h4>
              Type Of Filter <span className="star"> *</span>
            </h4>
            <Select
              // required={true}
              // type="number"

              value={values.TypeOfFilter}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
              }}
              // name="TypeOfFilter"
              // placeholder="Select"
              inputProps={{
                id: "TypeOfFilter",
                name: "TypeOfFilter"
              }}
            >
              <MenuItem className="select-dropdown-bottom" value={1}>
                Current Month
              </MenuItem>
              <MenuItem className="select-dropdown-bottom" value={2}>
                Last Month
              </MenuItem>
              <MenuItem className="select-dropdown-bottom" value={3}>
                Last 3 Months
              </MenuItem>
              <MenuItem className="select-dropdown-bottom" value={4}>
                Last 6 Months
              </MenuItem>
              <MenuItem className="select-dropdown-bottom" value={5}>
                Current Year
              </MenuItem>
              <MenuItem className="select-dropdown-bottom" value={6}>
                Between Date Range
              </MenuItem>
            </Select>
            {!!(touched.TypeOfFilter && errors.TypeOfFilter) && (
              <FormHelperText className="error-msg">
                Type Of Filter Is Required Field
              </FormHelperText>
            )}
          </FormControl>
        </div>
        {values.TypeOfFilter === 6 ? (
          <div className="date-section">
            <div className="date-container">
              <div className="child-card">
                <h4>From Date</h4>
                <div className="input-select-border">
                  <input
                    required={true}
                    name="FromDate"
                    type="date"
                    defaultValue={values.FromDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="ch  ild-card">
              <div className="date-container">
                <h4>To Date</h4>
                <div className="input-select-border">
                  <input
                    required={true}
                    name="ToDate"
                    type="date"
                    defaultValue={values.ToDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="title-btn">
          <Button className="save-btn" type="submit">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};
export const modelSchema = yup.object().shape({
  authorisedPersonEmailAddress: yup
    .string()
    .email()
    .required(),
  authorizedPersonName: yup.string().required(),
  enterApplicationId: yup.string().required(),
  landAllocatedTo: yup.string().required(),
  // tslint:disable-next-line:object-literal-sort-keys
  TownshipId: yup.number().required(),
  LandAllocationId: yup.number().required(),
  organizationName: yup.string().required(),
  TypeOfFilter: yup.number().required(),
  AgreementId: yup.number().required(),

  mobileNumber: yup
    .number()
    .required()
    .min(1000000000)
    .max(999999999999)
});

export const ApplicationSearchForm = (
  props: IApplicationSearchStateValues &
    ISelectThemeCityProps &
    // IApplicationSearchProps &
    ISelectAllocationProps &
    ISelectAgrementTypeProps &
    any
) => (
  <div>
    <Formik
      initialValues={{
        ...props,
        AgreementId: props.agreementTypeValues.AgreementId,
        LandAllocationId: props.selectLandAllocationTypeValues.LandAllocationId,
        TownshipId: props.selectThemeCityTYpeValues.TownshipId,
        TypeOfFilter: ""
      }}
      onSubmit={props.onHandleSearch}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          IApplicationSearchStateValues &
            ISelectThemeCityProps &
            ISelectAllocationProps &
            ISelectAgrementTypeProps
        >
      ) => (
        <ApplicationSearchInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            agreementTypeValues: props.agreementTypeValues,
            selectLandAllocationTypeValues:
              props.selectLandAllocationTypeValues,
            selectThemeCityTYpeValues: props.selectThemeCityTYpeValues
          }}
        />
      )}
    />
  </div>
);
export default ApplicationSearchForm;
