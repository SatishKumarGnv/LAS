import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDeActivateNatureUsageProps } from "src/DefaultLayout/HomePage";

const DeActivateNatureUsageInnerForm = (props: IDeActivateNatureUsageProps) => (
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
        onClick={() =>
          props.onHandleNatureUsageDeActivateClick(props.NatureUsageId)
        }
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivePopUpClose()}
      >
        No, I DisAgree
      </Button>
    </div>
  </div>
);

const DeActivateNatureUsageForm = (props: IDeActivateNatureUsageProps) => (
  <DeActivateNatureUsageInnerForm
    NatureUsageId={props.NatureUsageId}
    onHandleDeActivePopUpClose={props.onHandleDeActivePopUpClose}
    onHandleNatureUsageDeActivateClick={
      props.onHandleNatureUsageDeActivateClick
    }
  />
);
export default DeActivateNatureUsageForm;
