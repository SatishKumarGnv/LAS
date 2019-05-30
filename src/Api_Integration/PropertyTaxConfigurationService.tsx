import {
  IPropertyTaxFormProps,
  IPropertyTaxTableStateProps,
  IPropertyTaxTableValues
} from "src/DefaultLayout/HomePage";
import { url } from "./Config";
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

// http://sadaptms.com:894/api/?District=1

export const GetBudgetYears = (district: string) => {
  return fetch(`${url}AssessmentAPI/GetBudgetYears?District=`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// http://sadaptms.com:894/api/

export const GetPropertyConfigurationDetails = (
  values: IPropertyTaxFormProps
) => {
  const body = JSON.stringify({
    BudgetYear: values.BudgetId,
    DistrictId: values.Description,
    IsEdit: false,
    PropertyTypeId: values.PropertyTypeId,
    RequestId: 0
  });
  return fetch(
    `${url}AssessmentAPI/GetPropertyConfigurationDetails?DistrictId=${
      values.Description
    }&
  BudgetYear=${values.BudgetId}&
  PropertyTypeId=${values.PropertyTypeId}&
  IsEdit=${false}&
  RequestId=${0}`,
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

// http://sadaptms.com:894/api/

// DistrictName":"GUNTUR","BudgetYear":2020,"PropertyTypeId":"21","StatusID":1,
// "PropertyTaxConfigurationDetails":
// [{"PropertyTypeId":21,"NatureUsageId":24,"BuildingClassificationId":22,
// "FinancialYear":2020,"PropertyValue":"12.43","Value":1}],"NextUserId":"21","IsFreeFlow":true,"Comments":""}

export const UpdatePropertyConfigurationDetailsForApproval = (
  values: IPropertyTaxFormProps & IPropertyTaxTableStateProps,
  BudgetYear: string,
  CategoryOwnerShipId: number,
  CategoryOwnershipName: string
) => {
  const getSelectedIdPropertyValue = (
    propertyTaxValues: IPropertyTaxTableValues
  ) => {
    return values.selected.find(y => y === propertyTaxValues.id.toString()) ===
      propertyTaxValues.id.toString()
      ? {
          DistrictId: values.Description,

          BudgetYear,
          BuildingClassificationId: propertyTaxValues.BuildingClassificationId,
          BuildingClassificationType:
            propertyTaxValues.BuildingClassificationType,
          CategoryOwnershipType: CategoryOwnershipName,
          CategoryOwnershipTypeId: CategoryOwnerShipId,
          FinancialYear: values.ToDate,
          NatureUsageId: propertyTaxValues.NatureUsageId,
          NatureUsageType: propertyTaxValues.NatureUsageType,
          PropertyType: propertyTaxValues.PropertyType,
          PropertyTypeId: propertyTaxValues.PropertyTypeId,
          PropertyValue: propertyTaxValues.PropertyValue,
          RoleId,
          UserId,
          Value: 1,
          canEdit: propertyTaxValues.canEdit,
          id: propertyTaxValues.id,
          isEdit: propertyTaxValues.isEdit
          //  PropertyTaxConfigId: 0,
        }
      : { ...propertyTaxValues, Value: 1 };
  };

  const List = values.propertyTaxTableList.map((x: IPropertyTaxTableValues) =>
    getSelectedIdPropertyValue(x)
  );

  const body = JSON.stringify({
    BudgetYear,
    DistrictName: values.Description,
    PropertyTypeId: values.PropertyTypeId,
    RequestId: values.RequestId,
    StatusID: 4,
    // tslint:disable-next-line:object-literal-sort-keys
    PropertyTaxConfigurationDetails: List,

    NextUserId: values.UserId,
    IsFreeFlow: true,
    Comments: values.Comments
  });
  return fetch(`${url}AssessmentAPI/UpdatePropertyConfigurationDetails`, {
    body,
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

export const UpdatePropertyConfigurationDetails = (
  values: IPropertyTaxFormProps & IPropertyTaxTableStateProps,
  BudgetYear: string,
  CategoryOwnerShipId: number,
  CategoryOwnershipName: string
) => {
  const getSelectedIdPropertyValue = (
    propertyTaxValues: IPropertyTaxTableValues
  ) => {
    return values.selected.find(y => y === propertyTaxValues.id.toString()) ===
      propertyTaxValues.id.toString()
      ? {
          DistrictId: values.Description,

          BudgetYear,
          BuildingClassificationId: propertyTaxValues.BuildingClassificationId,
          BuildingClassificationType:
            propertyTaxValues.BuildingClassificationType,
          CategoryOwnershipType: CategoryOwnershipName,
          CategoryOwnershipTypeId: CategoryOwnerShipId,
          FinancialYear: values.ToDate,
          NatureUsageId: propertyTaxValues.NatureUsageId,
          NatureUsageType: propertyTaxValues.NatureUsageType,
          PropertyType: propertyTaxValues.PropertyType,
          PropertyTypeId: propertyTaxValues.PropertyTypeId,
          PropertyValue: propertyTaxValues.PropertyValue,
          RoleId,
          UserId,
          Value: 1,
          canEdit: propertyTaxValues.canEdit,
          id: propertyTaxValues.id,
          isEdit: propertyTaxValues.isEdit
          //  PropertyTaxConfigId: 0,
        }
      : { ...propertyTaxValues, Value: 1 };
  };

  const List = values.propertyTaxTableList.map((x: IPropertyTaxTableValues) =>
    getSelectedIdPropertyValue(x)
  );

  const body = JSON.stringify({
    BudgetYear,
    DistrictName: values.Description,
    PropertyTypeId: values.PropertyTypeId,
    RequestId: values.RequestId,
    StatusID: 1,
    // tslint:disable-next-line:object-literal-sort-keys
    PropertyTaxConfigurationDetails: List,

    NextUserId: values.UserId,
    IsFreeFlow: true,
    Comments: values.Comments
  });
  return fetch(`${url}AssessmentAPI/UpdatePropertyConfigurationDetails`, {
    body,
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

// PTMS Dashboard services

export const GetPTMSDashboardPendingItems = () =>
  httpGetWithUserIdParam("AssessmentAPI/GetPendingItems");

export const GetDashboardPropertyChangePendingItems = () =>
  httpGetWithUserIdParam("AssessmentAPI/GetPropertyChangePendingItems");

export const GetTaxvaluationPendingTasks = () =>
  httpGetWithUserIdParam("AssessmentAPI/GetTaxvaluationPendingTasks");

export const GetAssessmentDetailsByID = (RequestId: string) => {
  return fetch(
    `${url}AssessmentAPI/GetAssessmentDetails_By_ID?RequestId=${RequestId}&UserId=${UserId}`,
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

export const GetPropertyConfigurationDetailsByID = (RequestId: string) => {
  return fetch(
    `${url}AssessmentAPI/GetPropertyConfigurationDetails_By_ID?RequestId=${RequestId}&UserId=${UserId}&RoleId=${RoleId}`,
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

export const getPropertyChangeDetailsID = (RequestId: string) => {
  return fetch(
    `${url}AssessmentAPI/getPropertyChangeDetails_ID?pcid=${RequestId}&UserId=${UserId}`,
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
