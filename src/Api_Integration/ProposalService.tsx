// import * as moment from "moment";
import { IApplicationSearchStateValues } from "../Container/ApplicationSearchState";

import {
  IAuthorisedProps,
  IAuthorizedPersonValues,
  IChangeValues,
  IConditionValueProps,
  ICountryValues,
  ICreateProposalProps,
  IDetailsFromMap,
  // IDocumentPropValues,

  // tslint:disable-next-line:ordered-imports
  IDocumentPropValues,
  IGoValues,
  ILandallocationFormStatevalues,
  ILandAllocationValues,
  ILeaseTenureProps,
  ILeaseValues,
  IMileStoneDetailsProps,
  // IMileStoneValues,
  IMileStoneDetailsStateValues,
  // IPhotoIdTypeValues,
  IMilestoneDropDownProps,
  IMileStoneDropDownValues,
  IMileStoneValues,
  IPhotoIdTypeProps,
  IProjectRuleTypeProps,
  IProjectValuesProps,
  IProposalTabStateValues,
  IRelationTypeProps,
  IRuleTypeValuesProps,
  // ITownshipValues,
  ISelectAgrementTypeProps,
  // IUnitValues,
  ISelectAllocationProps,
  ISelectCountryProps,
  ISelectLandAllocationProps,
  ISelectStateProps,
  ISelectThemeCityProps,
  ISelectTypeOfAllocationProps,
  ISourceValueProps,
  IStateValues,
  ITownshipValues,
  IUnitProps,
  IUploadDocumentValues,
  IWitnessDetailsProps,
  IWitnessDetailsStateValues,
  IwitnessValues
} from "../DefaultLayout/HomePage";
// import { ISelectStateProps } from "../Container/ProposalFormState";
// import { ICountryValues } from "../Container/ProposalFormState";
// import {
//   IAuthorizedPersonValues
//   // IProposalTabStateValues,
//   // IwitnessValues
// } from "../Container/ProposalFormState";
import { url } from "./Config";
// import { IProposalTabStateValues } from "../Container/ProposalFormState";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

//  ?AllocationTypeId=${AllocationId}&AllocationSubTypeId=${AllocationSubTypeId}
// fetch call for Agreement type of Organisation Info Form
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
        // Accept: "application/json",
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

// fetch call for themeCityValues of LAndAllocationForm

