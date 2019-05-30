import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateProps } from "src/Container/LandAreaUnitsState";

const ActivateLandAreaUnitsTypeInnerForm = (props: IActivateProps) => (
  <div>
    <h3>You have successfully activated land area unit</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClick(props.UnitsId)}
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

const ActivateLandAreaUnitsTypeForm = (props: IActivateProps) => (
  <ActivateLandAreaUnitsTypeInnerForm
    UnitsId={props.UnitsId}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivateLandAreaUnitsTypeForm;
