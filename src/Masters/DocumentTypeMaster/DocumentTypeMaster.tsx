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
  IDocumentMasterTypeStateValues,
  IDocumentTypeMasterStateProps,
  IEditDocumentValues
} from "../../Container/MasterState";
import ActivateDocumentTypeForm from "./ActivateDocumentTypeForm";
import DeActivateDocumentTypeForm from "./DeActivateDocumentForm";
import EditDocumentTypeForm from "./EditDocumentTypeForm";
export interface IDocumentTypeProps {
  readonly documentValues: IDocumentMasterTypeStateValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  readonly dropDownOpen: any;
  readonly dropDownOpen2: any;
  // readonly expandApplicationId: string;
  readonly open: boolean;
  readonly open2: boolean;
  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(documentValues: IDocumentMasterTypeStateValues): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(documentValues: IDocumentMasterTypeStateValues): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(values: any): void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(documentValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUp(documentValues: any): void;
  onHandleActivePopUpClose(): void;
}

export interface IEditDocumentProps {
  readonly documentValues: IDocumentMasterTypeStateValues;
  onHandleEditSave(values: any): void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IDeActivateDocumentProps {
  readonly DocumentId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const DocumentTypeMasterItems = (
  props: IDocumentTypeProps & IEditDocumentValues & IDeActivateDocumentProps
) => (
  <TableRow>
    <TableCell>{props.documentValues.DocumentName}</TableCell>
    <TableCell>
      {props.documentValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      <div>
        {props.documentValues.IsActive.toString() === "true" ? (
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleEditActionClick(props.documentValues)
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpen(props.documentValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        ) : (
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => props.onHandleActivatePopUp(props.documentValues)}
          >
            <img src="/images/active1.png" />
          </Button>
        )}
      </div>
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
const DocumentTypeMasterList = (
  props: IDocumentTypeMasterStateProps &
    IDocumentTypeProps &
    IPagerProps &
    IEditDocumentValues &
    IDeActivateDocumentProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="DocumentTypeMaster.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" /> Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.documentTypeMasterList.map(x => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column label="Document Name" value="DocumentName" />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Document Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.documentTypeMasterList.length !== 0 ? (
            props.documentTypeMasterList
              .filter(x =>
                props.searchInput !== ""
                  ? documentNameIncludes(props.searchInput, x.DocumentName) ||
                    x.IsActive.toString().includes(
                      getActivestate(props.searchInput.toLowerCase())
                    )
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
                  documentValues={value}
                  dropDownOpen={props.dropDownOpen}
                  dropDownOpen2={props.dropDownOpen2}
                  DocumentId={props.DocumentId}
                  DocumentName={props.DocumentName}
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
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);
const documentNameIncludes = (searchInput: string, documentName?: string) => {
  if (documentName) {
    return documentName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};

const DocumentTypeMasterForm = (
  props: IDocumentTypeMasterStateProps &
    IDocumentTypeProps &
    IPagerProps &
    IEditDocumentValues &
    IDeActivateDocumentProps &
    any
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

    {props.documentTypeMasterList.length === 0 ? (
      <div />
    ) : (
      <div>
        <DocumentTypeMasterList
          ClickOpen={props.ClickOpen}
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
          dropDownOpen2={props.dropDownOpen2}
          DocumentId={props.DocumentId}
          DocumentName={props.DocumentName}
          // onHandleEditNameChange={props.onHandleEditNameChange}
          onHandleEditSave={props.onHandleEditSave}
          deActivatePopUpOpen={props.deActivatePopUpOpen}
          onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
          onHandleDeActivatePopUpOpen={props.onHandleDeActivatePopUpOpen}
          onHandleDeActivateSave={props.onHandleDeActivateSave}
          editPopUpOpen={props.editPopUpOpen}
          onHandleEditActionClick={props.onHandleEditActionClick}
          onHandleEditPopUpClose={props.onHandleEditPopUpClose}
          dropDownOpen={props.dropDownOpen}
          documentTypeMasterList={props.documentTypeMasterList}
          count={props.count}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandleActionClick={props.onHandleActionClick}
          onHandleClose={props.onHandleClose}
          //  emptyRows={props.emptyRows}
          onHandleSearch={props.onHandleSearch}
          searchInput={props.searchInput}
          documentValues={props.documentValues}
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
              <EditDocumentTypeForm
                DocumentId={props.documentValues.DocumentId}
                DocumentName={props.documentValues.DocumentName}
                documentValues={props.documentValues}
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
              <DeActivateDocumentTypeForm
                DocumentId={props.documentValues.DocumentId}
                onHandleDeActivatePopUpClose={
                  props.onHandleDeActivatePopUpClose
                }
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
              <ActivateDocumentTypeForm
                id={props.documentValues.DocumentId}
                onHandleActivateClick={props.onHandleActivateClick}
                onHandleActivePopUpClose={props.onHandleActivePopUpClose}
              />
            </div>
          </Dialog>
        }
      </div>
    )}
  </div>
);

export default DocumentTypeMasterForm;
