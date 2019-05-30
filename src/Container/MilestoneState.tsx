// import * as React from "react";

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

// import {
//   getApprovedApplications,
//   getApprovedApplicationsPopUpData
// } from "../Api_Integration/ApprovedApplicationService";
// import ApprovedApplicationSubmitForm from "../LandAllocation/ApprovedApplications";

// export interface IApprovedApplicationStateValues {
//   readonly ApplicationId: string;
//   readonly OrganiztionName: string;
//   readonly RegistrationNumber: string;
//   readonly AllocateTo: string;
//   readonly AllocationName: string;
//   readonly AgreementTypeName: null;
//   readonly ThemecityName: string;
//   readonly ProjectName: string;
//   readonly RequiredLand: string;
//   readonly MilestoneRuleId: number;
//   readonly FirstName: null;
//   readonly Email: null;
//   readonly PhoneNumber: null;
//   readonly MilestoneDate: string;
//   readonly LastUpdatedDate: string;
//   readonly MileStoneLandSize: number;
//   readonly Status: string;
//   readonly LandAllocationType: string;
//   readonly LandAllocationTypeId: number;
//   readonly ApplicationCurrentStatus: string;
//   readonly LandAllocated: string;
//   readonly LandAreaAllottedByEstates: number;
//   readonly ParcelNumber: null;
//   readonly SurveyNumber: null;
//   readonly IsVerified: number;
//   readonly NextActivivtyInfo: string;
//   readonly ApplicationStatusId: number;
//   readonly RequestLand: number;
//   readonly LandonHold: number;
//   readonly CurrentStatus: string;
//   readonly AllotedLand: number;
//   readonly AllocationProcess: null;
//   readonly RequiredLandArea: number;
//   readonly AvailableLandArea: number;
//   readonly OrgRegistrationNumber: number;
//   readonly AllocationTypeName: string;
//   readonly ThemeCityName: string;
//   readonly AllocationTo: string;
//   readonly Actions: string;
// }

