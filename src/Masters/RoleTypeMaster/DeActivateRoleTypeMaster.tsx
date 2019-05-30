import Button from "@material-ui/core/Button";
import * as React from "react";

import { IDeActivateRoleProps } from "./RoleTypeMaster";

const DeActivateRoleTypeInnerForm = (props: IDeActivateRoleProps) => (
  <div>
    <h3>
      Are you sure to de-activate
      <br />
      the selected role
    </h3>
    <div className="popup-bottom-btn">
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleDeActivateSave(props.RoleId)}
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

const DeActivateRoleTypeForm = (props: IDeActivateRoleProps) => (
  <DeActivateRoleTypeInnerForm
    RoleId={props.RoleId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateRoleTypeForm;
