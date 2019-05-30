import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDeActivateActivityProps } from "./WorkFlowActivityTable";

const DeActivateWorkFlowActivityInnerForm = (
  props: IDeActivateActivityProps
) => (
  <div className="pop-up">
    {" "}
    <h3>Are you sure to de-activate the selected document</h3>
    <div className="popup-grid">
      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => props.onHandleDeActivateSave(props.id)}
        >
          Yes,Delete
        </Button>
        <Button
          className="main-btn"
          onClick={props.onHandleDeActivatePopUpClose}
        >
          No
        </Button>
      </div>
    </div>
  </div>
);

const DeActivateWorkFlowActivityForm = (props: IDeActivateActivityProps) => (
  <DeActivateWorkFlowActivityInnerForm
    id={props.id}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateWorkFlowActivityForm;
