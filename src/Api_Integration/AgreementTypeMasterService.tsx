import {
  IAddAgreementProps,
  IAddAgreementValues
} from "src/Container/AgreementTypeMasterState";
import { url } from "./Config";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: number;

if (item) {
  user = JSON.parse(item);

  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

// table data for AllocationType
export const getAgreementTypeValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAgreementTypeDetails
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
      // body: JSON.stringify({ AllocationTypeId, UserId }),
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
export const getAgreementDetails = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAgreementTypeDetailsById?AgreementId=${props}
        `,
    {
      // body: JSON.stringify({ UserId }),

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

export const postEditAgreementValues = (
  AllocationTypeId: number,
  AllocationSubTypeId: number,
  AgreementName: string,
  AgreementId: number
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/EditAgreementType?AllocationTypeId=${AllocationTypeId}&AllocationSubTypeId=${AllocationSubTypeId}&AgreementName=${AgreementName}
    `,
    {
      body: JSON.stringify({
        AgreementName,
        AllocationSubTypeId,
        AllocationTypeId,
        CreatedBy: UserId
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

export const getAddAgreementValues = (
  props: IAddAgreementProps & IAddAgreementValues
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/AddnewAgreementType?AllocationTypeId=${
      props.AllocationTypeId
    }&AllocationSubTypeId=${props.AllocationSubTypeId}&AgreementName=${
      props.newAgreementName
    }
      `,
    {
      body: JSON.stringify({
        AgreementName: props.newAgreementName,
        AllocationSubTypeId: props.AllocationSubTypeId,
        AllocationTypeId: props.AllocationTypeId,
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
    `http://sadaptms.com:894/api/MastersAPI/DeleteAgreementType?ID=${props}&UserId=${UserId}
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

export const postActivateID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/ActivateAgreementType?ID=${props}&UserId=${UserId}
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
