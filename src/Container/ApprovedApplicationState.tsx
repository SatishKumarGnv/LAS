import * as React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { loader } from "src/DefaultLayout/HomePage";

import Button from "@material-ui/core/Button";
// tslint:disable-next-line:ordered-imports
import { Route, Switch } from "react-router-dom";
import { IGoValues } from "src/DefaultLayout/HomePage";
import MilestoneForm from "src/LandAllocation/Milestonetable";
import {
  downloadData,
  getApprovedApplications,
  getApprovedApplicationsPopUpData,
  milestoneDetailsById
} from "../Api_Integration/ApprovedApplicationService";
import ApprovedApplicationSubmitForm from "../LandAllocation/ApprovedApplications";

export interface IApprovedApplicationStateValues {
  ApplicationId: string;
  OrganiztionName: string;
  RegistrationNumber: string;
  // tslint:disable-next-line:object-literal-sort-keys
  AllocateTo: string;
  AllocationName: string;
  AgreementTypeName: string;
  ThemecityName: string;
  ProjectName: string;
  RequiredLand: string;
  MilestoneRuleId: number;
  FirstName: string;
  Email: string;
  PhoneNumber: string;
  MilestoneDate: string;
  LastUpdatedDate: string;
  MileStoneLandSize: number;
  Status: string;
  LandAllocationType: string;
  LandAllocationTypeId: number;
  ApplicationCurrentStatus: string;
  LandAllocated: string;
  LandAreaAllottedByEstates: number;
  ParcelNumber: string;
  SurveyNumber: string;
  IsVerified: number;
  NextActivivtyInfo: string;
  ApplicationStatusId: number;
  RequestLand: number;
  LandonHold: number;
  CurrentStatus: string;
  AllotedLand: number;
  AllocationProcess: string;
  TownshipName: string;
}

export interface IDocumentsVerifiedList {
  readonly ApplicationId: null;
  readonly DocumentId: number;
  readonly DocumentPath: string;
  readonly Verified: boolean;
}
export interface IApprovedApplicationPopUpValues {
  readonly TownshipName: string;
  readonly WithInAGC: boolean;
  readonly OutOfAGC: boolean;
  readonly TotalLandCost: number;
  readonly AmountPaid: number;
  readonly AmountTobePaid: number;
  readonly RegisteredOrNot: boolean;
  readonly AgreementTypeId: number;
  readonly AgreementTypeName: string;
  readonly AllocationSubTypeId: number;
  readonly AllocationTo: string;
  readonly AllocationTypeId: number;
  readonly AllocationTypeName: string;
  readonly ApplicationId: string;
  readonly OrgGST: string;
  readonly OrgRegistrationNumber: string;
  readonly OrgTinNumber: string;
  readonly OrganiztionName: string;
  // tslint:disable-next-line:object-literal-sort-keys
  readonly OrgPhoneNumber: string;
  readonly WebsiteURL: string;
  readonly OrgEmailid: string;
  readonly OrgAddress1: string;
  readonly OrgAddress2: string;
  readonly OrgCountryId: number;
  readonly OrgCountryName: string;
  readonly OrgStateId: number;
  readonly OrgStateName: string;
  readonly OrgCityName: string;
  readonly OrgZipCode: string;
  readonly AuthPersonName: string;
  readonly AuthEmailId: string;
  readonly AuthPhoneNumber: string;
  readonly AuthAddress1: string;
  readonly AuthAddress2: string;
  readonly AuthPhotoIdType: string;
  readonly AuthPhotoIdNumber: string;
  readonly AuthPhotoIdPath: string;
  readonly LandAllocationTypeId: number;
  readonly LandAllocationType: string;
  readonly AvailableLandArea: number;
  readonly AvailbleLandAreaUnits: number;
  readonly RequiredLandArea: number;
  readonly UnitFormatId: number;
  readonly UnitFormatName: string;
  readonly TenurePeriodId: number;
  readonly TenurePeriod: string;
  readonly LeaseAmountperAcre: number;
  readonly LeaseAmountperAnnum: number;
  readonly LeaseStartDate: string;
  readonly LeaseEndDate: string;
  readonly ProjectTitle: string;
  readonly ProjPurpose: string;
  readonly ProjStartDate: string;
  readonly ProjEndDate: string;
  readonly ProjBudget: number;
  readonly ProjDescription: string;
  readonly ThemeCityId: number;
  readonly ThemeCityName: string;
  readonly PhotoIdType: number;
  readonly FirstName: string;
  readonly LastName: string;
  readonly DocumentsVerifiedList: ReadonlyArray<IDocumentsVerifiedList>;
  readonly ProjectRules: string;
  readonly WorkflowComments: null;
  readonly ProcessId: number;
  readonly CurrentActivityId: number;
  readonly CurrentActivityOrderId: number;
  readonly LandAreaAllotedByEstates: number;
  readonly ParcelId: string;
  readonly SurveyNumber: string;
  readonly GOMnumber: string;
  readonly GOMdate: string;
  readonly LOIdate: string;
  readonly DistrictId: number;
  readonly MandalId: number;
  readonly VillageId: number;
  readonly District: string;
  readonly Mandal: string;
  readonly Village: string;
  readonly Boundaries: string;
  readonly SurveyNumberByPlanning: string;
  readonly PricePerUnit: number;
  readonly TotalAmount: number;
  readonly InitialAllocation: number;
  readonly InitialAllocationLandSize: number;
  readonly InitialAllocationLandSizeType: number;
  readonly TotalAmountInRupees: string;
  readonly LeaseAmountperAnnumInRupees: string;
  readonly RequiredLandAreaBeforeAllocation: number;
  readonly LandAreaAllotedByEstatesInSqMeters: number;
  readonly IsRequestFromMap: boolean;
  readonly RelationType: number;
  readonly RelationName: string;
  readonly DateOfBirth: string;
  readonly AddRuleThemeCityType: number;
  readonly ProjectRuleType: number;
  readonly RelationTypeAndName: string;
  readonly Bhudhaar: string;
  readonly WitnessName: null;
  readonly OrgPAN: null;
  readonly AgreementName: null;
  readonly AgreementPurpose: null;
  readonly ProjectFundedBy: null;
  readonly ProjectCoOrinator: null;
  readonly AgreementDescription: null;
  readonly LeaseTenure: number;
  readonly RenewalForEvery: null;
  readonly RenewalLoanAmount: number;
  readonly ApplicationSubmittedDate: null;
  readonly StrDateOfBirth: null;
  readonly RelativeAge: number;
  readonly TypeOfAllocation: number;
  readonly GOMDetails: ReadonlyArray<IGoValues>;
}

