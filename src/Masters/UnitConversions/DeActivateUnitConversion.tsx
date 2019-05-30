import Button from "@material-ui/core/Button";
import * as React from "react";

import { IDeActivateUnitProps } from "src/Masters/UnitConversions/UnitConversionTypeMaster";

const DeActivateUnitConversionTypeInnerForm = (props: IDeActivateUnitProps) => (
  <div className="pop-up">
    <h3>
      Are you sure to de-activate
      <br />
      the selected unit conversion
    </h3>
    <div className="popup-bottom-btn">
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.UnitConvertionId)}
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

const DeActivateUnitConversionTypeForm = (props: IDeActivateUnitProps) => (
  <DeActivateUnitConversionTypeInnerForm
    UnitConvertionId={props.UnitConvertionId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateUnitConversionTypeForm;
