import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateAminitiesProps } from "src/DefaultLayout/HomePage";

const ActivateDocumentTypeInnerForm = (props: IActivateAminitiesProps) => (
  <div>
    <h3>You have successfully activated Amenities</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivateClickAminity(props.id)}
      >
        ok
      </Button>
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivePopUpCloseAminity()}
      >
        Cancel
      </Button>
    </div>
  </div>
);

const ActivateAminityTypeForm = (props: IActivateAminitiesProps) => (
  <ActivateDocumentTypeInnerForm
    id={props.id}
    onHandleActivateClickAminity={props.onHandleActivateClickAminity}
    onHandleActivePopUpCloseAminity={props.onHandleActivePopUpCloseAminity}
  />
);

export default ActivateAminityTypeForm;
