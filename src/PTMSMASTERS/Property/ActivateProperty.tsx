import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateProProps } from "src/DefaultLayout/HomePage";

const ActivateAllocationTypeInnerForm = (props: IActivateProProps) => (
  <div>
    <h3>You have successfully activated Property Type</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClickPro(props.PropertyTypeId)}
      >
        ok
      </Button>
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivatePopUpClosePro()}
      >
        Cancel
      </Button>
    </div>
  </div>
);

const ActivatePropertyTypeForm = (props: IActivateProProps) => (
  <ActivateAllocationTypeInnerForm
    PropertyTypeId={props.PropertyTypeId}
    onHandleActivateClickPro={props.onHandleActivateClickPro}
    onHandleActivatePopUpClosePro={props.onHandleActivatePopUpClosePro}
  />
);

export default ActivatePropertyTypeForm;
