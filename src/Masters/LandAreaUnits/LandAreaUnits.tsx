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

import TableRow from "@material-ui/core/TableRow";
// import TableSortLabel from "@material-ui/core/TableSortLabel";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";
import Workbook from "react-excel-workbook";
import {
  IEditLandAreaValues,
  ILandAreaUnitsStateProps,
  ILandAreaUnitsStateValues
} from "../../Container/LandAreaUnitsState";
import // IDocumentMasterTypeStateValues,
//   IDocumentTypeMasterStateProps,
//   IEditDocumentValues
"../../Container/MasterState";

import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import ActivateLandAreaUnitsTypeForm from "src/Masters/LandAreaUnits/ActivateLandAreaUnitsForm";
import DeActivateLandAreaTypeForm from "src/Masters/LandAreaUnits/DeActivateLandAreaUnitsForm";
import EditLandAreaTypeForm from "./EditLandAreaUnitForm";

export interface ILandAreaProps {
  readonly landAreaValues: ILandAreaUnitsStateValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  // readonly expandApplicationId: string;
  readonly open: boolean;
  readonly open2: boolean;
  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;F
  onHandleActionClick(landAreaValues: any): void;
  onHandleClose(): void;
  onHandleClose2(): void;
  onHandleEditActionClick(landAreaValues: ILandAreaUnitsStateValues): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(values: IEditLandAreaProps & IEditLandAreaValues): void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(landAreaValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUp(landAreaValues: any): void;
  onHandleActivePopUpClose(): void;
}

export interface IEditLandAreaProps {
  readonly landAreaValues: ILandAreaUnitsStateValues;
  onHandleEditSave(values: IEditLandAreaProps & IEditLandAreaValues): void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IDeActivatelandAreaProps {
  readonly UnitsId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const LandAreaTypeMasterItems = (
  props: ILandAreaProps & IEditLandAreaValues & IDeActivatelandAreaProps
) => (
  <TableRow>
    <TableCell>{props.landAreaValues.UnitsName}</TableCell>
    <TableCell>
      {props.landAreaValues.IsActive ? "Active" : "InActive"}
    </TableCell>
    <TableCell>
      {props.landAreaValues.IsActive ? (
        <div>
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleEditActionClick(props.landAreaValues)
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpen(props.landAreaValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => props.onHandleActivatePopUp(props.landAreaValues)}
          >
            <img src="/images/active1.png" />
          </Button>
        </div>
      )}{" "}
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
const LandAreaTypeMasterList = (
  props: ILandAreaUnitsStateProps &
    IPagerProps & { emptyRows: number } & IEditLandAreaValues &
    IDeActivatelandAreaProps &
    ILandAreaProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="LandAreaUnits.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" />
            Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.LandAreaList.map(x => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column label="Land Area Units Name" value="UnitsName" />

          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Land Area Units Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.LandAreaList.length !== 0 ? (
            props.LandAreaList.filter(x =>
              props.searchInput !== ""
                ? unitsNameIncludes(props.searchInput, x.UnitsName) ||
                  x.IsActive.toString()
                    .toLowerCase()
                    .includes(getActivestate(props.searchInput.toLowerCase()))
                : x
            )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, UnitsId) => (
                <LandAreaTypeMasterItems
                  activatePopUpOpen={props.activatePopUpOpen}
                  onHandleActivatePopUp={props.onHandleActivatePopUp}
                  onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                  key={UnitsId}
                  landAreaValues={value}
                  UnitsId={props.UnitsId}
                  //  onHandleEditNameChange={props.onHandleEditNameChange}
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
                  onHandleClose2={props.onHandleClose2}
                  onHandleActivateClick={props.onHandleActivateClick}
                  // UnitsId={props.UnitsId}
                  UnitsName={props.UnitsName}
                />
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {/* <TableRow>
      {props.emptyRows > 0 && (
        <TableRow style={{ height: 49 * props.emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableRow> */}
      </Table>
    </div>
  </div>
);

const unitsNameIncludes = (searchInput: string, unitsName?: string) => {
  if (unitsName) {
    return unitsName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};
const LandAreaTypeMasterForm = (
  props: ILandAreaUnitsStateProps &
    IPagerProps & { emptyRows: number } & IEditLandAreaValues &
    IDeActivatelandAreaProps &
    ILandAreaProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search inner-search-grid"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleSearch}
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    <LandAreaTypeMasterList
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
      UnitsId={props.UnitsId}
      // onHandleEditNameChange={props.onHandleEditNameChange}
      onHandleEditSave={props.onHandleEditSave}
      deActivatePopUpOpen={props.deActivatePopUpOpen}
      onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
      onHandleDeActivatePopUpOpen={props.onHandleDeActivatePopUpOpen}
      onHandleDeActivateSave={props.onHandleDeActivateSave}
      editPopUpOpen={props.editPopUpOpen}
      onHandleEditActionClick={props.onHandleEditActionClick}
      onHandleEditPopUpClose={props.onHandleEditPopUpClose}
      LandAreaList={props.LandAreaList}
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandleActionClick={props.onHandleActionClick}
      onHandleClose={props.onHandleClose}
      onHandleClose2={props.onHandleClose2}
      emptyRows={props.emptyRows}
      onHandleSearch={props.onHandleSearch}
      searchInput={props.searchInput}
      // UnitsId={props.UnitsId}
      UnitsName={props.UnitsName}
      landAreaValues={props.landAreaValues}
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
        onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <EditLandAreaTypeForm
            UnitsId={props.landAreaValues.UnitsId}
            UnitsName={props.landAreaValues.UnitsName!!}
            landAreaValues={props.landAreaValues}
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
        onClose={props.onHandleDeActivatePopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <DeActivateLandAreaTypeForm
            UnitsId={props.landAreaValues.UnitsId}
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
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <ActivateLandAreaUnitsTypeForm
            UnitsId={props.landAreaValues.UnitsId}
            onHandleActivateClick={props.onHandleActivateClick}
            onHandleActivePopUpClose={props.onHandleActivePopUpClose}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default LandAreaTypeMasterForm;
