import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateProps } from "../Container/MasterState";

const ActivateWorkFlowActivityInnerForm = (props: IActivateProps) => (
  <div>
    <h2>Activate the selected document name</h2>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClick(props.id)}
      >
        ok
      </Button>
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivePopUpClose()}
      >
        Cancel
      </Button>
    </div>
  </div>
);

const ActivateWorkFlowActivityForm = (props: IActivateProps) => (
  <ActivateWorkFlowActivityInnerForm
    id={props.id}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivateWorkFlowActivityForm;
