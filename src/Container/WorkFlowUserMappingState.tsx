// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Dialog, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import { loader } from "src/DefaultLayout/HomePage";
import { getWorkFlowActiviyValues } from "../Api_Integration/WorkFlowActivityService";
import {
  getAllocationType,
  postAgrementType,
  postAllocationTypeById
} from "../Api_Integration/WorkFlowService";
import {
  getGridDataForWorkFlowUser,
  getRoleListForWorkFlowUser,
  getUserList,
  getUserListForWorkFlowUser,
  postSubmitWorkFlowUserValues
} from "../Api_Integration/WorkFlowUserMappingServices";
import WorkFlowUserMappingForm from "../WorkFlowConfiguration/WorkFlowUserMappingForm";
import WorkFlowUserMapTable from "../WorkFlowConfiguration/WorkFlowUserTable";

export interface IAllocationValues {
  readonly AllocationId: number;
  readonly AllocationName: string;
}

export interface IAllocationToValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationName: string;
  readonly AllocationSubTypeName: null;
  readonly CreatedBy: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
}

export interface IActivityValues {
  readonly WorkFlowActivityName: string;
  readonly CreatedOn: null;
  readonly CreatedBy: number;
  readonly ModifiedOn: null;
  readonly ModifiedBy: number;
  readonly WorkFlowActivityId: number;
  readonly IsActive: string;
  readonly ReturnCode: number;
  readonly UserName: null;
  readonly AllocateTo: null;
  readonly AllocationType: null;
  readonly AgreementType: null;
  readonly CurrentActivityId: number;
  readonly ActivitityOrderId: number;
}

export interface IRoleWorkFlowUserValues {
  readonly RoleName: string;
  readonly CreatedOn: string;
  readonly CreatedBy: number;
  readonly ModifiedOn: string;
  readonly ModifiedBy: number;
  readonly RoleId: number;
  readonly Email: null;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
}

export interface IUserValues {
  readonly UserId: number;
  readonly FullName: null;
  readonly UserName: string;
}

export interface IUserWorkFlowValues {
  // readonly Id: number;
  // readonly RoleId: number;
  // readonly UserName: string;
  // readonly FirstName: string;
  // readonly MiddleName: string;
  // readonly Email: string;
  // readonly Password: null;
  // readonly EncryptedPassword: null;
  // readonly DepartmentName: null;
  // readonly SelectedUsers: null;
  // readonly UserId: number;
  // readonly ActionId: number;
  // readonly Guid: null;
  // readonly CreatedBy: number;
  // readonly RegisteredDate: null;
  // readonly ReturnCode: number;
  // readonly IsActive: boolean;
  // readonly ChnageTo: number;
  // readonly UserIdsList: null;
  // readonly WorkFlowUsesList: null;
  // readonly CurrentRoleName: null;
  // readonly PreviousRoleName: null;
  // readonly UpdatedOn: null;
  // readonly LastName: null;
  readonly RoleId: number;
  readonly RoleName: string;
  readonly UList: ReadonlyArray<IUserValues>;
}
export interface IWorkFlowUserStateValues {
  readonly LandAllocatedToId: number;
  readonly allocationTypeId: number;
  readonly AgreementId: number;
  readonly selectLandAllocationTypeValues: ReadonlyArray<IAllocationToValues>;
  readonly agreementTypeValues: ReadonlyArray<IAgremmentTypeValues>;
  readonly ActivityList: ReadonlyArray<IActivityValues>;
  readonly WorkFlowActivityId: number;
  readonly WorkFlowActivityName: string;
  readonly AllocationName: string;
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationType: number;
  handleAllocationChange(e: any): void;
  handleAgreementClick(e: any): void;
  handleLandAllocationClick(e: any): void;
  onHandleSubmit(event: any): void;
}
export interface IAllocationTypeValues {
  readonly selectAllocationTypeValues: ReadonlyArray<IAllocationValues>;
}

