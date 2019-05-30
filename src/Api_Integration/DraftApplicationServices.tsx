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

export const getDraftApplications = () => {
  return fetch(
    `${url}LASProcessAPI/GetDraftApplications?UserId=${UserId}
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

export const GetWitnessDetailsData = (ApplicationId: string) => {
  return fetch(
    `${url}LASProcessAPI/GetWitnessDetails?ApplicationId=${ApplicationId}
    `,
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

// http://sadaptms.com:899/LASProcess/GetProjectRulesForApplication
export const GetProjectRulesForApplication = (ApplicationId: string) => {
  return fetch(
    `${url}LASProcessAPI/GetProjectRulesForApplication?ApplicationId=${ApplicationId}&UserId=${UserId}
    `,
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

export const postDeleteDraftApplicationById = (props: string) => {
  return fetch(
    `${url}LASProcessAPI/DeleteDraftApplication?ApplicationId=${props}&UserId=${UserId}`,
    {
      body: JSON.stringify({ data: { ApplicationId: props }, UserId }),
      // credentials: "include",
      headers: {
        "content-type": "application/json"
        // tslint:disable-next-line:object-literal-sort-keys
        // Accept: "application/json"
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
