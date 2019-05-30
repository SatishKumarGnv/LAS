// import { Button, Card, CardContent, Typography } from "@material-ui/core";

// import * as React from "react";
// import { Route, Switch } from "react-router";
// import {
//   GetAssessmentDetailsByID,
//   GetDashboardPropertyChangePendingItems,
//   getPropertyChangeDetailsID,
//   GetPropertyConfigurationDetailsByID,
//   GetPTMSDashboardPendingItems,
//   GetTaxvaluationPendingTasks
// } from "src/Api_Integration/PropertyTaxConfigurationService";
// import { IGoValues, IwitnessValues } from "src/DefaultLayout/HomePage";
// import {
//   getAllocatedNameDetails,
//   GetDashboardApprovalData,
//   getDashboardLandDetails,
//   getDashboardPieChartDetails,
//   getDashboardViewDetails
// } from "../Api_Integration/DashboardService";
// import { AllotedDetailTableForm } from "../Dashboard/AllotedInTable";
// import DashboardForm from "../Dashboard/Dashboard1";
// import ViewDetailTableForm from "../Dashboard/ViewDetailsTable";
// import { IProcessCommentsValues } from "../DefaultLayout/HomePage";

// export interface IDashboardStateValues {
//   readonly District: number;
//   readonly Mandal: number;
//   readonly Village: number;
//   readonly ApplicationId: null;
//   readonly LandSize: number;
//   readonly TownshipName: string;
//   readonly ProjectType: null;
//   readonly ProjectSubType: null;
//   readonly LeaseTenure: null;
//   readonly LeaseStartDate: null;
//   readonly LeaseEndDate: null;
//   readonly MandalName: null;
//   readonly DistrictName: null;
//   readonly PropertyImage: null;
//   readonly KMLpath: null;
//   readonly AvailableLandSize: number;
//   readonly TownshipId: number;
//   readonly TotalLandSize: number;
//   readonly LogoImagePath: string;
//   readonly VillageName: null;
//   readonly PlotCode: null;
// }
// export interface IDashboardPieChartStateValues {
//   readonly Count: number;
//   readonly StatusName: string;
//   readonly TownshipName: null;
//   readonly TownshipId: number;
// }

// export interface IDocumentValues {
//   readonly ApplicationId: null;
//   readonly DocumentId: number;
//   readonly DocumentPath: string;
//   readonly Verified: boolean;
// }

// export interface IDocumentProps {
//   readonly DocumentsVerifiedList: ReadonlyArray<IDocumentValues>;
// }

