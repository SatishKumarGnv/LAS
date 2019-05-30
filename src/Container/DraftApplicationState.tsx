// import * as moment from "moment";

// import * as React from "react";

// // tslint:disable-next-line:ordered-imports
// import { Route, Switch } from "react-router-dom";
// import { getDashboardLandDetails } from "src/Api_Integration/DashboardService";
// import {
//   CompleteDetailsToDB,
//   ConditionTypeValues,
//   getAgreementTypeValues,
//   getCountryValues,
//   getLandAllocationTypeValues,
//   getStateValues,
//   getTownShipValues,
//   getTypeOfAllocationDropDown,
//   getUnitValues,
//   LeaseTenureValues,
//   mileStoneValues,
//   postAuthorisedSaveContinue,
//   postDepartmentUserDropDownList,
//   postDownloadFileValues,
//   postPhotoId,
//   postRelationTypeId,
//   postSaveAndContinue,
//   postSaveAsDraftValues,
//   postWitnessSaveAndContinue,
//   RuleTypeValues,
//   SourceTypeValues,
//   SubmitMilestoneDetails
// } from "src/Api_Integration/ProposalService";
// import { getAllocatedValues } from "../Api_Integration/ApplicationSearchService";
// // import { ISelectDepartmentvalues } from "./ApplicationState";
// import { IDashboardStateValues } from "./Dashboard";

// import AllocationForm from "src/ProposalForm/AllocationForm";
// import CreateProposalTownshipForm from "src/ProposalForm/CreateProposalTownshipForm";

// import DraftApplicationForm from "../LandAllocation/DraftApplicationTable";
// import ProposalForm from "./ProposalFormState";
// import {
//   IAgremmentTypeValues,
//   IAllocationValues,
//   IAuthorisedProps,
//   ICityValues,
//   IConditionValueProps,
//   IConditionValues,
//   ICountryValues,
//   ICreateProposalProps,
//   ILandAllocationValues,
//   ILeaseTenureProps,
//   ILeaseValues,
//   IMileStoneDetailsProps,
//   IMileStoneDetailsStateValues,
//   IMilestoneDropDownProps,
//   IMileStoneDropDownValues,
//   IMileStoneValues,
//   IPhotoIdTypeProps,
//   IPhotoIdTypeValues,
//   IProjectRuleTypeProps,
//   IProjectValuesProps,
//   IProposalTabStateValues,
//   IRelationTypeProps,
//   IRelationTypeValues,
//   IRuleTypeValues,
//   IRuleTypeValuesProps,
//   ISelectAllocationProps,
//   ISelectCountryProps,
//   ISelectLandAllocationProps,
//   ISelectStateProps,
//   ISourceValues,
//   IStateValues,
//   ITownshipValues,
//   ITypeOfAllocationValues,
//   IUnitProps,
//   IUnitValues,
//   IWitnessDetailsProps,
//   remove
// } from "./ProposalState";
// import {
//   IApplicationStateValues,
//   ISubmitApplicationPopUpValues
// } from "./SubmittedApplicationState";

// // export interface IProposalApplicationValues {
// //   readonly ProposalFormApplicationIdValues: ReadonlyArray<ISearchValues>;
// // }

// class DraftApplicationState extends React.Component<
//   // IDraftApplicationStateProps &
//   IRelationTypeProps &
//     IPhotoIdTypeProps &
//     IProposalTabStateValues &
//     ILandAllocationValues &
//     ICountryValues &
//     IStateValues &
//     IAuthorisedProps &
//     ICityValues &
//     ILandAllocationValues &
//     IWitnessDetailsProps &
//     ISelectLandAllocationProps &
//     IUnitProps &
//     IUnitValues &
//     ILeaseValues &
//     ILeaseTenureProps &
//     IMileStoneDetailsProps &
//     IRuleTypeValuesProps &
//     IProjectRuleTypeProps &
//     ICreateProposalProps &
//     any
// > {
//   public state = {
//     TownshipId: 0,
//     // tslint:disable-next-line:object-literal-sort-keys
//     LandAllocatedToId: 1,
//     townshipValues: [],
//     LandAllocatedTo: "1",
//     uploadPopUpOpen: false,
//     // tslint:disable-next-line:object-literal-sort-keys

//     allocationTypeId: 0,

//     authorizedPersonName: "",

//     // tslint:disable-next-line:object-literal-sort-keys
//     OrganizationName: "",
//     authorisedPersonEmailAddress: "",
//     // tslint:disable-next-line:object-literal-sort-keys
//     AgreementId: 0,
//     AgreementName: "",
//     enterApplicationId: "",
//     mobileNumber: "",
//     applicationTableValues: [],
//     TypeOfAllocationName: "",
//     RelationTypeName: "",
//     agreementTypeValues: [],
//     ThemeCityId: 0,
//     ThemeCityName: "",
//     AllocationId: 0,
//     AllocationSubTypeId: 0,
//     AllocationName: "",
//     selectThemeCityTypeValues: [],
//     selectLandAllocationTypeValues: [],
//     selectAllocationTypeValues: [],
//     image1: "",
//     image2: "",
//     image3: "",
//     dropdownOpen: false,
//     submitPopUp: false,
//     OrgPhoneNumber: 0,
//     OrgEmailAddress: "",
//     HouseNoBuildingName: "",
//     StreetNameLocality: "",
//     GSTNumber: 0,
//     // Country: "",
//     // State: "",
//     City: "",
//     ZipCode: "",
//     RegistrationNumber: "",
//     selectCountryValues: [],
//     selectStateValues: [],
//     CountryId: 0,
//     CountryName: "",
//     check1: false,
//     StateId: 0,
//     StateName: "",
//     WitnessName: "",
//     RelationName: "",
//     DateOfBirth: "",
//     LandAllocatedName: "",
//     activeStep: 1,
//     PhotoIdTypeName: "",
//     check: false,
//     authorisedPersonValues: [
//       {
//         AuthorisedPersonEmailAddress: "",
//         DateOfBirth: "",
//         FirstName: "",
//         HouseNo: "",
//         LastName: "",
//         MobileNumber: "",
//         PhotoIdNumber: "",
//         PhotoIdType: 0,
//         PhotoIdTypeName: "",
//         RelationName: "",
//         RelationTypeId: 0,
//         RelationTypeName: "",
//         StreetName: "",
//         image: ""
//       }
//     ],
//     landAllocationTabValues: [],
//     photoIdTypeArray: [],
//     // tslint:disable-next-line:object-literal-sort-keys
//     RelationTypeArray: [],
//     photoIdType: [],

//     AvailableLandArea: 0,
//     RequiredLandSize: 0,
//     LeaseAmount: 0,
//     LeaseStartDate: "",
//     LeaseEndDate: "",
//     GoNumber: 0,
//     GoDate: "",
//     ProjectName: "",
//     ProjectPurpose: "",
//     ProjectDescription: "",
//     RelationTypeId: 0,
//     WitnessDetailsFormArray: [
//       {
//         AddClickCount: 0,
//         WitnessName: "",
//         id: 0,
//         // tslint:disable-next-line:object-literal-sort-keys
//         RelationName: "",
//         RelationTypeId: 0,
//         DateOfBirth: "",
//         RelationTypeArray: []
//       }
//     ],
//     witnessArray: [],
//     AddClickCount: 0,
//     typesOfAllocationValues: [],
//     LandAllocationId: 0,
//     LandAllocationTypeName: "",
//     unitValues: [],
//     UnitId: 0,
//     initialUnitId: 0,

