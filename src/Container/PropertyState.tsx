// import * as React from "react";

// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Typography from "@material-ui/core/Typography";
// import {
//   getAddPropertyTypeValues,
//   getDropDownList,
//   getPropertyTypeGridValues,
//   postActivatePropertyID,
//   postDeActivatePropertyId,
//   postEditPropertyTypeValues
// } from "src/Api_Integration/PropertyService";
// import { loader } from "src/DefaultLayout/HomePage";
// import AddPropertyMasterForm from "src/PTMSMASTERS/Property/AddProperty";
// import PropertiesTypeMasterForm, {
//   IEditProProps
// } from "src/PTMSMASTERS/Property/PropertyType";

// export interface IProTypeMasterValues {
//   readonly CategoryOwnershipId: number;
//   readonly CategoryOwnershipName: string;
//   readonly PropertyTypeId: number;
//   readonly PropertyTypeName: string;
//   readonly CreatedBy: number;
//   readonly IsActive: string;
//   readonly ReturnCode: number;
//   readonly CategoryOwnershipDesc: string;
// }

// export interface IProTypeMasterProps {
//   readonly allocationTypeList: ReadonlyArray<IProTypeMasterValues>;
//   readonly searchInputPro: string;
//   readonly countPro: number;
//   readonly openPro: boolean;
//   readonly CategoryOwnershipDesc: string;
//   readonly open2Pro: boolean;

//   // readonly expandApplicationId: string;
//   // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
//   readonly editPopUpOpenPro: boolean;
//   readonly addPopUpOpenPro: boolean;
//   readonly activatePopUpOpenPro: boolean;

//   readonly deActivatePopUpOpenPro: boolean;
//   onHandleDeActivatePopUpClosePro(): void;
//   onHandleDeActivatePopUpOpenPro(propTypeValues: any): void;
//   onHandleDeActivateSavePro(event: any): void;
//   // onHandleClick(event: any): void;
//   onHandleActionClickPro(propTypeValues: IProTypeMasterValues): void;
//   onHandleEditActionClickPro(propTypeValues: IProTypeMasterValues): void;
//   onHandleNameChangePro(event: any): void;
//   onHandleEditSavePro(
//     values: IEditProProps & IEditProValues
//   ): // AllocationId: number,
//   // AllocationSubTypeId: number,
//   // AllocationSubTypeName: string
//   void;
//   // HandleEditAllocationChange(event: any): void;
//   onHandleDropDownChangePro(event: any): void;

//   onHandleEditPopUpClosePro(): void;
//   onHandleClosePro(): void;
//   onHandleClose2Pro(): void;

//   onHandleAddSavePro(values: IAddProValues & IAddProProps): void;
//   onHandleAddPopUpPro(): void;
//   onHandleAddPopUpClosePro(): void;
//   onHandleSearchPro(event: any): void;
//   onHandleActivatePopUpOpenPro(propTypeValues: any): void;
//   onHandleActivePopUpClosePro(): void;
//   onHandleActivateClickPro(event: any): void;
//   onHandleActivatePopUpClosePro(): void;
// }

// export interface IEditProValues {
//   readonly CategoryOwnershipId: number;
//   readonly allocationName: string;
//   readonly PropertyTypeId: number;
//   readonly PropertyTypeName: string;
//   readonly allocationNameValues: ReadonlyArray<IProTypeMasterValues>;
// }

// export interface IAddProValues {
//   readonly CategoryOwnershipId: number;
//   readonly PropertyTypeName: string;
//   readonly newAllocationName: string;

//   readonly allocationNameValues: ReadonlyArray<IProTypeMasterValues>;
//   onHandleAddChangePro(event: any): void;
// }

// export interface IAddProProps {
//   readonly allocationTypeList: ReadonlyArray<IProTypeMasterValues>;
//   onHandleAddSavePro(values: IAddProValues & IAddProProps): void;
//   onHandleAddPopUpPro(): void;
//   onHandleAddPopUpClosePro(): void;
// }

// export interface IActivateProProps {
//   readonly PropertyTypeId: number;
//   onHandleActivateClickPro(event: any): void;
//   onHandleActivatePopUpClosePro(): void;
// }

