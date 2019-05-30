// import { DialogTitle } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Dialog from "@material-ui/core/Dialog";
// import Typography from "@material-ui/core/Typography";
// import * as React from "react";
// import {
//   getAminitiesGridValues,
//   postActivateAminitiesID,
//   postAddAminitiesTypeValues,
//   postDeActivateAminitiesId,
//   postEditAminitiesValues
// } from "src/Api_Integration/AminitiesService";
// import AddAminityTypeForm from "src/PTMSMASTERS/Aminities/AddAminities";
// import AminityTypeMasterForm, {
//   IEditAminityProps
// } from "src/PTMSMASTERS/Aminities/Aminities";
// // import { ISubmitApplicationPopUpValues } from "./SubmittedApplicationState";
// // import Pager from './Pager'
// export interface IAminitiesTypeStateValues {
//   readonly CreatedBy: number;
//   readonly CreatedOn: string;
//   readonly AmenitiesId: number;
//   readonly AmenitiesName: string;
//   readonly IsActive: boolean;
//   readonly ModifiedBy: number;
//   readonly ModifiedOn: string;
//   readonly ReturnCode: number;
// }
// export interface IAminitiesTypeMasterStateProps {
//   readonly documentTypeMasterList: ReadonlyArray<IAminitiesTypeStateValues>;
//   readonly searchInputAminity: string;
//   readonly openAminity: boolean;
//   readonly open2Aminity: boolean;
//   readonly ClickOpen: boolean;
//   readonly dropDownOpen: any;
//   readonly dropDownOpen2: any;
//   // readonly expandApplicationId: string;
//   // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
//   readonly editPopUpOpenAminity: boolean;
//   readonly addPopUpOpenAminity: boolean;
//   readonly activatePopUpOpenAminity: boolean;
//   readonly deActivatePopUpOpenAminity: boolean;
//   readonly aminityValues: IAminitiesTypeStateValues;
//   onHandleDeActivatePopUpCloseAminity(): void;
//   onHandleDeActivatePopUpOpenAminity(aminityValues: any): void;
//   onHandleDeActivateSaveAminity(event: any): void;
//   // onHandleClick(event: any): void;
//   onHandleActionClickAminity(aminityValues: IAminitiesTypeStateValues): void;
//   onHandleEditActionClickAminity(): void;
//   onHandleEditSaveAminity(
//     values: IEditAminityProps & IEditAminitiesValues
//   ): void;
//   onHandleEditPopUpCloseAminity(): void;
//   onHandleCloseAminity(): void;
//   onHandleClose2Aminity(): void;
//   onHandleAddSaveAminity(
//     values: IAddAminitiesValues & IAddAminitiesProps
//   ): void;
//   onHandleAddPopUpAminity(): void;
//   onHandleAddPopUpCloseAminity(): void;
//   onHandleSearchAminity(event: any): void;
//   onHandleActivatePopUpAminity(aminityValues: any): void;
//   onHandleActivePopUpCloseAminity(): void;
//   onHandleActivateClickAminity(event: any): void;
// }
// export interface IEditAminitiesValues {
//   readonly AmenitiesId: number;
//   readonly AmenitiesName: string;
//   // onHandleEditNameChange(event: any): void;
// }
// export interface IAddAminitiesValues {
//   readonly AmenitiesId: number;
//   readonly newAminityName: string;
//   onHandleAddChangeAminity(event: any): void;
// }
// export interface IAddAminitiesProps {
//   readonly documentTypeMasterList: ReadonlyArray<IAminitiesTypeStateValues>;
//   onHandleAddSaveAminity(
//     values: IAddAminitiesValues & IAddAminitiesProps
//   ): void;
//   onHandleAddPopUpAminity(): void;
//   onHandleAddPopUpCloseAminity(): void;
// }
// export interface IActivateAminitiesProps {
//   readonly id: number;
//   onHandleActivateClickAminity(event: any): void;
//   onHandleActivePopUpCloseAminity(): void;
// }
// class DocumentTypeMasterState extends React.Component<
//   IAminitiesTypeMasterStateProps & IEditAminitiesValues
// > {
//   public readonly state = {
//     AmenitiesName: "",
//     AminityTypeMasterList: [],
//     activatePopUpOpenAminity: false,
//     addPopUpOpenAminity: false,
//     deActivatePopUpOpenAminity: false,
//     editSuccessPopUpAminity: false,
//     openAminity: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     open2Aminity: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     editPopUpOpenAminity: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     aminityValues: {},
//     AmenitiesId: 0,
//     newAminityName: "",
//     pageAminity: 0,
//     countAminity: 0,
//     dialog1Aminity: false,
//     rowsPerPageAminity: 5,
//     searchInputAminity: "",
//     DocumentPopUpAminity: false,
//     dialogAminity: false
//   };
//   constructor(props: IAminitiesTypeMasterStateProps & IEditAminitiesValues) {
//     super(props);
//   }
//   public componentWillMount() {
//     // getting data for the documenttypemaster table
//     getAminitiesGridValues()
//       .then(res => {
//         this.setState({
//           ...this.state,
//           AminityTypeMasterList: res.jsonData.data,
//           countAminity: res.jsonData.data.length
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   }
//   // for page change
//   public readonly handleChangePageAminity = (
//     event: any,
//     pageAminity: number
//   ) => {
//     this.setState({ pageAminity });
//   };
//   public onHandleRefresh = () => {
//     getAminitiesGridValues()
//       .then(res => {
//         this.setState({
//           ...this.state,
//           AminityTypeMasterList: res.jsonData.data,
//           newAminityName: ""
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };
//   // for rows change per page
//   public readonly handleChangeRowsPerPageAminity = (event: any) => {
//     this.setState({ rowsPerPageAminity: event.target.value });
//   };
//   //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
//   //       this.setState(event.target.value)
//   //   }
//   // fetch Call for Pop Up details based on ID
//   public onHandleActionClickAminity = (
//     aminityValues: IAminitiesTypeStateValues
//   ) => {
//     this.setState({
//       ...this.state,
//       aminityValues
//       // open: documentValues.IsActive === true ? true : false,
//       // open2: documentValues.IsActive === false ? true : false
//       // tslint:disable-next-line:object-literal-sort-keys
//       // documentName: name,
//       // dropDownOpen: value === true ? event.currentTarget : null,
//       // dropDownOpen2: value === false ? event.currentTarget : null,
//       // id
//     });
//   };
//   public onHandleEditNameChangeAminity = (event: any) => {
//     this.setState({ ...this.state, AmenitiesName: event.target.value });
//   };
//   public onHandleAddChangeAminity = (event: any) => {
//     this.setState({ ...this.state, newAminityName: event.target.value });
//   };
//   // for Edit PopUp open
//   public onHandleEditActionClickAminity = (
//     aminityValues: IAminitiesTypeStateValues
//   ) => {
//     this.setState({
//       ...this.state,
//       aminityValues,
//       editPopUpOpenAminity: true,
//       openAminity: false
//     });
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
//   public onHandleSearchAminity = (event: any) => {
//     // tslint:disable-next-line:no-console
//     const searchInputAminity = event.target.value;
//     const data = this.state.AminityTypeMasterList.filter(
//       (x: IAminitiesTypeStateValues) =>
//         searchInputAminity !== ""
//           ? this.documentNameIncludes(searchInputAminity, x.AmenitiesName) ||
//             x.IsActive.toString()
//               .toLowerCase()
//               .includes(this.getActivestate(searchInputAminity.toLowerCase()))
//           : x
//     );
//     this.setState({
//       ...this.state,
//       countAminity: data.length,
//       searchInputAminity
//     });
//   };
//   // deActivate Popup open
//   public onHandleDeActivatePopUpOpenAminity = (aminityValues: any) => {
//     this.setState({
//       ...this.state,
//       aminityValues,
//       deActivatePopUpOpenAminity: true,
//       openAminity: false
//     });
//   };
//   // Activate Popup open
//   public onHandleActivatePopUpOpenAminity = (aminityValues: any) => {
//     this.setState({
//       ...this.state,
//       activatePopUpOpenAminity: true,
//       aminityValues,
//       open2Aminity: false
//     });
//   };
//   // add Popup open
//   public onHandleAddPopUpOpenAminity = () => {
//     this.setState({ ...this.state, addPopUpOpenAminity: true });
//   };
//   // fetch call for Edited Document Id Save
//   public onHandleEditSaveAminity = (
//     values: IEditAminityProps & IEditAminitiesValues
//   ) => {
//     // fetch call for Edit values Save
//     postEditAminitiesValues(values)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           AmenitiesId: values.AmenitiesId,
//           AmenitiesName: values.AmenitiesName,
//           AminityTypeMasterList: this.state.AminityTypeMasterList.map(
//             (x: IAminitiesTypeStateValues) =>
//               x.AmenitiesId === values.AmenitiesId
//                 ? { ...x, AmenitiesName: res.model.AmenitiesName }
//                 : x
//           ),
//           // documentTypeMasterList: res,
//           editPopUpOpenAminity: false,
//           editSuccessPopUpAminity: true
//         });
//       })
//       .then(() =>
//         getAminitiesGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             AminityTypeMasterList: res.jsonData.data,
//             countAminity: res.jsonData.data.length
//           });
//         })
//       )

