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
export const getPropertyTypeGridValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/GetPropertyTypeDetails
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
export const getDropDownList = () => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/GetActiveCategoryOwnershipDetails?UserId=${UserId}
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

// export const getEditAllocationValues = (AllocateToId: number) => {
//   return fetch(
//     `http://sadaptms.com:894/api/MastersAPI/GetAllocationSubTypeDetailsById?AllocateToId=${AllocateToId}
//     `,
//     {
//       credentials: "include",
//       method: "GET"
//     }
//   ).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw res;
//   });
// };

export const postEditPropertyTypeValues = (
  CategoryOwnershipId: number,
  PropertyTypeId: number,
  CategoryOwnershipName: string,
  PropertyTypeName: string
) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/EditPropertyType
    `,
    {
      body: JSON.stringify({
        CategoryOwnershipId,
        CategoryOwnershipName,
        PropertyTypeId,
        PropertyTypeName
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

export const getAddPropertyTypeValues = (
  CategoryOwnershipId: number,
  // AllocationSubTypeId: number,
  PropertyTypeName: string
) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/AddNewPropertyType
      `,
    {
      body: JSON.stringify({ CategoryOwnershipId, PropertyTypeName }),

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

export const postDeActivatePropertyId = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/DeletePropertyType?ID=${props}&UserId=${UserId}
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
export const postActivatePropertyID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/ActivatePropertyType?ID=${props}&UserId=${UserId}
    `,
    {
      headers: {
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