//     unitName: "",
//     leaseTenure: [],
//     LeaseTenure: 0,
//     Number: 0,
//     RuleId: 0,
//     RuleName: "",
//     AddMilestoneClickCount: 0,
//     LandRelease: "",
//     mileStoneValues: [],
//     ProjectRuleTypes: [],
//     ProjectTypeId: 0,
//     MileStoneArray: [
//       {
//         AddMilestoneClickCount: 0,
//         LandRelease: "",
//         RuleName: "",
//         // tslint:disable-next-line:object-literal-sort-keys
//         RuleId: 0,
//         DateOfCompletion: "",
//         mileStoneValues: [],
//         id: 0,
//         ProjectRuleTypes: [],
//         ProjectTypeId: 0,
//         ruleTypeValues: [],
//         sourceTypeValues: [],
//         RuleSourceTypeId: 0,
//         ConditionTypeId: 0,
//         ConditionTypeValues: [],
//         projectValues: []
//       }
//     ],
//     projectValues: [],
//     newMileStoneValues: [],
//     ruleTypeValues: [],
//     PopUpOpen: false,
//     sourceTypeValues: [],
//     UserId: 0,
//     selectDepartmentList: [],
//     RuleSourceTypeId: 0,
//     ConditionTypeValues: [],
//     ConditionTypeId: 0,
//     minValue: 0,
//     maxValue: 0,
//     value: 0,
//     TypeOfAllocationId: 0,
//     projectTypes: [],

//     AgreementPurpose: "",
//     AggrementDescription: "",
//     ProjectStartDate: "",
//     ProjectEndDate: "",
//     TotalBudget: 0,
//     ProjectFundedBy: "",
//     ProjectCoordinator: "",
//     ProjectRules: "",
//     RequiredLandSizeBeforeAllocation: 0,
//     RequiredLandSizeType: "",
//     LandSize: 0,
//     LandSizeType: 0,
//     RenewalForEvery: 0,
//     RenewalAmountPercentage: 0,
//     TotalLeaseAmount: 0,
//     PricePerUnit: 0,
//     TotalAmount: 0,
//     InitialAllocationLandSize: "",
//     InitialAllocationLandSizeType: "",
//     InitialAllocation: 0,
//     requiredLandUnitId: 0,
//     projectRules: 0,
//     DateOfCompletion: "",
//     LandAllocationAllValues: [],
//     ruleName: "",
//     ruleName1: "",
//     ruleName2: "",
//     SubmitValues: [],
//     SuccesPopUpOpen: false,
//     WarningPopUp: false,
//     TownshipName: "",
//     selectDepartmentName: "",
//     ProposalFormApplicationIdValues: [
//       {
//         ApplicationId: "LA18926G0OCO3GXC5",
//         // tslint:disable-next-line:object-literal-sort-keys
//         AllocationTypeId: 2,
//         AllocationTo: "Private",
//         AllocationSubTypeId: 4,
//         AllocationTypeName: "Lease",
//         AgreementTypeId: 10,
//         AgreementTypeName: "Individual",
//         OrganiztionName: "Test Application Seven",
//         OrgRegistrationNumber: "TAS7777",
//         OrgTinNumber: "0",
//         OrgGST: "29AAAAA1234A1Z5",
//         OrgPhoneNumber: "+91 999-999-9999",
//         WebsiteURL: "",
//         OrgEmailid: "testuserapplication009@gmail.com",
//         OrgAddress1: "9-99,Krishna Vihar",
//         OrgAddress2: "krishna nagar 5 th lane, Amaravathi",
//         OrgCountryId: 1,
//         OrgCountryName: "India",
//         OrgStateId: 1,
//         OrgStateName: "Andhra Pradesh",
//         OrgCityName: "Amaravathi",
//         OrgZipCode: "500020",
//         AuthPersonName: "Kalyan Chakravarthy",
//         AuthEmailId: "testuserapplication009@gmail.com",
//         AuthPhoneNumber: "+91 999-999-9999",
//         AuthAddress1: "9-99,Krishna Vihar",
//         AuthAddress2: "krishna nagar 5 th lane, Amaravathi",
//         AuthPhotoIdType: "Voter Id",
//         AuthPhotoIdNumber: "69639663963",
//         AuthPhotoIdPath: "636735549901139456.png",
//         LandAllocationTypeId: 1,
//         LandAllocationType: "Complete",
//         AvailableLandArea: 216.15,
//         AvailbleLandAreaUnits: 1,
//         RequiredLandArea: 0.32,
//         UnitFormatId: 1,
//         UnitFormatName: "Acres",
//         TenurePeriodId: 15,
//         TenurePeriod: "15 Years",
//         LeaseAmountperAcre: 250000,
//         LeaseAmountperAnnum: 80000,
//         LeaseStartDate: "27-09-2018",
//         LeaseEndDate: "26-09-2033",
//         ProjectTitle: "Test Application Seven",
//         ProjPurpose: "Test Application Seven",
//         ProjStartDate: "01-01-1900",
//         ProjEndDate: "01-01-1900",
//         ProjBudget: 0,
//         ProjDescription: "Test Application Seven",
//         ThemeCityId: 8,
//         ThemeCityName: "Media City",
//         PhotoIdType: 1,
//         FirstName: "Kalyan",
//         LastName: "Chakravarthy",
//         DocumentsVerifiedList: [
//           {
//             DocumentId: 1,
//             Verified: false,
//             // tslint:disable-next-line:object-literal-sort-keys
//             ApplicationId: "",
//             DocumentPath: "20189Wednesday636735550911140222_1.png"
//           },
//           {
//             DocumentId: 2,
//             Verified: false,
//             // tslint:disable-next-line:object-literal-sort-keys
//             ApplicationId: "",
//             DocumentPath: "20189Wednesday636735550925671433_2.png"
//           },
//           {
//             DocumentId: 4,
//             Verified: false,
//             // tslint:disable-next-line:object-literal-sort-keys
//             ApplicationId: "",
//             DocumentPath: "20189Wednesday636735550941452514_4.png"
//           },
//           {
//             DocumentId: 9,
//             Verified: false,
//             // tslint:disable-next-line:object-literal-sort-keys
//             ApplicationId: "",
//             DocumentPath: "20189Wednesday636735550950046481_9.png"
//           }
//         ],
//         ProjectRules: "47",
//         WorkflowComments: "",
//         ProcessId: 0,
//         CurrentActivityId: 0,
//         CurrentActivityOrderId: 0,
//         LandAreaAllotedByEstates: 0,
//         ParcelId: "Not Available",
//         SurveyNumber: "",
//         GOMnumber: "GO787",
//         GOMdate: "/Date(1529346600000)/",
//         LOIdate: "26/09/2018",
//         DistrictId: 0,
//         MandalId: 0,
//         VillageId: 0,
//         District: "Guntur",
//         Mandal: "Thullur",
//         Village: "Rayapudi",
//         Boundaries:
//           "Boundaries of plot_code : ;\nEast :50.0 mtr Road;SouthEast :50.0 mtr Road;South :25.0 mtr Road;SouthWest :25.0 mtr Road;West :10-97-454-1729-9-K15;NorthWest :10-97-454-1729-9-K15;North :10-97-454-1729-11-L22;NorthEast :50.0 mtr Road;\n",
//         SurveyNumberByPlanning: "",
//         PricePerUnit: 0,
//         TotalAmount: 0,
//         InitialAllocation: 0,
//         InitialAllocationLandSize: 0,
//         InitialAllocationLandSizeType: 0,
//         TotalAmountInRupees: " Only",
//         LeaseAmountperAnnumInRupees: "Eighty Thousand Only",
//         RequiredLandAreaBeforeAllocation: 0.32,
//         LandAreaAllotedByEstatesInSqMeters: 0,
//         IsRequestFromMap: true,
//         RelationType: 1,
//         RelationName: "Ramakrishna",
//         DateOfBirth: "/Date(232828200000)/",
//         AddRuleThemeCityType: 0,
//         ProjectRuleType: 0,
//         RelationTypeAndName: "S/O.Ramakrishna",
//         Bhudhaar: "",
//         WitnessName: "",
//         OrgPAN: 0,
//         AgreementName: "",
//         AgreementPurpose: "",
//         ProjectFundedBy: "",
//         ProjectCoOrinator: "",
//         AgreementDescription: "",
//         LeaseTenure: 0,
//         RenewalForEvery: 0,
//         RenewalLoanAmount: 0,
//         ApplicationSubmittedDate: "",
//         StrDateOfBirth: "",
//         RelativeAge: 0,
//         TypeOfAllocation: 0,
//         RoleID: 16,
//         IsFreeFlow: true,
//         Township: "",
//         Sector: "",
//         Colony: "",
//         Block: "",
//         Plot: "",
//         AllocatedUser: "CCDP OffIcer"
//       }
//     ]
//   };