//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   // fetch call for Deactivate DocumentId
//   public onHandleDeActivateSaveAminity = (event: any) => {

//     postDeActivateAminitiesId(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           deActivatePopUpOpenAminity: false
//           //  DocumentTypeMasterList: res,
//         });
//       })
//       .then(() =>
//         getAminitiesGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             AminityTypeMasterList: res.jsonData.data
//           });
//         })
//       )
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };
//   // To Close Dialog PopUp
//   public onHandleCloseAminity = () => {
//     this.setState({ ...this.state, openAminity: false });
//   };
//   // To Close Dialog PopUp
//   public onHandleClose2Aminity = () => {
//     this.setState({ ...this.state, open2Aminity: false });
//   };
//   // To Close Edit PopUp Close
//   public onHandleEditPopUpCloseAminity = () => {
//     this.setState({ ...this.state, editPopUpOpenAminity: false });
//   };
//   // to Close Add PopUp
//   public onHandleAddPopUpCloseAminity = () => {
//     this.setState({
//       ...this.state,
      
//     });
//   };
//   // To Close Edit PopUp Close
//   public onHandleDeActivatePopUpCloseAminity = () => {
//     this.setState({ ...this.state, deActivatePopUpOpenAminity: false });
//   };
//   // To Close Activate PopUp Close
//   public onHandleActivatePopUpCloseAminity = () => {
//     this.setState({ ...this.state, activatePopUpOpenAminity: false });
//   };
//   public documentNameIncludes = (
//     searchInputAminity: string,
//     documentName?: string
//   ) => {
//     if (documentName) {
//       return documentName
//         .toLowerCase()
//         .includes(searchInputAminity.toLowerCase());
//     } else {
//       return false;
//     }
//   };
//   public onHandleAddSaveAminity = (
//     values: IAddAminitiesValues & IAddAminitiesProps
//   ) => {
//     if (
//       this.state.AminityTypeMasterList.filter(
//         (x: IAminitiesTypeStateValues) =>
//           x.AmenitiesName === values.newAminityName
//       ).length === 0
//     ) {
//       postAddAminitiesTypeValues(
//         // this.state.DocumentTypeMasterList.length,
//         this.state.AminityTypeMasterList.length + 1,
//         values.newAminityName
//       )
//         .then(res => {
//           this.setState({
//             ...this.state,
//             AminityTypeMasterList: [
//               ...this.state.AminityTypeMasterList,
//               res.model
//             ]
//           });
//         })
//         .then(() =>
//           getAminitiesGridValues().then(res => {
//             this.setState({
//               ...this.state,
//               AminityTypeMasterList: res.jsonData.data,
//               addPopUpOpenAminity: false,
//               countAminity: res.jsonData.data.length,
//               dialogAminity: true,

