import {
  // IChangeAvatarValues,
  IChangePasswordValues,
  IPersonalInfoValues,
  ISelectFingerListProps
} from "../DefaultLayout/HomePage";
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

export const getMyProfileDetails = () => {
  return fetch(
    `http://sadaptms.com:894/api/ProfileDetailsAPI/GetUserProfileDetails?UserId=${UserId}`,
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
export const getMyProfileRoleDetails = () => {
  return httpGet("MastersAPI/GetRolesListDetails");
};
export const getMyProfileDepartmentDetails = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetDepartment`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getUserProfileDetails = (
  props: IPersonalInfoValues,
  userId: number
) => {
  return fetch(
    `${url}ProfileDetails/UpdateUserProfileDetails?FirstName=${
      props.FirstName
    }&DisplayName=${props.DisplayName}&Email=${props.Email}&PhoneNumber=${
      props.PhoneNumber
    }&MiddleName=${props.MiddleName}&SurName=${props.SurName}&UserId=${UserId}`,
    {
      // body: JSON.stringify(props),
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

export const getFingerListDetails = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetFingersList`, {
    // credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const postChangePasswordDetails = (
  props: IChangePasswordValues & ISelectFingerListProps
) => {
  return fetch(`${url}ProfileDetailsAPI/UpdatePasswordAPI`, {
    body: JSON.stringify({
      CurrentPassword: props.CurrentPassword,
      NewPassword: props.NewPassword,
      UserId
    }),
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
export const postChangeAvatarValues = (values: string, userId: number) => {
  return fetch(`${url}ProfileDetailsAPI/UpdateProfilePic?UserId=${UserId}`, {
    body: JSON.stringify({ Photo: values, UserId }),
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
export const postCaptureFingerDetails = (
  cPassword: string,
  selectedFinger: number
) => {
  return fetch(
    `http://192.168.100.18:3000:894/api/UserManageMentAPI/UpdateCapturedContent
    `,
    {
      body: JSON.stringify({
        UserId,
        cPassword,
        selectedFinger
      }),
      // credentials: "include",
      headers: {
        "Content-Type": "application/json"
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
export function httpGet(resourceUrl: string) {
  return fetch(`${url}${resourceUrl}`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
}

export function httpPost(resourceUrl: string, body: any) {
  return fetch(`${url}${resourceUrl}`, {
    body,
    // credentials: "include",
    headers: {
      "Content-Type": "application/json"
      // tslint:disable-next-line:object-literal-sort-keys
      // Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
}