// export interface ISearchValues {
//   WithInAGC: boolean;
//   OutOfAGC: boolean;
//   LandArea: number;
//   Township: number;
//   AmountTobePaid: number;
//   AmountPaid: number;
//   TotalLandCost: number;
//   RegisteredOrNot: boolean;
//   InitialAllocatedParcelNumber: number;
//   InitialAllocatedSurveyNumber: number;
//   GOMDetails: ReadonlyArray<IGoValues>;
//   AuthPersonName: string;
//   InitialAllocationSizeInAcres: number;
//   InitialAllocationLandSize: number;
//   AuthPersonName2: string;
//   AuthDateOfBirth: string;
//   WitnessDetailsFormArray: ReadonlyArray<IwitnessValues>;
//   ProcessComments: ReadonlyArray<IProcessCommentsValues>;
//   CompleteDetails: string;
//   GlobalId: string;
//   GeometricString: string;
//   TempGlobalId: string;
//   GeometryDataFromMap: string;
//   AllocationTypeId: number;
//   ApplicationId: string;
//   AllocationTo: string;
//   AllocationSubTypeId: number | undefined;
//   AllocationTypeName: string;
//   AgreementTypeId: number | undefined;
//   AgreementTypeName: string;
//   OrganiztionName: string;
//   OrgRegistrationNumber: string;
//   OrgTinNumber: string;
//   OrgGST: string;
//   OrgPhoneNumber: string;
//   WebsiteURL: string;
//   OrgEmailid: string;
//   OrgAddress1: string;
//   OrgAddress2: string;
//   OrgCountryId: number | undefined;
//   OrgCountryName: string;
//   OrgStateId: number | undefined;
//   OrgStateName: string;
//   OrgCityName: string;
//   OrgZipCode: string;
//   AuthPersonName1: string;
//   AuthEmailId: string;
//   AuthPhoneNumber: string;
//   AuthAddress1: string;
//   AuthAddress2: string;
//   AuthPhotoIdType: string;
//   AuthPhotoIdNumber: string;
//   AuthPhotoIdPath: string;
//   LandAllocationTypeId: number;
//   LandAllocationType: string;
//   AvailableLandArea: number;
//   AvailbleLandAreaUnits: number;
//   RequiredLandArea: number;
//   UnitFormatId: number | undefined;
//   UnitFormatName: string;
//   TenurePeriodId: number;
//   TenurePeriod: string;
//   LeaseAmountperAcre: number;
//   LeaseAmountperAnnum: number;
//   LeaseStartDate: string;
//   LeaseEndDate: string;
//   ProjectTitle: string;
//   ProjPurpose: string;
//   ProjStartDate: string;
//   ProjEndDate: string;
//   ProjBudget: number;
//   ProjDescription: string;
//   TownshipId: number;
//   TownshipName: string;
//   PhotoIdType: number | undefined;
//   FirstName: string;
//   LastName: string;
//   DocumentsVerifiedList: ReadonlyArray<IDocumentValues>;
//   ProjectRules: string;
//   WorkflowComments: string;
//   ProcessId: number;
//   CurrentActivityId: number;
//   CurrentActivityOrderId: number;
//   LandAreaAllotedByEstates: number;
//   ParcelId: string;
//   SurveyNumber: string;
//   GOMnumber: string;
//   GOMdate: string;
//   LOIdate: string;
//   DistrictId: number;
//   MandalId: number;
//   VillageId: number;
//   District: string;
//   Mandal: string;
//   Village: string;
//   Boundaries: string;
//   SurveyNumberByPlanning: string;
//   PricePerUnit: number;
//   TotalAmount: number;
//   InitialAllocation: number;
//   InitialAllocationLandSizeType: number;
//   TotalAmountInRupees: string;
//   LeaseAmountperAnnumInRupees: string;
//   RequiredLandSizeBeforeAllocation: number;
//   InitialAllocationInAcres: number;
//   LandAreaAllotedByEstatesInSqMeters: number;
//   IsRequestFromMap: boolean;
//   RelationType: number | undefined;
//   RelationName: string;
//   DateOfBirth: string;
//   AddRuleThemeCityType: number;
//   ProjectRuleType: number;
//   RelationTypeAndName: string;
//   Bhudhaar: string;
//   WitnessName: string;
//   OrgPAN: string;
//   AgreementName: string;
//   AgreementPurpose: string;
//   ProjectFundedBy: string;
//   ProjectCoOrinator: string;
//   AgreementDescription: string;
//   LeaseTenure: number;
//   RenewalForEvery: number;
//   RenewalLoanAmount: number;
//   ApplicationSubmittedDate: string;
//   StrDateOfBirth: string;
//   RelativeAge: number;
//   TypeOfAllocation: number | undefined;
//   Block: string;
//   plot: string;
//   TownShip: string;
//   Sector: string;
//   Colony: string;
//   Plot: string;
// }

// export interface IDashboardStateProps {
//   readonly dashboardData: ReadonlyArray<IDashboardStateValues>;
//   readonly dashboardLinkData: ReadonlyArray<ISearchValues>;
//   handleClick(id: number): void;
//   handleOnClick(id: number): void;
//   handlePTMSDashboardPendingItems(id: string): void;
//   handleDshboardPropertyTaxPendingItems(id: string): void;
//   handleDashboardPropertyChangePendingItems(id: string): void;
// }
// export interface IViewDetailsStateValues {
//   readonly DistrictName: string;
//   readonly MandalName: string;
//   //   readonly MiddleName: string;
//   readonly VillageName: string;
//   readonly TownshipId: number;
//   readonly PlotCode: number;
//   readonly AvailableLandSize: number;
//   readonly TotalLandSize: number;
// }
// export interface IViewDetailStateProps {
//   readonly changeViewValues: ReadonlyArray<IViewDetailsStateValues>;
//   readonly page: number;
//   readonly rowsPerPage: number;
//   readonly count: number;
//   readonly searchInput: string;
//   onHandleDashboardSearch(event: any): void;
//   onHandleChangeRowsPerPage(event: any): void;
//   onHandlePageChange(evt: any, page: number): void;
//   // handleClick(event:any):void

