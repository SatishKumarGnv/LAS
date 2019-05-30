import Button from "@material-ui/core/Button";

import * as React from "react";
import { IDeActivateAllocationProps } from "./AllocationTypeMasterTable";

const DeActivateAllocationTypeInnerForm = (
  props: IDeActivateAllocationProps
) => (
  <div>
    <h3>
      Are you sure to de-activate
      <br />
      the selected allocation type
    </h3>
    <div className="popup-bottom-btn ">
      <Button
        className="agree-btn"
        color="secondary"
        //  tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.AllocationSubTypeId)}
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        color="primary"
        onClick={props.onHandleDeActivatePopUpClose}
      >
        No, I disAgree
      </Button>
    </div>
  </div>
);

const DeActivateAllocationTypeForm = (props: IDeActivateAllocationProps) => (
  <DeActivateAllocationTypeInnerForm
    AllocationSubTypeId={props.AllocationSubTypeId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateAllocationTypeForm;