// class AllocationTypeMasterState extends React.Component<IProTypeMasterProps> {
//   public state = {
//     activatePopUpOpenPro: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     CategoryOwnershipDesc: "",
//     addPopUpOpenPro: false,
//     allocationName: "",
//     allocationNameValues: [],
//     editSuccessPopUpPro: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     CategoryOwnershipId: 0,
//     PropertyTypeName: "",
//     countPro: 0,
//     PropertyTypeId: 0,
//     allocationTypeList: [],
//     deActivatePopUpOpenPro: false,
//     dialogPro: false,
//     editPopUpOpenPro: false,
//     openPro: false,
//     open2Pro: false,
//     id: 0,
//     dialog1Pro: false,
//     newAllocationName: "",
//     pagePro: 0,
//     rowsPerPagePro: 5,
//     propTypeValues: {
//       CategoryOwnershipId: 0,
//       CategoryOwnershipName: "",
//       PropertyTypeId: 0,
//       PropertyTypeName: "",
//       // tslint:disable-next-line:object-literal-sort-keys
//       CategoryOwnershipDesc: "",
//       // tslint:disable-next-line:object-literal-sort-keys
//       CreatedBy: 0,
//       IsActive: "",
//       ReturnCode: 0
//     },
//     searchInputPro: "",
//     MaxPropertyTypeId: 0
//   };

//   public async componentWillMount() {
//     try {
//       if (loader != null) {
//         loader.style.display = "block";
//       }
//       const res1 = await getPropertyTypeGridValues();
//       const res2 = await getDropDownList();

//       this.setState({
//         ...this.state,
//         MaxPropertyTypeId: res1.jsonData.data
//           .map((x: IProTypeMasterValues) => x.PropertyTypeId)
//           .filter((x: number, y: number) => x > y),
//         allocationNameValues: res2.jsonData.AllocaitonTypeslist,
//         allocationTypeList: res1.jsonData.data,
//         countPro: res1.jsonData.data.length
//       });
//       if (loader != null) {
//         loader.style.display = "none";
//       }
//     } catch (err) {
//       // tslint:disable-next-line:no-console
//       console.log(err);
//       if (loader != null) {
//         loader.style.display = "none";
//       }
//     }
//   }
//   // for page change
//   public readonly handleChangePage = (event: any, pagePro: number) => {
//     this.setState({ pagePro });
//   };

//   // for rows change per page
//   public readonly handleChangeRowsPerPage = (event: any) => {
//     this.setState({ rowsPerPagePro: event.target.value });
//   };
//   public onHandleDropDownChangePro = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event.target.value);
//   };
//   //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
//   //       this.setState(event.target.value)
//   //   }

//   // fetch Call for Pop Up details based on ID
//   public onHandleActionClickPro = (propTypeValues: IProTypeMasterValues) => {
//     this.setState({
//       ...this.state,
//       propTypeValues,
//       // tslint:disable-next-line:object-literal-sort-keys
//       openPro: propTypeValues.IsActive.toString() === "true" ? true : false,
//       open2Pro: propTypeValues.IsActive.toString() === "false" ? true : false
//       //   //   allocationName: AllocationName,
//       //   //   dropDownOpen: value === true ? event.currentTarget : null,
//       //   //   dropDownOpen2: value === false ? event.currentTarget : null,

//       //   //   // tslint:disable-next-line:object-literal-sort-keys
//       //   //   AllocationId: id,
//       //   //   AllocationSubTypeName,
//       //   //   // tslint:disable-next-line:object-literal-sort-keys
//       //   //   AllocationSubTypeId
//     });
//   };

//   public onHandleAddChangePro = (event: any) => {
//     this.setState({ ...this.state, newAllocationName: event.target.value });
//   };

