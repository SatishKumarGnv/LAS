import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateNatureUsageProps } from "src/DefaultLayout/HomePage";

const ActivateNatureUsageInnerForm = (props: IActivateNatureUsageProps) => (
  <div>
    <h3>You have successfully activated Nature Usage </h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleNatureUsageActivateClick(props.NatureUsageId)
        }
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

const ActivateNatureUsageForm = (props: IActivateNatureUsageProps) => (
  <ActivateNatureUsageInnerForm
    NatureUsageId={props.NatureUsageId}
    onHandleNatureUsageActivateClick={props.onHandleNatureUsageActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivateNatureUsageForm;
