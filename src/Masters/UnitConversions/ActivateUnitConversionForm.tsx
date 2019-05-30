import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateProps } from "src/Container/UnitConversionState";

const ActivateUnitConversionTypeInnerForm = (props: IActivateProps) => (
  <div>
    <h3>You have successfully activated unit conversion</h3>
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

const ActivateUnitConversionTypeForm = (props: IActivateProps) => (
  <ActivateUnitConversionTypeInnerForm
    id={props.id}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivateUnitConversionTypeForm;
