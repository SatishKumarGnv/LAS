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

export const getDashboardLandDetails = () => {
  return fetch(`${url}LASProcessAPI/GetAvailableLandDetailsListTownshipWise`, {
    credentials: "include",
    headers: {
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
export const getDashboardNameDetails = (props: any) => {
  return fetch(
    `${url}DashboardAPI/GetTownshipName?TownshipId=${props.TownshipId}`,
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
export const getAllocatedNameDetails = (id: number) => {
  return fetch(
    `${url}LASProcessAPI/GetAllocatedInProgressApplicationsTownshipWise?TownshipId=${id}&UserId=${UserId}`,
    {
      credentials: "include",
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
export const getDashboardViewDetails = (id: number) => {
  return fetch(
    `${url}DashboardAPI/GetCompleteLandDetailsTownshipWise?TownshipId=${id}`,
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
// get call for DashBoard Approval Data
export const GetDashboardApprovalData = () => {
  return fetch(`${url}DashboardAPI/GetUserPendingItems?UserId=${UserId}`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getDashboardPieChartDetails = () => {
  return fetch(`${url}DashboardAPI/GetApplicationStatusCount`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// fetch call for the dashboard link application Id
export const postDashboardLinkAppilcationId = (props: any) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationDetails?ApplicationID=${props}$UserId=${UserId}`,
    {
      // body: JSON.stringify({ UserId }),
      // credentials: "include",
      headers: {
        "content-type": "application/json"
        // tslint:disable-next-line:object-literal-sort-keys
        // Accept: "application/json"
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

// get call for witness Details and Bindings
export const getWitnessDetailsAndBindings = () => {
  return fetch(
    `${url}LASProcessAPI/GetWitnessDetailsData?ApplicationID=LA18926G0OCO3GXC5`,
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

// post call for getting a project rules and bindings

export const postProjectRulesAndBindings = () => {
  return fetch(
    `${url}LASProcessAPI/GetProjectRulesForApplication?ApplicationID=LA18926G0OCO3GXC5`,
    {
      body: JSON.stringify({ UserId }),

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

// post call for getting milestone details and bindings

// export const postMilestoneDetailsAndBindings = () => {
//   return fetch(
//     `${url}LASProcessAPI/GetMilestoneActivities?ApplicationID=${}
//     `,
//     {
//       //  credentials: "include",
//       headers: {
//         "content-type": "application/json"
//         // tslint:disable-next-line:object-literal-sort-keys
//         // Accept: "application/json"
//       },
//       method: "GET"
//     }
//   ).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw res;
//   });
// };

// post call for Work Flow based on Application id

export const postWorkFlowDetails = () => {
  return fetch(
    `${url}LASProcessAPI/GetWorkFlowBasedOnApplication?ApplicationID=LA18926G0OCO3GXC5`,
    {
      body: JSON.stringify({ UserId }),

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
