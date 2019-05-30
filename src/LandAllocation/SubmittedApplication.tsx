import * as React from "react";

import Button from "@material-ui/core/Button";
// import Collapse from "@material-ui/core/Collapse";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Workbook from "react-excel-workbook";

import {
  IApplicationStateProps,
  IApplicationStateValues,
  ISubmitApplicationPopUpValues
} from "../Container/SubmittedApplicationState";

import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { IMileStoneValues } from "src/DefaultLayout/HomePage";
import Pager from "../Masters/Pager";
import SubmitExpandRow from "./SubmitExpandRow";
import SubmitApplicationPopUp from "./SubmittedApplicationPopUp";

export interface IApplicationProps {
  readonly applicationValues: IApplicationStateValues;
  readonly open: boolean;
  readonly dialogOpen: boolean;
  readonly dialogExpandOpen: boolean;
  readonly expandApplicationId: string;
  readonly popUpid: string;
  readonly AllocateTo: string;
  readonly applicationPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  // onHandleExpandPopUp(evt: any): void;
  onHandleClick(event: any): void;
  onHandleActionClick(event: any, value: string): void;
  onHandleClose(): void;
}

export interface IApplicationListTableProps {
  readonly applicationList: ReadonlyArray<IApplicationStateValues>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  readonly open: boolean;
  readonly dialogOpen: boolean;
  readonly dialogExpandOpen: boolean;
  readonly expandApplicationId: string;
  readonly popUpid: string;
  readonly AllocateTo: string;
  readonly MileStoneArray: ReadonlyArray<IMileStoneValues>;

  readonly applicationPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  // onHandleExpandPopUp(evt: any): void;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleClick(event: any): void;
  onHandleActionClick(event: string, value: string): void;
  onHandleClose(): void;
}

const SubmitApplicaitonInnerForm = (props: IApplicationProps) => (
  <TableRow>
    <TableCell
      className="table-btn-grid"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.onHandleClick(props.applicationValues.ApplicationId)}
    >
      {props.open &&
      props.applicationValues.ApplicationId === props.expandApplicationId ? (
        <Button
          className="table-add-btn"
          id={props.applicationValues.ApplicationId}
          // onClick={props.onHandleExpandPopUp}
        >
          -
        </Button>
      ) : (
        <Button
          className="table-add-btn"
          id={props.applicationValues.ApplicationId}
        >
          +
        </Button>
      )}
      {props.applicationValues.ApplicationId}
    </TableCell>
    <TableCell>{props.applicationValues.OrganiztionName}</TableCell>
    <TableCell>{props.applicationValues.RegistrationNumber}</TableCell>
    <TableCell>{props.applicationValues.AllocateTo}</TableCell>
    <TableCell>{props.applicationValues.Status}</TableCell>
    <TableCell>
      <Button
        className="eye-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleActionClick(
            props.applicationValues.ApplicationId,
            props.applicationValues.AllocateTo
          )
        }
      >
        <img src="/images/eye.png" />
      </Button>
    </TableCell>
  </TableRow>
);

export const ApplicationListTable = (props: IApplicationListTableProps) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="SubmittedApplications.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.applicationList} name="Sheet A">
            <Workbook.Column label="Application Number" value="ApplicationId" />
            <Workbook.Column
              label="Oraganization Name"
              value="OrganiztionName"
            />
            <Workbook.Column
              label="Registration Number"
              value="RegistrationNumber"
            />
            <Workbook.Column label="Land Allocation Name" value="AllocateTo" />
            <Workbook.Column label="Current Status" value="Status" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Application Number</TableCell>

              <TableCell>Oraganization Name</TableCell>
              <TableCell>Registration Number</TableCell>
              <TableCell>Land Allocation To</TableCell>
              <TableCell>Current Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {
            <Dialog
              className="pop-up"
              open={props.dialogOpen}
              onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              <DialogTitle id="simple-dialog-title">
                Application Details
              </DialogTitle>
              <div id="simple-dialog-title pop-up">
                <SubmitApplicationPopUp
                  MileStoneArray={props.MileStoneArray}
                  applicationPopUpList={props.applicationPopUpList}
                  popUpid={props.popUpid}
                  AllocateTo={props.AllocateTo}
                  onHandleClose={props.onHandleClose}
                />
              </div>
            </Dialog>
          }
          {
            <Dialog
              open={props.dialogExpandOpen}
              onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              <div className="popup-title">
                <DialogTitle id="simple-dialog-title">
                  Application Details
                </DialogTitle>
              </div>
              <div id="simple-dialog-title">
                <SubmitExpandRow
                  applicationList={props.applicationList}
                  expandApplicationId={props.expandApplicationId}
                  open={props.open}
                />
              </div>
            </Dialog>
          }

          <TableBody>
            {props.applicationList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.applicationList
                .filter(x => {
                  return props.searchInput !== ""
                    ? x.ApplicationId.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                        x.OrganiztionName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        x.AllocateTo.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        x.Status.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        registrationNumer(
                          props.searchInput,
                          x.RegistrationNumber
                        )
                    : true;
                })
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
                .map(value => (
                  <SubmitApplicaitonInnerForm
                    expandApplicationId={props.expandApplicationId}
                    popUpid={props.popUpid}
                    AllocateTo={props.AllocateTo}
                    applicationPopUpList={props.applicationPopUpList}
                    key={value.ApplicationId}
                    applicationValues={value}
                    open={props.open}
                    dialogOpen={props.dialogOpen}
                    dialogExpandOpen={props.dialogExpandOpen}
                    // onHandleExpandPopUp={props.onHandleExpandPopUp}
                    onHandleClick={props.onHandleClick}
                    onHandleActionClick={props.onHandleActionClick}
                    onHandleClose={props.onHandleClose}
                  />
                ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
const registrationNumer = (
  searchInput: string,
  registrationNumber?: string
) => {
  if (registrationNumber) {
    return registrationNumber.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};

const ApplicationSubmitForm = (props: IApplicationStateProps) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleSearch}
      margin="normal"
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    <ApplicationListTable
      MileStoneArray={props.MileStoneArray}
      applicationList={props.applicationList}
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      searchInput={props.searchInput}
      open={props.open}
      dialogOpen={props.dialogOpen}
      dialogExpandOpen={props.dialogExpandOpen}
      // onHandleExpandPopUp={props.onHandleExpandPopUp}
      expandApplicationId={props.expandApplicationId}
      popUpid={props.popUpid}
      AllocateTo={props.AllocateTo}
      applicationPopUpList={props.applicationPopUpList}
      onHandleClick={props.onHandleClick}
      onHandleActionClick={props.onHandleActionClick}
      onHandleClose={props.onHandleClose}
    />
    <Pager
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />
  </div>
);
export default ApplicationSubmitForm;
