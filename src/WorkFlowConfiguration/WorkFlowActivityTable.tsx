import * as React from "react";

// import { ITablePaginationProps } from './StateMaintain';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";

import TableRow from "@material-ui/core/TableRow";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";

import Pager, { IPagerProps } from "../Masters/Pager";

import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  IActivityValues,
  IEditActivityValues,
  IWorkFlowActivityStateProps
} from "../Container/WorkFlowActivityState";
import ActivateWorkFlowActivityForm from "./ActivateWorkFlowActivity";
import DeActivateWorkFlowActivityForm from "./DeActivateWorkFlowActivity";
import EditWorkFlowActivityForm from "./EditWorkFlowActivity";

export interface IActivityProps {
  readonly documentValues: IActivityValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  // readonly expandApplicationId: string;
  readonly open: boolean;
  readonly open2: boolean;

  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(documentValues: any): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(documentValues: any): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(event: any, name: string): void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUp(): void;
  onHandleActivePopUpClose(): void;
}

export interface IEditActivityProps {
  readonly documentValues: IActivityValues;
  onHandleEditSave(event: any, name: string): void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IDeActivateActivityProps {
  readonly id: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const WorkFlowActivityItems = (
  props: IActivityProps &
    IEditActivityValues &
    IDeActivateActivityProps &
    IActivityProps
) => (
  <TableRow>
    <TableCell>{props.documentValues.WorkFlowActivityName}</TableCell>
    <TableCell>
      {props.documentValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      <Button
        className="eye-btn"
        aria-owns={
          props.documentValues.IsActive.toString() === "true"
            ? "simple-popper"
            : "Activate-Popper"
        }
        aria-haspopup="true"
        variant="contained"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActionClick(props.documentValues)}
      >
        <img src="/images/eye.png" />
      </Button>
    </TableCell>
  </TableRow>
);

const WorkFlowActivityList = (
  props: IWorkFlowActivityStateProps &
    IPagerProps &
    IEditActivityValues &
    IDeActivateActivityProps &
    IActivityProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="WorkFlowActivity.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" />
            Export
          </button>
        }
      >
        <Workbook.Sheet data={props.WorkFlowActivityList} name="Sheet A">
          <Workbook.Column
            label="Work Flow Activity"
            value="WorkFlowActivityName"
          />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Work Flow Activity</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.WorkFlowActivityList.length !== 0 ? (
            props.WorkFlowActivityList.filter(x =>
              props.searchInput !== ""
                ? workflowNameIncludes(
                    props.searchInput,
                    x.WorkFlowActivityName
                  ) ||
                  x.IsActive.toString().includes(
                    getActivestate(props.searchInput)
                  )
                : true
            )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <WorkFlowActivityItems
                  onHandleClose2={props.onHandleClose2}
                  activatePopUpOpen={props.activatePopUpOpen}
                  onHandleActivatePopUp={props.onHandleActivatePopUp}
                  onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                  key={id}
                  documentValues={value}
                  id={props.id}
                  workFlowActivityName={props.workFlowActivityName}
                  onHandleEditNameChange={props.onHandleEditNameChange}
                  onHandleEditSave={props.onHandleEditSave}
                  open={props.open}
                  open2={props.open2}
                  editPopUpOpen={props.editPopUpOpen}
                  deActivatePopUpOpen={props.deActivatePopUpOpen}
                  onHandleDeActivateSave={props.onHandleDeActivateSave}
                  onHandleDeActivatePopUpClose={
                    props.onHandleDeActivatePopUpClose
                  }
                  onHandleDeActivatePopUpOpen={
                    props.onHandleDeActivatePopUpOpen
                  }
                  onHandleActionClick={props.onHandleActionClick}
                  onHandleEditActionClick={props.onHandleEditActionClick}
                  onHandleEditPopUpClose={props.onHandleEditPopUpClose}
                  onHandleClose={props.onHandleClose}
                  onHandleActivateClick={props.onHandleActivateClick}
                />
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);
const getActivestate = (state: string) => {
  switch (state) {
    case "Active":
      return "true";
    case "InActive":
      return "false";
    default:
      return state;
  }
};
const workflowNameIncludes = (searchInput: string, workflowName?: string) => {
  if (workflowName) {
    return workflowName.includes(searchInput);
  } else {
    return false;
  }
};
const WorkFlowActivityTable = (
  props: IWorkFlowActivityStateProps &
    IPagerProps &
    IEditActivityValues &
    IDeActivateActivityProps &
    IActivityProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="searchInput"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      margin="normal"
      onChange={props.onHandleSearch}
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    <WorkFlowActivityList
      onHandleClose2={props.onHandleClose2}
      activatePopUpOpen={props.activatePopUpOpen}
      onHandleActivatePopUp={props.onHandleActivatePopUp}
      onHandleActivePopUpClose={props.onHandleActivePopUpClose}
      onHandleActivateClick={props.onHandleActivateClick}
      onHandleAddSave={props.onHandleAddSave}
      addPopUpOpen={props.addPopUpOpen}
      onHandleAddPopUp={props.onHandleAddPopUp}
      onHandleAddPopUpClose={props.onHandleAddPopUpClose}
      open={props.open}
      open2={props.open2}
      id={props.id}
      workFlowActivityName={props.workFlowActivityName}
      onHandleEditNameChange={props.onHandleEditNameChange}
      onHandleEditSave={props.onHandleEditSave}
      deActivatePopUpOpen={props.deActivatePopUpOpen}
      onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
      onHandleDeActivatePopUpOpen={props.onHandleDeActivatePopUpOpen}
      onHandleDeActivateSave={props.onHandleDeActivateSave}
      editPopUpOpen={props.editPopUpOpen}
      onHandleEditActionClick={props.onHandleEditActionClick}
      onHandleEditPopUpClose={props.onHandleEditPopUpClose}
      WorkFlowActivityList={props.WorkFlowActivityList}
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandleActionClick={props.onHandleActionClick}
      onHandleClose={props.onHandleClose}
      onHandleSearch={props.onHandleSearch}
      searchInput={props.searchInput}
      documentValues={props.documentValues}
    />
    <Pager
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />

    {
      <Dialog
        open={props.open}
        // onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <div className="popup-title">
            <Button
              className="main-btn"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleEditActionClick(props.documentValues)
              }
            >
              Edit
            </Button>
            <Button
              className="main-btn"
              onClick={props.onHandleDeActivatePopUpOpen}
            >
              DeActivate
            </Button>
            <Button className="main-btn" onClick={props.onHandleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.open2}
        // onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <div className="popup-title">
            <Button
              className="main-btn"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => props.onHandleActivatePopUp()}
            >
              Activate
            </Button>
            <Button className="main-btn" onClick={props.onHandleClose2}>
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.editPopUpOpen}
        // onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <EditWorkFlowActivityForm
            id={props.documentValues.WorkFlowActivityId}
            workFlowActivityName={props.workFlowActivityName}
            documentValues={props.documentValues}
            onHandleEditActionClick={props.onHandleEditActionClick}
            onHandleEditSave={props.onHandleEditSave}
            onHandleEditPopUpClose={props.onHandleEditPopUpClose}
            onHandleEditNameChange={props.onHandleEditNameChange}
          />
        </div>
      </Dialog>
    }

    {
      <Dialog
        open={props.deActivatePopUpOpen}
        // onClose={props.onHandleDeActivatePopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <DeActivateWorkFlowActivityForm
            id={props.documentValues.WorkFlowActivityId}
            onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
            onHandleDeActivateSave={props.onHandleDeActivateSave}
          />
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.activatePopUpOpen}
        onClose={props.onHandleActivePopUpClose}
        aria-labelledby="Active-dialog-title"
      >
        <div id="Active-dialog-title">
          <ActivateWorkFlowActivityForm
            id={props.documentValues.WorkFlowActivityId}
            onHandleActivateClick={props.onHandleActivateClick}
            onHandleActivePopUpClose={props.onHandleActivePopUpClose}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default WorkFlowActivityTable;
