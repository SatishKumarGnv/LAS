// import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import * as React from "react";

import { Checkbox, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  IPropertyTaxTableStateProps,
  IPropertyTaxTableValues
} from "src/DefaultLayout/HomePage";
import Pager from "src/Masters/Pager";
import { documentNameIncludes } from "../Categery/Category";

interface IPropertyTaxTableInnerProps {
  readonly selected: ReadonlyArray<string>;
  readonly propertyTaxValues: IPropertyTaxTableValues;
  readonly numSelected: number;
  readonly rowCount: number;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handlePropertyTaxValueChange(id: number, event: any): void;
}

export interface IPropertyTaxTableProps {
  readonly selected: ReadonlyArray<string>;
  readonly propertyTaxTableList: ReadonlyArray<IPropertyTaxTableValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly numSelected: number;
  readonly rowCount: number;
  handleSelect(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
  handlePropertyTaxValueChange(id: number, event: any): void;
  handleSelectAllClick(evt: React.ChangeEvent<HTMLInputElement>): void;
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void;
  onHandlePageChange(
    evt: React.ChangeEvent<HTMLInputElement>,
    page: number
  ): void;
}

const PropertyTaxTableInnerForm = (props: IPropertyTaxTableInnerProps) => (
  <TableRow>
    <TableCell>
      <Checkbox
        id={`${props.propertyTaxValues.id}`}
        checked={props.selected.indexOf(`${props.propertyTaxValues.id}`) >= 0}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.handleSelect(event, `${props.propertyTaxValues.id}`)
        }
      />
    </TableCell>
    <TableCell>{props.propertyTaxValues.PropertyType}</TableCell>
    <TableCell>{props.propertyTaxValues.BuildingClassificationType}</TableCell>
    <TableCell>{props.propertyTaxValues.NatureUsageType}</TableCell>
    <TableCell>{props.propertyTaxValues.Value}</TableCell>
    <TableCell>
      <TextField
        name="PropertyValue"
        type="number"
        // tslint:disable-next-line:jsx-no-lambda
        // onChange={() =>
        //   props.handlePropertyTaxValueChange(props.propertyTaxValues.id, event)
        // }
        value={props.propertyTaxValues.PropertyValue}
        margin="normal"
      />
    </TableCell>
  </TableRow>
);

export const PropertyTaxTableList = (props: IPropertyTaxTableProps) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="PropertyTaxConfiguration.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.propertyTaxTableList} name="Sheet A">
            <Workbook.Column label="Property Type" value="PropertyType" />
            <Workbook.Column
              label="Classification Of Building"
              value="BuildingClassificationType"
            />
            <Workbook.Column label="Nature Of Usage" value="NatureUsageType" />
            <Workbook.Column label="sq.metrs" value="Value" />
            <Workbook.Column label="value" value="PropertyValue" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                checked={props.rowCount === props.propertyTaxTableList.length}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  props.handleSelectAllClick(event)
                }
              />
            </TableCell>
            <TableCell>Property Type</TableCell>
            <TableCell>Classification Of Building</TableCell>
            <TableCell>Nature Of Usage</TableCell>
            <TableCell>Sq.Metrs</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.propertyTaxTableList.length === 0 ? (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          ) : (
            props.propertyTaxTableList
              .filter((x: IPropertyTaxTableValues) => {
                return props.searchInput !== ""
                  ? documentNameIncludes(
                      props.searchInput,
                      x.NatureUsageType
                    ) ||
                      documentNameIncludes(
                        props.searchInput,
                        x.BuildingClassificationType
                      ) ||
                      documentNameIncludes(props.searchInput, x.PropertyType) ||
                      documentNameIncludes(
                        props.searchInput,
                        x.Value.toString()
                      ) ||
                      documentNameIncludes(
                        props.searchInput,
                        x.PropertyValue.toString()
                      )
                  : true;
              })
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <PropertyTaxTableInnerForm
                  key={id}
                  propertyTaxValues={value}
                  numSelected={props.numSelected}
                  rowCount={props.rowCount}
                  handleSelect={props.handleSelect}
                  selected={props.selected}
                  handlePropertyTaxValueChange={
                    props.handlePropertyTaxValueChange
                  }
                />
              ))

            // search for all fields in table
          )}
        </TableBody>
      </Table>
    </div>
  );
};

const PropoertyTaxTable = (props: IPropertyTaxTableStateProps) => (
  <div className="table-card over-data">
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
    <PropertyTaxTableList
      handlePropertyTaxValueChange={props.handlePropertyTaxValueChange}
      selected={props.selected}
      propertyTaxTableList={props.propertyTaxTableList}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
      searchInput={props.searchInput}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      numSelected={props.numSelected}
      rowCount={props.rowCount}
      handleSelectAllClick={props.handleSelectAllClick}
      handleSelect={props.handleSelect}
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
export default PropoertyTaxTable;
