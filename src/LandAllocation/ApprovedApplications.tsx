import * as React from "react";

import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
// import ApprovedButton from "./ApprovedMilestoneButton";
import Workbook from "react-excel-workbook";
// import { withRouter } from "react-router-dom";
import {
  IApprovedApplicationPopUpValues,
  IApprovedApplicationStateValues,
  IApprovedValueProps,
  IMilestoneStateProps
} from "../Container/ApprovedApplicationState";
import { IApplicationStateProps } from "../Container/ApprovedApplicationState";
import Pager from "../Masters/Pager";
import ApprovedApplicationPopUp from "./ApprovedApplicationPopUp";
import ExpandRow from "./ApprovedExpanded";

export interface IApplicationProps {
  readonly approvedApplicationValues: IApprovedApplicationStateValues;
  readonly ApprovedApplicaitonExpandopen: boolean;
  readonly dialogOpen: boolean;
  readonly expandApplicationId: string;
  readonly approvedApplicationPopUpList: ReadonlyArray<
    IApprovedApplicationPopUpValues
  >;

  onHandleClick(event: any): void;

  onHandleActionClick(event: IApprovedApplicationStateValues): void;
  onHandleClose(): void;
}

export interface IExpandValueProps {
  readonly approvedApplicationValues: IApprovedApplicationStateValues;
  readonly expandApplicationId: string;
}
export interface IApprovedApplicationListTableProps {
  readonly approvedApplicationList: ReadonlyArray<
    IApprovedApplicationStateValues
  >;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly emptyRows: number;
  readonly searchInput: string;
  readonly ApprovedApplicaitonExpandopen: boolean;
  readonly dialogOpen: boolean;
  readonly expandApplicationId: string;
  readonly approvedApplicationPopUpList: ReadonlyArray<
    IApprovedApplicationPopUpValues
  >;
  onHandleClick(event: any): void;
  onHandleActionClick(event: IApprovedApplicationStateValues): void;
  onHandleClose(): void;
}

const ApprovedApplicationInnerForm = (
  props: IApplicationProps & IMilestoneStateProps & IExpandValueProps
) => (
  <TableRow>
    <TableCell
      className="table-btn-grid-three"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.onHandleClick(props.approvedApplicationValues)}
    >
      {props.ApprovedApplicaitonExpandopen &&
      props.approvedApplicationValues.ApplicationId ===
        props.expandApplicationId ? (
        <Button
          className="table-add-btn"
          id={props.approvedApplicationValues.ApplicationId}
        >
          -
        </Button>
      ) : (
        <Button
          className="table-add-btn"
          id={props.approvedApplicationValues.ApplicationId}
        >
          +
        </Button>
      )}
      {props.approvedApplicationValues.ApplicationId}
    </TableCell>

    <TableCell>{props.approvedApplicationValues.RequiredLand}</TableCell>
    <TableCell>{props.approvedApplicationValues.LandAllocated}</TableCell>

    <TableCell>{props.approvedApplicationValues.LandAllocationType}</TableCell>
    <TableCell>
      {" "}
      {props.approvedApplicationValues.LandAllocationType ===
      "Milestone Based" ? (
        <Button
          className="eye-btn"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            props.handleMileIdClick(props.approvedApplicationValues)
          }
        >
          MileStone Details
        </Button>
      ) : (
        ""
        // <ApprovedButton
        // // handleMileIdClick={props.handleMileIdClick}
        // // applicationid={props.approvedApplicationValues.ApplicationId}
        // />
      )}
    </TableCell>
    <TableCell>
      <Button
        className="eye-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleActionClick(props.approvedApplicationValues)
        }
        // tslint:disable-next-line:jsx-no-lambda
      >
        <img src="/images/eye.png" />
      </Button>
    </TableCell>

    {/* {props.open &&
    props.applicationValues.ApplicationId === props.expandApplicationId ? (
      <SubmittedApplicationExpand
        expandApplicationList={props.expandApplicationList}
        expandApplicationId={props.expandApplicationId}
        applicationValues={props.applicationValues}
        open={props.open}
        onHandleClick={props.onHandleClick}
      />
    ) : (
      ""
    )} */}
  </TableRow>
);

