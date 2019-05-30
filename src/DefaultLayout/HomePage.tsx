import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

 import * as jsPDF from 'jspdf'
 
import {
  getFingerListDetails,
  getMyProfileDepartmentDetails,
  getMyProfileDetails,
  getMyProfileRoleDetails,
  getUserProfileDetails,
  // postCaptureFingerDetails,
  postChangeAvatarValues,
  postChangePasswordDetails
} from "src/Api_Integration/MyProfileService";
import UploadImagePopUp from "src/MyProfile/ChangeAvatarPopUp";
import PersonalInfoPopUp from "src/MyProfile/PersonalInfoPopUp";

import {
  GetAllTemplateNames,
  getDocumentTypeList2,
  GetListOfDocuments,
  GetProcessTypes,
  postInsertDetails
} from "../Api_Integration/DocumentMappingService";
import Tree, { IApplicationFormProps } from "../Applications/ApplicationForm";
import NoteFiles from "../Applications/NoteFile";
import AssetTaskForm from "../Asset-Management/Assets";
import AgreementTypeMasterState from "../Container/AgreementTypeMasterState";
import AllocationTypeMasterState from "../Container/AllocationTypeMasterState";
import ApplicationSearchState from "../Container/ApplicationSearchState";
import ApprovedApplicationState, {
  IMilestoneStateProps
} from "../Container/ApprovedApplicationState";
import { AssetDashboardState } from "../Container/AssetDashboardState";
import AssetTabDetailsState from "../Container/AssetTabDetailsState";
import AssetTreeState from "../Container/AssetTreeState";
import CapitalCityLandState from "../Container/CapitalCityLandState";

import EmailTemplateState from "../Container/EmailTemplateState";
import LandAreaTypeMasterState from "../Container/LandAreaUnitsState";
import LoginAuditTrailState from "../Container/LoginAuditTrailState";
import DocumentTypeMasterState from "../Container/MasterState";
import RejectionTypeMasterState, { IAgreementValues } from "../Container/RejectionReasonsState";
import EmailFailReportState from "../Container/ReportEmailFailState";
import EmailSentReportState from "../Container/ReportEmailSentState";
import ApplicationSubmitState from "../Container/SubmittedApplicationState";
import ThemeCityReportState from "../Container/ThemeCityReportState";
import ThemeCityApprovalState from "../Container/ThemeCityWiseApplicationApprovalState";
import WorkFlowActivityState from "../Container/WorkFlowActivityState";
import WorkFlowMappingState from "../Container/WorkFlowMappingState";
import MyProfileTabsForm from "../MyProfile/MyProfile";

import Menu from "../Dashboard/Menu";

import LandAllocationForm, { ILandSaveAndContinueProps } from "../ProposalForm/LandAllocationForm";
import UploadDocumentForm from "../ProposalForm/UploadDocumentsForm";
// tslint:disable-next-line:ordered-imports
// import Iframe from "react-iframe";

import ChangeUserRoleState, { indexOfString } from "../Container/ChangeUserRoleState";

import BulkPasswordState from "src/Container/BulkPasswordState";

import {
//  getLogOutDetails,
  getNotifications
} from "src/Api_Integration/LogOutService";

import ProjectRulesTypeMasterState from "src/Container/ProjectRulesState";
import AllUsersRoleState from "../Container/AllUsersState";

import Editor from "../Container/sampleEditor";
import UnitConversionTypeMasterState from "../Container/UnitConversionState";
import WorkFlowUserMappingState from "../Container/WorkFlowUserMappingState";

import * as moment from "moment";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { getAllocatedNameDetails,
   GetDashboardApprovalData, 
   getDashboardLandDetails, 
   getDashboardPieChartDetails, 
   getDashboardViewDetails } from "src/Api_Integration/DashboardService";
import {
  getApplicationSearchDetails,
  getApprovalFlowValues,
  getNoteFileValues,
  getProccesComments,
  // getProjectRulesValues,
  MapUrL,
  // postApproveValues,
  // postInsertMapDetails,
  postApprovalValues,
  postApproveValues,
  UpdateParecelNumber,
  updateReviewDetails,
  UpdateSurveyNumber
} from "src/Api_Integration/TabsSearchService";
import AllocationForm from "src/ProposalForm/AllocationForm";
import CreateProposalTownshipForm from "src/ProposalForm/CreateProposalTownshipForm";
import { getAllocatedValues } from "../Api_Integration/ApplicationSearchService";
import {
  getDraftApplications,
  GetProjectRulesForApplication,
  GetWitnessDetailsData,
  postDeleteDraftApplicationById
} from "../Api_Integration/DraftApplicationServices";

/// Dashboard 
export interface IDashboardStateValues {
  readonly District: number;
  readonly Mandal: number;
  readonly Village: number;
  readonly ApplicationId: null;
  readonly LandSize: number;
  readonly TownshipName: string;
  readonly ProjectType: null;
  readonly ProjectSubType: null;
  readonly LeaseTenure: null;
  readonly LeaseStartDate: null;
  readonly LeaseEndDate: null;
  readonly MandalName: null;
  readonly DistrictName: null;
  readonly PropertyImage: null;
  readonly KMLpath: null;
  readonly AvailableLandSize: number;
  readonly TownshipId: number;
  readonly TotalLandSize: number;
  readonly LogoImagePath: string;
  readonly VillageName: null;
  readonly PlotCode: null;
}
export interface IDashboardPieChartStateValues {
  readonly Count: number;
  readonly StatusName: string;
  readonly TownshipName: null;
  readonly TownshipId: number;
}

export interface IDocumentValues {
  readonly ApplicationId: null;
  readonly DocumentId: number;
  readonly DocumentPath: string;
  readonly Verified: boolean;
}

export interface IDashboardDocumentProps {
  readonly DocumentsVerifiedList: ReadonlyArray<IDocumentValues>;
}

export interface ISearchValues {
  RelationTypeInName: string
  WithInAGC: boolean;
  OutOfAGC: boolean;
  LandArea: number;
  Township: number;
  AmountTobePaid: number;
  AmountPaid: number;
  TotalLandCost: number;
  RegisteredOrNot: boolean;
  InitialAllocatedParcelNumber: number;
  InitialAllocatedSurveyNumber: number;
  GOMDetails: ReadonlyArray<IGoValues>;
  AuthPersonName: string;
  InitialAllocationSizeInAcres: number;
  InitialAllocationLandSize: number;
  AuthPersonName2: string;
  AuthDateOfBirth: string;
  WitnessDetailsFormArray: ReadonlyArray<IwitnessValues>;
  ProcessComments: ReadonlyArray<IProcessCommentsValues>;
  CompleteDetails: string;
  GlobalId: string;
  GeometricString: string;
  TempGlobalId: string;
  GeometryDataFromMap: string;
  AllocationTypeId: number;
  ApplicationId: string;
  AllocationTo: string;
  AllocationSubTypeId: number | undefined;
  AllocationTypeName: string;
  AgreementTypeId: number | undefined;
  AgreementTypeName: string;
  OrganiztionName: string;
  OrgRegistrationNumber: string;
  OrgTinNumber: string;
  OrgGST: string;
  OrgPhoneNumber: string;
  WebsiteURL: string;
  OrgEmailid: string;
  OrgAddress1: string;
  OrgAddress2: string;
  OrgCountryId: number | undefined;
  OrgCountryName: string;
  OrgStateId: number | undefined;
  OrgStateName: string;
  OrgCityName: string;
  OrgZipCode: string;
  AuthPersonName1: string;
  AuthEmailId: string;
  AuthPhoneNumber: string;
  AuthAddress1: string;
  AuthAddress2: string;
  AuthPhotoIdType: string;
  AuthPhotoIdNumber: string;
  AuthPhotoIdPath: string;
  LandAllocationTypeId: number;
  LandAllocationType: string;
  AvailableLandArea: number;
  AvailbleLandAreaUnits: number;
  RequiredLandArea: number;
  UnitFormatId: number | undefined;
  UnitFormatName: string;
  TenurePeriodId: number;
  TenurePeriod: string;
  LeaseAmountperAcre: number;
  LeaseAmountperAnnum: number;
  LeaseStartDate: string;
  LeaseEndDate: string;
  ProjectTitle: string;
  ProjPurpose: string;
  ProjStartDate: string;
  ProjEndDate: string;
  ProjBudget: number;
  ProjDescription: string;
  TownshipId: number;
  TownshipName: string;
  PhotoIdType: number | undefined;
  FirstName: string;
  LastName: string;
  DocumentsVerifiedList: ReadonlyArray<IDocumentValues>;
  ProjectRules: string;
  WorkflowComments: string;
  ProcessId: number;
  CurrentActivityId: number;
  CurrentActivityOrderId: number;
  LandAreaAllotedByEstates: number;
  ParcelId: string;
  SurveyNumber: string;
  GOMnumber: string;
  GOMdate: string;
  LOIdate: string;
  DistrictId: number;
  MandalId: number;
  VillageId: number;
  District: string;
  Mandal: string;
  Village: string;
  Boundaries: string;
  SurveyNumberByPlanning: string;
  PricePerUnit: number;
  TotalAmount: number;
  InitialAllocation: number;
  InitialAllocationLandSizeType: number;
  TotalAmountInRupees: string;
  LeaseAmountperAnnumInRupees: string;
  RequiredLandSizeBeforeAllocation: number;
  InitialAllocationInAcres: number;
  LandAreaAllotedByEstatesInSqMeters: number;
  IsRequestFromMap: boolean;
  RelationType: number | undefined;
  RelationName: string;
  DateOfBirth: string;
  AddRuleThemeCityType: number;
  ProjectRuleType: number;
  RelationTypeAndName: string;
  Bhudhaar: string;
  WitnessName: string;
  OrgPAN: string;
  AgreementName: string;
  AgreementPurpose: string;
  ProjectFundedBy: string;
  ProjectCoOrinator: string;
  AgreementDescription: string;
  LeaseTenure: number;
  RenewalForEvery: number;
  RenewalLoanAmount: number;
  ApplicationSubmittedDate: string;
  StrDateOfBirth: string;
  RelativeAge: number;
  TypeOfAllocation: number | undefined;
  Block: string;
  plot: string;
  TownShip: string;
  Sector: string;
  Colony: string;
  Plot: string;
}

export interface IDashboardStateProps {
  readonly dashboardData: ReadonlyArray<IDashboardStateValues>;
  readonly dashboardLinkData: ReadonlyArray<ISearchValues>;
  handleClick(id: number): void;
  handleOnClick(id: number): void;
  handlePTMSDashboardPendingItems(id: string): void;
  handleDashboardPropertyTaxPendingItems(id: string): void;
  handleDashboardPropertyChangePendingItems(id: string): void;
}
export interface IViewDetailsStateValues {
  readonly DistrictName: string;
  readonly MandalName: string;
  readonly VillageName: string;
  readonly TownshipId: number;
  readonly PlotCode: number;
  readonly AvailableLandSize: number;
  readonly TotalLandSize: number;
}
export interface IViewDetailStateProps {
  readonly changeViewValues: ReadonlyArray<IViewDetailsStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleDashboardSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
 
}
export interface IAllotedDetailsStateValues {
  readonly ApplicationId: string;
  readonly OrganiztionName: string;
  readonly RequiredLand: string;
  readonly AllotedLand: number;
  readonly ApplicationCurrentStatus: string;
  readonly LandonHold: string;
  readonly AllocateTo: string;
  readonly AllocationName: string;
  readonly ProjectName: string;
  readonly Status: string;
}
export interface IAllotedDetailStateProps {
  readonly selectedAllotedList: ReadonlyArray<IAllotedDetailsStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleSearch1(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
 
}

export interface IDashboardPieChartStateProps {
  readonly TotalPieChartCount: number;
  readonly dashboardPieChartData: ReadonlyArray<IDashboardPieChartStateValues>;
}
export interface IAllotedExpandRowProps {
  readonly changeAllotedValues: IAllotedDetailsStateValues;
  readonly selectedAllotedList: ReadonlyArray<IAllotedDetailsStateValues>;
  readonly expandApplicationId: string;
  readonly open: boolean;
  readonly dialogExpandOpen: boolean;
  onHandleClose(): void;
  handleClick(event: IAllotedDetailsStateValues): void;
}
export interface IAllotedValueProps {
  readonly AllotedApprovalValues: IAllotedDetailsStateValues;
}
export interface IDashboardApprovalValues {
  ApplicationId: string;
  LandlordName: null;
  LandlordPhoneNumber: null;
  AppointmentDate: string;
  Status: string;
  ApplicationType: null;
  ApplicationSubType: null;
  UserId: number;
  IsDateRange: number;
  EstimatedEndDate: string;
  OrganizationName: string;
  ProcessComments: string;
}

export interface IPTMSDashboardItems {
  readonly RequestId: string;
  readonly ApplicantName: string;
  readonly ApplicationStatus: string;
}

export interface IDashboardApprovalProps {
  readonly dashboardApprovalData: ReadonlyArray<IDashboardApprovalValues>;
  readonly dashboardPropertyChangePendingItems: ReadonlyArray<any>;
  readonly dashboardPropertyTaxPendingItems: ReadonlyArray<any>;
  readonly DashboardPendingItems: ReadonlyArray<any>;
}
///

export interface IProjectTypeValues {
  readonly ProjectName: string;
  readonly ProjectTypeId: number;
}


export interface IRoleMasterTypeStateValues {
  readonly CreatedBy: number;
  readonly CreatedOn: string;
  readonly RoleName: string;
  readonly IsActive: string;
  readonly ModifiedBy: number;
  readonly ModifiedOn: string;
  readonly ReturnCode: number;
  readonly RoleId: number;
}
export interface IRoleTypeMasterStateProps {
  readonly id: number;
  readonly countRole: number;
  readonly documentTypeMasterList: ReadonlyArray<IRoleMasterTypeStateValues>;
  readonly emptyRows: number;
  readonly searchInputRole: string;
  readonly openRole: boolean;
  readonly openRole2: boolean;
  readonly ClickOpen: boolean;
  readonly dropDownOpen: any;
  readonly dropDownOpen2: any;
  readonly pageRole: any;
  readonly rowsPerPageRole: any;
  
  readonly editPopUpOpen: boolean;
  readonly addPopUpOpenRole: boolean;
  readonly activatePopUpOpenRole: boolean;

  readonly deActivatePopUpOpen: boolean;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(roleValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(roleValues: IRoleMasterTypeStateValues): void;
  onHandleEditActionClick(roleValues: IRoleMasterTypeStateValues): void;
  onHandleEditSave(values: IEditRoleValues & IEditRoleProps): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(values: IAddRoleValues & IAddRoleProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearchRole(event: any): void;
  onHandleActivatePopUp(roleValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditRoleValues {
  readonly RoleId: number;
  readonly RoleName: string;
}

export interface IEditRoleProps {
  readonly ProjectType:ReadonlyArray<string>
  readonly ProjectTypeValues: ReadonlyArray<any>;
  readonly roleValues: IRoleMasterTypeStateValues;
  handleEditRuleNameChange(event: any): void;
  onHandleEditPopUpClose(): void;
  onhandleProjectTypeChange(event:any,values:IEditRoleValues & IEditRoleProps):void;
  onHandleEditSave(values: IEditRoleValues & IEditRoleProps): void;
}

export interface IAddRoleValues {
  readonly RoleId: number;
  readonly newRoleName: string;
  onHandleAddChange(event: any): void;
}

export interface IAddRoleProps {
  readonly ProjectType:ReadonlyArray<string>
  readonly ProjectTypeValues: ReadonlyArray<any>;
  readonly documentTypeMasterList: ReadonlyArray<IRoleMasterTypeStateValues>;
  onhandleProjectTypeChange(event:any,values:IAddRoleValues & IAddRoleProps):void;
  onHandleAddSave(values: IAddRoleValues & IAddRoleProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateProps {
  readonly RoleId: number;
  onHandleActivateClick(event: any): void;
  onHandleActivePopUpClose(): void;
}
///////////////////////////////////////////////////////////////////////////////
export interface IPrivilegesSubValues {
  state: {
    selected: boolean;
  };
  text: string;
  id: number;
  level:number;
  children:ReadonlyArray<IPrivilege3rdSubValues>;
}

export interface IPrivilege3rdSubValues {
    selected: boolean
  text: string;
  id: number;
  level:number;
}

export interface IPrivilegesValues {
  text: string;
  id: number;
  state: {
    opened: boolean;
    selected: boolean;
  };
  children: ReadonlyArray<IPrivilegesSubValues>;
}

export interface IPrivilegesStateValues {
  readonly selected: ReadonlyArray<string>;
  readonly selectRoleValues: ReadonlyArray<ISelectRoleValues>;
  readonly privilegesValues: ReadonlyArray<IPrivilegesValues>;
  handleCheckChange2(
    event: any,
    childrenObj: IPrivilegesSubValues,
    id: number,
    parent: IPrivilegesValues
  ): void;
  handleCheckChange3(
    event: any,
    childrensObj: IPrivilege3rdSubValues,
    childrenObj: IPrivilegesSubValues,
    id: number,
    parent: IPrivilegesValues
  ): void;
  handleCheckAllChange(event: any, obj: IPrivilegesValues, id: number): void;
  handleRoleClick(event: any): void;
}

export interface IChangeAvatarValues {
  readonly disableChangeAvatarButton: boolean;
  readonly Photo: string;
  handleReset(): void;
  onImageClick(values: IChangeAvatarValues): void;
  handleChange(evt: any): void;
  onHandleClose(): void;
  onImageReset(evt:any,Photo:any): void;
}
export interface IPersonalInfoValues {
  readonly UserId: number;
  readonly FirstName: string;
  readonly MiddleName: string;
  readonly SurName: string;
  readonly DisplayName: string;
  readonly Email: string;
  readonly PhoneNumber: string;
  readonly ReturnCode: number;
  readonly CurrentPassword: string;
  readonly NewPassword: string;
  readonly EncryptedPassword: string;
  readonly RoleId: number;
  readonly RoleName: string;
  readonly Department: number;
  readonly ReEnterNewPassword: string;
  readonly Guid: null;
  readonly Photo: string;
  readonly ActionRequired: number;
  readonly UserName: string;
  readonly DepartmentName: string;
  readonly Finger: number;
}

export interface IChangePasswordValues {
  readonly UserId: number;
  readonly CurrentPassword: string;
  readonly NewPassword: string;
  readonly ReEnterNewPassword: string;
  readonly FingerId: number;
  onHandleClose():void;
  handleCaptureFingerClick(value1: string, value2: number): void;
  handleCancelClick(event: any): void;
}
export interface IProfileStateValues {
  readonly tabsValue: number;
  onTabChange(evt: any, value: number): void;
  onSave(evt: any): void;
}
export interface IPersonalInfoValueProps {
  readonly myProfileValues: IPersonalInfoValues;
  handleFirstNameChange(event: any): void;
  handleMiddleNameChange(event: any): void;
  handleSurNameChange(event: any): void;
  handleDisplayChange(event: any): void;
  handleEmailAddressChange(event: any): void;
  handleMobileNumberChange(event: any): void;
  handleSaveChangesClick(evt: any): void;
  onHandleClose(): void;
}
export interface IChangePasswordProps {
  readonly myProfileChangePasswordValues: ReadonlyArray<IChangePasswordValues>;
}

export interface ISelectRoleValues {
  readonly RoleId: number;
  readonly RoleName: string;
}
export interface ISelectRoleProps {
  readonly roleTypeValues: ReadonlyArray<ISelectRoleValues>;
}
export interface ISelectDepartmentValues {
  readonly DepartmentId: number;
  readonly DepartmentName: string;
}
export interface ISelectDepartmentProps {
  readonly departmentTypeValues: ReadonlyArray<ISelectDepartmentValues>;
}
export interface ISelectFingerListValues {
  readonly FingerId: number;
  readonly FingerName: string;
}

export interface IPersonalInfo {
  handleCancelClickInfo(event: any): void;
  formHandleChange(event: any): void;
}
export interface IChangePasswordValues {
  handleChangePassword(
    value: IChangePasswordValues & ISelectFingerListProps
  ): void;
}
export interface ISelectFingerListProps {
  readonly captureFingerPopUp: boolean
  readonly fingerTypeValues: ReadonlyArray<ISelectFingerListValues>;
}

import {
  // CompleteDetailsToDB,
  CompleteDetailsToDB,
  // getAgreementTypeValues,
  ConditionTypeValues,
  getAgreementTypeValues,
  // getStateValues,
  GetConvertedValuesInAcres,
  getCountryValues,
  getLandAllocationTypeValues,
  GetMilestoneActivities,
  // postAuthorisedSaveContinue,
  getStateValues,
  // postDownloadFileValues,
  getTownShipValues,
  getTypeOfAllocationDropDown,
  // postSaveAndContinue,
  //  postSaveAsDraftValues,
  // postWitnessSaveAndContinue,
  getUnitValues,
  LeaseTenureValues,
  mileStoneValues,
  postAuthorisedSaveContinue,
  postDepartmentUserDropDownList,
  // postDownloadFileValues,
  postPhotoId,
  postPTMSDepartmentUserDropDownList,
  postRelationTypeId,
  postSaveAndContinue,
  postSaveAsDraftValues,
  postSubmitProposal,
  PostUploadImageDocuments,
  postWitnessSaveAndContinue,
  RuleTypeValues,
  SourceTypeValues,
  SubmitMilestoneDetails,
  UploadImageOfApplicationForm
  // SubmitMilestoneDetails
} from "../Api_Integration/ProposalService";
import ProposalForm from "../Container/ProposalFormState";
import {
  IApplicationStateValues,
  ISubmitApplicationPopUpValues
} from "../Container/SubmittedApplicationState";

import { Button, DialogActions } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import { getDate, getDay, getMonth, getYear } from "date-fns";
import { getAllRolesListDetails } from "src/Api_Integration/AllUsersService";
import { getAminitiesGridValues, postActivateAminitiesID, postAddAminitiesTypeValues, postDeActivateAminitiesId, postEditAminitiesValues } from "src/Api_Integration/AminitiesService";
import { GetBuildingClassificationDetails, 
  getDropdownForPropertyType, 
  postActiveBuildingClassification, 
  postBuildClassificationAddSave,
   postDeActiveBuildingClassinfication, 
   postEditBuildingClassificationEditSave 
  } from "src/Api_Integration/BuildingClassificationService";

import { getCategoryGridValues,
   postActivateCategoryID, 
   postAddCategoryValues, 
   postDeActivateCategoryId,
    postEditCategoryValues } from "src/Api_Integration/CategoryApi";
import { getProjectTypeNames } from "src/Api_Integration/CreateNewUserService";
import { 
  ActivateNatureUsage, 
  AddNewNatureUsage, 
  DeleteNatureUsage, 
  EditNatureUsage,
  GetBuildingClassificationDetailsWithPropType,
  GetNatureUsageDetails} from "src/Api_Integration/NatureUsageService";
import { 
  getPropertyDepartmentMasterGrid,
   postActivePropertyDepartment, 
  postCategoryOwnerShipDropDownData,
  postDeActivePropertyDepartment, 
  postEditPropertyDepartmentEditSave, 
  postPropertyDepartmentAddSave
} from "src/Api_Integration/PropertyDepartmentMasterService";

import { 
   getAminityDropDown, 
   getapartmentDropdown, 
   getBuildingClassificationDropDown,
    getCategoryOwnershipDropdown, 
   GetDepartmentandusers2forward,
   getDistrictDropDown,
   GetFiles, 
    getFloorDetails, 
   getGenderDropDown,
   getLMSDocumentTypes,
   getMandalPropertyDropDown,
   getMunciDropDown,
   getPropertyCategoryDropdown,
   getPropertyDepartmentDropdown,
  //  GetPropertyTypeByCatgId,
   getTownDropDown,
   InsertEditPropertyChangeInDraft, 
   InsertEditPropertyChangeSubmit,
   InsertNewAssessment,
   InsertNewAssessmentInDraft,
   PropertyOnSearch
   } from "src/Api_Integration/NewPropertyService";
import { GetConfirmationInsertTaxDetails, GetSelectedUsers, GetViewBillApi, PostPropertySearchPaytax } from "src/Api_Integration/PropertySearchPayTaxService";
 import { getAddPropertyTypeValues, getDropDownList, getPropertyTypeGridValues, postActivatePropertyID, postDeActivatePropertyId, postEditPropertyTypeValues } from "src/Api_Integration/PropertyService";
import { 
  GetAssessmentDetailsByID, 
  GetBudgetYears, 
  GetDashboardPropertyChangePendingItems, 
  getPropertyChangeDetailsID, 
  GetPropertyConfigurationDetails,
  GetPropertyConfigurationDetailsByID,
  GetPTMSDashboardPendingItems,
  GetTaxvaluationPendingTasks,
  UpdatePropertyConfigurationDetails,
  UpdatePropertyConfigurationDetailsForApproval, 
 } from "src/Api_Integration/PropertyTaxConfigurationService";
import { getRoleTypeMasterValues, postActivateID, postAddRoleTypeValues, postDeActivateId, postEditRoleTypeValues } from "src/Api_Integration/RoleTypeMasterService";
import { GetDraftAssessmentClickToProceedDetails, GetDraftAssessmentViewButtonDetails, GetSubmitDraftAssessments } from "src/Api_Integration/SubmitDraftAssessementService";
import TabsForm from "src/Applications/TabsForm";
import CreateNewUserState from "src/Container/CreateNewUserState";
import AllotedDetailTableForm from "src/Dashboard/AllotedInTable";
import DashboardForm from "src/Dashboard/Dashboard1";
import ViewDetailTableForm from "src/Dashboard/ViewDetailsTable";

import DraftApplicationForm from "src/LandAllocation/DraftApplicationTable";
import { IPagerProps } from "src/Masters/Pager";
import AddRoleTypeForm from "src/Masters/RoleTypeMaster/AddRoleTypeMaster";
import RoleTypeMasterForm from "src/Masters/RoleTypeMaster/RoleTypeMaster";
import AddAminityTypeForm from "src/PTMSMASTERS/Aminities/AddAminities";
import AminityTypeMasterForm, { getActivestate, IEditAminityProps } from "src/PTMSMASTERS/Aminities/Aminities";
import AddBuildingClassificationForm from "src/PTMSMASTERS/BuildingClassification/AddBuildingClassificationForm";
import BuildingClassificationTableForm from "src/PTMSMASTERS/BuildingClassification/BuildingClassificationTable";
import AddCategoryTypeForm from "src/PTMSMASTERS/Categery/AddCategory";
import CategoryTypeMasterForm, { documentNameIncludes, IEditCategoryProps } from "src/PTMSMASTERS/Categery/Category";
import AddNatureUsageForm from "src/PTMSMASTERS/NatureUsage/AddNatureUsageForm";
import NatureUsageMasterForm from "src/PTMSMASTERS/NatureUsage/NatureUsageTable";
import NewPropertyRegistrationForm from "src/PTMSMASTERS/NewPropertyAssesment/NewPropertyRegistration";
import ProcessFeeForm from "src/PTMSMASTERS/NewPropertyAssesment/ProcessFee";
import PropertyDetailsForm from "src/PTMSMASTERS/NewPropertyAssesment/PropertyDetails";
import NewPropertyUploadDocumentForm from "src/PTMSMASTERS/NewPropertyAssesment/UploadDocuments";
import AddPropertyMasterForm from "src/PTMSMASTERS/Property/AddProperty";
import PropertiesTypeMasterForm, { IEditProProps } from "src/PTMSMASTERS/Property/PropertyType";
import PropertyChangeForm from "src/PTMSMASTERS/PropertyChange/PropertyChange";
import PropertyDepartmentMasterForm from "src/PTMSMASTERS/PropertyDepartmentMaster/ PropertyDepartmentMasterTable";
import AddPropertyDepartmentForm from "src/PTMSMASTERS/PropertyDepartmentMaster/AddPropertyDepartmentMaster";
import { IConfirmationProps } from "src/PTMSMASTERS/PropertySearchAndTaxPay/ComfirmationForm";
import { IPaymentInfoProps } from "src/PTMSMASTERS/PropertySearchAndTaxPay/PaymentInfoForm";
import PropertySearchPayTaxTabForm from "src/PTMSMASTERS/PropertySearchAndTaxPay/PropertySearchPayTaxTabForm";
import { ISearchSessionProps } from "src/PTMSMASTERS/PropertySearchAndTaxPay/SearchSessionForm";
import PropertyTaxConfigurationTabForm from "src/PTMSMASTERS/PropertyTaxConfiguration/PropertyTaxConfigurationTabForm";
import SubmitDraftAssessmentForm from "src/PTMSMASTERS/SumbitDraftAssessment/sumbitDraftAssessmentTable";
import { isNull } from "util";
import {
  getMenuItems,
  getRoleSelectedDropdownChange,
  getUserItems,
  
  submitPrivilegesMaster
} from "../Api_Integration/PriviligesMasterServices";
import DocumentMappingForm from "../Masters/DocumentMapping";
import PrivilegesForm from "../Masters/PrivilegesMasterForm";
import PrivillegesPopUp from "../Masters/PrivillegesPopUp";

export interface IHomePage{
   readonly state1:any
 }
export interface IPrivillegesMenuProps {
  readonly roleId: number;
  menuItems: ReadonlyArray<IPrivilegesValues>;
}

export interface IDocumentmappingValues {
  readonly document: ReadonlyArray<IDocumentPropValues>;
  readonly document2: ReadonlyArray<IDocumentPropValues>;
  readonly AllocationId: number;
  readonly AllocationName: string;
  handleSubmit(e: any): void;
  handleCancelClick(event: any): void;
}
export interface IDocumentMappingProps {
  readonly selectDocumentMappingValues: ReadonlyArray<IDocumentmappingValues>;
}

export interface IProcessValues {
  readonly ProcessId: number;
  readonly ApplicationTypeName: string;
}
export interface IProcessTypeProps {
  readonly selectProcessValues: ReadonlyArray<IProcessValues>;
}
export interface IDocumentPropValues {
  readonly FileType: string;
  readonly FileTypeId: number;
  readonly PhotoId: number;
  readonly ProcessId: number;
  readonly PhotoIdTypeName: string;
  readonly buttonUpload: boolean;
}

export interface IDocument2PropValues {
  readonly Id: number;
  readonly ProcessId: number;
  readonly ProcessName: null;
  readonly SubProcessId: number;
  readonly SubProcessName: null;
  readonly DocumentId: number;
  readonly DocumentsList: null;
  readonly SelectedDocumentsList: null;
  readonly UserId: number;
  readonly SelectedKeys: null;
  readonly CreatedOn: string;
  readonly CreatedBy: number;
  readonly AllocationTypeId: number;
}
export interface IDocumentProps {
  readonly documentList: ReadonlyArray<IDocumentPropValues>;
  readonly documentList2: ReadonlyArray<IDocumentPropValues>;
  handleDocumentTypeChange(event: any): void;
  handleDocumentType2Change(event: any): void;
  handleCancelClick(event: any): void;
  handleSelectProcessChange(allocationId: number, event: any): void;
  handleSpecificSelectClick(event: any): void;
  handleAllSelectClick(): void;
  handleAllLeftSelectClick(): void;
  handleLeftSelectClick(values: any): void;
}

export interface ICreateProposalProps {
  readonly TownshipId: number
  readonly townshipValues: ReadonlyArray<IDashboardStateValues>;

  handleTownshipClick(TownshipId: number): void;
}
export interface IAllocationFormProps {
  readonly WithInAGC: boolean;
  readonly OutOfAGC: boolean;
  handleTownShipIdsClick(): void;
  handleOutOfAGCChange(event:any):void;
  handleWithInAGCChange(event:any):void;


}

export interface ISubmitProps {
  readonly submitPopUp: boolean;
  readonly SuccesPopUpOpen: boolean;
  readonly WarningPopUp: boolean;
  readonly uploadPopUpOpen: boolean;
  onHandleWarningPopupClose(): void;
  handleSubmitPopUpOpen(): void;
  onUploadPopUpClose(): void;
  handleDownload(values: any): void;
}
export interface IUploadDocumentValues {
  readonly imageWarningPopUp: boolean;
  readonly disableUploadButton: boolean;
  readonly disabledeleteButton: boolean;
  readonly Comments: string;
  readonly image1: string;
  readonly image2: string;
  readonly image3: string;
  readonly activeStep: number;
  readonly Uploadimages: ReadonlyArray<IUploadImageType>
  readonly UserId: number;
  readonly documentList2: ReadonlyArray<IDocumentPropValues>;
  readonly selectDepartmentName: string;
  readonly selectDepartmentList: ReadonlyArray<ISelectDepartmentvalues>;
  readonly fileSize: number;
  handleSelectDepartmentChange(event: any): void;

  
  handleUploadImageChange(evt: any,image:string, id: number): void;
  handleUploadButtonClick(event:any,name:any, id: number):void;

  handleUploadImage2Change(evt: any): void;

  handleUploadImage3Change(evt: any): void;
  handleDeleteimageClick(id: number, image: any, getId: any):void;

  handleBack(): void;
  onHandleSaveAsDraft(values: any): void;
  handleCommentsChange(event:any):void;

}

///  Process Fee 

export interface IProcessFeeProps {
  readonly reasonForCreation: number;
  readonly RequestId: string;
  readonly popUpOpen: boolean;
  readonly AssessmentPdfPath: string;
  readonly assessmentReviewPopUp: boolean;
  readonly reviewOpen: boolean;
  readonly forwardOpen: boolean;
  readonly applicationSelectDepartmentName: string;
  readonly ProcessingFee: number;
  readonly TotalTaxAmount: string;
  readonly selectwallValues: ReadonlyArray<IGenderValues>
  readonly selectwoodValues: ReadonlyArray<IGenderValues>
  readonly selectroofValues: ReadonlyArray<IGenderValues>
  readonly selectfloorValues: ReadonlyArray<IGenderValues>
  readonly selectFloorValues: ReadonlyArray<IGenderValues>
  readonly selectOccupancyValues: ReadonlyArray<IGenderValues>
  readonly selectNatUsageValues: ReadonlyArray<INature>
  readonly selectClassificationValues: ReadonlyArray<IBuildingValues>
  readonly AddClickCount: number;
 readonly selectPropertyValues: ReadonlyArray<IPropertyValues>
  readonly selectDepartmentValues: ReadonlyArray<IPropertyDepartmentValues>
  readonly selectCategoryOwnershipValues: ReadonlyArray<ICategoryOwnershipDetails>
  readonly selectApartmentValues: ReadonlyArray<IApartmentValues>
  readonly selectGenderValues: ReadonlyArray<IGenderValues>
  readonly selectGuardianValues: ReadonlyArray<IGenderValues>
  readonly CertificateNumber: string;
  readonly OccupancyCertificateDate:string;
  readonly aminityTypes: ReadonlyArray<string>
  readonly aminityValues1:ReadonlyArray<IAminityValues>
  readonly SurveyNumber: string;
  readonly  PattaNumber: string;
  readonly VacantLandArea: string;
  readonly CurrentMarketValue: string;
  readonly RegisteredDocumentValue: string;
  readonly  EffectiveDate: string;
  readonly LayoutPermitNumber: string;
  readonly LayoutPermitDate: string;
  readonly North: string;
  readonly  East: string;
  readonly West: string;
  readonly South: string;
  readonly District: string;
  readonly TotalTax: number;

  readonly  Corporation: string;
  readonly Mandal: string;
  readonly Village: string;
  readonly TownShip: string;
  readonly Sector: string;
  readonly NatureOfUsage: number;
  readonly Colony: string;
  readonly Locality: string;
  readonly ZoneNo: string;
  readonly   WardNo: string;
  readonly Block: string;
  readonly Street: string;
  readonly Enumerationblock: string;
  readonly PlotNo: string;
  readonly ElectionWard: string;
  readonly    DoorNo: string;
  readonly Pincode: string;

  readonly ExtentOfSite: string;
  readonly EnumMasterDesc: string;
  readonly roofId: number;
  readonly wallId: number;
  readonly FloorNumber: number;
  readonly BuildingClassification:number,
  readonly woodId: number;

  readonly mapOpen: boolean;
  readonly Occupancy: number;
  readonly ApplicationId: string;
 

  readonly FloorArray: ReadonlyArray<IFloorValues>

  readonly EnumMasterID: number;
  readonly Gender: number;
  readonly GuardianReg: number;
  readonly EnumTypeDesc: string;
  readonly CategoryOwnershipId: number ;
  readonly PropertyTypeName: string;
 readonly  CategoryOwnershipName: string;
  readonly PropertyTypeId: number;
  readonly ApartmentNameId:number
  readonly ApartmentName: string;
  readonly PropertyDepartmentName: string;
  readonly PropertyDepartmentId: number;
  readonly OwnershipArray: ReadonlyArray<IOwnershipValues>
  readonly CertificateNo: string;
  readonly CertificateDate: string;
  readonly MROProceedingNumber: string;
  readonly RegisteredDocumentNumber: string;
  readonly RegisteredDocumentDate: string;
  readonly DeedNumber: string;
  readonly DeedDate: string;
  readonly DecreeNumber: string;
  readonly DecreeDate:string;
  readonly CourtName:string;
  readonly activeStep: number;
  readonly NewPropertyDocumentTypeId: number;
  readonly PropertyAssessmentDocumentTypeId: number;
  readonly NewPropertyDocumentTypeValues: ReadonlyArray<IGenderValues>;
  readonly PropertyAssessmentDocumentTypeValues: ReadonlyArray<any>
  readonly selectFile: string;
  readonly paymentMode: string;
  readonly UserId: number;
  readonly ptmsSelectDepartmentList: ReadonlyArray<ISelectDepartmentvalues>;
  onHandleRegistrationReviewSubmit(values:IProcessFeeProps):void;
  handleClose():void;
  handleAssessmentClose(): void;

  onHandleProcessFeeSubmitPopUp(values:IProcessFeeProps):void;
  handleBack():void;
  onHandlePopUpClose():void;
  handleSelectDepartmentChange(event: any): void;
  onHandleProcessFeeSubmit(event: IProcessFeeProps): void;
  handleProcessFeeSaveAsDraftClick(event:any):void
}

export interface ICityValues {
  readonly TownshipId: number;
  readonly TownshipName: string;
}

export interface ITownshipValues {
  readonly TownshipId: number;
  readonly TownshipName: string;
}
export interface ICountryValues {
  readonly CountryId: number | undefined;
  readonly CountryName: string;
}
export interface IStateValues {
  readonly StateId: number | undefined;
  readonly StateName: string;
}
export interface IAllocationValues {
  readonly AllocationId: number | undefined;
  AllocationName: string;
}
export interface ICategoryOwnershipDetails {
  readonly CategoryOwnershipId: number | undefined;
  CategoryOwnershipName: string;
  
}
export interface IPropertyValues{
  readonly PropertyTypeName: string;
  readonly PropertyTypeId: number;
}
export interface IPropertyDepartmentValues{
  readonly PropertyDepartmentName: string;
  readonly PropertyDepartmentId: number;
}
export interface IApartmentValues{
  readonly ApartmentName: string;
  readonly ApartmentNameId: number;
}
export interface ICategoryTextFieldValues{
  readonly AddClickCount:number
  readonly EnumMasterID: number;
  readonly Gender: number;
  readonly GuardianReg: number;
  readonly EnumTypeDesc: string;
  readonly activeStep: number
  readonly CategoryOwnershipId: number | undefined;
  readonly PropertyTypeName: string;
 readonly  CategoryOwnershipName: string;
  readonly PropertyTypeId: number;
  readonly ApartmentNameId:number
  readonly ApartmentName: string;
  readonly  PropertyDepartmentName: string;
  readonly PropertyDepartmentId: number;
 readonly selectPropertyValues: ReadonlyArray<IPropertyValues>
readonly selectDepartmentValues: ReadonlyArray<IPropertyDepartmentValues>
  readonly selectCategoryOwnershipValues: ReadonlyArray<ICategoryOwnershipDetails>
  readonly selectApartmentValues: ReadonlyArray<IApartmentValues>
  readonly selectGenderValues: ReadonlyArray<IGenderValues>
  readonly selectGuardianValues: ReadonlyArray<IGenderValues>

  readonly OwnershipArray: ReadonlyArray<IOwnershipValues>
  handleGenderIdChange(event: any, index: number,  x:ICategoryTextFieldValues): void;
  handleGuardianIdChange(event: any, index: number,  x:ICategoryTextFieldValues): void;

  handleOwnerNameChange(event: any, index: number, x:ICategoryTextFieldValues): void;
  handleMobileNoChange(event: any, index: number, x:ICategoryTextFieldValues): void;
  handleEmailAddressRegChange(event: any, index: number, x:ICategoryTextFieldValues): void;
  handleGuardianChange(event: any, index: number, x:ICategoryTextFieldValues): void;
  onRegistration1Submit(event: ICategoryTextFieldValues): void
  handlePropertyRegChange(event:any):void
  handleRegistrationPropertyTypeChange(event:any):void;
  onDeleteClickReg(index:number):void
  onHandleAddClickReg(index: number): void;
}

export interface IDetailsFromMap {
  readonly mapDataValues: boolean;
  readonly AvailableLandArea: number;
  readonly Block: string;
  readonly Boundaries: string;
  readonly Colony: string;
  readonly CompleteDetails: string;
  readonly District: string;
  readonly GeometricString: string;
  readonly GeometryDataFromMap: string;
  readonly GlobalId: string;
  readonly Mandal: string;
  readonly ParcelId: string;
  readonly Plot: string;
  readonly Sector: string;
  readonly SurveyNumberByPlanning: string;
  readonly TempGlobalId: string;
  readonly TownShip: string;
  readonly Village: string;
  readonly activeStep: number;
  readonly mapPopUpOpen: boolean;
  readonly enterApplicationId: string;


  handleMapPopUpClose(): void;
  handleMapPopUpClose1():void;
  handleMapClose(id: string): void;
  handleEditMapDetails(values:IDetailsFromMap & IProposalTabStateValues):void;
}

export interface IProposalTabStateValues {
  readonly TownshipId:number
  readonly WithInAGC: boolean,
  readonly OutOfAGC: boolean,
  readonly buttonDisable1: boolean;
  readonly mapPopUpOpen: boolean;
  readonly LandAllocatedToId: number;
  readonly landAllocatedTo: string;
  readonly allocationTypeId: number;
  readonly AuthorisedPersonEmailAddress: string;
  readonly AgreementTypeId: number;
  readonly enterApplicationId: string;
  readonly mobileNumber: string;
  readonly agreementTypeValues: ReadonlyArray<IAgremmentTypeValues>;
  readonly typesOfAllocationValues: ReadonlyArray<ITypeOfAllocationValues>;
  AllocationName: string;
  readonly AllocationId: number | undefined;
  readonly AllocationSubTypeId: number | undefined;

  readonly CountryId: number | undefined;
  readonly CountryName: string;
  readonly StateId: number | undefined;
  readonly StateName: string;
  readonly TypeOfAllocationId: number | undefined;
  // for proposal
  readonly AllocationType: number;
  readonly OrganizationName: string;
  readonly OrgPhoneNumber: string |undefined;
  readonly OrgEmailAddress: string;
  readonly HouseNoBuildingName: string;
  readonly StreetNameLocality: string;
  readonly GSTNumber?: string;
 
  readonly City: string;
  readonly WitnessName: string;
  readonly ZipCode: string;
  readonly RegistrationNumber: string;
  readonly selectMapValuesPopUp: boolean;
  
  handleMapSelectClick():void;


  
  handleAllocationChange(e: any,
   
    ): void;
  handleLandAllocationClick(e: any
 
    ): void;
  handleCountryClick(e: any,
     values:  IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap
    ): void;
  
    handleAgreementChange(event: any
    
    ): void;
  handleTypeOfAllocationChange(event: any
    ,values:  IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap
    ): void;
  handleBack(): void;
  handleStateChange(event: any
  
    ): void;
  
}

export interface ILandallocationFormStatevalues {

  readonly buttonDisable4:boolean;
  readonly activeStep: number;
  readonly ApplicationId: string;
  readonly UnitId: number | undefined;
  readonly UnitName: string;
  readonly initialUnitId: number | undefined;
  readonly RenewalForEvery: number;
  readonly RenewalAmountPercentage: number;
  readonly requiredLandUnitId: number | undefined;
  readonly RequiredLandSizeBeforeAllocation: number;
  readonly InitialAllocationSizeInAcres: number;
  readonly TownshipId: number;
  readonly TownshipName: string;
  readonly AvailableLandArea: number;
  readonly RequiredLandSize: number;
  readonly LeaseAmount: number;
  readonly LeaseStartDate: string;
  readonly LeaseEndDate: string;
  readonly GoNumber: string;
  readonly GoDate: string;
  readonly ProjectName: string;
  readonly ProjectPurpose: string;
  readonly ProjectDescription: string;
  readonly AllocationId: number;
  readonly AllocationName: string;
  readonly InitialAllocationLandSize: number;
  readonly TotalLeaseAmount: number;
  readonly TotalBudget: number;
  readonly PricePerUnit: number;
  readonly InitialAllocation: number;
  readonly projectRules: number;
  readonly LandSize: number;
  readonly LandSizeType: number;
  readonly LandAllocationAllValues: any;
  readonly anchorEl: any;
  readonly PopOverForAcres: boolean;
  readonly AddGoValueClickCount: number,
  readonly TotalLandCost: number;
  readonly AmountPaid:number;
  readonly AmountToBePaid:number;
  readonly registerOrNot: string;

  onAddGoValuesClick(index:number):void
  handleProjectPurpose(event: any): void;
   handleProjectDescriptionChange(event: any,values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps  ): void;
  handleProjectNameChange(event: any, values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ): void;
    handleProjectPurposeChange(event: any, values:ILandallocationFormStatevalues &
      ILandAllocationValues &
      ISelectLandAllocationProps &
      ISelectThemeCityProps &
      IUnitProps &
      ILeaseTenureProps &
      ILeaseValues &
      IMileStoneDetailsProps &
      IMileStoneDetailsStateValues &
      IMilestoneDropDownProps &
      IRuleTypeValuesProps &
      IProjectValuesProps &
      ISourceValueProps &
      IConditionValueProps &
      IProjectRuleTypeProps &
      ICreateProposalProps ):void;

 
  
      handleLeaseAmountChange(event: any, values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps): void;
  handleTotalLandCostChange(event:any, values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps):void;
    handleRegisterOrNotChange(event:any, values:ILandallocationFormStatevalues &
      ILandAllocationValues &
      ISelectLandAllocationProps &
      ISelectThemeCityProps &
      IUnitProps &
      ILeaseTenureProps &
      ILeaseValues &
      IMileStoneDetailsProps &
      IMileStoneDetailsStateValues &
      IMilestoneDropDownProps &
      IRuleTypeValuesProps &
      IProjectValuesProps &
      ISourceValueProps &
      IConditionValueProps &
      IProjectRuleTypeProps &
      ICreateProposalProps  ):void;
  handleAmountPaidChange(event:any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ):void;
 

  handleGoDateChange(event: any, values:IGoValues,index:number ): void;
  handleGoNumberChange(event: any,values:IGoValues ,index:number): void;
  handleLeaseTenureChange(event: any,values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ): void;
  handleRequiredLandSizeChange(event: any,values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps): void;
  handleConvertedChange(event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ): void;
  
    handleInitialConvertedChange(
    event: any,
  values:ILandallocationFormStatevalues &
  ILandAllocationValues &
  ISelectLandAllocationProps &
  ISelectThemeCityProps &
  IUnitProps &
  ILeaseTenureProps &
  ILeaseValues &
  IMileStoneDetailsProps &
  IMileStoneDetailsStateValues &
  IMilestoneDropDownProps &
  IRuleTypeValuesProps &
  IProjectValuesProps &
  ISourceValueProps &
  IConditionValueProps &
  IProjectRuleTypeProps &
  ICreateProposalProps
  ): void;
  handleInitialAllocationLandSizeChange(event:any,values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ):void;
  handlePopUpOpenClick(): void;
  handleThemeCityChange(event: any, values:  ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IDetailsFromMap): void;
  handleLandDetailsChangeClick(event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IDetailsFromMap ): void;
    
    handleAvailableLandAreaChange(event:any, values:ILandallocationFormStatevalues):void;
  handleLeaseStartDateChange(date: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IDetailsFromMap ): void;
  handleBack(): void;
  handlePopoverOpen(event: any): void;
  handlePopoverClose(): void;
  handleUnitChange(event: any,values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IDetailsFromMap): void;
}
export interface IWitnessDetailsStateValues {
  readonly activeStep: number;
  readonly WitnessName: string;
  RelationName: string;
  readonly RelationType: number | undefined;
  readonly RelationDateOfBirth: string;
}
export interface IMileStoneDetailsStateValues {
  readonly LandRelease: string;
  readonly RuleId: number;
  readonly RuleName: string;
  readonly DateOfCompletion: string;
  readonly AddMilestoneClickCount: number;
  // handleSubmit(e: any): void;
  onMileStoneDeleteClick(e: any): void;
}
export interface IPath{
  readonly UrlPath:string
}
export interface IUserItems{
  userItems: ReadonlyArray<IPath>;
}
export interface IwitnessValues {
  readonly id: number;
  readonly AddClickCount: number;
  readonly WitnessName: string;
  readonly RelationName: string;
  readonly RelationType: number | undefined;
  readonly RelationTypeAndName:string;
  readonly RelationDateOfBirth: string;
  readonly RelationTypeArray: ReadonlyArray<IRelationTypeValues>;
}
export interface IOwnershipValues {
  readonly id: number;
  readonly AddClickCount: number;
  readonly OwnerName : string;
  readonly MobileNo: string;
  readonly Guardian: string;
  readonly EmailAddress	: string;
  readonly Gender: number;
  readonly GuardianReg: number;
  readonly selectGenderValues: ReadonlyArray<IGenderValues>;
  readonly selectGuardianValues:ReadonlyArray<IGenderValues>;
  readonly GuardianRelation 	: ReadonlyArray<IRelationTypeValues>;
}
export interface IBuildingValues{
  EnumTypeID: number;
  EnumMasterID: number;
  EnumMasterDesc: string;
}

export interface IFloorValues{
  readonly id: number;
  readonly Occupancy: number;
  readonly AddClickCount: number;
  readonly FirmName : string;
  readonly OccupantName: string;
  readonly ConstructionDate: string;
  readonly EffectiveFromDate	: string;
  readonly UnstructeredLand: number;
  readonly Length: number;
  readonly Breadth: number;
  readonly PlinthArea: string;
  readonly BuildingPermissionNo: string;
  readonly BuildingPermissionDate: string;
  readonly PlinthAreaInBuildingPlan: string;
  readonly FloorNumber: number;
  readonly BuildingClassification: number;
  readonly NatureOfUsage: number;
  readonly taxAmount: number;
  // readonly selectNatUsageValues:ReadonlyArray<IBuildingValues>;
  readonly   selectNatUsageValues:ReadonlyArray<INature>;

  readonly selectClassificationValues:ReadonlyArray<IBuildingValues>;
  readonly selectFloorValues: ReadonlyArray<IGenderValues>;
  readonly selectOccupancyValues: ReadonlyArray<IGenderValues>;

  
  // readonly selectBuildingValues:ReadonlyArray<IGenderValues>;

}
export interface INature{
  readonly EnumTypeID: number;
  readonly EnumMasterID: number;
  readonly EnumTypeDesc: string;
  readonly EnumMasterDesc: string;
  readonly PropVal: number;
}
export interface IGoValues{
  "GOMNumber":null,
"GOMDate":null,
"GOMDate_str":"01-01-0001",
"ApplicationId":"LA1936H5HQQ0EA7F",
"ApplicationDetailsId":1198
  id: number;
  GoNumber: string;
  GoDate: string;
  AddGoValueClickCount:number
}
export interface IMileStoneValues {
  readonly id: number;
  readonly AddMilestoneClickCount: number;
  readonly LandRelease: string;
  readonly RuleName: string;
  readonly RuleId: number;
  readonly DateOfCompletion: string;
  readonly ProjectTypeId: number;
  readonly mileStoneValues: ReadonlyArray<IMileStoneDropDownValues>;
  readonly ruleTypeValues: ReadonlyArray<IRuleTypeValues>;
  readonly ProjectRuleTypes: ReadonlyArray<string>;
  readonly projectValues: ReadonlyArray<IMileStoneDropDownValues>;
  ConditionTypeId: number;
  ConditionTypeValues: ReadonlyArray<IConditionValues>;
  RuleSourceTypeId: number;
  sourceTypeValues: ReadonlyArray<ISourceValues>;

readonly MilestoneId:number,
readonly MilestoneYear:number,
readonly ApplicationId:string,
readonly MilestoneRuleId:number,
readonly ReleaseLandArea:string,
readonly AvailbleLandAreaUnits:number,
readonly UnitFormat:string,
readonly EffectiveDate:string,
readonly ProjectRuleIds:string,
readonly MilestoneRules:string,
readonly LandAreaAllotedByEstates:number,
readonly ParcelId:string,
readonly SurveyNumber:string,
readonly InitialAllocationLandSize:number
}

export interface IMileStoneDropDownValues {
  RuleId: number;
  RuleName: string;
  CreatedBy: number;
  TownshipId: number;
  ReturnCode: number;
  ProjRuleTypeId: number;
  DocumentPath: null;
  SourceTypeId: number;
  ConditionTypeId: number;
  MinimumValue: number;
  MaximumValue: number;
  Value: number;
  ConditionValue: null;
  AchievedValue: number;
  IsVerified: boolean;
  IsDocumentVerified: boolean;
}

export interface IResetValues {
  onReset(): void;
}

export interface IWitnessDetailsProps {
  readonly buttonDisable3: boolean;
  readonly activeStep: number;
  readonly WitnessDetailsFormArray: ReadonlyArray<IwitnessValues>;
  readonly AddClickCount: number;
  handleWitnessNameChange(event: any, index: number, x:IwitnessValues): void;
  
  handleRelationTypeIdChange(event: any, index: number,  x:IwitnessValues): void;
  handleSubmit(e: any): void;
  onDeleteClick(index: number): void;
  onHandleAddClick(
    index: number
  ): // values: IWitnessDetailsStateValues &
  //   IRelationTypeProps &
  //   IWitnessDetailsProps
  void;
  handleRelationNameChange(event: any, index: number,  x:IwitnessValues): void;
  handleDateChange(event: any, index: number,  x:IwitnessValues): void;
  onWitnessSaveAndContinue(
    values: IRelationTypeProps & IWitnessDetailsProps & 
    IWitnessDetailsProps &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    IDetailsFromMap): void;
  handleBack(): void;
}
//// New Property Upload Docs 


export interface INewPropertyUploadDocumentProps {
  readonly UploadPopUp: boolean;
  readonly CertificateNo: string;
  readonly CertificateDate: string;
  readonly MROProceedingNumber: string;
  readonly RegisteredDocumentNumber: string;
  readonly RegisteredDocumentDate: string;
  readonly DeedNumber: string;
  readonly DeedDate: string;
  readonly DecreeNumber: string;
  readonly DecreeDate:string;
  readonly CourtName:string;
  readonly activeStep: number;
  readonly NewPropertyDocumentTypeId: number;
  readonly PropertyAssessmentDocumentTypeId: number;
  readonly NewPropertyDocumentTypeValues: ReadonlyArray<IGenderValues>;
  readonly PropertyAssessmentDocumentTypeValues: ReadonlyArray<any>
  readonly selectFile: string;
  handlePropertyAssessmentUpload(id:number):void;
  handleSelectFileUpload(event:any):void;
  handleBack(): void;
  onHandleNewPropertyUplaodDocSubmit(
    values: INewPropertyUploadDocumentProps): void;
  handleUploadPopUpClose():void;
}
////
export interface IMilestoneDropDownProps {
  readonly mileStoneValues: ReadonlyArray<IMileStoneDropDownValues>;
  handleLandReleaseChange(event: any, index: number): void;
  handleDateOfCompletionChange(event: any, index: number): void;
  handleMultiSelectMileStoneChange(event: any, index: number): void;
}

export interface IProjectRuleTypeProps {
  readonly projectTypes: ReadonlyArray<string>;
  readonly projectValues: ReadonlyArray<IMileStoneDropDownValues>;
  handleSelectMultiChange(event: any): void;
  // handleLandSubmit(event: any): void;
  //   AggrementName: string,
  //   AggrementPurpose: string,
  //   ThemeCityType: number,
  //   AggrementDescription: string,
  //   ProjectStartDate: string,
  //   ProjectEndDate: string,
  //   TotalBudget: number,
  //   ProjectFundedBy: string,
  //   ProjectCoordinator: string,
  //   ProjectRules: number,
  //   ApplicationId: string,
  //   LandAllocationType: number,
  //   RequiredLandSize: number,
  //   RequiredLandSizeBeforeAllocation: number,
  //   RequiredLandSizeType: number,
  //   LandSize: number,
  //   LandSizeType: number,
  //   LeaseTenure: number,
  //   LeaseAmount: number,
  //   LeaseStartDate: string,
  //   LeaseEndDate: string,
  //   RenewalForEvery: number,
  //   RenewalAmountPercentage: number,
  //   TotalLeaseAmount: number,
  //   MileStoneDetailsList: ReadonlyArray<IMileStoneValues>,
  //   PricePerUnit: number,
  //   TotalAmount: number,
  //   InitialAllocationLandSize: string,
  //   InitialAllocationLandSizeType: number,
  //   InitialAllocation: number,
  //   GOMnumber: number,
  //   GOMdate: string
  // ): void;
}

export interface IRuleTypeValues {
  readonly ProjRuleTypeId: number;
  readonly RuleType: string;
  readonly CreatedBy: number;
  readonly IsActive: boolean;
}
export interface IProjectValuesProps {
  readonly ProjectRuleTypes: ReadonlyArray<string>;
}
export interface IRuleTypeValuesProps {
  readonly milestonePopUp: boolean;
  readonly ProjectTypeId: number;
  readonly ruleName: string;
  readonly ruleName1: string;
  readonly ruleName2: string;
  readonly ruleTypeValues: ReadonlyArray<IRuleTypeValues>;
  handleMilestonePopUpClose(): void;
  MileStoneNewRuleSubmit(event: ITownshipValues &
    ISelectThemeCityProps &
    IRuleTypeValuesProps &
    ISourceValueProps &
    IConditionValueProps): void;
  handleProjectTypeChange(event: any): void;
  handleAddRuleNameChange(event:any):void;
  handleMaxValueChange(event:any):void;
  handleMinValueChange(event:any):void;
  handleValueChange(event:any):void;
  onHandleClose(): void;
}
export interface IMileStoneDetailsProps {
  readonly SuccessMileStonePopUp: boolean;
  readonly activeStep: number;
  readonly MileStoneArray: ReadonlyArray<IMileStoneValues>;
  readonly ProjectDetailsArray: ReadonlyArray<IGoValues>;
  
  readonly PopUpOpen: boolean;
  onGoValuesDeleteClick(index:number):void
  handlePopUpOpenClick(): void;
  onHandleClose(): void;
  handleMultiSelectChange(event: any, values: ILandallocationFormStatevalues & 
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps  ): void;
  handleMileStoneChange(event: any, index: number,values:  ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IDetailsFromMap &
    ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectThemeCityProps &
    ISelectLandAllocationProps &
    IProjectRuleTypeProps &
    IProposalTabStateValues &
    IMileStoneDetailsStateValues &
    IWitnessDetailsStateValues &
    IAuthorizedPersonValues ): void;
  onMileStoneAddClick(index: number): void;
  onMileStoneSave(
    event: IMilestoneDropDownProps &
      IMileStoneDetailsStateValues &
      IMileStoneDetailsProps &
      IRuleTypeValuesProps &
      IProjectValuesProps &
      IConditionValueProps &
      IMileStoneValues
  ): void;
  handleBack(): void;
  handleEditRuleTypeSubmit(event: any): void;
}
export interface IAminityValues{
  readonly AmenitiesId: number;
  readonly AmenitiesName: string;
}


export interface IDistrictValues{
  readonly DistrictName:string;
  readonly Muncipal_Corporation:string;
  readonly MandalName:string;
  readonly TownshipName:string;
  readonly Description: string;
  readonly id: number;
  readonly DistrictNumber: number;
  readonly MunciId: number;
  readonly MandalId: number;
  readonly TownId: number;
}

export interface IPropertyDetailsValues {
  readonly AssessmentID: number;
  readonly OwnerName: string;
  readonly PropertyType: string;
  readonly Email: string;
  readonly House_Door_no: string;
  readonly TownShip: string;
  readonly Address: string;
  readonly RequestId: string
}

export interface IPropertyChangeExpandValues {
  readonly propertyValues: IPropertyDetailsValues;
  onHandleClose():void;
}

export interface IPropertyChangeExpandValueProps {
  readonly propertyDetailsTableList: ReadonlyArray<IPropertyDetailsValues>;
  readonly RequestId: string;
  readonly open: boolean;
  onHandleClose():void;
}

export interface IPropertyDetailsStateProps {
  readonly dialogExpandOpen: boolean;

  readonly selectValuePopUp: boolean;
  readonly propertyDetailsTableList: ReadonlyArray<IPropertyDetailsValues>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  onHandleClose():void;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleSearch(event: any): void;
  onhandleselectValuePopUpClose(): void;
}
export interface IPropertyDetailsProps {

  readonly open: boolean;
  readonly RequestId: string;
  readonly propertyId: number;
  readonly selectedValue: string;
  readonly selectValuePopUp: boolean;
  readonly propertyValues: IPropertyDetailsValues;
  handleSelectedValueChange(propertyValues: IPropertyDetailsValues): void;
  onHandlePropertyChangeExpandClick(id:string):void;
}


export interface IPropertyChange {
  readonly propertyChangeDraftPopUp: boolean;
  readonly successPopUp: boolean;
  readonly reviewOpen: boolean;
  readonly selectDepartmentId: number;
  readonly propertyDetailsTableOpen: boolean;
  readonly PropTable: boolean;
  readonly OwnerName: string;
  readonly OwnerPhoneNumber:string;
  readonly Description: string;
  readonly MunciId: number;
  readonly MandalId: number;
  readonly TownId: number;
  readonly PropertyTypeId: number;
  readonly CategoryOwnershipId: number;
  readonly PropertyChangeList: ReadonlyArray<IPropertyChangesValues>; 
  readonly selectDistrictValues: ReadonlyArray<IDistrictValues>
  readonly selectMunciValues: ReadonlyArray<IDistrictValues>
  readonly selectMandalValues:ReadonlyArray<IDistrictValues>
  readonly selectTownValues: ReadonlyArray<IDistrictValues>
  readonly getFloorDetailValues:ReadonlyArray<any>
  readonly selectDepartmentForwardList: ReadonlyArray<ISelectDepartmentvalues>;
  readonly forwardOpen: boolean;
  readonly applicationSelectDepartmentName: string;
  handlePropertyChangeSubmitPopUp(values:IPropertyChange ):void;

  handleselectDepartmentChange(event:any):void;
  handlePropertyChangeClick(values: IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps):void
  
  handleSubmitProperty(event:IPropertyChange):void
  handleDistrictChange(event:any):void
  handleMuncipalityPropertyChange(event:any):void
  handleMandalPropertyChange(event: any): void;
  handlePropertyChangeDraftClick(values:IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps &
    IPagerProps):void;
  handlePropertyChangeDraftSaveAsDraft(values:IPropertyChange &
      IpropertyDetails &
      IPropertyDetailsStateProps &
      IPropertyDetailsProps &
      IPagerProps):void;
    handlePropertyChangeSubmit(values:IPropertyChange &
      IpropertyDetails &
      IPropertyDetailsStateProps &
      IPropertyDetailsProps &
      IPagerProps):void;
}


export interface IpropertyDetails{
  readonly reasonForCreation: number;
  readonly ProcessingFee: string;
  readonly TotalTaxAmount: string;
  readonly CategoryOwnershipId: number;
  readonly PropertyTypeId: number;
  readonly SurveyNumber: string;
  readonly PattaNumber: string;
  readonly VacantLandArea: string;
  readonly CurrentMarketValue: string;
  readonly RegisteredDocumentValue: string;
  readonly EffectiveDate: string;
  readonly LayoutPermitNumber: string;
  readonly LayoutPermitDate: string;
  readonly North: string;
  readonly East: string;
  readonly West: string;
  readonly South: string;
  readonly District: string;
  readonly Corporation: string;
  readonly Mandal: string;
  readonly Village: string;
  readonly TownShip: string;
  readonly Sector: string;
  readonly TotalTax: number;
  readonly NatureOfUsage: number;
  readonly Colony: string;
  readonly Locality: string;
  readonly ZoneNo: string;
  readonly WardNo: string;
  readonly Block: string;
  readonly Street: string;
  readonly Enumerationblock: string;
  readonly PlotNo: string;
  readonly ElectionWard: string;
  readonly DoorNo: string;
  readonly Pincode: string;
  readonly activeStep: number;
  readonly CertificateNumber: string;
  readonly OccupancyCertificateDate: string;
  readonly ExtentOfSite: string;
  readonly EnumMasterID: number;
  readonly EnumMasterDesc: string;
  readonly roofId: number;
  readonly wallId: number;
  readonly FloorNumber: number;
  readonly BuildingClassification:number,
  readonly woodId: number;
  readonly aminityTypes: ReadonlyArray<string>
  readonly aminityValues1:ReadonlyArray<IAminityValues>
  readonly selectwallValues: ReadonlyArray<IGenderValues>
  readonly selectwoodValues: ReadonlyArray<IGenderValues>
  readonly selectroofValues: ReadonlyArray<IGenderValues>
  readonly selectfloorValues: ReadonlyArray<IGenderValues>
  readonly mapOpen: boolean;
  readonly Occupancy: number;
  readonly ApplicationId: string;
  readonly FloorArray: ReadonlyArray<IFloorValues>
  readonly selectFloorValues: ReadonlyArray<IGenderValues>
  
  readonly selectOccupancyValues: ReadonlyArray<IGenderValues>
  readonly selectNatUsageValues: ReadonlyArray<INature>

  readonly selectClassificationValues: ReadonlyArray<IBuildingValues>

  readonly AddClickCount: number;
  onDeleteClickRegProp(index:number):void
  onHandleAddClickRegProp(index: number): void;
  handleFloorNumberIdChange(event: any, index: number, x:IpropertyDetails): void;
  
  handleBuildingClassificationChange(event: any, index: number, x:IpropertyDetails): void;
  handleNatureChange(event: any, index: number, x:IpropertyDetails): void;

  handleOccupancyChange(event: any, index: number, x:IpropertyDetails): void;

  handleFirmNameChange(event: any, index: number, x:IpropertyDetails): void;
  handleOccupantNameChange(event: any, index: number, x:IpropertyDetails): void;
  handleConstructionDateChange(event: any, index: number, x:IpropertyDetails): void;
  handleEffectiveFromDateChange(event: any, index: number, x:IpropertyDetails): void;
  handleUnstructeredLandChange(event: any, index: number, x:IpropertyDetails): void;

  handleLengthChange(event: any, index: number, x:IpropertyDetails): void;
  handleBreadthChange(event: any, index: number, x:IpropertyDetails): void;
  handlePlinthAreaChange(event: any, index: number, x:IpropertyDetails): void;
  handleBildingPermissionChange(event: any, index: number, x:IpropertyDetails): void;
  handleBuildingDateChange(event: any, index: number, x:IpropertyDetails): void;
  handleBuildingPlanChange(event: any, index: number, x:IpropertyDetails): void;
  handleTaxChange(event: any, index: number, x:IpropertyDetails): void;

  handleMapOpenClick(): void;
  handleMapPopUpClose(): void;
  handleMapClose(ApplicationId: string): void;
  onPropertyHandleSubmit(event:any):void
  handleMultiSelectAminityChange(event: any, values: any): void;
  handleRegBack():void

  }
export interface IChangeValues {
  handleStreetNameChange(event: any,values:IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues): void;
  handleHouseNoChange(event: any,values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues): void;
}
export interface IAuthorizedPersonValues {
  readonly imageWarningPopUp: boolean;
  readonly FirstName: string;
  readonly LastName: string;
  readonly AuthRelationTypeId: number | undefined;
  readonly RelationName: string;
  readonly AuthDateOfBirth: string;
  readonly AuthorisedPersonEmailAddress: string;
  readonly MobileNumber: string;
  HouseNo: string;
  StreetName: string;
  readonly PhotoIdType: number | undefined;
  readonly PhotoIdTypeName: string;
  readonly PhotoIdNumber: string;
  readonly authImage: string;
  readonly buttonDisable2: boolean;
  readonly RelationTypeName: string;

  // readonly StreetNameLocality: string;
  // readonly HouseNoBuildingName: string;
}

export const remove = (index: number, arr: ReadonlyArray<any>) => {
  if (index !== -1) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  return arr;
};

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
let RoleId: any;
if (item) {
  user = JSON.parse(item);
   RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}


export interface IAuthorisedProps {

  readonly activeStep: number;
  readonly check: boolean;
  RelationTypeName: string;
  readonly authorisedPersonValues: ReadonlyArray<IAuthorizedPersonValues>;
  onHandleClose():void;
  handleBack(): void;
  handleCheckClick(checked: boolean, values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues): void;
  handleRelationChange(event: any,values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues): void;
  handlePhotoIdChange(event: any, values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues): void;
  handleUploadImageClick(event: any,values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues): void;
  handleRemoveImage(): void;
  handleFirstNameChange(event:any, values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues):void;
  handleLastNameChange(event:any, values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues):void;
  handleAuthRelationNameChange(event:any, values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues):void;
  handleAuthDateOfBirthChange(event:any, values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues):void;
  handleAuthorisedPersonEmailAddresshChange(event:any, values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues):void
   handleAuthMobileNumberChange(event:any, values: IAuthorizedPersonValues &
      IRelationTypeProps &
      IPhotoIdTypeProps &
      IAuthorisedProps &
      IChangeValues ):void;

}

// export interface IProposalTabProps {
//   readonly landAllocationTabValues: ReadonlyArray<IProposalTabValues>;
// }

export interface IRelationTypeValues {
  readonly RelationTypeId: number | undefined;
  readonly RelationType: string;
  readonly RelationDescription: string;
}
export interface IGenderValues {
  readonly EnumMasterID: number 
  readonly EnumMasterDesc: string;
}

export interface IGuardianValues {
  readonly RelationTypeId: number | undefined;
  readonly RelationType: string;
  readonly RelationDescription: string;
}

export interface IRelationTypeProps {
  readonly relationTypeValues: ReadonlyArray<IRelationTypeValues>;
}


export interface IPhotoIdTypeValues {
  readonly PhotoIdType: number | undefined;
  readonly PhotoIdName: string;
}

export interface IPhotoIdTypeProps {
  readonly photoIdValues: ReadonlyArray<IPhotoIdTypeValues>;
}



export interface IProposalTabFormsProps {
  onHandleOrganizationSaveandContinue(event: any): void;
}
export interface ISelectThemeCityProps {
  readonly selectThemeCityTypeValues: ReadonlyArray<ITownshipValues>;
}

export interface ISelectAllocationProps {
  readonly selectAllocationTypeValues: ReadonlyArray<IAllocationValues>;
}
export interface ISelectAgrementTypeProps {
  readonly agreementTypeValues: ReadonlyArray<IAgremmentTypeValues>;
}
export interface ITypeOfAllocationValues {
  AgreementId: number | undefined;
  AgreementName: null;
  AllocationTypeId: number;
  AllocationSubTypeId: number;
  CreatedBy: number;
  IsActive: boolean;
  ReturnCode: number;
  AllocateToName: null;
  AllocationTypeName: null;
  TypeOfAllocationId: number | undefined;
  TypeOfAllocationName: string;
}

export interface IAgremmentTypeValues {
  readonly AgreementId: number| undefined;
  AgreementName: string;
  AllocationTypeId: number;
  AllocationSubTypeId: number;
  CreatedBy: number;
  IsActive: boolean;
  ReturnCode: number;
  AllocateToName: null;
  AllocationTypeName: null;
  TypeOfAllocationId: number | undefined;
  TypeOfAllocationName: null;
}
export interface ISelectTypeOfAllocationProps {
  readonly typesOfAllocationValues: ReadonlyArray<ITypeOfAllocationValues>;
}

export interface ISelectCountryProps {
  readonly selectCountryValues: ReadonlyArray<ICountryValues>;
}
export interface ISelectStateProps {
  readonly selectStateValues: ReadonlyArray<IStateValues>;
}
export interface ILandAllocationValues {
  readonly LandAllocationId: number | undefined;
  readonly LandAllocationTypeName: string;
}

export interface ISelectLandAllocationProps {
  readonly selectLandAllocationTypeValues: ReadonlyArray<ILandAllocationValues>;
}
export interface ILeaseValues {
  readonly Number: number;
}
export interface ILeaseTenureProps {
  readonly leaseTenure: ReadonlyArray<ILeaseValues>;
}

export interface IunitDataValues {
  UnitId: number | undefined;
  UnitName: string;
  CreatedBy: number;
  ConvertToUnitId: number;
  ConvertToUnitName: string;
  ConvertValue: number;
  ReturnCode: number;
  UnitConvertionId: number;
  IsActive: boolean;
  RequiredLand: number;
}

export interface IUnitValues {
  readonly PlotAreaId: number;
  readonly PlotAreaType: string;
}

export interface IUnitProps {
  readonly unitValues: ReadonlyArray<IUnitValues>;
}

export interface ISourceValues {
  RuleSourceTypeId: number;
  SourceName: string;
  CreatedBy: number;
  IsActive: boolean;
}
export interface ISourceValueProps {
  readonly RuleSourceTypeId: number;
  readonly sourceTypeValues: ReadonlyArray<ISourceValues>;
  handleSourceTypeChange(event: any): void;
}

export interface IConditionValues {
  ConditionTypeId: number;
  ConditionName: string;
  ConditionValue: string;
  CreatedBy: number;
  IsActive: boolean;
}

export interface IConditionValueProps {
  readonly maxValue: number;
  readonly minValue: number;
  readonly value: number;
  readonly ConditionTypeId: number;
  readonly ConditionTypeValues: ReadonlyArray<IConditionValues>;
  handleConditionTypeChange(event: any): void;
}
export interface ISubmitPopUpProps {
  readonly SuccesPopUpOpen: boolean;
  readonly documentList2: ReadonlyArray<IDocumentPropValues>
  readonly SubmitValues: any;
  readonly check1: boolean;
  readonly projectTypes:ReadonlyArray<string>
  readonly projectValues: ReadonlyArray<IMileStoneDropDownValues>;
  onHandleSaveAsDraft(values: ISubmitPopUpProps): void;
  handleRedirectToDashboardClick():void;
  onHandleFinalSubmit(values: ISubmitPopUpProps): void;

  handleClose(): void;
  handleSubmitCheck(event: any): void;
}

// Submit Draft Assessment interface
export interface ISumbitdraftAssessmentValues {
  readonly OwnerName: string;
  readonly CategoryOwnershipName: string;
  readonly PropertyDepartmentName: string;
  readonly PropertyTypeName: string;
  readonly RequestId: string;
  readonly StatusID: number;
  readonly AssessmentId: number;
}

export interface IOwnerDetailsValues {
  readonly OwnerEmail:string,
  readonly OwnerGender:number,
  readonly OwnerGuardianName:string,
  readonly OwnerGuardianRelation:number,
  readonly OwnerMobileNo:string,
  readonly OwnerName:string,
  readonly AssessementID:number
}

export interface IDraftAssessmentPopUpValues {
  readonly AssessmentID:number,
"CategoryOwnership":number,
"CategoryOwnership_str":string,
"ApartmentNameId":number,
"ApartmentNameId_str":null,
"PropertyDepartment":number,
"PropertyDepartment_str":string,
"PropertyType":number,
"PropertyType_str":string,
"IsFreeFlow":false,
"BlockNo":number,
"DoorNo":string,
"ElectionWard":number,
"EnumertaionBlock":string,
"ExtentSite":number,
"Pincode":string,
"LocalityId":string,
"OccupancyCertificateDate":string,
"OccupancyCertificateDate_str":string,
"OccupancyCertificateNo":string,
"ReasonCreation":number,
"ReasonCreation_str":string,
"FloorType":number,
"RoofType":number,
"WallType":number,
"WoodType":number,
"SaveType":number,
"Street":number,
"UserId":number,
"WardNo":number,
"ZoneId":number,
"NextUserId":number,
"North":string,
"South":string,
"East":string,
"West":string,
"lift":false,
"Toilets":false,
"WaterTap":false,
"Electricity":false,
"AttachedBathroom":false,
"WaterHarvesting":false,
"CableConnection":false,
"DocumentType":null,
"CertificateNo":string,
"CertificateDate":string,
"CertificateDate_str":string,
"ElectricMeterNo":string,
"MROProceedNo":string,
"CourtName":string,
"DecreeNo":string,
"Decreedate":string,
"Decreedate_str":string,
"DeedDate":string,
"DeedDate_str":string,
"DeedNo":string,
"DocCertificateDate":string,
"DocCertificateDate_str":string,
"DocCertificateNo":string,
"MROProceedingDate":string,
"MROProceedingDate_str":string,
"MROProceedingNo":string,
"RegisteredDocDate":string,
"RegisteredDocDate_str":string,
"RegisteredDocNo":string,
"TestatorAndTwoWitnessSigned":string,
"NewVacantLand":string,
"NewDocumentTypes":string,
"NewDocumentEnclosed":string,
"NewOwnerDetails":ReadonlyArray<IOwnerDetailsValues>,
 NewFloorDetails:any,
"WorkFlowHistory":string,
"IsActive":true,
"ReturnCode":number,
"CompanyId":string,
"CreatedOn":string,
"CreatedBy":number,
"ModifiedOn":string,
"ModifiedBy":number,
"EnumerationBlock_str":string,
"IsAddressPropertyDiff":boolean,
"Latitude":string,
"Longitude":string,
"ParcelId":string,
"StatusID":number,
"LocalityID_str":string,
"District_str":string,
"CorpMunicipality_str":string,
"Mandal_str":string,
"Township_str":string,
"Sector_str":string,
"Colony_str":string,
"ZoneNo_str":string,
"WardNo_str":string,
"BlockNo_str":string,
"Street_str":string,
"ElectionWard_str":string,
"PlotNo_str":string,
"Village_Str":string,
"District":string,
"CorpMunicipality":string,
"Mandal":string,
"Township":string,
"Sector":string,
"Colony":string,
"PlotNo":string,
"RequestId":string,
"Amenities":string,
"CreatedDate":string,
"PdfPath":string,
"OwnerName_Email":string,
"NextUserEmailId":string,
"NextUserName":string,
"Uploadedfiles": string,
"IsEdit":boolean,
"PropertyTypeDesc":string
}


export interface IDraftAssessmentProceedValues {
  readonly proceedValues: any
}

export interface ISubmitDraftAssessmentStateProps {
  readonly dialogOpen: boolean;
  readonly submitDraftAssessmentList: ReadonlyArray<
    ISumbitdraftAssessmentValues
  >;
  readonly draftAssessmentPopUpValues: IDraftAssessmentPopUpValues
  readonly draftAssessmentProceedValues: IDraftAssessmentProceedValues
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  // readonly open: boolean;
  readonly AllocateTo: string;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleSearch(event: any): void;
  onHandleViewButtonClick(RequestId: string): void;
  onHandleActionClick(draftAssessmentValues: ISumbitdraftAssessmentValues):void;
  onHandleDraftAssessmentClose():void;

}


export interface ISumbitDraftValueProps {
  readonly draftAssessmentValues: ISumbitdraftAssessmentValues;
  selectfloorValues: ReadonlyArray<IGenderValues>;
  selectroofValues: ReadonlyArray<IGenderValues>;
  selectwoodValues: ReadonlyArray<IGenderValues>;
  selectwallValues: ReadonlyArray<IGenderValues>;
}

// Draft Applications 

export interface IDraftExpandRowProps {
  readonly draftApplicationList: ReadonlyArray<IApplicationStateValues>;
  readonly expandApplicationId: string;
  readonly open: boolean;
}

export interface IDraftApplicationExpandItemProps {
  readonly submitPopUpValues: ISubmitApplicationPopUpValues;
}

export interface IDraftValueProps {
  readonly draftApplicationValues: IApplicationStateValues;
}

export interface IDraftApplicationStateProps {
  readonly draftWithId: boolean;
  readonly draftApplicationList: ReadonlyArray<IApplicationStateValues>;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  // readonly open: boolean;
  readonly expandApplicationId: string;
  readonly AllocateTo: string;
  readonly dialogExpandOpen: boolean;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleSearch(event: any): void;
  onHandleDeleteClickPopUp(event: any): void;
  onHandleClick(event: any): void;
  onHandleActionClick(values: IApplicationStateValues): void;
  onHandleClose(): void;
  onhandleExpandClose(): void;
}

export interface ILogOutvalues {
  handleLogOut(): void;
}
export interface INotificationValues {
  readonly open: boolean;
  readonly notifications: ReadonlyArray<string>;
  handleClick(event: any): void;
  handleClose(): void;
}

export interface IUploadImageType {
  image: string
  id:string
}
export interface IUploadimageTypes {
  Uploadimages: ReadonlyArray<IUploadImageType>
}


export interface IProfileProps {
  readonly Photo1: string;
  readonly DisplayName: string;
  readonly ProfileDetails: IPersonalInfoValues;
}


export interface IRoleMasterTypeStateValues {
  readonly CreatedBy: number;
  readonly CreatedOn: string;
  readonly RoleName: string;
  readonly IsActive: string;
  readonly ModifiedBy: number;
  readonly ModifiedOn: string;
  readonly ReturnCode: number;
  readonly RoleId: number;
}
export interface IRoleTypeMasterStateProps {
  readonly documentTypeMasterList: ReadonlyArray<IRoleMasterTypeStateValues>;
  readonly emptyRows: number;
  
 
  readonly ClickOpen: boolean;
  readonly dropDownOpen: any;
  readonly dropDownOpen2: any;

  // readonly expandApplicationId: string;
  // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly editPopUpOpen: boolean;


  readonly deActivatePopUpOpen: boolean;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(roleValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(roleValues: IRoleMasterTypeStateValues): void;
  onHandleEditActionClick(roleValues: IRoleMasterTypeStateValues): void;
  onHandleEditSave(event: any, name: string): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(values: IAddRoleValues & IAddRoleProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUp(roleValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditRoleValues {
  readonly RoleId: number;
  readonly RoleName: string;
}

export interface IEditRoleProps {
  readonly roleValues: IRoleMasterTypeStateValues;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(values: IEditRoleValues & IEditRoleProps): void;
}

export interface IAddRoleValues {
  readonly RoleId: number;
  readonly newRoleName: string;
  onHandleAddChange(event: any): void;
}

export interface IAddRoleProps {
  readonly documentTypeMasterList: ReadonlyArray<IRoleMasterTypeStateValues>;
  onHandleAddSave(values: IAddRoleValues & IAddRoleProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateProps {
  readonly RoleId: number;
  onHandleActivateClick(event: any): void;
  onHandleActivePopUpClose(): void;
}

///////////////////////////
// Application State interfaces 


export interface ISelectDepartmentvalues {
  readonly DepartmentId: number;
  readonly DepartmentName: string;
  readonly UserId: number;
  readonly UserName: string;
}
export interface IParcelValues {
  ApplicationId: string;
  ApplicationStatusId: number;
  ProcessComments: string;
  UserId: number;
  ReturnCode: number;
  LandAreaAllotedByEstates: number;
  MilestoneId: number;
  ParcelId: null | number;
  SurveyNumber: null | number;
  LandAllocationTypeId: number;
  MilestoneDetailsVMLst: null;
  SelectedRejections: null;
  Remarks: null | string;
  NextUserName: null | string;
  NextUserEmailId: null | string;
  GOMnumber: null | number;
  GOMdate: null;
  LOIdate: null;
  DistrictId: number;
  MandalId: number;
  VillageId: number;
  District: null;
  Mandal: null;
  Village: null;
  Boundaries: null;
  SurveyNumberByPlanning: null;
  AuthPersonEmail: null;
  ApplStatusId: number;
  AuthPersonName: null;
  UploadedFiles: null;
  ProjectRulesList: null;
  AllocationSubType: number;
  AssignedProjectRules: null;
  UpdatedLandAreaByPlanning: number;
  AuthPersonMobileNumber: null;
  HouseNumber: null;
  Buildingname: null;
  ProjectPurpose: null;
  ProjectTitle: null;
  GOMdateStr: null;
  LOIdateStr: null;
  TotalLand: number;
  TotalAmount: number;
  TotalAmountPerAcre: number;
  FinalApprovalDate: null;
  TotalAmountInWords: null;
  LeaseAmountperAcre: number;
  LeaseAmountperAcreInWords: null;
  LeaseTenure: number;
  LeaseStartDate: null;
  LeaseEndDate: null;
  AreaInSqMeters: number;
  ProjectDescription: null;
  LeaseTenureInWords: null;
  TotalAmountPerAcreInWords: null;
  LeaseAmountperAnnum: number;
  LeaseAmountperAnnumInWords: null;
  Bhudhaar: null;
  AuthPersonAge: number;
  RelationTypeAndName: null;
  orgName: null;
  OrgAddress: null;
  TypeOfAllocation: number;
}

export interface IApplicationState {
  readonly ApplicationtabsValue: number;
  readonly searchDataId: string;
  readonly searchArray: ReadonlyArray<ISearchValues>;
  readonly noteFiles: ReadonlyArray<INoteFileStateValues>;
  readonly applicationProjectRules: ReadonlyArray<
    IapplicationProjectRulesValues
  >;
  readonly approvalFiles: ReadonlyArray<IApprovalFlowValues>;
  readonly parcelValues: ReadonlyArray<any>;
  onTabChange(event: any, value: number): void;
  onHandleChange(event: any): void;
  onHandleSearch(event: any): void;
  handleLandAllocationChange(event: any): void;
}
export interface ISearchArrayValues {
  readonly searchArray: ReadonlyArray<ISearchValues>;
}

export interface INoteFileStateValues {
  readonly ApplicationId: string;
  readonly RoleName: null;
  readonly CreatedOn: string;
  readonly Status: string;
  readonly Comments: string;
  readonly CommentsBy: string;
  readonly UserName: null;
  readonly ActivityId: number;
  readonly CurrentActivityId: number;
  readonly StatusId: number;
  readonly Id: number;
}
export interface IapplicationProjectRulesValues {
  readonly RuleId: number;
  readonly RuleName: string;
  readonly CreatedBy: number;
  readonly TownshipId: number;
  readonly ReturnCode: number;
  readonly ProjRuleTypeId: number;
  readonly DocumentPath: string;
  readonly SourceTypeId: number;
  readonly ConditionTypeId: number;
  readonly MinimumValue: number;
  readonly MaximumValue: number;
  readonly Value: number;
  readonly ConditionValue: string;
  readonly AchievedValue: number;
  readonly IsVerified: boolean;
  readonly IsDocumentVerified: boolean;
  readonly uploadPopUp: boolean;
  readonly uploadSuccessPopUp: boolean;
  readonly disabledeleteButton: boolean;
}

export interface IApprovalFlowValues {
  readonly WorkFlowActivityName: string;
  readonly CreatedOn: null;
  readonly CreatedBy: number;
  readonly ModifiedOn: null;
  readonly ModifiedBy: number;
  readonly WorkFlowActivityId: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
  readonly UserName: string;
  readonly AllocateTo: string;
  readonly AllocationType: string;
  readonly AgreementType: string;
  readonly CurrentActivityId: number;
  readonly ActivitityOrderId: number;
}
export interface INoteFileProps {
  readonly noteFiles: ReadonlyArray<INoteFileStateValues>;
}
export interface IprojectRuleProps {
  readonly applicationProjectRules: ReadonlyArray<
    IapplicationProjectRulesValues
  >;
}
export interface IApprovalFlowProps {
  readonly approvalFiles: ReadonlyArray<IApprovalFlowValues>;
}

export interface IProcessCommentsValues {
  readonly ApplicationId: string;
  readonly RoleName: string;
  readonly CreatedOn: string;
  readonly Status: string;
  readonly Comments: string;
  readonly CommentsBy: string;
  readonly UserName: string;
  readonly ActivityId: number;
  readonly CurrentActivityId: number;
  readonly StatusId: number;
  readonly Id: number;
}

export interface ITreeFormValues {
  readonly searchArray: ReadonlyArray<ISearchValues>
  readonly ApplicationId: string;
  readonly searchDataId: string;
  readonly ProjectDetailsArray:ReadonlyArray<IGoValues>
  readonly forwardOpen: boolean;
  readonly mileStoneValues: ReadonlyArray<IMileStoneDropDownValues>
  readonly AddMilestoneClickCount: number;
  readonly MileStoneArray: ReadonlyArray<IMileStoneValues>;
  expanded: string | boolean | null;
  panel1: boolean;
  panel2: boolean;
  panel3: boolean;
  panel4: boolean;
  panel5: boolean;
  panel6: boolean;
  mapOpen: boolean;
  ApproveOpen: boolean;
  reviewOpen: boolean;
  reviewSuccessOpen: boolean;
  targetValue: string;
  ProcessComments: ReadonlyArray<IProcessCommentsValues>;
  Comments: string;
  ruleImage: string;
  readonly selectDepartmentId: number;
  readonly applicationSelectDepartmentName: string;

  readonly selectDepartmentList: ReadonlyArray<ISelectDepartmentvalues>;
  handleRuleImageChange(event: any, id: number): void;
  handleRuleSatisfiedChange(event: any, id: number): void;
  onHandleApprovePopUpClose(): void;
  handleBhudhaarNumberChange(event:any):void;
  handleSurveyNumberChange(event: any): void;
  handleInitialLandChange(event:any):void;
  handleParcelChange(event: any): void;
  handleSurveyChange(event: any): void;
  handleProcessCommentsChange(event: any): void;
  handleselectDepartmentChange(event: any): void;
  onHandleApprovePopUpOpen(event: any): void;
  onHandleForwardPopUpOpen(event: any): void;
  onHandleReviewPopUpOpen(): void;
  onHandleReviewPopUpClose(): void;
  onHandleReviewSuccessPopUp(): void;
  handleMapClose(id: string): void;
  handleMapOpenClick(): void;
  onHandleApproveClick(event: any): void;
  onHandleReviewClick(event: any): void;
  onHandlePanelChange(event: any): void;
  handleDocumentVerifiedChange(event: any,id: number): void;
  // [x: string]: any;
  onExpandAll(): void;
  onCollapseAll(): void;
  handleAppFormUploadImageClick(evt: any, Photo: string, roleId: number): void;
  handleRemoveImageClick(roleId: number,getId: any):void;
  handleParcelNumberChange(event: any): void;
}
export interface IImagevalues {
  readonly applicationimages: string;
  handleImageChange(evt: any): void;
}
export interface IDocumentRepositoryState {
  readonly documentList2: ReadonlyArray<IDocumentPropValues>;
  readonly applicationimage: string;
  readonly applicationimage2: string;
  handleClick(event: any, name: any): void;
}

export interface IMatchParams {
  id: string;
}


export interface IActivateNatureUsageProps {
  readonly NatureUsageId: number
    onHandleNatureUsageActivateClick(event: any): void;
    onHandleActivePopUpClose(): void;
}
export interface IDeActivateNatureUsageProps {
  readonly NatureUsageId: number
    onHandleNatureUsageDeActivateClick(event: any): void;
    onHandleDeActivePopUpClose(): void;
}

export interface IBuildingClassificationDropDownValues {
  readonly BuildingClassificationName:string,
  readonly PropertyTypeDesc:string,
  readonly PropertyTypeId:number,
  readonly BuildingClassificationId:number,
  readonly IsActive:boolean
}

// 
export interface INewDocumentTypeProps {
  readonly DocumentType:number,
  readonly CertificateNo: string,
  readonly CertificateDate:string,
  readonly CertificateDate_str:string,
  readonly ElectricMeterNo:string,
  readonly MROProceedNo:string,
  readonly CourtName:string,
  readonly DecreeNo:string,
  readonly Decreedate:string,
  readonly Decreedate_str:string,
  readonly DeedDate:string,
  readonly DeedDate_str:string,
  readonly DeedNo:string,
  readonly RegisteredDocNo: string
  readonly RegisteredDocDate_str: string
}

export interface IAddNatureUsageValues{
  readonly PropertyTypeId: number;
  readonly BuildingClassificationId:number;
  readonly NatureUsageName: string
  readonly NatureUsageList: ReadonlyArray<
  INatureUsageMasterValues
  >;
  readonly natureUsageItems : INatureUsageMasterValues
  readonly propertyTypeDropDownValues: ReadonlyArray<IPropertyTypeDropDownValues>
  readonly buildingClassificationDropDownData: ReadonlyArray<IBuildingClassificationDropDownValues>
  onHandleAddSave(values: IAddNatureUsageValues): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  handleBuildingClassificatioIdChange(event:any):void;
  onHandleNatureUsageNameChange(event:any):void;
  handlePropertyTypeIdChange(event:any):void;
}
export interface IEditNatureUsageValues {
  readonly PropertyTypeId: number;
  readonly BuildingClassificationId:number;
  readonly BuildingClassificationName: string;
  readonly NatureUsageName: string
  readonly NatureUsageList: ReadonlyArray<
  INatureUsageMasterValues
  >;
readonly NatureUsageId: number
  readonly natureUsageItems : INatureUsageMasterValues
  readonly PropertyTypeDropDownDataValues: ReadonlyArray<IPropertyTypeDropDownValues>
  readonly buildingClassificationDropDownData: ReadonlyArray<IBuildingClassificationDropDownValues>

  onHandleEditSave(values: IEditNatureUsageValues): void;
  onHandleEditPopUpClose(): void;
  handleBuildingClassificationIdChange(event:any):void;
  handleNatureUsageNameChange(event:any):void;
  handlePropertyTypeIdChange(event:any):void;
}
export interface INatureUsageMasterItems {
  readonly searchInput: string;
  readonly page:number;
  readonly rowsPerPage:number;
  readonly NatureUsageCount: number;
  readonly addNatureUsagePopUpOpen: boolean;
  readonly activateNatureUsagePopUp:boolean;
  readonly deActivateNatureUsagePopUp:boolean;
  readonly editNatureUsagePopUp:boolean;
  readonly natureUsageItems: INatureUsageMasterValues;
  onHandleSearch(event:any):void;
  onHandleNatureUsageEditClick(
    values: INatureUsageMasterValues
  ): void;
  onHandleNatureUsageDeActivatePopUp(
    values: INatureUsageMasterValues
  ): void;
  onHandleNatureUsageActivatePopUp(
    values: INatureUsageMasterValues
  ): void;
  onHandleChangeRowsPerPage(event:any):void;
  onHandlePageChange(event:any, page: number):void;
}
export interface INatureUsageMasterProps {
  readonly NatureUsageList: ReadonlyArray<INatureUsageMasterValues
  
>;
}
export interface INatureUsageMasterValues {
  readonly NatureUsageName:string,
  readonly BuildingClassificationDesc:string,
  readonly PropType:number,
  readonly BuildingClassificationId:number,
  readonly NatureUsageId:number,
  readonly IsActive:boolean,
}

///////// Property Type
export interface IPropertyTypeDropDownValues{
  readonly PropertyTypeName:string,
  readonly CategoryOwnershipDesc:string,
  readonly CategoryOwnershipId:number,
  readonly PropertyTypeId:number,
  readonly IsActive:false,
}

export interface IBuildingClassificationMasterValues {
  readonly BuildingClassificationName:string,
  readonly PropertyTypeDesc:string,
 
  readonly PropertyTypeId:number,
  readonly BuildingClassificationId:number,
  readonly IsActive:boolean,
}

export interface IBuildingClassificationMasterItems {
  readonly searchInput: string;
  readonly page:number;
  readonly rowsPerPage:number;
  readonly buildingClassificationCount: number;
  readonly addBuildingClassificationPopUpOpen: boolean;
  readonly activateBuildingClassificationPopUp:boolean;
  readonly deActivateBuildingClassificationPopUp:boolean;
  readonly editBuildingClassificationPopUp:boolean;
  readonly buildingClassificationItems: IBuildingClassificationMasterValues;
  onHandleSearch(event:any):void;
  onHandleBuildingClassificationEditClick(
    values: IBuildingClassificationMasterValues
  ): void;
  onHandleBuildingClassificationDeActivatePopUp(
    values: IBuildingClassificationMasterValues
  ): void;
  onHandleBuildingClassificationActivatePopUp(
    values: IBuildingClassificationMasterValues
  ): void;
  onHandleChangeRowsPerPage(event:any):void;
  onHandlePageChange(event:any, page: number):void;
}

export interface IBuildingClassificationMasterProps {
  readonly buildingClassificationList: ReadonlyArray<
  IBuildingClassificationMasterValues
  >;
 
}

export interface IAddBuildingClassificationValues {
  readonly PropertyTypeId: number;
  readonly buildingClassificationList: ReadonlyArray<
  IBuildingClassificationMasterValues
  >;
  readonly BuildingClassificationName: string;
  readonly buildingClassificationItems : IBuildingClassificationMasterValues
  readonly propertyTypeDropDownValues: ReadonlyArray<IPropertyTypeDropDownValues>
  onHandleAddSave(values: IAddBuildingClassificationValues): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleBuildingClassificationNameChange(event:any):void;
  handlePropertyTypeIdChange(event:any):void;
}

export interface IEditBuildingClassificationMasterValues {
  readonly BuildingClassificationName: string;
  readonly PropertyTypeId: number;
readonly BuildingClassificationId: number
  readonly buildingClassificationItems : IBuildingClassificationMasterValues
  readonly propertyTypeDropDownValues: ReadonlyArray<IPropertyTypeDropDownValues>
  onHandleEditPropertyDepartmetNameChange(event:any):void;
  onHandleEditSave(values: IEditBuildingClassificationMasterValues): void;
  onHandleEditPopUpClose(): void;
  onHandleBuildingClassificationNameChange(event:any):void;
  handlePropertyTypeIdChange(event:any):void;
}

export interface IActivateBuildingClassificationMasterProps{
  readonly BuildingClassificationId: number
    onHandleActivateClick(event: any): void;
    onHandleActivePopUpClose(): void;
}

export interface IDeActivateBuildingClassificationMasterProps {
  readonly BuildingClassificationId: number
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(id:number): void;
}


export interface IPropertyDepartmentMasterValues {
  readonly CategoryOwnershipId: number;
  readonly PropertyDepartmentId: number;
  readonly PropertyDepartmentName: string;
  readonly CategoryOwnershipDesc: string;
  readonly IsActive: boolean;
}

export interface IPropertyDepartmentMasterItems {
  readonly searchInput: string;
  readonly page:number;
  readonly rowsPerPage:number;
  readonly propertyDepartmentcount: number;
  readonly addPropertyDepartmentPopUpOpen: boolean;
  readonly activatePropertyDepartmentPopUp:boolean;
  readonly deActivatePropertyDepartmentPopUp:boolean;
  readonly editPropertyDepartmentPopUp:boolean;
  readonly propertyDepartmentItems: IPropertyDepartmentMasterValues;
  onHandleSearch(event:any):void;
  onHandlePropertyDepartmentEditClick(
    values: IPropertyDepartmentMasterValues
  ): void;
  onHandlePropertyDepartmentDeActivatePopUp(
    values: IPropertyDepartmentMasterValues
  ): void;
  onHandlePropertyDepartmentActivatePopUp(
    values: IPropertyDepartmentMasterValues
  ): void;
  onHandleChangeRowsPerPage(event:any):void;
  onHandlePageChange(event:any, page: number):void;
}

export interface IPropertDepartmentMasterProps {
  readonly propertyDepartmentMasterList: ReadonlyArray<
    IPropertyDepartmentMasterValues
  >;
 
}

export interface IAddPropertyDepartmentValues {
  readonly CategoryOwnershipId: number;
  readonly propertyDepartmentMasterList: ReadonlyArray<
    IPropertyDepartmentMasterValues
  >;
  readonly PropertyDepartmentName: string;
  readonly propertyDepartmentItems : IPropertyDepartmentMasterValues
  readonly categoryOwnerShipDropDownDataValues: ReadonlyArray<ICategoryOwnerShipDropDownDataValues>
  onHandleAddSave(values: IAddPropertyDepartmentValues): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandlePropertyDepartmentNameChange(event:any):void;
  handleCategoryOwnershipIdChange(event:any):void;
  handlePropertyDepartmentNameChange(event:any):void;
}

export interface ICategoryOwnerShipDropDownDataValues {
  readonly CategoryOwnershipName: string
  readonly  CreatedBy: number,   
  readonly CategoryOwnershipId: number,
  readonly IsActive: boolean,
}
export interface IEditPropertyDepartmentValues {
  readonly PropertyDepartmentName: string;
  readonly CategoryOwnershipId: number;
readonly PropertyDepartmentId: number
  readonly propertyDepartmentItems : IPropertyDepartmentMasterValues
  readonly categoryOwnerShipDropDownDataValues: ReadonlyArray<ICategoryOwnerShipDropDownDataValues>
  onHandleEditPropertyDepartmetNameChange(event:any):void;
  onHandleEditSave(values: IEditPropertyDepartmentValues): void;
  onHandleEditPopUpClose(): void;
  handleCategoryOwnershipIdChange(event:any):void;
  handlePropertyDepartmentNameChange(event:any):void;
}

export interface IActivatePropertyDepartmentProps{
  readonly PropertyDepartmentId: number
    onHandleActivateClick(event: any): void;
    onHandleActivePopUpClose(): void;
}

export interface IDeActivatePropertyDepartmentProps {
  readonly PropertyDepartmentId: number
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(id:number): void;
}



////////////////////



export const loader = document.getElementById("loading");
export interface IProTypeMasterValues {
  readonly CategoryOwnershipId: number;
  readonly CategoryOwnershipName: string;
  readonly PropertyTypeId: number;
  readonly PropertyTypeName: string;
  readonly CreatedBy: number;
  readonly IsActive: string;
  readonly ReturnCode: number;
  readonly CategoryOwnershipDesc: string;
}

export interface IProTypeMasterProps {
  readonly allocationTypeList: ReadonlyArray<IProTypeMasterValues>;
  readonly searchInputPro: string;
  readonly countPro: number;
  readonly openPro: boolean;
  readonly CategoryOwnershipDesc: string;
  readonly open2Pro: boolean;
  readonly CategoryOwnershipName: string;
  // readonly expandApplicationId: string;
  // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly editPopUpOpenPro: boolean;
  readonly addPopUpOpenPro: boolean;
  readonly activatePopUpOpenPro: boolean;

  readonly deActivatePopUpOpenPro: boolean;
  handleCategoryOwnershipIdChange(event:any):void;
  onHandleDeActivatePopUpClosePro(): void;
  onHandleDeActivatePopUpOpenPro(propTypeValues: any): void;
  onHandleDeActivateSavePro(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClickPro(propTypeValues: IProTypeMasterValues): void;
  onHandleEditActionClickPro(propTypeValues: IProTypeMasterValues): void;
  onHandleNameChangePro(event: any): void;
  onHandleEditSavePro(
    values: IEditProProps & IEditProValues
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  // HandleEditAllocationChange(event: any): void;
  onHandleDropDownChangePro(event: any): void;

  onHandleEditPopUpClosePro(): void;
  onHandleClosePro(): void;
  onHandleClose2Pro(): void;

  onHandleAddSavePro(values: IAddProValues & IAddProProps): void;
  onHandleAddPopUpPro(): void;
  onHandleAddPopUpClosePro(): void;
  onHandleSearchPro(event: any): void;
  onHandleActivatePopUpOpenPro(propTypeValues: any): void;
  onHandleActivePopUpClosePro(): void;
  onHandleActivateClickPro(event: any): void;
  onHandleActivatePopUpClosePro(): void;
}

export interface IEditProValues {
  readonly CategoryOwnershipId: number;
  readonly allocationName: string;
  readonly PropertyTypeId: number;
  readonly PropertyTypeName: string;
  readonly allocationNameValues: ReadonlyArray<IProTypeMasterValues>;
}

export interface IAddProValues {
  readonly CategoryOwnershipId: number;
  readonly PropertyTypeName: string;
  readonly newAllocationName: string;

  readonly allocationNameValues: ReadonlyArray<IProTypeMasterValues>;
  onHandleAddChangePro(event: any): void;
}

export interface IAddProProps {
  readonly allocationTypeList: ReadonlyArray<IProTypeMasterValues>;
  onHandleAddSavePro(values: IAddProValues & IAddProProps): void;
  onHandleAddPopUpPro(): void;
  onHandleAddPopUpClosePro(): void;
}

export interface IActivateProProps {
  readonly PropertyTypeId: number;
  onHandleActivateClickPro(event: any): void;
  onHandleActivatePopUpClosePro(): void;
}

export interface IAminitiesTypeStateValues {
  readonly CreatedBy: number;
  readonly CreatedOn: string;
  readonly AmenitiesId: number;
  readonly AmenitiesName: string;
  readonly IsActive: boolean;
  readonly ModifiedBy: number;
  readonly ModifiedOn: string;
  readonly ReturnCode: number;
}
export interface IAminitiesTypeMasterStateProps {
  readonly documentTypeMasterList: ReadonlyArray<IAminitiesTypeStateValues>;
  readonly searchInputAminity: string;
  readonly openAminity: boolean;
  readonly open2Aminity: boolean;
  readonly ClickOpen: boolean;
  readonly dropDownOpen: any;
  readonly dropDownOpen2: any;
  // readonly expandApplicationId: string;
  // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly editPopUpOpenAminity: boolean;
  readonly addPopUpOpenAminity: boolean;
  readonly activatePopUpOpenAminity: boolean;
  readonly deActivatePopUpOpenAminity: boolean;
  readonly aminityValues: IAminitiesTypeStateValues;
  onHandleDeActivatePopUpCloseAminity(): void;
  onHandleDeActivatePopUpOpenAminity(aminityValues: any): void;
  onHandleDeActivateSaveAminity(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClickAminity(aminityValues: IAminitiesTypeStateValues): void;
  onHandleEditActionClickAminity(): void;
  onHandleEditSaveAminity(
    values: IEditAminityProps & IEditAminitiesValues
  ): void;
  onHandleEditPopUpCloseAminity(): void;
  onHandleCloseAminity(): void;
  onHandleClose2Aminity(): void;
  onHandleAddSaveAminity(
    values: IAddAminitiesValues & IAddAminitiesProps
  ): void;
  onHandleAddPopUpAminity(): void;
  onHandleAddPopUpCloseAminity(): void;
  onHandleSearchAminity(event: any): void;
  onHandleActivatePopUpAminity(aminityValues: any): void;
  onHandleActivePopUpCloseAminity(): void;
  onHandleActivateClickAminity(event: any): void;
}
export interface IEditAminitiesValues {
  readonly AmenitiesId: number;
  readonly AmenitiesName: string;
  // onHandleEditNameChange(event: any): void;
}
export interface IAddAminitiesValues {
  readonly AmenitiesId: number;
  readonly newAminityName: string;
  onHandleAddChangeAminity(event: any): void;
}
export interface IAddAminitiesProps {
  readonly documentTypeMasterList: ReadonlyArray<IAminitiesTypeStateValues>;
  onHandleAddSaveAminity(
    values: IAddAminitiesValues & IAddAminitiesProps
  ): void;
  onHandleAddPopUpAminity(): void;
  onHandleAddPopUpCloseAminity(): void;
}
export interface IActivateAminitiesProps {
  readonly id: number;
  onHandleActivateClickAminity(event: any): void;
  onHandleActivePopUpCloseAminity(): void;
}
export interface ICategoryTypeStateValues {
  readonly CreatedBy: number;
  readonly CreatedOn: string;
  readonly CategoryOwnershipId: number;
  readonly CategoryOwnershipName: string;
  readonly IsActive: boolean;
  readonly ModifiedBy: number;
  readonly ModifiedOn: string;
  readonly ReturnCode: number;
}
export interface ICategoryTypeMasterStateProps {
  readonly countCategory: number;
  readonly pageCategory: number;
  readonly rowsPerPageCategory: number;
  readonly categoryTypeMasterList: ReadonlyArray<ICategoryTypeStateValues>;
  readonly searchCategoryInput: string;
  readonly openCategory: boolean;
  readonly open2Category: boolean;

 
  readonly editPopUpOpenCategory: boolean;
  readonly activatePopUpOpenCategory: boolean;
  readonly deActivatePopUpOpenCategory: boolean;
  readonly categoryValues: ICategoryTypeStateValues;
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onHandlePageChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    page: number
  ): void;
  // onHandleClick(event: any): void;
  onHandleActionClickCategory(categoryValues: ICategoryTypeStateValues): void;

  onHandleEditActionClickCategory(
    categoryValues: ICategoryTypeStateValues
  ): void;
  onHandleDeActivatePopUpOpencategory(
    categoryValues: ICategoryTypeStateValues
  ): void;
  onHandleActivatePopUpOpenCategory(categoryValues: ICategoryTypeStateValues):void;
  onHandleSearchCategory(event: any): void;
}
export interface IEditCategoryValues {
  readonly CategoryOwnershipId: number;
  readonly CategoryOwnershipName: string;
  // onHandleEditNameChange(event: any): void;
}
export interface IPropertyChangesValues{
  readonly FloorNo_str: string;
  readonly ClassificationOfBuilding_str: string;
  readonly NatureOfUsage_str: string;
  readonly Firmname: string;
  readonly Occupancy_str: string;
  readonly Occupancy: string;
  readonly Length: string;
  readonly Breadth: string;
  
}
export interface IPropChangeProps{
  readonly PropTable: boolean;
  getFloorDetailValues: ReadonlyArray<any>;
  readonly PropertyChangeList: ReadonlyArray<IPropertyChangesValues>;
  handlePropertyChangeClick(values:  IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps):void
}
export interface IAddCategoryValues {
  readonly CategoryOwnershipId: number;
  readonly newCategoryName: string;
  onHandleAddChangeCategory(event:any):void
  onHandleAddSaveCategory(event: any): void;
}
export interface IAddCategoryProps {
  readonly categoryTypeMasterList: ReadonlyArray<ICategoryTypeStateValues>;
  onHandleAddSaveCategory(values: IAddCategoryValues & IAddCategoryProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpCloseCategory(): void;
  onHandleAddPopUpOpenCategory():void
}
export interface IActivateCategoryProps {
  readonly CategoryOwnershipId: number;
  onHandleActivateClickCategory(event: any): void;
  onHandleActivatePopUpCloseCategory(): void;
}

//// Property Tax 
export interface IBudgetValues {
  readonly BudgetId: number;
  readonly BudgetYear: string;
}

export interface IPropertyTaxFormProps {
  readonly RequestId:string;
  readonly successPopUp: boolean;
  readonly WarningPopUp: boolean;
  readonly Comments: string;
  readonly UserId: number;
  readonly Description: string;
  readonly getTaxDetailsChange: boolean;
  readonly PropertyTypeId: number;
  readonly copiedValue: number;
  readonly percentageValue: number;
  readonly BudgetId: number;
  readonly FromDate: string;
  readonly ToDate: string;
  readonly selectDistrictValues: ReadonlyArray<IDistrictValues>;
  readonly selectPropertyTypeValues: ReadonlyArray<IPropertyValues>;
  readonly selectBudgetValues: ReadonlyArray<IBudgetValues>;
  readonly ptmsSelectDepartmentList:ReadonlyArray<ISelectDepartmentvalues>;
  readonly reviewOpen: boolean;
  readonly forwardOpen: boolean;
  readonly applicationSelectDepartmentName: string;
  readonly incresePercentageButton: boolean;
  handleIncreasePercentageChange(event:React.ChangeEvent<HTMLInputElement>):void;
  handlePropertyTaxCommentsChange(event:any,values:IPropertyTaxFormProps):void
  handlePropertyTaxSubmitSavePopUp(values:IPropertyTaxFormProps):void;
  handlePropertyTaxDraftSave(values:IPropertyTaxFormProps & IPropertyTaxTableStateProps):void;
  handlePropertyTaxSubmitSave(values:IPropertyTaxFormProps & IPropertyTaxTableStateProps):void;
  handlePropertyTaxApproveClick(values:IPropertyTaxFormProps & IPropertyTaxTableStateProps):void;
  handleBudgetIdChange(event:any,values:IPropertyTaxFormProps): void;
  handleSelectDepartmentChange(event:any):void;
  handlePropertyTaxSubmit(values: IPropertyTaxFormProps): void;
  handleDescriptionChange(event:React.ChangeEvent<HTMLSelectElement>):void;
  handleValueChange(event:any):void;
  handleCopyValuesClick(value: number):void
  handleIncreasePercentageClick(percentageValue: number, copyValue: number):void;
  onHandleClose():void;
  handlePropertyTypeIdChange(event:any):void;
}

export interface IPropertyTaxTableStateProps {
  readonly selected: ReadonlyArray<string>;
  readonly propertyTaxTableList: ReadonlyArray<IPropertyTaxTableValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly numSelected: number;
  readonly rowCount: number;
  onHandleSearch(event: any): void;
  handlePropertyTaxValueChange(id: number,event:any): void;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handleSelectAllClick(evt: React.ChangeEvent<HTMLInputElement>): void;
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onHandlePageChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    page: number
  ): void;
}

export interface IPropertyTaxTableValues {
  readonly id: number;
  readonly PropertyTypeId: number;
  readonly PropertyType: string;
  readonly BuildingClassificationId: number;
  readonly BuildingClassificationType: string;
  readonly NatureUsageId: number;
  readonly NatureUsageType: string;
  readonly sqmetrs: number;
  readonly RequestId: number;
  readonly Value: number;
  readonly canEdit: number;
  readonly PropertyValue :number;
  readonly isActive: boolean
  readonly CategoryOwnershipType: string;
  readonly CategoryOwnershipTypeId: number;
  readonly FinancialYear: number;
  readonly PropertyTaxConfigId: number;
  readonly BudgetYear: number
  readonly isEdit: number;
}

export interface IPropertyTaxConfigurationProps {
  readonly RequestId:string;
  readonly successPopUp: boolean;
  readonly WarningPopUp: boolean;
  readonly Comments: string; 
  readonly UserId: number;
  readonly ptmsSelectDepartmentList:ReadonlyArray<ISelectDepartmentvalues>;
  readonly getTaxDetailsChange: boolean;
  readonly copiedValue: number;
  readonly percentageValue: number;
  readonly propertyTaxStep: number;
  readonly Description: string;
  readonly BudgetId: number;
  readonly PropertyTypeId: number;
  readonly FromDate: string;
  readonly ToDate: string;
  readonly selectBudgetValues: ReadonlyArray<IBudgetValues>;
  readonly selectDistrictValues: ReadonlyArray<IDistrictValues>;
  readonly selectPropertyTypeValues: ReadonlyArray<IPropertyValues>;
  readonly selected: ReadonlyArray<string>;
  readonly propertyTaxTableList: ReadonlyArray<IPropertyTaxTableValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly numSelected: number;
  readonly rowCount: number;
  readonly reviewOpen: boolean;
  readonly forwardOpen: boolean;
  readonly applicationSelectDepartmentName: string;
  readonly incresePercentageButton: boolean;
  handleIncreasePercentageChange(event:any):void;
  handlePropertyTaxCommentsChange(event:any,values: IPropertyTaxFormProps):void;
  handlePropertyTaxSubmitSavePopUp(values:IPropertyTaxFormProps):void;
  onHandleClose():void;
  onHandleSearch(event: any): void;
  handlePropertyTaxValueChange(id: number,event:any): void;
  handleSelectDepartmentChange(event:any):void;
  handlePropertyTaxDraftSave(values:IPropertyTaxFormProps & IPropertyTaxTableStateProps):void;
  handlePropertyTaxSubmitSave(values:IPropertyTaxFormProps & IPropertyTaxTableStateProps):void;
  handlePropertyTaxApproveClick(values:IPropertyTaxFormProps & IPropertyTaxTableStateProps):void;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handleSelectAllClick(evt: React.ChangeEvent<HTMLInputElement>): void;
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onHandlePageChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    page: number
  ): void;
  onHandlePropertyTaxStepChange(event: any, value: number): void;
  handleBudgetIdChange(event:any,values:IPropertyTaxFormProps):void;
  handlePropertyTaxSubmit(values:IPropertyTaxFormProps ): void;
  handleDescriptionChange(event:any):void;
  handleValueChange(event:React.ChangeEvent<HTMLInputElement>):void;
  handlePropertyTypeIdChange(event:any):void;
  handleCopyValuesClick(value: number):void
  handleIncreasePercentageClick(percentageValue: number, copyValue: number):void;
}

export interface IPropertySearchResultTaxValues {
 readonly AssessmentID:number,
  // tslint:disable-next-line:object-literal-sort-keys
  readonly  Applicantname:string,
  readonly RequestId:string,
   readonly OwnerName:string,
   readonly Status:string,
   readonly PropertyType:string,
   readonly TaxAmount: number,
   readonly Address:string,
   readonly EmailID:string,
   readonly Mobile:string
   readonly Year: number;
   readonly Percent: number;
}


class HomePage extends React.Component<any,
  ILogOutvalues &
    INotificationValues &
    IMilestoneStateProps &
    IProfileProps &
    IPrivilegesStateValues &IHomePage& IPropertDepartmentMasterProps &
    any
> {
  public readonly state:ILogOutvalues &
  INotificationValues & IPropertDepartmentMasterProps &
  IMilestoneStateProps &
  IProfileProps & ILogOutvalues & any & 
  IPrivilegesStateValues & IProfileProps &
  IPrivilegesStateValues & IHomePage & ICategoryTypeMasterStateProps & IEditCategoryValues &
  IAminitiesTypeMasterStateProps&
  IEditAminitiesValues &IProTypeMasterProps & ICategoryTypeMasterStateProps & IEditCategoryValues &IHomePage & ITreeFormValues & IRoleTypeMasterStateProps & IChangeAvatarValues & ISearchArrayValues & IProposalTabStateValues & ILandallocationFormStatevalues & IUploadDocumentValues
  = { 
    EnumMasterID:0,
    PlotNo: '',
    Street: '',
    Village: '',
    
    copiedValue: 0,
    propertyChangeDraftPopUp: false,
    roofId:0,
    wallId: 0,
    woodId:0,

    StatusId: 0,
    propValue: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    AssessmentPdfPath:'',
    assessmentReviewPopUp:false,
    finalPath : '',
    incresePercentageButton: true,
    viewBillPopUpOpen: false,
    // tslint:disable-next-line:object-literal-sort-keys
    emailId : '',
    houseNoBuildingName: '',
    isPayerOwner : false,
    mobileNumber: '',
    payerName : '',
    pdfPath:'',
    // tslint:disable-next-line:object-literal-sort-keys
    bookReceiptNumber: 0,
    payableAmount: 0,
    selectUserName: '',
    selectUserNameValues: [],
    // tslint:disable-next-line:object-literal-sort-keys
    propertySearchResultTaxDetailsList: [
      {
        AssessmentID:37,
        // tslint:disable-next-line:object-literal-sort-keys
        Applicantname:"Applicant Name",
    RequestId:"9tT34D",
    OwnerName:"sdf",
    Status:"Completed",
    PropertyType:"Residential",
    TaxAmount: 10125.000000,
    Address:null,
    EmailID:"432",
    Mobile:"432",
    Year:2019,
    Percent: 1
  }
],
// tslint:disable-next-line:object-literal-sort-keys
propertySearchResultTaxDetailsCount: 1,
        // tslint:disable-next-line:object-literal-sort-keys
        draftAssessmentPopUpValues: {},
    draftAssessmentProceedValues:{},
    draftAssessmentValues: {},
    submitDraftAssessmentList:[],
    uploadedImagesCount: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    captureFingerPopUp: false,
    reasonForCreation: 1,
    // tslint:disable-next-line:object-literal-sort-keys
    DistrictNumber:0,
    Description: '',
    getFloorDetailValues: [],
    pageBuilding:0,
    pageNatureUsage: 0,
    pagePropertyDepartment: 0,
    pagePropertyType: 0,
    propertyDetailsCount: 0,
    propertyDetailsTableList:[],
    propertyId:0,
    propertyValues:{},
    selectedValue:'',
    AssessmentID:0,
      // tslint:disable-next-line:object-literal-sort-keys
    LAS:false,
    FromDate: "",
    ToDate: "",
    selectBudgetValues: [],
    percentageValue: 0,
    previousValue: 0,

    OccupancyCertificateDate: '',
    ThemeCityName: '',
    // tslint:disable-next-line:object-literal-sort-keys
    Masters:false,
    PTMS:false,
    // tslint:disable-next-line:object-literal-sort-keys
   MunciId: 0,
    MandalId: 0,
   TownId:0,
    UserManagement:false,
      menu3: [],
      selectDistrictValues: [],
      selectMunciValues: [],
      selectMandalValues: [],
      selectTownValues:[],
    // tslint:disable-next-line:object-literal-sort-keys
    menuExpanded:'',
    menuExpanded2:"",
    menuExpanded3:"",
    // tslint:disable-next-line:object-literal-sort-keys
    menuExp3:"",
    // tslint:disable-next-line:object-literal-sort-keys
    NatureUsageId: 0,
    NatureUsageList: [],
    NatureUsageName: "",
    addNatureUsagePopUpOpen: false,
    editNatureUsagePopUp: false,
    natureUsageCount: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    deActivateNatureUsagePopUp: false,
    activateNatureUsagePopUp: false,
    PropTable:false,
      East: "",
      West: "",
      South: "",
       SurveyNumber: "",
        PattaNumber: "",
      VacantLandArea: "",
      CurrentMarketValue: "",
       RegisteredDocumentValue: "",
        EffectiveDate: "",
       LayoutPermitNumber: "",
       LayoutPermitDate: "",
    BuildingClassificationName:"",
    CategoryOwnershipId: 0,
    PropertyTypeId: 0,
    propertyTypeDropDownValues:[],
    // tslint:disable-next-line:object-literal-sort-keys
    activateBuildingClassificationPopUp: false,
    addBuildingClassificationPopUpOpen: false,
    buildingClassificationCount: 0,
    BuildingClassificationId: 0,
    buildingClassificationItems:{},
    buildingClassificationList: [],
    deActivateBuildingClassificationPopUp:false,
    editBuildingClassificationPopUp:false,
    // tslint:disable-next-line:object-literal-sort-keys
    OutOfAGC: false,
    PropertyDepartmentId:0,
    WithInAGC: true,     
    addPropertyDepartmentPopUpOpen: false,
      activatePopUpOpenPro: false,
      // tslint:disable-next-line:object-literal-sort-keys
      CategoryOwnershipDesc: "",
      addPopUpOpenPro: false,
      allocationName: "",
      allocationNameValues: [],
      distName:"",
      editSuccessPopUpPro: false,
      // tslint:disable-next-line:object-literal-sort-keys
      PropertyTypeName: "",
      countPro: 0,
      allocationTypeList: [],
      deActivatePopUpOpenPro: false,
      dialogPro: false,
      editPopUpOpenPro: false,
      openPro: false,
      open2Pro: false,
      id: 0,
      dialog1Pro: false,
      newAllocationName: "",
      pagePro: 0,
      rowsPerPagePro: 5,
      propTypeValues: {
        CategoryOwnershipId: 0,
        CategoryOwnershipName: "",
        PropertyTypeId: 0,
        PropertyTypeName: "",
        // tslint:disable-next-line:object-literal-sort-keys
        CategoryOwnershipDesc: "",
        // tslint:disable-next-line:object-literal-sort-keys
        CreatedBy: 0,
        IsActive: "",
        ReturnCode: 0
      },
      searchInputPro: "",
      MaxPropertyTypeId: 0,
      AmenitiesName: "",
      AminityTypeMasterList: [],
      selectPropertyValues: [],
      selectDepartmentValues:[],
    activatePopUpOpenAminity: false,
    addPopUpOpenAminity: false,
    deActivatePopUpOpenAminity: false,
    editSuccessPopUpAminity: false,
    openAminity: false,
    // tslint:disable-next-line:object-literal-sort-keys
    open2Aminity: false,
    // tslint:disable-next-line:object-literal-sort-keys
    editPopUpOpenAminity: false,
    // tslint:disable-next-line:object-literal-sort-keys
    aminityValues1:[],
    aminityValues: {},
    AmenitiesId: 0,
    newAminityName: "",
    pageAminity: 0,
    countAminity: 0,
    dialog1Aminity: false,
    rowsPerPageAminity: 5,
    searchInputAminity: "",
    DocumentPopUpAminity: false,
    dialogAminity: false,
    
    // tslint:disable-next-line:object-literal-sort-keys
    activatePropertyDepartmentPopUp:false,
     deActivatePropertyDepartmentPopUp:false,
     editPropertyDepartmentPopUp:false,
    propertyDepartmentItems: {},
    propertySearchPayTaxTabValue: 0,
    propertyDepartmentMasterList: [],
     
      // tslint:disable-next-line:object-literal-sort-keys
      AmountPaid:0,
      fileSize: 0,
      Photo1:"",
      // tslint:disable-next-line:object-literal-sort-keys
      AmountToBePaid:0,
      TotalLandCost:0,
     
      disableChangeAvatarButton: false,
      disableUploadButton: true,
      disabledeleteButton:true,
      forwardOpen: false,
      
      
      registerOrNot: "0",
      // tslint:disable-next-line:object-literal-sort-keys
      DocumentTypeMasterList: [],
      RoleName: "",
      activatePopUpOpenRole: false,
      addPopUpOpenRole: false,
      countRole: 0,
      deActivatePopUpOpen: false,
      dialog: false,
      dialog1: false,
      editPopUpOpen: false,
      editSuccessPopUp: false,
      newRoleName: "",
      openRole: false,
      openRole2: false,
      pageRole: 0,
      roleValues: {},
      rowsPerPageRole: 5,
      searchInputRole: "",

      agcPopUp: false,
    file: File,
    // tslint:disable-next-line:object-literal-sort-keys
    SuccessMileStonePopUp:false,
    // tslint:disable-next-line:object-literal-sort-keys
    DisplayName: "",
    Photo: "",
    Uploadimages: [],
    myProfileValues: {
      ActionRequired: 0,
      CurrentPassword: "",
      Department: 0,
      DepartmentName: "",
      DisplayName: "",
      Email: "",
      EncryptedPassword: "",
      Finger: 0,
      FirstName: "",
      Guid: null,
      MiddleName: "",
      NewPassword: "",
      PhoneNumber: "",
      Photo: "",
      ReEnterNewPassword: "",
      ReturnCode: 0,
      RoleId: 1,
      RoleName: "",
      SurName: "",
      UserId: 0,

      UserName: "",
    },
    propertyTaxTableList: [],
    propertyTaxCount: 0,
    buttonDisable1: false,
    buttonDisable2: false,
    buttonDisable3: false,
    buttonDisable4: false,


    UploadimagesCount: 0,
    selectMapValuesPopUp: false,
    getTaxDetailsChange: false,
    // tslint:disable-next-line:object-literal-sort-keys
    change1: 0,
    changeValues:{},
    // tslint:disable-next-line:object-literal-sort-keys
    FirstName: "",
    changeAvatarValues: [],
    MiddleName: "",
    SurName: "",
    dialogs: false,
    Email: "",
    roleTypeValues: [],
    departmentTypeValues: [],
    fingerTypeValues: [],
    changeCaptureFingerValues: [],
    PhoneNumber: "",
    tabsValue: 0,
    RoleId: 0,
    dialogOpen: false,
    dialogOpen3: false,
    dialogOpened: false,
    Department: 0,
    CurrentPassword: "",
    NewPassword: "",
    ReEnterNewPassword: "",
    FingerId: 0,
    image: "",
    myProfileChangePasswordValues: [],
    PopUpOpen2: false,
    PopUpOpen3: false,

    AllocationId: -1,
    AllocationName: "",
    Id: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    ApplicationTypeName: "",
    change: false,
    selectDocumentMappingValues: [],
    selectProcessValues: [],
    FileType: null,
    FileTypeId: 0,
    PhotoId: 0,
    ProcessId: 0,
    PhotoIdTypeName: "",
    document: [],
    document2: [],
    documentList: [],
    documentList2: [],
    OwnerPhoneNumber: '',
    documentList2Length: 0,
    PopUpOpen1: false,
    successPopUp: false,
    TownShip: "",
    draftApplicationId: "",
    milestonePopUp: false,
    // tslint:disable-next-line:object-literal-sort-keys
    mapDataValues: false,
    // tslint:disable-next-line:object-literal-sort-keys
    Block: "",
    Colony: "",
    Plot: "",
    ParcelId: "",
    GlobalId: "",
    District: "",
    TempGlobalId: "",
    Mandal: "",
    Boundaries: "",
    GeometryDataFromMap: "",
    Sector: "",
    CompleteDetails: "",
    GeometricString: "",
    SurveyNumberByPlanning: "",
    obj1: {},
    townshipWithId: false,
    open1: false,
    // tslint:disable-next-line:object-literal-sort-keys
    mapPopUpOpen: false,

    emptyRows: 0,
    notifications: [],
    searchInput: "",
    // tslint:disable-next-line:object-literal-sort-keys

    open: false,
    // tslint:disable-next-line:object-literal-sort-keys
    draftApplicationList: [],
    page: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    rowsPerPage: 5,
    // tslint:disable-next-line:object-literal-sort-keys
    expandApplicationId: "",
    AllocateTo: "",
    dialogExpandOpen: false,
    expandApplicationList: [],
    draftApplicationValues: {
      ApplicationId: "",
      OrganiztionName: "",
      RegistrationNumber: "",
      // tslint:disable-next-line:object-literal-sort-keys
      AllocateTo: "",
      AllocationName: "",
      AgreementTypeName: "",
      TownshipName: "",
      ProjectName: "",
      RequiredLand: "",
      MilestoneRuleId: 0,
      FirstName: "",
      Email: "",
      PhoneNumber: "",
      MilestoneDate: "",
      LastUpdatedDate: "",
      MileStoneLandSize: 0,
      Status: "",
      LandAllocationType: "",
      LandAllocationTypeId: 0,
      ApplicationCurrentStatus: "",
      LandAllocated: "",
      LandAreaAllottedByEstates: 0,
      ParcelNumber: "",
      SurveyNumber: "",
      IsVerified: 0,
      NextActivivtyInfo: "",
      ApplicationStatusId: 0,
      RequestLand: 0,
      LandonHold: 0,
      CurrentStatus: "",
      AllotedLand: 0,
      AllocationProcess: "",
      Actions: "",
      SubmittedDate: "",
    },
    basedOnRollId:[],
    TownshipId: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    LandAllocatedToId: 1,
    landAllocatedTo: "0",
    townshipValues: [],
    LandAllocatedTo: "1",
    uploadPopUpOpen: false,
    // tslint:disable-next-line:object-literal-sort-keys
    allocationTypeId: -1,

   // authorizedPersonName: "",

    // tslint:disable-next-line:object-literal-sort-keys
      OrganizationName: "",
      SubmittedDate:"",
    AuthorisedPersonEmailAddress: "",
    // tslint:disable-next-line:object-literal-sort-keys
    AgreementTypeId: 0,
    AgreementName: "",
    enterApplicationId: "0",
    applicationTableValues: [],
    TypeOfAllocationName: "",
    RelationTypeName: "",
    agreementTypeValues: [],
    // AllocationId: 0,
    AllocationSubTypeId: 0,
    // AllocationName: "",
    selectThemeCityTypeValues: [],
    
    selectLandAllocationTypeValues: [],
      selectAllocationTypeValues: [],
      selectCategoryOwnershipValues: [],
      selectApartmentValues:[],
    image1: "",
    image2: "",
    image3: "",
    image5: "",
    image9: "",
    dropdownOpen: false,
    submitPopUp: false,
    OrgPhoneNumber: undefined,
    OrgEmailAddress: "",
    HouseNoBuildingName: "",
    StreetNameLocality: "",
    GSTNumber: "",
    // Country: "",
    // State: "",
    City: "",
    ZipCode: "",
    RegistrationNumber: "",
    selectCountryValues: [],
    selectStateValues: [],
    CountryId: undefined,
    CountryName: "",
    check1: false,
    StateId: undefined,
    StateName: "",
    WitnessName: "",
    RelationName: "",
    DateOfBirth: "",
    LandAllocatedName: "",
    activeStep: 0,
    draftActiveStep: 0
    ,
    // PhotoIdTypeName: "",
    check: false,
    MobileNumber: "",
      North: "",
      TotalTax:0,
      WardNo: "",
      Corporation: "",
      ExtentOfSite:"",
      ZoneNo:"",
    authorisedPersonValues: [
      {
        AuthorisedPersonEmailAddress: "",
        // tslint:disable-next-line:object-literal-sort-keys
        AuthDateOfBirth: "",
        FirstName: "",
        HouseNo: "",
        LastName: "",
        MobileNumber: "",
        PhotoIdNumber: "",
        PhotoIdType: 0,
        PhotoIdTypeName: "",
        RelationName: "",
        AuthRelationTypeId: 0,
        RelationTypeName: "",
        StreetName: "",
        authImage: ""
      }
    ],
    landAllocationTabValues: [],
    photoIdTypeArray: [],
    // tslint:disable-next-line:object-literal-sort-keys
    
      RelationTypeArray: [],
      Gender: [],
      GuardianReg:[],
    photoIdType: [],

    AvailableLandArea: 0,
    RequiredLandSize: 0,
    LeaseAmount: 0,
    LeaseStartDate: "",
    LeaseEndDate: "",
    GoNumber: "",
    GoDate: "",
    ProjectName: "",
    ProjectPurpose: "",
    ProjectDescription: "",
    RelationTypeId: 0,
    OwnerName : "",

      AuthRelationTypeId: 0,
      OwnershipArray: [{
        AddClickCount: 0,
        GuardianRelation 	: [],
        OwnerName : "",
        id: 0,
        selectGenderValues: [],
        selectGuardianValues:[],
        // tslint:disable-next-line:object-literal-sort-keys
        Guardian: "",
        MobileNo: "",
         EmailAddress	: "",
         Gender: 0,
         GuardianReg:0,
      }],
      UnstructeredLand:0,
      RequestId: '',
      FloorArray: [{
       id: 0,
   // tslint:disable-next-line:object-literal-sort-keys
   AddClickCount: 0,
   FirmName : "",
   OccupantName: "",
  selectClassificationValues: [],
  selectNatUsageValues: [],
  selectFloorValues: [],
  selectOccupancyValues:[],
  ConstructionDate: "",     
   EffectiveFromDate	: "",
   UnstructeredLand:0,
   Length: "",
        Breadth: "",
        taxAmount:0,
   PlinthArea: "",
   BuildingPermissionNo: "",
   BuildingPermissionDate: "",
   PlinthAreaInBuildingPlan: "",
    FloorNumber: 0,
    BuildingClassification: 0,
    NatureOfUsage: 0,
    Occupancy:0
      }],
    WitnessDetailsFormArray: [
      {
        AddClickCount: 0,
        WitnessName: "",
        id: 0,
        // tslint:disable-next-line:object-literal-sort-keys
        RelationName: "",
        RelationType: 0,
        RelationDateOfBirth: "",
        RelationTypeArray: []
      }
    ],
    uploadPopUp: false,
    propertyTaxStep: 0,
    witnessArray: [],
    AddClickCount: 0,
    typesOfAllocationValues: [],
    LandAllocationId: undefined,
    LandAllocationTypeName: "",
    unitValues: [],
    UnitId: 0,
    initialUnitId: undefined,

    unitName: "",
    leaseTenure: [],
    LeaseTenure: 0,
    Number: 0,
    RuleId: 0,
    RuleName: "",
    AddMilestoneClickCount: 0,
    LandRelease: "",
    mileStoneValues: [],
    ProjectRuleTypes: [],
      ProjectTypeId: 0,
      AddGoValueClickCount:0,
    MileStoneArray: [
      {
        AddMilestoneClickCount: 0,
        LandRelease: "",
        RuleName: "",
        // tslint:disable-next-line:object-literal-sort-keys
        RuleId: 0,
        DateOfCompletion: "",
        mileStoneValues: [],
        id: 0,
        ProjectRuleTypes: [],
        ProjectTypeId: 0,
        ruleTypeValues: [],
        sourceTypeValues: [],
        RuleSourceTypeId: 0,
        ConditionTypeId: 0,
        ConditionTypeValues: [],
        projectValues: [],
         MilestoneId:0,
         MilestoneYear:0,
        ApplicationId:'',
        MilestoneRuleId:0,
        ReleaseLandArea:"",
        AvailbleLandAreaUnits:0,
        UnitFormat:"",
        EffectiveDate:"",
        ProjectRuleIds:"",
        MilestoneRules:"",
        LandAreaAllotedByEstates:0,
       ParcelId:"",
       SurveyNumber:"",
        InitialAllocationLandSize:0
      }
      ],
      ProjectDetailsArray: [
        {
          AddGoValueClickCount:0,
          GoNumber: "",
          id:0,
          // tslint:disable-next-line:object-literal-sort-keys
          GoDate: "",
        }
      ],
    projectValues: [],
    propertyDetailsTableOpen: false,
    newMileStoneValues: [],
    ruleTypeValues: [],
    PopUpOpen: false,
    sourceTypeValues: [],
    UserId: 0,
    selectDepartmentList: [],
    RuleSourceTypeId: 0,
    ConditionTypeValues: [],
    ConditionTypeId: 0,
    minValue: 0,
    maxValue: 0,
    value: 0,
    TypeOfAllocationId: undefined,
    projectTypes: [],

    AgreementPurpose: "",
    AggrementDescription: "",
    ProjectStartDate: "",
    ProjectEndDate: "",
    TotalBudget: 0,
    ProjectFundedBy: "",
    ProjectCoordinator: "",
    ProjectRules: "",
    RequiredLandSizeBeforeAllocation: 0,
    RequiredLandSizeType: "",
    LandSize: 0,
    LandSizeType: 0,
    RenewalForEvery: 0,
    RenewalAmountPercentage: 0,
    TotalLeaseAmount: 0,
    PricePerUnit: 0,
    TotalAmount: 0,
    InitialAllocationLandSize: 0,
    InitialAllocationLandSizeType: 0,
    InitialAllocation: 0,
    requiredLandUnitId: undefined,
    projectRules: 0,
    DateOfCompletion: "",
    LandAllocationAllValues: [],
    ruleName: "",
    ruleName1: "",
    ruleName2: "",
    SuccesPopUpOpen: false,
    WarningPopUp: false,
    TownshipName: "",
    selectDepartmentName: "",
    draftWithId: false,
    deletePopUp: false,
    uploadSuccessPopUp: false,
    imageChosenCount: 0,
    RelationTypeAndName: '',

    ProposalFormApplicationIdValues: [
      {
        ProcessComments: [],
        // tslint:disable-next-line:object-literal-sort-keys
        CompleteDetails: "",
        GlobalId: "",
        GeometricString: "",
        TempGlobalId: "",
        GeometryDataFromMap: "",
        AllocationTypeId: 0,
        ApplicationId: "",
        AllocationTo: "",
        AllocationSubTypeId: 0,
        AllocationTypeName: "",
        AgreementTypeId: 0,
        AgreementTypeName: "",
        OrganiztionName: "",
        OrgRegistrationNumber: "",
        OrgTinNumber: "",
        OrgGST: "",
        OrgPhoneNumber: '',
        WebsiteURL: "",
        OrgEmailid: "",
        OrgAddress1: "",
        OrgAddress2: "",
        OrgCountryId: 0,
        OrgCountryName: "",
        OrgStateId: 0,
        OrgStateName: "",
        OrgCityName: "",
        OrgZipCode: "",
        AuthPersonName1: "",
        AuthPersonName2: "",

        AuthEmailId: "",
        AuthPhoneNumber: "",
        AuthAddress1: "",
        AuthAddress2: "",
        AuthPhotoIdType: "",
        AuthDateOfBirth:"", 
        AuthPhotoId:0,
        AuthPhotoIdNumber: "",
        AuthPhotoIdPath: "",
        LandAllocationTypeId: 0,
        LandAllocationType: "",
        AvailableLandArea: 0,
        UnitId: 0,
        RequiredLandArea: 0,
        AvailbleLandAreaUnits: 1,
        UnitFormatName: "",
        TenurePeriodId: 0,
        TenurePeriod: "",
        LeaseAmountperAcre: 0,
        LeaseAmountperAnnum: 0,
        LeaseStartDate: "",
        LeaseEndDate: "",
        ProjectTitle: "",
        ProjPurpose: "",
        ProjStartDate: "",
        ProjEndDate: "",
        ProjBudget: 0,
        ProjDescription: "",
        TownshipId: 0,
        TownshipName: "",
        PhotoIdType: "",
        FirstName: "",
        LastName: "",
        DocumentsVerifiedList: [],

        ProjectRules: "",
        WorkflowComments: "",
        ProcessId: 0,
        CurrentActivityId: 0,
        CurrentActivityOrderId: 0,
        LandAreaAllotedByEstates: 0,
        ParcelId: "",
        SurveyNumber: "",
        GOMnumber: "",
        GOMdate: "",
        LOIdate: "",
        DistrictId: 0,
        MandalId: 0,
        VillageId: 0,
        District: "",
        Mandal: "",
        Village: "",
        Boundaries: "",
        SurveyNumberByPlanning: "",
        PricePerUnit: 0,
        TotalAmount: 0,
        InitialAllocation: 0,
        InitialAllocationLandSize: 0,
        InitialAllocationLandSizeType: 0,
        TotalAmountInRupees: "",
        LeaseAmountperAnnumInRupees: "",
        RequiredLandAreaBeforeAllocation: 0,
        LandAreaAllotedByEstatesInSqMeters: 0,
        IsRequestFromMap: false,
        RelationType: 0,
        RelationName: "",
        DateOfBirth: "",
        AddRuleThemeCityType: 0,
        ProjectRuleType: 0,
        RelationTypeAndName: "",
        Bhudhaar: "",
        WitnessName: "",
        OrgPAN: "",
        AgreementName: "",
        AgreementPurpose: "",
        ProjectFundedBy: "",
        ProjectCoOrinator: "",
        AgreementDescription: "",
        LeaseTenure: 0,
        RenewalForEvery: 0,
        RenewalLoanAmount: 0,
        ApplicationSubmittedDate: "",
        StrDateOfBirth: "",
        RelativeAge: 0,
        TypeOfAllocation: 0,
        Block: "",
        plot: "",
        TownShip: "",
        Sector: "",
        Colony: "",
        Plot: "",
        name:"",
        WitnessDetailsFormArray: [
          {
            AddClickCount: 0,
            WitnessName: "",
            id: 0,
            // tslint:disable-next-line:object-literal-sort-keys
            RelationName: "",
            RelationType: 0,
            RelationDateOfBirth: "",
            RelationTypeArray: []
          }
        ]
      }
    ],
    images: "",
    count: 0,
    anchorEl: null,
    userDetails: {
      UserId: 0
    },
    landAllocationPanel: false,
    mastersPanel: false,
    misrepotsPanel: false,
    userManagementPanel: false,
    // tslint:disable-next-line:object-literal-sort-keys
    dialogOpens: false,
    workFlowConfigurationPanel: false,
    basedOnRoleId:0,
    // tslint:disable-next-line:object-literal-sort-keys
    roleId: 0,
    roleName: "",
    changeCheckedValues: [],
    selectRoleValues: [],
    selected: [],
    menuItems: [],
    userItems:[],
    // tslint:disable-next-line:object-literal-sort-keys
    privilegesValues: [
      {
        text: "Land - Allocation",
        // tslint:disable-next-line:object-literal-sort-keys
        id: 9,
        state: {
          opened: true,
          selected: false
        },
        children: []
      },
      {
        text: "Masters",
        // tslint:disable-next-line:object-literal-sort-keys
        id: 1,
        state: {
          opened: true,
          selected: false
        },
        children: []
      },
      {
        text: "MIS-Reports",
        // tslint:disable-next-line:object-literal-sort-keys

        id: 26,
        state: {
          opened: true,
          selected: false
        },
        // tslint:disable-next-line:object-literal-sort-keys
        children: [
          
        ]
      },
      {
        text: "User - Management",
        // tslint:disable-next-line:object-literal-sort-keys

        id: 3,
        state: {
          opened: true,
          selected: false
        },
        // tslint:disable-next-line:object-literal-sort-keys

        children: [
         
        ]
      },
      {
        text: "Work Flow - Configuration",
        // tslint:disable-next-line:object-literal-sort-keys

        id: 21,
        state: {
          opened: true,
          selected: false
        },
        // tslint:disable-next-line:object-literal-sort-keys

        children: []
      }
      ],
      PropertyChangeList:[],
    ApplicationId: "",
    isDocumentVerified: false,
    ApplicationtabsValue: 0,
    targetValue: "",
    InitialAllocationSizeInAcres:0,
    // tslint:disable-next-line:object-literal-sort-keys
    applicationimage: "images/aadhar.jpg",
    applicationimage2: "",
    searchDataId: "",
    parcelvalues: [],
    approveArray: [],
    reviewArray: [],
    noteFiles: [],
    applicationProjectRules: [],
    approvalFiles: [],
    searchArray: [],
    ApproveOpen: false,
    expanded: null,
    panel1: false,
    panel2: false,
    panel3: false,
    panel4: false,
    panel5: false,
    panel6: false,
    mapOpen: false,
    mapValues: [],
    reviewOpen: false,
    reviewSuccessOpen: false,
    Comments: "",
    htmlContent: "",
    selectDepartmentId: 0,
    ProcessComments: [],
    applicationSelectDepartmentName: "",
    applicationimages: "",
    isRuleSatisfied: false,
    ruleImage: "",
    AllocatedTo: 0,
    nextUserId: 0,
    ProjectTypeValues:[],
    ProjectType:[],
    ProjectTypeIds:[]
      ,
      aminityTypes:[],
   categoryOwnerShipDropDownDataValues:[],
    CategoryOwnershipName: "",
    CategoryTypeMasterList: [],
    activatePopUpOpenCategory: false,
    addPopUpOpenCategory: false,
    deActivatePopUpOpenCategory: false,
    editSuccessPopUpCategory: false,
    open2Category: false,
    openCategory: false,
    // tslint:disable-next-line:object-literal-sort-keys
    editPopUpOpenCategory: false,
    // tslint:disable-next-line:object-literal-sort-keys
    categoryValues: {},
    newCategoryName: "",
    pageCategory: 0,
    countCategory: 0,
    dialog1Category: false,
    rowsPerPageCategory: 5,
    searchCategoryInput: "",
    CategoryPopUp: false,
    dialogCategory: false,
    selectDepartmentForwardList:[],
    NewPropertyDocumentTypeValues: [],
    NewPropertyDocumentTypeId: 0,
    PropertyAssessmentDocumentTypeId: 0,
    paymentMode:'0',
    PropertyAssessmentDocumentTypeValues:[],
     CertificateNo: '',
      MROProceedingNumber: '',
      CertificateDate: '',
     RegisteredDocumentNumber: '',
     RegisteredDocumentDate: '',
     DeedNumber: '',
     DeedDate: '',
     DecreeNumber: '',
     DecreeDate:'',
     CourtName:'',
     selectFile:'',
     propertyDepartmentcount:0,
     UploadPopUp:false,
     selectValuePopUp: false,
     TotalTaxAmount: 0,
     draftAssessmentCount: 0,
     propertySearchPayBillValues: [],
     propertySearchResultViewPopUpValues:{},

     dashboardApprovalData: [],
         dashboardData: [],
         dashboardLinkData: [],
         dashboardPieChartData: [],
         // tslint:disable-next-line:object-literal-sort-keys
     
         DistrictName: "",
         MandalName: "",
         //   readonly MiddleName: string;
         VillageName: "",
         // tslint:disable-next-line:object-literal-sort-keys
         PlotCode: 0,
         AvailableLandSize: 0,
         TotalLandSize: 0,
         changeViewValues: [],
         changeAllotedValues: {
           AllocateTo: "",
           AllocationName: "",
           AllotedLand: 0,
           ApplicationCurrentStatus: "",
           ApplicationId: "",
           LandonHold: "",
           OrganiztionName: "",
           ProjectName: "",
           //   readonly MiddleName: string;
           RequiredLand: "",
           Status: ""
         },
         selectedViewList: [],
         selectedAllotedList: [],
         // tslint:disable-next-line:object-literal-sort-keys
         emptyRows2: 0,
         // tslint:disable-next-line:object-literal-sort-keys
     
         rowCount: 0,
         numSelected: 0,
         changePasswordValues: [],
         TotalPieChartCount: 0,
         dashboardPropertyChangePendingItems: [],
         dashboardPropertyTaxPendingItems: [],
         DashboardPendingItems: [],

         ptmsSelectDepartmentList:[]
  };
 
  constructor(
    props: ILogOutvalues &
      INotificationValues &
      IMilestoneStateProps &
      IProfileProps &
      IRelationTypeProps &
      IPhotoIdTypeProps &
      IProposalTabStateValues &
      ILandAllocationValues &
      ICountryValues &
      IStateValues &
      IAuthorisedProps &
      IRelationTypeProps &
      ICityValues &
      ILandAllocationValues &
      IWitnessDetailsProps &
      ISelectLandAllocationProps &
      IUnitProps &
      IUnitValues &
      ILeaseValues &
      ILeaseTenureProps &
      IMileStoneDetailsProps &
      IRuleTypeValuesProps &
      IProjectRuleTypeProps &
      ICreateProposalProps &
      IRoleTypeMasterStateProps & IEditRoleValues &
      ICategoryTypeMasterStateProps & IEditCategoryValues&IAminitiesTypeMasterStateProps & IEditAminitiesValues&
      IRoleTypeMasterStateProps & IEditRoleValues&
      ILogOutvalues &
      INotificationValues &
      IMilestoneStateProps &
      IProfileProps & ILogOutvalues &
      IPrivilegesStateValues &IHomePage & ITreeFormValues & IRoleTypeMasterStateProps & IChangeAvatarValues & ISearchArrayValues & IProposalTabStateValues & ILandallocationFormStatevalues & IUploadDocumentValues & IRoleTypeMasterStateProps & IEditRoleValues &
      ICategoryTypeMasterStateProps & IEditCategoryValues&
      any
  ) {
    super(props);
   
    this.handleSubMenuClick= this.handleSubMenuClick.bind(this);
    this.NatureUsageMasterRender=this.NatureUsageMasterRender.bind(this);
    this.onHandleMenuPanel3Change=this.onHandleMenuPanel3Change.bind(this);
    this.onHandleNewPropertyUplaodDocSubmit=this.onHandleNewPropertyUplaodDocSubmit.bind(this);
    this.onHandleBuildingClassificationEditClick=this.onHandleBuildingClassificationEditClick.bind(this); 
    this.onHandleProcessFeeSubmit= this.onHandleProcessFeeSubmit.bind(this);
  }
 
  

  public handleMenuClick = (event: any) => {
    this.setState({
      open1: true

    });
    getNotifications()
      .then(res => {
        this.setState({
      
          notifications: res.objDetails
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public handleClose = () => {
    this.setState({
      open1: false
    });
  };
  public handleLogOut = () => {
    localStorage.removeItem('requestIdStore');
    localStorage.removeItem(`${this.state.enterApplicationId}`);
    localStorage.removeItem('userDetails');
    localStorage.removeItem("UserImage")
    localStorage.removeItem('id');
    localStorage.removeItem('0');
    this.props.history.push("/login");
   
      
  };



  public async componentWillMount() {
    const searchDataId = this.props.location.pathname.split("/");

   
    const RequestId = localStorage.getItem('requestIdStore')

    this.setState({ searchDataId: searchDataId[3] , RequestId });
    

    try {
      if (loader) {
        loader.style.display = "block";
      }

      if(RequestId){
        const res49 = await GetPropertyConfigurationDetailsByID(RequestId);
        const res50 = await GetBudgetYears(res49.rslt.DistrictName);
        this.setState({...this.state,
          Description: res49.rslt.DistrictName,
          PropertyTypeId:  res49.rslt.PropertyTypeId,
          propertyTaxCount:res49.rslt && res49.rslt.PropertyTaxConfigurationDetails !== null && res49.rslt.PropertyTaxConfigurationDetails.length,

          selectBudgetValues: res50.years.map((x:IBudgetValues, index: number)=> ({...x, 
            BudgetId: index + 1})) ,
          // tslint:disable-next-line:object-literal-sort-keys
          propertyTaxTableList : res49.rslt && res49.rslt.PropertyTaxConfigurationDetails !== null&& res49.rslt.PropertyTaxConfigurationDetails.map(
            (y:IPropertyTaxTableValues,index : number) => ({...y, 
            BudgetYear: y.BudgetYear,
            BuildingClassificationId: y.BuildingClassificationId ,
            BuildingClassificationType: y.BuildingClassificationType,
            CategoryOwnershipType: y.CategoryOwnershipType,
            CategoryOwnershipTypeId: y.CategoryOwnershipTypeId,
            FinancialYear: y.FinancialYear,
            NatureUsageId: y.NatureUsageId,
            NatureUsageType: y.NatureUsageType ,
            PropertyTaxConfigId: y.PropertyTaxConfigId,
            PropertyType: y.PropertyType ,
            PropertyTypeId: y.PropertyTypeId ,
            PropertyValue :y.PropertyValue ,
            Value: 1,
             id: index + 1 ,
          
          })),

        })
      }
      const res51 = await postPTMSDepartmentUserDropDownList()
      const res40 = await getDashboardLandDetails();
      const res41 = await getDashboardPieChartDetails();
      const res42 = await GetDashboardApprovalData();
      const res43= await GetPTMSDashboardPendingItems();
      const res44= await GetDashboardPropertyChangePendingItems();
      const res45 = await GetTaxvaluationPendingTasks();
   const PropertyAssessmentDocumentTypeValues  = await getLMSDocumentTypes();
      const buildingClassDropDowndata = await GetBuildingClassificationDetailsWithPropType(this.state.PropertyTypeId)
      const natureUsageGrid = await GetNatureUsageDetails();
     const buildingClassificationGrid = await GetBuildingClassificationDetails();
          const categoryOwnerShipDropDownData =await postCategoryOwnerShipDropDownData()
          const PropertyTypeDropDown = await getDropdownForPropertyType();
      const propetyDepartmentMasterGridData = await getPropertyDepartmentMasterGrid();
     const resCategory = await getCategoryGridValues()
      const resaminity= await getAminitiesGridValues()
      const roleType = await getProjectTypeNames();
      const Pro = await getPropertyTypeGridValues()
      const Prodropdown= await getDropDownList()
   const res= await getRoleTypeMasterValues()  
   const Items = await getMenuItems(RoleId)
   const userItems= await getUserItems(RoleId)
 const categoryOwnerShipDropDown= await getCategoryOwnershipDropdown()
      const r2 = await GetAllTemplateNames();
      const r3 = await GetProcessTypes();
      const r4 = await GetListOfDocuments();
       // const r1 = await getMyProfileDetails();
      const r = await getDraftApplications();

      const genderDropDown = await getGenderDropDown()
      // const res = await getAgreementTypeValues(
      //   this.state.LandAllocatedToId,
      //   this.state.AllocationId
      // )
      const r20 = await getAgreementTypeValues(
        this.state.ProposalFormApplicationIdValues.length === 0
          ? 0
          : this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AllocationTypeId
            )[0]
        ,
        this.state.ProposalFormApplicationIdValues.length === 0
          ? 0
          : this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => 
              x.AllocationSubTypeId)[0]
      );
      const res1 = await getTypeOfAllocationDropDown();
      const res2 = await getTownShipValues();
      const res3 = await getLandAllocationTypeValues();
      const res4 = await postRelationTypeId();
      const res6 = await postPhotoId();
      const res5 = await getCountryValues();
      const res7 = await getAllocatedValues(this.state.LandAllocatedToId);
      const res8 = await getUnitValues(
        this.state.TownshipId,
        this.state.AllocationId
      );
const apartmentsDropDown= await getapartmentDropdown()
      const res9 = await LeaseTenureValues();
      const res10 = await RuleTypeValues();
     const res11 = await SourceTypeValues();
     const res12 = await ConditionTypeValues();
      const res13 = await postDepartmentUserDropDownList(
        this.state.enterApplicationId
      );
      const departmentForward = await GetDepartmentandusers2forward(this.state.enterApplicationId)
      const aminity = await getAminityDropDown()
      const res14 = await getDashboardLandDetails();
      const res15 = await getMyProfileDetails();
      const res16 = await getMyProfileRoleDetails();
      const res17 = await getMyProfileDepartmentDetails();
      const Building= await getBuildingClassificationDropDown(this.state.PropertyTypeId,this.state.BuildingClassificationId)
      const res18 = await getFingerListDetails();
      const res19 = await getAllRolesListDetails();
      const res20 = await mileStoneValues(this.state.TownshipId);
      const res100 = await getDistrictDropDown();
      // const res47 = await DepartmentDropDown();
      const res47= await GetSubmitDraftAssessments();
    const res48=await GetSelectedUsers();
    

      this.setState({
        ...this.state,
        DashboardPendingItems: res43 && res43.PendingRequests,
        dashboardApprovalData: res42.objDetails,
        dashboardData: res40.aaData,
        dashboardPieChartData: res41.model,
        dashboardPropertyChangePendingItems: res44 && res44.PendingRequests,
        dashboardPropertyTaxPendingItems: res45 && res45.PendingRequests,
        // tslint:disable-next-line:object-literal-sort-keys
        TotalPieChartCount: res41.model
          .map((x: IDashboardPieChartStateValues) => x.Count)
          .reduce((x: number, y: number) => x + y, 0),


        draftAssessmentCount:res47 && res47.jsonData.data.length,
        selectUserNameValues: res48.usrsdata,
        submitDraftAssessmentList: res47.jsonData.data,
        // tslint:disable-next-line:object-literal-sort-keys
        NewPropertyDocumentTypeValues:genderDropDown.documenttype,
        PropertyAssessmentDocumentTypeValues: PropertyAssessmentDocumentTypeValues.rslt,
        selectDepartmentForwardList: departmentForward.deptusersViewModelLst,
        selectGenderValues: genderDropDown.gender,
        // tslint:disable-next-line:object-literal-sort-keys
        selectFloorValues: genderDropDown.floornumber,
        selectOccupancyValues:genderDropDown.occupancy,
        selectClassificationValues: Building.NatureUsage,
        selectNatUsageValues:Building.NatureUsage,
        selectGuardianValues:genderDropDown.relation,
        selectfloorValues: genderDropDown.floortype,
        selectDistrictValues: res100.rslt
        .filter((x:IDistrictValues) => x.Description !== "")
        .map((x:IDistrictValues,index:number)=> ({...x, DistrictNumber: index + 1})) ,
       
        selectroofValues: genderDropDown.rooftype,
        // tslint:disable-next-line:object-literal-sort-keys
        aminityValues1:aminity.jsonData.data,
        selectwallValues: genderDropDown.walltype,
        selectwoodValues: genderDropDown.woodtype,
        FloorArray: this.state.FloorArray.map((x: any) => ({
          id: 0,
          // tslint:disable-next-line:object-literal-sort-keys
          AddClickCount: 0,
          FirmName : "",
          OccupantName: "",
         selectClassificationValues:Building.NatureUsage,
         selectNatUsageValues:Building.NatureUsage,
         selectFloorValues:genderDropDown.floornumber,
         selectOccupancyValues: genderDropDown.occupancy,
         ConstructionDate: "",     
          EffectiveFromDate	: "",
          UnstructeredLand: 0,
          Length: "",
          taxAmount:0,
          Breadth: "",
          PlinthArea: "",
          BuildingPermissionNo: "",
          BuildingPermissionDate: "",
          PlinthAreaInBuildingPlan: "",
           FloorNumber: 0,
           BuildingClassification: 0,
           NatureOfUsage: 0,
           Occupancy:0,
          // tslint:disable-next-line:object-literal-sort-keys

        })),

        // tslint:disable-next-line:object-literal-sort-keys
        OwnershipArray: this.state.OwnershipArray.map((x: any) => ({
          AddClickCount: 0,
          OwnerName: "",
          id: 0,
          // tslint:disable-next-line:object-literal-sort-keys
          Guardian: "",
          MobileNo: "",
          EmailAddress: "",
          selectGenderValues: genderDropDown.gender,
          selectGuardianValues:genderDropDown.relation,
          Gender: 0,
          GuardianReg:0
        })),
        // tslint:disable-next-line:object-literal-sort-keys
        selectApartmentValues:apartmentsDropDown.jsonData.data,
        selectCategoryOwnershipValues: categoryOwnerShipDropDown.jsonData.data,

        // tslint:disable-next-line:object-literal-sort-keys
        MaxPropertyTypeId:         Pro.jsonData.data
          .map((x: IProTypeMasterValues) => x.PropertyTypeId)
          .filter((x: number, y: number) => x > y),
        allocationNameValues:         Prodropdown.jsonData.data,

        allocationTypeList:         Pro.jsonData.data,

        countPro:Pro && Pro.jsonData.data.length,
        // tslint:disable-next-line:object-literal-sort-keys
        AminityTypeMasterList:resaminity.jsonData.data,

        countAminity: resaminity && resaminity.jsonData.data.length,
        // tslint:disable-next-line:object-literal-sort-keys
        CategoryTypeMasterList: resCategory.jsonData.data,
        NatureUsageList:        natureUsageGrid.jsonData.data,

        buildingClassDropDowndata:         buildingClassDropDowndata.jsonData.data,  
      
        buildingClassificationCount:        buildingClassificationGrid.jsonData.data.length,
        buildingClassificationList:   buildingClassificationGrid.jsonData.data, 

        categoryOwnerShipDropDownDataValues :        categoryOwnerShipDropDownData.jsonData.data,

        countCategory:resCategory && resCategory.jsonData.data.length,
        natureUsageCount:     natureUsageGrid && natureUsageGrid.jsonData.data.length,
        propertyDepartmentMasterList:         propetyDepartmentMasterGridData.jsonData.data,
        propertyDepartmentcount:         propetyDepartmentMasterGridData.jsonData.data.length,
        propertyTypeDropDownValues :         PropertyTypeDropDown.jsonData.data,

  
        // tslint:disable-next-line:object-literal-sort-keys
        MileStoneArray: this.state.MileStoneArray.map((x:any) => {
          return {
            AddMilestoneClickCount: x.AddMilestoneClickCount,
            LandRelease: x.LandRelease,
            RuleName: x.RuleName,
            // tslint:disable-next-line:object-literal-sort-keys
            RuleId: x.RuleName,
            DateOfCompletion: x.DateOfCompletion,
            mileStoneValues: res20.objProjectRulesList.filter(
              (y: IMileStoneDropDownValues) =>
                y.RuleName !== null && y.RuleName !== undefined
            ),
            id: x.id,
            ProjectRuleTypes: x.ProjectRuleTypes,
            ProjectTypeId: x.ProjectTypeId,
            ruleTypeValues: res10.objProjRuleTypes,
            sourceTypeValues: res11.objDetails,
            RuleSourceTypeId: x.RuleSourceTypeId,
            ConditionTypeId: x.ConditionTypeId,
            ConditionTypeValues: res12.objDetails,
            projectValues:res20.objProjectRulesList.filter(
              (y: IMileStoneDropDownValues) =>
                y.RuleName !== null && y.RuleName !== undefined
            ),
          };
        }),
        mileStoneValues: res20.objProjectRulesList.filter(
          (y: IMileStoneDropDownValues) =>
            y.RuleName !== null && y.RuleName !== undefined
        ),
        projectValues: res20.objProjectRulesList.filter(
          (y: IMileStoneDropDownValues) =>
            y.RuleName !== null && y.RuleName !== undefined
        ),
        // tslint:disable-next-line:object-literal-sort-keys
        RelationTypeArray: res4.objDetails,
        WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((x:IwitnessValues) => {
          return {
            AddClickCount: x.AddClickCount,
            WitnessName: x.WitnessName,
            id: x.id,
            // tslint:disable-next-line:object-literal-sort-keys
            RelationName: x.RelationName,
            RelationType: x.RelationType,
            RelationDateOfBirth: x.RelationDateOfBirth,
            RelationTypeArray: res4.objDetails
          };
        }),
        selectDocumentMappingValues:         r2.jsonData.AllocaitonTypeslist,

        selectProcessValues:         r3.ProcessTypesList,

        // tslint:disable-next-line:object-literal-sort-keys
        documentList:         r4.documentsList,

        draftApplicationList:         r.aaData,

        count:      r &&   r.aaData        .length,
        // tslint:disable-next-line:object-literal-sort-keys
        //  ProfileDetails: r1,
        typesOfAllocationValues: res1.objAgreementTypesList,
        // tslint:disable-next-line:object-literal-sort-keys
        photoIdTypeArray: res6.objPhotoIdTypes,
        selectLandAllocationTypeValues: res3.objLandAllocationTypes,
        selectThemeCityTypeValues: res2.townshipViewModelLst,
        // tslint:disable-next-line:object-literal-sort-keys
        selectCountryValues:res5.objCountriesList,
        selectAllocationTypeValues: res7.objAllocationTypesList.filter(
          (x: IAllocationValues) =>
            x.AllocationName !== null && x.AllocationName !== undefined
        ),
        unitValues: res8.objPlotAreaTypes,
        leaseTenure: res9.objLeaseTenureCount,
        ruleTypeValues: res10.objProjRuleTypes,
        sourceTypeValues: res11.objDetails,
        ConditionTypeValues: res12.objDetails,
      
        // sourceTypeValues: res11,
        // ConditionTypeValues: res12,
        selectDepartmentList: res13.departmentMasterViewModel,
        ptmsSelectDepartmentList: res51.deptusersViewModelLst,

        // townshipValues: res.aaData
        townshipValues:res14.aaData,
        myProfileValues: res15.objList,
        Photo: "http://" + res15.objList.Photo,
        Photo1: "http://" + res15.objList.Photo,

       // Photo: userImage,
        DisplayName: res15.DisplayName,
        roleTypeValues: res16.rolelist.filter(
          (x: ISelectRoleValues) =>
            x.RoleName !== null && x.RoleName !== undefined
        ),
        departmentTypeValues: res17.departmentMasterViewModel,
        fingerTypeValues: res18.fingersListVM,

        // agreementTypeValues: res,
        agreementTypeValues:  r20.objAgreementTypesList,
      
        selectRoleValues: res19.rolelist,

        menuItems:Items.MenuList,

        userItems:        userItems.menuUrlsViewModelLst,

        countRole:  res && res.jsonData.data.length,
        DocumentTypeMasterList: res.jsonData.data,

        ProjectTypeValues: roleType.fingersListVM,

       
      });
      if (loader != null) {
        loader.style.display = "none";
      }
    }
   catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
      if (loader != null) {
        loader.style.display = "none";
      }
    }
  }

  public readonly handleChangePage = (event: any, pageRole: number) => {
    this.setState({ pageRole, page: pageRole });
  };
  public readonly handleChangePageCategory = (event: any, pageCategory: number) => {
    this.setState({ 
      pageAminity: 0,
      pageBuilding: 0,    
      pageCategory ,
      pageNatureUsage: 0 ,
      pagePropertyDepartment: 0 ,
      pagePropertyType : 0
    });
  };
  public onHandleRefresh = () => {
    getCategoryGridValues()
      .then(res => {
        this.setState({
          ...this.state,
          CategoryTypeMasterList: res.jsonData.data,
          newCategoryName: ""
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  // for rows change per page
  public readonly handleChangeRowsPerPageCategory = (event: any) => {
    this.setState({ rowsPerPageCategory: event.target.value });
  };
  //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
  //       this.setState(event.target.value)
  //   }
  // fetch Call for Pop Up details based on ID
  public onHandleActionClickCategory = (categoryValues: ICategoryTypeStateValues) => {
    this.setState({
      ...this.state,
      categoryValues
      // open: documentValues.IsActive === true ? true : false,
      // open2: documentValues.IsActive === false ? true : false
      // tslint:disable-next-line:object-literal-sort-keys
      // documentName: name,
      // dropDownOpen: value === true ? event.currentTarget : null,
      // dropDownOpen2: value === false ? event.currentTarget : null,
      // id
    });
  };
  // public onHandleEditNameChangeCategory = (event: any) => {
  //   this.setState({ ...this.state, CategoryOwnershipName: event.target.value });
  // };
  public onHandleAddChangeCategory = (event: any) => {
    this.setState({ ...this.state, newCategoryName: event.target.value });
  };
  // for Edit PopUp open
  public onHandleEditActionClickCategory = (
    categoryValues: ICategoryTypeStateValues
  ) => {
    this.setState({
      ...this.state,
      categoryValues,
      editPopUpOpenCategory: true,
      openCategory: false
    });
  };
  public getActivestateCategory = (state: string) => {
    switch (state) {
      case "Active".toLowerCase():
        return "true";
      case "InActive".toLowerCase():
        return "false";
      default:
        return state;
    }
  };
  public onHandleSearchCategory = (event: any) => {
    // tslint:disable-next-line:no-console
    const searchCategoryInput = event.target.value;
    const data = this.state.CategoryTypeMasterList.filter(
      (x: ICategoryTypeStateValues) =>
        searchCategoryInput !== ""
          ? this.documentNameIncludes(
              searchCategoryInput,
              x.CategoryOwnershipName
            ) ||
            x.IsActive.toString()
              .toLowerCase()
              .includes(this.getActivestateCategory(searchCategoryInput.toLowerCase()))
          : x
    );
    this.setState({
      ...this.state,
      countCategory: data.length,
      searchCategoryInput
    });
  };
  // deActivate Popup open
  public onHandleDeActivatePopUpOpencategory = (categoryValues: any) => {
    this.setState({
      ...this.state,
      categoryValues,
      deActivatePopUpOpenCategory: true,
      openCategory: false
    });
  };
  // Activate Popup open
  public onHandleActivatePopUpOpenCategory= (categoryValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpenCategory: true,
      categoryValues,
      open2Category: false
    });
  };
  // add Popup open
  public onHandleAddPopUpOpenCategory = () => {
    this.setState({ ...this.state, addPopUpOpenCategory: true });
  };
  // fetch call for Edited Document Id Save
  public onHandleEditSaveCategory = (
    values: IEditCategoryProps & IEditCategoryValues
  ) => {
   
    // fetch call for Edit values Save
    postEditCategoryValues(values)
      .then(res => {
        this.setState({
          ...this.state,
          // CategoryOwnershipId: values.CategoryOwnershipId,
          // CategoryOwnershipName: values.CategoryOwnershipName,
          // CategoryTypeMasterList: this.state.CategoryTypeMasterList.map(
          //   (x: ICategoryTypeStateValues) =>
          //     x.CategoryOwnershipId === values.CategoryOwnershipId
          //       ? {
          //           ...x,
          //           CategoryOwnershipName: res.model.CategoryOwnershipName
          //         }
          //       : x
          // ),
          // documentTypeMasterList: res,
          editPopUpOpenCategory: false,
          editSuccessPopUpCategory: true
        });
      })
      .then(() =>
        getCategoryGridValues().then(res => {
          this.setState({
            ...this.state,
            CategoryTypeMasterList: res.jsonData.data,
            countCategory: res.jsonData.data.length
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // fetch call for Deactivate DocumentId
  public onHandleDeActivateSaveCategory = (event: any) => {

    postDeActivateCategoryId(event)
      .then(res => {
        this.setState({
          ...this.state,
          deActivatePopUpOpenCategory: false
          //  DocumentTypeMasterList: res,
        });
      })
      .then(() =>
        getCategoryGridValues().then(res => {
          this.setState({
            ...this.state,
            CategoryTypeMasterList: res.jsonData.data
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  // To Close Dialog PopUp
  public onHandleClose1Category = () => {
    this.setState({ ...this.state, openCategory: false ,open2Category: false,editPopUpOpenCategory: false  });
  };
  // To Close Dialog PopUp
 
  // To Close Edit PopUp Close
 
  // to Close Add PopUp
  public onHandleAddPopUpCloseCategory = () => {
    this.setState({
      ...this.state,
      addPopUpOpenCategory: false,
      newCategoryName: ""
    });
  };
  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpCloseCategory = () => {
    this.setState({ ...this.state, deActivatePopUpOpenCategory: false });
  };
  // To Close Activate PopUp Close
  public onHandleActivatePopUpCloseCategory = () => {
    this.setState({ ...this.state, activatePopUpOpenCategory: false });
  };
  public documentNameIncludes = (
    searchCategoryInput: string,
    documentName?: string
  ) => {
    if (documentName) {
      return documentName
        .toLowerCase()
        .includes(searchCategoryInput.toLowerCase());
    } else {
      return false;
    }
  };
  public onHandleAddSaveCategory = (values: IAddCategoryValues & IAddCategoryProps) => {
    if (
      this.state.CategoryTypeMasterList.filter(
        (x: ICategoryTypeStateValues) =>
          x.CategoryOwnershipName === values.newCategoryName
      ).length === 0
    ) {
      postAddCategoryValues(
        // this.state.DocumentTypeMasterList.length,
        this.state.CategoryTypeMasterList.length + 1,
        values.newCategoryName
      )
        .then(res => {
          this.setState({
            ...this.state,
            CategoryTypeMasterList: [
              ...this.state.CategoryTypeMasterList,
              res.model
            ]
          });
        })
        .then(() =>
          getCategoryGridValues().then(res => {
            this.setState({
              ...this.state,
              CategoryTypeMasterList: res.jsonData.data,
              addPopUpOpenCategory: false,
              countCategory: res.jsonData.data.length,
              dialogCategory: true,

              newCategoryName: ""
            });
          })
        )
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        dialog1Category: true,
        newCategoryName: ""
      });
    }
  };
  public onHandleActivateClickCategory = (
    event: any
  ) => {
    postActivateCategoryID(event)
      .then(res => {
        this.setState({
          ...this.state,
          //  DocumentTypeMasterList: res,
          activatePopUpOpenCategory: false
        });
      })
      .then(() =>
        getCategoryGridValues().then(res => {
          this.setState({
            ...this.state,
            CategoryTypeMasterList: res.jsonData.data,
            newCategoryName: ""
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  public handleDocuementPopUpClose = () => {
    this.setState({ ...this.state, CategoryPopUp: false });
  };
  public handlePopUpCloseCategory= () => {
    this.setState({
      dialogCategory: false
    });
  };
  public handlePopUpClose1Category = () => {
    this.setState({
      dialog1Category: false
    });
  };

  public onHandleEditSuccessPopUpClose = () => {
    this.setState({ ...this.state, editSuccessPopUpCategory: false , editSuccessPopUp: false});
  };
  // for rows change per page
  public readonly handleChangeRowsPerPage = (event: any) => {
    this.setState({
      rowsPerPage: event.target.value,
      rowsPerPageRole: event.target.value,
    });
  };

  public handlePopUpClose = () => {
    this.setState({
      UploadPopUp: false,
      addBuildingClassificationPopUpOpen: false,
      agcPopUp: false,
      dialog: false,
      dialog1Pro:false,
      dialogPro: false,
      editSuccessPopUp: false,
      editSuccessPopUpPro:false,
      selectValuePopUp: false,
    });
  };
  public onHandleActionClick = (roleValues: IRoleMasterTypeStateValues) => {
    this.setState({
      ...this.state,
      openRole: roleValues.IsActive.toString() === "true" ? true : false,
      openRole2: roleValues.IsActive.toString() === "false" ? true : false,
      roleValues
      // tslint:disable-next-line:object-literal-sort-keys
      // documentName: name,
      // dropDownOpen: value === true ? event.currentTarget : null,
      // dropDownOpen2: value === false ? event.currentTarget : null,
      // id
    });
  };

  public onHandleEditNameChange = (event: any) => {
    this.setState({ ...this.state, RoleName: event.target.value });
  };

  public onHandleAddChange = (event: any) => {
    this.setState({ ...this.state, newRoleName: event.target.value });
  };

  // for Edit PopUp open
  public onHandleEditActionClick = (roleValues: IRoleMasterTypeStateValues) => {
    this.setState({
      ...this.state,
      RoleId:roleValues.RoleId,
      RoleName: roleValues.RoleName,
      editPopUpOpen: true,
      openRole: false,
      roleValues,
    });
  };

  // for Search Input Change
  public onHandleSearchRole = (event: any) => {
    const searchInputRole = event.target.value;
    const data = this.state.DocumentTypeMasterList.filter(
      (x: IRoleMasterTypeStateValues) =>
        searchInputRole !== ""
          ? this.roleNameIncludes(
              searchInputRole.toLowerCase(),
              x.RoleName.toLowerCase()
            ) ||
            x.IsActive.toString()
              .toLowerCase()
              .includes(this.getActivestate(searchInputRole.toLowerCase()))
          : x
    );
    this.setState({
      ...this.state,
      countRole: data.length,
      searchInputRole
    });
  };

  // deActivate Popup open
  public onHandleDeActivatePopUpOpen = (roleValues: any) => {
    this.setState({
      ...this.state,
      deActivatePopUpOpen: true,
      openRole: false,
      roleValues
    });
  };

  // Activate Popup open
  public onHandleActivatePopUpOpen = (roleValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpenRole: true,
      openRole2: false,
      roleValues
    });
  };

  public roleNameIncludes = (searchInputRole: string, roleName?: string) => {
    if (roleName) {
      return roleName.includes(searchInputRole);
    } else {
      return false;
    }
  };
  public getActivestate = (state: string) => {
    switch (state) {
      case "Active".toLowerCase():
        return "true";
      case "InActive".toLowerCase():
        return "false";
      default:
        return state;
    }
  };

  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state,
      BuildingClassificationId:0,
      BuildingClassificationName: '',
      CategoryOwnershipId:0,
      NatureUsageName:'',
      ProjectType:[],
      PropertyDepartmentName:'',
      PropertyTypeId:0,
      addBuildingClassificationPopUpOpen: true,
      addNatureUsagePopUpOpen: true,
       addPopUpOpenRole: true, 
       addPropertyDepartmentPopUpOpen: true 
      });
  };

  // fetch call for Edited Document Id Save
  public onHandleEditSave = (values: IEditRoleValues & IEditRoleProps) => {
    
    const ProjectType = this.state.ProjectTypeValues
    .filter((x: IProjectTypeValues) =>
      values.ProjectType.find((y: string) => y === x.ProjectName)
    )
    .map((x: IProjectTypeValues) => x.ProjectTypeId);
    // fetch call for Edit values Save
    postEditRoleTypeValues(values, ProjectType )
      .then(res => {
        this.setState({
          ...this.state,
          ProjectTypeIds: ProjectType,
          RoleId: values.RoleId,
          RoleName: values.RoleName,
          // documentTypeMasterList: res,
          editPopUpOpen: false,
          id: event,
        });
      })
      .then(() =>
        getRoleTypeMasterValues().then(res => {
          this.setState({
            ...this.state,
         

            DocumentTypeMasterList: res.jsonData.data,
            editSuccessPopUp: true
          });
        })
      )
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
      .then(() =>
        getRoleTypeMasterValues().then(res => {
          this.setState({
            ...this.state,
            DocumentTypeMasterList: res.jsonData.data,
            selectRoleValues: res.jsonData.data.
            filter((x:any)=>x.IsActive=== true)
            .map((x: any) => ({ RoleId: x.RoleId, RoleName: x.RoleName }))

          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // To Close Dialog PopUp
  public onHandleClose1 = () => {
    this.setState({ ...this.state, openRole: false });
  };

  // To Close Dialog PopUp
  public onHandleClose2 = () => {
    this.setState({ ...this.state, openRole2: false });
  };

  // To Close Edit PopUp Close
  public onHandleEditPopUpClose = () => {
    this.setState({ ...this.state, 
      editBuildingClassificationPopUp: false,
      editNatureUsagePopUp: false,
      editPopUpOpen: false, 
      editPropertyDepartmentPopUp: false,
     });
  };

  // to Close Add PopUp
  public onHandleAddPopUpClose = () => {
    this.setState({ ...this.state,
      ProjectType:[],
      // tslint:disable-next-line:object-literal-sort-keys
      BuildingClassificationId: 0,
      BuildingClassificationName:'',
      NatureUsageName: '',
      PropertyTypeId:0,
      addBuildingClassificationPopUpOpen: false,
      addNatureUsagePopUpOpen:false ,
      addPopUpOpenRole: false,
      addPropertyDepartmentPopUpOpen: false,
       newRoleName: "" ,
      });
  };

  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClose = () => {
    this.setState({ ...this.state, 
      deActivateBuildingClassificationPopUp: false,
      deActivateNatureUsagePopUp:false,
      deActivatePopUpOpen: false,
       deActivatePropertyDepartmentPopUp: false ,
      });
  };

  // To Close Activate PopUp Close
  public onHandleActivatePopUpClose = () => {
    this.setState({ ...this.state, 
      activateBuildingClassificationPopUp: false,
      activateNatureUsagePopUp: false,
      activatePopUpOpenRole: false, 
      activatePropertyDepartmentPopUp: false,
     });
  };

  public onHandleAddSave = (values: IAddRoleValues & IAddRoleProps) => {
    if (
      this.state.DocumentTypeMasterList.filter(
        (x: IRoleMasterTypeStateValues) => x.RoleName === values.newRoleName
      ).length === 0
    ) {
        const ProjectType = this.state.ProjectTypeValues
        .filter((x: IProjectTypeValues) =>
          values.ProjectType.find((y: string) => y === x.ProjectName)
        )
        .map((x: IProjectTypeValues) => x.ProjectTypeId);

      postAddRoleTypeValues(
        this.state.DocumentTypeMasterList.length + 1,
        values.newRoleName,
        ProjectType
        
      )
        .then(res => {
          this.setState({
          //  DocumentTypeMasterList: [...this.state.DocumentTypeMasterList, res]
          });
        })
        .then(() =>
          getRoleTypeMasterValues().then(res => {
            this.setState({
              ...this.state,
              selectRoleValues: res.jsonData.data.
              filter((x:any)=>x.IsActive=== true)
              .map((x: any) => ({ RoleId: x.RoleId, RoleName: x.RoleName })),

              DocumentTypeMasterList: res.jsonData.data,
              ProjectType:[],
              addPopUpOpenRole: false,
              countRole: res.jsonData.data.length,
              dialog: true,
              newRoleName: "",
            });
          })
        )
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        dialog1: true
      });
    }
  };
  public handlePopUpClose1 = () => {
    this.setState({
      dialog1: false,
      dialog1Pro:false,
      newRoleName: ""
    });
  };

  public onHandleActivateClick = (event: any) => {
    postActivateID(event)
      .then(res => {
        this.setState({
          ...this.state,
          // DocumentTypeMasterList: res,
          activatePopUpOpenRole: false
        });
      })
      .then(() =>
        getRoleTypeMasterValues().then(res => {
          this.setState({
            ...this.state,
            DocumentTypeMasterList: res.jsonData.data,
            selectRoleValues: res.jsonData.data.
              filter((x:any)=>x.IsActive=== true)
              .map((x: any) => ({ RoleId: x.RoleId, RoleName: x.RoleName }))

          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public handleEditSuccessPopUpClose = () => {
    this.setState({ ...this.state, editSuccessPopUp: false });
  };

  
/////////////////////////////////////////////////////////////////////////////////////////////////
  // for page change
  public readonly onHandlePageChange = (event: any, page: number) => {
    this.setState({ ...this.state, page });
  };

  // pagePropertyDepartment 
  public readonly onHandlePagePropertyDepartmentChange = (event: any, page: number) => {
    this.setState({ ...this.state, 
      pageAminity: 0,
      pageBuilding: 0,    
      pageCategory: 0,
      pageNatureUsage: 0 ,
      pagePropertyDepartment: page ,
      pagePropertyType : 0
    });
  };

  public readonly onHandlePageBuildingChange = (event: any, page: number) => {
    this.setState({ ...this.state, 
      pageAminity: 0,
      pageBuilding: page,    
      pageCategory: 0,
      pageNatureUsage: 0 ,
      pagePropertyDepartment:0,
      pagePropertyType : 0
    });
  };

  public readonly onHandlePageNatureUsageChange = (event: any, page: number) => {
    this.setState({ ...this.state,
      pageAminity: 0,
      pageBuilding: 0,
      pageCategory: 0,
      pageNatureUsage: page ,
      pagePropertyDepartment:0,
      pagePropertyType : 0, 
      });
  };
  
  public readonly onHandlePagePropertyTypeChange = (event: any, page: number) => {
    this.setState({ ...this.state, 
      pageAminity: 0,
      pageBuilding: 0,    
      pageCategory: 0,
      pageNatureUsage: 0 ,
      pagePropertyDepartment:0,
      pagePropertyType: page
     });
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
    
    const data = this.state.draftApplicationList.filter(
      (x: IApplicationStateValues) =>
        searchInput !== ""
          ? x.ApplicationId.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.OrganiztionName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            x.AllocateTo.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.AllocationName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
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
  public handleDraftClick = (event: any) => {

    this.setState({
      ...this.state,
      dialogExpandOpen: !this.state.dialogExpandOpen,
      draftApplicationValues: event,
      expandApplicationId: event.ApplicationId
      // open: !this.state.open
    });
  };

  public onHandleDeleteClick = async (event: any) => {
    const res = await postDeleteDraftApplicationById(event);
    const res2 = await getDraftApplications()
      
     
        this.setState({
          ...this.state,
          count: res2.aaData.length,
          deletePopUp: res ? false : true,
          draftApplicationList: res2.aaData,

          // draftApplicationList: res
      
      })
    
  };


  // fetch Call for Pop Up details based on ID
  public handleActionClick = async (values: IApplicationStateValues) => {
   
try{
  if (loader) {
    loader.style.display = "block";
  }
  
    const Allocatedto = values.AllocateTo === "Government" ? 1 : 2;
   const res1 = await getDocumentTypeList2(Allocatedto, 1)
   const res2 = await postDepartmentUserDropDownList(values.ApplicationId)
   
   const res3 = await getApplicationSearchDetails(values.ApplicationId)
   const res8 = await   getAllocatedValues( res3.applicationDetailsViewModelLst
    .map((x:ISearchValues) => x.AllocationTypeId)[0])
   const res7 = await  getAgreementTypeValues(
    res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.AllocationTypeId)[0],
    res3.applicationDetailsViewModelLst
    .map((x:ISearchValues) => x.AllocationSubTypeId)[0])
    const res9 = await  getStateValues(res3.applicationDetailsViewModelLst
      .map((x:ISearchValues) => x.OrgCountryId)[0])
      const res11 = await GetConvertedValuesInAcres(res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.UnitFormatId)[0], res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.RequiredLandArea)[0])
       
      const res10 =  await mileStoneValues(parseInt(res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.Township)[0],10))
   const res4 = await GetWitnessDetailsData(values.ApplicationId)
   const res5 = await GetProjectRulesForApplication(values.ApplicationId)
   const res6 = await GetMilestoneActivities(values.ApplicationId)
   const res12 = await GetConvertedValuesInAcres(res6.milestoneActivitiesDetailsViewModelLst
    .map((y:any) => y.UnitFormatId)[0], res6.milestoneActivitiesDetailsViewModelLst.map((y:any) => y.InitialAllocationLandSize)[0] )
   
  

      const list = this.state.documentList
  .filter(
    (z: IDocumentPropValues) =>
    res1.documents.find((s: IDocument2PropValues) => s.Id === z.PhotoId));

    const list2 = res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
    .map((y:ISearchValues) => y.DocumentsVerifiedList)[0] === null ? [] : res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
    .map((y:ISearchValues) => y.DocumentsVerifiedList)[0]

    const l = list2.length === 0? list : 
    list
    .map((x:IDocumentPropValues) =>  list2 && list2.map((y:any) => y.DocumentId)
    .includes(x.PhotoId)? ({...x, FileType: "http://" + list2
      .filter((y:any) => x.PhotoId === y.DocumentId)
      .map((y:any) => y.DocumentPath )[0]}) : x);

      
      this.setState({
        ...this.state,
        InitialAllocationSizeInAcres: res12.model.ConvertValue,
        OutOfAGC : res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((y:ISearchValues) => y.OutOfAGC)[0] ,
        RequiredLandSizeBeforeAllocation: res11.model.ConvertValue,
        Uploadimages: l,
        WithInAGC: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((y:ISearchValues) => y.WithInAGC)[0],
        documentList2: l,
        enterApplicationId: values.ApplicationId,
        // tslint:disable-next-line:object-literal-sort-keys
        SubmitValues: {...this.state.SubmitValues, TownshipName:  res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
          .map((y:ISearchValues) => y.TownshipName)[0] },
        registerOrNot:  res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((y:ISearchValues) => y.RegisteredOrNot)[0] === true ? "1" : "2",
                // tslint:disable-next-line:object-literal-sort-keys
        AmountPaid: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((y:ISearchValues) => y.AmountPaid)[0],
        AmountToBePaid:res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((y:ISearchValues) => y.AmountTobePaid)[0],  

        // tslint:disable-next-line:object-literal-sort-keys
        TotalLandCost:  res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((y:ISearchValues) => y.TotalLandCost)[0],
        mapDataValues: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((y:ISearchValues) => y.Block)[0] === "" ? false : true,

        // list.map((x:IDocumentPropValues) => 
        // l.map((y:any) => y.PhotoId === x.PhotoId? 
        // {...x, PhotoIdTypeName: x.PhotoIdTypeName, FileType: y.FileType} : x))
        // .map((x:any, i: number)=> x[i]),
              
      //  res3.applicationDetailsViewModelLst
      //   .map((y:ISearchValues) => y.DocumentsVerifiedList)[0] && 
      //   res3.applicationDetailsViewModelLst
      //   .map((y:ISearchValues) => y.DocumentsVerifiedList)[0]
      //   .filter((y:any) =>
     
      //   ).find(
      //       (z: IDocument2PropValues) =>
      //         z.DocumentId === y.DocumentId
      //     )
      //   ), 
        // tslint:disable-next-line:object-literal-sort-keys
        TownshipId: res3.applicationDetailsViewModelLst && parseInt(res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.Township)[0],10), 
        activeStep: 0,
        mileStoneValues: res10.objProjectRulesList && res10.objProjectRulesList.filter(
          (y: IMileStoneDropDownValues) =>
            y.RuleName !== null && y.RuleName !== undefined
        ),
        projectValues : res5.projectRulesViewModelLst && res5.projectRulesViewModelLst.length === 0 ? 
        res10.objProjectRulesList && res10.objProjectRulesList.filter(
          (y: IMileStoneDropDownValues) =>
            y.RuleName !== null && y.RuleName !== undefined
        )
            : res5.projectRulesViewModelLst.map((y:IapplicationProjectRulesValues) => ({
              ...y,
              AchievedValue: y.AchievedValue,
              ConditionTypeId: y.ConditionTypeId,
              ConditionValue: y.ConditionValue,
              CreatedBy: y.CreatedBy,
              DocumentPath: y.DocumentPath,
              IsDocumentVerified: y.IsDocumentVerified,
              IsVerified: y.IsVerified,
              MaximumValue: y.MaximumValue,
              MinimumValue: y.MinimumValue,
              ProjRuleTypeId: y.ProjRuleTypeId,
              ReturnCode: y.ReturnCode,
              RuleId: y.RuleId,
              RuleName: y.RuleName,
              SourceTypeId: y.SourceTypeId,
              ThemeCityId: y.TownshipId,
              TownshipId: y.TownshipId,
              Value: y.Value,
              uploadPopUp: false
  
            })),
            // tslint:disable-next-line:object-literal-sort-keys
            projectTypes: res5.projectRulesViewModelLst 
            && res5.projectRulesViewModelLst.map((y:IapplicationProjectRulesValues) => y.RuleName),
        // tslint:disable-next-line:object-literal-sort-keys
        // projectTypes : res5.projectRulesViewModelLst && res5.projectRulesViewModelLst.map(
        //     (y: IMileStoneDropDownValues) =>
        //       y.RuleName !== null && y.RuleName !== undefined
        //   ).map((y:IMileStoneDropDownValues) =>  y.RuleId === res3.applicationDetailsViewModelLst
        //   .map((z:ISearchValues) => z.ProjectRules)[0])
        //   .map((z:IMileStoneDropDownValues) => z.RuleName) ,
        
                // tslint:disable-next-line:object-literal-sort-keys
        UnitId: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.AvailbleLandAreaUnits)[0],
       requiredLandUnitId 
       :  res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
       .map((x:ISearchValues) => x.UnitFormatId)[0], 
        selectStateValues: res9.objStatesList,

        AllocationSubTypeId: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.AllocationSubTypeId)[0],
        AllocationTypeId:  res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst
        .map((x:ISearchValues) => x.AllocationTypeId)[0],
        agreementTypeValues: res7.objAgreementTypesList,
        selectAllocationTypeValues: res8.objAllocationTypesList,

        WitnessDetailsFormArray:  res4.objDetails !== null &&  res4.objDetails.length !== 0? 
        res4.objDetails.map((y:IwitnessValues,index:number)=> 
        ({ AddClickCount: index ,
          WitnessName: y.WitnessName,
          id: index,
          // tslint:disable-next-line:object-literal-sort-keys
          RelationName: y.RelationName,
          RelationType: y.RelationType,
          RelationDateOfBirth: y.RelationDateOfBirth !=="" ? moment(y.RelationDateOfBirth)
          .format(
            "YYYY-MM-DD"
          ) : '',
          RelationTypeArray: this.state.RelationTypeArray})
          ) : [ {
            AddClickCount: 0,
            WitnessName: "",
            id: 0,
            // tslint:disable-next-line:object-literal-sort-keys
            RelationName: "",
            RelationType: 0,
            RelationDateOfBirth: "",
            RelationTypeArray: this.state.RelationTypeArray
          }],
            authorisedPersonValues: this.state.authorisedPersonValues
        .map((y:IAuthorizedPersonValues) => ({
          ...y,
          AuthorisedPersonEmailAddress: res3.applicationDetailsViewModelLst &&  res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthEmailId
          )[0],
          // tslint:disable-next-line:object-literal-sort-keys
          AuthDateOfBirth: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthDateOfBirth
          )[0],
          FirstName: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.FirstName
          )[0],
          HouseNo:  res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthAddress1
          )[0],
          LastName: res3.applicationDetailsViewModelLst &&  res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.LastName
          )[0],
          MobileNumber: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthPhoneNumber
          )[0],
          PhotoIdNumber: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthPhotoIdNumber
          )[0],
          PhotoIdType: this.state.photoIdTypeArray.filter((z: IPhotoIdTypeValues) => {
            return res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.find(
              (x: ISearchValues) => x.AuthPhotoIdType === z.PhotoIdName
            )
          }).map((z: IPhotoIdTypeValues) => z.PhotoIdType)[0],
          PhotoIdTypeName: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthPhotoIdType
          )[0],
          RelationName: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.RelationName
          )[0],
          AuthRelationTypeId: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.RelationType
          )[0],

          RelationTypeName: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.RelationName
          )[0],
          StreetName: res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthAddress2
          )[0],
          authImage: `http:// + ${res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.map(
            (x: ISearchValues) => x.AuthPhotoIdPath
          )[0]}`

          })),
          authImage: 
          res3.applicationDetailsViewModelLst.length !== 0 ? 
          "http://" + res3.applicationDetailsViewModelLst
          .map((x: ISearchValues) => x.AuthPhotoIdPath)[0] : '',
          MileStoneArray: res6.milestoneActivitiesDetailsViewModelLst.length !== 0?  
           res6.milestoneActivitiesDetailsViewModelLst.map((y:any, index: number) => 
            ({...y ,  
              AddMilestoneClickCount: index,
              LandRelease: y.ReleaseLandArea,
              RuleName: y.RuleName,
              // tslint:disable-next-line:object-literal-sort-keys
              RuleId: y.MilestoneYear,
              DateOfCompletion: y.EffectiveDate !=="" ? moment(y.EffectiveDate).format('YYYY-MM-DD') :'',
              mileStoneValues: res10.objProjectRulesList && res10.objProjectRulesList.filter(
                (z: IMileStoneDropDownValues) =>
                  z.RuleName !== null && z.RuleName !== undefined
              ),
              id: index,
              ProjectRuleTypes: 
              y.MilestoneRules.split("~"),

              ProjectTypeId: y.ProjectTypeId,
              ruleTypeValues: this.state.ruleTypeValues,
              sourceTypeValues: this.state.sourceTypeValues,
              RuleSourceTypeId: y.RuleSourceTypeId,
              ConditionTypeId: y.ConditionTypeId,
              ConditionTypeValues: this.state.ConditionTypeValues,
              projectValues: res10.objProjectRulesList && res10.objProjectRulesList.filter(
                (z: IMileStoneDropDownValues) =>
                  z.RuleName !== null && z.RuleName !== undefined
              ),
            })): [
              {
                AddMilestoneClickCount: 0,
                LandRelease: "",
                RuleName: "",
                // tslint:disable-next-line:object-literal-sort-keys
                RuleId: 0,
                DateOfCompletion: "",
                mileStoneValues: res10.objProjectRulesList && res10.objProjectRulesList.length !== 0? 
                res10.objProjectRulesList.filter(
                  (z: IMileStoneDropDownValues) =>
                    z.RuleName !== null && z.RuleName !== undefined
                ) : this.state.mileStoneValues,
                id: 0,
                ProjectRuleTypes: [],
                ProjectTypeId: 0,
                ruleTypeValues: this.state.ruleTypeValues,
                sourceTypeValues: this.state.sourceTypeValues,
                RuleSourceTypeId: 0,
                ConditionTypeId: 0,
                ConditionTypeValues: this.state.ConditionTypeValues,
                projectValues: res10.objProjectRulesList && res10.objProjectRulesList.length !==0? 
                res10.objProjectRulesList.filter(
                  (z: IMileStoneDropDownValues) =>
                    z.RuleName !== null && z.RuleName !== undefined
                ): this.state.projectValues,                 
                MilestoneId:0,
                 MilestoneYear:0,
                ApplicationId:'',
                MilestoneRuleId:0,
                ReleaseLandArea:"",
                AvailbleLandAreaUnits:0,
                UnitFormat:"",
                EffectiveDate:"",
                ProjectRuleIds:"",
                MilestoneRules:"",
                LandAreaAllotedByEstates:0,
               ParcelId:"",
               SurveyNumbe:"",
                InitialAllocationLandSize:0
              }
              ],
  
              initialUnitId: res6.milestoneActivitiesDetailsViewModelLst && 
              res6.milestoneActivitiesDetailsViewModelLst.map((y:any) => y.UnitFormatId)[0],
                  // tslint:disable-next-line:object-literal-sort-keys
        ProposalFormApplicationIdValues: 
        res3.applicationDetailsViewModelLst && res3.applicationDetailsViewModelLst.length !== 0 ? 
        res3.applicationDetailsViewModelLst
        .map((x: ISearchValues) => ({

        
            ...x,
            InitialAllocationSizeInAcres: res12.model.ConvertValue,
            RequiredLandSizeBeforeAllocation: res11.model.ConvertValue,
            // tslint:disable-next-line:object-literal-sort-keys
            InitialAllocationLandSize: res6.milestoneActivitiesDetailsViewModelLst && 
            res6.milestoneActivitiesDetailsViewModelLst.map((y:any) => y.InitialAllocationLandSize)[0],
            InitialAllocationLandSizeType: res6.milestoneActivitiesDetailsViewModelLst && 
            res6.milestoneActivitiesDetailsViewModelLst.map((y:any) => y.UnitFormatId)[0],
            // tslint:disable-next-line:object-literal-sort-keys
            AuthPhotoIdPath: "http://" + x.AuthPhotoIdPath,
            MileStoneActivities : res6.milestoneActivitiesDetailsViewModelLst,

            ProjectRulesForApplication:res5.projectRulesViewModelLst 
            && res5.projectRulesViewModelLst.map((y:IapplicationProjectRulesValues) => ({
              ...y,
              AchievedValue: y.AchievedValue,
              ConditionTypeId: y.ConditionTypeId,
              ConditionValue: y.ConditionValue,
              CreatedBy: y.CreatedBy,
              DocumentPath: y.DocumentPath,
              IsDocumentVerified: y.IsDocumentVerified,
              IsVerified: y.IsVerified,
              MaximumValue: y.MaximumValue,
              MinimumValue: y.MinimumValue,
              ProjRuleTypeId: y.ProjRuleTypeId,
              ReturnCode: y.ReturnCode,
              RuleId: y.RuleId,
              RuleName: y.RuleName,
              SourceTypeId: y.SourceTypeId,
              ThemeCityId: y.TownshipId,
              TownshipId: y.TownshipId,
              Value: y.Value,
              uploadPopUp: false
  
            })),
            RequiredLandArea: x.RequiredLandArea,
            // tslint:disable-next-line:object-literal-sort-keys
            AgreementTypeId: x.AgreementTypeId,

            AllocationSubTypeId: x.AllocationSubTypeId,
           AllocationTo: x.AllocationTo !== null || x.AllocationTo !== undefined?
            x.AllocationTo : 0,
            // GOMdate: "",
           
            // tslint:disable-next-line:object-literal-sort-keys
            AuthAddress1: '',
            AuthAddress2:'',
           
            check : false, 
            TownshipId: x.TownshipId !== undefined || x.TownshipId !== null ? x.TownshipId : 0,
            // tslint:disable-next-line:object-literal-sort-keys
            AuthPhoneNumber: x.AuthPhoneNumber,
          
                        LeaseEndDate:  x.LeaseEndDate && moment(x.LeaseEndDate).format('YYYY-MM-DD'),
            LeaseStartDate: x.LeaseStartDate && moment(x.LeaseStartDate).format('YYYY-MM-DD'),
            LeaseAmountperAcre: x.LeaseAmountperAcre,

            OrgPhoneNumber: x.OrgPhoneNumber === ""? undefined:x.OrgPhoneNumber,
           
            WitnessDetailsFormArray: 
            res4.objDetails !== null &&  res4.objDetails.length !== 0 ? 
            res4.objDetails.map((y:IwitnessValues,index:number)=> 
            ({ AddClickCount: index ,
              WitnessName: y.WitnessName,
              id: 0,
              // tslint:disable-next-line:object-literal-sort-keys
              RelationName: y.RelationName,
              RelationType: y.RelationType,
              RelationDateOfBirth: y.RelationDateOfBirth !== "" ? moment(y.RelationDateOfBirth)
              .format(
                "YYYY-MM-DD"
              ): '',
              RelationTypeArray: this.state.RelationTypeArray})
              ) : [ { AddClickCount: 0 ,
                WitnessName: '',
                id: 0,
                // tslint:disable-next-line:object-literal-sort-keys
                RelationName: '',
                RelationType: 0,
                RelationDateOfBirth: '',
                RelationTypeArray: this.state.RelationTypeArray}],            
           
        // tslint:disable-next-line:object-literal-sort-keys
     
        // tslint:disable-next-line:object-literal-sort-keys
        AuthDateOfBirth: x.DateOfBirth !== ""?  moment(x.DateOfBirth)
          .format(
            "YYYY-MM-DD"
          ) : ''
      ,
        // WitnessName: x.WitnessName
       
        AuthRelationTypeId:  x.RelationType
        ,
      
        enterApplicationId:  x.ApplicationId,
        LandAllocationId: x.LandAllocationTypeId,
        LandAllocationTypeId: x.LandAllocationTypeId,
        
         LandAllocationTypeName:  x.LandAllocationType,
         GOMDetails: x.GOMDetails !== null && x.GOMDetails.length !== 0 ? x.GOMDetails
         .map((y:any, id: number) => ({ 
           ...y,  
           AddGoValueClickCount: id,
           GoDate: y.GOMDate !== "" ? moment(y.GOMDate).format('YYYY-MM-DD'): '',
           GoNumber: y.GOMNumber,
           id,
         }) ) : [{ 
          
           AddGoValueClickCount: 0,
           GoDate: '',
           GoNumber: '',
           id: 0,
         }],

      })) : [],
    

      ProjectDetailsArray:  res3.applicationDetailsViewModelLst.length !== 0?
      res3.applicationDetailsViewModelLst.map((x:ISearchValues) => 
      x.GOMDetails)[0] !== null && res3.applicationDetailsViewModelLst.map((x:ISearchValues) => 
      x.GOMDetails)[0].length !== 0 ? 
      res3.applicationDetailsViewModelLst.map((x:ISearchValues) => 
      x.GOMDetails)[0]
      .map((x:any, id: number) => ({ 
        ...x,  
        AddGoValueClickCount: id,
        GoDate: x.GOMDate !== "" ? moment(x.GOMDate).format('YYYY-MM-DD') : '',
        GoNumber: x.GOMNumber,
        id,
      }) ) : [{ 
       
        AddGoValueClickCount: 0,
        GoDate: '',
        GoNumber: '',
        id: 0,
      }] :[{ 
       
        AddGoValueClickCount: 0,
        GoDate: '',
        GoNumber: '',
        id: 0,
      }] ,
      draftWithId: true,
        selectDepartmentList: res2.deptusersViewModelLst,
          // tslint:disable-next-line:object-literal-sort-keys
          buttonDisable1:false,
          buttonDisable2:false,
          buttonDisable3:false,
          buttonDisable4:false

      
      })
        this.props.history.push(
          `/page/landAllocation/draftApplication/proposalForm/${
            values.ApplicationId
          }`
        )
        if (loader != null) {
          loader.style.display = "none";
        }
        }

      catch(err) { 
        if (loader != null) {
          loader.style.display = "none";
        }
      // tslint:disable-next-line:no-console
        console.log(err);
      }
  };

  public handleSubmitPopUpOpen = () => {
    this.setState({ ...this.state, submitPopUp: true, uploadPopUpOpen: false });
  };
  public handleUploadImageChange = (evt: any, name: string, id : number) => {

    const file = evt.target.files[0];
  
    const reader = new FileReader();

 
    reader.onloadend = () => {
        
        this.setState({
          ...this.state,
          disableUploadButton:false,
          disabledeleteButton:false,
          documentList2: this.state.documentList2.map((x: IDocumentPropValues) =>        
            (x.PhotoId === id)? ({ ...x,
             FileType: reader.result,
             buttonUpload: true
               }) : x),
               // tslint:disable-next-line:object-literal-sort-keys
               Uploadimages:this.state.Uploadimages.map((x:IDocumentPropValues) => 
               (x.PhotoId === id)? ({ ...x,
                  FileType: reader.result,

                  }) : x
                  ), 
            
        });
      };

      if (file) {
        const fileSize = file.size
        if(fileSize > 51200) {
    
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,          
         disableUploadButton:false,
         disabledeleteButton:false,
         imageChosenCount: this.state.imageChosenCount + 1,

        documentList2: this.state.documentList2.map((x:IDocumentPropValues) => 
        (x.PhotoId === id)? ({ ...x,
           FileType: reader.result,
           buttonUpload: true
           }) : x
           ),
           fileSize: evt.target.files[0].size,

        Uploadimages:this.state.Uploadimages.map((x:IDocumentPropValues) => 
        (x.PhotoId === id)? ({ ...x,
           FileType: reader.result,
           }) : x
           ),
        file

      });  
      
    }

    else {
      this.setState({...this.state, 
         documentList2: this.state.documentList2.map((x:IDocumentPropValues) => 
         (x.PhotoId === id)? ({ ...x,
            FileType: '',
            buttonUpload: true
            }) : x
            ),
            // tslint:disable-next-line:object-literal-sort-keys
            Uploadimages:this.state.Uploadimages.map((x:IDocumentPropValues) => 
            (x.PhotoId === id)? ({ ...x,
               FileType: ''
               }) : x
               ),
             imageWarningPopUp: true})
    }
  }
    else {

      this.setState({
        ...this.state,
        documentList2: this.state.documentList2.map((x:IDocumentPropValues) => 
        (x.PhotoId === id)? ({ ...x,
           FileType: '', buttonUpload: true
           }) : x
           ),

        // tslint:disable-next-line:object-literal-sort-keys
        Uploadimages:this.state.Uploadimages.map((x:IDocumentPropValues) => 
        (x.PhotoId === id)? ({ ...x,
           FileType: '',
           }) : x
           )
        

       // [name]: ""
      })
    }
  };
  public handleUploadImage2Change = (evt: any) => {
  
    const file = evt.target.files[0];
    const reader = new FileReader();
  

    reader.onloadend = () => {
      this.setState({
        ...this.state,

        image2: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,

        image2: reader.result
      });
    } else {
      this.setState({
        ...this.state,

        image2: ""
      });
    }
  };

  public handleSelectDepartmentChange = (event: any) => {
    this.setState({
      ...this.state,
      UserId: event.target.value,
      applicationSelectDepartmentName: event.currentTarget.textContent,
      selectDepartmentName: event.currentTarget.textContent,
    });
  };
  public handleUploadImage3Change = (evt: any) => {
   
    const file = evt.target.files[0];
    const reader = new FileReader();
   
    reader.onloadend = () => {
      this.setState({
        ...this.state,

        image3: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,

        image3: reader.result
      });
    } else {
      this.setState({
        ...this.state,

        image3: ""
      });
    }
  };
  public handleLandAllocationClick = (e: { target: { value: string } }
    // , values: IProposalTabStateValues &
    // ICountryValues &
    // IStateValues &
    // ISelectAllocationProps &
    // ISelectCountryProps &
    // ISelectStateProps &
    // IDetailsFromMap
    ) => {
    getAllocatedValues(parseInt(e.target.value, 10))
      .then(res => {
        this.setState({
          ...this.state,
          // AllocationId:e.target.value,
          AgreementTypeId:0,
          AllocationSubTypeId: 0,
          LandAllocatedTo: e.target.value,
          LandAllocatedToId: parseInt(e.target.value, 10),
          landAllocatedTo: e.target.value,
          // ProcessId:1,
          selectAllocationTypeValues: res.objAllocationTypesList
        });
        if (parseInt(e.target.value, 10) === 1) {
          this.setState({ ...this.state, LandAllocatedName: "Government" });
        } else {
          this.setState({ ...this.state, LandAllocatedName: "Private" });
        }
      }).then(()=> 
      getDocumentTypeList2(parseInt(e.target.value, 10), 1).then(res => {
        this.setState({
          ...this.state,
          documentList2: this.state.documentList.filter(
            (y: IDocumentPropValues) =>
              res.documents.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
          ),
          // tslint:disable-next-line:object-literal-sort-keys
          Uploadimages: this.state.documentList.filter(
            (y: IDocumentPropValues) =>
              res.documents.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
          ),

        });
      })
      )
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err)
      );
    
  };

  public handleLandAllocationClick1 = (e: { target: { value: string } }
    // ,values:IProposalTabStateValues &
    // ICountryValues &
    // IStateValues &
    // ISelectAllocationProps &
    // ISelectCountryProps &
    // ISelectStateProps &
    // IDetailsFromMap
     ) => {
    getAllocatedValues(parseInt(e.target.value, 10))
      .then(res => {
        this.setState({
          ...this.state,
          AgreementTypeId:0,
          AllocationSubTypeId: 0,
          LandAllocatedTo: e.target.value,
          LandAllocatedToId: parseInt(e.target.value, 10),
          landAllocatedTo: e.target.value,
          selectAllocationTypeValues: res.objAllocationTypesList,

          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => {
              return {
                ...x,
                AgreementTypeId: 0,
                AllocationSubTypeId: 0,
                AllocationTo: e.target.value === "1" ? "Government" : "Private",
                AllocationTypeId: parseInt(e.target.value, 10),

              };
            }
          ),
          // tslint:disable-next-line:object-literal-sort-keys
          // LandAllocationId: parseInt(e.target.value, 10),

          //   landAllocatedTo: e.target.value,
          // ProcessId:1,
        });
        // if (parseInt(e.target.value, 10) === 1) {
        //   this.setState({ ...this.state, LandAllocatedName: "Government" });
        // } else {
        //   this.setState({ ...this.state, LandAllocatedName: "Private" });
        // }
      }).then(()=> 
      getDocumentTypeList2(parseInt(e.target.value, 10), 1).then(res => {
        this.setState({
          ...this.state,
          documentList2: this.state.documentList.filter(
            (y: IDocumentPropValues) =>
              res.documents.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
          ),
            // tslint:disable-next-line:object-literal-sort-keys
            Uploadimages: this.state.documentList.filter(
            (y: IDocumentPropValues) =>
              res.documents.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
          ),
        });
      })
      )
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err)
      );
  };

  public handleThemeCityChange = (event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    
    ICreateProposalProps &
    IDetailsFromMap ) => {
    mileStoneValues(event.target.value).then(res => {
      this.setState({
        ...this.state,
        mileStoneValues: res.objProjectRulesList.filter(
          (y: IMileStoneDropDownValues) =>
            y.RuleName !== null && y.RuleName !== undefined
        ),
        // tslint:disable-next-line:object-literal-sort-keys
        MileStoneArray: this.state.MileStoneArray.map((x:any) => {
          return {
            AddMilestoneClickCount: x.AddMilestoneClickCount,
            LandRelease: x.LandRelease,
            RuleName: x.RuleName,
            // tslint:disable-next-line:object-literal-sort-keys
            RuleId: x.RuleName,
            DateOfCompletion: x.DateOfCompletion,
            mileStoneValues: res.objProjectRulesList.filter(
              (y: IMileStoneDropDownValues) =>
                y.RuleName !== null && y.RuleName !== undefined
            ),
            id: x.id,
            ProjectRuleTypes: x.ProjectRuleTypes,
            ProjectTypeId: x.ProjectTypeId,
            ruleTypeValues: x.ruleTypeValues,
            sourceTypeValues: x.sourceTypeValues,
            RuleSourceTypeId: x.RuleSourceTypeId,
            ConditionTypeId: x.ConditionTypeId,
            ConditionTypeValues: x.ConditionTypeValues,
            projectValues: res.objProjectRulesList.filter(
              (y: IMileStoneDropDownValues) =>
                y.RuleName !== null && y.RuleName !== undefined
            )
          };
        }),
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:any) => {
          return {
            ...x,
           
            MileStoneArray: this.state.MileStoneArray.map((y:any) => {
              return {
                AddMilestoneClickCount: values.AddMilestoneClickCount,
                LandRelease: values.LandRelease,
                RuleName: values.RuleName,
                // tslint:disable-next-line:object-literal-sort-keys
                RuleId: values.RuleName,
                DateOfCompletion: values.DateOfCompletion,
                mileStoneValues: res.objProjectRulesList.filter(
                  (z: IMileStoneDropDownValues) =>
                    z.RuleName !== null && values.RuleName !== undefined
                ),
                id: y.id,
                ProjectRuleTypes: values.ProjectRuleTypes,
                ProjectTypeId: values.ProjectTypeId,
                ruleTypeValues: values.ruleTypeValues,
                sourceTypeValues: values.sourceTypeValues,
                RuleSourceTypeId: values.RuleSourceTypeId,
                ConditionTypeId: values.ConditionTypeId,
                ConditionTypeValues: values.ConditionTypeValues,
                projectValues: res.objProjectRulesList.filter(
                  (z: IMileStoneDropDownValues) =>
                    z.RuleName !== null && values.RuleName !== undefined
                )
              };
            }),
            // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationTypeId: values.LandAllocationId,
            // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationType: values.LandAllocationTypeName,
            AvailableLandArea:values.AvailableLandArea,
            AvailbleLandAreaUnits:values.UnitId,
            TenurePeriodId: values.Number,
            LeaseAmountperAcre: values.LeaseAmount,
            LeaseStartDate: values.LeaseStartDate,
            LeaseEndDate: values.LeaseEndDate,
            ProjectTitle: values.ProjectName,
            ProjPurpose: values.ProjectPurpose,
           
            ProjDescription: values.ProjectDescription,
            TownshipId:event.target.value,
            TownshipName:this.state.selectThemeCityTypeValues
            .filter((y:ITownshipValues) => y.TownshipId === event.target.value)
            .map((z:ITownshipValues) => z.TownshipName)[0],
           
            ProjectRules: values.projectRules,
           
           
            GOMnumber: values.GoNumber,
            GOMdate: values.GoDate,
           
            TotalAmount: values.TotalLeaseAmount,
            InitialAllocation: values.InitialAllocation,

            InitialAllocationLandSize: values.InitialAllocationLandSize,
            InitialAllocationLandSizeType: values.initialUnitId,
           // LeaseTenure: values.leaseTenure,
        
           
          
            RequiredLandArea: values.RequiredLandSize
          }
        }),
       
        TownshipId: event.target.value,
        TownshipName: this.state.selectThemeCityTypeValues
          .filter((x: ITownshipValues) => x.TownshipId === event.target.value)
          .map((x: ITownshipValues) => x.TownshipName)[0],
      
        projectValues: res.objProjectRulesList.filter(
          (x: IMileStoneDropDownValues) =>
            x.RuleName !== null && x.RuleName !== undefined
        ),
       
      });
    });
  };

  public handleCountryClick = (e: any
    ,values:IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap 
    ) => {
    getStateValues(e.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          City: values.City,
          GSTNumber: values.GSTNumber,
          HouseNoBuildingName: values.HouseNoBuildingName,
          OrgEmailAddress: values.OrgEmailAddress,
          OrgPhoneNumber: values.OrgPhoneNumber,
          OrganizationName:values.OrganizationName,
          RegistrationNumber: values.RegistrationNumber,
          StreetNameLocality: values.StreetNameLocality,
          ZipCode: values.ZipCode,
          // tslint:disable-next-line:object-literal-sort-keys
          CountryId: e.target.value,
          CountryName: this.state.selectCountryValues
          .filter((x: ICountryValues) => x.CountryId === e.target.value)
          .map((x: ICountryValues) => x.CountryName)[0],
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
          .map((x:ISearchValues) => {
            return(
              {
                ...x,
             
             
              
                OrgStateName: this.state.selectStateValues
                .filter((y: IStateValues) => y.StateId === values.StateId)
                .map((y: IStateValues) => y.StateName)[0],
              
                // tslint:disable-next-line:object-literal-sort-keys
                OrgAddress1: values.HouseNoBuildingName,
                OrgEmailid: values.OrgEmailAddress,
                OrgPhoneNumber: values.OrgPhoneNumber,
                OrganiztionName:  values.OrganizationName,
                OrgRegistrationNumber:values.RegistrationNumber,
                // tslint:disable-next-line:object-literal-sort-keys
                OrgAddress2: values.StreetNameLocality,
                // tslint:disable-next-line:object-literal-sort-keys
                OrgCityName: values.City,
                OrgGST: values.GSTNumber,
                OrgStateId :values.StateId,
                OrgZipCode: values.ZipCode, 
                OrgCountryId: e.target.value,
                OrgCountryName:  this.state.selectCountryValues
                .filter((y: ICountryValues) => y.CountryId === e.target.value)
                .map((y: ICountryValues) => y.CountryName)[0]
              }
            )
          }),

      
          selectStateValues: res.objStatesList
        })
      })
      .catch(err => err);
  };

  public handleAllocationChange = (event: any
    // ,values : IProposalTabStateValues &
    // ICountryValues &
    // IStateValues &
    // ISelectAllocationProps &
    // ISelectCountryProps &
    // ISelectStateProps &
    // IDetailsFromMap
    ) => {
    getAgreementTypeValues(
      this.state.LandAllocatedToId,
      event.target.value
    ).then(res => {
      this.setState({
        ...this.state,
        AgreementTypeId:0,
        AllocationName: this.state.selectAllocationTypeValues
          .filter(
            (x: IAllocationValues) => x.AllocationId === event.target.value
          )
          .map((x: IAllocationValues) => x.AllocationName)[0],

        AllocationSubTypeId: event.target.value,

        LandAllocationId:
          this.state.selectAllocationTypeValues
            .filter(
              (x: IAllocationValues) => x.AllocationId === event.target.value
            )
            .map((x: IAllocationValues) => x.AllocationName)[0] === "Sale"
            ? 1
            : 0,

        agreementTypeValues: res.objAgreementTypesList
      });
    });
  };

  public handleAllocationChange1 = (event: any
    // , values: IProposalTabStateValues &
    // ICountryValues &
    // IStateValues &
    // ISelectAllocationProps &
    // ISelectCountryProps &
    // ISelectStateProps &
    // IDetailsFromMap
    ) => {
    getAgreementTypeValues(
      this.state.LandAllocatedToId,
      event.target.value
    ).then(res => {
      this.setState({
        ...this.state,
        AgreementTypeId:0,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
          (x: ISearchValues) => {
            return {
              ...x,
              AgreementTypeId:0,
              AllocationSubTypeId: event.target.value,
              AllocationTypeName: this.state.selectAllocationTypeValues
                .filter(
                  (y: IAllocationValues) =>
                    y.AllocationId === event.target.value
                )
                .map((y: IAllocationValues) => y.AllocationName)[0]
            };
          }
        ),
        // AllocationId: event.target.value,

        AllocationName: this.state.selectAllocationTypeValues
          .filter(
            (x: IAllocationValues) => x.AllocationId === event.target.value
          )
          .map((x: IAllocationValues) => x.AllocationName)[0],
        agreementTypeValues: res.objAgreementTypesList
      });
    });
  };

  public onHandleSubmit = (event: any) => {
    // tslint:disable-next-line:no-console
     this.setState({...this.state, buttonDisable4: true});
  //  getDocumentTypeList2(event.landAllocatedTo === "1"? 1:2, 1).then(res => {
  //   this.setState({
  //     ...this.state,
  //     documentList2: this.state.documentList.filter(
  //       (y: IDocumentPropValues) =>
  //         res.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
  //     )
  //   });
  // })
  if(true){
    try{
      if (loader) {
        loader.style.display = "block";
      }

      const ProjectRules =  this.state.projectValues.filter((y: IMileStoneDropDownValues) =>
      event.projectTypes.find((x: string) => x === y.RuleName)
    ).map((x:IMileStoneDropDownValues) => x.RuleId).join(',')
    CompleteDetailsToDB(event,ProjectRules,this.state.authorisedPersonValues
      .map((x:IAuthorizedPersonValues) => x.authImage)[0]).then(res => {
    
      this.setState({
        ...this.state,
        LandAllocationAllValues: event,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => {
          return (
            {...x,
              // tslint:disable-next-line:object-literal-sort-keys
        LandAllocationTypeId: event.LandAllocationId,
        // tslint:disable-next-line:object-literal-sort-keys
        LandAllocationType: event.LandAllocationTypeName,
        AvailableLandArea:event.AvailableLandArea,
        AvailbleLandAreaUnits:event.UnitId,
        TenurePeriodId: event.Number,
        LeaseAmountperAcre: event.LeaseAmount,
        LeaseStartDate: event.LeaseStartDate,
        LeaseEndDate: event.LeaseEndDate,
        ProjectTitle: res.TotalRecords.AggrementName,
        ProjPurpose: res.TotalRecords.AggrementPurpose,
        TotalLandCost: res.TotalRecords.TotalLandCost,
        // tslint:disable-next-line:object-literal-sort-keys
        AmountPaid: res.TotalRecords.AmountPaid,
        AmountToBePaid: res.TotalRecords.AmountToBePaid,
        RegisteredOrNot:res.TotalRecords.RegisteredOrNot,
        ProjDescription: res.TotalRecords.AggrementDescription,
        TownshipId: res.TotalRecords.TownshipId,
        TownshipName:this.state.selectThemeCityTypeValues
        .filter((y:ITownshipValues) => y.TownshipId === event.TownshipId)
        .map((z:ITownshipValues) => z.TownshipName)[0],
       
        ProjectRules: event.projectRules,
       
       
        GOMDetails: res.TotalRecords.GOMDetails !== null &&  res.TotalRecords.GOMDetails.length !== 0? 
        res.TotalRecords.GOMDetails.map((y:any, index: number) => (  {
          AddGoValueClickCount: index,
          GoNumber: y.GOMNumber,
          id:index,
          // tslint:disable-next-line:object-literal-sort-keys
          GoDate: y.GOMDate !== ""? moment(y.GOMDate).format('YYYY-MM-DD'): '',
        })) : [
          {
            AddGoValueClickCount:0,
            GoNumber: "",
            id:0,
            // tslint:disable-next-line:object-literal-sort-keys
            GoDate: "",
          }
        ],

        // event.ProjectDetailsArray,
       
        TotalAmount: event.TotalLeaseAmount,
        InitialAllocation: event.InitialAllocation,
  
        InitialAllocationLandSize: event.InitialAllocationLandSize,
        InitialAllocationLandSizeType: event.initialUnitId,
       // LeaseTenure: event.leaseTenure,
    
       
      
        RequiredLandArea: event.RequiredLandSize
        
            }
          )
        }),
        // tslint:disable-next-line:object-literal-sort-keys
        AvailableLandArea: event.AvailableLandArea,
        GoDate: event.GoDate,
        GoNumber: event.GoNumber,
        // LandAllocationAllValues: [
        //   ...this.state.LandAllocationAllValues,
        //   ...event
        // ],
        LeaseAmountPerAcre: event.LeaseAmount,
        LeaseEndDate: event.LeaseEndDate,
        LeaseStartDate: event.LeaseStartDate,
        LeaseTenure: event.Number,
        ProjectDescription: event.ProjectDescription,
        ProjectName: event.ProjectName,
        ProjectPurpose: event.ProjectPurpose,
        RequiredLandSize: event.RequiredLandSize,
        projectValues: event.projectValues,
  
        SubmitValues: {...this.state.SubmitValues,
            LandAllocationTypeId: event.LandAllocationId,
        // tslint:disable-next-line:object-literal-sort-keys
        LandAllocationType: event.LandAllocationTypeName,
        AvailableLandArea:event.AvailableLandArea,
        AvailbleLandAreaUnits:event.UnitId,
        LeaseTenure: event.Number,
        LeaseAmount: event.LeaseAmount,
        LeaseStartDate: event.LeaseStartDate,
        LeaseEndDate: event.LeaseEndDate,
        TotalLandCost: event.TotalLandCost,
        AmountPaid:event.AmountPaid,
        AmountToBePaid: event.AmountToBePaid,
        registerOrNot: event.registerOrNot === "1"? true : false,

        InitialAllocationSizeInAcres: event.InitialAllocationSizeInAcres,


        ProjectTitle: event.ProjectName,
        ProjPurpose: event.ProjectPurpose,
       
        ProjDescription: event.ProjectDescription,
        // TownshipName:this.state.selectThemeCityTypeValues
        // .filter((y:ITownshipValues) => y.TownshipId === event.TownshipId)
        // .map((z:ITownshipValues) => z.TownshipName)[0],
       
        ProjectRules: event.projectRules,
       
       
        // GOMnumber: event.GoNumber,
        // GOMdate: event.GoDate,
        ProjectDetailsArray:event.ProjectDetailsArray,

        TotalAmount: event.TotalLeaseAmount,
        InitialAllocation: event.InitialAllocation,
  
        InitialAllocationLandSize: event.InitialAllocationLandSize,
        InitialAllocationLandSizeType: event.initialUnitId,
       // LeaseTenure: event.leaseTenure,
    
       
       RequiredLandSizeBeforeAllocation: event.RequiredLandSizeBeforeAllocation,
        RequiredLandArea: event.RequiredLandSize,
        TownshipId: this.state.TownshipId,
        projectValues:event.projectValues,
        projectTypes:event.projectTypes,
        MileStoneArray: event.MileStoneArray
        
          }
        ,
        // tslint:disable-next-line:object-literal-sort-keys
  
        activeStep: this.state.activeStep + 1,
        draftActiveStep: this.state.draftActiveStep + 1
      })
      if (loader) {
        loader.style.display = "none";
      }

    })
  }
  catch(err) {
      // tslint:disable-next-line:no-console
      console.log(err)
      if (loader) {
        loader.style.display = "block";
      }
      this.setState({...this.state, buttonDisable4: false})
    }

  }

   
  };

  public onHandleSubmit1 = (event: any) => {
    
    this.setState({...this.state, buttonDisable4: true});
    if(true){
try{
  if (loader) {
    loader.style.display = "block";
  }
  const ProjectRules =  this.state.projectValues.filter((y: IMileStoneDropDownValues) =>
      event.projectTypes.find((x: string) => x === y.RuleName)
    ).map((x:IMileStoneDropDownValues) => x.RuleId).join(',')
    CompleteDetailsToDB(event,ProjectRules,this.state.authorisedPersonValues
      .map((x:IAuthorizedPersonValues) => x.authImage)[0]
      ).then(res => {
    this.setState({
      ...this.state,
      LandAllocationAllValues: event,
      SubmitValues: { ...this.state.SubmitValues,

        LandAllocationTypeId: event.LandAllocationId,
        // tslint:disable-next-line:object-literal-sort-keys
        LandAllocationType: event.LandAllocationTypeName,
        AvailableLandArea:event.AvailableLandArea,
        AvailbleLandAreaUnits:event.UnitId,
        LeaseTenure: event.Number,
        LeaseAmount: event.LeaseAmount,
        LeaseStartDate: event.LeaseStartDate,
        LeaseEndDate: event.LeaseEndDate,
        TotalLandCost: event.TotalLandCost,
        AmountPaid:event.AmountPaid,
        AmountToBePaid: event.AmountToBePaid,
        registerOrNot: event.registerOrNot === "1"? true : false,

        InitialAllocationSizeInAcres: event.InitialAllocationSizeInAcres,


        ProjectTitle: event.ProjectName,
        ProjPurpose: event.ProjectPurpose,
       
        ProjDescription: event.ProjectDescription,
        // TownshipName:this.state.selectThemeCityTypeValues
        // .filter((y:ITownshipValues) => y.TownshipId === event.TownshipId)
        // .map((z:ITownshipValues) => z.TownshipName)[0],
       
        ProjectRules: event.projectRules,
       
       
        // GOMnumber: event.GoNumber,
        // GOMdate: event.GoDate,
        ProjectDetailsArray:event.ProjectDetailsArray,

        TotalAmount: event.TotalLeaseAmount,
        InitialAllocation: event.InitialAllocation,
  
        InitialAllocationLandSize: event.InitialAllocationLandSize,
        InitialAllocationLandSizeType: event.initialUnitId,
       // LeaseTenure: event.leaseTenure,
    
       
       RequiredLandSizeBeforeAllocation: event.RequiredLandSizeBeforeAllocation,
        RequiredLandArea: event.RequiredLandSize,
        TownshipId: this.state.TownshipId,
        projectValues:event.projectValues,
        projectTypes:event.projectTypes,
        MileStoneArray: event.MileStoneArray,

            TenurePeriodId: event.Number,          
            RequiredLandSize: event.RequiredLandSize,
          
           

      },
      // tslint:disable-next-line:object-literal-sort-keys
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => ({
          ...x,
          AvailableLandArea: event.AvailableLandArea,
          LandAllocationTypeId: event.LandAllocationId,
          // GOMdate: event.GoDate,
          // GoNumber: event.GoNumber,
           // tslint:disable-next-line:object-literal-sort-keys
           GOMDetails: res.TotalRecords.GOMDetails !== null &&  res.TotalRecords.GOMDetails.length !== 0? 
          res.TotalRecords.GOMDetails.map((y:any, index: number) => (  {
            AddGoValueClickCount: index,
            GoNumber: y.GOMNumber,
            id:index,
            // tslint:disable-next-line:object-literal-sort-keys
            GoDate: y.GOMDate !== ""? moment(y.GOMDate).format('YYYY-MM-DD'): '',
          })) : [
            {
              AddGoValueClickCount:0,
              GoNumber: "",
              id:0,
              // tslint:disable-next-line:object-literal-sort-keys
              GoDate: "",
            }
          ],

          // event.ProjectDetailsArray,

          // LandAllocationAllValues: [
          //   ...this.state.LandAllocationAllValues,
          //   ...event
          // ],
          TotalLandCost: res.TotalRecords.TotalLandCost,
          // tslint:disable-next-line:object-literal-sort-keys
          AmountPaid: res.TotalRecords.AmountPaid,
          AmountToBePaid: res.TotalRecords.AmountToBePaid,
          RegisteredOrNot:res.TotalRecords.RegisteredOrNot,
          LeaseAmountperAcre: event.LeaseAmount,
          LeaseEndDate: this.state.LeaseEndDate,
          LeaseStartDate: event.LeaseStartDate,
          LeaseTenure: event.Number,
          ProjDescription: event.ProjectDescription,
          ProjectName: event.ProjectName,
          ProjectPurpose: event.ProjectPurpose,
          RequiredLandArea: event.RequiredLandSize,
          RequiredLandSizeBeforeAllocation: event.RequiredLandSizeBeforeAllocation,
          projectValues: event.projectValues,

        })
      ),

      activeStep: this.state.activeStep + 1,
      draftActiveStep: this.state.draftActiveStep + 1
    })
    if (loader) {
      loader.style.display = "none";
    }

  })
}

catch(err){
    // tslint:disable-next-line:no-console
    console.log(err)
    if (loader) {
      loader.style.display = "none";
    }
    this.setState({...this.state, buttonDisable4: false})
  }
}
  
  };

  // public handleLandSubmit = (event: any) => {
  //   // tslint:disable-next-line:no-console
  //   console.log(event);
  //   CompleteDetailsToDB(event)
  //     .then(res => {
  //       this.setState({ ...this.state, LandAllocationAllValues: event });
  //     })
  //     .catch();
  // };

  public onDeleteClick = (id: number) => {
    // tslint:disable-next-line:no-console
    this.setState({
      ...this.state,
      AddClickCount: this.state.AddClickCount - 1,
      WitnessDetailsFormArray: remove(id, this.state.WitnessDetailsFormArray)
    });
  };

  public onDeleteClickReg = (id: number) => {
    // tslint:disable-next-line:no-console
    this.setState({
      ...this.state,
      AddClickCount: this.state.AddClickCount - 1,
      OwnershipArray: remove(id, this.state.OwnershipArray),
  
    });
  };

  public onDeleteClickRegProp = (id: number) => {
    // tslint:disable-next-line:no-console
    this.setState({
      ...this.state,
      AddClickCount: this.state.AddClickCount - 1,
      FloorArray: remove(id, this.state.FloorArray),
  
    });
  };
  
  public onMilestoneDeleteClick = (event: any) => {
    this.setState({
      ...this.state,
      AddMilestoneClickCount: this.state.AddMilestoneClickCount - 1,
      MileStoneArray: remove(event, this.state.MileStoneArray)
    });
  };
  public onUploadPopUpClose = () => {
    this.setState({ ...this.state, uploadPopUpOpen: false });
  };
  

  public onHandleAddClickRegProp = (index: number) =>
   
    {
    
      this.setState({
        ...this.state,
        AddClickCount: this.state.AddClickCount + 1,
        FloorArray: [
          ...this.state.FloorArray,
          {
          
            AddClickCount: this.state.AddClickCount + 1,
            BuildingClassification: 0,
            FirmName: "",
            FloorNumber: 0,
             NatureOfUsage: 0,
             Occupancy:0,
            OccupantName: "",
            // tslint:disable-next-line:object-literal-sort-keys
            ConstructionDate: "",
            EffectiveFromDate: "",
            UnstructeredLand: 0,
            Length: "",
            taxAmount:0,
            Breadth: "",
            PlinthArea: "",
            BuildingPermissionNo: "",
            BuildingPermissionDate: "",
            PlinthAreaInBuildingPlan: "",
            id: this.state.AddClickCount + 1,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues:this.state.selectOccupancyValues,

            selectClassificationValues: this.state.selectClassificationValues,
            selectNatUsageValues:this.state.selectNatUsageValues
          }
        ]
        // witnessArray: [
        //   ...this.state.witnessArray,
        //   ...this.state.WitnessDetailsFormArray
        // ]
      });
      // tslint:disable-next-line:no-console
    };
  public onHandleAddClickReg = (index: number) =>
   
    {
    
      this.setState({
        ...this.state,
        AddClickCount: this.state.AddClickCount + 1,
        OwnershipArray: [
          ...this.state.OwnershipArray,
          {
            AddClickCount: this.state.AddClickCount + 1,
            OwnerName: "",
            // tslint:disable-next-line:object-literal-sort-keys
            EmailAddress: "",
            MobileNo: "",
            Guardian: "",
            Gender: 0,
            GuardianReg:0,
            selectGenderValues: this.state.selectGenderValues,
            selectGuardianValues:this.state.selectGuardianValues,
            id: this.state.AddClickCount + 1
          }
        ]
        // witnessArray: [
        //   ...this.state.witnessArray,
        //   ...this.state.WitnessDetailsFormArray
        // ]
      });
      // tslint:disable-next-line:no-console
    };
  public onHandleAddClick = (index: number) =>
   
    {
    
      this.setState({
        ...this.state,
        AddClickCount: this.state.AddClickCount + 1,
        WitnessDetailsFormArray: [
          ...this.state.WitnessDetailsFormArray,
          {
            AddClickCount: this.state.AddClickCount + 1,
            RelationDateOfBirth: '',
            RelationName: "",
            RelationType: 0,
            RelationTypeArray: this.state.RelationTypeArray,
            WitnessName: "",
            id: this.state.AddClickCount + 1
          }
        ]
        // witnessArray: [
        //   ...this.state.witnessArray,
        //   ...this.state.WitnessDetailsFormArray
        // ]
      });
      // tslint:disable-next-line:no-console
    };

  public handleUploadImageClick = (event: any,values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {
   
    const file = event.target.files[0];
    const reader = new FileReader();


    reader.onloadend = () => {
      this.setState({
        ...this.state,
        authImage: reader.result,
        authorisedPersonValues: this.state.authorisedPersonValues.map((x:any) => {
          return {
            ...x,
            authImage: reader.result
          };
        }),
        // tslint:disable-next-line:object-literal-sort-keys
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
          (x: ISearchValues) => ({...x,AuthPhotoIdPath: reader.result })
        )
      });
    };
    if (file) {
      const fileSize = file.size
      if(fileSize > 51200){
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,
        authImage: reader.result,
          // tslint:disable-next-line:object-literal-sort-keys
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => ({...x,AuthPhotoIdPath: reader.result })
          ),
        authorisedPersonValues: this.state.authorisedPersonValues.map((x:any) => {
          return {
            ...x,
            AuthRelationTypeId: values.AuthRelationTypeId,

            authImage: reader.result,
            // tslint:disable-next-line:object-literal-sort-keys
            HouseNo: values.HouseNo , 
            StreetName: values.StreetName,
            // tslint:disable-next-line:object-literal-sort-keys
            AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
            LastName:values.LastName,
            MobileNumber:values.MobileNumber,
            PhotoIdNumber:values.PhotoIdNumber ,
            PhotoIdType:values.PhotoIdType,
          // tslint:disable-next-line:object-literal-sort-keys
          FirstName: values.FirstName,
          AuthDateOfBirth:values.AuthDateOfBirth,
          RelationName:values.RelationName
          };
        }),
      });
    }
    else {
      this.setState({...this.state,
        authImage: "",
         imageWarningPopUp: true,
          // tslint:disable-next-line:object-literal-sort-keys
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => ({...x,AuthPhotoIdPath: '' })
          ),
        authorisedPersonValues: this.state.authorisedPersonValues.map((x:any) => {
          return {
            ...x,
            AuthRelationTypeId: values.AuthRelationTypeId,

            authImage: "",
            // tslint:disable-next-line:object-literal-sort-keys
            HouseNo: values.HouseNo , 
            StreetName: values.StreetName,
            // tslint:disable-next-line:object-literal-sort-keys
            AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
            LastName:values.LastName,
            MobileNumber:values.MobileNumber,
            PhotoIdNumber:values.PhotoIdNumber ,
            PhotoIdType:values.PhotoIdType,
          // tslint:disable-next-line:object-literal-sort-keys
          FirstName: values.FirstName,
          AuthDateOfBirth:values.AuthDateOfBirth,
          RelationName:values.RelationName
          };
        }),

      
      })
    }
   } else {
      this.setState({
        ...this.state, 
        authImage: "",
          // tslint:disable-next-line:object-literal-sort-keys
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => ({...x,AuthPhotoIdPath: '' })
          ),
        authorisedPersonValues: this.state.authorisedPersonValues.map((x:any) => {
          return {
            ...x,
            AuthRelationTypeId: values.AuthRelationTypeId,

            authImage: "",
            // tslint:disable-next-line:object-literal-sort-keys
            HouseNo: values.HouseNo , 
            StreetName: values.StreetName,
            // tslint:disable-next-line:object-literal-sort-keys
            AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
            LastName:values.LastName,
            MobileNumber:values.MobileNumber,
            PhotoIdNumber:values.PhotoIdNumber ,
            PhotoIdType:values.PhotoIdType,
          // tslint:disable-next-line:object-literal-sort-keys
          FirstName: values.FirstName,
          AuthDateOfBirth:values.AuthDateOfBirth,
          RelationName:values.RelationName
          };
        }),
      });
    }
  };
  public handleMultiSelectAminityChange = (event:any,values:any) => {
    this.setState({
      aminityTypes: event.target.value,
      
      // tslint:disable-next-line:object-literal-sort-keys
      North:values.North,
      TotalTax:values.TotalTax,
      East: values.East,
     West: values.West,
     South: values.South,
     District: values.District,
      Corporation:values.Corporation,
     Mandal: values.Mandal,
     Village: values.Village,
     TownShip:values.TownShip,
     Sector: values.Sector,
     Colony: values.Colony,
     Locality: values.Locality,
     ZoneNo:values.ZoneNo,
       WardNo: values.WardNo,
     Block: values.Block,
     Street: values.Street,
     Enumerationblock: values.Enumerationblock,
     PlotNo: values.PlotNo,
     ElectionWard: values.ElectionWard,
        DoorNo: values.DoorNo,
     Pincode: values.Pincode,
     activeStep:values.activeStep,
     CertificateNumber: values.CertificateNumber,
     OccupancyCertificateDate: values.OccupancyCertificateDate,
     ExtentOfSite: values.ExtentOfSite,
     EnumMasterID:values.EnumMasterID,
     EnumMasterDesc: values.EnumMasterDesc,
     roofId:values.roofId,
     wallId: values.wallId,
     woodId: values.woodId,
     aminityValues1:this.state.aminityValues1,
     selectwallValues: this.state.selectwallValues,
     selectwoodValues: this.state.selectwoodValues,
     selectroofValues: this.state.selectroofValues,
     selectfloorValues:this.state.selectfloorValues,
     ApplicationId:values.ApplicationId,
     FloorArray:this.state.FloorArray
    
  })
}
  public handleLandDetailsChangeClick = (event: any,values:   ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IDetailsFromMap) => {
    this.setState({
      ...this.state,
      LandAllocationId: event.target.value,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
           
            LandAllocationTypeId:event.target.value,
            // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationType: this.state.selectLandAllocationTypeValues
            .filter((y:ILandAllocationValues) => y.LandAllocationId === event.target.value)
            .map((z:ILandAllocationValues) => z.LandAllocationTypeName)[0],
            AvailableLandArea: values.AvailableLandArea,
            AvailbleLandAreaUnits:values.UnitId,
            TenurePeriodId: values.Number,
            LeaseAmountperAcre: values.LeaseAmount,
            LeaseStartDate: values.LeaseStartDate,
            LeaseEndDate: values.LeaseEndDate,
            ProjectTitle: values.ProjectName,
            ProjPurpose: values.ProjectPurpose,
           
            ProjDescription: values.ProjectDescription,
            TownshipId: this.state.TownshipId,
            TownshipName:values.TownshipName,
           
            ProjectRules: values.projectRules,
           
           
            GOMnumber: values.GoNumber,
            GOMdate: values.GoDate,
           
            TotalAmount: values.TotalLeaseAmount,
            InitialAllocation: values.InitialAllocation,

            InitialAllocationLandSize: values.InitialAllocationLandSize,
            InitialAllocationLandSizeType: values.initialUnitId,
           // LeaseTenure: values.Number,
        
           
          
            RequiredLandArea: values.RequiredLandSize
          };
        }
      )
    });
  };

  public onHandleClose = () => {
    this.setState({
      ...this.state,
      // tslint:disable-next-line:object-literal-sort-keys
      authImage: '',
      captureFingerPopUp: false,
      dialogExpandOpen: false,
      // tslint:disable-next-line:object-literal-sort-keys
      WarningPopUp:false,
      dialogOpen: false,
      forwardOpen: false,
      imageWarningPopUp: false,
      authorisedPersonValues: this.state.authorisedPersonValues
      .map((x:IAuthorizedPersonValues) => ({...x,authImage: '' })),
      open: false,
      reviewOpen: false,
      // tslint:disable-next-line:object-literal-sort-keys
      ConditionTypeId: 0,
      PopUpOpen: false,
      ProjectTypeId: 0,
      RuleSourceTypeId: 0,
      maxValue: 0,
      minValue: 0,
      ruleName: "",
      value: 0,
      successPopUp: false,
      viewBillPopUpOpen: false,
      assessmentReviewPopUp:false
    });
  };

  public onReset = () => {
    this.setState({
      images: ""
    });
  };

  public onHandleMileStoneAddClick = (index: number) => {
    this.setState({
      ...this.state,
      AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
      MileStoneArray: [
        ...this.state.MileStoneArray,
        {
          AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
          LandRelease: "",
          RuleName: "",
          id: this.state.AddMilestoneClickCount + 1,
          // tslint:disable-next-line:object-literal-sort-keys
          RuleId: 0,
          DateOfCompletion: "",
          mileStoneValues: this.state.mileStoneValues,
          ProjectRuleTypes: [],
          ProjectTypeId: 0,
          ruleTypeValues: this.state.ruleTypeValues,
          sourceTypeValues: this.state.sourceTypeValues,
          RuleSourceTypeId: 0,
          ConditionTypeId: 0,
          ConditionTypeValues: this.state.ConditionTypeValues,
          projectValues: this.state.projectValues
        }
      ]
    });
   
  };

  public handlePopUpOpenClick = () => {
    this.setState({ ...this.state, PopUpOpen: true });
  };

  public handleNext = () => {
    this.setState({
      ...this.state,
      activeStep: this.state.activeStep + 1
    });
  };

  public handleBack = () => {
  

    const step = this.state.activeStep - 1;
    step < 0
      ? this.setState({ ...this.state, townshipWithId: false })
      : this.setState({
          ...this.state,
          activeStep: this.state.activeStep - 1,
          buttonDisable1: false ,
          buttonDisable2: false ,
          buttonDisable3: false ,
          buttonDisable4:false,
        });

    step < 0 && this.state.townshipWithId
      ? this.props.history.push(
          `/page/landAllocation/AllocationForm/proposalForm`
        )
      : step >= 0 && this.state.townshipWithId
      ? this.props.history.push(
          `/page/landAllocation/AllocationForm/proposalForm/${
            this.state.TownshipId
          }`
        )
      : this.setState({ ...this.state, 
        buttonDisable1: false ,
        buttonDisable2: false ,
        buttonDisable3: false ,
        buttonDisable4:false, });
  };

  public handleDraftBack = () => {
    const step = this.state.draftActiveStep - 1;
    step < 0
      ? this.setState({ ...this.state,
         draftWithId: false, 
      })
      : this.setState({
          ...this.state,
          buttonDisable1: false ,
          buttonDisable2: false ,
          buttonDisable3: false ,
          buttonDisable4:false,

          draftActiveStep: this.state.draftActiveStep - 1,

        });

    step < 0 && this.state.draftWithId
      ? this.props.history.push(
          `/page/landAllocation/draftApplication/proposalForm/${
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.ApplicationId
            )[0]
          }`
        )
      : step >= 0 && this.state.draftWithId
      ? this.props.history.push(
          `/page/landAllocation/draftApplication/proposalForm/${
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.ApplicationId
            )[0]
          }`
        )
      : this.setState({ ...this.state,buttonDisable1: false,
        buttonDisable2: false ,
          buttonDisable3: false ,
        buttonDisable4:false  });
  };
  public handleReset = () => {
    this.setState({
      activeStep : 0
    });
  };

  // public onHandleSearch = (event: any) => {
  //   // tslint:disable-next-line:no-console
  //   console.log(event);
  //   // this.setState({ ...this.state, searchInput: event.target.value });
  // };

  public handleEditRuleTypeSubmit = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event);
  };
  public onHandleUploadSubmit = (event: any) => {
  
   
    if(  
      (this.state.documentList2
      .map((x:IDocumentPropValues) => isNull(x.FileType)? {...x, FileType: ""} : x )
      .filter((x:IDocumentPropValues) =>  x.FileType === "").length === 0
       &&
       this.state.documentList2
       .filter((x:IDocumentPropValues) => x.buttonUpload === true).length === 0
       &&
      event.UserId !== 0)){
  
       
        this.setState({
          ...this.state,
          SubmitValues:{...this.state.SubmitValues,
            Comments: this.state.Comments,
            Uploadimages: this.state.Uploadimages,
            documentList2: this.state.documentList2,

          },
          nextUserId: event.UserId   
        ,

          uploadPopUpOpen:true,
          // WitnessDetailsFormArray: event,
          // tslint:disable-next-line:object-literal-sort-keys
          // activeStep: this.state.activeStep + 1
        });
  
     
    }
    else {
      this.setState({...this.state,WarningPopUp:
       true })
    }
  };
  public onHandleSubmitClose = () => {
    this.setState({ ...this.state, submitPopUp: false });
  };

  public handleRedirectToDashboardClick=() => {
  //   localStorage.removeItem("userDetails");
  //   localStorage.removeItem(`${this.state.enterApplicationId}`);
  //   localStorage.removeItem("0");
  //   localStorage.removeItem("requestIdStore");

    this.props.history.push("/page/dashboard");
  }
  public onHandleFinalSubmit = (event: any) => {
    if(this.state.check1 === true){
    postSubmitProposal(event, this.state.projectValues, this.state.nextUserId)
      .then(res => {
        this.setState({
          ...this.state,
          SuccesPopUpOpen: true,
          pdfPath: res.TotalRecords && res.TotalRecords.PDFPath,
          submitPopUp: false,
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
    }
  };

  
  public onHandleSaveAsDraft = async(event: any) => {
     if(this.state.documentList2
      .map((x:IDocumentPropValues) => isNull(x.FileType)? {...x, FileType: ""} : x )
      .filter((x:IDocumentPropValues) =>  x.FileType === "").length === 0
       &&
       this.state.documentList2
       .filter((x:IDocumentPropValues) => x.buttonUpload === true).length === 0
       )
       {
   try {
   const res = await postSaveAsDraftValues(event,this.state.projectValues,this.state.nextUserId)
     const res1 =await getDraftApplications();
        this.setState({ ...this.state, 
          count: res ? res1.aaData.length : 0,
          draftApplicationList: res ? res1.aaData: [],
          submitPopUp: false ,
        });
        this.props.history.push('/page/landAllocation/draftApplication');
        // tslint:disable-next-line:no-console
       
    }
    catch(err){
      // tslint:disable-next-line:no-console
      console.log(err);
    }
    }
    else {
      this.setState({...this.state, WarningPopUp: true})
    }
  };

  public onHandleAuthorisedSaveandContinue = (event: any) => {
 
     this.setState({...this.state, buttonDisable2: true,
     });
 if(true){
   try{
    if (loader) {
      loader.style.display = "block";
    }
    postAuthorisedSaveContinue(
      event,
      this.state.authorisedPersonValues.map((x:IAuthorizedPersonValues) => x.authImage)[0],
     this.state.StreetName,
     this.state.HouseNo,
     
    )
      .then(res => {
       
        this.setState({
          ...this.state,

          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => ({
              ...x,
              AuthAddress1: res.TotalRecords.LesseDetailsList[0].Address1,
              AuthAddress2: res.TotalRecords.LesseDetailsList[0].Address2,
              AuthEmailId: res.TotalRecords.LesseDetailsList[0].Email,
              AuthPersonName1: res.TotalRecords.LesseDetailsList[0].FirstName,
              AuthPersonName2:res.TotalRecords.LesseDetailsList[0].LastName,
              AuthPhoneNumber:res.TotalRecords.LesseDetailsList[0].MobileNumber,
              AuthPhotoIdNumber: res.TotalRecords.LesseDetailsList[0].PhotoIdNumber,
              AuthPhotoIdPath:  `http://${res.TotalRecords.LesseDetailsList[0].PhotoIdPath}`,
              AuthPhotoIdType:  this.state.photoIdTypeArray
              .filter((z:IPhotoIdTypeValues) =>
               z.PhotoIdType === res.TotalRecords.LesseDetailsList[0].PhotoIdType)
              .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
              // tslint:disable-next-line:object-literal-sort-keys
              AuthDateOfBirth:moment(res.TotalRecords.LesseDetailsList[0].DateOfBirth)
              .format(
                "YYYY-MM-DD"
              ) ,
              RelationType: 0,
              RelationName:res.TotalRecords.LesseDetailsList[0].RelationName , 
              PhotoIdTypeName:  this.state.photoIdTypeArray
              .filter((z:IPhotoIdTypeValues) =>
               z.PhotoIdType === res.TotalRecords.LesseDetailsList[0].PhotoIdType)
              .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
             
              RelationTypeName: this.state.authorisedPersonValues
              .map((y:IAuthorizedPersonValues) => y.RelationTypeName)[0],
             
            })
          ),
          activeStep: this.state.activeStep + 1,

          authorisedPersonValues: this.state.authorisedPersonValues.map((x:IAuthorizedPersonValues) => 
           (  {
              AuthorisedPersonEmailAddress:res.TotalRecords.LesseDetailsList[0].Email,
              // tslint:disable-next-line:object-literal-sort-keys
              AuthDateOfBirth: moment(res.TotalRecords.LesseDetailsList[0].DateOfBirth)
              .format(
                "YYYY-MM-DD"
              ) ,
              FirstName: res.TotalRecords.LesseDetailsList[0].FirstName,
              HouseNo:res.TotalRecords.LesseDetailsList[0].Address2,
              LastName:res.TotalRecords.LesseDetailsList[0].LastName,
              MobileNumber: res.TotalRecords.LesseDetailsList[0].MobileNumber,
              PhotoIdNumber: res.TotalRecords.LesseDetailsList[0].PhotoIdNumber,
              PhotoIdType: res.TotalRecords.LesseDetailsList[0].PhotoIdType,
              PhotoIdTypeName: res.TotalRecords.LesseDetailsList[0].PhotoIdType,
              RelationName: res.TotalRecords.LesseDetailsList[0].RelationName,
              AuthRelationTypeId:res.TotalRecords.LesseDetailsList[0].RelationTypeId,
              RelationTypeName: x.RelationTypeName,
              StreetName:res.TotalRecords.LesseDetailsList[0].Address2,
              authImage: `http://${res.TotalRecords.LesseDetailsList[0].PhotoIdPath}`,
            })
          ),
          // tslint:disable-next-line:object-literal-sort-keys
          SubmitValues: 
          {...this.state.SubmitValues,
              
              AuthAddress1: res.TotalRecords.LesseDetailsList[0].Address1,
              AuthAddress2: res.TotalRecords.LesseDetailsList[0].Address2,
              AuthEmailId: res.TotalRecords.LesseDetailsList[0].Email,
              AuthPersonName1: res.TotalRecords.LesseDetailsList[0].FirstName,
              AuthPersonName2:res.TotalRecords.LesseDetailsList[0].LastName,
              AuthPhoneNumber:res.TotalRecords.LesseDetailsList[0].MobileNumber,
              AuthPhotoIdNumber: res.TotalRecords.LesseDetailsList[0].PhotoIdNumber,
              AuthPhotoIdPath:  `http://${res.TotalRecords.LesseDetailsList[0].PhotoIdPath}`,
              AuthPhotoIdType: this.state.photoIdTypeArray
              .filter((z:IPhotoIdTypeValues) =>
               z.PhotoIdType === res.TotalRecords.LesseDetailsList[0].PhotoIdType)
              .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
              // tslint:disable-next-line:object-literal-sort-keys
              AuthDateOfBirth:moment(res.TotalRecords.LesseDetailsList[0].DateOfBirth)
              .format(
                "YYYY-MM-DD"
              ) ,
              RelationName:res.TotalRecords.LesseDetailsList[0].RelationName , 
              PhotoIdTypeName: res.TotalRecords.LesseDetailsList[0].PhotoIdType,
             
              RelationTypeName: this.state.RelationTypeArray
              .filter((y:IRelationTypeValues) => 
              y.RelationTypeId === res.TotalRecords.LesseDetailsList[0]
              .RelationTypeId).map((y:IRelationTypeValues) => y.RelationType)[0],
              TownshipId: this.state.TownshipId

              }
           
            
            
          ,
          draftActiveStep: this.state.draftActiveStep + 1
        })
        if (loader != null) {
          loader.style.display = "none";
        }
      })
     
    }
      catch(err ){
        
      // tslint:disable-next-line:no-console
      console.log(err)
      if (loader != null) {
        loader.style.display = "none";
      }
      this.setState({...this.state, buttonDisable2: false})
        }
    
  }
  };

  public handleLeaseStartDateChange = (date: any,values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IDetailsFromMap ) => {
      
    const targetDate = date.target.value
    const year = getYear(targetDate);
    const month = getMonth(targetDate);
    const day=getDate(targetDate);

  
    // // tslint:disable-next-line:no-console
    // const targetYear = parseInt(targetDate[0], 10) + this.state.Number;
    // const targetDay = parseInt(targetDate[2], 10) - 1;
    // const targetMonth = parseInt(targetDate[1], 10);

   
    const leaseEndDate = moment(new Date(year +this.state.Number ,month,day-1)).format("YYYY-MM-DD")

  

    this.setState({
      ...this.state,
      LeaseEndDate: leaseEndDate,
      LeaseStartDate: date.target.value,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          // const targetDate1 = date.target.value.split("-");
          // // tslint:disable-next-line:no-console
          // const targetYear1 = parseInt(targetDate1[0], 10) + 
          // this.state.ProposalFormApplicationIdValues
          // .map((y:ISearchValues) => y.TenurePeriodId)[0];
          // const targetDay1 = parseInt(targetDate1[2], 10) - 1;
          // const targetMonth1 = parseInt(targetDate1[1], 10);
          const leaseEndDate1= moment(new Date(year + this.state.ProposalFormApplicationIdValues
            .map((y:ISearchValues) => y.TenurePeriodId)[0] ,month ,day )).format("YYYY-MM-DD")
          return {
            ...x,
 
          
            LeaseEndDate: leaseEndDate1,
            LeaseStartDate: date.target.value,
            LeaseTenure: values.Number,
          };
        }
      )
    });

  };

  public handleOrgPhoneNumberChange = (event:any, values: IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap  ) => {
    this.setState({...this.state, OrgPhoneNumber: event.target.value,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
         
          return {
            ...x,
           OrgPhoneNumber: event.target.value.toString()
          };
        }
      ) })
  }

  public onHandleOrganisationSaveandContinue = (
    event: IProposalTabStateValues &
      ISelectAllocationProps &
      ISelectLandAllocationProps &
      ISelectCountryProps &
      ISelectStateProps & IDetailsFromMap
  ) => {
  
this.setState({...this.state, buttonDisable1: true
})


const TypeOfallocationName = this.state.typesOfAllocationValues
.filter((y:ITypeOfAllocationValues) => y.TypeOfAllocationId === event.TypeOfAllocationId)
.map((y:ITypeOfAllocationValues) => y.TypeOfAllocationName)[0] 

const AgreementTypeName = this.state.agreementTypeValues
.filter((y:IAgreementValues) => y.AgreementId === event.AgreementTypeId)
.map((x:IAgreementValues) => x.AgreementName)[0]

const AllocationTypeName = this.state.selectAllocationTypeValues
.filter((y:IAllocationValues)=> y.AllocationId === event.AllocationSubTypeId)
.map((y:IAllocationValues) => y.AllocationName)[0]

if(true){
  try {
    if (loader) {
      loader.style.display = "block";
    }
    const Allocatedto = event.landAllocatedTo === "1" ? 1 : 2;
    getDocumentTypeList2(Allocatedto, 1).then(res => {
      this.setState({
        ...this.state,
        AllocationId: event.landAllocatedTo === "1" ? 1 : 2,

        Uploadimages: this.state.documentList.filter(
          (y: IDocumentPropValues) =>
          res.documents.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
          ),
        // UploadimagesCount: this.state.documentList.filter(
        //   (y: IDocumentPropValues) =>
        //     res.documents.find((x: IDocument2PropValues) => x.ProcessId === y.PhotoId))
        //     .map((x:any) => (
        //        {...x, [`image${x.PhotoId}`]: ""}
        //     )).length, 
          
          documentList2: this.state.documentList.filter(
            (y: IDocumentPropValues) =>
            res.documents.find((x: IDocument2PropValues) => x.Id === y.PhotoId)
            ),
            // tslint:disable-next-line:object-literal-sort-keys
           
      });
    }).then(() => 

    postSaveAndContinue(event)
      .then(res => {
      

        this.setState({
          enterApplicationId: res.TotalRecords.ApplicationId,
          // tslint:disable-next-line:object-literal-sort-keys
          HouseNoBuildingName: res.TotalRecords.OrganizationDetailsList[0].OrgAddress,
          OrgEmailAddress: res.TotalRecords.OrganizationDetailsList[0].OrgEmailId,
          OrgPhoneNumber: res.TotalRecords.OrganizationDetailsList[0].OrgPhoneNumber,
          OrganizationName:  res.TotalRecords.OrganizationDetailsList[0].OrgName,
          RegistrationNumber:res.TotalRecords.OrganizationDetailsList[0].OrgRegistrationNumber,
          StreetNameLocality: res.TotalRecords.OrganizationDetailsList[0].OrgAddress2,
          ZipCode: res.TotalRecords.OrganizationDetailsList[0].OrgZipCode,
          // tslint:disable-next-line:object-literal-sort-keys
          City:res.TotalRecords.OrganizationDetailsList[0].OrgCity,
          GSTNumber: res.TotalRecords.OrganizationDetailsList[0].GSTINNumber,
          StateId:res.TotalRecords.OrganizationDetailsList[0].OrgState,
          CountryId:res.TotalRecords.OrganizationDetailsList[0].OrgCountry,
          CountryName: this.state.selectCountryValues
          .filter((y: ICountryValues) => y.CountryId === res.TotalRecords.OrganizationDetailsList[0].OrgCountry)
          .map((y: ICountryValues) => y.CountryName)[0],
        
          StateName: this.state.selectStateValues
          .filter((y: IStateValues) => y.StateId === res.TotalRecords.OrganizationDetailsList[0].OrgState)
          .map((y: IStateValues) => y.StateName)[0],
        

          SubmitValues: 
              {...this.state.SubmitValues,
                OutOfAGC: this.state.OutOfAGC,
                WithInAGC:  this.state.WithInAGC,
                // tslint:disable-next-line:object-literal-sort-keys
                AllocationId: event.landAllocatedTo === "1" ? 1 : 2,
                // tslint:disable-next-line:object-literal-sort-keys
                AgreementName: AgreementTypeName,
               AllocationSubName: AllocationTypeName,
               TypeOfAllocationName:TypeOfallocationName  ,
               enterApplicationId: res.TotalRecords.ApplicationId,
               // tslint:disable-next-line:object-literal-sort-keys
               HouseNoBuildingName: res.TotalRecords.OrganizationDetailsList[0].OrgAddress,
               OrgEmailAddress: res.TotalRecords.OrganizationDetailsList[0].OrgEmailId,
               OrgPhoneNumber: res.TotalRecords.OrganizationDetailsList[0].OrgPhoneNumber,
               OrganizationName:  res.TotalRecords.OrganizationDetailsList[0].OrgName,
               RegistrationNumber:res.TotalRecords.OrganizationDetailsList[0].OrgRegistrationNumber,
               StreetNameLocality: res.TotalRecords.OrganizationDetailsList[0].OrgAddress2,
               ZipCode: res.TotalRecords.OrganizationDetailsList[0].OrgZipCode,
               // tslint:disable-next-line:object-literal-sort-keys
               City:res.TotalRecords.OrganizationDetailsList[0].OrgCity,
               GSTNumber: res.TotalRecords.OrganizationDetailsList[0].GSTINNumber,
               StateId:res.TotalRecords.OrganizationDetailsList[0].OrgState,
               CountryId:res.TotalRecords.OrganizationDetailsList[0].OrgCountry,
               CountryName: this.state.selectCountryValues
               .filter((y: ICountryValues) => y.CountryId === 
               res.TotalRecords.OrganizationDetailsList[0].OrgCountry)
               .map((y: ICountryValues) => y.CountryName)[0],
             
               StateName: this.state.selectStateValues
               .filter((y: IStateValues) => y.StateId === res.TotalRecords.OrganizationDetailsList[0].OrgState)
               .map((y: IStateValues) => y.StateName)[0],
               TownshipId: this.state.TownshipId

              }
            
            ,
          activeStep: this.state.activeStep + 1,
          draftActiveStep: this.state.draftActiveStep + 1,
         // buttonDisable1: false,

        })
        if (loader != null) {
          loader.style.display = "none";
        }
      })
    )
    }
      catch(err)
        {
          // tslint:disable-next-line:no-console
          console.log(err)
          if (loader != null) {
            loader.style.display = "none";
          }
          this.setState({...this.state, buttonDisable1: false})
        }
    }
  

  };

  public onHandleOrganisationSaveandContinue1 = (
    event: IProposalTabStateValues &
      ISelectAllocationProps &
      ISelectLandAllocationProps &
      ISelectCountryProps &
      ISelectStateProps & IDetailsFromMap
  ) => {
   
this.setState({...this.state,buttonDisable1: true
})

const TypeOfallocationName = this.state.typesOfAllocationValues.filter((y:ITypeOfAllocationValues) => y.TypeOfAllocationId === event.TypeOfAllocationId)
.map((y:ITypeOfAllocationValues) => y.TypeOfAllocationName)[0] 


const AllocationTypeName = this.state.selectAllocationTypeValues.filter((y:IAllocationValues)=> y.AllocationId === event.AllocationSubTypeId)
.map((y:IAllocationValues) => y.AllocationName)[0]

const AgreementTypeName = this.state.agreementTypeValues.filter((y:IAgreementValues) => y.AgreementId === event.AgreementTypeId)
.map((x:IAgreementValues) => x.AgreementName)[0]


    if(true){
      try {
        if (loader) {
          loader.style.display = "block";
        }

    postSaveAndContinue(event)
      .then(res => {

      //  controller.abort();

        this.setState({
          ...this.state,
          // tslint:disable-next-line:object-literal-sort-keys
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => ({
              ...x,
            
        
              OrgCountryName: this.state.selectCountryValues
              .filter((y: ICountryValues) => y.CountryId === res.TotalRecords.OrganizationDetailsList[0].OrgCountry)
              .map((y: ICountryValues) => y.CountryName)[0],
            
              OrgStateName: this.state.selectStateValues
              .filter((y: IStateValues) => y.StateId === res.TotalRecords.OrganizationDetailsList[0].OrgCountry)
              .map((y: IStateValues) => y.StateName)[0],
            
              // tslint:disable-next-line:object-literal-sort-keys
              OrgAddress1: res.TotalRecords.OrganizationDetailsList[0].OrgAddress,
              OrgEmailid: res.TotalRecords.OrganizationDetailsList[0].OrgEmailId,
              OrgPhoneNumber: res.TotalRecords.OrganizationDetailsList[0].OrgPhoneNumber,
              OrganiztionName:  res.TotalRecords.OrganizationDetailsList[0].OrgName,
              OrgRegistrationNumber:res.TotalRecords.OrganizationDetailsList[0].OrgRegistrationNumber,
              // tslint:disable-next-line:object-literal-sort-keys
              OrgAddress2: res.TotalRecords.OrganizationDetailsList[0].OrgAddress2,
              // tslint:disable-next-line:object-literal-sort-keys
              OrgCityName:res.TotalRecords.OrganizationDetailsList[0].OrgCity,
              OrgGST: res.TotalRecords.OrganizationDetailsList[0].GSTINNumber,
              OrgCountryId: res.TotalRecords.OrganizationDetailsList[0].OrgCountry
              ,
              OrgStateId :res.TotalRecords.OrganizationDetailsList[0].OrgState,
              OrgZipCode:res.TotalRecords.OrganizationDetailsList[0].OrgZipCode 
            })
          ),
          SubmitValues:{...this.state.SubmitValues,
            AllocationId: event.landAllocatedTo === "1" ? 1 : 2,
            OutOfAGC: this.state.OutOfAGC,
            WithInAGC:  this.state.WithInAGC,
              // tslint:disable-next-line:object-literal-sort-keys
              AgreementName: AgreementTypeName,
              AllocationSubName: AllocationTypeName,

              TypeOfAllocationName:TypeOfallocationName  ,
              enterApplicationId: res.TotalRecords.ApplicationId,
              // tslint:disable-next-line:object-literal-sort-keys
              HouseNoBuildingName: res.TotalRecords.OrganizationDetailsList[0].OrgAddress,
              OrgEmailAddress: res.TotalRecords.OrganizationDetailsList[0].OrgEmailId,
              OrgPhoneNumber: res.TotalRecords.OrganizationDetailsList[0].OrgPhoneNumber,
              OrganizationName:  res.TotalRecords.OrganizationDetailsList[0].OrgName,
              RegistrationNumber:res.TotalRecords.OrganizationDetailsList[0].OrgRegistrationNumber,
              StreetNameLocality: res.TotalRecords.OrganizationDetailsList[0].OrgAddress2,
              ZipCode: res.TotalRecords.OrganizationDetailsList[0].OrgZipCode,
              // tslint:disable-next-line:object-literal-sort-keys
              City:res.TotalRecords.OrganizationDetailsList[0].OrgCity,
              GSTNumber: res.TotalRecords.OrganizationDetailsList[0].GSTINNumber,
              StateId:res.TotalRecords.OrganizationDetailsList[0].OrgState,
              CountryId:res.TotalRecords.OrganizationDetailsList[0].OrgCountry,
              CountryName: this.state.selectCountryValues
              .filter((y: ICountryValues) => y.CountryId === res.TotalRecords.OrganizationDetailsList[0].OrgCountry)
              .map((y: ICountryValues) => y.CountryName)[0],
            
              StateName: this.state.selectStateValues
              .filter((y: IStateValues) => y.StateId
               === res.TotalRecords.OrganizationDetailsList[0].OrgState)
              .map((y: IStateValues) => y.StateName)[0],
              TownshipId: this.state.TownshipId

          }
             
          
       ,
          activeStep: this.state.activeStep + 1,
          draftActiveStep: this.state.draftActiveStep + 1,

        
        })
        if (loader != null) {
          loader.style.display = "none";
        }
      })
     
    }
      catch(err) 
        {
          // tslint:disable-next-line:no-console
          console.log(err)
          if (loader != null) {
            loader.style.display = "none";
          }
          this.setState({...this.state, buttonDisable1: false})
        }
    }





  };


  public onHandleDropDownChangePro = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event.target.value);
  };
  //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
  //       this.setState(event.target.value)
  //   }

  // fetch Call for Pop Up details based on ID
  public onHandleActionClickPro = (propTypeValues: IProTypeMasterValues) => {
    this.setState({
      ...this.state,
      propTypeValues,
      // tslint:disable-next-line:object-literal-sort-keys
      openPro: propTypeValues.IsActive.toString() === "true" ? true : false,
      open2Pro: propTypeValues.IsActive.toString() === "false" ? true : false
      //   //   allocationName: AllocationName,
      //   //   dropDownOpen: value === true ? event.currentTarget : null,
      //   //   dropDownOpen2: value === false ? event.currentTarget : null,

      //   //   // tslint:disable-next-line:object-literal-sort-keys
      //   //   AllocationId: id,
      //   //   AllocationSubTypeName,
      //   //   // tslint:disable-next-line:object-literal-sort-keys
      //   //   AllocationSubTypeId
    });
  };

  public onHandleAddChangePro = (event: any) => {
    this.setState({ ...this.state, newAllocationName: event.target.value });
  };

  // for Edit PopUp open
  public onHandleEditActionClickPro = (
    propTypeValues: IProTypeMasterValues
  ) => {
    this.setState({
      ...this.state,
      PropertyTypeId: propTypeValues.PropertyTypeId,
      // tslint:disable-next-line:object-literal-sort-keys
      CategoryOwnershipId:propTypeValues.CategoryOwnershipId,
      PropertyTypeName: propTypeValues.PropertyTypeName,
      propTypeValues,
      // tslint:disable-next-line:object-literal-sort-keys
      editPopUpOpenPro: true,
      openPro: false
    });
  };
  public getActivestatePro = (state: string) => {
    switch (state) {
      case "Active".toLowerCase():
        return "true";
      case "InActive".toLowerCase():
        return "false";
      default:
        return state;
    }
  };
  // for Search Input Change
  public onHandleSearchPro = (event: any) => {
    const searchInputPro = event.target.value;
    const data = this.state.allocationTypeList.filter(
      (x: IProTypeMasterValues) =>
        searchInputPro !== ""
          ? x.CategoryOwnershipDesc.toLowerCase().includes(
              searchInputPro.toLowerCase()
            ) ||
            this.allocationNameIncludes(searchInputPro, x.PropertyTypeName) ||
            x.IsActive.toString()
              .toLowerCase()
              .includes(this.getActivestatePro(searchInputPro.toLowerCase()))
          : x
    );
    this.setState({
      ...this.state,
      countPro: data.length,
      searchInputPro
    });
  };

  // deActivate Popup open
  public onHandleDeActivatePopUpOpenPro = (propTypeValues: any) => {
    this.setState({
      ...this.state,
      propTypeValues,
      // tslint:disable-next-line:object-literal-sort-keys
      deActivatePopUpOpenPro: true,
      openPro: false
    });
  };
  public allocationNameIncludes = (
    searchInputPro: string,
    allocationName?: string
  ) => {
    if (allocationName) {
      return allocationName
        .toLowerCase()
        .includes(searchInputPro.toLowerCase());
    } else {
      return false;
    }
  };
  // Activate Popup open
  public onHandleActivatePopUpOpenPro = (propTypeValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpenPro: true,
      propTypeValues,
      // tslint:disable-next-line:object-literal-sort-keys
      open2Pro: false
    });
  };

  // add Popup open
  public onHandleAddPopUpOpenPro = () => {
    this.setState({ ...this.state, addPopUpOpenPro: true });
  };

  // fetch call foIEditProPropsr Edited Document Id Save
  public onHandleEditSavePro = (
    event: IEditProProps & IEditProValues
    // id: number,
    // AllocationSubTypeId: number,
    // AllocationSubTypeName: string
  ) => {

  
      const CategoryOwnershipNameName = this.state.allocationNameValues
      .filter((x:IProTypeMasterValues) => x.CategoryOwnershipId === event.CategoryOwnershipId)
      .map((x:IProTypeMasterValues) => x.CategoryOwnershipName)[0];
    // fetch call for Edit values Save
    postEditPropertyTypeValues(
      event.CategoryOwnershipId,
      event.PropertyTypeId,
      CategoryOwnershipNameName,
      event.PropertyTypeName
    )
      .then(res => {
        this.setState({
          ...this.state,
          // allocationName: name,
          // tslint:disable-next-line:object-literal-sort-keys
          PropertyTypeId: event.PropertyTypeId,
          // allocationTypeList: res,
          // tslint:disable-next-line:object-literal-sort-keys
          CategoryOwnershipId: event.CategoryOwnershipId,
          editPopUpOpenPro: false,
          editSuccessPopUpPro: true
        });
      })
      .then(() =>
        getPropertyTypeGridValues().then(res => {
          this.setState({
            ...this.state,
            allocationTypeList: res.jsonData.data,
            newAllocationName: ""
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // fetch call for Deactivate DocumentId
  public onHandleDeActivateSavePro = (event: any) => {
    postDeActivatePropertyId(event)
      .then(res => {
        this.setState({
          ...this.state,
          //  allocationTypeList: res,
          deActivatePopUpOpenPro: false
        });
      })
      .then(() =>
        getPropertyTypeGridValues().then(res => {
          this.setState({
            ...this.state,
            allocationTypeList: res.jsonData.data,
            newAllocationName: ""
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // To Close Dialog PopUp
  public onHandleClosePro = () => {
    this.setState({ ...this.state, openPro: false });
  };

  public onHandleClose2Pro = () => {
    this.setState({ ...this.state, open2Pro: false });
  };
  // To Close Edit PopUp Close
  public onHandleEditPopUpClosePro = () => {
    this.setState({ ...this.state, editPopUpOpenPro: false });
  };

  // to Close Add PopUp
  public onHandleAddPopUpClosePro = () => {
    this.setState({ ...this.state, addPopUpOpenPro: false });
  };

  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClosePro = () => {
    this.setState({ ...this.state, deActivatePopUpOpenPro: false });
  };

  // To Close Activate PopUp Close
  public onHandleActivatePopUpClosePro = () => {
    this.setState({ ...this.state, activatePopUpOpenPro: false });
  };
 

  public onHandleAddSavePro = (values: IAddProValues & IAddProProps) => {
    if (
      this.state.allocationTypeList.filter(
        (x: IProTypeMasterValues) =>
          x.PropertyTypeName === values.newAllocationName
      ).length === 0
    ) {
      getAddPropertyTypeValues(
        values.CategoryOwnershipId,
        //   this.state.MaxAllocationSubTypeId,
        values.newAllocationName
      )
        .then(res => {
          this.setState({
            ...this.state.allocationTypeList,
            res
          });
        })
        .then(() => {
          this.setState({
            ...this.state,
            addPopUpOpenPro: false
          });
        })
        .then(() =>
          getPropertyTypeGridValues().then(res => {
            this.setState({
              ...this.state,
              allocationTypeList: res.jsonData.data,
              countPro: res.jsonData.data.length,
              dialogPro: true,
              newAllocationName: ""
            });
          })
        )
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        PropertyTypeName: "",
        dialog1Pro: true
      });
    }
  };
  public handleProcessFeeSaveAsDraftClick = (values: IProcessFeeProps) => {
    InsertNewAssessmentInDraft(values).then(() => {
      this.setState({...this.state, 
      })
    })
    .then(() => GetSubmitDraftAssessments()
                .then(res => 
             {
               this.setState({...this.state, 
              draftAssessmentCount: res &&res.jsonData.data.length,
              submitDraftAssessmentList: res.jsonData.data,
            })
          })
    ) 
    .then(() => {
     this.props.history.push('/page/ptms/submitdraftassessments');

    })
    .catch(err => 
      // tslint:disable-next-line:no-console
      console.log(err));
}
  public onHandleActivateClickPro = (event: any) => {
    postActivatePropertyID(event)
      .then(res => {
        this.setState({
          ...this.state,
          activatePopUpOpenPro: false
          // allocationTypeList: res
        });
      })
      .then(() =>
        getPropertyTypeGridValues().then(res => {
          this.setState({
            ...this.state,
            allocationTypeList: res.jsonData.data,
            newAllocationName: ""
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  
  public onHandleNameChangePro = (event: any) => {
    this.setState({ ...this.state, PropertyTypeName: event.target.value });
  };

  // public HandleEditAllocationChange = (event: any) => {
  //   this.setState({
  //     ...this.state,
  //     AllocationId: event.target.value,
  //     allocationValues: {
  //       ...this.state.allocationValues,
  //       AllocationId: event.target.value
  //     }
  //   });
  // };

  // public onHandleEditSuccessPopUpClose = () => {
  //   this.setState({ ...this.state, editSuccessPopUpPro: false });
  // };
  public handleRelationChange = (event: any,values:IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues ) => {
     
    this.setState({
      ...this.state,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
      .map((x:any) => {
        return (
          {
            ...x,
          
              AuthAddress1: values.HouseNo , 
              AuthAddress2: values.StreetName,
              AuthEmailId:values.AuthorisedPersonEmailAddress,
              AuthPhoneNumber:values.MobileNumber,
              AuthPhotoIdNumber:values.PhotoIdNumber ,
              // tslint:disable-next-line:object-literal-sort-keys
              AuthPhotoIdPath:values.authImage,
              // tslint:disable-next-line:object-literal-sort-keys
              AuthPersonName1:values.FirstName,
              AuthPersonName2:values.LastName,

              AuthDateOfBirth:values.AuthDateOfBirth,
              AuthRelationName:values.RelationName,
              AuthPhotoIdType: this.state.photoIdTypeArray
              .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
              .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
             // AuthPhotoId: values.PhotoIdType,
              RelationType: event.target.value,
              RelationTypeName: this.state.RelationTypeArray.filter(
                (z: IRelationTypeValues) => z.RelationTypeId === event.target.value
              ).map((z: IRelationTypeValues) => z.RelationType)[0],
             
          }
        )
      }),
     

      // tslint:disable-next-line:object-literal-sort-keys
      AuthRelationTypeId: event.target.value,
      RelationTypeName: this.state.RelationTypeArray
      .filter(
        (x: IRelationTypeValues) => x.RelationTypeId === event.target.value)
      .map((x: IRelationTypeValues) => x.RelationType)[0],
      authorisedPersonValues: this.state.authorisedPersonValues
      .map((x:any) => {
        return {
          ...x,
          AuthRelationTypeId: event.target.value,
          RelationTypeName: this.state.RelationTypeArray
          .filter((y: IRelationTypeValues) => y.RelationTypeId === event.target.value)
          .map((y: IRelationTypeValues) => y.RelationType)[0]
        };
      }),
   
    });
  };

  public handlePhotoIdChange = (event: any,values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {


    this.setState({
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          
          return {
            ...x,
          
          
              AuthAddress1: values.HouseNo , 
              AuthAddress2: values.StreetName,
              AuthEmailId:values.AuthorisedPersonEmailAddress,
              AuthPhoneNumber:values.MobileNumber,
              AuthPhotoIdNumber:values.PhotoIdNumber ,
              // tslint:disable-next-line:object-literal-sort-keys
              AuthPhotoIdPath:values.authImage,
              // tslint:disable-next-line:object-literal-sort-keys
              AuthPersonName1:values.FirstName,
              AuthPersonName2:values.LastName,

              AuthDateOfBirth:values.AuthDateOfBirth,
              AuthRelationName:values.RelationName,
              AuthPhotoIdType: this.state.photoIdTypeArray
              .filter(
                (y: IPhotoIdTypeValues) => y.PhotoIdType === event.target.value
              )
              .map((y: IPhotoIdTypeValues) => y.PhotoIdName)[0]
            
          };
        }
      ),
      // tslint:disable-next-line:object-literal-sort-keys
      PhotoIdTypeName: this.state.photoIdTypeArray
      .filter(
        (y: IPhotoIdTypeValues) => y.PhotoIdType === event.target.value
      )
      .map((y: IPhotoIdTypeValues) => y.PhotoIdName)[0],
      PhotoIdType: event.target.value,

      authorisedPersonValues: this.state.authorisedPersonValues.map((x:any) => {
        return {
          ...x,
          PhotoIdType: event.target.value,
          PhotoIdTypeName: this.state.photoIdTypeArray
          .filter(
            (y: IPhotoIdTypeValues) => y.PhotoIdType === event.target.value
          )
          .map((y: IPhotoIdTypeValues) => y.PhotoIdName)[0]
        };
      })
    });
  };

  public onWitnessSaveAndContinue = (
    values: IRelationTypeProps & IWitnessDetailsProps & IRelationTypeProps &
    IWitnessDetailsProps &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    IDetailsFromMap
  ) => {
     this.setState({...this.state, buttonDisable3: true});
 if(true){
   try{
 if (loader) {
      loader.style.display = "block";
    }
    postWitnessSaveAndContinue(values,this.state.authorisedPersonValues
      .map((x:IAuthorizedPersonValues) => x.authImage)[0])
      .then(res => {
    
        this.setState({
          ...this.state,
         

          WitnessDetailsFormArray: res.TotalRecords.WitnessDetailsList.map((x:any, i : number) => ( {
            
              AddClickCount: i,
              WitnessName: x.WitnessName,
              id: i,
              // tslint:disable-next-line:object-literal-sort-keys
              RelationName: x.RelationName,
              RelationType: x.RelationType,
              RelationTypeArray: this.state.RelationTypeArray,
              RelationDateOfBirth: moment(x.RelationDateOfBirth).format("YYYY-MM-DD")
          })
        ),
          // tslint:disable-next-line:object-literal-sort-keys
          SubmitValues: {
           ...this.state.SubmitValues,
            WitnessDetailsList: res.TotalRecords.WitnessDetailsList
            .map((y:any, i : number) => ({
              
                AddClickCount: i,
                WitnessName: y.WitnessName,
                id: i,
                // tslint:disable-next-line:object-literal-sort-keys
                RelationName: y.RelationName,
                RelationType: y.RelationType,
                RelationTypeArray: this.state.RelationTypeArray,
                RelationDateOfBirth:moment(y.RelationDateOfBirth).format("YYYY-MM-DD"),
                RelationTypeAndName: this.state.RelationTypeArray
                .filter((z:IRelationTypeValues) => y.RelationType === z.RelationTypeId)
                .map((z:IRelationTypeValues) => z.RelationType)[0]
              })
            )}
          ,
          // WitnessDetailsFormArray: values.WitnessDetailsFormArray,
          activeStep: this.state.activeStep + 1,
          draftActiveStep: this.state.draftActiveStep + 1
        })
        if (loader != null) {
          loader.style.display = "none";
        }
      })
    }
      catch(err){
        // tslint:disable-next-line:no-console
        console.log(err)
        if (loader != null) {
          loader.style.display = "none";
        }
        this.setState({...this.state, buttonDisable3: false})
      }
      
 
}
 
  };

  public onWitnessSaveAndContinue1 = (
    values: IRelationTypeProps & IWitnessDetailsProps & IRelationTypeProps &
    IWitnessDetailsProps &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    IDetailsFromMap
  ) => {
  
    this.setState({...this.state, buttonDisable3: true});

   if(true){
    postWitnessSaveAndContinue(values,this.state.authorisedPersonValues
      .map((x:IAuthorizedPersonValues) => x.authImage)[0])
      .then(res => {
     
        this.setState({
          ...this.state,
         

          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => ({
              ...x,
              WitnessDetailsFormArray: res.TotalRecords.WitnessDetailsList
              .map((y:any, i : number) => {
                return {
                 
                  AddClickCount: i,
                  WitnessName: y.WitnessName,
                  id: i,
                  // tslint:disable-next-line:object-literal-sort-keys
                  RelationName: y.RelationName,
                  RelationType: y.RelationType,
                  RelationTypeArray: this.state.RelationTypeArray,
                  RelationDateOfBirth: moment(y.RelationDateOfBirth).format("YYYY/MM/DD")
    
                }
              }),
            })
          ),
            // tslint:disable-next-line:object-literal-sort-keys
            SubmitValues: {
              ...this.state.SubmitValues,

            WitnessDetailsList: res.TotalRecords.WitnessDetailsList.map((y:any, i : number) => ( {
              
                AddClickCount: i,
                WitnessName: y.WitnessName,
                id: i,
                // tslint:disable-next-line:object-literal-sort-keys
                RelationName: y.RelationName,
                RelationType: y.RelationType,
                RelationTypeArray: this.state.RelationTypeArray,
                RelationDateOfBirth:moment(y.RelationDateOfBirth).format("YYYY-MM-DD"),
                RelationTypeAndName: this.state.RelationTypeArray
                .filter((z:IRelationTypeValues) => y.RelationType === z.RelationTypeId)
                .map((z:IRelationTypeValues) => z.RelationType)[0]
  
              })
            )}, 
          
          // WitnessDetailsFormArray: values.WitnessDetailsFormArray,
          activeStep: this.state.activeStep + 1,
          draftActiveStep: this.state.draftActiveStep + 1
        })
        if (loader != null) {
          loader.style.display = "none";
        }
      })
      .catch(err =>
        {
        // tslint:disable-next-line:no-console
        console.log(err)
        if (loader != null) {
          loader.style.display = "none";
        }
        this.setState({...this.state, buttonDisable3: false})
        }
      );
   }
  
  };

  public handleSubmitCheck = (checked: boolean) => {
    this.setState({ ...this.state, check1: checked });
  };
  public handleCheckChange = (checked: boolean, values:IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {
    
    if (checked === true) {
      this.setState({
        ...this.state,
        HouseNo: this.state.HouseNoBuildingName,
        StreetName: this.state.StreetNameLocality,
     
        authorisedPersonValues: this.state.authorisedPersonValues.map((it:any) => {
          return {
            ...it,
            HouseNo: this.state.HouseNoBuildingName,
            StreetName: this.state.StreetNameLocality
          };
        }),
        check: checked
      });
    } else {
      this.setState({
        ...this.state,
        HouseNo: "",
            StreetName: "",
     
        authorisedPersonValues: this.state.authorisedPersonValues.map((it:any) => {
          return {
            ...it,
            HouseNo: "",
            StreetName: ""
          };
        }),
        check: checked
      });
    }
  };

  public handleCheckChange1 = (checked: boolean, values:IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {


    if (checked === true) {
      this.setState({
        ...this.state,
        HouseNo: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => x.OrgAddress1)[0],
        StreetName: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => x.OrgAddress2)[0],
        // tslint:disable-next-line:object-literal-sort-keys
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
          (x: ISearchValues) => {
            return {
              ...x,
              AuthAddress1: x.OrgAddress1,
              AuthAddress2: x.OrgAddress2,
            

            };
          }
        ),
        // ,
        // authorisedPersonValues: this.state.authorisedPersonValues.map((it:any) => {
        //   return {
        //     ...it,
        //     HouseNo: this.state.HouseNoBuildingName,
        //     StreetName: this.state.StreetNameLocality
        //   };
        // }),
        check: checked
      });
    } else {
      this.setState({
        ...this.state,
        HouseNo: "",
            StreetName: "",
        // tslint:disable-next-line:object-literal-sort-keys
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
          (x: ISearchValues) => {
            return {
              ...x,
              AuthAddress1: "",
              AuthAddress2:""
            };
          }
        ),
        // authorisedPersonValues: this.state.authorisedPersonValues.map((it:any) => {
        //   return {
        //     ...it,
        //     HouseNo: "",
        //     StreetName: ""
        //   };
        // }),
        check: checked
      });
    }
  };
  public onAddGoValuesClick = (index: number) => {
    this.setState({
      ...this.state,
      AddGoValueClickCount: this.state.AddGoValueClickCount + 1,
      ProjectDetailsArray: [
        ...this.state.ProjectDetailsArray,
        {
          AddGoValueClickCount: this.state.AddGoValueClickCount + 1,
         
         
          id: this.state.AddGoValueClickCount + 1,
          // tslint:disable-next-line:object-literal-sort-keys
          GoDate: "",
          GoNumber:""
         
        }
      ]
    });
   
  };
  public handleMultiSelectChange = (event: any, values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps  ) => {
    this.setState({ ...this.state,  ProposalFormApplicationIdValues: 
      this.state.ProposalFormApplicationIdValues.map(
      (x: ISearchValues) => ({
        ...x,
       // LeaseTenure: values.Number,
        projectTypes:  event.target.value,
        // tslint:disable-next-line:object-literal-sort-keys
        LandAllocationTypeId: values.LandAllocationId,
        // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationType: values.LandAllocationTypeName,
            AvailableLandArea: values.AvailableLandArea,
            AvailbleLandAreaUnits:values.UnitId,
            TenurePeriodId: values.Number,
            LeaseAmountperAcre: values.LeaseAmount,
            LeaseStartDate: values.LeaseStartDate,
            LeaseEndDate: values.LeaseEndDate,
            ProjectTitle: values.ProjectName,
            ProjPurpose: values.ProjectPurpose,
            ProjDescription: values.ProjectDescription,
            TownshipId: this.state.TownshipId,
            TownshipName:values.TownshipName,
            ProjectRules: values.projectRules,
            GOMnumber: values.GoNumber,
            GOMdate: values.GoDate,
            TotalAmount: values.TotalLeaseAmount,
            InitialAllocation: values.InitialAllocation,
            InitialAllocationLandSize: values.InitialAllocationLandSize,
            InitialAllocationLandSizeType: values.initialUnitId,
            RequiredLandArea: values.RequiredLandSize

      })
    ),
      projectTypes:  event.target.value
      
     });
  };

  public handleSelectMultiChange = (event: any) => {
    this.setState({ ...this.state, projectTypes: event.target.value });
  };
  public onMileStoneSave = (
    event: IMilestoneDropDownProps &
      IMileStoneDetailsStateValues &
      IMileStoneDetailsProps &
      IRuleTypeValuesProps &
      IProjectValuesProps &
      IConditionValueProps &
      IMileStoneValues
  ) => {
  
    this.setState({
      ...this.state,
      LandAllocationAllValues: [
        ...this.state.LandAllocationAllValues,
        ...event.MileStoneArray
      ],
      SubmitValues: {...this.state.SubmitValues ,
        MileStoneArray: event.MileStoneArray

      },
      // tslint:disable-next-line:object-literal-sort-keys
      MileStoneArray: event.MileStoneArray
    });
  };

  public MileStoneNewRuleSubmit = (event: ITownshipValues &
    ISelectThemeCityProps &
    IRuleTypeValuesProps &
    ISourceValueProps &
    IConditionValueProps) => {
   
    if (event.TownshipId !== 0
       && event.ProjectTypeId === 1
       && event.ruleName !== "") {
      SubmitMilestoneDetails(event, event.ruleName).then(res => {
        this.setState({
          ...this.state,
          ConditionTypeId: 0,
          PopUpOpen: false,
          SuccessMileStonePopUp: true,
          // tslint:disable-next-line:object-literal-sort-keys
          ProjectTypeId: 0,
          RuleSourceTypeId: 0,
          maxValue: 0,
          minValue: 0,
          newMileStoneValues: [...this.state.newMileStoneValues, res],
          ruleName: "",
          value: 0
        });
      }).then(() => (
        mileStoneValues(event.TownshipId)
          .then(res => {
            this.setState({
              ...this.state,
              MileStoneArray: this.state.MileStoneArray.map((x: any) => {
                return {
                  AddMilestoneClickCount: x.AddMilestoneClickCount,
                  LandRelease: x.LandRelease,
                  RuleName: x.RuleName,
                  // tslint:disable-next-line:object-literal-sort-keys
                  RuleId: x.RuleId,
                  DateOfCompletion: x.DateOfCompletion,
                  mileStoneValues: res.objProjectRulesList.filter(
                    (y: IMileStoneDropDownValues) =>
                      y.RuleName !== null && y.RuleName !== undefined
                  ),
                  id: x.id,
                  ProjectRuleTypes: x.ProjectRuleTypes,
                  ProjectTypeId: x.ProjectTypeId,
                  ruleTypeValues: this.state.ruleTypeValues,
                  sourceTypeValues: this.state.sourceTypeValues,
                  RuleSourceTypeId: x.RuleSourceTypeId,
                  ConditionTypeId: x.ConditionTypeId,
                  ConditionTypeValues: this.state.ConditionTypeValues,
                  projectValues: res.objProjectRulesList.filter(
                    (y: IMileStoneDropDownValues) =>
                      y.RuleName !== null && y.RuleName !== undefined
                  ),
                };
              }),
              mileStoneValues: res.objProjectRulesList.filter(
                (y: IMileStoneDropDownValues) =>
                  y.RuleName !== null && y.RuleName !== undefined
              ),
              projectValues: res.objProjectRulesList.filter(
                (y: IMileStoneDropDownValues) =>
                  y.RuleName !== null && y.RuleName !== undefined
              ),
            })
          })
      ))
         }
         
         else if (
          event.ProjectTypeId === 2 &&
          event.ConditionTypeId !== 0 &&
          event.RuleSourceTypeId !== 0 &&
          event.TownshipId !== 0 &&
          (event.value !== 0 || 
            (event.minValue !== 0 && event.maxValue !== 0))
         
        ) {
          SubmitMilestoneDetails(event, this.state.ruleName).then(res => {
            this.setState({
              ...this.state,
              ConditionTypeId: 0,
              PopUpOpen: false,
              SuccessMileStonePopUp: true,
              // tslint:disable-next-line:object-literal-sort-keys
              ProjectTypeId: 0,
              RuleSourceTypeId: 0,
              maxValue: 0,
              minValue: 0,
              newMileStoneValues: [...this.state.newMileStoneValues, res],
              ruleName: "",
              value: 0
            });
          }).then(() => (
            mileStoneValues(event.TownshipId)
              .then(res => {
                this.setState({
                  ...this.state,
                  MileStoneArray: this.state.MileStoneArray.map((x: any) => {
                    return {
                      AddMilestoneClickCount: x.AddMilestoneClickCount,
                      LandRelease: x.LandRelease,
                      RuleName: x.RuleName,
                      // tslint:disable-next-line:object-literal-sort-keys
                      RuleId: x.RuleId,
                      DateOfCompletion: x.DateOfCompletion,
                      mileStoneValues: res.objProjectRulesList.filter(
                        (y: IMileStoneDropDownValues) =>
                          y.RuleName !== null && y.RuleName !== undefined
                      ),
                      id: x.id,
                      ProjectRuleTypes: x.ProjectRuleTypes,
                      ProjectTypeId: x.ProjectTypeId,
                      ruleTypeValues: this.state.ruleTypeValues,
                      sourceTypeValues: this.state.sourceTypeValues,
                      RuleSourceTypeId: x.RuleSourceTypeId,
                      ConditionTypeId: x.ConditionTypeId,
                      ConditionTypeValues: this.state.ConditionTypeValues,
                      projectValues: res.objProjectRulesList.filter(
                        (y: IMileStoneDropDownValues) =>
                          y.RuleName !== null && y.RuleName !== undefined
                      ),
                    };
                  }),
                  mileStoneValues: res.objProjectRulesList.filter(
                    (y: IMileStoneDropDownValues) =>
                      y.RuleName !== null && y.RuleName !== undefined
                  ),
                  projectValues: res.objProjectRulesList.filter(
                    (y: IMileStoneDropDownValues) =>
                      y.RuleName !== null && y.RuleName !== undefined
                  ),
                })
              })
          ))
        }else {
      this.setState({ ...this.state, milestonePopUp: true });
    }
  };

  public handleProjectTypeChange = (event: any) => {
    this.setState({
      ...this.state,
      ProjectTypeId: event.target.value,
      RuleName: this.state.ruleTypeValues
        .filter((x: IRuleTypeValues) => x.ProjRuleTypeId === event.target.value)
        .filter((x: IRuleTypeValues) => x.RuleType)
    });
  };

  public handleConditionTypeChange = (event: any) => {
    this.setState({
      ...this.state,
      ConditionTypeId: event.target.value,
      conditionTypeName: this.state.ConditionTypeValues
      .filter(
        (x: IConditionValues) => x.ConditionTypeId === event.target.value
      )
      .map((x: IConditionValues) => x.ConditionName)[0],
      // tslint:disable-next-line:object-literal-sort-keys
      ruleName:
      this.state.sourceTypeName +
      " " +
      this.state.ConditionTypeValues
        .filter(
          (x: IConditionValues) => x.ConditionTypeId === event.target.value
        )
        .map((x: IConditionValues) => x.ConditionName)[0]
    });
  };

  public handleSourceTypeChange = (event: any) => {
    this.setState({
      ...this.state,
      RuleSourceTypeId: event.target.value,
      sourceTypeName: this.state.sourceTypeValues
      .filter((x: ISourceValues) => x.RuleSourceTypeId === event.target.value)
      .map((x: ISourceValues) => x.SourceName)[0],
    });
  };

  public handleAgreementChange = (event: any
    // ,values: IProposalTabStateValues &
    // ICountryValues &
    // IStateValues &
    // ISelectAllocationProps &
    // ISelectCountryProps &
    // ISelectStateProps &
    // IDetailsFromMap
    ) => {
    this.setState({
      ...this.state,
      AgreementTypeId: event.target.value,

      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
            AgreementTypeId: event.target.value,
            AgreementTypeName: this.state.agreementTypeValues
              .filter(
                (y: IAgremmentTypeValues) =>
                  y.AgreementId === event.target.value
              )
              .map((y: IAgremmentTypeValues) => y.AgreementName)[0]
          };
        }
      ),
      // tslint:disable-next-line:object-literal-sort-keys
      AgreementName: this.state.agreementTypeValues
        .filter(
          (x: IAgremmentTypeValues) => x.AgreementId === event.target.value
        )
        .map((x: IAgremmentTypeValues) => x.AgreementName)[0]
    });
  };

  public handleTypeOfAllocationChange = (event: any
    ,values: IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap
    ) => {
    this.setState({
      ...this.state,
      HouseNoBuildingName:values.HouseNoBuildingName,
      OrgEmailAddress:values.OrgEmailAddress,
      OrgPhoneNumber:values.OrgPhoneNumber,
      OrganizationName:values.OrganizationName,
      RegistrationNumber:values.RegistrationNumber,
      StreetNameLocality:values.StreetNameLocality,
      // tslint:disable-next-line:object-literal-sort-keys
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
            TypeOfAllocation: event.target.value
          };
        }
      ),
      TypeOfAllocationId: event.target.value,

      TypeOfAllocationName: this.state.typesOfAllocationValues
        .filter(
          (x: ITypeOfAllocationValues) =>
            x.TypeOfAllocationId === event.target.value
        )
        .map((x: ITypeOfAllocationValues) => x.TypeOfAllocationName)[0]
    });
  };
  public handleStateChange = (event: any
    // ,values:  IProposalTabStateValues &
    // ICountryValues &
    // IStateValues &
    // ISelectAllocationProps &
    // ISelectCountryProps &
    // ISelectStateProps &
    // IDetailsFromMap
    ) => {
    this.setState({
      ...this.state,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
            OrgStateId: event.target.value,
            OrgStateName: this.state.selectStateValues
            .filter((y: IStateValues) => y.StateId === event.target.value)
            .map((y: IStateValues) => y.StateName)[0]
          };
        }
      ),
      StateId: event.target.value,

      StateName: this.state.selectStateValues
        .filter((x: IStateValues) => x.StateId === event.target.value)
        .map((x: IStateValues) => x.StateName)[0]
    });
  };

  public handleDownload = (submitprint: string) => {
      const divToPrint=document.getElementById("printdata");
      if(divToPrint) {
        const doc = new jsPDF('p', 'pt', 'a4');
       
        const content = divToPrint.innerHTML;

    doc.fromHTML(content, 10, 10, {
      'width': 120, 
     }, () => {
         doc.save(`${this.state.enterApplicationId}.pdf`)   
      });
   }

    // postDownloadFileValues(values).then(res => {
      // this.setState({ ...this.state, SuccesPopUpOpen: false });
    // });
  };

  public onHandleWarningPopupClose = () => {
    this.setState({ ...this.state, WarningPopUp: false });
  };
  public handleOwnerNameChange = (event: any, index: number, values:IOwnershipValues&ICategoryTextFieldValues) => {
    this.setState({
      ...this.state,
      PropertyTypeId:values.PropertyTypeId,
      // tslint:disable-next-line:object-literal-sort-keys
      PropertyDepartmentId:values.PropertyDepartmentId,
      ApartmentNameId:values.ApartmentNameId,
      OwnershipArray: this.state.OwnershipArray.map((x:any) =>
        x.id === index
          ? {
              AddClickCount: x.AddClickCount,
            Guardian: x.Guardian,
            OwnerName: event.target.value,
            // tslint:disable-next-line:object-literal-sort-keys
            MobileNo: x.MobileNo,
            EmailAddress: x.EmailAddress,
            Gender:x.Gender,
            selectGenderValues: this.state.selectGenderValues,
            selectGuardianValues: this.state.selectGuardianValues,
            GuardianReg:x.GuardianReg,
              id: x.id
            }
          : x
      )
    });
  };
  public handleFirmNameChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,
      TotalTax:values.TotalTax,
      
     South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
             FirmName : event.target.value,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate: x.ConstructionDate,
              EffectiveFromDate	: x.EffectiveFromDate,
              UnstructeredLand: x.UnstructeredLand,
            Length: x.Length,
              Breadth: x.Breadth,
              PlinthArea: x.PlinthArea,
              taxAmount:x.taxAmount,
              BuildingPermissionNo: x.BuildingPermissionNo,
              BuildingPermissionDate: x.BuildingPermissionDate,
            PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: this.state.selectClassificationValues,
            selectNatUsageValues:this.state.selectNatUsageValues,
            FloorNumber: x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };

  public handleOccupantNameChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
     South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
           
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: event.target.value,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate: x.ConstructionDate,
              EffectiveFromDate	: x.EffectiveFromDate,
              UnstructeredLand: x.UnstructeredLand,
            Length: x.Length,
            taxAmount:x.taxAmount,
              Breadth: x.Breadth,
            PlinthArea: x.PlinthArea,
              BuildingPermissionNo: x.BuildingPermissionNo,
              BuildingPermissionDate: x.BuildingPermissionDate,
            PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: this.state.selectClassificationValues,
            selectNatUsageValues:this.state.selectNatUsageValues,

            FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  public handleConstructionDateChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
     South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
          
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate: event.target.value,
              EffectiveFromDate	: x.EffectiveFromDate,
              UnstructeredLand:x.UnstructeredLand,
              Length: x.Length,
            Breadth: x.Breadth,
            taxAmount:x.taxAmount,
              PlinthArea: x.PlinthArea,
              BuildingPermissionNo: x.BuildingPermissionNo,
              BuildingPermissionDate: x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues:this.state.selectClassificationValues,
            selectNatUsageValues:this.state.selectNatUsageValues,

              FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };

  public handleEffectiveFromDateChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
      South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:x.ConstructionDate,
              EffectiveFromDate	: event.target.value,
              UnstructeredLand:x.UnstructeredLand,
              Length: x.Length,
              taxAmount:x.taxAmount,
              Breadth: x.Breadth,
              PlinthArea: x.PlinthArea,
              BuildingPermissionNo: x.BuildingPermissionNo,
              BuildingPermissionDate: x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues:this.state.selectClassificationValues,
            selectNatUsageValues:this.state.selectNatUsageValues,

              FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  
  public handleLengthChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
      South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification:  x.BuildingClassification,
            FirmName :  x.FirmName,
             NatureOfUsage:  x.NatureOfUsage,
             Occupancy: x.Occupancy,
              OccupantName:  x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate: x.ConstructionDate,
              EffectiveFromDate	: x.EffectiveFromDate,
              UnstructeredLand:x.UnstructeredLand,
              Length: event.target.value,
            Breadth: x.Breadth,
            taxAmount: event.target.value * x.Breadth * this.state.propValue,
              PlinthArea:  x.PlinthArea,
              BuildingPermissionNo:  x.BuildingPermissionNo,
              BuildingPermissionDate:  x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan:  x.PlinthAreaInBuildingPlan,
              selectFloorValues: this.state.selectFloorValues,
              selectOccupancyValues: this.state.selectOccupancyValues,
              selectClassificationValues:this.state.selectClassificationValues,
              selectNatUsageValues:this.state.selectNatUsageValues,

              FloorNumber: x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  public handleBreadthChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {

    const totalTaxAmount = this.state.FloorArray.map((y:IFloorValues) => y.taxAmount).reduce((x:number,y:number)=> x + y)
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: totalTaxAmount + 
      (this.state.FloorArray[index].Length * event.target.value * this.state.propValue),
      TotalTax: totalTaxAmount + 
      (this.state.FloorArray[index].Length * event.target.value * this.state.propValue),
      South:values.South,
      FloorArray: this.state.FloorArray.map((x:IFloorValues) =>
        x.id === index
          ? {
            AddClickCount:  x.AddClickCount,
            BuildingClassification:  x.BuildingClassification,
            FirmName :  x.FirmName,
             NatureOfUsage:  x.NatureOfUsage,
             Occupancy: x.Occupancy,
              OccupantName:  x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate: x.ConstructionDate,
              EffectiveFromDate	: x.EffectiveFromDate,
              UnstructeredLand:x.UnstructeredLand,
              Length:  x.Length,
              Breadth:event.target.value,
              taxAmount: x.Length * event.target.value * this.state.propValue,
              PlinthArea:  x.Length*event.target.value,
              BuildingPermissionNo:  x.BuildingPermissionNo,
              BuildingPermissionDate:  x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan:  x.PlinthAreaInBuildingPlan,
              selectFloorValues: this.state.selectFloorValues,
              selectOccupancyValues: this.state.selectOccupancyValues,
              selectClassificationValues:this.state.selectClassificationValues,
              selectNatUsageValues:this.state.selectNatUsageValues,

              FloorNumber: x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  public handlePlinthAreaChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
      South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount:  x.AddClickCount,
            BuildingClassification:  x.BuildingClassification,
            FirmName :  x.FirmName,
             NatureOfUsage:  x.NatureOfUsage,
             Occupancy: x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:x.ConstructionDate,
              EffectiveFromDate	:x.EffectiveFromDate,
              UnstructeredLand:x.UnstructeredLand,
              Length: x.Length,
              Breadth:x.Breadth,
              taxAmount:x.taxAmount,
              PlinthArea: event.target.value,
              BuildingPermissionNo: x.BuildingPermissionNo,
              BuildingPermissionDate: x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
              selectFloorValues: this.state.selectFloorValues,
              selectOccupancyValues: this.state.selectOccupancyValues,
              selectClassificationValues:this.state.selectClassificationValues,
              selectNatUsageValues:this.state.selectNatUsageValues,

              FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  public handleBildingPermissionChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
     South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:x.ConstructionDate,
              EffectiveFromDate	:x.EffectiveFromDate,
              UnstructeredLand:x.UnstructeredLand,
              Length: x.Length,
              Breadth:x.Breadth,
              taxAmount:x.taxAmount,
              PlinthArea: x.PlinthArea,
              BuildingPermissionNo: event.target.value,
              BuildingPermissionDate: x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
              selectFloorValues: this.state.selectFloorValues,
              selectOccupancyValues: this.state.selectOccupancyValues,
              selectClassificationValues:x.selectClassificationValues,
              selectNatUsageValues:x.selectNatUsageValues,

              FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  public handleBuildingDateChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
      South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:x.ConstructionDate,
              EffectiveFromDate	:x.EffectiveFromDate,
              UnstructeredLand:x.UnstructeredLand,
              Length: x.Length,
            Breadth: x.Breadth,
            taxAmount:x.taxAmount,
              PlinthArea: x.PlinthArea,
              BuildingPermissionNo:x.BuildingPermissionNo,
              BuildingPermissionDate: event.target.value,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: x.selectClassificationValues,
            selectNatUsageValues: x.selectNatUsageValues,

              FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  public handleBuildingPlanChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
     South:values.South,
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:x.ConstructionDate,
              EffectiveFromDate	:x.EffectiveFromDate,
            Length: x.Length,
              taxAmount:x.taxAmount,
              UnstructeredLand:x.UnstructeredLand,
              Breadth:x.Breadth,
              PlinthArea: x.PlinthArea,
              BuildingPermissionNo:x.BuildingPermissionNo,
              BuildingPermissionDate:x.BuildingPermissionDate,
            PlinthAreaInBuildingPlan: event.target.value,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: x.selectClassificationValues,
            selectNatUsageValues:x.selectNatUsageValues,

            FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  public handleRegBack = () => {
    this.setState({
      ...this.state,
      activeStep:this.state.activeStep-1
    }
    )
  }
  public handleTaxChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {

   
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.FloorArray.length === 1? parseInt(event.target.value,10) : 
      this.state.FloorArray.map((x:IFloorValues) => x.taxAmount).reduce((x:number,y:number)=> Number(x) + Number(y)),

      TotalTax: values.FloorArray.length === 1? parseInt(event.target.value,10) : 
      this.state.FloorArray.map((x:IFloorValues) => x.taxAmount).reduce((x:number,y:number)=> Number(x) + Number(y)),
      South:values.South,
      FloorArray: this.state.FloorArray.map((x:IFloorValues) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:x.ConstructionDate,
              EffectiveFromDate	:x.EffectiveFromDate,
            Length: x.Length,
              Breadth:x.Breadth,
              PlinthArea: x.PlinthArea,
              BuildingPermissionNo:x.BuildingPermissionNo,
              BuildingPermissionDate:x.BuildingPermissionDate,
            PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            taxAmount: parseInt(event.target.value,10),
            UnstructeredLand: x.UnstructeredLand,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: x.selectClassificationValues,
            selectNatUsageValues:x.selectNatUsageValues,
            FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
 
  public handleMobileNoChange = (event: any, index: number, values:IOwnershipValues&ICategoryTextFieldValues) => {
    this.setState({
      ...this.state,
      PropertyTypeId:values.PropertyTypeId,
      // tslint:disable-next-line:object-literal-sort-keys
      PropertyDepartmentId:values.PropertyDepartmentId,
      ApartmentNameId:values.ApartmentNameId,
      OwnershipArray: this.state.OwnershipArray.map((x:any) =>
        x.id === index
          ? {
              AddClickCount: x.AddClickCount,
            Guardian: x.Guardian,
            OwnerName: x.OwnerName,
            // tslint:disable-next-line:object-literal-sort-keys
            MobileNo: event.target.value,
            EmailAddress: x.EmailAddress,
            Gender:x.Gender,
            selectGenderValues: this.state.selectGenderValues,
            selectGuardianValues:this.state.selectGuardianValues,
            GuardianReg:x.GuardianReg,

              id: x.id
            }
          : x
      )
    });
  };
  public handleEmailAddressRegChange = (event: any, index: number, values:IOwnershipValues&ICategoryTextFieldValues) => {
    this.setState({
      ...this.state,
      PropertyTypeId:values.PropertyTypeId,
      // tslint:disable-next-line:object-literal-sort-keys
      PropertyDepartmentId:values.PropertyDepartmentId,
      ApartmentNameId:values.ApartmentNameId,
      OwnershipArray: this.state.OwnershipArray.map((x:any) =>
        x.id === index
          ? {
              AddClickCount: x.AddClickCount,
            Guardian: x.Guardian,
            OwnerName: x.OwnerName,
            // tslint:disable-next-line:object-literal-sort-keys
            MobileNo: x.MobileNo,
            EmailAddress: event.target.value, 
            Gender:x.Gender,
            selectGenderValues: this.state.selectGenderValues,
            selectGuardianValues:this.state.selectGuardianValues,
            GuardianReg:x.GuardianReg,

              id: x.id
            }
          : x
      )
    });
  };
  public handleGuardianChange = (event: any, index: number, values:ICategoryTextFieldValues &IOwnershipValues) => {
    this.setState({
      ...this.state,
      PropertyTypeId:values.PropertyTypeId,
      // tslint:disable-next-line:object-literal-sort-keys
      PropertyDepartmentId:values.PropertyDepartmentId,
      ApartmentNameId:values.ApartmentNameId,
      OwnershipArray: this.state.OwnershipArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            
            Guardian:event.target.value,
            OwnerName: x.OwnerName,
            // tslint:disable-next-line:object-literal-sort-keys
            MobileNo: x.MobileNo,
            EmailAddress: x.EmailAddress,
            Gender:x.Gender,
            selectGenderValues: this.state.selectGenderValues,
            selectGuardianValues:this.state.selectGuardianValues,
            GuardianReg:x.GuardianReg,

              id: x.id
            }
          : x
      )
    });
  };
  public handleWitnessNameChange = (event: any, index: number, values:IwitnessValues) => {
    this.setState({
      ...this.state,
      // ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
      //   (x: ISearchValues) => {
      //     return {
      //       ...x,
      //       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(y =>
      //         y.id === index
      //           ? {
      //               AddClickCount: values.AddClickCount,
      //               DateOfBirth: values.DateOfBirth,
      //               RelationName: values.RelationName,
      //               RelationTypeArray: this.state.RelationTypeArray,
      //               RelationTypeId: values.RelationTypeId,
      //               WitnessName: event.target.value,
      //               id: values.id
      //             }
      //           : y
      //       )
      //     };
      //   }
      // ),
      WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((x:any) =>
        x.id === index
          ? {
              AddClickCount: values.AddClickCount,
              RelationDateOfBirth: values.RelationDateOfBirth,
              RelationName: values.RelationName,
              RelationType: values.RelationType,
              RelationTypeArray: this.state.RelationTypeArray,
              WitnessName: event.target.value,
              id: x.id
            }
          : x
      )
    });
  };
  public handleStreetNameChange = (event: any,values:IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {
   
      if(values.check === true){
        this.setState({...this.state,
           StreetName:this.state.StreetNameLocality , 
          // tslint:disable-next-line:object-literal-sort-keys
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => {
              return {
                ...x,
                AuthAddress2: x.OrgAddress2,
              }
              })
         })
      }
      else {
    this.setState({
      ...this.state,
      StreetName: event.target.value,
      // tslint:disable-next-line:object-literal-sort-keys
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x, 
           
   
              AuthAddress1: values.HouseNo , 
              AuthAddress2: event.target.value,
              AuthEmailId:values.AuthorisedPersonEmailAddress,
              AuthPhoneNumber:values.MobileNumber,
              AuthPhotoIdNumber:values.PhotoIdNumber ,
              AuthPhotoIdType:this.state.photoIdTypeArray
              .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
              .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
              // tslint:disable-next-line:object-literal-sort-keys
              AuthPhotoIdPath: values.authImage,
              AuthPersonName1: values.FirstName,
              AuthPersonName2:values.LastName,

              AuthDateOfBirth:values.AuthDateOfBirth,
              AuthRelationName:values.RelationName ,
               // tslint:disable-next-line:object-literal-sort-keys
               AuthPhotoId:values.PhotoIdType
           
          };
        }
      ),
      authorisedPersonValues: this.state.authorisedPersonValues.map((it:any) => {
        return {
          ...it,
          AuthRelationTypeId: values.AuthRelationTypeId,

          HouseNo: values.HouseNo , 
       // tslint:disable-next-line:object-literal-sort-keys
       AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
       MobileNumber:values.MobileNumber,
       PhotoIdNumber:values.PhotoIdNumber ,
       PhotoIdType:values.PhotoIdType,
     // tslint:disable-next-line:object-literal-sort-keys
     authImage:values.authImage,
     FirstName: values.FirstName,
     AuthDateOfBirth:values.AuthDateOfBirth,
     RelationName:values.RelationName,
     LastName:values.LastName,
          StreetName: event.target.value
        };
      })
    });
  }
  };
  

  public handleOccupancyChange = (event: any, index: number, values: IFloorValues &IpropertyDetails) => {
    this.setState({
      ...this.state,
      
      FloorArray: this.state.FloorArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
            FloorNumber:x.FloorNumber,
             NatureOfUsage: x.NatureOfUsage,
            OccupantName: x.OccupantName,
            // tslint:disable-next-line:object-literal-sort-keys
            Occupancy: event.target.value,
            ConstructionDate: x.ConstructionDate,
            EffectiveFromDate: x.EffectiveFromDate,
            UnstructeredLand:x.UnstructeredLand,
            Length: x.Length,
            Breadth: x.Breadth,
            PlinthArea: x.PlinthArea,
            BuildingPermissionNo: x.BuildingPermissionNo,
            taxAmount:x.taxAmount,
            BuildingPermissionDate: x.BuildingPermissionDate,
            PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues:this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: x.selectClassificationValues,
            selectNatUsageValues: x.selectNatUsageValues,

             id: x.id
            }
          : x
      ),
     
    });
  };

  public handleFloorNumberIdChange = (event: any, index: number, values: IFloorValues &IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
      // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
     South:values.South,
      FloorArray: this.state.FloorArray.map((x:IFloorValues) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
            FloorNumber:event.target.value,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
            OccupantName: x.OccupantName,
            // tslint:disable-next-line:object-literal-sort-keys
            ConstructionDate: x.ConstructionDate,
            EffectiveFromDate: x.EffectiveFromDate,
            UnstructeredLand:x.UnstructeredLand,
            Length: x.Length,
            Breadth: x.Breadth,
            PlinthArea: x.PlinthArea,
            taxAmount:x.taxAmount,
            BuildingPermissionNo: x.BuildingPermissionNo,
            BuildingPermissionDate: x.BuildingPermissionDate,
            PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues:this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: x.selectClassificationValues,
            selectNatUsageValues: x.selectNatUsageValues,

              id: x.id
            }
          : x
      ),
     
    });
  };


  public handleBuildingClassificationChange = (event: any, index: number, values: IFloorValues &IpropertyDetails) => {
   
    getBuildingClassificationDropDown(0, 
      parseInt(event.target.value,10)
      // this.state.selectClassificationValues
      // .filter((y:IBuildingValues) => y.EnumMasterID === event.target.value)
      // .map((y:IBuildingValues) => y.EnumTypeID)[0] !== undefined ? this.state.selectClassificationValues
      // .filter((y:IBuildingValues) => y.EnumMasterID === event.target.value)
      // .map((y:IBuildingValues) => y.EnumTypeID)[0] : 0
      ).then(res => {
      this.setState({
        ...this.state,
       // BuildingClassification:parseInt(event.target.value,10),
        District: values.District,
        selectNatUsageValues:res.NatureUsage,
        // tslint:disable-next-line:object-literal-sort-keys
        Corporation: values.Corporation,
        Mandal:values.Mandal,
        Village: values.Village,
        TownShip: values.TownShip,
        Sector: values.Sector,
        Colony: values.Colony,
        Locality:values.Locality,
        ZoneNo: values.ZoneNo,
        WardNo: values.WardNo,
        Block: values.Block,
        Street: values.Street,
        Enumerationblock:values.Enumerationblock,
        PlotNo: values.PlotNo,
        ElectionWard: values.ElectionWard,
        DoorNo: values.DoorNo,
        Pincode: values.Pincode,
        SurveyNumber:values.SurveyNumber,
        PattaNumber: values.PattaNumber,
        VacantLandArea: values.VacantLandArea,
        CurrentMarketValue: values.CurrentMarketValue,
        RegisteredDocumentValue: values.RegisteredDocumentValue,
        EffectiveDate: values.EffectiveDate,
        LayoutPermitNumber:values.LayoutPermitNumber,
        LayoutPermitDate: values.LayoutPermitDate,
        CertificateNumber: values.CertificateNumber,
        OccupancyCertificateDate: values.OccupancyCertificateDate,
        ExtentOfSite: values.ExtentOfSite,
        selectfloorValues: this.state.selectfloorValues,
        selectroofValues: this.state.selectroofValues,
        selectwallValues: this.state.selectwallValues,
        selectwoodValues:this.state.selectwoodValues,
        aminityValues1: this.state.aminityValues1,
        selectFloorValues:this.state.selectFloorValues,
        selectClassificationValues: values.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
        East: values.East,
        North: values.North,
        West: values.West,
        TotalTaxAmount: values.TotalTax,

        TotalTax:values.TotalTax,
        South:values.South,
        FloorArray: this.state.FloorArray.map((x:IFloorValues) =>
          x.id === index
            ? {
              AddClickCount: x.AddClickCount,
              BuildingClassification:parseInt(event.target.value,10),
              FirmName : x.FirmName,
              FloorNumber:x.FloorNumber,
               NatureOfUsage: x.NatureOfUsage,
               Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate: x.ConstructionDate,
              EffectiveFromDate: x.EffectiveFromDate,
              UnstructeredLand:x.UnstructeredLand,
              Length: x.Length,
              Breadth: x.Breadth,
              PlinthArea: x.PlinthArea,
              taxAmount:x.taxAmount,
              BuildingPermissionNo: x.BuildingPermissionNo,
              BuildingPermissionDate: x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
              selectClassificationValues: x.selectClassificationValues,
              selectNatUsageValues: res.NatureUsage,
  
              selectFloorValues: this.state.selectFloorValues,
              selectOccupancyValues:this.state.selectOccupancyValues,
                id: x.id
              }
            : x
        ),
       
      });
    })
   
  };
  public handleNatureChange = (event: any, index: number, values: IFloorValues &IpropertyDetails) => {
    const propValue = 
    this.state.selectNatUsageValues.filter((y:INature) => y.EnumMasterID === event.target.value)
   .map((y:INature) => y.PropVal)[0]
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      propValue,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: values.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
     South:values.South,
      FloorArray: this.state.FloorArray.map((x:IFloorValues) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification:x.BuildingClassification,
            FirmName : x.FirmName,
            FloorNumber:x.FloorNumber,
             Occupancy:x.Occupancy,
            OccupantName: x.OccupantName,
            // tslint:disable-next-line:object-literal-sort-keys
            ConstructionDate: x.ConstructionDate,
            EffectiveFromDate: x.EffectiveFromDate,
            UnstructeredLand:x.UnstructeredLand,
            Length: x.Length,
            NatureOfUsage:event.target.value,
            Breadth: x.Breadth,
            PlinthArea: x.PlinthArea,
            taxAmount: x.taxAmount,
            BuildingPermissionNo: x.BuildingPermissionNo,
            BuildingPermissionDate: x.BuildingPermissionDate,
            PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectClassificationValues: x.selectClassificationValues,
            selectNatUsageValues:x.selectNatUsageValues,

            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues:this.state.selectOccupancyValues,
              id: x.id
            }
          : x
      ),
     
    });
  };
  public handleGenderIdChange = (event: any, index: number, values: IOwnershipValues &ICategoryTextFieldValues) => {
    this.setState({
      ...this.state,
      PropertyTypeId:values.PropertyTypeId,
      // tslint:disable-next-line:object-literal-sort-keys
      PropertyDepartmentId:values.PropertyDepartmentId,
      ApartmentNameId:values.ApartmentNameId,
      OwnershipArray: this.state.OwnershipArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            Guardian:x.Guardian,
            OwnerName: x.OwnerName,
            selectGenderValues:this.state.selectGenderValues,
            // tslint:disable-next-line:object-literal-sort-keys
            MobileNo: x.MobileNo,
            EmailAddress: x.EmailAddress,
            Gender: event.target.value,
            selectGuardianValues:this.state.selectGuardianValues,
            GuardianReg:x.GuardianReg,

              id: x.id
            }
          : x
      ),
     
    });
  };

  public handleGuardianIdChange = (event: any, index: number, values: IOwnershipValues&ICategoryTextFieldValues) => {
    this.setState({
      ...this.state,
      PropertyTypeId:values.PropertyTypeId,
      // tslint:disable-next-line:object-literal-sort-keys
      PropertyDepartmentId:values.PropertyDepartmentId,
      ApartmentNameId:values.ApartmentNameId,
      OwnershipArray: this.state.OwnershipArray.map((x:any) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            Guardian:x.Guardian,
            OwnerName: x.OwnerName,
            selectGuardianValues:this.state.selectGuardianValues,
            // tslint:disable-next-line:object-literal-sort-keys
            MobileNo: x.MobileNo,
            EmailAddress: x.EmailAddress,
            GuardianReg: event.target.value,
            Gender:x.Gender,
            selectGenderValues: this.state.selectGenderValues,

             id: x.id
            }
          : x
      ),
     
    });
  };
  public handleRelationTypeIdChange = (event: any, index: number, values: IwitnessValues) => {
    this.setState({
      ...this.state,
      // ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(x => {
      //   return (
      //     {...x , 
      //       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((y:IwitnessValues) =>
      //         y.id === index
      //           ? {
      //               AddClickCount: values.AddClickCount,
      //               DateOfBirth: values.DateOfBirth,
      //               RelationName: values.RelationName,
      //               RelationTypeArray: this.state.RelationTypeArray,
      //               RelationTypeId: event.target.value,
      //               WitnessName: values.WitnessName,
      //               id: y.id
      //             }
      //           :y
      //       )}
      //   )
      // }),

      WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((x:IwitnessValues) =>
        x.id === index
          ? {
              AddClickCount: values.AddClickCount,
              RelationDateOfBirth: values.RelationDateOfBirth,
              RelationName: values.RelationName,
              RelationType: event.target.value,
              RelationTypeArray: this.state.RelationTypeArray,
              WitnessName: values.WitnessName,
              id: x.id
            }
          : x
      ),
     
    });
  };

  public handleRelationNameChange = (event: any, index: number, values: IwitnessValues) => {
    this.setState({
      ...this.state,
      // ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(x => {
      //   return (
      //     {...x , 
      //       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(y =>
      //         y.id === index
      //           ? {
      //               AddClickCount: values.AddClickCount,
      //               DateOfBirth: values.DateOfBirth,
      //               RelationName: event.target.value,
      //               RelationTypeArray: this.state.RelationTypeArray,
      //               RelationTypeId: values.RelationTypeId,
      //               WitnessName: values.WitnessName,
      //               id: y.id
      //             }
      //           : y
      //       )
      //       }
      //   )
      // }),
      WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((x:any) =>
        x.id === index
          ? {
              AddClickCount: values.AddClickCount,
              RelationDateOfBirth: values.RelationDateOfBirth,
              RelationName: event.target.value,
              RelationType: values.RelationType,
              RelationTypeArray: this.state.RelationTypeArray,
              WitnessName: values.WitnessName,
              id: x.id
            }
          : x
      )
    });
  };

  public handleLandReleaseChange = (event: any, index: number) => {
    this.setState({
      ...this.state,
      MileStoneArray: this.state.MileStoneArray.map((x:any) =>
        x.id === index
          ? {
              AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
              RuleName: x.RuleName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConditionTypeId: x.ConditionTypeId,
              ConditionTypeValues: x.ConditionTypeValues,
              DateOfCompletion: x.DateOfCompletion,
              LandRelease: event.target.value,
              ProjectRuleTypes: x.ProjectRuleTypes,
              ProjectTypeId: x.ProjectTypeId,
              RuleId: x.RuleId,
              RuleSourceTypeId: x.RuleSourceTypeId,
              id: x.id,
              mileStoneValues: x.mileStoneValues,
              ruleTypeValues: x.ruleTypeValues,
              sourceTypeValues: x.sourceTypeValues,
              projectValues: x.projectValues
            }
          : x
      )
    });
  };


  public handleHouseNoChange = (event: any,values:
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues ) => {

     
      if(values.check === true){
        this.setState({...this.state, HouseNo:this.state.HouseNoBuildingName, 
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => {
              return {
                ...x,
                AuthAddress1: x.OrgAddress1,
              }
              })
         })
      }
      else {
    this.setState({
      ...this.state,
      HouseNo: event.target.value,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
            AuthAddress1: event.target.value,
            AuthAddress2: values.StreetName,
            AuthEmailId:values.AuthorisedPersonEmailAddress,
            AuthPhoneNumber:values.MobileNumber,
            AuthPhotoIdNumber:values.PhotoIdNumber ,
            AuthPhotoIdType:this.state.photoIdTypeArray
            .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
            .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
            // tslint:disable-next-line:object-literal-sort-keys
            AuthPhotoIdPath: values.authImage,
            AuthPersonName1: values.FirstName,
            AuthPersonName2: values.LastName,
            AuthDateOfBirth:values.AuthDateOfBirth,
            AuthRelationName:values.RelationName ,
             // tslint:disable-next-line:object-literal-sort-keys
             AuthPhotoId:values.PhotoIdType
          };
        }
      ),
      authorisedPersonValues: this.state.authorisedPersonValues.map((y:IAuthorizedPersonValues) => {
        return ({...y,
          AuthRelationTypeId: values.AuthRelationTypeId,

          HouseNo: event.target.value , 
          StreetName: values.StreetName,
       // tslint:disable-next-line:object-literal-sort-keys
       AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
       MobileNumber:values.MobileNumber,
       PhotoIdNumber:values.PhotoIdNumber ,
       PhotoIdType:values.PhotoIdType,
     // tslint:disable-next-line:object-literal-sort-keys
     authImage:values.authImage,
     FirstName: values.FirstName,
     AuthDateOfBirth:values.AuthDateOfBirth,
     RelationName:values.RelationName,
     LastName:values.LastName
     })})

    });
  }
  };
  public handleMultiSelectMileStoneChange = (event: any, index: number) => {
    this.setState({
      ...this.state,
      MileStoneArray: this.state.MileStoneArray.map((x:any) =>
        x.id === index
          ? {
              AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
              RuleName: x.RuleName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConditionTypeId: x.ConditionTypeId,
              ConditionTypeValues: x.ConditionTypeValues,
              DateOfCompletion: x.DateOfCompletion,
              LandRelease: x.LandRelease,
              ProjectRuleTypes: event.target.value,
              ProjectTypeId: x.ProjectTypeId,
              RuleId: x.RuleId,
              RuleSourceTypeId: x.RuleSourceTypeId,
              id: x.id,
              mileStoneValues: x.mileStoneValues,
              ruleTypeValues: x.ruleTypeValues,
              sourceTypeValues: x.sourceTypeValues,
              projectValues: x.projectValues
            }
          : x
      )
    });
  };
  public handleDateOfCompletionChange = (event: any, index: number) => {
    this.setState({
      ...this.state,
      MileStoneArray: this.state.MileStoneArray.map((x:any) =>
        x.id === index
          ? {
              AddMilestoneClickCount: this.state.AddMilestoneClickCount + 1,
              RuleName: x.RuleName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConditionTypeId: x.ConditionTypeId,
              ConditionTypeValues: x.ConditionTypeValues,
              DateOfCompletion: event.target.value,
              LandRelease: x.LandRelease,
              ProjectRuleTypes: x.ProjectRuleTypes,
              ProjectTypeId: x.ProjectTypeId,
              RuleId: x.RuleId,
              RuleSourceTypeId: x.RuleSourceTypeId,
              id: x.id,
              mileStoneValues: x.mileStoneValues,
              ruleTypeValues: x.ruleTypeValues,
              sourceTypeValues: x.sourceTypeValues,
              projectValues: x.projectValues
            }
          : x
      )
    });
  };

  public handleDateChange = (event: any, index: number, values: IwitnessValues) => {
    this.setState({
      ...this.state,

      WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((x:any) =>
        x.id === index
          ? {
              AddClickCount: values.AddClickCount,
              RelationDateOfBirth: event.target.value.toString(),
              RelationName: values.RelationName,
              RelationType: values.RelationType,
              RelationTypeArray: this.state.RelationTypeArray,
              WitnessName: values.WitnessName,
              id: x.id
            }
          : x
      )
    });
  };

  public handleDateChange1 = (event: any, index: number, values:IwitnessValues) => {
    this.setState({
      ...this.state,
      WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((x:any) =>
        x.id === index
          ? {
              AddClickCount: values.AddClickCount,
              RelationDateOfBirth: event.target.value.toString(),
              RelationName: values.RelationName,
              RelationType: values.RelationType,
              RelationTypeArray: this.state.RelationTypeArray,
              WitnessName: values.WitnessName,
              id: x.id
            }
          : x
      )
      // ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
      //   x => {
      //     return {
      //       ...x,
      //       WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map(
      //         (y: IwitnessValues) =>
      //           y.id === index
      //             ? {
      //                 AddClickCount: values.AddClickCount,
      //                 DateOfBirth: event.target.value.toString(),
      //                 RelationName: values.RelationName,
      //                 RelationTypeArray: this.state.RelationTypeArray,
      //                 RelationTypeId: values.RelationTypeId,
      //                 WitnessName: values.WitnessName,
      //                 id: y.id
      //               }
      //             : x
      //       )
      //     };
      //   }
      // )
    });
  };
  // To Close Dialog PopUp
  public handleDraftClose = () => {
    this.setState({ ...this.state, dialogOpen: false, open: false });
  };
  public handleExpandClose = () => {
    this.setState({ ...this.state, dialogExpandOpen: false, open: false });
  };

  public handleTownshipClick = (id: number) => {
    localStorage.removeItem("0");
   // localStorage.removeItem(`${this.state.enterApplicationId}`);
   const ThemeCityName = this.state.townshipValues
   .filter((x:ITownshipValues) => x.TownshipId === id)
   .map((x:ITownshipValues) => x.TownshipName)[0]

    mileStoneValues(id).then(res => {
    this.setState({
      ...this.state,
      SubmitValues: {...this.state.SubmitValues, TownshipName: ThemeCityName },
      projectValues : res.objProjectRulesList.filter(
        (y: IMileStoneDropDownValues) =>
          y.RuleName !== null && y.RuleName !== undefined
      ),
    // tslint:disable-next-line:object-literal-sort-keys    
    Boundaries: "",
      Block: "",
      Colony:"",
      CompleteDetails: "",
      District: "",
      GeometricString: "",
      GeometryDataFromMap:"",
      GlobalId: "",
      Mandal:"",
      ParcelId:"",
      Plot:'',
      Sector:'',
      SurveyNumberByPlanning:'',
      TempGlobalId: '',
      TownShip: '',  
      Village: '',
      // tslint:disable-next-line:object-literal-sort-keys
      enterApplicationId:"0",
      TotalLandCost: 0,
      AmountPaid: 0,
      LeaseAmount: 0,
      AmountToBePaid: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      AvailableLandArea: this.state.townshipValues
        .filter((x: IDashboardStateValues) => x.TownshipId === id)
        .map((y: IDashboardStateValues) => y.AvailableLandSize)[0],
      TownshipId: id,
      // tslint:disable-next-line:object-literal-sort-keys
      activeStep : 0,

      
      check:false,
      mapPopUpOpen: this.state.activeStep === 0 ? true : false,
      townshipWithId: true,
      MileStoneArray: this.state.MileStoneArray.map((x:any)=> {
        return {
          ...x,
          mileStoneValues: res.objProjectRulesList.filter(
            (y: IMileStoneDropDownValues) =>
              y.RuleName !== null && y.RuleName !== undefined
          ),
        }
      })
      // UnitId: this.state.townshipValues
      //   .filter((x: IDashboardStateValues) => x.TownshipId === id)
      //   .map((y: IDashboardStateValues) => y.)[0],
      // townshipValues1: this.state.townshipValues.filter(
      //   (x: IDashboardStateValues) => x.TownshipId === id
      // )
    }) 
  })
  // tslint:disable-next-line:no-console
  .catch(err => console.log(err));

    !this.state.townshipWithId
      ? this.props.history.push(
          `/page/landAllocation/AllocationForm/proposalForm/${id}`
        )
      : this.setState({ ...this.state });

    // this.props.history.push(`/page/AllocationForm/proposalForm/${id}`);
  };

  public handleTownshipClick1 = (id: number) => {

   // localStorage.removeItem("0");
    // localStorage.removeItem(`${this.state.enterApplicationId}`);
    const ThemeCityName = this.state.townshipValues
    .filter((x:ITownshipValues) => x.TownshipId === id)
    .map((x:ITownshipValues) => x.TownshipName)[0]

mileStoneValues(id).then(res => {
    this.setState({
      ...this.state,
      SubmitValues:{...this.state.SubmitValues, TownshipName: ThemeCityName},
      projectValues : res.objProjectRulesList.filter(
        (y: IMileStoneDropDownValues) =>
          y.RuleName !== null && y.RuleName !== undefined
      ),
    // tslint:disable-next-line:object-literal-sort-keys
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
      .map((z:ISearchValues) => ({...z,
        AvailableLandArea: this.state.townshipValues
        .filter((x: IDashboardStateValues) => x.TownshipId === id)
        .map((y: IDashboardStateValues) => y.AvailableLandSize)[0]
      })),
      // tslint:disable-next-line:object-literal-sort-keys
      AvailableLandArea: this.state.townshipValues
        .filter((x: IDashboardStateValues) => x.TownshipId === id)
        .map((y: IDashboardStateValues) => y.AvailableLandSize)[0],
      TownshipId: id,
      TotalLandCost: 0,
      AmountPaid: 0,
      LeaseAmount: 0,
      AmountToBePaid: 0,
      draftWithId: true,
      // tslint:disable-next-line:object-literal-sort-keys
      Block: "",
      Boundaries: "",
      Colony: "",
      CompleteDetails: "",
      District: "",
      GeometricString: "",
      GeometryDataFromMap: "",
      GlobalId: 0,
      Mandal: "",
      ParcelId: "",
      Plot: "",
      Sector: "",
      SurveyNumberByPlanning: "",
      TempGlobalId: "",
      TownShip: "",
      Village: "",
     mapPopUpOpen: this.state.draftActiveStep === 0 ? true : false,
      MileStoneArray: this.state.MileStoneArray.map((x:any)=> {
        return {
          ...x,
          mileStoneValues: res.objProjectRulesList.filter(
            (y: IMileStoneDropDownValues) =>
              y.RuleName !== null && y.RuleName !== undefined
          ),
        }
      })

      // UnitId: this.state.townshipValues
      //   .filter((x: IDashboardStateValues) => x.TownshipId === id)
      //   .map((y: IDashboardStateValues) => y.)[0],
      // townshipValues1: this.state.townshipValues.filter(
      //   (x: IDashboardStateValues) => x.TownshipId === id
      // )
    })
  }).catch(err =>
     // tslint:disable-next-line:no-console
     console.log(err));
    
  };
  public onPropertyHandleSubmit = (values:IpropertyDetails) => {
  
   this.setState({...this.state,
    District: values.District,
    // tslint:disable-next-line:object-literal-sort-keys
    Corporation: values.Corporation,
    Mandal:values.Mandal,
    Village: values.Village,
    TownShip: values.TownShip,
    Sector: values.Sector,
    Colony: values.Colony,
    Locality:values.Locality,
    ZoneNo: values.ZoneNo,
    WardNo: values.WardNo,
    Block: values.Block,
    Street: values.Street,
    Enumerationblock:values.Enumerationblock,
    PlotNo: values.PlotNo,
    ElectionWard: values.ElectionWard,
    DoorNo: values.DoorNo,
    Pincode: values.Pincode,
    SurveyNumber:values.SurveyNumber,
    PattaNumber: values.PattaNumber,
    VacantLandArea: values.VacantLandArea,
    CurrentMarketValue: values.CurrentMarketValue,
    RegisteredDocumentValue: values.RegisteredDocumentValue,
    EffectiveDate: values.EffectiveDate,
    LayoutPermitNumber:values.LayoutPermitNumber,
    LayoutPermitDate: values.LayoutPermitDate,
    CertificateNumber: values.CertificateNumber,
    OccupancyCertificateDate: values.OccupancyCertificateDate,
    ExtentOfSite: values.ExtentOfSite,
    reasonForCreation: values.reasonForCreation,
    selectfloorValues: this.state.selectfloorValues,
    selectroofValues: this.state.selectroofValues,
    selectwallValues: this.state.selectwallValues,
    selectwoodValues:this.state.selectwoodValues,
    aminityValues1: this.state.aminityValues1,
    selectFloorValues:this.state.selectFloorValues,
    selectClassificationValues: this.state.selectClassificationValues,
     
     FloorArray: values.FloorArray,
     // tslint:disable-next-line:object-literal-sort-keys
     East: values.East,
     North: values.North,
     West: values.West,
     TotalTaxAmount: values.TotalTax,

     TotalTax:values.TotalTax,
     South:values.South,
     EnumMasterID: values.EnumMasterID,
     roofId: values.roofId,
     wallId: values.wallId,
     woodId: values.woodId,
     aminityTypes: values.aminityTypes,

    activeStep: this.state.activeStep + 1,
    })
 }
  public handleTownShipIdsClick = () => {
    this.setState({
      ...this.state,
      townshipWithId: false,
      // tslint:disable-next-line:object-literal-sort-keys
      ProposalFormApplicationIdValues: [],
    //  TownshipId: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      LandAllocatedToId: 1,
      landAllocatedTo: "1",
      LandAllocatedTo: "1",
      // tslint:disable-next-line:object-literal-sort-keys
      allocationTypeId: -1,

     // authorizedPersonName: "",

      // tslint:disable-next-line:object-literal-sort-keys
      OrganizationName: "",
      authorisedPersonEmailAddress: "",
      // tslint:disable-next-line:object-literal-sort-keys
      AgreementTypeId: 0,
      AgreementName: "",
     // enterApplicationId: "",
      mobileNumber: "",
      applicationTableValues: [],
      TypeOfAllocationName: "",
      RelationTypeName: "",
      agreementTypeValues: [],
      TownshipName: "",
      // AllocationId: 0,
      AllocationSubTypeId: 0,
      // AllocationName: "",

      image1: "",
      image2: "",
      image3: "",
      image5: "",
      image9: "",

      OrgPhoneNumber: "",
      OrgEmailAddress: "",
      HouseNoBuildingName: "",
      StreetNameLocality: "",
      GSTNumber: "",
      // Country: "",
      // State: "",
      City: "",
      ZipCode: "",
      RegistrationNumber: "",

      CountryId: 0,
      CountryName: "",
      StateId: 0,
      StateName: "",
      WitnessName: "",
      RelationName: "",
      AuthDateOfBirth: "",
      DateOfBirth:'',
      LandAllocatedName: "",
      RelationType: 0,
      RelationDateOfBirth: '',

      // PhotoIdTypeName: "",
      authorisedPersonValues: [
        {
          AuthorisedPersonEmailAddress: "",
          // tslint:disable-next-line:object-literal-sort-keys
          AuthDateOfBirth: "",
          FirstName: "",
          HouseNo: "",
          LastName: "",
          MobileNumber: "",
          PhotoIdNumber: "",
          PhotoIdType: 0,
          PhotoIdTypeName: "",
          RelationName: "",
          AuthRelationTypeId: 0,
          RelationTypeName: "",
          StreetName: "",
          authImage: ""
        }
      ],

      // tslint:disable-next-line:object-literal-sort-keys

      AvailableLandArea: 0,
      RequiredLandSize: undefined,
      LeaseAmount: 0,
      LeaseStartDate: "",
      LeaseEndDate: "",
      GoNumber: "",
      GoDate: "",
      ProjectName: "",
      ProjectPurpose: "",
      ProjectDescription: "",
      RelationTypeId: 0,
      WitnessDetailsFormArray: [
        {
          AddClickCount: 0,
          WitnessName: "",
          id: 0,
          // tslint:disable-next-line:object-literal-sort-keys
          RelationName: "",
          RelationType: 0,
          RelationDateOfBirth: "",
          RelationTypeArray: []
        }
      ],
      witnessArray: [],
      AddClickCount: 0,
      LandAllocationId: 0,
      LandAllocationTypeName: "",
      UnitId: 1,
      initialUnitId: 0,

      unitName: "",
      LeaseTenure: 0,
      Number: 0,
      RuleId: 0,
      RuleName: "",
      AddGoValueClickCount:0,
      AddMilestoneClickCount: 0,
      LandRelease: "",
      ProjectTypeId: 0,
      MileStoneArray: [
        {
          AddMilestoneClickCount: 0,
          LandRelease: "",
          RuleName: "",
          // tslint:disable-next-line:object-literal-sort-keys
          RuleId: 0,
          DateOfCompletion: "",
          mileStoneValues: [],
          id: 0,
          ProjectRuleTypes: [],
          ProjectTypeId: 0,
          ruleTypeValues: [],
          sourceTypeValues: [],
          RuleSourceTypeId: 0,
          ConditionTypeId: 0,
          ConditionTypeValues: [],
          projectValues: []
        }
      ],

      newMileStoneValues: [],
      UserId: 0,
      RuleSourceTypeId: 0,
      ConditionTypeId: 0,
      minValue: 0,
      maxValue: 0,
      value: 0,
      TypeOfAllocationId: 0,
      projectTypes: [],

      AgreementPurpose: "",
      AggrementDescription: "",
      ProjectStartDate: "",
      ProjectEndDate: "",
      TotalBudget: 0,
      ProjectFundedBy: "",
      ProjectCoordinator: "",
      ProjectRules: "",
      RequiredLandSizeBeforeAllocation: 0,
      RequiredLandSizeType: "",
      LandSize: 0,
      LandSizeType: 0,
      RenewalForEvery: 0,
      RenewalAmountPercentage: 0,
      TotalLeaseAmount: 0,
      PricePerUnit: 0,
      TotalAmount: 0,
      InitialAllocationLandSize: 0,
      InitialAllocationLandSizeType: "",
      InitialAllocation: 0,
      requiredLandUnitId: 0,
      projectRules: 0,
      DateOfCompletion: "",
      ruleName: "",
    sourceTypeName:"",
    conditionTypeName:"",
      SubmitValues: {},
      selectDepartmentName: ""
    });
    if(this.state.WithInAGC === true || this.state.OutOfAGC === true){
    this.props.history.push(`/page/landAllocation/AllocationForm/proposalForm`);
    }
    else 
    {
      this.setState({
        ...this.state, agcPopUp: true
      })
    }
  };
  public handleMilestonePopUpClose = () => {
    this.setState({ ...this.state, milestonePopUp: false, SuccessMileStonePopUp: false });
  };

  public handlePopoverOpen = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };
  public handleAvailableLandAreaChange = (event: any, values: ILandallocationFormStatevalues &  ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps 
    ) => {
    this.setState({ ...this.state, AvailableLandArea: event.target.value, 
    ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
    .map((x:ISearchValues) => {
      return (
        {
          ...x,
          LandAllocationTypeId: values.LandAllocationId,
            // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationType: values.LandAllocationTypeName,
            AvailableLandArea: event.target.value,
            AvailbleLandAreaUnits:values.UnitId,
            TenurePeriodId: values.Number,
            LeaseAmountperAcre: values.LeaseAmount,
            LeaseStartDate: values.LeaseStartDate,
            LeaseEndDate: values.LeaseEndDate,
            ProjectTitle: values.ProjectName,
            ProjPurpose: values.ProjectPurpose,
           
            ProjDescription: values.ProjectDescription,
            TownshipId: values.TownshipId,
            TownshipName:values.TownshipName,
           
            ProjectRules: values.projectRules,
           
           
            GOMnumber: values.GoNumber,
            GOMdate: values.GoDate,
           
            TotalAmount: values.TotalLeaseAmount,
            InitialAllocation: values.InitialAllocation,

            InitialAllocationLandSize: values.InitialAllocationLandSize,
            InitialAllocationLandSizeType: values.initialUnitId,
            // LeaseTenure: values.Number,
        
           
            RequiredLandArea: values.RequiredLandSize
        }
      )
    })
  })
  };

  public handleGoDateChange = (event: any,values:IGoValues,index:number ) => {

    this.setState({
      ...this.state,
     // GoDate: event.target.value,
      ProjectDetailsArray: this.state.ProjectDetailsArray
      .map((y: IGoValues) => y.id === index ? {
        GoDate: event.target.value,
        GoNumber: values.GoNumber,
        id: values.id,
        // tslint:disable-next-line:object-literal-sort-keys
        AddGoValueClickCount: this.state.AddGoValueClickCount + 1,    
        
    }:y),
      // ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
      //   (y: ISearchValues) => {

 
      //     return {
      //       ...y,
      //       AvailableLandArea: values.AvailableLandArea,

      //       GOMNumber: values.GoNumber,
      //       LandAllocationAllValues: [
      //         ...this.state.LandAllocationAllValues,
      //         ...values.LandAllocationAllValues
      //       ],
      //       LeaseAmount: values.LeaseAmount,
      //       LeaseEndDate: values.LeaseEndDate,
      //       LeaseStartDate: values.LeaseStartDate,
      //       LeaseTenure: values.Number,
      //       ProjDescription: values.ProjectDescription,
      //       ProjectTitle: values.ProjectName,
      //       // tslint:disable-next-line:object-literal-sort-keys
      //       ProjPurpose: values.ProjectPurpose,
      //       RequiredLandSize: values.RequiredLandSize,
      //       projectValues: values.projectValues,
      //       // tslint:disable-next-line:object-literal-sort-keys
      //       GOMdate: event.target.value
      //     };
      //   }
      // )
    });
  };

  public handleProjectPurpose = (event: any) => {
    this.setState({ ...this.state, ProjectPurpose: event.target.value });
  };
 
  public handleAuthFirstNameChange = (event:any,values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {



      postDepartmentUserDropDownList(event.ApplicationId).then(res => {
        // this.setState({ ...this.state, selectDepartmentList: res.departmentMasterViewModel });
        this.setState({ ...this.state, selectDepartmentList: res.deptusersViewModelLst });
      });

    this.setState({ ...this.state, 

      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => 
      {
           
        return (
          {
            ...x,
            AuthPersonName1: event.target.value,
            AuthPersonName2: values.LastName,
           // tslint:disable-next-line:object-literal-sort-keys
           AuthEmailId: values.AuthorisedPersonEmailAddress, 
        AuthDateOfBirth:values.AuthDateOfBirth,
            FirstName:event.target.value, 
          // tslint:disable-next-line:object-literal-sort-keys
          AuthAddress1:values.HouseNo
          ,
            LastName:values.LastName
          ,
           AuthPhoneNumber:values.MobileNumber
           ,
            AuthPhotoIdNumber: values.PhotoIdNumber,
           AuthPhotoIdType:this.state.photoIdTypeArray
           .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
           .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
            // tslint:disable-next-line:object-literal-sort-keys
            AuthPhotoId:values.PhotoIdType,
            
             RelationName:values.RelationName,
            
            RelationType: values.AuthRelationTypeId,

            RelationTypeName: this.state.RelationTypeArray
            .filter((z:IRelationTypeValues)=> z.RelationTypeId === values.AuthRelationTypeId)
            .map((z:IRelationTypeValues) => z.RelationType)[0],
          AuthPhotoIdPath: values.authImage
            
          }
        )
      } ),
        authorisedPersonValues: this.state.authorisedPersonValues.map((y:IAuthorizedPersonValues) => {
           return ({...y,
            AuthRelationTypeId: values.AuthRelationTypeId,
          HouseNo: values.HouseNo , 
          StreetName: values.StreetName,
          // tslint:disable-next-line:object-literal-sort-keys
          AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
          LastName:values.LastName,
          MobileNumber:values.MobileNumber,
          PhotoIdNumber:values.PhotoIdNumber ,
          PhotoIdType:values.PhotoIdType,
        // tslint:disable-next-line:object-literal-sort-keys
        authImage:values.authImage,
        FirstName: event.target.value,
        AuthDateOfBirth:values.AuthDateOfBirth,
        RelationName:values.RelationName
        })})
    
    });

  }

  public handleAuthLastNameChange = (event:any, values:  IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {
    this.setState({ ...this.state,  
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => 
      {
        return (
          {
            ...x,
             AuthEmailId: values.AuthorisedPersonEmailAddress,
          
            // tslint:disable-next-line:object-literal-sort-keys
            AuthDateOfBirth:values.AuthDateOfBirth,
                FirstName:values.FirstName,
                
              // tslint:disable-next-line:object-literal-sort-keys
              AuthAddress1:values.HouseNo
              ,
                LastName:event.target.value
              ,
               AuthPhoneNumber:values.MobileNumber
               ,
                AuthPhotoIdNumber: values.PhotoIdNumber,
                 // tslint:disable-next-line:object-literal-sort-keys
                 AuthPhotoId:values.PhotoIdType,
               AuthPhotoIdType:this.state.photoIdTypeArray
               .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
               .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
                
             RelationName:values.RelationName,
                
                RelationType: values.AuthRelationTypeId,
    
                RelationTypeName: this.state.RelationTypeArray
                .filter((z:IRelationTypeValues)=> z.RelationTypeId === values.AuthRelationTypeId)
                .map((z:IRelationTypeValues) => z.RelationType)[0],
              AuthPhotoIdPath: values.authImage

           
            
          }
        )
      } ),  
      authorisedPersonValues: this.state.authorisedPersonValues.map((y:IAuthorizedPersonValues) => {
      return ({...y,
        AuthRelationTypeId: values.AuthRelationTypeId,

     HouseNo: values.HouseNo , 
     StreetName: values.StreetName,
     // tslint:disable-next-line:object-literal-sort-keys
     AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
     MobileNumber:values.MobileNumber,
     PhotoIdNumber:values.PhotoIdNumber ,
     PhotoIdType:values.PhotoIdType,
   // tslint:disable-next-line:object-literal-sort-keys
   authImage:values.authImage,
   FirstName: values.FirstName,
   AuthDateOfBirth:values.AuthDateOfBirth,
   RelationName:values.RelationName,
   LastName:event.target.value
   })})
  })

  }

  public handleAuthDateOfBirthChange = (event:any, values:IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {


    this.setState({ ...this.state,  
      AuthDateOfBirth: event.target.value,

      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => 
      {
        return (
          {
            ...x,
           AuthEmailId: values.AuthorisedPersonEmailAddress,
          
        // tslint:disable-next-line:object-literal-sort-keys
        AuthDateOfBirth:event.target.value,
            FirstName:values.FirstName,
            
          // tslint:disable-next-line:object-literal-sort-keys
          AuthAddress1:values.HouseNo
          ,
            LastName:values.LastName
          ,
           AuthPhoneNumber:values.MobileNumber
           ,
            AuthPhotoIdNumber: values.PhotoIdNumber,
             // tslint:disable-next-line:object-literal-sort-keys
             AuthPhotoId:values.PhotoIdType,
           AuthPhotoIdType:this.state.photoIdTypeArray
           .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
           .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
            
         RelationName:values.RelationName,
            
            RelationType: values.AuthRelationTypeId,

            RelationTypeName: this.state.RelationTypeArray
            .filter((z:IRelationTypeValues)=> z.RelationTypeId === values.AuthRelationTypeId)
            .map((z:IRelationTypeValues) => z.RelationType)[0],
          AuthPhotoIdPath: values.authImage
            
          }
        )
      } ),
      authorisedPersonValues: this.state.authorisedPersonValues.map((y:IAuthorizedPersonValues) => {
        return ({...y,
          AuthRelationTypeId: values.AuthRelationTypeId,

       HouseNo: values.HouseNo , 
       StreetName: values.StreetName,
       // tslint:disable-next-line:object-literal-sort-keys
       AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
       MobileNumber:values.MobileNumber,
       PhotoIdNumber:values.PhotoIdNumber ,
       PhotoIdType:values.PhotoIdType,
     // tslint:disable-next-line:object-literal-sort-keys
     authImage:values.authImage,
     FirstName: values.FirstName,
     AuthDateOfBirth:event.target.value,
     RelationName:values.RelationName,
     LastName:values.LastName
     })})
    });

  }

  public handleAuthMobileNumberChange = (event:any, values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {
      this.setState({ ...this.state,  
        MobileNumber: event.target.value,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => 
        {
          return (
            {
              ...x,
              
             AuthEmailId: values.AuthorisedPersonEmailAddress, 
          // tslint:disable-next-line:object-literal-sort-keys
          AuthDateOfBirth:values.AuthDateOfBirth,
              FirstName:values.FirstName, 
            // tslint:disable-next-line:object-literal-sort-keys
           //  AuthAddress1:values.HouseNo
           // ,
              LastName:values.LastName
            ,
             AuthPhoneNumber:event.target.value.toString()
             ,
              AuthPhotoIdNumber: values.PhotoIdNumber,
               // tslint:disable-next-line:object-literal-sort-keys
               AuthPhotoId:values.PhotoIdType,
             AuthPhotoIdType:this.state.photoIdTypeArray
             .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
             .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
               RelationName:values.RelationName,
              
              RelationType: values.AuthRelationTypeId,
  
              RelationTypeName: this.state.RelationTypeArray
              .filter((z:IRelationTypeValues)=> z.RelationTypeId === values.AuthRelationTypeId)
              .map((z:IRelationTypeValues) => z.RelationType)[0],
            AuthPhotoIdPath: values.authImage,
            
              
            }
          )
        }),
        authorisedPersonValues: this.state.authorisedPersonValues.map((y:IAuthorizedPersonValues) => {
          return ({...y,
            AuthRelationTypeId: values.AuthRelationTypeId,

         HouseNo: values.HouseNo , 
         StreetName: values.StreetName,
         // tslint:disable-next-line:object-literal-sort-keys
         AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
         MobileNumber:event.target.value,
         PhotoIdNumber:values.PhotoIdNumber ,
         PhotoIdType:values.PhotoIdType,
       // tslint:disable-next-line:object-literal-sort-keys
       authImage:values.authImage,
       FirstName: values.FirstName,
       AuthDateOfBirth:values.AuthDateOfBirth,
       RelationName:values.RelationName,
       LastName:values.LastName
       })})
      });
    

  }

  public handleAuthRelationNameChange = (event:any, values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {
    this.setState({ ...this.state,  
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => 
      {
        return (
          {
            ...x,
           AuthEmailId: values.AuthorisedPersonEmailAddress, 
        // tslint:disable-next-line:object-literal-sort-keys
        AuthDateOfBirth:values.AuthDateOfBirth,
            FirstName:values.FirstName, 
          // tslint:disable-next-line:object-literal-sort-keys
          AuthAddress1:values.HouseNo
          ,
            LastName:values.LastName
          ,
           AuthPhoneNumber:values.MobileNumber
           ,
            AuthPhotoIdNumber: values.PhotoIdNumber,
             // tslint:disable-next-line:object-literal-sort-keys
             AuthPhotoId:values.PhotoIdType,
           AuthPhotoIdType:this.state.photoIdTypeArray
           .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
           .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
            
           RelationName:event.target.value,
            
             RelationType: values.AuthRelationTypeId,

            RelationTypeName: this.state.RelationTypeArray
            .filter((z:IRelationTypeValues)=> z.RelationTypeId === values.AuthRelationTypeId)
            .map((z:IRelationTypeValues) => z.RelationType)[0],
          AuthPhotoIdPath: values.authImage
            
          }
        )
      }),
      RelationName: event.target.value,

      authorisedPersonValues: this.state.authorisedPersonValues.map((y:IAuthorizedPersonValues) => {
        return ({...y,
          AuthRelationTypeId: values.AuthRelationTypeId,

       HouseNo: values.HouseNo , 
       StreetName: values.StreetName,
       // tslint:disable-next-line:object-literal-sort-keys
       AuthorisedPersonEmailAddress:values.AuthorisedPersonEmailAddress,
       MobileNumber:values.MobileNumber,
       PhotoIdNumber:values.PhotoIdNumber ,
       PhotoIdType:values.PhotoIdType,
     // tslint:disable-next-line:object-literal-sort-keys
     authImage:values.authImage,
     FirstName: values.FirstName,
     AuthDateOfBirth:values.AuthDateOfBirth,
     RelationName:event.target.value,
     LastName:values.LastName
     })})
    });
  }

  public handleAuthorisedPersonEmailAddresshChange = (event:any, values: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues) => {
    this.setState({ ...this.state, 
      AuthorisedPersonEmailAddress: event.target.value,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => 
      {
        return (
          {
            ...x,
            AuthDateOfBirth:values.AuthDateOfBirth,
           AuthEmailId: event.target.value, 
            FirstName:values.FirstName, 
          // tslint:disable-next-line:object-literal-sort-keys
          AuthAddress1:values.HouseNo
          ,
            LastName:values.LastName
          ,
           AuthPhoneNumber:values.MobileNumber
           ,
            AuthPhotoIdNumber: values.PhotoIdNumber,
             // tslint:disable-next-line:object-literal-sort-keys
             AuthPhotoId:values.PhotoIdType,
           AuthPhotoIdType:this.state.photoIdTypeArray
           .filter((z:IPhotoIdTypeValues) => z.PhotoIdType === values.PhotoIdType)
           .map((q:IPhotoIdTypeValues) => q.PhotoIdName)[0],
             RelationName:values.RelationName,
            
            RelationType: values.AuthRelationTypeId,

            RelationTypeName: this.state.RelationTypeArray
            .filter((z:IRelationTypeValues)=> z.RelationTypeId === values.AuthRelationTypeId)
            .map((z:IRelationTypeValues) => z.RelationType)[0],
          AuthPhotoIdPath: values.authImage
            
          }
        )
      } ),

      authorisedPersonValues: this.state.authorisedPersonValues.map((y:IAuthorizedPersonValues) => {
        return ({...y,
          AuthRelationTypeId: values.AuthRelationTypeId,

       HouseNo: values.HouseNo , 
       StreetName: values.StreetName,
       // tslint:disable-next-line:object-literal-sort-keys
       AuthorisedPersonEmailAddress:event.target.value,
       MobileNumber:values.MobileNumber,
       PhotoIdNumber:values.PhotoIdNumber ,
       PhotoIdType:values.PhotoIdType,
     // tslint:disable-next-line:object-literal-sort-keys
     authImage:values.authImage,
     FirstName: values.FirstName,
     AuthDateOfBirth:values.AuthDateOfBirth,
     RelationName:values.RelationName,
     LastName:values.LastName
     })})
    });
  }

  public handleOrgRegistrationNumberChange = (event:any,values:IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {
    this.setState({
      ...this.state, 
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
      .map((x:ISearchValues) => {
        return {
          ...x,
          OrgAddress1: values.HouseNoBuildingName,
          OrgCountryId: values.CountryId,
          OrgEmailid: values.OrgEmailAddress,
          // tslint:disable-next-line:object-literal-sort-keys
          OrgAddress2: values.StreetNameLocality,
          OrgGST: values.GSTNumber,
          OrgPhoneNumber: values.OrgPhoneNumber,
          OrganiztionName: values.OrganizationName,
        
          OrgStateId: values.StateId,
        
          OrgCityName: values.City,
          OrgZipCode: values.ZipCode,
          OrgRegistrationNumber: event.target.value
        }
      }),
      RegistrationNumber: event.target.value,



    })
  }
  public handleOrganizationNameChange = (event:any, values:   IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {
      this.setState({...this.state, 
        OrganizationName: event.target.value,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
        .map((x:ISearchValues) => {
          return {
            ...x,
            OrgAddress1: values.HouseNoBuildingName,
            OrgCountryId: values.CountryId,
            OrgEmailid: values.OrgEmailAddress,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress2: values.StreetNameLocality,
            OrgGST: values.GSTNumber,
            OrgPhoneNumber: values.OrgPhoneNumber,
            OrganiztionName: event.target.value,
          
            OrgStateId: values.StateId,
          
            OrgCityName: values.City,
            OrgZipCode: values.ZipCode,
            OrgRegistrationNumber: values.RegistrationNumber
          }
        }),

      })

  }

  public handleOrgCityChange = (event:any, values:   IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {

      this.setState({...this.state,
      City: event.target.value,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
      .map((x:ISearchValues) => {
        return {
          ...x,
          OrgAddress1: values.HouseNoBuildingName,
          OrgCountryId: values.CountryId,
          OrgEmailid: values.OrgEmailAddress,
          // tslint:disable-next-line:object-literal-sort-keys
          OrgAddress2: values.StreetNameLocality,
          OrgGST: values.GSTNumber,
          OrgPhoneNumber: values.OrgPhoneNumber,
          OrganiztionName: values.OrganizationName,
        
          OrgStateId: values.StateId,
        
          OrgCityName: event.target.value,
          OrgZipCode: values.ZipCode,
          OrgRegistrationNumber: values.RegistrationNumber
        }
      }),

    })

  }

  public handleOrgEmailAddressChange = (event:any, values:   IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {

      this.setState({...this.state,
        OrgEmailAddress: event.target.value,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
        .map((x:ISearchValues) => {
          return {
            ...x,
            OrgAddress1: values.HouseNoBuildingName,
            OrgCountryId: values.CountryId,
            OrgEmailid: event.target.value,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress2: values.StreetNameLocality,
            OrgGST: values.GSTNumber,
            OrgPhoneNumber: values.OrgPhoneNumber,
            OrganiztionName: values.OrganizationName,
          
            OrgStateId: values.StateId,
          
            OrgCityName: values.City,
            OrgZipCode: values.ZipCode,
            OrgRegistrationNumber: values.RegistrationNumber
          }
        }),
      })   
  }
 

  public handleOrgGSTNumberChange = (event:any, values:   IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {

      this.setState({...this.state,
        GSTNumber: event.target.value,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
        .map((x:ISearchValues) => {
          return {
            ...x,
            OrgAddress1: values.HouseNoBuildingName,
            OrgCountryId: values.CountryId,
            OrgEmailid: values.OrgEmailAddress,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress2: values.StreetNameLocality,
            OrgGST: event.target.value,
            OrgPhoneNumber: values.OrgPhoneNumber,
            OrganiztionName: values.OrganizationName,
          
            OrgStateId: values.StateId,
          
            OrgCityName: values.City,
            OrgZipCode: values.ZipCode,
            OrgRegistrationNumber: values.RegistrationNumber
          }
        }),
  
      })
  
    
  }
  public readonly handleChangePageAminity = (
    event: any,
    pageAminity: number
  ) => {
    this.setState({...this.state,
      
      pageAminity ,
      pageBuilding: 0,    
      pageCategory: 0,
      pageNatureUsage: 0 ,
      pagePropertyDepartment: 0 ,
      pagePropertyType : 0
    });
  };
 
  // for rows change per page
  public readonly handleChangeRowsPerPageAminity = (event: any) => {
    this.setState({ rowsPerPageAminity: event.target.value });
  };
  //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
  //       this.setState(event.target.value)
  //   }
  // fetch Call for Pop Up details based on ID
  public onHandleActionClickAminity = (
    aminityValues: IAminitiesTypeStateValues
  ) => {
    this.setState({
      ...this.state,
      aminityValues
      // open: documentValues.IsActive === true ? true : false,
      // open2: documentValues.IsActive === false ? true : false
      // tslint:disable-next-line:object-literal-sort-keys
      // documentName: name,
      // dropDownOpen: value === true ? event.currentTarget : null,
      // dropDownOpen2: value === false ? event.currentTarget : null,
      // id
    });
  };
  public onHandleEditNameChangeAminity = (event: any) => {
    this.setState({ ...this.state, AmenitiesName: event.target.value });
  };
  public onHandleAddChangeAminity = (event: any) => {
    this.setState({ ...this.state, newAminityName: event.target.value });
  };
  // for Edit PopUp open
  public onHandleEditActionClickAminity = (
    aminityValues: IAminitiesTypeStateValues
  ) => {
    this.setState({
      ...this.state,
      aminityValues,
      editPopUpOpenAminity: true,
      openAminity: false
    });
  };
  public getActivestateAminity = (state: string) => {
    switch (state) {
      case "Active".toLowerCase():
        return "true";
      case "InActive".toLowerCase():
        return "false";
      default:
        return state;
    }
  };
  public onHandleSearchAminity = (event: any) => {
    // tslint:disable-next-line:no-console
    const searchInputAminity = event.target.value;
    const data = this.state.AminityTypeMasterList.filter(
      (x: IAminitiesTypeStateValues) =>
        searchInputAminity !== ""
          ? this.documentNameIncludesAmininty(searchInputAminity, x.AmenitiesName) ||
            x.IsActive.toString()
              .toLowerCase()
              .includes(this.getActivestateAminity(searchInputAminity.toLowerCase()))
          : x
    );
    this.setState({
      ...this.state,
      countAminity: data.length,
      searchInputAminity
    });
  };
  // deActivate Popup open
  public onHandleDeActivatePopUpOpenAminity = (aminityValues: any) => {
    this.setState({
      ...this.state,
      aminityValues,
      deActivatePopUpOpenAminity: true,
      openAminity: false
    });
  };
  // Activate Popup open
  public onHandleActivatePopUpOpenAminity = (aminityValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpenAminity: true,
      aminityValues,
      open2Aminity: false
    });
  };
  // add Popup open
  public onHandleAddPopUpOpenAminity = () => {
    this.setState({ ...this.state, addPopUpOpenAminity: true });
  };
  // fetch call for Edited Document Id Save
  public onHandleEditSaveAminity = (
    values: IEditAminityProps & IEditAminitiesValues
  ) => {
    // fetch call for Edit values Save
    postEditAminitiesValues(values)
      .then(res => {
        this.setState({
          ...this.state,
          // AmenitiesId: values.AmenitiesId,
          // AmenitiesName: values.AmenitiesName,
          // AminityTypeMasterList: this.state.AminityTypeMasterList.map(
          //   (x: IAminitiesTypeStateValues) =>
          //     x.AmenitiesId === values.AmenitiesId
          //       ? { ...x, AmenitiesName: res.model.AmenitiesName }
          //       : x
          // ),
          // documentTypeMasterList: res,
          editPopUpOpenAminity: false,
          editSuccessPopUpAminity: true
        });
      })
      .then(() =>
        getAminitiesGridValues().then(res => {
          this.setState({
            ...this.state,
            AminityTypeMasterList: res.jsonData.data,
            countAminity: res.jsonData.data.length
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // fetch call for Deactivate DocumentId
  public onHandleDeActivateSaveAminity = (event: any) => {
 
    postDeActivateAminitiesId(event)
      .then(res => {
        this.setState({
          ...this.state,
          deActivatePopUpOpenAminity: false
          //  DocumentTypeMasterList: res,
        });
      })
      .then(() =>
        getAminitiesGridValues().then(res => {
          this.setState({
            ...this.state,
            AminityTypeMasterList: res.jsonData.data
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  // To Close Dialog PopUp
  public onHandleCloseAminity = () => {
    this.setState({ ...this.state, });
  };
  // To Close Dialog PopUp
  public onHandleClose2Aminity = () => {
    this.setState({ ...this.state,  });
  };
  // To Close Edit PopUp Close
  public onHandleEditPopUpCloseAminity = () => {
    this.setState({ ...this.state,  });
  };
  // to Close Add PopUp
  
  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpCloseAminity = () => {
    this.setState({
      ...this.state, deActivatePopUpOpenAminity: false,
      // tslint:disable-next-line:object-literal-sort-keys
      editSuccessPopUpAminity: false, DocumentPopUpAminity: false,
      dialogAminity: false,
      dialog1Aminity: false,
      activatePopUpOpenAminity: false,
      editPopUpOpenAminity: false,
      addPopUpOpenAminity: false,
      newAminityName: "",
      open2Aminity: false,
      openAminity: false 
    });
  };
 
  public documentNameIncludesAmininty = (
    searchInputAminity: string,
    documentName?: string
  ) => {
    if (documentName) {
      return documentName
        .toLowerCase()
        .includes(searchInputAminity.toLowerCase());
    } else {
      return false;
    }
  };
  public onHandleAddSaveAminity = (
    values: IAddAminitiesValues & IAddAminitiesProps
  ) => {
    if (
      this.state.AminityTypeMasterList.filter(
        (x: IAminitiesTypeStateValues) =>
          x.AmenitiesName === values.newAminityName
      ).length === 0
    ) {
      postAddAminitiesTypeValues(
        // this.state.DocumentTypeMasterList.length,
        this.state.AminityTypeMasterList.length + 1,
        values.newAminityName
      )
        .then(res => {
          this.setState({
            ...this.state,
            AminityTypeMasterList: [
              ...this.state.AminityTypeMasterList,
              res.model
            ]
          });
        })
        .then(() =>
          getAminitiesGridValues().then(res => {
            this.setState({
              ...this.state,
              AminityTypeMasterList: res.jsonData.data,
              addPopUpOpenAminity: false,
              countAminity: res.jsonData.data.length,
              dialogAminity: true,

              newAminityName: ""
            });
          })
        )
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        dialog1Aminity: true,
        newAminityName: ""
      });
    }
  };
  public onHandleActivateClickAminity = (
    event: any,
    aminityValues: IAminitiesTypeStateValues
  ) => {
    postActivateAminitiesID(event)
      .then(res => {
        this.setState({
          ...this.state,
          //  DocumentTypeMasterList: res,
          activatePopUpOpenAminity: false
        });
      })
      .then(() =>
        getAminitiesGridValues().then(res => {
          this.setState({
            ...this.state,
            AminityTypeMasterList: res.jsonData.data,
            newAminityName: ""
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };



  public handleOrgHouseNumberChange = (event:any, values:   IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {

      this.setState({...this.state,
        HouseNoBuildingName: event.target.value,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
        .map((x:ISearchValues) => {
          return {
            ...x,
            OrgAddress1: event.target.value,
            OrgCountryId: values.CountryId,
            OrgEmailid: values.OrgEmailAddress,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress2: values.StreetNameLocality,
            OrgGST: values.GSTNumber,
            OrgPhoneNumber: values.OrgPhoneNumber,
            OrganiztionName: values.OrganizationName,
          
            OrgStateId: values.StateId,
          
            OrgCityName: values.City,
            OrgZipCode: values.ZipCode,
            OrgRegistrationNumber: values.RegistrationNumber
          }
        }),
  
      })
  
    
  }

  public handleOrgStreetNameChange = (event:any, values:   IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {

      this.setState({...this.state,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
        .map((x:ISearchValues) => {
          return {
            ...x,
            OrgAddress1: values.HouseNoBuildingName,
            OrgCountryId: values.CountryId,
            OrgEmailid: values.OrgEmailAddress,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress2: event.target.value,
            OrgGST: values.GSTNumber,
            OrgPhoneNumber: values.OrgPhoneNumber,
            OrganiztionName: values.OrganizationName,
          
            OrgStateId: values.StateId,
          
            OrgCityName: values.City,
            OrgZipCode: values.ZipCode,
            OrgRegistrationNumber:values.RegistrationNumber
          }
        })
  ,
  StreetNameLocality: event.target.value,

      })
  
    
  }
  public handleZipCodeChange = (event:any, values:   IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap) => {
    
      this.setState({...this.state,
        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues
        .map((x:ISearchValues) => {
          return {
            ...x,
            OrgAddress1: values.HouseNoBuildingName,
            OrgCountryId: values.CountryId,
            OrgEmailid: values.OrgEmailAddress,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress2: values.StreetNameLocality,
            OrgGST: values.GSTNumber,
            OrgPhoneNumber: values.OrgPhoneNumber,
            OrganiztionName: values.OrganizationName,
          
            OrgStateId: values.StateId,
          
            OrgCityName: values.City,
            OrgZipCode: values.ZipCode,
            OrgRegistrationNumber: values.RegistrationNumber
          }
        }),
        ZipCode: event.target.value,

      })
  
  }

  public handleDeleteimageClick =(id: number, image: any,getId:any) => {
    
    getId.value = null;
    this.setState({...this.state,
      disableUploadButton: true,
      disabledeleteButton:true,
  
      documentList2: this.state.documentList2
      .map((y:IDocumentPropValues) =>( y.PhotoId === id)? 
      ({...y, FileType: "", buttonUpload : false}): y),
       // tslint:disable-next-line:object-literal-sort-keys
       Uploadimages: this.state.Uploadimages
    .map((y:IDocumentPropValues) =>( y.PhotoId === id)? 
      ({...y, FileType: ""}): y),

  })
}

  public handleUploadButtonClick=(event:any,name: any, id: number) => {
    
    PostUploadImageDocuments(this.state.file,this.state.documentList2,id).then(res => {
 
      this.setState({
      ...this.state,
      disableUploadButton: true,
      disabledeleteButton:false,
      uploadPopUp: true,
      uploadedImagesCount: this.state.uploadedImagesCount + 1,
      // tslint:disable-next-line:object-literal-sort-keys
      documentList2 : this.state.documentList2
      .map((x:IDocumentPropValues) => id === x.PhotoId? 
      {...x, FileType: "http://" +res.PhotoIDPath , buttonUpload: false} : x ),

       // tslint:disable-next-line:object-literal-sort-keys
      //  Uploadimages:this.state.Uploadimages
      // .map((x:IUploadImageType) => (x.image === name)? {...x, [name]: "http://" +res.PhotoIDPath}: x),
      
 
      
    })
  })
    
  }


  public onGoValuesDeleteClick = (index: number) => {
    // tslint:disable-next-line:no-console
    this.setState({
      ...this.state,
      AddGoValueClickCount: this.state.AddGoValueClickCount - 1,
      ProjectDetailsArray: remove(index, this.state.ProjectDetailsArray)
    });
  };

public handleAmountPaidChange=(event: any, values : ILandallocationFormStatevalues &
  ILandAllocationValues &
  ISelectLandAllocationProps &
  ISelectThemeCityProps &
  IUnitProps &
  ILeaseTenureProps &
  ILeaseValues &
  IMileStoneDetailsProps &
  IMileStoneDetailsStateValues &
  IMilestoneDropDownProps &
  IRuleTypeValuesProps &
  IProjectValuesProps &
  ISourceValueProps &
  IConditionValueProps &
  IProjectRuleTypeProps &
  ICreateProposalProps) => {
  this.setState({...this.state,
    ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => ({
      ...x,
      AmountPaid: event.target.value,
      AmountToBePaid: values.TotalLandCost - parseInt(event.target.value,10),

    })),
     // tslint:disable-next-line:object-literal-sort-keys
     AmountPaid: event.target.value,
     AmountToBePaid: values.TotalLandCost - parseInt(event.target.value,10) >= 0? 
     values.TotalLandCost - parseInt(event.target.value,10) : 0 ,
     // LeaseAmount: Math.round(values.TotalLandCost/values.RequiredLandSizeBeforeAllocation)/values.Number,
    });
}

// public handleAmountToBePaidChange=(event: any, values : ILandallocationFormStatevalues &
//   ILandAllocationValues &
//   ISelectLandAllocationProps &
//   ISelectThemeCityProps &
//   IUnitProps &
//   ILeaseTenureProps &
//   ILeaseValues &
//   IMileStoneDetailsProps &
//   IMileStoneDetailsStateValues &
//   IMilestoneDropDownProps &
//   IRuleTypeValuesProps &
//   IProjectValuesProps &
//   ISourceValueProps &
//   IConditionValueProps &
//   IProjectRuleTypeProps &
//   ICreateProposalProps) => {
//   this.setState({...this.state, AmountToBePaid: event.target.value});

// }

public handleTotalLandCostChange=(event: any, values: ILandallocationFormStatevalues &
  ILandAllocationValues &
  ISelectLandAllocationProps &
  ISelectThemeCityProps &
  IUnitProps &
  ILeaseTenureProps &
  ILeaseValues &
  IMileStoneDetailsProps &
  IMileStoneDetailsStateValues &
  IMilestoneDropDownProps &
  IRuleTypeValuesProps &
  IProjectValuesProps &
  ISourceValueProps &
  IConditionValueProps &
  IProjectRuleTypeProps &
  ICreateProposalProps) => {
if(event.target.value){
  this.setState({
    ...this.state,
    ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => ({
      ...x,
      LeaseAmountperAcre: Math.round(
        (event.target.value/ values.RequiredLandSizeBeforeAllocation)/ values.Number),
      TotalLandCost:event.target.value, 

    })),
    // tslint:disable-next-line:object-literal-sort-keys
    LeaseAmount: Math.round(
      (event.target.value/ values.RequiredLandSizeBeforeAllocation)/ values.Number),
    TotalLandCost:event.target.value,  
    });
}else{
  this.setState({
    ...this.state,
    ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => ({
      ...x,
      LeaseAmountperAcre: 0,
      TotalLandCost:event.target.value, 

    })),
    // tslint:disable-next-line:object-literal-sort-keys
    LeaseAmount:0,
    TotalLandCost:event.target.value, 

  })
}
  
}

public handleAddRuleNameChange = (event:any) => {
  this.setState({...this.state,ruleName: event.target.value })
}

public handleMaxValueChange = (event:any) => {
  this.setState({...this.state,maxValue: event.target.value })

}

public handleMinValueChange = (event:any) => {
  this.setState({...this.state,
    minValue: event.target.value,
    ruleName:

    this.state.sourceTypeName +
    "should be" +
    this.state.conditionTypeName +
    this.state.maxValue +
    "and" +
    event.target.value  })

}

public handleValueChange = (event:any) => {
  this.setState({...this.state,
     ruleName:
     this.state.sourceTypeName +
        " " +
        "should be" +
        " " +
        this.state.conditionTypeName +
        " " +
        event.target.value,
  value: event.target.value })

}

public handleUploadPopUpClose = () => {
  this.setState({...this.state, uploadPopUp: false})
}
  public ProposalFormStateComponentId = () => {
    const { anchorEl } = this.state;
    const PopOverForAcres = Boolean(anchorEl);

    

    
    return (
      <div>
        <ProposalForm
        RelationTypeAndName={this.state.RelationTypeAndName}
handleCommentsChange={this.handleCommentsChange}
        Comments={this.state.Comments}
        pdfPath={this.state.pdfPath}
        imageWarningPopUp={this.state.imageWarningPopUp}
       id={this.state.AddClickCount}
       RelationTypeArray={this.state.RelationTypeArray}
       RelationDateOfBirth={this.state.RelationDateOfBirth}
       RelationType={this.state.RelationType}
        uploadPopUp={this.state.uploadPopUp}
        handleUploadPopUpClose={this.handleUploadPopUpClose}
        InitialAllocationSizeInAcres={this.state.InitialAllocationSizeInAcres}
        WithInAGC={this.state.WithInAGC}
        OutOfAGC={this.state.OutOfAGC}
         handleAddRuleNameChange={this.handleAddRuleNameChange}
         handleMaxValueChange={this.handleMaxValueChange}
         handleMinValueChange={this.handleMinValueChange}
         handleValueChange={this.handleValueChange}
          disableUploadButton={this.state.disableUploadButton}
          disabledeleteButton={this.state.disabledeleteButton}
        registerOrNot={this.state.registerOrNot}
        handleRegisterOrNotChange={this.handleRegisterOrNotChange}
          TotalLandCost={this.state.TotalLandCost}
        AmountPaid={this.state.AmountPaid}
        AmountToBePaid={this.state.AmountToBePaid}
        handleAmountPaidChange={this.handleAmountPaidChange}
      //  handleAmountToBePaidChange={this.handleAmountToBePaidChange}
        handleTotalLandCostChange={this.handleTotalLandCostChange}
          onAddGoValuesClick={this.onAddGoValuesClick}
          AddGoValueClickCount={this.state.AddGoValueClickCount}
          onGoValuesDeleteClick={this.onGoValuesDeleteClick}
        buttonDisable1={this.state.buttonDisable1}
        buttonDisable2={this.state.buttonDisable2}

        buttonDisable3={this.state.buttonDisable3}
        buttonDisable4={this.state.buttonDisable4}

        handleMapPopUpClose1={this.handleMapPopUpClose1}
          handleMapSelectClick={this.handleMapSelectClick}
          selectMapValuesPopUp={this.state.selectMapValuesPopUp}
          handleUploadButtonClick={this.handleUploadButtonClick}
          handleRedirectToDashboardClick={this.handleRedirectToDashboardClick}
          handleDeleteimageClick={this.handleDeleteimageClick}
          handleProjectPurposeChange={this.handleProjectPurposeChange}
          // authorizedPersonName={}
          TownshipId={this.state.TownshipId}
          handleEditMapDetails={this.handleEditMapDetails}
          handleClose={this.onHandleSubmitClose}
          // handleOrganizationNameChange={this.handleOrganizationNameChange}
          //  handleOrgCityChange={this.handleOrgCityChange}
          //  handleOrgEmailAddressChange={this.handleOrgEmailAddressChange}
          //  handleOrgGSTNumberChange={this.handleOrgGSTNumberChange}
          //  handleOrgHouseNumberChange={this.handleOrgHouseNumberChange}
          //  handleOrgRegistrationNumberChange={
          //    this.handleOrgRegistrationNumberChange
          //  }
          //  handleOrgStreetNameChange={this.handleOrgStreetNameChange}
          //  handleZipCodeChange={this.handleZipCodeChange}
          //  handleOrgPhoneNumberChange={this.handleOrgPhoneNumberChange}
          SuccessMileStonePopUp={this.state.SuccessMileStonePopUp}
          AuthDateOfBirth={this.state.ProposalFormApplicationIdValues
            .map((x: ISearchValues) => x.AuthDateOfBirth)[0]}
          handleAuthMobileNumberChange={this.handleAuthMobileNumberChange}
          handleAvailableLandAreaChange={this.handleAvailableLandAreaChange}
          Uploadimages={this.state.Uploadimages}
          handleInitialAllocationLandSizeChange={this.handleInitialAllocationLandSizeChange}
          handleAuthDateOfBirthChange={this.handleAuthDateOfBirthChange}
          handleAuthRelationNameChange={this.handleAuthRelationNameChange}
          handleAuthorisedPersonEmailAddresshChange={this.handleAuthorisedPersonEmailAddresshChange}
          handleLastNameChange={this.handleAuthLastNameChange}
          handleFirstNameChange={this.handleAuthFirstNameChange}
          handleUnitChange={this.handleUnitChange}
          handleMileStoneChange={this.handleMileStoneChange}
          handleRemoveImage={this.handleRemoveImage}
          anchorEl={this.state.anchorEl}
          PopOverForAcres={PopOverForAcres}
          handlePopoverClose={this.handlePopoverClose}
          handlePopoverOpen={this.handlePopoverOpen}
          handleProjectPurpose={this.handleProjectPurpose}
          handleProjectDescriptionChange={this.handleProjectDescriptionChange}
          handleProjectNameChange={this.handleProjectNameChange}
          handleGoDateChange={this.handleGoDateChange}
          handleGoNumberChange={this.handleGoNumberChange}
          handleLeaseAmountChange={this.handleLeaseAmountChange}
          handleLeaseTenureChange={this.handleLeaseTenureChange}
          handleRequiredLandSizeChange={this.handleRequiredLandSizeChange}
          handleInitialConvertedChange={this.handleInitialConvertedChange}
          handleConvertedChange={this.handleConvertedChange}
          documentList2={this.state.documentList2}
          handleMapClose={this.handleMapClose}
          handleMapPopUpClose={this.handleMapPopUpClose}
          mapPopUpOpen={this.state.mapPopUpOpen}
          handleMilestonePopUpClose={this.handleMilestonePopUpClose}
          milestonePopUp={this.state.milestonePopUp}
          onReset={this.onReset}
          mapDataValues={this.state.mapDataValues}
          Village={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.Village
            )[0]
          }
          TownShip={this.state.TownShip}
          TempGlobalId={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.TempGlobalId
            )[0]
          }
          SurveyNumberByPlanning={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.SurveyNumberByPlanning
            )[0]
          }
          Plot={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.Plot
            )[0]
          }
          ParcelId={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.ParcelId
            )[0]
          }
          GlobalId={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.GlobalId
            )[0]
          }
          GeometryDataFromMap={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.GeometryDataFromMap
            )[0]
          }
          District={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.District
            )[0]
          }
          Mandal={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.Mandal
            )[0]
          }
          GeometricString={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.GeometricString
            )[0]
          }
          CompleteDetails={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.CompleteDetails
            )[0]
          }
          Colony={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.Colony
            )[0]
          }
          Sector={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.Sector
            )[0]
          }
          Boundaries={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.Boundaries
            )[0]
          }
          Block={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.Block
            )[0]
          }
          handleDownload={this.handleDownload}
          onUploadPopUpClose={this.onUploadPopUpClose}
          handleSubmitPopUpOpen={this.handleSubmitPopUpOpen}
          submitPopUp={this.state.submitPopUp}
          SuccesPopUpOpen={this.state.SuccesPopUpOpen}
          WarningPopUp={this.state.WarningPopUp}
          uploadPopUpOpen={this.state.uploadPopUpOpen}
          onHandleWarningPopupClose={this.onHandleWarningPopupClose}
          authorisedPersonValues={this.state.authorisedPersonValues.map(
            (y: IAuthorizedPersonValues) => {
              
              return {
                ...y,
          AuthorisedPersonEmailAddress: y.AuthorisedPersonEmailAddress,
          // tslint:disable-next-line:object-literal-sort-keys
          AuthDateOfBirth: y.AuthDateOfBirth,
          FirstName:  y.FirstName,
          HouseNo: y.HouseNo,
          LastName: y.LastName,
          MobileNumber:  y.MobileNumber,
          PhotoIdNumber:  y.PhotoIdNumber,
          PhotoIdType:y.PhotoIdType,
          PhotoIdTypeName: y.PhotoIdTypeName,
          RelationName: y.RelationName,
          AuthRelationTypeId: y.AuthRelationTypeId,

          RelationTypeName: y.RelationTypeName,
          StreetName: y.StreetName,
          authImage: y.authImage
              };
            }
          )}
          AuthRelationTypeId={this.state.authorisedPersonValues[0].AuthRelationTypeId}
          onMileStoneDeleteClick={this.onMilestoneDeleteClick}
          onHandleOrganizationSaveandContinue={
            this.onHandleOrganisationSaveandContinue1
          }
          onHandleLandAllocationSaveandContinue={this.onHandleSubmit1}
          onHandleAuthorisedSaveandContinue={
            this.onHandleAuthorisedSaveandContinue
          }
          handleTownshipClick={this.handleTownshipClick1}
          // PlotAreaType={this.state.PlotAreaType}
          // PlotAreaId={this.state.PlotAreaId}
          activeStep={this.state.draftActiveStep}
          // authorisedPersonValues={this.state.authorisedPersonValues}
          // PlotAreaId={this.state.PlotAreaId}
          handleStateChange={this.handleStateChange}
          handleTypeOfAllocationChange={this.handleTypeOfAllocationChange}
          handleAgreementChange={this.handleAgreementChange}
          TypeOfAllocationId={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.TypeOfAllocation
            )[0]
          }
          handleBack={this.handleDraftBack}
          LandAllocatedToId={
            this.state.ProposalFormApplicationIdValues.length !==0 ?this.state.ProposalFormApplicationIdValues.filter(
              (x: ISearchValues) => x.AllocationTo === "Government"
            ).length === 1
              ? 1
              : 2 : 0
          }
          AllocationSubTypeId={this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AllocationSubTypeId !== undefined || x.AllocationSubTypeId !== null? 
              x.AllocationSubTypeId : 0
            )[0] : 0
          }
          typesOfAllocationValues={this.state.typesOfAllocationValues}
          landAllocatedTo={
            this.state.ProposalFormApplicationIdValues.length !== 0? this.state.ProposalFormApplicationIdValues.filter(
              (x: ISearchValues) => x.AllocationTo === "Government"
            ).length === 1
              ? "1"
              : "2" : "1"
          }
          allocationTypeId={
            this.state.ProposalFormApplicationIdValues.length !== 0? this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AllocationTypeId === 0 ? 0 :x.AllocationTypeId
            )[0] : 0
          }
         
          OrganizationName={
            this.state.ProposalFormApplicationIdValues.length !== 0?  this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrganiztionName
            )[0] : ""
          }
          AuthorisedPersonEmailAddress={
            this.state.ProposalFormApplicationIdValues.length !== 0? this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AuthEmailId
            )[0] : ""
          }
          AgreementTypeId={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues
            .map(
              (x: ISearchValues) => x.AgreementTypeId === 0 || x.AgreementTypeId === undefined 
              ? 0: x.AgreementTypeId
            )[0] : 0
          }
          enterApplicationId={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.ApplicationId === ""?undefined:x.ApplicationId
            )[0] :this.state.enterApplicationId
          }
          mobileNumber={this.state.mobileNumber}
          OrgPhoneNumber={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgPhoneNumber=== "" ? undefined:x.OrgPhoneNumber
            )[0] : ""
           
          }
          OrgEmailAddress={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgEmailid
            )[0] : ""
          }
          HouseNoBuildingName={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgAddress1
            )[0] : ""
          }
          StreetNameLocality={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgAddress2
            )[0] : ""
          }
          GSTNumber={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgGST
            )[0] : ""
          }
          handleCountryClick={this.handleCountryClick}
          // Country={this.state.Country}
          // State={this.state.State}
          City={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgCityName
            )[0] : ""
          }
          ZipCode={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgZipCode
            )[0]: ""
          }
          RegistrationNumber={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgRegistrationNumber
            )[0]
          }
          agreementTypeValues={this.state.agreementTypeValues}
          // selectThemeCityTYpeValues={this.state.selectThemeCityTYpeValues}
          selectAllocationTypeValues={this.state.selectAllocationTypeValues}
          selectCountryValues={this.state.selectCountryValues}
          selectStateValues={this.state.selectStateValues}
          AllocationType={this.state.allocationTypeId}
          AllocationName={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AllocationTypeName==="" ? undefined:x.AllocationTypeName
            )[0]
          }
          AllocationId={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AllocationTypeId === 0 ? 0 :x.AllocationTypeId
            )[0] : 0
          }
          CountryId={
            this.state.ProposalFormApplicationIdValues.length !== 0? 
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgCountryId === 0?  0:x.OrgCountryId
            )[0]: 0
          }
          CountryName={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgCountryName
            )[0] :''
          }
          handleLandAllocationClick={this.handleLandAllocationClick1}
          handleAllocationChange={this.handleAllocationChange1}
          StateId={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgStateId ===0 || x.OrgStateId === undefined ? 0 :x.OrgStateId
            )[0]: 0
          }
          WitnessName={
           this.state.WitnessName
          }
          StateName={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.OrgStateName
            )[0]
          }
          handleUploadImageClick={this.handleUploadImageClick}
          PhotoIdTypeName={this.state.authorisedPersonValues[0].PhotoIdTypeName}
          handlePhotoIdChange={this.handlePhotoIdChange}
          handleRelationChange={this.handleRelationChange}
          check={this.state.check }
          photoIdValues={this.state.photoIdTypeArray}
          relationTypeValues={this.state.RelationTypeArray}
          FirstName={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.FirstName
            )[0]
          }
          LastName={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.LastName
            )[0]
          }
          RelationTypeName={
            this.state.authorisedPersonValues[0].RelationTypeName
          }
          RelationName={ this.state.authorisedPersonValues[0].RelationName}
        //  AuthDateOfBirth={this.state.AuthDateOfBirth}
        // AuthorisedPersonEmailAddress={
        //     this.state.ProposalFormApplicationIdValues.map(
        //       (x: ISearchValues) => x.AuthEmailId
        //     )[0]
        //   }
          MobileNumber={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AuthPhoneNumber
            )[0]
          }
          HouseNo={this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => x.AuthAddress1
          )[0]}
          StreetName={this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => x.AuthAddress2
          )[0]}
          PhotoIdNumber={this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => x.AuthPhotoIdNumber
          )[0]}
          PhotoIdType={ this.state.photoIdTypeArray.filter((z: IPhotoIdTypeValues) => {
            return this.state.ProposalFormApplicationIdValues.find(
              (x: ISearchValues) => x.AuthPhotoIdType === z.PhotoIdName
            )
          }).map((z: IPhotoIdTypeValues) => z.PhotoIdType)[0]}
          authImage={this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => x.AuthPhotoIdPath
          )[0]}
          handleCheckClick={this.handleCheckChange1}
          handleDateChange={this.handleDateChange1}
          handleRelationNameChange={this.handleRelationNameChange}
          handleRelationTypeIdChange={this.handleRelationTypeIdChange}
          handleWitnessNameChange={this.handleWitnessNameChange}
          handleSubmit={this.onHandleSubmit}
          WitnessDetailsFormArray={
           this.state.WitnessDetailsFormArray
          }
          onHandleAddClick={this.onHandleAddClick}
          onWitnessSaveAndContinue={this.onWitnessSaveAndContinue1}
          AddClickCount={this.state.AddClickCount}
          onDeleteClick={this.onDeleteClick}
          handleMultiSelectMileStoneChange={
            this.handleMultiSelectMileStoneChange
          }
          handleLandReleaseChange={this.handleLandReleaseChange}
          handleDateOfCompletionChange={this.handleDateOfCompletionChange}
          handleLeaseStartDateChange={this.handleLeaseStartDateChange}
          LandAllocationAllValues={this.state.LandAllocationAllValues}
          // handleLandSubmit={this.handleLandSubmit}
          ruleName1={this.state.ruleName1}
          ruleName2={this.state.ruleName2}
          handleSourceTypeChange={this.handleSourceTypeChange}
          ruleName={this.state.ruleName}
          LandSize={this.state.LandSize}
          LandSizeType={this.state.LandSizeType}
          projectRules={this.state.projectRules}
          InitialAllocation={this.state.InitialAllocation}
          TotalBudget={this.state.TotalBudget}
          PricePerUnit={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.PricePerUnit
            )[0]
          }
          RequiredLandSizeBeforeAllocation={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.RequiredLandSizeBeforeAllocation
            )[0]
          }
          requiredLandUnitId={this.state.requiredLandUnitId}
          RenewalAmountPercentage={this.state.RenewalAmountPercentage}
          RenewalForEvery={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.RenewalForEvery
            )[0] === null
              ? 0
              : this.state.RenewalForEvery
          }
          initialUnitId={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.InitialAllocationLandSizeType
            )[0] 
          }
          TotalLeaseAmount={this.state.TotalLeaseAmount}
          InitialAllocationLandSize={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.InitialAllocationLandSize
            )[0]
          }
          fileSize={this.state.fileSize}
          ApplicationId={this.state.enterApplicationId}
          handleSelectMultiChange={this.handleSelectMultiChange}
          projectTypes={this.state.projectTypes}
          projectValues={this.state.projectValues}
          handleConditionTypeChange={this.handleConditionTypeChange}
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          value={this.state.value}
          ConditionTypeId={this.state.ConditionTypeId}
          ConditionTypeValues={this.state.ConditionTypeValues}
          RuleSourceTypeId={this.state.RuleSourceTypeId}
          sourceTypeValues={this.state.sourceTypeValues}
          handleProjectTypeChange={this.handleProjectTypeChange}
          handleLandDetailsChangeClick={this.handleLandDetailsChangeClick}
          MileStoneNewRuleSubmit={this.MileStoneNewRuleSubmit}
          ProjectTypeId={this.state.ProjectTypeId}
          handleEditRuleTypeSubmit={this.handleEditRuleTypeSubmit}
          onHandleClose={this.onHandleClose}
          PopUpOpen={this.state.PopUpOpen}
          handlePopUpOpenClick={this.handlePopUpOpenClick}
          handleMultiSelectChange={this.handleMultiSelectChange}
          ProjectRuleTypes={this.state.ProjectRuleTypes}
          handleThemeCityChange={this.handleThemeCityChange}
          mileStoneValues={this.state.mileStoneValues}
          MileStoneArray={this.state.MileStoneArray}
          ProjectDetailsArray={this.state.ProjectDetailsArray}
          RuleId={this.state.RuleId}
          RuleName={this.state.RuleName}
          LandRelease={this.state.LandRelease}
          DateOfCompletion={this.state.DateOfCompletion}
          AddMilestoneClickCount={this.state.AddMilestoneClickCount}
          onMileStoneSave={this.onMileStoneSave}
          onMileStoneAddClick={this.onHandleMileStoneAddClick}
          // handleSubmit={this.onHandleSubmit}
          leaseTenure={this.state.leaseTenure}
          Number={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.TenurePeriodId
            )[0]
          }
          UnitId={this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AvailbleLandAreaUnits
            )[0] : 0
          }
          UnitName={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.UnitFormatName
            )[0]
          }
          unitValues={this.state.unitValues}
          LandAllocationId={
            this.state.ProposalFormApplicationIdValues.length !== 0?
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.LandAllocationTypeId
            )[0] : 0
          }
          LandAllocationTypeName={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.LandAllocationType
            )[0]
          }
          AvailableLandArea={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.AvailableLandArea
            )[0]
          }
          RequiredLandSize={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.RequiredLandArea
            )[0]
          }
          LeaseAmount={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.LeaseAmountperAcre
            )[0]
          }
          LeaseStartDate={
            this.state.ProposalFormApplicationIdValues.map((x: ISearchValues) =>
              // moment(x.LeaseStartDate,"DD-MM-YYYY").format("YYYY-MM-DD")
              x.LeaseStartDate
            )[0]
          }
          LeaseEndDate={
            this.state.ProposalFormApplicationIdValues.map((x: ISearchValues) =>
            //  moment(x.LeaseEndDate,"DD-MM-YYYY").format("YYYY-MM-DD")
            x.LeaseEndDate
            )[0]
          }
          GoNumber={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.GOMnumber
            )[0]
          }
          GoDate={
            this.state.ProposalFormApplicationIdValues.map((x: ISearchValues) =>
              x.GOMdate
            )[0]
          }
          ProjectName={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.ProjectTitle
            )[0]
          }
          ProjectPurpose={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.ProjPurpose
            )[0]
          }
          ProjectDescription={
            this.state.ProposalFormApplicationIdValues.map(
              (x: ISearchValues) => x.ProjDescription
            )[0]
          }
          TownshipName={this.state.TownshipName}
          // onSubmit={this.onHandleSubmit}
          // handleClick={this.handleClick}
          selectLandAllocationTypeValues={
            this.state.selectLandAllocationTypeValues
          }
          selectThemeCityTypeValues={this.state.selectThemeCityTypeValues}
          ruleTypeValues={this.state.ruleTypeValues}
          selectDepartmentName={this.state.selectDepartmentName}
          handleSelectDepartmentChange={this.handleSelectDepartmentChange}
          UserId={this.state.UserId}
          selectDepartmentList={this.state.selectDepartmentList}
          onSubmit={this.onHandleUploadSubmit}
          image1={this.state.image1}
          image2={this.state.image2}
          image3={this.state.image3}
          handleUploadImageChange={this.handleUploadImageChange}
          handleUploadImage2Change={this.handleUploadImage2Change}
          handleUploadImage3Change={this.handleUploadImage3Change}
          check1={this.state.check1}
          handleSubmitCheck={this.handleSubmitCheck}
          SubmitValues={this.state.SubmitValues}
          onHandleSaveAsDraft={this.onHandleSaveAsDraft}
          onHandleFinalSubmit={this.onHandleFinalSubmit}
          // onHandleSubmitClose={this.onHandleSubmitClose}
          townshipValues={this.state.townshipValues}
          handleHouseNoChange={this.handleHouseNoChange}
          handleStreetNameChange={this.handleStreetNameChange}
        />
      </div>
    );
  };

  public handleConvertedChange = (event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps) => {
    GetConvertedValuesInAcres(event.target.value, values.RequiredLandSize).then(
      res => {
        this.setState({
          ...this.state,
          RequiredLandSizeBeforeAllocation: res.model.ConvertValue,
          requiredLandUnitId: event.target.value,
          // tslint:disable-next-line:object-literal-sort-keys
          ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:any) => {
            return (
              {...x,
                LandAllocationTypeId: values.LandAllocationId,
                // tslint:disable-next-line:object-literal-sort-keys
                LandAllocationType: values.LandAllocationTypeName,
                AvailableLandArea: values.AvailableLandArea,
                AvailbleLandAreaUnits:values.UnitId,
                TenurePeriodId: values.Number,
                LeaseAmountperAcre: values.LeaseAmount,
                LeaseStartDate: values.LeaseStartDate,
                LeaseEndDate: values.LeaseEndDate,
                ProjectTitle: values.ProjectName,
                ProjPurpose: values.ProjectPurpose,
               
                ProjDescription: values.ProjectDescription,
                TownshipId: values.TownshipId,
                TownshipName:values.TownshipName,
               
                ProjectRules: values.projectRules,
               
               
                GOMnumber: values.GoNumber,
                GOMdate: values.GoDate,
               
                TotalAmount: values.TotalLeaseAmount,
                InitialAllocation: values.InitialAllocation,
    
                InitialAllocationLandSize: values.InitialAllocationLandSize,
                InitialAllocationLandSizeType: values.initialUnitId,
               // LeaseTenure: values.Number,
            
                RequiredLandArea: values.RequiredLandSize,
                RequiredLandSizeBeforeAllocation: res.model.ConvertValue,
              }
            )
          })
        });
      }
    );
  };

  public handleUnitChange = (event: any,values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ) => {
    this.setState({
      ...this.state,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
            LandAllocationTypeId: values.LandAllocationId,
            // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationType: values.LandAllocationTypeName,
            AvailableLandArea: values.AvailableLandArea,
            AvailbleLandAreaUnits:event.target.value,
            TenurePeriodId: values.Number,
            LeaseAmountperAcre: values.LeaseAmount,
            LeaseStartDate: values.LeaseStartDate,
            LeaseEndDate: values.LeaseEndDate,
            ProjectTitle: values.ProjectName,
            ProjPurpose: values.ProjectPurpose,
           
            ProjDescription: values.ProjectDescription,
            TownshipId: values.TownshipId,
            TownshipName:values.TownshipName,
           
            ProjectRules: values.projectRules,
           
           
            GOMnumber: values.GoNumber,
            GOMdate: values.GoDate,
           
            TotalAmount: values.TotalLeaseAmount,
            InitialAllocation: values.InitialAllocation,

            InitialAllocationLandSize: values.InitialAllocationLandSize,
            InitialAllocationLandSizeType: values.initialUnitId,
            LeaseTenure: values.Number,
          
            RequiredLandArea: values.RequiredLandSize


          };
        }
      ),
      UnitId: event.target.value
    });
  };
  public handleInitialConvertedChange = (
    event: any,
    values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps
  ) => {

    GetConvertedValuesInAcres(
      event.target.value,
      values.InitialAllocationLandSize
    ).then(res => {
      this.setState({
        ...this.state,
       //  InitialAllocation: res.ConvertValue,
       InitialAllocationSizeInAcres: res.model.ConvertValue,

        ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
          (x: ISearchValues) => {
            return {
              ...x,
              LandAllocationTypeId: values.LandAllocationId,
              // tslint:disable-next-line:object-literal-sort-keys
              LandAllocationType: values.LandAllocationTypeName,
              AvailableLandArea: values.AvailableLandArea,
              AvailbleLandAreaUnits:values.UnitId,
              TenurePeriodId: values.Number,
              LeaseAmountperAcre: values.LeaseAmount,
              LeaseStartDate: values.LeaseStartDate,
              LeaseEndDate: values.LeaseEndDate,
              ProjectTitle: values.ProjectName,
              ProjPurpose: values.ProjectPurpose,
             
              ProjDescription: values.ProjectDescription,
              TownshipId: values.TownshipId,
              TownshipName:values.TownshipName,
             
              ProjectRules: values.projectRules,
             
             
              GOMnumber: values.GoNumber,
              GOMdate: values.GoDate,
             
              TotalAmount: values.TotalLeaseAmount,
              InitialAllocation: values.InitialAllocation,
  
              InitialAllocationLandSize: values.InitialAllocationLandSize,
              LeaseTenure: values.Number,
            
              RequiredLandArea: values.RequiredLandSize,
              InitialAllocationSizeInAcres: res.model.ConvertValue,

  
              InitialAllocationLandSizeType: event.target.value
            };
          }
        ),
        initialUnitId: event.target.value
      });
    });
  };
  public handlePropertyRegChange = (event: any) => {
    getPropertyCategoryDropdown(event.target.value).then(res => {
      this.setState({
        CategoryOwnershipId: event.target.value,
        selectPropertyValues: res.data,

      
      })
    })

      getPropertyDepartmentDropdown(event.target.value).then(res => {
        this.setState({
          CategoryOwnershipId: event.target.value,
          selectDepartmentValues: res.data,

        })
      })
   
    }
  
  public handleInitialAllocationLandSizeChange = (event:any) => {
    this.setState({...this.state, 
      InitialAllocationLandSize: event.target.value,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,

            InitialAllocationLandSize: event.target.value
          };
        }
      ),
      })
  }
  public handleRequiredLandSizeChange = (event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ) => {
    this.setState({
      ...this.state,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
            LandAllocationTypeId: values.LandAllocationId,
            // tslint:disable-next-line:object-literal-sort-keys
            LandAllocationType: values.LandAllocationTypeName,
            AvailableLandArea: values.AvailableLandArea,
            AvailbleLandAreaUnits:values.UnitId,
            TenurePeriodId: values.Number,
            LeaseAmountperAcre: values.LeaseAmount,
            LeaseStartDate: values.LeaseStartDate,
            LeaseEndDate: values.LeaseEndDate,
            ProjectTitle: values.ProjectName,
            ProjPurpose: values.ProjectPurpose,
           
            ProjDescription: values.ProjectDescription,
            TownshipId: values.TownshipId,
            TownshipName:values.TownshipName,
           
            ProjectRules: values.projectRules,
           
           
            GOMnumber: values.GoNumber,
            GOMdate: values.GoDate,
           
            TotalAmount: values.TotalLeaseAmount,
            InitialAllocation: values.InitialAllocation,

            InitialAllocationLandSize: values.InitialAllocationLandSize,
            InitialAllocationLandSizeType: values.initialUnitId,
            LeaseTenure: values.Number,
        
           
          
            RequiredLandArea: event.target.value
          };
        }
      ),
      RequiredLandSize: event.target.value
    });
   
  };

  public handleLeaseTenureChange = (event: any,
    values: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps) => {

    const targetDate = this.state.LeaseStartDate
    // // // tslint:disable-next-line:no-console
    // const targetYear = parseInt(targetDate[0], 10) + event.target.value;
    // const targetDay = parseInt(targetDate[2], 10) - 1;
    // const targetMonth = parseInt(targetDate[1], 10);
    const Year = getYear(targetDate) ;
    const Month= getMonth(targetDate)
    const day = getDate(targetDate)

   
    const leaseEndDate = moment(new Date(Year + event.target.value,Month,day)).format("YYYY-MM-DD")
    this.setState({
      ...this.state,
      LeaseEndDate: leaseEndDate,
      Number: event.target.value,

      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map(
        (x: ISearchValues) => {
          return {
            ...x,
            LeaseEndDate: leaseEndDate,
            TenurePeriodId: event.target.value,  
          };
        }
      )
    });
  };

  public handleLeaseAmountChange = (event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ) => {
if(event.target.value !== "" && event.target.value){
 
  this.setState({ ...this.state, LeaseAmount:
    parseInt(event.target.value,10),
    ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => ({
      ...x,
      LeaseAmountperAcre: event.target.value,
      TotalLandCost: Math.round( 
        (values.Number *
           values.RequiredLandSizeBeforeAllocation * parseInt(event.target.value,10)))
    })),
    TotalLandCost: Math.round( 
    (values.Number *
       values.RequiredLandSizeBeforeAllocation * parseInt(event.target.value,10)))
   });
}
else{
  this.setState({
    ...this.state,
    LeaseAmount:
   0,
    TotalLandCost:0,
    // tslint:disable-next-line:object-literal-sort-keys
    ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => ({
      ...x,
      LeaseAmountperAcre: 0,
      TotalLandCost:0,

     }))
  })
}
  };
  public handleGoNumberChange = (event: any, values: IGoValues, index: number) => {
    
    this.setState({
      ...this.state,
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues)=> ({
        ...x,
        ProjectDetailsArray: this.state.ProjectDetailsArray
        .map((y: IGoValues) => y.id === index ? {
          ...y,
          GoDate: values.GoDate,
          GoNumber: event.target.value,
          id:values.id,
          // tslint:disable-next-line:object-literal-sort-keys
          AddGoValueClickCount: this.state.AddGoValueClickCount + 1,
          
          
      }:y)
      })),
      // tslint:disable-next-line:object-literal-sort-keys
      ProjectDetailsArray: this.state.ProjectDetailsArray
        .map((x: IGoValues) => x.id === index ? {
          ...x,
          GoDate: values.GoDate,
          GoNumber: event.target.value,
          id:values.id,
          // tslint:disable-next-line:object-literal-sort-keys
          AddGoValueClickCount: this.state.AddGoValueClickCount + 1,
          
          
      }:x),
      });
  };

  public handleProjectNameChange = (event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ) => {
    this.setState({ ...this.state, 
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => {
        return ({
          ...x,
          AvailableLandArea: values.AvailableLandArea,

          GoMNumber: values.GoNumber,
          LandAllocationAllValues: [
            ...this.state.LandAllocationAllValues,
            ...values.LandAllocationAllValues
          ],
          LeaseAmount: values.LeaseAmount,
          LeaseEndDate: values.LeaseEndDate,
          LeaseStartDate: values.LeaseStartDate,
          LeaseTenure: values.Number,
          ProjDescription: values.ProjectDescription,
          ProjectTitle: event.target.value,
          // tslint:disable-next-line:object-literal-sort-keys
          ProjPurpose: values.ProjectPurpose,
          RequiredLandSize: values.RequiredLandSize,
          projectValues: values.projectValues,
          // tslint:disable-next-line:object-literal-sort-keys
          GOMdate: values.GoDate
        })
      }),
      // tslint:disable-next-line:object-literal-sort-keys
      ProjectName: event.target.value });
  };

  public handleProjectDescriptionChange = (event: any, values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ) => {
    this.setState({ ...this.state, 
      ProjectDescription: event.target.value,
      ProposalFormApplicationIdValues:
       this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => {
        return ({
          ...x,
          AvailableLandArea: values.AvailableLandArea,

          GoMNumber: values.GoNumber,
          // LandAllocationAllValues: [
          //   ...this.state.LandAllocationAllValues,
          //   ...values.LandAllocationAllValues
          // ],
          LeaseAmount: values.LeaseAmount,
          LeaseEndDate: values.LeaseEndDate,
          LeaseStartDate: values.LeaseStartDate,
          LeaseTenure: values.Number,
          ProjDescription: event.target.value,
          ProjectTitle: values.ProjectName,
          // tslint:disable-next-line:object-literal-sort-keys
          ProjPurpose: values.ProjectPurpose,
          RequiredLandSize: values.RequiredLandSize,
          projectValues: values.projectValues,
          // tslint:disable-next-line:object-literal-sort-keys
          GOMdate: values.GoDate
        })
      }), });
  };

  public handleRemoveImage = () => {
    this.setState({
      ...this.state,
      authorisedPersonValues: this.state.authorisedPersonValues.map((x:any) => {
        return {
          ...x,
          authImage: ""
        };
      })
    });
  };

  public handleCheckChangePrivileges = (
    event: any,
    childrenObj: IPrivilegesSubValues,
    id: number,
    parent: IPrivilegesValues
  ) => {
    
   
    const getSelectedChildren = (x: any) => {
      return {
        text: x.text,
        // tslint:disable-next-line:object-literal-sort-keys
        id: x.id,
        // tslint:disable-next-line:object-literal-sort-keys
        state: { 
          opened: x.state.opened,
          selected: 
          
          // x.children.map((s:IPrivilegesSubValues) => (s.id === childrenObj.id)? 
          // {...s, children: s.children.map(s1 => 
          //   ({ ...s1, selected: event.target.checked}))} : s  )
          //   .filter((y:IPrivilegesSubValues) => 
          //   y.state.selected === false).length === 0 ? 
          //   true : false
          
          x.children
          .map((y: IPrivilegesSubValues) =>
            y.id !== childrenObj.id
            ? y
            : { ...y, 
              state: { selected: event.target.checked } , 
            // tslint:disable-next-line:object-literal-sort-keys
            children:  y.children.map((z:IPrivilege3rdSubValues) =>  
            ({ ...z, selected: z.selected === event.target.checked})) })
          .map((z:IPrivilegesSubValues) => z.children.length ===0? z: {...z, state:{ selected: z.children
          .filter((s:IPrivilege3rdSubValues) => s.selected === false).length === 0? true : false }})
          .filter((y:IPrivilegesSubValues) => 
            y.state.selected === false).length === 0 ? 
            true : false 
        },
        // tslint:disable-next-line:object-literal-sort-keys
        children: [
          ...x.children.map((y: IPrivilegesSubValues) =>
            y.id !== childrenObj.id
              ? y
              : { ...y, 
                children: y.children.map(s => ({...s, selected: event.target.checked})) ,
                state: { selected: event.target.checked }
              }
          )
        ]
      };
    };

    this.setState({
      ...this.state,
      privilegesValues: this.state.privilegesValues.map(
        (x: IPrivilegesValues) => (x.id !== id ? x : getSelectedChildren(x))
      )
      // this.state.privilegesValues.map((x: any) =>
      //   x.children.find((y: any) => y.text === event.target.value)
      // )x.state.selected === !this.state.selected
    });
  };

  public handleCheckAllChange = (
    event: any,
    obj: IPrivilegesValues,
    id: number
  ) => {

   
   
    const getSelected = (x: any) => {
      return {
        ...x,
        text: x.text,
        // tslint:disable-next-line:object-literal-sort-keys
        id: x.id,
        // tslint:disable-next-line:object-literal-sort-keys
        state: { 
          opened: x.opened, 
          selected: event.target.checked

         },
        // tslint:disable-next-line:object-literal-sort-keys
        children: [
          ...x.children.map((y: IPrivilegesSubValues) => 
          {
            return { ...y, 
              state: { selected: event.target.checked },
            // tslint:disable-next-line:object-literal-sort-keys
            children: y.children.map((z:IPrivilege3rdSubValues) =>  
            ({ ...z, selected: event.target.checked}))
           };
          })
        ]
      };
    };
    this.setState({
      ...this.state,
      privilegesValues: this.state.privilegesValues
      .map(
        (x: IPrivilegesValues) => 
        (x.id === id ? getSelected(x) : x)
      )
    });
  };

  public handleOpenClick = (event: any) => {
    this.setState({ ...this.state, dialogOpened: true });
  };
  public onHandlePrivilegesClose = () => {
    this.setState({ ...this.state, dialogOpened: false });
  };

  // public handleChange = (event: any) => {
  //   submitPrivilegesMaster().then(res => {
  //     this.setState({
  //       ...this.state,
  //       changeCheckedValues: res,
  //       dialogOpen: false
  //     });
  //   });
  // };

  public handleRoleClick = (event: any) => {
    this.setState({ ...this.state, roleId: event.target.value });

    // (x.children.map(z =>  z.children.length !== 0? 
    //   (z.children
    //   .filter((s:any) => s.selected === false).length === 0? true : false) 
    //   : z.children).length !==0? 
    //   x.state.selected :

    getRoleSelectedDropdownChange(event.target.value)
      .then(res => {

     

        this.setState({ ...this.state, privilegesValues:
           res.rows.map((x:IPrivilegesValues)=> {

          return {
            ...x,
            text: x.text,
            // tslint:disable-next-line:object-literal-sort-keys
            id: x.id,
            // tslint:disable-next-line:object-literal-sort-keys
            state: {
               opened: x.state.opened, 
              selected: 
              x.children.map(z => z.children.length ===0? z: {...z, state:{ selected: z.children
                .filter((s:any) => s.selected === false).length === 0? true : false }}).filter((y:IPrivilegesSubValues) => 
                y.state.selected === false).length === 0 ? 
                true : false 
            },
            // tslint:disable-next-line:object-literal-sort-keys
            children: x.children.map((z:IPrivilegesSubValues) => {
              return {
                ...z,
                children: z.children,
                state: {
                  selected: z.children.length ===0? z.state.selected : 
                  z.children
                  .filter((s:any) => s.selected === false).length === 0? true : false
                },
              }
            })
            
          //   x.children
          //   .filter((y:IPrivilegesSubValues) => 
          //   y.children.length !== 0 ? 
          //    {...y,
          //    children: y.children.map((q:any) => 
          //     { 
          //       return {
          //     ...q,
          //     selected: 
          //   }
          // }
          //    }
          //    :
          //     y.children )
            
            // x.children.map(y => 
            //   { 
            //     return {
            //       id:y.id,
            //       text : y.text,
            //       // tslint:disable-next-line:object-literal-sort-keys
            //       state: {
            //         selected: y.state.selected
            //       },
            //       level: y.level,
            //       children: [
            //         ...y.children.map((z: IPrivilegesSubValues) =>
            //         {
            //           return {
            //           text: z.text,
            //           // tslint:disable-next-line:object-literal-sort-keys
            //           id: z.id,
            //           // tslint:disable-next-line:object-literal-sort-keys
            //             selected:(z.children.filter((q:any) => 
            //             q.selected === false).length === 0) ? 
            //             true : false 
            //          ,
            //           // tslint:disable-next-line:object-literal-sort-keys
            //           children: z.children
            //         }
            //       }
            //         )
            //       ]

            //     }
            //   }
            // )
            
            //  : x.children
          };
        }) });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));

 
  };
  public onHandlePrivilegesSubmit = (
    values: ISelectRoleValues & IPrivilegesStateValues
  ) => {

    const parentId = this.state.privilegesValues.filter((ch:IPrivilegesValues) => ch.state.selected)
    .map((ch:any) => ch.id)
    .filter((x: any) => x.length !== 0)

    const childrenIds = this.state.privilegesValues
      .map((p:IPrivilegesValues) => p.children.filter((ch:IPrivilegesSubValues) => ch.state.selected)
      .map((ch:any) => ch.id))
      .filter((x: any) => x.length !== 0)

       const subChildrenIds =   this.state.privilegesValues.map((y:IPrivilegesValues) => 
       y.children
       .map(it=>
         it.children
         .map(lev2=>lev2.selected && lev2.level === 2 ? lev2.id :[])).filter((s:any) => s.length !==0)).filter((s:any) => s.length !==0)
       

       const privilegesIds = [...parentId,...childrenIds, ...subChildrenIds].join(",")
       
      
        
   
    submitPrivilegesMaster(values, privilegesIds).then(res => {
      if (this.state.roleId !== 0) {
        this.setState({
          
          ...this.state,
          dialogOpened: true
          // privilegesValues: res

        });
      }
    });
  
  };

  public handleMileStoneChange = (event: any, index: number, values:   ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ILandSaveAndContinueProps &
    ICreateProposalProps &
    IDetailsFromMap &
    ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectThemeCityProps &
    ISelectLandAllocationProps &
    IProjectRuleTypeProps &
    IProposalTabStateValues &
    IMileStoneDetailsStateValues &
    IWitnessDetailsStateValues &
    IAuthorizedPersonValues) => {
      
    const date = moment(this.state.LeaseStartDate).format("YYYY-MM-DD")
    const y = getYear(date) + event.target.value
    const m = getMonth(date);
    const day = getDay(date)


    

    this.setState({
      ...this.state,

      MileStoneArray: this.state.MileStoneArray.map((x:IMileStoneValues) => {
        const milestoneDate = (index === 0)? '' : 
        values.MileStoneArray.filter((s:IMileStoneValues) => s.id === index - 1).
        map((z:IMileStoneValues) => z.DateOfCompletion)[0]
        const milestoneday = getDay(milestoneDate)
        const milestonemonth = getMonth(milestoneDate)
        const milestoneyear = getYear(milestoneDate) + event.target.value

      return(
        x.id === index
          ? (index === 0)?  {
              AddMilestoneClickCount: x.AddMilestoneClickCount,
              RuleName: x.RuleName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConditionTypeId: x.ConditionTypeId,
              ConditionTypeValues: x.ConditionTypeValues,
              DateOfCompletion: moment(new Date(y,m,day)).format("YYYY-MM-DD"),
              LandRelease: x.LandRelease,
              ProjectRuleTypes: x.ProjectRuleTypes,
              ProjectTypeId: x.ProjectTypeId,
              RuleId: event.target.value,
              RuleSourceTypeId: x.RuleSourceTypeId,
              id: x.id,
              mileStoneValues: x.mileStoneValues,
              ruleTypeValues: x.ruleTypeValues,
              sourceTypeValues: x.sourceTypeValues,
              projectValues: x.projectValues
            } : {
              AddMilestoneClickCount: x.AddMilestoneClickCount,
              RuleName: x.RuleName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConditionTypeId: x.ConditionTypeId,
              ConditionTypeValues: x.ConditionTypeValues,
              DateOfCompletion: moment(new Date(milestoneyear,milestonemonth,milestoneday))
              .format("YYYY-MM-DD"),
              LandRelease: x.LandRelease,
              ProjectRuleTypes: x.ProjectRuleTypes,
              ProjectTypeId: x.ProjectTypeId,
              RuleId: event.target.value,
              RuleSourceTypeId: x.RuleSourceTypeId,
              id: x.id,
              mileStoneValues: x.mileStoneValues,
              ruleTypeValues: x.ruleTypeValues,
              sourceTypeValues: x.sourceTypeValues,
              projectValues: x.projectValues
            }
          : x
      )
          }
      )
    });
  };

  public onHandlePrivilegeClose = () => {
    this.setState({ ...this.state, dialogOpened: false });
  };

  public handleCheckChangePrivileges3 = (event:any, childrensObj: IPrivilege3rdSubValues,
    childrenObj: IPrivilegesSubValues,id: number, parent: IPrivilegesValues) => {
        
    
    const getSelectedChildren = (x : IPrivilegesValues) => {
     
       return {
         text: x.text,
         // tslint:disable-next-line:object-literal-sort-keys
         id: x.id,
         // tslint:disable-next-line:object-literal-sort-keys
         state: { 
           opened: x.state.opened,
           selected:x.children
           .map((y: IPrivilegesSubValues) =>
         ({
           ...y, 
           state:{
             selected:  y.children
             .map((s: IPrivilege3rdSubValues) =>
              s.id !== childrensObj.id
              ? s
              : { ...s, selected: event.target.checked }
          ).filter(s => s.selected === false).length ===0? true : false
           },
          // tslint:disable-next-line:object-literal-sort-keys
          children : y.children
          .map((s: IPrivilege3rdSubValues) =>
           s.id !== childrensObj.id
           ? s
           : { ...s, selected: event.target.checked }
       )}
       ))
           .map((z:IPrivilegesSubValues) => z.children.length ===0? z: {...z, state:{ selected: z.children
           .filter((s:IPrivilege3rdSubValues) => s.selected === false).length === 0? true : false }})
           .filter((y:IPrivilegesSubValues) => 
             y.state.selected === false).length === 0 ? 
             true : false 
         },
         // tslint:disable-next-line:object-literal-sort-keys
         children:  x.children
         .map((y: IPrivilegesSubValues) =>
       ({
         ...y, 
         state:{
           selected:  y.children
           .map((s: IPrivilege3rdSubValues) =>
            s.id !== childrensObj.id
            ? s
            : { ...s, selected: event.target.checked }
        ).filter(s => s.selected === false).length ===0? true : false
         },
        // tslint:disable-next-line:object-literal-sort-keys
        children : y.children
        .map((s: IPrivilege3rdSubValues) =>
         s.id !== childrensObj.id
         ? s
         : { ...s, selected: event.target.checked }
     )}
     ))
        
       };
     };
      
   
       this.setState({
         ...this.state,
         privilegesValues: this.state.privilegesValues.map(
           (x: IPrivilegesValues) => (x.id !== id ? x : getSelectedChildren(x))
         )
       
       });
     }
  public PrivillegesForm = () => {
    return (
      <div>
        <PrivilegesForm
          handleCheckAllChange={this.handleCheckAllChange}
          handleCheckChange2={this.handleCheckChangePrivileges}
          handleCheckChange3={this.handleCheckChangePrivileges3}
          privilegesValues={this.state.privilegesValues}
          handleRoleClick={this.handleRoleClick}
          RoleId={this.state.roleId}
          RoleName={this.state.roleName}
          selectRoleValues={this.state.selectRoleValues}
          onHandlePrivilegesSubmit={this.onHandlePrivilegesSubmit}
          selected={this.state.selected}
        />

        <div>
          {
            <Dialog
              open={this.state.dialogOpened}
              // onClose={props.onHandleClose}
            
            >
              <DialogTitle id="simple-dialog-title">
              
                You have updated privileges successfully
              </DialogTitle>
              <div >
                <PrivillegesPopUp
                  onHandleClose={this.onHandlePrivilegeClose}
                  selected={this.state.selected}
                  onHandlePrivilegesSubmit={this.onHandlePrivilegesSubmit}
                />
              </div>
            </Dialog>
          }
        </div>
      </div>
    );
  };

  public handleEditMapDetails = (values:IDetailsFromMap & IProposalTabStateValues) => {
    // localStorage.removeItem("0");
    // localStorage.removeItem(`${this.state.enterApplicationId}`);

    this.setState({...this.state, 
      mapPopUpOpen: true,
      // tslint:disable-next-line:object-literal-sort-keys
      LandAllocatedToId:values.LandAllocatedToId,
      landAllocatedTo:values.landAllocatedTo,
      allocationTypeId:values.allocationTypeId,
      AgreementTypeId:values.AgreementTypeId,
      enterApplicationId:values.enterApplicationId,
      mobileNumber:values.mobileNumber,
      AllocationName:values.AllocationName,
      AllocationId:values.AllocationId,
      AllocationSubTypeId:values.AllocationSubTypeId,
      CountryId:values.CountryId,
      CountryName:values.CountryName,
      StateId:values.StateId,
      StateName:values.StateName,
      TypeOfAllocationId:values.TypeOfAllocationId,
     // allocationTypeId:values.AllocationType,
      OrganizationName:values.OrganizationName,
      OrgPhoneNumber:values.OrgPhoneNumber,
      OrgEmailAddress:values.OrgEmailAddress,
      HouseNoBuildingName:values.HouseNoBuildingName,
      StreetNameLocality:values.StreetNameLocality,
      GSTNumber:values.GSTNumber,
      City:values.City,
      ZipCode:values.ZipCode,
      RegistrationNumber:values.RegistrationNumber,
      // tslint:disable-next-line:object-literal-sort-keys
      // AvailableLandArea: "",
      // Block: "",
      // Boundaries: "",
      // Colony:"",
      // CompleteDetails: "",
      // District: "",
      // GeometricString: "",
      // GeometryDataFromMap:"",
      // GlobalId: "",
      // Mandal:"",
      // ParcelId:"",
      // Plot:'',
      // Sector:'',
      // SurveyNumberByPlanning:'',
      // TempGlobalId: '',
      // TownShip: '',  
      // Village: ''
    })
  }

  public handleProjectPurposeChange= (event:any,values:ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps ) => {
      this.setState({...this.state,
        ProjectPurpose: event.target.value,
 
      ProposalFormApplicationIdValues: this.state.ProposalFormApplicationIdValues.map((x:ISearchValues) => {
        return {
          ...x,
          ProjPurpose: event.target.value,
          // tslint:disable-next-line:object-literal-sort-keys
          LandAllocationTypeId: values.LandAllocationId,
          // tslint:disable-next-line:object-literal-sort-keys
          LandAllocationType: values.LandAllocationTypeName,
          AvailableLandArea: values.AvailableLandArea,
          AvailbleLandAreaUnits:values.UnitId,
          TenurePeriodId: values.Number,
          LeaseAmountperAcre: values.LeaseAmount,
          LeaseStartDate: values.LeaseStartDate,
          LeaseEndDate: values.LeaseEndDate,
          ProjectTitle: values.ProjectName,
         
          ProjDescription: values.ProjectDescription,
          TownshipId: values.TownshipId,
          TownshipName:values.TownshipName,
         
          ProjectRules: values.projectRules,
         
         
          GOMnumber: values.GoNumber,
          GOMdate: values.GoDate,
         
          TotalAmount: values.TotalLeaseAmount,
          InitialAllocation: values.InitialAllocation,

          InitialAllocationLandSize: values.InitialAllocationLandSize,
          InitialAllocationLandSizeType: values.initialUnitId,
         // LeaseTenure: values.Number,
      
         
        
          RequiredLandArea: values.AvailableLandArea


        }
      })})

  }

  public handleRegisterOrNotChange = (event:any, values: ILandallocationFormStatevalues &
      ILandAllocationValues &
      ISelectLandAllocationProps &
      ISelectThemeCityProps &
      IUnitProps &
      ILeaseTenureProps &
      ILeaseValues &
      IMileStoneDetailsProps &
      IMileStoneDetailsStateValues &
      IMilestoneDropDownProps &
      IRuleTypeValuesProps &
      IProjectValuesProps &
      ISourceValueProps &
      IConditionValueProps &
      IProjectRuleTypeProps &
      ICreateProposalProps 
    ) => {
this.setState({...this.state, registerOrNot: event.target.value})
  }


  
  public ProposalFormStateComponent = () => {
    const { anchorEl } = this.state;
    const PopOverForAcres = Boolean(anchorEl);
   
   

    
    return (
      <div>
        <ProposalForm
                RelationTypeAndName={this.state.RelationTypeAndName}
        handleCommentsChange={this.handleCommentsChange}
        Comments={this.state.Comments}
        pdfPath={this.state.pdfPath}
        imageWarningPopUp={this.state.imageWarningPopUp}
         id={this.state.AddClickCount}
         RelationTypeArray={this.state.RelationTypeArray}
         RelationDateOfBirth={this.state.RelationDateOfBirth}
         RelationType={this.state.RelationType}
           uploadPopUp={this.state.uploadPopUp}
           handleUploadPopUpClose={this.handleUploadPopUpClose}
          InitialAllocationSizeInAcres={this.state.InitialAllocationSizeInAcres}
          WithInAGC={this.state.WithInAGC}
          OutOfAGC={this.state.OutOfAGC}
          disabledeleteButton={this.state.disabledeleteButton}
                    fileSize={this.state.fileSize}

          handleAddRuleNameChange={this.handleAddRuleNameChange}
          handleMaxValueChange={this.handleMaxValueChange}
          handleMinValueChange={this.handleMinValueChange}
          handleValueChange={this.handleValueChange}
        disableUploadButton={this.state.disableUploadButton}
        registerOrNot={this.state.registerOrNot}
        handleRegisterOrNotChange={this.handleRegisterOrNotChange}
        TotalLandCost={this.state.TotalLandCost}
        AmountPaid={this.state.AmountPaid}
        AmountToBePaid={this.state.AmountToBePaid}
        handleAmountPaidChange={this.handleAmountPaidChange}
        // handleAmountToBePaidChange={this.handleAmountToBePaidChange}
        handleTotalLandCostChange={this.handleTotalLandCostChange}
          onAddGoValuesClick={this.onAddGoValuesClick}
          AddGoValueClickCount={this.state.AddGoValueClickCount}
          onGoValuesDeleteClick={this.onGoValuesDeleteClick}
        AuthRelationTypeId={this.state.authorisedPersonValues[0].AuthRelationTypeId}
        buttonDisable1={this.state.buttonDisable1}
        buttonDisable2={this.state.buttonDisable2}
        buttonDisable3={this.state.buttonDisable3}
        buttonDisable4={this.state.buttonDisable4}
        ProjectDetailsArray={this.state.ProjectDetailsArray}

        handleMapPopUpClose1={this.handleMapPopUpClose1}
        handleMapSelectClick={this.handleMapSelectClick}
        selectMapValuesPopUp={this.state.selectMapValuesPopUp}
        handleUploadButtonClick={this.handleUploadButtonClick}
        handleRedirectToDashboardClick={this.handleRedirectToDashboardClick}
        handleDeleteimageClick={this.handleDeleteimageClick}
        handleProjectPurposeChange={this.handleProjectPurposeChange}
        TownshipId={this.state.TownshipId}
        handleEditMapDetails={this.handleEditMapDetails}
         handleClose={this.onHandleSubmitClose}
        //  handleOrganizationNameChange={this.handleOrganizationNameChange}
        //  handleOrgCityChange={this.handleOrgCityChange}
        //  handleOrgEmailAddressChange={this.handleOrgEmailAddressChange}
        //  handleOrgGSTNumberChange={this.handleOrgGSTNumberChange}
        //  handleOrgHouseNumberChange={this.handleOrgHouseNumberChange}
        //  handleOrgRegistrationNumberChange={
        //    this.handleOrgRegistrationNumberChange
        //  }
        //  handleOrgStreetNameChange={this.handleOrgStreetNameChange}
        //  handleZipCodeChange={this.handleZipCodeChange}
        //  handleOrgPhoneNumberChange={this.handleOrgPhoneNumberChange}
         SuccessMileStonePopUp={this.state.SuccessMileStonePopUp}
        handleAuthMobileNumberChange={this.handleAuthMobileNumberChange}
        handleAvailableLandAreaChange={this.handleAvailableLandAreaChange}
        Uploadimages={this.state.Uploadimages}
        handleInitialAllocationLandSizeChange={this.handleInitialAllocationLandSizeChange}
          handleAuthDateOfBirthChange={this.handleAuthDateOfBirthChange}
           handleAuthRelationNameChange={this.handleAuthRelationNameChange}
           handleAuthorisedPersonEmailAddresshChange={this.handleAuthorisedPersonEmailAddresshChange}
           handleLastNameChange={this.handleAuthLastNameChange}
           handleFirstNameChange={this.handleAuthFirstNameChange}
          handleUnitChange={this.handleUnitChange}
          handleMileStoneChange={this.handleMileStoneChange}
          handleRemoveImage={this.handleRemoveImage}
          anchorEl={this.state.anchorEl}
          PopOverForAcres={PopOverForAcres}
          handlePopoverClose={this.handlePopoverClose}
          handlePopoverOpen={this.handlePopoverOpen}
          AgreementTypeId={this.state.AgreementTypeId}
          handleProjectPurpose={this.handleProjectPurpose}
         handleProjectDescriptionChange={this.handleProjectDescriptionChange}
          handleProjectNameChange={this.handleProjectNameChange}
          handleGoDateChange={this.handleGoDateChange}
          handleGoNumberChange={this.handleGoNumberChange}
          handleLeaseAmountChange={this.handleLeaseAmountChange}
          handleLeaseTenureChange={this.handleLeaseTenureChange}
          handleRequiredLandSizeChange={this.handleRequiredLandSizeChange}
          handleInitialConvertedChange={this.handleInitialConvertedChange}
          handleConvertedChange={this.handleConvertedChange}
          documentList2={this.state.documentList2}
          mapPopUpOpen={this.state.mapPopUpOpen}
          handleMapClose={this.handleMapClose}
          handleMapPopUpClose={this.handleMapPopUpClose}
          handleMilestonePopUpClose={this.handleMilestonePopUpClose}
          milestonePopUp={this.state.milestonePopUp}
          onReset={this.onReset}
          GSTNumber={this.state.GSTNumber}
          mapDataValues={this.state.mapDataValues}
          Village={this.state.Village}
          TownShip={this.state.TownShip}
          TempGlobalId={this.state.TempGlobalId}
          SurveyNumberByPlanning={this.state.SurveyNumberByPlanning}
          Plot={this.state.Plot}
          ParcelId={this.state.ParcelId}
          GlobalId={this.state.GlobalId}
          GeometryDataFromMap={this.state.GeometryDataFromMap}
          District={this.state.District}
          Mandal={this.state.Mandal}
          GeometricString={this.state.GeometricString}
          CompleteDetails={this.state.CompleteDetails}
          Colony={this.state.Colony}
          Sector={this.state.Sector}
          Boundaries={this.state.Boundaries}
          Block={this.state.Block}
          handleDownload={this.handleDownload}
          onUploadPopUpClose={this.onUploadPopUpClose}
          handleSubmitPopUpOpen={this.handleSubmitPopUpOpen}
          submitPopUp={this.state.submitPopUp}
          SuccesPopUpOpen={this.state.SuccesPopUpOpen}
          WarningPopUp={this.state.WarningPopUp}
          uploadPopUpOpen={this.state.uploadPopUpOpen}
          onHandleWarningPopupClose={this.onHandleWarningPopupClose}
          authorisedPersonValues={this.state.authorisedPersonValues}
          onMileStoneDeleteClick={this.onMilestoneDeleteClick}
          onHandleOrganizationSaveandContinue={
            this.onHandleOrganisationSaveandContinue
          }
          onHandleLandAllocationSaveandContinue={this.onHandleSubmit}
          onHandleAuthorisedSaveandContinue={
            this.onHandleAuthorisedSaveandContinue
          }
          handleTownshipClick={this.handleTownshipClick}
          // PlotAreaType={this.state.PlotAreaType}
          // PlotAreaId={this.state.PlotAreaId}
          activeStep={this.state.activeStep}
          // authorisedPersonValues={this.state.authorisedPersonValues}
          // PlotAreaId={this.state.PlotAreaId}
          handleStateChange={this.handleStateChange}
          handleTypeOfAllocationChange={this.handleTypeOfAllocationChange}
          handleAgreementChange={this.handleAgreementChange}
          TypeOfAllocationId={this.state.TypeOfAllocationId}
          handleBack={this.handleBack}
          LandAllocatedToId={this.state.LandAllocatedToId}
          AllocationSubTypeId={this.state.AllocationSubTypeId}
          typesOfAllocationValues={this.state.typesOfAllocationValues}
          landAllocatedTo={this.state.landAllocatedTo}
         // authorizedPersonName={this.state.authorizedPersonName}
          allocationTypeId={this.state.allocationTypeId}
          OrganizationName={this.state.OrganizationName}
          enterApplicationId={this.state.enterApplicationId}
          mobileNumber={this.state.mobileNumber}
          OrgPhoneNumber={this.state.OrgPhoneNumber}
          OrgEmailAddress={this.state.OrgEmailAddress}
          HouseNoBuildingName={this.state.HouseNoBuildingName}
          StreetNameLocality={this.state.StreetNameLocality}
          handleCountryClick={this.handleCountryClick}
          // Country={this.state.Country}
          // State={this.state.State}
          City={this.state.City}
          ZipCode={this.state.ZipCode}
          RegistrationNumber={this.state.RegistrationNumber}
          agreementTypeValues={this.state.agreementTypeValues}
          // selectThemeCityTYpeValues={this.state.selectThemeCityTYpeValues}
          selectAllocationTypeValues={this.state.selectAllocationTypeValues}
          selectCountryValues={this.state.selectCountryValues}
          selectStateValues={this.state.selectStateValues}
          AllocationType={this.state.allocationTypeId}
          AllocationName={this.state.AllocationName}
          AllocationId={this.state.AllocationId}
          CountryId={this.state.CountryId}
          CountryName={this.state.CountryName}
          handleLandAllocationClick={this.handleLandAllocationClick}
          handleAllocationChange={this.handleAllocationChange}
          StateId={this.state.StateId}
          WitnessName={this.state.WitnessName}
          StateName={this.state.StateName}
          handleUploadImageClick={this.handleUploadImageClick}
          PhotoIdTypeName={this.state.authorisedPersonValues[0].PhotoIdTypeName}
          handlePhotoIdChange={this.handlePhotoIdChange}
          handleRelationChange={this.handleRelationChange}
          check={this.state.check}
          photoIdValues={this.state.photoIdTypeArray}
          relationTypeValues={this.state.RelationTypeArray}
          FirstName={this.state.authorisedPersonValues[0].FirstName}
          LastName={this.state.authorisedPersonValues[0].LastName}
          RelationTypeName={
            this.state.authorisedPersonValues[0].RelationTypeName
          }
          RelationName={this.state.authorisedPersonValues[0].RelationName}
          AuthDateOfBirth={this.state.authorisedPersonValues[0].AuthDateOfBirth}

          AuthorisedPersonEmailAddress={
            this.state.authorisedPersonValues[0].AuthorisedPersonEmailAddress
          }
          MobileNumber={this.state.authorisedPersonValues[0].MobileNumber}
          HouseNo={this.state.authorisedPersonValues[0].HouseNo}
          StreetName={this.state.authorisedPersonValues[0].StreetName}
          PhotoIdNumber={this.state.authorisedPersonValues[0].PhotoIdNumber}
          PhotoIdType={this.state.authorisedPersonValues[0].PhotoIdType}
          authImage={this.state.authorisedPersonValues[0].authImage}
          handleCheckClick={this.handleCheckChange}
          handleDateChange={this.handleDateChange}
          handleRelationNameChange={this.handleRelationNameChange}
          handleRelationTypeIdChange={this.handleRelationTypeIdChange}
          handleWitnessNameChange={this.handleWitnessNameChange}
          handleSubmit={this.onHandleSubmit}
          WitnessDetailsFormArray={this.state.WitnessDetailsFormArray}
          onHandleAddClick={this.onHandleAddClick}
          onWitnessSaveAndContinue={this.onWitnessSaveAndContinue}
          AddClickCount={this.state.AddClickCount}
          onDeleteClick={this.onDeleteClick}
          handleMultiSelectMileStoneChange={
            this.handleMultiSelectMileStoneChange
          }
          handleLandReleaseChange={this.handleLandReleaseChange}
          handleDateOfCompletionChange={this.handleDateOfCompletionChange}
          handleLeaseStartDateChange={this.handleLeaseStartDateChange}
          LandAllocationAllValues={this.state.LandAllocationAllValues}
          // handleLandSubmit={this.handleLandSubmit}
          ruleName1={this.state.ruleName1}
          ruleName2={this.state.ruleName2}
          handleSourceTypeChange={this.handleSourceTypeChange}
          ruleName={this.state.ruleName}
          LandSize={this.state.LandSize}
          LandSizeType={this.state.LandSizeType}
          projectRules={this.state.projectRules}
          InitialAllocation={this.state.InitialAllocation}
          TotalBudget={this.state.TotalBudget}
          PricePerUnit={this.state.PricePerUnit}
          RequiredLandSizeBeforeAllocation={
            this.state.RequiredLandSizeBeforeAllocation
          }
          requiredLandUnitId={this.state.requiredLandUnitId}
          RenewalAmountPercentage={this.state.RenewalAmountPercentage}
          RenewalForEvery={this.state.RenewalForEvery}
          initialUnitId={this.state.initialUnitId}
          TotalLeaseAmount={this.state.TotalLeaseAmount}
          InitialAllocationLandSize={this.state.InitialAllocationLandSize}
          ApplicationId={this.state.enterApplicationId}
          handleSelectMultiChange={this.handleSelectMultiChange}
          projectTypes={this.state.projectTypes}
          projectValues={this.state.projectValues}
          handleConditionTypeChange={this.handleConditionTypeChange}
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          value={this.state.value}
          ConditionTypeId={this.state.ConditionTypeId}
          ConditionTypeValues={this.state.ConditionTypeValues}
          RuleSourceTypeId={this.state.RuleSourceTypeId}
          sourceTypeValues={this.state.sourceTypeValues}
          handleProjectTypeChange={this.handleProjectTypeChange}
          handleLandDetailsChangeClick={this.handleLandDetailsChangeClick}
          MileStoneNewRuleSubmit={this.MileStoneNewRuleSubmit}
          ProjectTypeId={this.state.ProjectTypeId}
          handleEditRuleTypeSubmit={this.handleEditRuleTypeSubmit}
          onHandleClose={this.onHandleClose}
          PopUpOpen={this.state.PopUpOpen}
          handlePopUpOpenClick={this.handlePopUpOpenClick}
          handleMultiSelectChange={this.handleMultiSelectChange}
          ProjectRuleTypes={this.state.ProjectRuleTypes}
          handleThemeCityChange={this.handleThemeCityChange}
          mileStoneValues={this.state.mileStoneValues}
          MileStoneArray={this.state.MileStoneArray}
          RuleId={this.state.RuleId}
          RuleName={this.state.RuleName}
          LandRelease={this.state.LandRelease}
          DateOfCompletion={this.state.DateOfCompletion}
          AddMilestoneClickCount={this.state.AddMilestoneClickCount}
          onMileStoneSave={this.onMileStoneSave}
          onMileStoneAddClick={this.onHandleMileStoneAddClick}
          // handleSubmit={this.onHandleSubmit}
          leaseTenure={this.state.leaseTenure}
          Number={this.state.Number}
          UnitId={this.state.UnitId}
          UnitName={this.state.unitName}
          unitValues={this.state.unitValues}
          LandAllocationId={this.state.LandAllocationId}
          LandAllocationTypeName={this.state.LandAllocationTypeName}
          AvailableLandArea={this.state.AvailableLandArea}
          RequiredLandSize={this.state.RequiredLandSize}
          LeaseAmount={this.state.LeaseAmount}
          LeaseStartDate={this.state.LeaseStartDate}
          LeaseEndDate={this.state.LeaseEndDate}
          GoNumber={this.state.GoNumber}
          GoDate={this.state.GoDate}
          ProjectName={this.state.ProjectName}
          ProjectPurpose={this.state.ProjectPurpose}
          ProjectDescription={this.state.ProjectDescription}
          TownshipName={this.state.TownshipName}
          // onSubmit={this.onHandleSubmit}
          // handleClick={this.handleClick}
          selectLandAllocationTypeValues={
            this.state.selectLandAllocationTypeValues
          }
          selectThemeCityTypeValues={this.state.selectThemeCityTypeValues}
          ruleTypeValues={this.state.ruleTypeValues}
          selectDepartmentName={this.state.selectDepartmentName}
          handleSelectDepartmentChange={this.handleSelectDepartmentChange}
          UserId={this.state.UserId}
          selectDepartmentList={this.state.selectDepartmentList}
          onSubmit={this.onHandleUploadSubmit}
          image1={this.state.image1}
          image2={this.state.image2}
          image3={this.state.image3}
          handleUploadImageChange={this.handleUploadImageChange}
          handleUploadImage2Change={this.handleUploadImage2Change}
          handleUploadImage3Change={this.handleUploadImage3Change}
          check1={this.state.check1}
          handleSubmitCheck={this.handleSubmitCheck}
          SubmitValues={this.state.SubmitValues}
          onHandleSaveAsDraft={this.onHandleSaveAsDraft}
          onHandleFinalSubmit={this.onHandleFinalSubmit}
          // onHandleSubmitClose={this.onHandleSubmitClose}
          townshipValues={this.state.townshipValues}
          handleHouseNoChange={this.handleHouseNoChange}
          handleStreetNameChange={this.handleStreetNameChange}
        />
      </div>
    );
  };

  public TownshipForm = () => {
    return (
      <CreateProposalTownshipForm
      TownshipId={this.state.TownshipId}
        townshipValues={this.state.townshipValues}
        handleTownshipClick={this.handleTownshipClick}
      />
    );
  };
  public DraftTownShipForm = () => {
    return (
      <CreateProposalTownshipForm
      TownshipId={this.state.TownshipId}

        townshipValues={this.state.townshipValues}
        handleTownshipClick={this.handleTownshipClick1}
      />
    );
  };

  public handleWithInAGCChange= (event:any) => {
this.setState({...this.state, WithInAGC: event.target.checked})
  }

  public handleOutOfAGCChange= (event:any) => {
    this.setState({...this.state, OutOfAGC: event.target.checked})
      }

  public AllocationForm = () => {
    return (
      <div>
      <AllocationForm 
      handleOutOfAGCChange={this.handleOutOfAGCChange}
      handleWithInAGCChange={this.handleWithInAGCChange}
      WithInAGC={this.state.WithInAGC}
      OutOfAGC={this.state.OutOfAGC}
      handleTownShipIdsClick={this.handleTownShipIdsClick} 
      />

      {
        <Dialog
          open={this.state.agcPopUp}
          // onClose={this.onHandleAddPopUpClose}
          aria-labelledby="simple-dialog-title"
        >
          <div id="simple-dialog-title">
          Please Select With In AGC/Out Of AGC/Both
            <div className="popup-bottom-btn">
              {/* tslint:disable-next-line:jsx-no-lambda */}
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
      </div>
      
    );
  };

  public handleMapClose = (id: string) => {


    if (id === "") {
        this.setState({ ...this.state, selectMapWarmingPopUp:true })
    } else if(id !== "") {
      const obj: any = localStorage.getItem(id);
      const obj1: any = JSON.parse(obj);


       const North  = obj1.Boundaries && obj1.Boundaries.split(';')
      .map((y:any) => y.split(':')[0].trim() === "North" ? y : null ).filter((x:any) => x !== null)[0]
   
      

       const East = obj1.Boundaries && obj1.Boundaries.split(';')
       .map((y:any) => y.split(':')[0].trim() === "East" ? y : null ).filter((x:any) => x !== null)[0]
      
    

       const South = obj1.Boundaries && obj1.Boundaries.split(';')
       .map((y:any) => y.split(':')[0].trim() === "South" ? y : null ).filter((x:any) => x !== null)[0]
      
     

       const West =  obj1.Boundaries && obj1.Boundaries.split(';')
       .map((y:any) => y.split(':')[0].trim() === "West" ? y : null ).filter((x:any) => x !== null)[0]
      

    
      this.setState({
        ...this.state,
        // tslint:disable-next-line:object-literal-sort-keys
        AvailableLandArea: obj1.LandArea !== null || obj1.LandArea !== undefined? 
        obj1.LandArea : 0, // REquired Land Area
        mapDataValues: true,
        mapOpen:false,
        mapPopUpOpen: false,
        // tslint:disable-next-line:object-literal-sort-keys
        searchArray: this.state.searchArray
        .map((x: ISearchValues) => ({...x,  
          Block: obj1.Block,
          Boundaries: obj1.Boundaries,
          Colony: obj1.Colony,
          CompleteDetails: obj1.CompleteDetails,
          District: obj1.DistrictName,
          GeometricString: obj1.GeometricString,
          GeometryDataFromMap: obj1.GeometryDataFromMap,
          GlobalId: obj1.GlobalId,
          LandAreaAllotedByEstates: obj1.LandArea,
          Mandal: obj1.Mandal,
          ParcelId: obj1.ParcelNumber,
          Plot: obj1.Plot,
          Sector: obj1.Sector,
          SurveyNumber: obj1.SurveyNumberByPlanning,
          TempGlobalId: obj1.TempGlobalId,
          TownShip: obj1.Township,
          Village: obj1.Village
        })),
        // tslint:disable-next-line:object-literal-sort-keys
        Block: obj1.Block,
        Boundaries: obj1.Boundaries,
        Colony: obj1.Colony,
        CompleteDetails: obj1.CompleteDetails,
        District: obj1.DistrictName,
        GeometricString: obj1.GeometricString,
        GeometryDataFromMap: obj1.GeometryDataFromMap,
        GlobalId: obj1.GlobalId,
        Mandal: obj1.Mandal,
        ParcelId: obj1.ParcelNumber,
        Plot: obj1.Plot,
        Sector: obj1.Sector,
        SurveyNumberByPlanning: obj1.SurveyNumberByPlanning,
        TempGlobalId: obj1.TempGlobalId,
        TownShip: obj1.Township,
        Village: obj1.Village,
        // split from Boundaries 
        North,
        South,
        East,
        West

      });
    }
  
  };
 
  public handleMapPopUpClose = () => {
    this.setState({
      ...this.state, 
      mapDataValues: false,
      mapOpen: false,
      mapPopUpOpen: false,

    });
  };

  public handleMapPopUpClose1 = () => {
    this.setState({
      ...this.state, 
     mapDataValues: false,
    //  mapPopUpOpen: false,
    });
  };
  public handleDeletePopUpClose = () => {
    this.setState({ ...this.state, deletePopUp: false });
  };
  public draftApplicationTableForm = () => {
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
                Draft Applications
              </Typography>
            </CardContent>
            <DraftApplicationForm
              draftWithId={this.state.draftWithId}
              draftApplicationValues={this.state.draftApplicationValues}
              onHandleDeleteClickPopUp={this.onHandleDeleteClickPopUp}
              AllocateTo={this.state.AllocateTo}
              count={this.state.count}
              onHandlePageChange={this.onHandlePageChange}
              onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
              draftApplicationList={this.state.draftApplicationList}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              // open={this.state.open}
              onHandleClick={this.handleDraftClick}
              onHandleActionClick={this.handleActionClick}
              onHandleClose={this.handleDraftClose}
              onhandleExpandClose={this.handleExpandClose}
              expandApplicationId={this.state.expandApplicationId}
              dialogExpandOpen={this.state.dialogExpandOpen}
            />
            {
              <Dialog
                open={this.state.deletePopUp}
                //  onClose={this.handleDeletePopUpClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="simple-dialog-title">
                  Are you sure to delete/cancel the selected application
                </DialogTitle>
                <DialogActions>
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.handleDeletePopUpClose()}
                  >
                    No, DisAgree
                  </Button>
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() =>
                      this.onHandleDeleteClick(this.state.draftApplicationId)
                    }
                  >
                    Yes,I Agree
                  </Button>
                </DialogActions>
              </Dialog>
            }
          </Card>
        </div>
      </div>
    );
  };

  public handleMapSelectClick = () => {
    this.setState({...this.state, selectMapValuesPopUp: false})
  }

  public onHandleDeleteClickPopUp = (id: string) => {
    this.setState({ ...this.state, deletePopUp: true, draftApplicationId: id });
  };

  public handleDocumentTypeChange = (event: any) => {
    // tslint:disable-next-line:no-console
    const selected = [].filter
      .call(event.target.options, (o: any) => o.selected)
      .map((o: any) => o.value);
  
    const document = this.state.documentList.filter((it: IDocumentPropValues) =>
      selected.includes(it.PhotoIdTypeName)
    );

    if (
      this.state.document.map(
        (x: IDocumentPropValues) => x.PhotoIdTypeName !== event.target.value
      )
    ) {
      this.setState({
        ...this.state,
        document
      });
    } else {
      this.setState({
        ...this.state,
        document: this.state.document.filter(
          (x: IDocumentPropValues) => x.PhotoIdTypeName !== event.target.value
        )
      });
    }
  };

  public handleDocumentType2Change = (event: any) => {
    const selected = [].filter
      .call(event.target.options, (o: any) => o.selected)
      .map((o: any) => o.value);

    const document2 = this.state.documentList2.filter(
      (it: IDocumentPropValues) => selected.includes(it.PhotoIdTypeName)
    );

   

    if (
      this.state.document2.map(
        (x: IDocumentPropValues) => x.PhotoIdTypeName !== event.target.value
      )
    ) {
      this.setState({
        ...this.state,
        document2
      });
    } else {
      this.setState({
        ...this.state,
        document2: this.state.document2.filter(
          (x: IDocumentPropValues) => x.PhotoIdTypeName !== event.target.value
        )
      });
    }
  };

  public handleSelectProcessChange = (allocationId: number, event: any) => {
    
    getDocumentTypeList2(allocationId, event.target.value)
      .then(res => {
        this.setState({
          ...this.state,

          documentList2: this.state.documentList.filter(
            (y: IDocumentPropValues) =>
              res.documents.find((x: IDocument2PropValues) =>
               x.Id === y.PhotoId)
          ),
          // tslint:disable-next-line:object-literal-sort-keys
          documentList: this.state.documentList.filter(
            (item1: IDocumentPropValues) => {
              return (
                res.documents
                .filter((item2: IDocument2PropValues) => {
                  return item1.PhotoId === item2.Id;
                }).length === 0
              );
            }
          ),
          documentList2Length: this.state.documentList.filter(
            (item1: IDocumentPropValues) => {
              return (
                res.documents
                .filter((item2: IDocument2PropValues) => {
                  return item1.PhotoId === item2.Id;
                }).length === 0
              );
            }
          ).length,
          // tslint:disable-next-line:object-literal-sort-keys
          AllocationId: allocationId,
          ProcessId: event.target.value
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public handleAllSelectClick = () => {
    this.setState({
      ...this.state,
      change: true,
      documentList2: [...this.state.documentList2, ...this.state.documentList],
      // tslint:disable-next-line:object-literal-sort-keys
      documentList: []
    });
  };
  public handleCancelClick = () => {
    this.setState({...this.state, popUpOpen: false})
    this.props.history.push("/page/dashboard");
  };
  public handleAllLeftSelectClick = () => {
    this.setState({
      // ...this.state,
      // documentList2: this.state.documentList2.slice(
      //   0,
      //   this.state.documentList2Length
      // ),
      // // tslint:disable-next-line:object-literal-sort-keys
      // documentList: this.state.documentList2.slice(
      //   this.state.documentList2Length,
      //   this.state.documentList2.length
      // )
      ...this.state,
      change: true,

      documentList: [...this.state.documentList, ...this.state.documentList2],
      // tslint:disable-next-line:object-literal-sort-keys
      documentList2: []
    });
  };

  public handleSpecificSelectClick = (values: any) => {
    const document = this.state.document;
  
    if (
      this.state.documentList2.filter((x: IDocumentPropValues) =>
        document.find((y: IDocumentPropValues) => y.PhotoId !== x.PhotoId)
      )
    ) {

      // const uniquelist = this.state.documentList2.map((x:IDocumentPropValues) => 
      // document.filter((y:IDocumentPropValues) => y.PhotoIdTypeName !== x.PhotoIdTypeName ))
      
      this.setState({
        ...this.state,
        change: true,

        document: [],
        documentList2: [...this.state.documentList2, ...document],
        // tslint:disable-next-line:object-literal-sort-keys
        documentList: this.state.documentList.filter(
          (item1: IDocumentPropValues) => {
            return (
              this.state.document.filter((item2: IDocumentPropValues) => {
                return item1.PhotoId === item2.PhotoId;
              }).length === 0
            );
          }
        )
      });

    }
  };

  public handleLeftSelectClick = (values: any) => {
    const document2 = this.state.document2;
  
    if (
      this.state.documentList.filter((x: IDocumentPropValues) =>
        document2.find(
          (y: IDocumentPropValues) => y.PhotoIdTypeName !== x.PhotoIdTypeName
        )
      )
    ) {
      this.setState({
        ...this.state,
        change: true,

        document2: [],
        documentList: [...this.state.documentList, ...document2],
        // tslint:disable-next-line:object-literal-sort-keys
        documentList2: this.state.documentList2.filter(
          (item1: IDocumentPropValues) => {
            return (
              this.state.document2.filter((item2: IDocumentPropValues) => {
                return item1.PhotoIdTypeName === item2.PhotoIdTypeName;
              }).length === 0
            );
          }
        )
      });
    }
  };

  // public handleReset = () => {
  //   this.setState({
  //     ...this.state,
  //     AllocationId: 0,
  //     AllocationName: "",
  //     Id: 0,
  //     // tslint:disable-next-line:object-literal-sort-keys
  //     ApplicationTypeName: "",

  //     FileType: null,
  //     FileTypeId: 0,
  //     PhotoId: 0,
  //     ProcessId: 0,
  //     PhotoIdTypeName: "",
  //     document: [],
  //     document2: [],
  //     documentList: [],
  //     documentList2: [],
  //     documentList2Length: 0
  //   });
  // };

  public onHandleDocumentMappingSubmit = (
    event: IDocumentmappingValues & IDocumentPropValues
  ) => {
    if (
      event.AllocationId !== 0 &&
      event.ProcessId !== 0 &&
      this.state.change === true
    ) {
   
      postInsertDetails(
        event.AllocationId,
        event.ProcessId,
        this.state.documentList2.map((x: IDocumentPropValues) => x.PhotoId)
      ).then(res => {
        this.setState({ ...this.state, 
           documentList2: [...this.state.documentList2, this.state.document2],
           successPopUp: true ,
          });
      });
    } else {
      this.setState({ ...this.state, PopUpOpen: true });
    }

    // GetListOfDocuments().then(res=>
    //   this.setState({
    //   ...this.state,

    // }))
  };

  public onHandlePopUpClose = () => {
    this.setState({ ...this.state, PopUpOpen: false, forwardOpen: false , reviewOpen: false});
  };
  public onHandleSuccessPopUpClose = () => {
    this.setState({ ...this.state, successPopUp: false });
  };

  public onImageClick = (values: IChangeAvatarValues) => {
    
    this.setState({ ...this.state, userDetails: user });
    if (user! == null || user !== undefined) {
     
      postChangeAvatarValues(this.state.Photo, user.model.UserId)
        .then(res => {
          this.setState({
            ...this.state,
            Photo: "http://" + res.model.Photo,
            Photo1: "http://" + res.model.Photo,

            dialogOpen: true,
          });
          localStorage.setItem("UserImage", "http://" + res.model.Photo)
        })
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    }
  };
  public handleCaptureFingerClick = (value1: string, value2: number) => {
    // postCaptureFingerDetails(value1, value2)
    //   .then(res => {
        
        this.setState({
          ...this.state,
          cPassword: value1,
         // changeCaptureFingerValues: res,
         captureFingerPopUp: true,
          selectedFinger: value2
        });
    //   })
    //   // tslint:disable-next-line:no-console
    //   .catch(err => console.log(err));
  };
  // public handleOpenClick = (event: any) => {
  //   this.setState({ ...this.state, dialogOpen: true });
  // };
  public handleMyProfileCancelClick = (event: any) => {
    this.props.history.push("/page/dashboard");
  };
  public handleCancelClickInfo = (event: any) => {
    this.props.history.push("/page/dashboard");
  };
  public onHandleMyProfileClose = () => {
    this.setState({ ...this.state, dialogOpen: false, dialogOpen3: false, captureFingerPopUp: false });
  };

  public handleSaveChangesClick = (values: IPersonalInfoValues) => {
    
if (user! == null || user !== undefined) {
    getUserProfileDetails(values,user.model.RoleId)
      .then(res => {
       
        this.setState({
          ...this.state,
          DisplayName: values.DisplayName,
          Photo: "http://" + values.Photo,
          Photo1: "http://" + values.Photo,

          // dialogOpen3: true,

          dialogs: true
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
    }
  };

  public handleChange = (evt: any) => {
  
    const file = evt.target.files[0];
    const reader = new FileReader();
  

    reader.onloadend = () => {
      this.setState({
        ...this.state,

        Photo: reader.result,
        myProfileValues: { ...this.state.myProfileValues, Photo: reader.result }
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,
        
        Photo: reader.result,
        disableChangeAvatarButton:false,
        myProfileValues: { ...this.state.myProfileValues, Photo: reader.result },
      });
    } else {
      this.setState({
        ...this.state,

        Photo: "",

        myProfileValues: { ...this.state.myProfileValues, Photo: "" }
      });
    }
  };

  public formHandleChange = (event: any) => {

    this.setState({
      myProfileValues: {
        ...this.state.myProfileValues,
        [event.target.name]: event.target.value
      }
    });
    // this.props.history.push("/page/dashboard");
  };
  public onTabChange = (event: any, value: number) => {
    this.setState({ ...this.state, tabsValue: value });
  };
  public onSave = (evt: any) => {
    // tslint:disable-next-line:no-console
    console.log(evt);
  };
  public onImageReset = (evt: any, Photo: any) => {
    localStorage.removeItem("UserImage")
    localStorage.setItem("UserImage","/images/default.jpeg")
   this.setState({
         ...this.state,
     Photo: "/images/default.jpeg",
     Photo1:"/images/default.jpeg",

           disableChangeAvatarButton:true

         });
     
  };
  public handleChangePassword = (
    value: IChangePasswordValues & ISelectFingerListProps
  ) => {
    if (value.NewPassword === value.ReEnterNewPassword) {
      postChangePasswordDetails(value)
        .then(res => {
          this.setState({
            ...this.state,
            CurrentPassword: value.CurrentPassword,
            NewPassword: value.NewPassword,
            ReEnterNewPassword: value.ReEnterNewPassword
          });
        })
        .catch(err => err);
      getMyProfileDetails().then(res => {
        this.setState({
          ...this.state,
          Photo: "http://" + res.objList.Photo,
          Photo1:"http://" + res.objList.Photo,

          PopUpOpen2: true,
          myProfileValues: res.objList,
        });
      });
    }
  };
  public handleChangePasswordPopUpClose = () => {
    this.setState({ ...this.state, dialogs: false, PopUpOpen2: false });
  };

  public handleFirstNameChange = (event: any) => {
    this.setState({
      ...this.state,
      change1: this.state.change1 + 1,
      myProfileValues: {
        ...this.state.myProfileValues,
        FirstName: event.target.value
      }
    });
  };
  public handleDisplayChange = (event: any) => {
    this.setState({
      ...this.state,
      change1: this.state.change1 + 1,
      myProfileValues: {
        ...this.state.myProfileValues,
        DisplayName: event.target.value
      }
    });
  };
  public handleMyProfileReset = () => {
    this.setState({
      Photo: ""
    });
  };
  public handleMiddleNameChange = (event: any) => {
    this.setState({
      ...this.state,
      change1: this.state.change1 + 1,
      myProfileValues: {
        ...this.state.myProfileValues,
        MiddleName: event.target.value
      }
    });
  };

  public handleSurNameChange = (event: any) => {
    this.setState({
      ...this.state,
      change1: this.state.change1 + 1,
      myProfileValues: {
        ...this.state.myProfileValues,
        SurName: event.target.value
      }
    });
  };

  public handleEmailAddressChange = (event: any) => {
    this.setState({
      ...this.state,
      change1: this.state.change1 + 1,
      myProfileValues: {
        ...this.state.myProfileValues,
        Email: event.target.value
      }
    });
  };

  public handleMobileNumberChange = (event: any) => {
    this.setState({
      ...this.state,
      /// change1: this.state.change1 + 1,
      myProfileValues: {
        ...this.state.myProfileValues,
        PhoneNumber: event.target.value
      }
    });
  };
  public handleSubMenuClick = async (urlPath:string)=>{
   
   try {
    if (loader) {
      loader.style.display = "block";
    }
    

 const PropertyAssessmentDocumentTypeValues  = await getLMSDocumentTypes();
    const buildingClassDropDowndata = await GetBuildingClassificationDetailsWithPropType(this.state.PropertyTypeId)
    const natureUsageGrid = await GetNatureUsageDetails();
   const buildingClassificationGrid = await GetBuildingClassificationDetails();
        const categoryOwnerShipDropDownData =await postCategoryOwnerShipDropDownData()
        const PropertyTypeDropDown = await getDropdownForPropertyType();
    const propetyDepartmentMasterGridData = await getPropertyDepartmentMasterGrid();
   const resCategory = await getCategoryGridValues()
    const resaminity= await getAminitiesGridValues()
    const roleType = await getProjectTypeNames();
    const Pro = await getPropertyTypeGridValues()
    const Prodropdown= await getDropDownList()
 const res= await getRoleTypeMasterValues()  
 const Items = await getMenuItems(RoleId)
 const userItems= await getUserItems(RoleId)
const categoryOwnerShipDropDown= await getCategoryOwnershipDropdown()
    const r2 = await GetAllTemplateNames();
    const r3 = await GetProcessTypes();
    const r4 = await GetListOfDocuments();
     // const r1 = await getMyProfileDetails();
    const r = await getDraftApplications();

    const genderDropDown = await getGenderDropDown()
    // const res = await getAgreementTypeValues(
    //   this.state.LandAllocatedToId,
    //   this.state.AllocationId
    // )
    const r20 = await getAgreementTypeValues(
      this.state.ProposalFormApplicationIdValues.length === 0
        ? 0
        : this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => x.AllocationTypeId
          )[0]
      ,
      this.state.ProposalFormApplicationIdValues.length === 0
        ? 0
        : this.state.ProposalFormApplicationIdValues.map(
            (x: ISearchValues) => 
            x.AllocationSubTypeId)[0]
    );
    const res1 = await getTypeOfAllocationDropDown();
    const res2 = await getTownShipValues();
    const res3 = await getLandAllocationTypeValues();
    const res4 = await postRelationTypeId();
    const res6 = await postPhotoId();
    const res5 = await getCountryValues();
    const res7 = await getAllocatedValues(this.state.LandAllocatedToId);
    const res8 = await getUnitValues(
      this.state.TownshipId,
      this.state.AllocationId
    );
const apartmentsDropDown= await getapartmentDropdown()
    const res9 = await LeaseTenureValues();
    const res10 = await RuleTypeValues();
   const res11 = await SourceTypeValues();
   const res12 = await ConditionTypeValues();
    const res13 = await postDepartmentUserDropDownList(
      this.state.enterApplicationId
    );
    const departmentForward = await GetDepartmentandusers2forward(this.state.enterApplicationId)
    const aminity = await getAminityDropDown()
    const res14 = await getDashboardLandDetails();
    const res15 = await getMyProfileDetails();
    const res16 = await getMyProfileRoleDetails();
    const res17 = await getMyProfileDepartmentDetails();
    const Building= await getBuildingClassificationDropDown(this.state.PropertyTypeId,this.state.BuildingClassificationId)
    const res18 = await getFingerListDetails();
    const res19 = await getAllRolesListDetails();
    const res20 = await mileStoneValues(this.state.TownshipId);
    const res100 = await getDistrictDropDown();
    // const res47 = await DepartmentDropDown();
    const res47= await GetSubmitDraftAssessments();
  const res48 = await GetSelectedUsers();
  const res51 = await postPTMSDepartmentUserDropDownList()

    this.setState({
      ...this.state,
      Description:'',
      MandalId:0,
      MunciId: 0,
      OwnerName: '',
      OwnerPhoneNumber: '',
      TownId:0,
      draftAssessmentCount: res47.jsonData.data.length,
      selectUserNameValues: res48.usrsdata,
      submitDraftAssessmentList: res47.jsonData.data,
      // tslint:disable-next-line:object-literal-sort-keys
      NewPropertyDocumentTypeValues:genderDropDown.documenttype,
      PropertyAssessmentDocumentTypeValues: PropertyAssessmentDocumentTypeValues.rslt,
      selectDepartmentForwardList: departmentForward.deptusersViewModelLst,
      selectGenderValues: genderDropDown.gender,
      // tslint:disable-next-line:object-literal-sort-keys
      selectFloorValues: genderDropDown.floornumber,
      selectOccupancyValues:genderDropDown.occupancy,
      selectClassificationValues: Building.NatureUsage,
      // Building.NatureUsage,
      selectNatUsageValues:Building.NatureUsage,
      selectGuardianValues:genderDropDown.relation,
      selectfloorValues: genderDropDown.floortype,
      selectDistrictValues: res100.rslt
      .filter((x:IDistrictValues) => x.Description !== "")
      .map((x:IDistrictValues,index:number)=> ({...x, DistrictNumber
        : index + 1})) ,
     
      selectroofValues: genderDropDown.rooftype,
      // tslint:disable-next-line:object-literal-sort-keys
      aminityValues1:aminity.jsonData.data,
      selectwallValues: genderDropDown.walltype,
      selectwoodValues: genderDropDown.woodtype,
      FloorArray: this.state.FloorArray.map((x: any) => ({
        id: 0,
        // tslint:disable-next-line:object-literal-sort-keys
        AddClickCount: 0,
        FirmName : "",
        OccupantName: "",
       selectClassificationValues: Building.NatureUsage,
       selectNatUsageValues:Building.NatureUsage,
       selectFloorValues:genderDropDown.floornumber,
       selectOccupancyValues: genderDropDown.occupancy,
       ConstructionDate: "",     
        EffectiveFromDate	: "",
        UnstructeredLand: 0,
        Length: "",
        taxAmount:0,
        Breadth: "",
        PlinthArea: "",
        BuildingPermissionNo: "",
        BuildingPermissionDate: "",
        PlinthAreaInBuildingPlan: "",
         FloorNumber: 0,
         BuildingClassification: 0,
         NatureOfUsage: 0,
         Occupancy:0,
        // tslint:disable-next-line:object-literal-sort-keys

      })),

      // tslint:disable-next-line:object-literal-sort-keys
      OwnershipArray: this.state.OwnershipArray.map((x: any) => ({
        AddClickCount: 0,
        OwnerName: "",
        id: 0,
        // tslint:disable-next-line:object-literal-sort-keys
        Guardian: "",
        MobileNo: "",
        EmailAddress: "",
        selectGenderValues: genderDropDown.gender,
        selectGuardianValues:genderDropDown.relation,
        Gender: 0,
        GuardianReg:0
      })),
      // tslint:disable-next-line:object-literal-sort-keys
      selectApartmentValues:apartmentsDropDown.jsonData.data,
      selectCategoryOwnershipValues: categoryOwnerShipDropDown.jsonData.data,

      // tslint:disable-next-line:object-literal-sort-keys
      MaxPropertyTypeId:         Pro.jsonData.data
        .map((x: IProTypeMasterValues) => x.PropertyTypeId)
        .filter((x: number, y: number) => x > y),
      allocationNameValues:Prodropdown.jsonData.data,

      allocationTypeList:         Pro.jsonData.data,

      countPro: Pro.jsonData.data.length,
      // tslint:disable-next-line:object-literal-sort-keys
      AminityTypeMasterList:resaminity.jsonData.data,

      countAminity:resaminity.jsonData.data.length,
      // tslint:disable-next-line:object-literal-sort-keys
      CategoryTypeMasterList: resCategory.jsonData.data,
      NatureUsageList:        natureUsageGrid.jsonData.data,

      buildingClassDropDowndata:         buildingClassDropDowndata.jsonData.data,  
    
      buildingClassificationCount:        buildingClassificationGrid.jsonData.data.length,
      buildingClassificationList:   buildingClassificationGrid.jsonData.data, 

      categoryOwnerShipDropDownDataValues :        categoryOwnerShipDropDownData.jsonData.data,

      countCategory: resCategory.jsonData.data.length,
      natureUsageCount:         natureUsageGrid.jsonData.data.length,
      propertyDepartmentMasterList:         propetyDepartmentMasterGridData.jsonData.data,
      propertyDepartmentcount:         propetyDepartmentMasterGridData.jsonData.data.length,
      propertyTypeDropDownValues :         PropertyTypeDropDown.jsonData.data,


      // tslint:disable-next-line:object-literal-sort-keys
      MileStoneArray: this.state.MileStoneArray.map((x:any) => {
        return {
          AddMilestoneClickCount: x.AddMilestoneClickCount,
          LandRelease: x.LandRelease,
          RuleName: x.RuleName,
          // tslint:disable-next-line:object-literal-sort-keys
          RuleId: x.RuleName,
          DateOfCompletion: x.DateOfCompletion,
          mileStoneValues: res20.objProjectRulesList.filter(
            (y: IMileStoneDropDownValues) =>
              y.RuleName !== null && y.RuleName !== undefined
          ),
          id: x.id,
          ProjectRuleTypes: x.ProjectRuleTypes,
          ProjectTypeId: x.ProjectTypeId,
          ruleTypeValues: res10.objProjRuleTypes,
          sourceTypeValues: res11.objDetails,
          RuleSourceTypeId: x.RuleSourceTypeId,
          ConditionTypeId: x.ConditionTypeId,
          ConditionTypeValues: res12.objDetails,
          projectValues:res20.objProjectRulesList.filter(
            (y: IMileStoneDropDownValues) =>
              y.RuleName !== null && y.RuleName !== undefined
          ),
        };
      }),
      mileStoneValues: res20.objProjectRulesList.filter(
        (y: IMileStoneDropDownValues) =>
          y.RuleName !== null && y.RuleName !== undefined
      ),
      projectValues: res20.objProjectRulesList.filter(
        (y: IMileStoneDropDownValues) =>
          y.RuleName !== null && y.RuleName !== undefined
      ),
      // tslint:disable-next-line:object-literal-sort-keys
      RelationTypeArray: res4.objDetails,
      WitnessDetailsFormArray: this.state.WitnessDetailsFormArray.map((x:IwitnessValues) => {
        return {
          AddClickCount: x.AddClickCount,
          WitnessName: x.WitnessName,
          id: x.id,
          // tslint:disable-next-line:object-literal-sort-keys
          RelationName: x.RelationName,
          RelationType: x.RelationType,
          RelationDateOfBirth: x.RelationDateOfBirth,
          RelationTypeArray: res4.objDetails
        };
      }),
      selectDocumentMappingValues:         r2.jsonData.AllocaitonTypeslist,

      selectProcessValues:         r3.ProcessTypesList,

      // tslint:disable-next-line:object-literal-sort-keys
      documentList:         r4.documentsList,

      draftApplicationList:         r.aaData,

      count:         r.aaData        .length,
      // tslint:disable-next-line:object-literal-sort-keys
      //  ProfileDetails: r1,
      typesOfAllocationValues: res1.objAgreementTypesList,
      // tslint:disable-next-line:object-literal-sort-keys
      photoIdTypeArray: res6.objPhotoIdTypes,
      selectLandAllocationTypeValues: res3.objLandAllocationTypes,
      selectThemeCityTypeValues: res2.townshipViewModelLst,
      // tslint:disable-next-line:object-literal-sort-keys
      selectCountryValues:res5.objCountriesList,
      selectAllocationTypeValues: res7.objAllocationTypesList.filter(
        (x: IAllocationValues) =>
          x.AllocationName !== null && x.AllocationName !== undefined
      ),
      unitValues: res8.objPlotAreaTypes,
      leaseTenure: res9.objLeaseTenureCount,
      ruleTypeValues: res10.objProjRuleTypes,
      sourceTypeValues: res11.objDetails,
      ConditionTypeValues: res12.objDetails,
    
      // sourceTypeValues: res11,
      // ConditionTypeValues: res12,
      selectDepartmentList: res13.departmentMasterViewModel,
      ptmsSelectDepartmentList:res51.deptusersViewModelLst,

      // townshipValues: res.aaData
      townshipValues:res14.aaData,
      myProfileValues: res15.objList,
      Photo: "http://" + res15.objList.Photo,
      Photo1: "http://" + res15.objList.Photo,

     // Photo: userImage,
      DisplayName: res15.DisplayName,
      roleTypeValues: res16.rolelist.filter(
        (x: ISelectRoleValues) =>
          x.RoleName !== null && x.RoleName !== undefined
      ),
      departmentTypeValues: res17.departmentMasterViewModel,
      fingerTypeValues: res18.fingersListVM,

      // agreementTypeValues: res,
      agreementTypeValues:  r20.objAgreementTypesList,
    
      selectRoleValues: res19.rolelist,

      menuItems:Items.MenuList,

      userItems:        userItems.menuUrlsViewModelLst,

      countRole: res.jsonData.data.length,
      DocumentTypeMasterList: res.jsonData.data,

      ProjectTypeValues: roleType.fingersListVM,

      AllocationId: 0,
      ProcessId: 0,
      activeStep: 0,
      check: false,
      pageAminity: 0,
      pageBuilding: 0,    
      pageCategory: 0 ,
      pageNatureUsage: 0 ,
      pagePropertyDepartment: 0 ,
      pagePropertyType : 0,
      selectFile: '',
      PropertyTypeId: 0,
      CategoryOwnershipId: 0,
      PropertyDepartmentId: 0,
      ApartmentNameId:0,
      

      // New Property Assessment 
       AddClickCount: 0,
       EnumMasterID:0 ,
       Gender: 0,
       GuardianReg:0 ,

       ProcessingFee: 1200,
       TotalTaxAmount: '',
       SurveyNumber: '',
       PattaNumber: '',
       VacantLandArea: '',
       CurrentMarketValue: '',
       RegisteredDocumentValue: '',
       EffectiveDate: '',
       LayoutPermitNumber: '',
       LayoutPermitDate: '',
       North: '',
       East: '',
       West: '',
       South: '',
       District: '',
       Corporation: '',
       Mandal: '',
       Village: '',
       TownShip: '',
       Sector: '',
       TotalTax: 0,
       NatureOfUsage: 0,
       Colony: '',
       Locality: '',
       ZoneNo: '',
       WardNo: '',
       Block: '',
       Street: '',
       Enumerationblock: '',
       PlotNo: '',
       ElectionWard: '',
       DoorNo: '',
       Pincode: '',
       CertificateNumber: '',
       OccupancyCertificateDate: '',
       ExtentOfSite: '',
       EnumMasterDesc: '',
       roofId: 0,
       wallId: 0,
       FloorNumber: 0,
       BuildingClassification:0,
       woodId: 0,
       aminityTypes: [],
     //  mapOpen: false ,
     // UploadPopUp: false,
      CertificateNo: '',
      CertificateDate: '',
      MROProceedingNumber: '',
      RegisteredDocumentNumber: '',
      RegisteredDocumentDate: '',
      DeedNumber: '',
      DeedDate: '',
      DecreeNumber: '',
      DecreeDate:'',
      CourtName:'',
      NewPropertyDocumentTypeId: 0,
      PropertyAssessmentDocumentTypeId: 0,
      Occupancy: 0,
      UserId:0
    
    
      //



    });
    if (loader != null) {
      loader.style.display = "none";
    }
  }
 catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
    if (loader != null) {
      loader.style.display = "none";
    }
  }
 
   this.props.history.push(urlPath) 
  }

  public onHandleRolesChange = (
    event: any,
    values: any
  ) => {
  
    this.setState({
      ...this.state,
      ProjectType: event.target.value,
      ProjectTypeIds: this.state.ProjectTypeValues
        .filter((x: IProjectTypeValues) =>
          event.target.value.find((y: string) => y === x.ProjectName)
        )
        .map((x: IProjectTypeValues) => x.ProjectTypeId)
    });
  };

  public RoleTypeMasterState = () => {
    const { DocumentTypeMasterList, rowsPerPageRole, pageRole } = this.state;
    

    const emptyRows =
      rowsPerPageRole -
      Math.min(
        rowsPerPageRole,
        DocumentTypeMasterList.length - pageRole * rowsPerPageRole
      );
  
     
      
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
                      Role Type Master
                    </Typography>
                    <div className="title-btn">
                      <Button
                        className="doc-btn"
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={() => this.onHandleAddPopUpOpen()}
                      >
                        + Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
                {
                  <Dialog
                    open={this.state.addPopUpOpenRole}
                    onClose={this.onHandleAddPopUpClose}
                    aria-labelledby="simple-dialog-title"
                  >
                    <div className="popup-title">
                      <DialogTitle id="simple-dialog-title">
                        Add Role Type
                      </DialogTitle>
                    </div>
                    <div id="simple-dialog-title">
                      <AddRoleTypeForm
                      onhandleProjectTypeChange={this.onHandleRolesChange}
                      ProjectTypeValues={this.state.ProjectTypeValues}
                      ProjectType={this.state.ProjectType}
                        RoleId={this.state.id}
                        newRoleName={this.state.newRoleName}
                        documentTypeMasterList={this.state.DocumentTypeMasterList}
                        onHandleAddPopUp={this.onHandleAddPopUpOpen}
                        onHandleAddSave={this.onHandleAddSave}
                        onHandleAddChange={this.onHandleAddChange}
                        onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                      />
                    </div>
                  </Dialog>
                }
                <RoleTypeMasterForm
                RoleId={this.state.RoleId}
                rowsPerPage={this.state.rowsPerPageRole}
                page={this.state.pageRole}
                count={this.state.countRole}
                onHandleSearchRole={this.onHandleSearchRole}
                dropDownOpen={this.state.dropDownOpen}
                dropDownOpen2={this.state.dropDownOpen2}
                ClickOpen={this.state.ClickOpen}
                  onHandleActivatePopUp={this.onHandleActivatePopUpOpen}
                  onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
                  activatePopUpOpenRole={this.state.activatePopUpOpenRole}
                  onHandleActivateClick={this.onHandleActivateClick}
                  searchInputRole={this.state.searchInputRole}
                  onHandleSearch={this.onHandleSearchRole}
                  addPopUpOpenRole={this.state.addPopUpOpenRole}
                  onHandleAddPopUp={this.onHandleAddPopUpOpen}
                  onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  onHandleAddSave={this.onHandleAddSave}
                  id={this.state.id}
                  RoleName={this.state.RoleName}
                  handleEditRuleNameChange={this.onHandleEditNameChange}
                  onHandleEditSave={this.onHandleEditSave}
                  deActivatePopUpOpen={this.state.deActivatePopUpOpen}
                  onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
                  onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
                  onHandleDeActivateSave={this.onHandleDeActivateSave}
                  editPopUpOpen={this.state.editPopUpOpen}
                  onHandleEditActionClick={this.onHandleEditActionClick}
                  onHandleEditPopUpClose={this.onHandleEditPopUpClose}
                  emptyRows={emptyRows}
                  countRole={this.state.countRole}
                  pageRole={pageRole}
                  rowsPerPageRole={this.state.rowsPerPageRole}
                  openRole={this.state.openRole}
                  openRole2={this.state.openRole2}
                  onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                  onHandlePageChange={this.handleChangePage}
                  onHandleActionClick={this.onHandleActionClick}
                  onHandleClose={this.onHandleClose1}
                  onHandleClose2={this.onHandleClose2}
                  documentTypeMasterList={this.state.DocumentTypeMasterList}
                  roleValues={this.state.roleValues}
                  onhandleProjectTypeChange={this.onHandleRolesChange}
                  ProjectType={this.state.ProjectType}
                  ProjectTypeValues={this.state.ProjectTypeValues}

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
                  You have successfully added role
                  <div className="popup-bottom-btn">
                    {/* tslint:disable-next-line:jsx-no-lambda */}
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
                  Role name already existed, please add new role name.
                  <div className="popup-bottom-btn">
                    {/* tslint:disable-next-line:jsx-no-lambda */}
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
    
            {
              <Dialog
                open={this.state.editSuccessPopUp}
                // onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div id="simple-dialog-title">
                  You have updated role successfully
                  <div className="popup-bottom-btn">
                    {/* tslint:disable-next-line:jsx-no-lambda */}
                    <Button
                      className="save-btn"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => this.handleEditSuccessPopUpClose()}
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
    
    
    

////////////////////////////////////////////////////////////////////////////////////////////////
  public MyProfileForm = () => {
    return (
      <div>
        <MyProfileTabsForm
        captureFingerPopUp={this.state.captureFingerPopUp}
        disableChangeAvatarButton={this.state.disableChangeAvatarButton}
          handleEmailAddressChange={this.handleEmailAddressChange}
          handleMobileNumberChange={this.handleMobileNumberChange}
          handleDisplayChange={this.handleDisplayChange}
          handleMiddleNameChange={this.handleMiddleNameChange}
          handleSurNameChange={this.handleSurNameChange}
          handleFirstNameChange={this.handleFirstNameChange}
          handleSaveChangesClick={this.handleSaveChangesClick}
          onSave={this.onSave}
          FingerId={this.state.FingerId}
          ActionRequired={this.state.myProfileValues.ActionRequired}
          CurrentPassword={this.state.myProfileValues.CurrentPassword}
          Department={this.state.myProfileValues.Department}
          DepartmentName={this.state.myProfileValues.DepartmentName}
          DisplayName={this.state.myProfileValues.DisplayName}
          Email={this.state.myProfileValues.Email}
          EncryptedPassword={this.state.myProfileValues.EncryptedPassword}
          Finger={this.state.myProfileValues.Finger}
          FirstName={this.state.myProfileValues.FirstName}
          Guid={this.state.myProfileValues.Guid}
          MiddleName={this.state.myProfileValues.MiddleName}
          NewPassword={this.state.myProfileValues.NewPassword}
          PhoneNumber={this.state.myProfileValues.PhoneNumber}
          Photo={this.state.Photo}
          ReEnterNewPassword={this.state.myProfileValues.ReEnterNewPassword}
          ReturnCode={this.state.myProfileValues.ReturnCode}
          RoleId={this.state.myProfileValues.RoleId}
          RoleName={this.state.myProfileValues.RoleName}
          SurName={this.state.myProfileValues.SurName}
          UserId={this.state.myProfileValues.UserId}
          UserName={this.state.myProfileValues.UserName}
          myProfileValues={this.state.myProfileValues}
          roleTypeValues={this.state.roleTypeValues}
          departmentTypeValues={this.state.departmentTypeValues}
          fingerTypeValues={this.state.fingerTypeValues}
          tabsValue={this.state.tabsValue}
          onTabChange={this.onTabChange}
          handleChangePassword={this.handleChangePassword}
          onImageClick={this.onImageClick}
          handleChange={this.handleChange}
          handleCaptureFingerClick={this.handleCaptureFingerClick}
          // handleSaveChangesClick={this.handleSaveChangesClick}
          myProfileChangePasswordValues={
            this.state.myProfileChangePasswordValues
          }
          onHandleClose={this.onHandleMyProfileClose}
          handleCancelClick={this.handleMyProfileCancelClick}
          handleCancelClickInfo={this.handleCancelClickInfo}
          formHandleChange={this.formHandleChange}
          onImageReset={this.onImageReset}
          handleReset={this.handleMyProfileReset}
        />
        <div>
          {
            <Dialog
              open={this.state.dialogOpen}
              // onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              <DialogTitle id="simple-dialog-title" />
              <div id="simple-dialog-title">
                <UploadImagePopUp
                disableChangeAvatarButton={this.state.disableChangeAvatarButton}
                  onHandleClose={this.onHandleMyProfileClose}
                  handleChange={this.handleChange}
                  Photo={this.state.Photo}
                  onImageClick={this.onImageClick}
                  onImageReset={this.onImageReset}
                  handleReset={this.handleReset}
                />
              </div>
            </Dialog>
          }
          
        </div>
        <div>
          {
            <Dialog
              open={this.state.dialogOpen3}
              // onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              
              <DialogTitle id="simple-dialog-title" />
              <div id="simple-dialog-title">
                <PersonalInfoPopUp
                  handleEmailAddressChange={this.handleEmailAddressChange}
                  handleMobileNumberChange={this.handleMobileNumberChange}
                  handleDisplayChange={this.handleDisplayChange}
                  handleMiddleNameChange={this.handleMiddleNameChange}
                  handleSurNameChange={this.handleSurNameChange}
                  handleFirstNameChange={this.handleFirstNameChange}
                  onHandleClose={this.onHandleClose}
                  // handleChange={this.handleChange}
                  // image={this.state.image}
                  // FingerId={this.state.FingerId}
                  ActionRequired={this.state.myProfileValues.ActionRequired}
                  CurrentPassword={this.state.myProfileValues.CurrentPassword}
                  Department={this.state.myProfileValues.Department}
                  DepartmentName={this.state.myProfileValues.DepartmentName}
                  DisplayName={this.state.myProfileValues.DisplayName}
                  Email={this.state.myProfileValues.Email}
                  EncryptedPassword={
                    this.state.myProfileValues.EncryptedPassword
                  }
                  Finger={this.state.myProfileValues.Finger}
                  FirstName={this.state.myProfileValues.FirstName}
                  Guid={this.state.myProfileValues.Guid}
                  MiddleName={this.state.myProfileValues.MiddleName}
                  NewPassword={this.state.myProfileValues.NewPassword}
                  PhoneNumber={this.state.myProfileValues.PhoneNumber}
                  Photo={this.state.Photo}
                  ReEnterNewPassword={
                    this.state.myProfileValues.ReEnterNewPassword
                  }
                  ReturnCode={this.state.myProfileValues.ReturnCode}
                  RoleId={this.state.myProfileValues.RoleId}
                  RoleName={this.state.myProfileValues.RoleName}
                  SurName={this.state.myProfileValues.SurName}
                  UserId={this.state.myProfileValues.UserId}
                  UserName={this.state.myProfileValues.UserName}
                  myProfileValues={this.state.myProfileValues}
                  handleSaveChangesClick={this.handleSaveChangesClick}
                  handleCancelClickInfo={this.handleCancelClickInfo}
                  formHandleChange={this.formHandleChange}
                />
              </div>
            </Dialog>
          }
          {
            <Dialog
              open={this.state.PopUpOpen2}
              // onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              <DialogTitle id="simple-dialog-title" />
              <div id="simple-dialog-title">
                Password changed sucessfully
                <div className="popup-bottom-btn">
                  {/* tslint:disable-next-line:jsx-no-lambda */}
                  <Button
                    className="main-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.handleChangePasswordPopUpClose()}
                  >
                    OK
                  </Button>
                </div>
              </div>
            </Dialog>
          }
          {
            <Dialog
              open={this.state.dialogs}
              // onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              <DialogTitle id="simple-dialog-title" />
              <div id="simple-dialog-title">
                Profile Details Updated Successfully
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handleChangePasswordPopUpClose()}
                >
                  OK
                </Button>
              </div>
            </Dialog>
          }
        </div>
      </div>
    );
  };

  public DocumentMappingStateForm = () => {
   
    return (
      <div>
        <DocumentMappingForm
        buttonUpload={this.state.buttonUpload}
          document={this.state.document}
          document2={this.state.document2}
          handleDocumentType2Change={this.handleDocumentType2Change}
          handleAllLeftSelectClick={this.handleAllLeftSelectClick}
          handleAllSelectClick={this.handleAllSelectClick}
          handleLeftSelectClick={this.handleLeftSelectClick}
          handleSpecificSelectClick={this.handleSpecificSelectClick}
          handleSelectProcessChange={this.handleSelectProcessChange}
          handleDocumentTypeChange={this.handleDocumentTypeChange}
          documentList={this.state.documentList}
          documentList2={this.state.documentList2}
          AllocationId={this.state.AllocationId}
          AllocationName={this.state.AllocationName}
          selectDocumentMappingValues={this.state.selectDocumentMappingValues}
          handleSubmit={this.onHandleDocumentMappingSubmit}
          selectProcessValues={this.state.selectProcessValues}
          ProcessId={this.state.ProcessId}
          ApplicationTypeName={this.state.ApplicationTypeName}
          PhotoId={this.state.PhotoId}
          FileType={this.state.FileType}
          FileTypeId={this.state.FileTypeId}
          PhotoIdTypeName={this.state.PhotoIdTypeName}
          handleCancelClick={this.handleCancelClick}
        />

        {
          <Dialog 
            open={this.state.successPopUp}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle  id="simple-dialog-title">
              You have successfully mapped documents for application types
            </DialogTitle>
            <div className="popup-bottom-btn popup-bottom-second-btn">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.onHandleSuccessPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.PopUpOpen}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Please Select Allocation Type & Process Type And Document Type
            </DialogTitle>
            <div className="popup-bottom-btn popup-bottom-second-btn">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.onHandlePopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
      </div>
    );
  };

  public GetPathFromInternalPath=(path:string)=>{
    {
      switch (path.toLowerCase()) {
        case "/page/landallocation/draftapplication/proposalform/:id".toLowerCase():
          return "/page/landallocation/draftapplication".toLowerCase()
        case "/page/landAllocation/AllocationForm/proposalForm/:id".toLowerCase():
          return "/page/landallocation/AllocationForm".toLowerCase()
        case "/page/landAllocation/AllocationForm/proposalForm".toLowerCase():
          return "/page/landallocation/AllocationForm".toLowerCase()
        case "/page/landAllocation/approvedApplications/milestone/:id".toLowerCase():
          return "/page/landAllocation/approvedApplications".toLowerCase()
     
        default:
          return path.toLowerCase()
      }
      }
    }


  public PrivateRoute = ({ state1, component: Component, ...rest }: any) => {
    const userId = item ? JSON.parse(item).model.UserId : 0
    const cookie = item ? JSON.parse(item).model.CookieValue.Value : ''
  

    const redirectPath = state1.userItems.filter((x:IPath) => x.UrlPath !== null)
      .find((it: IPath) => it.UrlPath.toLowerCase() ===
        (rest.path) ? this.GetPathFromInternalPath(rest.path) : rest.path)
        
    
    if (userId > 0 && cookie !== '' && state1.userItems.length === 0) {
      return (<Component {...this.props} />)
      
    }
  
    
    return (
      
     
      // tslint:disable-next-line:jsx-no-lambda
      <Route {...rest} render={(props) => (
      
        (userId > 0 && redirectPath && cookie !== '') ?
          <Component {...props} /> :
          <Redirect to={{
            pathname: '/login/unauthorized',
            state: { from: this.props.location }
          }} />
          
      )} />
       
    )
  }

  /////////////////////////////
  // Application Form 


  public handleApplicationLandAllocationChange = (event: any) => {
    this.setState({
      ...this.state,

      AllocationTo: event.target.value
    });
  };
  // Specific Expansion on Panel Change
  public onHandlePanelChange = (panel: any) => {
    this.setState({
      ...this.state,
      // expanded: this.state.expanded !== panel ? panel : false
      [panel]: !this.state[panel]
    });
  };
  public handleMapOpenClick = () => {
    // getMapDetailValues(value).then(res => {
    this.setState({
      ...this.state,
      mapOpen: true
      // mapValues: res
    });
    // });

    MapUrL()
      .then(res => {
        this.setState({
          ...this.state,
          // mapOpen: true,
          htmlContent: res
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public handleAppFormUploadImageClick = (event: any,photo: string,ruleId: number) => {
  
    UploadImageOfApplicationForm(this.state.file,photo,ruleId)
    .then(res => {
      this.setState({...this.state, 
        applicationProjectRules: this.state.applicationProjectRules
        .map((x:IapplicationProjectRulesValues)=> 
         (x.RuleId === ruleId)? 
         ({...x, DocumentPath: "http://" + res.PhotoIDPath,
         disabledeleteButton: true,
         uploadPopUp: false,          
         uploadSuccessPopUp: true,
        }) : x), 
                 uploadSuccessPopUp: true,
        })
    })
    };

  public handleRuleChange = (evt: any, id: number) => {
    const file = evt.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        ...this.state,
        applicationProjectRules: this.state.applicationProjectRules
        .map((x:IapplicationProjectRulesValues)=> (x.RuleId === id)?  
        ({...x, DocumentPath: reader.result, IsDocumentVerified: false}): x),
       // ruleImage: reader.result,
      
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,
        applicationProjectRules: this.state.applicationProjectRules
        .map((x:IapplicationProjectRulesValues)=> (x.RuleId === id)?  
        ({...x, DocumentPath: reader.result, uploadPopUp: true,  IsDocumentVerified: false}): x),
        file,
       // ruleImage: reader.result
      });
    } else {
      this.setState({
        ...this.state,
        applicationProjectRules: this.state.applicationProjectRules
        .map((x:IapplicationProjectRulesValues)=> (x.RuleId === id)?  
        ({...x, DocumentPath: "", uploadPopUp: true,  IsDocumentVerified: false}): x),
     //  ruleImage: ""
      });
    }
  };

  // public handleMapClose = (id: string) => {
  //   const obj: any = localStorage.getItem(id);
  //   const obj1: any = JSON.parse(obj);
  //   localStorage.clear();
  //   getMapUpdatedValues(id).then(res => {
  //     this.setState({ ...this.state, obj: obj1 });
  //   });
  //   this.setState({
  //     ...this.state,
  //     mapOpen: false,
  //     searchArray: this.state.searchArray.map((x: ISearchValues) => {
  //       return {
  //         ...x,
  //         AvailableLandArea: obj1.LandArea,
  //         Block: obj1.Block,
  //         Boundaries: obj1.Boundaries,
  //         Colony: obj1.Colony,
  //         CompleteDetails: obj1.CompleteDetails,
  //         District: obj1.DistrictName,
  //         GeometricString: obj1.GeometricString,
  //         GeometryDataFromMap: obj1.GeometryDataFromMap,
  //         GlobalId: obj1.GlobalId,
  //         Mandal: obj1.Mandal,
  //         ParcelId: obj1.ParcelNumber,
  //         Plot: obj1.Plot,
  //         Sector: obj1.Sector,
  //         SurveyNumberByPlanning: obj1.SurveyNumberByPlanning,
  //         TempGlobalId: obj1.TempGlobalId,
  //         TownShip: obj1.Township,
  //         Village: obj1.Village
  //       };

  //       // Object.assign(
  //       //   {},
  //       //   x,
  //       //   (x.AvailableLandArea = obj.LandArea),
  //       //   (x.Boundaries = obj.Boundaries),
  //       //   (x.District = obj.DistrictName),
  //       //   (x.Mandal = obj.Mandal),
  //       //   (x.ParcelId = obj.ParcelNumber),
  //       //   (x.SurveyNumberByPlanning = obj.SurveyNumberByPlanning),
  //       //   (x.Village = obj.Village),
  //       //   (x.CompleteDetails = obj.CompleteDetails),
  //       //   (x.GlobalId = obj.GlobalId),
  //       //   (x.TempGlobalId = obj.TempGlobalId),
  //       //   (x.GeometricString = obj.GeometricString),
  //       //   (x.GeometryDataFromMap = obj.GeometryDataFromMap)
  //       // );
  //     })
  //   });
  // };

  // handle for ApprovePopUp
  public onHandleApprovePopUpOpen = (
    values: ITreeFormValues & IApplicationFormProps & IprojectRuleProps
  ) => {

    const selectDepartmentId = values.searchArray.map(
      (x: ISearchValues) => x.AllocationTo
    )[0] === "Private"? 34: 35

    if (values.Comments !== "") {
      this.setState({ ...this.state, 
        StatusId: 7,
        selectDepartmentId,
        // tslint:disable-next-line:object-literal-sort-keys
        applicationSelectDepartmentName: 
        this.state.selectDepartmentList.filter((x:ISelectDepartmentvalues) => 
        x.UserId === selectDepartmentId)
        .map((x:ISelectDepartmentvalues) => `${x.DepartmentName}-${x.UserName}`)
        [0],
        forwardOpen: true 
      });
      

      // postApproveValues(
      //   selectDepartmentId,
      //   this.state.searchArray,
      //   this.state.searchDataId,
      //   this.state.Comments
      // )
      //   .then(res => {
      //     this.setState({
      //       ...this.state,
      //     //  ApproveOpen: false,
      //       approveArray: res
      //     });
      //   })
      //   .then(() => {
      //     this.props.history.push("/page/dashboard");
      //   })
      //   .catch(err =>
      //     // tslint:disable-next-line:no-console
      //     console.log(err)
      //   );
    }
  };
  public handlePropertyChangeClick = async(values:  IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps) => {
    if(this.state.selectedValue !== ''){
      try {
      const res = await  getFloorDetails(this.state.AssessmentID) 
      const res1 = await getBuildingClassificationDropDown(res.rslt.PropertyType,0)

       const res3 = await  GetDepartmentandusers2forward("2")
      const data = res.rslt.NewFloorDetails.length !== 0? await Promise.all<{data:  {NatureUsage: INature }, id: number}>
      (res.rslt.NewFloorDetails.length !== 0 ? res.rslt.NewFloorDetails.map( async (x:any, i:number) => {
        // return {
        //   selectNatUsageValues:  
        //   getBuildingClassificationDropDown(0,x.ClassificationOfBuilding).then(res4=> 
        //     // tslint:disable-next-line:no-console
        //     console.log(res4.NatureUsage),
        //     )
        // }
        const d = (await getBuildingClassificationDropDown(0,x.ClassificationOfBuilding))
        // tslint:disable-next-line:no-console
        return {id: x.ClassificationOfBuilding, data: d}
      }
      ): Promise.resolve([])) : []  
      
      const totalTaxAmount = res.rslt.NewFloorDetails && res.rslt.NewFloorDetails.length !== 0 ?
      res.rslt.NewFloorDetails.map((y:any) => y.TaxAmount === null || y.TaxAmount === undefined ?
       0 : y.TaxAmount)
      .reduce((x:number,y:number)=> x + y) : 0

       this.setState({
        ...this.state,
        PropertyTypeId :res.rslt.PropertyType,
        TotalTaxAmount : totalTaxAmount,
        selectDepartmentForwardList: res3.deptusersViewModelLst,
        // tslint:disable-next-line:object-literal-sort-keys
        CategoryOwnershipId : res.rslt.CategoryOfOwnerShipID, 
        FloorArray: res.rslt.NewFloorDetails.length !== 0 ?  
        res.rslt.NewFloorDetails.map((x:any, i:number) => 
        {
        //   getBuildingClassificationDropDown(0,x.ClassificationOfBuilding)
        //  .then(res5 => this.setState({ FloorArray:  res.rslt.NewFloorDetails.map((y:any) => ({...y, selectNatUsageValues: res5.NatureUsage}))
        // }))
        //  .catch(err =>
        //   // tslint:disable-next-line:no-console
        //    console.log(err))

          return ({...x,
            AddClickCount: i,
            BuildingClassification:x.ClassificationOfBuilding,
            FirmName : x.Firmname,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.Occupantname,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:moment(x.ConstructionDate)
              .format('YYYY-MM-DD'),
              EffectiveFromDate	: moment(x.EffectiveFromDate).format('YYYY-MM-DD'),
              UnstructeredLand:x.UnStructuredland,
              Length: x.Length,
              Breadth: x.Breadth,
              PlinthArea: x.PlinthArea,
              taxAmount:x.TaxAmount,
              BuildingPermissionNo: x.BuildingpermissionNo,
              BuildingPermissionDate:x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues: res1.NatureUsage,
            selectNatUsageValues: data.length === 0? [] :  
            data.filter( (y: any) => y.id === x.ClassificationOfBuilding).length > 0 ? 
            data.filter( (y: any) => y.id === x.ClassificationOfBuilding)[0].data.NatureUsage : [],
              FloorNumber: x.FloorNo,
              id: i
              })
        })
          : [{
       id: 0,
   // tslint:disable-next-line:object-literal-sort-keys
   AddClickCount: 0,
   FirmName : "",
   OccupantName: "",
  selectClassificationValues: res1.NatureUsage,
   selectNatUsageValues: [],
  selectFloorValues: this.state.selectFloorValues,
  selectOccupancyValues:this.state.selectOccupancyValues,
  ConstructionDate: "",     
   EffectiveFromDate	: "",
   UnstructeredLand:0,
   Length: "",
        Breadth: "",
        taxAmount:0,
   PlinthArea: "",
   BuildingPermissionNo: "",
   BuildingPermissionDate: "",
   PlinthAreaInBuildingPlan: "",
    FloorNumber: 0,
    BuildingClassification: 0,
    NatureOfUsage: 0,
    Occupancy:0
      }],
      PropTable:true,
        // TotalTaxAmount: res.rslt.TotalTaxAmount,
        getFloorDetailValues:res.rslt.NewFloorDetails,
      })

    }
    catch(err){
      // tslint:disable-next-line:no-console
      console.log(err);
    }

  
  }
  else
  {
    this.setState({...this.state, selectValuePopUp: true})
  }
}

  // handle for Review details popUp
  public onHandleReviewPopUpOpen = () => {
    this.setState({ ...this.state, reviewOpen: true });
  };
  public handleApplicationIdSearch =async (event: string) => {
    try{
  
   const res = await getApplicationSearchDetails(this.state.searchDataId)
   const res1 = await mileStoneValues(parseInt(res.applicationDetailsViewModelLst[0].Township,10))
    const res3 = await getDocumentTypeList2(this.state.AllocatedTo, 1)
      
    const list = this.state.documentList
    .filter(
      (z: IDocumentPropValues) =>
      res3.documents.find((s: IDocument2PropValues) => s.Id === z.PhotoId));
  
      const list2 = res.applicationDetailsViewModelLst && res.applicationDetailsViewModelLst
      .map((y:ISearchValues) => y.DocumentsVerifiedList)[0] === null ? [] :
       res.applicationDetailsViewModelLst && res.applicationDetailsViewModelLst
      .map((y:ISearchValues) => y.DocumentsVerifiedList)[0]
  
      const l = list2.length === 0? list : 
      list
      .map((x:IDocumentPropValues) =>  list2 && list2.map((y:any) => y.DocumentId)
      .includes(x.PhotoId)? ({...x, FileType: "http://" + list2
        .filter((y:any) => x.PhotoId === y.DocumentId)
        .map((y:any) => y.DocumentPath )[0]}) : x);

 

   
          this.setState({
            ...this.state,
            mileStoneValues: res1.objProjectRulesList.filter(
              (y: IMileStoneDropDownValues) =>
                y.RuleName !== null && y.RuleName !== undefined
            ),
            // tslint:disable-next-line:object-literal-sort-keys
            AllocatedTo:
              res.applicationDetailsViewModelLst.length !== 0
                ? res.applicationDetailsViewModelLst.AllocatedTo === "Private"
                  ? 2
                  : 1
                : 0,
            searchArray: res.applicationDetailsViewModelLst && res.applicationDetailsViewModelLst
            .map((y:ISearchValues) => 
              ({
              ...y,
              LandAreaAllotedByEstates: 0,
              RelationTypeInName: this.state.RelationTypeArray
              .filter((x:IRelationTypeValues) => x.RelationTypeId === y.RelationType )
              .map((x:IRelationTypeValues) => x.RelationType)[0],
            })),
            
            ProjectDetailsArray:  res.applicationDetailsViewModelLst.length !== 0?
            res.applicationDetailsViewModelLst.map((x:ISearchValues) => 
            x.GOMDetails)[0]
            .map((x:any, id: number) => ({ 
              ...x,  
              AddGoValueClickCount: id,
              GoDate: moment(x.GOMDate).format('YYYY-MM-DD'),
              GoNumber: x.GOMNumber,
              id,
            }) ) : [{ 
             
              AddGoValueClickCount: 0,
              GoDate: '',
              GoNumber: '',
              id: 0,
            }],
  
            searchDataId:
              res.applicationDetailsViewModelLst.length !== 0
                ? res.applicationDetailsViewModelLst[0].ApplicationId
                : this.state.searchDataId,
            documentList2: l
          })
        }
        catch(err) {
// tslint:disable-next-line:no-console
console.log(err)
        }

    postDepartmentUserDropDownList(event).then(res => {
      this.setState({
        ...this.state,
        selectDepartmentList: res.deptusersViewModelLst
      });
    });
    GetMilestoneActivities(this.state.searchDataId).then(
      res => {
        this.setState({...this.state, 
          MileStoneArray: 
          res.milestoneActivitiesDetailsViewModelLst.map((x:any,index:number) => ({...x, 
            AddMilestoneClickCount: index,
        LandRelease: x.ReleaseLandArea,
        RuleName: '',
        // tslint:disable-next-line:object-literal-sort-keys
        RuleId: x.MilestoneYear,
        DateOfCompletion: moment(x.EffectiveDate).format('YYYY-MM-DD'),
        mileStoneValues: this.state.mileStoneValues,
        id: index,
        ProjectRuleTypes: x.MilestoneRules.split('~'),
        ProjectTypeId: 0,
        ruleTypeValues: this.state.RuleTypeValues,
        sourceTypeValues: this.state.sourceTypeValues,
        RuleSourceTypeId: 0,
        ConditionTypeId: 0,
        ConditionTypeValues: this.state.ConditionTypeValues,
        projectValues: []
      })
      )
        })
       })
  

    getProccesComments(event).then(res => {
      this.setState({
        ...this.state,
        ProcessComments: res.objDetails
      });
    });

    getNoteFileValues(event)
      .then(res => {
        this.setState({
          ...this.state,
          noteFiles: res.objDetails
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));

    getApprovalFlowValues(event)
      .then(res => {
        this.setState({
          ...this.state,
          approvalFiles: res.WorkFlowlist
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  
      GetProjectRulesForApplication(event)
      .then(res => {
        this.setState({
          ...this.state,
          applicationProjectRules:  res.projectRulesViewModelLst && res.projectRulesViewModelLst
          .map((x:IapplicationProjectRulesValues) => ({
            ...x,
            AchievedValue: x.AchievedValue,
            ConditionTypeId: x.ConditionTypeId,
            ConditionValue: x.ConditionValue,
            CreatedBy: x.CreatedBy,
            DocumentPath: x.DocumentPath,
            IsDocumentVerified: x.IsDocumentVerified,
            IsVerified: x.IsVerified,
            MaximumValue: x.MaximumValue,
            MinimumValue: x.MinimumValue,
            ProjRuleTypeId: x.ProjRuleTypeId,
            ReturnCode: x.ReturnCode,
            RuleId: x.RuleId,
            RuleName: x.RuleName,
            SourceTypeId: x.SourceTypeId,
            ThemeCityId: x.TownshipId,
            TownshipId: x.TownshipId,
            Value: x.Value,
            disabledeleteButton: false,
            uploadPopUp: false,

          }))
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));

    // UpdateParecelNumber(event, this.state.searchArray, this.state.searchDataId)
    //   .then(res => {
    //     this.setState({
    //       ...this.state
    //     });
    //   })
    //   // tslint:disable-next-line:no-console
    //   .catch(err => console.log(err));
  };
  public handleselectDepartmentChange = (event: any) => {
    this.setState({
      ...this.state,
      applicationSelectDepartmentName: event.currentTarget.textContent,
      selectDepartmentId: event.target.value
    });
  };

  public onHandleReviewSuccessPopUp = () => {
    this.setState({
      ...this.state,
      reviewOpen: false,
      reviewSuccessOpen: true
    });
  };

  // ApprovePopUp Close
  public onHandleReviewPopUpClose = () => {
    this.setState({ ...this.state, reviewOpen: false });
  };

  // onclick Expand All Panels
  public onExpandAll = () =>
    this.setState({
      ...this.state,
      panel1: true,
      panel2: true,
      panel3: true,
      panel4: true,
      panel5: true,
      panel6: true
    });

  // onClick Collapse All
  public onCollapseAll = () =>
    this.setState({
      panel1: false,
      panel2: false,
      panel3: false,
      panel4: false,
      panel5: false,
      panel6: false
    });

  // getting Approve Api
  public onHandleApproveClick = (e: any) => {
  
    if(RoleId === 5 && e.Comments !== "" && e.selectDepartmentId !== 0) {
      postApproveValues(
        e.selectDepartmentId,
        this.state.searchArray,
        this.state.searchDataId,
        this.state.Comments
      )
        .then(res => {
          this.setState({
            ...this.state,
          //  ApproveOpen: false,
            approveArray: res
          });
        })
        .then(() => {
          this.props.history.push("/page/dashboard");
        })
        .catch(err =>
          // tslint:disable-next-line:no-console
          console.log(err)
        );
    }
    else if(RoleId === 20 && e.Comments !== "" && e.selectDepartmentId !== 0 && 
    e.applicationProjectRules
    .filter((x:IapplicationProjectRulesValues) => x.DocumentPath === '').length === 0 && e.applicationProjectRules
    .filter((x:IapplicationProjectRulesValues) => x.IsDocumentVerified === false).length === 0
    &&  e.searchArray.map(
      (x: ISearchValues) => x.LandAreaAllotedByEstates
    )[0] !== 0) {
      UpdateParecelNumber(
        e, this.state.searchArray,
         this.state.searchDataId,this.state.Comments,
         )
      .then(res => {
        this.setState({
          ...this.state
        });
      })  .then(() => {
        this.props.history.push("/page/dashboard");
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
    }
    else if(RoleId === 21 && e.Comments !== "" && e.selectDepartmentId !== 0) {
      UpdateSurveyNumber(e, this.state.searchArray, this.state.searchDataId,this.state.Comments)
      .then(res => {
        this.setState({
          ...this.state
        });
      })  .then(() => {
        this.props.history.push("/page/dashboard");
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
    }
    else if(e.Comments !== "" && e.selectDepartmentId !== 0 && this.state.StatusId === 7 ){
      postApprovalValues(
        e.selectDepartmentId,
        this.state.searchArray,
        this.state.searchDataId,
        this.state.Comments,
        this.state.StatusId
      )
        .then(res => {
          this.setState({
            ...this.state,
          //  ApproveOpen: false,
            approveArray: res
          });
        })
        .then(() => {
          this.props.history.push("/page/dashboard");
        })
        .catch(err =>
          // tslint:disable-next-line:no-console
          console.log(err)
        );
    }
    else if(e.Comments !== "" && e.selectDepartmentId !== 0 )
    {
      postApproveValues(
        e.selectDepartmentId,
        this.state.searchArray,
        this.state.searchDataId,
        this.state.Comments
      )
        .then(res => {
          this.setState({
            ...this.state,
          //  ApproveOpen: false,
            approveArray: res
          });
        })
        .then(() => {
          this.props.history.push("/page/dashboard");
        })
        .catch(err =>
          // tslint:disable-next-line:no-console
          console.log(err)
        );
    }
  };
  public handleApplicaitonImageChange = (evt: any) => {
    const file = evt.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        ...this.state,

        applicationimages: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,

        applicationimages: reader.result
      });
    } else {
      this.setState({
        ...this.state,

        applicationimages: ""
      });
    }
  };
  // getting Review Api
  public onHandleReviewClick = (event: any) => {
    const history = this.props.history;
    updateReviewDetails(event)
      .then(res => {
        this.setState({
          ...this.state,
          reviewArray: res.aaData,
          reviewSuccessOpen: false
        });
      })
      .then(() => {
        history.push("/page/dashboard");
      });
  };

  // Change in Tab
  public onApplicationTabChange = (event: any, value: number) => {
    this.setState({ ...this.state, ApplicationtabsValue: value });
  };

  // imageChange
  public handleApplicationClick = (event: any, name: any) => {
    this.setState({ ...this.state, [name]: event.target.src });
  };

  // search input change
  public handleApplicationIdChange = (event: any) => {
    this.setState({ ...this.state, searchDataId: event.target.value });
  };

  public handleCommentsChange = (event: any) => {
    this.setState({ ...this.state, Comments: event.target.value });
  };
  // search based on Application id in tab form

  public onHandleApprovePopUpClose = () => {
    this.setState({ ...this.state, ApproveOpen: false, forwardOpen: false, uploadSuccessPopUp: false });
  };

  public handleRuleSatisfiedChange = (event: any, id: number) => {
    this.setState({ 
      ...this.state, 
     // isRuleSatisfied: event.target.checked, 
      // tslint:disable-next-line:object-literal-sort-keys
      applicationProjectRules: this.state.applicationProjectRules
      .map((x: IapplicationProjectRulesValues) => (x.RuleId === id)? 
       ({...x, IsVerified: event.target.checked}): x) 
      });
  };

  public onHandleForwardPopUpOpen = (
    event: ITreeFormValues & IApplicationFormProps & IprojectRuleProps
  ) => {
   
    if (event.selectDepartmentId !== 0 && event.Comments !== "" && 
    this.state.applicationProjectRules
    .filter((x:IapplicationProjectRulesValues) => x.DocumentPath === '').length === 0 && 
    this.state.applicationProjectRules
    .filter((x:IapplicationProjectRulesValues) => x.IsDocumentVerified === false).length === 0  
    &&  
    event.searchArray.map(
      (x: ISearchValues) => x.LandAreaAllotedByEstates
    )[0] !== 0 &&
    (UserId === 32? event.searchArray.map(x => x.SurveyNumber)[0] !== '' 
    && event.searchArray.map(x => x.Bhudhaar)[0] !== '' : true)) {
      this.setState({ ...this.state, forwardOpen: true });
    } else {
      this.setState({ ...this.state, reviewOpen: true });
    }
  };

  public handlePropertyChangeSubmitPopUp = (
    event: IPropertyChange
  ) => {
    if (event.selectDepartmentId !== 0) {
      this.setState({ ...this.state, forwardOpen: true });
    } else {
      this.setState({ ...this.state, reviewOpen: true });
    }
  };

  public handleDocumentVerifiedChange = (event: any, id: number) => {
   
    this.setState({
      ...this.state,
      applicationProjectRules: this.state.applicationProjectRules
      .map((x: IapplicationProjectRulesValues) => (x.RuleId === id && x.DocumentPath !== "")? 
       ({...x, IsDocumentVerified: event.target.checked}): x) 
      })
  };

  public handleParcelNumberChange = (event: any) => {
    this.setState({
      ...this.state,
      parcelvalues: this.state.parcelvalues.map((x: ISearchValues) => ({
        ...x,
        ParcelId: event.target.value
      })),
      searchArray: this.state.searchArray.map((x:ISearchValues) => 
      ({...x, ParcelId: event.target.value})),
     
    });
  };
 
  public handleSurveyNumberChange= (event:any) => {
this.setState({...this.state, searchArray: this.state.searchArray.map((x:ISearchValues) => 
  ({...x, SurveyNumber: event.target.value }))})
  }
  
  public handleInitialLandChange= (event:any) => {
    this.setState({...this.state, searchArray: this.state.searchArray.map((x:ISearchValues) => 
      ({...x, InitialAllocationInAcres: event.target.value }))})
      }
  public handleBhudhaarNumberChange = (event:any) => {
    this.setState({...this.state, searchArray: this.state.searchArray.map((x:ISearchValues) => 
      ({...x, Bhudhaar: event.target.value }))})

  }
  public handleSurveyChange= (event:any) => {
    this.setState({...this.state, searchArray: this.state.searchArray.map((x:ISearchValues) => 
      ({...x, InitialAllocatedSurveyNumber: event.target.value }))})
      }
  
  public handleParcelChange= (event:any) => {
    this.setState({...this.state, searchArray: this.state.searchArray.map((x:ISearchValues) => 
      ({...x, InitialAllocatedParcelNumber: event.target.value }))})
  }
  public CategoryTypeMasterState = () => {
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
                  Category Ownership Master
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpenCategory()}
                  >
                    + Add
                  </Button>
                  {/* <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleRefresh()}
                  >
                    Refresh
                  </Button> */}
                </div>
              </div>
            </CardContent>
            {
              <Dialog
                open={this.state.addPopUpOpenCategory}
                onClose={this.onHandleAddPopUpCloseCategory}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                  Create Category Ownership
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddCategoryTypeForm
                    CategoryOwnershipId={this.state.CategoryOwnershipId}
                    newCategoryName={this.state.newCategoryName}
                    categoryTypeMasterList={this.state.CategoryTypeMasterList}
                    onHandleAddPopUpOpenCategory={this.onHandleAddPopUpOpenCategory}
                    onHandleAddSaveCategory={this.onHandleAddSaveCategory}
                    onHandleAddChangeCategory={this.onHandleAddChangeCategory}
                    onHandleAddPopUpCloseCategory={this.onHandleAddPopUpCloseCategory}
                    onHandleAddPopUp={this.onHandleAddPopUpOpenCategory}
                  />
                </div>
              </Dialog>
            }

             {
              <Dialog
                open={this.state.editSuccessPopUpCategory}
                onClose={this.onHandleEditSuccessPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div>
                  <DialogTitle id="simple-dialog-title">
                    You have successfully updated Category Ownership
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleEditSuccessPopUpClose()}
                  >
                    OK
                  </Button>
                </div>
              </Dialog>
            } 
            {/* {
              <Dialog
                open={this.state.addPopUpOpen}
                onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <DialogTitle id="simple-dialog-title">
                  Please Fill the Field
                </DialogTitle>
                <div id="simple-dialog-title">
                  tslint:disable-next-line:jsx-no-lambda
                  <Button onClick={() => this.handleDocuementPopUpClose()}>
                    OK
                  </Button>
                </div>
              </Dialog>
            } */}
            <CategoryTypeMasterForm
              onHandleActivatePopUpCloseCategory={this.onHandleActivatePopUpCloseCategory}
              activatePopUpOpenCategory={this.state.activatePopUpOpenCategory}
              onHandleActivateClickCategory={this.onHandleActivateClickCategory}
              searchCategoryInput={this.state.searchCategoryInput}
              onHandleSearchCategory={this.onHandleSearchCategory}
              CategoryOwnershipId={this.state.CategoryOwnershipId}
              CategoryOwnershipName={this.state.CategoryOwnershipName}
              onHandleEditSaveCategory={this.onHandleEditSaveCategory}
              deActivatePopUpOpenCategory={
                this.state.deActivatePopUpOpenCategory
              }
              onHandleDeActivatePopUpCloseCategory={this.onHandleDeActivatePopUpCloseCategory}
              onHandleDeActivatePopUpOpencategory={this.onHandleDeActivatePopUpOpencategory}
              editPopUpOpenCategory={this.state.editPopUpOpenCategory}
              onHandleEditActionClickCategory={this.onHandleEditActionClickCategory}
              onHandleEditPopUpClose={this.onHandleClose1Category}
              countCategory={this.state.countCategory}
              pageCategory={this.state.pageCategory}
              rowsPerPageCategory={this.state.rowsPerPageCategory}
              openCategory={this.state.openCategory}
              open2Category={this.state.open2Category}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPageCategory}
              onHandlePageChange={this.handleChangePageCategory}
              onHandleActionClickCategory={this.onHandleActionClickCategory}
              categoryTypeMasterList={this.state.CategoryTypeMasterList}
              categoryValues={this.state.categoryValues}
              onHandleActivatePopUpOpenCategory={this.onHandleActivatePopUpOpenCategory}
              onHandleDeActivateSaveCategory={this.onHandleDeActivateSaveCategory}
              
            />
          </Card>
        </div>
        {
          <Dialog
            open={this.state.dialogCategory}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have successfully added Category Ownership
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handlePopUpCloseCategory()}
                >
                  OK
                </Button>
              </div>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialog1Category}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              CategoryOwnership name already existed, please add new categoryOwnership name.
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handlePopUpClose1Category()}
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

  public AminitiesState = () => {
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
                  Amenities Master
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpenAminity()}
                  >
                    + Add
                  </Button>
                  {/* <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleRefresh()}
                  >
                    Refresh
                  </Button> */}
                </div>
              </div>
            </CardContent>
            {
              <Dialog
                open={this.state.addPopUpOpenAminity}
                onClose={this.onHandleDeActivatePopUpCloseAminity}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                    Create New Amenity
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddAminityTypeForm
                    AmenitiesId={this.state.AmenitiesId}
                    newAminityName={this.state.newAminityName}
                    documentTypeMasterList={this.state.AminityTypeMasterList}
                    onHandleAddPopUpAminity={this.onHandleAddPopUpOpenAminity}
                    onHandleAddSaveAminity={this.onHandleAddSaveAminity}
                    onHandleAddChangeAminity={this.onHandleAddChangeAminity}
                    onHandleAddPopUpCloseAminity={
                      this.onHandleDeActivatePopUpCloseAminity
                    }
                  />
                </div>
              </Dialog>
            }

            {
              <Dialog
                open={this.state.editSuccessPopUpAminity}
               // onClose={this.onHandleEditSuccessPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div>
                  <DialogTitle id="simple-dialog-title">
                    You have successfully updated Amenities
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  {/*  tslint:disable-next-line:jsx-no-lambda */}
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleDeActivatePopUpCloseAminity()}
                  >
                    OK
                  </Button>
                </div>
              </Dialog>
            }
            {/* {
              <Dialog
                open={this.state.addPopUpOpen}
                onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <DialogTitle id="simple-dialog-title">
                  Please Fill the Field
                </DialogTitle>
                <div id="simple-dialog-title">
                  tslint:disable-next-line:jsx-no-lambda
                  <Button onClick={() => this.handleDocuementPopUpClose()}>
                    OK
                  </Button>
                </div>
              </Dialog>
            } */}
            <AminityTypeMasterForm
              onHandleActivatePopUpAminity={
                this.onHandleActivatePopUpOpenAminity
              }
              onHandleActivePopUpCloseAminity={
                this.onHandleDeActivatePopUpCloseAminity
              }
              activatePopUpOpenAminity={this.state.activatePopUpOpenAminity}
              onHandleActivateClickAminity={this.onHandleActivateClickAminity}
              searchInputAminity={this.state.searchInputAminity}
              onHandleSearchAminity={this.onHandleSearchAminity}
              addPopUpOpenAminity={this.state.addPopUpOpenAminity}
              onHandleAddPopUpAminity={this.onHandleAddPopUpOpenAminity}
              onHandleAddPopUpCloseAminity={this.onHandleDeActivatePopUpCloseAminity}
              onHandleAddSaveAminity={this.onHandleAddSaveAminity}
              AmenitiesId={this.state.AmenitiesId}
              AmenitiesName={this.state.AmenitiesName}
              onHandleEditNameChangeAminity={this.onHandleEditNameChangeAminity}
              onHandleEditSaveAminity={this.onHandleEditSaveAminity}
              deActivatePopUpOpenAminity={this.state.deActivatePopUpOpenAminity}
              onHandleDeActivatePopUpCloseAminity={
                this.onHandleDeActivatePopUpCloseAminity
              }
              onHandleDeActivatePopUpOpenAminity={
                this.onHandleDeActivatePopUpOpenAminity
              }
              onHandleDeActivateSaveAminity={this.onHandleDeActivateSaveAminity}
              editPopUpOpenAminity={this.state.editPopUpOpenAminity}
              onHandleEditActionClickAminity={
                this.onHandleEditActionClickAminity
              }
              onHandleEditPopUpCloseAminity={this.onHandleDeActivatePopUpCloseAminity}
              // emptyRows={emptyRows}
              countAminity={this.state.countAminity}
              pageAminity={this.state.pageAminity}
              rowsPerPageAminity={this.state.rowsPerPageAminity}
              openAminity={this.state.openAminity}
              open2Aminity={this.state.open2Aminity}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPageAminity}
              onHandlePageChange={this.handleChangePageAminity}
              onHandleActionClickAminity={this.onHandleActionClickAminity}
              onHandleCloseAminity={this.onHandleDeActivatePopUpCloseAminity}
              onHandleClose2Aminity={this.onHandleDeActivatePopUpCloseAminity}
              documentTypeMasterList={this.state.AminityTypeMasterList}
              aminityValues={this.state.aminityValues}
            />
          </Card>
        </div>
        {
          <Dialog
            open={this.state.dialogAminity}
             onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have successfully added Amenities
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.onHandleDeActivatePopUpCloseAminity()}
                >
                  OK
                </Button>
              </div>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialog1Aminity}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Amenity name already existed, please add new Amenity name.
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.onHandleDeActivatePopUpCloseAminity()}
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
  public PropertyForm = () => {
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
                  {/* <img src="/images/graph-icon.png" /> */}
                  Property Type Master
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpenPro()}
                  >
                    + Add
                  </Button>
                </div>
              </div>
            </CardContent>
            {
              <Dialog
                open={this.state.addPopUpOpenPro}
                onClose={this.onHandleAddPopUpClosePro}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                  Create Property Type
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddPropertyMasterForm
                    allocationNameValues={this.state.allocationNameValues}
                    CategoryOwnershipId={this.state.CategoryOwnershipId}
                    PropertyTypeName={this.state.PropertyTypeName}
                    newAllocationName={this.state.newAllocationName}
                    allocationTypeList={this.state.allocationTypeList}
                    onHandleAddPopUpPro={this.onHandleAddPopUpOpenPro}
                    onHandleAddSavePro={this.onHandleAddSavePro}
                    onHandleAddChangePro={this.onHandleAddChangePro}
                    onHandleAddPopUpClosePro={this.onHandleAddPopUpClosePro}
                  />
                </div>
              </Dialog>
            }
            <PropertiesTypeMasterForm
            handleCategoryOwnershipIdChange={this.handleCategoryOwnershipIdChange}
              onHandleActivePopUpClosepro={this.onHandleActivatePopUpClosePro}
              count={this.state.countPro}
              onHandleActivatePopUpClosePro={this.onHandleActivatePopUpClosePro}
              // HandleEditAllocationChange={this.HandleEditAllocationChange}
              onHandleNameChangePro={this.onHandleNameChangePro}
              onHandleDropDownChangePro={this.onHandleDropDownChangePro}
              open2Pro={this.state.open2Pro}
              allocationNameValues={this.state.allocationNameValues}
              allocationTypeList={this.state.allocationTypeList}
              searchInputPro={this.state.searchInputPro}
              countPro={this.state.countPro}
              openPro={this.state.openPro}
              editPopUpOpenPro={this.state.editPopUpOpenPro}
              addPopUpOpenPro={this.state.addPopUpOpenPro}
              activatePopUpOpenPro={this.state.activatePopUpOpenPro}
              deActivatePopUpOpenPro={this.state.deActivatePopUpOpenPro}
              onHandleActivatePopUpOpenPro={this.onHandleActivatePopUpOpenPro}
              onHandleActivePopUpClosePro={this.onHandleActivatePopUpClosePro}
              onHandleActivateClickPro={this.onHandleActivateClickPro}
              onHandleSearchPro={this.onHandleSearchPro}
              onHandleAddPopUpPro={this.onHandleAddPopUpOpenPro}
              onHandleAddPopUpClosePro={this.onHandleAddPopUpClosePro}
              onHandleAddSavePro={this.onHandleAddSavePro}
              CategoryOwnershipId={this.state.CategoryOwnershipId}
              allocationName={this.state.allocationName}
              PropertyTypeName={this.state.PropertyTypeName}
              onHandleEditSavePro={this.onHandleEditSavePro}
              PropertyTypeId={this.state.PropertyTypeId}
              onHandleDeActivatePopUpClosePro={
                this.onHandleDeActivatePopUpClosePro
              }
              CategoryOwnershipName={this.state.CategoryOwnershipName}
              onHandleDeActivatePopUpOpenPro={
                this.onHandleDeActivatePopUpOpenPro
              }
              onHandleDeActivateSavePro={this.onHandleDeActivateSavePro}
              onHandleEditActionClickPro={this.onHandleEditActionClickPro}
              onHandleEditPopUpClosePro={this.onHandleEditPopUpClosePro}
              page={this.state.pagePropertyType}
              rowsPerPage={this.state.rowsPerPage}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              onHandlePageChange={this.onHandlePagePropertyTypeChange}
              onHandleActionClickPro={this.onHandleActionClickPro}
              onHandleClosePro={this.onHandleClosePro}
              onHandleClose2Pro={this.onHandleClose2Pro}
              propTypeValues={this.state.propTypeValues}
              CategoryOwnershipDesc={this.state.CategoryOwnershipDesc}
            />
          </Card>
        </div>
        {
          <Dialog
            open={this.state.editSuccessPopUpPro}
          //  onClose={this.onHandleEditSuccessPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div className="popup-title">
              <DialogTitle id="simple-dialog-title">
              You have successfully updated Property Type
               </DialogTitle>
            </div>
            <div id="simple-dialog-title">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handlePopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialogPro}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have successfully added Property Type
               <div className="popup-bottom-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
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
            open={this.state.dialog1Pro}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Property Type Already existed, Please add new Property Type.
                       <div className="title-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="save-btn"
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

public handleInitialAllocatedLandChange = (event:any) => {
  this.setState({...this.state,searchArray : this.state.searchArray.map((x:ISearchValues) => 
    ({...x, InitialAllocationLandSize: event.target.value }) ) 
  })
}

public handleinitialChange = (event:any) => {
  this.setState({...this.state,searchArray : this.state.searchArray.map((x:ISearchValues) => 
    ({...x, InitialAllocationLandSize: event.target.value }) ) 
  })
}

public handleMilestoneBasedParcelNumberChange = () => {
  this.setState({...this.state, })
}

public handleMilestoneSurveyNumberChange = (event:any,index: number) => {
 this.setState({...this.state, MilestoneArray : this.state.MilestoneArray
  .map((x:IMileStoneValues) => (x.id === index) ? ({...x,
    AddMilestoneClickCount: x.AddMilestoneClickCount,
    LandRelease: x.LandRelease,
    RuleName: x.RuleName,
    // tslint:disable-next-line:object-literal-sort-keys
    RuleId: x.RuleId,
    DateOfCompletion: x.DateOfCompletion,
    mileStoneValues: x.mileStoneValues,
    id: x.id,
    ProjectRuleTypes: x.ProjectRuleTypes,
    ProjectTypeId: x.ProjectTypeId,
    ruleTypeValues: x.ruleTypeValues,
    sourceTypeValues: x.sourceTypeValues,
    RuleSourceTypeId: x.RuleSourceTypeId,
    ConditionTypeId: x.ConditionTypeId,
    ConditionTypeValues: x.ConditionTypeValues,
    projectValues: x.projectValues,
     MilestoneId:x.MilestoneId,
     MilestoneYear:x.MilestoneYear,
    ApplicationId: x.ApplicationId,
    MilestoneRuleId: x.MilestoneRuleId,
    ReleaseLandArea: x.LandRelease,
    AvailbleLandAreaUnits: x.AvailbleLandAreaUnits,
    UnitFormat: x.UnitFormat,
    EffectiveDate: x.EffectiveDate,
    ProjectRuleIds: x.ProjectRuleIds,
    MilestoneRules: x.MilestoneRules,
    LandAreaAllotedByEstates: x.LandAreaAllotedByEstates,
   ParcelId:x.ParcelId,
   SurveyNumber: event.target.value,
    InitialAllocationLandSize: x.InitialAllocationLandSize
  }): x)});
  
    
    
}

public handleRemoveImageClick = (ruleId : number, getId: any) => {
  getId.value = null;
  this.setState({...this.state, 
    applicationProjectRules: this.state.applicationProjectRules
    .map((x:IapplicationProjectRulesValues)=> 
     (x.RuleId === ruleId)? 
     ({...x, DocumentPath: "", disabledeleteButton: false,
     uploadPopUp: false}) : x)
   })
}
  public RenderApplicationState = () =>  {
  
    return (
      <div>
        <TabsForm
        handleRemoveImageClick={this.handleRemoveImageClick}
        uploadSuccessPopUp={this.state.uploadSuccessPopUp}
        handleMilestoneSurveyNumberChange={this.handleMilestoneSurveyNumberChange}
        handleMilestoneBasedParcelNumberChange={this.handleMilestoneBasedParcelNumberChange}
        values={this.state.searchArray}
        handleInitialAllocatedLandChange={this.handleInitialAllocatedLandChange}
        handleinitialChange={this.handleinitialChange}
        ApplicationId={this.state.searchDataId}
        ProjectDetailsArray={this.state.ProjectDetailsArray}
        forwardOpen={this.state.forwardOpen}
        mileStoneValues={this.state.mileStoneValues}
        handleBhudhaarNumberChange={this.handleBhudhaarNumberChange}
          handleSurveyNumberChange={this.handleSurveyNumberChange}
          handleInitialLandChange={this.handleInitialLandChange}
          handleParcelChange={this.handleParcelChange}
          handleSurveyChange={this.handleSurveyChange}
        AddMilestoneClickCount={this.state.AddMilestoneClickCount}
        MileStoneArray={this.state.MileStoneArray}
          handleParcelNumberChange={this.handleParcelNumberChange}
          handleDocumentVerifiedChange={this.handleDocumentVerifiedChange}
          onHandleForwardPopUpOpen={this.onHandleForwardPopUpOpen}
          handleLandAllocationChange={
            this.handleApplicationLandAllocationChange
          }
          handleAppFormUploadImageClick={this.handleAppFormUploadImageClick}
          documentList2={this.state.documentList2}
          ruleImage={this.state.ruleImage}
          handleRuleImageChange={this.handleRuleChange}
          targetValue={this.state.targetValue}
          handleImageChange={this.handleApplicaitonImageChange}
          isRuleSatisfied={this.state.isRuleSatisfied}
          handleRuleSatisfiedChange={this.handleRuleSatisfiedChange}
          applicationSelectDepartmentName={
            this.state.applicationSelectDepartmentName
          }
          onHandleApprovePopUpClose={this.onHandleApprovePopUpClose}
          handleProcessCommentsChange={this.handleCommentsChange}
          ProcessComments={this.state.ProcessComments}
          handleselectDepartmentChange={this.handleselectDepartmentChange}
          selectDepartmentId={this.state.selectDepartmentId}
          selectDepartmentList={this.state.selectDepartmentList}
          Comments={this.state.Comments}
          reviewSuccessOpen={this.state.reviewSuccessOpen}
          reviewOpen={this.state.reviewOpen}
          ApproveOpen={this.state.ApproveOpen}
          onHandleApprovePopUpOpen={this.onHandleApprovePopUpOpen}
          onHandleReviewPopUpOpen={this.onHandleReviewPopUpOpen}
          onHandleReviewSuccessPopUp={this.onHandleReviewSuccessPopUp}
          onHandleReviewPopUpClose={this.onHandleReviewPopUpClose}
          mapOpen={this.state.mapOpen}
          expanded={this.state.expanded}
          panel1={this.state.panel1}
          panel2={this.state.panel2}
          panel3={this.state.panel3}
          panel4={this.state.panel4}
          panel5={this.state.panel5}
          panel6={this.state.panel6}
          onHandleApproveClick={this.onHandleApproveClick}
          onHandleReviewClick={this.onHandleReviewClick}
          onHandlePanelChange={this.onHandlePanelChange}
          onExpandAll={this.onExpandAll}
          onCollapseAll={this.onCollapseAll}
          searchArray={this.state.searchArray}
          searchDataId={this.state.searchDataId}
          ApplicationtabsValue={this.state.ApplicationtabsValue}
          onTabChange={this.onApplicationTabChange}
          onHandleChange={this.handleApplicationIdChange}
          onHandleSearch={this.handleApplicationIdSearch}
          handleClick={this.handleApplicationClick}
          applicationimage={this.state.applicationimage}
          applicationimage2={this.state.applicationimage2}
          handleMapClose={this.handleMapClose}
          handleMapOpenClick={this.handleMapOpenClick}
          noteFiles={this.state.noteFiles}
          approvalFiles={this.state.approvalFiles}
          applicationProjectRules={this.state.applicationProjectRules}
         // match={this.props.match}
          applicationimages={this.state.applicationimages}
          parcelValues={this.state.parcelvalues}
        />

       
          {
        <Dialog
          className="map-view"
          open={this.state.mapOpen}
          // onClose={values.handleMapPopUpClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div>
            <DialogActions>
              <iframe
                src={`http://192.168.100.18:3000/UAIMSMap/index.html?applicationId=${
                  this.state.searchDataId
                }`}
                height="900"
                width="2000"
               
              />
              <div>
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() =>
                    this.handleMapClose(this.state.searchDataId)
                  }
                >
                  Capture Map Values
                </Button>
                <br />
                <Button
                  className="main-btn skip-map-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handleMapPopUpClose()}
                >
                  Skip Map
                </Button>
              </div>
            </DialogActions>
          </div>
        </Dialog>
      }
      </div>
    );
  }

  /////////////////////// Property Department Master

  public onHandlePropertyDepartmentActivatePopUp = (values : IPropertyDepartmentMasterValues) => {
    this.setState({
      ...this.state,
      activatePropertyDepartmentPopUp: true,
      propertyDepartmentItems: values
        });
  }

  public onHandlePropertyDepartmentDeActivatePopUp = (values : IPropertyDepartmentMasterValues) => {
    this.setState({
      ...this.state,
      deActivatePropertyDepartmentPopUp: true,
      propertyDepartmentItems:values
    });
  }

  public onHandlePropertyDepartmentEditClick=(values : IPropertyDepartmentMasterValues) => {
    this.setState({
      ...this.state,
      CategoryOwnershipId: values.CategoryOwnershipId,
      PropertyDepartmentId: values.PropertyDepartmentId,
      PropertyDepartmentName: values.PropertyDepartmentName,
      editPropertyDepartmentPopUp: true,
      propertyDepartmentItems: values   
     });
  }

  public onHandlePropertyDepartmentAddSave = async (values:IAddPropertyDepartmentValues ) => {
   
    if(this.state.propertyDepartmentMasterList
      .filter((x:IPropertyDepartmentMasterValues) => 
      values.CategoryOwnershipId === x.CategoryOwnershipId)
      .filter((y:IPropertyDepartmentMasterValues) => y.PropertyDepartmentName === values.PropertyDepartmentName)
      .length === 0)
      {
     const res = await postPropertyDepartmentAddSave(values)
      const res2 = await getPropertyDepartmentMasterGrid();
        this.setState({...this.state,
          // propertyDepartmentMasterList:  [...this.state.propertyDepartmentMasterList, res.model],
          propertyDepartmentMasterList:  res2.jsonData.data,
          propertyDepartmentcount: res2.jsonData.data.length,
          // tslint:disable-next-line:object-literal-sort-keys
          addPropertyDepartmentPopUpOpen:false,
          dialog:true,
          res
       
           });
          }
          else {
            this.setState({...this.state, dialog1: true})
          }

  }

  public handleCategoryOwnershipIdChange = (event:any) => {
    this.setState({...this.state, CategoryOwnershipId: event.target.value})
  }

  public handlePropertyDepartmentNameChange = (event:any) => {
    this.setState({...this.state, PropertyDepartmentName: event.target.value})
  }

  public onHandlePropertyDepartmentSearch = (event:any) => {
      const searchInput = event.target.value;
      
      const data = this.state.propertyDepartmentMasterList.filter(
        (x: IPropertyDepartmentMasterValues) =>
          searchInput !== ""
            ?    documentNameIncludes(
              searchInput,
              x.PropertyDepartmentName
            ) ||
            documentNameIncludes(
                      searchInput,
                      x.CategoryOwnershipDesc
                    ) ||
              x.IsActive.toString().includes(
                getActivestate(
                  searchInput.toLowerCase()
                ))             
            : true
      );
      this.setState({
        ...this.state,
        propertyDepartmentcount: data.length,
        searchInput
      });
    };

    public onHandleEditPropertyDepartmentSave = async (values:IEditPropertyDepartmentValues) => {

     const CategoryOwnershipName = this.state.categoryOwnerShipDropDownDataValues
     .filter((x:ICategoryOwnerShipDropDownDataValues) => x.CategoryOwnershipId === values.CategoryOwnershipId)
     .map((x:ICategoryOwnerShipDropDownDataValues) => x.CategoryOwnershipName)[0];

     const res = await  postEditPropertyDepartmentEditSave(values, CategoryOwnershipName);
     const res2 = await getPropertyDepartmentMasterGrid();
        this.setState({...this.state,
          editPropertyDepartmentPopUp: res ? false : true,
          editSuccessPopUp: res2 ? true : false,
           propertyDepartmentMasterList: res2.jsonData.data,
           propertyDepartmentcount:res2.jsonData.data.length,
           res
           });
    }

    public onHandleEditPropertyDepartmetNameChange = (event:any) => {
      this.setState({...this.state, PropertyDepartmentName: event.target.value})
    }
   
    public onHandleDeActivatePropertyDepartment = async(id: number) => {
   
      const res = await  postDeActivePropertyDepartment(id)
      const res2 = await getPropertyDepartmentMasterGrid();
      this.setState({...this.state,
        deActivatePropertyDepartmentPopUp:false,
         propertyDepartmentMasterList: res2.jsonData.data,
         propertyDepartmentcount:res2.jsonData.data.length,
         res 
         });
    }

    public onHandleActivatePropertyDepartmentClick= async (id:number) => {
      const res = await postActivePropertyDepartment(id)
      const res2 = await getPropertyDepartmentMasterGrid();
      this.setState({...this.state,
        activatePropertyDepartmentPopUp:false,

        propertyDepartmentMasterList: res2.jsonData.data,
         propertyDepartmentcount:res2.jsonData.data.length,
         res,
         });
    }

  public PropertyDepartmentMasterRender = () => {
  
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
                 Property Department Master
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpen()}
                  >
                    + Add
                  </Button>
                  {/* <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleRefresh()}
                  >
                    Refresh
                  </Button> */}
                </div>
              </div>
            </CardContent>
           {
              <Dialog
                open={this.state.addPropertyDepartmentPopUpOpen}
                onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                  Create Property Department               
                     </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                <AddPropertyDepartmentForm 
                onHandlePropertyDepartmentNameChange={this.onHandleEditPropertyDepartmetNameChange}
                propertyDepartmentMasterList={this.state.propertyDepartmentMasterList}
                handlePropertyDepartmentNameChange={this.handlePropertyDepartmentNameChange}
                handleCategoryOwnershipIdChange={this.handleCategoryOwnershipIdChange}
                categoryOwnerShipDropDownDataValues={this.state.categoryOwnerShipDropDownDataValues}
                propertyDepartmentItems={this.state.propertyDepartmentItems}
                CategoryOwnershipId={this.state.CategoryOwnershipId} 
                PropertyDepartmentName={this.state.PropertyDepartmentName} 
                onHandleAddPopUp={this.onHandleAddPopUpOpen} 
                onHandleAddPopUpClose={this.onHandleAddPopUpClose} 
                onHandleAddSave={this.onHandlePropertyDepartmentAddSave} /></div>
              </Dialog>
            }

             
           
          <PropertyDepartmentMasterForm
          onHandleActivateClick={this.onHandleActivatePropertyDepartmentClick}
          onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
          onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
          onHandleDeActivateSave={this.onHandleDeActivatePropertyDepartment}
           
          onHandleEditPropertyDepartmetNameChange={this.onHandleEditPropertyDepartmetNameChange}
          PropertyDepartmentId={this.state.PropertyDepartmentId}
          handlePropertyDepartmentNameChange={this.handlePropertyDepartmentNameChange}
          handleCategoryOwnershipIdChange={this.handleCategoryOwnershipIdChange}          
          PropertyDepartmentName={this.state.PropertyDepartmentName}
            CategoryOwnershipId={this.state.CategoryOwnershipId}
            categoryOwnerShipDropDownDataValues={
              this.state.categoryOwnerShipDropDownDataValues}
            // tslint:disable-next-line:object-literal-sort-keys
                     onHandleEditPopUpClose= {this.onHandleEditPopUpClose}
            onHandleEditSave={this.onHandleEditPropertyDepartmentSave}
          searchInput={this.state.searchInput}
          onHandleSearch={this.onHandlePropertyDepartmentSearch}
          page={this.state.pagePropertyDepartment}
          onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
          onHandlePageChange={this.onHandlePagePropertyDepartmentChange}
          rowsPerPage={this.state.rowsPerPage}
          propertyDepartmentcount={this.state.propertyDepartmentcount}
          activatePropertyDepartmentPopUp={this.state.activatePropertyDepartmentPopUp}
          deActivatePropertyDepartmentPopUp={this.state.deActivatePropertyDepartmentPopUp}
          editPropertyDepartmentPopUp={this.state.editPropertyDepartmentPopUp}
          addPropertyDepartmentPopUpOpen={this.state.addPropertyDepartmentPopUpOpen}
          propertyDepartmentMasterList={this.state.propertyDepartmentMasterList} 
          propertyDepartmentItems={this.state.propertyDepartmentItems}
          onHandlePropertyDepartmentActivatePopUp={this.onHandlePropertyDepartmentActivatePopUp}
          onHandlePropertyDepartmentDeActivatePopUp={this.onHandlePropertyDepartmentDeActivatePopUp}
          onHandlePropertyDepartmentEditClick={this.onHandlePropertyDepartmentEditClick}
          />

          </Card>
        </div>
        {
          <Dialog
            open={this.state.editSuccessPopUp}
          //  onClose={this.onHandleEditSuccessPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div >
              <DialogTitle id="simple-dialog-title">
              You have successfully updated Property Department
               </DialogTitle>
            </div>
            <div id="simple-dialog-title">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handlePopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
       
        {
          <Dialog
            open={this.state.dialog}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have added Property Department successfully 
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
            Property Department Name already existed, please add new Property name.
              {/* tslint:disable-next-line:jsx-no-lambda */}
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
    )
  }

  ///////// Building Classification


  public onHandleBuildingClassificationAddSave = async (values:IAddBuildingClassificationValues ) => {
   
    if(this.state.buildingClassificationList
      .filter((x:IBuildingClassificationMasterValues) => 
      x.BuildingClassificationName === values.BuildingClassificationName).length === 0)
      {
     const res = await postBuildClassificationAddSave(values)
      const res2 = await GetBuildingClassificationDetails();
      this.setState({...this.state,
        BuildingClassificationName: '',
        PropertyTypeId: 0,
          buildingClassificationCount : res2.jsonData.data.length,
          buildingClassificationList:  res2.jsonData.data,
          // tslint:disable-next-line:object-literal-sort-keys
          addBuildingClassificationPopUpOpen :false,
          dialog: res2 ? true : false,
          res
      
           });
          }
          else {
            this.setState({...this.state, dialog1: true})
          }

  }
 

  public onHandleBuildingClassificationSearch = (event:any) => {
      const searchInput = event.target.value;
      
      const data = this.state.buildingClassificationList.filter(
        (x: IBuildingClassificationMasterValues) =>
          searchInput !== ""
            ? documentNameIncludes(searchInput,x.BuildingClassificationName) ||
             documentNameIncludes(searchInput,x.PropertyTypeDesc)
              
              ||
              x.IsActive.toString().includes(
                this.getActivestate(
                  searchInput.toLowerCase()
                ))                          
            : true
      );
      this.setState({
        ...this.state,
        buildingClassificationCount : data.length,
        searchInput
      });
    };

    public onHandleEditBuildingClassificationSave = async (values:IEditBuildingClassificationMasterValues) => {

     const PropertyTypeName = this.state.propertyTypeDropDownValues
     .filter((x:IPropertyTypeDropDownValues) => x.PropertyTypeId === values.PropertyTypeId)
     .map((x:IPropertyTypeDropDownValues) => x.PropertyTypeName)[0];

     const res = await  postEditBuildingClassificationEditSave(values, PropertyTypeName);
     const res2 = await GetBuildingClassificationDetails();
     this.setState({...this.state,
          buildingClassificationCount :res2.jsonData.data.length,
          buildingClassificationList : res2.jsonData.data,
          editBuildingClassificationPopUp: res ? false : true,
          editSuccessPopUp: res2 ? true : false,
           res
           });
    }

  public onHandleDeActivateBuildingClassification = async (id: number) => {
   
    const res = await  postDeActiveBuildingClassinfication(id)
    const res2 = await GetBuildingClassificationDetails();
    this.setState({...this.state,
      buildingClassificationCount :res2.jsonData.data.length,
      buildingClassificationList : res2.jsonData.data,
      deActivateBuildingClassificationPopUp:false,
       res 
       });
  }

  public onHandleActivateBuildingClassificationClick= async (id:number) => {
    const res = await postActiveBuildingClassification(id)
    const res2 = await GetBuildingClassificationDetails();
    this.setState({...this.state,
      activateBuildingClassificationPopUp:false,
      buildingClassificationCount :res2.jsonData.data.length,
      buildingClassificationList : res2.jsonData.data,
       res,
       });
  }

  public onHandleBuildingClassificationEditClick = (values: IBuildingClassificationMasterValues) => {
    this.setState({
      ...this.state,
      BuildingClassificationId: values.BuildingClassificationId,
      BuildingClassificationName: values.BuildingClassificationName,
      PropertyTypeId: values.PropertyTypeId,
      buildingClassificationItems: values  , 
     // PropertyDepartmentName: values.PropertyDepartmentName,
      editBuildingClassificationPopUp : true,
     });
  }

  public onHandleBuildingClassificationActivatePopUp = (values : IBuildingClassificationMasterValues) => {
    this.setState({
      ...this.state,
      activateBuildingClassificationPopUp: true,
      buildingClassificationItems : values
        });
  }

  public onHandleBuildingClassificationDeActivatePopUp = (values : IBuildingClassificationMasterValues) => {
    this.setState({
      ...this.state,
      buildingClassificationItems : values,
      deActivateBuildingClassificationPopUp: true,
    });
  }

  public onHandleBuildingClassificationNameChange = (event:any) => {
    this.setState({...this.state, BuildingClassificationName: event.target.value})
  }

  public handlePropertyTypeIdChange = (event:any) => {
    this.setState({...this.state, 
      PropertyTypeId: event.target.value, 
      copiedValue : 0, 
      incresePercentageButton: false,
      percentageValue: 0, 
      })
  }

  public BuildingClassificationMasterRender = () => {
  
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
               Building Classification 
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpen()}
                  >
                    + Add
                  </Button>
                  {/* <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleRefresh()}
                  >
                    Refresh
                  </Button> */}
                </div>
              </div>
            </CardContent>
           {
              <Dialog
                open={this.state.addBuildingClassificationPopUpOpen}
              //  onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                  Create Building Classificaiton Details            
                     </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                <AddBuildingClassificationForm 
                onHandleBuildingClassificationNameChange={this.onHandleBuildingClassificationNameChange}
                handlePropertyTypeIdChange={this.handlePropertyTypeIdChange}
              buildingClassificationList={this.state.buildingClassificationList}
                propertyTypeDropDownValues={this.state.propertyTypeDropDownValues}
                buildingClassificationItems={this.state.buildingClassificationItems}  
                BuildingClassificationName={this.state.BuildingClassificationName}
                PropertyTypeId={this.state.PropertyTypeId}
                onHandleAddPopUp={this.onHandleAddPopUpOpen} 
                onHandleAddPopUpClose={this.onHandleAddPopUpClose} 
                onHandleAddSave={this.onHandleBuildingClassificationAddSave} /></div>
              </Dialog>
            }

             {
              <Dialog
                open={this.state.editSuccessPopUp}
               // onClose={this.onHandleEditSuccessPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div>
                  <DialogTitle id="simple-dialog-title">
                    You have successfully updated Building Classification
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  {/*  tslint:disable-next-line:jsx-no-lambda */}
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleEditSuccessPopUpClose()}
                  >
                    OK
                  </Button>
                </div>
              </Dialog>
            }
           
          <BuildingClassificationTableForm
           onHandleBuildingClassificationNameChange={this.onHandleBuildingClassificationNameChange}
           handlePropertyTypeIdChange={this.handlePropertyTypeIdChange}
          PropertyTypeId={this.state.PropertyTypeId}
          BuildingClassificationName={this.state.BuildingClassificationName}
          BuildingClassificationId={this.state.BuildingClassificationId}
          addBuildingClassificationPopUpOpen={this.state.addBuildingClassificationPopUpOpen}
          editBuildingClassificationPopUp={this.state.editBuildingClassificationPopUp}
          deActivateBuildingClassificationPopUp={this.state.deActivateBuildingClassificationPopUp}
          activateBuildingClassificationPopUp={this.state.activateBuildingClassificationPopUp}
          buildingClassificationCount={this.state.buildingClassificationCount}
          buildingClassificationItems={this.state.buildingClassificationItems}
          onHandleBuildingClassificationEditClick={this.onHandleBuildingClassificationEditClick}
          onHandleBuildingClassificationDeActivatePopUp={this.onHandleBuildingClassificationDeActivatePopUp}
          onHandleBuildingClassificationActivatePopUp={this.onHandleBuildingClassificationActivatePopUp}
          buildingClassificationList={this.state.buildingClassificationList}
          onHandleActivateClick={this.onHandleActivateBuildingClassificationClick}
          onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
          onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
          onHandleDeActivateSave={this.onHandleDeActivateBuildingClassification}
           
          onHandleEditPropertyDepartmetNameChange={this.onHandleEditPropertyDepartmetNameChange}
            propertyTypeDropDownValues={
              this.state.propertyTypeDropDownValues}
            // tslint:disable-next-line:object-literal-sort-keys
                     onHandleEditPopUpClose= {this.onHandleEditPopUpClose}
            onHandleEditSave={this.onHandleEditBuildingClassificationSave}
          searchInput={this.state.searchInput}
          onHandleSearch={this.onHandleBuildingClassificationSearch}
          page={this.state.pageBuilding}
          onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
          onHandlePageChange={this.onHandlePageBuildingChange}
          rowsPerPage={this.state.rowsPerPage}
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
            You have successfully added Building Classification
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
            Building Classification Name already existed, please add new name.
              {/* tslint:disable-next-line:jsx-no-lambda */}
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
    )
  }

  /////////// Nature Usage 


  public onHandleNatureUsageActivatePopUp = (values : INatureUsageMasterValues) => {
    this.setState({
      ...this.state,
      NatureUsageId: values.NatureUsageId,
      activateNatureUsagePopUp: true,
      natureUsageItems: values
        });
  }

  public onHandleNatureUsageDeActivatePopUp = (values : INatureUsageMasterValues) => {
    this.setState({
      ...this.state,
      NatureUsageId: values.NatureUsageId,
      deActivateNatureUsagePopUp: true,
      natureUsageItems:values
    });
  }

  public onHandleNatureUsageEditClick=(values : INatureUsageMasterValues) => {
    const propertyTypeId = this.state.buildingClassificationList.filter((x:IBuildingClassificationMasterValues) => x.BuildingClassificationId === values.BuildingClassificationId)
    .map((x:IBuildingClassificationMasterValues) => x.PropertyTypeId)[0]

    try {
      if (loader) {
        loader.style.display = "block";
      }

    GetBuildingClassificationDetailsWithPropType(propertyTypeId).then(res => {
      this.setState({
        ...this.state,
        BuildingClassificationId: values.BuildingClassificationId,
        BuildingClassificationName: values.BuildingClassificationDesc,
        NatureUsageId: values.NatureUsageId,
        NatureUsageName: values.NatureUsageName,
        PropertyTypeId: propertyTypeId,
        buildingClassificationDropDownData: res.jsonData.data,
        editNatureUsagePopUp: true,
        natureUsageItems: values   
       })
    }).catch(err => 
      // tslint:disable-next-line:no-console
      console.log(err))

      if (loader != null) {
        loader.style.display = "none";
      }
    }
    catch(err) {
   // tslint:disable-next-line:no-console
   console.log(err)
   if (loader != null) {
    loader.style.display = "none";
  }
    }

    
  }

  public onHandleNatureUsageAddSave = async (values:IAddNatureUsageValues ) => {
   
    if(this.state.NatureUsageList
      .filter((x:INatureUsageMasterValues) => 
      x.NatureUsageName === values.NatureUsageName).length === 0)
      {
     const res = await AddNewNatureUsage(values)
     const res2 = await GetNatureUsageDetails();
        this.setState({...this.state,
          BuildingClassificationId: 0,
          NatureUsageList:  res2.jsonData.data,
          NatureUsageName: '',
          PropertyTypeId: 0,
          natureUsageCount:res2.jsonData.data.length,
          // tslint:disable-next-line:object-literal-sort-keys
          addNatureUsagePopUpOpen:false,
          dialog: res2? true : false,
       res
           });
          }
          else {
            this.setState({...this.state, dialog1: true})
          }

  }

  public handleBuildingClassificationIdChange = (event:any) => {
    this.setState({...this.state, BuildingClassificationId: event.target.value})
  }

  public handleNatureUsageNameChange = (event:any) => {
    this.setState({...this.state, NatureUsageName: event.target.value})
  }

  public onHandleNatureUsageSearch = (event:any) => {
      const searchInput = event.target.value;
      
      const data = this.state.NatureUsageList.filter(
        (x: INatureUsageMasterValues) =>
          searchInput !== ""
            ?    documentNameIncludes(searchInput, x.NatureUsageName)||
            documentNameIncludes(searchInput, x.BuildingClassificationDesc)
  
            ||
              x.IsActive.toString().includes(
                this.getActivestate(
                  searchInput.toLowerCase()
                ))              
            : true
      );
      this.setState({
        ...this.state,
        natureUsageCount: data.length,
        searchInput
      });
    };

    public onHandleEditNatureUsageSave = async (values:IEditNatureUsageValues) => {

    //  const CategoryOwnershipName = this.state.categoryOwnerShipDropDownDataValues
    //  .filter((x:ICategoryOwnerShipDropDownDataValues) => x.CategoryOwnershipId === values.CategoryOwnershipId)
    //  .map((x:ICategoryOwnerShipDropDownDataValues) => x.CategoryOwnershipName)[0];

     const res = await  EditNatureUsage(values);
     const res2 = await GetNatureUsageDetails();
        this.setState({...this.state,
          NatureUsageList: res2.jsonData.data,
          NatureUsageName: "",
          PropertyTypeId: 0,
          editNatureUsagePopUp:false,
          editSuccessPopUp: res2 ? true : false,
           natureUsageCount:res2.jsonData.data.length,
           res
           });
    }

  
    public onHandleDeActivateNatureUsage = async(id: number) => {
   
      const res = await  DeleteNatureUsage(id)
      const res2 = await GetNatureUsageDetails();
      this.setState({...this.state,
        NatureUsageList: res2.jsonData.data,
        deActivateNatureUsagePopUp:false,
        natureUsageCount:res2.jsonData.data.length,
         res 
         });
    }

    public onHandleActivateNatureUsageClick= async (id:number) => {
      const res = await ActivateNatureUsage(id)
      const res2 = await GetNatureUsageDetails();
      this.setState({...this.state,
        activateNatureUsagePopUp:false,

         NatureUsageList: res2.jsonData.data,
         natureUsageCount:res2.jsonData.data.length,
         res,
         });
    }

    public handleNaturePropertyTypeIdChange = (event:any) => {
      GetBuildingClassificationDetailsWithPropType(event.target.value).then(res => {
        this.setState({ ...this.state, 
        PropertyTypeId: event.target.value,
      buildingClassificationDropDownData: res.jsonData.data
    })
      })
    }
  
  public onRegistration1Submit = (values: ICategoryTextFieldValues) => {

    this.setState({
      ...this.state,
      ApartmentNameId: values.ApartmentNameId,
      CategoryOwnershipId: values.CategoryOwnershipId,
      OwnershipArray: values.OwnershipArray,
      PropertyDepartmentId: values.PropertyDepartmentId,
      PropertyTypeId: values.PropertyTypeId,


      activeStep: this.state.activeStep + 1
    })
  }
  public handleDistrictIdChange = (event: any) => {
    getMunciDropDown(event.target.value).then(res => {
      this.setState({
        ...this.state,
        Description: event.target.value,
        MandalId:0,
        MunciId: 0,
        TownId:0,
        selectMunciValues:res.rslt
        .filter((x:IDistrictValues) => x.Description !== "" && x.Description !== null)
        .map((x:IDistrictValues,index:number)=> ({...x,MunciId: index + 1})) ,
      });
    })
    // tslint:disable-next-line:no-console
  .catch(err => console.log(err));
    
  }
  public handleMuncipalityPropertyChange = (event: any) => {
    getMandalPropertyDropDown(event.target.value).then(res => {
      this.setState({
        ...this.state,
        MunciId: event.target.value,
        selectMandalValues:res.rslt
        .filter((x:IDistrictValues) => x.Description !== "" && x.Description !== null)
        .map((x:IDistrictValues,index:number)=> ({...x,MandalId: index + 1})) ,
      });
    })
    // tslint:disable-next-line:no-console
  .catch(err => console.log(err));
    
  }
  public handleMandalPropertyChange = (event: any) => {
    getTownDropDown(event.target.value).then(res => {
      this.setState({
        ...this.state,
        MandalId: event.target.value,
        selectTownValues:res.rslt
        .filter((x:IDistrictValues) => x.Description !== "" && x.Description !== null)
        .map((x:IDistrictValues,index:number)=> ({...x,TownId: index + 1})) ,
      });
    })
    // tslint:disable-next-line:no-console
  .catch(err => console.log(err));
    
  }
  
  public onHandleProcessFeeSubmit = (values: IProcessFeeProps) => {
    if(this.state.approve){
      InsertNewAssessment(values,4).then(res => {
        this.setState({...this.state, 
          AssessmentPdfPath: res.model.PdfPath !== null ?res.model.PdfPath : '' ,
          assessmentReviewPopUp:true,
          forwardOpen: false,
   
        })
      }).catch(err => 
        // tslint:disable-next-line:no-console
        console.log(err));
    }
    else {
      InsertNewAssessment(values,1).then(res => {
        this.setState({...this.state, 
          AssessmentPdfPath: res.model.PdfPath !== null ?res.model.PdfPath : '' ,
          assessmentReviewPopUp:true,
          forwardOpen: false,
   
        })
      }).catch(err => 
        // tslint:disable-next-line:no-console
        console.log(err));
    }
    

    
   
  
 
  }

  public onHandleNewPropertyUplaodDocSubmit= (values: INewPropertyUploadDocumentProps) => {
    postPTMSDepartmentUserDropDownList().then(res => {
      // this.setState({ ...this.state, selectDepartmentList: res.departmentMasterViewModel });
      this.setState({ ...this.state, 
        activeStep: this.state.activeStep + 1,
        ptmsSelectDepartmentList: res.deptusersViewModelLst,  
        // tslint:disable-next-line:object-literal-sort-keys
        CertificateNo:values.CertificateNo,
         CertificateDate:values.CertificateDate,
         MROProceedingNumber:values.MROProceedingNumber,
        RegisteredDocumentNumber:values.RegisteredDocumentNumber,
        RegisteredDocumentDate:values.RegisteredDocumentDate,
        DeedNumber: values.DeedNumber,
       DeedDate:values.DeedDate,
       DecreeNumber: values.DecreeNumber,
         DecreeDate:values.DecreeDate,
         CourtName:values.CourtName,
         NewPropertyDocumentTypeId: values.NewPropertyDocumentTypeId,
         PropertyAssessmentDocumentTypeId: values.PropertyAssessmentDocumentTypeId,
        // selectFile: values.selectFile 
        });
    });

    
  }

  public handleSelectFileUpload = (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        ...this.state,

        selectFile: reader.result,

      });
    };
    if (file) {
      reader.readAsDataURL(file);
      this.setState({
        ...this.state,
        file,
        selectFile: reader.result,
      });
    } else {
      this.setState({
        ...this.state,
        selectFile: "",
      });
    }
  };
  public handleSubmitProperty = (event:IPropertyChange) => {
 
   

    const MandalName = this.state.selectMandalValues
    .filter((x:IDistrictValues) => x.MandalId === event.MandalId)
    .map((x:IDistrictValues) => x.Description)[0]

    const  MuncipalCorporation = this.state.selectMunciValues
    .filter((x:IDistrictValues) => x.MunciId === event.MunciId)
    .map((x:IDistrictValues) => x.Description)[0]

    const TownShipName = this.state.selectTownValues
    .filter((x:IDistrictValues) => x.TownId === event.TownId)
    .map((x:IDistrictValues) => x.Description)[0]


    PropertyOnSearch(event,event.Description,MandalName,MuncipalCorporation,TownShipName)
    .then(res => {
      this.setState({
        ...this.state, 
        Description:event.Description,
        MandalId:event.MandalId,
        MunciId: event.MunciId,
        OwnerName: event.OwnerName,
        OwnerPhoneNumber: event.OwnerPhoneNumber,
        TownId:event.TownId,
        propertyDetailsCount: res.rslt.length,
        propertyDetailsTableList: res.rslt,
        propertyDetailsTableOpen: true, 
       })
    // tslint:disable-next-line:no-console
    }).catch(err => console.log(err));
  }


  public handlePropertyAssessmentUpload = (documentType: number) => {
    if(documentType !== 0){
    GetFiles(this.state.file,documentType, this.state.selectFile).then(res => {
      this.setState({...this.state, UploadPopUp: true, selectFile: "http://" + res.PhotoIDPath})
    })
  }
  else {
    this.setState({...this.state, warningUploadPopUp: true})
  }
  }

  public handleSelectedValueChange = (propertyValues: IPropertyDetailsValues) => {
    this.setState({  ...this.state, 
      AssessmentID:propertyValues.AssessmentID,
      propertyValues, 
      selectedValue: propertyValues.RequestId,
    });
  };

  // for Search Input Change
  public onHandleSearchPropertyDetails = (event: any) => {
    const searchInput = event.target.value;
      const data = this.state.propertyDetailsTableList.filter(
        (x: IPropertyDetailsValues) =>
          searchInput !== ""
            ? documentNameIncludes(searchInput, x.OwnerName) ||
            documentNameIncludes(searchInput, x.PropertyType) ||
            documentNameIncludes(searchInput, x.House_Door_no) ||
            documentNameIncludes(searchInput, x.TownShip) ||
            documentNameIncludes(searchInput, x.Email)
            : true
      );
    this.setState({
      ...this.state,
      propertyDetailsCount: data.length,
      searchInput,
    });
  };

  public handleUnstructeredLandChange = (event: any, index: number, values:IFloorValues&IpropertyDetails) => {
    this.setState({
      ...this.state,
      District: values.District,
      // tslint:disable-next-line:object-literal-sort-keys
      Corporation: values.Corporation,
      Mandal:values.Mandal,
      Village: values.Village,
      TownShip: values.TownShip,
      Sector: values.Sector,
      Colony: values.Colony,
      Locality:values.Locality,
      ZoneNo: values.ZoneNo,
      WardNo: values.WardNo,
      Block: values.Block,
      Street: values.Street,
      Enumerationblock:values.Enumerationblock,
      PlotNo: values.PlotNo,
      ElectionWard: values.ElectionWard,
      DoorNo: values.DoorNo,
      Pincode: values.Pincode,
      SurveyNumber:values.SurveyNumber,
      PattaNumber: values.PattaNumber,
      VacantLandArea: values.VacantLandArea,
      CurrentMarketValue: values.CurrentMarketValue,
      RegisteredDocumentValue: values.RegisteredDocumentValue,
      EffectiveDate: values.EffectiveDate,
      LayoutPermitNumber:values.LayoutPermitNumber,
      LayoutPermitDate: values.LayoutPermitDate,
      CertificateNumber: values.CertificateNumber,
      OccupancyCertificateDate: values.OccupancyCertificateDate,
      ExtentOfSite: values.ExtentOfSite,
      selectfloorValues: this.state.selectfloorValues,
      selectroofValues: this.state.selectroofValues,
      selectwallValues: this.state.selectwallValues,
      selectwoodValues:this.state.selectwoodValues,
      aminityValues1: this.state.aminityValues1,
      selectFloorValues:this.state.selectFloorValues,
      selectClassificationValues: this.state.selectClassificationValues,
            // tslint:disable-next-line:object-literal-sort-keys
      East: values.East,
      North: values.North,
      West: values.West,
      TotalTaxAmount: values.TotalTax,

      TotalTax:values.TotalTax,
      South:values.South,
     UnstructeredLand:event.target.value,

      FloorArray: this.state.FloorArray.map((x:IFloorValues) =>
        x.id === index
          ? {
            AddClickCount: x.AddClickCount,
            BuildingClassification: x.BuildingClassification,
            FirmName : x.FirmName,
             NatureOfUsage: x.NatureOfUsage,
             Occupancy:x.Occupancy,
              OccupantName: x.OccupantName,
              // tslint:disable-next-line:object-literal-sort-keys
              ConstructionDate:x.ConstructionDate,
              EffectiveFromDate	: x.EffectiveFromDate,
              UnstructeredLand:event.target.value,
              Length: x.Length,
              Breadth: x.Breadth,
              PlinthArea: x.PlinthArea,
              taxAmount:x.taxAmount,
              BuildingPermissionNo: x.BuildingPermissionNo,
              BuildingPermissionDate: x.BuildingPermissionDate,
              PlinthAreaInBuildingPlan: x.PlinthAreaInBuildingPlan,
            selectFloorValues: this.state.selectFloorValues,
            selectOccupancyValues: this.state.selectOccupancyValues,
            selectClassificationValues:x.selectClassificationValues,
            selectNatUsageValues: x.selectNatUsageValues,

              FloorNumber:x.FloorNumber,
              id: x.id
            }
          : x
      )
    });
  };
  
  public handlePropertyChangeDraftClick = (values:IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps &
    IPagerProps) => {
      if(values.selectDepartmentId !== 0 ) {
     this.setState({...this.state, forwardOpen: true, propertyChangeDraftPopUp: true})
      }
      else {
        this.setState({...this.state, reviewOpen: true})
      }
  }

  public handlePropertyChangeDraftSaveAsDraft = (values:IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps &
    IPagerProps) => {
      if(values.selectDepartmentId !== 0 ) {
      InsertEditPropertyChangeInDraft(values)
      .then(res => 
        this.setState({...this.state, forwardOpen: false, }))
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err))
      }
      else {
        this.setState({...this.state, reviewOpen: true})
      }
  }

  public handlePropertyChangeSubmit = (values:IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps &
    IPagerProps) => {
      
      InsertEditPropertyChangeSubmit(values)
      .then(res => 
        this.setState({...this.state, forwardOpen: false, successPopUp: true}))
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  }

  public onHandlePropertyChangeExpandClick = (RequestId: string) => {
    this.setState({...this.state, RequestId,
      open: !this.state.open,
      // tslint:disable-next-line:object-literal-sort-keys
      dialogExpandOpen: true
    })
  }

 

  public PropertyChange = () => {
    return (
      <div>
        <PropertyChangeForm
        propertyChangeDraftPopUp={this.state.propertyChangeDraftPopUp}
        handlePropertyChangeDraftSaveAsDraft={this.handlePropertyChangeDraftSaveAsDraft}
        handleDistrictChange={this.handleDistrictIdChange}
        RequestId={this.state.RequestId}
        successPopUp={this.state.successPopUp}
        reasonForCreation={this.state.reasonForCreation}
        reviewOpen={this.state.reviewOpen}
        onHandleClose={this.onHandleClose}
        applicationSelectDepartmentName={this.state.applicationSelectDepartmentName}
        forwardOpen={this.state.forwardOpen}
        handlePropertyChangeSubmitPopUp={this.handlePropertyChangeSubmitPopUp}
        PropertyTypeId={this.state.PropertyTypeId}
        OccupancyCertificateDate={this.state.OccupancyCertificateDate}
        dialogExpandOpen={this.state.dialogExpandOpen}
        open={this.state.open}
        onHandlePropertyChangeExpandClick={this.onHandlePropertyChangeExpandClick}
                handlePropertyChangeDraftClick={this.handlePropertyChangeDraftClick}
        handlePropertyChangeSubmit={this.handlePropertyChangeSubmit}
        handleselectDepartmentChange={this.handleselectDepartmentChange}
        selectDepartmentId={this.state.selectDepartmentId}
      selectDepartmentForwardList={this.state.selectDepartmentForwardList}
        onhandleselectValuePopUpClose={this.handlePopUpClose}
      selectValuePopUp={this.state.selectValuePopUp}
        TotalTaxAmount={this.state.TotalTaxAmount}
          ProcessingFee={this.state.ProcessingFee}
        handleUnstructeredLandChange={this.handleUnstructeredLandChange}
          propertyValues={this.state.propertyValues}
          propertyId={this.state.propertyId}
          selectedValue={this.state.selectedValue}
          handleSelectedValueChange={this.handleSelectedValueChange}
          propertyDetailsTableList={this.state.propertyDetailsTableList}
          count={this.state.propertyDetailsCount}
          page={this.state.page}
          rowsPerPage={this.state.rowsPerPage}
          onHandlePageChange={this.onHandlePageChange}
          onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
          onHandleSearch={this.onHandleSearchPropertyDetails}
          searchInput={this.state.searchInput}
          propertyDetailsTableOpen={this.state.propertyDetailsTableOpen}
           getFloorDetailValues={this.state.getFloorDetailValues}
               CategoryOwnershipId={this.state.CategoryOwnershipId}
               CurrentMarketValue={this.state.CurrentMarketValue}
               RegisteredDocumentValue={this.state.RegisteredDocumentValue}
               LayoutPermitNumber={this.state.LayoutPermitNumber}
               LayoutPermitDate={this.state.LayoutPermitDate}
               EffectiveDate={this.state.EffectiveDate}
               VacantLandArea={this.state.VacantLandArea}
               PattaNumber={this.state.PattaNumber}
               SurveyNumber={this.state.SurveyNumber}
               handleNatureChange={this.handleNatureChange}
               selectNatUsageValues={this.state.selectNatUsageValues}
               NatureOfUsage={this.state.NatureOfUsage}
                 Occupancy={this.state.Occupancy}
                 handleOccupancyChange={this.handleOccupancyChange}
                 selectOccupancyValues={this.state.selectOccupancyValues}
               BuildingClassification={this.state.BuildingClassification}
               FloorNumber={this.state.FloorNumber}
               handleBuildingClassificationChange={this.handleBuildingClassificationChange}
               selectClassificationValues={this.state.selectClassificationValues}
               handleFloorNumberIdChange={this.handleFloorNumberIdChange}
               selectFloorValues={this.state.selectFloorValues}
               onHandleAddClickRegProp={this.onHandleAddClickRegProp}
               onDeleteClickRegProp={this.onDeleteClickRegProp}
               FloorArray={this.state.FloorArray}
               AddClickCount={this.state.AddClickCount}
               handlePlinthAreaChange={this.handlePlinthAreaChange}
               handleOccupantNameChange={this.handleOccupantNameChange}
               handleLengthChange={this.handleLengthChange}
               handleEffectiveFromDateChange={this.handleEffectiveFromDateChange}
               handleConstructionDateChange={this.handleConstructionDateChange}
               handleBuildingPlanChange={this.handleBuildingPlanChange}
               handleTaxChange={this.handleTaxChange}
               handleBuildingDateChange={this.handleBuildingDateChange}
                 handleBreadthChange={this.handleBreadthChange}
                 handleBildingPermissionChange={this.handleBildingPermissionChange}
               handleFirmNameChange={this.handleFirmNameChange}
               South={this.state.South}
               West={this.state.West}
               East={this.state.East}
          North={this.state.North}
          TotalTax={this.state.TotalTax}
               aminityValues1={this.state.aminityValues1}
               aminityTypes={this.state.aminityTypes}
               handleMultiSelectAminityChange={this.handleMultiSelectAminityChange}
               ApplicationId={this.state.enterApplicationId}
               mapOpen={this.state.mapOpen}
               handleMapClose={this.handleMapClose}
               handleMapOpenClick={this.handleMapOpenClick}
               handleMapPopUpClose={this.handleMapPopUpClose}
               wallId={this.state.wallId}
               woodId={this.state.woodId}
               selectwoodValues={this.state.selectwoodValues}
               selectwallValues={this.state.selectwallValues}
               roofId={this.state.roofId}
               selectroofValues={this.state.selectroofValues}
               EnumMasterID={this.state.EnumMasterID}
               EnumMasterDesc={this.state.EnumMasterDesc}
               selectfloorValues={this.state.selectfloorValues}
               ExtentOfSite={this.state.ExtentOfSite}
               CertificateNumber={this.state.CertificateNumber}
               // CertificateDate={this.state.CertificateDate}
               handleRegBack={this.handleRegBack}
               District={this.state.District}
               Corporation={this.state.Corporation}
               Mandal={this.state.Mandal}
               TownShip={this.state.TownShip}
               Village={this.state.Village}
               Sector={this.state.Sector}
               Colony={this.state.Colony}
               Locality={this.state.Locality}
               ZoneNo={this.state.ZoneNo}
               WardNo={this.state.WardNo}
               Block={this.state.Block}
               Street={this.state.Street}
               Enumerationblock={this.state.Enumerationblock}
               PlotNo={this.state.PlotNo}
               ElectionWard={this.state.ElectionWard}
               DoorNo={this.state.DoorNo}
               Pincode={this.state.Pincode}
               activeStep={this.state.activeStep}
               onPropertyHandleSubmit={this.onPropertyHandleSubmit}
          handlePropertyChangeClick={this.handlePropertyChangeClick}
         PropertyChangeList={this.state.PropertyChangeList} 
        OwnerName={this.state.OwnerName}
        OwnerPhoneNumber={this.state.OwnerPhoneNumber}
        Description={this.state.Description}
         MunciId={this.state.MunciId}
         MandalId={this.state.MandalId}
         TownId={this.state.TownId}
        selectDistrictValues={this.state.selectDistrictValues}
        handleSubmitProperty={this.handleSubmitProperty}
        selectMunciValues={this.state.selectMunciValues}
        selectMandalValues={this.state.selectMandalValues}
        selectTownValues={this.state.selectTownValues}
        handleMuncipalityPropertyChange={this.handleMuncipalityPropertyChange}
        handleMandalPropertyChange={this.handleMandalPropertyChange}
        PropTable={this.state.PropTable}
      />     
        </div>
    )}

    public onHandleProcessFeeSubmitPopUp = (values: IProcessFeeProps) => {
    
      if (UserId === 21) {
        this.setState({ ...this.state, forwardOpen: true, approve: true });
      } 
      else if(values.UserId !== 0) {
        this.setState({ ...this.state, forwardOpen: true });
      } else {
        this.setState({ ...this.state, reviewOpen: true });
      }
    }
 
    public handleRegistrationPropertyTypeChange = (event:any) => {
    getBuildingClassificationDropDown(event.target.value,0).then(res => {
      this.setState({...this.state, PropertyTypeId: event.target.value,
        selectClassificationValues:res.NatureUsage,
        // tslint:disable-next-line:object-literal-sort-keys
        FloorArray: this.state.FloorArray.map((x: any) => ({
          id: 0,
          // tslint:disable-next-line:object-literal-sort-keys
          AddClickCount: 0,
          FirmName : "",
          OccupantName: "",
         selectClassificationValues:res.NatureUsage,
         selectNatUsageValues:[],
         selectFloorValues:this.state.selectFloorValues,
         selectOccupancyValues: this.state.selectOccupancyValues,
         ConstructionDate: "",     
          EffectiveFromDate	: "",
          UnstructeredLand: 0,
          Length: "",
          taxAmount:0,
          Breadth: "",
          PlinthArea: "",
          BuildingPermissionNo: "",
          BuildingPermissionDate: "",
          PlinthAreaInBuildingPlan: "",
           FloorNumber: 0,
           BuildingClassification: 0,
           NatureOfUsage: 0,
           Occupancy:0,
          // tslint:disable-next-line:object-literal-sort-keys

        })),


      })
    })

    }

    public onHandleRegistrationReviewSubmit = (values:IProcessFeeProps) => {
        this.setState({...this.state, 
          assessmentReviewPopUp:false, 
          popUpOpen: true, 
        })
        if(this.state.AssessmentPdfPath !=="") {
        this.props.history.push(`http://${this.state.AssessmentPdfPath}`);
        }
    }
  public Registration = ()=>{
    return (
      <div>
        {this.state.activeStep === 0 ?
          <NewPropertyRegistrationForm
          handleRegistrationPropertyTypeChange={this.handleRegistrationPropertyTypeChange}
            handleGuardianIdChange={this.handleGuardianIdChange}
            GuardianReg={this.state.GuardianReg}
            selectGuardianValues={this.state.selectGuardianValues}
            handleGenderIdChange={this.handleGenderIdChange}
            Gender={this.state.Gender}
            selectGenderValues={this.state.selectGenderValues}
            handleGuardianChange={this.handleGuardianChange}
            handleEmailAddressRegChange={this.handleEmailAddressRegChange}
            handleMobileNoChange={this.handleMobileNoChange}
            handleOwnerNameChange={this.handleOwnerNameChange}
            onHandleAddClickReg={this.onHandleAddClickReg}
            onDeleteClickReg={this.onDeleteClickReg}
            OwnershipArray={this.state.OwnershipArray}
            EnumTypeDesc={this.state.EnumTypeDesc}
            EnumMasterID={this.state.EnumMasterID}
            ApartmentName={this.state.ApartmentName}
            AddClickCount={this.state.AddClickCount}
            ApartmentNameId={this.state.ApartmentNameId}
            CategoryOwnershipId={this.state.CategoryOwnershipId}
            CategoryOwnershipName={this.state.CategoryOwnershipName}
            selectCategoryOwnershipValues={this.state.selectCategoryOwnershipValues}
            onRegistration1Submit={this.onRegistration1Submit}
            selectApartmentValues={this.state.selectApartmentValues}
            activeStep={this.state.activeStep}
            PropertyTypeName={this.state.PropertyTypeName}
            PropertyTypeId={this.state.PropertyTypeId}
            selectPropertyValues={this.state.selectPropertyValues}
            handlePropertyRegChange={this.handlePropertyRegChange}
            PropertyDepartmentId={this.state.PropertyDepartmentId}
            PropertyDepartmentName={this.state.PropertyDepartmentName}
            selectDepartmentValues={this.state.selectDepartmentValues}

        

          /> : this.state.activeStep === 1 ?(
            <PropertyDetailsForm
            PropertyTypeId={this.state.PropertyTypeId}
            reasonForCreation={this.state.reasonForCreation}
            TotalTaxAmount={this.state.TotalTaxAmount}
            ProcessingFee={this.state.ProcessingFee}
            TotalTax={this.state.TotalTax}
            handleTaxChange={this.handleTaxChange}
            handleUnstructeredLandChange={this.handleUnstructeredLandChange}
            CategoryOwnershipId={this.state.CategoryOwnershipId}
            CurrentMarketValue={this.state.CurrentMarketValue}
            RegisteredDocumentValue={this.state.RegisteredDocumentValue}
            LayoutPermitNumber={this.state.LayoutPermitNumber}
            LayoutPermitDate={this.state.LayoutPermitDate}
            EffectiveDate={this.state.EffectiveDate}
            VacantLandArea={this.state.VacantLandArea}
            PattaNumber={this.state.PattaNumber}
            SurveyNumber={this.state.SurveyNumber}
            handleNatureChange={this.handleNatureChange}
            selectNatUsageValues={this.state.selectNatUsageValues}
            NatureOfUsage={this.state.NatureOfUsage}
              Occupancy={this.state.Occupancy}
              handleOccupancyChange={this.handleOccupancyChange}
              selectOccupancyValues={this.state.selectOccupancyValues}
            BuildingClassification={this.state.BuildingClassification}
            FloorNumber={this.state.FloorNumber}
            handleBuildingClassificationChange={this.handleBuildingClassificationChange}
            selectClassificationValues={this.state.selectClassificationValues}
            handleFloorNumberIdChange={this.handleFloorNumberIdChange}
            selectFloorValues={this.state.selectFloorValues}
            onHandleAddClickRegProp={this.onHandleAddClickRegProp}
            onDeleteClickRegProp={this.onDeleteClickRegProp}
            FloorArray={this.state.FloorArray}
            AddClickCount={this.state.AddClickCount}
            handlePlinthAreaChange={this.handlePlinthAreaChange}
            handleOccupantNameChange={this.handleOccupantNameChange}
            handleLengthChange={this.handleLengthChange}
            handleEffectiveFromDateChange={this.handleEffectiveFromDateChange}
            handleConstructionDateChange={this.handleConstructionDateChange}
            handleBuildingPlanChange={this.handleBuildingPlanChange}
            handleBuildingDateChange={this.handleBuildingDateChange}
              handleBreadthChange={this.handleBreadthChange}
              handleBildingPermissionChange={this.handleBildingPermissionChange}
            handleFirmNameChange={this.handleFirmNameChange}
            South={this.state.South}
            West={this.state.West}
            East={this.state.East}
            North={this.state.North}
            aminityValues1={this.state.aminityValues1}
            aminityTypes={this.state.aminityTypes}
            handleMultiSelectAminityChange={this.handleMultiSelectAminityChange}
            ApplicationId={this.state.enterApplicationId}
            mapOpen={this.state.mapOpen}
            handleMapClose={this.handleMapClose}
            handleMapOpenClick={this.handleMapOpenClick}
            handleMapPopUpClose={this.handleMapPopUpClose}
            wallId={this.state.wallId}
            woodId={this.state.woodId}
            selectwoodValues={this.state.selectwoodValues}
            selectwallValues={this.state.selectwallValues}
            roofId={this.state.roofId}
            selectroofValues={this.state.selectroofValues}
            EnumMasterID={this.state.EnumMasterID}
            EnumMasterDesc={this.state.EnumMasterDesc}
            selectfloorValues={this.state.selectfloorValues}
            ExtentOfSite={this.state.ExtentOfSite}
            CertificateNumber={this.state.CertificateNumber}
            OccupancyCertificateDate={this.state.OccupancyCertificateDate}
            handleRegBack={this.handleRegBack}
            District={this.state.District}
            Corporation={this.state.Corporation}
            Mandal={this.state.Mandal}
            TownShip={this.state.TownShip}
            Village={this.state.Village}
            Sector={this.state.Sector}
            Colony={this.state.Colony}
            Locality={this.state.Locality}
            ZoneNo={this.state.ZoneNo}
            WardNo={this.state.WardNo}
            Block={this.state.Block}
            Street={this.state.Street}
            Enumerationblock={this.state.Enumerationblock}
            PlotNo={this.state.PlotNo}
            ElectionWard={this.state.ElectionWard}
            DoorNo={this.state.DoorNo}
            Pincode={this.state.Pincode}
            activeStep={this.state.activeStep}
            onPropertyHandleSubmit={this.onPropertyHandleSubmit}
            />):
            this.state.activeStep === 2 ? 
            (<NewPropertyUploadDocumentForm 
              handleUploadPopUpClose={this.handlePopUpClose}
              UploadPopUp={this.state.UploadPopUp}
              handlePropertyAssessmentUpload={this.handlePropertyAssessmentUpload}
              selectFile={this.state.selectFile}
              handleSelectFileUpload={this.handleSelectFileUpload}
              CertificateNo={this.state.CertificateNo}
              MROProceedingNumber={this.state.MROProceedingNumber}
              CertificateDate={this.state.CertificateDate}
             RegisteredDocumentNumber={this.state.RegisteredDocumentNumber}
             RegisteredDocumentDate={this.state.RegisteredDocumentDate}
             DeedNumber={this.state.DeedNumber}
             DeedDate={this.state.DeedDate}
             DecreeNumber={this.state.DecreeNumber}
             DecreeDate={this.state.DecreeDate}
             CourtName={this.state.CourtName}
              PropertyAssessmentDocumentTypeId={this.state.PropertyAssessmentDocumentTypeId}
              PropertyAssessmentDocumentTypeValues={this.state.PropertyAssessmentDocumentTypeValues}
              activeStep={this.state.activeStep} 
              handleBack={this.handleRegBack}
              onHandleNewPropertyUplaodDocSubmit={this.onHandleNewPropertyUplaodDocSubmit}
              NewPropertyDocumentTypeId={this.state.NewPropertyDocumentTypeId}
              NewPropertyDocumentTypeValues={this.state.NewPropertyDocumentTypeValues}
              />) :
             this.state.activeStep === 3 ? 
            (
            <ProcessFeeForm 
            reasonForCreation={this.state.reasonForCreation}
            RequestId={this.state.RequestId}
            popUpOpen={this.state.popUpOpen}
            handleAssessmentClose={this.handleCancelClick}
            AssessmentPdfPath={this.state.AssessmentPdfPath}
            onHandleRegistrationReviewSubmit={this.onHandleRegistrationReviewSubmit}
            handleClose={this.onHandleClose}
            assessmentReviewPopUp={this.state.assessmentReviewPopUp}
            onHandleProcessFeeSubmitPopUp={this.onHandleProcessFeeSubmitPopUp}
            reviewOpen={this.state.reviewOpen}
            applicationSelectDepartmentName={this.state.applicationSelectDepartmentName}
            onHandlePopUpClose={this.onHandlePopUpClose}
            forwardOpen={this.state.forwardOpen}
            handleProcessFeeSaveAsDraftClick={this.handleProcessFeeSaveAsDraftClick}
            aminityTypes={this.state.aminityTypes}
            aminityValues1={this.state.aminityValues1}
            selectwoodValues={this.state.selectwoodValues}
            selectwallValues={this.state.selectwallValues}
            handleBack={this.handleRegBack}
            selectFile={this.state.selectFile}
            CertificateNo={this.state.CertificateNo}
            MROProceedingNumber={this.state.MROProceedingNumber}
            CertificateDate={this.state.CertificateDate}
           RegisteredDocumentNumber={this.state.RegisteredDocumentNumber}
           RegisteredDocumentDate={this.state.RegisteredDocumentDate}
           DeedNumber={this.state.DeedNumber}
           DeedDate={this.state.DeedDate}
           DecreeNumber={this.state.DecreeNumber}
           DecreeDate={this.state.DecreeDate}
           CourtName={this.state.CourtName}
            PropertyAssessmentDocumentTypeId={this.state.PropertyAssessmentDocumentTypeId}
            PropertyAssessmentDocumentTypeValues={this.state.PropertyAssessmentDocumentTypeValues}
            activeStep={this.state.activeStep} 
            NewPropertyDocumentTypeId={this.state.NewPropertyDocumentTypeId}
            NewPropertyDocumentTypeValues={this.state.NewPropertyDocumentTypeValues}
            TotalTaxAmount={this.state.TotalTaxAmount}
            ProcessingFee={this.state.ProcessingFee}
            TotalTax={this.state.TotalTax}
            CategoryOwnershipId={this.state.CategoryOwnershipId}
            CurrentMarketValue={this.state.CurrentMarketValue}
            LayoutPermitNumber={this.state.LayoutPermitNumber}
            LayoutPermitDate={this.state.LayoutPermitDate}
            EffectiveDate={this.state.EffectiveDate}
            VacantLandArea={this.state.VacantLandArea}
            PattaNumber={this.state.PattaNumber}
            SurveyNumber={this.state.SurveyNumber}
            selectNatUsageValues={this.state.selectNatUsageValues}
            NatureOfUsage={this.state.NatureOfUsage}
            Occupancy={this.state.Occupancy}
            selectOccupancyValues={this.state.selectOccupancyValues}
            BuildingClassification={this.state.BuildingClassification}
            FloorNumber={this.state.FloorNumber}
            selectClassificationValues={this.state.selectClassificationValues}
            selectFloorValues={this.state.selectFloorValues}
            FloorArray={this.state.FloorArray}
            AddClickCount={this.state.AddClickCount}
            selectroofValues={this.state.selectroofValues}
            EnumMasterID={this.state.EnumMasterID}
            EnumMasterDesc={this.state.EnumMasterDesc}
            selectfloorValues={this.state.selectfloorValues}
            ExtentOfSite={this.state.ExtentOfSite}
            CertificateNumber={this.state.CertificateNumber}
            Corporation={this.state.Corporation}
            Mandal={this.state.Mandal}
           
           
            
            GuardianReg={this.state.GuardianReg}
            selectGuardianValues={this.state.selectGuardianValues}
            
            selectGenderValues={this.state.selectGenderValues}
           
            OwnershipArray={this.state.OwnershipArray}
            EnumTypeDesc={this.state.EnumTypeDesc}
            ApartmentName={this.state.ApartmentName}
            ApartmentNameId={this.state.ApartmentNameId}
            CategoryOwnershipName={this.state.CategoryOwnershipName}
            selectCategoryOwnershipValues={this.state.selectCategoryOwnershipValues}
            selectApartmentValues={this.state.selectApartmentValues}
            PropertyTypeName={this.state.PropertyTypeName}
            PropertyTypeId={this.state.PropertyTypeId}
            selectPropertyValues={this.state.selectPropertyValues}
           
            selectDepartmentValues={this.state.selectDepartmentValues}
            ///
              OccupancyCertificateDate={this.state.OccupancyCertificateDate}
              RegisteredDocumentValue={this.state.RegisteredDocumentValue}
            
             
              South={this.state.South}
              West={this.state.West}
              East={this.state.East}
              North={this.state.North}
              ApplicationId={this.state.enterApplicationId}
              mapOpen={this.state.mapOpen}
           
              wallId={this.state.wallId}
              woodId={this.state.woodId}
              roofId={this.state.roofId}
              District={this.state.District}
              TownShip={this.state.TownShip}
              Village={this.state.Village}
              Sector={this.state.Sector}
              Colony={this.state.Colony}
              Locality={this.state.Locality}
              ZoneNo={this.state.ZoneNo}
              WardNo={this.state.WardNo}
              Block={this.state.Block}
              Street={this.state.Street}
              Enumerationblock={this.state.Enumerationblock}
              PlotNo={this.state.PlotNo}
              ElectionWard={this.state.ElectionWard}
              DoorNo={this.state.DoorNo}
              Pincode={this.state.Pincode}
              Gender={this.state.Gender}
              PropertyDepartmentId={this.state.PropertyDepartmentId}
              PropertyDepartmentName={this.state.PropertyDepartmentName}
            
             // selectDepartmentList={this.state.selectDepartmentForwardList}
             ptmsSelectDepartmentList={this.state.ptmsSelectDepartmentList}
              paymentMode={this.state.paymentMode} 
              UserId={this.state.UserId}
               handleSelectDepartmentChange={this.handleSelectDepartmentChange}
               onHandleProcessFeeSubmit={this.onHandleProcessFeeSubmit}
               />) 
              : (
            <div/>)
            }
      </div>
    )
  }
  public NatureUsageMasterRender = () => {
  
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
                Nature Usage Master
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpen()}
                  >
                    + Add
                  </Button>
                  {/* <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleRefresh()}
                  >
                    Refresh
                  </Button> */}
                </div>
              </div>
            </CardContent>
           {
              <Dialog
                open={this.state.addNatureUsagePopUpOpen}
                onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                  Create Nature Usage                
                     </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                <AddNatureUsageForm 
                buildingClassificationDropDownData={this.state.buildingClassificationDropDownData}
                onHandleNatureUsageNameChange={this.handleNatureUsageNameChange}
                handleBuildingClassificatioIdChange={this.handleBuildingClassificationIdChange}
                natureUsageItems={this.state.natureUsageItems}
                NatureUsageList={this.state.NatureUsageList}
                propertyTypeDropDownValues={this.state.propertyTypeDropDownValues}
                handlePropertyTypeIdChange={this.handleNaturePropertyTypeIdChange}
                PropertyTypeId={this.state.PropertyTypeId}
                BuildingClassificationId={this.state.BuildingClassificationId}
                NatureUsageName={this.state.NatureUsageName} 
                onHandleAddPopUp={this.onHandleAddPopUpOpen} 
                onHandleAddPopUpClose={this.onHandleAddPopUpClose} 
                onHandleAddSave={this.onHandleNatureUsageAddSave} /></div>
              </Dialog>
            }

             {
              <Dialog
                open={this.state.editSuccessPopUp}
                onClose={this.onHandleEditSuccessPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div>
                  <DialogTitle id="simple-dialog-title">
                  You have successfully updated Property Department     
                               </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  {/*  tslint:disable-next-line:jsx-no-lambda */}
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleEditSuccessPopUpClose()}
                  >
                    OK
                  </Button>
                </div>
              </Dialog>
            }
           
          <NatureUsageMasterForm
          buildingClassificationDropDownData={this.state.buildingClassificationDropDownData}
          onHandleNatureUsageActivateClick={this.onHandleActivateNatureUsageClick}
          onHandleNatureUsageDeActivateClick={this.onHandleDeActivateNatureUsage}
          onHandleEditSave={this.onHandleEditNatureUsageSave}
          handleNatureUsageNameChange={this.handleNatureUsageNameChange}
          handlePropertyTypeIdChange={this.handleNaturePropertyTypeIdChange}
          handleBuildingClassificationIdChange={this.handleBuildingClassificationIdChange}
          PropertyTypeDropDownDataValues={this.state.propertyTypeDropDownValues}
          BuildingClassificationName={this.state.BuildingClassificationName}
          onHandleNatureUsageEditClick={this.onHandleNatureUsageEditClick}
          onHandleNatureUsageActivatePopUp={this.onHandleNatureUsageActivatePopUp}
          onHandleNatureUsageDeActivatePopUp={this.onHandleNatureUsageDeActivatePopUp}
          PropertyTypeId={this.state.PropertyTypeId}
          BuildingClassificationId={this.state.BuildingClassificationId}
          NatureUsageCount={this.state.natureUsageCount}
          NatureUsageId={this.state.NatureUsageId
          }
          natureUsageItems={this.state.natureUsageItems}
          NatureUsageName={this.state.NatureUsageName}
          NatureUsageList={this.state.NatureUsageList}
          addNatureUsagePopUpOpen={this.state.addNatureUsagePopUpOpen}
          editNatureUsagePopUp={this.state.editNatureUsagePopUp}
          deActivateNatureUsagePopUp={this.state.deActivateNatureUsagePopUp}
          activateNatureUsagePopUp={this.state.activateNatureUsagePopUp}
          onHandleDeActivePopUpClose={this.onHandleDeActivatePopUpClose}
          onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
          // tslint:disable-next-line:object-literal-sort-keys
          onHandleEditPopUpClose= {this.onHandleEditPopUpClose}
          searchInput={this.state.searchInput}
          onHandleSearch={this.onHandleNatureUsageSearch}
          page={this.state.pageNatureUsage}
          onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
          onHandlePageChange={this.onHandlePageNatureUsageChange}
          rowsPerPage={this.state.rowsPerPage}
       
    
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
              You have added Nature Usage Name successfully 
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
            Nature Usage Name already existed, please add new Nature Usage Name.
              {/* tslint:disable-next-line:jsx-no-lambda */}
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
    )
  }

  public onHandleMenuPanelChange = (panel:string) => {
    
      this.setState({
        ...this.state,
      menuExpanded: this.state.menuExpanded !== panel ? panel : false,
      menuExpanded2: this.state.menuExpanded === panel? false : "",
      [panel]: this.state.panel
          });
    }

    public onHandleMenuPanel2Change = (panel:string,panel1:string, arr:ReadonlyArray<string>) => {
     
        this.setState({
          ...this.state,
          menu3: arr,
          menuExpanded2: this.state.menuExpanded2 !== panel1 ? panel1 : false,
            });
      }

      public onHandleMenuPanel3Change = ( panel:string,panel2:string,panel3:string) => {
      
        this.setState({...this.state,
          menuExp3: this.state.menu3.find((x:any) => x === panel3)? panel3 : false });
      }

      public onHandlePropertyTaxStepChange  = (event: any, value: number) => {
          this.setState({ ...this.state, propertyTaxStep : value });
      

      }

      public handlePropertyTaxSubmit = async(values: IPropertyTaxFormProps) => {

        try {
          if (loader != null) {
            loader.style.display = "block";
          }
      
        const res = await  getPropertyTypeGridValues()
       const res1=await postPTMSDepartmentUserDropDownList()

       const CategoryOwnershipId = this.state.allocationTypeList
       .filter((y:IProTypeMasterValues) => y.PropertyTypeId === values.PropertyTypeId)
       .map((y:IProTypeMasterValues) => y.CategoryOwnershipId)[0];

       const CategoryOwnershipName =  this.state.allocationTypeList
       .filter((y:IProTypeMasterValues) => y.PropertyTypeId === values.PropertyTypeId)
       .map((y:IProTypeMasterValues) => y.CategoryOwnershipDesc)[0];

       const res2= await GetPropertyConfigurationDetails(values)

       
          this.setState({...this.state, 
            CategoryOwnershipId,
            CategoryOwnershipName,
            Description: values.Description,
            allocationTypeList: res.jsonData.data,
            getTaxDetailsChange: true,
            propertyTaxCount:res2.data.length,
            propertyTaxTableList: res2.data.map((x:IPropertyTaxTableValues, index: number) => 
            ({...x, id: index + 1
            })),
            ptmsSelectDepartmentList: res1.deptusersViewModelLst,
        
        })

        if (loader != null) {
          loader.style.display = "none";
        }
     
      }
    catch(err) {
           // tslint:disable-next-line:no-console
           console.log(err)
      if (loader != null) {
       loader.style.display = "none";
     }
    }
  }

      public handleDescriptionChange = (event:any) => {
        // const DistrictName = this.state.selectDistrictValues
        // .filter((x:IDistrictValues)=> x.DistrictNumber === event.target.value)
        // .map((x:IDistrictValues)=> x.Description)[0]
        GetBudgetYears(event.target.value).then(res => { 
          this.setState({...this.state, 
            Description: event.target.value,
            selectBudgetValues: res.years.map((x:IBudgetValues, index: number)=> ({...x, 
              BudgetId: index + 1}))      
        })
        })
      }

      

      public handleCopyValuesClick = (previousValue: number) => {

        if(this.state.selected.length === 0) {
          this.setState({...this.state, WarningPopUp: true})
        }
        else {

      const copyValues = (propertyTaxValues:IPropertyTaxTableValues, value: number) => {

      return  this.state.selected
      .includes(propertyTaxValues.id.toString()) && propertyTaxValues.PropertyValue === 0 ?
        ({...propertyTaxValues, PropertyValue: value}) : ({...propertyTaxValues})
      }

        this.setState({...this.state,previousValue , propertyTaxTableList: 
          this.state.propertyTaxTableList
          .map((x:IPropertyTaxTableValues) =>  copyValues(x,previousValue) )
      })
    }
  }

      public handleIncreasePercentageClick = (percentageValue: number, copyValue: any) => {
        if(this.state.selected.length === 0) {
          this.setState({...this.state, WarningPopUp: true})
        }
        else {
        const increasePercentage = (propertyTaxValues:IPropertyTaxTableValues, value: number) => {

      
       
          const val = value * copyValue
          const result =  val / 100;
          const final = Number(copyValue) + result

    // tslint:disable-next-line:no-console
    console.log( typeof(value), value , typeof(copyValue), copyValue, typeof(result), final);


        return  this.state.selected
        .includes(propertyTaxValues.id.toString()) && propertyTaxValues.PropertyValue !== 0  ?
          ({...propertyTaxValues, PropertyValue:
            Math.floor(final)})
             : ({...propertyTaxValues})
        }
  

        this.setState({...this.state,
          incresePercentageButton: true,
          percentageValue,
           propertyTaxTableList: 
          this.state.propertyTaxTableList
          .map((x:IPropertyTaxTableValues) =>  increasePercentage(x,percentageValue) )  });

      }
    }

      public handleBudgetIdChange = (event:any,values:IPropertyTaxFormProps) => {
       const d = new Date()
        const currentDay = d.getDate();
        const currentMonth = d.getMonth() 
        this.setState({...this.state,
          BudgetId: event.target.value, 
          BudgetYear: this.state.selectBudgetValues
          .filter((x:IBudgetValues) => x.BudgetId === event.target.value)[0],
          Description: values.Description,
           PropertyTypeId: values.PropertyTypeId,
           // tslint:disable-next-line:object-literal-sort-keys
           FromDate: moment(new Date(this.state.selectBudgetValues
            .filter((x:IBudgetValues) => x.BudgetId === event.target.value)
            .map((x:IBudgetValues) => x.BudgetYear)[0] , currentMonth,currentDay)).format('YYYY-MM-DD'),
           ToDate:moment(new Date(this.state.selectBudgetValues
            .filter((x:IBudgetValues) => x.BudgetId === event.target.value)
            .map((x:IBudgetValues) => x.BudgetYear)[0] + 1, currentMonth,currentDay -1
             )).format('YYYY-MM-DD'), 

           })
      }


      public onHandlePropertyTaxSearch = (event: any) => {
        const searchInput = event.target.value;
        const data = this.state.propertyTaxTableList.filter(
          (x: IPropertyTaxTableValues) =>
            searchInput !== ""
              ? 
              documentNameIncludes(searchInput, x.NatureUsageType)||
              documentNameIncludes(searchInput, x.BuildingClassificationType) || 
              documentNameIncludes(searchInput, x.PropertyType) || 
              documentNameIncludes(searchInput, x.Value.toString()) || 
              documentNameIncludes(searchInput, x.PropertyValue.toString()) 
              : x
        );
        this.setState({
          ...this.state,
          propertyTaxCount: data.length,
          searchInput
        });
      };
      public handlePropertyTaxSelectAllClick = (event: any) => {
        if (event.target.checked) {
          this.setState({
            ...this.state,
            rowCount: this.state.propertyTaxTableList.length,
            selected: this.state.propertyTaxTableList.map(
              (n: IPropertyTaxTableValues) => n.id
            ).map((x:number) => `${x}`)
          });
          return;
        }
        this.setState({ ...this.state, selected: [], rowCount: 0 });
      };
      public handlePropertyTaxSpecificSelect = (event: any, id: string) => {
        if (event.target.checked && this.state.selected.map((x:string) => x !== id)) {
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

    public handlePropertyTaxValueChange = (id: number,event:any) => {
      this.setState({...this.state, propertyTaxTableList: 
        this.state.propertyTaxTableList
        .map((x:IPropertyTaxTableValues) => x.id === id? 
        ({...x, PropertyValue: event.target.value}) : x)})
        
    }

    public handlePropertyTaxSubmitSave= (values: IPropertyTaxFormProps & IPropertyTaxTableStateProps) => {
     if(values.UserId !== 0){
      

       const budgetYear = this.state.selectBudgetValues.filter((x:IBudgetValues) => x.BudgetId === values.BudgetId)
       .map((x:IBudgetValues) => x.BudgetYear)[0]
      UpdatePropertyConfigurationDetails(values, budgetYear,this.state.CategoryOwnershipId, this.state.CategoryOwnershipName).then(res => {
        this.setState({...this.state, forwardOpen: false, successPopUp: true})
      })
    }
    }
    public handlePropertyTaxApproveClick= (values: IPropertyTaxFormProps & IPropertyTaxTableStateProps) => {
        const budgetYear = this.state.selectBudgetValues.filter((x:IBudgetValues) => x.BudgetId === values.BudgetId)
        .map((x:IBudgetValues) => x.BudgetYear)[0]
      
        UpdatePropertyConfigurationDetailsForApproval(values, budgetYear,this.state.CategoryOwnershipId
        ,this.state.CategoryOwnershipName).then(res => {
         this.setState({...this.state, forwardOpen: false, successPopUp: true})
       })
     
     }

    public handlePropertyTaxDraftSave =(values: IPropertyTaxFormProps & IPropertyTaxTableStateProps) => {
      const budgetYear = this.state.selectBudgetValues.filter((x:IBudgetValues) => x.BudgetId === values.BudgetId)
      .map((x:IBudgetValues) => x.BudgetYear)[0]
      

      UpdatePropertyConfigurationDetails(values, budgetYear, this.state.CategoryOwnershipId,this.state.CategoryOwnershipName).then(res => {
        this.setState({...this.state, forwardOpen: false})
      })
    }

    public handlePropertyTaxSubmitSavePopUp= (values: IPropertyTaxFormProps) => {
      if (values.UserId !== 0 && values.Comments !== "") {
        this.setState({ ...this.state, forwardOpen: true });
      } else {
        this.setState({ ...this.state, reviewOpen: true });
      }
    };

  public handlePropertyTaxCommentsChange = (event:any,values:IPropertyTaxFormProps) => {
    this.setState({...this.state, Comments: event.target.value, UserId: values.UserId})
  }

  public handleIncreasePercentageChange = (event:any) => {
    this.setState({...this.state, percentageValue:event.target.value , incresePercentageButton:false })
  }

  public handleTaxValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if(this.state.selected.length === 0) {
      this.setState({...this.state, WarningPopUp: true})
    }
    else {

  const TableItems = (propertyTaxValues:IPropertyTaxTableValues, value: number) => {
    
  return  this.state.selected
  .includes(propertyTaxValues.id.toString())  ?
    ({...propertyTaxValues, PropertyValue: value}) : ({...propertyTaxValues})
  }

  this.setState({...this.state, 
    copiedValue:event.target.value,
    incresePercentageButton: false,
    percentageValue: 0,
    propertyTaxTableList: 
    this.state.propertyTaxTableList
    .map((x:IPropertyTaxTableValues) =>  TableItems(x,0) ),
   })
  
}
  }
       
      public PropertyTaxConfiguration = () => {
        return (
        <PropertyTaxConfigurationTabForm
        handleValueChange={this.handleTaxValueChange} 
        handlePropertyTypeIdChange={this.handlePropertyTypeIdChange}
        RequestId={this.state.RequestId}
          handlePropertyTaxApproveClick={this.handlePropertyTaxApproveClick}
          incresePercentageButton={this.state.incresePercentageButton}
          handleIncreasePercentageChange={this.handleIncreasePercentageChange}
          successPopUp={this.state.successPopUp}
          WarningPopUp={this.state.WarningPopUp}
          handlePropertyTaxCommentsChange={this.handlePropertyTaxCommentsChange}
          onHandleClose={this.onHandleClose}
          forwardOpen={this.state.forwardOpen}
          handlePropertyTaxSubmitSavePopUp={
            this.handlePropertyTaxSubmitSavePopUp
          }
          reviewOpen={this.state.reviewOpen}
          applicationSelectDepartmentName={
            this.state.applicationSelectDepartmentName
          }
          Comments={this.state.Comments}
          handlePropertyTaxDraftSave={this.handlePropertyTaxDraftSave}
          handlePropertyTaxSubmitSave={this.handlePropertyTaxSubmitSave}
          handlePropertyTaxValueChange={this.handlePropertyTaxValueChange}
          ptmsSelectDepartmentList={this.state.ptmsSelectDepartmentList}
          UserId={this.state.UserId}
          handleSelectDepartmentChange={this.handleSelectDepartmentChange}

          onHandleSearch={this.onHandlePropertyTaxSearch}
          selected={this.state.selected}
      propertyTaxTableList={this.state.propertyTaxTableList}
      page={this.state.page}
      rowsPerPage={this.state.rowsPerPage}
      count={this.state.propertyTaxCount}
      searchInput={this.state.searchInput}
      onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
      onHandlePageChange={this.onHandlePageChange}
      numSelected={this.state.numSelected}
      rowCount={this.state.rowCount}
      handleSelectAllClick={this.handlePropertyTaxSelectAllClick}
      handleSelect={this.handlePropertyTaxSpecificSelect}
          handleBudgetIdChange={this.handleBudgetIdChange}
          getTaxDetailsChange={this.state.getTaxDetailsChange}
          copiedValue={this.state.copiedValue}
          percentageValue={this.state.percentageValue}
          handleCopyValuesClick={this.handleCopyValuesClick}
          handleIncreasePercentageClick={this.handleIncreasePercentageClick}
          handleDescriptionChange={this.handleDescriptionChange}
          Description={this.state.Description}
          BudgetId={this.state.BudgetId}
          PropertyTypeId={this.state.PropertyTypeId}
          FromDate={this.state.FromDate}
          ToDate={this.state.ToDate}
          selectBudgetValues={this.state.selectBudgetValues}
          selectDistrictValues={this.state.selectDistrictValues}
          selectPropertyTypeValues={this.state.propertyTypeDropDownValues}
          handlePropertyTaxSubmit={this.handlePropertyTaxSubmit}
          propertyTaxStep={this.state.propertyTaxStep} 
          onHandlePropertyTaxStepChange={this.onHandlePropertyTaxStepChange}
          />
        )
      }

      // public handleResetCancelClick = () => {
      //   this.props.history.push('/login');
      // }

      // public handleResetPassword = (values: IResetPasswordValues) => {
      //   UpdateNewPassword(values,this.state.Email).then( () => 
      //   this.setState({...this.state})
      //   )
      // }

      // public ResetPasswordState = () => (
      //   <ResetPasswordForm 
      //   NewPassword={this.state.NewPassword} 
      //   handleResetPassword={this.handleResetPassword} 
      //   ReEnterNewPassword={this.state.ReEnterNewPassword} 
      //   handleCancelClick={this.handleResetCancelClick} 
      //   />
      // )

      public onHandleDraftAssessmentViewButtonClick = (RequestId: string) => {
        GetDraftAssessmentViewButtonDetails(RequestId)
        .then(res => {
          this.setState({...this.state, draftAssessmentPopUpValues: res.rslt, dialogOpen: true })
        })
        .catch(err => 
          // tslint:disable-next-line:no-console
          console.log(err))
      }

      public handleSubmitDraftAssessmentProceedClick = async (draftAssessmentValues : ISumbitdraftAssessmentValues) => {

        try {
        const res = await GetDraftAssessmentClickToProceedDetails(draftAssessmentValues.RequestId)
        const res2 = await getPropertyCategoryDropdown(res.rslt.CategoryOwnership)
        const res3 = await getPropertyDepartmentDropdown(res.rslt.CategoryOwnership)
        const res4 = await getBuildingClassificationDropDown(res.rslt.PropertyType,0);


          this.setState({...this.state,
            activeStep:0,
             draftAssessmentProceedValues : res.rslt,
            // tslint:disable-next-line:object-literal-sort-keys
            CategoryOwnershipId: res.rslt && res.rslt.CategoryOwnership ,
            PropertyTypeId: res.rslt && res.rslt.PropertyType,
            selectGuardianValues:this.state.selectGuardianValues,
            selectGenderValues:this.state.selectGenderValues,
            selectClassificationValues: res4.NatureUsage,

          
            OwnershipArray: res.rslt.NewOwnerDetails &&  res.rslt.NewOwnerDetails.length !==0? 
            res.rslt.NewOwnerDetails.map((y:IOwnerDetailsValues,i :number) => ({...y,
              
                AddClickCount: i,
                OwnerName : y.OwnerName,
                id: i,
                selectGenderValues: this.state.selectGenderValues,
                selectGuardianValues:this.state.selectGuardianValues,
                // tslint:disable-next-line:object-literal-sort-keys
                Guardian: y.OwnerGuardianName,
                MobileNo: y.OwnerMobileNo,
                 EmailAddress	: y.OwnerEmail,
                 Gender: y.OwnerGender,
                 GuardianReg:y.OwnerGuardianRelation,
                 GuardianRelation 	: this.state.GuardianRelation,


            })) : [{
              AddClickCount: 0,
                      GuardianRelation 	: this.state.GuardianRelation,
                      OwnerName : "",
                      id: 0,
                      selectGenderValues: this.state.selectGenderValues,
                      selectGuardianValues:this.state.selectGuardianValues,
                      // tslint:disable-next-line:object-literal-sort-keys
                      Guardian: "",
                      MobileNo: "",
                       EmailAddress	: "",
                       Gender: 0,
                       GuardianReg:0,
            }],
            ApartmentNameId: res.rslt && res.rslt.ApartmentNameId,
            selectCategoryOwnershipValues:this.state.selectCategoryOwnershipValues,
            selectApartmentValues:this.state.selectApartmentValues,
            selectPropertyValues:res2.data,
            PropertyDepartmentId: res.rslt && res.rslt.PropertyDepartment,
            selectDepartmentValues:res3.data,
            District: res.rslt && res.rslt.BlockNo_str,
            Corporation: res.rslt && res.rslt.CorpMunicipality_str,
            Mandal: res.rslt && res.rslt.Mandal_str,
            Village:res.rslt && res.rslt.Village_Str,
            TownShip:res.rslt && res.rslt.Township_str,
            Sector:res.rslt && res.rslt.Sector_str,
            Colony:res.rslt && res.rslt.Colony_str,
            Locality:res.rslt && res.rslt.LocalityID_str,
            ZoneNo:res.rslt && res.rslt.ZoneNo_str,
            WardNo:res.rslt && res.rslt.WardNo_str,
            Block:res.rslt && res.rslt.BlockNo_str,
            DoorNo:res.rslt && res.rslt.DoorNo,
            Pincode:res.rslt && res.rslt.Pincode,
            Street:res.rslt && res.rslt.Street_str,
            Enumerationblock:res.rslt && res.rslt.ElectionWard_str,
            PlotNo:res.rslt && res.rslt.PlotNo_str,
            ElectionWard:res.rslt && res.rslt.ElectionWard_str,
            reasonForCreation: res.rslt && res.rslt.ReasonCreation,
            CertificateNumber: res.rslt && res.rslt.OccupancyCertificateNo,
            OccupancyCertificateDate: res.rslt && res.rslt.OccupancyCertificateDate_str !== null ? 
            moment(res.rslt.OccupancyCertificateDate_str).format('YYYY-MM-DD') : '',
            ExtentOfSite: res.rslt && res.rslt.ExtentSite,
            EnumMasterID: res.rslt && res.rslt.FloorType,
            roofId: res.rslt && res.rslt.RoofType,
            wallId: res.rslt && res.rslt.WallType,
            woodId: res.rslt && res.rslt.WoodType,
            // aminityTypes: res.rslt && res.rslt.Amenities,
            FloorArray: res.rslt && res.rslt.NewFloorDetails && res.rslt.NewFloorDetails.length !==0 ?
             res.rslt.NewFloorDetails
            .map((y:any, i :number) => ({
              id: i,
          // tslint:disable-next-line:object-literal-sort-keys
          AddClickCount: i,
          FirmName : y.Firmname,
          OccupantName: y.Occupantname,
         selectClassificationValues: res4.NatureUsage,
         selectNatUsageValues: this.state.selectNatUsageValues,
         selectFloorValues: this.state.selectFloorValues,
         selectOccupancyValues:this.state.selectOccupancyValues,
         ConstructionDate: y.ConstructionDate_str !== null?  moment(y.ConstructionDate_str).format('YYYY-MM-DD') : '',     
          EffectiveFromDate	: y.EffectiveFromDate && moment(y.EffectiveFromDate).format('YYYY-MM-DD'),
          UnstructeredLand:y.UnStructuredland ? 1 : 2,
          Length: y.Length,
               Breadth: y.Breadth,
               taxAmount:y.TaxAmount,
          PlinthArea: y.PlinthArea,
          BuildingPermissionNo: y.BuildingpermissionNo,
          BuildingPermissionDate: y.BuildingPermissionDate && moment(y.BuildingPermissionDate).format('YYYY-MM-DD') ,
          PlinthAreaInBuildingPlan: y.PlinthAreaInBuildingPlan,
           FloorNumber: y.FloorNo,
           BuildingClassification: y.ClassificationOfBuilding,
           NatureOfUsage: y.NatureOfUsage,
           Occupancy:y.Occupancy
             })
            ) : [{
              id: 0,
          // tslint:disable-next-line:object-literal-sort-keys
          AddClickCount: 0,
          FirmName : "",
          OccupantName: "",
         selectClassificationValues: this.state.selectClassificationValues,
         selectNatUsageValues: this.state.selectNatUsageValues,
         selectFloorValues: this.state.selectFloorValues,
         selectOccupancyValues:this.state.selectOccupancyValues,
         ConstructionDate: "",     
          EffectiveFromDate	: "",
          UnstructeredLand:0,
          Length: "",
               Breadth: "",
               taxAmount:0,
          PlinthArea: "",
          BuildingPermissionNo: "",
          BuildingPermissionDate: "",
          PlinthAreaInBuildingPlan: "",
           FloorNumber: 0,
           BuildingClassification: 0,
           NatureOfUsage: 0,
           Occupancy:0
             }],
            North: res.rslt && res.rslt.North,
            East: res.rslt && res.rslt.East,
            West: res.rslt && res.rslt.West,
            South: res.rslt && res.rslt.South,

            NewPropertyDocumentTypeId: res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.DocumentType )[0] !== null ?  
            res.rslt.NewDocumentTypes.map((y:any) => y.DocumentType )[0] : 0,

            CertificateNo:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.CertificateNo)[0] !== null ? 
            res.rslt.NewDocumentTypes.map((y:any) => y.CertificateNo)[0] : '' ,

            CertificateDate: res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.CertificateDate)[0] !== null ? 
            moment(res.rslt.NewDocumentTypes.map((y:any) => y.CertificateDate)[0]).format('YYYY-MM-DD') : '' ,

            MROProceedingNumber:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.MROProceedNo )[0] !== null ?  
            res.rslt.NewDocumentTypes.map((y:any) => y.MROProceedNo )[0] : '',

            RegisteredDocumentNumber:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.RegisteredDocNo )[0] !== null ?
             res.rslt.NewDocumentTypes.map((y:any) => y.RegisteredDocNo )[0] : '',

            RegisteredDocumentDate:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.RegisteredDocDate_str )[0]!== null ? 
             moment(res.rslt.NewDocumentTypes.map((y:any) => y.RegisteredDocDate_str )[0]).format('YYYY-MM-DD') : '',

            DeedNumber:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.DeedNo )[0] !== null ? 
            res.rslt.NewDocumentTypes.map((y:any) => y.DeedNo )[0] : '',

            DeedDate:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.DeedDate_str )[0] !== null ? 
            moment(res.rslt.NewDocumentTypes.map((y:any) => y.DeedDate_str )[0]).format('YYYY-MM-DD') : '',

            DecreeNumber:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.DecreeNo )[0] !== null ? 
            res.rslt.NewDocumentTypes.map((y:any) => y.DecreeNo )[0] : '',

            DecreeDate:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.Decreedate_str )[0] !== null ?
             moment(res.rslt.NewDocumentTypes.map((y:any) => y.Decreedate_str )[0]).format('YYYY-MM-DD') : '',

            CourtName:res.rslt && res.rslt.NewDocumentTypes && 
            res.rslt.NewDocumentTypes.map((y:any) => y.CourtName)[0] !== null ? 
            res.rslt.NewDocumentTypes.map((y:any) => y.CourtName)[0] : '',

          });

        this.props.history.push(`/page/ptms/newpropertyregistration/${draftAssessmentValues.RequestId}`) 
      }

      catch(err) {
        // tslint:disable-next-line:no-console
        console.log(err);
      }
      }

      public onHandleSubmitDraftAssessementSearch = (event:any) => {
        const searchInput = event.target.value;
    
        const data = this.state.submitDraftAssessmentList.filter(
          (x: ISumbitdraftAssessmentValues) =>
            searchInput !== ""
              ? 
              this.registrationNumer(searchInput, x.OwnerName)
              ||
              this.registrationNumer(searchInput, x.CategoryOwnershipName)
              ||
              this.registrationNumer(searchInput, x.PropertyDepartmentName)
              ||
              this.registrationNumer(searchInput, x.PropertyTypeName)
              ||
              this.registrationNumer(searchInput, x.RequestId)
              : x
              );
              this.setState({...this.state,draftAssessmentCount: data.length,searchInput});
      }

      public SubmitDraftAssessmentsRender = () => {
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
                    Submit Draft Assessments
                  </Typography>
                </CardContent>
                <SubmitDraftAssessmentForm
                 selectfloorValues={this.state.selectfloorValues}
                 selectroofValues={this.state.selectroofValues}
                 selectwallValues={this.state.selectwallValues}
                 selectwoodValues={this.state.selectwoodValues}
                onHandleDraftAssessmentClose={this.onHandleClose}
                dialogOpen={this.state.dialogOpen}
                draftAssessmentPopUpValues={this.state.draftAssessmentPopUpValues}
                draftAssessmentProceedValues={this.state.draftAssessmentProceedValues}
                  onHandleActionClick={this.handleSubmitDraftAssessmentProceedClick}
                  draftAssessmentValues={this.state.draftAssessmentValues}
                  AllocateTo={this.state.AllocateTo}
                  count={this.state.draftAssessmentCount}
                  onHandlePageChange={this.onHandlePageChange}
                  onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
                  submitDraftAssessmentList={this.state.submitDraftAssessmentList}
                  page={this.state.page}
                  rowsPerPage={this.state.rowsPerPage}
                  searchInput={this.state.searchInput}
                  onHandleSearch={this.onHandleSubmitDraftAssessementSearch}
                  onHandleViewButtonClick={this.onHandleDraftAssessmentViewButtonClick}
             
                />
                {
                  <Dialog
                    open={this.state.deletePopUp}
                    //  onClose={this.handleDeletePopUpClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogTitle id="simple-dialog-title">
                      Are you sure to delete/cancel the selected application
                    </DialogTitle>
                    <DialogActions>
                      <Button
                        className="save-btn"
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={() => this.handleDeletePopUpClose()}
                      >
                        No, DisAgree
                      </Button>
                      <Button
                        className="save-btn"
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={() =>
                          this.onHandleDeleteClick(this.state.draftApplicationId)
                        }
                      >
                        Yes,I Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                }
              </Card>
            </div>
          </div>
        );
      }

      public onPropertySearchPayTaxTabChange = (event:any, value: number) => {
        this.setState({ ...this.state,
           propertySearchPayTaxTabValue : value <= this.state.propertySearchPayTaxTabValue ? value 
          : this.state.propertySearchPayTaxTabValue });

      }

      public handleSearchSessionSubmit = (values: ISearchSessionProps) => {
        try {
        if (loader) {
          loader.style.display = "block";
        }
        PostPropertySearchPaytax(values)
        .then((res) => {
      
          this.setState({...this.state, 
            OwnerName: values.OwnerName,
            TownId: values.TownId,
            propertySearchPayTaxTabValue: this.state.propertySearchPayTaxTabValue + 1,
            propertySearchResultTaxDetailsCount: res.data.length,
           propertySearchResultTaxDetailsList: res.data,
          })
        }).catch(err => 
           // tslint:disable-next-line:no-console
      console.log(err))

        if (loader != null) {
          loader.style.display = "none";
        }
       
      }
      catch(err) {
 if (loader != null) {
        loader.style.display = "none";
      }
      // tslint:disable-next-line:no-console
      console.log(err);
      }
    }
public onHandleSearchResultViewActionClick =(values: IPropertySearchResultTaxValues) => {
  GetViewBillApi(values).then(res => {
    this.setState({...this.state,
      finalPath: res.finalpath,
      propertySearchResultViewPopUpValues: values, 
      viewBillPopUpOpen: true,
     })
    //  window.location.href = (`http://${res.finalpath}`)
      })
  .catch(err => 
    // tslint:disable-next-line:no-console
    console.log(err));

}

public onHandlePayBillActionClick = (values: IPropertySearchResultTaxValues) => {
  this.setState({...this.state, 
    propertySearchPayBillValues: [values] ,
    propertySearchPayTaxTabValue: this.state.propertySearchPayTaxTabValue + 1,

   })
}

public PropertyNewSearchClick = () => {
  this.setState({...this.state, 
    Description: '',
    MandalId:0,
    MunciId: 0,
    OwnerName: '',
    TownId: 0,
    propertySearchPayTaxTabValue: this.state.propertySearchPayTaxTabValue - 1,
  })
}

public onHamdlePropertySearchResult= (event:any) => {
// tslint:disable-next-line:no-console
const searchInput = event.target.value;
const data = this.state.propertySearchResultTaxDetailsList.filter(
  (x: IPropertySearchResultTaxValues) =>
  searchInput !== ""
      ? this.documentNameIncludes(
        searchInput,
          x.AssessmentID.toString()
        ) ||
        this.documentNameIncludes(
          searchInput,
            x.OwnerName.toString()
          )
        || 
        this.documentNameIncludes(
          searchInput,
            x.Status.toString()
          )
      || 
      this.documentNameIncludes(
        searchInput,
          x.PropertyType.toString()
        )
        ||   this.documentNameIncludes(
          searchInput,
            x.TaxAmount.toString()
          )
     
      : x
);
this.setState({
  ...this.state,
  propertySearchResultTaxDetailsCount: data.length,
  searchInput
});
}
public handlePayTaxActionClick = () => {
  this.setState({...this.state, 
    propertySearchPayTaxTabValue : this.state.propertySearchPayTaxTabValue + 1
  })
}

public handleSelectUserNameChange = (event:any) => {
  this.setState({...this.state,selectUserName: event.target.value })
}

public onHandleMakePaymentSubmit = (values: IPaymentInfoProps) =>{
  this.setState({...this.state, 
    bookReceiptNumber: values.bookReceiptNumber,
    payableAmount: values.payableAmount,
    paymentMode: values.paymentMode,
    propertySearchPayTaxTabValue : this.state.propertySearchPayTaxTabValue + 1,
    selectUserName: values.selectUserName,

    
  })
}

public handleIsPayerOwnerChange = (event:any, name: string) => {

  if(event.target.checked) {
    this.setState({...this.state, 
      isPayerOwner: event.target.checked ,
      payerName:  this.state.propertySearchPayBillValues
      .map((y:IPropertySearchResultTaxValues) =>  y.OwnerName)[0],
      // tslint:disable-next-line:object-literal-sort-keys
      emailId:  this.state.propertySearchPayBillValues
      .map((y:IPropertySearchResultTaxValues) =>  y.EmailID)[0],
      mobileNumber: this.state.propertySearchPayBillValues
      .map((y:IPropertySearchResultTaxValues) =>  y.Mobile)[0],
      houseNoBuildingName:this.state.propertySearchPayBillValues
      .map((y:IPropertySearchResultTaxValues) =>  y.Address)[0]  ,
     
    
    })

  }
  else {
  this.setState({...this.state, 
    isPayerOwner: event.target.checked, 
    payerName:  '',
    // tslint:disable-next-line:object-literal-sort-keys
    emailId:  '',
    mobileNumber: '',
    houseNoBuildingName:'' ,
  })
}
}

public handleContinueClick = () => {
  this.setState({...this.state, 
    propertySearchPayTaxTabValue : this.state.propertySearchPayTaxTabValue + 1,

  })
}

public handlePayerInfoChange  =(event:any, name: string) => {
  this.setState({...this.state, [name]: event.target.value})
}

public handleConfirmationClick = (values: IConfirmationProps) => {
  GetConfirmationInsertTaxDetails(values).then(res => {
    this.setState({...this.state, successPopUp: true})
  }).catch(err => 
    // tslint:disable-next-line:no-console
    console.log(err)
    )
}

public handleSearchSessionReset= () => {
  this.setState({...this.state, 
    Description:'',
    MandalId: 0,
    MunciId: 0,
    OwnerName: '',
    TownId: 0
  })
}

      public PropertySearchPayTaxRender = () => {
        return (<PropertySearchPayTaxTabForm
        finalpath={this.state.finalPath}
        viewBillPopUpOpen={this.state.viewBillPopUpOpen}
        handleViewBillPopUpClose={this.onHandleClose}
          handleSearchSessionReset={this.handleSearchSessionReset}
        successPopUp={this.state.successPopUp}
        handlePopUpClose={this.onHandleClose}
        handleConfirmationClick={this.handleConfirmationClick}
        
          handlePayerInfoChange={this.handlePayerInfoChange}
          mobileNumber={this.state.mobileNumber}
          houseNoBuildingName={this.state.houseNoBuildingName}
          emailId={this.state.emailId}
          payerName={this.state.payerName}
          isPayerOwner={this.state.isPayerOwner}
          handleContinueClick={this.handleContinueClick}
          handleIsPayerOwnerChange={this.handleIsPayerOwnerChange}
        bookReceiptNumber={this.state.bookReceiptNumber}
          selectUserName={this.state.selectUserName}
          selectUserNameValues={this.state.selectUserNameValues}
          payableAmount={this.state.payableAmount}
          onHandleMakePaymentSubmit={this.onHandleMakePaymentSubmit}
          paymentMode={this.state.paymentMode}
          handleSelectUserNameChange={this.handleSelectUserNameChange}

        handlePayTaxActionClick={this.handlePayTaxActionClick}
          propertySearchPayBillValues={this.state.propertySearchPayBillValues} 
          handleMandalChange={this.handleMandalPropertyChange}
          OwnerName={this.state.OwnerName}
          Description={this.state.Description}
           MunciId={this.state.MunciId}
           MandalId={this.state.MandalId}
           TownId={this.state.TownId}
          selectDistrictValues={this.state.selectDistrictValues}
          handleSeachSessionSumbit={this.handleSearchSessionSubmit}
          selectMunciValues={this.state.selectMunciValues}
          selectMandalValues={this.state.selectMandalValues}
          selectTownValues={this.state.selectTownValues}
          handleDescriptionChange={this.handleDistrictIdChange}
          handleMuncipalityPropertyChange={this.handleMuncipalityPropertyChange}
          propertySearchPayTaxTabValue={this.state.propertySearchPayTaxTabValue} 
          onPropertySearchPayTaxTabChange={this.onPropertySearchPayTaxTabChange} 
          PropertyNewSearchClick={this.PropertyNewSearchClick}
          onHandleSearch={this.onHamdlePropertySearchResult}
          propertySearchResultViewPopUpValues={
            this.state.propertySearchResultViewPopUpValues
          }
          onHandlePayBillActionClick={this.onHandlePayBillActionClick}
          onHandleSearchResultViewActionClick={
            this.onHandleSearchResultViewActionClick
          }
          propertySearchResultTaxList={this.state.propertySearchResultTaxDetailsList}
          count={this.state.propertySearchResultTaxDetailsCount}
          page={this.state.page}
          rowsPerPage={this.state.rowsPerPage}
          onHandlePageChange={this.onHandlePageChange}
          onHandleChangeRowsPerPage={this.onHandleChangeRowsPerPage}
          searchInput={this.state.searchInput}
          open={this.state.open}
          dialogOpen={this.state.dialogOpen}
          popUpid={this.state.popUpid}
          onHandleClose={this.onHandleClose}
          
          />);
      }

      public DashboardState= () => {
        return (
          <div>
            <Switch>
              <Route
                exact={true}
                path="/page/dashboard/viewDetails/:id"
                render={this.tableComponent}
              />
              <Route
                exact={true}
                path="/page/dashboard/AllotedDetails/:id"
                render={this.tableAllotedComponent}
              />
    
              <Route path="/page/dashboard" render={this.renderDashboard} />
            </Switch>
          </div>
        );
      }

      public onHandleAllotedDetailsClick = (event: IAllotedDetailsStateValues) => {
        this.setState({
          ...this.state,
          changeAllotedValues: event,
          expandApplicationId: event.ApplicationId,
          open: !this.state.open,
          // tslint:disable-next-line:object-literal-sort-keys
          dialogExpandOpen: true
        });
      };

      public printDiv = (divId: string) => {
        // tslint:disable-next-line:no-console
        const base64 = document.getElementsByTagName("canvas")[0].toDataURL();
    
        const imagedata = atob(base64.split(",")[1]);
        // Use typed arrays to convert the binary data to a Blob
        const arraybuffer = new ArrayBuffer(imagedata.length);
        const view = new Uint8Array(arraybuffer);
        for (let i = 0; i < imagedata.length; i++) {
          // tslint:disable-next-line:no-bitwise
          view[i] = imagedata.charCodeAt(i) & 0xff;
        }
        try {
          // This is the recommended method:
          const blob = new Blob([arraybuffer], {
            type: "application/octet-stream"
          });
          const url = window.URL.createObjectURL(blob);
          location.href = url;
        } catch (e) {
          // The BlobBuilder API has been deprecated in favour of Blob, but older
          // browsers don't know about the Blob constructor
          // IE10 also supports BlobBuilder, but since the `Blob` constructor
          //  also works, there's no need to add `MSBlobBuilder`.
          // var bb = new (window.WebKitBlobBuilder || window.MozBlobBuilder)();
          // bb.append(arraybuffer);
          // var blob = bb.getBlob("application/octet-stream"); // <-- Here's the Blob
        }
      };

      public handleDashboardViewClick = (id: number) => {
        this.setState({
          ...this.state,
          TownshipId: id
        });
        getDashboardViewDetails(id)
          .then(res => {
            this.setState({
              ...this.state,
              count: res.aaData.length,
              selectedViewList: res.aaData
            });
            this.props.history.push(`/page/dashboard/viewDetails/${id}`);
          })
          .catch(err => err);
      };
      public handleOnClick = (id: number) => {
        this.setState({
          ...this.state,
          TownshipId: id
        });
        getAllocatedNameDetails(id)
          .then(res => {
            this.setState({
              ...this.state,
              count: res.aaData.length,
              selectedAllotedList: res.aaData
            });
            this.props.history.push(`/page/dashboard/AllotedDetails/${id}`);
          })
          .catch(err => err);
      };
      public onHandleDashboardSearch = (event: any) => {
        const searchInput = event.target.value;
        const data = this.state.selectedViewList.filter(
          (x: IViewDetailsStateValues) =>
            searchInput !== ""
              ? x.DistrictName.toLowerCase().includes(searchInput.toLowerCase()) ||
                x.MandalName.toLowerCase().includes(searchInput.toLowerCase()) ||
                x.VillageName.toLowerCase().includes(searchInput.toLowerCase()) ||
                // x.props.changeViewValues.PlotCode.toString().includes(
                //   props.searchInput
                // ) ||
                x.TotalLandSize.toString()
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                x.AvailableLandSize.toString()
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              : true
        );
        this.setState({
          ...this.state,
          count: data.length,
          searchInput
        });
      };
      public onHandleSearch1 = (event: any) => {
        const searchInput = event.target.value;
        const data = this.state.selectedAllotedList.filter(
          (x: IAllotedDetailsStateValues) =>
            searchInput !== ""
              ? x.ApplicationId.toLowerCase().includes(searchInput.toLowerCase()) ||
                x.OrganiztionName.toLowerCase().includes(
                  searchInput.toLowerCase()
                ) ||
                x.RequiredLand.toString()
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                x.AllotedLand.toString()
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                x.ApplicationCurrentStatus.toString()
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              : x
        );
        this.setState({
          ...this.state,
          count: data.length,
          searchInput
        });
      };
    

     

      public handlePTMSDashboardPendingItems = async(id: string) => {
        localStorage.setItem("requestIdStore", id);
        try {
          if (loader) {
            loader.style.display = "block";
          }
      const res = await GetAssessmentDetailsByID(id);
      const res1 = await getPropertyCategoryDropdown(res.rslt.CategoryOwnership);
      const res2 = await getPropertyDepartmentDropdown(res.rslt.CategoryOwnership);
      const res3 = await getBuildingClassificationDropDown(res.rslt.PropertyType,0);
      const res4 =await getBuildingClassificationDropDown(0,
        res.rslt.NewFloorDetails.map((y:any) => y.ClassificationOfBuilding)[0]);

         
         
            this.setState({ ...this.state ,
              ApartmentNameId:  res.rslt && res.rslt.ApartmentNameId,
              CategoryOwnershipId: res.rslt.CategoryOwnership,
              PropertyDepartmentId: res.rslt && res.rslt.PropertyDepartment,
              PropertyTypeId: res.rslt && res.rslt.PropertyType,
              selectClassificationValues: res3.NatureUsage,
              selectNatUsageValues:res4.NatureUsage,

              selectDepartmentValues: res2.data,
              selectPropertyValues: res1.data,
              // tslint:disable-next-line:object-literal-sort-keys
              OwnershipArray: res.rslt && res.rslt.NewOwnerDetails 
               && res.rslt.NewOwnerDetails.map((y:any, index: number) => 
               ({
                 AddClickCount: index,
                 AssessementID: y.AssessementID,
                GuardianRelation 	: this.state.GuardianRelation,
                OwnerName : y.OwnerName,
                id: index,
                selectGenderValues: this.state.selectGenderValues,
                selectGuardianValues:this.state.selectGuardianValues,
                // tslint:disable-next-line:object-literal-sort-keys
                Guardian: y.OwnerGuardianName,
                MobileNo: y.OwnerMobileNo,
                 EmailAddress	: y.OwnerEmail,
                 Gender: y.OwnerGender,
                 GuardianReg:y.OwnerGuardianRelation,
              })),
              District:res.rslt && res.rslt.District_str ,
              Corporation:res.rslt && res.rslt.CorpMunicipality_str,
              Mandal:res.rslt && res.rslt.Mandal_str,
              Village:res.rslt && res.rslt.Village_Str,
              TownShip:res.rslt && res.rslt.Township_str,
              Sector:res.rslt && res.rslt.Sector_str,
              Colony:res.rslt && res.rslt.Colony_str,
              Locality:res.rslt && res.rslt.LocalityID_str,
              ZoneNo:res.rslt && res.rslt.ZoneNo_str,
              WardNo:res.rslt && res.rslt.WardNo,
              Block:res.rslt && res.rslt.BlockNo_str,
              Street:res.rslt && res.rslt.Street_str,
              Enumerationblock:res.rslt && res.rslt.EnumerationBlock_str,
              PlotNo:res.rslt && res.rslt.PlotNo,
              ElectionWard:res.rslt && res.rslt.ElectionWard_str,
              DoorNo:res.rslt && res.rslt.DoorNo,
              Pincode:res.rslt && res.rslt.Pincode,
              // SurveyNumber: res.rslt && res.rslt.,
              // PattaNumber:res.rslt && res.rslt.,
              // VacantLandArea:res.rslt && res.rslt.,
              // CurrentMarketValue:res.rslt && res.rslt.,
              // RegisteredDocumentValue:res.rslt && res.rslt.,
              // EffectiveDate:res.rslt && res.rslt.,
              // LayoutPermitNumber:res.rslt && res.rslt.,
              // LayoutPermitDate: res.rslt && res.rslt.,
              reasonForCreation: res.rslt && res.rslt.ReasonCreation ,
              CertificateNumber: res.rslt && res.rslt.OccupancyCertificateNo,
              OccupancyCertificateDate: res.rslt && moment(res.rslt.OccupancyCertificateDate).format('YYYY-MM-DD') ,
              ExtentOfSite:  res.rslt && res.rslt.ExtentSite,
              EnumMasterID: res.rslt && res.rslt.FloorType,
              roofId: res.rslt && res.rslt.RoofType ,
              wallId: res.rslt && res.rslt.WallType,
              woodId: res.rslt && res.rslt.WoodType,
              aminityTypes:res.rslt && res.rslt.Amenities,
              FloorArray: res.rslt && res.rslt.NewFloorDetails && res.rslt.NewFloorDetails.lenght !== 0? 

              res.rslt.NewFloorDetails.map((y:any, index: number) => ({
                AddClickCount: index,
                id: index,
                // tslint:disable-next-line:object-literal-sort-keys
                FirmName : y.Firmname,
                OccupantName: y.Occupantname,
               selectClassificationValues: res3.NatureUsage,

               selectNatUsageValues: res4.NatureUsage,

               selectFloorValues: this.state.selectFloorValues,
               selectOccupancyValues:this.state.selectOccupancyValues,
               ConstructionDate: moment(y.ConstructionDate_str).format('YYYY-MM-DD'),     
                EffectiveFromDate	: moment(y.EffectiveFromDate_str).format('YYYY-MM-DD'),
                UnstructeredLand:y.UnStructuredland? 1 : 2,
                Length: y.Length,
                     Breadth: y.Breadth,
                     taxAmount:y.TaxAmount,
                PlinthArea: y.PlinthArea,
                BuildingPermissionNo: y.BuildingpermissionNo,
                BuildingPermissionDate: moment(y.BuildingPermissionDate).format('YYYY-MM-DD'),
                PlinthAreaInBuildingPlan: y.PlinthAreaInBuildingPlan,
                 FloorNumber: y.FloorNo,
                 BuildingClassification: y.ClassificationOfBuilding,
                 NatureOfUsage: y.NatureOfUsage,
                 Occupancy:y.Occupancy
              })) : [{
                AddClickCount: 0,
                id: 0,
                // tslint:disable-next-line:object-literal-sort-keys
                FirmName : '',
                OccupantName: "",
               selectClassificationValues: [],
               selectNatUsageValues: [],
               selectFloorValues: [],
               selectOccupancyValues:[],
               ConstructionDate: "",     
                EffectiveFromDate	: "",
                UnstructeredLand:0,
                Length: "",
                     Breadth: "",
                     taxAmount:0,
                PlinthArea: "",
                BuildingPermissionNo: "",
                BuildingPermissionDate: "",
                PlinthAreaInBuildingPlan: "",
                 FloorNumber: 0,
                 BuildingClassification: 0,
                 NatureOfUsage: 0,
                 Occupancy:0
              }] 
              ,
             // TotalTax:res.rslt && res.rslt.TotalTaxAmount,
              North:res.rslt && res.rslt.North,
              East:res.rslt && res.rslt.East,
              West:res.rslt && res.rslt.West,
              South: res.rslt && res.rslt.South,

            //  PropertyAssessmentDocumentTypeId: res.rslt && res.rslt.
           // selectFile:''
           NewPropertyDocumentTypeId: res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.DocumentType )[0],

           CertificateNo: res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.CertificateNo !== null ? y.CertificateNo : '' )[0],

           CertificateDate: res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.CertificateDate_str !== null ?
            moment(y.CertificateDate_str).format('YYYY-MM-DD') : '')[0],

           MROProceedingNumber:res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.MROProceedNo !== null ?  y.MROProceedNo :'' )[0],
           
           RegisteredDocumentNumber:res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.RegisteredDocNo !== null ? y.RegisteredDocNo : ''  )[0],

           RegisteredDocumentDate:res.rslt && res.rslt.NewDocumentTypes &&
            res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.RegisteredDocDate_str !== null ?  y.RegisteredDocDate_str :"" )[0],

           DeedNumber:res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.DeedNo !== null ? y.DeedNo : '' )[0],

           DeedDate:res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.DeedDate_str !== null ? y.DeedDate_str : '' )[0],

           DecreeNumber:res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.DecreeNo !== null ? y.DecreeNo : '' )[0],

           DecreeDate:res.rslt && res.rslt.NewDocumentTypes && 
           res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.Decreedate_str !== null ?   y.Decreedate_str: '')[0],

           CourtName:res.rslt && res.rslt.NewDocumentTypes &&
            res.rslt.NewDocumentTypes.map((y:INewDocumentTypeProps) => y.CourtName !== null? y.CourtName: '')[0],

            activeStep: 0,

            })

            if (loader) {
              loader.style.display = "none";
            }
          }
          catch(err) {
            // tslint:disable-next-line:no-console
            console.log(err);
            if (loader) {
              loader.style.display = "none";
            }
          }
            this.props.history.push(`/page/ptms/newpropertyregistration/${id}`);
         
      };
    
      public handleDashboardPropertyChangePendingItems = async(id: string) => {
        localStorage.setItem("requestIdStore", id);
try{
  if (loader) {
    loader.style.display = "block";
  }
      const res = await getPropertyChangeDetailsID(id);
        const res1 = await GetAssessmentDetailsByID(id);

        
             
            this.setState({ ...this.state ,
              Description: res.rslt.DistrictId_str.trim(),
              MandalId: res1.rslt && res1.rslt.Mandal_str,
              MunciId:res1.rslt && res1.rslt.CorpMunicipality_str,
              OwnerName : res1.rslt && res1.rslt.NewOwnerDetails 
              && res1.rslt.NewOwnerDetails.map((y:any) => y.OwnerName)[0],
             OwnerPhoneNumber: res1.rslt && res1.rslt.NewOwnerDetails 
             && res1.rslt.NewOwnerDetails.map((y:any) => 
             y.OwnerMobileNo)[0],
             TownId: res1.rslt && res1.rslt.Township_str,

             
            
            

            });

            if (loader) {
              loader.style.display = "none";
            }
          }
          catch(err){
            // tslint:disable-next-line:no-console
            console.log(err)
            if (loader) {
              loader.style.display = "none";
            }
          }
         
            this.props.history.push(`/page/ptms/propertychange/${id}`);
         
      };
    
      public handleDashboardPropertyTaxPendingItems = async(id: string) => {
        try {
          if (loader) {
            loader.style.display = "block";
          }

          const d = new Date()
          const currentDay = d.getDate();
          const currentMonth = d.getMonth() 

       const res1 = await GetPropertyConfigurationDetailsByID(id);
      const res2 = await GetBudgetYears(res1.rslt.DistrictName)

       const res4=await postPTMSDepartmentUserDropDownList()

     
            this.setState({ ...this.state,
              RequestId:id,
              // getTaxDetailsChange: true,
              propertyTaxCount:res1.rslt && res1.rslt.PropertyTaxConfigurationDetails !== null 
              && res1.rslt.PropertyTaxConfigurationDetails.length,
             
              ptmsSelectDepartmentList: res4.deptusersViewModelLst,

              BudgetId: res2.years && res2.years.map((x:IBudgetValues, index: number)=> 
              ({...x, 
                BudgetId: index + 1}))
              .filter((y:IBudgetValues) => y.BudgetYear ===res1.rslt.BudgetYear)
              .map((y:IBudgetValues) => y.BudgetId)[0], 
              DistrictNumber:res1.rslt &&  this.state.selectDistrictValues
              .filter((y:IDistrictValues) => y.DistrictName ===res1.rslt.DistrictName)
              .map((y:IDistrictValues) => y.DistrictNumber)[0],
            
              // tslint:disable-next-line:object-literal-sort-keys
              Description: res1.rslt.DistrictName,
              PropertyTypeId: res1.rslt && this.state.propertyTypeDropDownValues
              .filter((y:IPropertyValues) => y.PropertyTypeId === res1.rslt.PropertyTypeId)
              .map((y:IPropertyValues) => y.PropertyTypeId)[0],
              // dashboardPropertyTaxPendingItems: [...res1.rslt], 

              propertyTaxTableList : res1.rslt && res1.rslt.PropertyTaxConfigurationDetails !== null  
              && res1.rslt.PropertyTaxConfigurationDetails.map(
                (y:IPropertyTaxTableValues,index : number) => ({...y, 
                BudgetYear: y.BudgetYear,
                BuildingClassificationId: y.BuildingClassificationId ,
                BuildingClassificationType: y.BuildingClassificationType,
                CategoryOwnershipType: y.CategoryOwnershipType,
                CategoryOwnershipTypeId: y.CategoryOwnershipTypeId,
                FinancialYear: y.FinancialYear,
                NatureUsageId: y.NatureUsageId,
                NatureUsageType: y.NatureUsageType ,
                PropertyTaxConfigId: y.PropertyTaxConfigId,
                PropertyType: y.PropertyType ,
                PropertyTypeId: y.PropertyTypeId ,
                PropertyValue :y.PropertyValue ,
                Value: 1,
                 id: index + 1 ,
              
              })),
              selectBudgetValues: res2.years.map((x:IBudgetValues, index: number)=> 
              ({...x, 
                BudgetId: index + 1})), 

                FromDate: moment(new Date(res1.rslt.BudgetYear  , currentMonth,currentDay)).format('YYYY-MM-DD'),
                 ToDate:moment(new Date( res1.rslt.BudgetYear + 1, currentMonth,currentDay -1
                   )).format('YYYY-MM-DD'), 
            })


            if (loader != null) {
              loader.style.display = "none";
            }            
            

          }
        catch(err) {
          if (loader) {
            loader.style.display = "none";
          }
        }
        this.props.history.push(`/page/ptms/propertytaxconfiguration/requestid/${id}`);

         
      };
      public onSubmit = (evt: any) =>
        // tslint:disable-next-line:no-console
        console.log(evt);
    
      // public onHandleDashboardLink = (event: any) => {
      //   postDashboardLinkAppilcationId(event.target.textContent)
      //     .then(res => {
      //       this.setState({ ...this.state, dashboardLinkData: res.applicationDetailsViewModelLst });
      //     })
      //     .catch(err => console.log(err));
    
      // };

      public tableComponent = () => {
        return (
          <div className="innerpage-container">
            <div className="reports-card">
              <div className="bottom-save-btn">
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => {
                    this.props.history.push("/page/dashboard");
                  }}
                >
                  BACK
                </Button>
              </div>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h4"
                    className="grap-heading"
                  >
                    <img src="/images/table-icon.png" />
                    Lands in Township {this.state.TownshipId}
                  </Typography>
                </CardContent>
                <ViewDetailTableForm
                  onHandleDashboardSearch={this.onHandleDashboardSearch}
                  page={this.state.page}
                  rowsPerPage={this.state.rowsPerPage}
                  count={this.state.count}
                  searchInput={this.state.searchInput}
                  onHandlePageChange={this.handleChangePage}
                  onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                  changeViewValues={this.state.selectedViewList}
                />
              </Card>
            </div>
          </div>
        );
      };
      public tableAllotedComponent = () => {
        return (
          <div className="innerpage-container">
            <div className="reports-card">
              <div className="bottom-save-btn">
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => {
                    this.props.history.push("/page/dashboard");
                  }}
                >
                  x
                </Button>
              </div>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h4"
                    className="grap-heading"
                  >
                    <img src="/images/table-icon.png" />
                    Allocated/In-Progress List in undefined
                  </Typography>
                </CardContent>
                <AllotedDetailTableForm
                  handleClick={this.onHandleAllotedDetailsClick}
                  onHandleSearch1={this.onHandleSearch1}
                  page={this.state.page}
                  rowsPerPage={this.state.rowsPerPage}
                  count={this.state.count}
                  searchInput={this.state.searchInput}
                  onHandlePageChange={this.handleChangePage}
                  onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                  changeAllotedValues={this.state.changeAllotedValues}
                  selectedAllotedList={this.state.selectedAllotedList}
                  expandApplicationId={this.state.expandApplicationId}
                  open={this.state.open}
                  dialogExpandOpen={this.state.dialogExpandOpen}
                  onHandleClose={this.onHandleClose}
                />
              </Card>
            </div>
          </div>
        );
      };
      public renderDashboard = () => {
        return (
          <div>
            <DashboardForm
              handleDashboardPropertyChangePendingItems={
                this.handleDashboardPropertyChangePendingItems
              }
              handleDashboardPropertyTaxPendingItems={
                this.handleDashboardPropertyTaxPendingItems
              }
              handlePTMSDashboardPendingItems={this.handlePTMSDashboardPendingItems}
              dashboardPropertyChangePendingItems={
                this.state.dashboardPropertyChangePendingItems
              }
              dashboardPropertyTaxPendingItems={
                this.state.dashboardPropertyTaxPendingItems
              }
              DashboardPendingItems={this.state.DashboardPendingItems}
              TotalDashboardPieChartCount={this.state.TotalPieChartCount}
              dashboardApprovalData={this.state.dashboardApprovalData}
              dashboardLinkData={this.state.dashboardLinkData}
              dashboardData={this.state.dashboardData}
              // onHandleDashboardLink={this.onHandleDashboardLink}
              // TotalPieChartCount={this.state.TotalPieChartCount}
              dashboardPieChartData={this.state.dashboardPieChartData}
              handleClick={this.handleDashboardViewClick}
              handleOnClick={this.handleOnClick}
              printDiv={this.printDiv}
            />
          </div>
        );
      };
      
  public render() {
  
    return (
      <div>
        <div>
          <Menu
          menuExpanded3={this.state.menuExp3}
          onHandleMenuPanel3Change={this.onHandleMenuPanel3Change}
          menuExpanded2={this.state.menuExpanded2}
          menuExpanded={this.state.menuExpanded}
          onHandleMenuPanelChange={this.onHandleMenuPanelChange}
          onHandleMenuPanel2Change={this.onHandleMenuPanel2Change}
          LAS={this.state.LAS}
          PTMS={this.state.PTMS}
          UserManagement={this.state.UserManagement}
          Masters={this.state.Masters}
            Photo1={this.state.Photo1}
            DisplayName={this.state.DisplayName}
            ProfileDetails={this.state.myProfileValues}
            handleLogOut={this.handleLogOut}
            notifications={this.state.notifications}
            open={this.state.open1}
            handleClick={this.handleMenuClick}
            handleClose={this.handleClose}
            menuItems={this.state.menuItems}
            
            roleId={this.state.roleId}
            handleSubMenuClick={this.handleSubMenuClick}
            
          />
        </div>
        <div>
         
          <Switch>
            <this.PrivateRoute
              state1={this.state}
              path="/page/dashboard"
              component={this.DashboardState}
            />

             <this.PrivateRoute
            exact={true}
            path="/page/dashboard/viewDetails/:id"
            render={this.tableComponent}
          />
          <this.PrivateRoute
            exact={true}
            path="/page/dashboard/AllotedDetails/:id"
            render={this.tableAllotedComponent}
          />

          <this.PrivateRoute path="/page/dashboard" render={this.renderDashboard} />
              {/* <this.PrivateRoute
              exact={true}
              path="/page/resetpassword"
              component={this.ResetPasswordState}
            /> */}
              <this.PrivateRoute
              state1={this.state}
              path='/page/tabsform/:id'
              component={this.RenderApplicationState}
            />
     
            {/* <this.PrivateRoute
              state1={this.state}
              path='/page/tabsform/:id'
              component={ApplicationDetails}
            /> */}
          
            <this.PrivateRoute path="/page/notefiles" component={NoteFiles} state1={this.state}/>
            
            <this.PrivateRoute  state1={this.state} path="/page/application" component={Tree} />

            <this.PrivateRoute  state1={this.state}
              path="/page/masters/projectRules"
              component={ProjectRulesTypeMasterState}
            />
          <this.PrivateRoute  state1={this.state}
              path="/page/ptmsmasters/aminities"
              component={this.AminitiesState}
            />

            <this.PrivateRoute  state1={this.state}
              exact={true}
              path="/page/landAllocation/applicationsearch"
              component={ApplicationSearchState}
            />

            <this.PrivateRoute  state1={this.state}
              path="/page/masters/agreementTypeMaster"
              component={AgreementTypeMasterState}
            />

            <this.PrivateRoute  state1={this.state}
              path="/page/masters/roleTypeMaster"
              component={this.RoleTypeMasterState}
            />

            <this.PrivateRoute  state1={this.state}
              path="/page/masters/rejectionRoles"
              component={RejectionTypeMasterState}
            />

            <this.PrivateRoute  state1={this.state}
              exact={true}
              path="/page/landAllocation/submittedApplication"
              component={ApplicationSubmitState}
            />


            {this.state.townshipWithId ? (
              <this.PrivateRoute state1={this.state}
                exact={true}
                path="/page/landAllocation/AllocationForm/proposalForm/:id"
                component={this.ProposalFormStateComponent}
              />
            ) : (
             
              <this.PrivateRoute state1={this.state}
                exact={true}
                path="/page/landAllocation/AllocationForm/proposalForm"
                component={this.TownshipForm}
              />
             
            )}
            {this.state.draftWithId ? (
              <this.PrivateRoute
                exact={true}
                path="/page/landAllocation/draftApplication/proposalForm/:id"
                component={this.ProposalFormStateComponentId} state1={this.state}
              />
            ) : (
              
              <this.PrivateRoute state1={this.state}
                exact={true}
                path="/page/landAllocation/draftApplication/proposalForm/:id"
                component={this.DraftTownShipForm}
              />
             
            )}

            <this.PrivateRoute state1={this.state}
              path="/page/landAllocation/AllocationForm"
              component={this.AllocationForm}
            />

          <this.PrivateRoute state1={this.state}
              path="/page/ptms/propertychange"
              component={this.PropertyChange}
            />
              <this.PrivateRoute state1={this.state}
              path="/page/ptms/propertychange/:id"
              component={this.PropertyChange}
            />
          
          <this.PrivateRoute state1={this.state}
              path="/page/ptms/propertytaxconfiguration"
              component={this.PropertyTaxConfiguration}
            />
             
          <this.PrivateRoute state1={this.state}
              path="/page/ptms/propertytaxconfiguration/requestid/:id"
              component={this.PropertyTaxConfiguration}
            />
              <this.PrivateRoute state1={this.state}
              path="/page/ptms/submitdraftassessments"
              component={this.SubmitDraftAssessmentsRender}
            />
             <this.PrivateRoute state1={this.state}
              path="/page/ptms/propertysearchpaytax"
              component={this.PropertySearchPayTaxRender}
            />

            <this.PrivateRoute state1={this.state}
              path="/page/landAllocation/draftApplication"
              component={this.draftApplicationTableForm}
            />

             <this.PrivateRoute state1={this.state}
              path="/page/ptms/newpropertyregistration"
              component={this.Registration}
            />
             <this.PrivateRoute state1={this.state}
              path="/page/ptms/newpropertyregistration/:id"
              component={this.Registration}
            />
             <this.PrivateRoute state1={this.state}
              path="/page/ptms/newpropertyregistration/:id"
              component={this.Registration}
            />

            <this.PrivateRoute state1={this.state}
              path="/page/userManagement/allUsers"
              component={AllUsersRoleState}
            />
        
            <this.PrivateRoute state1={this.state}
              path="/page/myProfile"
              component={this.MyProfileForm}
            />
         
            <this.PrivateRoute 
            state1={this.state}
              path="/page/landAllocationForm"
              component={LandAllocationForm}
            />
         
            <this.PrivateRoute state1={this.state}
              path="/page/misReports/capitalCityLandSummary"
              component={CapitalCityLandState}
            />
        
            <this.PrivateRoute state1={this.state}
              path="/page/uploadDocument"
              component={UploadDocumentForm}
            />
         
            <this.PrivateRoute state1={this.state}
              path="/page/assetTabForm"
              component={AssetTabDetailsState}
            />

            <this.PrivateRoute state1={this.state}
              path="/page/assetDashboard"
              component={AssetDashboardState}
            />

            <this.PrivateRoute state1={this.state}
              path="/page/misReports/loginAuditTrail"
              component={LoginAuditTrailState}
            />
          
            <this.PrivateRoute state1={this.state} path="/page/assets" component={AssetTaskForm} />

            <this.PrivateRoute state1={this.state}
              path="/page/assetTree"
              component={AssetTreeState}
            />

            <this.PrivateRoute  state1={this.state}
              path="/page/misReports/themeCityWiseApproval"
              component={ThemeCityApprovalState}
            />
         
            <this.PrivateRoute
                state1={this.state}
              path="/page/masters/DocumentTypeMaster"
              component={DocumentTypeMasterState}
            />
          <this.PrivateRoute
              state1={this.state}
              path="/page/ptmsmasters/propertydepartmentmaster"
              component={this.PropertyDepartmentMasterRender}
            />
              <this.PrivateRoute
              state1={this.state}
              path="/page/ptmsmasters/buildingclassification"
              component={this.BuildingClassificationMasterRender}
            />
             
         <this.PrivateRoute
              state1={this.state}
              path="/page/ptmsmasters/natureusage"
              component={this.NatureUsageMasterRender}
            />
         
            <this.PrivateRoute
              state1={this.state}
              path="/page/masters/unitConversions"
              component={UnitConversionTypeMasterState}
            />
          <this.PrivateRoute
              state1={this.state}
              path="/page/ptmsmasters/category"
              component={this.CategoryTypeMasterState}
            />
        
            <this.PrivateRoute
              state1={this.state}
              path="/page/userManagement/bulkPasswordReset"
              component={BulkPasswordState}
            />

            <this.PrivateRoute
                state1={this.state}
              path="/page/misReports/themeCitywiseRevenueReport"
              component={ThemeCityReportState}
            />

            <this.PrivateRoute
              state1={this.state}
              path="/page/userManagement/changeUserRoleForm"
              component={ChangeUserRoleState}
            />
          
            <this.PrivateRoute
              state1={this.state}
              path="/page/masters/landAreaUnits"
              component={LandAreaTypeMasterState}
            />
        
        <this.PrivateRoute
              state1={this.state}
              path="/page/ptmsmasters/propertytypemaster"
              component={this.PropertyForm}
            />

            <this.PrivateRoute
                state1={this.state}
              path="/page/misReports/EmailSentReport"
              component={EmailSentReportState}
            />
           
            <this.PrivateRoute
                state1={this.state}
              path="/page/misReports/EmailFailReport"
              component={EmailFailReportState}
            />
         
            <this.PrivateRoute
              state1={this.state}
              path="/page/userManagement/createNewUserForm"
              component={CreateNewUserState}
            />
       
            <this.PrivateRoute
                state1={this.state}
              path="/page/landAllocation/approvedApplications"
              component={ApprovedApplicationState}
            />
          
            <this.PrivateRoute
                state1={this.state}
              path="/page/masters/emailTemplate"
              component={EmailTemplateState}
            />
           
            <this.PrivateRoute
              state1={this.state}
              path="/page/masters/documentMapping"
              component={this.DocumentMappingStateForm}
            />
         
            <this.PrivateRoute
                state1={this.state}
              path="/page/masters/AllocationTypeMaster"
              component={AllocationTypeMasterState}
            />
       
            <this.PrivateRoute
                state1={this.state}
              path="/page/workflowConfiguration/workFlowUser"
              component={WorkFlowUserMappingState}
            />

            <this.PrivateRoute
              state1={this.state}
              path="/page/workflowConfiguration/workflow"
              component={WorkFlowMappingState}
            />
        
            <this.PrivateRoute
              state1={this.state}
              path="/page/workflowConfiguration/workFlowActivity"
              component={WorkFlowActivityState}
            />

            <this.PrivateRoute
              state1={this.state}
              path="/page/masters/privilegesMaster"
              component={this.PrivillegesForm}
            />

            <this.PrivateRoute path="/page/masters/editor" component={Editor}  state1={this.state} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default HomePage;
