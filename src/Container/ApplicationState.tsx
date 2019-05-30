// import * as React from "react";
// // import { RouteComponentProps } from "react-router";
// import {
//   getApplicationSearchDetails,
//   getApprovalFlowValues,
//   // getMapDetailValues,
//   getMapUpdatedValues,
//   getNoteFileValues,
//   // getParcelNumberValues,
//   getProccesComments,
//   getProjectRulesValues,
//   // host,
//   MapUrL,
//   postApproveValues,
//   postInsertMapDetails,
//   UpdateParecelNumber,
//   updateReviewDetails
// } from "../Api_Integration/TabsSearchService";

// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import { getDocumentTypeList2 } from "src/Api_Integration/DocumentMappingService";
// import { postDepartmentUserDropDownList } from "src/Api_Integration/ProposalService";
// import { IApplicationFormProps } from "src/Applications/ApplicationForm";
// import {
//   IDocument2PropValues,
//   IDocumentPropValues
// } from "src/DefaultLayout/HomePage";
// import TabsForm from "../Applications/TabsForm";
// import { ISearchValues } from "./Dashboard";

// export interface ISelectDepartmentvalues {
//   readonly DepartmentId: number;
//   readonly DepartmentName: string;
//   readonly UserId: number;
//   readonly UserName: string;
// }
// export interface IParcelValues {
//   ApplicationId: string;
//   ApplicationStatusId: number;
//   ProcessComments: string;
//   UserId: number;
//   ReturnCode: number;
//   LandAreaAllotedByEstates: number;
//   MilestoneId: number;
//   ParcelId: null | number;
//   SurveyNumber: null | number;
//   LandAllocationTypeId: number;
//   MilestoneDetailsVMLst: null;
//   SelectedRejections: null;
//   Remarks: null | string;
//   NextUserName: null | string;
//   NextUserEmailId: null | string;
//   GOMnumber: null | number;
//   GOMdate: null;
//   LOIdate: null;
//   DistrictId: number;
//   MandalId: number;
//   VillageId: number;
//   District: null;
//   Mandal: null;
//   Village: null;
//   Boundaries: null;
//   SurveyNumberByPlanning: null;
//   AuthPersonEmail: null;
//   ApplStatusId: number;
//   AuthPersonName: null;
//   UploadedFiles: null;
//   ProjectRulesList: null;
//   AllocationSubType: number;
//   AssignedProjectRules: null;
//   UpdatedLandAreaByPlanning: number;
//   AuthPersonMobileNumber: null;
//   HouseNumber: null;
//   Buildingname: null;
//   ProjectPurpose: null;
//   ProjectTitle: null;
//   GOMdateStr: null;
//   LOIdateStr: null;
//   TotalLand: number;
//   TotalAmount: number;
//   TotalAmountPerAcre: number;
//   FinalApprovalDate: null;
//   TotalAmountInWords: null;
//   LeaseAmountperAcre: number;
//   LeaseAmountperAcreInWords: null;
//   LeaseTenure: number;
//   LeaseStartDate: null;
//   LeaseEndDate: null;
//   AreaInSqMeters: number;
//   ProjectDescription: null;
//   LeaseTenureInWords: null;
//   TotalAmountPerAcreInWords: null;
//   LeaseAmountperAnnum: number;
//   LeaseAmountperAnnumInWords: null;
//   Bhudhaar: null;
//   AuthPersonAge: number;
//   RelationTypeAndName: null;
//   orgName: null;
//   OrgAddress: null;
//   TypeOfAllocation: number;
// }

