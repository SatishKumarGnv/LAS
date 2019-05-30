import Button from "@material-ui/core/Button";
import * as React from "react";
import { IDeActivatecategoryProps } from "./Category";

const DeActivateDocumentTypeInnerForm = (props: IDeActivatecategoryProps) => (
  <div className="pop-up">
    <h3>
      Are you sure to De-activate
      <br />
      the selected Category Ownership?
    </h3>
    <div className="popup-bottom-btn">
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button
        className="agree-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleDeActivateSaveCategory(props.CategoryOwnershipId)
        }
      >
        Yes,I Agree
      </Button>
      <Button
        className="dis-agree-btn"
        onClick={props.onHandleDeActivatePopUpCloseCategory}
      >
        No, I DisAgree
      </Button>
    </div>
  </div>
);

const DeActivateCategoryTypeForm = (props: IDeActivatecategoryProps) => (
  <DeActivateDocumentTypeInnerForm
    CategoryOwnershipId={props.CategoryOwnershipId}
    onHandleDeActivatePopUpCloseCategory={
      props.onHandleDeActivatePopUpCloseCategory
    }
    onHandleDeActivateSaveCategory={props.onHandleDeActivateSaveCategory}
  />
);
export default DeActivateCategoryTypeForm;
