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

import { IconButton } from "@material-ui/core";
// import Popover from "@material-ui/core/Popover";
import TableRow from "@material-ui/core/TableRow";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

import ActivateRoleTypeForm from "./ActivateRoleTypeMaster";

import DeActivateRoleTypeForm from "./DeActivateRoleTypeMaster";

import {
  IEditRoleProps,
  IEditRoleValues,
  IRoleMasterTypeStateValues,
  IRoleTypeMasterStateProps
} from "src/DefaultLayout/HomePage";
import EditRoleTypeForm from "./EditRoleTypeMaster";

export interface IRoleTypeProps {
  readonly roleValues: IRoleMasterTypeStateValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpenRole: boolean;

  readonly dropDownOpen: any;
  readonly dropDownOpen2: any;
  // readonly expandApplicationId: string;
  readonly openRole: boolean;
  readonly openRole2: boolean;
  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(roleValues: any): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(roleValues: IRoleMasterTypeStateValues): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(values: IEditRoleValues & IEditRoleProps): void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(roleValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUp(roleValues: any): void;
  onHandleActivePopUpClose(): void;
}

export interface IEditDocumentProps {
  readonly roleValues: IRoleMasterTypeStateValues;
  onHandleEditSave(values: IEditRoleValues & IEditRoleProps): void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IDeActivateRoleProps {
  readonly RoleId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const DocumentTypeMasterItems = (
  props: IRoleTypeProps & IEditRoleValues & IDeActivateRoleProps
) => (
  <TableRow>
    <TableCell>{props.roleValues.RoleName}</TableCell>
    <TableCell>
      {props.roleValues.IsActive.toString() === "true" ? "Active" : "InActive"}
    </TableCell>
    <TableCell>
      {props.roleValues.IsActive.toString() === "true" ? (
        <div>
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => props.onHandleEditActionClick(props.roleValues)}
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpen(props.roleValues)
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
              onClick={() => props.onHandleActivatePopUp(props.roleValues)}
            >
              <img src="/images/active1.png" />
            </Button>
          </div>
        </div>
      )}
    </TableCell>
  </TableRow>
);

const DocumentTypeMasterList = (
  props: IRoleTypeMasterStateProps &
    IRoleTypeProps &
    IPagerProps & { emptyRows: number } & IEditRoleProps &
    IDeActivateRoleProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="RoleTypeMaster.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" />
            Export
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
          <Workbook.Column label="Role Name" value="RoleName" />

          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.documentTypeMasterList.length !== 0 ? (
            props.documentTypeMasterList
              .filter(x =>
                props.searchInputRole !== ""
                  ? roleNameIncludes(props.searchInputRole, x.RoleName) ||
                    x.IsActive.toString()
                      .toLowerCase()
                      .includes(
                        getActivestate(props.searchInputRole.toLowerCase())
                      )
                  : x
              )
              .slice(
                props.pageRole * props.rowsPerPageRole,
                props.pageRole * props.rowsPerPageRole + props.rowsPerPageRole
              )
              .map((value, id) => (
                <DocumentTypeMasterItems
                  onHandleClose2={props.onHandleClose2}
                  activatePopUpOpenRole={props.activatePopUpOpenRole}
                  onHandleActivatePopUp={props.onHandleActivatePopUp}
                  onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                  key={id}
                  roleValues={value}
                  dropDownOpen={props.dropDownOpen}
                  dropDownOpen2={props.dropDownOpen2}
                  RoleId={props.roleValues.RoleId}
                  RoleName={props.roleValues.RoleName}
                  //   onHandleEditNameChange={props.onHandleEditNameChange}
                  onHandleEditSave={props.onHandleEditSave}
                  openRole={props.openRole}
                  openRole2={props.openRole2}
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
const roleNameIncludes = (searchInputRole: string, roleName?: string) => {
  if (roleName) {
    return roleName.toLowerCase().includes(searchInputRole.toLowerCase());
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
const RoleTypeMasterForm = (
  props: IRoleTypeMasterStateProps &
    IRoleTypeProps &
    IPagerProps & { emptyRows: number } & IEditRoleProps &
    IEditRoleValues &
    IDeActivateRoleProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="searchInputRole"
      placeholder="Search field"
      type="search"
      value={props.searchInputRole}
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
          handleEditRuleNameChange={props.handleEditRuleNameChange}
          RoleId={props.roleValues.RoleId}
          ProjectType={props.ProjectType}
          ProjectTypeValues={props.ProjectTypeValues}
          onhandleProjectTypeChange={props.onhandleProjectTypeChange}
          id={props.id}
          countRole={props.countRole}
          ClickOpen={props.ClickOpen}
          onHandleSearchRole={props.onHandleSearchRole}
          onHandleClose2={props.onHandleClose2}
          activatePopUpOpenRole={props.activatePopUpOpenRole}
          onHandleActivatePopUp={props.onHandleActivatePopUp}
          onHandleActivePopUpClose={props.onHandleActivePopUpClose}
          onHandleActivateClick={props.onHandleActivateClick}
          onHandleAddSave={props.onHandleAddSave}
          addPopUpOpenRole={props.addPopUpOpenRole}
          onHandleAddPopUp={props.onHandleAddPopUp}
          onHandleAddPopUpClose={props.onHandleAddPopUpClose}
          openRole={props.openRole}
          openRole2={props.openRole2}
          dropDownOpen2={props.dropDownOpen2}
          // RoleId={props.id}
          // RoleName={props.RoleName}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
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
          count={props.countRole}
          pageRole={props.pageRole}
          rowsPerPageRole={props.rowsPerPageRole}
          onHandlePageChange={props.onHandlePageChange}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandleActionClick={props.onHandleActionClick}
          onHandleClose={props.onHandleClose}
          emptyRows={props.emptyRows}
          onHandleSearch={props.onHandleSearch}
          searchInputRole={props.searchInputRole}
          roleValues={props.roleValues}
        />
        <Pager
          count={props.countRole}
          page={props.pageRole}
          rowsPerPage={props.rowsPerPageRole}
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
              <EditRoleTypeForm
                handleEditRuleNameChange={props.handleEditRuleNameChange}
                ProjectType={props.ProjectType}
                ProjectTypeValues={props.ProjectTypeValues}
                onhandleProjectTypeChange={props.onhandleProjectTypeChange}
                RoleId={props.roleValues.RoleId}
                RoleName={props.RoleName}
                roleValues={props.roleValues}
                onHandleEditSave={props.onHandleEditSave}
                onHandleEditPopUpClose={props.onHandleEditPopUpClose}
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
              <DeActivateRoleTypeForm
                RoleId={props.roleValues.RoleId}
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
            open={props.activatePopUpOpenRole}
            onClose={props.onHandleActivePopUpClose}
            aria-labelledby="Active-dialog-title"
          >
            <div id="Active-dialog-title">
              <ActivateRoleTypeForm
                id={props.roleValues.RoleId}
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

export default RoleTypeMasterForm;
