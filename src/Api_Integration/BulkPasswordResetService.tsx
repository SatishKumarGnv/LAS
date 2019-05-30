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
export const getRolesListDetails = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetRolesListDetails`, {
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
export const getGridDetails = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/UserManageMentAPI/GetAllUsers?SelectedRoleId=${props}`,
    {
      // body: JSON.stringify({ UserId }),

      // credentials: "include",
      headers: {
        // Accept: "application/json",
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

export const getChangePassword = (
  props: ReadonlyArray<number>,
  userId: number
) => {
  const SelectedIds = props.join(",");
  return fetch(`http://sadaptms.com:894/api/UserManageMentAPI/ResetPasswords`, {
    body: JSON.stringify({ SelectedUsers: SelectedIds, UserId }),
    // credentials: "include",
    headers: {
      // Accept: "application/json",
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
