import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select
} from "@material-ui/core";
import {
  IAddProjectRuleProps,
  IAddprojectRuleValues,
  IconditionProps,
  IConditionValues,
  IProjectProps,
  IProjectRuleDetails,
  IProjectValues,
  IRule,
  ISourceProps,
  ISourceValues,
  IThemeCityProps,
  IThemeCityValues
} from "src/Container/ProjectRulesState";
import * as yup from "yup";

import { Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";

const AddDocumentTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<
  IProjectRuleDetails &
    IAddprojectRuleValues &
    IAddProjectRuleProps &
    IThemeCityProps &
    ISourceProps &
    IconditionProps &
    IProjectProps &
    IRule
>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="child-card">
          <FormControl error={!!(touched.TownshipId && errors.TownshipId)}>
            <h4>
              Township Type <span className="star"> *</span>
            </h4>
            <Select
              required={true}
              name="TownshipId"
              value={values.TownshipId}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={handleChange}
              inputProps={{
                id: "TownshipId",
                name: "TownshipId"
              }}
            >
              {values.themeCityValues.map((x: IThemeCityValues, id) => (
                <MenuItem
                  className="select-dropdown-bottom"
                  key={id}
                  value={x.TownshipId}
                >
                  {x.TownshipName}
                </MenuItem>
              ))}
            </Select>
            {!!touched.TownshipId && errors.TownshipId && (
              <FormHelperText className="error-msg">
                {" "}
                Select Township Is Required Field
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="child-card">
          <FormControl
            error={!!(touched.ProjRuleTypeId && errors.ProjRuleTypeId)}
          >
            <h4>
              Rule Type <span className="star"> *</span>
            </h4>
            <Select
              required={true}
              name="ProjRuleTypeId"
              value={values.ProjRuleTypeId}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleRuleType(event);
              }}
              inputProps={{
                id: "ProjRuleTypeId",
                name: "ProjRuleTypeId"
              }}
            >
              {values.projectRuleValues.map((x: IProjectValues, id) => (
                <MenuItem
                  className="select-dropdown-bottom"
                  key={id}
                  value={x.ProjRuleTypeId}
                >
                  {x.RuleType}
                </MenuItem>
              ))}
            </Select>
            {!!touched.ProjRuleTypeId && errors.ProjRuleTypeId && (
              <FormHelperText className="error-msg">
                Select Rule Is Required Field
              </FormHelperText>
            )}
          </FormControl>
        </div>

        {values.ProjRuleTypeId === 0 || values.ProjRuleTypeId === 1 ? (
          <div>
            <div className="child-card">
              <h4>
                Rule Name <span className="star"> *</span>
              </h4>
              <TextField
                id="newProjectName"
                name="newProjectName"
                value={values.newProjectName}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleRuleNameChange(event);
                  // values.handleThemeCityChange(event);
                }}
                margin="normal"
              />
              <div className="error-msg">
                {touched.newProjectName && errors.newProjectName && (
                  <div>Rule Name Is Required</div>
                )}
              </div>
            </div>
          </div>
        ) : values.ProjRuleTypeId === 2 ? (
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
                  {values.sourceValues.map((e: ISourceValues, id: number) => (
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
                    values.handleConditionChange(event);
                  }}
                >
                  {values.conditionValues.map(
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
            ) : (
              <div />
            )}
            {values.ConditionTypeId !== 0 &&
            values.ConditionTypeId !== undefined &&
            values.ConditionTypeId !== 7 &&
            values.ConditionTypeId !== 8 ? (
              <div>
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
                  {touched.value && errors.value && (
                    <div>Value is Required</div>
                  )}
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
                  id="newProjectName"
                  name="newProjectName"
                  value={values.newProjectName}
                  onChange={handleChange}
                  margin="normal"
                />
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleAddPopUpClose()}
          >
            cancel
          </Button>
          <Button
            className="main-btn"
            type="submit"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleAddSave(values)}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  ProjRuleTypeId: yup.number().required(),
  ThemeCityId: yup.number().required(),
  newProjectName: yup.string().required()
});

