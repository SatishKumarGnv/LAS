import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import * as React from "react";
import { IDeActivateRejectionProps } from "src/Container/RejectionReasonsState";

const DeActivateAllocationTypeInnerForm = (
  props: IDeActivateRejectionProps
) => (
  <div>
    <Card className="pop-up">
      <h3>Are you sure to de-activate the rejection reason</h3>
      <div className="popup-bottom-btn">
        <Button className="main-btn"
          color="secondary"
          //  tslint:disable-next-line:jsx-no-lambda
          onClick={() => props.onHandleDeActivateSave(props.AllocationId)}
        >
          Yes,I Agree
        </Button>
        <Button className="main-btn" color="primary" onClick={props.onHandleDeActivatePopUpClose}>
          No, I DisAgree
        </Button>
      </div>
    </Card>
  </div>
);

const DeActivateRejectionTypeForm = (props: IDeActivateRejectionProps) => (
  <DeActivateAllocationTypeInnerForm
    AllocationId={props.AllocationId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateRejectionTypeForm;
