// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import * as moment from "moment";

// import Typography from "@material-ui/core/Typography";
import * as React from "react";

import {
  Button,
  Card,
  CardContent,
  // Dialog,
  // DialogTitle,
  Dialog,
  DialogTitle,
  Typography
} from "@material-ui/core";
import ChangeUserRolePopUp from "src/UserManagement/ChangeUserRolePopUp";
// import ChangeUserRolePopUp from "src/UserManagement/ChangeUserRolePopUp";
import {
  getChangeUserGridList,
  getRolesList,
  getUpdateRoles
} from "../Api_Integration/ChangeUserRoleService";
import { remove } from "../DefaultLayout/HomePage";
import ChangeUserRoleForm from "../UserManagement/ChangeUserRole";
import ChangeUserRoleTableForm from "../UserManagement/changeUserRoleTable";

// import { getThemeCitywiseData } from "../Api_Integration/ThemeCityReportService";
export interface IRoleReportWiseProps {
  onSubmit(evt: any): void;
}
export interface IRoleValues {
  readonly RoleId: number;
  readonly RoleName: string;
}
export interface ISelectRoleProps {
  readonly selectRoleList: ReadonlyArray<IRoleValues>;
  handleClick(evt: any): void;
}
export interface IChangeRoleStateValues {
  readonly id: number;
  readonly FirstName: string;
  readonly MiddleName: string;
  readonly UserName: string;
  readonly Email: string;
  readonly Role: string;
  selectRoleList: ReadonlyArray<IRoleValues>;
  RoleId: number;
  UserId: number;
  handleDropDownClick(evt: any): void;
}

export interface IChangeUserRolePopUpProps {
  dropDownArraySave: ReadonlyArray<number>;
  selected: ReadonlyArray<IChangeRoleStateValues>;
  handleUpdateRoles(): void;
  onHandleClose(): void;
}

export interface IChangeUserRoleStateProps {
  readonly selected: ReadonlyArray<string>;
  readonly changeRoleValues: ReadonlyArray<IChangeRoleStateValues>;
  readonly selectAllRoleList: ReadonlyArray<IRoleValues>;
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

export const indexOfString = (value: any, arr: ReadonlyArray<any>) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].includes(value)) {
      return i;
    }
  }
  return -1;
};

class ChangeUserRoleState extends React.Component<
  ISelectRoleProps & IRoleReportWiseProps & IChangeUserRoleStateProps & any
