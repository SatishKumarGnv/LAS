import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivatePropertyDepartmentProps } from "src/DefaultLayout/HomePage";

const ActivatePropertyDepartmentInnerForm = (
  props: IActivatePropertyDepartmentProps
) => (
  <div>
    <h3>You have successfully activated Property Department</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClick(props.PropertyDepartmentId)}
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

const ActivatePropertyDepartmentForm = (
  props: IActivatePropertyDepartmentProps
) => (
  <ActivatePropertyDepartmentInnerForm
    PropertyDepartmentId={props.PropertyDepartmentId}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivatePropertyDepartmentForm;
