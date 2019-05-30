import * as React from "react";
import * as yup from "yup";

import { Formik, FormikProps } from "formik";

// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  IRoleNameValues,
  ISelectRoleNameProps,
  ISelectRoleReportWiseProps
} from "src/Container/BulkPasswordState";

// import Typography from "@material-ui/core/Typography";

// import {
//     IRoleValues,
//   ISelectThemeCityProps,
//   IThemeCityReportWiseProps
// } from "../Container/ThemeCityReportState";
// import { getSelectDepartmentValues } from "./LoginAuditTrailService";

const BulkPasswordInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors
}: FormikProps<IRoleNameValues & ISelectRoleNameProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className="white-card">
      <FormControl className="select" required={true}>
        <h4>
          Select Role <span className="star"> *</span>{" "}
        </h4>
        <Select
          placeholder="Select"
          inputProps={{
            id: "RoleId",
            name: "RoleId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            handleChange(event);
            values.handleClick(event);
          }}
          value={values.RoleId}
        >
          {/* <MenuItem className="select-dropdown-bottom" value={0}>
            --Select--
          </MenuItem> */}
          {values.selectedRoleList.map((e: IRoleNameValues) => (
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
  RoleId: yup.number().required,
  fromDate: yup.date().required,
  toDate: yup.date().required,
  typesOfFilter: yup.number().required
});

export interface ISelectRoleValueProps {
  onSubmit(values: IRoleNameValues): void;
}
const BulkPasswordResetForm = (
  props: ISelectRoleReportWiseProps &
    ISelectRoleValueProps &
    IRoleNameValues &
    ISelectRoleNameProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      onSubmit={props.onSubmit}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IRoleNameValues & ISelectRoleNameProps>) => (
        <BulkPasswordInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            RoleId: props.RoleId,
            selectedRoleList: props.selectedRoleList
          }}
        />
      )}
    />
  </div>
);

export default BulkPasswordResetForm;
