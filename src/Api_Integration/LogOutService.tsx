import { IForgotPasswordValues } from "src/ForgotPassword/ForgotPassword";
import { url, url5 } from "./Config";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}
export const getLogOutDetails = () => {
  return fetch(`${url}Login/LogOut`, {
    // credentials: "include",
    headers: {
      "content-type": "application/json"
      // tslint:disable-next-line:object-literal-sort-keys
      // Accept: "application/json"
    },
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getNotifications = () => {
  return fetch(`${url5}GetUserPendingItems?UserId=${UserId}`, {
    credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const postForgotPassword = (props: IForgotPasswordValues) => {
  return fetch(`${url}LoginAPI/ForgotPassword`, {
    body: JSON.stringify({
      Email: props.Email,
      Host: "http://192.168.100.18:3000/login",
      UserName: props.UserName
    }),
    // credentials: "include",
    headers: {
      "content-type": "application/json"
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
};