//               newAminityName: ""
//             });
//           })
//         )
//         // tslint:disable-next-line:no-console
//         .catch(err => console.log(err));
//     } else {
//       this.setState({
//         dialog1Aminity: true,
//         newAminityName: ""
//       });
//     }
//   };
//   public onHandleActivateClickAminity = (
//     event: any,
//     aminityValues: IAminitiesTypeStateValues
//   ) => {
//     postActivateAminitiesID(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           //  DocumentTypeMasterList: res,
//           activatePopUpOpenAminity: false
//         });
//       })
//       .then(() =>
//         getAminitiesGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             AminityTypeMasterList: res.jsonData.data,
//             newAminityName: ""
//           });
//         })
//       )

//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };
//   public handleDocuementPopUpCloseAminity = () => {
//     this.setState({ ...this.state, DocumentPopUpAminity: false });
//   };
//   public handlePopUpClose = () => {
//     this.setState({
//       dialogAminity: false
//     });
//   };
//   public handlePopUpClose1 = () => {
//     this.setState({
//       dialog1Aminity: false
//     });
//   };

//   public onHandleEditSuccessPopUpClose = () => {
//     this.setState({ ...this.state, editSuccessPopUpAminity: false });
//   };
//   public render() {
//     // const { DocumentTypeMasterList, rowsPerPage, page } = this.state;
//     // const open = Boolean(this.state.dropDownOpen);
//     // const open2 = Boolean(this.state.dropDownOpen2);
//     // const emptyRows =
//     //   rowsPerPage -
//     //   Math.min(rowsPerPage, DocumentTypeMasterList.length - page * rowsPerPage);
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
//                   {/* <img src="/images/table-icon.png" /> */}
//                   Document Type Master
//                 </Typography>
//                 <div className="title-btn">
//                   <Button
//                     className="doc-btn"
//                     // tslint:disable-next-line:jsx-no-lambda
//                     onClick={() => this.onHandleAddPopUpOpenAminity()}
//                   >
//                     + Add
//                   </Button>
//                   {/* <Button
//                     className="doc-btn"
//                     // tslint:disable-next-line:jsx-no-lambda
//                     onClick={() => this.onHandleRefresh()}
//                   >
//                     Refresh
//                   </Button> */}
//                 </div>
//               </div>
//             </CardContent>
//             {
//               <Dialog
//                 open={this.state.addPopUpOpenAminity}
//                 onClose={this.onHandleAddPopUpCloseAminity}
//                 aria-labelledby="simple-dialog-title"
//               >
//                 <div className="popup-title">
//                   <DialogTitle id="simple-dialog-title">
//                     Create New Document
//                   </DialogTitle>
//                 </div>
//                 <div id="simple-dialog-title">
//                   <AddAminityTypeForm
//                     AmenitiesId={this.state.AmenitiesId}
//                     newAminityName={this.state.newAminityName}
//                     documentTypeMasterList={this.state.AminityTypeMasterList}
//                     onHandleAddPopUpAminity={this.onHandleAddPopUpOpenAminity}
//                     onHandleAddSaveAminity={this.onHandleAddSaveAminity}
//                     onHandleAddChangeAminity={this.onHandleAddChangeAminity}
//                     onHandleAddPopUpCloseAminity={
//                       this.onHandleAddPopUpCloseAminity
//                     }
//                   />
//                 </div>
//               </Dialog>
//             }

