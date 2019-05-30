import {
  IAddNatureUsageValues,
  IEditNatureUsageValues
} from "src/DefaultLayout/HomePage";
import { url } from "./Config";
import { httpGet, httpPost } from "./MyProfileService";
import {
  httpGetWithIDParamNUserId,
  httpGetWithUserIdParam
} from "./PropertyDepartmentMasterService";
const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let CompanyID: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
  // CompanyID = user !== null || user !== undefined ? user.model.CompanyID : 0;
}
// dropdowns http://sadaptms.com:894/api/

// Add http://sadaptms.com:894/api/

// edit http://sadaptms.com:894/api/AssessmentAPI/EditNatureUsage

// DeActivate http://sadaptms.com:894/api/AssessmentAPI/DeleteNatureUsage

// Activate http://sadaptms.com:894/api/AssessmentAPI/ActivateNatureUsage

export const GetNatureUsageDetails = () => {
  return httpGet("AssessmentAPI/GetNatureUsageDetails");
};

export const GetPropertyTypeDetails = () => {
  return httpGetWithUserIdParam("AssessmentAPI/GetPropertyTypeDetails");
};

export const GetBuildingClassificationDetailsWithPropType = (
  PropertyTypeId: number
) => {
  return fetch(
    `${url}AssessmentAPI/GetBuildingClassificationDetails?PType=${PropertyTypeId}&UserId=${UserId}`,
    {
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

export const AddNewNatureUsage = (values: IAddNatureUsageValues) => {
  const body = JSON.stringify({
    BuildingClassificationId: values.BuildingClassificationId,
    NatureUsageName: values.NatureUsageName,
    PropType: values.PropertyTypeId
  });
  return httpPost("AssessmentAPI/AddNewNatureUsage", body);
};

export const EditNatureUsage = (values: IEditNatureUsageValues) => {
  const body = JSON.stringify({
    BuildingClassificationId: values.BuildingClassificationId,
    BuildingClassificationName: "",
    NatureUsageId: values.NatureUsageId,
    NatureUsageName: values.NatureUsageName
  });
  return httpPost("AssessmentAPI/EditNatureUsage", body);
};

export const ActivateNatureUsage = (ID: number) => {
  return httpGetWithIDParamNUserId("AssessmentAPI/ActivateNatureUsage", ID);
};

export const DeleteNatureUsage = (ID: number) => {
  const body = JSON.stringify({
    ID,
    UserId
  });

  return fetch(
    `${url}AssessmentAPI/DeleteNatureUsage?ID=${ID}&UserId=${UserId}`,
    {
      body,
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
