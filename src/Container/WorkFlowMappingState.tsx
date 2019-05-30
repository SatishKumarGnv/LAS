// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { DialogActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import {
  addActivityInList,
  getAllocationType,
  getGridDataForWorkFlow,
  // getSelectedListGrid,
  postActivitiesList,
  postAgrementType,
  postAllocationTypeById,
  postSelectedList,
  submitWorkFlow,
  updateDurationDays
} from "../Api_Integration/WorkFlowService";
import AddActivityWorkFlowForm from "../WorkFlowConfiguration/AddWorkFlowPopUp";
import WorkFlowMappingForm from "../WorkFlowConfiguration/WorkFlowMappingForm";
import WorkFlowMapTable from "../WorkFlowConfiguration/WorkFlowMappingTable";

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

export interface ISelectedActivityValues {
  readonly Id: number;
  readonly ApplicationId: number;
  readonly AllocateToName: string;
  readonly SubApplicationId: number;
  readonly AllocationTypeName: string;
  readonly AgreementTypeName: string;
  readonly ActivityId: number;
  readonly ActivityList: string;
  readonly SelectedActivityList: null;
  readonly UserId: number;
  readonly SelectedKeys: string;
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
}
export interface IWorkFlowStateValues {
  readonly LandAllocatedToId: number;
  readonly allocationTypeId: number;
  readonly AgreementId: number;
  readonly selectLandAllocationTypeValues: ReadonlyArray<IAllocationToValues>;
  readonly agreementTypeValues: ReadonlyArray<IAgremmentTypeValues>;
  readonly ActivityList: ReadonlyArray<IActivityValues>;

  readonly selectedActivitiesList: ReadonlyArray<IActivityValues>;
  readonly WorkFlowActivityId: number;
  readonly WorkFlowActivityName: string;
  readonly AllocationName: string;
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationType: number;
  readonly Activities: ReadonlyArray<IActivityValues>;
  readonly selectedActivities: ReadonlyArray<IActivityValues>;
  handleActivityChange(event: any): void;
  handleSelectActivityChange(event: any): void;
  handleAllocationChange(e: any): void;
  handleAgreementClick(e: any): void;
  handleLandAllocationClick(e: any): void;
  onHandleSubmit(event: any): void;
  handleReset(): void;
  handleSpecificSelectClick(event: any): void;
  handleAllSelectClick(): void;
  handleAllLeftSelectClick(): void;
  handleLeftSelectClick(values: any): void;
  handleAddWorkFlowPopUp(): void;
}
export interface IAllocationTypeValues {
  readonly selectAllocationTypeValues: ReadonlyArray<IAllocationValues>;
}