//   constructor(
//     props: IDraftApplicationStateProps &
//       IRelationTypeProps &
//       IPhotoIdTypeProps &
//       IProposalTabStateValues &
//       ILandAllocationValues &
//       ICountryValues &
//       IStateValues &
//       IAuthorisedProps &
//       IRelationTypeProps &
//       ICityValues &
//       ILandAllocationValues &
//       IWitnessDetailsProps &
//       ISelectLandAllocationProps &
//       IUnitProps &
//       IUnitValues &
//       ILeaseValues &
//       ILeaseTenureProps &
//       IMileStoneDetailsProps &
//       IRuleTypeValuesProps &
//       IProjectRuleTypeProps &
//       ICreateProposalProps
//   ) {
//     super(props);
//   }

//   public async componentWillMount() {
//     try {
//       const r = await getDraftApplications();
//       const res = await getDashboardLandDetails();
//       const res1 = await getTypeOfAllocationDropDown();
//       const res2 = await getTownShipValues();
//       const res3 = await getLandAllocationTypeValues();
//       const res4 = await postRelationTypeId();
//       const res6 = await postPhotoId();
//       const res5 = await getCountryValues();
//       const res7 = await getAllocatedValues(this.state.LandAllocatedToId);
//       const res8 = await getUnitValues(
//         this.state.TownshipId,
//         this.state.AllocationId
//       );

//       const res9 = await LeaseTenureValues();
//       const res10 = await RuleTypeValues();
//       const res11 = await SourceTypeValues();
//       const res12 = await ConditionTypeValues();
//       const res13 = await postDepartmentUserDropDownList(
//         this.state.enterApplicationId
//       );
//       const res14 = await getDashboardLandDetails();

//       this.setState({
//         ...this.state,
//         MileStoneArray: this.state.MileStoneArray.map(x => {
//           return {
//             AddMilestoneClickCount: x.AddMilestoneClickCount,
//             LandRelease: x.LandRelease,
//             RuleName: x.RuleName,
//             // tslint:disable-next-line:object-literal-sort-keys
//             RuleId: x.RuleName,
//             DateOfCompletion: x.DateOfCompletion,
//             mileStoneValues: x.mileStoneValues,
//             id: x.id,
//             ProjectRuleTypes: x.ProjectRuleTypes,
//             ProjectTypeId: x.ProjectTypeId,
//             ruleTypeValues: res10,
//             sourceTypeValues: res11,
//             RuleSourceTypeId: x.RuleSourceTypeId,
//             ConditionTypeId: x.ConditionTypeId,
//             ConditionTypeValues: res12,
//             projectValues: x.projectValues,
//             selectDepartmentList: res13,
//             townshipValues: res14.aaData
//           };
//         }),
//         RelationTypeArray: res4,
//         WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(x => {
//           return {
//             AddClickCount: x.AddClickCount,
//             WitnessName: x.WitnessName,
//             id: x.id,
//             // tslint:disable-next-line:object-literal-sort-keys
//             RelationName: x.RelationName,
//             RelationTypeId: x.RelationTypeId,
//             DateOfBirth: x.DateOfBirth,
//             RelationTypeArray: res4
//           };
//         }),

//         typesOfAllocationValues: res1,
//         // tslint:disable-next-line:object-literal-sort-keys
//         photoIdTypeArray: res6,
//         selectLandAllocationTypeValues: res3.objLandAllocationTypes,
//         selectThemeCityTypeValues: res2,
//         // tslint:disable-next-line:object-literal-sort-keys
//         selectCountryValues: res5,
//         selectAllocationTypeValues: res7.objAllocationTypesList.filter(
//           (x: IAllocationValues) =>
//             x.AllocationName !== null && x.AllocationName !== undefined
//         ),
//         unitValues: res8,
//         leaseTenure: res9.objLeaseTenureCount,
//         ruleTypeValues: res10,
//         sourceTypeValues: res11,
//         ConditionTypeValues: res12,
//         townshipValues: res.aaData
//       });
//     } catch (err) {
//       // tslint:disable-next-line:no-console
//       console.log(err);
//     }
//   }

//   public handleSubmitPopUpOpen = () => {
//     this.setState({ ...this.state, submitPopUp: true, uploadPopUpOpen: false });
//   };
//   public handleUploadImageChange = (evt: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(evt.target.files[0].name);
//     const file = evt.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       this.setState({
//         ...this.state,

//         image1: reader.result
//       });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//       this.setState({
//         ...this.state,

//         image1: reader.result
//       });
//     } else {
//       this.setState({
//         ...this.state,

//         image1: ""
//       });
//     }
//   };

//   public handleUploadImage2Change = (evt: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(evt.target.files[0].name);
//     const file = evt.target.files[0];
//     const reader = new FileReader();
//     // tslint:disable-next-line:no-console
//     console.log(evt.target.files[0]);

//     reader.onloadend = () => {
//       this.setState({
//         ...this.state,

//         image2: reader.result
//       });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//       this.setState({
//         ...this.state,

//         image2: reader.result
//       });
//     } else {
//       this.setState({
//         ...this.state,

//         image2: ""
//       });
//     }
//   };

//   public handleSelectDepartmentChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       UserId: event.target.value,
//       selectDepartmentName: event.currentTarget.textContent
//     });
//   };
//   public handleUploadImage3Change = (evt: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(evt.target.files[0].name);
//     const file = evt.target.files[0];
//     const reader = new FileReader();
//     // tslint:disable-next-line:no-console
//     console.log(evt.target.files[0]);

//     reader.onloadend = () => {
//       this.setState({
//         ...this.state,

//         image3: reader.result
//       });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//       this.setState({
//         ...this.state,

//         image3: reader.result
//       });
//     } else {
//       this.setState({
//         ...this.state,

//         image3: ""
//       });
//     }
//   };
//   public handleLandAllocationClick = (e: { target: { value: string } }) => {
//     getAllocatedValues(parseInt(e.target.value, 10))
//       .then(res => {
//         this.setState({
//           ...this.state,
//           LandAllocatedTo: e.target.value,
//           // ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
//           //   x => (x.AllocationTo = e.target.value)
//           // ),

//           LandAllocatedToId: parseInt(e.target.value, 10),
//           selectAllocationTypeValues: res.objAllocationTypesList
//         });
//         if (parseInt(e.target.value, 10) === 1) {
//           this.setState({ ...this.state, LandAllocatedName: "Government" });
//         } else {
//           this.setState({ ...this.state, LandAllocatedName: "Private" });
//         }
//       })
//       .catch(err =>
//         // tslint:disable-next-line:no-console
//         console.log(err)
//       );
//   };

