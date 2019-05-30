import { IEditDocumentValues } from "src/Container/MasterState";
import { IEditDocumentProps } from "src/Masters/DocumentTypeMaster/DocumentTypeMaster";

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

export const getDocumentTypeMasterValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetDocumentTypeDetails
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

export const postEditDocumentTypeValues = (
  values: IEditDocumentProps & IEditDocumentValues
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/EditDocumentType?DocumentName=${
      values.DocumentName
    }&DocumentId=${values.DocumentId}
    `,
    {
      body: JSON.stringify({
        CreatedBy: UserId,
        DocumentId: values.DocumentId,
        DocumentName: values.DocumentName
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

export const postAddDocumentTypeValues = (id: number, name: any) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/AddNewDocumentType
    `,
    {
      body: JSON.stringify({
        CreatedBy: UserId,
        DocumentId: id,
        DocumentName: name
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

export const postDeActivateId = (props: any) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/DeleteDocumentType?ID=${props}&UserId=${UserId}
    `,
    {
      body: JSON.stringify({ ID: props, UserId }),
      // credentials: "include",
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
export const postActivateID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/ActivateDocumentType?ID=${props}&UserId=${UserId}
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