export const getCityTypeValues = () => {
  return fetch(`${url}LASProcessAPI/GetThemeCityTypes`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getTownShipValues = () => {
  return fetch(`${url}LASProcessAPI/GetTownshipsList`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// fetch call for Country's of Org Info form
export const getCountryValues = () => {
  return fetch(`${url}LASProcessAPI/GetCountriesList`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// fetch call for state based on Country Id of Org info Form
export const getStateValues = (props: number) => {
  return fetch(`${url}LASProcessAPI/GetStates?CountryId=${props}`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// fetch call for landallocation of LandAllocation Form

export const getLandAllocationTypeValues = () => {
  return fetch(`${url}LASProcessAPI/GetLandAllocationTypes`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },

    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// fetch call for Land Allocated To
export const getAllocatedValues = (props: IApplicationSearchStateValues) => {
  return fetch(
    `${url}LASProcessAPI/GetAllocationSubTypes?AllocationTypeId=${
      props.allocationTypeId
    }`,
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

// post call for RelationType Id

export const postRelationTypeId = () => {
  return fetch(`${url}LASProcessAPI/GetRelationTypes`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// post call for photoIdType

export const postPhotoId = () => {
  return fetch(`${url}LASProcessAPI/GetPhotoIdTypes`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// fetch call for Authorised Save & Continue

export const postAuthorisedSaveContinue = (
  props: IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ICreateProposalProps &
    IDetailsFromMap &
    IWitnessDetailsProps,
  image: any,
  StreetName: string,
  HouseNo: string
) => {
  return fetch(`${url}LASProcessAPI/InsertAuthorizationDetails`, {
    body: JSON.stringify({
      IsFreeFlow: false,
      next_user: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      Region: 0,
      District: props.District,
      Town: 0,
      Community: 0,
      ChiefFirstName: null,
      ChiefLastName: null,
      ChiefPhoneNumber: null,
      ChiefEmailAddress: null,
      ChiefAddress: null,
      ChiefAddress2: null,
      SuccessorFirstName: null,
      SuccessorLastName: null,
      SuccessorPhoneNumber: null,
      SuccessorEmailAddress: null,
      SuccessorAddress: null,
      SuccessorAddress2: null,
      SADAZipCode: null,
      SADAAddress: null,
      SADAAddress2: null,
      SADACity: null,
      ApplicationId: props.enterApplicationId,
      registerOrNotRegister: 0,
      LandSize: 0,
      LandTitle: null,
      CheifPhotoIdType: 0,
      CheifPhotoIdNumber: null,
      SuccessorPhotoIdType: 0,
      SuccessorPhotoIdNumber: null,
      RegistrationNumber: null,
      ProjectType: 0,
      ProjectSubType: 0,
      AggrementName: null,
      ProjectFundedBy: null,
      ProjectCoordinator: null,
      ProjectConsultant: null,
      AggrementDescription: null,
      LeaseTenure: 0,
      LeaseStartDate: null,
      LeaseEndDate: null,
      AggrementStartDate: null,
      ProjectStartDate: null,
      ProjectEndDate: null,
      RenewalForEvery: 0,
      RenewalAmountPercentage: 0,
      LeaseAmount: 0,
      TotalLeaseAmount: 0,
      PlotAreaType: 0,
      ReturnCode: 0,
      LandSizeType: 0,
      LandLocatedFromCommunity: 0,
      LandLocatedToCommunity: 0,
      LesseDetailsList: [
        {
          FirstName: props.FirstName,
          LastName: props.LastName,
          // tslint:disable-next-line:object-literal-sort-keys
          Email: props.AuthorisedPersonEmailAddress,
          MobileNumber: props.MobileNumber.toString(),
          Address1: HouseNo,
          Address2: StreetName,
          PhotoIdType: props.PhotoIdType,
          PhotoIdNumber: props.PhotoIdNumber,
          PhotoIdPath: image,
          UserOrganization: null,
          AuthUserId: props.enterApplicationId,
          OrganizationId: 0,
          AgreementType: 0,
          RelationTypeId: props.AuthRelationTypeId,
          RelationName: props.RelationName,
          DateOfBirth: props.AuthDateOfBirth
        }
      ],
      SucessorDetailsList: null,
      DocumentsVerifiedList: null,
      OrganizationDetailsList: [
        {
          OrgName: props.OrganizationName,
          // tslint:disable-next-line:object-literal-sort-keys
          OrgAddress: props.HouseNoBuildingName,
          OrgAddress2: props.StreetNameLocality,
          OrgCity: props.City,
          OrgZipCode: props.ZipCode,
          OrgTINNumber: null,
          OrgPANNumber: null,
          GSTINNumber: props.GSTNumber,
          OrgWebsiteURL: null,
          OrgPhoneNumber: props.OrgPhoneNumber,
          OrgEmailId: props.OrgEmailAddress,
          OrgCountry: props.CountryId,
          OrgState: props.StateId,
          OrgRegistrationNumber: props.RegistrationNumber,
          AgreementType: props.AgreementTypeId,
          OrganizationId: 0
        }
      ],
      MileStoneDetailsList: null,
      WitnessDetailsList: null,
      IsLeaseOrSubLease: 0,
      OrganizationId: 0,
      LandAllocationType: 0,
      LandAllottedSize: null,
      NextAllocationDate: null,
      ProjectId: 0,
      ReferenceApplicationId: null,
      Terms: false,
      Comments: null,
      OrganizationName: props.OrganizationName,
      OrganizationAddress1: props.HouseNoBuildingName,
      OrganizationAddress2: props.StreetNameLocality,
      OrganizationCity: props.City,
      OrganizationZipCode: props.ZipCode,
      CreatedBy: 0,
      StatusRegion: 0,
      ThemeCityType: 0,
      TotalBudget: 0,
      AggrementPurpose: null,
      AgreementId: props.AgreementTypeId,
      RequiredLandSize: 0,
      RequiredLandSizeType: 0,
      AllocationType: props.LandAllocatedToId,
      AllocationSubType: props.AllocationSubTypeId,
      ProjectRules: null,
      MappingDocuments: null,
      PricePerUnit: 0,
      TotalAmount: 0,
      RequiredLandSizeBeforeAllocation: 0,
      NextOrderEmail: null,
      NextOrderUserName: null,
      IsRequestFromMap: false,
      ParcelId: props.ParcelId,
      MapVillage: props.Village,
      MapMandal: props.Mandal,
      MapDistrict: props.District,
      MapTownship: props.TownShip,
      MapSector: props.Sector,
      MapColony: props.Colony,
      MapBlock: props.Block,
      MapPlot: props.Plot,
      Boundaries: props.Boundaries,
      ApplictaionSource: 2,
      GuestEmail: null,
      GuestGuid: null,
      GOMnumber: null,
      GOMdate: null,
      TypeOfAllocation: props.TypeOfAllocationId,
      TownshipId: props.TownshipId
    }),
    // credentials: "include",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST"
    // mode: "no-cors"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// fetch call for type of allocation dropdown

export const getTypeOfAllocationDropDown = () => {
  return fetch(`${url}LaSProcessAPI/GteTypeOfAllocation`, {
    credentials: "include",
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

//  // AgreementTypeId=${props.AgreementTypeId}
// &AllocationTypeId=${props.AllocationId}
// &AllocationSubTypeId=${props.AllocationSubTypeId}
// &RequiredLandArea=${props.AvailableLandArea}
// &OrgAddress1=${props.HouseNoBuildingName}
// &OrgAddress2=${props.StreetNameLocality}
// &OrgPhoneNumber=${props.OrgPhoneNumber}
// &OrgEmailId=${props.OrgEmailAddress}
// &OrganizationName=${props.OrganizationName}
// &TypeOfAllocationId=${props.TypeOfAllocationId}
// &Block=${props.Block}&Sector=${props.Sector}
// &Colony=${props.Colony}&CountryId=${props.CountryId}
// &District=${props.District}&GSTNumber=${props.GSTNumber}
// &Boundaries=${props.Boundaries}&City=${props.City}
// &Mandal=${props.Mandal}
// &ParcelId=${props.ParcelId}
// &Plot=${props.Plot}
// const requestHeaders: any = { "content-type": "application/json" };

// `http://sadaptms.com:894/api/LASProcessAPI/InsertLesseLessorDetails`,

export const postSaveAndContinue = (
  props: IProposalTabStateValues &
    ISelectAllocationProps &
    ISelectLandAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap
  // signal: any
) => {
  const ApplicationId =
    props.enterApplicationId === "0" ? "" : props.enterApplicationId;
  return fetch(`${url}LASProcessAPI/InsertLesseLessorDetails`, {
    body: JSON.stringify(
      {
        Staticvalue: null,
        UserId,
        // tslint:disable-next-line:object-literal-sort-keys
        IsFreeFlow: false,
        next_user: 0,
        // tslint:disable-next-line:object-literal-sort-keys
        Region: 0,
        District: 0,
        Town: 0,
        Community: 0,
        ChiefFirstName: null,
        ChiefLastName: null,
        ChiefPhoneNumber: null,
        ChiefEmailAddress: null,
        ChiefAddress: null,
        ChiefAddress2: null,
        SuccessorFirstName: null,
        SuccessorLastName: null,
        SuccessorPhoneNumber: null,
        SuccessorEmailAddress: null,
        SuccessorAddress: null,
        SuccessorAddress2: null,
        SADAZipCode: null,
        SADAAddress: null,
        SADAAddress2: null,
        SADACity: null,
        ApplicationId,
        WithInAGC: props.WithInAGC,
        OutOfAGC: props.OutOfAGC,
        Status: 0,
        LandSize: 0,
        LandTitle: null,
        CheifPhotoIdType: 0,
        CheifPhotoIdNumber: null,
        SuccessorPhotoIdType: 0,
        SuccessorPhotoIdNumber: null,
        RegistrationNumber: null,
        ProjectType: 0,
        ProjectSubType: 0,
        AggrementName: null,
        ProjectFundedBy: null,
        ProjectCoordinator: null,
        ProjectConsultant: null,
        AggrementDescription: null,
        LeaseTenure: 0,
        LeaseStartDate: null,
        LeaseEndDate: null,
        AggrementStartDate: null,
        ProjectStartDate: null,
        ProjectEndDate: null,
        RenewalForEvery: 0,
        RenewalAmountPercentage: 0,
        LeaseAmount: 0,
        TotalLeaseAmount: 0,
        PlotAreaType: 0,
        ReturnCode: 0,
        LandSizeType: 0,
        LandLocatedFromCommunity: 0,
        LandLocatedToCommunity: 0,
        LesseDetailsList: null,
        SucessorDetailsList: null,
        DocumentsVerifiedList: null,
        OrganizationDetailsList: [
          {
            OrgName: props.OrganizationName,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress: props.HouseNoBuildingName,
            OrgAddress2: props.StreetNameLocality,
            OrgCity: props.City,
            OrgZipCode: props.ZipCode,
            OrgTINNumber: null,
            OrgPANNumber: null,
            GSTINNumber: props.GSTNumber,
            OrgWebsiteURL: null,
            OrgPhoneNumber: props.OrgPhoneNumber,
            OrgEmailId: props.OrgEmailAddress,
            OrgCountry: props.CountryId,
            OrgState: props.StateId,
            OrgRegistrationNumber: props.RegistrationNumber,
            AgreementType: props.AgreementTypeId,
            OrganizationId: 0
          }
        ],
        MileStoneDetailsList: null,
        WitnessDetailsList: null,
        IsLeaseOrSubLease: 0,
        OrganizationId: 0,
        LandAllocationType: 0,
        LandAllottedSize: null,
        NextAllocationDate: null,
        ProjectId: 0,
        ReferenceApplicationId: null,
        Terms: false,
        Comments: null,
        OrganizationName: props.OrganizationName,
        OrganizationAddress1: props.HouseNoBuildingName,
        OrganizationAddress2: props.StreetNameLocality,
        OrganizationCity: props.City,
        OrganizationZipCode: props.ZipCode,
        CreatedBy: UserId,
        StatusRegion: 0,
        ThemeCityType: 0,
        TotalBudget: 0,
        AggrementPurpose: null,
        AgreementId: props.AgreementTypeId,
        RequiredLandSize: props.AvailableLandArea,
        RequiredLandSizeType: 1,
        AllocationType: props.LandAllocatedToId,
        AllocationSubType: props.AllocationSubTypeId,
        ProjectRules: null,
        PricePerUnit: 0,
        TotalAmount: 0,
        InitialAllocation: 0,
        InitialAllocationLandSize: 0,
        InitialAllocationLandSizeType: 0,
        RequiredLandSizeBeforeAllocation: 0,
        NextOrderEmail: null,
        NextOrderUserName: null,
        IsRequestFromMap: true,
        ParcelId: props.ParcelId,
        MapVillage: props.Village,
        MapMandal: props.Mandal,
        MapDistrict: props.District,
        MapTownship: props.TownShip,
        MapSector: props.Sector,
        MapColony: props.Colony,
        MapBlock: props.Block,
        MapPlot: props.Plot,
        Boundaries: props.Boundaries,
        ApplictaionSource: 2,
        GuestEmail: null,
        GuestGuid: null,
        GOMnumber: null,
        GOMdate: null,
        TypeOfAllocation: props.TypeOfAllocationId,
        TownshipId: props.TownshipId
      }
      // AgreementTypeId: props.AgreementTypeId,
      // AllocationSubTypeId: props.AllocationSubTypeId,
      // AllocationTypeId: props.AllocationId,
      // Block: props.Block,
      // Colony: props.Colony,
      // OrgAddress1: props.HouseNoBuildingName,
      // OrgAddress2: props.StreetNameLocality,
      // OrgEmailId: props.OrgEmailAddress,
      // OrgPhoneNumber: props.OrgPhoneNumber,
      // OrganizationName: props.OrganizationName,
      // RequiredLandArea: props.AvailableLandArea,
      // Sector: props.Sector,
      // TypeOfAllocationId: props.TypeOfAllocationId,
      // // tslint:disable-next-line:object-literal-sort-keys
      // CountryId: props.CountryId,
      // District: props.District,
      // STNumber: props.GSTNumber,
      // Boundaries: props.Boundaries,
      // City: props.City,
      // Mandal: props.Mandal,
      // ParcelId: props.ParcelId,
      // Plot: props.Plot
      // }
    ),
    // mode: "no-cors",
    // tslint:disable-next-line:object-literal-sort-keys
    // credentials: "include",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

//  // AgreementTypeId=${props.AgreementTypeId}
// &AllocationTypeId=${props.AllocationId}
// &AllocationSubTypeId=${props.AllocationSubTypeId}
// &RequiredLandArea=${props.AvailableLandArea}
// &OrgAddress1=${props.HouseNoBuildingName}
// &OrgAddress2=${props.StreetNameLocality}
// &OrgPhoneNumber=${props.OrgPhoneNumber}
// &OrgEmailId=${props.OrgEmailAddress}
// &OrganizationName=${props.OrganizationName}
// &TypeOfAllocationId=${props.TypeOfAllocationId}
// &Block=${props.Block}&Sector=${props.Sector}
// &Colony=${props.Colony}&CountryId=${props.CountryId}
// &District=${props.District}&GSTNumber=${props.GSTNumber}
// &Boundaries=${props.Boundaries}&City=${props.City}
// &Mandal=${props.Mandal}
// &ParcelId=${props.ParcelId}
// &Plot=${props.Plot}
// const requestHeaders: any = { "content-type": "application/json" };

// fetch call for witnessSaveAndContinue

export const postWitnessSaveAndContinue = (
  props: IRelationTypeProps &
    IWitnessDetailsProps &
    IRelationTypeProps &
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
    IDetailsFromMap,
  image: any
) => {
  return fetch(`${url}LASProcessAPI/InsertWitnessDetails`, {
    body: JSON.stringify({
      IsFreeFlow: false,
      next_user: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      Region: 0,
      District: 0,
      Town: 0,
      Community: 0,
      ChiefFirstName: null,
      ChiefLastName: null,
      ChiefPhoneNumber: null,
      ChiefEmailAddress: null,
      ChiefAddress: null,
      ChiefAddress2: null,
      SuccessorFirstName: null,
      SuccessorLastName: null,
      SuccessorPhoneNumber: null,
      SuccessorEmailAddress: null,
      SuccessorAddress: null,
      SuccessorAddress2: null,
      SADAZipCode: null,
      SADAAddress: null,
      SADAAddress2: null,
      SADACity: null,
      ApplicationId: props.enterApplicationId,
      LandSize: 0,
      LandTitle: null,
      CheifPhotoIdType: 0,
      CheifPhotoIdNumber: null,
      SuccessorPhotoIdType: 0,
      SuccessorPhotoIdNumber: null,
      RegistrationNumber: null,
      ProjectType: 0,
      ProjectSubType: 0,
      AggrementName: null,
      ProjectFundedBy: null,
      ProjectCoordinator: null,
      ProjectConsultant: null,
      AggrementDescription: null,
      LeaseTenure: 0,
      LeaseStartDate: null,
      LeaseEndDate: null,
      AggrementStartDate: null,
      ProjectStartDate: null,
      ProjectEndDate: null,
      RenewalForEvery: 0,
      RenewalAmountPercentage: 0,
      LeaseAmount: 0,
      TotalLeaseAmount: 0,
      PlotAreaType: 0,
      ReturnCode: 0,
      LandSizeType: 0,
      LandLocatedFromCommunity: 0,
      LandLocatedToCommunity: 0,
      LesseDetailsList: [
        {
          FirstName: props.FirstName,
          LastName: props.LastName,
          // tslint:disable-next-line:object-literal-sort-keys
          Email: props.AuthorisedPersonEmailAddress,
          MobileNumber: props.mobileNumber.toString(),
          Address1: props.HouseNo,
          Address2: props.StreetName,
          PhotoIdType: props.PhotoIdType,
          PhotoIdNumber: props.PhotoIdNumber,
          PhotoIdPath: image,
          UserOrganization: null,
          AuthUserId: props.enterApplicationId,
          OrganizationId: 0,
          AgreementType: 0,
          RelationTypeId: props.AuthRelationTypeId,
          RelationName: props.RelationName,
          DateOfBirth: props.AuthDateOfBirth
        }
      ],
      SucessorDetailsList: null,
      DocumentsVerifiedList: null,
      OrganizationDetailsList: [
        {
          OrgName: props.OrganizationName,
          // tslint:disable-next-line:object-literal-sort-keys
          OrgAddress: props.HouseNoBuildingName,
          OrgAddress2: props.StreetNameLocality,
          OrgCity: props.City,
          OrgZipCode: props.ZipCode,
          OrgTINNumber: null,
          OrgPANNumber: null,
          GSTINNumber: props.GSTNumber,
          OrgWebsiteURL: null,
          OrgPhoneNumber: props.OrgPhoneNumber,
          OrgEmailId: props.OrgEmailAddress,
          OrgCountry: props.CountryId,
          OrgState: props.StateId,
          OrgRegistrationNumber: props.RegistrationNumber,
          AgreementType: props.AgreementTypeId,
          OrganizationId: 0
        }
      ],
      MileStoneDetailsList: null,
      WitnessDetailsList: props.WitnessDetailsFormArray.map(
        (x: IwitnessValues) => {
          return {
            RelationType: x.RelationType,
            WitnessName: x.WitnessName,
            // tslint:disable-next-line:object-literal-sort-keys
            RelationName: x.RelationName,
            RelationDateOfBirth: x.RelationDateOfBirth,
            RelationDescription: null
          };
        }
      ),
      IsLeaseOrSubLease: 0,
      OrganizationId: 0,
      LandAllocationType: 0,
      LandAllottedSize: null,
      NextAllocationDate: null,
      ProjectId: 0,
      ReferenceApplicationId: null,
      Terms: false,
      Comments: null,
      OrganizationName: null,
      OrganizationAddress1: null,
      OrganizationAddress2: null,
      OrganizationCity: null,
      OrganizationZipCode: null,
      CreatedBy: UserId,
      StatusRegion: 0,
      ThemeCityType: 0,
      TotalBudget: 0,
      AggrementPurpose: null,
      AgreementId: 0,
      RequiredLandSize: 0,
      RequiredLandSizeType: 0,
      AllocationType: props.LandAllocatedToId,
      AllocationSubType: props.AllocationSubTypeId,
      ProjectRules: null,
      Status: 0,
      MappingDocuments: null,
      PricePerUnit: 0,
      TotalAmount: 0,
      RequiredLandSizeBeforeAllocation: 0,
      NextOrderEmail: null,
      NextOrderUserName: null,
      IsRequestFromMap: false,
      ParcelId: null,
      MapVillage: null,
      MapMandal: null,
      MapDistrict: null,
      MapTownship: null,
      MapSector: null,
      MapColony: null,
      MapBlock: null,
      MapPlot: null,
      Boundaries: null,
      ApplictaionSource: 0,
      GuestEmail: null,
      GuestGuid: null,
      GOMnumber: null,
      GOMdate: null,
      TypeOfAllocation: 0,
      TownshipId: props.TownshipId
    }),
    credentials: "include",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// unit dropdown

export const getUnitValues = (ThemeCityId: number, AllocationId: number) => {
  return fetch(
    `${url}LASProcessAPI/GetPlotAreaTypes?ThemeCityId=${ThemeCityId}&AllocationId=${AllocationId}
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

// lease tenure dropdown

export const LeaseTenureValues = () => {
  return fetch(
    `${url}LASProcessAPI/GetLeaseTenurePeriod
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

// milestone dropdown values
export const mileStoneValues = (props: number) => {
  return fetch(
    `${url}LASProcessAPI/LoadProjectRulesByTownship?TownshipId=${props}
    `,
    {
      body: JSON.stringify({ data: { TownshipId: props } }),
      // credentials: "include",
      headers: {
        // Accept: "application/json",
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

// RuleType DropDown

export const RuleTypeValues = () => {
  return fetch(
    `${url}LASProcessAPI/GetProjectRuleTypes
    `,
    {
      //  credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// submit milestone details
export const SubmitMilestoneDetails = (
  props: ITownshipValues &
    ISelectThemeCityProps &
    IRuleTypeValuesProps &
    ISourceValueProps &
    IConditionValueProps,
  ruleName: string
) => {
  return fetch(
    `${url}LASProcessAPI/InsertNewProjectRule
    `,
    {
      body: JSON.stringify({
        RuleName: ruleName,
        // tslint:disable-next-line:object-literal-sort-keys
        ProjRuleTypeId: props.ProjectTypeId,
        SourceTypeId: props.RuleSourceTypeId,
        ConditionTypeId: props.ConditionTypeId,
        MinimumValue: props.minValue,
        MaximumValue: props.maxValue,
        Value: props.value,
        TownshipId: props.TownshipId,
        UserId
      }),
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: "include",
      method: "POST"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// source Type Dropdown

export const SourceTypeValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/GetSourceTypes
    `,
    {
      credentials: "include",
      // headers: {
      //   // Accept: "application/json",
      //   "Content-Type": "application/json"
      // },
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// conditionType Values

export const ConditionTypeValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/GetConditionTypes
    `,
    {
      credentials: "include",
      headers: {
        // Accept: "application/json",
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

// insert Complete Details to DB

export const CompleteDetailsToDB = (
  props: ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectThemeCityProps &
    ISelectLandAllocationProps &
    IProjectRuleTypeProps &
    IProposalTabStateValues &
    IMileStoneDetailsStateValues &
    IMileStoneDetailsProps &
    IWitnessDetailsStateValues &
    IAuthorizedPersonValues &
    IDetailsFromMap &
    IWitnessDetailsProps &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IWitnessDetailsStateValues &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IWitnessDetailsStateValues &
    IwitnessValues &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    IDetailsFromMap,
  ProjectRules: ReadonlyArray<IMileStoneDropDownValues>,
  image: any
) => {
  return fetch(
    `${url}LASProcessAPI/InsertProjectDetails
    `,
    {
      body: JSON.stringify({
        IsFreeFlow: false,
        next_user: 0,
        // tslint:disable-next-line:object-literal-sort-keys
        Region: 0,
        District: 0,
        Town: 0,
        Community: 0,
        ChiefFirstName: null,
        ChiefLastName: null,
        ChiefPhoneNumber: null,
        ChiefEmailAddress: null,
        ChiefAddress: null,
        ChiefAddress2: null,
        SuccessorFirstName: null,
        SuccessorLastName: null,
        SuccessorPhoneNumber: null,
        SuccessorEmailAddress: null,
        SuccessorAddress: null,
        SuccessorAddress2: null,
        SADAZipCode: null,
        SADAAddress: null,
        SADAAddress2: null,
        SADACity: null,
        ApplicationId: props.enterApplicationId,
        LandSize: props.AvailableLandArea,
        LandTitle: null,
        CheifPhotoIdType: 0,
        CheifPhotoIdNumber: null,
        SuccessorPhotoIdType: 0,
        SuccessorPhotoIdNumber: null,
        RegistrationNumber: null,
        ProjectType: 0,
        ProjectSubType: 0,
        AggrementName: props.ProjectName,
        ProjectFundedBy: "",
        ProjectCoordinator: "",
        ProjectConsultant: null,
        AggrementDescription: props.ProjectDescription,
        LeaseTenure: props.Number,
        LeaseStartDate: props.LeaseStartDate,
        LeaseEndDate: props.LeaseEndDate,
        AggrementStartDate: null,
        ProjectStartDate: null,
        ProjectEndDate: null,
        RenewalForEvery: 0,
        RenewalAmountPercentage: 0,
        LeaseAmount: props.LeaseAmount,
        TotalLeaseAmount: props.TotalLeaseAmount,
        PlotAreaType: 0,
        ReturnCode: 0,
        InitialAllocationLandSize: props.InitialAllocationLandSize,
        LandSizeType: props.initialUnitId,
        LandLocatedFromCommunity: 0,
        LandLocatedToCommunity: 0,
        LesseDetailsList: [
          {
            FirstName: props.FirstName,
            LastName: props.LastName,
            // tslint:disable-next-line:object-literal-sort-keys
            Email: props.AuthorisedPersonEmailAddress,
            MobileNumber: props.mobileNumber.toString(),
            Address1: props.HouseNo,
            Address2: props.StreetName,
            PhotoIdType: props.PhotoIdType,
            PhotoIdNumber: props.PhotoIdNumber,
            PhotoIdPath: image,
            UserOrganization: null,
            AuthUserId: props.enterApplicationId,
            OrganizationId: 0,
            AgreementType: 0,
            RelationTypeId: props.AuthRelationTypeId,
            RelationName: props.RelationName,
            DateOfBirth: props.AuthDateOfBirth
          }
        ],
        SucessorDetailsList: null,
        DocumentsVerifiedList: null,
        OrganizationDetailsList: [
          {
            OrgName: props.OrganizationName,
            // tslint:disable-next-line:object-literal-sort-keys
            OrgAddress: props.HouseNoBuildingName,
            OrgAddress2: props.StreetNameLocality,
            OrgCity: props.City,
            OrgZipCode: props.ZipCode,
            OrgTINNumber: null,
            OrgPANNumber: null,
            GSTINNumber: props.GSTNumber,
            OrgWebsiteURL: null,
            OrgPhoneNumber: props.OrgPhoneNumber,
            OrgEmailId: props.OrgEmailAddress,
            OrgCountry: props.CountryId,
            OrgState: props.StateId,
            OrgRegistrationNumber: props.RegistrationNumber,
            AgreementType: props.AgreementTypeId,
            OrganizationId: 0
          }
        ],
        MileStoneDetailsList: props.MileStoneArray.map(
          (x: IMileStoneValues) => ({
            ApplicationId: props.enterApplicationId,
            MilestoneRuleId: 0,
            RuleId: 0,
            RuleName: null,
            // tslint:disable-next-line:object-literal-sort-keys
            MappingDocuments: null,
            Comments: null,
            CreatedBy: 0,
            TotalLandSize: 0,
            ReturnCode: 0,
            MilestoneVerifiedDocuments: null,
            ProjRuleTypeId: 0,
            SourceTypeId: 0,
            ConditionTypeId: 0,
            MinimumValue: 0,
            MaximumValue: 0,
            Value: 0,
            ConditionValue: null,
            AchievedValue: 0,
            DocumentPath: null,
            IsVerified: false,
            IsDocumentVerified: false,
            MileStoneDetails: null,
            UserId: 0,
            MileStoneId: 0,
            EffectiveDate: null,
            ParcelId: null,
            SurveyNumber: null,
            EffectiveDate_str: null,
            InitialAllocationLandSize: props.InitialAllocationLandSize,
            LandSizeType: props.initialUnitId,
            MileStoneDate: x.DateOfCompletion,
            MileStoneLandSize: x.LandRelease,
            MileStoneRulesList: props.projectValues
              .filter((y: IMileStoneDropDownValues) =>
                x.ProjectRuleTypes.find((z: string) => z === y.RuleName)
              )
              .map(y => y.RuleId)
              .join(","),
            MileStoneYears: x.RuleId
          })
        ),
        WitnessDetailsList: props.WitnessDetailsFormArray.map(
          (x: IwitnessValues) => {
            return {
              ...x,
              RelationType: x.RelationType,
              WitnessName: x.WitnessName,
              // tslint:disable-next-line:object-literal-sort-keys
              RelationName: x.RelationName,
              RelationDateOfBirth: x.RelationDateOfBirth,
              RelationDescription: null
            };
          }
        ),
        IsLeaseOrSubLease: 0,
        OrganizationId: 0,
        LandAllocationType: props.LandAllocationId,
        LandAllottedSize: null,
        NextAllocationDate: null,
        ProjectId: 0,
        ReferenceApplicationId: null,
        Terms: false,
        Comments: null,
        OrganizationName: props.OrganizationName,
        OrganizationAddress1: props.HouseNoBuildingName,
        OrganizationAddress2: props.StreetNameLocality,
        OrganizationCity: props.City,
        OrganizationZipCode: props.ZipCode,
        CreatedBy: UserId,
        StatusRegion: 0,
        ThemeCityType: props.TownshipId,
        TotalBudget: 0,
        AggrementPurpose: props.ProjectPurpose,
        AgreementId: props.AgreementTypeId,
        RequiredLandSize: props.RequiredLandSize,
        RequiredLandSizeType: props.requiredLandUnitId,
        AllocationType: props.LandAllocatedToId,
        AllocationSubType: props.AllocationSubTypeId,
        ProjectRules,
        Status: 0,
        MappingDocuments: null,
        PricePerUnit: 0,
        TotalAmount: props.TotalLeaseAmount,
        RequiredLandSizeBeforeAllocation:
          props.RequiredLandSizeBeforeAllocation,
        NextOrderEmail: null,
        NextOrderUserName: null,
        IsRequestFromMap: false,
        ParcelId: props.ParcelId,
        MapVillage: props.Village,
        MapMandal: props.Mandal,
        MapDistrict: props.District,
        MapTownship: props.TownShip,
        MapSector: props.Sector,
        MapColony: props.Colony,
        MapBlock: props.Block,
        MapPlot: props.Plot,
        Boundaries: props.Boundaries,
        ApplictaionSource: 0,
        GuestEmail: null,
        GuestGuid: null,
        GOMDetails: props.ProjectDetailsArray.map((x: IGoValues) => ({
          ApplicationDetailsId: 0,
          ApplicationId: props.enterApplicationId,
          GOMDate: x.GoDate,
          GOMDate_str: x.GoDate,
          GOMNumber: x.GoNumber
        })),
        TypeOfAllocation: props.TypeOfAllocationId,
        TownshipId: props.TownshipId,
        UserId,
        WithInAGC: props.WithInAGC,
        OutOfAGC: props.OutOfAGC,
        TotalLandCost: props.TotalLandCost,
        AmountPaid: props.AmountPaid,
        AmountTobePaid: props.AmountToBePaid,

        RegisteredOrNot: props.registerOrNot
      }),
      credentials: "include",
      headers: {
        "content-type": "application/json"
        // tslint:disable-next-line:object-literal-sort-keys
        // Accept: "application/json"
      },
      method: "POST",
      mode: "cors"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// For  saveAsDrafts And Submit Button
export const postSaveAsDraftValues = (
  props: any &
    IUploadDocumentValues &
    ILandallocationFormStatevalues &
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
    IWitnessDetailsStateValues &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IWitnessDetailsStateValues &
    IwitnessValues &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    IDetailsFromMap,
  projectValues: ReadonlyArray<IMileStoneDropDownValues>,
  nextUserId: number
) => {
  // const ProjectRules = projectValues
  //   .filter((x: IMileStoneDropDownValues) =>
  //     props.projectTypes.find(y => y === x.RuleName)
  //   )
  //   .map((x: IMileStoneDropDownValues) => x.RuleId)
  //   .join(",");

  const docs =
    props.documentList2.filter((x: IDocumentPropValues) => x.FileType === "")
      .length === 0 &&
    props.documentList2
      .map((x: IDocumentPropValues) => x.FileType)
      .map((x: string) => x.split("/")[4])
      .join(",");

  return fetch(`${url}LASProcessAPI/UploadDocumentsForApplication`, {
    body: JSON.stringify({
      ApplicationId: props.enterApplicationId,
      MappingDocuments: docs ? docs : "",
      ProcessComments: props.Comments,
      ProjectId: "",
      // tslint:disable-next-line:object-literal-sort-keys
      LesseDetailsList: [
        {
          FirstName: props.FirstName,
          LastName: props.LastName,
          // tslint:disable-next-line:object-literal-sort-keys
          Email: props.AuthorisedPersonEmailAddress,
          MobileNumber: props.MobileNumber,
          Address1: props.HouseNo,
          Address2: props.StreetName,
          PhotoIdType: props.PhotoIdNumber,
          PhotoIdNumber: props.PhotoIdType,
          // PhotoIdPath: props.authImage,
          UserOrganization: ""
          // AuthUserId: props.enterApplicationId,
          // OrganizationId: 0,
          // AgreementType: 0,
          // RelationTypeId: props.AuthRelationTypeId,
          // RelationName: props.RelationName,
          // DateOfBirth: props.AuthDateOfBirth
        }
      ],
      GOMDetails: props.ProjectDetailsArray.map((x: IGoValues) => ({
        GOMDate: x.GoDate,
        GOMNumber: x.GoNumber
      })),
      TotalLandCost: props.TotalLandCost,
      AmountPaid: props.AmountPaid,
      AmountTobePaid: props.AmountToBePaid,
      WithInAGC: props.WithInAGC,
      OutOfAGC: props.OutOfAGC,
      Status: 1,
      AllocationSubType: props.AllocationSubTypeId,
      TypeOfAllocation: props.TypeOfAllocationId,
      UserId,
      next_user: nextUserId

      // tslint:disable-next-line:object-literal-sort-keys

      // registerOrNotRegister: props.registerOrNot,

      // LandSize: 0,
      // LandTitle: null,
      // CheifPhotoIdType: 0,
      // CheifPhotoIdNumber: null,
      // SuccessorPhotoIdType: 0,
      // SuccessorPhotoIdNumber: null,
      // RegistrationNumber: null,
      // ProjectType: 0,
      // ProjectSubType: 0,
      // ProjectFundedBy: null,
      // ProjectCoordinator: null,
      // ProjectConsultant: null,
      // LeaseTenure: props.Number,
      // LeaseStartDate: props.LeaseStartDate,
      // LeaseEndDate: props.LeaseEndDate,
      // AggrementStartDate: null,
      // ProjectStartDate: null,
      // ProjectEndDate: null,
      // RenewalForEvery: 0,
      // RenewalAmountPercentage: 0,
      // LeaseAmount: 0,
      // TotalLeaseAmount: 0,
      // PlotAreaType: 0,
      // ReturnCode: 0,
      // LandSizeType: 0,
      // LandLocatedFromCommunity: 0,
      // LandLocatedToCommunity: 0,

      // SucessorDetailsList: null,
      // DocumentsVerifiedList: [],
      // OrganizationDetailsList: [
      //   {
      //     OrgName: props.OrganizationName,
      //     // tslint:disable-next-line:object-literal-sort-keys
      //     OrgAddress: props.HouseNoBuildingName,
      //     OrgAddress2: props.StreetNameLocality,
      //     OrgCity: props.City,
      //     OrgZipCode: props.ZipCode,
      //     OrgTINNumber: null,
      //     OrgPANNumber: null,
      //     GSTINNumber: props.GSTNumber,
      //     OrgWebsiteURL: null,
      //     OrgPhoneNumber: props.OrgPhoneNumber,
      //     OrgEmailId: props.OrgEmailAddress,
      //     OrgCountry: props.CountryId,
      //     OrgState: props.StateId,
      //     OrgRegistrationNumber: props.RegistrationNumber,
      //     AgreementType: props.AgreementTypeId,
      //     OrganizationId: 0
      //   }
      // ],
      // MileStoneDetailsList: props.MileStoneArray.map((x: IMileStoneValues) => ({
      //   ...x,
      //   InitialAllocationLandSize: "",
      //   LandSizeType: "",
      //   MileStoneDate: x.DateOfCompletion,
      //   MileStoneLandSize: x.LandRelease,
      //   MileStoneRulesList: props.projectValues
      //     .filter((y: IMileStoneDropDownValues) =>
      //       x.ProjectRuleTypes.find((z: string) => z === y.RuleName)
      //     )
      //     .map(y => y.RuleId)
      //     .join(","),
      //   MileStoneYears: x.RuleId
      // })),
      // WitnessDetailsList:
      //   props.WitnessDetailsFormArray &&
      //   props.WitnessDetailsFormArray.map((x: IwitnessValues) => {
      //     return {
      //       RelationType: x.RelationType,
      //       WitnessName: x.WitnessName,
      //       // tslint:disable-next-line:object-literal-sort-keys
      //       RelationName: x.RelationName,
      //       RelationDateOfBirth: x.RelationDateOfBirth,
      //       RelationDescription: null
      //     };
      //   }),
      // IsLeaseOrSubLease: 0,
      // OrganizationId: 0,
      // LandAllocationType: props.LandAllocationId,
      // LandAllottedSize: null,
      // NextAllocationDate: null,

      // ReferenceApplicationId: null,
      // Terms: false,
      // Comments: null,
      // OrganizationName: props.OrganizationName,
      // OrganizationAddress1: props.HouseNoBuildingName,
      // OrganizationAddress2: props.StreetNameLocality,
      // OrganizationCity: props.City,
      // OrganizationZipCode: props.ZipCode,
      // CreatedBy: UserId,
      // StatusRegion: 0,
      // ThemeCityType: 0,
      // TotalBudget: 0,
      // AgreementId: props.AgreementTypeId,
      // RequiredLandSize: props.RequiredLandSize,
      // RequiredLandSizeType: props.requiredLandUnitId,
      // AllocationType: 0,
      // AllocationSubType: 0,
      // ProjectRules,

      // PricePerUnit: 0,
      // TotalAmount: 0,
      // RequiredLandSizeBeforeAllocation: props.RequiredLandSizeBeforeAllocation,
      // NextOrderEmail: null,
      // NextOrderUserName: null,
      // IsRequestFromMap: false,
      // ParcelId: props.ParcelId,
      // MapVillage: props.Village,
      // MapMandal: props.Mandal,
      // MapDistrict: props.District,
      // MapTownship: props.TownShip,
      // MapSector: props.Sector,
      // MapColony: props.Colony,
      // MapBlock: props.Block,
      // MapPlot: props.Plot,
      // Boundaries: props.Boundaries,
      // ApplictaionSource: 0,
      // GuestEmail: null,
      // GuestGuid: null,

      // TownshipId: props.TownshipId
    }),
    credentials: "include",
    headers: {
      "content-type": "application/json",
      // tslint:disable-next-line:object-literal-sort-keys
      Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const postSubmitProposal = (
  props: any &
    IUploadDocumentValues &
    ILandallocationFormStatevalues &
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
    IWitnessDetailsStateValues &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IWitnessDetailsStateValues &
    IwitnessValues &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    IDetailsFromMap,
  projectValues: ReadonlyArray<IMileStoneDropDownValues>,
  nextUserId: number
) => {
  // const ProjectRules = projectValues
  //   .filter((x: IMileStoneDropDownValues) =>
  //     props.projectTypes.find(y => y === x.RuleName)
  //   )
  //   .map((x: IMileStoneDropDownValues) => x.RuleId)
  //   .join(",");

  const docs = props.documentList2
    .map((x: IDocumentPropValues) => x.FileType)
    .map((x: string) => x.split("/")[4]);

  return fetch(`${url}LASProcessAPI/UploadDocumentsForApplication`, {
    body: JSON.stringify({
      ApplicationId: props.enterApplicationId,
      MappingDocuments: docs.join(","),
      ProcessComments: props.Comments,
      ProjectId: "",
      // tslint:disable-next-line:object-literal-sort-keys
      LesseDetailsList: [
        {
          FirstName: props.AuthPersonName1,
          LastName: props.AuthPersonName2,
          // tslint:disable-next-line:object-literal-sort-keys
          Email: props.AuthEmailId,
          MobileNumber: props.AuthPhoneNumber,
          Address1: props.AuthAddress1,
          Address2: props.AuthAddress2,
          PhotoIdType: props.AuthPhotoIdType,
          PhotoIdNumber: props.AuthPhotoIdNumber,
          // PhotoIdPath: props.authImage,
          UserOrganization: ""
          // AuthUserId: props.enterApplicationId,
          // OrganizationId: 0,
          // AgreementType: 0,
          // RelationTypeId: props.AuthRelationTypeId,
          // RelationName: props.RelationName,
          // DateOfBirth: props.AuthDateOfBirth
        }
      ],
      GOMDetails: props.ProjectDetailsArray.map((x: IGoValues) => ({
        GOMDate: x.GoDate,
        GOMNumber: x.GoNumber
      })),
      TotalLandCost: props.TotalLandCost,
      AmountPaid: props.AmountPaid,
      AmountTobePaid: props.AmountToBePaid,
      WithInAGC: props.WithInAGC,
      OutOfAGC: props.OutOfAGC,
      Status: 2,
      AllocationSubType: props.AllocationSubTypeId,
      TypeOfAllocation: props.TypeOfAllocationId,
      UserId,
      next_user: nextUserId

      // AggrementDescription: props.ProjectDescription,
      // AggrementName: props.ProjectName,
      // AggrementPurpose: props.ProjectPurpose,

      // GOMDetails: props.ProjectDetailsArray.map((x: IGoValues) => ({
      //   GOMDate: x.GoDate,
      //   GOMNumber: x.GoNumber
      // })),
      // RegisteredOrNot: props.registerOrNot,
      // // tslint:disable-next-line:object-literal-sort-keys
      // IsFreeFlow: false,
      // next_user: nextUserId,
      // // tslint:disable-next-line:object-literal-sort-keys
      // Region: 0,
      // District: 0,
      // Town: 0,
      // Community: 0,
      // ChiefFirstName: null,
      // ChiefLastName: null,
      // ChiefPhoneNumber: null,
      // ChiefEmailAddress: null,
      // ChiefAddress: null,
      // ChiefAddress2: null,
      // SuccessorFirstName: null,
      // SuccessorLastName: null,
      // SuccessorPhoneNumber: null,
      // SuccessorEmailAddress: null,
      // SuccessorAddress: null,
      // SuccessorAddress2: null,
      // SADAZipCode: null,
      // SADAAddress: null,
      // SADAAddress2: null,
      // SADACity: null,
      // ApplicationId: props.enterApplicationId,
      // registerOrNotRegister: props.registerOrNot,

      // WithInAGC: props.WithInAGC,
      // OutOfAGC: props.OutOfAGC,
      // LandSize: 0,
      // LandTitle: null,
      // CheifPhotoIdType: 0,
      // CheifPhotoIdNumber: null,
      // SuccessorPhotoIdType: 0,
      // SuccessorPhotoIdNumber: null,
      // RegistrationNumber: null,
      // ProjectType: 0,
      // ProjectSubType: 0,
      // ProjectFundedBy: null,
      // ProjectCoordinator: null,
      // ProjectConsultant: null,
      // LeaseTenure: props.Number,
      // LeaseStartDate: props.LeaseStartDate,
      // LeaseEndDate: props.LeaseEndDate,
      // AggrementStartDate: null,
      // ProjectStartDate: null,
      // ProjectEndDate: null,
      // RenewalForEvery: 0,
      // RenewalAmountPercentage: 0,
      // LeaseAmount: 0,
      // TotalLeaseAmount: 0,
      // PlotAreaType: 0,
      // ReturnCode: 0,
      // LandSizeType: 0,
      // LandLocatedFromCommunity: 0,
      // LandLocatedToCommunity: 0,
      // LesseDetailsList: [
      //   {
      //     FirstName: props.FirstName,
      //     LastName: props.LastName,
      //     // tslint:disable-next-line:object-literal-sort-keys
      //     Email: props.AuthorisedPersonEmailAddress,
      //     MobileNumber: props.mobileNumber,
      //     Address1: props.HouseNo,
      //     Address2: props.StreetName,
      //     PhotoIdType: props.PhotoIdType,
      //     PhotoIdNumber: props.PhotoIdNumber,
      //     PhotoIdPath: props.authImage,
      //     UserOrganization: null,
      //     AuthUserId: props.enterApplicationId,
      //     OrganizationId: 0,
      //     AgreementType: 0,
      //     RelationTypeId: props.AuthRelationTypeId,
      //     RelationName: props.RelationName,
      //     DateOfBirth: props.AuthDateOfBirth
      //   }
      // ],
      // SucessorDetailsList: null,
      // DocumentsVerifiedList: [],
      // OrganizationDetailsList: [
      //   {
      //     OrgName: props.OrganizationName,
      //     // tslint:disable-next-line:object-literal-sort-keys
      //     OrgAddress: props.HouseNoBuildingName,
      //     OrgAddress2: props.StreetNameLocality,
      //     OrgCity: props.City,
      //     OrgZipCode: props.ZipCode,
      //     OrgTINNumber: null,
      //     OrgPANNumber: null,
      //     GSTINNumber: props.GSTNumber,
      //     OrgWebsiteURL: null,
      //     OrgPhoneNumber: props.OrgPhoneNumber,
      //     OrgEmailId: props.OrgEmailAddress,
      //     OrgCountry: props.CountryId,
      //     OrgState: props.StateId,
      //     OrgRegistrationNumber: props.RegistrationNumber,
      //     AgreementType: props.AgreementTypeId,
      //     OrganizationId: 0
      //   }
      // ],

      // IsLeaseOrSubLease: 0,
      // OrganizationId: 0,
      // LandAllocationType: props.LandAllocationId,
      // LandAllottedSize: null,
      // NextAllocationDate: null,
      // ProjectId: 0,
      // ReferenceApplicationId: null,
      // Terms: false,
      // Comments: null,
      // OrganizationName: props.OrganizationName,
      // OrganizationAddress1: props.HouseNoBuildingName,
      // OrganizationAddress2: props.StreetNameLocality,
      // OrganizationCity: props.City,
      // OrganizationZipCode: props.ZipCode,
      // CreatedBy: UserId,
      // StatusRegion: 0,
      // ThemeCityType: 0,
      // TotalBudget: 0,
      // AgreementId: props.AgreementTypeId,
      // RequiredLandSize: props.RequiredLandSize,
      // RequiredLandSizeType: props.requiredLandUnitId,
      // AllocationType: 0,
      // AllocationSubType: 0,
      // ProjectRules,
      // Status: 2,
      // MappingDocuments: props.documentList2
      //   .map((x: IDocumentPropValues) => x.FileType)
      //   .join(","),
      // PricePerUnit: 0,
      // TotalAmount: 0,
      // RequiredLandSizeBeforeAllocation: props.RequiredLandSizeBeforeAllocation,
      // NextOrderEmail: null,
      // NextOrderUserName: null,
      // IsRequestFromMap: false,
      // ParcelId: props.ParcelId,
      // MapVillage: props.Village,
      // MapMandal: props.Mandal,
      // MapDistrict: props.District,
      // MapTownship: props.TownShip,
      // MapSector: props.Sector,
      // MapColony: props.Colony,
      // MapBlock: props.Block,
      // MapPlot: props.Plot,
      // Boundaries: props.Boundaries,
      // ApplictaionSource: 0,
      // GuestEmail: null,
      // GuestGuid: null,
      // TypeOfAllocation: props.TypeOfAllocationId
    }),
    credentials: "include",
    headers: {
      "content-type": "application/json",
      // tslint:disable-next-line:object-literal-sort-keys
      Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const postDownloadFileValues = (props: any) => {
  return fetch(`${url}LASProcessAPI/DownloadFiles`, {
    body: JSON.stringify({ props }),
    credentials: "include",
    // headers: {
    //   "content-type": "application/json"
    // },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res;
    }
    throw res;
  });
};

// Department user dropdownlist

export const postDepartmentUserDropDownList = (props: string) => {
  const ApplicationId = props === "" ? 0 : props;

  return fetch(
    `${url}LASProcessAPI/GetDepartmentandusers2forward?ApplicationId=${ApplicationId}&UserId=${UserId}`,
    {
      // body: JSON.stringify({ data: { ApplicationId } }),
      // credentials: "include",
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

export const postPTMSDepartmentUserDropDownList = () => {
  return fetch(
    `${url}MastersAPI/GetDepartmentandusers2forward?ApplicationId=${2}&UserId=${UserId}`,
    {
      // body: JSON.stringify({ data: { ApplicationId } }),
      // credentials: "include",
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

// http://sadaptms.com:899/
export const GetConvertedValuesInAcres = (
  unitId: number,
  RequiredLand: number
) => {
  const requiredLand = RequiredLand === undefined ? 0 : RequiredLand;
  return fetch(
    `${url}LASProcessAPI/GetAreaInAcres?UnitId=${unitId}&RequiredLand=${requiredLand}`,
    {
      body: JSON.stringify({ UnitId: unitId, RequiredLand }),
      //  credentials: "include",
      headers: {
        "content-type": "application/json"
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

export const PostUploadImageDocuments = (
  file: any,
  list: ReadonlyArray<IDocumentPropValues>,
  id: any
) => {
  const input = new FormData();
  input.append("file", file);

  const image = list
    .filter((x: IDocumentPropValues) => x.PhotoId === id)
    .map((x: IDocumentPropValues) => x.FileType)[0];
  // const requiredLand = RequiredLand === undefined ? 0 : RequiredLand;
  return fetch(`http://sadaptms.com:894/api/LASProcessAPI/GetFiles`, {
    body: JSON.stringify({
      DocumentType: id,
      FileName: file.name,
      Photo: image,
      UserId
    }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },

    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const UploadImageOfApplicationForm = (
  file: any,
  Photo: string,
  RoleId: number
) => {
  return fetch(`http://sadaptms.com:894/api/LASProcessAPI/GetFiles`, {
    body: JSON.stringify({
      DocumentType: RoleId,
      FileName: file.name,
      Photo,
      UserId
    }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },

    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
// PostUploadImageDocuments(data, id) {
//   const file = new FormData();
//   file.append('file', data);
//   file.append('id', id);    const httpOptions = new HttpHeaders({
//     'Content-Type': 'multipart/form-data'
//   });
//   return this.http
//     .post(`http://sadaptms.com:894/api/LASProcessAPI/GetFiles`, file)
//     .toPromise();
// }

export const GetMilestoneActivities = (id: string) => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/GetMilestoneActivities?ApplicationId=${id}&UserId=${UserId}`,
    {
      //  credentials: "include",
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
