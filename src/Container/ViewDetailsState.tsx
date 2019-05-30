// import { IViewDetailStateProps } from "./Dashboard";

// import * as React from "react";

// import { Card, CardContent, Typography } from "@material-ui/core";
// import ViewDetailTableForm from "../Dashboard/ViewDetailsTable";

// // // import { getDashboardViewDetails } from "../Api_Integration/DashboardService";
// // import { getDashboardViewDetails } from "../Api_Integration/DashboardService";

// // export interface IViewDetailsStateValues {
// //   readonly DistrictName: string;
// //   readonly MandalName: string;
// //   //   readonly MiddleName: string;
// //   readonly VillageName: string;
// //   readonly TownshipId: number;
// //   readonly PlotCode: number;
// //   readonly AvailableLandSize: number;
// //   readonly TotalLandSize: number;
// // }

// // export interface IViewDetailStateProps {
// //   readonly changeViewValues: ReadonlyArray<IViewDetailsStateValues>;
// //   readonly page: number;
// //   readonly rowsPerPage: number;
// //   readonly count: number;
// //   readonly searchInput: string;
// //   readonly rowCount: number;
// //   readonly numSelected: number;
// //   //   onHandleSearch(event: any): void;
// //   onHandleChangeRowsPerPage(event: any): void;
// //   onHandlePageChange(evt: any, page: number): void;

// //   // onSelectAllClick(evt: any): void;
// // }

// // class ViewDetailState extends React.Component<IViewDetailStateProps & any> {
// //   public readonly state = {
// //     // tslint:disable-next-line:object-literal-sort-keys

// //     DistrictName: "",
// //     MandalName: "",
// //     //   readonly MiddleName: string;
// //     VillageName: "",
// //     // tslint:disable-next-line:object-literal-sort-keys
// //     TownshipId: 0,
// //     PlotCode: 0,
// //     AvailableLandSize: 0,
// //     TotalLandSize: 0,
// //     changeViewValues: [],
// //     selectedViewList: [],

// //     // tslint:disable-next-line:object-literal-sort-keys
// //     emptyRows: 0,
// //     emptyRows2: 0,
// //     // tslint:disable-next-line:object-literal-sort-keys
// //     count: 0,

// //     page: 0,
// //     rowCount: 0,
// //     numSelected: 0,
// //     rowsPerPage: 5,
// //     changePasswordValues: [],
// //     searchInput: ""
// //   };
// //   constructor(props: IViewDetailStateProps & any) {
// //     super(props);
// //   }

// //   //   public componentWillMount() {
// //   //
// //   public handleChangePage = (event: any, p: number) => {
// //     this.setState({ ...this.state, page: p });
// //   };
// //   public handleChangeRowsPerPage = (event: any) => {
// //     this.setState({ ...this.state, rowsPerPage: event.target.value });
// //   };

// //   public handleClick = (values: any) => {
// //     // tslint:disable-next-line:no-console
// //     console.log(values.target.value);
// //     this.setState({
// //       ...this.state,
// //       TownshipId: values
// //     });
// //     getDashboardViewDetails(values.target.value)
// //       .then(res => {
// //         this.setState({
// //           ...this.state,
// //           selectedViewList: res.aaData
// //         });
// //       })
// //       .catch(err => err);
// //   };

// //   public onSubmit = (evt: any) =>
// //     // tslint:disable-next-line:no-console
// //     console.log(evt);

// //   public render() {
// //     return (
// //       <div className="innerpage-container">
// //         <div className="reports-card">
// //           <Card>
// //             <CardContent>
// //               <Typography
// //                 gutterBottom={true}
// //                 variant="headline"
// //                 component="h4"
// //                 className="grap-heading"
// //               >
// //                 <img src="/images/table-icon.png" />
// //                 Users List
// //               </Typography>
// //             </CardContent>
// //             <ViewDetailTableForm
// //               page={this.state.page}
// //               rowsPerPage={this.state.rowsPerPage}
// //               count={this.state.count}
// //               searchInput={this.state.searchInput}
// //               onHandlePageChange={this.handleChangePage}
// //               onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
// //               //   onHandleSearch={this.onHandleSearch}
// //               rowCount={this.state.rowCount}
// //               changeViewValues={this.state.changeViewValues}
// //               numSelected={this.state.numSelected}

// //               //   onHandleSearch={this.onHandleSearch}

// //               // onSelectAllClick={this.onSelectAllClick}
// //             />
// //           </Card>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default ViewDetailState;

// export const ViewDetailState =(props:IViewDetailStateProps & any)=>{
//       return (
//       <div className="innerpage-container">
//         <div className="reports-card">
//           <Card>
//             <CardContent>
//               <Typography
//                 gutterBottom={true}
//                 variant="headline"
//                 component="h4"
//                 className="grap-heading"
//               >
//                 <img src="/images/table-icon.png" />
//                 Users List
//               </Typography>
//             </CardContent>
//             <ViewDetailTableForm
//               page={props.page}
//               rowsPerPage={props.rowsPerPage}
//               count={props.count}
//               searchInput={props.searchInput}
//               onHandlePageChange={props.handleChangePage}
//               onHandleChangeRowsPerPage={props.handleChangeRowsPerPage}
//               //   onHandleSearch={this.onHandleSearch}
//               rowCount={props.rowCount}
//               changeViewValues={props.changeViewValues}
//               numSelected={props.numSelected}

//               //   onHandleSearch={this.onHandleSearch}

//               // onSelectAllClick={this.onSelectAllClick}
//             />
//           </Card>
//         </div>
//       </div>
//     );
// }