// export interface IDocumentsVerifiedList {
//   readonly ApplicationId: null;
//   readonly DocumentId: number;
//   readonly DocumentPath: string;
//   readonly Verified: boolean;
// }
// export interface IApprovedApplicationPopUpValues {
//   readonly AgreementTypeId: number;
//   readonly AgreementTypeName: string;
//   readonly AllocationSubTypeId: number;
//   readonly AllocationTo: string;
//   readonly AllocationTypeId: number;
//   readonly AllocationTypeName: string;
//   readonly ApplicationId: string;
//   readonly OrgGST: string;
//   readonly OrgRegistrationNumber: string;
//   readonly OrgTinNumber: string;
//   readonly OrganiztionName: string;
//   // tslint:disable-next-line:object-literal-sort-keys
//   readonly OrgPhoneNumber: string;
//   readonly WebsiteURL: string;
//   readonly OrgEmailid: string;
//   readonly OrgAddress1: string;
//   readonly OrgAddress2: string;
//   readonly OrgCountryId: number;
//   readonly OrgCountryName: string;
//   readonly OrgStateId: number;
//   readonly OrgStateName: string;
//   readonly OrgCityName: string;
//   readonly OrgZipCode: string;
//   readonly AuthPersonName: string;
//   readonly AuthEmailId: string;
//   readonly AuthPhoneNumber: string;
//   readonly AuthAddress1: string;
//   readonly AuthAddress2: string;
//   readonly AuthPhotoIdType: string;
//   readonly AuthPhotoIdNumber: string;
//   readonly AuthPhotoIdPath: string;
//   readonly LandAllocationTypeId: number;
//   readonly LandAllocationType: string;
//   readonly AvailableLandArea: number;
//   readonly AvailbleLandAreaUnits: number;
//   readonly RequiredLandArea: number;
//   readonly UnitFormatId: number;
//   readonly UnitFormatName: string;
//   readonly TenurePeriodId: number;
//   readonly TenurePeriod: string;
//   readonly LeaseAmountperAcre: number;
//   readonly LeaseAmountperAnnum: number;
//   readonly LeaseStartDate: string;
//   readonly LeaseEndDate: string;
//   readonly ProjectTitle: string;
//   readonly ProjPurpose: string;
//   readonly ProjStartDate: string;
//   readonly ProjEndDate: string;
//   readonly ProjBudget: number;
//   readonly ProjDescription: string;
//   readonly ThemeCityId: number;
//   readonly ThemeCityName: string;
//   readonly PhotoIdType: number;
//   readonly FirstName: string;
//   readonly LastName: string;
//   readonly DocumentsVerifiedList: ReadonlyArray<IDocumentsVerifiedList>;
//   readonly ProjectRules: string;
//   readonly WorkflowComments: null;
//   readonly ProcessId: number;
//   readonly CurrentActivityId: number;
//   readonly CurrentActivityOrderId: number;
//   readonly LandAreaAllotedByEstates: number;
//   readonly ParcelId: string;
//   readonly SurveyNumber: string;
//   readonly GOMnumber: string;
//   readonly GOMdate: string;
//   readonly LOIdate: string;
//   readonly DistrictId: number;
//   readonly MandalId: number;
//   readonly VillageId: number;
//   readonly District: string;
//   readonly Mandal: string;
//   readonly Village: string;
//   readonly Boundaries: string;
//   readonly SurveyNumberByPlanning: string;
//   readonly PricePerUnit: number;
//   readonly TotalAmount: number;
//   readonly InitialAllocation: number;
//   readonly InitialAllocationLandSize: number;
//   readonly InitialAllocationLandSizeType: number;
//   readonly TotalAmountInRupees: string;
//   readonly LeaseAmountperAnnumInRupees: string;
//   readonly RequiredLandAreaBeforeAllocation: number;
//   readonly LandAreaAllotedByEstatesInSqMeters: number;
//   readonly IsRequestFromMap: boolean;
//   readonly RelationType: number;
//   readonly RelationName: string;
//   readonly DateOfBirth: string;
//   readonly AddRuleThemeCityType: number;
//   readonly ProjectRuleType: number;
//   readonly RelationTypeAndName: string;
//   readonly Bhudhaar: string;
//   readonly WitnessName: null;
//   readonly OrgPAN: null;
//   readonly AgreementName: null;
//   readonly AgreementPurpose: null;
//   readonly ProjectFundedBy: null;
//   readonly ProjectCoOrinator: null;
//   readonly AgreementDescription: null;
//   readonly LeaseTenure: number;
//   readonly RenewalForEvery: null;
//   readonly RenewalLoanAmount: number;
//   readonly ApplicationSubmittedDate: null;
//   readonly StrDateOfBirth: null;
//   readonly RelativeAge: number;
//   readonly TypeOfAllocation: number;
// }

// export interface IApprovedApplicationExpandItemProps {
//   readonly ApprovedPopUpValues: IApprovedApplicationPopUpValues;
// }

// export interface IApprovedApplicationPopUpProps {
//   readonly approvedApplicationPopUpList: ReadonlyArray<
//     IApprovedApplicationPopUpValues
//   >;
// }

// export interface IApplicationStateProps {
//   readonly approvedApplicationList: ReadonlyArray<
//     IApprovedApplicationStateValues
//   >;
//   readonly page: number;
//   readonly count: number;
//   readonly rowsPerPage: number;
//   readonly emptyRows: number;
//   readonly searchInput: string;
//   readonly open: boolean;
//   readonly dialogOpen: boolean;
//   readonly expandApplicationId: string;
//   readonly approvedApplicationPopUpList: ReadonlyArray<
//     IApprovedApplicationPopUpValues
//   >;
//   onHandleSearch(event: any): void;
//   onHandleClick(event: any): void;
//   onHandleActionClick(event: any): void;
//   onHandleClose(): void;
//   onHandleChangeRowsPerPage(event: any): void;
//   onHandlePageChange(evt: any, page: number): void;
// }

// export interface IMilestoneStateProps {
//   readonly milestoneList: ReadonlyArray<IApprovedApplicationStateValues>;
//   readonly expandMilestoneId: string;
//   readonly MileStoneIdopen: boolean;
//   readonly Milepage: number;
//   readonly MileemptyRows: number;
//   handleMileIdClick(event: any): void;
// }

