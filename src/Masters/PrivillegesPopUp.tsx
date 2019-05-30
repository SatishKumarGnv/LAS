import Button from "@material-ui/core/Button/Button";
import * as React from "react";

export const PrivillegesPopUp = (props: any) => (
  <div className="pop-up">
    <div className="popup-bottom-btn">
      {/* <label>Success</label> */}
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

export default PrivillegesPopUp;
