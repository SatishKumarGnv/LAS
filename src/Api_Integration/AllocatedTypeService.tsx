import { url } from "./Config";

// import { IApplicationStateProps } from "../Container/SubmittedApplicationState";
const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

export const getAllocatedToValues = () => {
  return fetch(
    `${url}LASProcessAPI/GetAllocatedInProgressApplicationsTownshipWise?UserId=${UserId}`,
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
