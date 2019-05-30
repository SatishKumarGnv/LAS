import { IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import * as moment from "moment";
import * as React from "react";
import Workbook from "react-excel-workbook";
import {
  IUserLoginAuditStateProps,
  IUserLoginAuditStateValues
} from "../Container/LoginAuditTrailState";
import Pager from "../Masters/Pager";

interface ILoginAuditTrailTableInnerProps {
  readonly loginAuditTrailValues: IUserLoginAuditStateValues;
}

export interface ILoginAuditTrailListTableProps {
  readonly loginAuditTrailList: ReadonlyArray<IUserLoginAuditStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

const LoginAuditTrailInnerForm = (props: ILoginAuditTrailTableInnerProps) => (
  <TableRow>
    <TableCell>{props.loginAuditTrailValues.DepartmentName}</TableCell>
    <TableCell>{props.loginAuditTrailValues.TotalLoginUsers}</TableCell>
    <TableCell>{props.loginAuditTrailValues.DistinctUsers}</TableCell>
    <TableCell>
      {moment(props.loginAuditTrailValues.FromDate).format("DD/MM/YYYY")}
    </TableCell>
    <TableCell>
      {moment(props.loginAuditTrailValues.ToDate).format("DD/MM/YYYY")}
    </TableCell>
  </TableRow>
);

export const LoginAuditTrailListTable = (
  props: ILoginAuditTrailListTableProps
) => {
  return (
    <div className="table-card">
      <div className="row text-center excel-btn">
        <Workbook
          filename="LoginAuditTrail.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.loginAuditTrailList.map(it => {
              return {
                ...it,

                FromDate: fromDateConvert(it.FromDate),
                ToDate: toDateConvert(it.ToDate)
              };
            })}
            name="Sheet A"
          >
            <Workbook.Column label="Department Name" value="DepartmentName" />
            <Workbook.Column
              label="Total Login Count"
              value="TotalLoginUsers"
            />
            <Workbook.Column label="Distinct Users" value="DistinctUsers" />
            <Workbook.Column label="From Date" value="FromDate" />
            <Workbook.Column label="To Date" value="ToDate" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Department Name</TableCell>
              <TableCell>Total Login Count</TableCell>
              <TableCell>Distinct Users</TableCell>
              <TableCell>From Date</TableCell>
              <TableCell>To Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.loginAuditTrailList.length === 0 ? (
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            ) : (
              props.loginAuditTrailList
                .map((value, id) => (
                  <LoginAuditTrailInnerForm
                    key={id}
                    loginAuditTrailValues={value}
                  />
                ))

                .filter(
                  (x: React.ReactElement<ILoginAuditTrailTableInnerProps>) => {
                    return props.searchInput !== ""
                      ? x.props.loginAuditTrailValues.DepartmentName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                          x.props.loginAuditTrailValues.TotalLoginUsers.toString()
                            .toLowerCase()
                            .includes(props.searchInput.toLowerCase()) ||
                          x.props.loginAuditTrailValues.DistinctUsers.toString()
                            .toLowerCase()
                            .includes(props.searchInput.toLowerCase()) ||
                          fromDateIncludes(
                            props.searchInput,
                            x.props.loginAuditTrailValues.FromDate
                          ) ||
                          toDateIncludes(
                            props.searchInput,
                            x.props.loginAuditTrailValues.ToDate
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
const fromDateIncludes = (searchInput: string, fromDate?: string) => {
  if (fromDate) {
    return moment(fromDate)
      .format("DD/MM/YYYY")
      .includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};
const toDateIncludes = (searchInput: string, toDate?: string) => {
  if (toDate) {
    return moment(toDate)
      .format("DD/MM/YYYY")
      .includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};
const fromDateConvert = (fromDate?: string) => {
  if (fromDate) {
    return moment(fromDate).format("DD/MM/YYYY");
  } else {
    return false;
  }
};
const toDateConvert = (toDate?: string) => {
  if (toDate) {
    return moment(toDate).format("DD/MM/YYYY");
  } else {
    return false;
  }
};
const LoginAuditTrailTableForm = (props: IUserLoginAuditStateProps) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput2}
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
    <LoginAuditTrailListTable
      loginAuditTrailList={props.userLoginAuditValues}
      page={props.page2}
      rowsPerPage={props.rowsPerPage2}
      count={props.count}
      searchInput={props.searchInput2}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />
    <Pager
      count={props.count}
      page={props.page2}
      rowsPerPage={props.rowsPerPage2}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />
  </div>
);
export default LoginAuditTrailTableForm;
