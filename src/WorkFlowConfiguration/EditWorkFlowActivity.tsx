import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import { IEditActivityValues } from "../Container/WorkFlowActivityState";
import { IEditActivityProps } from "./WorkFlowActivityTable";

export const EditWorkFlowActivityInnerForm = (
  props: IEditActivityProps & IEditActivityValues
) => (
  <form autoComplete="off">
    <div>
      <Card>
        <CardContent>
          <Typography
            gutterBottom={true}
            variant="headline"
            component="h4"
            className="grap-heading"
          >
            <img src="/images/table-icon.png" />
            Edit Document Type
          </Typography>
        </CardContent>
        <TextField
          id="workFlowActivityName"
          label="Document Type Name"
          value={props.workFlowActivityName}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            props.onHandleEditNameChange(event);
          }}
          margin="normal"
        />
        <Button color="secondary" onClick={props.onHandleEditPopUpClose}>
          Cancel
        </Button>
        <Button
          color="primary"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            props.onHandleEditSave(props.id, props.workFlowActivityName)
          }
        >
          Save
        </Button>
      </Card>
    </div>
  </form>
);

const EditWorkFlowActivityForm = (
  props: IEditActivityProps & IEditActivityValues
) => (
  <EditWorkFlowActivityInnerForm
    id={props.id}
    workFlowActivityName={props.workFlowActivityName}
    documentValues={props.documentValues}
    onHandleEditSave={props.onHandleEditSave}
    onHandleEditActionClick={props.onHandleEditActionClick}
    onHandleEditPopUpClose={props.onHandleEditPopUpClose}
    onHandleEditNameChange={props.onHandleEditNameChange}
  />
);

export default EditWorkFlowActivityForm;
