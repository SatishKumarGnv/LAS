import { IEditCategoryValues } from "src/DefaultLayout/HomePage";
import { IEditCategoryProps } from "src/PTMSMASTERS/Categery/Category";

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

export const getCategoryGridValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/GetCategoryOwnershipDetails?UserId=${UserId}
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

export const postEditCategoryValues = (
  values: IEditCategoryProps & IEditCategoryValues & any
) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/EditCategoryOwnership
    `,
    {
      body: JSON.stringify({
        CategoryOwnershipId: values.CategoryOwnershipId,
        CategoryOwnershipName: values.CategoryOwnershipName
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

export const postAddCategoryValues = (id: number, name: any) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/AddNewCategoryOwnership
    `,
    {
      body: JSON.stringify({
        CategoryOwnershipName: name
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

export const postDeActivateCategoryId = (props: any) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/DeleteCategoryOwnership?ID=${props}&UserId=${UserId}
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
export const postActivateCategoryID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/AssessmentAPI/ActivateCategoryOwnership?ID=${props}&UserId=${UserId}
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
