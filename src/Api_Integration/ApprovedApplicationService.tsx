import { IApprovedApplicationStateValues } from "src/Container/ApprovedApplicationState";

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

export const getApprovedApplications = () => {
  return fetch(`${url}LASProcessAPI/GetApprovedApplications?UserId=${UserId}`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getApprovedApplicationsPopUpData = (
  props: IApprovedApplicationStateValues
) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationDetails?ApplicationID=${
      props.ApplicationId
    }&UserId=${UserId}`,
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

// milestone details based on id

export const milestoneDetailsById = (props: string) => {
  return fetch(
    `${url}LASProcessAPI/GetMilestoneLandDetails?ApplicationId=${props}`,
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

export const downloadData = (props: string) => {
  return fetch(
    `${url}ReportOutputsAPI/PF+ApplicationId/FinalAllocationDocument/PF+ApplicationId.pdf?ApplicationId=${props}`,
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
