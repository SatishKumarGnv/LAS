import { IEditRoleProps, IEditRoleValues } from "src/DefaultLayout/HomePage";

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
export const getRoleTypeMasterValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetRoleDetails
    `,
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

// post call for edit document type values

export const postEditRoleTypeValues = (
  values: IEditRoleValues & IEditRoleProps,
  ProjectTypeIds: ReadonlyArray<number>
) => {
  const ProjectTypes = ProjectTypeIds.join(",");
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/EditRole
    `,
    {
      body: JSON.stringify({
        CreatedBy: UserId,
        ProjectTypeIDs: ProjectTypes,
        RoleId: values.roleValues.RoleId,
        RoleName: values.RoleName,
        UserId
      }),

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

// post call for adding the new document type values

export const postAddRoleTypeValues = (
  event: number,
  name: string,
  ProjectTypeIds: ReadonlyArray<number>
) => {
  const ProjectTypes = ProjectTypeIds.join(",");

  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/AddNewRole
    `,
    {
      body: JSON.stringify({
        CreatedBy: UserId,
        ProjectTypeIDs: ProjectTypes,
        RoleId: event,
        RoleName: name,
        UserId
      }),
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

// post call for DeActivate the document type values based on Document ID

export const postDeActivateId = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/DeleteRole?RoleId=${props}&UserId=${UserId}
    `,
    {
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

// post call for Activate the Document Type values Based on Document ID
export const postActivateID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/ActivateRole?RoleId=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ ID: props, UserId }),
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
