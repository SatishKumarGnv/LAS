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

// table data for AllocationType
export const getAllocationTypeValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAllocationSubTypeDetails
  `,
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

// fetch call for dropdown of Allocate To
export const getAllocatedToList = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAllocationTypeDetails
    `,
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

export const getEditAllocationValues = (AllocateToId: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAllocationSubTypeDetailsById?AllocateToId=${AllocateToId}
    `,
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

export const postEditAllocationValues = (
  AllocationId: number,
  AllocationSubTypeId: number,
  AllocationSubTypeName: string
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/EditAllocationSubType?AllocationId=${AllocationId}&AllocationSubTypeId=${AllocationSubTypeId}
    &AllocationSubTypeName=${AllocationSubTypeName}
    `,
    {
      body: JSON.stringify({
        AllocationId,
        AllocationSubTypeId,
        AllocationSubTypeName,
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

export const getAddAllocationValues = (
  AllocationId: number,
  // AllocationSubTypeId: number,
  AllocationSubTypeName: string
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/AddNewAllocationSubType?AllocationId=${AllocationId}
  &AllocationSubTypeName=${AllocationSubTypeName}
      `,
    {
      body: JSON.stringify({ AllocationId, AllocationSubTypeName, UserId }),

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

// post call for DeActivate the Allocation values based on Document ID

export const postDeActivateId = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/DeleteAllocationSubType?ID=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ ID: props, UserId }),

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

// post call for Activate the Allocation values Based on Document ID
export const postActivateID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/ActivateAllocationSubType?ID=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ ID: props, UserId }),

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
