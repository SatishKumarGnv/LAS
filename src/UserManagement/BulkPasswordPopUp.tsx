import Button from "@material-ui/core/Button/Button";
import * as React from "react";

export interface IBulkPasswordPopUpProps {
  selected: ReadonlyArray<string>;
  onHandleClose(): void;
  handleChangePassword(): void;
}

export const BulkPasswordPopUp = (props: IBulkPasswordPopUpProps) => (
  <div>
    {props.selected.length > 0 ? (
      <div>
        <h4>Reset password link has sent to Corresponding MailId </h4>
        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            color="primary"
            onClick={props.handleChangePassword}
          >
            Ok
          </Button>
        </div>
      </div>
    ) : (
      <div>
        <label>Please select any one of the user</label>
        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            color="primary"
            onClick={props.onHandleClose}
          >
            Ok
          </Button>
        </div>
      </div>
    )}
  </div>
);

export default BulkPasswordPopUp;
