import { url } from "./Config";

export const getAgreementTypeValues = (
  AllocationTypeId: number,
  AllocationSubTypeId: number
) => {
  return fetch(
    `${url}LASProcessAPI/GetAgreementTypes?AllocationTypeId=${AllocationTypeId}&AllocationSubTypeId=${AllocationSubTypeId}`,
    {
      body: JSON.stringify({ AllocationTypeId, AllocationSubTypeId }),
      credentials: "include",

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

export const getCityTypeValues = () => {
  return fetch(`${url}/LASProcessAPI/GetTownshipsList`, {
    headers: {
      "content-type": "application/json"
    },
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getAllocatedValues = (props: number) => {
  return fetch(
    `${url}LASProcessAPI/GetAllocationSubTypes?AllocationTypeId=${props}`,
    {
      headers: {
        "content-type": "application/json"
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

// Search Api
export const GetApplicationSearchValues = (
  LandAllocatedToId: number,
  AllocationId: number,
  AgreementId: number,
  TownshipId: number,
  organizationName: string,
  enterApplicationId: string,
  authorizedPersonName: string,
  authorisedPersonEmailAddress: string,
  mobileNumber: string,
  FromDate: string,
  ToDate: string
) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationSearchResults?AllocationType=${LandAllocatedToId}&AllocationSubType=${AllocationId}&AgreementType=${AgreementId}&ThemeCityType=${TownshipId}&OrgName=${organizationName}&ApplicationId=${enterApplicationId}&UserName=${authorizedPersonName}&UserEmailAddress=${authorisedPersonEmailAddress}&UserPhoneNumber=${mobileNumber}&FromDateValue=${FromDate}&ToDateValue=${ToDate}`,
    {
      body: JSON.stringify({
        AllocationType: LandAllocatedToId,
        // tslint:disable-next-line:object-literal-sort-keys
        AllocationSubType: AllocationId,
        AgreementType: AgreementId,
        ThemeCityType: TownshipId,
        OrgName: organizationName,
        ApplicationId: enterApplicationId,
        UserName: authorizedPersonName,
        UserEmailAddress: authorisedPersonEmailAddress,
        UserPhoneNumber: mobileNumber,
        FromDateValue: FromDate,
        ToDateValue: ToDate
      }),
      credentials: "include",

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
