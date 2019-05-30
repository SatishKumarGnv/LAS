import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDeActivatePropertyDepartmentProps } from "src/DefaultLayout/HomePage";

const DeActivatePropertyDepartmentInnerForm = (
  props: IDeActivatePropertyDepartmentProps
) => (
  <div className="pop-up">
    <h3>
      Are you sure to de-activate
      <br />
      the selected document
    </h3>
    <div className="popup-bottom-btn">
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.PropertyDepartmentId)}
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        onClick={props.onHandleDeActivatePopUpClose}
      >
        No, I DisAgree
      </Button>
    </div>
  </div>
);

const DeActivatePropertyDepartmentForm = (
  props: IDeActivatePropertyDepartmentProps
) => (
  <DeActivatePropertyDepartmentInnerForm
    PropertyDepartmentId={props.PropertyDepartmentId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivatePropertyDepartmentForm;
