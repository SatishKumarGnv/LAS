import { url } from "./Config";

// import { IUserLoginAuditStateValues } from "../Container/LoginAuditTrailState";

export const getLoginAuditTrailDetails = (
  DepartmentId: number,
  FromDate: string,
  ToDate: string
) => {
  return fetch(
    `${url}MISReportsAPI/GetLoginAuditDetailDatatable?DepartmentId=${DepartmentId}&FromDate=${FromDate}&ToDate=${ToDate}`,
    {
      body: JSON.stringify({ DepartmentId, FromDate, ToDate }),
      credentials: "include",
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

export const getUserWiseDetails = (
  DepartmentId: number,
  FromDate: string,
  ToDate: string
) => {
  return fetch(
    `${url}MISReportsAPI/GetUserWiseDetailDatatable?DepartmentId=${DepartmentId}&FromDate=${FromDate}&ToDate=${ToDate}`,
    {
      body: JSON.stringify({ DepartmentId, FromDate, ToDate }),
      credentials: "include",
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
export const getSelectDepartmentValues = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetDepartment`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
