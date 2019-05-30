import Button from "@material-ui/core/Button";

import * as React from "react";

import { IDeActivateAgreementProps } from "./AgreementTypeMaster";

const DeActivateAllocationTypeInnerForm = (
  props: IDeActivateAgreementProps
) => (
  <div>
    <img src="/images/file.png" />
    <h3>
      <p>
        Are you sure to de-activate <br />
        the agreement type
      </p>
    </h3>
    <div className="popup-bottom-btn">
      <Button
        className="agree-btn"
        color="secondary"
        //  tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.AgreementId)}
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        color="primary"
        onClick={props.onHandleDeActivatePopUpClose}
      >
        No, I DisAgree
      </Button>
    </div>
  </div>
);

const DeActivateAgreementTypeForm = (props: IDeActivateAgreementProps) => (
  <DeActivateAllocationTypeInnerForm
    AgreementId={props.AgreementId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);

export default DeActivateAgreementTypeForm;
