import Button from "@material-ui/core/Button/Button";
import * as React from "react";
import { IChangeUserRolePopUpProps } from "src/Container/ChangeUserRoleState";

export const ChangeUserRolePopUp = (props: IChangeUserRolePopUpProps) => (
  <div className="popup-bottom-btn">
    {props.selected.length === props.dropDownArraySave.length &&
    props.selected.length > 0 ? (
      <div>
        <Button
          className="save-btn"
          color="primary"
          onClick={props.handleUpdateRoles}
        >
          Ok
        </Button>
      </div>
    ) : (
      <div>
        <label>Please Select UserName And Role</label>
        <Button
          className="reset-btn"
          color="primary"
          onClick={props.onHandleClose}
        >
          Ok
        </Button>
      </div>
    )}
  </div>
);

export default ChangeUserRolePopUp;
