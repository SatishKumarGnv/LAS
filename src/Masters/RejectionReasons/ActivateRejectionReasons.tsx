import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateRejectionProps } from "../../Container/RejectionReasonsState";

const ActivateAllocationTypeInnerForm = (props: IActivateRejectionProps) => (
  <div>
    <h3>You have successfully activated rejection reason</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClick(props.AllocationId)}
      >
        ok
      </Button>
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivatePopUpClose()}
      >
        Cancel
      </Button>
    </div>
  </div>
);

const ActivateRejectionTypeForm = (props: IActivateRejectionProps) => (
  <ActivateAllocationTypeInnerForm
    AllocationId={props.AllocationId}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivatePopUpClose={props.onHandleActivatePopUpClose}
  />
);

export default ActivateRejectionTypeForm;
