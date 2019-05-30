import { DialogTitle } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
import * as React from "react";

import {
  IEditActivityProps,
  IEditActivityValues
} from "../Container/WorkFlowMappingState";

export const EditDurationPopUpInnerForm = (
  props: IEditActivityProps & IEditActivityValues
) => (
  <form autoComplete="off">
    <div>
      <div className="popup-title">
        <DialogTitle id="simple-dialog-title">Edit Duration Days</DialogTitle>
      </div>
      <div className="child-card">
        <h4> Allocate To</h4>
        <TextField
         
          id="AllocationName"
          value={props.AllocationName}
          // tslint:disable-next-line:jsx-no-lambda
          // onChange={handleChange}
          margin="normal"
        />
      </div>
    </div>
    <div className="child-card">
      <h4>Allocation Type</h4>
      <TextField
       
        id="AllocationSubTypeName"
        value={props.AllocationSubTypeName}
        // tslint:disable-next-line:jsx-no-lambda
        // onChange={handleChange}
        margin="normal"
      />
    </div>
    <div className="child-card">
      <h4> Agreement Type</h4>
      <TextField
       
        id="AgreementName"
        value={props.AgreementName}
        // tslint:disable-next-line:jsx-no-lambda
        // onChange={handleChange}
        margin="normal"
      />
    </div>
    <div className="child-card">
      <h4> Duration Days</h4>
      <TextField
       
        id="newSlaDays"
        value={props.newSlaDays}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={event => props.handleEditDurationChange(event)}
        margin="normal"
      />
      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          color="secondary"
          onClick={props.handleEditClose}
        >
          Close
        </Button>
        <Button
          className="main-btn"
          color="primary"
          type="button"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            props.onHandleEditSave(
              props.AllocationId,
              props.AllocationSubTypeId,
              props.AgreementId,
              parseInt(props.newSlaDays, 10),
              props.ActivityId
            )
          }
        >
          Submit
        </Button>
      </div>
    </div>
  </form>
);

const EditDurationPopUpForm = (
  props: IEditActivityProps & IEditActivityValues
) => (
  <EditDurationPopUpInnerForm
    ActivityId={props.ActivityId}
    AllocationId={props.AllocationId}
    AllocationSubTypeId={props.AllocationSubTypeId}
    AgreementId={props.AgreementId}
    handleEditDurationChange={props.handleEditDurationChange}
    AllocationName={props.AllocationName}
    AllocationSubTypeName={props.AllocationSubTypeName}
    AgreementName={props.AgreementName}
    newSlaDays={props.newSlaDays}
    editDialogOpen={props.editDialogOpen}
    onHandleEditSave={props.onHandleEditSave}
    handleDurationPopClick={props.handleDurationPopClick}
    handleEditClose={props.handleEditClose}
  />
);

export default EditDurationPopUpForm;