// class ApprovedApplicationState extends React.Component<
//   IApplicationStateProps & IMilestoneStateProps & any
// > {
//   public state = {
//     approvedApplicationList: [],
//     page: 0,
//     rowsPerPage: 5,
//     // tslint:disable-next-line:object-literal-sort-keys
//     emptyRows: 0,
//     searchInput: "",
//     open: false,
//     expandApplicationId: "",
//     dialogOpen: false,
//     expandApplicationList: [],
//     approvedApplicationPopUpList: [],
//     milestoneList: [],
//     expandMilestoneId: "",
//     milepage: 0,
//     MileemptyRows: 0,
//     MileStoneIdopen: false
//   };

//   constructor(props: IApplicationStateProps & IMilestoneStateProps) {
//     super(props);
//   }

//   public componentWillMount() {
//     // Fetch Call for Submited Applications
//     getApprovedApplications()
//       .then(res => {
//         this.setState({
//           ...this.state,
//           approvedApplicationList: res.aaData
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   }

//   // For PageChange
//   public handleChangePage = (event: any, p: number) => {
//     this.setState({ ...this.state, page: p });
//   };

//   // for Rows Per Page Change
//   public handleChangeRowsPerPage = (event: any) => {
//     this.setState({ ...this.state, rowsPerPage: event.target.value });
//   };

//   // for Search Input Change
//   public onHandleSearch = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event.target.value);
//     this.setState({ ...this.state, searchInput: event.target.value });
//   };

//   // onClick Expands based on Application Id
//   public handleClick = (event: any) => {
//     this.setState({
//       ...this.state,
//       expandApplicationId: event,
//       open: !this.state.open
//     });
//   };

//   // onClick Expands based on MileStone Id
//   public handleMileIdClick = (event: any) => {
//     this.setState({
//       ...this.state,
//       expandMilestoneId: event,
//       // tslint:disable-next-line:object-literal-sort-keys
//       MileStoneIdopen: !this.state.MileStoneIdopen
//     });
//     this.props.history.push(`/page/milestone/${event}`);
//   };

//   // fetch Call for Pop Up details based on ID
//   public handleActionClick = (event: any) => {
//     getApprovedApplicationsPopUpData(event)
//       .then(res => {
//         // this.props.history.push("/page/milestone");
//         this.setState({
//           ...this.state,
//           approvedApplicationPopUpList: res,
//           dialogOpen: true
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   // To Close Dialog PopUp
//   public handleClose = () => {
//     this.setState({ ...this.state, dialogOpen: false });
//   };

//   public render() {
//     const emptyRows =
//       this.state.rowsPerPage -
//       Math.min(
//         this.state.rowsPerPage,
//         this.state.approvedApplicationList.length -
//           this.state.page * this.state.rowsPerPage
//       );
//     const MileemptyRows =
//       this.state.rowsPerPage -
//       Math.min(
//         this.state.rowsPerPage,
//         this.state.milestoneList.length -
//           this.state.page * this.state.rowsPerPage
//       );

//     return (
//       <div className="innerpage-container">
//         <div className="graph-card">
//           <Card>
//             <CardContent>
//               <Typography
//                 gutterBottom={true}
//                 variant="headline"
//                 component="h4"
//                 className="grap-heading"
//               >
//                 <img src="/images/table-icon.png" />
//                 Approved Applications
//               </Typography>
//             </CardContent>
//             <ApprovedApplicationSubmitForm
//               count={this.state.approvedApplicationList.length}
//               milestoneList={this.state.milestoneList}
//               expandMilestoneId={this.state.expandMilestoneId}
//               Milepage={1}
//               MileStoneIdopen={this.state.MileStoneIdopen}
//               MileemptyRows={MileemptyRows}
//               handleMileIdClick={this.handleMileIdClick}
//               approvedApplicationList={this.state.approvedApplicationList}
//               page={this.state.page}
//               rowsPerPage={this.state.rowsPerPage}
//               emptyRows={emptyRows}
//               searchInput={this.state.searchInput}
//               onHandleSearch={this.onHandleSearch}
//               open={this.state.open}
//               dialogOpen={this.state.dialogOpen}
//               onHandleClick={this.handleClick}
//               onHandleActionClick={this.handleActionClick}
//               onHandleClose={this.handleClose}
//               expandApplicationId={this.state.expandApplicationId}
//               approvedApplicationPopUpList={
//                 this.state.approvedApplicationPopUpList
//               }
//               onHandlePageChange={this.handleChangePage}
//               onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
//             />
//           </Card>
//         </div>
//       </div>
//     );
//   }
// }

// export default ApprovedApplicationState;