//   public handleThemeCityChange = (event: any) => {
//     mileStoneValues(event.target.value).then(res => {
//       this.setState({
//         ...this.state,
//         MileStoneArray: this.state.MileStoneArray.map(x => {
//           return {
//             AddMilestoneClickCount: x.AddMilestoneClickCount,
//             LandRelease: x.LandRelease,
//             RuleName: x.RuleName,
//             // tslint:disable-next-line:object-literal-sort-keys
//             RuleId: x.RuleName,
//             DateOfCompletion: x.DateOfCompletion,
//             mileStoneValues: res.filter(
//               (y: IMileStoneDropDownValues) =>
//                 y.RuleName !== null && y.RuleName !== undefined
//             ),
//             id: x.id,
//             ProjectRuleTypes: x.ProjectRuleTypes,
//             ProjectTypeId: x.ProjectTypeId,
//             ruleTypeValues: x.ruleTypeValues,
//             sourceTypeValues: x.sourceTypeValues,
//             RuleSourceTypeId: x.RuleSourceTypeId,
//             ConditionTypeId: x.ConditionTypeId,
//             ConditionTypeValues: x.ConditionTypeValues,
//             projectValues: res.filter(
//               (y: IMileStoneDropDownValues) =>
//                 y.RuleName !== null && y.RuleName !== undefined
//             )
//           };
//         }),
//         TownshipId: event.target.value,
//         TownshipName: this.state.selectThemeCityTypeValues
//           .filter((x: ITownshipValues) => x.TownshipId === event.target.value)
//           .map((x: ITownshipValues) => x.TownshipName)[0],
//         mileStoneValues: res.filter(
//           (x: IMileStoneDropDownValues) =>
//             x.RuleName !== null && x.RuleName !== undefined
//         ),
//         projectValues: res.filter(
//           (x: IMileStoneDropDownValues) =>
//             x.RuleName !== null && x.RuleName !== undefined
//         )
//       });
//     });
//   };
//   public handleClick = (e: any) => {
//     getStateValues(e.target.value)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           CountryId: e.target.value,

//           CountryName: this.state.selectCountryValues
//             .filter((x: ICountryValues) => x.CountryId === e.target.value)
//             .map((x: ICountryValues) => x.CountryName)[0],
//           selectStateValues: res
//         });
//       })
//       .catch(err => err);
//   };

//   public handleAllocationChange = (event: any) => {
//     getAgreementTypeValues(
//       this.state.LandAllocatedToId,
//       event.target.value
//     ).then(res => {
//       this.setState({
//         ...this.state,
//         AllocationId: event.target.value,
//         AllocationName: this.state.selectAllocationTypeValues
//           .filter(
//             (x: IAllocationValues) => x.AllocationId === event.target.value
//           )
//           .map((x: IAllocationValues) => x.AllocationName)[0],
//         agreementTypeValues: res
//       });
//     });
//   };
//   public onHandleSubmit = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);

//     this.setState({
//       ...this.state,
//       AvailableLandArea: event.AvailableLandArea,
//       GoDate: event.GoDate,
//       GoNumber: event.GoNumber,
//       LandAllocationAllValues: [
//         ...this.state.LandAllocationAllValues,
//         ...event
//       ],
//       LeaseAmount: event.LeaseAmount,
//       LeaseEndDate: event.LeaseEndDate,
//       LeaseStartDate: event.LeaseStartDate,
//       LeaseTenure: event.Number,
//       ProjectDescription: event.ProjectDescription,
//       ProjectName: event.ProjectName,
//       ProjectPurpose: event.ProjectPurpose,
//       RequiredLandSize: event.RequiredLandSize,
//       projectValues: event.projectValues,

//       SubmitValues: [...this.state.SubmitValues, event],

//       activeStep: this.state.activeStep + 1
//     });
//   };

//   public handleLandSubmit = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//     CompleteDetailsToDB(event)
//       .then(res => {
//         this.setState({ ...this.state, LandAllocationAllValues: event });
//       })
//       .catch();
//   };

//   public onDeleteClick = (id: number) => {
//     // tslint:disable-next-line:no-console
//     this.setState({
//       ...this.state,
//       AddClickCount: this.state.AddClickCount - 1,
//       WitnessDetailsFormArray: remove(id, this.state.WitnessDetailsFormArray)
//     });
//   };

//   public onMilestoneDeleteClick = (event: any) => {
//     // tslint:disable-next-line:no-console
//     this.setState({
//       ...this.state,
//       AddMilestoneClickCount: this.state.AddMilestoneClickCount - 1,
//       MileStoneArray: remove(event, this.state.MileStoneArray)
//     });
//   };
//   public onUploadPopUpClose = () => {
//     this.setState({ ...this.state, uploadPopUpOpen: false });
//   };
//   public onHandleAddClick = () =>
//     // values: IWitnessDetailsStateValues &
//     //   IRelationTypeProps &
//     //   IWitnessDetailsProps
//     {
//       // tslint:disable-next-line:no-console
//       //  console.log(values);
//       this.setState({
//         ...this.state,
//         AddClickCount: this.state.AddClickCount + 1,
//         WitnessDetailsFormArray: [
//           ...this.state.WitnessDetailsFormArray,
//           {
//             AddClickCount: this.state.AddClickCount + 1,
//             DateOfBirth: "",
//             RelationName: "",
//             RelationTypeArray: this.state.RelationTypeArray,
//             RelationTypeId: 0,
//             WitnessName: "",
//             id: this.state.AddClickCount + 1
//           }
//         ]
//         // witnessArray: [
//         //   ...this.state.witnessArray,
//         //   ...this.state.WitnessDetailsFormArray
//         // ]
//       });
//       // tslint:disable-next-line:no-console
//     };

//   public handleUploadImageClick = (evt: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(evt.target.files[0]);
//     const file = evt.target.files[0];
//     const reader = new FileReader();
//     // tslint:disable-next-line:no-console
//     console.log(evt.target.files[0]);

//     reader.onloadend = () => {
//       this.setState({
//         ...this.state,

//         image: reader.result
//       });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//       this.setState({
//         ...this.state,

//         image: reader.result
//       });
//     } else {
//       this.setState({
//         ...this.state,

//         image: ""
//       });
//     }
//   };

//   public handleLandDetailsChangeClick = (event: any) => {
//     this.setState({ ...this.state, LandAllocationId: event.target.value });
//   };

//   public onHandleClose = () => {
//     this.setState({ ...this.state, PopUpOpen: false });
//   };

//   public onHandleMileStoneAddClick = (index: number) => {
//     this.setState({
//       ...this.state,
//       AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
//       MileStoneArray: [
//         ...this.state.MileStoneArray,
//         {
//           AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
//           LandRelease: "",
//           RuleName: "",
//           id: this.state.AddMilestoneClickCount + 1,
//           // tslint:disable-next-line:object-literal-sort-keys
//           RuleId: 0,
//           DateOfCompletion: "",
//           mileStoneValues: this.state.mileStoneValues,
//           ProjectRuleTypes: this.state.projectTypes,
//           ProjectTypeId: 0,
//           ruleTypeValues: this.state.ruleTypeValues,
//           sourceTypeValues: this.state.sourceTypeValues,
//           RuleSourceTypeId: 0,
//           ConditionTypeId: 0,
//           ConditionTypeValues: this.state.ConditionTypeValues,
//           projectValues: this.state.projectValues
//         }
//       ]
//     });
//     // tslint:disable-next-line:no-console
//     console.log(this.state.MileStoneArray);
//   };

//   public handlePopUpOpenClick = () => {
//     this.setState({ ...this.state, PopUpOpen: true });
//   };

//   public handleNext = () => {
//     this.setState({
//       ...this.state,
//       activeStep: this.state.activeStep + 1
//     });
//   };

//   public handleBack = () => {
//     this.setState({
//       ...this.state,
//       activeStep: this.state.activeStep - 1
//     });
//   };

//   public handleReset = () => {
//     this.setState({
//       activeStep: 0
//     });
//   };

