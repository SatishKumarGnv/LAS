// import * as React from "react";

// import { Dialog, DialogTitle } from "@material-ui/core";
// import { getAllRolesListDetails } from "../Api_Integration/AllUsersService";
// import {
//   getMenuItems,
//   getRoleSelectedDropdownChange,
//   submitPrivilegesMaster
// } from "../Api_Integration/PriviligesMasterServices";
// import { ISelectRoleValues } from "../DefaultLayout/HomePage";
// import PrivilegesForm from "../Masters/PrivilegesMasterForm";
// import PrivillegesPopUp from "../Masters/PrivillegesPopUp";

// export interface IPrivilegesSubValues {
//   state: {
//     selected: any;
//   };
//   text: string;
//   id: number;
// }

// export interface IPrivilegesValues {
//   text: string;
//   id: number;
//   state: {
//     opened: boolean;
//     selected: any;
//   };
//   children: ReadonlyArray<IPrivilegesSubValues>;
// }

// export interface IPrivilegesStateValues {
//   readonly selected: ReadonlyArray<string>;
//   readonly selectRoleValues: ReadonlyArray<ISelectRoleValues>;
//   readonly privilegesValues: ReadonlyArray<IPrivilegesValues>;
//   handleCheckChange(
//     event: any,
//     childrenObj: IPrivilegesSubValues,
//     id: number,
//     parent: IPrivilegesValues
//   ): void;
//   handleCheckAllChange(event: any, obj: IPrivilegesValues, id: number): void;
//   handleRoleClick(event: any): void;
// }

// class PrivilegesMasterState extends React.Component<IPrivilegesStateValues> {
//   public state = {
//     landAllocationPanel: false,
//     mastersPanel: false,
//     misrepotsPanel: false,
//     userManagementPanel: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     dialogOpen: false,
//     workFlowConfigurationPanel: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     roleId: 0,
//     roleName: "",
//     changeCheckedValues: [],
//     selectRoleValues: [],
//     selected: [],
//     // tslint:disable-next-line:object-literal-sort-keys
//     privilegesValues: [
//       {
//         text: "Land - Allocation",
//         // tslint:disable-next-line:object-literal-sort-keys
//         id: 9,
//         state: {
//           opened: true,
//           selected: false
//         },
//         children: [
//           {
//             state: {
//               selected: false
//             },
//             text: "Allocation Form",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 10
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Application Search",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 35
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Approved Applications",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 34
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Draft Applications",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 18
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Public Proposal Form",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 37
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Submitted Applications",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 19
//           }
//         ]
//       },
//       {
//         text: "Masters",
//         // tslint:disable-next-line:object-literal-sort-keys
//         id: 1,
//         state: {
//           opened: true,
//           selected: false
//         },
//         children: [
//           {
//             state: {
//               selected: false
//             },
//             text: "Additional Reasons",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 29
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Agreement Type",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 36
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Allocation Types",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 13
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Department",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 40
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Document Mapping",
//             // tslint:disable-next-line:object-literal-sort-keys
//             id: 12
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Document Types",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 11
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Email Template",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 14
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Land Area Units",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 16
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Privileges",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 8
//           },
//           {
//             state: {
//               selected: false
//             },

//             text: "Project Rules",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 28
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Roles",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 15
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Unit Conversions",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 20
//           }
//         ]
//       },
//       {
//         text: "MIS-Reports",
//         // tslint:disable-next-line:object-literal-sort-keys

//         id: 26,
//         state: {
//           opened: true,
//           selected: false
//         },
//         // tslint:disable-next-line:object-literal-sort-keys
//         children: [
//           {
//             state: {
//               selected: false
//             },
//             text: "Capital City Lands Summary",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 33
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Email Failed",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 32
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Email Sent",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 31
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Login Audit Trail",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 30
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Theme city wise application approval status report",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 38
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Theme City Wise Revenue Report",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 39
//           }
//         ]
//       },
//       {
//         text: "User - Management",
//         // tslint:disable-next-line:object-literal-sort-keys

//         id: 3,
//         state: {
//           opened: true,
//           selected: false
//         },
//         // tslint:disable-next-line:object-literal-sort-keys

//         children: [
//           {
//             state: {
//               selected: false
//             },
//             text: "All Users",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 7
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Bulk Password Reset",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 5
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Change user role",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 6
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Create New User",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 4
//           }
//         ]
//       },
//       {
//         text: "Work Flow - Configuration",
//         // tslint:disable-next-line:object-literal-sort-keys

//         id: 21,
//         state: {
//           opened: true,
//           selected: false
//         },
//         // tslint:disable-next-line:object-literal-sort-keys

//         children: [
//           {
//             state: {
//               selected: false
//             },
//             text: "Work Flow Activities",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 23
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Work Flow Activity Application Mapping",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 22
//           },
//           {
//             state: {
//               selected: false
//             },
//             text: "Work Flow Activity User Mapping",
//             // tslint:disable-next-line:object-literal-sort-keys

//             id: 24
//           }
//         ]
//       }
//     ]
//   };

//   public async componentWillMount() {
//     try {
//       const res = await getAllRolesListDetails();

//       this.setState({
//         ...this.state,
//         selectRoleValues: res
//       });
//     } catch (err) {
//       // tslint:disable-next-line:no-console
//       console.log(err);
//     }
//   }

