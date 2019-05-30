import {
  IAddActivityProps,
  IAddActivityValues
} from "../Container/WorkFlowActivityState";
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

// workflow Activity Grid
export const getWorkFlowActiviyValues = () => {
  return fetch(`${url}WorkflowProcessAPI/GetWorkFlowActivityDetails`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// Add

export const postAddWorkFlowActivityDetails = (
  values: IAddActivityValues & IAddActivityProps
) => {
  return fetch(
    `${url}WorkflowProcessAPI/AddNewWorkFlowActivityType?WorkFlowActivityName=${
      values.newWorkFlowActivityName
    }&WorkFlowActivityId=${values.WorkFlowActivityList.length + 1}`,
    {
      body: JSON.stringify({
        UserId,
        WorkFlowActivityId: values.WorkFlowActivityList.length + 1,
        WorkFlowActivityName: values.newWorkFlowActivityName
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

export const postEditWorkFlowActivityDetails = (event: any, name: any) => {
  return fetch(
    `${url}WorkflowProcessAPI/EditWorkFlowActivityTypeDetails?WorkFlowActivityName=${name}&WorkFlowActivityId=${event}`,
    {
      body: JSON.stringify({
        UserId,
        WorkFlowActivityId: event,
        WorkFlowActivityName: name
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

// DeActivate

export const postDeActivateId = (props: any) => {
  return fetch(
    `${url}WorkflowProcessAPI/DeleteWorkFlowActivityType?Id=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ props, UserId }),
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

// Activate
// http://sadaptms.com:899/

export const postActivateID = (props: number) => {
  return fetch(
    `${url}WorkflowProcessAPI/ActiveWorkFlowActivityType?Id=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ props, UserId }),
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
