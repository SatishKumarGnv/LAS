import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDeActivateDocumentProps } from "./DocumentTypeMaster";

const DeActivateDocumentTypeInnerForm = (props: IDeActivateDocumentProps) => (
  <div className="pop-up">
    <img src="/images/document.svg" />
    <h3>
      <p>
        Are you sure to de-activate
        <br />
        the selected document
      </p>
    </h3>
    <div className="popup-bottom-btn">
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.DocumentId)}
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

const DeActivateDocumentTypeForm = (props: IDeActivateDocumentProps) => (
  <DeActivateDocumentTypeInnerForm
    DocumentId={props.DocumentId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateDocumentTypeForm;
