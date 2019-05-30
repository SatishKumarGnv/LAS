import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDeActivateAminityProps } from "./Aminities";

const DeActivateDocumentTypeInnerForm = (props: IDeActivateAminityProps) => (
  <div className="pop-up">
    <h3>
      Are you sure to De-activate
      <br />
      the selected Amenities?
    </h3>
    <div className="popup-bottom-btn">
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSaveAminity(props.AmenitiesId)}
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        onClick={props.onHandleDeActivatePopUpCloseAminity}
      >
        No, I DisAgree
      </Button>
    </div>
  </div>
);

const DeActivateAminityTypeForm = (props: IDeActivateAminityProps) => (
  <DeActivateDocumentTypeInnerForm
    AmenitiesId={props.AmenitiesId}
    onHandleDeActivatePopUpCloseAminity={
      props.onHandleDeActivatePopUpCloseAminity
    }
    onHandleDeActivateSaveAminity={props.onHandleDeActivateSaveAminity}
  />
);
export default DeActivateAminityTypeForm;
