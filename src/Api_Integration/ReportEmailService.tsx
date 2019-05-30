import { url } from "./Config";

export const getEmailGridValues = (
  TemplateId: number,
  FromDate: string,
  ToDate: string
) => {
  return fetch(
    `${url}MISReportsAPI/GetEmailSentDetailDatatable?EmailTemplateId=${TemplateId}&FromDateValue=${FromDate}&ToDateValue=${ToDate}`,
    {
      body: JSON.stringify({
        EmailTemplateId: TemplateId,
        FromDateValue: FromDate,
        ToDateValue: ToDate
      }),
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
export const getEmailFailGridValues = (
  TemplateId: number,
  FromDate: string,
  ToDate: string
) => {
  return fetch(
    `${url}MISReportsAPI/GetEmailFailedDetailDatatable?EmailTemplateId=${TemplateId}&FromDateValue=${FromDate}&ToDateValue=${ToDate}`,
    {
      body: JSON.stringify({
        EmailTemplateId: TemplateId,
        FromDateValue: FromDate,
        ToDateValue: ToDate
      }),
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

export const getEmailSentModuleValues = () => {
  return fetch(
    `${url}EmailTemplateAPI/GetAllTemplateNames
    `,
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
