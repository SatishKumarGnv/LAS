import Button from "@material-ui/core/Button";
import * as React from "react";
import { IActivateCategoryProps } from "src/DefaultLayout/HomePage";

const ActivateDocumentTypeInnerForm = (props: IActivateCategoryProps) => (
  <div>
    <h3>You have successfully activated Category Ownership</h3>
    <div className="popup-bottom-btn">
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleActivateClickCategory(props.CategoryOwnershipId)
        }
      >
        ok
      </Button>
      <Button
        className="main-btn"
        color="primary"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActivatePopUpCloseCategory()}
      >
        Cancel
      </Button>
    </div>
  </div>
);

const ActivateCategoryTypeForm = (props: IActivateCategoryProps) => (
  <ActivateDocumentTypeInnerForm
    CategoryOwnershipId={props.CategoryOwnershipId}
    onHandleActivateClickCategory={props.onHandleActivateClickCategory}
    onHandleActivatePopUpCloseCategory={
      props.onHandleActivatePopUpCloseCategory
    }
  />
);

export default ActivateCategoryTypeForm;
