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

import { IconButton } from "@material-ui/core";
// import Popover from "@material-ui/core/Popover";
import TableRow from "@material-ui/core/TableRow";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  IAllocationTypeMasterProps,
  IAllocationTypeMasterValues,
  IEditAllocationValues
} from "../../Container/AllocationTypeMasterState";
import ActivateAllocationTypeForm from "./ActivateAllocationType";
import DeActivateAllocationTypeForm from "./DeActivateAllocationMaster";
import EditAllocationTypeForm from "./EditAllocationType";

export interface IAllocationTypeProps {
  readonly allocationValues: IAllocationTypeMasterValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  // readonly expandApplicationId: string;
  readonly open: boolean;

  readonly open2: boolean;
  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(allocationValues: IAllocationTypeMasterValues): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(allocationValues: IAllocationTypeMasterValues): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(
    values: any
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(allocationValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUpOpen(allocationValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleDropDownChange(event: any): void;
  onHandleNameChange(event: any): void;
}

export interface IEditAllocationProps {
  readonly allocationValues: IAllocationTypeMasterValues;
  onHandleDropDownChange(event: any): void;
  // onHandleNameChange(event: any): void;
  // HandleEditAllocationChange(event: any): void;
  onHandleEditSave(
    values: any
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IAllocationValues {
  readonly allocationValues: IAllocationTypeMasterValues;
}

export interface IDeActivateAllocationProps {
  readonly AllocationSubTypeId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}
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

const AllocationTypeMasterItems = (
  props: IAllocationTypeProps &
    IEditAllocationValues &
    IDeActivateAllocationProps
) => (
  <TableRow>
    <TableCell>{props.allocationValues.AllocationName}</TableCell>
    <TableCell>{props.allocationValues.AllocationSubTypeName}</TableCell>
    <TableCell>
      {props.allocationValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      {props.allocationValues.IsActive.toString() === "true" ? (
        <div>
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleEditActionClick(props.allocationValues)
            }
          >
            <img src="/images/edit1.png" />
          </Button>
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleDeActivatePopUpOpen(props.allocationValues)
            }
          >
            <img src="/images/inactive1.png" />
          </Button>
        </div>
      ) : (
        <Button
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            props.onHandleActivatePopUpOpen(props.allocationValues)
          }
        >
          <img src="/images/active1.png" />
        </Button>
      )}
    </TableCell>
  </TableRow>
);

const AllocationTypeMasterList = (
  props: IAllocationTypeMasterProps &
    IPagerProps &
    IEditAllocationValues &
    IDeActivateAllocationProps &
    IAllocationValues
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="AllocationTypeMaster.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" />
            Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.allocationTypeList.map(x => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column label="Allocated To" value="AllocationName" />
          <Workbook.Column
            label="Allocation Type"
            value="AllocationSubTypeName"
          />
          <Workbook.Column label="Status" value={"IsActive"} />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Allocated To</TableCell>
            <TableCell>Allocation Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allocationTypeList.length !== 0 ? (
            props.allocationTypeList
              .filter(x =>
                props.searchInput !== ""
                  ? x.AllocationName.toLowerCase().includes(
                      props.searchInput.toLowerCase()
                    ) ||
                    allocationNameIncludes(
                      props.searchInput,
                      x.AllocationSubTypeName
                    ) ||
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
                <AllocationTypeMasterItems
                  onHandleNameChange={props.onHandleNameChange}
                  onHandleDropDownChange={props.onHandleDropDownChange}
                  AllocationSubTypeId={props.AllocationSubTypeId}
                  onHandleClose2={props.onHandleClose2}
                  open2={props.open2}
                  allocationNameValues={props.allocationNameValues}
                  AllocationSubTypeName={props.AllocationSubTypeName}
                  activatePopUpOpen={props.activatePopUpOpen}
                  onHandleActivatePopUpOpen={props.onHandleActivatePopUpOpen}
                  onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                  key={id}
                  allocationValues={value}
                  AllocationId={props.AllocationId}
                  allocationName={props.allocationName}
                  onHandleEditSave={props.onHandleEditSave}
                  open={props.open}
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
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);

const allocationNameIncludes = (
  searchInput: string,
  allocationName?: string
) => {
  if (allocationName) {
    return allocationName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};
const AllocationTypeMasterForm = (
  props: IAllocationTypeMasterProps &
    IPagerProps &
    IAllocationTypeProps &
    IEditAllocationValues &
    IDeActivateAllocationProps &
    IAllocationValues
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
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
      margin="normal"
    />

    <AllocationTypeMasterList
      // HandleEditAllocationChange={props.HandleEditAllocationChange}
      onHandleNameChange={props.onHandleNameChange}
      onHandleDropDownChange={props.onHandleDropDownChange}
      AllocationSubTypeId={props.AllocationSubTypeId}
      open2={props.open2}
      allocationNameValues={props.allocationNameValues}
      AllocationSubTypeName={props.AllocationSubTypeName}
      activatePopUpOpen={props.activatePopUpOpen}
      onHandleActivatePopUpOpen={props.onHandleActivatePopUpOpen}
      onHandleActivePopUpClose={props.onHandleActivePopUpClose}
      onHandleActivateClick={props.onHandleActivateClick}
      onHandleAddSave={props.onHandleAddSave}
      addPopUpOpen={props.addPopUpOpen}
      onHandleAddPopUp={props.onHandleAddPopUp}
      onHandleAddPopUpClose={props.onHandleAddPopUpClose}
      open={props.open}
      AllocationId={props.AllocationId}
      allocationName={props.allocationName}
      onHandleEditSave={props.onHandleEditSave}
      deActivatePopUpOpen={props.deActivatePopUpOpen}
      onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
      onHandleDeActivatePopUpOpen={props.onHandleDeActivatePopUpOpen}
      onHandleDeActivateSave={props.onHandleDeActivateSave}
      editPopUpOpen={props.editPopUpOpen}
      onHandleEditActionClick={props.onHandleEditActionClick}
      onHandleEditPopUpClose={props.onHandleEditPopUpClose}
      allocationTypeList={props.allocationTypeList}
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandleActionClick={props.onHandleActionClick}
      onHandleClose={props.onHandleClose}
      onHandleClose2={props.onHandleClose2}
      onHandleSearch={props.onHandleSearch}
      searchInput={props.searchInput}
      allocationValues={props.allocationValues}
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
          <EditAllocationTypeForm
            //  HandleEditAllocationChange={props.HandleEditAllocationChange}
            // onHandleNameChange={props.onHandleNameChange}
            onHandleDropDownChange={props.onHandleDropDownChange}
            AllocationSubTypeId={props.allocationValues.AllocationSubTypeId}
            AllocationId={props.allocationValues.AllocationId}
            allocationName={props.allocationValues.AllocationName}
            allocationNameValues={props.allocationNameValues}
            AllocationSubTypeName={props.allocationValues.AllocationSubTypeName}
            allocationValues={props.allocationValues}
            onHandleEditActionClick={props.onHandleEditActionClick}
            onHandleEditSave={props.onHandleEditSave}
            onHandleEditPopUpClose={props.onHandleEditPopUpClose}
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
          <DeActivateAllocationTypeForm
            AllocationSubTypeId={props.allocationValues.AllocationSubTypeId}
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
          <ActivateAllocationTypeForm
            AllocationSubTypeId={props.allocationValues.AllocationSubTypeId}
            onHandleActivateClick={props.onHandleActivateClick}
            onHandleActivatePopUpClose={props.onHandleActivePopUpClose}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default AllocationTypeMasterForm;