// export interface IApplicationState {
//   readonly ApplicationtabsValue: number;
//   readonly searchDataId: string;
//   readonly searchArray: ReadonlyArray<ISearchValues>;
//   readonly noteFiles: ReadonlyArray<INoteFileStateValues>;
//   readonly applicationProjectRules: ReadonlyArray<
//     IapplicationProjectRulesValues
//   >;
//   readonly approvalFiles: ReadonlyArray<IApprovalFlowValues>;
//   readonly parcelValues: ReadonlyArray<any>;
//   onTabChange(event: any, value: number): void;
//   onHandleChange(event: any): void;
//   onHandleSearch(event: any): void;
//   handleLandAllocationChange(event: any): void;
// }
// export interface ISearchArrayValues {
//   readonly searchArray: ReadonlyArray<ISearchValues>;
// }
// export interface INoteFileStateValues {
//   readonly ApplicationId: string;
//   readonly RoleName: null;
//   readonly CreatedOn: string;
//   readonly Status: string;
//   readonly Comments: string;
//   readonly CommentsBy: string;
//   readonly UserName: null;
//   readonly ActivityId: number;
//   readonly CurrentActivityId: number;
//   readonly StatusId: number;
//   readonly Id: number;
// }
// export interface IapplicationProjectRulesValues {
//   readonly RuleId: number;
//   readonly RuleName: string;
//   readonly CreatedBy: number;
//   readonly ThemeCityId: number;
//   readonly ReturnCode: number;
//   readonly ProjRuleTypeId: number;
//   readonly DocumentPath: string;
//   readonly SourceTypeId: number;
//   readonly ConditionTypeId: number;
//   readonly MinimumValue: number;
//   readonly MaximumValue: number;
//   readonly Value: number;
//   readonly ConditionValue: string;
//   readonly AchievedValue: number;
//   readonly IsVerified: boolean;
//   readonly IsDocumentVerified: boolean;
// }

// export interface IApprovalFlowValues {
//   readonly WorkFlowActivityName: string;
//   readonly CreatedOn: null;
//   readonly CreatedBy: number;
//   readonly ModifiedOn: null;
//   readonly ModifiedBy: number;
//   readonly WorkFlowActivityId: number;
//   readonly IsActive: boolean;
//   readonly ReturnCode: number;
//   readonly UserName: string;
//   readonly AllocateTo: string;
//   readonly AllocationType: string;
//   readonly AgreementType: string;
//   readonly CurrentActivityId: number;
//   readonly ActivitityOrderId: number;
// }
// export interface INoteFileProps {
//   readonly noteFiles: ReadonlyArray<INoteFileStateValues>;
// }
// export interface IprojectRuleProps {
//   readonly applicationProjectRules: ReadonlyArray<
//     IapplicationProjectRulesValues
//   >;
// }
// export interface IApprovalFlowProps {
//   readonly approvalFiles: ReadonlyArray<IApprovalFlowValues>;
// }

// export interface IProcessCommentsValues {
//   readonly ApplicationId: string;
//   readonly RoleName: string;
//   readonly CreatedOn: string;
//   readonly Status: string;
//   readonly Comments: string;
//   readonly CommentsBy: string;
//   readonly UserName: string;
//   readonly ActivityId: number;
//   readonly CurrentActivityId: number;
//   readonly StatusId: number;
//   readonly Id: number;
// }

// export interface ITreeFormValues {
//   expanded: string | boolean | null;
//   panel1: boolean;
//   panel2: boolean;
//   panel3: boolean;
//   panel4: boolean;
//   panel5: boolean;
//   panel6: boolean;
//   mapOpen: boolean;
//   ApproveOpen: boolean;
//   reviewOpen: boolean;
//   reviewSuccessOpen: boolean;
//   targetValue: string;
//   ProcessComments: ReadonlyArray<IProcessCommentsValues>;
//   Comments: string;
//   ruleImage: string;
//   readonly selectDepartmentId: number;
//   readonly applicationSelectDepartmentName: string;

