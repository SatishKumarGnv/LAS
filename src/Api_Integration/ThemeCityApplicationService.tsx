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

export const getThemeCitywiseData = (props: number) => {
  return fetch(
    `${url}DashboardAPI/GetApplicationsStatusCountTownshipWise?TownshipId=${props}`,
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
export const getTownShipApplicationData = () => {
  return fetch(`${url}MISReportsAPI/ApplicationstatusCountTownshipWise`, {
    body: JSON.stringify({ UserId }),
    credentials: "include",
    headers: {
      "Content-Type": "applciation/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getTownShipGridData = (id: number) => {
  return fetch(
    `${url}MISReportsAPI/TownshipWiseDetailDatatable?TownshipId=${id}`,
    {
      body: JSON.stringify({ TownshipId: id, UserId }),
      credentials: "include",
      method: "POST"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getTownShipListData = () => {
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

export const getTownShipPopUpData = (props: string) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationDetails?ApplicationID=${props}&UserId=${UserId}`,
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
