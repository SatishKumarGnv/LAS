// import { remove } from "../Container/ProposalFormState";
// import { url } from "./Config";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

export const getAllRolesListDetails = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetRolesListDetails`, {
    headers: {
      "content-type": "application/json"
    },
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getActionListDetails = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetUserValidateActions`,
    {
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
export const getAllGridDetails = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/UserManageMentAPI/GetCompleteUsers?SelectedRoleId=${props}`,
    {
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

export const getUpdateStatus = (props: ReadonlyArray<string>) => {
  return fetch(
    `http://sadaptms.com:894/api/UserManageMentAPI/UpdateActionsForUsers`,
    {
      body: JSON.stringify({ props, UserId }),
      headers: {
        "content-type": "application/json"
        // tslint:disable-next-line:object-literal-sort-keys
        // Accept: "application/json"
      },
      //  credentials: "include",
      method: "POST"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