//   readonly selectDepartmentList: ReadonlyArray<ISelectDepartmentvalues>;
//   handleRuleImageChange(event: any): void;
//   handleRuleSatisfiedChange(event: any): void;
//   onHandleApprovePopUpClose(): void;
//   handleProcessCommentsChange(event: any): void;
//   handleselectDepartmentChange(event: any): void;
//   onHandleApprovePopUpOpen(event: any): void;
//   onHandleForwardPopUpOpen(event: any): void;
//   onHandleReviewPopUpOpen(): void;
//   onHandleReviewPopUpClose(): void;
//   onHandleReviewSuccessPopUp(): void;
//   handleMapClose(id: string): void;
//   handleMapOpenClick(event: any): void;
//   onHandleApproveClick(event: any): void;
//   onHandleReviewClick(event: any): void;
//   onHandlePanelChange(event: any): void;
//   handleDocumentVerifiedChange(event: any): void;
//   [x: string]: any;
//   onExpandAll(): void;
//   onCollapseAll(): void;
//   handleAppFormUploadImageClick(evt: any): void;
//   handleParcelNumberChange(event: any): void;
// }
// export interface IImagevalues {
//   readonly applicationimages: string;
//   handleImageChange(evt: any): void;
// }
// export interface IDocumentRepositoryState {
//   readonly documentList2: ReadonlyArray<IDocumentPropValues>;
//   readonly applicationimage: string;
//   readonly applicationimage2: string;
//   handleClick(event: any, name: any): void;
// }

// export interface IMatchParams {
//   id: string;
// }

// export default class ApplicationDetails extends React.Component<
//   any,
//   IApplicationState &
//     IDocumentRepositoryState &
//     ITreeFormValues &
//     INoteFileProps &
//     ISearchArrayValues &
//     IImagevalues &
//     any
// > {
//   public state = {
//     ApplicationId: "",
//     fowardOpen: false,
//     isDocumentVerified: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     ApplicationtabsValue: 0,
//     targetValue: "",
//     // tslint:disable-next-line:object-literal-sort-keys
//     applicationimage: "images/aadhar.jpg",
//     applicationimage2: "",
//     searchDataId: "",
//     parcelvalues: [],
//     approveArray: [],
//     reviewArray: [],
//     noteFiles: [],
//     applicationProjectRules: [],
//     approvalFiles: [],
//     searchArray: [],
//     ApproveOpen: false,
//     expanded: null,
//     panel1: false,
//     panel2: false,
//     panel3: false,
//     panel4: false,
//     panel5: false,
//     panel6: false,
//     mapOpen: false,
//     mapValues: [],
//     reviewOpen: false,
//     reviewSuccessOpen: false,
//     Comments: "",
//     htmlContent: "",
//     selectDepartmentList: [],
//     selectDepartmentId: 0,
//     ProcessComments: [],
//     applicationSelectDepartmentName: "",
//     applicationimages: "",
//     isRuleSatisfied: false,
//     ruleImage: "",
//     AllocatedTo: 0,
//     documentList: [],
//     documentList2: []
//   };
//   constructor(
//     props: // IApplicationState &
//     // IDocumentRepositoryState &
//     // ITreeFormValues &
//     // ISearchArrayValues &
//     any
//   ) {
//     super(props);
//   }
//   public componentWillMount() {
//     // getDocumentTypeList2(this.state.AllocatedTo, 1).then(res1 => {
//     //   this.setState({
//     //     ...this.state,
//     //     documentList2: this.state.documentList.filter(
//     //       (y: IDocumentPropValues) =>
//     //         res1.documents.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
//     //     )
//     //   });
//     // });
//   }

//   public handleApplicationLandAllocationChange = (event: any) => {
//     this.setState({
//       ...this.state,

//       AllocationTo: event.target.value
//     });
//   };
//   // Specific Expansion on Panel Change
//   public onHandlePanelChange = (panel: any) => {
//     this.setState({
//       ...this.state,
//       // expanded: this.state.expanded !== panel ? panel : false
//       [panel]: !this.state[panel]
//     });
//   };
//   public handleMapOpenClick = (value: any) => {
//     // getMapDetailValues(value).then(res => {
//     this.setState({
//       ...this.state,
//       mapOpen: true
//       // mapValues: res
//     });
//     // });

//     MapUrL()
//       .then(res => {
//         this.setState({
//           ...this.state,
//           // mapOpen: true,
//           htmlContent: res
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   public handleAppFormUploadImageClick = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//   };

//   public handleRuleChange = (evt: any) => {
//     const file = evt.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       this.setState({
//         ...this.state,

//         ruleImage: reader.result
//       });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//       this.setState({
//         ...this.state,

//         ruleImage: reader.result
//       });
//     } else {
//       this.setState({
//         ...this.state,

//         ruleImage: ""
//       });
//     }
//   };

//   public handleMapClose = (id: string) => {
//     const obj: any = localStorage.getItem(id);
//     const obj1: any = JSON.parse(obj);
//     localStorage.clear();
//     getMapUpdatedValues(id).then(res => {
//       this.setState({ ...this.state, obj: obj1 });
//     });
//     this.setState({
//       ...this.state,
//       mapOpen: false,
//       searchArray: this.state.searchArray.map((x: ISearchValues) => {
//         return {
//           ...x,
//           AvailableLandArea: obj1.LandArea,
//           Block: obj1.Block,
//           Boundaries: obj1.Boundaries,
//           Colony: obj1.Colony,
//           CompleteDetails: obj1.CompleteDetails,
//           District: obj1.DistrictName,
//           GeometricString: obj1.GeometricString,
//           GeometryDataFromMap: obj1.GeometryDataFromMap,
//           GlobalId: obj1.GlobalId,
//           Mandal: obj1.Mandal,
//           ParcelId: obj1.ParcelNumber,
//           Plot: obj1.Plot,
//           Sector: obj1.Sector,
//           SurveyNumberByPlanning: obj1.SurveyNumberByPlanning,
//           TempGlobalId: obj1.TempGlobalId,
//           TownShip: obj1.Township,
//           Village: obj1.Village
//         };

//         // Object.assign(
//         //   {},
//         //   x,
//         //   (x.AvailableLandArea = obj.LandArea),
//         //   (x.Boundaries = obj.Boundaries),
//         //   (x.District = obj.DistrictName),
//         //   (x.Mandal = obj.Mandal),
//         //   (x.ParcelId = obj.ParcelNumber),
//         //   (x.SurveyNumberByPlanning = obj.SurveyNumberByPlanning),
//         //   (x.Village = obj.Village),
//         //   (x.CompleteDetails = obj.CompleteDetails),
//         //   (x.GlobalId = obj.GlobalId),
//         //   (x.TempGlobalId = obj.TempGlobalId),
//         //   (x.GeometricString = obj.GeometricString),
//         //   (x.GeometryDataFromMap = obj.GeometryDataFromMap)
//         // );
//       })
//     });
//   };

//   // handle for ApprovePopUp
//   public onHandleApprovePopUpOpen = (
//     event: ITreeFormValues & IApplicationFormProps & IprojectRuleProps
//   ) => {
//     if (event.selectDepartmentId !== 0 && event.Comments !== "") {
//       this.setState({ ...this.state, ApproveOpen: true });
//       UpdateParecelNumber(
//         event,
//         this.state.searchArray,
//         this.state.searchDataId
//       )
//         .then(res => {
//           this.setState({
//             ...this.state
//           });
//         })
//         // tslint:disable-next-line:no-console
//         .catch(err => console.log(err));

//       postInsertMapDetails(
//         event,
//         this.state.searchArray,
//         this.state.searchDataId
//       ).then(res => {
//         this.setState({
//           ...this.state
//         });
//       });
//       postApproveValues(
//         this.state.searchArray,
//         this.state.searchDataId,
//         this.state.Comments
//       )
//         .then(res => {
//           this.setState({
//             ...this.state,
//             ApproveOpen: false,
//             approveArray: res
//           });
//         })
//         .then(() => {
//           this.props.history.push("/page/dashboard");
//         })
//         .catch(err =>
//           // tslint:disable-next-line:no-console
//           console.log(err)
//         );
//     }
//   };

