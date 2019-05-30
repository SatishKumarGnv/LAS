import { IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
// tslint:disable-next-line:ordered-imports
import * as moment from "moment";
import * as React from "react";
import Workbook from "react-excel-workbook";
import {
  IUserDetailReportStateProps,
  IUserDetailReportValues
} from "../Container/LoginAuditTrailState";
import Pager from "../Masters/Pager";

interface IUserDetailReportTableProps {
  readonly userDetailReportValues: IUserDetailReportValues;
}

export interface IUserDetailReportListTableProps {
  readonly userDetailReportList: ReadonlyArray<IUserDetailReportValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}
// const regex = /[/]/g;

const UserDetailReportInnerForm = (props: IUserDetailReportTableProps) => (
  <TableRow>
    <TableCell>{props.userDetailReportValues.UserName}</TableCell>
    <TableCell>{props.userDetailReportValues.ActivityPeriod}</TableCell>
    <TableCell>{props.userDetailReportValues.Activity}</TableCell>

    <TableCell>
      {props.userDetailReportValues.Login !== null
        ? moment(props.userDetailReportValues.Login!!).format("DD/MM/YYYY")
        : ""}
    </TableCell>
    <TableCell>
      {props.userDetailReportValues.Logout !== null
        ? moment(props.userDetailReportValues.Logout!!).format("DD/MM/YYYY")
        : ""}
    </TableCell>
    <TableCell>{props.userDetailReportValues.ClientIp}</TableCell>
    <TableCell>
      {moment(props.userDetailReportValues.ActivityPerformedOn).format(
        "DD/MM/YYYY HH:MM:SS"
      )}
    </TableCell>
  </TableRow>
);

export const UserDetailReportListTable = (
  props: IUserDetailReportListTableProps
) => {
  return (
    <div className="table-card">
      <div className="row text-center excel-btn">
        <Workbook
          filename="UserDetailReport.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.userDetailReportList.map(it => {
              return {
                ...it,
                ActivityPerformedOn: activityPeriodConvert(
                  it.ActivityPerformedOn
                ),
                Login: loginDateConvert(it.Login),
                Logout: logoutDateConvert(it.Logout)
              };
            })}
            name="Sheet A"
          >
            <Workbook.Column label="User Name" value="UserName" />
            <Workbook.Column label="Activity Period" value="ActivityPeriod" />
            <Workbook.Column label="Activity" value="Activity" />
            <Workbook.Column label="Login" value="Login" />
            <Workbook.Column label="Logout" value="Logout" />
            <Workbook.Column label="Client Ip" value="ClientIp" />
            <Workbook.Column
              label="Activity Performed On"
              value="ActivityPerformedOn"
            />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Activity Period</TableCell>
              <TableCell>Activity</TableCell>
              <TableCell>LogIn</TableCell>
              <TableCell>LogOut</TableCell>
              <TableCell>Client Ip</TableCell>
              <TableCell>Activity Performed On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userDetailReportList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.userDetailReportList
                .map((value, id) => (
                  <UserDetailReportInnerForm
                    key={id}
                    userDetailReportValues={value}
                  />
                ))

                .filter(
                  (x: React.ReactElement<IUserDetailReportTableProps>) => {

                    return props.searchInput !== ""
                      ? x.props.userDetailReportValues.UserName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                          activityPeriodIncludes(
                            props.searchInput,
                            x.props.userDetailReportValues.ActivityPeriod
                          ) ||
                          x.props.userDetailReportValues.Activity.toLowerCase().includes(
                            props.searchInput.toLowerCase()
                          ) ||
                          loginDateIncludes(
                            props.searchInput,
                            x.props.userDetailReportValues.Login
                          ) ||
                          logoutDateIncludes(
                            props.searchInput,
                            x.props.userDetailReportValues.Logout
                          ) ||
                          x.props.userDetailReportValues.ClientIp.toString().includes(
                            props.searchInput
                          ) ||
                          moment(
                            x.props.userDetailReportValues.ActivityPerformedOn
                          )
                            .format("DD/MM/YYYY HH:MM:SS")
                            .toString()
                            .includes(props.searchInput)
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
const activityPeriodIncludes = (
  searchInput: string,
  activityPeriod?: string
) => {
  if (activityPeriod) {
    return activityPeriod.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};
const logoutDateIncludes = (searchInput: string, logoutDate?: string) => {
  if (logoutDate) {
    return moment(logoutDate)
      .format("DD/MM/YYYY")
      .includes(searchInput);
  } else {
    return false;
  }
};
const loginDateIncludes = (searchInput: string, loginDate?: string) => {
  if (loginDate) {
    return moment(loginDate)
      .format("DD/MM/YYYY")
      .includes(searchInput);
  } else {
    return false;
  }
};
const loginDateConvert = (loginDate?: string) => {
  if (loginDate) {
    return moment(loginDate).format("DD/MM/YYYY");
  } else {
    return "";
  }
};
const logoutDateConvert = (logoutDate?: string) => {
  if (logoutDate) {
    return moment(logoutDate).format("DD/MM/YYYY");
  } else {
    return "";
  }
};
const activityPeriodConvert = (activityPeriod?: string) => {
  if (activityPeriod) {
    return moment(activityPeriod).format("DD/MM/YYYY HH:MM:SS");
  } else {
    return "";
  }
};
const UserDetailReportTableForm = (props: IUserDetailReportStateProps) => (
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
    <UserDetailReportListTable
      userDetailReportList={props.userDetailReportValues}
      count={props.count1}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      searchInput={props.searchInput}
    />
    <Pager
      count={props.count1}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />
  </div>
);
export default UserDetailReportTableForm;
