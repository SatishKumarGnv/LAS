// import { ILandAreaUnitsStateValues } from "../Container/LandAreaUnitsState";
import { IEditLandAreaValues } from "src/Container/LandAreaUnitsState";
import { IEditLandAreaProps } from "src/Masters/LandAreaUnits/LandAreaUnits";

const item = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

export const getLandAreaUnitValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetUnitsDetails
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

// post call for edit document type values

export const postEditlandAreaValues = (
  values: IEditLandAreaProps & IEditLandAreaValues
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/EditUnits?UnitsName=${
      values.UnitsName
    }&UnitsId=${values.UnitsId}
      `,
    {
      body: JSON.stringify({
        UnitsId: values.UnitsId,
        UnitsName: values.UnitsName,
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

export const postAddLandAreaValues = (event: any, name: any) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/AddNewUnits?unitsName=${name}&UnitsId=${event}
      `,
    {
      body: JSON.stringify({ unitsName: name, UnitsId: event, UserId }),
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
    `http://sadaptms.com:894/api/MastersAPI/DeleteUnits?UnitsId=${props}&UserId=${UserId}
      `,
    {
      body: JSON.stringify({ UnitsId: props, UserId }),

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

// // post call for Activate the Document Type values Based on Document ID

export const postActivateID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/ActivateUnits?ID=${props}&UserId=${UserId}
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
