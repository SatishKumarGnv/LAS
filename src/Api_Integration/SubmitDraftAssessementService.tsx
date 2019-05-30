import { url } from "./Config";
import { httpGet } from "./MyProfileService";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

export const GetSubmitDraftAssessments = () =>
  httpGet("AssessmentAPI/GetSubmitDraftAssessments");

export const GetDraftAssessmentViewButtonDetails = (RequestId: string) => {
  return fetch(
    `${url}AssessmentAPI/GetAssessmentDetails_By_ID_draft?RequestId=${RequestId}&UserId=${UserId}`,
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

export const GetDraftAssessmentClickToProceedDetails = (RequestId: string) => {
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