//   public handleEditRuleTypeSubmit = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//   };
//   public onHandleUploadSubmit = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event, this.state.LandAllocationAllValues);
//     this.setState({ ...this.state, uploadPopUpOpen: true });
//     this.setState({
//       ...this.state,
//       SubmitValues: [...this.state.SubmitValues, event],
//       WarningPopUp:
//         this.state.image1 === "" &&
//         this.state.image2 === "" &&
//         this.state.image3 === "" &&
//         this.state.selectDepartmentName === ""
//           ? true
//           : false,
//       // submitPopUp:
//       //   this.state.image1 !== "" &&
//       //   this.state.image2 !== "" &&
//       //   this.state.image3 !== ""
//       //     ? true
//       //     : false,
//       uploadPopUpOpen:
//         this.state.image1 !== "" &&
//         this.state.image2 !== "" &&
//         this.state.image3 !== "" &&
//         this.state.selectDepartmentName !== ""
//           ? true
//           : false
//     });
//     // postSaveAsDraftValues(event)
//     //   .then(res => {
//     //     // tslint:disable-next-line:no-console
//     //     console.log(res);
//     //     this.setState({
//     //       ...this.state,
//     //       // WitnessDetailsFormArray: event,
//     //       activeStep: this.state.activeStep + 1
//     //     });
//     //   })
//     //   .catch(err =>
//     //     // tslint:disable-next-line:no-console
//     //     console.log(err)
//     //   );
//   };
//   public onHandleSubmitClose = () => {
//     this.setState({ ...this.state, submitPopUp: false });
//   };

//   public onHandleFinalSubmit = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//     postSaveAsDraftValues(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           SuccesPopUpOpen: true,
//           submitPopUp: false
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   public onHandleSaveAsDraft = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);

//     postSaveAsDraftValues(event)
//       .then(res => {
//         this.setState({ ...this.state, submitPopUp: false });
//         // tslint:disable-next-line:no-console
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   public onHandleAuthorisedSaveandContinue = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);

//     postAuthorisedSaveContinue(
//       event,
//       this.state.StreetNameLocality,
//       this.state.HouseNoBuildingName
//     )
//       .then(res => {
//         // tslint:disable-next-line:no-console
//         console.log(res);
//         this.setState({
//           ...this.state,
//           activeStep: this.state.activeStep + 1,

//           authorisedPersonValues: [
//             {
//               AuthorisedPersonEmailAddress: event.AuthorisedPersonEmailAddress,
//               DateOfBirth: event.DateOfBirth,
//               FirstName: event.FirstName,
//               HouseNo: event.HouseNo,
//               LastName: event.LastName,
//               MobileNumber: event.MobileNumber,
//               PhotoIdNumber: event.PhotoIdNumber,
//               PhotoIdType: event.PhotoIdType,
//               PhotoIdTypeName: this.state.PhotoIdTypeName,
//               RelationName: event.RelationName,
//               RelationTypeId: event.RelationTypeId,
//               RelationTypeName: this.state.RelationTypeName,
//               StreetName: event.StreetName,
//               image: event.image
//             }
//           ]
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   public handleLeaseStartDateChange = (date: any) => {
//     // tslint:disable-next-line:no-console
//     // console.log(moment(date.target.value).format("YYYY,MM,DD"));

//     // const d = moment(date.target.value).format("YYYY,MM,DD");
//     // tslint:disable-next-line:no-console
//     console.log(date.target.value.split(","));
//     const targetDate = date.target.value.split("-");
//     // // tslint:disable-next-line:no-console
//     const targetYear = parseInt(targetDate[0], 10) + 2;
//     const targetDay = parseInt(targetDate[2], 10) - 1;
//     const targetMonth = parseInt(targetDate[1], 10);

//     // tslint:disable-next-line:no-console
//     console.log(
//       moment(new Date(targetYear + "," + targetMonth + "," + targetDay)).format(
//         "YYYY-MM-DD"
//       )
//     );
//     const leaseEndDate = moment(
//       new Date(targetYear + "," + targetMonth + "," + targetDay)
//     ).format("YYYY-MM-DD");

//     // tslint:disable-next-line:no-console
//     // console.log(getDay(new Date(d)) + 2);
//     // const day = getDay(new Date(d)) + 2;

//     // // tslint:disable-next-line:no-console
//     // console.log(getMonth(new Date(d)) + 1);
//     // const month = getMonth(new Date(d)) + 1;
//     // // tslint:disable-next-line:no-console
//     // console.log(getYear(new Date(d)));

//     // const year = getYear(new Date(d));
//     // // tslint:disable-next-line:no-console
//     // console.log(
//     //   moment(new Date(year + 2, month, day - 1))
//     //     .format("DD/MM/YYYY")
//     //     .toString()
//     // );

//     this.setState({
//       ...this.state,
//       LeaseEndDate: leaseEndDate,
//       LeaseStartDate: date.target.value.toString()
//     });

//     // tslint:disable-next-line:no-console
//     // console.log(this.state.LeaseEndDate);
//   };

//   public onHandleOrganisationSaveandContinue = (
//     event: IProposalTabStateValues &
//       ISelectAllocationProps &
//       ISelectLandAllocationProps &
//       ISelectCountryProps &
//       ISelectStateProps
//   ) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//     postSaveAndContinue(event)
//       .then(res => {
//         // tslint:disable-next-line:no-console
//         console.log(res);
//         this.setState({
//           ...this.state,

//           HouseNoBuildingName: event.HouseNoBuildingName,
//           OrgEmailAddress: event.OrgEmailAddress,
//           OrgPhoneNumber: event.OrgPhoneNumber,
//           OrganizationName: event.OrganizationName,
//           RegistrationNumber: event.RegistrationNumber,
//           StreetNameLocality: event.StreetNameLocality,
//           SubmitValues: [...this.state.SubmitValues, event],
//           activeStep: this.state.activeStep + 1
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));

//     // tslint:disable-next-line:no-console
//     console.log(this.state);
//   };

//   public handleRelationChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       RelationTypeId: event.target.value,
//       RelationTypeName: this.state.RelationTypeArray.filter(
//         (x: IRelationTypeValues) => x.RelationTypeId === event.target.value
//       ).map((x: IRelationTypeValues) => x.RelationType)[0]
//     });
//   };

//   public handlePhotoIdChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       PhotoIdType: event.target.value,
//       PhotoIdTypeName: this.state.photoIdTypeArray
//         .filter((x: IPhotoIdTypeValues) => x.PhotoIdType === event.target.value)
//         .map((x: IPhotoIdTypeValues) => x.PhotoIdName)[0]
//     });
//   };

//   public onWitnessSaveAndContinue = (
//     values: IRelationTypeProps & IWitnessDetailsProps
//   ) => {
//     // tslint:disable-next-line:no-console
//     console.log(values);

//     postWitnessSaveAndContinue(values.WitnessDetailsFormArray)
//       .then(res => {
//         // tslint:disable-next-line:no-console
//         console.log(res);
//         this.setState({
//           ...this.state,
//           SubmitValues: [...this.state.SubmitValues, values],
//           // WitnessDetailsFormArray: values.WitnessDetailsFormArray,
//           activeStep: this.state.activeStep + 1
//         });
//       })
//       .catch(err =>
//         // tslint:disable-next-line:no-console
//         console.log(err)
//       );
//   };