export interface IAgremmentTypeValues {
  readonly AgreementId: number;
  AgreementName: string;
  AllocationTypeId: number;
  AllocationSubTypeId: number;
  CreatedBy: number;
  IsActive: boolean;
  ReturnCode: number;
  AllocateToName: null;
  AllocationTypeName: null;
  TypeOfAllocationId: number;
  TypeOfAllocationName: null;
}

export interface IWorkFlowUserGridDataValues {
  readonly id: number;
  readonly ApplicationId: number;
  readonly AllocateToName: string;
  readonly SubApplicationId: number;
  readonly AllocationTypeName: string;
  readonly AgreementTypeName: string;
  readonly ActivityId: number;
  readonly ActivityList: string;
  readonly SelectedActivityList: null;
  readonly UserId: number;
  readonly SelectedKeys: null;
  readonly CreatedOn: string;
  readonly CreatedBy: number;
  readonly AllocationTypeId: number;
  readonly AllocationSubTypeId: number;
  readonly AgreementTypeId: number;
  readonly UserName: null;
  readonly OrderNo: number;
  readonly SlaDays: number;
  readonly RoleId: number;
  readonly WorkFlowActivityUserDetails: null;
  readonly userIdOptions: ReadonlyArray<any>;
}

export interface IWorkFlowUserMapGridStateProps {
  readonly workFlowUserMapList: ReadonlyArray<IWorkFlowUserGridDataValues>;
  readonly selectRoleValues: ReadonlyArray<IRoleWorkFlowUserValues>;
  readonly selectUserValues: ReadonlyArray<IUserWorkFlowValues>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
  handleRoleClick(
    roleId: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ): void;
  handleUserClick(userId: string, roleid: number, id: number): void;
}

export interface IWorkFlowUserGridValues {
  readonly ActivityId: number;
  readonly RoleId: number;
  readonly UserId: number;
}
class WorkFlowUserMappingState extends React.Component<
  IWorkFlowUserStateValues & IWorkFlowUserGridDataValues & any
