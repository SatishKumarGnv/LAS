import { Button, Dialog } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  // getDaysInMonth,
  getDaysInMonth,
  getMonth,
  getYear,
  subMonths
} from "date-fns";
import * as moment from "moment";
// UserDetailReportListTable
// import { subMonths } from "date-fns";
import * as React from "react";
import {
  getLoginAuditTrailDetails,
  getSelectDepartmentValues,
  getUserWiseDetails
} from "../Api_Integration/LoginAuditTrailService";
import LoginAuditTrailForm from "../MisReports/LoginAuditTrailForm";
import LoginAuditTrailTableForm from "../MisReports/LoginAuditTrailTable";
import UserDetailReportTableForm from "../MisReports/UserDetailReportTable";
export interface ILoginAuditTrailStateValues {
  DepartmentId: number;
  readonly TypeOfFilter: number;
  readonly FromDate: string;
  readonly ToDate: string;
  selectDepartmentName: string;
  onHandleGenerateReport(event: any): void;
}
export interface ISelectDepartmentValues {
  readonly DistrictId: number;
  readonly DepartmentName: string;
  readonly CreatedOn: string;
  readonly CreatedBy: number;
  readonly ModifiedOn: string;
  readonly ModifiedBy: number;
  readonly DepartmentId: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
}
export interface ISelectDepartmentProps {
  readonly selectDepartmentArrayValues: ReadonlyArray<ISelectDepartmentValues>;
}
export interface IUserLoginAuditStateValues {
  readonly DepartmentName: string;
  readonly TotalLoginUsers: number;
  readonly DistinctUsers: number;
  readonly FromDate?: string;
  readonly ToDate?: string;
}
export interface IUserDetailReportValues {
  readonly UserName: string;
  readonly ActivityPeriod: string;
  readonly Activity: string;
  readonly Login?: string;
  readonly Logout?: string;
  readonly ClientIp: number;
  readonly ActivityPerformedOn: string;
}
export interface IUserDetailReportStateProps {
  readonly userDetailReportValues: ReadonlyArray<IUserDetailReportValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count1: number;
  readonly searchInput: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}
export interface IUserLoginAuditStateProps {
  readonly userLoginAuditValues: ReadonlyArray<IUserLoginAuditStateValues>;
  readonly page2: number;
  readonly rowsPerPage2: number;
  readonly count: number;
  readonly searchInput2: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}
export const DateRange = (value: number) => {
  const d = new Date();
  const year = getYear(d);
  const month = getMonth(d);
  const daysInLastMonth = getDaysInMonth(subMonths(d, 1));
  const d2 = new Date(year, month - 1, daysInLastMonth);
  // const daysInLast3Months = getDaysInMonth(subMonths(d, 3))
  switch (value) {
    case 1:
      return [new Date(year, month, 1), d];
    case 2:
      return [new Date(year, month - 1, 1), d2];
    case 3:
      return [new Date(year, month - 3, 1), d2];
    case 4:
      return [subMonths(d, 6), d2];
    case 5:
      return [new Date(year, 0, 1), d];
    default:
      return [d, d];
  }
};
class LoginAuditTrailState extends React.Component<
  IUserLoginAuditStateProps &
    IUserDetailReportStateProps &
    ISelectDepartmentProps,
  any
