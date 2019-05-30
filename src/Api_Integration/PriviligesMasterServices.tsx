import {
  IPrivilegesStateValues,
  ISelectRoleValues
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
export const getRoleSelectedDropdownChange = (props: number) => {
  return fetch(`${url}AdminAPI/GetPrivilegeDetailsForRole?RoleId=${props}`, {
    // body: JSON.stringify({ RoleId: props, UserId }),
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

export const getMenuItems = (id: number) => {
  return fetch(
    `http://sadaptms.com:894/api/AdminAPI/GetMenuItemsBasedOnRole?RoleId=${id}&UserId=${UserId}`,
    {
      credentials: "include",
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    }
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .catch(_ => {
      // tslint:disable-next-line:no-console
      console.log(_);
    });
};

export const getUserItems = (id: number) => {
  return fetch(`${url}AdminAPI/GetUrlPathsBasedOnRoleId?RoleId=${id}`, {
    credentials: "include",

    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
// onSubmit

export const submitPrivilegesMaster = (
  props: ISelectRoleValues & IPrivilegesStateValues,
  selectedIds: string
) => {
  return fetch(`${url}AdminAPI/InsertRolePriviliges`, {
    body: JSON.stringify({
      CreatedBy: UserId,
      RoleId: props.RoleId,
      SelectedKeys: selectedIds
    }),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
