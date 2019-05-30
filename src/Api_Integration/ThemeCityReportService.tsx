import { url } from "./Config";

export const getThemeCitywiseData = (props: number) => {
  return fetch(
    `${url}MISReportsAPI/GetTowsnshipWiseRevenueData?TownshipId=${props}`,
    {
      credentials: "include",
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
export const getTownShipData = () => {
  return fetch(`${url}LASProcessAPI/GetTownshipsList`, {
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
