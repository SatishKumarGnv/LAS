// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Typography from "@material-ui/core/Typography";
// import * as React from "react";

// import {
//   getRoleTypeMasterValues,
//   postActivateID,
//   postAddRoleTypeValues,
//   postDeActivateId,
//   postEditRoleTypeValues
// } from "../Api_Integration/RoleTypeMasterService";

// import AddRoleTypeForm from "../Masters/RoleTypeMaster/AddRoleTypeMaster";
// import RoleTypeMasterForm from "../Masters/RoleTypeMaster/RoleTypeMaster";
// // import { ISubmitApplicationPopUpValues } from "./SubmittedApplicationState";
// // import Pager from './Pager'

// export interface IRoleMasterTypeStateValues {
//   readonly CreatedBy: number;
//   readonly CreatedOn: string;
//   readonly RoleName: string;
//   readonly IsActive: string;
//   readonly ModifiedBy: number;
//   readonly ModifiedOn: string;
//   readonly ReturnCode: number;
//   readonly RoleId: number;
// }
// export interface IRoleTypeMasterStateProps {
//   readonly documentTypeMasterList: ReadonlyArray<IRoleMasterTypeStateValues>;
//   readonly emptyRows: number;
//   readonly searchInputRole: string;
//   readonly openRole: boolean;
//   readonly openRole2: boolean;
//   readonly ClickOpen: boolean;
//   readonly dropDownOpen: any;
//   readonly dropDownOpen2: any;
//   readonly pageRole: any;
//   readonly rowsPerPageRole: any;
//   // readonly expandApplicationId: string;
//   // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
//   readonly editPopUpOpen: boolean;
//   readonly addPopUpOpenRole: boolean;
//   readonly activatePopUpOpenRole: boolean;

//   readonly deActivatePopUpOpen: boolean;
//   onHandleDeActivatePopUpClose(): void;
//   onHandleDeActivatePopUpOpen(roleValues: any): void;
//   onHandleDeActivateSave(event: any): void;
//   // onHandleClick(event: any): void;
//   onHandleActionClick(roleValues: IRoleMasterTypeStateValues): void;
//   onHandleEditActionClick(): void;
//   onHandleEditSave(values: IEditRoleValues & IEditRoleProps): void;

//   onHandleEditPopUpClose(): void;
//   onHandleClose(): void;
//   onHandleClose2(): void;

//   onHandleAddSave(values: IAddRoleValues & IAddRoleProps): void;
//   onHandleAddPopUp(): void;
//   onHandleAddPopUpClose(): void;
//   onHandleSearchRole(event: any): void;
//   onHandleActivatePopUp(roleValues: any): void;
//   onHandleActivePopUpClose(): void;
//   onHandleActivateClick(event: any): void;
// }

// export interface IEditRoleValues {
//   readonly RoleId: number;
//   readonly RoleName: string;
//   // onHandleEditNameChange(event: any): void;
// }

// export interface IEditRoleProps {
//   readonly roleValues: IRoleMasterTypeStateValues;
//   onHandleEditPopUpClose(): void;
//   onHandleEditSave(values: IEditRoleValues & IEditRoleProps): void;
// }

// export interface IAddRoleValues {
//   readonly RoleId: number;
//   readonly newRoleName: string;
//   onHandleAddChange(event: any): void;
// }

// export interface IAddRoleProps {
//   readonly documentTypeMasterList: ReadonlyArray<IRoleMasterTypeStateValues>;
//   onHandleAddSave(values: IAddRoleValues & IAddRoleProps): void;
//   onHandleAddPopUp(): void;
//   onHandleAddPopUpClose(): void;
// }

// export interface IActivateProps {
//   readonly RoleId: number;
//   onHandleActivateClick(event: any): void;
//   onHandleActivePopUpClose(): void;
// }

// class RoleTypeMasterState extends React.Component<
//   IRoleTypeMasterStateProps & IEditRoleValues
// > {
//   public readonly state = {
//     DocumentTypeMasterList: [],
//     RoleName: "",
//     activatePopUpOpenRole: false,
//     addPopUpOpenRole: false,
//     countRole: 0,
//     deActivatePopUpOpen: false,
//     dialog: false,
//     dialog1: false,
//     editPopUpOpen: false,
//     editSuccessPopUp: false,
//     id: 0,
//     newRoleName: "",
//     openRole: false,
//     openRole2: false,
//     pageRole: 0,
//     roleValues: {},
//     rowsPerPageRole: 5,
//     searchInputRole: ""
//   };
//   constructor(props: IRoleTypeMasterStateProps & IEditRoleValues) {
//     super(props);
//   }
//   public componentWillMount() {
//     // getting data for the documenttypemaster table
//     getRoleTypeMasterValues()
//       .then(res => {
//         this.setState({
//           ...this.state,
//           DocumentTypeMasterList: res.jsonData.data,
//           countRole: res.jsonData.data.length
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   }
//   // for page change
//   public readonly handleChangePage = (event: any, pageRole: number) => {
//     this.setState({ pageRole });
//   };

