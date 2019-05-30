import Button from "@material-ui/core/Button/Button";
import * as React from "react";
import {
  IPersonalInfo,
  IPersonalInfoValueProps,
  IPersonalInfoValues
} from "../DefaultLayout/HomePage";

export const PersonalInfoPopUp = (
  props: IPersonalInfoValues & IPersonalInfoValueProps & IPersonalInfo
) => (
  <div className="pop-up">
    <h2>Profile details updated successfully</h2>
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
);

export default PersonalInfoPopUp;