//   // handle for Review details popUp
//   public onHandleReviewPopUpOpen = () => {
//     this.setState({ ...this.state, reviewOpen: true });
//   };
//   public handleApplicationIdSearch = (event: string) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//     getApplicationSearchDetails(this.state.searchDataId)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           // tslint:disable-next-line:object-literal-sort-keys
//           AllocatedTo:
//             res.applicationDetailsViewModelLst.length !== 0
//               ? res.applicationDetailsViewModelLst.AllocatedTo === "Private"
//                 ? 2
//                 : 1
//               : 0,
//           searchArray: res.applicationDetailsViewModelLst,

//           searchDataId:
//             res.applicationDetailsViewModelLst.length !== 0
//               ? res.applicationDetailsViewModelLst[0].ApplicationId
//               : this.state.searchDataId
//         });
//       })
//       .then(() =>
//         getDocumentTypeList2(this.state.AllocatedTo, 1).then(res1 => {
//           // tslint:disable-next-line:no-console
//           console.log(res1, this.state.documentList);
//           this.setState({
//             ...this.state,
//             documentList2: this.state.documentList.filter(
//               (y: IDocumentPropValues) =>
//                 res1.documents.find(
//                   (x: IDocument2PropValues) => x.ProcessId === y.PhotoId
//                 )
//             )
//           });
//         })
//       );

//     postDepartmentUserDropDownList(event).then(res => {
//       this.setState({
//         ...this.state,
//         selectDepartmentList: res.deptusersViewModelLst
//       });
//     });

//     getProccesComments(event).then(res => {
//       this.setState({
//         ...this.state,
//         ProcessComments: res.objDetails
//       });
//     });

//     getNoteFileValues(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           noteFiles: res.objDetails
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));

//     getApprovalFlowValues(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           approvalFiles: res.WorkFlowlist
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));

//     getProjectRulesValues(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           applicationProjectRules: res.applicationProjectRulesViewModelLst
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));

//     // UpdateParecelNumber(event, this.state.searchArray, this.state.searchDataId)
//     //   .then(res => {
//     //     this.setState({
//     //       ...this.state
//     //     });
//     //   })
//     //   // tslint:disable-next-line:no-console
//     //   .catch(err => console.log(err));
//   };
//   public handleselectDepartmentChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       applicationSelectDepartmentName: event.currentTarget.textContent,
//       selectDepartmentId: event.target.value
//     });
//   };

//   public onHandleReviewSuccessPopUp = () => {
//     this.setState({
//       ...this.state,
//       reviewOpen: false,
//       reviewSuccessOpen: true
//     });
//   };

//   // ApprovePopUp Close
//   public onHandleReviewPopUpClose = () => {
//     this.setState({ ...this.state, reviewOpen: false });
//   };

//   // onclick Expand All Panels
//   public onExpandAll = () =>
//     this.setState({
//       ...this.state,
//       panel1: true,
//       panel2: true,
//       panel3: true,
//       panel4: true,
//       panel5: true,
//       panel6: true
//     });

//   // onClick Collapse All
//   public onCollapseAll = () =>
//     this.setState({
//       panel1: false,
//       panel2: false,
//       panel3: false,
//       panel4: false,
//       panel5: false,
//       panel6: false
//     });

//   // getting Approve Api
//   public onHandleApproveClick = (e: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(e, this.state.searchDataId);

//     UpdateParecelNumber(e, this.state.searchArray, this.state.searchDataId)
//       .then(res => {
//         this.setState({
//           ...this.state
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));

