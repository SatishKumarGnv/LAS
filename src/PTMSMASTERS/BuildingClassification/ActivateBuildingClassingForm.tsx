import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateBuildingClassificationMasterProps } from "src/DefaultLayout/HomePage";

const ActivateBuildingClassificationInnerForm = (
  props: IActivateBuildingClassificationMasterProps
) => (
  <div>
    <h3>You have successfully activated Building Classification</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleActivateClick(props.BuildingClassificationId)
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

const ActivateBuildingClassificationForm = (
  props: IActivateBuildingClassificationMasterProps
) => (
  <ActivateBuildingClassificationInnerForm
    BuildingClassificationId={props.BuildingClassificationId}
    onHandleActivateClick={props.onHandleActivateClick}
    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
  />
);

export default ActivateBuildingClassificationForm;
