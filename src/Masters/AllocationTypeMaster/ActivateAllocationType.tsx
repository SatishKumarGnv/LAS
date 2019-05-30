import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateAllocationProps } from "../../Container/AllocationTypeMasterState";

const ActivateAllocationTypeInnerForm = (props: IActivateAllocationProps) => (
  <div>
    <h3>You have successfully activated allocation type</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClick(props.AllocationSubTypeId)}
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

const ActivateAllocationTypeForm = (props: IActivateAllocationProps) => (
  <ActivateAllocationTypeInnerForm
    AllocationSubTypeId={props.AllocationSubTypeId}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivatePopUpClose={props.onHandleActivatePopUpClose}
  />
);

export default ActivateAllocationTypeForm;
