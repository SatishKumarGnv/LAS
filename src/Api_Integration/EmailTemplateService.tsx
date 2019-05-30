import {
  IEmailTemplateStateValues,
  ISMTPDataProps,
  ISMTPValues
} from "../Container/EmailTemplateState";

import { url } from "./Config";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}
export const GetAllTemplateNames = () => {
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

export const GetEmailTemplate = (props: any) => {
  return fetch(
    `${url}MastersAPI/GetEmailTemplateBasedOnTemplateName?templateName=${props}`,

    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
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

export const postEmailTemplateValues = (
  props: IEmailTemplateStateValues,
  value: any,
  image: string,
  SendEmailNotifications: number,
  userId: number
) => {
  // const fileInput = document.getElementsByName("uploaded_file")[0];
  const values = value.toString("html").toString();
  const body = JSON.stringify({
    UserId,
    // tslint:disable-next-line:object-literal-sort-keys
    CCEmail: props.CCEmail,
    HtmlContent: values,
    HeaderImage: image,
    // HtmlContent: props.HtmlContent,
    SendEmailNotifications,
    Subject: props.Subject,
    TemplateCode: props.TemplateId,
    TemplateName: props.TemplateName
  });
  return fetch(
    `http://sadaptms.com:894/api/EmailTemplateAPI/InsertEmailTemplateApi`,
    {
      body,
      // credentials: "include",
      headers: {
        // Accept: "application/json",
        // "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
      },
      method: "POST"
      // tslint:disable-next-line:object-literal-sort-keys

      // tslint:disable-next-line:object-literal-sort-keys
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// GetEmailSettings

export const GetEmailSettings = () => {
  return fetch(`${url}EmailTemplateAPI/GetEmailSettings`, {
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

// SaveEmailSettings

export const SaveEmailSettings = (props: ISMTPDataProps & ISMTPValues) => {
  return fetch(`${url}EmailTemplate/AddEmailSettings`, {
    body: JSON.stringify({ props, CreatedBy: UserId }),
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

export const uploadImage = (values: any) => {
  return fetch(`${url}LASProcessAPI/UploadEmailHeaderImage`, {
    body: JSON.stringify({ Photo: values, UserId }),
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

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("FileName", file.name);
  return fetch(`${url}LASProcessAPI/UploadEmailHeaderImage`, {
    body: formData,
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.text();
    }
    throw res;
  });
};