//   // onSelectAllClick(evt: any): void;
// }
// export interface IAllotedDetailsStateValues {
//   readonly ApplicationId: string;
//   readonly OrganiztionName: string;
//   //   readonly MiddleName: string;
//   readonly RequiredLand: string;
//   readonly AllotedLand: number;
//   readonly ApplicationCurrentStatus: string;
//   readonly LandonHold: string;
//   readonly AllocateTo: string;
//   readonly AllocationName: string;
//   readonly ProjectName: string;
//   readonly Status: string;
// }
// export interface IAllotedDetailStateProps {
//   readonly selectedAllotedList: ReadonlyArray<IAllotedDetailsStateValues>;
//   readonly page: number;
//   readonly rowsPerPage: number;
//   readonly count: number;
//   readonly searchInput: string;
//   onHandleSearch1(event: any): void;
//   onHandleChangeRowsPerPage(event: any): void;
//   onHandlePageChange(evt: any, page: number): void;
//   // handleClick(event:any):void

//   // onSelectAllClick(evt: any): void;
// }

// export interface IDashboardPieChartStateProps {
//   readonly TotalPieChartCount: number;
//   readonly dashboardPieChartData: ReadonlyArray<IDashboardPieChartStateValues>;
// }
// export interface IAllotedExpandRowProps {
//   readonly changeAllotedValues: IAllotedDetailsStateValues;
//   readonly selectedAllotedList: ReadonlyArray<IAllotedDetailsStateValues>;
//   readonly expandApplicationId: string;
//   readonly open: boolean;
//   readonly dialogExpandOpen: boolean;
//   onHandleClose(): void;
//   handleClick(event: IAllotedDetailsStateValues): void;
// }
// export interface IAllotedValueProps {
//   readonly AllotedApprovalValues: IAllotedDetailsStateValues;
// }
// export interface IDashboardApprovalValues {
//   ApplicationId: string;
//   LandlordName: null;
//   LandlordPhoneNumber: null;
//   AppointmentDate: string;
//   Status: string;
//   ApplicationType: null;
//   ApplicationSubType: null;
//   UserId: number;
//   IsDateRange: number;
//   EstimatedEndDate: string;
//   OrganizationName: string;
//   ProcessComments: string;
// }

// export interface IPTMSDashboardItems {
//   readonly RequestId: string;
//   readonly ApplicantName: string;
//   readonly ApplicationStatus: string;
// }

// export interface IDashboardApprovalProps {
//   readonly dashboardApprovalData: ReadonlyArray<IDashboardApprovalValues>;
//   readonly dashboardPropertyChangePendingItems: ReadonlyArray<any>;
//   readonly dashboardPropertyTaxPendingItems: ReadonlyArray<any>;
//   readonly DashboardPendingItems: ReadonlyArray<any>;
// }

// export class DashboardState extends React.Component<
//   IDashboardStateProps &
//     IDashboardPieChartStateValues &
//     IViewDetailStateProps &
//     IAllotedDetailStateProps &
//     any
// > {
//   public state = {
//     dashboardApprovalData: [],
//     dashboardData: [],
//     dashboardLinkData: [],
//     dashboardPieChartData: [],
//     // tslint:disable-next-line:object-literal-sort-keys

//     DistrictName: "",
//     MandalName: "",
//     //   readonly MiddleName: string;
//     VillageName: "",
//     // tslint:disable-next-line:object-literal-sort-keys
//     TownshipId: 0,
//     PlotCode: 0,
//     AvailableLandSize: 0,
//     TotalLandSize: 0,
//     changeViewValues: [],
//     changeAllotedValues: {
//       AllocateTo: "",
//       AllocationName: "",
//       AllotedLand: 0,
//       ApplicationCurrentStatus: "",
//       ApplicationId: "",
//       LandonHold: "",
//       OrganiztionName: "",
//       ProjectName: "",
//       //   readonly MiddleName: string;
//       RequiredLand: "",
//       Status: ""
//     },
//     dialogExpandOpen: false,
//     expandApplicationId: "",
//     selectedViewList: [],
//     selectedAllotedList: [],
//     // tslint:disable-next-line:object-literal-sort-keys
//     emptyRows: 0,
//     emptyRows2: 0,
//     // tslint:disable-next-line:object-literal-sort-keys
//     count: 0,