//   // for rows change per page
//   public readonly handleChangeRowsPerPage = (event: any) => {
//     this.setState({ rowsPerPageRole: event.target.value });
//   };

//   public handlePopUpClose = () => {
//     this.setState({
//       dialog: false
//     });
//   };
//   public onHandleActionClick = (roleValues: IRoleMasterTypeStateValues) => {
//     this.setState({
//       ...this.state,
//       openRole: roleValues.IsActive.toString() === "true" ? true : false,
//       openRole2: roleValues.IsActive.toString() === "false" ? true : false,
//       roleValues
//       // tslint:disable-next-line:object-literal-sort-keys
//       // documentName: name,
//       // dropDownOpen: value === true ? event.currentTarget : null,
//       // dropDownOpen2: value === false ? event.currentTarget : null,
//       // id
//     });
//   };

//   public onHandleEditNameChange = (event: any) => {
//     this.setState({ ...this.state, RoleName: event.target.value });
//   };

//   public onHandleAddChange = (event: any) => {
//     this.setState({ ...this.state, newRoleName: event.target.value });
//   };

//   // for Edit PopUp open
//   public onHandleEditActionClick = (roleValues: IRoleMasterTypeStateValues) => {
//     this.setState({
//       ...this.state,
//       editPopUpOpen: true,
//       openRole: false
//     });
//   };

//   // for Search Input Change
//   public onHandleSearchRole = (event: any) => {
//     const searchInputRole = event.target.value;
//     const data = this.state.DocumentTypeMasterList.filter(
//       (x: IRoleMasterTypeStateValues) =>
//         searchInputRole !== ""
//           ? this.roleNameIncludes(
//               searchInputRole.toLowerCase(),
//               x.RoleName.toLowerCase()
//             ) ||
//             x.IsActive.toString()
//               .toLowerCase()
//               .includes(this.getActivestate(searchInputRole.toLowerCase()))
//           : x
//     );
//     this.setState({
//       ...this.state,
//       countRole: data.length,
//       searchInputRole
//     });
//   };

//   // deActivate Popup open
//   public onHandleDeActivatePopUpOpen = (roleValues: any) => {
//     this.setState({
//       ...this.state,
//       deActivatePopUpOpen: true,
//       openRole: false,
//       roleValues
//     });
//   };

//   // Activate Popup open
//   public onHandleActivatePopUpOpen = (roleValues: any) => {
//     this.setState({
//       ...this.state,
//       activatePopUpOpenRole: true,
//       openRole2: false,
//       roleValues
//     });
//   };
//   public roleNameIncludes = (searchInputRole: string, roleName?: string) => {
//     if (roleName) {
//       return roleName.includes(searchInputRole);
//     } else {
//       return false;
//     }
//   };
//   public getActivestate = (state: string) => {
//     switch (state) {
//       case "Active".toLowerCase():
//         return "true";
//       case "InActive".toLowerCase():
//         return "false";
//       default:
//         return state;
//     }
//   };

//   // add Popup open
//   public onHandleAddPopUpOpen = () => {
//     this.setState({ ...this.state, addPopUpOpenRole: true });
//   };

//   // fetch call for Edited Document Id Save
//   public onHandleEditSave = (values: IEditRoleValues & IEditRoleProps) => {
//     // fetch call for Edit values Save
//     postEditRoleTypeValues(values)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           RoleId: values.RoleId,
//           RoleName: values.RoleName,
//           // documentTypeMasterList: res,
//           editPopUpOpen: false,
//           id: event
//         });
//       })
//       .then(() =>
//         getRoleTypeMasterValues().then(res => {
//           this.setState({
//             ...this.state,
//             DocumentTypeMasterList: res.jsonData.data,
//             editSuccessPopUp: true
//           });
//         })
//       )
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   // fetch call for Deactivate DocumentId
//   public onHandleDeActivateSave = (event: any) => {
//     postDeActivateId(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           deActivatePopUpOpen: false
//           //  DocumentTypeMasterList: res,
//         });
//       })
//       .then(() =>
//         getRoleTypeMasterValues().then(res => {
//           this.setState({
//             ...this.state,
//             DocumentTypeMasterList: res.jsonData.data
//           });
//         })
//       )
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   // To Close Dialog PopUp
//   public onHandleClose1 = () => {
//     this.setState({ ...this.state, openRole: false });
//   };

