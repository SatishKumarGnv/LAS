import Button from "@material-ui/core/Button";
import * as React from "react";

import { IActivateAgreementProps } from "../../Container/AgreementTypeMasterState";

const ActivateAgreementTypeInnerForm = (props: IActivateAgreementProps) => (
  <div>
    <h3>You have successfully activated agreement type</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClick(props.AgreementId)}
      >
        ok
      </Button>
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivatePopUpClose()}
      >
        Cancel
      </Button>
    </div>
  </div>
);

const ActivateAgreementTypeForm = (props: IActivateAgreementProps) => (
  <ActivateAgreementTypeInnerForm
    AgreementId={props.AgreementId}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivatePopUpClose={props.onHandleActivatePopUpClose}
  />
);

export default ActivateAgreementTypeForm;