> {
  public state = {
    LandAllocatedToId: 0,
    WorkFlowUserList: [],
    // tslint:disable-next-line:object-literal-sort-keys
    LandAllocationName: "",
    WorkFlowActivityId: 0,
    WorkFlowActivityName: "",
    // tslint:disable-next-line:object-literal-sort-keys
    AgreementId: 0,
    agreementTypeValues: [],
    allocationTypeId: 0,
    applicationTableValues: [],
    // tslint:disable-next-line:object-literal-sort-keys
    AllocationId: 0,
    AllocationSubTypeId: 0,
    AllocationName: "",
    selectLandAllocationTypeValues: [],
    selectAllocationTypeValues: [],
    LandAllocationId: 0,
    LandAllocationTypeName: "",
    ActivityList: [],
    WorkFlowUserGridValues: [],
    page: 0,
    rowsPerPage: 5,
    searchInput: "",
    roleList: [],
    userList: [],
    RoleId: 0,
    UserId: 0,
    RoleName: "",
    UserName: "",
    userListChange: [],
    roleIdList: [],
    UserPopUp: false,
    selectPopUp: false
  };

  constructor(props: IWorkFlowUserStateValues & IWorkFlowUserGridDataValues) {
    super(props);
  }

  public async componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      const res2 = await getAllocationType();
      const res1 = await getWorkFlowActiviyValues();
      const res3 = await getRoleListForWorkFlowUser();
      const res4 = await getUserList();
      // const res4 = await getGridDataForWorkFlowUser()
      // const res5 = await getUserListForWorkFlowUser(res4);

      // const res2 = await postActivitiesList();
      this.setState({
        ...this.state,
        // tslint:disable-next-line:object-literal-sort-keys
        // ActivityList: res2.documentsList,
        WorkFlowUserList: res1.jsonData.data,
        roleIdList: res3.rolelist.map((x: any) => x.RoleId),
        roleList: res3.rolelist,
        userList: res4.usersListViewModelLst,
        // tslint:disable-next-line:object-literal-sort-keys
        selectLandAllocationTypeValues: res2.jsonData.AllocaitonTypeslist
      });
      if (loader != null) {
        loader.style.display = "none";
      }
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
      if (loader != null) {
        loader.style.display = "none";
      }
    }

    // for (const i of this.state.roleIdList) {
    //   getUserListForWorkFlowUser(i)
    //     .then(res => {
    //       // tslint:disable-next-line:no-console
    //       console.log(res.aaData);
    //       this.setState({
    //         ...this.state,
    //         userList: [...this.state.userListChange, res.aaData]
    //       });
    //     })
    //     .catch(err => {
    //       // tslint:disable-next-line:no-console
    //       console.log(err);
    //     });
    // }
  }

  public handleLandAllocationClick = (e: { target: { value: string } }) => {
    postAllocationTypeById(parseInt(e.target.value, 10))
      .then(res => {
        this.setState({
          ...this.state,
          LandAllocatedToId: parseInt(e.target.value, 10),
          selectAllocationTypeValues: res.objAllocationTypesList
        });
      })
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err)
      );
  };

  public handleAllocationChange = (event: any) => {
    postAgrementType(this.state.LandAllocatedToId, event.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          AllocationId: event.target.value,
          agreementTypeValues: res.objAgreementTypesList
        });
      })
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err)
      );
  };

  public formatTableData = (data: any) => {
    // const arr: any = {};
    return [
      ...data.map((record: any, id: number) => {
        try {
          const arr = getUserListForWorkFlowUser(record.RoleId).then(
            res => res.aaData
          );
          // tslint:disable-next-line:no-console
          console.log(arr.then((res: any) => res));
          return { ...record, userIdOptions: arr.then((r: any) => r), id };
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.log(err);
        }
      })
    ];
  };

  public handleAgreementClick = (event: any) => {
    // tslint:disable-next-line:no-console
    getGridDataForWorkFlowUser(
      this.state.LandAllocatedToId,
      this.state.AllocationId,
      event.target.value
    )
      .then(res => {
        // const formatedData = await this.formatTableData(res.data);
        // const resData = await formatedData.then((r: any) => r);
        this.setState({
          ...this.state,
          AgreementId: event.target.value,
          // WorkFlowUserGridValues: this.formatTableData(res.data)
          WorkFlowUserGridValues: res.jsonData.data.map(
            (e: any, i: number) => ({
              ...e,
              id: i
            })
          )
          // userListChange: res.data.map((x: any) => x.RoleId)
        });
        // tslint:disable-next-line:no-console
        //  console.log(this.formatTableData(res.data));
        // tslint:disable-next-line:no-console
        // console.log(resData);
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public handleRoleClick = (event: any, id: number) => {
    const RoleValues = this.state.WorkFlowUserGridValues.filter(
      (it: any) => it.id === id
    ).map((x: any) => ({
      ...x,
      RoleId: event.target.value
    }));

    const roleValues = [
      ...this.state.WorkFlowUserGridValues.slice(0, id),
      ...RoleValues,
      ...this.state.WorkFlowUserGridValues.slice(
        id + 1,
        this.state.WorkFlowUserGridValues.length
      )
    ];

    this.setState({
      ...this.state,
      RoleId: event.target.value,
      WorkFlowUserGridValues: roleValues
    });
  };

  public handleUserClick = (userId: string, roleid: number, id: number) => {
    const UserValues = this.state.WorkFlowUserGridValues.filter(
      (it: any) => it.RoleId === roleid
    ).map((x: any) => ({
      ...x,
      UserId: userId !== null || undefined ? userId : 0
    }));

    const userValues = [
      ...this.state.WorkFlowUserGridValues.slice(0, id),
      ...UserValues,
      ...this.state.WorkFlowUserGridValues.slice(
        id + 1,
        this.state.WorkFlowUserGridValues.length
      )
    ];

    this.setState({
      ...this.state,
      RoleId: roleid,
      UserId: userId,
      WorkFlowUserGridValues: userValues
    });
  };
  public onHandleSubmit = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event);
  };

  public handleWorkUserTableSubmit = () => {
    const workflowuserActivity = this.state.WorkFlowUserGridValues.map(
      (x: IWorkFlowUserGridDataValues) => {
        return { ActivityId: x.ActivityId, RoleId: x.RoleId, UserId: x.UserId };
      }
    );
    if (
      workflowuserActivity.map(x => x.RoleId !== 0 && x.UserId !== 0) &&
      this.state.AllocationId !== 0 &&
      this.state.LandAllocatedToId !== 0 &&
      this.state.AgreementId !== 0
    ) {
      postSubmitWorkFlowUserValues(
        this.state.LandAllocatedToId,
        this.state.AllocationId,
        this.state.AgreementId,
        workflowuserActivity
      )
        .then(res => {
          this.setState({ ...this.state, UserPopUp: true });
          this.props.history.push("/page/dashboard");
        })
        .catch(err => err);
    } else {
      this.setState({ ...this.state, selectPopUp: true });
    }
  };

  public onHandleSearch = (event: any) => {
    this.setState({
      searchInput: event.target.value
    });
  };

  // for page change
  public readonly onHandlePageChange = (event: any, page: number) => {
    this.setState({ ...this.state, page });
  };

  // for rows change per page
  public readonly onHandleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };

  public handleUserPopUpClose = () => {
    this.setState({ ...this.state, UserPopUp: false });
  };

  public handleSelectPopUpClose = () => {
    this.setState({ ...this.state, selectPopUp: false });
  };
  public render() {
    return (
      <div className="innerpage-container">
        <div className="inner-header-titile">
          {/* <img src="/images/login-audit-icon.png" /> */}
          <h2>WorkFlow Activity User Mapping</h2>
        </div>
        <WorkFlowUserMappingForm
          WorkFlowActivityName={this.state.WorkFlowActivityName}
          WorkFlowActivityId={this.state.WorkFlowActivityId}
          allocationTypeId={this.state.allocationTypeId}
          AgreementId={this.state.AgreementId}
          AllocationName={this.state.AllocationName}
          AllocationId={this.state.AllocationId}
          AllocationSubTypeId={this.state.AllocationSubTypeId}
          AllocationType={this.state.allocationTypeId}
          LandAllocatedToId={this.state.LandAllocatedToId}
          agreementTypeValues={this.state.agreementTypeValues}
          selectAllocationTypeValues={this.state.selectAllocationTypeValues}
          handleAllocationChange={this.handleAllocationChange}
          handleLandAllocationClick={this.handleLandAllocationClick}
          onHandleSubmit={this.onHandleSubmit}
          selectLandAllocationTypeValues={
            this.state.selectLandAllocationTypeValues
          }
          ActivityList={this.state.ActivityList}
          handleAgreementClick={this.handleAgreementClick}
        />

        <div className="graph-card">
          <Card>
            <CardContent>
              <Typography
                gutterBottom={true}
                variant="headline"
                component="h4"
                className="grap-heading"
              >
                <img src="/images/table-icon.png" />
                Work Flow User Mapping
              </Typography>
            </CardContent>
            <WorkFlowUserMapTable
              handleUserClick={this.handleUserClick}
              selectUserValues={this.state.userList}
              selectRoleValues={this.state.roleList}
              workFlowUserMapList={this.state.WorkFlowUserGridValues}
              count={this.state.WorkFlowUserGridValues.length}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
              onHandlePageChange={this.onHandlePageChange}
              handleRoleClick={this.handleRoleClick}
            />
          </Card>
        </div>
        <div className="bottom-save-btn">
          <Button
            type="submit"
            className="save-btn"
            onClick={this.handleWorkUserTableSubmit}
          >
            SUBMIT
          </Button>
        </div>
        {
          <Dialog
            open={this.state.UserPopUp}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Record added successfully
              <div className="popup-bottom-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handleUserPopUpClose()}
                >
                  OK
                </Button>
              </div>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.selectPopUp}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Please fill all fields and please select roles and activities
              <div className="popup-bottom-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handleSelectPopUpClose()}
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
export default WorkFlowUserMappingState;
