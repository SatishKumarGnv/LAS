import {
  IAddRejectionProps,
  IAddRejectionValues
} from "src/Container/RejectionReasonsState";
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

export const getRejectionTypeValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetRejectionDetails
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

// fetch call for dropdown of Allocate To
export const getAllocationTypeDetails = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAllocationTypeDetails
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
export const getAllocationSubTypeDetails = (AllocationTypeId: number) => {
  return fetch(
    `${url}LASProcessAPI/GetAllocationSubTypes?AllocationTypeId=${AllocationTypeId}
        `,
    {
      //  body: JSON.stringify({ AllocationTypeId, UserId }),
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
export const getAgreementSubTypeDetails = (
  AllocationTypeId: number,
  AllocationSubTypeId: number
) => {
  return fetch(
    `${url}LASProcessAPI/GetAgreementTypes?AllocationTypeId=${AllocationTypeId}&AllocationSubTypeId=${AllocationSubTypeId}
          `,
    {
      body: JSON.stringify({ AllocationTypeId, AllocationSubTypeId, UserId }),
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

export const postEditRejectionValues = (
  AllocationTypeId: number,
  AllocationSubTypeId: number,
  AgreementTypeId: number,
  RejectionId: number,
  RejectionType: string
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/EditRejection
    `,
    {
      body: JSON.stringify({
        AgreementTypeId,
        AllocationSubTypeId,
        AllocationTypeId,
        RejectionId,
        RejectionType,
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
// to add the new values to the allocationType
export const getAddRejectionValues = (
  props: IAddRejectionProps & IAddRejectionValues
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/AddnewRejection?AllocationTypeId=${
      props.AllocationId
    }
    &AllocationSubTypeId=${props.AllocationSubTypeId}&AgreementTypeId=${
      props.AgreementId
    }&RejectionType=${props.RejectionType}
      `,
    {
      body: JSON.stringify({
        AgreementTypeId: props.AgreementId,
        AllocationSubTypeId: props.AllocationSubTypeId,
        AllocationTypeId: props.AllocationSubTypeId,
        RejectionType: props.RejectionType,
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

// post call for DeActivate the Allocation values based on Document ID

export const postDeActivateId = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/DeleteRejection?ID=${props}&UserId=${UserId}
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
    `http://sadaptms.com:894/api/MastersAPI/ActivateRejection?ID=${props}&UserId=${UserId}
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