//   public handleSubmitCheck = (checked: boolean) => {
//     this.setState({ ...this.state, check1: checked });
//   };
//   public handleCheckChange = (event: any, checked: boolean) => {
//     if (checked === true) {
//       this.setState({
//         ...this.state,
//         HouseNo: this.state.HouseNoBuildingName,
//         StreetName: this.state.StreetNameLocality,
//         authorisedPersonValues: this.state.authorisedPersonValues.map(x => {
//           return {
//             ...x,
//             HouseNo: this.state.HouseNoBuildingName,
//             StreetName: this.state.StreetNameLocality
//           };
//         }),
//         check: checked
//       });
//     } else {
//       this.setState({
//         ...this.state,
//         authorisedPersonValues: this.state.authorisedPersonValues.map(x => {
//           return { ...x, HouseNo: "", StreetName: "" };
//         }),
//         check: checked
//       });
//     }
//     // tslint:disable-next-line:no-console
//     console.log(this.state.authorisedPersonValues);
//   };
//   public handleMultiSelectChange = (event: any) => {
//     this.setState({ ...this.state, ProjectRuleTypes: event.target.value });
//   };

//   public handleSelectMultiChange = (event: any) => {
//     this.setState({ ...this.state, projectTypes: event.target.value });
//   };
//   public onMileStoneSave = (
//     event: IMilestoneDropDownProps &
//       IMileStoneDetailsStateValues &
//       IMileStoneDetailsProps &
//       IRuleTypeValuesProps &
//       IProjectValuesProps &
//       IConditionValueProps &
//       IMileStoneValues
//   ) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//     this.setState({
//       ...this.state,
//       LandAllocationAllValues: [
//         ...this.state.LandAllocationAllValues,
//         ...event.MileStoneArray
//       ],
//       MileStoneArray: event.MileStoneArray
//     });
//   };

//   public MileStoneNewRuleSubmit = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//     SubmitMilestoneDetails(event).then(res => {
//       this.setState({
//         ...this.state,
//         PopUpOpen: false,
//         newMileStoneValues: [...this.state.newMileStoneValues, res]
//       });
//     });
//   };

//   public handleProjectTypeChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       ProjectTypeId: event.target.value,
//       RuleName: this.state.ruleTypeValues
//         .filter((x: IRuleTypeValues) => x.ProjRuleTypeId === event.target.value)
//         .filter((x: IRuleTypeValues) => x.RuleType)
//     });
//   };

//   public handleConditionTypeChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       ConditionTypeId: event.target.value,
//       ruleName2: this.state.ConditionTypeValues.filter((x: IConditionValues) =>
//         x.ConditionTypeId === event.target.value ? x.ConditionName : ""
//       )[0],
//       // tslint:disable-next-line:object-literal-sort-keys
//       ruleName: this.state.ruleName1 + "Should be" + this.state.ruleName2
//     });
//   };

//   public handleSourceTypeChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       RuleSourceTypeId: event.target.value,
//       ruleName1: this.state.sourceTypeValues.filter((x: ISourceValues) =>
//         x.RuleSourceTypeId === event.target.value ? x.SourceName : ""
//       )
//     });
//   };

//   public handleAgreementChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       AgreementId: event.target.value,
//       AgreementName: this.state.agreementTypeValues
//         .filter(
//           (x: IAgremmentTypeValues) => x.AgreementId === event.target.value
//         )
//         .map((x: IAgremmentTypeValues) => x.AgreementName)[0]
//     });
//   };

//   public handleTypeOfAllocationChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       TypeOfAllocationId: event.target.value,
//       TypeOfAllocationName: this.state.typesOfAllocationValues
//         .filter(
//           (x: ITypeOfAllocationValues) =>
//             x.TypeOfAllocationId === event.target.value
//         )
//         .map((x: ITypeOfAllocationValues) => x.TypeOfAllocationName)[0]
//     });
//   };
//   public handleStateChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       StateId: event.target.value,
//       StateName: this.state.selectStateValues
//         .filter((x: IStateValues) => x.StateId === event.target.value)
//         .map((x: IStateValues) => x.StateName)[0]
//     });
//   };

//   public handleDownload = (values: any) => {
//     postDownloadFileValues(values).then(res => {
//       this.setState({ ...this.state, SuccesPopUpOpen: false });
//     });
//   };

//   public onHandleWarningPopupClose = () => {
//     this.setState({ ...this.state, WarningPopUp: false });
//   };

//   public handleWitnessNameChange = (event: any, index: number) => {
//     this.setState({
//       ...this.state,
//       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(x =>
//         x.id === index
//           ? {
//               AddClickCount: x.AddClickCount,
//               DateOfBirth: "",
//               RelationName: "",
//               RelationTypeArray: this.state.RelationTypeArray,
//               RelationTypeId: 0,
//               WitnessName: event.target.value,
//               id: x.id
//             }
//           : x
//       )
//     });
//   };

//   public handleRelationTypeIdChange = (event: any, index: number) => {
//     this.setState({
//       ...this.state,
//       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(x =>
//         x.id === index
//           ? {
//               AddClickCount: x.AddClickCount,
//               DateOfBirth: x.DateOfBirth,
//               RelationName: x.RelationName,
//               RelationTypeArray: this.state.RelationTypeArray,
//               RelationTypeId: event.target.value,
//               WitnessName: x.WitnessName,
//               id: x.id
//             }
//           : x
//       )
//     });
//   };

//   public handleRelationNameChange = (event: any, index: number) => {
//     this.setState({
//       ...this.state,
//       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(x =>
//         x.id === index
//           ? {
//               AddClickCount: x.AddClickCount,
//               DateOfBirth: x.DateOfBirth,
//               RelationName: event.target.value,
//               RelationTypeArray: this.state.RelationTypeArray,
//               RelationTypeId: x.RelationTypeId,
//               WitnessName: x.WitnessName,
//               id: x.id
//             }
//           : x
//       )
//     });
//   };

//   public handleLandReleaseChange = (event: any, index: number) => {
//     this.setState({
//       ...this.state,
//       MileStoneArray: this.state.MileStoneArray.map(x =>
//         x.id === index
//           ? {
//               AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
//               RuleName: x.RuleName,
//               // tslint:disable-next-line:object-literal-sort-keys
//               ConditionTypeId: x.ConditionTypeId,
//               ConditionTypeValues: x.ConditionTypeValues,
//               DateOfCompletion: x.DateOfCompletion,
//               LandRelease: event.target.value,
//               ProjectRuleTypes: x.ProjectRuleTypes,
//               ProjectTypeId: x.ProjectTypeId,
//               RuleId: x.RuleId,
//               RuleSourceTypeId: x.RuleSourceTypeId,
//               id: x.id,
//               mileStoneValues: x.mileStoneValues,
//               ruleTypeValues: x.ruleTypeValues,
//               sourceTypeValues: x.sourceTypeValues,
//               projectValues: x.projectValues
//             }
//           : x
//       )
//     });
//   };

//   public handleMultiSelectMileStoneChange = (event: any, index: number) => {
//     this.setState({
//       ...this.state,
//       MileStoneArray: this.state.MileStoneArray.map(x =>
//         x.id === index
//           ? {
//               AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
//               RuleName: x.RuleName,
//               // tslint:disable-next-line:object-literal-sort-keys
//               ConditionTypeId: x.ConditionTypeId,
//               ConditionTypeValues: x.ConditionTypeValues,
//               DateOfCompletion: x.DateOfCompletion,
//               LandRelease: x.LandRelease,
//               ProjectRuleTypes: event.target.value,
//               ProjectTypeId: x.ProjectTypeId,
//               RuleId: x.RuleId,
//               RuleSourceTypeId: x.RuleSourceTypeId,
//               id: x.id,
//               mileStoneValues: x.mileStoneValues,
//               ruleTypeValues: x.ruleTypeValues,
//               sourceTypeValues: x.sourceTypeValues,
//               projectValues: x.projectValues
//             }
//           : x
//       )
//     });
//   };
//   public handleDateOfCompletionChange = (event: any, index: number) => {
//     this.setState({
//       ...this.state,
//       MileStoneArray: this.state.MileStoneArray.map(x =>
//         x.id === index
//           ? {
//               AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
//               RuleName: x.RuleName,
//               // tslint:disable-next-line:object-literal-sort-keys
//               ConditionTypeId: x.ConditionTypeId,
//               ConditionTypeValues: x.ConditionTypeValues,
//               DateOfCompletion: event.target.value,
//               LandRelease: x.LandRelease,
//               ProjectRuleTypes: x.ProjectRuleTypes,
//               ProjectTypeId: x.ProjectTypeId,
//               RuleId: x.RuleId,
//               RuleSourceTypeId: x.RuleSourceTypeId,
//               id: x.id,
//               mileStoneValues: x.mileStoneValues,
//               ruleTypeValues: x.ruleTypeValues,
//               sourceTypeValues: x.sourceTypeValues,
//               projectValues: x.projectValues
//             }
//           : x
//       )
//     });
//   };

