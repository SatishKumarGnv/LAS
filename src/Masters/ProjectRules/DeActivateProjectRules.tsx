import Button from "@material-ui/core/Button";
import * as React from "react";

import { IDeActivateProjectProps } from "src/Masters/ProjectRules/ProjectRules";

const DeActivateProjectRuleTypeInnerForm = (props: IDeActivateProjectProps) => (
  <div>
    <h3>
      Are you sure to de-activate
      <br />
      the selected rule
    </h3>
    <div className="popup-bottom-btn">
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.id)}
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

const DeActivateProjectTypeForm = (props: IDeActivateProjectProps) => (
  <DeActivateProjectRuleTypeInnerForm
    id={props.id}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateProjectTypeForm;
