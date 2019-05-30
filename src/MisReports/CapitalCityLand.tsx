import * as React from "react";

import { IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  ICapitalCityLandStateProps,
  ICapitalCityLandStateValues
} from "../Container/CapitalCityLandState";
import Pager from "../Masters/Pager";

interface ICapitalCityLandProps {
  readonly capitalCityLandValues: ICapitalCityLandStateValues;
}

export interface ICapitalCityLandListTableProps {
  readonly capitalCityList: ReadonlyArray<ICapitalCityLandStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly emptyRows: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

const CapitalCityLandInnerForm = (props: ICapitalCityLandProps) => (
  <TableRow>
    <TableCell>{props.capitalCityLandValues.TownshipName}</TableCell>
    <TableCell>{props.capitalCityLandValues.TotalLand}</TableCell>
    <TableCell>{props.capitalCityLandValues.AvailableLand}</TableCell>
    <TableCell>{props.capitalCityLandValues.ReservedLand}</TableCell>
    <TableCell>{props.capitalCityLandValues.AllocatedLand}</TableCell>
  </TableRow>
);

export const CapitalCityLandListTable = (
  props: ICapitalCityLandListTableProps
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="CapitalCityLandDetails.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.capitalCityList} name="Sheet A">
            <Workbook.Column label="Township" value="TownshipName" />
            <Workbook.Column label="Total Land(In Acres)" value="TotalLand" />
            <Workbook.Column
              label="Available Land(In Acres)"
              value="AvailableLand"
            />
            <Workbook.Column
              label="Reserved Land(In Acres)"
              value="ReservedLand"
            />
            <Workbook.Column label="Alloted Land" value="AllocatedLand" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Township</TableCell>
              <TableCell>Total Land(In Acres)</TableCell>
              <TableCell>Available Land(In Acres)</TableCell>
              <TableCell>Reserved Land(In Acres)</TableCell>
              <TableCell> Allotted Land(In Acres)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.capitalCityList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.capitalCityList
                .map((value, id) => (
                  <CapitalCityLandInnerForm
                    key={id}
                    capitalCityLandValues={value}
                  />
                ))

                .filter(x => {
                  return props.searchInput !== ""
                    ? x.props.capitalCityLandValues.TownshipName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                        x.props.capitalCityLandValues.TotalLand.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase()) ||
                        x.props.capitalCityLandValues.AvailableLand.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase()) ||
                        x.props.capitalCityLandValues.ReservedLand.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase()) ||
                        x.props.capitalCityLandValues.AllocatedLand.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase())
                    : x;
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

const CapitalCityLandForm = (props: ICapitalCityLandStateProps) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleSearch}
      margin="normal"
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    <CapitalCityLandListTable
      count={props.count}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      capitalCityList={props.capitalCityList}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      emptyRows={props.emptyRows}
      searchInput={props.searchInput}
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
export default CapitalCityLandForm;
