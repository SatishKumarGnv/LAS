import { Button } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IEditRoleProps, IEditRoleValues } from "src/DefaultLayout/HomePage";
import { isArray } from "util";

import {
  Checkbox,
  FormControl,
  FormHelperText,
  Input,
  ListItemText,
  MenuItem,
  Select
} from "@material-ui/core";

const EditRoleTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditRoleValues & IEditRoleProps>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2> Edit Role Name</h2>
        </div>
        <div className="child-card">
          <div className="text-align-popup">
            <h4>
              Role Name <span className="star">*</span>
            </h4>
          </div>
          <TextField
            name="RoleName"
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);
              values.handleEditRuleNameChange(event);
            }}
            // onBlur={handleBlur}
            value={values.RoleName}
          />
          <div className="error-msg">
            {touched.RoleName && errors.RoleName && (
              <div>Role Name Is Required</div>
            )}
          </div>
        </div>
        <div className="child-card ">
          <FormControl error={!!(touched.ProjectType && errors.ProjectType)}>
            <h4>
              Project Type
              <span className="star"> *</span>
            </h4>

            <Select
              className="select-value"
              multiple={true}
              name="ProjectType"
              value={values.ProjectType.map(x => x)}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.onhandleProjectTypeChange(event, values);
              }}
              input={<Input id="select-multiple-checkbox" />}
              // tslint:disable-next-line:jsx-no-lambda
              renderValue={(selected: string[] | string) =>
                isArray(selected) ? selected.join(", ") : selected
              }
              // MenuProps={MenuProps}
            >
              {values.ProjectTypeValues &&
                values.ProjectTypeValues.map(x => x.ProjectName).map(
                  (name, i) => (
                    <MenuItem
                      className="select-dropdown-bottom"
                      key={i}
                      value={name}
                    >
                      <Checkbox
                        checked={values.ProjectType.indexOf(name) > -1}
                      />
                      <ListItemText primary={name} />
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.ProjectType && errors.ProjectType && (
              <FormHelperText className="error-msg">
                Project Rules Is Required Field
              </FormHelperText>
            )}
          </FormControl>
        </div>

        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleEditPopUpClose()}
          >
            cancel
          </Button>
          <Button className="main-btn" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  RoleName: yup.string().required()
});

export const EditRoleTypeForm = (props: IEditRoleValues & IEditRoleProps) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleEditSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IEditRoleValues & IEditRoleProps>) => (
        <EditRoleTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            ProjectType: props.ProjectType,
            ProjectTypeValues: props.ProjectTypeValues,
            RoleId: props.RoleId,
            RoleName: props.RoleName,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSave: props.onHandleEditSave,
            onhandleProjectTypeChange: props.onhandleProjectTypeChange,
            roleValues: props.roleValues
          }}
        />
      )}
    />
  </div>
);

export default EditRoleTypeForm;