//   public handleCheckChange = (
//     event: any,
//     childrenObj: IPrivilegesSubValues,
//     id: number,
//     parent: IPrivilegesValues
//   ) => {
//     // tslint:disable-next-line:no-console
//     console.log(event.target.checked);
//     const getSelectedChildren = (x: any) => {
//       return {
//         text: x.text,
//         // tslint:disable-next-line:object-literal-sort-keys
//         id: x.id,
//         // tslint:disable-next-line:object-literal-sort-keys
//         state: { opened: x.opened, selected: false },
//         // tslint:disable-next-line:object-literal-sort-keys
//         children: [
//           ...x.children.map((y: IPrivilegesSubValues) =>
//             y.id !== childrenObj.id
//               ? y
//               : { ...y, state: { selected: event.target.checked } }
//           )
//         ]
//       };
//     };

//     this.setState({
//       ...this.state,
//       privilegesValues: this.state.privilegesValues.map(
//         (x: IPrivilegesValues) => (x.id !== id ? x : getSelectedChildren(x))
//       )
//       // this.state.privilegesValues.map((x: any) =>
//       //   x.children.find((y: any) => y.text === event.target.value)
//       // )x.state.selected === !this.state.selected
//     });
//   };

//   public handleCheckAllChange = (
//     event: any,
//     obj: IPrivilegesValues,
//     id: number
//   ) => {
//     // tslint:disable-next-line:no-console
//     console.log(event.target.checked);
//     const getSelected = (x: any) => {
//       return {
//         text: x.text,
//         // tslint:disable-next-line:object-literal-sort-keys
//         id: x.id,
//         // tslint:disable-next-line:object-literal-sort-keys
//         state: { opened: x.opened, selected: event.target.checked },
//         // tslint:disable-next-line:object-literal-sort-keys
//         children: [
//           ...x.children.map((y: IPrivilegesSubValues) => {
//             return { ...y, state: { selected: event.target.checked } };
//           })
//         ]
//       };
//       // tslint:disable-next-line:no-console
//       console.log(getSelected);
//     };
//     this.setState({
//       ...this.state,
//       privilegesValues: this.state.privilegesValues.map(
//         (x: IPrivilegesValues) => (x.id === id ? getSelected(x) : x)
//       )
//     });
//   };

//   public handleOpenClick = (event: any) => {
//     this.setState({ ...this.state, dialogOpen: true });
//   };
//   public onHandleClose = () => {
//     this.setState({ ...this.state, dialogOpen: false });
//   };

//   // public handleChange = (event: any) => {
//   //   submitPrivilegesMaster().then(res => {
//   //     this.setState({
//   //       ...this.state,
//   //       changeCheckedValues: res,
//   //       dialogOpen: false
//   //     });
//   //   });
//   // };

//   public handleRoleClick = (event: any) => {
//     this.setState({ ...this.state, roleId: event.target.value });
//     getRoleSelectedDropdownChange(event.target.value)
//       .then(res => {
//         this.setState({ ...this.state, privilegesValues: res.rows });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));

//     // tslint:disable-next-line:no-console
//     console.log(this.state.privilegesValues);
//   };
//   public onHandlePrivilegesSubmit = (
//     values: ISelectRoleValues & IPrivilegesStateValues
//   ) => {
//     const ids = this.state.privilegesValues
//       .map(p => p.children.filter(ch => ch.state.selected).map(ch => ch.id))
//       .join(",");
//     // tslint:disable-next-line:no-console
//     console.log(ids);
//     submitPrivilegesMaster(values, ids).then(res => {
//       if (this.state.roleId !== 0) {
//         this.setState({
//           ...this.state,
//           dialogOpen: true
//           // privilegesValues: res
//         });
//       }
//     });
//     getMenuItems(this.state.roleId).then(res => {
//       // tslint:disable-next-line:no-console
//       console.log(res);
//     });
//   };

//   public render() {
//     return (
//       <div>
//         <PrivilegesForm
//           handleCheckAllChange={this.handleCheckAllChange}
//           handleCheckChange={this.handleCheckChange}
//           privilegesValues={this.state.privilegesValues}
//           handleRoleClick={this.handleRoleClick}
//           RoleId={this.state.roleId}
//           RoleName={this.state.roleName}
//           selectRoleValues={this.state.selectRoleValues}
//           onHandlePrivilegesSubmit={this.onHandlePrivilegesSubmit}
//           selected={this.state.selected}
//         />

//         <div>
//           {
//             <Dialog
//               open={this.state.dialogOpen}
//               // onClose={props.onHandleClose}
//               aria-labelledby="simple-dialog-title"
//             >
//               <DialogTitle id="simple-dialog-title">
//                 {" "}
//                 You have updated privileges successfully
//               </DialogTitle>
//               <div id="simple-dialog-title">
//                 <PrivillegesPopUp
//                   onHandleClose={this.onHandleClose}
//                   selected={this.state.selected}
//                   onHandlePrivilegesSubmit={this.onHandlePrivilegesSubmit}
//                 />
//               </div>
//             </Dialog>
//           }
//         </div>
//       </div>
//     );
//   }
// }

// export default PrivilegesMasterState;
