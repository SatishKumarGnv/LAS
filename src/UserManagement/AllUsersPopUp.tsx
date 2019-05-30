import Button from "@material-ui/core/Button/Button";
import * as React from "react";
import { IAllUserPopUpProps } from "src/Container/AllUsersState";

// change here
export const AllUserPopUp = (props: IAllUserPopUpProps) => (
  <div>
    {props.selected.length === props.dropDownArraySave.length &&
    props.selected.length > 0 ? (
      <div id="simple-dialog-title">
        <h4>Actions Assigned Successfully</h4>
        <Button
          className="main-btn"
          color="primary"
          onClick={props.handleUpdateStatus}
        >
          Ok
        </Button>
      </div>
    ) : (
      <div id="simple-dialog-title">
        <h4>Please Select User And Action</h4>
        <Button
          className="main-btn"
          color="primary"
          onClick={props.onHandleClose}
        >
          Ok
        </Button>
      </div>
    )}
  </div>
);

export default AllUserPopUp;
