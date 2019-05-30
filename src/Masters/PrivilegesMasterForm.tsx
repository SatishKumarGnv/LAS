import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// tslint:disable-next-line:ordered-imports
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Formik, FormikProps } from "formik";
import * as React from "react";

// import Grid from "@material-ui/core/Grid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import {
  IPrivilegesStateValues,
  IPrivilegesSubValues,
  IPrivilegesValues,
  ISelectRoleValues
} from "../DefaultLayout/HomePage";

const PrivilegesinnerForm = ({
  values,
  handleChange,
  handleSubmit,
  touched,
  errors
}: FormikProps<IPrivilegesStateValues & ISelectRoleValues>) => (
  <div className="innerpage-container">
    <div className="inner-header-titile">
      {/* <img src="/images/login-audit-icon.png" /> */}
      <h2>Privileges Master</h2>
    </div>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="white-card">
        <div className="date-container">
          <h4>Select Role</h4>
          <FormControl className="select">
            <Select
              className="forword-select"
              value={values.RoleId}
              inputProps={{
                id: "RoleId",
                name: "RoleId"
              }}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleRoleClick(event);
              }}
            >
              {values.selectRoleValues &&
                values.selectRoleValues.map(
                  (e: ISelectRoleValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.RoleId}
                    >
                      {e.RoleName}
                    </MenuItem>
                  )
                )}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="group-collapse">
        <FormGroup row={false}>
          {values.privilegesValues.map((x: IPrivilegesValues, id: number) => (
            <div key={id}>
              <Grid item={true} xs={12}>
                <ExpansionPanel className="master-list-application" key={id}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <Checkbox
                        checked={x.state.selected}
                        // tslint:disable-next-line:jsx-no-lambda
                        onChange={event =>
                          values.handleCheckAllChange(event, x, x.id)
                        }
                        value={x.text}
                        color="primary"
                      />
                      {x.text}
                    </Typography>
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails>
                    {x.children &&
                      x.children.map(
                        (y: IPrivilegesSubValues, index: number) => {
                          return y.children && y.children.length === 0 ? (
                            <div className="MuiCollapse-wrapperInner-0148">
                              <FormGroup key={index} row={true}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={y.state.selected}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      onChange={event =>
                                        values.handleCheckChange2(
                                          event,
                                          y,
                                          x.id,
                                          x
                                        )
                                      }
                                      value={y.text}
                                    />
                                  }
                                  label={y.text}
                                />
                              </FormGroup>
                            </div>
                          ) : (
                            <Grid item={true} xs={12}>
                              <ExpansionPanel
                                className="text-col"
                                // className="master-list-two"
                                key={index}
                              >
                                <ExpansionPanelSummary
                                  className="list-content"
                                  expandIcon={<ExpandMoreIcon />}
                                >
                                  <Typography>
                                    <Checkbox
                                      checked={y.state.selected}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      onChange={event =>
                                        values.handleCheckChange2(
                                          event,
                                          y,
                                          x.id,
                                          x
                                        )
                                      }
                                      value={y.text}
                                      color="primary"
                                    />
                                    {y.text}
                                  </Typography>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                  {y.children &&
                                    y.children.map((z: any, k: number) => (
                                      <div className="">
                                        <FormGroup key={k} row={true}>
                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                checked={z.selected}
                                                // tslint:disable-next-line:jsx-no-lambda
                                                onChange={event =>
                                                  values.handleCheckChange3(
                                                    event,
                                                    z,
                                                    y,
                                                    x.id,
                                                    x
                                                  )
                                                }
                                                value={z.text}
                                              />
                                            }
                                            label={z.text}
                                          />
                                        </FormGroup>
                                      </div>
                                    ))}
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                            </Grid>
                          );
                        }
                      )}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <br />
              </Grid>
            </div>
          ))}
        </FormGroup>
      </div>
      <div className="bootom-submit">
        <Button variant="contained" className="save-btn" type="submit">
          Submit
        </Button>
      </div>
    </form>
  </div>
);

export interface IPrivilegesProps {
  onHandlePrivilegesSubmit(
    values: IPrivilegesStateValues & ISelectRoleValues
  ): void;
}

const PrivilegesForm = (
  props: IPrivilegesStateValues & IPrivilegesProps & ISelectRoleValues
) => (
  <Formik
    initialValues={{ ...props }}
    onSubmit={props.onHandlePrivilegesSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<IPrivilegesStateValues & ISelectRoleValues>
    ) => (
      <PrivilegesinnerForm
        {...fprops}
        values={{
          ...fprops.values,
          RoleId: props.RoleId,
          privilegesValues: props.privilegesValues,
          selectRoleValues: props.selectRoleValues,
          // tslint:disable-next-line:object-literal-sort-keys
          handleRoleClick: props.handleRoleClick
        }}
      />
    )}
  />
);

export default PrivilegesForm;
