import * as React from "react";

// import { ITablePaginationProps } from './StateMaintain';

import Pager, { IPagerProps } from "../Pager";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Workbook from "react-excel-workbook";

import TableRow from "@material-ui/core/TableRow";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";
import {
  IEditUnitConversionValues,
  IUnitConversionTypeMasterStateProps,
  IUnitConversionTypeStateValues
} from "src/Container/UnitConversionState";

import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import ActivateUnitConversionTypeForm from "src/Masters/UnitConversions/ActivateUnitConversionForm";
import DeActivateUnitConversionTypeForm from "src/Masters/UnitConversions/DeActivateUnitConversion";
import EditUnitConversionTypeForm from "src/Masters/UnitConversions/EditUnitConversion";

export interface IDocumentTypeProps {
  readonly unitValues: IUnitConversionTypeStateValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  // readonly expandApplicationId: string;
  readonly open: boolean;
  readonly open2: boolean;

  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(unitValues: any): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(unitValues: any): void;
  onHandleEditPopUpClose(unitValues: any): void;
  onHandleEditSave(values: IEditUnitProps & IEditUnitConversionValues): void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(unitValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUp(unitValues: any): void;
  onHandleActivePopUpClose(): void;
}

export interface IEditUnitProps {
  readonly unitValues: IUnitConversionTypeStateValues;
  onHandleEditSave(values: IEditUnitProps & IEditUnitConversionValues): void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IDeActivateUnitProps {
  readonly UnitConvertionId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const DocumentTypeMasterItems = (
  props: IDocumentTypeProps &
    IEditUnitConversionValues &
    IDeActivateUnitProps &
    IDocumentTypeProps
) => (
  <TableRow>
    <TableCell>{props.unitValues.UnitName}</TableCell>
    <TableCell>{props.unitValues.ConvertToUnitName}</TableCell>
    <TableCell>{props.unitValues.ConvertValue}</TableCell>
    <TableCell>
      {props.unitValues.IsActive.toString() === "true" ? "Active" : "InActive"}
    </TableCell>
    <TableCell>
      {props.unitValues.IsActive.toString() === "true" ? (
        <div>
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpen(props.unitValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => props.onHandleActivatePopUp(props.unitValues)}
            >
              <img src="/images/active1.png" />
            </Button>
          </div>
        </div>
      )}
    </TableCell>
  </TableRow>
);

const getActivestate = (state: string) => {
  switch (state) {
    case "Active".toLowerCase():
      return "true";
    case "InActive".toLowerCase():
      return "false";
    default:
      return state;
  }
};

const UnitConversionTypeMasterList = (
  props: IUnitConversionTypeMasterStateProps &
    IPagerProps & { emptyRows: number } & IEditUnitConversionValues &
    IDeActivateUnitProps &
    IDocumentTypeProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="UnitConversions.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" />
            Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.UnitTypeMasterList.map(x => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column label="Unit Type" value="UnitName" />
          <Workbook.Column label="Converted Type" value="ConvertToUnitName" />
          <Workbook.Column label="Value" value="ConvertValue" />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Unit Type</TableCell>
            <TableCell>Converted Type</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.UnitTypeMasterList.length !== 0 ? (
            props.UnitTypeMasterList.filter(x =>
              props.searchInput !== ""
                ? x.UnitName.toLowerCase().includes(
                    props.searchInput.toLowerCase()
                  ) ||
                  x.ConvertToUnitName.toLowerCase().includes(
                    props.searchInput.toLowerCase()
                  ) ||
                  x.ConvertValue.toString()
                    .toLowerCase()
                    .includes(props.searchInput.toLowerCase()) ||
                  x.IsActive.toString()
                    .toLowerCase()
                    .includes(getActivestate(props.searchInput.toLowerCase()))
                : x
            )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <DocumentTypeMasterItems
                  onHandleClose2={props.onHandleClose2}
                  activatePopUpOpen={props.activatePopUpOpen}
                  onHandleActivatePopUp={props.onHandleActivatePopUp}
                  onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                  key={id}
                  unitValues={value}
                  UnitConvertionId={props.UnitConvertionId}
                  UnitName={props.UnitName}
                  // onHandleEditNameChange={props.onHandleEditNameChange}
                  onHandleEditSave={props.onHandleEditSave}
                  open={props.open}
                  open2={props.open2}
                  editPopUpOpen={props.editPopUpOpen}
                  deActivatePopUpOpen={props.deActivatePopUpOpen}
                  onHandleDeActivateSave={props.onHandleDeActivateSave}
                  onHandleDeActivatePopUpClose={
                    props.onHandleDeActivatePopUpClose
                  }
                  onHandleDeActivatePopUpOpen={
                    props.onHandleDeActivatePopUpOpen
                  }
                  onHandleActionClick={props.onHandleActionClick}
                  onHandleEditActionClick={props.onHandleEditActionClick}
                  onHandleEditPopUpClose={props.onHandleEditPopUpClose}
                  onHandleClose={props.onHandleClose}
                  onHandleActivateClick={props.onHandleActivateClick}
                />
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                {" "}
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);

const UnitConversionTypeMasterForm = (
  props: IUnitConversionTypeMasterStateProps &
    IPagerProps & { emptyRows: number } & IEditUnitConversionValues &
    IDeActivateUnitProps &
    IDocumentTypeProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="searchInput"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      margin="normal"
      onChange={props.onHandleSearch}
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    <UnitConversionTypeMasterList
      onHandleClose2={props.onHandleClose2}
      activatePopUpOpen={props.activatePopUpOpen}
      onHandleActivatePopUp={props.onHandleActivatePopUp}
      onHandleActivePopUpClose={props.onHandleActivePopUpClose}
      onHandleActivateClick={props.onHandleActivateClick}
      onHandleAddSave={props.onHandleAddSave}
      addPopUpOpen={props.addPopUpOpen}
      onHandleAddPopUp={props.onHandleAddPopUp}
      onHandleAddPopUpClose={props.onHandleAddPopUpClose}
      open={props.open}
      open2={props.open2}
      UnitConvertionId={props.UnitConvertionId}
      UnitName={props.UnitName}
      // onHandleEditNameChange={props.onHandleEditNameChange}
      onHandleEditSave={props.onHandleEditSave}
      deActivatePopUpOpen={props.deActivatePopUpOpen}
      onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
      onHandleDeActivatePopUpOpen={props.onHandleDeActivatePopUpOpen}
      onHandleDeActivateSave={props.onHandleDeActivateSave}
      editPopUpOpen={props.editPopUpOpen}
      onHandleEditActionClick={props.onHandleEditActionClick}
      onHandleEditPopUpClose={props.onHandleEditPopUpClose}
      UnitTypeMasterList={props.UnitTypeMasterList}
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandleActionClick={props.onHandleActionClick}
      onHandleClose={props.onHandleClose}
      emptyRows={props.emptyRows}
      onHandleSearch={props.onHandleSearch}
      searchInput={props.searchInput}
      unitValues={props.unitValues}
    />
    <Pager
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />

    {
      <Dialog
        open={props.editPopUpOpen}
        // onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <EditUnitConversionTypeForm
            UnitConvertionId={props.unitValues.UnitConvertionId}
            UnitName={props.unitValues.UnitName}
            unitValues={props.unitValues}
            onHandleEditActionClick={props.onHandleEditActionClick}
            onHandleEditSave={props.onHandleEditSave}
            onHandleEditPopUpClose={props.onHandleEditPopUpClose}
            // onHandleEditNameChange={props.onHandleEditNameChange}
          />
        </div>
      </Dialog>
    }

    {
      <Dialog
        open={props.deActivatePopUpOpen}
        // onClose={props.onHandleDeActivatePopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <DeActivateUnitConversionTypeForm
            UnitConvertionId={props.unitValues.UnitConvertionId}
            onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
            onHandleDeActivateSave={props.onHandleDeActivateSave}
          />
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.activatePopUpOpen}
        onClose={props.onHandleActivePopUpClose}
        aria-labelledby="Active-dialog-title"
      >
        <div id="Active-dialog-title">
          <ActivateUnitConversionTypeForm
            id={props.unitValues.UnitConvertionId}
            onHandleActivateClick={props.onHandleActivateClick}
            onHandleActivePopUpClose={props.onHandleActivePopUpClose}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default UnitConversionTypeMasterForm;
