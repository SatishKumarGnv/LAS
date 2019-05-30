// import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Workbook from "react-excel-workbook";

import * as React from "react";

import { Checkbox, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import {
  IBulkPasswordRoleStateProps,
  IBulkPasswordStateValues
} from "src/Container/BulkPasswordState";
import Pager from "../Masters/Pager";

interface IBulkPasswordTableInnerProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeBulkPasswordValues: IBulkPasswordStateValues;
  readonly numSelected: number;
  readonly rowCount: number;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
}

export interface IBulkPasswordProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeBulkPasswordValues: ReadonlyArray<IBulkPasswordStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly numSelected: number;
  readonly rowCount: number;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handleSelectAllClick(evt: React.ChangeEvent<HTMLInputElement>): void;
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onHandlePageChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    page: number
  ): void;
}

const ChangeUserRoleInnerForm = (props: IBulkPasswordTableInnerProps) => (
  <TableRow>
    <TableCell>
      <Checkbox
        // indeterminate={
        //   props.numSelected > 0 && props.numSelected < props.rowCount
        // }
        id={props.changeBulkPasswordValues.UserName}
        checked={
          props.selected.indexOf(props.changeBulkPasswordValues.UserName) >= 0
        }
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.handleSelect(event, props.changeBulkPasswordValues.UserName)
        }
      />
    </TableCell>
    <TableCell>{props.changeBulkPasswordValues.FirstName}</TableCell>
    <TableCell>{props.changeBulkPasswordValues.UserName}</TableCell>
    <TableCell>{props.changeBulkPasswordValues.Email}</TableCell>
  </TableRow>
);

export const BulkPasswordListTable = (props: IBulkPasswordProps) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="BulkPasswordReset.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.changeBulkPasswordValues} name="Sheet A">
            <Workbook.Column label="First Name" value="FirstName" />
            <Workbook.Column label="User Name" value="UserName" />
            <Workbook.Column label="Email Address" value="Email" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  // indeterminate={
                  //   props.numSelected > 0 && props.numSelected < props.rowCount
                  // }
                  checked={
                    props.rowCount === props.changeBulkPasswordValues.length
                  }
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    props.handleSelectAllClick(event)
                  }
                />
              </TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.changeBulkPasswordValues.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.changeBulkPasswordValues
                .map((value, id) => (
                  <ChangeUserRoleInnerForm
                    key={id}
                    selected={props.selected}
                    changeBulkPasswordValues={value}
                    numSelected={props.numSelected}
                    rowCount={props.rowCount}
                    handleSelect={props.handleSelect}
                    // selectRoleList={}
                    // RoleId={}
                    // handleDropDownClick={}
                  />
                ))

                // search for all fields in table
                .filter(
                  (x: React.ReactElement<IBulkPasswordTableInnerProps>) => {
                    return props.searchInput !== ""
                      ? x.props.changeBulkPasswordValues.FirstName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                          x.props.changeBulkPasswordValues.Email.toLowerCase().includes(
                            props.searchInput.toLowerCase()
                          ) ||
                          x.props.changeBulkPasswordValues.UserName.toLowerCase().includes(
                            props.searchInput.toLowerCase()
                          )
                      : true;
                  }
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

const BulkPasswordTableForm = (props: IBulkPasswordRoleStateProps) => (
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

    <BulkPasswordListTable
      selected={props.selected}
      changeBulkPasswordValues={props.changeGridValues}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
      searchInput={props.searchInput}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      numSelected={props.numSelected}
      handleSelectAllClick={props.handleSelectAllClick}
      rowCount={props.rowCount}
      // onSelectAllClick={props.onSelectAllClick}
      handleSelect={props.handleSelect}
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
export default BulkPasswordTableForm;
