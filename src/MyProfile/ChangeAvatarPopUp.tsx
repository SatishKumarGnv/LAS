import Button from "@material-ui/core/Button/Button";
import * as React from "react";
import { IChangeAvatarValues } from "../DefaultLayout/HomePage";

export const UploadImagePopUp = (props: IChangeAvatarValues) => (
  <div className="pop-up">
    {props.Photo === "" ? (
      <div>
        <label>Please select image</label>
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
    ) : (
      <div>
        <label>You have updated profile image successfully</label>
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

export default UploadImagePopUp;
