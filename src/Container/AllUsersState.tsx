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
  getActionListDetails,
  getAllGridDetails,
  getAllRolesListDetails,
  getUpdateStatus
} from "src/Api_Integration/AllUsersService";
import { remove } from "../DefaultLayout/HomePage";

import AllUserRoleForm from "src/UserManagement/AllUsers";
import AllUserPopUp from "src/UserManagement/AllUsersPopUp";
import AllUserRoleTableForm from "src/UserManagement/AllUsersTable";

// import { getThemeCitywiseData } from "../Api_Integration/ThemeCityReportService";
export interface IAllRoleReportWiseProps {
  onSubmit(evt: any): void;
}
export interface IAllUserPopUpProps {
  dropDownArraySave: ReadonlyArray<number>;
  selected: ReadonlyArray<string>;
  onHandleClose(): void;
  handleUpdateStatus(): void;
}

export interface IAllRoleValues {
  readonly RoleId: number;
  readonly RoleName: string;
}
export interface ISelectAllRoleProps {
  readonly selectAllRoleList: ReadonlyArray<IAllRoleValues>;
  handleClick(evt: any): void;
}
export interface IAllActionValues {
  readonly ActionId: number;
  readonly ActionName: string;
}
export interface ISelectAllActionProps {
  readonly selectActionRoleList: ReadonlyArray<IAllActionValues>;
  handleClick(evt: any): void;
}
export interface IAllUserRoleStateValues {
  readonly id: number;
  readonly FirstName: string;
  readonly MiddleName?: string;
  readonly UserName: string;
  readonly Email: string;
  readonly Role: string;
  readonly selectAllRoleList: ReadonlyArray<IAllRoleValues>;
  readonly selectActionRoleList: any;
  readonly RoleId: number;
  readonly IsActive: string;
  readonly ActionId: number;
  readonly ActionName: string;

  handleDropDownClick(roleId: string, id: number): void;
}

export interface IAllUserRoleStateProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeRoleValues: ReadonlyArray<IAllUserRoleStateValues>;
  readonly selectActionRoleList: ReadonlyArray<IAllActionValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly rowCount: number;
  readonly numSelected: number;
  onHandleSearch(event: any): void;
  handleSelectAllClick(evt: any): void;
  handleSelect(evt: any, value: string): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
  handleDropDownClick(roleId: string, id: number): void;
}

const indexOfString = (value: any, arr: ReadonlyArray<any>) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].includes(value)) {
      return i;
    }
  }
  return -1;
};

class AllUsersRoleState extends React.Component<
  ISelectAllRoleProps &
    IAllRoleReportWiseProps &
    IAllUserRoleStateProps &
    ISelectAllActionProps &
    any