//     page: 0,
//     rowCount: 0,
//     numSelected: 0,
//     rowsPerPage: 5,
//     changePasswordValues: [],
//     searchInput: "",
//     open: false,
//     TotalPieChartCount: 0,
//     dashboardPropertyChangePendingItems: [],
//     dashboardPropertyTaxPendingItems: [],
//     DashboardPendingItems: []
//   };
//   constructor(
//     props: IDashboardStateProps &
//       IDashboardPieChartStateValues &
//       IViewDetailStateProps &
//       IAllotedDetailStateProps &
//       any
//   ) {
//     super(props);
//   }
//   // tslint:disable:no-console

//   public async componentWillMount() {
//     const res1 = await getDashboardLandDetails();
//     const loader = document.getElementById("loading");
//     try {
//       if (loader) {
//         loader.style.display = "block";
//       }
//       const res2 = await getDashboardPieChartDetails();
//       const res3 = await GetDashboardApprovalData();
//       const res4 = await GetPTMSDashboardPendingItems();
//       const res5 = await GetDashboardPropertyChangePendingItems();
//       const res6 = await GetTaxvaluationPendingTasks();

//       this.setState({
//         ...this.state,
//         DashboardPendingItems: res4 && res4.PendingRequests,
//         dashboardApprovalData: res3.objDetails,
//         dashboardData: res1.aaData,
//         dashboardPieChartData: res2.model,
//         dashboardPropertyChangePendingItems: res5 && res5.PendingRequests,
//         dashboardPropertyTaxPendingItems: res6 && res6.PendingRequests,
//         // tslint:disable-next-line:object-literal-sort-keys
//         TotalPieChartCount: res2.model
//           .map((x: IDashboardPieChartStateValues) => x.Count)
//           .reduce((x: number, y: number) => x + y, 0)
//       });
//       if (loader != null) {
//         loader.style.display = "none";
//       }
//     } catch (err) {
//       if (loader != null) {
//         loader.style.display = "none";
//       }
//       console.log(err);
//     }
//   }
//   public handleChangePage = (event: any, p: number) => {
//     this.setState({ ...this.state, page: p });
//   };
//   public handleChangeRowsPerPage = (event: any) => {
//     this.setState({ ...this.state, rowsPerPage: event.target.value });
//   };
//   public onHandleClose = () => {
//     this.setState({ ...this.state, dialogExpandOpen: false });
//   };
//   public onHandleAllotedDetailsClick = (event: IAllotedDetailsStateValues) => {
//     this.setState({
//       ...this.state,
//       changeAllotedValues: event,
//       expandApplicationId: event.ApplicationId,
//       open: !this.state.open,
//       // tslint:disable-next-line:object-literal-sort-keys
//       dialogExpandOpen: true
//     });
//   };
//   public printDiv = (divId: string) => {
//     // tslint:disable-next-line:no-console
//     const base64 = document.getElementsByTagName("canvas")[0].toDataURL();

