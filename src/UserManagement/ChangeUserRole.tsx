import * as React from "react";
import * as yup from "yup";

import { Formik, FormikProps } from "formik";

import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  IRoleReportWiseProps,
  IRoleValues,
  ISelectRoleProps
} from "../Container/ChangeUserRoleState";

const ChangeUserInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors
}: FormikProps<IRoleValues & ISelectRoleProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className="white-card">
      <FormControl className="select" required={true}>
        <h4>
          Select Role <span className="star"> *</span>
        </h4>
        <Select
          placeholder="Select"
          inputProps={{
            id: "RoleId",
            name: "RoleId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            handleChange(event);
            values.handleClick(event);
          }}
          value={values.RoleId}
        >
          {values.selectRoleList.map((e: IRoleValues) => (
            <MenuItem
              key={e.RoleId}
              className="select-dropdown-bottom"
              value={e.RoleId}
            >
              {e.RoleName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  </form>
);

export const modelSchema = yup.object().shape({
  EmailApplicationModuleId: yup.number().required,
  fromDate: yup.date().required,
  toDate: yup.date().required,
  typesOfFilter: yup.number().required
});

export interface ISelectRoleValueProps {
  onSubmit(values: IRoleValues): void;
}
const ChangeUserRoleForm = (
  props: IRoleReportWiseProps &
    ISelectRoleValueProps &
    IRoleValues &
    ISelectRoleProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      onSubmit={props.onSubmit}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IRoleValues & ISelectRoleProps>) => (
        <ChangeUserInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            selectRoleList: props.selectRoleList
          }}
        />
      )}
    />
  </div>
);

export default ChangeUserRoleForm;
