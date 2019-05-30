export const getRolesList = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetRolesListDetails`, {
    headers: {
      "Content-Type": "application/json"
    },
    // credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getChangeUserGridList = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/UserManageMentAPI/GetAllUsers?SelectedRoleId=${props}`,
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
export const getUpdateRoles = (props: ReadonlyArray<any>) => {
  const selectedUsers = props.join(",");
  return fetch(
    `http://sadaptms.com:894/api/UserManageMentAPI/UpdateRolesForUsers`,
    {
      body: JSON.stringify({
        selectedUsers
      }),
      credentials: "include",

      headers: {
        "content-type": "application/json"
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
