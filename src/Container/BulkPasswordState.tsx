// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import * as moment from "moment";

// import Typography from "@material-ui/core/Typography";
import * as React from "react";

import {
  Button,
  Card,
  CardContent,
  Dialog,
  Typography
} from "@material-ui/core";
import {
  getChangePassword,
  getGridDetails,
  getRolesListDetails
} from "src/Api_Integration/BulkPasswordResetService";

import BulkPasswordResetForm from "src/UserManagement/BulkPassword";
import BulkPasswordPopUp from "src/UserManagement/BulkPasswordPopUp";
import BulkPasswordTableForm from "src/UserManagement/BulkPasswordTable";
import { remove } from "../DefaultLayout/HomePage";

// import { getThemeCitywiseData } from "../Api_Integration/ThemeCityReportService";
export interface ISelectRoleReportWiseProps {
  onSubmit(evt: any): void;
}
export interface IRoleNameValues {
  readonly RoleId: number;
  readonly RoleName: string;
}
export interface ISelectRoleNameProps {
  readonly selectedRoleList: ReadonlyArray<IRoleNameValues>;
  handleClick(evt: React.ChangeEvent<HTMLSelectElement>): void;
}
export interface IBulkPasswordStateValues {
  readonly selected: ReadonlyArray<string>;

  readonly UserId: number;
  readonly FirstName: string;
  //   readonly MiddleName: string;
  readonly UserName: string;
  readonly Email: string;
  readonly Role: string;
  selectedRoleList: any;
  RoleId: number;
  handleDropDownClick(evt: any): void;
}

export interface IBulkPasswordRoleStateProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeGridValues: ReadonlyArray<IBulkPasswordStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly rowCount: number;
  readonly numSelected: number;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
  handleSelectAllClick(evt: any): void;
  handleSelect(evt: any, value: string): void;

  // onSelectAllClick(evt: any): void;
}
export const indexOfString = (value: any, arr: ReadonlyArray<any>) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].includes(value)) {
      return i;
    }
  }
  return -1;
};

class BulkPasswordState extends React.Component<
  ISelectRoleNameProps &
    ISelectRoleReportWiseProps &
    IBulkPasswordRoleStateProps &
    any