//   // To Close Dialog PopUp
//   public onHandleClose2 = () => {
//     this.setState({ ...this.state, openRole2: false });
//   };

//   // To Close Edit PopUp Close
//   public onHandleEditPopUpClose = () => {
//     this.setState({ ...this.state, editPopUpOpen: false });
//   };

//   // to Close Add PopUp
//   public onHandleAddPopUpClose = () => {
//     this.setState({ ...this.state, addPopUpOpenRole: false, newRoleName: "" });
//   };

//   // To Close Edit PopUp Close
//   public onHandleDeActivatePopUpClose = () => {
//     this.setState({ ...this.state, deActivatePopUpOpen: false });
//   };

//   // To Close Activate PopUp Close
//   public onHandleActivatePopUpClose = () => {
//     this.setState({ ...this.state, activatePopUpOpenRole: false });
//   };

//   public onHandleAddSave = (values: IAddRoleValues & IAddRoleProps) => {
//     if (
//       this.state.DocumentTypeMasterList.filter(
//         (x: IRoleMasterTypeStateValues) => x.RoleName === values.newRoleName
//       ).length === 0
//     ) {
//       postAddRoleTypeValues(
//         this.state.DocumentTypeMasterList.length + 1,
//         values.newRoleName
//       )
//         .then(res => {
//           this.setState({
//             DocumentTypeMasterList: [...this.state.DocumentTypeMasterList, res]
//           });
//         })
//         .then(() =>
//           getRoleTypeMasterValues().then(res => {
//             this.setState({
//               ...this.state,
//               DocumentTypeMasterList: res.jsonData.data,
//               addPopUpOpenRole: false,
//               countRole: res.jsonData.data.length,
//               dialog: true,
//               newRoleName: ""
//             });
//           })
//         )
//         // tslint:disable-next-line:no-console
//         .catch(err => console.log(err));
//     } else {
//       this.setState({
//         dialog1: true
//       });
//     }
//   };
//   public handlePopUpClose1 = () => {
//     this.setState({
//       dialog1: false,
//       newRoleName: ""
//     });
//   };

//   public onHandleActivateClick = (event: any) => {
//     postActivateID(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           // DocumentTypeMasterList: res,
//           activatePopUpOpenRole: false
//         });
//       })
//       .then(() =>
//         getRoleTypeMasterValues().then(res => {
//           this.setState({
//             ...this.state,
//             DocumentTypeMasterList: res.jsonData.data
//           });
//         })
//       )

//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   public handleEditSuccessPopUpClose = () => {
//     this.setState({ ...this.state, editSuccessPopUp: false });
//   };

//   public render() {
//     const { DocumentTypeMasterList, rowsPerPageRole, pageRole } = this.state;
//     // const open = Boolean(this.state.dropDownOpen);
//     // const open2 = Boolean(this.state.dropDownOpen2);

