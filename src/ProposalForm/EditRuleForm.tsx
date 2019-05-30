import FormControl from "@material-ui/core/FormControl";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";

import MenuItem from "@material-ui/core/MenuItem";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
// import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
// import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { IConditionValues } from "../Container/ProjectRulesState";
import {
  IConditionValueProps,
  IRuleTypeValues,
  IRuleTypeValuesProps,
  ISelectThemeCityProps,
  ISourceValueProps,
  ISourceValues,
  ITownshipValues
} from "../DefaultLayout/HomePage";
const EditRuleTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<
  ITownshipValues &
    ISelectThemeCityProps &
    IRuleTypeValuesProps &
    ISourceValueProps &
    IConditionValueProps
>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <div className="child-card">
        <FormControl
          required={true}
          error={!!(touched.TownshipId && errors.TownshipId)}
        >
          <h4>
            Township Name <span className="star"> *</span>
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
              // values.handleThemeCityChange(event);
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
          {!!touched.TownshipId && errors.TownshipId && (
            <FormHelperText className="error-msg">
              Select TownshipId Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>

      <div className="child-card">
        <FormControl
          required={true}
          error={!!(touched.ProjectTypeId && errors.ProjectTypeId)}
        >
          <h4>
            Rule Type <span className="star"> *</span>
          </h4>
          <Select
            value={values.ProjectTypeId}
            inputProps={{
              id: "ProjectTypeId",
              name: "ProjectTypeId"
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleProjectTypeChange(event);
            }}
          >
            {values.ruleTypeValues.map((e: IRuleTypeValues, id: number) => (
              <MenuItem
                key={id}
                className="select-dropdown-bottom"
                value={e.ProjRuleTypeId}
              >
                {e.RuleType}
              </MenuItem>
            ))}
          </Select>
          {!!touched.ProjectTypeId && errors.ProjectTypeId && (
            <FormHelperText className="error-msg">
              Select Rule Type Is Required Field
            </FormHelperText>
          )}
        </FormControl>
      </div>

      {values.ProjectTypeId === 0 || values.ProjectTypeId === 1 ? (
        <div>
          <div className="child-card">
            <h4>
              Rule Name <span className="star"> *</span>
            </h4>
            <TextField
              required={true}
              id="ruleName"
              name="ruleName"
              defaultValue={values.ruleName}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleAddRuleNameChange(event);
              }}
              // className={classes.textField}
              margin="normal"
            />
            <div className="error-msg">
              {touched.ruleName && errors.ruleName && (
                <div>Rule Name Is Required</div>
              )}
            </div>
          </div>
        </div>
      ) : values.ProjectTypeId === 2 ? (
        <div>
          <div className="child-card">
            <FormControl
              required={true}
              error={!!(touched.RuleSourceTypeId && errors.RuleSourceTypeId)}
            >
              <h4>
                Source Type <span className="star"> *</span>
              </h4>
              <Select
                value={values.RuleSourceTypeId}
                inputProps={{
                  id: "RuleSourceTypeId",
                  name: "RuleSourceTypeId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleSourceTypeChange(event);
                  // values.handleThemeCityChange(event);
                }}
              >
                {values.sourceTypeValues.map((e: ISourceValues, id: number) => (
                  <MenuItem
                    key={id}
                    className="select-dropdown-bottom"
                    value={e.RuleSourceTypeId}
                  >
                    {e.SourceName}
                  </MenuItem>
                ))}
              </Select>
              {!!(touched.RuleSourceTypeId && errors.RuleSourceTypeId) && (
                <FormHelperText className="error-msg">
                  Select Source Type Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="child-card">
            <FormControl
              required={true}
              error={!!(touched.ConditionTypeId && errors.ConditionTypeId)}
            >
              <h4>
                Condition Type <span className="star"> *</span>
              </h4>
              <Select
                value={values.ConditionTypeId}
                inputProps={{
                  id: "ConditionTypeId",
                  name: "ConditionTypeId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleConditionTypeChange(event);
                }}
              >
                {values.ConditionTypeValues.map(
                  (e: IConditionValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.ConditionTypeId}
                    >
                      {e.ConditionName}
                    </MenuItem>
                  )
                )}
              </Select>
              {!!touched.ConditionTypeId && errors.ConditionTypeId && (
                <FormHelperText className="error-msg">
                  Select Condition Type Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>
          {values.ConditionTypeId === 7 || values.ConditionTypeId === 8 ? (
            <div>
              <h4>
                Max Value <span className="star"> *</span>
              </h4>
              <TextField
                id="maxValue"
                name="maxValue"
                type="number"
                defaultValue={
                  values.maxValue === 0 ? undefined : values.maxValue
                }
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleMaxValueChange(event);
                }}
                margin="normal"
              />
              <div>
                {touched.maxValue && errors.maxValue && (
                  <div>Maximum value is Required</div>
                )}
              </div>
              <div>
                <h4>
                  Min Value <span className="star"> *</span>
                </h4>
                <TextField
                  id="minValue"
                  name="minValue"
                  type="number"
                  defaultValue={
                    values.minValue === 0 ? undefined : values.minValue
                  }
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleMinValueChange(event);
                  }}
                  margin="normal"
                />
                <div>
                  {touched.minValue && errors.minValue && (
                    <div>Minimum value is Required</div>
                  )}
                </div>
              </div>
            </div>
          ) : values.ConditionTypeId !== 0 &&
            values.ConditionTypeId !== undefined &&
            values.ConditionTypeId !== 7 &&
            values.ConditionTypeId !== 8 ? (
            <div className="child-card">
              <h4>
                Value <span className="star"> *</span>
              </h4>
              <TextField
                id="value"
                name="value"
                type="number"
                defaultValue={values.value === 0 ? undefined : values.value}
                margin="normal"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleValueChange(event);
                }}
              />
              <div>
                {touched.value && errors.value && <div>Value is Required</div>}
              </div>
            </div>
          ) : (
            <div />
          )}
          <div>
            <div className="child-card">
              <h4>
                Rule Name <span className="star"> *</span>
              </h4>
              <TextField
                id="ruleName"
                name="ruleName"
                value={values.ruleName}
                // onChange={handleChange}
                margin="normal"
              />
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      <div className="popup-grid">
        <Button
          type="submit"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => values.MileStoneNewRuleSubmit(values)}
        >
          Submit
        </Button>
        {/* tslint:disable-next-line:jsx-no-lambda */}
        <Button onClick={() => values.onHandleClose()} type="button">
          Cancel
        </Button>
      </div>
    </div>
  </form>
);

export const EditRuleForm = (
  props: ITownshipValues &
    ISelectThemeCityProps &
    IRuleTypeValuesProps &
    ISourceValueProps &
    IConditionValueProps
) => (
  <div>
    <Formik
      // validationSchema={modelSchema}
      initialValues={{
        ...props
      }}
      onSubmit={props.MileStoneNewRuleSubmit}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          ITownshipValues &
            ISelectThemeCityProps &
            IRuleTypeValuesProps &
            ISourceValueProps &
            IConditionValueProps
        >
      ) => (
        <EditRuleTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            onHandleClose: props.onHandleClose,
            // tslint:disable-next-line:object-literal-sort-keys
            selectThemeCityTypeValues: props.selectThemeCityTypeValues,
            // tslint:disable-next-line:object-literal-sort-keys
            ruleTypeValues: props.ruleTypeValues,
            sourceTypeValues: props.sourceTypeValues,
            ruleName: props.ruleName
          }}
        />
      )}
    />
  </div>
);

export default EditRuleForm;
