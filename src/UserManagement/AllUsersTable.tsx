// import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import Workbook from "react-excel-workbook";

import {
  Checkbox,
  FormControl,
  IconButton,
  // InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import {
  IAllActionValues,
  IAllUserRoleStateProps,
  IAllUserRoleStateValues
} from "src/Container/AllUsersState";
import Pager from "../Masters/Pager";

interface IAllUserRoleTableInnerProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeAllRoleValues: IAllUserRoleStateValues;
  readonly selectActionRoleList: ReadonlyArray<IAllActionValues>;
  readonly numSelected: number;
  readonly rowCount: number;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handleDropDownClick(roleId: string, id: number): void;
}

export interface IAllUsersRoleProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeUserRoleValues: ReadonlyArray<IAllUserRoleStateValues>;
  readonly selectActionRoleList: ReadonlyArray<IAllActionValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly numSelected: number;
  readonly rowCount: number;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handleSelectAllClick(evt: React.ChangeEvent<HTMLInputElement>): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
  handleDropDownClick(roleId: string, id: number): void;
}

const AllUserRoleInnerForm = (props: IAllUserRoleTableInnerProps) => (
  <TableRow>
    <TableCell>
      <Checkbox
        id={props.changeAllRoleValues.UserName}
        checked={
          props.selected.indexOf(props.changeAllRoleValues.UserName) >= 0
        }
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.handleSelect(event, props.changeAllRoleValues.UserName)
        }
      />
    </TableCell>
    <TableCell>{props.changeAllRoleValues.FirstName}</TableCell>
    <TableCell>{props.changeAllRoleValues.MiddleName}</TableCell>
    <TableCell>{props.changeAllRoleValues.UserName}</TableCell>
    <TableCell>{props.changeAllRoleValues.Email}</TableCell>
    <TableCell>
      {props.changeAllRoleValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    {/* <TableCell>{props.changeAllRoleValues.Role}</TableCell> */}
    <TableCell>
      <FormControl required={true}>
        <h4>
          Select Action<span className="star">*</span>
        </h4>
        <Select
          className="forword-select"
          placeholder="Select"
          inputProps={{
            id: "ActionId",
            name: "ActionId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            props.handleDropDownClick(
              event.target.value,
              props.changeAllRoleValues.id
            );
          }}
          value={props.changeAllRoleValues.RoleId}
        >
          {props.selectActionRoleList.map((e: IAllActionValues) => (
            <MenuItem
              key={e.ActionId}
              className="select-dropdown-bottom"
              value={e.ActionId}
            >
              {e.ActionName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </TableCell>
  </TableRow>
);

export const AllUserRoleListTable = (props: IAllUsersRoleProps) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="AllUsers.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.changeUserRoleValues.map(x => ({
              ...x,
              IsActive: x.IsActive ? "Active" : "InActive",
              RoleName: props.selectActionRoleList
                .filter((e: IAllActionValues) => e.ActionId === x.RoleId)
                .map(e => e.ActionName)[0]
            }))}
            name="Sheet A"
          >
            <Workbook.Column label="First Name" value="FirstName" />
            <Workbook.Column label="Middle Name" value="MiddleName" />
            <Workbook.Column label="User Name" value="UserName" />
            <Workbook.Column label="Email Address" value="Email" />
            <Workbook.Column label="Status" value="IsActive" />
            <Workbook.Column label="Actions" value="RoleName" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={props.rowCount === props.changeUserRoleValues.length}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => props.handleSelectAllClick(event)}
                />
              </TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Middle Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.changeUserRoleValues.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.changeUserRoleValues
                .map((value, id) => (
                  <AllUserRoleInnerForm
                    key={id}
                    changeAllRoleValues={value}
                    numSelected={props.numSelected}
                    rowCount={props.rowCount}
                    handleSelect={props.handleSelect}
                    selected={props.selected}
                    selectActionRoleList={props.selectActionRoleList}
                    handleDropDownClick={props.handleDropDownClick}
                  />
                ))

                // search for all fields in table
                .filter(
                  (x: React.ReactElement<IAllUserRoleTableInnerProps>) => {
                    return props.searchInput !== ""
                      ? x.props.changeAllRoleValues.FirstName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                          middleNameIncludes(
                            props.searchInput,
                            x.props.changeAllRoleValues.MiddleName
                          ) ||
                          x.props.changeAllRoleValues.IsActive.toString().includes(
                            getActivestate(props.searchInput)
                          ) ||
                          x.props.changeAllRoleValues.UserName.toLowerCase().includes(
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
const getActivestate = (state: string) => {
  switch (state) {
    case "Active".toLowerCase():
      return "true";
    case "InActive".toLowerCase():
      return "false";
    default:
      return state;
  }
};
const middleNameIncludes = (searchInput: string, middleName?: string) => {
  if (middleName) {
    return middleName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};
const AllUserRoleTableForm = (props: IAllUserRoleStateProps) => (
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
    <AllUserRoleListTable
      selected={props.selected}
      changeUserRoleValues={props.changeRoleValues}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
      searchInput={props.searchInput}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      numSelected={props.numSelected}
      rowCount={props.rowCount}
      handleSelectAllClick={props.handleSelectAllClick}
      handleSelect={props.handleSelect}
      selectActionRoleList={props.selectActionRoleList}
      handleDropDownClick={props.handleDropDownClick}
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
export default AllUserRoleTableForm;
