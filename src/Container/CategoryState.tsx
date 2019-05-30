// import { DialogTitle } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Dialog from "@material-ui/core/Dialog";
// import Typography from "@material-ui/core/Typography";
// import * as React from "react";
// import {
//   getCategoryGridValues,
//   postActivateCategoryID,
//   postAddCategoryValues,
//   postDeActivateCategoryId,
//   postEditCategoryValues
// } from "src/Api_Integration/CategoryApi";
// import AddCategoryTypeForm from "src/PTMSMASTERS/Categery/AddCategory";
// import CategoryTypeMasterForm, {
//   IEditCategoryProps
// } from "src/PTMSMASTERS/Categery/Category";
// // import { ISubmitApplicationPopUpValues } from "./SubmittedApplicationState";
// // import Pager from './Pager'
// export interface ICategoryTypeStateValues {
//   readonly CreatedBy: number;
//   readonly CreatedOn: string;
//   readonly CategoryOwnershipId: number;
//   readonly CategoryOwnershipName: string;
//   readonly IsActive: boolean;
//   readonly ModifiedBy: number;
//   readonly ModifiedOn: string;
//   readonly ReturnCode: number;
// }
// export interface ICategoryTypeMasterStateProps {
//   readonly categoryTypeMasterList: ReadonlyArray<ICategoryTypeStateValues>;
//   readonly searchCategoryInput: string;
//   readonly openCategory: boolean;
//   readonly open2Category: boolean;
//   readonly ClickOpen: boolean;
//   readonly dropDownOpen: any;
//   readonly dropDownOpen2: any;
//   // readonly expandApplicationId: string;
//   // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
//   readonly editPopUpOpenCategory: boolean;
//   readonly addPopUpOpenCategory: boolean;
//   readonly activatePopUpOpenCategory: boolean;
//   readonly deActivatePopUpOpenCategory: boolean;
//   readonly categoryValues: ICategoryTypeStateValues;
//   onHandleDeActivatePopUpClose(): void;
//   onHandleDeActivatePopUpOpen(categoryValues: any): void;
//   onHandleDeActivateSave(event: any): void;
//   // onHandleClick(event: any): void;
//   onHandleActionClick(categoryValues: ICategoryTypeStateValues): void;
//   onHandleEditActionClick(): void;
//   onHandleEditSave(values: IEditCategoryProps & IEditCategoryValues): void;
//   onHandleEditPopUpClose(): void;
//   onHandleClose(): void;
//   onHandleClose2(): void;
//   onHandleAddSave(values: IAddCategoryValues & IAddCategoryProps): void;
//   onHandleAddPopUp(): void;
//   onHandleAddPopUpClose(): void;
//   onHandleAddPopUpCloseCategory(): void;
//   onHandleSearch(event: any): void;
//   onHandleActivatePopUp(categoryValues: any): void;
//   onHandleActivePopUpClose(): void;
//   onHandleActivateClick(event: any): void;
// }
// export interface IEditCategoryValues {
//   readonly CategoryOwnershipId: number;
//   readonly CategoryOwnershipName: string;
//   // onHandleEditNameChange(event: any): void;
// }
// export interface IAddCategoryValues {
//   readonly CategoryOwnershipId: number;
//   readonly newCategoryName: string;
//   onHandleAddChange(event: any): void;
// }
// export interface IAddCategoryProps {
//   readonly categoryTypeMasterList: ReadonlyArray<ICategoryTypeStateValues>;
//   onHandleAddSave(values: IAddCategoryValues & IAddCategoryProps): void;
//   onHandleAddPopUp(): void;
//   onHandleAddPopUpCloseCategory(): void;
//   onHandleAddPopUpClosecategory():void
//   onHandleAddPopUpOpenCategory(): void;
//   onHandleAddSaveCategory(values: IAddCategoryValues & IAddCategoryProps): void;
// }
// export interface IActivateCategoryProps {
//   readonly id: number;
//   onHandleActivateClick(event: any): void;
//   onHandleActivePopUpClose(): void;
// }
// class CategoryTypeMasterState extends React.Component<
//   ICategoryTypeMasterStateProps & IEditCategoryValues
// > {
//   public readonly state = {
//     CategoryOwnershipName: "",
//     CategoryTypeMasterList: [],
//     activatePopUpOpenCategory: false,
//     addPopUpOpenCategory: false,
//     deActivatePopUpOpenCategory: false,
//     editSuccessPopUpCategory: false,
//     open2Category: false,
//     openCategory: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     editPopUpOpenCategory: false,
//     // tslint:disable-next-line:object-literal-sort-keys
//     categoryValues: {},
//     CategoryOwnershipId: 0,
//     newCategoryName: "",
//     pageCategory: 0,
//     countCategory: 0,
//     dialog1Category: false,
//     rowsPerPageCategory: 5,
//     searchCategoryInput: "",
//     CategoryPopUp: false,
//     dialogCategory: false
//   };
//   constructor(props: ICategoryTypeMasterStateProps & IEditCategoryValues) {
//     super(props);
//   }
//   public componentWillMount() {
//     // getting data for the documenttypemaster table
//     getCategoryGridValues()
//       .then(res => {
//         this.setState({
//           ...this.state,
//           CategoryTypeMasterList: res.jsonData.data,
//           count: res.jsonData.data.length
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   }
//   // for page change
//   public readonly handleChangePage = (event: any, pageCategory: number) => {
//     this.setState({ pageCategory });
//   };
//   public onHandleRefresh = () => {
//     getCategoryGridValues()
//       .then(res => {
//         this.setState({
//           ...this.state,
//           CategoryTypeMasterList: res.jsonData.data,
//           newCategoryName: ""
//         });
//       })
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };
//   // for rows change per page
//   public readonly handleChangeRowsPerPage = (event: any) => {
//     this.setState({ rowsPerPageCategory: event.target.value });
//   };
//   //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
//   //       this.setState(event.target.value)
//   //   }
//   // fetch Call for Pop Up details based on ID
//   public onHandleActionClick = (categoryValues: ICategoryTypeStateValues) => {
//     this.setState({
//       ...this.state,
//       categoryValues
//       // open: documentValues.IsActive === true ? true : false,
//       // open2: documentValues.IsActive === false ? true : false
//       // tslint:disable-next-line:object-literal-sort-keys
//       // documentName: name,
//       // dropDownOpen: value === true ? event.currentTarget : null,
//       // dropDownOpen2: value === false ? event.currentTarget : null,
//       // id
//     });
//   };
//   public onHandleEditNameChange = (event: any) => {
//     this.setState({ ...this.state, CategoryOwnershipName: event.target.value });
//   };
//   public onHandleAddChange = (event: any) => {
//     this.setState({ ...this.state, newCategoryName: event.target.value });
//   };
//   // for Edit PopUp open
//   public onHandleEditActionClick = (
//     categoryValues: ICategoryTypeStateValues
//   ) => {
//     this.setState({
//       ...this.state,
//       categoryValues,
//       editPopUpOpenCategory: true,
//       openCategory: false
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
//   public onHandleSearch = (event: any) => {
//     // tslint:disable-next-line:no-console
//     const searchCategoryInput = event.target.value;
//     const data = this.state.CategoryTypeMasterList.filter(
//       (x: ICategoryTypeStateValues) =>
//         searchCategoryInput !== ""
//           ? this.documentNameIncludes(
//               searchCategoryInput,
//               x.CategoryOwnershipName
//             ) ||
//             x.IsActive.toString()
//               .toLowerCase()
//               .includes(this.getActivestate(searchCategoryInput.toLowerCase()))
//           : x
//     );
//     this.setState({
//       ...this.state,
//       countCategory: data.length,
//       searchCategoryInput
//     });
//   };
//   // deActivate Popup open
//   public onHandleDeActivatePopUpOpen = (categoryValues: any) => {
//     this.setState({
//       ...this.state,
//       categoryValues,
//       deActivatePopUpOpenCategory: true,
//       openCategory: false
//     });
//   };
//   // Activate Popup open
//   public onHandleActivatePopUpOpen = (categoryValues: any) => {
//     this.setState({
//       ...this.state,
//       activatePopUpOpenCategory: true,
//       categoryValues,
//       open2Category: false
//     });
//   };
//   // add Popup open
//   public onHandleAddPopUpOpen = () => {
//     this.setState({ ...this.state, addPopUpOpenCategory: true });
//   };
//   // fetch call for Edited Document Id Save
//   public onHandleEditSave = (
//     values: IEditCategoryProps & IEditCategoryValues
//   ) => {
//     // fetch call for Edit values Save
//     postEditCategoryValues(values)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           CategoryOwnershipId: values.CategoryOwnershipId,
//           CategoryOwnershipName: values.CategoryOwnershipName,
//           CategoryTypeMasterList: this.state.CategoryTypeMasterList.map(
//             (x: ICategoryTypeStateValues) =>
//               x.CategoryOwnershipId === values.CategoryOwnershipId
//                 ? {
//                     ...x,
//                     CategoryOwnershipName: res.model.CategoryOwnershipName
//                   }
//                 : x
//           ),
//           // documentTypeMasterList: res,
//           editPopUpOpenCategory: false,
//           editSuccessPopUpCategory: true
//         });
//       })
//       .then(() =>
//         getCategoryGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             CategoryTypeMasterList: res.jsonData.data,
//             countCategory: res.jsonData.data.length
//           });
//         })
//       )

