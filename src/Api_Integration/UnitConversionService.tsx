import { IEditUnitConversionValues } from "src/Container/UnitConversionState";
import { IEditUnitProps } from "src/Masters/UnitConversions/UnitConversionTypeMaster";
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
export const getUnitConversionGridValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetUnitConversionDetails
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

export const postEditUnitConversionTypeValues = (
  values: IEditUnitProps & IEditUnitConversionValues,
  UnitConversionId: number
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/EditUnitConversion?UnitName=${
      values.UnitName
    }&UnitConvertionId=${UnitConversionId}
    `,
    {
      body: JSON.stringify({ UserId }),
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

export const postAddUnitConversionTypeValues = (event: any, name: any) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/AddNewUnitConversion?UnitName=${name}&UnitConvertionId=${event}
    `,
    {
      body: JSON.stringify({ UnitName: name, UnitConvertionId: event, UserId }),

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

export const postDeActivateId = (props: any) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/DeleteUnitConversion?UnitConversionId=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ UnitConversionId: props, UserId }),
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

// post call for Activate the Document Type values Based on Document ID
export const postActivateID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/ActivateUnitConversion?ID=${props}&UserId=${UserId}
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