> {
  public readonly state = {
    DepartmentId: 0,
    count: 0,
    count1: 0,
    dropDownOpen: false,
    emptyRows: 0,
    emptyRows2: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    FromDate: "",
    page: 0,
    page2: 0,
    dialog: false,
    rowsPerPage: 5,
    rowsPerPage2: 5,
    selectDepartmentName: "",
    searchInput: "",
    searchInput2: "",
    selectDepartmentArrayValues: [],
    ToDate: "",
    TypeOfFilter: 0,
    userDetailReportValues: [],
    userLoginAuditValues: [],
    Date: "",
    date: new Date()
  };
  constructor(
    props: IUserLoginAuditStateProps &
      IUserDetailReportStateProps &
      ISelectDepartmentProps
  ) {
    super(props);
  }
  public componentWillMount() {
    getSelectDepartmentValues()
      .then(res => {
        this.setState({
          ...this.state,
          selectDepartmentArrayValues: res.departmentMasterViewModel
        });
      })
      .catch(err => err);
  }
  // for table page change
  public handleChangePage = (event: any, p: number) => {
    this.setState({ ...this.state, page: p });
  };
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };
  public handleChangePage2 = (event: any, p: number) => {
    this.setState({ ...this.state, page2: p });
  };
  // for rows per page change
  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };
  public handleChangeRowsPerPage2 = (event: any) => {
    this.setState({ ...this.state, rowsPerPage2: event.target.value });
  };
  // function calls for api
  public onHandleGenerateReport = (values: ILoginAuditTrailStateValues) => {
    if (values.TypeOfFilter === 6) {
      this.setState({
        DepartmentId: values.DepartmentId,
        FromDate: values.FromDate,
        ToDate: values.ToDate,
        TypeOfFilter: values.TypeOfFilter
      });
    } else {
      const dates = DateRange(values.TypeOfFilter);
      this.setState({
        DepartmentId: values.DepartmentId,
        FromDate: moment(dates[0]).format("DD/MM/YYYY"),
        ToDate: moment(dates[1]).format("DD/MM/YYYY"),
        TypeOfFilter: values.TypeOfFilter
      });
    }
    if (values.DepartmentId !== 0 && values.TypeOfFilter !== 0) {
      getLoginAuditTrailDetails(
        this.state.DepartmentId,
        this.state.FromDate,
        this.state.ToDate
      )
        .then(res => {
          this.setState({
            ...this.state,
            count: res.jsonData.data.length,
            searchInput: "",
            userLoginAuditValues: res.jsonData.data
          });
        })
        .catch(err => err);
      getUserWiseDetails(
        this.state.DepartmentId,
        this.state.FromDate,
        this.state.ToDate
      )
        .then(res => {
          this.setState({
            ...this.state,
            count1: res.jsonData.data.length,
            searchInput: "",
            userDetailReportValues: res.jsonData.data
          });
        })
        .catch(err => err);
    } else {
      this.setState({ dialog: true });
    }
  };
  public fromDateIncludes = (searchInput: string, fromDate?: string) => {
    if (fromDate) {
      return moment(fromDate)
        .format("DD/MM/YYYY")
        .includes(searchInput);
    } else {
      return false;
    }
  };
  public toDateIncludes = (searchInput: string, toDate?: string) => {
    if (toDate) {
      return moment(toDate)
        .format("DD/MM/YYYY")
        .includes(searchInput);
    } else {
      return false;
    }
  };
  public activityPeriodIncludes = (
    searchInput: string,
    activityPeriod?: string
  ) => {
    if (activityPeriod) {
      return activityPeriod.includes(searchInput);
    } else {
      return false;
    }
  };
  public logoutDateIncludes = (searchInput: string, logoutDate?: string) => {
    if (logoutDate) {
      return moment(logoutDate)
        .format("DD/MM/YYYY")
        .includes(searchInput);
    } else {
      return false;
    }
  };
  public loginDateIncludes = (searchInput: string, loginDate?: string) => {
    if (loginDate) {
      return moment(loginDate)
        .format("DD/MM/YYYY")
        .includes(searchInput);
    } else {
      return false;
    }
  };

  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.userLoginAuditValues.filter(
      (x: IUserLoginAuditStateValues) =>
        searchInput !== ""
          ? x.DepartmentName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            x.TotalLoginUsers.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            x.DistinctUsers.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            this.fromDateIncludes(searchInput, x.FromDate) ||
            this.toDateIncludes(searchInput, x.ToDate)
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput2: searchInput
    });
  };
  public onHandleSearch2 = (event: any) => {
    const searchInput2 = event.target.value;
    const data = this.state.userDetailReportValues.filter(
      (x: IUserDetailReportValues) =>
        searchInput2 !== ""
          ? x.UserName.toLowerCase().includes(searchInput2.toLowerCase()) ||
            this.activityPeriodIncludes(
              searchInput2.toLowerCase(),
              x.ActivityPeriod.toLowerCase()
            ) ||
            x.Activity.toLowerCase().includes(searchInput2.toLowerCase()) ||
            this.loginDateIncludes(searchInput2, x.Login) ||
            this.logoutDateIncludes(searchInput2, x.Logout) ||
            x.ClientIp.toString()
              .toLowerCase()
              .includes(searchInput2.toLowerCase()) ||
            moment(x.ActivityPerformedOn)
              .format("DD/MM/YYYY HH:MM:SS")
              .toString()
              .includes(searchInput2)
          : x
    );
    this.setState({
      ...this.state,
      count1: data.length,
      searchInput: searchInput2
    });
  };
  public render() {
    return (
      <div className="innerpage-container">
        <div>
          <div className="inner-header-titile">
            <img src="/images/login-audit-icon.png" />
            <h2>Login Audit Trail Report</h2>
          </div>
          <LoginAuditTrailForm
            //  onGenerateReport={this.onHandleGenerateReport}
            onHandleGenerateReport={this.onHandleGenerateReport}
            DepartmentId={this.state.DepartmentId}
            TypeOfFilter={this.state.TypeOfFilter}
            selectDepartmentName={this.state.selectDepartmentName}
            selectDepartmentArrayValues={this.state.selectDepartmentArrayValues}
            FromDate={this.state.FromDate.toString()}
            ToDate={this.state.ToDate.toString()}
          />
          {this.state.DepartmentId === 0 || this.state.TypeOfFilter === 0 ? (
            <div />
          ) : (
            <div className="reports-card">
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h4"
                    className="grap-heading"
                  >
                    <img src="/images/table-icon.png" />
                    Login Audit Trails Report
                  </Typography>
                </CardContent>
                <LoginAuditTrailTableForm
                  userLoginAuditValues={this.state.userLoginAuditValues}
                  page2={this.state.page2}
                  rowsPerPage2={this.state.rowsPerPage2}
                  count={this.state.count}
                  searchInput2={this.state.searchInput2}
                  onHandleSearch={this.onHandleSearch}
                  onHandlePageChange={this.handleChangePage2}
                  onHandleChangeRowsPerPage={this.handleChangeRowsPerPage2}
                />
              </Card>
              <br />
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h4"
                    className="grap-heading"
                  >
                    <img src="/images/user.png" />
                    User Wise Detailed Report
                  </Typography>
                </CardContent>
                <UserDetailReportTableForm
                  userDetailReportValues={this.state.userDetailReportValues}
                  page={this.state.page}
                  rowsPerPage={this.state.rowsPerPage}
                  count1={this.state.count1}
                  searchInput={this.state.searchInput}
                  onHandleSearch={this.onHandleSearch2}
                  onHandlePageChange={this.handleChangePage}
                  onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </Card>
            </div>
          )}
        </div>
        {
          <Dialog
            open={this.state.dialog}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Please select all the fields
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handlePopUpClose()}
                >
                  OK
                </Button>
              </div>
            </div>
          </Dialog>
        }
      </div>
    );
  }
}
export default LoginAuditTrailState;