export interface IApprovedApplicationExpandItemProps {
  readonly ApprovedPopUpValues: IApprovedApplicationPopUpValues;
}

export interface IApprovedApplicationPopUpProps {
  readonly approvedApplicationPopUpList: ReadonlyArray<
    IApprovedApplicationPopUpValues
  >;
  handleClose(): void;
  // downloadClose(values: any): void;
}

export interface IApprovedValueProps {
  readonly approvedApplicationValues: IApprovedApplicationStateValues;
}

export interface IApplicationStateProps {
  readonly approvedApplicationList: ReadonlyArray<
    IApprovedApplicationStateValues
  >;
  readonly page: number;
  readonly count: number;
  readonly rowsPerPage: number;
  // readonly emptyRows: number;
  readonly searchInput: string;
  readonly ApprovedApplicaitonExpandopen: boolean;
  readonly dialogOpen: boolean;
  readonly expandApplicationId: string;
  readonly approvedApplicationPopUpList: ReadonlyArray<
    IApprovedApplicationPopUpValues
  >;
  onHandleSearch(event: any): void;

  onHandleClick(event: any): void;
  onHandleActionClick(event: IApprovedApplicationStateValues): void;
  onHandleClose(): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
  downloadClose(values: any): void;
}

export interface IMilestoneStateProps {
  readonly milestoneList: ReadonlyArray<IApprovedApplicationStateValues>;
  readonly expandMilestoneId: string;
  readonly MileStoneIdopen: boolean;
  readonly Milepage: number;
  // readonly MileemptyRows: number;
  handleMileIdClick(event: IApprovedApplicationStateValues): void;
  onHandleMilestoneClick(event: IApprovedApplicationStateValues): void;
  onHandleMilestoneExpandClose(): void;
}

class ApprovedApplicationState extends React.Component<
  IApplicationStateProps & IMilestoneStateProps & any
