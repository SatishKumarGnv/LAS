import * as React from "react";

// import { ITablePaginationProps } from './StateMaintain';

import Pager, { IPagerProps } from "src/Masters/Pager";

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
  IAminitiesTypeMasterStateProps,
  IAminitiesTypeStateValues,
  IEditAminitiesValues
} from "src/DefaultLayout/HomePage";
import ActivateAminityTypeForm from "./ActivateAminities";
import DeActivateAminityTypeForm from "./DeactivateAminities";
import EditAminityTypeForm from "./EditAminities";

export interface IAminitiesFormTypeProps {
  readonly aminityValues: IAminitiesTypeStateValues;
  readonly editPopUpOpenAminity: boolean;
  readonly activatePopUpOpenAminity: boolean;

  readonly dropDownOpen: any;
  readonly dropDownOpen2: any;
  // readonly expandApplicationId: string;
  readonly openAminity: boolean;
  readonly open2Aminity: boolean;
  readonly deActivatePopUpOpenAminity: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClickAminity(aminityValues: IAminitiesTypeStateValues): void;
  onHandleCloseAminity(): void;
  onHandleClose2Aminity(): void;

  onHandleEditActionClickAminity(
    aminityValues: IAminitiesTypeStateValues
  ): void;
  onHandleEditPopUpCloseAminity(): void;
  onHandleEditSaveAminity(values: any): void;
  onHandleDeActivatePopUpCloseAminity(): void;
  onHandleDeActivatePopUpOpenAminity(aminityValues: any): void;
  onHandleDeActivateSaveAminity(event: any): void;
  onHandleActivateClickAminity(event: any): void;
  onHandleActivatePopUpAminity(aminityValues: any): void;
  onHandleActivePopUpCloseAminity(): void;
}

export interface IEditAminityProps {
  readonly aminityValues: IAminitiesTypeStateValues;
  onHandleEditSaveAminity(values: any): void;
  onHandleEditActionClickAminity(event: any): void;
  onHandleEditPopUpCloseAminity(): void;
}

export interface IDeActivateAminityProps {
  readonly AmenitiesId: number;
  onHandleDeActivatePopUpCloseAminity(): void;
  onHandleDeActivateSaveAminity(event: any): void;
}

