import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IAddRoleProps, IAddRoleValues } from "src/DefaultLayout/HomePage";
import { isArray } from "util";
import * as yup from "yup";

import {
  Checkbox,
  FormControl,
  Input,
  ListItemText,
  MenuItem,
  Select
} from "@material-ui/core";

const AddRoleTypeInnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit
}: FormikProps<IAddRoleValues & IAddRoleProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <div className="text-align-popup">
        <h4>
          Role Name <span className="star">*</span>
        </h4>
      </div>
      <TextField
        className="select-value"
        name="newRoleName"
        value={values.newRoleName}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={event => {
          handleChange(event);
          values.onHandleAddChange(event);
        }}
        margin="normal"
      />
      <div className="error-msg">
        {touched.newRoleName && errors.newRoleName && (
          <div>Role Name Is Required</div>
        )}
      </div>
      <br />
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
            // error={values.ProjectType.length === 0}
          >
            {values.ProjectTypeValues &&
              values.ProjectTypeValues.map(x => x.ProjectName).map(
                (name, i) => (
                  <MenuItem
                    className="select-dropdown-bottom"
                    key={i}
                    value={name}
                  >
                    <Checkbox checked={values.ProjectType.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                )
              )}
          </Select>
          <div className="error-msg">
            {!!touched.ProjectType && errors.ProjectType && (
              <div>Project Rules Is Required Field</div>
            )}
          </div>
        </FormControl>
      </div>
      <br />
      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          color="secondary"
          onClick={values.onHandleAddPopUpClose}
        >
          Cancel
        </Button>
        <Button
          className="main-btn"
          color="primary"
          type="submit"
          // tslint:disable-next-line:jsx-no-lambda
          // onClick={() =>
          //   props.onHandleAddSave(
          //     props.documentTypeMasterList.length + 1,
          //     props.newRoleName
          //   )
          // }
        >
          Save
        </Button>
      </div>
    </div>
  </form>
);

export const modelSchema = yup.object().shape({
  newRoleName: yup.string().required(),
  // tslint:disable-next-line:object-literal-sort-keys
  ProjectType: yup.array().required()
});

const AddRoleTypeForm = (props: IAddRoleValues & IAddRoleProps) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddRoleValues & IAddRoleProps>) => (
        <AddRoleTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            ProjectType: props.ProjectType,
            ProjectTypeValues: props.ProjectTypeValues,
            RoleId: props.RoleId,
            documentTypeMasterList: props.documentTypeMasterList,
            newRoleName: props.newRoleName,
            onHandleAddChange: props.onHandleAddChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave,
            onhandleProjectTypeChange: props.onhandleProjectTypeChange
          }}
        />
      )}
    />
  </div>
);

export default AddRoleTypeForm;