> {
  public state = {
    approvedApplicationList: [],
    count: 0,
    page: 0,
    rowsPerPage: 5,
    // tslint:disable-next-line:object-literal-sort-keys
    emptyRows: 0,
    searchInput: "",
    open: false,
    expandApplicationId: "",
    dialogOpen: false,
    expandApplicationList: [],
    approvedApplicationPopUpList: [],
    milestoneList: [],
    expandMilestoneId: "",
    milepage: 0,
    MileemptyRows: 0,
    MileStoneIdopen: false,
    approvedApplicationValues: {
      ApplicationId: "LA181112T9UXIZB1SF",
      OrganiztionName: "Test Application Twenty One",
      RegistrationNumber: "TAP21",
      // tslint:disable-next-line:object-literal-sort-keys
      AllocateTo: "Private",
      AllocationName: "Lease",
      AgreementTypeName: "",
      ThemecityName: "Electronics City",
      ProjectName: "Test Application Tewnty One",
      RequiredLand: "0.1",
      MilestoneRuleId: 0,
      FirstName: "",
      Email: "",
      PhoneNumber: "",
      MilestoneDate: "/Date(-62135596800000)/",
      LastUpdatedDate: "/Date(-62135596800000)/",
      MileStoneLandSize: 0,
      Status: "Process Completed by LandsOfficer",
      LandAllocationType: "Complete",
      LandAllocationTypeId: 1,
      ApplicationCurrentStatus: "Process Completed",
      LandAllocated: "0.1",
      LandAreaAllottedByEstates: 0,
      ParcelNumber: "",
      SurveyNumber: "",
      IsVerified: 0,
      NextActivivtyInfo: "-",
      ApplicationStatusId: 7,
      RequestLand: 0,
      LandonHold: 0,
      CurrentStatus: "",
      AllotedLand: 0,
      AllocationProcess: "",
      TownshipName: ""
    },
    ApprovedApplicaitonExpandopen: false
  };
  constructor(props: IApplicationStateProps & IMilestoneStateProps) {
    super(props);
  }

  public componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      // Fetch Call for Submited Applications
      getApprovedApplications()
        .then(res => {
          this.setState({
            ...this.state,
            approvedApplicationList: res.aaData,
            count: res.aaData.length
          });
          if (loader != null) {
            loader.style.display = "none";
          }
        })
        .catch(err => {
          // tslint:disable-next-line:no-console
          console.log(err);
          if (loader != null) {
            loader.style.display = "none";
          }
        });
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
    }
  }
  public downloadClose = (values: any) => {
    downloadData(values.ApplicationId)
      .then(res => {
        this.setState({
          ...this.state,
          downloadData: res
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  // For PageChange
  public handleChangePage = (event: any, p: number) => {
    this.setState({ ...this.state, page: p });
  };

  // for Rows Per Page Change
  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };

  // for Search Input Change
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.approvedApplicationList.filter((x: any) =>
      searchInput !== ""
        ? x.ApplicationId.toLowerCase().includes(searchInput.toLowerCase()) ||
          x.OrganiztionName.toLowerCase().includes(searchInput.toLowerCase()) ||
          x.RequiredLand.toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          x.LandAllocated.toLowerCase().includes(searchInput.toLowerCase()) ||
          x.LandAllocationType.toLowerCase().includes(searchInput.toLowerCase())
        : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };

  // onClick Expands based on Application Id
  public handleApproveExpandClick = (
    values: IApprovedApplicationStateValues
  ) => {
    this.setState({
      ...this.state,

      ApprovedApplicaitonExpandopen: !this.state.ApprovedApplicaitonExpandopen,
      approvedApplicationValues: values,
      expandApplicationId: values.ApplicationId
    });
  };

  // onClick Expands based on MileStone Id
  public handleMileIdClick = (values: IApprovedApplicationStateValues) => {
    milestoneDetailsById(values.ApplicationId).then(res => {
      this.setState({ ...this.state, milestoneList: res.aaData });
    });
    // this.setState({
    //   ...this.state,
    //   expandMilestoneId: event.ApplicationId
    //   // tslint:disable-next-line:object-literal-sort-keys
    // });

    this.props.history.push(
      `/page/landAllocation/approvedApplications/milestone/${
        values.ApplicationId
      }`
    );
  };

  // fetch Call for Pop Up details based on ID
  public handleActionClick = (values: IApprovedApplicationStateValues) => {
    getApprovedApplicationsPopUpData(values)
      .then(res => {
        //  this.props.history.push("/page/milestone");
        this.setState({
          ...this.state,
          approvedApplicationPopUpList: res.applicationDetailsViewModelLst,
          //  approvedApplicationValues: event,
          dialogOpen: true
          // expandApplicationId: event.ApplicationId
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // To Close Dialog PopUp
  public handleClose = () => {
    this.setState({
      ...this.state,
      ApprovedApplicaitonExpandopen: false,
      dialogOpen: false
    });
  };

  public onHandleMilestoneClick = (values: IApprovedApplicationStateValues) => {
    this.setState({
      ...this.state,
      MileStoneIdopen: !this.state.MileStoneIdopen,
      expandMilestoneId: values.ApplicationId
    });
  };

  public onHandleMilestoneExpandClose = () => {
    this.setState({ ...this.state, MileStoneIdopen: false });
  };

  public milestoneBasedIdTAble = () => {
    return (
      <div>
        <div className="bottom-save-btn">
          <Button
            className="save-btn"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => {
              this.props.history.push(
                "/page/landAllocation/approvedApplications"
              );
            }}
          >
            BACK
          </Button>
        </div>
        <MilestoneForm
          onHandleMilestoneExpandClose={this.onHandleMilestoneExpandClose}
          handleMileIdClick={this.handleMileIdClick}
          // MileemptyRows={this.state.MileemptyRows}
          Milepage={this.state.milepage}
          MileStoneIdopen={this.state.MileStoneIdopen}
          milestoneList={this.state.milestoneList}
          onHandleMilestoneClick={this.onHandleMilestoneClick}
          expandMilestoneId={this.state.expandMilestoneId}
        />
      </div>
    );
  };

  public ApprovedApplicationTable = () => {
    return (
      <div className="innerpage-container">
        <div className="graph-card">
          <Card>
            <CardContent>
              <Typography
                gutterBottom={true}
                variant="headline"
                component="h4"
                className="grap-heading"
              >
                {/* <img src="/images/table-icon.png" /> */}
                Approved Applications List
              </Typography>
            </CardContent>
            <ApprovedApplicationSubmitForm
              onHandleMilestoneExpandClose={this.onHandleMilestoneExpandClose}
              onHandleMilestoneClick={this.onHandleMilestoneClick}
              approvedApplicationValues={this.state.approvedApplicationValues}
              count={this.state.count}
              milestoneList={this.state.milestoneList}
              expandMilestoneId={this.state.expandMilestoneId}
              Milepage={1}
              MileStoneIdopen={this.state.MileStoneIdopen}
              // MileemptyRows={MileemptyRows}
              handleMileIdClick={this.handleMileIdClick}
              approvedApplicationList={this.state.approvedApplicationList}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              // emptyRows={emptyRows}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              ApprovedApplicaitonExpandopen={
                this.state.ApprovedApplicaitonExpandopen
              }
              dialogOpen={this.state.dialogOpen}
              onHandleClick={this.handleApproveExpandClick}
              onHandleActionClick={this.handleActionClick}
              onHandleClose={this.handleClose}
              expandApplicationId={this.state.expandApplicationId}
              approvedApplicationPopUpList={
                this.state.approvedApplicationPopUpList
              }
              onHandlePageChange={this.handleChangePage}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              downloadClose={this.downloadClose}
            />
          </Card>
        </div>
      </div>
    );
  };
  public render() {
    // const emptyRows =
    //   this.state.rowsPerPage -
    //   Math.min(
    //     this.state.rowsPerPage,
    //     this.state.approvedApplicationList.length -
    //       this.state.page * this.state.rowsPerPage
    //   );
    // const MileemptyRows =
    //   this.state.rowsPerPage -
    //   Math.min(
    //     this.state.rowsPerPage,
    //     this.state.milestoneList.length -
    //       this.state.page * this.state.rowsPerPage
    //   );

    return (
      <div>
        <Switch>
          <Route
            exact={true}
            path="/page/landAllocation/approvedApplications/milestone/:id"
            component={this.milestoneBasedIdTAble}
          />
          <Route
            exact={true}
            path="/page/landAllocation/approvedApplications"
            component={this.ApprovedApplicationTable}
          />
        </Switch>
      </div>
    );
  }
}

export default ApprovedApplicationState;
