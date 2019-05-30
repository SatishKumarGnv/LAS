import * as React from "react";

import { Button, Dialog, DialogTitle, IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  IThemeCityApprovalStateProps,
  IThemeCityApprovalValues
} from "../Container/ThemeCityWiseApplicationApprovalState";
import Pager from "../Masters/Pager";
import ExpandTownShipRow from "./TownShipExpand";
import TownShipPopUp from "./TownShipPopUp";

interface IThemeCityApprovalStateValues {
  readonly ThemeCityApprovalValues: IThemeCityApprovalValues;
  readonly expandApplicationId: string;
  readonly dialogExpandOpen: boolean;
  onHandleClick(event: any): void;
  onHandleActionClick(event: any): void;
}

const TownShipInnerForm = (props: IThemeCityApprovalStateValues) => (
  <TableRow>
    <TableCell
      className="table-btn-grid"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.onHandleClick(props.ThemeCityApprovalValues)}
    >
      {props.dialogExpandOpen &&
      props.ThemeCityApprovalValues.ApplicationId ===
        props.expandApplicationId ? (
        <Button
          className="table-add-btn"
          id={props.ThemeCityApprovalValues.ApplicationId}
          // onClick={props.onHandleExpandPopUp}
        >
          -
        </Button>
      ) : (
        <Button
          className="table-add-btn"
          id={props.ThemeCityApprovalValues.ApplicationId}
        >
          +
        </Button>
      )}
      {props.ThemeCityApprovalValues.ApplicationId}
    </TableCell>

    <TableCell>{props.ThemeCityApprovalValues.OrganiztionName}</TableCell>
    <TableCell>{props.ThemeCityApprovalValues.AgreementTypeName}</TableCell>
    <TableCell>{props.ThemeCityApprovalValues.ProjectName}</TableCell>
    <TableCell>{props.ThemeCityApprovalValues.TownshipName}</TableCell>
    <TableCell>{props.ThemeCityApprovalValues.RequestLand}</TableCell>
    <TableCell>
      <Button
        className="eye-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => props.onHandleActionClick(props.ThemeCityApprovalValues)}
      >
        <img src="/images/eye.png" />
      </Button>
    </TableCell>
  </TableRow>
);

export const ThemecityLandListTable = (
  props: IThemeCityApprovalStateProps & IThemeCityApprovalStateValues
) => {
  return (
    <div className="table-card">
      <div className="row text-center excel-btn">
        <Workbook
          filename="ThemeCityLandDetails.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.ApplicationMasterList} name="Sheet A">
            <Workbook.Column label="Application Id" value="ApplicationId" />
            <Workbook.Column
              label="Organisation Name"
              value="OrganiztionName"
            />
            <Workbook.Column
              label="Allocation Process"
              value="AgreementTypeName"
            />
            <Workbook.Column label="Project Name" value="ProjectName" />
            <Workbook.Column label="TownShip" value="TownshipName" />
            <Workbook.Column label="Requested Land" value="RequestLand" />
            <Workbook.Column label="View" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Application Id</TableCell>
              <TableCell>Organisation Name</TableCell>
              <TableCell>Allocation Process</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Township</TableCell>
              <TableCell>Requested Land</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          {
            <Dialog
              open={props.dialogOpen}
              onClose={props.onHandleDialogClose}
              aria-labelledby="simple-dialog-title"
            >
              <div className="cls-btn-popup">
                <Button color="primary" onClick={props.onHandleDialogClose}>
                  X
                </Button>
              </div>

              <div className="popup-title">
                <DialogTitle id="simple-dialog-title">
                  Agreement Details
                </DialogTitle>
              </div>
              <div id="simple-dialog-title">
                <TownShipPopUp
                  popUpid={props.popUpid}
                  applicationPopUpList={props.applicationPopUpList}
                  onHandleDialogClose={props.onHandleDialogClose}
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
                <ExpandTownShipRow
                  ThemeCityApprovalValues={props.ThemeCityApprovalValues}
                />
              </div>
            </Dialog>
          }
          <TableBody>
            {props.ApplicationMasterList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.ApplicationMasterList.filter(x =>
                props.searchInput !== ""
                  ? x.ApplicationId.toLowerCase().includes(
                      props.searchInput.toLowerCase()
                    ) ||
                    x.OrganiztionName.toLowerCase().includes(
                      props.searchInput.toLowerCase()
                    ) ||
                    x.AgreementTypeName.toLowerCase().includes(
                      props.searchInput.toLowerCase()
                    ) ||
                    x.ProjectName.toLowerCase().includes(
                      props.searchInput.toLowerCase()
                    ) ||
                    x.TownshipName.toLowerCase().includes(
                      props.searchInput.toLowerCase()
                    ) ||
                    x.RequestLand.toString()
                      .toLowerCase()
                      .includes(props.searchInput.toLowerCase())
                  : x
              )
                .map((value, id) => (
                  <TownShipInnerForm
                    key={id}
                    ThemeCityApprovalValues={value}
                    expandApplicationId={props.expandApplicationId}
                    dialogExpandOpen={props.dialogExpandOpen}
                    onHandleClick={props.onHandleClick}
                    onHandleActionClick={props.onHandleActionClick}
                  />
                ))
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

const ThemeCityLandForm = (
  props: IThemeCityApprovalStateProps & IThemeCityApprovalStateValues
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
    <ThemecityLandListTable
      applicationPopUpList={props.applicationPopUpList}
      popUpid={props.popUpid}
      onHandleDialogClose={props.onHandleDialogClose}
      ApplicationMasterList={props.ApplicationMasterList}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
      searchInput={props.searchInput}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandleSearch={props.onHandleSearch}
      onHandleClick={props.onHandleClick}
      ThemeCityApprovalValues={props.ThemeCityApprovalValues}
      expandApplicationId={props.expandApplicationId}
      dialogExpandOpen={props.dialogExpandOpen}
      onHandleClose={props.onHandleClose}
      onHandleActionClick={props.onHandleActionClick}
      dialogOpen={props.dialogOpen}
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
export default ThemeCityLandForm;