//     const emptyRows =
//       rowsPerPageRole -
//       Math.min(
//         rowsPerPageRole,
//         DocumentTypeMasterList.length - pageRole * rowsPerPageRole
//       );
//     return (
//       <div className="innerpage-container">
//         <div className="graph-card">
//           <Card className="title-card">
//             <CardContent className="title-card">
//               <div className="title-row">
//                 <Typography
//                   gutterBottom={true}
//                   variant="headline"
//                   component="h4"
//                   className="grap-heading"
//                 >
//                   <img src="/images/table-icon.png" />
//                   Role Type Master
//                 </Typography>
//                 <div className="title-btn">
//                   <Button
//                     className="doc-btn"
//                     // tslint:disable-next-line:jsx-no-lambda
//                     onClick={() => this.onHandleAddPopUpOpen()}
//                   >
//                     + Add
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//             {
//               <Dialog
//                 open={this.state.addPopUpOpenRole}
//                 onClose={this.onHandleAddPopUpClose}
//                 aria-labelledby="simple-dialog-title"
//               >
//                 <div className="popup-title">
//                   <DialogTitle id="simple-dialog-title">
//                     Add Role type
//                   </DialogTitle>
//                 </div>
//                 <div id="simple-dialog-title">
//                   <AddRoleTypeForm
//                     RoleId={this.state.id}
//                     newRoleName={this.state.newRoleName}
//                     documentTypeMasterList={this.state.DocumentTypeMasterList}
//                     onHandleAddPopUp={this.onHandleAddPopUpOpen}
//                     onHandleAddSave={this.onHandleAddSave}
//                     onHandleAddChange={this.onHandleAddChange}
//                     onHandleAddPopUpClose={this.onHandleAddPopUpClose}
//                   />
//                 </div>
//               </Dialog>
//             }
//             <RoleTypeMasterForm
//               onHandleActivatePopUp={this.onHandleActivatePopUpOpen}
//               onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
//               activatePopUpOpenRole={this.state.activatePopUpOpenRole}
//               onHandleActivateClick={this.onHandleActivateClick}
//               searchInputRole={this.state.searchInputRole}
//               onHandleSearch={this.onHandleSearchRole}
//               addPopUpOpenRole={this.state.addPopUpOpenRole}
//               onHandleAddPopUp={this.onHandleAddPopUpOpen}
//               onHandleAddPopUpClose={this.onHandleAddPopUpClose}
//               onHandleAddSave={this.onHandleAddSave}
//               id={this.state.id}
//               RoleName={this.state.RoleName}
//               onHandleEditNameChange={this.onHandleEditNameChange}
//               onHandleEditSave={this.onHandleEditSave}
//               deActivatePopUpOpen={this.state.deActivatePopUpOpen}
//               onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
//               onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
//               onHandleDeActivateSave={this.onHandleDeActivateSave}
//               editPopUpOpen={this.state.editPopUpOpen}
//               onHandleEditActionClick={this.onHandleEditActionClick}
//               onHandleEditPopUpClose={this.onHandleEditPopUpClose}
//               emptyRows={emptyRows}
//               countRole={this.state.countRole}
//               pageRole={pageRole}
//               rowsPerPageRole={this.state.rowsPerPageRole}
//               openRole={this.state.openRole}
//               openRole2={this.state.openRole2}
//               onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
//               onHandlePageChange={this.handleChangePage}
//               onHandleActionClick={this.onHandleActionClick}
//               onHandleClose={this.onHandleClose1}
//               onHandleClose2={this.onHandleClose2}
//               documentTypeMasterList={this.state.DocumentTypeMasterList}
//               roleValues={this.state.roleValues}
//             />
//           </Card>
//         </div>
//         {
//           <Dialog
//             open={this.state.dialog}
//             // onClose={this.onHandleAddPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div id="simple-dialog-title">
//               You have successfully added role
//               <div className="popup-bottom-btn">
//                 {/* tslint:disable-next-line:jsx-no-lambda */}
//                 <Button
//                   className="main-btn"
//                   // tslint:disable-next-line:jsx-no-lambda
//                   onClick={() => this.handlePopUpClose()}
//                 >
//                   OK
//                 </Button>
//               </div>
//             </div>
//           </Dialog>
//         }
//         {
//           <Dialog
//             open={this.state.dialog1}
//             // onClose={this.onHandleAddPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div id="simple-dialog-title">
//               Role name already existed, please add new role name.
//               <div className="popup-bottom-btn">
//                 {/* tslint:disable-next-line:jsx-no-lambda */}
//                 <Button
//                   className="main-btn"
//                   // tslint:disable-next-line:jsx-no-lambda
//                   onClick={() => this.handlePopUpClose1()}
//                 >
//                   OK
//                 </Button>
//               </div>
//             </div>
//           </Dialog>
//         }

//         {
//           <Dialog
//             open={this.state.editSuccessPopUp}
//             // onClose={this.onHandleAddPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div id="simple-dialog-title">
//               You have updated role successfully
//               <div className="popup-bottom-btn">
//                 {/* tslint:disable-next-line:jsx-no-lambda */}
//                 <Button
//                   className="save-btn"
//                   // tslint:disable-next-line:jsx-no-lambda
//                   onClick={() => this.handleEditSuccessPopUpClose()}
//                 >
//                   OK
//                 </Button>
//               </div>
//             </div>
//           </Dialog>
//         }
//       </div>
//     );
//   }
// }

// export default RoleTypeMasterState;
