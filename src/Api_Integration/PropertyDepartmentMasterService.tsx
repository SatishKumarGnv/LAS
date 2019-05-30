import {
  IAddPropertyDepartmentValues,
  IEditPropertyDepartmentValues
} from "src/DefaultLayout/HomePage";
import { url } from "./Config";
import { httpGet, httpPost } from "./MyProfileService";

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

export function httpGetWithUserIdParam(resourceUrl: string) {
  return fetch(`${url}${resourceUrl}?UserId=${UserId}`, {
    credentials: "include",
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
}

export function httpGetWithIDParamNUserId(
  resourceUrl: string,
  ID: number | string
) {
  return fetch(`${url}${resourceUrl}?ID=${ID}&UserId=${UserId}`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
}
export function httpPostWithIDParamNUserId(
  resourceUrl: string,
  ID: number | string
) {
  return fetch(`${url}${resourceUrl}`, {
    body: JSON.stringify({ ID, UserId }),
    credentials: "include",
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
}

export const getPropertyDepartmentMasterGrid = () => {
  return httpGet("AssessmentAPI/GetPropertyDepartmentDetails");
};

export const postCategoryOwnerShipDropDownData = () => {
  return httpGetWithUserIdParam(
    "AssessmentAPI/GetActiveCategoryOwnershipDetails"
  );
};

export const postPropertyDepartmentAddSave = (
  values: IAddPropertyDepartmentValues
) => {
  const body = JSON.stringify({
    CategoryOwnershipId: values.CategoryOwnershipId,
    PropertyDepartmentName: values.PropertyDepartmentName
  });
  return httpPost("AssessmentAPI/AddNewPropertyDepartment", body);
};

export const postEditPropertyDepartmentEditSave = (
  values: IEditPropertyDepartmentValues,
  CategoryOwnershipName: string
) => {
  const body = JSON.stringify({
    CategoryOwnershipId: values.CategoryOwnershipId,
    CategoryOwnershipName,
    PropertyDepartmentId: values.PropertyDepartmentId,
    PropertyDepartmentName: values.PropertyDepartmentName
  });
  return httpPost("AssessmentAPI/EditPropertyDepartment", body);
};

export const postDeActivePropertyDepartment = (ID: number) => {
  const body = JSON.stringify({
    ID,
    UserId
  });

  return fetch(
    `${url}AssessmentAPI/DeletePropertyDepartment?ID=${ID}&UserId=${UserId}`,
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
export const postActivePropertyDepartment = (ID: number) => {
  return fetch(
    `${url}AssessmentAPI/ActivatePropertyDepartment?ID=${ID}&UserId=${UserId}`,
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
