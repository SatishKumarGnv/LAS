import * as React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import * as moment from "moment";
import {
  ConditionTypeValues,
  GetMilestoneActivities,
  mileStoneValues,
  RuleTypeValues,
  SourceTypeValues
} from "src/Api_Integration/ProposalService";
import {
  IGoValues,
  IMileStoneDropDownValues,
  IMileStoneValues
} from "src/DefaultLayout/HomePage";
import { ISearchValues } from "src/DefaultLayout/HomePage";
import {
  getSubmittedApplicationPopUpData,
  getSubmittedApplications
} from "../Api_Integration/SubmittedApplicationService";
import ApplicationSubmitForm from "../LandAllocation/SubmittedApplication";

export interface IApplicationStateValues {
  readonly ApplicationId: string;
  readonly OrganiztionName: string;
  readonly RegistrationNumber?: string;
  readonly AllocateTo: string;
  readonly AllocationName: string;
  readonly AgreementTypeName: string;
  readonly TownshipName: string;
  readonly ProjectName: string;
  readonly RequiredLand: string;
  readonly MilestoneRuleId: number;
  readonly FirstName: string;
  readonly Email: string;
  readonly PhoneNumber: string;
  readonly MilestoneDate: string;
  readonly LastUpdatedDate: string;
  readonly MileStoneLandSize: number;
  readonly Status: string;
  readonly LandAllocationType: string;
  readonly LandAllocationTypeId: number;
  readonly ApplicationCurrentStatus: string;
  readonly LandAllocated: string;
  readonly LandAreaAllottedByEstates: number;
  readonly ParcelNumber: string;
  readonly SurveyNumber: string;
  readonly IsVerified: number;
  readonly NextActivivtyInfo: string;
  readonly ApplicationStatusId: number;
  readonly RequestLand: number;
  readonly LandonHold: number;
  readonly CurrentStatus: string;
  readonly AllotedLand: number;
  readonly AllocationProcess: string;
  readonly Actions: string;
  readonly SubmittedDate: string;
  readonly MileStoneArray: ReadonlyArray<IMileStoneValues>;
}

export interface IDocumentsVerifiedList {
  readonly ApplicationId: null;
  readonly DocumentId: number;
  readonly DocumentPath: string;
  readonly Verified: boolean;
}
export interface ISubmitApplicationPopUpValues {
  readonly GOMDetails: ReadonlyArray<IGoValues>;
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
  readonly TownshipName: string;
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
  readonly WithInAGC: boolean;
  readonly OutOfAGC: boolean;
}

export interface ISubmitExpandRowProps {
  readonly applicationList: ReadonlyArray<IApplicationStateValues>;
  readonly expandApplicationId: string;
  readonly open: boolean;
}

export interface ISubmitApplicationExpandItemProps {
  readonly submitPopUpValues: ISubmitApplicationPopUpValues;
}

export interface ISubmitValueProps {
  readonly applicationValues: IApplicationStateValues;
}

export interface ISubmitApplicationPopUpProps {
  readonly applicationPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly MileStoneArray: ReadonlyArray<IMileStoneValues>;
  readonly popUpid: string;
  readonly AllocateTo: string;
  onHandleClose(): void;
}

export interface IApplicationStateProps {
  readonly applicationList: ReadonlyArray<IApplicationStateValues>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  readonly open: boolean;
  readonly dialogOpen: boolean;
  readonly dialogExpandOpen: boolean;
  readonly expandApplicationId: string;
  readonly popUpid: string;
  readonly AllocateTo: string;
  readonly applicationPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly MileStoneArray: ReadonlyArray<IMileStoneValues>;

  // onHandleExpandPopUp(evt: any): void;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleSearch(event: any): void;
  onHandleClick(event: any): void;
  onHandleActionClick(event: string, value: string): void;
  onHandleClose(): void;
}

class ApplicationSubmitState extends React.Component<
  IApplicationStateProps,
  any