//     const imagedata = atob(base64.split(",")[1]);
//     // Use typed arrays to convert the binary data to a Blob
//     const arraybuffer = new ArrayBuffer(imagedata.length);
//     const view = new Uint8Array(arraybuffer);
//     for (let i = 0; i < imagedata.length; i++) {
//       // tslint:disable-next-line:no-bitwise
//       view[i] = imagedata.charCodeAt(i) & 0xff;
//     }
//     try {
//       // This is the recommended method:
//       const blob = new Blob([arraybuffer], {
//         type: "application/octet-stream"
//       });
//       const url = window.URL.createObjectURL(blob);
//       location.href = url;
//     } catch (e) {
//       // The BlobBuilder API has been deprecated in favour of Blob, but older
//       // browsers don't know about the Blob constructor
//       // IE10 also supports BlobBuilder, but since the `Blob` constructor
//       //  also works, there's no need to add `MSBlobBuilder`.
//       // var bb = new (window.WebKitBlobBuilder || window.MozBlobBuilder)();
//       // bb.append(arraybuffer);
//       // var blob = bb.getBlob("application/octet-stream"); // <-- Here's the Blob
//     }
//   };
//   public handleDashboardViewClick = (id: number) => {
//     this.setState({
//       ...this.state,
//       TownshipId: id
//     });
//     getDashboardViewDetails(id)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           count: res.aaData.length,
//           selectedViewList: res.aaData
//         });
//         this.props.history.push(`/page/dashboard/viewDetails/${id}`);
//       })
//       .catch(err => err);
//   };
//   public handleOnClick = (id: number) => {
//     this.setState({
//       ...this.state,
//       TownshipId: id
//     });
//     getAllocatedNameDetails(id)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           count: res.aaData.length,
//           selectedAllotedList: res.aaData
//         });
//         this.props.history.push(`/page/dashboard/AllotedDetails/${id}`);
//       })
//       .catch(err => err);
//   };
//   public onHandleDashboardSearch = (event: any) => {
//     const searchInput = event.target.value;
//     const data = this.state.selectedViewList.filter(
//       (x: IViewDetailsStateValues) =>
//         searchInput !== ""
//           ? x.DistrictName.toLowerCase().includes(searchInput.toLowerCase()) ||
//             x.MandalName.toLowerCase().includes(searchInput.toLowerCase()) ||
//             x.VillageName.toLowerCase().includes(searchInput.toLowerCase()) ||
//             // x.props.changeViewValues.PlotCode.toString().includes(
//             //   props.searchInput
//             // ) ||
//             x.TotalLandSize.toString()
//               .toLowerCase()
//               .includes(searchInput.toLowerCase()) ||
//             x.AvailableLandSize.toString()
//               .toLowerCase()
//               .includes(searchInput.toLowerCase())
//           : true
//     );
//     this.setState({
//       ...this.state,
//       count: data.length,
//       searchInput
//     });
//   };
//   public onHandleSearch1 = (event: any) => {
//     const searchInput = event.target.value;
//     const data = this.state.selectedAllotedList.filter(
//       (x: IAllotedDetailsStateValues) =>
//         searchInput !== ""
//           ? x.ApplicationId.toLowerCase().includes(searchInput.toLowerCase()) ||
//             x.OrganiztionName.toLowerCase().includes(
//               searchInput.toLowerCase()
//             ) ||
//             x.RequiredLand.toString()
//               .toLowerCase()
//               .includes(searchInput.toLowerCase()) ||
//             x.AllotedLand.toString()
//               .toLowerCase()
//               .includes(searchInput.toLowerCase()) ||
//             x.ApplicationCurrentStatus.toString()
//               .toLowerCase()
//               .includes(searchInput.toLowerCase())
//           : x
//     );
//     this.setState({
//       ...this.state,
//       count: data.length,
//       searchInput
//     });
//   };

//   public handlePTMSDashboardPendingItems = (id: string) => {
//     localStorage.setItem("requestIdStore", id);
//     GetAssessmentDetailsByID(id)
//       .then(res => {
//         console.log(res);
//         this.setState({ ...this.state });
//       })
//       .then(() => {
//         this.props.history.push(`/page/ptms/newpropertyregistration/${id}`);
//       });
//     console.log(id);
//   };

//   public handleDashboardPropertyChangePendingItems = (id: string) => {
//     localStorage.setItem("requestIdStore", id);
//     getPropertyChangeDetailsID(id)
//       .then(res => {
//         this.setState({ ...this.state });
//       })
//       .then(() => {
//         this.props.history.push(`/page/ptms/propertychange/${id}`);
//       });
//   };

//   public handleDshboardPropertyTaxPendingItems = (id: string) => {
//     localStorage.setItem("requestIdStore", id);
//     GetPropertyConfigurationDetailsByID(id)
//       .then(res => {
//         this.setState({ ...this.state });
//       })
//       .then(() => {
//         this.props.history.push(`/page/ptms/propertytaxconfiguration/${id}`);
//       });
//   };
//   public onSubmit = (evt: any) =>
//     // tslint:disable-next-line:no-console
//     console.log(evt);

//   // public onHandleDashboardLink = (event: any) => {
//   //   postDashboardLinkAppilcationId(event.target.textContent)
//   //     .then(res => {
//   //       this.setState({ ...this.state, dashboardLinkData: res.applicationDetailsViewModelLst });
//   //     })
//   //     .catch(err => console.log(err));