export const ApprovedApplicationListTable = (
  props: IApplicationStateProps & IMilestoneStateProps & IApprovedValueProps
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="ApprovedApplications.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.approvedApplicationList} name="Sheet A">
            <Workbook.Column label="ApplicationId" value="ApplicationId" />
            <Workbook.Column
              label="Requested Land Area(In Acres) "
              value="RequiredLand"
            />
            <Workbook.Column
              label="Land Allocation Types "
              value="LandAllocated"
            />
            <Workbook.Column label="Actions" value="LandAllocationType" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Application Id</TableCell>

              <TableCell> Requested Land Area(In Acres) </TableCell>
              <TableCell>Allocated Land Area(In Acres)</TableCell>
              <TableCell>Land Allocation Types </TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              <Dialog
                open={
                  props.ApprovedApplicaitonExpandopen &&
                  props.approvedApplicationValues.ApplicationId ===
                    props.expandApplicationId
                }
                onClose={props.onHandleClose}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                    Application Details
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <ExpandRow
                    approvedApplicationValues={props.approvedApplicationValues}
                    expandApplicationId={props.expandApplicationId}
                  />
                </div>
              </Dialog>
            }
            {
              <Dialog
                open={props.dialogOpen}
                onClose={props.onHandleClose}
                aria-labelledby="simple-dialog-title"
              >
                <div id="simple-dialog-title">
                  <ApprovedApplicationPopUp
                    approvedApplicationPopUpList={
                      props.approvedApplicationPopUpList
                    }
                    handleClose={props.onHandleClose}
                  />
                </div>
              </Dialog>
            }
            {props.approvedApplicationList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.approvedApplicationList
                .map(value => (
                  <ApprovedApplicationInnerForm
                    onHandleMilestoneExpandClose={
                      props.onHandleMilestoneExpandClose
                    }
                    onHandleMilestoneClick={props.onHandleMilestoneClick}
                    milestoneList={props.milestoneList}
                    expandMilestoneId={props.expandMilestoneId}
                    // MileemptyRows={props.MileemptyRows}
                    Milepage={props.Milepage}
                    handleMileIdClick={props.handleMileIdClick}
                    MileStoneIdopen={props.MileStoneIdopen}
                    expandApplicationId={props.expandApplicationId}
                    approvedApplicationPopUpList={
                      props.approvedApplicationPopUpList
                    }
                    key={value.ApplicationId}
                    approvedApplicationValues={value}
                    ApprovedApplicaitonExpandopen={
                      props.ApprovedApplicaitonExpandopen
                    }
                    dialogOpen={props.dialogOpen}
                    onHandleClick={props.onHandleClick}
                    onHandleActionClick={props.onHandleActionClick}
                    onHandleClose={props.onHandleClose}
                  />
                ))
                .filter(x =>
                  props.searchInput !== ""
                    ? x.props.approvedApplicationValues.ApplicationId.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.props.approvedApplicationValues.OrganiztionName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.props.approvedApplicationValues.RequiredLand.toString()
                        .toLowerCase()
                        .includes(props.searchInput.toLowerCase()) ||
                      x.props.approvedApplicationValues.LandAllocated.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.props.approvedApplicationValues.LandAllocationType.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      )
                    : x
                )
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const ApprovedApplicationSubmitForm = (
  props: IApplicationStateProps & IMilestoneStateProps & IApprovedValueProps
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
    <ApprovedApplicationListTable
      onHandleMilestoneExpandClose={props.onHandleMilestoneExpandClose}
      onHandleMilestoneClick={props.onHandleMilestoneClick}
      approvedApplicationValues={props.approvedApplicationValues}
      count={props.count}
      milestoneList={props.milestoneList}
      expandMilestoneId={props.expandMilestoneId}
      MileStoneIdopen={props.MileStoneIdopen}
      Milepage={props.Milepage}
      // MileemptyRows={props.MileemptyRows}
      handleMileIdClick={props.handleMileIdClick}
      approvedApplicationList={props.approvedApplicationList}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      // emptyRows={props.emptyRows}
      searchInput={props.searchInput}
      ApprovedApplicaitonExpandopen={props.ApprovedApplicaitonExpandopen}
      dialogOpen={props.dialogOpen}
      expandApplicationId={props.expandApplicationId}
      approvedApplicationPopUpList={props.approvedApplicationPopUpList}
      onHandleClick={props.onHandleClick}
      onHandleActionClick={props.onHandleActionClick}
      onHandleClose={props.onHandleClose}
      onHandleSearch={props.onHandleSearch}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      downloadClose={props.downloadClose}
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
export default ApprovedApplicationSubmitForm;
