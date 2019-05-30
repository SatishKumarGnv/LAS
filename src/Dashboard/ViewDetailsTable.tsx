// import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Workbook from "react-excel-workbook";

import * as React from "react";

import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
// import {
//   IViewDetailsStateValues,
//   IViewDetailStateProps
// } from "../Container/ViewDetailsState";
import {
  IViewDetailsStateValues,
  IViewDetailStateProps
} from "src/DefaultLayout/HomePage";
import Pager from "../Masters/Pager";

export interface IViewDetailsInnerProps {
  readonly changeViewValues: IViewDetailsStateValues;
}

export interface IViewProps {
  readonly changeViewValues: ReadonlyArray<IViewDetailsStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;

  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

const ViewDetailsInnerForm = (props: IViewDetailsInnerProps) => (
  <TableRow>
    <TableCell>{props.changeViewValues.DistrictName}</TableCell>
    <TableCell>{props.changeViewValues.MandalName}</TableCell>
    <TableCell>{props.changeViewValues.VillageName}</TableCell>
    <TableCell>{props.changeViewValues.PlotCode}</TableCell>
    <TableCell>{props.changeViewValues.TotalLandSize}</TableCell>
    <TableCell>{props.changeViewValues.AvailableLandSize}</TableCell>
  </TableRow>
);

export const ViewDetailsTable = (props: IViewProps) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="ViewDetails.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.changeViewValues} name="Sheet A">
            <Workbook.Column label="District" value="DistrictName" />
            <Workbook.Column label="Mandal" value="MandalName" />
            <Workbook.Column label="Village" value="VillageName" />
            <Workbook.Column label="Plot Code" value="PlotCode" />
            <Workbook.Column
              label="Total Land (In Acres)"
              value="TotalLandSize"
            />
            <Workbook.Column
              label="Available Land (In Acres)"
              value="AvailableLandSize"
            />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>District</TableCell>
              <TableCell>Mandal</TableCell>
              <TableCell>Village</TableCell>
              <TableCell>Plot Code</TableCell>
              <TableCell>Total Land (In Acres)</TableCell>
              <TableCell>Available Land (In Acres)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.changeViewValues && props.changeViewValues.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.changeViewValues &&
              props.changeViewValues
                .map((value, id) => (
                  <ViewDetailsInnerForm key={id} changeViewValues={value} />
                ))

                // search for all fields in table
                .filter((x: React.ReactElement<IViewDetailsInnerProps>) => {
                  return props.searchInput !== ""
                    ? x.props.changeViewValues.DistrictName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                        x.props.changeViewValues.MandalName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        x.props.changeViewValues.VillageName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        // x.props.changeViewValues.PlotCode.toString().includes(
                        //   props.searchInput
                        // ) ||
                        x.props.changeViewValues.TotalLandSize.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase()) ||
                        x.props.changeViewValues.AvailableLandSize.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase())
                    : true;
                })
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const ViewDetailTableForm = (props: IViewDetailStateProps) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleDashboardSearch}
      margin="normal"
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    <ViewDetailsTable
      changeViewValues={props.changeViewValues}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
      searchInput={props.searchInput}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}

      // onSelectAllClick={props.onSelectAllClick}
    />
    <Pager
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />
  </div>
);
export default ViewDetailTableForm;
