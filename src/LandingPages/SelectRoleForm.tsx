// import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  ISelectinnerRoleValues,
  ISelectRoleProps,
  ISelectRoleValues
} from "./ImageSlideLoginState";

const SelectRoleInnerForm = ({
  values,
  handleSubmit,
  handleChange,
  errors,
  touched
}: FormikProps<ISelectRoleProps & ISelectinnerRoleValues>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <div className="dropdown select-dropdown">
        <FormControl>
          <label className="select-txt">Select Module</label>

          <Select
            placeholder="Select Module"
            className="select-roll"
            //  
            value={values.selectRoleId}
            inputProps={{
              id: "selectRoleId",
              name: "selectRoleId"
            }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={event => {
              handleChange(event);

              values.handleLoginDialogOpen(event);
            }}
          >
            {values.selectRoles.map((e: ISelectRoleValues, id: number) => (
              <MenuItem
                className="select-dropdown-bottom"
                key={id}
                //
                value={e.id}
                aria-owns={
                  values.selectRoleId === 1 ? "simple-popper" : undefined
                }
                aria-haspopup="true"
                // variant="contained"
              >
                {e.role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  </form>
);

const SelectRoleForm = (props: ISelectRoleProps & ISelectinnerRoleValues) => (
  <Formik
    initialValues={{ ...props }}
    onSubmit={props.onHandleSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<ISelectRoleProps & ISelectinnerRoleValues>
    ) => (
      <SelectRoleInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          selectRoles: props.selectRoles,
          values: props.values
        }}
      />
    )}
  />
);

export default SelectRoleForm;