export const modelSchema2 = yup.object().shape({
  ConditionTypeId: yup.number().required(),
  ProjRuleTypeId: yup.number().required(),
  RuleSourceTypeId: yup.number().required(),
  ThemeCityId: yup.number().required(),
  value: yup.number().required()
});

export const modelSchema3 = yup.object().shape({
  ConditionTypeId: yup
    .number()
    .notRequired()
    .when("ProjRuleTypeId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required()
    }),
  ProjRuleTypeId: yup
    .number()
    .min(1)
    .required(),
  RuleSourceTypeId: yup
    .number()
    .notRequired()
    .when("ProjRuleTypeId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required()
    }),
  ThemeCityId: yup
    .number()
    .min(1)
    .required(),
  newProjectName: yup
    .string()
    .notRequired()
    .when("ProjRuleTypeId", {
      is: val => val === 1,
      then: yup.string().required()
    }),

  value: yup
    .number()
    .notRequired()
    .when("ProjRuleTypeId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required()
    }),
  // tslint:disable-next-line:object-literal-sort-keys
  minValue: yup
    .number()
    .notRequired()
    .when("ProjRuleTypeId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required()
    }),
  // tslint:disable-next-line:object-literal-sort-keys
  maxValue: yup
    .number()
    .notRequired()
    .when("ProjRuleTypeId", {
      is: val => val === 2,
      then: yup
        .number()
        .min(1)
        .required()
    })
});

export const AddProjectRulesForm = (
  props: IProjectRuleDetails &
    IAddprojectRuleValues &
    IAddProjectRuleProps &
    IThemeCityProps &
    ISourceProps &
    IconditionProps &
    IProjectProps &
    any
) => (
  <div>
    <Formik
      initialValues={
        props.ProjRuleTypeId === 1
          ? {
              ...props,
              ProjRuleTypeId: props.projectRuleValues.ProjRuleTypeId,
              ThemeCityId: props.themeCityValues.ThemeCityId,
              newProjectName: props.newProjectName
            }
          : props.ProjRuleTypeId === 2 &&
            props.ConditionTypeId !== 6 &&
            props.ConditionTypeId !== 7 &&
            props.ConditionTypeId !== 0 &&
            props.ConditionTypeId !== undefined
          ? {
              ...props,
              ConditionTypeId: props.conditionValues.ConditionTypeId,
              ProjRuleTypeId: props.projectRuleValues.ProjRuleTypeId,
              RuleSourceTypeId: props.sourceValues.RuleSourceTypeId,
              ThemeCityId: props.themeCityValues.ThemeCityId,
              newProjectName: props.newProjectName,
              value: props.projectRulesTypeMasterList.value
            }
          : props.ProjRuleTypeId === 2 &&
            (props.ConditionTypeId === 6 || props.ConditionTypeId === 7) &&
            props.ConditionTypeId !== 0 &&
            props.ConditionTypeId !== undefined
          ? {
              ...props,
              ConditionTypeId: props.conditionValues.ConditionTypeId,
              ProjRuleTypeId: props.projectRuleValues.ProjRuleTypeId,
              RuleSourceTypeId: props.sourceValues.RuleSourceTypeId,
              ThemeCityId: props.themeCityValues.ThemeCityId,
              maxValue: props.maxValue,
              minValue: props.minValue
            }
          : props
      }
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          IProjectRuleDetails &
            IAddprojectRuleValues &
            IAddProjectRuleProps &
            IThemeCityProps &
            ISourceProps &
            IconditionProps &
            IProjectProps &
            IRule
        >
      ) => (
        <AddDocumentTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,

            conditionValues: props.conditionValues,
            newProjectName: props.newProjectName,
            onHandleAddChange: props.onHandleAddChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave,
            projectRuleValues: props.projectRuleValues,
            projectRulesTypeMasterList: props.projectRulesTypeMasterList,
            sourceValues: props.sourceValues,
            themeCityValues: props.themeCityValues
          }}
        />
      )}
    />
  </div>
);

export default AddProjectRulesForm;