//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };

//   // fetch call for Deactivate DocumentId
//   public onHandleDeActivateSave = (event: any) => {
//     // tslint:disable-next-line:no-console
//     console.log(event);
//     postDeActivateCategoryId(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           deActivatePopUpOpenCategory: false
//           //  DocumentTypeMasterList: res,
//         });
//       })
//       .then(() =>
//         getCategoryGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             CategoryTypeMasterList: res.jsonData.data
//           });
//         })
//       )
//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };
//   // To Close Dialog PopUp
//   public onHandleClose1 = () => {
//     this.setState({ ...this.state, openCategory: false });
//   };
//   // To Close Dialog PopUp
//   public onHandleClose2 = () => {
//     this.setState({ ...this.state, open2Category: false });
//   };
//   // To Close Edit PopUp Close
//   public onHandleEditPopUpClose = () => {
//     this.setState({ ...this.state, editPopUpOpenCategory: false });
//   };
//   // to Close Add PopUp
//   public onHandleAddPopUpCloseCategory = () => {
//     this.setState({
//       ...this.state,
//       addPopUpOpenCategory: false,
//       newCategoryName: ""
//     });
//   };
//   // To Close Edit PopUp Close
//   public onHandleDeActivatePopUpClose = () => {
//     this.setState({ ...this.state, deActivatePopUpOpenCategory: false });
//   };
//   // To Close Activate PopUp Close
//   public onHandleActivatePopUpClose = () => {
//     this.setState({ ...this.state, activatePopUpOpenCategory: false });
//   };
//   public documentNameIncludes = (
//     searchCategoryInput: string,
//     documentName?: string
//   ) => {
//     if (documentName) {
//       return documentName
//         .toLowerCase()
//         .includes(searchCategoryInput.toLowerCase());
//     } else {
//       return false;
//     }
//   };
//   public onHandleAddSave = (values: IAddCategoryValues & IAddCategoryProps) => {
//     if (
//       this.state.CategoryTypeMasterList.filter(
//         (x: ICategoryTypeStateValues) =>
//           x.CategoryOwnershipName === values.newCategoryName
//       ).length === 0
//     ) {
//       postAddCategoryValues(
//         // this.state.DocumentTypeMasterList.length,
//         this.state.CategoryTypeMasterList.length + 1,
//         values.newCategoryName
//       )
//         .then(res => {
//           this.setState({
//             ...this.state,
//             CategoryTypeMasterList: [
//               ...this.state.CategoryTypeMasterList,
//               res.model
//             ]
//           });
//         })
//         .then(() =>
//           getCategoryGridValues().then(res => {
//             this.setState({
//               ...this.state,
//               CategoryTypeMasterList: res.jsonData.data,
//               addPopUpOpenCategory: false,
//               countCategory: res.jsonData.data.length,
//               dialogCategory: true,