//   public handleDateChange = (event: any, index: number) => {
//     this.setState({
//       ...this.state,
//       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(x =>
//         x.id === index
//           ? {
//               AddClickCount: x.AddClickCount,
//               DateOfBirth: event.target.value.toString(),
//               RelationName: x.RelationName,
//               RelationTypeArray: this.state.RelationTypeArray,
//               RelationTypeId: x.RelationTypeId,
//               WitnessName: x.WitnessName,
//               id: x.id
//             }
//           : x
//       )
//     });
//   };

//   public handleTownshipClick = (id: number) => {
//     this.setState({
//       ...this.state,
//       AvailableLandArea: this.state.townshipValues
//         .filter((x: IDashboardStateValues) => x.TownshipId === id)
//         .map((y: IDashboardStateValues) => y.AvailableLandSize)[0],
//       TownshipId: id,
//       // UnitId: this.state.townshipValues
//       //   .filter((x: IDashboardStateValues) => x.TownshipId === id)
//       //   .map((y: IDashboardStateValues) => y.)[0],
//       townshipValues: this.state.townshipValues.filter(
//         (x: IDashboardStateValues) => x.TownshipId === id
//       )
//     });

//     this.props.history.push(`/page/AllocationForm/proposalForm/${id}`);
//   };

//   public handleTownShipIdsClick = () => {
//     this.props.history.push(`/page/AllocationForm/proposalForm`);
//   };

//   public AllocationForm = () => {
//     return (
//       <AllocationForm handleTownShipIdsClick={this.handleTownShipIdsClick} />
//     );
//   };

//   public ProposalFormBasedApplicationId = () => {
//     return (
//       <div>
//         {this.state.activeStep === 0 ? (
//           // this.props.history.push("/page/AllocationForm/proposalForm")