//   // for Edit PopUp open
//   public onHandleEditActionClickPro = (
//     propTypeValues: IProTypeMasterValues
//   ) => {
//     this.setState({
//       ...this.state,
//       propTypeValues,
//       // tslint:disable-next-line:object-literal-sort-keys
//       editPopUpOpenPro: true,
//       openPro: false
//     });
//   };
//   public getActivestatePro = (state: string) => {
//     switch (state) {
//       case "Active".toLowerCase():
//         return "true";
//       case "InActive".toLowerCase():
//         return "false";
//       default:
//         return state;
//     }
//   };
//   // for Search Input Change
//   public onHandleSearchPro = (event: any) => {
//     const searchInputPro = event.target.value;
//     const data = this.state.allocationTypeList.filter(
//       (x: IProTypeMasterValues) =>
//         searchInputPro !== ""
//           ? x.CategoryOwnershipName.toLowerCase().includes(
//               searchInputPro.toLowerCase()
//             ) ||
//             this.allocationNameIncludes(searchInputPro, x.PropertyTypeName) ||
//             x.IsActive.toString()
//               .toLowerCase()
//               .includes(this.getActivestatePro(searchInputPro.toLowerCase()))
//           : x
//     );
//     this.setState({
//       ...this.state,
//       countPro: data.length,
//       searchInputPro
//     });
//   };

//   // deActivate Popup open
//   public onHandleDeActivatePopUpOpenPro = (propTypeValues: any) => {
//     this.setState({
//       ...this.state,
//       propTypeValues,
//       // tslint:disable-next-line:object-literal-sort-keys
//       deActivatePopUpOpenPro: true,
//       openPro: false
//     });
//   };
//   public allocationNameIncludes = (
//     searchInputPro: string,
//     allocationName?: string
//   ) => {
//     if (allocationName) {
//       return allocationName
//         .toLowerCase()
//         .includes(searchInputPro.toLowerCase());
//     } else {
//       return false;
//     }
//   };
//   // Activate Popup open
//   public onHandleActivatePopUpOpenPro = (propTypeValues: any) => {
//     this.setState({
//       ...this.state,
//       activatePopUpOpenPro: true,
//       propTypeValues,
//       // tslint:disable-next-line:object-literal-sort-keys
//       open2Pro: false
//     });
//   };

//   // add Popup open
//   public onHandleAddPopUpOpenPro = () => {
//     this.setState({ ...this.state, addPopUpOpenPro: true });
//   };

//   // fetch call foIEditProPropsr Edited Document Id Save
//   public onHandleEditSavePro = (
//     event: IEditProProps & IEditProValues
//     // id: number,
//     // AllocationSubTypeId: number,
//     // AllocationSubTypeName: string
//   ) => {
//     // fetch call for Edit values Save
//     postEditPropertyTypeValues(
//       event.CategoryOwnershipId,
//       event.PropertyTypeId,
//       event.PropertyTypeName,
//       event.CategoryOwnershipName
//     )
//       .then(res => {
//         this.setState({
//           ...this.state,
//           // allocationName: name,
//           PropertyTypeName: event.PropertyTypeName,
//           // tslint:disable-next-line:object-literal-sort-keys
//           PropertyTypeId: event.PropertyTypeId,
//           // allocationTypeList: res,
//           // tslint:disable-next-line:object-literal-sort-keys
//           CategoryOwnershipId: event.CategoryOwnershipId,
//           editPopUpOpenPro: false,
//           editSuccessPopUpPro: true
//         });
//       })
//       .then(() =>
//         getPropertyTypeGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             allocationTypeList: res.jsonData.data,
//             newAllocationName: ""
//           });
//         })
//       )
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   // fetch call for Deactivate DocumentId
//   public onHandleDeActivateSavePro = (event: any) => {
//     postDeActivatePropertyId(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           //  allocationTypeList: res,
//           deActivatePopUpOpenPro: false
//         });
//       })
//       .then(() =>
//         getPropertyTypeGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             allocationTypeList: res.jsonData.data,
//             newAllocationName: ""
//           });
//         })
//       )
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   // To Close Dialog PopUp
//   public onHandleClosePro = () => {
//     this.setState({ ...this.state, openPro: false });
//   };

//   public onHandleClose2Pro = () => {
//     this.setState({ ...this.state, open2Pro: false });
//   };
//   // To Close Edit PopUp Close
//   public onHandleEditPopUpClosePro = () => {
//     this.setState({ ...this.state, editPopUpOpenPro: false });
//   };

//   // to Close Add PopUp
//   public onHandleAddPopUpClosePro = () => {
//     this.setState({ ...this.state, addPopUpOpenPro: false });
//   };

//   // To Close Edit PopUp Close
//   public onHandleDeActivatePopUpClosePro = () => {
//     this.setState({ ...this.state, deActivatePopUpOpenPro: false });
//   };