//               newCategoryName: ""
//             });
//           })
//         )
//         // tslint:disable-next-line:no-console
//         .catch(err => console.log(err));
//     } else {
//       this.setState({
//         dialog1Category: true,
//         newCategoryName: ""
//       });
//     }
//   };
//   public onHandleActivateClick = (
//     event: any,
//     categoryValues: ICategoryTypeStateValues
//   ) => {
//     postActivateCategoryID(event)
//       .then(res => {
//         this.setState({
//           ...this.state,
//           //  DocumentTypeMasterList: res,
//           activatePopUpOpenCategory: false
//         });
//       })
//       .then(() =>
//         getCategoryGridValues().then(res => {
//           this.setState({
//             ...this.state,
//             CategoryTypeMasterList: res.jsonData.data,
//             newCategoryName: ""
//           });
//         })
//       )

//       // tslint:disable-next-line:no-console
//       .catch(err => console.log(err));
//   };
//   public handleDocuementPopUpClose = () => {
//     this.setState({ ...this.state, CategoryPopUp: false });
//   };
//   public handlePopUpClose = () => {
//     this.setState({
//       dialogCategory: false
//     });
//   };
//   public handlePopUpClose1 = () => {
//     this.setState({
//       dialog1Category: false
//     });
//   };

//   public onHandleEditSuccessPopUpClose = () => {
//     this.setState({ ...this.state, editSuccessPopUpCategory: false });
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
//                     onClick={() => this.onHandleAddPopUpOpen()}
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
//                 open={this.state.addPopUpOpenCategory}
//                 onClose={this.onHandleAddPopUpClose}
//                 aria-labelledby="simple-dialog-title"
//               >
//                 <div className="popup-title">
//                   <DialogTitle id="simple-dialog-title">
//                     Create New Document
//                   </DialogTitle>
//                 </div>
//                 <div id="simple-dialog-title">
//                   <AddCategoryTypeForm
//                     CategoryOwnershipId={this.state.CategoryOwnershipId}
//                     newCategoryName={this.state.newCategoryName}
//                     categoryTypeMasterList={this.state.CategoryTypeMasterList}
//                     onHandleAddPopUp={this.onHandleAddPopUpOpen}
//                     onHandleAddSave={this.onHandleAddSave}
//                     onHandleAddChange={this.onHandleAddChange}
//                     onHandleAddPopUpClose={this.onHandleAddPopUpCloseCategory}
//                   />
//                 </div>
//               </Dialog>
//             }