//           <div>
//             <CreateProposalTownshipForm
//               townshipValues={this.state.townshipValues}
//               handleTownshipClick={this.handleTownshipClick}
//             />
//           </div>
//         ) : (
//           <ProposalForm
//             handleDownload={this.handleDownload}
//             onUploadPopUpClose={this.onUploadPopUpClose}
//             handleSubmitPopUpOpen={this.handleSubmitPopUpOpen}
//             submitPopUp={this.state.submitPopUp}
//             SuccesPopUpOpen={this.state.SuccesPopUpOpen}
//             WarningPopUp={this.state.WarningPopUp}
//             uploadPopUpOpen={this.state.uploadPopUpOpen}
//             onHandleWarningPopupClose={this.onHandleWarningPopupClose}
//             authorisedPersonValues={this.state.authorisedPersonValues}
//             onMileStoneDeleteClick={this.onMilestoneDeleteClick}
//             onHandleOrganizationSaveandContinue={
//               this.onHandleOrganisationSaveandContinue
//             }
//             onHandleLandAllocationSaveandContinue={this.onHandleSubmit}
//             onHandleAuthorisedSaveandContinue={
//               this.onHandleAuthorisedSaveandContinue
//             }
//             handleTownshipClick={this.handleTownshipClick}
//             // PlotAreaType={this.state.PlotAreaType}
//             // PlotAreaId={this.state.PlotAreaId}
//             activeStep={this.state.activeStep}
//             // authorisedPersonValues={this.state.authorisedPersonValues}
//             // PlotAreaId={this.state.PlotAreaId}
//             handleStateChange={this.handleStateChange}
//             handleTypeOfAllocationChange={this.handleTypeOfAllocationChange}
//             handleAgreementChange={this.handleAgreementChange}
//             TypeOfAllocationId={this.state.TypeOfAllocationId}
//             handleBack={this.handleBack}
//             LandAllocatedToId={this.state.LandAllocatedToId}
//             AllocationSubTypeId={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.AllocationSubTypeId
//               )[0]
//             }
//             typesOfAllocationValues={this.state.typesOfAllocationValues}
//             landAllocatedTo={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.AllocationTo
//               )[0] === "Private"
//                 ? "2"
//                 : "1"
//             }
//             authorizedPersonName={this.state.authorizedPersonName}
//             allocationTypeId={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.AllocationTypeId
//               )[0]
//             }
//             OrganizationName={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.OrganiztionName
//               )[0]
//             }
//             authorisedPersonEmailAddress={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.AuthEmailId
//               )[0]
//             }
//             AgreementId={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.AgreementTypeId
//               )[0]
//             }
//             enterApplicationId={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.ApplicationId
//               )[0]
//             }
//             mobileNumber={this.state.mobileNumber}
//             OrgPhoneNumber={this.state.OrgPhoneNumber}
//             OrgEmailAddress={this.state.OrgEmailAddress}
//             HouseNoBuildingName={this.state.HouseNoBuildingName}
//             StreetNameLocality={this.state.StreetNameLocality}
//             GSTNumber={this.state.GSTNumber}
//             handleCountryClick={this.handleClick}
//             // Country={this.state.Country}
//             // State={this.state.State}
//             City={this.state.City}
//             ZipCode={this.state.ZipCode}
//             RegistrationNumber={this.state.RegistrationNumber}
//             GstNumber={this.state.GSTNumber}
//             agreementTypeValues={this.state.agreementTypeValues}
//             // selectThemeCityTYpeValues={this.state.selectThemeCityTYpeValues}
//             selectAllocationTypeValues={this.state.selectAllocationTypeValues}
//             selectCountryValues={this.state.selectCountryValues}
//             selectStateValues={this.state.selectStateValues}
//             AllocationType={this.state.allocationTypeId}
//             AllocationName={this.state.AllocationName}
//             AllocationId={this.state.AllocationId}
//             CountryId={this.state.CountryId}
//             CountryName={this.state.CountryName}
//             handleLandAllocationClick={this.handleLandAllocationClick}
//             handleAllocationChange={this.handleAllocationChange}
//             StateId={this.state.StateId}
//             WitnessName={
//               this.state.ProposalFormApplicationIdValues.map(
//                 x => x.WitnessName
//               )[0]
//             }
//             StateName={this.state.StateName}
//             handleUploadImageClick={this.handleUploadImageClick}
//             PhotoIdTypeName={this.state.PhotoIdTypeName}
//             handlePhotoIdChange={this.handlePhotoIdChange}
//             handleRelationChange={this.handleRelationChange}
//             check={this.state.check}
//             photoIdValues={this.state.photoIdTypeArray}
//             relationTypeValues={this.state.RelationTypeArray}
//             FirstName={this.state.authorisedPersonValues[0].FirstName}
//             LastName={this.state.authorisedPersonValues[0].LastName}
//             RelationTypeId={this.state.authorisedPersonValues[0].RelationTypeId}
//             RelationTypeName={
//               this.state.authorisedPersonValues[0].RelationTypeName
//             }
//             RelationName={this.state.authorisedPersonValues[0].RelationName}
//             DateOfBirth={this.state.authorisedPersonValues[0].DateOfBirth}
//             AuthorisedPersonEmailAddress={
//               this.state.authorisedPersonValues[0].AuthorisedPersonEmailAddress
//             }
//             MobileNumber={this.state.authorisedPersonValues[0].MobileNumber}
//             HouseNo={this.state.authorisedPersonValues[0].HouseNo}
//             StreetName={this.state.authorisedPersonValues[0].StreetName}
//             PhotoIdNumber={this.state.authorisedPersonValues[0].PhotoIdNumber}
//             PhotoIdType={this.state.authorisedPersonValues[0].PhotoIdType}
//             image={this.state.authorisedPersonValues[0].image}
//             handleCheckClick={this.handleCheckChange}
//             handleDateChange={this.handleDateChange}
//             handleRelationNameChange={this.handleRelationNameChange}
//             handleRelationTypeIdChange={this.handleRelationTypeIdChange}
//             handleWitnessNameChange={this.handleWitnessNameChange}
//             handleSubmit={this.onHandleSubmit}
//             WitnessDetailsFormArray={this.state.WitnessDetailsFormArray}
//             onHandleAddClick={this.onHandleAddClick}
//             onWitnessSaveAndContinue={this.onWitnessSaveAndContinue}
//             AddClickCount={this.state.AddClickCount}
//             onDeleteClick={this.onDeleteClick}
//             handleMultiSelectMileStoneChange={
//               this.handleMultiSelectMileStoneChange
//             }
//             handleLandReleaseChange={this.handleLandReleaseChange}
//             handleDateOfCompletionChange={this.handleDateOfCompletionChange}
//             handleLeaseStartDateChange={this.handleLeaseStartDateChange}
//             LandAllocationAllValues={this.state.LandAllocationAllValues}
//             // handleLandSubmit={this.handleLandSubmit}
//             ruleName1={this.state.ruleName1}
//             ruleName2={this.state.ruleName2}
//             handleSourceTypeChange={this.handleSourceTypeChange}
//             ruleName={this.state.ruleName}
//             LandSize={this.state.LandSize}
//             LandSizeType={this.state.LandSizeType}
//             projectRules={this.state.projectRules}
//             InitialAllocation={this.state.InitialAllocation}
//             TotalBudget={this.state.TotalBudget}
//             PricePerUnit={this.state.PricePerUnit}
//             RequiredLandSizeBeforeAllocation={
//               this.state.RequiredLandSizeBeforeAllocation
//             }
//             requiredLandUnitId={this.state.requiredLandUnitId}
//             RenewalAmountPercentage={this.state.RenewalAmountPercentage}
//             RenewalForEvery={this.state.RenewalForEvery}
//             initialUnitId={this.state.initialUnitId}
//             TotalLeaseAmount={this.state.TotalLeaseAmount}
//             InitialAllocationLandSize={this.state.InitialAllocationLandSize}
//             ApplicationId={this.state.enterApplicationId}
//             handleSelectMultiChange={this.handleSelectMultiChange}
//             projectTypes={this.state.projectTypes}
//             projectValues={this.state.projectValues}
//             handleConditionTypeChange={this.handleConditionTypeChange}
//             minValue={this.state.minValue}
//             maxValue={this.state.maxValue}
//             value={this.state.value}
//             ConditionTypeId={this.state.ConditionTypeId}
//             ConditionTypeValues={this.state.ConditionTypeValues}
//             RuleSourceTypeId={this.state.RuleSourceTypeId}
//             sourceTypeValues={this.state.sourceTypeValues}
//             handleProjectTypeChange={this.handleProjectTypeChange}
//             handleLandDetailsChangeClick={this.handleLandDetailsChangeClick}
//             MileStoneNewRuleSubmit={this.MileStoneNewRuleSubmit}
//             ProjectTypeId={this.state.ProjectTypeId}
//             handleEditRuleTypeSubmit={this.handleEditRuleTypeSubmit}
//             onHandleClose={this.onHandleClose}
//             PopUpOpen={this.state.PopUpOpen}
//             handlePopUpOpenClick={this.handlePopUpOpenClick}
//             handleMultiSelectChange={this.handleMultiSelectChange}
//             ProjectRuleTypes={this.state.ProjectRuleTypes}
//             handleThemeCityChange={this.handleThemeCityChange}
//             mileStoneValues={this.state.mileStoneValues}
//             MileStoneArray={this.state.MileStoneArray}
//             RuleId={this.state.RuleId}
//             RuleName={this.state.RuleName}
//             LandRelease={this.state.LandRelease}
//             DateOfCompletion={this.state.DateOfCompletion}
//             AddMilestoneClickCount={this.state.AddMilestoneClickCount}
//             onMileStoneSave={this.onMileStoneSave}
//             onMileStoneAddClick={this.onHandleMileStoneAddClick}
//             // handleSubmit={this.onHandleSubmit}
//             leaseTenure={this.state.leaseTenure}
//             Number={this.state.Number}
//             UnitId={this.state.UnitId}
//             UnitName={this.state.unitName}
//             unitValues={this.state.unitValues}
//             LandAllocationId={this.state.LandAllocationId}
//             LandAllocationTypeName={this.state.LandAllocationTypeName}
//             AvailableLandArea={this.state.AvailableLandArea}
//             RequiredLandSize={this.state.RequiredLandSize}
//             LeaseAmount={this.state.LeaseAmount}
//             LeaseStartDate={this.state.LeaseStartDate}
//             LeaseEndDate={this.state.LeaseEndDate}
//             GoNumber={this.state.GoNumber}
//             GoDate={this.state.GoDate}
//             ProjectName={this.state.ProjectName}
//             ProjectPurpose={this.state.ProjectPurpose}
//             ProjectDescription={this.state.ProjectDescription}
//             TownshipId={this.state.TownshipId}
//             TownshipName={this.state.TownshipName}
//             // onSubmit={this.onHandleSubmit}
//             // handleClick={this.handleClick}
//             selectLandAllocationTypeValues={
//               this.state.selectLandAllocationTypeValues
//             }
//             selectThemeCityTypeValues={this.state.selectThemeCityTypeValues}
//             ruleTypeValues={this.state.ruleTypeValues}
//             selectDepartmentName={this.state.selectDepartmentName}
//             handleSelectDepartmentChange={this.handleSelectDepartmentChange}
//             UserId={this.state.UserId}
//             selectDepartmentList={this.state.selectDepartmentList}
//             onSubmit={this.onHandleUploadSubmit}
//             image1={this.state.image1}
//             image2={this.state.image2}
//             image3={this.state.image3}
//             handleUploadImageChange={this.handleUploadImageChange}
//             handleUploadImage2Change={this.handleUploadImage2Change}
//             handleUploadImage3Change={this.handleUploadImage3Change}
//             check1={this.state.check1}
//             handleSubmitCheck={this.handleSubmitCheck}
//             SubmitValues={this.state.SubmitValues}
//             onHandleSaveAsDraft={this.onHandleSaveAsDraft}
//             onHandleFinalSubmit={this.onHandleFinalSubmit}
//             onHandleSubmitClose={this.onHandleSubmitClose}
//             townshipValues={this.state.townshipValues}
//           />
//         )}
//       </div>
//     );
//   };

//   public TownshipForm = () => {
//     return (
//       <CreateProposalTownshipForm
//         townshipValues={this.state.townshipValues}
//         handleTownshipClick={this.handleTownshipClick}
//       />
//     );
//   };

//   public render() {
//     return (
//       <div>
//         <Switch>
//           <Route
//             exact={true}
//             path="/page/draftApplication/proposalForm/:id"
//             render={this.ProposalFormBasedApplicationId}
//           />
//           <Route
//             exact={true}
//             path="/page/AllocationForm/proposalForm"
//             render={this.TownshipForm}
//           />
//           <Route path="/page/AllocationForm" render={this.AllocationForm} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default DraftApplicationState;
