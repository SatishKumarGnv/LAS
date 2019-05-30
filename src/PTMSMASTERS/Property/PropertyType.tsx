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
  IEditProValues,
  IProTypeMasterProps,
  IProTypeMasterValues
} from "src/DefaultLayout/HomePage";
import ActivatePropertyTypeForm from "./ActivateProperty";
import DeActivatePropertyTypeForm from "./DeActivateProperty";
import EditPropertyTypeForm from "./EditProperty";

export interface IProsTypeProps {
  readonly propTypeValues: IProTypeMasterValues;
  readonly editPopUpOpenPro: boolean;
  readonly activatePopUpOpenPro: boolean;
  readonly CategoryOwnershipDesc: string;

  // readonly expandApplicationId: string;
  readonly openPro: boolean;

  readonly open2Pro: boolean;
  readonly deActivatePopUpOpenPro: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClickPro(propTypeValues: IProTypeMasterValues): void;
  onHandleClosePro(): void;
  onHandleClose2Pro(): void;

  onHandleEditActionClickPro(propTypeValues: IProTypeMasterValues): void;
  onHandleEditPopUpClosePro(): void;
  onHandleEditSavePro(
    values: any
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  onHandleDeActivatePopUpClosePro(): void;
  onHandleDeActivatePopUpOpenPro(propTypeValues: any): void;
  onHandleDeActivateSavePro(event: any): void;
  onHandleActivateClickPro(event: any): void;
  onHandleActivatePopUpOpenPro(propTypeValues: any): void;
  onHandleActivePopUpClosepro(): void;
  onHandleDropDownChangePro(event: any): void;
  onHandleNameChangePro(event: any): void;
}

export interface IEditProProps {
  readonly CategoryOwnershipName: string;
  readonly CategoryOwnershipDesc: string;
  readonly propTypeValues: IProTypeMasterValues;
  handleCategoryOwnershipIdChange(event: any): void;
  onHandleDropDownChangePro(event: any): void;
  // onHandleNameChange(event: any): void;
  // HandleEditAllocationChange(event: any): void;
  onHandleEditSavePro(
    values: any
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  onHandleEditActionClickPro(event: any): void;
  onHandleEditPopUpClosePro(): void;
}

export interface IProsValues {
  readonly propTypeValues: IProTypeMasterValues;
}

export interface IDeActivateProProps {
  readonly PropertyTypeId: number;
  onHandleDeActivatePopUpClosePro(): void;
  onHandleDeActivateSavePro(event: any): void;
}
const getActivestatePro = (state: string) => {
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
  props: IProsTypeProps & IEditProValues & IDeActivateProProps
) => (
  <TableRow>
    <TableCell>{props.propTypeValues.CategoryOwnershipDesc}</TableCell>
    <TableCell>{props.propTypeValues.PropertyTypeName}</TableCell>
    <TableCell>
      {props.propTypeValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      {props.propTypeValues.IsActive.toString() === "true" ? (
        <div>
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleEditActionClickPro(props.propTypeValues)
            }
          >
            <img src="/images/edit1.png" />
          </Button>
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleDeActivatePopUpOpenPro(props.propTypeValues)
            }
          >
            <img src="/images/inactive1.png" />
          </Button>
        </div>
      ) : (
        <Button
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            props.onHandleActivatePopUpOpenPro(props.propTypeValues)
          }
        >
          <img src="/images/active1.png" />
        </Button>
      )}
    </TableCell>
  </TableRow>
);