//   // To Close Activate PopUp Close
//   public onHandleActivatePopUpClosePro = () => {
//     this.setState({ ...this.state, activatePopUpOpenPro: false });
//   };
//   public handlePopUpClose = () => {
//     this.setState({
//       dialogPro: false
//     });
//   };

//   public onHandleAddSavePro = (values: IAddProValues & IAddProProps) => {
//     if (
//       this.state.allocationTypeList.filter(
//         (x: IProTypeMasterValues) =>
//           x.PropertyTypeName === values.newAllocationName
//       ).length === 0
//     ) {
//       getAddPropertyTypeValues(
//         values.CategoryOwnershipId,
//         //   this.state.MaxAllocationSubTypeId,
//         values.newAllocationName
//       )
//         .then(res => {
//           this.setState({
//             ...this.state.allocationTypeList,
//             res
//           });
//         })
//         .then(() => {
//           this.setState({
//             ...this.state,
//             addPopUpOpenPro: false
//           });
//         })
//         .then(() =>
//           getPropertyTypeGridValues().then(res => {
//             this.setState({
//               ...this.state,
//               allocationTypeList: res.jsonData.data,
//               countPro: res.jsonData.data.length,
//               dialogPro: true,
//               newAllocationName: ""
//             });
//           })
//         )
//         // tslint:disable-next-line:no-console
//         .catch(err => console.log(err));
//     } else {
//       this.setState({
//         PropertyTypeName: "",
//         dialog1Pro: true
//       });
//     }
//   };

//   public onHandleActivateClickPro = (event: any) => {
//     postActivatePropertyID(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           activatePopUpOpenPro: false
//           // allocationTypeList: res
//         });
//       })
//       .then(() =>
//         getPropertyTypeGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             allocationTypeList: res.jsonData.data,
//             newAllocationName: ""
//           });
//         })
//       )
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };
//   public handlePopUpClose1 = () => {
//     this.setState({
//       dialog1Pro: false
//     });
//   };
//   public onHandleNameChangePro = (event: any) => {
//     this.setState({ ...this.state, PropertyTypeName: event.target.value });
//   };

//   // public HandleEditAllocationChange = (event: any) => {
//   //   this.setState({
//   //     ...this.state,
//   //     AllocationId: event.target.value,
//   //     allocationValues: {
//   //       ...this.state.allocationValues,
//   //       AllocationId: event.target.value
//   //     }
//   //   });
//   // };

//   public onHandleEditSuccessPopUpClose = () => {
//     this.setState({ ...this.state, editSuccessPopUpPro: false });
//   };

