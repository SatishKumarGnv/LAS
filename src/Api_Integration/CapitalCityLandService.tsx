import { url } from "./Config";

export const getTotalLandsForReportChart = () => {
  return fetch(`${url}MISReportsAPI/GetTownshipWiseTotalLandsReport`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
    // tslint:disable-next-line:object-literal-sort-keys
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getTotalLandsForReportTable = () => {
  return fetch(`${url}MISReportsAPI/GetTownshipWiseTotalLandsReportGrid`, {
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