//     postInsertMapDetails(
//       e,
//       this.state.searchArray,
//       this.state.searchDataId
//     ).then(res => {
//       this.setState({
//         ...this.state
//       });
//     });
//     postApproveValues(
//       this.state.searchArray,
//       this.state.searchDataId,
//       this.state.Comments
//     )
//       .then(res => {
//         this.setState({
//           ...this.state,
//           ApproveOpen: false,
//           approveArray: res
//         });
//       })
//       .then(() => {
//         this.props.history.push("/page/dashboard");
//       })
//       .catch(err =>
//         // tslint:disable-next-line:no-console
//         console.log(err)
//       );
//   };
//   public handleApplicaitonImageChange = (evt: any) => {
//     const file = evt.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       this.setState({
//         ...this.state,

//         applicationimages: reader.result
//       });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//       this.setState({
//         ...this.state,

//         applicationimages: reader.result
//       });
//     } else {
//       this.setState({
//         ...this.state,

//         applicationimages: ""
//       });
//     }
//   };
//   // getting Review Api
//   public onHandleReviewClick = (event: any) => {
//     const history = this.props.history;
//     updateReviewDetails(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           reviewArray: res.aaData,
//           reviewSuccessOpen: false
//         });
//       })
//       .then(() => {
//         history.push("/page/dashboard");
//       });
//   };

//   // Change in Tab
//   public onTabChange = (event: any, value: number) => {
//     this.setState({ ...this.state, ApplicationApplicationtabsValue: value });
//   };

//   // imageChange
//   public handleApplicationClick = (event: any, name: any) => {
//     this.setState({ ...this.state, [name]: event.target.src });
//   };

//   // search input change
//   public handleApplicationIdChange = (event: any) => {
//     this.setState({ ...this.state, searchDataId: event.target.value });
//   };

//   public handleCommentsChange = (event: any) => {
//     this.setState({ ...this.state, Comments: event.target.value });
//   };
//   // search based on Application id in tab form

//   public onHandleApprovePopUpClose = () => {
//     this.setState({ ...this.state, ApproveOpen: false, forwardOpen: false });
//   };

//   public handleRuleSatisfiedChange = (event: any) => {
//     this.setState({ ...this.state, isRuleSatisfied: event.target.checked });
//   };

//   public handleMapPopUpClose = () => {
//     this.setState({ ...this.state, mapOpen: false });
//   };

//   public onHandleForwardPopUpOpen = (
//     event: ITreeFormValues & IApplicationFormProps & IprojectRuleProps
//   ) => {
//     if (event.selectDepartmentId !== 0 && event.Comments !== "") {
//       this.setState({ ...this.state, fowardOpen: true });
//     } else {
//       this.setState({ ...this.state, reviewOpen: true });
//     }
//   };

//   public handleDocumentVerifiedChange = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(this.state.ruleImage);
//     this.setState({
//       ...this.state,
//       isDocumentVerified:
//         this.state.ruleImage !== "" ? event.target.checked : false
//     });
//   };

//   public handleParcelNumberChange = (event: any) => {
//     this.setState({
//       ...this.state,
//       parcelvalues: this.state.parcelvalues.map((x: ISearchValues) => ({
//         ...x,
//         ParcelId: event.target.value
//       }))
//     });
//   };

