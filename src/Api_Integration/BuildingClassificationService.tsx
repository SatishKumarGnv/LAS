import {
  IAddBuildingClassificationValues,
  IEditBuildingClassificationMasterValues
} from "src/DefaultLayout/HomePage";
import { url } from "./Config";
import { httpGet, httpPost } from "./MyProfileService";
import { httpGetWithIDParamNUserId } from "./PropertyDepartmentMasterService";

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

export const GetBuildingClassificationDetails = () => {
  return fetch(
    `${url}AssessmentAPI/GetBuildingClassificationDetails?PType=${0}&UserId=${UserId}`,
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

export const getDropdownForPropertyType = () => {
  return httpGet("AssessmentAPI/GetPropertyTypeDetails");
};

export const postBuildClassificationAddSave = (
  values: IAddBuildingClassificationValues
) => {
  const body = JSON.stringify({
    BuildingClassificationName: values.BuildingClassificationName,
    PropertyTypeId: values.PropertyTypeId
  });
  return httpPost("AssessmentAPI/AddNewBuildingClassification", body);
};

export const postEditBuildingClassificationEditSave = (
  values: IEditBuildingClassificationMasterValues,
  PropertyTypeName: string
) => {
  const body = JSON.stringify({
    BuildingClassificationId: values.BuildingClassificationId,
    BuildingClassificationName: values.BuildingClassificationName,
    PropertyTypeId: values.PropertyTypeId,
    PropertyTypeName
  });
  return httpPost("AssessmentAPI/EditBuildingClassification", body);
};

// http://sadaptms.com:894/api/

export const postActiveBuildingClassification = (ID: number) => {
  return httpGetWithIDParamNUserId(
    "AssessmentAPI/ActivateBuildingClassification",
    ID
  );
};
export const postDeActiveBuildingClassinfication = (ID: number) => {
  const body = JSON.stringify({
    ID,
    UserId
  });

  return fetch(
    `${url}AssessmentAPI/DeleteBuildingClassification?ID=${ID}&UserId=${UserId}`,
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