const DocumentTypeMasterItems = (
  props: IAminitiesFormTypeProps &
    IEditAminitiesValues &
    IDeActivateAminityProps
) => (
  <TableRow>
    <TableCell>{props.aminityValues.AmenitiesName}</TableCell>
    <TableCell>
      {props.aminityValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      <div>
        {props.aminityValues.IsActive.toString() === "true" ? (
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleEditActionClickAminity(props.aminityValues)
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpenAminity(props.aminityValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        ) : (
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleActivatePopUpAminity(props.aminityValues)
            }
          >
            <img src="/images/active1.png" />
          </Button>
        )}
      </div>
    </TableCell>
  </TableRow>
);
export const getActivestate = (state: string) => {
  switch (state) {
    case "Active".toLowerCase():
      return "true";
    case "InActive".toLowerCase():
      return "false";
    default:
      return state;
  }
};
const AminityTypeMasterList = (
  props: IAminitiesTypeMasterStateProps &
    IAminitiesFormTypeProps &
    IPagerProps &
    IEditAminitiesValues &
    IDeActivateAminityProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="Aminities.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" /> Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.documentTypeMasterList.map((x: any) => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column label="Amenities Name" value="AmenitiesName" />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Amenities Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.documentTypeMasterList.length !== 0 ? (
            props.documentTypeMasterList
              .filter((x: any) =>
                props.searchInputAminity !== ""
                  ? documentNameIncludesAmininty(
                      props.searchInputAminity,
                      x.AmenitiesName
                    ) ||
                    x.IsActive.toString()
                      .toLowerCase()
                      .includes(
                        getActivestate(props.searchInputAminity.toLowerCase())
                      )
                  : x
              )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <DocumentTypeMasterItems
                  onHandleClose2Aminity={props.onHandleClose2Aminity}
                  activatePopUpOpenAminity={props.activatePopUpOpenAminity}
                  onHandleActivatePopUpAminity={
                    props.onHandleActivatePopUpAminity
                  }
                  onHandleActivePopUpCloseAminity={
                    props.onHandleActivePopUpCloseAminity
                  }
                  key={id}
                  aminityValues={value}
                  dropDownOpen={props.dropDownOpen}
                  dropDownOpen2={props.dropDownOpen2}
                  AmenitiesId={props.AmenitiesId}
                  AmenitiesName={props.AmenitiesName}
                  // onHandleEditNameChange={props.onHandleEditNameChange}
                  onHandleEditSaveAminity={props.onHandleEditSaveAminity}
                  openAminity={props.openAminity}
                  open2Aminity={props.open2Aminity}
                  editPopUpOpenAminity={props.editPopUpOpenAminity}
                  deActivatePopUpOpenAminity={props.deActivatePopUpOpenAminity}
                  onHandleDeActivateSaveAminity={
                    props.onHandleDeActivateSaveAminity
                  }
                  onHandleDeActivatePopUpCloseAminity={
                    props.onHandleDeActivatePopUpCloseAminity
                  }
                  onHandleDeActivatePopUpOpenAminity={
                    props.onHandleDeActivatePopUpOpenAminity
                  }
                  onHandleActionClickAminity={props.onHandleActionClickAminity}
                  onHandleEditActionClickAminity={
                    props.onHandleEditActionClickAminity
                  }
                  onHandleEditPopUpCloseAminity={
                    props.onHandleEditPopUpCloseAminity
                  }
                  onHandleCloseAminity={props.onHandleCloseAminity}
                  onHandleActivateClickAminity={
                    props.onHandleActivateClickAminity
                  }
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
const documentNameIncludesAmininty = (
  searchInputAminity: string,
  documentName?: string
) => {
  if (documentName) {
    return documentName
      .toLowerCase()
      .includes(searchInputAminity.toLowerCase());
  } else {
    return false;
  }
};

const AminityTypeMasterForm = (
  props: IAminitiesTypeMasterStateProps &
    IAminitiesFormTypeProps &
    IPagerProps &
    IEditAminitiesValues &
    IDeActivateAminityProps &
    any
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="searchInputAminity"
      placeholder="Search field"
      type="search"
      value={props.searchInputAminity}
      margin="normal"
      onChange={props.onHandleSearchAminity}
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
        <AminityTypeMasterList
          ClickOpen={props.ClickOpen}
          onHandleClose2Aminity={props.onHandleClose2Aminity}
          activatePopUpOpenAminity={props.activatePopUpOpenAminity}
          onHandleActivatePopUpAminity={props.onHandleActivatePopUpAminity}
          onHandleActivePopUpCloseAminity={
            props.onHandleActivePopUpCloseAminity
          }
          onHandleActivateClickAminity={props.onHandleActivateClickAminity}
          onHandleAddSaveAminity={props.onHandleAddSaveAminity}
          addPopUpOpenAminity={props.addPopUpOpenAminity}
          onHandleAddPopUpAminity={props.onHandleAddPopUpAminity}
          onHandleAddPopUpCloseAminity={props.onHandleAddPopUpCloseAminity}
          openAminity={props.openAminity}
          open2Aminity={props.open2Aminity}
          dropDownOpen2={props.dropDownOpen2}
          AmenitiesId={props.AmenitiesId}
          AmenitiesName={props.AmenitiesName}
          // onHandleEditNameChange={props.onHandleEditNameChange}
          onHandleEditSaveAminity={props.onHandleEditSaveAminity}
          deActivatePopUpOpenAminity={props.deActivatePopUpOpenAminity}
          onHandleDeActivatePopUpCloseAminity={
            props.onHandleDeActivatePopUpCloseAminity
          }
          onHandleDeActivatePopUpOpenAminity={
            props.onHandleDeActivatePopUpOpenAminity
          }
          onHandleDeActivateSaveAminity={props.onHandleDeActivateSaveAminity}
          editPopUpOpenAminity={props.editPopUpOpenAminity}
          onHandleEditActionClickAminity={props.onHandleEditActionClickAminity}
          onHandleEditPopUpCloseAminity={props.onHandleEditPopUpCloseAminity}
          dropDownOpen={props.dropDownOpen}
          documentTypeMasterList={props.documentTypeMasterList}
          count={props.countAminity}
          page={props.pageAminity}
          rowsPerPage={props.rowsPerPageAminity}
          onHandlePageChange={props.onHandlePageChange}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandleActionClickAminity={props.onHandleActionClickAminity}
          onHandleCloseAminity={props.onHandleCloseAminity}
          //  emptyRows={props.emptyRows}
          onHandleSearchAminity={props.onHandleSearchAminity}
          searchInputAminity={props.searchInputAminity}
          aminityValues={props.aminityValues}
        />
        <Pager
          count={props.countAminity}
          page={props.pageAminity}
          rowsPerPage={props.rowsPerPageAminity}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
        />

        {
          <Dialog
            open={props.editPopUpOpenAminity}
            // onClose={props.onHandleEditPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <EditAminityTypeForm
                AmenitiesId={props.aminityValues.AmenitiesId}
                AmenitiesName={props.aminityValues.AmenitiesName}
                aminityValues={props.aminityValues}
                onHandleEditActionClickAminity={
                  props.onHandleEditActionClickAminity
                }
                onHandleEditSaveAminity={props.onHandleEditSaveAminity}
                onHandleEditPopUpCloseAminity={
                  props.onHandleEditPopUpCloseAminity
                }
                // onHandleEditNameChange={props.onHandleEditNameChange}
              />
            </div>
          </Dialog>
        }

        {
          <Dialog
            open={props.deActivatePopUpOpenAminity}
            // onClose={props.onHandleDeActivatePopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <DeActivateAminityTypeForm
                AmenitiesId={props.aminityValues.AmenitiesId}
                onHandleDeActivatePopUpCloseAminity={
                  props.onHandleDeActivatePopUpCloseAminity
                }
                onHandleDeActivateSaveAminity={
                  props.onHandleDeActivateSaveAminity
                }
              />
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={props.activatePopUpOpenAminity}
            onClose={props.onHandleActivePopUpCloseAminity}
            aria-labelledby="Active-dialog-title"
          >
            <div id="Active-dialog-title">
              <ActivateAminityTypeForm
                id={props.aminityValues.AmenitiesId}
                onHandleActivateClickAminity={
                  props.onHandleActivateClickAminity
                }
                onHandleActivePopUpCloseAminity={
                  props.onHandleActivePopUpCloseAminity
                }
              />
            </div>
          </Dialog>
        }
      </div>
    )}
  </div>
);

export default AminityTypeMasterForm;
