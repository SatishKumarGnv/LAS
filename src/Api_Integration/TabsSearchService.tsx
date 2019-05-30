import { IApplicationFormProps } from "src/Applications/ApplicationForm";
import { ISearchValues } from "src/DefaultLayout/HomePage";
import {
  IapplicationProjectRulesValues,
  IMileStoneValues,
  IprojectRuleProps,
  ITreeFormValues
} from "src/DefaultLayout/HomePage";
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

export const getApplicationSearchDetails = (props: any) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationDetails?ApplicationID=${props}&UserId=${UserId}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
        // tslint:disable-next-line:object-literal-sort-keys
        // Accept: "application/json"
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
export const getDashboardLinkDetails = (props: any) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationDetails?ApplicationID=${props}&UserId=${UserId}`,
    {
      credentials: "include",
      headers: {
        "content-type": "application/json"
        // tslint:disable-next-line:object-literal-sort-keys
        // Accept: "application/json"
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

// Approve Api
export const postApproveValues = (
  nextUser: number,
  props: ReadonlyArray<ISearchValues>,
  ApplicationID: string,
  Comments: string
) => {
  return fetch(`${url}LASProcessAPI/UpdateWorkflowStatus`, {
    body: JSON.stringify({
      ApplicationId: ApplicationID,
      ApplicationStatusId: 5,
      ProcessComments: Comments,
      TypeOfAllocation: props[0].AllocationTypeId,
      UserId,
      next_user: nextUser,
      normal_free: true
    }),
    // credentials: "include",
    headers: {
      "content-type": "application/json"
      // tslint:disable-next-line:object-literal-sort-keys
      // Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const postApprovalValues = (
  nextUser: number,
  props: ReadonlyArray<ISearchValues>,
  ApplicationID: string,
  Comments: string,
  StatusId: number
) => {
  return fetch(`${url}LASProcessAPI/UpdateWorkflowStatus`, {
    body: JSON.stringify({
      ApplicationId: ApplicationID,
      ApplicationStatusId: StatusId,
      ProcessComments: Comments,
      TypeOfAllocation: props[0].AllocationTypeId,
      UserId,
      next_user: nextUser,
      normal_free: true
    }),
    // credentials: "include",
    headers: {
      "content-type": "application/json"
      // tslint:disable-next-line:object-literal-sort-keys
      // Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// Review Api

export const updateReviewDetails = (props: ReadonlyArray<ISearchValues>) => {
  return fetch(
    `${url}LASProcessAPI/GetRejectionsList?ApplicationID=${
      props[0].ApplicationId
    }`,
    {
      //  credentials: "include",
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

export const getParcelNumberValues = (props: ISearchValues) => {
  return fetch(`${url}LASProcessAPI/UpdateParecelNumber`, {
    method: "POST",
    // tslint:disable-next-line:object-literal-sort-keys
    body: JSON.stringify(props)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// getting map details

// export const getMapDetailValues = (props: ReadonlyArray<ISearchValues>) => {
//   return fetch(
//     `${url}LASProcess/GetMapDetails?ApplicationId=${props[0].ApplicationId}`,
//     {
//       credentials: "include",
//       method: "GET"
//     }
//   ).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw res;
//   });
// };

export const getNoteFileValues = (props: string) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationAuditTrail?ApplicationId=${props}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const getApprovalFlowValues = (props: string) => {
  return fetch(
    `${url}LASProcessAPI/GetWorkFlowBasedOnApplication?ApplicationId=${props}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
