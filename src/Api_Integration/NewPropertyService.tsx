import {
  IProcessFeeProps,
  IPropertyChange,
  IpropertyDetails,
  IPropertyDetailsProps,
  IPropertyDetailsStateProps
} from "src/DefaultLayout/HomePage";
import { url } from "./Config";
import { httpPost } from "./MyProfileService";
import { httpGetWithUserIdParam } from "./PropertyDepartmentMasterService";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
let RoleId: any;
if (item) {
  user = JSON.parse(item);
  RoleId = user !== null || user !== undefined ? user.model.RoleId : 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

export const getAgreementTypeValues = (
  AllocationId: number,
  AllocationSubTypeId?: number
) => {
  return fetch(
    `${url}LASProcessAPI/GetAgreementTypes
    `,
    {
      body: JSON.stringify({
        AllocationSubTypeId,
        AllocationTypeId: AllocationId
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getCategoryOwnershipDropdown = () => {
  return fetch(
    `${url}AssessmentAPI/GetCategoryOwnershipDetails?UserId=${UserId}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },

      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getPropertyCategoryDropdown = (CategoryOwnershipId: number) => {
  return fetch(
    `${url}AssessmentAPI/GetPropertyTypeByCatgId?CategoryOwnershipId=${CategoryOwnershipId}
    `,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getPropertyDepartmentDropdown = (CategoryOwnershipId: number) => {
  return fetch(
    `${url}AssessmentAPI/GetPropertyDepartmentByCategoryId?CategoryOwnershipId=${CategoryOwnershipId}
      `,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getapartmentDropdown = () => {
  return fetch(
    `${url}AssessmentAPI/GetApartmentNameDetails
        `,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getGenderDropDown = () => {
  return fetch(
    `${url}AssessmentAPI/GetEnumMasters?UserId=${UserId}&RoleId=${RoleId}
          `,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

////// Upload Docs
export const GetFiles = (file: any, DocumentType: number, Photo: string) => {
  const body = JSON.stringify({
    DocumentType,
    FileName: file.name,
    Photo,
    UserId,
    lastModified: file.lastModified,
    size: file.size,
    type: file.type
  });
  return httpPost("AssessmentAPI/GetFiles", body);
};

// dropdown-document-type
export const getLMSDocumentTypes = () => {
  return httpGetWithUserIdParam("AssessmentAPI/getLMSDocumentTypes");
};

///// Process Fee
// forward To DropDown
export const GetDepartmentandusers2forward = (ApplicationId: string) => {
  return fetch(
    `${url}MastersAPI/GetDepartmentandusers2forward?ApplicationId=${ApplicationId}&UserId=${UserId}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// Submit
export const InsertNewAssessment = (
  values: IProcessFeeProps,
  StatusID: number
) => {
  const body = JSON.stringify({
    ApartmentNameId: values.ApartmentNameId,
    AttachedBathroom: "",
    BlockNo: values.Block,
    BlockNo_str: values.Block,
    CategoryOwnership: values.CategoryOwnershipId,
    Colony: values.Colony,
    Colony_str: values.Colony,
    CorpMunicipality: values.Corporation,
    CorpMunicipality_str: values.Corporation,
    District: values.District,
    District_str: values.District,
    DoorNo: values.DoorNo,
    ElectionWard: values.ElectionWard,
    ElectionWard_str: values.ElectionWard,
    Electricity: "",
    EnumerationBlock: values.Enumerationblock,
    EnumerationBlock_str: values.Enumerationblock,
    ExtentSite: values.ExtentOfSite,
    IsFreeFlow: true,
    LocalityID_str: values.Locality,
    LocalityId: values.Locality,
    Mandal: values.Mandal,
    Mandal_str: values.Mandal,
    NextUserId: values.UserId,
    OccupancyCertificateDate: values.OccupancyCertificateDate,
    OccupancyCertificateNo: values.CertificateNumber,
    Pincode: values.Pincode,
    PlotNo: values.PlotNo,
    PlotNo_str: values.PlotNo,
    PropertyDepartment: values.PropertyDepartmentName,
    PropertyType: values.PropertyTypeId,
    ReasonCreation: values.reasonForCreation,
    RequestId: values.RequestId,
    Sector: values.Sector,
    Sector_str: values.Sector,
    Street: values.Street,
    Street_str: values.Street,
    Toilets: "",
    Township: values.TownShip,
    Township_str: values.TownShip,
    Uploadedfiles: values.selectFile,
    Village_str: values.Village,
    WardNo: values.WardNo,
    WardNo_str: values.WardNo,
    WaterTap: "",
    ZoneId: values.ZoneNo,
    ZoneNo_str: values.ZoneNo,
    lift: "",
    // tslint:disable-next-line:object-literal-sort-keys
    WaterHarvesting: "",
    FloorType: values.EnumMasterID,
    RoofType: values.roofId,
    WallType: values.wallId,
    WoodType: values.woodId,
    North: values.North,
    South: values.South,
    West: values.West,
    East: values.East,
    DocumentType: values.NewPropertyDocumentTypeId,
    CertificateNo: values.CertificateNo,
    CertificateDate: values.CertificateDate,
    MROProceedingNo: values.MROProceedingNumber,
    MROProceeddate: "",
    DeedNo: values.DeedNumber,
    DeedDate: values.DeedDate,
    DecreeNo: values.DecreeNumber,
    DecreeDate: values.DecreeDate,
    RegisteredDocNo: values.RegisteredDocumentNumber,
    RegisteredDocDate: values.RegisteredDocumentDate,
    CourtName: values.CourtName,
    SaveType: "",
    StatusID,
    NewOwnerDetails: values.OwnershipArray.map(y => ({
      EmailAddress: y.EmailAddress,
      Gender: y.Gender,
      Guardian: y.Guardian,
      GuardianReg: y.GuardianReg,
      MobileNo: y.MobileNo,
      OwnerName: y.OwnerName
    })),
    NewFloorDetails: values.FloorArray.map(y => ({
      Breadth: y.Breadth,
      BuildingPermissionDate: y.BuildingPermissionDate,
      BuildingpermissionNo: y.BuildingPermissionNo,
      ClassificationOfBuilding: y.BuildingClassification,
      ConstructionDate: y.ConstructionDate,
      EffectiveFromDate: y.EffectiveFromDate,
      Firmname: y.FirmName,
      FloorNo: y.FloorNumber,
      Length: y.Length,
      NatureOfUsage: y.NatureOfUsage,
      Occupancy: y.Occupancy,
      Occupantname: y.OccupantName,
      PlinthArea: y.PlinthArea,
      PlinthAreaInBuildingPlan: y.PlinthAreaInBuildingPlan,
      TaxAmount: y.taxAmount,
      UnStructuredland: y.UnstructeredLand
    })),
    NewVacantLand: values.VacantLandArea,
    Amenities: values.aminityTypes
  });
  return httpPost("AssessmentAPI/InsertNewAssessment", body);
};
export const InsertNewAssessmentInDraft = (values: IProcessFeeProps) => {
  const body = JSON.stringify({
    ApartmentNameId: values.ApartmentNameId,
    AttachedBathroom: "",
    BlockNo: values.Block,
    BlockNo_str: values.Block,
    CategoryOwnership: values.CategoryOwnershipId,
    Colony: values.Colony,
    Colony_str: values.Colony,
    CorpMunicipality: values.Corporation,
    CorpMunicipality_str: values.Corporation,
    District: values.District,
    District_str: values.District,
    DoorNo: values.DoorNo,
    ElectionWard: values.ElectionWard,
    ElectionWard_str: values.ElectionWard,
    Electricity: "",
    EnumerationBlock: values.Enumerationblock,
    EnumerationBlock_str: values.Enumerationblock,
    ExtentSite: values.ExtentOfSite,
    IsFreeFlow: true,
    LocalityID_str: values.Locality,
    LocalityId: values.Locality,
    Mandal: values.Mandal,
    Mandal_str: values.Mandal,
    NextUserId: values.UserId,
    OccupancyCertificateDate: values.OccupancyCertificateDate,
    OccupancyCertificateNo: values.CertificateNumber,
    Pincode: values.Pincode,
    PlotNo: values.PlotNo,
    PlotNo_str: values.PlotNo,
    PropertyDepartment: values.PropertyDepartmentName,
    PropertyType: values.PropertyTypeId,
    ReasonCreation: values.reasonForCreation,
    RequestId: values.RequestId,
    Sector: values.Sector,
    Sector_str: values.Sector,
    Street: values.Street,
    Street_str: values.Street,
    Toilets: "",
    Township: values.TownShip,
    Township_str: values.TownShip,
    Uploadedfiles: values.selectFile,
    Village_str: values.Village,
    WardNo: values.WardNo,
    WardNo_str: values.WardNo,
    WaterTap: "",
    ZoneId: values.ZoneNo,
    ZoneNo_str: values.ZoneNo,
    lift: "",
    // tslint:disable-next-line:object-literal-sort-keys
    WaterHarvesting: "",
    FloorType: values.EnumMasterID,
    RoofType: values.roofId,
    WallType: values.wallId,
    WoodType: values.woodId,
    North: values.North,
    South: values.South,
    West: values.West,
    East: values.East,
    DocumentType: values.NewPropertyDocumentTypeId,
    CertificateNo: values.CertificateNo,
    CertificateDate: values.CertificateDate,
    MROProceedingNo: values.MROProceedingNumber,
    MROProceeddate: "",
    DeedNo: values.DeedNumber,
    DeedDate: values.DeedDate,
    DecreeNo: values.DecreeNumber,
    DecreeDate: values.DecreeDate,
    RegisteredDocNo: values.RegisteredDocumentNumber,
    RegisteredDocDate: values.RegisteredDocumentDate,
    CourtName: values.CourtName,
    SaveType: "",
    StatusID: 0,
    NewOwnerDetails: values.OwnershipArray.map(y => ({
      EmailAddress: y.EmailAddress,
      Gender: y.Gender,
      Guardian: y.Guardian,
      GuardianReg: y.GuardianReg,
      MobileNo: y.MobileNo,
      OwnerName: y.OwnerName
    })),
    NewFloorDetails: values.FloorArray.map(y => ({
      Breadth: y.Breadth,
      BuildingPermissionDate: y.BuildingPermissionDate,
      BuildingpermissionNo: y.BuildingPermissionNo,
      ClassificationOfBuilding: y.BuildingClassification,
      ConstructionDate: y.ConstructionDate,
      EffectiveFromDate: y.EffectiveFromDate,
      Firmname: y.FirmName,
      FloorNo: y.FloorNumber,
      Length: y.Length,
      NatureOfUsage: y.NatureOfUsage,
      Occupancy: y.Occupancy,
      Occupantname: y.OccupantName,
      PlinthArea: y.PlinthArea,
      PlinthAreaInBuildingPlan: y.PlinthAreaInBuildingPlan,
      TaxAmount: y.taxAmount,
      UnStructuredland: y.UnstructeredLand
    })),
    NewVacantLand: values.VacantLandArea,
    Amenities: values.aminityTypes
  });
  return httpPost("AssessmentAPI/InsertNewAssessment", body);
};

export const getAminityDropDown = () => {
  return fetch(
    `${url}AssessmentAPI/GetAmenitiesDetails
          `,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getBuildingClassificationDropDown = (
  Proptype: number,
  BuildingClassificationId: number
) => {
  return fetch(
    `${url}AssessmentAPI/GetEnumMastersbyEnumType_Proptype?Proptype=${Proptype}&BuildingClassificationId=${BuildingClassificationId}&UserId=${UserId}
          `,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getDistrictDropDown = () => {
  return fetch(
    `${url}AssessmentAPI/GetDistrictDetails?UserId=${UserId}&RoleId=${RoleId}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getMunciDropDown = (distName: string) => {
  return fetch(
    `${url}AssessmentAPI/GetCorp_Muncipal_Details?distName=${distName}&UserId=${UserId}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getMandalPropertyDropDown = (mncpl: any) => {
  return fetch(
    `${url}AssessmentAPI/GetMandalDetails?mncpl=${mncpl}&UserId=${UserId}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getTownDropDown = (mandal: any) => {
  return fetch(
    `${url}AssessmentAPI/GetTownshipDetails?mandal=${mandal}&UserId=${UserId}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// on Property Change Search
export const PropertyOnSearch = (
  props: IPropertyChange,
  DistrictName: string,
  MandalName: string,
  MuncipalCorporation: string,
  TownShipName: string
) => {
  const body = JSON.stringify({
    DistrictName,
    MandalName,
    Muncipal_Corporation: MuncipalCorporation,
    OwnerName: props.OwnerName,
    OwnerPhoneNo: props.OwnerPhoneNumber,
    TownShipName
  });
  return httpPost("AssessmentAPI/PropertySearch_PropertyChange", body);
};

export const getFloorDetails = (AssessmentID: any) => {
  return fetch(
    `${url}AssessmentAPI/get_FloorDetails?AssessmentID=${AssessmentID}&UserId=${UserId}
    `,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// PropertyChange-draft
export const InsertEditPropertyChangeInDraft = (
  values: IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps
) => {
  const body = JSON.stringify({
    AssessmentID: values.selectedValue,
    CategoryOfOwnerShipID: values.CategoryOwnershipId,
    DistrictId_str: values.Description,
    IsEdit: false,
    IsFreeFlow: true,
    ProcessingFee: values.ProcessingFee,
    PropertyType: values.propertyId,
    RequestId: values.RequestId,
    StatusID: 1,
    TaxYear: values.TotalTax,
    TotalTaxAmount: values.TotalTaxAmount,
    // tslint:disable-next-line:object-literal-sort-keys
    NewFloorDetails: values.getFloorDetailValues.map((FloorDetails: any) => ({
      Breadth: FloorDetails.Breadth,
      BuildingPermissionDate: FloorDetails.BuildingPermissionDate,
      BuildingpermissionNo: FloorDetails.BuildingpermissionNo,
      ClassificationOfBuilding: FloorDetails.ClassificationOfBuilding,
      ConstructionDate: FloorDetails.ConstructionDate,
      EffectiveFromDate: FloorDetails.EffectiveFromDate,
      Firmname: FloorDetails.Firmname,
      FloorNo: FloorDetails.FloorNo,
      Length: FloorDetails.Length,
      NatureOfUsage: FloorDetails.NatureOfUsage,
      Occupancy: FloorDetails.Occupancy,
      Occupantname: FloorDetails.Occupantname,
      PlinthArea: FloorDetails.PlinthArea,
      PlinthAreaInBuildingPlan: FloorDetails.PlinthAreaInBuildingPlan,

      TaxAmount: FloorDetails.TaxAmount,
      UnStructuredland: FloorDetails.UnStructuredland
    })),
    NextUserId: values.selectDepartmentId
  });
  return fetch(
    `${url}AssessmentAPI/Insert_Edit_PropertyChange
    `,
    {
      body,
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// PropertyChange-Submit
export const InsertEditPropertyChangeSubmit = (
  values: IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps
) => {
  const body = JSON.stringify({
    AssessmentID: values.selectedValue,
    CategoryOfOwnerShipID: values.CategoryOwnershipId,
    DistrictId_str: values.Description,
    IsEdit: false,
    IsFreeFlow: true,
    ProcessingFee: values.ProcessingFee,
    PropertyType: values.propertyId,
    RequestId: values.RequestId,
    StatusID: 2,
    TaxYear: values.TotalTax,
    TotalTaxAmount: values.TotalTaxAmount,
    // tslint:disable-next-line:object-literal-sort-keys
    NewFloorDetails: values.getFloorDetailValues.map((FloorDetails: any) => ({
      Breadth: FloorDetails.Breadth,
      BuildingPermissionDate: FloorDetails.BuildingPermissionDate,
      BuildingpermissionNo: FloorDetails.BuildingpermissionNo,
      ClassificationOfBuilding: FloorDetails.ClassificationOfBuilding,
      ConstructionDate: FloorDetails.ConstructionDate,
      EffectiveFromDate: FloorDetails.EffectiveFromDate,
      Firmname: FloorDetails.Firmname,
      FloorNo: FloorDetails.FloorNo,
      Length: FloorDetails.Length,
      NatureOfUsage: FloorDetails.NatureOfUsage,
      Occupancy: FloorDetails.Occupancy,
      Occupantname: FloorDetails.Occupantname,
      PlinthArea: FloorDetails.PlinthArea,
      PlinthAreaInBuildingPlan: FloorDetails.PlinthAreaInBuildingPlan,

      TaxAmount: FloorDetails.TaxAmount,
      UnStructuredland: FloorDetails.UnStructuredland
    })),
    NextUserId: values.selectDepartmentId
  });
  return fetch(
    `${url}AssessmentAPI/Insert_Edit_PropertyChange
    `,
    {
      body,
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
