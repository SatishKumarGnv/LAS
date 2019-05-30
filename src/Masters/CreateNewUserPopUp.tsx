import Button from "@material-ui/core/Button/Button";
import * as React from "react";
import { IPoPUpValues } from "src/Container/CreateNewUserState";

const CreateNewUserPopUp = (props: IPoPUpValues) => (
  <div className="pop-up">
    <Button className="save-btn" color="primary" onClick={props.onHandleClose}>
      {/* <img src="/images/checked.png" /> */}
      Ok
    </Button>
  </div>
);

export default CreateNewUserPopUp;