export const getProjectRulesValues = (props: string) => {
  return fetch(
    `${url}LASProcessAPI/GetProjectRulesForApplication?ApplicationId=${props}`,
    {
      credentials: "include",
      method: "GET"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const MapUrL = () => {
  return fetch(`http://192.168.100.18:3000/UAIMSMap/index.html`, {
    // credentials: "include",
    method: "GET",
    // tslint:disable-next-line:object-literal-sort-keys
    headers: {
      "Content-Type": "text/html"
    }
  }).then(res => {
    if (res.ok) {
      return res.text();
    }
    throw res;
  });
};

export const getMapUpdatedValues = (Id: string) => {
  return fetch(`${url}LASProcessAPI/GetMapValues?ApplicationId=${Id}`, {
    credentials: "include",
    method: "GET"
    // tslint:disable-next-line:object-literal-sort-keys
    // headers: {
    //   "Content-Type": "text/html"
    // }
  }).then(res => {
    if (res.ok) {
      return res.text();
    }
    throw res;
  });
};

// const uniqueNumber = (arr: any) => {
//   const newArray = [];
//   for (const i of arr) {
//     for (const j of newArray) {
//       if (newArray[j] !== arr[i]) {
//         newArray.push(i);
//       }
//     }
//   }
//   return newArray;
// };
// update Parcel Number
export const UpdateParecelNumber = (
  p: ITreeFormValues & IApplicationFormProps & IprojectRuleProps,
  props: ReadonlyArray<ISearchValues>,
  ApplicationID: string,
  comments: string
) => {
  // const applicationProjectRules = p.applicationProjectRules.map(
  //   (x: IapplicationProjectRulesValues) => x.RuleId
  // );

  // const list = uniqueNumber(applicationProjectRules).join(",");

  //  normal_free: true

  return fetch(`${url}LASProcessAPI/UpdateParecelNumber`, {
    body: JSON.stringify({
      ApplicationId: ApplicationID,
      ApplicationStatusId: 5,
      AssignedProjectRules: props[0].ProjectRules,
      Boundaries: props[0].Boundaries,
      District: props[0].District,
      LandAllocationTypeId: props[0].AllocationTypeId,
      Mandal: props[0].Mandal,
      MapBlock: props[0].Block,
      MapColony: props[0].Colony,
      MapPlot: props[0].Plot,
      MapSector: props[0].Sector,
      MapTownship: props[0].TownshipId,
      MilestoneDetailsVMLst: [],
      ParcelId: props[0].ParcelId,
      ProcessComments: comments,
      // ProjectRulesList: list,
      SurveyNumberByPlanning: props[0].SurveyNumberByPlanning,
      UpdatedLandAreaByPlanning: props[0].RequiredLandArea,
      UploadedFiles: p.ruleImage,
      UserId,
      Village: props[0].Village,
      next_user: p.selectDepartmentId,

      // tslint:disable-next-line:object-literal-sort-keys
      AllocationSubType: props.map(x => x.AllocationSubTypeId)[0],
      ApplStatusId: 5,
      AreaInSqMeters: 0,
      AuthPersonAge: props.map(x => x.AuthDateOfBirth)[0],
      AuthPersonEmail: props.map((x: ISearchValues) => x.AuthEmailId)[0],
      AuthPersonMobileNumber: props.map(
        (x: ISearchValues) => x.AuthPhoneNumber
      )[0],
      AuthPersonName: props.map((x: ISearchValues) => x.AuthPersonName)[0],
      Bhudhaar: props.map((x: ISearchValues) => x.Bhudhaar)[0],
      Buildingname: "",
      DistrictId: props.map(x => x.DistrictId)[0],
      FinalApprovalDate: null,
      GOMdate: null,
      GOMdateStr: null,
      GOMnumber: null,
      HouseNumber: props.map(x => x.OrgAddress1)[0],
      LOIdate: null,
      LOIdateStr: null,
      LandAreaAllotedByEstates: props.map(x => x.LandAreaAllotedByEstates)[0],
      LeaseAmountperAcre: props.map(x => x.LeaseAmountperAcre)[0],
      LeaseAmountperAcreInWords: null,
      LeaseAmountperAnnum: props.map(x => x.LeaseAmountperAnnum)[0],
      LeaseAmountperAnnumInWords: null,
      LeaseEndDate: props.map(x => x.LeaseEndDate)[0],
      LeaseStartDate: props.map(x => x.LeaseStartDate)[0],
      LeaseTenure: props.map(x => x.LeaseTenure)[0],
      LeaseTenureInWords: null,
      MandalId: props.map(x => x.MandalId)[0],
      MilestoneId: 0,
      NextUserEmailId: "",
      NextUserName: "",
      OrgAddress: props.map(x => x.OrgAddress1 + x.OrgAddress2)[0],
      ProjectDescription: props.map(x => x.ProjDescription)[0],
      ProjectPurpose: props.map(x => x.ProjPurpose)[0],
      ProjectRulesList: p.applicationProjectRules.map(
        (x: IapplicationProjectRulesValues) => ({
          AchievedValue: x.AchievedValue,
          ConditionTypeId: x.ConditionTypeId,
          ConditionValue: x.ConditionValue,
          CreatedBy: x.CreatedBy,
          DocumentPath: x.DocumentPath,
          IsDocumentVerified: x.IsDocumentVerified,
          IsVerified: x.IsVerified,
          MaximumValue: x.MaximumValue,
          MinimumValue: x.MinimumValue,
          ProjRuleTypeId: x.ProjRuleTypeId,
          ReturnCode: x.ReturnCode,
          RuleId: x.RuleId,
          RuleName: x.RuleName,
          SourceTypeId: x.SourceTypeId,
          ThemeCityId: x.TownshipId,
          TownshipId: x.TownshipId,
          UserId,
          Value: x.Value
        })
      ),
      ProjectTitle: props.map(x => x.ProjectTitle)[0],
      RelationTypeAndName: props.map(x => x.RelationTypeAndName)[0],
      Remarks: null,
      ReturnCode: 0,
      SelectedRejections: null,
      SurveyNumber: props.map(x => x.SurveyNumber)[0],
      TotalAmount: props.map(x => x.TotalAmountInRupees)[0],
      TotalAmountInWords: "",
      TotalAmountPerAcre: props.map(x => x.TotalAmount)[0],
      TotalAmountPerAcreInWords: null,
      TotalLand: props.map(x => x.TotalLandCost)[0],
      TypeOfAllocation: props.map(x => x.LandAllocationType)[0],
      VillageId: props.map(x => x.Village)[0],
      normal_free: true,
      orgName: props.map(x => x.OrganiztionName)[0]
    }),
    // credentials: "include",
    headers: {
      "content-type": "application/json"
      // tslint:disable-next-line:object-literal-sort-keys
      // Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// LASProcess/InsertMapDetails

// update Parcel Number
export const postInsertMapDetails = (
  p: any,
  props: ReadonlyArray<ISearchValues>,
  ApplicationID: string
) => {
  return fetch(`${url}LASProcessAPI/UpdateParecelNumber`, {
    body: JSON.stringify({
      WorkflowDetails: {
        ApplicationId: ApplicationID,
        AreaInSqMeter: "",
        AreaJSON: 0,
        Block: "",
        Boundaries: props[0].Boundaries,
        Colony: "",
        CompleteDetails: props[0].CompleteDetails,
        District: props[0].District,
        GeometryDataString: props[0].GeometricString,
        GeometryInfo: 0,
        GlobalId: props[0].GlobalId,
        LandAllocationTypeId: props[0].AllocationTypeId,
        Mandal: props[0].Mandal,
        MapPlot: "",
        MilestoneDetailsVMLst: [],
        ParcelId: props[0].ParcelId,
        Plot: 0,
        PlotCode: "",
        ProcessComments: props[0].WorkflowComments,
        ProjectRulesList: props[0].ProjectRules,
        Sector: "",
        SurveyNumberByPlanning: props[0].SurveyNumberByPlanning,
        TempGlobalId: props[0].TempGlobalId,
        Township: props[0].TownshipId,
        UpdatedLandAreaByPlanning: props[0].RequiredLandArea,
        UploadedFiles: "",
        Village: props[0].Village
      },
      // tslint:disable-next-line:object-literal-sort-keys
      UserId
    }),
    // credentials: "include",
    headers: {
      "content-type": "application/json"
      // tslint:disable-next-line:object-literal-sort-keys
      // Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

export const UpdateSurveyNumber = (
  p: ITreeFormValues & IApplicationFormProps & IprojectRuleProps,
  props: ReadonlyArray<ISearchValues>,
  ApplicationID: string,
  comments: string
) => {
  return fetch(`${url}LASProcessAPI/UpdateSurveyNumber`, {
    body: JSON.stringify({
      ApplicationId: ApplicationID,
      ApplicationStatusId: 5,
      LandAllocationTypeId: props.map(x => x.LandAllocationTypeId)[0],
      ProcessComments: comments,
      SurveyNumber: props.map(x => x.SurveyNumber)[0],
      // tslint:disable-next-line:object-literal-sort-keys
      MilestoneDetailsVMLst:
        props.map(x => x.LandAllocationTypeId)[0] !== 1
          ? p.MileStoneArray.map((x: IMileStoneValues) => ({
              MilestoneArea: x.LandRelease,
              MilestoneId: x.MilestoneId,
              ParcelNumber: x.ParcelId,
              SurveyNumber: x.SurveyNumber
            }))
          : [],
      Bhudhaar: props.map(x => x.Bhudhaar)[0],
      UserId,
      next_user: p.selectDepartmentId
    }),
    // credentials: "include",
    headers: {
      "content-type": "application/json"
      // tslint:disable-next-line:object-literal-sort-keys
      // Accept: "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// http://sadaptms.com:899/

export const getProccesComments = (Id: string) => {
  return fetch(
    `${url}LASProcessAPI/GetApplicationAuditTrail?ApplicationId=${Id}`,
    {
      credentials: "include",
      method: "GET"
      // tslint:disable-next-line:object-literal-sort-keys
      // headers: {
      //   "Content-Type": "text/html"
      // }
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// http://sadaptms.com:899/LASProcess/UpdateWorkflowStatus
