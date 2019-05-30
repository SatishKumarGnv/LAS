import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateProps } from "../../Container/MasterState";

const ActivateDocumentTypeInnerForm = (props: IActivateProps) => (
  <div>
    <h3>You have successfully activated document</h3>
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

const ActivateDocumentTypeForm = (props: IActivateProps) => (
  <ActivateDocumentTypeInnerForm
    id={props.id}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivateDocumentTypeForm;