//   // };
//   public tableComponent = () => {
//     return (
//       <div className="innerpage-container">
//         <div className="reports-card">
//           <div className="bottom-save-btn">
//             <Button
//               className="save-btn"
//               // tslint:disable-next-line:jsx-no-lambda
//               onClick={() => {
//                 this.props.history.push("/page/dashboard");
//               }}
//             >
//               BACK
//             </Button>
//           </div>
//           <Card>
//             <CardContent>
//               <Typography
//                 gutterBottom={true}
//                 variant="headline"
//                 component="h4"
//                 className="grap-heading"
//               >
//                 <img src="/images/table-icon.png" />
//                 Lands in Township {this.state.TownshipId}
//               </Typography>
//             </CardContent>
//             <ViewDetailTableForm
//               onHandleDashboardSearch={this.onHandleDashboardSearch}
//               page={this.state.page}
//               rowsPerPage={this.state.rowsPerPage}
//               count={this.state.count}
//               searchInput={this.state.searchInput}
//               onHandlePageChange={this.handleChangePage}
//               onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
//               changeViewValues={this.state.selectedViewList}
//             />
//           </Card>
//         </div>
//       </div>
//     );
//   };
//   public tableAllotedComponent = () => {
//     return (
//       <div className="innerpage-container">
//         <div className="reports-card">
//           <div className="bottom-save-btn">
//             <Button
//               className="save-btn"
//               // tslint:disable-next-line:jsx-no-lambda
//               onClick={() => {
//                 this.props.history.push("/page/dashboard");
//               }}
//             >
//               x
//             </Button>
//           </div>
//           <Card>
//             <CardContent>
//               <Typography
//                 gutterBottom={true}
//                 variant="headline"
//                 component="h4"
//                 className="grap-heading"
//               >
//                 <img src="/images/table-icon.png" />
//                 Allocated/In-Progress List in undefined
//               </Typography>
//             </CardContent>
//             <AllotedDetailTableForm
//               handleClick={this.onHandleAllotedDetailsClick}
//               onHandleSearch1={this.onHandleSearch1}
//               page={this.state.page}
//               rowsPerPage={this.state.rowsPerPage}
//               count={this.state.count}
//               searchInput={this.state.searchInput}
//               onHandlePageChange={this.handleChangePage}
//               onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
//               changeAllotedValues={this.state.changeAllotedValues}
//               selectedAllotedList={this.state.selectedAllotedList}
//               expandApplicationId={this.state.expandApplicationId}
//               open={this.state.open}
//               dialogExpandOpen={this.state.dialogExpandOpen}
//               onHandleClose={this.onHandleClose}
//             />
//           </Card>
//         </div>
//       </div>
//     );
//   };
//   public renderDashboard = () => {
//     return (
//       <div>
//         <DashboardForm
//           handleDashboardPropertyChangePendingItems={
//             this.handleDashboardPropertyChangePendingItems
//           }
//           handleDshboardPropertyTaxPendingItems={
//             this.handleDshboardPropertyTaxPendingItems
//           }
//           handlePTMSDashboardPendingItems={this.handlePTMSDashboardPendingItems}
//           dashboardPropertyChangePendingItems={
//             this.state.dashboardPropertyChangePendingItems
//           }
//           dashboardPropertyTaxPendingItems={
//             this.state.dashboardPropertyTaxPendingItems
//           }
//           DashboardPendingItems={this.state.DashboardPendingItems}
//           TotalDashboardPieChartCount={this.state.TotalPieChartCount}
//           dashboardApprovalData={this.state.dashboardApprovalData}
//           dashboardLinkData={this.state.dashboardLinkData}
//           dashboardData={this.state.dashboardData}
//           // onHandleDashboardLink={this.onHandleDashboardLink}
//           // TotalPieChartCount={this.state.TotalPieChartCount}
//           dashboardPieChartData={this.state.dashboardPieChartData}
//           handleClick={this.handleDashboardViewClick}
//           handleOnClick={this.handleOnClick}
//           printDiv={this.printDiv}
//         />
//       </div>
//     );
//   };
//   public render() {
//     return (
//       <div>
//         <Switch>
//           <Route
//             exact={true}
//             path="/page/dashboard/viewDetails/:id"
//             render={this.tableComponent}
//           />
//           <Route
//             exact={true}
//             path="/page/dashboard/AllotedDetails/:id"
//             render={this.tableAllotedComponent}
//           />

//           <Route path="/page/dashboard" render={this.renderDashboard} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default DashboardState;
