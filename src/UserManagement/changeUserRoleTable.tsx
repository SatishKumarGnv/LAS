// import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import {
  IChangeRoleStateValues,
  IChangeUserRoleStateProps,
  IRoleValues
} from "../Container/ChangeUserRoleState";

import {
  Checkbox,
  FormControl,
  IconButton,
  MenuItem,
  Select
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import Pager from "../Masters/Pager";

interface IChangeUserRoleTableInnerProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeUserRoleValues: IChangeRoleStateValues;
  readonly numSelected: number;
  readonly rowCount: number;
  readonly selectAllRoleList: ReadonlyArray<IRoleValues>;

  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handleDropDownClick(roleId: string, id: number): void;
}

export interface IChangeRoleProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeUserRoleValues: ReadonlyArray<IChangeRoleStateValues>;
  readonly selectAllRoleList: ReadonlyArray<IRoleValues>;
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
  handleDropDownClick(roleId: string, id: number): void;
}

const ChangeUserRoleInnerForm = (props: IChangeUserRoleTableInnerProps) => (
  <TableRow>
    <TableCell>
      <Checkbox
        id={props.changeUserRoleValues.UserName}
        checked={
          props.selected.indexOf(props.changeUserRoleValues.UserName) >= 0
        }
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.handleSelect(event, props.changeUserRoleValues.UserName)
        }
      />
    </TableCell>
    <TableCell>{props.changeUserRoleValues.FirstName}</TableCell>
    <TableCell>{props.changeUserRoleValues.MiddleName}</TableCell>
    <TableCell>{props.changeUserRoleValues.UserName}</TableCell>
    <TableCell>{props.changeUserRoleValues.Email}</TableCell>
    {/* <TableCell>{props.changeUserRoleValues.Role}</TableCell> */}
    <TableCell>
      <FormControl required={true}>
        <Select
          className="forword-select"
          placeholder="Select"
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            props.handleDropDownClick(
              event.target.value,
              props.changeUserRoleValues.id
            );
          }}
          value={props.changeUserRoleValues.RoleId}
        >
          {props.selectAllRoleList.map((e: IRoleValues) => (
            <MenuItem
              key={e.RoleId}
              className="select-dropdown-bottom"
              value={e.RoleId}
            >
              {e.RoleName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </TableCell>
  </TableRow>
);

export const ChangeUserRoleListTable = (props: IChangeRoleProps) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="ChangeUserRole.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.changeUserRoleValues.map(y => ({
              ...y,
              RoleName: props.selectAllRoleList
                .filter((e: IRoleValues) => y.RoleId === e.RoleId)
                .map((e: IRoleValues) => e.RoleName)[0]
            }))}
            name="Sheet A"
          >
            <Workbook.Column label="First Name" value="FirstName" />
            <Workbook.Column label="Middle Name" value="MiddleName" />
            <Workbook.Column label="User Name" value="UserName" />
            <Workbook.Column label="Email Address" value="Email" />
            <Workbook.Column label="Role" value="RoleName" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                checked={props.rowCount === props.changeUserRoleValues.length}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  props.handleSelectAllClick(event)
                }
              />
            </TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Middle Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell className="forword-select">Role</TableCell>
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
                <ChangeUserRoleInnerForm
                  key={id}
                  changeUserRoleValues={value}
                  numSelected={props.numSelected}
                  rowCount={props.rowCount}
                  handleSelect={props.handleSelect}
                  selected={props.selected}
                  selectAllRoleList={props.selectAllRoleList}
                  handleDropDownClick={props.handleDropDownClick}
                />
              ))

              .filter(
                (x: React.ReactElement<IChangeUserRoleTableInnerProps>) => {
                  return props.searchInput !== ""
                    ? x.props.changeUserRoleValues.FirstName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                        middleNameIncludes(
                          props.searchInput,
                          x.props.changeUserRoleValues.MiddleName
                        ) ||
                        x.props.changeUserRoleValues.UserName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        x.props.changeUserRoleValues.Email.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        )
                    : true;
                }
              )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )

            // search for all fields in table
          )}
        </TableBody>
      </Table>
    </div>
  );
};
const middleNameIncludes = (searchInput: string, middleName?: string) => {
  if (middleName) {
    return middleName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};
const ChangeUserRoleTableForm = (props: IChangeUserRoleStateProps) => (
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
    <ChangeUserRoleListTable
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
      selectAllRoleList={props.selectAllRoleList}
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
export default ChangeUserRoleTableForm;
