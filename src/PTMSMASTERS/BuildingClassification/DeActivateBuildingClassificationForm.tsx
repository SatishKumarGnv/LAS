import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDeActivateBuildingClassificationMasterProps } from "src/DefaultLayout/HomePage";

const DeActivateBuildingClassificationInnerForm = (
  props: IDeActivateBuildingClassificationMasterProps
) => (
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
          props.onHandleDeActivateSave(props.BuildingClassificationId)
        }
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

const DeActivateBuildingClassificationForm = (
  props: IDeActivateBuildingClassificationMasterProps
) => (
  <DeActivateBuildingClassificationInnerForm
    BuildingClassificationId={props.BuildingClassificationId}
    onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
    onHandleDeActivateSave={props.onHandleDeActivateSave}
  />
);
export default DeActivateBuildingClassificationForm;