> {
  public state = {
    applicationList: [],
    count: 0,
    page: 0,
    rowsPerPage: 5,
    // tslint:disable-next-line:object-literal-sort-keys
    emptyRows: 0,
    searchInput: "",
    open: false,
    expandApplicationId: "",
    popUpid: "",
    AllocateTo: "",
    dialogOpen: false,
    dialogExpandOpen: false,
    expandApplicationList: [],
    applicationPopUpList: [],
    MileStoneArray: []
  };

  constructor(props: IApplicationStateProps) {
    super(props);
  }

  public componentWillMount() {
    // Fetch Call for Submited Applications
    getSubmittedApplications()
      .then(res => {
        this.setState({
          ...this.state,
          applicationList: res.aaData,
          count: res.aaData.length
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  }

  // for page change
  public readonly onHandlePageChange = (event: any, page: number) => {
    this.setState({ ...this.state, page });
  };

  // for rows change per page
  public readonly onHandleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };
  public registrationNumer = (
    searchInput: string,
    registrationNumber?: string
  ) => {
    if (registrationNumber) {
      return registrationNumber
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    } else {
      return false;
    }
  };
  // for Search Input Change
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.applicationList.filter(
      (x: IApplicationStateValues) =>
        searchInput !== ""
          ? x.ApplicationId.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.OrganiztionName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            x.AllocateTo.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.Status.toLowerCase().includes(searchInput.toLowerCase()) ||
            this.registrationNumer(searchInput, x.RegistrationNumber)
          : true
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };

  // onClick Expands based on Application Id
  public handleClick = (event: any) => {
    this.setState({
      ...this.state,
      expandApplicationId: event,
      open: !this.state.open,
      // tslint:disable-next-line:object-literal-sort-keys
      dialogExpandOpen: true
    });
  };
  // public onHandleExpandPopUp = (evt: any) => {
  //   this.setState({
  //     ...this.state
  //   });
  // };

  // fetch Call for Pop Up details based on ID
  public handleActionClick = async (event: string, value: string) => {
    const res1 = await getSubmittedApplicationPopUpData(event);
    const res2 = await GetMilestoneActivities(event);
    const res3 = await mileStoneValues(
      parseInt(
        res1.applicationDetailsViewModelLst.map((x: ISearchValues) =>
          isNaN(x.TownshipId) ? 0 : x.TownshipId
        )[0],
        10
      )
    );
    const res4 = await RuleTypeValues();
    const res5 = await SourceTypeValues();
    const res6 = await ConditionTypeValues();

    this.setState({
      ...this.state,
      AllocateTo: value,
      applicationPopUpList: res1.applicationDetailsViewModelLst,
      // tslint:disable-next-line:object-literal-sort-keys
      MileStoneArray:
        res2.milestoneActivitiesDetailsViewModelLst.length !== 0
          ? res2.milestoneActivitiesDetailsViewModelLst.map(
              (y: any, index: number) => ({
                ...y,
                AddMilestoneClickCount: index,
                LandRelease: y.ReleaseLandArea,
                RuleName: y.RuleName,
                // tslint:disable-next-line:object-literal-sort-keys
                RuleId: y.MilestoneYear,
                DateOfCompletion:
                  y.EffectiveDate !== ""
                    ? moment(y.EffectiveDate).format("YYYY-MM-DD")
                    : "",
                mileStoneValues:
                  res3.objProjectRulesList &&
                  res3.objProjectRulesList.filter(
                    (z: IMileStoneDropDownValues) =>
                      z.RuleName !== null && z.RuleName !== undefined
                  ),
                id: index,
                ProjectRuleTypes: y.MilestoneRules.split("~"),

                ProjectTypeId: y.ProjectTypeId,
                ruleTypeValues: res4.objProjRuleTypes,
                sourceTypeValues: res5.objDetails,

                RuleSourceTypeId: y.RuleSourceTypeId,
                ConditionTypeId: y.ConditionTypeId,
                ConditionTypeValues: res6.objDetails,
                projectValues:
                  res3.objProjectRulesList &&
                  res3.objProjectRulesList.filter(
                    (z: IMileStoneDropDownValues) =>
                      z.RuleName !== null && y.RuleName !== undefined
                  )
              })
            )
          : [],

      dialogOpen: true,
      popUpid: event
    });
  };

  // To Close Dialog PopUp
  public handleClose = () => {
    this.setState({
      ...this.state,
      dialogExpandOpen: false,
      dialogOpen: false,
      open: false
    });
  };

  public render() {
    // const emptyRows =
    //   this.state.rowsPerPage -
    //   Math.min(
    //     this.state.rowsPerPage,
    //     this.state.applicationList.length -
    //       this.state.page * this.state.rowsPerPage
    //   );

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
                Submitted Applications
              </Typography>
            </CardContent>
            <ApplicationSubmitForm
              MileStoneArray={this.state.MileStoneArray}
              popUpid={this.state.popUpid}
              AllocateTo={this.state.AllocateTo}
              count={this.state.count}
              onHandlePageChange={this.onHandlePageChange}
              onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
              applicationList={this.state.applicationList}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              open={this.state.open}
              dialogOpen={this.state.dialogOpen}
              dialogExpandOpen={this.state.dialogExpandOpen}
              // onHandleExpandPopUp={this.onHandleExpandPopUp}
              onHandleClick={this.handleClick}
              onHandleActionClick={this.handleActionClick}
              onHandleClose={this.handleClose}
              expandApplicationId={this.state.expandApplicationId}
              applicationPopUpList={this.state.applicationPopUpList}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default ApplicationSubmitState;
