import * as React from "react";

// import { ITablePaginationProps } from './StateMaintain';

import Pager, { IPagerProps } from "../Pager";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Workbook from "react-excel-workbook";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";

import { IconButton } from "@material-ui/core";
// import Popover from "@material-ui/core/Popover";
import TableRow from "@material-ui/core/TableRow";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

import {
  IAgreementTypeAllocationDetails,
  IAgreementTypeMasterProps,
  IAgreementTypeMasterValues,
  IEditAgreementValues
} from "../../Container/AgreementTypeMasterState";
import ActivateAgreementTypeForm from "../AgreementTypeMaster/ActivateAgreementType";
import DeActivateAgreementTypeForm from "../AgreementTypeMaster/DeActivateAgreement";
import EditAgreementTypeForm from "../AgreementTypeMaster/EditAgreementType";
// import ActivateDocumentTypeForm from "./ActivateDocumentTypeForm";
// import DeActivateDocumentTypeForm from "./DeActivateDocumentForm";
// import EditDocumentTypeForm from "./EditDocumentTypeForm";

export interface IAllocationTypeProps {
  readonly agreementValues: IAgreementTypeMasterValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  // readonly expandApplicationId: string;
  readonly open: boolean;

  readonly open2: boolean;
  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(agreementValues: IAgreementTypeMasterValues): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(agreementValues: IAgreementTypeMasterValues): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(
    values: IEditAgreementProps & IEditAgreementValues
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(agreementValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUpOpen(agreementValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleDropDownChange(event: any): void;
  onHandleNameChange(event: any): void;
}

export interface IEditAgreementProps {
  readonly EditAgreementValues: ReadonlyArray<IAgreementTypeMasterValues>;
  onHandleDropDownChange(event: any): void;
  // onHandleNameChange(event: any): void;
  handleEditAllocationChange(event: any): void;
  handleLandAllocationClick(event: any): void;
  onHandleEditSave(
    values: IEditAgreementProps & IEditAgreementValues
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IAllocationValues {
  readonly agreementValues: IAgreementTypeMasterValues;
}

export interface IDeActivateAgreementProps {
  readonly AgreementId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const AllocationTypeMasterItems = (
  props: IAllocationTypeProps & IEditAgreementValues & IDeActivateAgreementProps
) => (
  <TableRow>
    <TableCell>{props.agreementValues.AllocateToName}</TableCell>
    <TableCell>{props.agreementValues.AllocationTypeName}</TableCell>
    <TableCell>{props.agreementValues.AgreementName}</TableCell>
    <TableCell>
      {props.agreementValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      {props.agreementValues.IsActive.toString() === "true" ? (
        <div>
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleEditActionClick(props.agreementValues)
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpen(props.agreementValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => props.onHandleActivatePopUpOpen(props.agreementValues)}
        >
          <img src="/images/active1.png" />
        </Button>
      )}
    </TableCell>
  </TableRow>
);

const AllocationTypeMasterList = (
  props: IAgreementTypeMasterProps &
    IPagerProps &
    IEditAgreementValues &
    IDeActivateAgreementProps &
    IAllocationValues
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="AgreementTypeMaster.xlsx"
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
          <Workbook.Column label="Allocation Type" value="AllocateToName" />
          <Workbook.Column
            label="Allocation SubType"
            value="AllocationTypeName"
          />
          <Workbook.Column label="Agreement Type" value="AgreementName" />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Allocation Type</TableCell>
            <TableCell>Allocation SubType</TableCell>
            <TableCell>Agreement Type</TableCell>
            <TableCell>Status</TableCell>

            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allocationTypeList.length !== 0 ? (
            props.allocationTypeList
              .filter(x =>
                props.searchInput !== ""
                  ? allocationIncludes(props.searchInput, x.AllocateToName) ||
                    allocationTypeIncludes(
                      props.searchInput,
                      x.AllocationTypeName
                    ) ||
                    agreementIncludes(props.searchInput, x.AgreementName) ||
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
                  EditAgreementValues={props.EditAgreementValues}
                  //  AllocationTypeName={props.AllocationTypeName}
                  AgreementName={props.AgreementName}
                  AllocationTypeId={props.AllocationTypeId}
                  onHandleNameChange={props.onHandleNameChange}
                  onHandleDropDownChange={props.onHandleDropDownChange}
                  AllocationSubTypeId={props.AllocationSubTypeId}
                  onHandleClose2={props.onHandleClose2}
                  open2={props.open2}
                  allocationNameValues={props.allocationNameValues}
                  activatePopUpOpen={props.activatePopUpOpen}
                  onHandleActivatePopUpOpen={props.onHandleActivatePopUpOpen}
                  onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                  key={id}
                  agreementValues={value}
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
                  AgreementId={props.AgreementId}
                  allocationTypeValues={props.allocationTypeValues}
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
const allocationIncludes = (searchInput: string, allocationName?: string) => {
  if (allocationName) {
    return allocationName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};
const agreementIncludes = (searchInput: string, agreementName?: string) => {
  if (agreementName) {
    return agreementName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};
const allocationTypeIncludes = (
  searchInput: string,
  allocationTypeName?: string
) => {
  if (allocationTypeName) {
    return allocationTypeName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};

const AgreementTypeMasterForm = (
  props: IAgreementTypeMasterProps &
    IPagerProps &
    IAllocationTypeProps &
    IEditAgreementValues &
    IDeActivateAgreementProps &
    IAllocationValues &
    IAgreementTypeAllocationDetails &
    IAgreementTypeMasterValues
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
      EditAgreementValues={props.EditAgreementValues}
      AllocationTypeId={props.AllocationTypeId}
      // AllocationTypeName={props.AllocationTypeName}
      AgreementName={props.AgreementName}
      handleEditAllocationChange={props.handleEditAllocationChange}
      onHandleNameChange={props.onHandleNameChange}
      onHandleDropDownChange={props.onHandleDropDownChange}
      AllocationSubTypeId={props.AllocationSubTypeId}
      open2={props.open2}
      allocationNameValues={props.allocationNameValues}
      activatePopUpOpen={props.activatePopUpOpen}
      onHandleActivatePopUpOpen={props.onHandleActivatePopUpOpen}
      onHandleActivePopUpClose={props.onHandleActivePopUpClose}
      onHandleActivateClick={props.onHandleActivateClick}
      onHandleAddSave={props.onHandleAddSave}
      addPopUpOpen={props.addPopUpOpen}
      onHandleAddPopUp={props.onHandleAddPopUp}
      onHandleAddPopUpClose={props.onHandleAddPopUpClose}
      open={props.open}
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
      agreementValues={props.agreementValues}
      AgreementId={props.AgreementId}
      allocationTypeValues={props.allocationTypeValues}
      handleLandAllocationClick={props.handleLandAllocationClick}
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
          <EditAgreementTypeForm
            handleEditAllocationChange={props.handleEditAllocationChange}
            AllocationTypeId={props.AllocationTypeId}
            AgreementName={props.AgreementName}
            handleLandAllocationClick={props.handleLandAllocationClick}
            //  onHandleNameChange={props.onHandleNameChange}
            onHandleDropDownChange={props.onHandleDropDownChange}
            AllocationSubTypeId={props.AllocationSubTypeId}
            allocationNameValues={props.allocationNameValues}
            EditAgreementValues={props.EditAgreementValues}
            onHandleEditActionClick={props.onHandleEditActionClick}
            onHandleEditSave={props.onHandleEditSave}
            onHandleEditPopUpClose={props.onHandleEditPopUpClose}
            allocationTypeValues={props.allocationTypeValues}
            AgreementId={props.AgreementId}
            // handleLandAllocationClick={props.handleLandAllocationClick}
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
          <DeActivateAgreementTypeForm
            AgreementId={props.agreementValues.AgreementId}
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
          <ActivateAgreementTypeForm
            AgreementId={props.agreementValues.AgreementId}
            onHandleActivateClick={props.onHandleActivateClick}
            onHandleActivatePopUpClose={props.onHandleActivePopUpClose}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default AgreementTypeMasterForm;
