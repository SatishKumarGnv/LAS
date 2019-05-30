import * as React from "react";

import { Dialog, DialogTitle, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  IApplicationSearchTableList,
  IApplicationSearchTableProps,
  ISearchExpandRowProps
} from "../Container/ApplicationSearchState";
import Pager from "../Masters/Pager";
import ExpandSearchRow from "./ApplicationSearchExpandData";

const ApplicationSearchItems = (props: IApplicationSearchTableProps) => (
  <TableRow>
    <TableCell
      className="table-btn-grid"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() =>
        props.onHandleClick(props.applicationSearchValues.ApplicationId)
      }
    >
      {props.dialogExpandOpen &&
      props.applicationSearchValues.ApplicationId ===
        props.expandApplicationId ? (
        <Button
          className="table-add-btn"
          id={props.applicationSearchValues.ApplicationId}
        >
          -
        </Button>
      ) : (
        <Button
          className="table-add-btn"
          id={props.applicationSearchValues.ApplicationId}
        >
          +
        </Button>
      )}
      {props.applicationSearchValues.ApplicationId}
    </TableCell>
    <TableCell>{props.applicationSearchValues.TownshipName}</TableCell>
    <TableCell>{props.applicationSearchValues.OrgName}</TableCell>
    <TableCell>{props.applicationSearchValues.AllocationTypeName}</TableCell>
    <TableCell>{props.applicationSearchValues.Status}</TableCell>
    <TableCell>{props.applicationSearchValues.RequiredLandSize}</TableCell>
  </TableRow>
);

export const ApplicationSearchListTable = (
  props: IApplicationSearchTableList
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="ApplicationSearch.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.applicationTableValues} name="Sheet A">
            <Workbook.Column label="Application Id" value="ApplicationId" />
            <Workbook.Column label="City Type" value="TownshipName" />
            <Workbook.Column label="Organization Name" value="OrgName" />
            <Workbook.Column
              label="Land Allocation To"
              value="AllocationTypeName"
            />
            <Workbook.Column label="Status" value="Status" />
            <Workbook.Column label="Land Area" value="RequiredLandSize" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Application Id </TableCell>
              <TableCell>City Type</TableCell>
              <TableCell>Organization Name</TableCell>
              <TableCell>Land Allocation To</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Land Area</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.applicationTableValues.length > 0 ? (
              props.applicationTableValues
                .filter(x =>
                  props.searchInput !== ""
                    ? x.ApplicationId.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.TownshipName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.OrgName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.AllocationTypeName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.Status.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.RequiredLandSize.toString()
                        .toLowerCase()
                        .includes(props.searchInput.toLowerCase())
                    : true
                )
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
                .map(value => (
                  <ApplicationSearchItems
                    key={value.ApplicationId}
                    applicationSearchValues={value}
                    // open={props.open}
                    dialogExpandOpen={props.dialogExpandOpen}
                    expandApplicationId={props.expandApplicationId}
                    onHandleClick={props.onHandleClick}
                  />
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            )}

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
                  <ExpandSearchRow
                    dialogExpandOpen={props.dialogExpandOpen}
                    applicationTableValues={props.applicationTableValues}
                    expandApplicationId={props.expandApplicationId}
                    // open={props.open}
                    onHandleClick={props.onHandleClick}
                  />
                </div>
              </Dialog>
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const ApplicationSearchTable = (
  props: IApplicationSearchTableList & ISearchExpandRowProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="standard-search"
      // label="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleSearch}
      // className={classes.textField}
      margin="normal"
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />
    <ApplicationSearchListTable
      applicationTableValues={props.applicationTableValues}
      page={props.page}
      count={props.count}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      searchInput={props.searchInput}
      onHandleSearch={props.onHandleSearch}
      dialogExpandOpen={props.dialogExpandOpen}
      expandApplicationId={props.expandApplicationId}
      onHandleClick={props.onHandleClick}
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
export default ApplicationSearchTable;
