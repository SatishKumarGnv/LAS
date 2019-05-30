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

import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import {
  IEditDocumentValues,
  IProjectRulesMasterStateProps,
  IProjectRulesTypeStateValues
} from "src/Container/ProjectRulesState";
import ActivateprojectRulesTypeForm from "src/Masters/ProjectRules/ActivateProjectRules";
import DeActivateProjectTypeForm from "src/Masters/ProjectRules/DeActivateProjectRules";
// import EditDocumentTypeForm from "./EditDocumentTypeForm";

export interface IProjectTypeProps {
  readonly projectValues: IProjectRulesTypeStateValues;
  readonly editPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  // readonly expandApplicationId: string;
  readonly open: boolean;
  readonly open2: boolean;

  readonly deActivatePopUpOpen: boolean;
  // onHandleClick(event: any): void;
  onHandleActionClick(projectValues: any): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleEditActionClick(): void;
  onHandleEditPopUpClose(): void;
  onHandleEditSave(event: any, name: string): void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(projectValues: any): void;
  onHandleDeActivateSave(event: any): void;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUp(projectValues: any): void;
  onHandleActivePopUpClose(): void;
}

export interface IEditDocumentProps {
  readonly projectValues: IProjectRulesTypeStateValues;
  onHandleEditSave(event: any, name: string): void;
  onHandleEditActionClick(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IDeActivateProjectProps {
  readonly id: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

const ProjectRuleMasterItems = (
  props: IProjectTypeProps &
    IEditDocumentValues &
    IDeActivateProjectProps &
    IProjectTypeProps
) => (
  <TableRow>
    <TableCell>{props.projectValues.TownshipName}</TableCell>
    <TableCell>{props.projectValues.RuleName}</TableCell>
    <TableCell>
      {props.projectValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      {props.projectValues.IsActive.toString() === "true" ? (
        <div>
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpen(props.projectValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => props.onHandleActivatePopUp(props.projectValues)}
          >
            <img src="/images/active1.png" />
          </Button>
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
const ProjectRulesMasterList = (
  props: IProjectRulesMasterStateProps &
    IPagerProps & { emptyRows: number } & IEditDocumentValues &
    IDeActivateProjectProps &
    IProjectTypeProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="ProjectRules.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" />
            Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.projectRulesTypeMasterList.map(x => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column label="Theme City Name" value="TownshipName" />
          <Workbook.Column label="Rule Name" value="RuleName" />

          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Theme City Name</TableCell>
            <TableCell>Rule Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.projectRulesTypeMasterList.length !== 0 ? (
            props.projectRulesTypeMasterList

              .filter(x =>
                props.searchInput !== ""
                  ? themeCityNameIncludes(props.searchInput, x.TownshipName) ||
                    x.IsActive.toString()
                      .toLowerCase()
                      .includes(
                        getActivestate(props.searchInput.toLowerCase())
                      ) ||
                    ruleNameIncludes(props.searchInput, x.RuleName)
                  : x
              )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <ProjectRuleMasterItems
                  onHandleClose2={props.onHandleClose2}
                  activatePopUpOpen={props.activatePopUpOpen}
                  onHandleActivatePopUp={props.onHandleActivatePopUp}
                  onHandleActivePopUpClose={props.onHandleActivePopUpClose}
                  key={id}
                  projectValues={value}
                  id={props.id}
                  ProjectName={props.ProjectName}
                  onHandleEditNameChange={props.onHandleEditNameChange}
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
const themeCityNameIncludes = (searchInput: string, cityName?: string) => {
  if (cityName) {
    return cityName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};
const ruleNameIncludes = (searchInput: string, ruleName?: string) => {
  if (ruleName) {
    return ruleName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return "";
  }
};
const ProjectTypeMasterForm = (
  props: IProjectRulesMasterStateProps &
    IPagerProps & { emptyRows: number } & IEditDocumentValues &
    IDeActivateProjectProps &
    IProjectTypeProps
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
    <ProjectRulesMasterList
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
      id={props.id}
      ProjectName={props.ProjectName}
      onHandleEditNameChange={props.onHandleEditNameChange}
      onHandleEditSave={props.onHandleEditSave}
      deActivatePopUpOpen={props.deActivatePopUpOpen}
      onHandleDeActivatePopUpClose={props.onHandleDeActivatePopUpClose}
      onHandleDeActivatePopUpOpen={props.onHandleDeActivatePopUpOpen}
      onHandleDeActivateSave={props.onHandleDeActivateSave}
      editPopUpOpen={props.editPopUpOpen}
      onHandleEditActionClick={props.onHandleEditActionClick}
      onHandleEditPopUpClose={props.onHandleEditPopUpClose}
      projectRulesTypeMasterList={props.projectRulesTypeMasterList}
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
      projectValues={props.projectValues}
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
        open={props.deActivatePopUpOpen}
        // onClose={props.onHandleDeActivatePopUpClose}
        aria-labelledby="simple-dialog-title"
      >
        <div id="simple-dialog-title">
          <DeActivateProjectTypeForm
            id={props.projectValues.RuleId}
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
          <ActivateprojectRulesTypeForm
            id={props.projectValues.RuleId}
            onHandleActivateClick={props.onHandleActivateClick}
            onHandleActivePopUpClose={props.onHandleActivePopUpClose}
          />
        </div>
      </Dialog>
    }
  </div>
);

export default ProjectTypeMasterForm;
