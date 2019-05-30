import {
  IAddProjectRuleProps,
  IAddprojectRuleValues,
  IconditionProps,
  IProjectProps,
  IProjectRuleDetails,
  ISourceProps,
  IThemeCityProps
} from "src/Container/ProjectRulesState";
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
export const getProjectRulesMasterValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/GetRulesDetails
    `,
    {
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
export const getProjectRuleTypes = () => {
  return fetch(
    `${url}LASProcessAPI/GetProjectRuleTypes
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
export const getThemeCityTypes = () => {
  return fetch(`${url}/LASProcessAPI/GetTownshipsList`, {
    headers: {
      "content-type": "application/json"
    },
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getSourceTypes = () => {
  return fetch(`http://sadaptms.com:894/api/LASProcessAPI/GetSourceTypes`, {
    credentials: "include",
    // body: JSON.stringify({ UserId }),
    // headers: {
    //   "Content-Type": "application/json"
    // },
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getConditionValues = () => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/GetConditionTypes
        `,
    {
      credentials: "include",

      headers: {
        // Accept: "application/json",
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

export const postEditProjectRuleValues = (props: any) => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/EditRule?ThemeCityId=${
      props.ThemeCityId
    }&RuleId=${props.RuleId}&RuleName=${props.RuleName}&ProjRuleTypeId=${
      props.ProjRuleTypeId
    }
      `,
    {
      body: JSON.stringify({
        model: {
          ProjRuleTypeId: props.ProjRuleTypeId,
          RuleId: props.RuleId,
          RuleName: props.RuleName,
          ThemeCityId: props.ThemeCityId,
          UserId
        }
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

export const postAddRuleTypeValues = (
  props: IProjectRuleDetails &
    IAddprojectRuleValues &
    IAddProjectRuleProps &
    IThemeCityProps &
    ISourceProps &
    IconditionProps &
    IProjectProps,
  RuleName: string
) => {
  return fetch(
    `${url}LASProcessAPI/InsertNewProjectRule?ConditionTypeId=${
      props.ConditionTypeId
    }
    &MaximumValue=${props.maxValue}&MinimumValue=${
      props.minValue
    }&ProjRuleTypeId=${
      props.ProjRuleTypeId
    }&RuleName=${RuleName}&SourceTypeId=${props.RuleSourceTypeId}&TownshipId=${
      props.TownshipId
    }
    &Value=${props.value}
      `,
    {
      body: JSON.stringify({
        // TotalRecords: {
        ConditionTypeId: props.ConditionTypeId,
        MaximumValue: props.maxValue,
        MinimumValue: props.minValue,
        ProjRuleTypeId: props.ProjRuleTypeId,
        RuleName,
        SourceTypeId: props.RuleSourceTypeId,
        TownshipId: props.TownshipId,
        UserId,
        Value: props.value
        // }
      }),
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

// post call for DeActivate the document type values based on Document ID

export const postDeActivateId = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/DeleteRule?ID=${props}&UserId=${UserId}
      `,
    {
      // body: JSON.stringify({ ID: props }),
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

// post call for Activate the Document Type values Based on Document ID
export const postActivateID = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/LASProcessAPI/ActivateRule?ID=${props}&UserId=${UserId}
      `,
    {
      // body: JSON.stringify({ ID: props, UserId }),
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
