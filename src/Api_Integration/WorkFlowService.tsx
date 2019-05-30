import {
  IAddActivityProps,
  // IWorkFlowGridDataValues,
  IWorkFlowStateValues
} from "../Container/WorkFlowMappingState";
import { ISelectAllocationProps } from "../DefaultLayout/HomePage";
import { url } from "./Config";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

// allocation to
export const getAllocationType = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAllocationTypeDetails`,
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

// allocation
export const postAllocationTypeById = (props: number) => {
  return fetch(
    `${url}LASProcessAPI/GetAllocationSubTypes?AllocationTypeId=${props}`,
    {
      // body: JSON.stringify({ AllocationTypeId: props, UserId }),
      // credentials: "include",
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

//
// agreement type
export const postAgrementType = (
  LandAllocationToId: number,
  AllocationId: number
) => {
  return fetch(
    `${url}LASProcessAPI/GetAgreementTypes?AllocationTypeId=${LandAllocationToId}
    &AllocationSubTypeId=${AllocationId}`,
    {
      body: JSON.stringify({
        UserId,
        // tslint:disable-next-line:object-literal-sort-keys
        AllocationSubTypeId: AllocationId,
        AllocationTypeId: LandAllocationToId
      }),
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

// Activities List
export const postActivitiesList = () => {
  return fetch(`${url}WorkflowProcessAPI/GetListofActvities`, {
    // body: JSON.stringify({ UserId }),
    // credentials: "include",
    headers: {
      // Accept: "application/json",
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

// table data
export const getGridDataForWorkFlow = (
  LandAllocationToId: number,
  AllocationId: number,
  AgreementId: number
) => {
  return fetch(
    `${url}WorkflowProcessAPI/GetApplicationActivities?AllocationType=${LandAllocationToId}
    &AllocationSubType=${AllocationId}&AgreementType=${AgreementId}&UserId=${UserId}`,
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

export const postSelectedList = (
  LandAllocationToId: number,
  AllocationId: number,
  AgreementId: number
) => {
  return fetch(
    `${url}WorkflowProcessAPI/GetActivityListBasedOnApplications?AllocationType=${LandAllocationToId}
    &AllocationSubType=${AllocationId}&AgreementType=${AgreementId}&UserId=${UserId}`,
    {
      // body: JSON.stringify({
      //   AllocationType: LandAllocationToId,
      //   // tslint:disable-next-line:object-literal-sort-keys
      //   AllocationSubType: AllocationId,
      //   UserId,
      //   AgreementType: AgreementId
      // }),
      // credentials: "include",
      headers: {
        // Accept: "application/json",
        // "Access-Control-Allow-Headers": "Content-Type",
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

// submit  SelectedActivityList: function () { return $('#SelectedActivityList').val(); },
// AllocationTypeId: function () { return $('#AllocationTypeId').val(); },
// AllocationSubTypeId: function () { return $('#AllocationSubTypeId').val(); },
// AgreementTypeId: function () { return $('#AgreementTypeId').val(); }
// }

export const submitWorkFlow = (
  props: IWorkFlowStateValues & ISelectAllocationProps,
  selectedActivityIds: ReadonlyArray<number>
  // SelectedActivityList: ReadonlyArray<string>,
  // LandAllocationToId: number,
  // AllocationId: number,
  // AgreementId: number
) => {
  const selectedActivityKeys = selectedActivityIds.join(",");
  return fetch(
    `${url}WorkflowProcessAPI/InsertWorkFlowActivityListUserMapping
 `,
    {
      body: JSON.stringify({
        Id: 0,
        // tslint:disable-next-line:object-literal-sort-keys
        ApplicationId: 0,
        AllocateToName: null,
        SubApplicationId: 0,
        AllocationTypeName: null,
        AgreementTypeName: null,
        ActivityId: 0,
        ActivityList: null,
        SelectedActivityList: selectedActivityKeys,
        UserId,
        SelectedKeys: null,
        CreatedOn: "/Date(-62135596800000)/",
        CreatedBy: UserId,
        AllocationTypeId: props.LandAllocatedToId,
        AllocationSubTypeId: props.AllocationId,
        AgreementTypeId: props.AgreementId,
        UserName: null,
        OrderNo: 0,
        SlaDays: 0,
        RoleId: 0,
        WorkFlowActivityUserDetails: null
      }),
      // credentials: "include",
      headers: {
        // Accept: "application/json",
        // "Access-Control-Allow-Headers": "Content-Type",
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

// selected activity List
// http://sadaptms.com:899/WorkflowProcess/GetApplicationActivities

export const getSelectedListGrid = (
  LandAllocationToId: number,
  AllocationId: number,
  AgreementId: number
) => {
  return fetch(
    `${url}WorkflowProcessAPI/GetApplicationActivities?AllocationType=${LandAllocationToId}
    &AllocationSubType=${AllocationId}&AgreementType=${AgreementId}&UserId=${UserId}`,
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

// Add activity to the activity list

export const addActivityInList = (
  props: IAddActivityProps
  // LandAllocationToId: number,
  // AllocationId: number,
  // AgreementId: number
) => {
  return fetch(
    `${url}WorkflowProcessAPI/AddNewWorkFlowActivityType?WorkFlowActivityName=${
      props.newWorkFlowActivityName
    }`,
    {
      body: JSON.stringify({
        model: {
          WorkFlowActivityName: props.newWorkFlowActivityName
        },
        // tslint:disable-next-line:object-literal-sort-keys
        UserId
      }),
      headers: {
        // Accept: "application/json",
        // "Access-Control-Allow-Headers": "Content-Type",
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

// Update Duration Days
export const updateDurationDays = (
  AllocationTypeId: number,
  AllocationSubTypeId: number,
  AgreementTypeId: number,
  SlaDays: number,
  ActivityId: number
) => {
  return fetch(
    `${url}WorkflowProcessAPI/UpdateActivitySlaDays?AllocationType=${AllocationTypeId}&AllocationSubType=${AllocationSubTypeId}
    &AgreementType=${AgreementTypeId}&SlaDays=${SlaDays}&ActivityId=${ActivityId}&UserId=${UserId}`,
    {
      body: JSON.stringify({
        data: {
          AllocationType: AllocationTypeId,
          // tslint:disable-next-line:object-literal-sort-keys
          AllocationSubType: AllocationSubTypeId,
          AgreementType: AgreementTypeId,
          SlaDays,
          ActivityId
        },
        // tslint:disable-next-line:object-literal-sort-keys
        UserId
      }),
      // credentials: "include",
      headers: {
        // Accept: "application/json",
        // "Access-Control-Allow-Headers": "Content-Type",
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