//   public render() {
//     // tslint:disable-next-line:no-console
//     console.log(this.state.ruleImage);
//     return (
//       <div>
//         <TabsForm
//           handleParcelNumberChange={this.handleParcelNumberChange}
//           handleDocumentVerifiedChange={this.handleDocumentVerifiedChange}
//           onHandleForwardPopUpOpen={this.onHandleForwardPopUpOpen}
//           handleLandAllocationChange={
//             this.handleApplicationLandAllocationChange
//           }
//           handleAppFormUploadImageClick={this.handleAppFormUploadImageClick}
//           documentList2={this.state.documentList2}
//           ruleImage={this.state.ruleImage}
//           handleRuleImageChange={this.handleRuleChange}
//           targetValue={this.state.targetValue}
//           handleImageChange={this.handleApplicaitonImageChange}
//           isRuleSatisfied={this.state.isRuleSatisfied}
//           handleRuleSatisfiedChange={this.handleRuleSatisfiedChange}
//           applicationSelectDepartmentName={
//             this.state.applicationSelectDepartmentName
//           }
//           onHandleApprovePopUpClose={this.onHandleApprovePopUpClose}
//           handleProcessCommentsChange={this.handleCommentsChange}
//           ProcessComments={this.state.ProcessComments}
//           handleselectDepartmentChange={this.handleselectDepartmentChange}
//           selectDepartmentId={this.state.selectDepartmentId}
//           selectDepartmentList={this.state.selectDepartmentList}
//           Comments={this.state.Comments}
//           reviewSuccessOpen={this.state.reviewSuccessOpen}
//           reviewOpen={this.state.reviewOpen}
//           ApproveOpen={this.state.ApproveOpen}
//           fowardOpen={this.state.fowardOpen}
//           onHandleApprovePopUpOpen={this.onHandleApprovePopUpOpen}
//           onHandleReviewPopUpOpen={this.onHandleReviewPopUpOpen}
//           onHandleReviewSuccessPopUp={this.onHandleReviewSuccessPopUp}
//           onHandleReviewPopUpClose={this.onHandleReviewPopUpClose}
//           mapOpen={this.state.mapOpen}
//           expanded={this.state.expanded}
//           panel1={this.state.panel1}
//           panel2={this.state.panel2}
//           panel3={this.state.panel3}
//           panel4={this.state.panel4}
//           panel5={this.state.panel5}
//           panel6={this.state.panel6}
//           onHandleApproveClick={this.onHandleApproveClick}
//           onHandleReviewClick={this.onHandleReviewClick}
//           onHandlePanelChange={this.onHandlePanelChange}
//           onExpandAll={this.onExpandAll}
//           onCollapseAll={this.onCollapseAll}
//           searchArray={this.state.searchArray}
//           searchDataId={this.state.searchDataId}
//           ApplicationtabsValue={this.state.ApplicationtabsValue}
//           onTabChange={this.onTabChange}
//           onHandleChange={this.handleApplicationIdChange}
//           onHandleSearch={this.handleApplicationIdSearch}
//           handleClick={this.handleApplicationClick}
//           applicationimage={this.state.applicationimage}
//           applicationimage2={this.state.applicationimage2}
//           handleMapClose={this.handleMapClose}
//           handleMapOpenClick={this.handleMapOpenClick}
//           noteFiles={this.state.noteFiles}
//           approvalFiles={this.state.approvalFiles}
//           applicationProjectRules={this.state.applicationProjectRules}
//           match={this.props.match}
//           applicationimages={this.state.applicationimages}
//           parcelValues={this.state.parcelvalues}
//         />

//         {
//           <Dialog
//             // fullScreen={true}
//             open={this.state.mapOpen}
//             // onClose={this.handleMapClose}
//             aria-labelledby="responsive-dialog-title"
//           >
//             <div className="bottom-save-btn inner-search-grid">
//               <DialogActions>
//                 <iframe
//                   src={`http://192.168.100.18:3000/UAIMSMap/index.html?applicationId=${
//                     this.state.searchDataId
//                   }`}
//                   height="900"
//                   width="2000"
//                   // tslint:disable-next-line:jsx-no-lambda
//                   // dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}
//                 />
//                 {/* tslint:disable-next-line:jsx-no-lambda */}
//                 <div className="map-btn-grp">
//                   <Button
//                     className="main-btn"
//                     // tslint:disable-next-line:jsx-no-lambda
//                     onClick={() => this.handleMapClose(this.state.searchDataId)}
//                   >
//                     Capture Map Values
//                   </Button>
//                   <Button
//                     className="main-btn skip-map-btn"
//                     // tslint:disable-next-line:jsx-no-lambda
//                     onClick={() => this.handleMapPopUpClose()}
//                   >
//                     Skip Map
//                   </Button>
//                 </div>
//               </DialogActions>
//             </div>
//           </Dialog>
//         }
//       </div>
//     );
//   }
// }
