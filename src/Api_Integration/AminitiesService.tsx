import { IEditAminitiesValues } from "src/DefaultLayout/HomePage";
import { IEditAminityProps } from "src/PTMSMASTERS/Aminities/Aminities";

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

export const getAminitiesGridValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/GetAmenitiesDetails
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

export const postEditAminitiesValues = (
  values: IEditAminityProps & IEditAminitiesValues
) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/EditAmenities
    `,
    {
      body: JSON.stringify({
        AmenitiesId: values.AmenitiesId,
        AmenitiesName: values.AmenitiesName
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

export const postAddAminitiesTypeValues = (id: number, name: any) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/AddAmenities
    `,
    {
      body: JSON.stringify({
        // AmenitiesId: id,
        AmenitiesName: name
        // CreatedBy: UserId
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

export const postDeActivateAminitiesId = (props: any) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/DeleteAmenities?ID=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ ID: props, UserId }),
      credentials: "include",
      headers: {
        "content-type": "application/json"
        // tslint:disable-next-line:object-literal-sort-keys
        // Accept: "application/json"
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
export const postActivateAminitiesID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/ActivateAmenities?ID=${props}&UserId=${UserId}
    `,
    {
      credentials: "include",
      // body: JSON.stringify({ ID: props }),
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