> {
  public readonly state = {
    // tslint:disable-next-line:object-literal-sort-keys
    RoleId: 0,
    RoleName: "",

    selectAllRoleList: [],
    selectRoleList: [],
    // tslint:disable-next-line:object-literal-sort-keys
    changeRoleValues: [],
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

    selectDepartmentName: "",
    searchInput: "",
    selected: [],
    ToDate: "",
    TypeOfFilter: 0,
    dialogOpen: false,
    Date: "",
    count: 0,
    updateRoles: []
  };
  constructor(
    props: ISelectRoleProps &
      IRoleReportWiseProps &
      IChangeUserRoleStateProps &
      any
  ) {
    super(props);
  }

  public componentWillMount() {
    getChangeUserGridList(this.state.RoleId).then(res => {
      this.setState({
        ...this.state,
        changeRoleValues: res.aaData.map((e: any, i: number) => ({
          ...e,
          id: i,
          searchInput: ""
        })),
        count: res.aaData.length
      });
    });
    getRolesList()
      .then(res => {
        this.setState({
          ...this.state,
          selectRoleList: res.rolelist.filter(
            (x: IRoleValues) => x.RoleName !== null && x.RoleName !== undefined
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

  public handleClick = (event: any) => {
    this.setState({
      ...this.state,
      RoleId: event.target.value
    });
    getChangeUserGridList(event.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          changeRoleValues: res.aaData.map(
            (e: IChangeRoleStateValues, i: number) => ({
              ...e,
              id: i,
              searchInput: ""
            })
          ),
          count: res.aaData.length
        });
      })
      .catch(err => err);
  };
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.changeRoleValues.filter(
      (x: IChangeRoleStateValues) =>
        searchInput !== ""
          ? x.FirstName.includes(searchInput) ||
            this.middleNameIncludes(searchInput, x.MiddleName) ||
            x.UserName.includes(searchInput) ||
            x.Email.toLowerCase().includes(searchInput.toLowerCase())
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
        rowCount: this.state.changeRoleValues.length,
        selected: this.state.changeRoleValues.map(
          (n: IChangeRoleStateValues) => n.UserName
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
        selected: remove(
          indexOfString(id, this.state.selected),
          this.state.selected
        )
      });
    }
  };

  public handleUpdateRoles = () => {
    // const getSelectedRole = (
    //   x: string,
    //   arr: ReadonlyArray<IChangeRoleStateValues>
    // ) => {
    //   return arr
    //     .map((y: IChangeRoleStateValues) =>
    //       y.UserName === x ? { RoleId: y.RoleId } : false
    //     )
    //     .filter((y: any) => y !== false);
    // };
    // const selectedUserRoles = this.state.selected.map(x =>
    //   getSelectedRole(x, this.state.changeRoleValues)
    // );

    const selectedUserRoles1 = this.state.changeRoleValues
      .filter((x: IChangeRoleStateValues) =>
        this.state.selected.find((y: string) => y === x.UserName)
      )
      .map((x: any) => x.RoleId + ":" + x.UserId);
    getUpdateRoles(selectedUserRoles1)
      .then(res => {
        this.setState({ ...this.state, updateRoles: res, dialogOpen: false });
      })
      .then(() => {
        this.props.history.push("/page/dashboard");
      });
  };
  public handleOpenClick = (event: any) => {
    this.setState({ ...this.state, dialogOpen: true });
  };
  public onHandleClose = () => {
    this.setState({ ...this.state, dialogOpen: false });
  };
  public handleDropDownClick = (roleId: string, id: number) => {
    const changeRoleValues = this.state.changeRoleValues
      .filter((it: any) => it.id === id)
      .map((x: any) => ({
        ...x,
        RoleId: roleId
      }));
    const roles = [
      ...this.state.changeRoleValues.slice(0, id),
      ...changeRoleValues,
      ...this.state.changeRoleValues.slice(
        id + 1,
        this.state.changeRoleValues.length
      )
    ];
    this.setState({
      ...this.state,
      RoleId: roleId,
      changeRoleValues: roles,
      dropDownArraySave: [...this.state.dropDownArraySave, roleId]
    });
  };
  public onSubmit = (evt: any) => {
    // tslint:disable-next-line:no-console
    console.log(evt);
  };
  public middleNameIncludes = (searchInput: string, middleName?: string) => {
    if (middleName) {
      return middleName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return false;
    }
  };
  public render() {
    return (
      <div className="innerpage-container">
        <div>
          <div className="inner-header-titile">
            <h2>Change User Role </h2>
          </div>
          <ChangeUserRoleForm
            selectRoleList={this.state.selectRoleList}
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
            <ChangeUserRoleTableForm
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              count={this.state.count}
              searchInput={this.state.searchInput}
              onHandlePageChange={this.handleChangePage}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              changeRoleValues={this.state.changeRoleValues}
              onHandleSearch={this.onHandleSearch}
              rowCount={this.state.rowCount}
              numSelected={this.state.numSelected}
              selected={this.state.selected}
              handleSelectAllClick={this.handleSelectAllClick}
              handleSelect={this.handleSelect}
              handleDropDownClick={this.handleDropDownClick}
              selectAllRoleList={this.state.selectRoleList}
            />
          </Card>
        </div>
        <div className="title-btn">
          <Button className="update-btn" onClick={this.handleOpenClick}>
            Update Roles
          </Button>
        </div>
        {
          <Dialog
            open={this.state.dialogOpen}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              User Role Changed Successfully
            </DialogTitle>
            <div id="simple-dialog-title">
              <ChangeUserRolePopUp
                dropDownArraySave={this.state.dropDownArraySave}
                onHandleClose={this.onHandleClose}
                selected={this.state.selected}
                handleUpdateRoles={this.handleUpdateRoles}
              />
            </div>
          </Dialog>
        }
      </div>
    );
  }
}
export default ChangeUserRoleState;