> {
  public readonly state = {
    // tslint:disable-next-line:object-literal-sort-keys
    ActionId: 0,
    ActionName: "",
    RoleId: 0,
    RoleName: "",
    selectAllRoleList: [],
    updateStatus: [],
    // tslint:disable-next-line:object-literal-sort-keys
    AllUserRoleValues: [],
    selectActionRoleList: [],
    dropDownArraySave: [],
    // tslint:disable-next-line:object-literal-sort-keys
    dropDownOpen: false,
    emptyRows: 0,
    emptyRows2: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    FromDate: "",
    page: 0,
    rowCount: 0,
    numSelected: 0,
    rowsPerPage: 5,
    count: 0,
    dialogOpen: false,
    selectDepartmentName: "",
    searchInput: "",
    selected: [],
    ToDate: "",
    TypeOfFilter: 0,

    Date: ""
  };
  constructor(
    props: ISelectAllRoleProps &
      IAllRoleReportWiseProps &
      IAllUserRoleStateProps &
      ISelectAllActionProps
  ) {
    super(props);
  }

  public componentWillMount() {
    getAllGridDetails(this.state.RoleId).then(res => {
      this.setState({
        ...this.state,
        AllUserRoleValues: res.aaData.map((e: any, i: number) => ({
          ...e,
          id: i
        })),
        count: res.aaData.length
      });
    });
    getAllRolesListDetails()
      .then(res => {
        this.setState({
          ...this.state,
          selectAllRoleList: res.rolelist.filter(
            (x: IAllRoleValues) =>
              x.RoleName !== null && x.RoleName !== undefined
          )
        });
      })
      .catch(err => err);
    getActionListDetails()
      .then(res => {
        this.setState({
          ...this.state,
          selectActionRoleList: res.actionlist
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

  public handleClick = (event: any) => {
    this.setState({
      ...this.state,
      RoleId: event.target.value
    });

    getAllGridDetails(event.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          AllUserRoleValues: res.aaData.map((e: any, i: number) => ({
            ...e,
            id: i,
            searchInput: ""
          })),
          count: res.aaData.length
        });
      })
      .catch(err => err);
  };
  public handleDropDownClick = (roleId: string, id: number) => {
    const AllUserRoleValues = this.state.AllUserRoleValues.filter(
      (it: any) => it.id === id
    ).map((x: any) => ({
      ...x,
      RoleId: roleId
    }));

    const roles = [
      ...this.state.AllUserRoleValues.slice(0, id),
      ...AllUserRoleValues,
      ...this.state.AllUserRoleValues.slice(
        id + 1,
        this.state.AllUserRoleValues.length
      )
    ];

    this.setState({
      ...this.state,
      ActionId: roleId,
      AllUserRoleValues: roles,
      dropDownArraySave: [...this.state.dropDownArraySave, roleId]
    });
  };
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.AllUserRoleValues.filter(
      (x: IAllUserRoleStateValues) =>
        searchInput !== ""
          ? x.FirstName.includes(searchInput) ||
            this.middleNameIncludes(searchInput, x.MiddleName) ||
            x.UserName.includes(searchInput) ||
            x.IsActive.toString().includes(this.getActivestate(searchInput))
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
        rowCount: this.state.AllUserRoleValues.length,
        selected: this.state.AllUserRoleValues.map((n: any) => n.UserName)
      });
      return;
    }
    this.setState({ ...this.state, selected: [], rowCount: 0 });
  };
  public getActivestate = (state: string) => {
    switch (state) {
      case "Active":
        return "true";
      case "InActive":
        return "false";
      default:
        return state;
    }
  };
  public middleNameIncludes = (searchInput: string, middleName?: string) => {
    if (middleName) {
      return middleName.includes(searchInput);
    } else {
      return false;
    }
  };
  public handleSelect = (event: any, id: string) => {
    if (event.target.checked && this.state.selected.map(x => x !== id)) {
      this.setState({ ...this.state, selected: [...this.state.selected, id] });
    } else {
      this.setState({
        ...this.state,
        selected: remove(
          indexOfString(id, this.state.selected),
          this.state.selected
        )
      });
    }
  };
  public calLogin = () => {
    window.location.href = "http://192.168.100.18:3000/page/dashboard";
  };
  public handleUpdateStatus = () => {
    getUpdateStatus(this.state.selected)
      .then(res => {
        this.setState({ ...this.state, updateStatus: res, dialogOpen: false });
      })
      .then(() => {
        this.props.history.push("/page/userManagement/allUsers");
      });
  };
  public handleOpenClick = (event: any) => {
    this.setState({ ...this.state, dialogOpen: true });
  };
  public onHandleClose = () => {
    this.setState({ ...this.state, dialogOpen: false });
  };
  public onSubmit = (evt: any) =>
    // tslint:disable-next-line:no-console
    console.log(evt);

  public render() {
    return (
      <div className="innerpage-container">
        <div>
          <div className="inner-header-titile">
            <h2>All Users</h2>
          </div>
          <AllUserRoleForm
            selectAllRoleList={this.state.selectAllRoleList}
            selectActionRoleList={this.state.selectActionRoleList}
            onSubmit={this.onSubmit}
            RoleId={this.state.RoleId}
            RoleName={this.state.RoleName}
            handleClick={this.handleClick}
            ActionId={this.state.ActionId}
            ActionName={this.state.ActionName}
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
            <AllUserRoleTableForm
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              count={this.state.count}
              searchInput={this.state.searchInput}
              onHandlePageChange={this.handleChangePage}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              changeRoleValues={this.state.AllUserRoleValues}
              onHandleSearch={this.onHandleSearch}
              rowCount={this.state.rowCount}
              numSelected={this.state.numSelected}
              selected={this.state.selected}
              handleSelectAllClick={this.handleSelectAllClick}
              handleSelect={this.handleSelect}
              selectActionRoleList={this.state.selectActionRoleList}
              handleDropDownClick={this.handleDropDownClick}
            />
          </Card>
        </div>
        <div className="title-btn">
          <Button className="update-btn" onClick={this.handleOpenClick}>
            Update Status
          </Button>
        </div>
        {
          <Dialog
            open={this.state.dialogOpen}
            // onClose={props.onHandleClose}
          >
            <div>
              <AllUserPopUp
                dropDownArraySave={this.state.dropDownArraySave}
                onHandleClose={this.onHandleClose}
                selected={this.state.selected}
                handleUpdateStatus={this.handleUpdateStatus}
              />
            </div>
          </Dialog>
        }
      </div>
    );
  }
}

export default AllUsersRoleState;