const AllocationTypeMasterList = (
  props: IProTypeMasterProps &
    IPagerProps &
    IEditProValues &
    IDeActivateProProps &
    IProsValues
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="Property Type .xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" />
            Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.allocationTypeList.map((x: any) => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column
            label="Category Ownership Name"
            value="CategoryOwnershipDesc"
          />
          <Workbook.Column label="Property Type" value="PropertyTypeName" />
          <Workbook.Column label="Status" value={"IsActive"} />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Category Ownership Name</TableCell>
            <TableCell>Property Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allocationTypeList.length !== 0 ? (
            props.allocationTypeList
              .filter((x: any) =>
                props.searchInputPro !== ""
                  ? x.CategoryOwnershipDesc.toLowerCase().includes(
                      props.searchInputPro.toLowerCase()
                    ) ||
                    allocationNameIncludes(
                      props.searchInputPro,
                      x.PropertyTypeName
                    ) ||
                    x.IsActive.toString()
                      .toLowerCase()
                      .includes(
                        getActivestatePro(props.searchInputPro.toLowerCase())
                      )
                  : x
              )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <AllocationTypeMasterItems
                  PropertyTypeName={props.PropertyTypeName}
                  onHandleNameChangePro={props.onHandleNameChangePro}
                  onHandleDropDownChangePro={props.onHandleDropDownChangePro}
                  PropertyTypeId={props.PropertyTypeId}
                  onHandleClose2Pro={props.onHandleClose2Pro}
                  open2Pro={props.open2Pro}
                  allocationNameValues={props.allocationNameValues}
                  CategoryOwnershipDesc={props.CategoryOwnershipDesc}
                  activatePopUpOpenPro={props.activatePopUpOpenPro}
                  onHandleActivatePopUpOpenPro={
                    props.onHandleActivatePopUpOpenPro
                  }
                  onHandleActivePopUpClosepro={
                    props.onHandleActivatePopUpClosePro
                  }
                  key={id}
                  propTypeValues={value}
                  CategoryOwnershipId={props.CategoryOwnershipId}
                  allocationName={props.allocationName}
                  onHandleEditSavePro={props.onHandleEditSavePro}
                  openPro={props.openPro}
                  editPopUpOpenPro={props.editPopUpOpenPro}
                  deActivatePopUpOpenPro={props.deActivatePopUpOpenPro}
                  onHandleDeActivateSavePro={props.onHandleDeActivateSavePro}
                  onHandleDeActivatePopUpClosePro={
                    props.onHandleDeActivatePopUpClosePro
                  }
                  onHandleDeActivatePopUpOpenPro={
                    props.onHandleDeActivatePopUpOpenPro
                  }
                  onHandleActionClickPro={props.onHandleActionClickPro}
                  onHandleEditActionClickPro={props.onHandleEditActionClickPro}
                  onHandleEditPopUpClosePro={props.onHandleEditPopUpClosePro}
                  onHandleClosePro={props.onHandleClosePro}
                  onHandleActivateClickPro={props.onHandleActivateClickPro}
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
  searchInputPro: string,
  allocationName?: string
) => {
  if (allocationName) {
    return allocationName.toLowerCase().includes(searchInputPro.toLowerCase());
  } else {
    return "";
  }
};
const PropertiesTypeMasterForm = (
  props: IProTypeMasterProps &
    IPagerProps &
    IProsTypeProps &
    IEditProValues &
    IDeActivateProProps &
    IProsValues
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInputPro}
      onChange={props.onHandleSearchPro}
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
      handleCategoryOwnershipIdChange={props.handleCategoryOwnershipIdChange}
      CategoryOwnershipName={props.CategoryOwnershipName}
      count={props.countPro}
      CategoryOwnershipDesc={props.CategoryOwnershipDesc}
      onHandleActivatePopUpClosePro={props.onHandleActivatePopUpClosePro}
      onHandleActivePopUpClosePro={props.onHandleActivatePopUpClosePro}
      // HandleEditAllocationChange={props.HandleEditAllocationChange}
      onHandleNameChangePro={props.onHandleNameChangePro}
      onHandleDropDownChangePro={props.onHandleDropDownChangePro}
      PropertyTypeId={props.PropertyTypeId}
      open2Pro={props.open2Pro}
      allocationNameValues={props.allocationNameValues}
      PropertyTypeName={props.PropertyTypeName}
      activatePopUpOpenPro={props.activatePopUpOpenPro}
      onHandleActivatePopUpOpenPro={props.onHandleActivatePopUpOpenPro}
      //   onHandleActivePopUpClosepro={props.onHandleActivatePopUpClosepro}
      onHandleActivateClickPro={props.onHandleActivateClickPro}
      onHandleAddSavePro={props.onHandleAddSavePro}
      addPopUpOpenPro={props.addPopUpOpenPro}
      onHandleAddPopUpPro={props.onHandleAddPopUpPro}
      onHandleAddPopUpClosePro={props.onHandleAddPopUpClosePro}
      openPro={props.openPro}
      CategoryOwnershipId={props.CategoryOwnershipId}
      allocationName={props.allocationName}
      onHandleEditSavePro={props.onHandleEditSavePro}
      deActivatePopUpOpenPro={props.deActivatePopUpOpenPro}
      onHandleDeActivatePopUpClosePro={props.onHandleDeActivatePopUpClosePro}
      onHandleDeActivatePopUpOpenPro={props.onHandleDeActivatePopUpOpenPro}
      onHandleDeActivateSavePro={props.onHandleDeActivateSavePro}
      editPopUpOpenPro={props.editPopUpOpenPro}
      onHandleEditActionClickPro={props.onHandleEditActionClickPro}
      onHandleEditPopUpClosePro={props.onHandleEditPopUpClosePro}
      allocationTypeList={props.allocationTypeList}
      countPro={props.countPro}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandleActionClickPro={props.onHandleActionClickPro}
      onHandleClosePro={props.onHandleClosePro}
      onHandleClose2Pro={props.onHandleClose2Pro}
      onHandleSearchPro={props.onHandleSearchPro}
      searchInputPro={props.searchInputPro}
      propTypeValues={props.propTypeValues}
    />
    <Pager
      count={props.countPro}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />

    {
      <Dialog
        open={props.editPopUpOpenPro}
        onClose={props.onHandleEditPopUpClosePro}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <EditPropertyTypeForm
            handleCategoryOwnershipIdChange={
              props.handleCategoryOwnershipIdChange
            }
            CategoryOwnershipDesc={props.CategoryOwnershipDesc}
            CategoryOwnershipName={props.CategoryOwnershipName}
            //  HandleEditAllocationChange={props.HandleEditAllocationChange}
            // onHandleNameChange={props.onHandleNameChange}
            onHandleDropDownChangePro={props.onHandleDropDownChangePro}
            PropertyTypeId={props.propTypeValues.PropertyTypeId}
            CategoryOwnershipId={props.CategoryOwnershipId}
            allocationName={props.propTypeValues.CategoryOwnershipName}
            allocationNameValues={props.allocationNameValues}
            PropertyTypeName={props.propTypeValues.PropertyTypeName}
            propTypeValues={props.propTypeValues}
            onHandleEditActionClickPro={props.onHandleEditActionClickPro}
            onHandleEditSavePro={props.onHandleEditSavePro}
            onHandleEditPopUpClosePro={props.onHandleEditPopUpClosePro}
          />
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.deActivatePopUpOpenPro}
        onClose={props.onHandleDeActivatePopUpClosePro}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <DeActivatePropertyTypeForm
            PropertyTypeId={props.propTypeValues.PropertyTypeId}
            onHandleDeActivatePopUpClosePro={
              props.onHandleDeActivatePopUpClosePro
            }
            onHandleDeActivateSavePro={props.onHandleDeActivateSavePro}
          />
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.activatePopUpOpenPro}
        onClose={props.onHandleActivePopUpClosepro}
        aria-labelledby="simple-dialog-title"
      >
        <div id="Active-dialog-title">
          <ActivatePropertyTypeForm
            PropertyTypeId={props.propTypeValues.PropertyTypeId}
            onHandleActivateClickPro={props.onHandleActivateClickPro}
            onHandleActivatePopUpClosePro={props.onHandleActivePopUpClosepro}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default PropertiesTypeMasterForm;
