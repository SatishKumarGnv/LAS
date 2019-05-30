// import { url } from "./Config";
const item: any = localStorage.getItem("userDetails");
let user: any;
// let RoleId: any;
let UserId: any;

if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}
export const GetAllTemplateNames = () => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetAllocationTypeDetails`,
    {
      credentials: "include",
      method: "GET"
      // tslint:disable-next-line:object-literal-sort-keys
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const GetProcessTypes = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/ProcessTypes`, {
    credentials: "include",
    method: "POST"
    // tslint:disable-next-line:object-literal-sort-keys
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const GetListOfDocuments = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetListofDocuments`, {
    credentials: "include",

    // body: JSON.stringify({ UserId }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
    // mode: "no-cors"

    // tslint:disable-next-line:object-literal-sort-keys
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// document type list2

export const getDocumentTypeList2 = (
  AllocationId: number,
  processId: number
) => {
  return fetch(
    `http://sadaptms.com:894/api/MastersAPI/GetDocumentListBasedOnProcess?processId=${processId}&AllocationTypeId=${AllocationId}`,
    {
      // body: JSON.stringify({
      //   AllocationTypeId: AllocationId,
      //   UserId,
      //   processId
      // }),
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
      // tslint:disable-next-line:object-literal-sort-keys
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

//

export const postInsertDetails = (
  AllocationId: number,
  processId: number,
  selectedkeys: ReadonlyArray<number>
) => {
  const selected = selectedkeys
    .filter(x => x !== undefined || x !== null)
    .join(",");
  return fetch(`http://sadaptms.com:894/api/MastersAPI/InsertDocuments`, {
    body: JSON.stringify({
      AllocationTypeId: AllocationId,
      UserId,
      processId,
      // tslint:disable-next-line:object-literal-sort-keys
      DocumentsList: selected
    }),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
    // tslint:disable-next-line:object-literal-sort-keys
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
