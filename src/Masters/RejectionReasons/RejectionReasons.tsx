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
import {
  IEditRejectionProps,
  IEditRejectionValues,
  IRejectionTypeMasterProps,
  IRejectionTypeMasterValues
} from "../../Container/RejectionReasonsState";

import Workbook from "react-excel-workbook";
import ActivateRejectionTypeForm from "./ActivateRejectionReasons";
import DeActivateRejectionTypeForm from "./DeActivateRejectionReasons";
import EditRejectionReasonForm from "./EditRejectionReasons";

export interface IAllocationTypeProps {
  readonly rejectionValues: IRejectionTypeMasterValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  // readonly expandApplicationId: string;
  readonly open: boolean;

  readonly open2: boolean;
  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(rejectionValues: IRejectionTypeMasterValues): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(rejectionValues: IRejectionTypeMasterValues): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(
    values: IEditRejectionValues & IEditRejectionProps
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(rejectionValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUpOpen(rejectionValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleNameChange(event: any): void;
}

export interface IAllocationValues {
  readonly rejectionValues: IRejectionTypeMasterValues;
}

export interface IDeActivateAllocationProps {
  readonly AllocationId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const AllocationTypeMasterItems = (
  props: IAllocationTypeProps &
    IEditRejectionValues &
    IDeActivateAllocationProps
) => (
  <TableRow>
    <TableCell>{props.rejectionValues.AllocateToName}</TableCell>
    <TableCell>{props.rejectionValues.AllocationTypeName}</TableCell>
    <TableCell>{props.rejectionValues.Agreementname}</TableCell>
    <TableCell>{props.rejectionValues.RejectionType}</TableCell>

    <TableCell>
      {props.rejectionValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      {props.rejectionValues.IsActive.toString() === "true" ? (
        <div>
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleEditActionClick(props.rejectionValues)
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpen(props.rejectionValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        </div>
      ) : (
        <div id="simple-dialog-title">
          <div className="popup-title">
            {/* tslint:disable-next-line:jsx-no-lambda */}
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleActivatePopUpOpen(props.rejectionValues)
              }
            >
              <img src="/images/active1.png" />
            </Button>
          </div>
        </div>
      )}
    </TableCell>
  </TableRow>
);

const AllocationTypeMasterList = (
  props: IRejectionTypeMasterProps &
    IPagerProps &
    IEditRejectionValues &
    IDeActivateAllocationProps &
    IAllocationValues
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="Rejection Reasons.xlsx"
          element={
            <button>
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.allocationTypeList} name="Sheet A">
            <Workbook.Column label="Allocation Type" value="AllocateToName" />
            <Workbook.Column
              label="Allocation Sub Type"
              value="AllocationTypeName"
            />
            <Workbook.Column label="Agreement Type" value="Agreementname" />
            <Workbook.Column label="Rejection Reasons" value="RejectionType" />
            <Workbook.Column label="Status" value="IsActive" />
          </Workbook.Sheet>
        </Workbook>
      </div>

      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Allocation Type</TableCell>
              <TableCell>Allocation Sub Type</TableCell>
              <TableCell>Agreement Type</TableCell>
              <TableCell>Rejection Reasons</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.allocationTypeList.length !== 0 ? (
              props.allocationTypeList
                .filter(x =>
                  props.searchInput !== ""
                    ? x.AllocateToName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.AllocationTypeName.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      x.Agreementname.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                      rejectionNameIncludes(
                        props.searchInput,
                        x.RejectionType
                      ) ||
                      x.IsActive.toString()
                        .toLowerCase()
                        .includes(
                          getActivestate(props.searchInput.toLowerCase())
                        )
                    : x
                )
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
                .map((value, id) => (
                  <AllocationTypeMasterItems
                    RejectionId={props.rejectionValues.RejectionId}
                    onHandleNameChange={props.onHandleNameChange}
                    AllocationSubTypeId={props.AllocationSubTypeId}
                    onHandleClose2={props.onHandleClose2}
                    open2={props.open2}
                    activatePopUpOpen={props.activatePopUpOpen}
                    onHandleActivatePopUpOpen={props.onHandleActivatePopUpOpen}
                    onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                    key={id}
                    rejectionValues={value}
                    AllocationId={props.AllocationId}
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
                    RejectionType={props.RejectionType}
                    AgreementId={props.AgreementId}
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
};
const rejectionNameIncludes = (searchInput: string, rejectionName?: string) => {
  if (rejectionName) {
    return rejectionName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};
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
const RejectionTypeMasterForm = (
  props: IRejectionTypeMasterProps &
    IPagerProps &
    IAllocationTypeProps &
    IEditRejectionValues &
    IEditRejectionProps &
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
      RejectionId={props.rejectionValues.RejectionId}
      rejectionValues={props.rejectionValues}
      onHandleNameChange={props.onHandleNameChange}
      AllocationSubTypeId={props.AllocationSubTypeId}
      open2={props.open2}
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
      RejectionType={props.RejectionType}
      AgreementId={props.AgreementId}
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
        open={props.open}
        // onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title" className="popup-title">
          <Button
            className="main-btn"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => props.onHandleEditActionClick(props.rejectionValues)}
          >
            Edit
          </Button>
          <Button
            className="main-btn"
            onClick={props.onHandleDeActivatePopUpOpen}
          >
            DeActivate
          </Button>
          <Button className="main-btn" onClick={props.onHandleClose}>
            Cancel
          </Button>
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.open2}
        // onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title" className="popup-title">
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button
            className="main-btn"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleActivatePopUpOpen(props.rejectionValues)
            }
          >
            Activate
          </Button>
          <Button className="main-btn" onClick={props.onHandleClose2}>
            Cancel
          </Button>
        </div>
      </Dialog>
    }

    {
      <Dialog
        open={props.editPopUpOpen}
        // onClose={props.onHandleEditPopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <EditRejectionReasonForm
            RejectionId={props.rejectionValues.RejectionId}
            agreementValues={props.agreementValues}
            handleAllocationSubtTypeChange={
              props.handleAllocationSubtTypeChange
            }
            handleAllocationTypeChange={props.handleAllocationTypeChange}
            allocationSubTypeValues={props.allocationSubTypeValues}
            allocationNameValues={props.allocationNameValues}
            rejectionValues={props.rejectionValues}
            onHandleEditSave={props.onHandleEditSave}
            onHandleEditPopUpClose={props.onHandleEditPopUpClose}
            AllocationId={props.AllocationId}
            AllocationSubTypeId={props.AllocationSubTypeId}
            RejectionType={props.rejectionValues.RejectionType}
            AgreementId={props.AgreementId}
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
          <DeActivateRejectionTypeForm
            AllocationId={props.rejectionValues.RejectionId}
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
          <ActivateRejectionTypeForm
            AllocationId={props.rejectionValues.RejectionId}
            onHandleActivateClick={props.onHandleActivateClick}
            onHandleActivatePopUpClose={props.onHandleActivePopUpClose}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default RejectionTypeMasterForm;
