import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateProps } from "../../Container/ProjectRulesState";

const ActivateProjectRuleTypeInnerForm = (props: IActivateProps) => (
  <div>
    <h3>You have successfully activated rule</h3>
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

const ActivateprojectRulesTypeForm = (props: IActivateProps) => (
  <ActivateProjectRuleTypeInnerForm
    id={props.id}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivateprojectRulesTypeForm;
