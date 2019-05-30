import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import {
  getWorkFlowActiviyValues,
  postActivateID,
  postAddWorkFlowActivityDetails,
  postDeActivateId,
  postEditWorkFlowActivityDetails
} from "../Api_Integration/WorkFlowActivityService";
import AddWorkFlowActivityForm from "../WorkFlowConfiguration/AddWorkFlowActivity";
import WorkFlowActivityTable from "../WorkFlowConfiguration/WorkFlowActivityTable";
// import { IActivityValues } from "./WorkFlowMappingState";

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

export interface IAllocationToValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationName: string;
  readonly AllocationSubTypeName: null;
  readonly CreatedBy: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
}

export interface ISelectedActivityValues {
  readonly Id: number;
  readonly ApplicationId: number;
  readonly AllocateToName: null;
  readonly SubApplicationId: number;
  readonly AllocationTypeName: null;
  readonly AgreementTypeName: null;
  readonly ActivityId: number;
  readonly ActivityList: null;
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

export interface IWorkFlowStateValues {
  readonly LandAllocatedToId: number;
  readonly allocationTypeId: number;
  readonly AgreementId: number;
  readonly selectLandAllocationTypeValues: ReadonlyArray<IAllocationToValues>;
  readonly agreementTypeValues: ReadonlyArray<IAgremmentTypeValues>;
  readonly ActivityList: ReadonlyArray<IActivityValues>;
  readonly selectedActivityList: ReadonlyArray<ISelectedActivityValues>;
  readonly WorkFlowActivityId: number;
  readonly WorkFlowActivityName: string;
  readonly AllocationName: string;
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationType: number;
  readonly Activities: ReadonlyArray<string>;
  readonly selectedActivities: ReadonlyArray<string>;
  handleActivityChange(event: any): void;
  handleSelectActivityChange(event: any): void;
  handleAllocationChange(e: any): void;
  handleAgreementClick(e: any): void;
  handleLandAllocationClick(e: any): void;
  onHandleSubmit(event: any): void;
  handleSpecificSelectClick(event: any): void;
  handleAllSelectClick(): void;
  handleAllLeftSelectClick(): void;
}

export interface IWorkFlowActivityStateProps {
  readonly WorkFlowActivityList: ReadonlyArray<IActivityValues>;
  readonly searchInput: string;
  readonly open: boolean;
  readonly open2: boolean;

  readonly editPopUpOpen: boolean;
  readonly addPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  readonly deActivatePopUpOpen: boolean;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(documentValues: any): void;
  onHandleEditActionClick(documentValues: any): void;
  onHandleEditSave(event: any, name: string): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(values: IAddActivityValues & IAddActivityProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUp(): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditActivityValues {
  readonly id: number;
  workFlowActivityName: string;
  onHandleEditNameChange(event: any): void;
}

export interface IAddActivityValues {
  readonly id: number;
  readonly newWorkFlowActivityName: string;
  onHandleAddChange(event: any): void;
}

export interface IAddActivityProps {
  readonly WorkFlowActivityList: ReadonlyArray<IActivityValues>;
  onHandleAddSave(values: IAddActivityValues & IAddActivityProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateProps {
  readonly id: number;
  onHandleActivateClick(event: any): void;
  onHandleActivePopUpClose(): void;
}

class WorkFlowActivityState extends React.Component<
  IWorkFlowActivityStateProps & IEditActivityValues
> {
  public readonly state = {
    WorkFlowActivityList: [],
    activatePopUpOpen: false,
    addPopUpOpen: false,
    deActivatePopUpOpen: false,
    workFlowActivityName: "",
    // tslint:disable-next-line:object-literal-sort-keys
    open: false,
    count: 0,
    open2: false,
    editPopUpOpen: false,
    documentValues: {
      WorkFlowActivityName: "",
      // tslint:disable-next-line:object-literal-sort-keys
      CreatedOn: null,
      CreatedBy: 0,
      ModifiedOn: null,
      ModifiedBy: 0,
      WorkFlowActivityId: 0,
      IsActive: "",
      ReturnCode: 0,
      count: 0,
      UserName: null,
      AllocateTo: null,
      AllocationType: null,
      AgreementType: null,
      CurrentActivityId: 0,
      ActivitityOrderId: 0
    },
    dialog: false,
    dialog1: false,
    id: 0,
    newWorkFlowActivityName: "",
    page: 0,
    rowsPerPage: 5,
    searchInput: ""
  };
  constructor(props: IWorkFlowActivityStateProps & IEditActivityValues) {
    super(props);
  }
  public componentWillMount() {
    // getting data for the documenttypemaster table
    getWorkFlowActiviyValues()
      .then(res => {
        this.setState({
          ...this.state,
          WorkFlowActivityList: res.jsonData.data,
          count: res.jsonData.data.length
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  }
  // for page change
  public readonly handleChangePage = (event: any, page: number) => {
    this.setState({ page });
  };

  // for rows change per page
  public readonly handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  // fetch Call for Pop Up details based on ID
  public onHandleActionClick = (documentValues: any) => {
    // tslint:disable-next-line:no-console
    this.setState({
      ...this.state,
      documentValues,
      open: documentValues.IsActive === true ? true : false,
      open2: documentValues.IsActive === false ? true : false
    });
  };

  public onHandleEditNameChange = (event: any) => {
    this.setState({ ...this.state, workFlowActivityName: event.target.value });
  };

  public onHandleAddChange = (event: any) => {
    this.setState({
      ...this.state,
      newWorkFlowActivityName: event.target.value
    });
  };

  // for Edit PopUp open
  public onHandleEditActionClick = (documentValues: any) => {
    this.setState({
      ...this.state,
      editPopUpOpen: true,
      open: false
    });
  };

  // for Search Input Change
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.WorkFlowActivityList.filter((x: IActivityValues) =>
      searchInput !== ""
        ? this.workflowNameIncludes(searchInput, x.WorkFlowActivityName) ||
          x.IsActive.toString().includes(this.getActivestate(searchInput))
        : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };

  // deActivate Popup open
  public onHandleDeActivatePopUpOpen = () => {
    this.setState({ ...this.state, deActivatePopUpOpen: true, open: false });
  };
  public workflowNameIncludes = (
    searchInput: string,
    workflowName?: string
  ) => {
    if (workflowName) {
      return workflowName.includes(searchInput);
    } else {
      return false;
    }
  };
  // Activate Popup open
  public onHandleActivatePopUpOpen = () => {
    this.setState({ ...this.state, activatePopUpOpen: true, open2: false });
  };

  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state, addPopUpOpen: true });
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
  // fetch call for Edited Document Id Save
  public onHandleEditSave = (event: any, name: string) => {
    postEditWorkFlowActivityDetails(event, name).then(res => {
      this.setState({
        ...this.state,
        // WorkFlowActivityList: [res],
        editPopUpOpen: false,
        id: event,
        workFlowActivityName: name
      });
    });
    getWorkFlowActiviyValues()
      .then(res => {
        this.setState({
          ...this.state,
          WorkFlowActivityList: res.jsonData.data,
          count: res.jsonData.data.length
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // fetch call for Deactivate DocumentId
  public onHandleDeActivateSave = (event: any) => {
    postDeActivateId(event)
      .then(res => {
        this.setState({
          ...this.state,
          deActivatePopUpOpen: false
          //  DocumentTypeMasterList: res,
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
    getWorkFlowActiviyValues()
      .then(res => {
        this.setState({
          ...this.state,
          WorkFlowActivityList: res.jsonData.data,
          count: res.jsonData.data.length
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // To Close Dialog PopUp
  public onHandleClose1 = () => {
    this.setState({ ...this.state, open: false });
  };

  // To Close Dialog PopUp
  public onHandleClose2 = () => {
    this.setState({ ...this.state, open2: false });
  };

  // To Close Edit PopUp Close
  public onHandleEditPopUpClose = () => {
    this.setState({ ...this.state, editPopUpOpen: false });
  };

  // to Close Add PopUp
  public onHandleAddPopUpClose = () => {
    this.setState({
      ...this.state,
      addPopUpOpen: false,
      newWorkFlowActivityName: ""
    });
  };

  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClose = () => {
    this.setState({ ...this.state, deActivatePopUpOpen: false });
  };

  // To Close Activate PopUp Close
  public onHandleActivatePopUpClose = () => {
    this.setState({ ...this.state, activatePopUpOpen: false });
  };
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };
  public onHandleAddSave = (values: IAddActivityValues & IAddActivityProps) => {
    if (
      this.state.WorkFlowActivityList.filter(
        (x: any) => x.WorkFlowActivityName === values.newWorkFlowActivityName
      ).length === 0
    ) {
      postAddWorkFlowActivityDetails(values)
        .then(res => {
          this.setState({
            ...this.state,

            WorkFlowActivityList: [
              ...this.state.WorkFlowActivityList,
              ...res.model
            ],
            addPopUpOpen: false,
            newWorkFlowActivityName: ""
          });
        })
        .catch(err =>
          // tslint:disable-next-line:no-console
          console.log(err)
        );
      getWorkFlowActiviyValues()
        .then(res => {
          this.setState({
            ...this.state,
            WorkFlowActivityList: res.jsonData.data,
            count: res.jsonData.data.length,
            dialog: true
          });
        })
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else if (
      this.state.WorkFlowActivityList.filter(
        (x: any) => x.WorkFlowActivityName === values.newWorkFlowActivityName
      ).length !== 0
    ) {
      this.setState({
        dialog1: true,
        newWorkFlowActivityName: ""
      });
    }
  };
  public handlePopUpClose1 = () => {
    this.setState({
      dialog1: false
    });
  };

  public onHandleActivateClick = (event: any) => {
    postActivateID(event)
      .then(res => {
        this.setState({
          ...this.state,
          WorkFlowActivityList: res.data,
          activatePopUpOpen: false
        });
      })
      .then(() =>
        getWorkFlowActiviyValues()
          .then(res => {
            this.setState({
              ...this.state,
              WorkFlowActivityList: res.jsonData.data,
              count: res.jsonData.data.length
            });
          })

          // tslint:disable-next-line:no-console
          .catch(err => console.log(err))
      );
  };

  public render() {
    return (
      <div className="innerpage-container">
        <div className="graph-card">
          <Card className="title-card">
            <CardContent className="title-card">
              <div className="title-row">
                <Typography
                  gutterBottom={true}
                  variant="headline"
                  component="h4"
                  className="grap-heading"
                >
                  {/* <img src="/images/table-icon.png" /> */}
                  Work Flow Activity
                </Typography>
                <Button
                  className="doc-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.onHandleAddPopUpOpen()}
                >
                  + Add
                </Button>
              </div>
            </CardContent>
            {
              <Dialog
                open={this.state.addPopUpOpen}
                onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                    Create New Work Flow Activity
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddWorkFlowActivityForm
                    id={this.state.id}
                    newWorkFlowActivityName={this.state.newWorkFlowActivityName}
                    WorkFlowActivityList={this.state.WorkFlowActivityList}
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  />
                </div>
              </Dialog>
            }
            <WorkFlowActivityTable
              onHandleActivatePopUp={this.onHandleActivatePopUpOpen}
              onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
              activatePopUpOpen={this.state.activatePopUpOpen}
              onHandleActivateClick={this.onHandleActivateClick}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              addPopUpOpen={this.state.addPopUpOpen}
              onHandleAddPopUp={this.onHandleAddPopUpOpen}
              onHandleAddPopUpClose={this.onHandleAddPopUpClose}
              onHandleAddSave={this.onHandleAddSave}
              id={this.state.id}
              workFlowActivityName={this.state.workFlowActivityName}
              onHandleEditNameChange={this.onHandleEditNameChange}
              onHandleEditSave={this.onHandleEditSave}
              deActivatePopUpOpen={this.state.deActivatePopUpOpen}
              onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
              onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
              onHandleDeActivateSave={this.onHandleDeActivateSave}
              editPopUpOpen={this.state.editPopUpOpen}
              onHandleEditActionClick={this.onHandleEditActionClick}
              onHandleEditPopUpClose={this.onHandleEditPopUpClose}
              count={this.state.count}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              documentValues={this.state.documentValues}
              open={this.state.open}
              open2={this.state.open2}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              onHandlePageChange={this.handleChangePage}
              onHandleActionClick={this.onHandleActionClick}
              onHandleClose={this.onHandleClose1}
              onHandleClose2={this.onHandleClose2}
              WorkFlowActivityList={this.state.WorkFlowActivityList}
            />
          </Card>
        </div>
        {
          <Dialog
            open={this.state.dialog}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have successfully added Work Flow Activity
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
        {
          <Dialog
            open={this.state.dialog1}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Work Flow Activity already existed, please add new Work Flow
              Activity .
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handlePopUpClose1()}
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

export default WorkFlowActivityState;