> {
  public readonly state = {
    selectedIds: [],
    // tslint:disable-next-line:object-literal-sort-keys
    RoleId: 0,
    RoleName: "",
    selectedRoleList: [],
    // tslint:disable-next-line:object-literal-sort-keys
    changeGridValues: [],
    dialogOpen: false,
    // tslint:disable-next-line:object-literal-sort-keys
    dropDownOpen: false,
    emptyRows: 0,
    emptyRows2: 0,
    count: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    FromDate: "",
    page: 0,
    rowCount: 0,
    numSelected: 0,
    rowsPerPage: 5,
    changePasswordValues: [],
    selectDepartmentName: "",
    searchInput: "",

    ToDate: "",
    TypeOfFilter: 0,
    selected: [],
    newSelected: [],
    Date: ""
  };
  constructor(
    props: ISelectRoleNameProps &
      ISelectRoleReportWiseProps &
      IBulkPasswordRoleStateProps &
      any
  ) {
    super(props);
  }
  public calLogin = () => {
    window.location.href = "http://192.168.100.18:3000/page/dashboard";
  };
  public componentWillMount() {
    getGridDetails(this.state.RoleId)
      .then(res => {
        this.setState({
          ...this.state,
          changeGridValues: res.aaData,
          count: res.aaData.length,
          searchInput: ""
        });
      })
      .catch(err => err);
    getRolesListDetails()
      .then(res => {
        this.setState({
          ...this.state,
          selectedRoleList: res.rolelist.filter(
            (x: IRoleNameValues) =>
              x.RoleName !== null && x.RoleName !== undefined
          )
        });
      })
      .catch(err => err);
  }
  public handleChangePage = (event: any, p: number) => {
    this.setState({ ...this.state, page: p });
  };
  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };

  public handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ...this.state,
      RoleId: event.target.value
    });
    getGridDetails(parseInt(event.target.value, 10))
      .then(res => {
        this.setState({
          ...this.state,
          changeGridValues: res.aaData,
          count: res.aaData.length,
          searchInput: ""
        });
      })
      .catch(err => err);
  };
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.changeGridValues.filter(
      (x: IBulkPasswordStateValues) =>
        searchInput !== ""
          ? x.FirstName.includes(searchInput) ||
            x.Email.includes(searchInput) ||
            x.UserName.includes(searchInput)
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };
  public handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      this.setState({
        ...this.state,
        rowCount: this.state.changeGridValues.length,
        selected: this.state.changeGridValues.map(
          (n: IBulkPasswordStateValues) => n.UserName
        )
      });
      return;
    }
    this.setState({ ...this.state, selected: [], rowCount: 0 });
  };

  public handleSelect = (event: any, id: string) => {
    if (event.target.checked && this.state.selected.map(x => x !== id)) {
      this.setState({ ...this.state, selected: [...this.state.selected, id] });
    } else {
      this.setState({
        ...this.state,

        // tslint:disable-next-line:object-literal-sort-keys
        selected: remove(
          indexOfString(id, this.state.selected),
          this.state.selected
        )
      });
    }
  };

  public onSubmit = (evt: any) =>
    // tslint:disable-next-line:no-console
    console.log(evt);

  public handleChangePassword = () => {
    this.setState({ ...this.state, dialogOpen: false });
    setTimeout(this.calLogin, 1000);
  };
  public handleOpenClick = (event: any) => {
    
    const item: any = localStorage.getItem("userDetails");
    let user: any;
    if (item) {
      user = JSON.parse(item);
    }
    if (user! == null || user !== undefined) {
      const selectedKeys = this.state.changeGridValues
        .filter((x: IBulkPasswordStateValues) =>
          this.state.selected.find((y: string) => y === x.UserName)
        )
        .map((x: IBulkPasswordStateValues) => x.UserId);
  
      getChangePassword(selectedKeys, user.RoleId).then(res => {
        this.setState({
          ...this.state,
          changePasswordValues: res,
          dialogOpen: true
        });
      });
    }
  };
  public onHandleClose = () => {
    this.setState({ ...this.state, dialogOpen: false });
  };

  public render() {
    return (
      <div className="innerpage-container">
        <div>
          <div className="inner-header-titile">
            <h2>Bulk Password Reset </h2>
          </div>
          <BulkPasswordResetForm
            selectedRoleList={this.state.selectedRoleList}
            onSubmit={this.onSubmit}
            RoleId={this.state.RoleId}
            RoleName={this.state.RoleName}
            handleClick={this.handleClick}
          />
        </div>
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
                Users List
              </Typography>
            </CardContent>
            <BulkPasswordTableForm
              selected={this.state.selected}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              count={this.state.count}
              searchInput={this.state.searchInput}
              onHandlePageChange={this.handleChangePage}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              changeGridValues={this.state.changeGridValues}
              onHandleSearch={this.onHandleSearch}
              rowCount={this.state.rowCount}
              numSelected={this.state.numSelected}
              handleSelectAllClick={this.handleSelectAllClick}
              handleSelect={this.handleSelect}
              // onSelectAllClick={this.onSelectAllClick}
            />
          </Card>
        </div>
        <div className="title-btn">
          <Button
            className="update-btn"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={evt => this.handleOpenClick(evt)}
          >
            Change Password
          </Button>
        </div>

        {
          <Dialog
            open={this.state.dialogOpen}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <BulkPasswordPopUp
                onHandleClose={this.onHandleClose}
                selected={this.state.selected}
                handleChangePassword={this.handleChangePassword}
              />
            </div>
          </Dialog>
        }
      </div>
    );
  }
}

export default BulkPasswordState;
