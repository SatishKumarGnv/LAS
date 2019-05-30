import { IWorkFlowUserGridValues } from "src/Container/WorkFlowUserMappingState";
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

// table data
export const getGridDataForWorkFlowUser = (
  LandAllocationToId: number,
  AllocationId: number,
  AgreementId: number
) => {
  return fetch(`${url}WorkflowProcessAPI/GetActivityListBasedOnAgreement`, {
    body: JSON.stringify({
      AgreementTypeId: AgreementId,
      AllocationSubTypeId: AllocationId,
      AllocationTypeId: LandAllocationToId
    }),
    credentials: "include",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// Role Dropdown Fetch call

export const getRoleListForWorkFlowUser = () => {
  return fetch(`http://sadaptms.com:894/api/MastersAPI/GetRolesListDetails`, {
    // body: JSON.stringify({ UserId }),
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json"
    },
    // credentials: "include",
    method: "GET"
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};

// User Dropdown

export const getUserListForWorkFlowUser = (props: number) => {
  return fetch(
    `http://sadaptms.com:894/api/UserManageMentAPI/GetAllUsers?SelectedRoleId=${props}`,
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

// getting All UserList for WorkFlowUser Dropdown

export const getUserList = () => {
  return fetch(
    `${url}LASPROCESSAPI/GetUsersList?UserId=${UserId}
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

export const postSubmitWorkFlowUserValues = (
  AllocationTypeId: number,
  AllocationSubTypeId: number,
  AgreementTypeId: number,
  props: ReadonlyArray<IWorkFlowUserGridValues>
) => {
  return fetch(`${url}WorkflowProcessAPI/UpdateUsersForActivities`, {
    body: JSON.stringify({
      Id: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      ApplicationId: 0,
      AllocateToName: null,
      SubApplicationId: 0,
      AllocationTypeName: null,
      AgreementTypeName: null,
      ActivityId: 0,
      ActivityList: null,
      SelectedActivityList: null,
      UserId,
      SelectedKeys: null,
      CreatedOn: "/Date(-62135596800000)/",
      CreatedBy: 0,
      AllocationTypeId,
      AllocationSubTypeId,
      AgreementTypeId,
      UserName: null,
      OrderNo: 0,
      SlaDays: 0,
      RoleId: 0,
      WorkFlowActivityUserDetails: props.map((x: IWorkFlowUserGridValues) => {
        return {
          ActivityId: x.ActivityId,
          UserId: x.UserId,
          // tslint:disable-next-line:object-literal-sort-keys
          RoleId: x.RoleId,
          ReturnCode: 0
        };
      })
      // [
      //   ({
      //     ActivityId: 80,
      //     UserId: 3,
      //     RoleId: 16,sinds
      //     ReturnCode: 0
      //   },
      //   {
      //     ActivityId: 17,
      //     UserId: 4,
      //     RoleId: 4,
      //     ReturnCode: 0
      //   },
      //   {
      //     ActivityId: 18,
      //     UserId: 5,
      //     RoleId: 3,
      //     ReturnCode: 0
      //   },
      //   {
      //     ActivityId: 19,
      //     UserId: 6,
      //     RoleId: 5,
      //     ReturnCode: 0
      //   },
      //   {
      //     ActivityId: 20,
      //     UserId: 7,
      //     RoleId: 7,
      //     ReturnCode: 0
      //   })
      // ]
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
