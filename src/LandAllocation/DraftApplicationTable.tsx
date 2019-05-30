import * as React from "react";

import Button from "@material-ui/core/Button";
// import Collapse from "@material-ui/core/Collapse";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Workbook from "react-excel-workbook";

import { Dialog, DialogTitle, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { IApplicationStateValues } from "../Container/SubmittedApplicationState";
import {
  IDraftApplicationStateProps,
  IDraftValueProps
} from "../DefaultLayout/HomePage";
import Pager from "../Masters/Pager";
import { DraftExpandRow } from "./DraftExpand";

export interface IDraftApplicationProps {
  readonly draftApplicationValues: IApplicationStateValues;
  // readonly open: boolean;
  readonly expandApplicationId: string;
  readonly AllocateTo: string;
  readonly dialogExpandOpen: boolean;

  onHandleClick(event: any): void;
  onHandleDeleteClickPopUp(event: any): void;

  onHandleActionClick(values: IApplicationStateValues): void;
  onHandleClose(): void;
  onhandleExpandClose(): void;
}

export interface IDraftApplicationListTableProps {
  readonly draftApplicationList: ReadonlyArray<IApplicationStateValues>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  // readonly open: boolean;
  readonly expandApplicationId: string;
  readonly AllocateTo: string;
  readonly dialogExpandOpen: boolean;

  onHandleDeleteClickPopUp(event: any): void;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleClick(event: any): void;
  onHandleActionClick(values: IApplicationStateValues): void;
  onHandleClose(): void;
  onhandleExpandClose(): void;
}

const DraftApplicaitonInnerForm = (props: IDraftApplicationProps) => (
  <TableRow>
    <TableCell
      className="table-btn-grid-two"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.onHandleClick(props.draftApplicationValues)}
    >
      {props.dialogExpandOpen &&
      props.draftApplicationValues.ApplicationId ===
        props.expandApplicationId ? (
        <Button
          className="table-add-btn"
          id={props.draftApplicationValues.ApplicationId}
        >
          -
        </Button>
      ) : (
        <Button
          className="table-add-btn"
          id={props.draftApplicationValues.ApplicationId}
        >
          +
        </Button>
      )}
      {props.draftApplicationValues.ApplicationId}
    </TableCell>

    <TableCell>{props.draftApplicationValues.OrganiztionName}</TableCell>
    <TableCell>{props.draftApplicationValues.RegistrationNumber}</TableCell>
    <TableCell>{props.draftApplicationValues.AllocateTo}</TableCell>
    <TableCell>{props.draftApplicationValues.AllocationName}</TableCell>

    <TableCell>
      <div className="click-btn">
        <Button
          className="eye-btn"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            props.onHandleActionClick(props.draftApplicationValues)
          }
        >
          Click To-Proceed
        </Button>{" "}
        <Button
          className="eye-btn"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            props.onHandleDeleteClickPopUp(
              props.draftApplicationValues.ApplicationId
            )
          }
        >
          <img className="proposal-img" src="/images/bin.png" />
        </Button>
      </div>
    </TableCell>
  </TableRow>
);

export const DraftApplicationListTable = (
  props: IDraftApplicationListTableProps & IDraftValueProps
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="DraftApplications.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.draftApplicationList} name="Sheet A">
            <Workbook.Column label="Application Number" value="ApplicationId" />
            <Workbook.Column
              label="Oraganization Name"
              value="OrganiztionName"
            />
            <Workbook.Column
              label="Registration Number"
              value="RegistrationNumber"
            />
            <Workbook.Column label="Land Allocation To" value="AllocateTo" />
            <Workbook.Column
              label="Allocation Type Name"
              value="AllocationName"
            />
            <Workbook.Column label="City Type" value="ThemecityName" />
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
              <TableCell>Allocation Type Name</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {
            <Dialog
              open={props.dialogExpandOpen}
              onClose={props.onhandleExpandClose}
              aria-labelledby="simple-dialog-title"
            >
              <div className="popup-title">
                <DialogTitle id="simple-dialog-title">
                  Application Details
                </DialogTitle>
              </div>
              <div id="simple-dialog-title">
                <DraftExpandRow
                  draftApplicationValues={props.draftApplicationValues}
                  //   open={props.open}
                />
              </div>
            </Dialog>
          }

          {/* {props.draftApplicationList.length === 0 ? (
          <TableRow>
            <TableCell colSpan={12} style={{ textAlign: "center" }}>
              <h2 className="no-dtat-title">No data available in list</h2>
            </TableCell>
          </TableRow>
        ) : (
          <TableBody>
            {props.draftApplicationList
              .map(value => (
                <DraftApplicaitonInnerForm
                  expandApplicationId={props.expandApplicationId}
                  open={props.open}
                />
              </div>
            </Dialog>
          } */}

          {props.draftApplicationList.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {props.draftApplicationList
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
                        x.AllocationName.toLowerCase().includes(
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
                  <DraftApplicaitonInnerForm
                    expandApplicationId={props.expandApplicationId}
                    AllocateTo={props.AllocateTo}
                    key={value.ApplicationId}
                    draftApplicationValues={value}
                    // open={props.open}
                    dialogExpandOpen={props.dialogExpandOpen}
                    onHandleClick={props.onHandleClick}
                    onHandleActionClick={props.onHandleActionClick}
                    onHandleDeleteClickPopUp={props.onHandleDeleteClickPopUp}
                    onHandleClose={props.onHandleClose}
                    onhandleExpandClose={props.onhandleExpandClose}
                  />
                ))}
            </TableBody>
          )}
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

const DraftApplicationForm = (
  props: IDraftApplicationStateProps & IDraftValueProps
) => (
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

    <DraftApplicationListTable
      draftApplicationValues={props.draftApplicationValues}
      draftApplicationList={props.draftApplicationList}
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      searchInput={props.searchInput}
      // open={props.open}
      expandApplicationId={props.expandApplicationId}
      AllocateTo={props.AllocateTo}
      onHandleClick={props.onHandleClick}
      onHandleActionClick={props.onHandleActionClick}
      onHandleDeleteClickPopUp={props.onHandleDeleteClickPopUp}
      onHandleClose={props.onHandleClose}
      onhandleExpandClose={props.onhandleExpandClose}
      dialogExpandOpen={props.dialogExpandOpen}
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
export default DraftApplicationForm;