//   public render() {
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
//                   {/* <img src="/images/graph-icon.png" /> */}
//                   Allocation Type Master
//                 </Typography>
//                 <div className="title-btn">
//                   <Button
//                     className="doc-btn"
//                     // tslint:disable-next-line:jsx-no-lambda
//                     onClick={() => this.onHandleAddPopUpOpenPro()}
//                   >
//                     + Add
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//             {
//               <Dialog
//                 open={this.state.addPopUpOpenPro}
//                 onClose={this.onHandleAddPopUpClosePro}
//                 aria-labelledby="simple-dialog-title"
//               >
//                 <div className="popup-title">
//                   <DialogTitle id="simple-dialog-title">
//                     Add Allocation Type
//                   </DialogTitle>
//                 </div>
//                 <div id="simple-dialog-title">
//                   <AddPropertyMasterForm
//                     allocationNameValues={this.state.allocationNameValues}
//                     CategoryOwnershipId={this.state.CategoryOwnershipId}
//                     PropertyTypeName={this.state.PropertyTypeName}
//                     newAllocationName={this.state.newAllocationName}
//                     allocationTypeList={this.state.allocationTypeList}
//                     onHandleAddPopUpPro={this.onHandleAddPopUpOpenPro}
//                     onHandleAddSavePro={this.onHandleAddSavePro}
//                     onHandleAddChangePro={this.onHandleAddChangePro}
//                     onHandleAddPopUpClosePro={this.onHandleAddPopUpClosePro}
//                   />
//                 </div>
//               </Dialog>
//             }
//             <PropertiesTypeMasterForm
//               onHandleActivePopUpClosepro={this.onHandleActivatePopUpClosePro}
//               count={this.state.countPro}
//               onHandleActivatePopUpClosePro={this.onHandleActivatePopUpClosePro}
//               // HandleEditAllocationChange={this.HandleEditAllocationChange}
//               onHandleNameChangePro={this.onHandleNameChangePro}
//               onHandleDropDownChangePro={this.onHandleDropDownChangePro}
//               open2Pro={this.state.open2Pro}
//               allocationNameValues={this.state.allocationNameValues}
//               allocationTypeList={this.state.allocationTypeList}
//               searchInputPro={this.state.searchInputPro}
//               countPro={this.state.countPro}
//               openPro={this.state.openPro}
//               editPopUpOpenPro={this.state.editPopUpOpenPro}
//               addPopUpOpenPro={this.state.addPopUpOpenPro}
//               activatePopUpOpenPro={this.state.activatePopUpOpenPro}
//               deActivatePopUpOpenPro={this.state.deActivatePopUpOpenPro}
//               onHandleActivatePopUpOpenPro={this.onHandleActivatePopUpOpenPro}
//               onHandleActivePopUpClosePro={this.onHandleActivatePopUpClosePro}
//               onHandleActivateClickPro={this.onHandleActivateClickPro}
//               onHandleSearchPro={this.onHandleSearchPro}
//               onHandleAddPopUpPro={this.onHandleAddPopUpOpenPro}
//               onHandleAddPopUpClosePro={this.onHandleAddPopUpClosePro}
//               onHandleAddSavePro={this.onHandleAddSavePro}
//               CategoryOwnershipId={this.state.CategoryOwnershipId}
//               allocationName={this.state.allocationName}
//               PropertyTypeName={this.state.PropertyTypeName}
//               onHandleEditSavePro={this.onHandleEditSavePro}
//               PropertyTypeId={this.state.PropertyTypeId}
//               onHandleDeActivatePopUpClosePro={
//                 this.onHandleDeActivatePopUpClosePro
//               }
//               onHandleDeActivatePopUpOpenPro={
//                 this.onHandleDeActivatePopUpOpenPro
//               }
//               onHandleDeActivateSavePro={this.onHandleDeActivateSavePro}
//               onHandleEditActionClickPro={this.onHandleEditActionClickPro}
//               onHandleEditPopUpClosePro={this.onHandleEditPopUpClosePro}
//               page={this.state.pagePro}
//               rowsPerPage={this.state.rowsPerPagePro}
//               onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
//               onHandlePageChange={this.handleChangePage}
//               onHandleActionClickPro={this.onHandleActionClickPro}
//               onHandleClosePro={this.onHandleClosePro}
//               onHandleClose2Pro={this.onHandleClose2Pro}
//               propTypeValues={this.state.propTypeValues}
//               CategoryOwnershipDesc={this.state.CategoryOwnershipDesc}
//             />
//           </Card>
//         </div>
//         {
//           <Dialog
//             open={this.state.editSuccessPopUpPro}
//             onClose={this.onHandleEditSuccessPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div className="popup-title">
//               <DialogTitle id="simple-dialog-title">
//                 You have successfully updated allocation type
//               </DialogTitle>
//             </div>
//             <div id="simple-dialog-title">
//               <Button
//                 className="main-btn"
//                 // tslint:disable-next-line:jsx-no-lambda
//                 onClick={() => this.onHandleEditSuccessPopUpClose()}
//               >
//                 OK
//               </Button>
//             </div>
//           </Dialog>
//         }
//         {
//           <Dialog
//             open={this.state.dialogPro}
//             // onClose={this.onHandleAddPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div id="simple-dialog-title">
//               You have successfully added allocation type
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
//             open={this.state.dialog1Pro}
//             // onClose={this.onHandleAddPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div id="simple-dialog-title">
//               Allocation type already existed, please add new allocation type.
//               <div className="title-btn">
//                 {/* tslint:disable-next-line:jsx-no-lambda */}
//                 <Button
//                   className="save-btn"
//                   // tslint:disable-next-line:jsx-no-lambda
//                   onClick={() => this.handlePopUpClose1()}
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

// export default AllocationTypeMasterState;