//             {
//               <Dialog
//                 open={this.state.editSuccessPopUpAminity}
//                 onClose={this.onHandleEditSuccessPopUpClose}
//                 aria-labelledby="simple-dialog-title"
//               >
//                 <div>
//                   <DialogTitle id="simple-dialog-title">
//                     You have successfully updated document
//                   </DialogTitle>
//                 </div>
//                 <div id="simple-dialog-title">
//                   {/*  tslint:disable-next-line:jsx-no-lambda */}
//                   <Button
//                     className="save-btn"
//                     // tslint:disable-next-line:jsx-no-lambda
//                     onClick={() => this.onHandleEditSuccessPopUpClose()}
//                   >
//                     OK
//                   </Button>
//                 </div>
//               </Dialog>
//             }
//             {/* {
//               <Dialog
//                 open={this.state.addPopUpOpen}
//                 onClose={this.onHandleAddPopUpClose}
//                 aria-labelledby="simple-dialog-title"
//               >
//                 <DialogTitle id="simple-dialog-title">
//                   Please Fill the Field
//                 </DialogTitle>
//                 <div id="simple-dialog-title">
//                   tslint:disable-next-line:jsx-no-lambda
//                   <Button onClick={() => this.handleDocuementPopUpClose()}>
//                     OK
//                   </Button>
//                 </div>
//               </Dialog>
//             } */}
//             <AminityTypeMasterForm
//               onHandleActivatePopUpAminity={
//                 this.onHandleActivatePopUpOpenAminity
//               }
//               onHandleActivePopUpCloseAminity={
//                 this.onHandleActivatePopUpCloseAminity
//               }
//               activatePopUpOpenAminity={this.state.activatePopUpOpenAminity}
//               onHandleActivateClickAminity={this.onHandleActivateClickAminity}
//               searchInputAminity={this.state.searchInputAminity}
//               onHandleSearchAminity={this.onHandleSearchAminity}
//               addPopUpOpenAminity={this.state.addPopUpOpenAminity}
//               onHandleAddPopUpAminity={this.onHandleAddPopUpOpenAminity}
//               onHandleAddPopUpCloseAminity={this.onHandleAddPopUpCloseAminity}
//               onHandleAddSaveAminity={this.onHandleAddSaveAminity}
//               AmenitiesId={this.state.AmenitiesId}
//               AmenitiesName={this.state.AmenitiesName}
//               onHandleEditNameChangeAminity={this.onHandleEditNameChangeAminity}
//               onHandleEditSaveAminity={this.onHandleEditSaveAminity}
//               deActivatePopUpOpenAminity={this.state.deActivatePopUpOpenAminity}
//               onHandleDeActivatePopUpCloseAminity={
//                 this.onHandleDeActivatePopUpCloseAminity
//               }
//               onHandleDeActivatePopUpOpenAminity={
//                 this.onHandleDeActivatePopUpOpenAminity
//               }
//               onHandleDeActivateSaveAminity={this.onHandleDeActivateSaveAminity}
//               editPopUpOpenAminity={this.state.editPopUpOpenAminity}
//               onHandleEditActionClickAminity={
//                 this.onHandleEditActionClickAminity
//               }
//               onHandleEditPopUpCloseAminity={this.onHandleEditPopUpCloseAminity}
//               // emptyRows={emptyRows}
//               countAminity={this.state.countAminity}
//               pageAminity={this.state.pageAminity}
//               rowsPerPageAminity={this.state.rowsPerPageAminity}
//               openAminity={this.state.openAminity}
//               open2Aminity={this.state.open2Aminity}
//               onHandleChangeRowsPerPage={this.handleChangeRowsPerPageAminity}
//               onHandlePageChange={this.handleChangePageAminity}
//               onHandleActionClickAminity={this.onHandleActionClickAminity}
//               onHandleCloseAminity={this.onHandleCloseAminity}
//               onHandleClose2Aminity={this.onHandleClose2Aminity}
//               documentTypeMasterList={this.state.AminityTypeMasterList}
//               aminityValues={this.state.aminityValues}
//             />
//           </Card>
//         </div>
//         {
//           <Dialog
//             open={this.state.dialogAminity}
//             // onClose={this.onHandleAddPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div id="simple-dialog-title">
//               You have successfully added document
//               {/* tslint:disable-next-line:jsx-no-lambda */}
//               <div className="popup-bottom-btn">
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
//             open={this.state.dialog1Aminity}
//             // onClose={this.onHandleAddPopUpClose}
//             aria-labelledby="simple-dialog-title"
//           >
//             <div id="simple-dialog-title">
//               Document name already existed, please add new document name.
//               {/* tslint:disable-next-line:jsx-no-lambda */}
//               <div className="popup-bottom-btn">
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
//       </div>
//     );
//   }
// }
// export default DocumentTypeMasterState;
