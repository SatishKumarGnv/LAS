import {
  ICreateNewUserValues,
  IFingerValues
  // IProjectTypeValues
} from "src/Container/CreateNewUserState";
import { url } from "./Config";

// import { url } from "./Config";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
 let ProjectTypeIDs: any;
let Department: any;
let Mode: any;
let CompanyID: any;
let District: any;
let Town: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
  ProjectTypeIDs = user !== null || user !== undefined ? user.model.ProjectTypeIds : 0;
  //   user !== null || user !== undefined ? user.model.ProjectTypeIDs : 0;
  Department = user !== null || user !== undefined ? user.model.Department : 0;
  Mode = user !== null || user !== undefined ? user.model.Mode : 0;
  District = user !== null || user !== undefined ? user.model.DistrictId : 0;
  CompanyID = user !== null || user !== undefined ? user.model.CompanyID : 0;
  Town = user !== null || user !== undefined ? user.model.TownId : 0;
}

export const getDepartmentNames = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetDepartment`, {
    credentials: "include",
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

export const getRoleNames = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetRolesListDetails`, {
    credentials: "include",

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
export const getFingerNames = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetFingersList`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const postAllValues = (
  props: ICreateNewUserValues & IFingerValues,
 // ProjectType: ReadonlyArray<number>,
  image: string
) => {
 // const ProjectTypeIds = ProjectType.join(",");
  return fetch(
    `http://sadaptms.com:894/api/UserManageMentAPI/CreateNewUserByAdmin`,
    {
      body: JSON.stringify({
        FirstName: props.firstName,
        SurName: props.surName,
        // tslint:disable-next-line:object-literal-sort-keys
        MiddleName: props.middleName,
        Email: props.emailAddress,
        UserName: props.userName,
        Gender: props.gender,
        RoleId: props.RoleId,
        BioMetricRequest: props.BioMetricRequest,
        DisplayName: props.displayName,
        ProjectTypeIds:ProjectTypeIDs,
        ImagePath: image,
        Department,
        PhoneNumber: props.phoneNumber,
        Mode,
        District,
        Town,
        CompanyID,
        UserId
      }),
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

export const getProjectTypeNames = () => {
  return fetch(`${url}/MastersAPI/GetProjectTypes`, {
    credentials: "include",
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