//             {
//               <Dialog
//                 open={this.state.editSuccessPopUpCategory}
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
//             <CategoryTypeMasterForm
//               onHandleActivatePopUp={this.onHandleActivatePopUpOpen}
//               onHandleActivatePopUpCloseCategory={
//                 this.onHandleActivatePopUpCloseCategory
//               }
//               activatePopUpOpenCategory={this.state.activatePopUpOpenCategory}
//               onHandleActivateClick={this.onHandleActivateClick}
//               searchCategoryInput={this.state.searchCategoryInput}
//               onHandleSearch={this.onHandleSearch}
//               addPopUpOpenCategory={this.state.addPopUpOpenCategory}
//               onHandleAddPopUp={this.onHandleAddPopUpOpen}
//               onHandleAddPopUpClose={this.onHandleAddPopUpCloseCategory}
//               onHandleAddSave={this.onHandleAddSave}
//               CategoryOwnershipId={this.state.CategoryOwnershipId}
//               CategoryOwnershipName={this.state.CategoryOwnershipName}
//               onHandleEditNameChange={this.onHandleEditNameChange}
//               onHandleEditSave={this.onHandleEditSave}
//               deActivatePopUpOpenCategory={
//                 this.state.deActivatePopUpOpenCategory
//               }
//               onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
//               onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
//               onHandleDeActivateSave={this.onHandleDeActivateSave}
//               editPopUpOpen={this.state.editPopUpOpenCategory}
//               onHandleEditActionClick={this.onHandleEditActionClick}
//               onHandleEditPopUpClose={this.onHandleEditPopUpClose}
//               // emptyRows={emptyRows}
//               count={this.state.countCategory}
//               page={this.state.pageCategory}
//               rowsPerPage={this.state.rowsPerPageCategory}
//               openCategory={this.state.openCategory}
//               open2Category={this.state.open2Category}
//               onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
//               onHandlePageChange={this.handleChangePage}
//               onHandleActionClick={this.onHandleActionClick}
//               onHandleClose={this.onHandleClose1}
//               onHandleClose2={this.onHandleClose2}
//               categoryTypeMasterList={this.state.CategoryTypeMasterList}
//               categoryValues={this.state.categoryValues}
//             />
//           </Card>
//         </div>
//         {
//           <Dialog
//             open={this.state.dialogCategory}
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
//             open={this.state.dialog1Category}
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
// export default CategoryTypeMasterState;