export interface IValues {
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

export interface IWorkFlowGridDataValues {
  readonly Id: number;
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
}

export interface IWorkFlowMapGridStateProps {
  readonly workFlowMapList: ReadonlyArray<IWorkFlowGridDataValues>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

export interface IAddActivityProps {
  readonly newWorkFlowActivityName: string;
  onHandleAddPopUp(): void;
  onHandleAddSave(values: any): void;
  onHandleAddPopUpClose(): void;
}

export interface IEditActivityProps {
  readonly editDialogOpen: boolean;
  handleDurationPopClick(values: IWorkFlowGridDataValues): void;
  handleEditClose(): void;
  handleEditDurationChange(event: any): void;
  onHandleEditSave(
    AllocationId: number,
    AllocationSubTypeId: number,
    AgreementId: number,
    SlaDays: number,
    ActivityId: number
  ): void;
}

export interface IEditActivityValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AgreementId: number;
  readonly AllocationName: string;
  readonly AllocationSubTypeName: string;
  readonly AgreementName: string;
  readonly newSlaDays: string;
  readonly ActivityId: number;
}
class WorkFlowMappingState extends React.Component<
  IWorkFlowStateValues &
    IWorkFlowMapGridStateProps &
    IEditActivityProps &
    IEditActivityValues
> {
  public state = {
    change: false,
    newSlaDays: "0",
    // tslint:disable-next-line:object-literal-sort-keys
    ActivityId: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    LandAllocatedToId: 0,
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
    AllocationSubTypeName: "",
    selectLandAllocationTypeValues: [],
    selectAllocationTypeValues: [],
    LandAllocationId: 0,
    LandAllocationTypeName: "",
    ActivityList: [],
    selectedActivityList: [],
    WorkFlowGridValues: [],
    page: 0,
    SlaDays: 0,
    rowsPerPage: 5,
    searchInput: "",
    Activities: [],
    selectedActivities: [],
    dialogOpen: false,
    editdialogOpen: false,
    newWorkFlowActivityName: "",
    AgreementName: "",
    selectedActivitiesList: [],
    selectedActivitiesListLength: 0,
    MappingPopUp: false,
    PopUp: false,
    count: 0
  };

  constructor(
    props: IWorkFlowStateValues &
      IWorkFlowMapGridStateProps &
      IEditActivityProps &
      IEditActivityValues
  ) {
    super(props);
  }

  public async componentWillMount() {
    try {
      const res1 = await getAllocationType();
      const res2 = await postActivitiesList();

      this.setState({
        ...this.state,
        // tslint:disable-next-line:object-literal-sort-keys
        ActivityList: res2.documentsList.filter(
          (obj: IActivityValues) =>
            obj.WorkFlowActivityName !== null &&
            obj.WorkFlowActivityName !== undefined
        ),
        // tslint:disable-next-line:object-literal-sort-keys
        // Activities: res2.map((x: IActivityValues) => x.WorkFlowActivityName),
        selectLandAllocationTypeValues: res1.jsonData.AllocaitonTypeslist
      });
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
    }
  }

  public handleLandAllocationClick = (e: { target: { value: string } }) => {
    postAllocationTypeById(parseInt(e.target.value, 10))
      .then(res => {
        this.setState({
          ...this.state,
          LandAllocatedToId: parseInt(e.target.value, 10),
          selectAllocationTypeValues: res.objAllocationTypesList.filter(
            (x: IAllocationToValues) =>
              x.AllocationName !== null && x.AllocationName !== undefined
          )
          // tslint:disable-next-line:object-literal-sort-keys
          // AllocationSubTypeId: res
          //   .map((x: any) => x.AllocationId === parseInt(e.target.value, 10))
          //   .filter((x: any) => x.AllocationSubTypeId)
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
  public handleAgreementClick = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event);
    getGridDataForWorkFlow(
      this.state.LandAllocatedToId,
      this.state.AllocationId,
      event.target.value
    )
      .then(res => {
        this.setState({
          ...this.state,
          AgreementId: event.target.value,
          WorkFlowGridValues: res.jsonData.data,
          count: res.jsonData.data.length
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));

    postSelectedList(
      this.state.LandAllocatedToId,
      this.state.AllocationId,
      event.target.value
    )
      .then(res => {
        this.setState({
          ...this.state,
          // selectedActivityList: res.ActivityList,
          selectedActivities: [],
          // tslint:disable-next-line:object-literal-sort-keys
          selectedActivitiesList: this.state.ActivityList.filter(
            (y: IActivityValues) =>
              res.ActivityList.find(
                (x: ISelectedActivityValues) =>
                  x.ActivityId === y.WorkFlowActivityId
              )
          ),
          selectedActivitiesListLength: this.state.ActivityList.filter(
            (y: IActivityValues) =>
              res.ActivityList.find(
                (x: ISelectedActivityValues) =>
                  x.ActivityId === y.WorkFlowActivityId
              )
          ).length,
          // tslint:disable-next-line:object-literal-sort-keys
          ActivityList: this.state.ActivityList.filter(
            (item: IActivityValues) => {
              return (
                res.ActivityList.filter((item2: ISelectedActivityValues) => {
                  return item.WorkFlowActivityId === item2.ActivityId;
                }).length === 0
              );
            }
          )
        });
      })

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));

    // getSelectedListGrid(
    //   this.state.LandAllocatedToId,
    //   this.state.AllocationId,
    //   event.target.value
    // ).then(res => {
    //   this.setState({
    //     ...this.state,
    //     SelectedActivityList: res.data
    //   });
    // });

    // tslint:disable-next-line:no-console
  };
  public onHandleSubmit = (event: any) => {
    if (
      event.LandAllocatedToId !== 0 &&
      event.AllocationId !== 0 &&
      event.AgreementId !== 0 &&
      this.state.change === true
    ) {
      submitWorkFlow(
        event,
        this.state.selectedActivitiesList.map(
          (x: IActivityValues) => x.WorkFlowActivityId
        )
      )
        .then(res => {
          this.setState({ ...this.state, MappingPopUp: true });
        })
        .then(() => {
          getGridDataForWorkFlow(
            this.state.LandAllocatedToId,
            this.state.AllocationId,
            this.state.AgreementId
          )
            .then(res => {
              this.setState({
                ...this.state,

                WorkFlowGridValues: res.jsonData.data,
                count: res.jsonData.data.length
              });
            })
            // tslint:disable-next-line:no-console
            .catch(err => console.log(err));
        });
    } else {
      this.setState({ ...this.state, PopUp: true });
    }
    // this.setState({ ...this.state, searchInput: event.target.value });
  };

  public onHandleSearch = (event: any) => {
    // tslint:disable-next-line:no-console
    this.setState({ ...this.state, searchInput: event.target.value });
  };

  // for page change
  public readonly onHandlePageChange = (event: any, page: number) => {
    this.setState({ ...this.state, page });
  };

  // for rows change per page
  public readonly onHandleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };

  public handleActivityChange = (event: any) => {
    // tslint:disable-next-line:no-console
    const selected = [].filter
      .call(event.target.options, (o: any) => o.selected)
      .map((o: any) => o.value);

    const Activities = this.state.ActivityList.filter((it: IActivityValues) =>
      selected.includes(it.WorkFlowActivityName)
    );

    if (
      this.state.Activities.map(
        (x: IActivityValues) => x.WorkFlowActivityName !== event.target.value
      )
    ) {
      this.setState({
        ...this.state,
        Activities
      });
    } else {
      this.setState({
        ...this.state,
        Activities: this.state.Activities.filter(
          (x: IActivityValues) => x.WorkFlowActivityName !== event.target.value
        )
      });
    }
  };

  public handleSelectActivityChange = (event: any) => {
    const selected = [].filter
      .call(event.target.options, (o: any) => o.selected)
      .map((o: any) => o.value);

    const selectedActivities = this.state.selectedActivitiesList.filter(
      (it: IActivityValues) => selected.includes(it.WorkFlowActivityName)
    );

    if (
      this.state.selectedActivities.map(
        (x: IActivityValues) => x.WorkFlowActivityName !== event.target.value
      )
    ) {
      this.setState({
        ...this.state,
        selectedActivities
      });
    } else {
      this.setState({
        ...this.state,
        selectedActivities: this.state.selectedActivities.filter(
          (x: IActivityValues) => x.WorkFlowActivityName !== event.target.value
        )
      });
    }
  };

  public handleAllSelectClick = () => {
    this.setState({
      ...this.state,
      change: true,

      selectedActivitiesList: [
        ...this.state.selectedActivitiesList,
        ...this.state.ActivityList
      ],
      // tslint:disable-next-line:object-literal-sort-keys
      ActivityList: []
    });
  };

  public handleAllLeftSelectClick = () => {
    this.setState({
      // ...this.state,
      // selectedActivitiesList: this.state.selectedActivitiesList.slice(
      //   0,
      //   this.state.selectedActivitiesListLength
      // ),
      // // tslint:disable-next-line:object-literal-sort-keys
      // ActivityList: this.state.selectedActivitiesList.slice(
      //   this.state.selectedActivitiesListLength,
      //   this.state.selectedActivitiesList.length
      // )
      ...this.state,
      change: true,

      ActivityList: [
        ...this.state.ActivityList,
        ...this.state.selectedActivitiesList
      ],
      // tslint:disable-next-line:object-literal-sort-keys
      selectedActivitiesList: []
    });
  };

  public handleSpecificSelectClick = (values: any) => {
    const activities = this.state.Activities;

    if (
      this.state.selectedActivitiesList.filter((x: IActivityValues) =>
        activities.find(
          (y: IActivityValues) => y.WorkFlowActivityId !== x.WorkFlowActivityId
        )
      )
    ) {
      this.setState({
        ...this.state,
        // selectedActivities: values,
        Activities: [],
        ActivityList: this.state.ActivityList.filter(
          (item: IActivityValues) => {
            return (
              this.state.Activities.filter((item2: IActivityValues) => {
                return item.WorkFlowActivityName === item2.WorkFlowActivityName;
              }).length === 0
            );
          }
        ),
        change: true,

        selectedActivitiesList: [
          ...this.state.selectedActivitiesList,
          ...activities
        ]
      });
    }
  };

  public handleLeftSelectClick = (values: any) => {
    const selectedActivities = this.state.selectedActivities;

    if (
      this.state.ActivityList.filter((x: IActivityValues) =>
        selectedActivities.find(
          (y: IActivityValues) => y.WorkFlowActivityId !== x.WorkFlowActivityId
        )
      )
    ) {
      this.setState({
        ...this.state,
        ActivityList: [...this.state.ActivityList, ...selectedActivities],
        change: true,
        selectedActivities: [],
        selectedActivitiesList: this.state.selectedActivitiesList.filter(
          (item: IActivityValues) => {
            return (
              this.state.selectedActivities.filter((item2: IActivityValues) => {
                return item.WorkFlowActivityName === item2.WorkFlowActivityName;
              }).length === 0
            );
          }
        )
      });
    }
  };

  public handleAddWorkFlowPopUp = () => {
    this.setState({ ...this.state, dialogOpen: true });
  };

  public onHandleDialogClose = () => {
    this.setState({ ...this.state, dialogOpen: false });
  };

  public onHandleAddSave = (values: IAddActivityProps) => {
    // tslint:disable-next-line:no-console
    console.log(values);
    addActivityInList(values).then(res => {
      this.setState({
        ...this.state,
        ActivityList: [...this.state.ActivityList, res.model],

        // tslint:disable-next-line:object-literal-sort-keys
        dialogOpen: false,
        newWorkFlowActivityName: ""
      });
    });
  };

  public handleDurationPopClick = (values: IWorkFlowGridDataValues) => {
    this.setState({
      ...this.state,
      editdialogOpen: true,
      // tslint:disable-next-line:object-literal-sort-keys
      AllocationName: values.AllocateToName,
      AllocationSubTypeName: values.AllocationTypeName,
      AgreementName: values.AgreementTypeName,
      SlaDays: values.SlaDays,
      newSlaDays: values.SlaDays,
      ActivityId: values.ActivityId
    });
  };

  public handleEditClose = () => {
    this.setState({
      ...this.state,
      editdialogOpen: false
    });
  };

  public handleEditDurationChange = (event: any) => {
    this.setState({
      ...this.state,
      newSlaDays: event.target.value
    });
  };

  public onHandleEditSave = (
    AllocationId: number,
    AllocationSubTypeId: number,
    AgreementId: number,
    SlaDays: number,
    ActivityId: number
  ) => {
    updateDurationDays(
      AllocationId,
      AllocationSubTypeId,
      AgreementId,
      SlaDays,
      ActivityId
    )
      .then(res => {
        this.setState({
          ...this.state,
          // WorkFlowGridValues: res.model,
          editdialogOpen: false
        });
      })
      .then(() =>
        getGridDataForWorkFlow(
          this.state.LandAllocatedToId,
          this.state.AllocationId,
          this.state.AgreementId
        ).then(res => {
          this.setState({
            ...this.state,
            WorkFlowGridValues: res.jsonData.data,
            count: res.jsonData.data.length
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public onHandleMappingDialogClose = () => {
    this.setState({ ...this.state, MappingPopUp: false, PopUp: false });
  };

  public handleReset = () => {
    // getAllocationType().then(res => {
    this.setState({
      ...this.state,
      newSlaDays: "0",
      // tslint:disable-next-line:object-literal-sort-keys
      ActivityId: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      LandAllocatedToId: 0,
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
      AllocationSubTypeName: "",
      LandAllocationId: 0,
      LandAllocationTypeName: "",
      ActivityList: [],
      selectedActivityList: [],
      WorkFlowGridValues: [],
      page: 0,
      selectAllocationTypeValues: [],
      SlaDays: 0,
      rowsPerPage: 5,
      searchInput: "",
      Activities: [],
      selectedActivities: [],
      dialogOpen: false,
      editdialogOpen: false,
      newWorkFlowActivityName: "",
      AgreementName: "",
      selectedActivitiesList: [],
      selectedActivitiesListLength: 0
    });
    postActivitiesList().then(res =>
      this.setState({
        ActivityList: res.documentsList.filter(
          (obj: IActivityValues) =>
            obj.WorkFlowActivityName !== null &&
            obj.WorkFlowActivityName !== undefined
        )
      })
    );
    // });
  };

  public render() {
    return (
      <div className="innerpage-container">
        <div className="inner-header-titile">
          {/* <img src="/images/login-audit-icon.png" /> */}
          <h2>Work Flow Activity Application Mapping</h2>
        </div>
        <WorkFlowMappingForm
          handleReset={this.handleReset}
          handleLeftSelectClick={this.handleLeftSelectClick}
          handleAddWorkFlowPopUp={this.handleAddWorkFlowPopUp}
          handleAllLeftSelectClick={this.handleAllLeftSelectClick}
          handleAllSelectClick={this.handleAllSelectClick}
          handleSpecificSelectClick={this.handleSpecificSelectClick}
          Activities={this.state.Activities}
          selectedActivities={this.state.selectedActivities}
          selectedActivitiesList={this.state.selectedActivitiesList}
          handleActivityChange={this.handleActivityChange}
          handleSelectActivityChange={this.handleSelectActivityChange}
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
        {
          <Dialog
            open={this.state.MappingPopUp}
            // onClose={this.onHandleDialogClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogActions>
              {/* <div className="popup-title" >
              <DialogTitle id="simple-dialog-title">
                    Selected Activities
                 </DialogTitle>
              </div> */}
              <div id="simple-dialog-title">
                You have successfully mapped activities for application types
                <div className="popup-bottom-btn">
                  {/* tslint:disable-next-line:jsx-no-lambda */}
                  <Button
                    className="main-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleMappingDialogClose()}
                  >
                    OK
                  </Button>
                </div>
              </div>
            </DialogActions>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.PopUp}
            // onClose={this.onHandleDialogClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogActions>
              {/* <div className="popup-title" >
              <DialogTitle id="simple-dialog-title">
                    Selected Activities
                 </DialogTitle>
              </div> */}
              <div id="simple-dialog-title">
                Please Select AllocateToType & AllocationType & AgreementType &
                Activities
                <div className="popup-bottom-btn">
                  {/* tslint:disable-next-line:jsx-no-lambda */}
                  <Button
                    className="main-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleMappingDialogClose()}
                  >
                    OK
                  </Button>
                </div>
              </div>
            </DialogActions>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialogOpen}
            onClose={this.onHandleDialogClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              <div className="popup-title">
                <h4> Create New Work Flow Activity</h4>
              </div>
            </DialogTitle>
            <div id="simple-dialog-title">
              <AddActivityWorkFlowForm
                newWorkFlowActivityName={this.state.newWorkFlowActivityName}
                onHandleAddPopUp={this.handleAddWorkFlowPopUp}
                onHandleAddSave={this.onHandleAddSave}
                onHandleAddPopUpClose={this.onHandleDialogClose}
              />
            </div>
          </Dialog>
        }

        <Card className="work-grid">
          <CardContent>
            <Typography
              gutterBottom={true}
              variant="headline"
              component="h4"
              className="grap-heading"
            >
              Work Flow Activity
            </Typography>
          </CardContent>
          <div className="table-card">
            <b>
              Note : Please set the time duration for the activities in the
              below grid
            </b>
            <WorkFlowMapTable
              AllocationId={this.state.LandAllocatedToId}
              AllocationSubTypeId={this.state.AllocationId}
              AgreementId={this.state.AgreementId}
              handleEditDurationChange={this.handleEditDurationChange}
              newSlaDays={this.state.newSlaDays}
              ActivityId={this.state.ActivityId}
              onHandleEditSave={this.onHandleEditSave}
              AllocationName={this.state.AllocationName}
              AllocationSubTypeName={this.state.AllocationSubTypeName}
              AgreementName={this.state.AgreementName}
              editDialogOpen={this.state.editdialogOpen}
              handleEditClose={this.handleEditClose}
              handleDurationPopClick={this.handleDurationPopClick}
              workFlowMapList={this.state.WorkFlowGridValues}
              count={this.state.count}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
              onHandlePageChange={this.onHandlePageChange}
            />
          </div>
        </Card>
      </div>
    );
  }
}
export default WorkFlowMappingState;
