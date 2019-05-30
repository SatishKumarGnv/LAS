import Button from "@material-ui/core/Button";
import * as React from "react";

import { IDeActivatelandAreaProps } from "src/Masters/LandAreaUnits/LandAreaUnits";

const DeActivateLandAreaTypeInnerForm = (props: IDeActivatelandAreaProps) => (
  <div className="pop-up">
    <h3>
      Are you sure to de-activate
      <br />
      the selected land area unit
    </h3>
    <div className="popup-bottom-btn">
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.UnitsId)}
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        onClick={props.onHandleDeActivatePopUpClose}
      >
        No,I DisAgree
      </Button>
    </div>
  </div>
);

const DeActivateLandAreaTypeForm = (props: IDeActivatelandAreaProps) => (
  <DeActivateLandAreaTypeInnerForm
    UnitsId={props.UnitsId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateLandAreaTypeForm;
