import Button from "@material-ui/core/Button";

import * as React from "react";
import { IDeActivateProProps } from "./PropertyType";

const DeActivateAllocationTypeInnerForm = (props: IDeActivateProProps) => (
  <div>
    <h3>
      Are you sure to de-activate
      <br />
      the selected property type
    </h3>
    <div className="popup-bottom-btn ">
      <Button
        className="agree-btn"
        color="secondary"
        //  tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSavePro(props.PropertyTypeId)}
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        color="primary"
        onClick={props.onHandleDeActivatePopUpClosePro}
      >
        No, I disAgree
      </Button>
    </div>
  </div>
);

const DeActivatePropertyTypeForm = (props: IDeActivateProProps) => (
  <DeActivateAllocationTypeInnerForm
    PropertyTypeId={props.PropertyTypeId}
    onHandleDeActivatePopUpClosePro={props.onHandleDeActivatePopUpClosePro}
    onHandleDeActivateSavePro={props.onHandleDeActivateSavePro}
  />
);
export default DeActivatePropertyTypeForm;
