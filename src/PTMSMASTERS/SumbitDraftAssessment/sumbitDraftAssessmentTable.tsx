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

import {
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import {
  IDraftAssessmentPopUpValues,
  ISubmitDraftAssessmentStateProps,
  ISumbitdraftAssessmentValues,
  ISumbitDraftValueProps
} from "src/DefaultLayout/HomePage";
import Pager from "src/Masters/Pager";
import DraftAssessmentPopUp from "./DraftAssessmentPopUp";

export interface ISubmitDraftAssessmentProps {
  readonly draftAssessmentValues: ISumbitdraftAssessmentValues;
  onHandleActionClick(values: ISumbitdraftAssessmentValues): void;
  onHandleViewButtonClick(RequestId: string): void;
}

export interface ISubmitDraftAssessmentTableProps {
  readonly submitDraftAssessmentList: ReadonlyArray<
    ISumbitdraftAssessmentValues
  >;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  readonly draftAssessmentPopUpValues: IDraftAssessmentPopUpValues;
  readonly dialogOpen: boolean;
  onHandleDraftAssessmentClose(): void;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleActionClick(values: ISumbitdraftAssessmentValues): void;
  onHandleViewButtonClick(RequestId: string): void;
}

const SumbitDraftAssessmentTableItems = (
  props: ISubmitDraftAssessmentProps
) => (
  <TableRow>
    <TableCell
    //  className="table-btn-grid-two"
    // tslint:disable-next-line:jsx-no-lambda
    //  onClick={() => props.onHandleClick(props.draftAssessmentValues)}
    >
      {props.draftAssessmentValues.OwnerName}
    </TableCell>

    <TableCell>{props.draftAssessmentValues.CategoryOwnershipName}</TableCell>
    <TableCell>{props.draftAssessmentValues.PropertyDepartmentName}</TableCell>
    <TableCell>{props.draftAssessmentValues.PropertyTypeName}</TableCell>
    <TableCell>{props.draftAssessmentValues.RequestId}</TableCell>
    <TableCell>
      <Button
        className="eye-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleViewButtonClick(props.draftAssessmentValues.RequestId)
        }
      >
        <img src="/images/eye.png" />
      </Button>
    </TableCell>
    <TableCell>
      {props.draftAssessmentValues.StatusID === 0 ? (
        <div className="click-btn">
          <Button
            className="eye-btn"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleActionClick(props.draftAssessmentValues)
            }
          >
            Click To-Proceed
          </Button>
        </div>
      ) : (
        <div />
      )}
    </TableCell>
  </TableRow>
);

export const SumbitDraftAssessmentListTable = (
  props: ISubmitDraftAssessmentTableProps & ISumbitDraftValueProps
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="SumbitDraftAssessment.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.submitDraftAssessmentList} name="Sheet A">
            <Workbook.Column label="Owner Name" value="OwnerName" />
            <Workbook.Column
              label="Category Ownership"
              value="CategoryOwnershipName"
            />
            <Workbook.Column
              label="Property DepartmentName"
              value="PropertyDepartmentName"
            />
            <Workbook.Column
              label="PropertyTypeName"
              value="PropertyTypeName"
            />
            <Workbook.Column label="RequestId" value="RequestId" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Owner Name</TableCell>
              <TableCell>Category OwnerShip</TableCell>
              <TableCell>Property Department</TableCell>
              <TableCell>Propoerty Type</TableCell>
              <TableCell>Request Id</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Proceed</TableCell>
            </TableRow>
          </TableHead>
          {props.submitDraftAssessmentList.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {props.submitDraftAssessmentList
                .filter(x => {
                  return props.searchInput !== ""
                    ? registrationNumer(props.searchInput, x.OwnerName) ||
                        registrationNumer(
                          props.searchInput,
                          x.CategoryOwnershipName
                        ) ||
                        registrationNumer(
                          props.searchInput,
                          x.PropertyDepartmentName
                        ) ||
                        registrationNumer(
                          props.searchInput,
                          x.PropertyTypeName
                        ) ||
                        registrationNumer(props.searchInput, x.RequestId)
                    : true;
                })
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
                .map(value => (
                  <SumbitDraftAssessmentTableItems
                    onHandleViewButtonClick={props.onHandleViewButtonClick}
                    key={value.AssessmentId}
                    draftAssessmentValues={value}
                    // open={props.open}
                    onHandleActionClick={props.onHandleActionClick}
                  />
                ))}
            </TableBody>
          )}
        </Table>
        {
          <Dialog
            className="pop-up"
            open={props.dialogOpen}
            onClose={props.onHandleDraftAssessmentClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Application Details
            </DialogTitle>
            <DialogActions>
              <div
              // id="simple-dialog-title pop-up"
              >
                <DraftAssessmentPopUp
                  selectfloorValues={props.selectfloorValues}
                  selectroofValues={props.selectroofValues}
                  selectwallValues={props.selectwallValues}
                  selectwoodValues={props.selectwoodValues}
                  draftAssessmentPopUpValues={props.draftAssessmentPopUpValues}
                  onHandleDraftAssessmentClose={
                    props.onHandleDraftAssessmentClose
                  }
                />
              </div>
            </DialogActions>
          </Dialog>
        }
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

const SubmitDraftAssessmentForm = (
  props: ISubmitDraftAssessmentStateProps & ISumbitDraftValueProps
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

    <SumbitDraftAssessmentListTable
      selectfloorValues={props.selectfloorValues}
      selectroofValues={props.selectroofValues}
      selectwallValues={props.selectwallValues}
      selectwoodValues={props.selectwoodValues}
      dialogOpen={props.dialogOpen}
      draftAssessmentPopUpValues={props.draftAssessmentPopUpValues}
      onHandleDraftAssessmentClose={props.onHandleDraftAssessmentClose}
      onHandleActionClick={props.onHandleActionClick}
      onHandleViewButtonClick={props.onHandleViewButtonClick}
      draftAssessmentValues={props.draftAssessmentValues}
      submitDraftAssessmentList={props.submitDraftAssessmentList}
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      searchInput={props.searchInput}
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
export default SubmitDraftAssessmentForm;
