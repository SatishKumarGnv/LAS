// import * as moment from "moment";
import * as React from "react";

import { IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import {
  IEditActivityProps,
  IEditActivityValues,
  IWorkFlowGridDataValues,
  IWorkFlowMapGridStateProps
} from "../Container/WorkFlowMappingState";
import Pager from "../Masters/Pager";
import EditDurationPopUpForm from "./EditDurationPopupForm";

interface IWorkFlowMapProps {
  readonly editDialogOpen: boolean;
  readonly workFlowMapValues: IWorkFlowGridDataValues;
  onHandleEditSave(
    AllocationId: number,
    AllocationSubTypeId: number,
    AgreementId: number,
    SlaDays: number,
    ActivityId: number
  ): void;
  handleEditClose(): void;
}

export interface IWorkFlowMapListTableProps {
  readonly workFlowMapList: ReadonlyArray<IWorkFlowGridDataValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly editDialogOpen: boolean;

  onHandleEditSave(
    AllocationId: number,
    AllocationSubTypeId: number,
    AgreementId: number,
    SlaDays: number,
    ActivityId: number
  ): void;
  handleEditClose(): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

const WorkFlowMapInnerForm = (
  props: IWorkFlowMapProps & IEditActivityValues & IEditActivityProps
) => (
  <TableRow>
    <TableCell>{props.workFlowMapValues.AllocateToName}</TableCell>
    <TableCell>{props.workFlowMapValues.AllocationTypeName}</TableCell>
    <TableCell>{props.workFlowMapValues.AgreementTypeName}</TableCell>
    <TableCell>{props.workFlowMapValues.ActivityList}</TableCell>
    <TableCell>{props.workFlowMapValues.ActivityId}</TableCell>
    <TableCell
      // Place color here
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.handleDurationPopClick(props.workFlowMapValues)}
    >
      {props.workFlowMapValues.SlaDays}
    </TableCell>
  </TableRow>
);

export const WorkFlowMapListTable = (
  props: IWorkFlowMapListTableProps & IEditActivityValues & IEditActivityProps
) => {
  return (
    <div className="table-data">
      <Table className="final-table last-table">
        <TableHead>
          <TableRow>
            <TableCell>Allocate To Type</TableCell>
            <TableCell>Allocation Type </TableCell>
            <TableCell>Agreement Type </TableCell>
            <TableCell>Activity Order No</TableCell>
            <TableCell>Activity Id</TableCell>
            <TableCell>Estimated Duration(Days)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.workFlowMapList.length &&
          props.workFlowMapList.length === 0 ? (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          ) : (
            props.workFlowMapList
              .map((value, id) => (
                <WorkFlowMapInnerForm
                  AllocationId={props.AllocationId}
                  AllocationSubTypeId={props.AllocationSubTypeId}
                  AgreementId={props.AgreementId}
                  ActivityId={props.ActivityId}
                  handleEditDurationChange={props.handleEditDurationChange}
                  onHandleEditSave={props.onHandleEditSave}
                  AllocationName={props.AllocationName}
                  AllocationSubTypeName={props.AllocationSubTypeName}
                  AgreementName={props.AgreementName}
                  newSlaDays={props.newSlaDays}
                  handleEditClose={props.handleEditClose}
                  editDialogOpen={props.editDialogOpen}
                  handleDurationPopClick={props.handleDurationPopClick}
                  key={id}
                  workFlowMapValues={value}
                />
              ))
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .filter(x => {
                return props.searchInput !== ""
                  ? x.props.workFlowMapValues.AllocateToName.includes(
                      props.searchInput
                    ) ||
                      x.props.workFlowMapValues.AllocationTypeName.includes(
                        props.searchInput
                      ) ||
                      x.props.workFlowMapValues.AgreementTypeName.includes(
                        props.searchInput
                      ) ||
                      x.props.workFlowMapValues.ActivityList.includes(
                        props.searchInput
                      ) ||
                      x.props.workFlowMapValues.ActivityId.toString().includes(
                        props.searchInput
                      ) ||
                      x.props.workFlowMapValues.SlaDays.toString().includes(
                        props.searchInput
                      )
                  : x;
              })
          )}
        </TableBody>
      </Table>
      {
        <Dialog
          open={props.editDialogOpen}
          onClose={props.handleEditClose}
          aria-labelledby="simple-dialog-title"
        >
          <div id="simple-dialog-title">
            <EditDurationPopUpForm
              AllocationId={props.AllocationId}
              AllocationSubTypeId={props.AllocationSubTypeId}
              AgreementId={props.AgreementId}
              ActivityId={props.ActivityId}
              handleEditDurationChange={props.handleEditDurationChange}
              newSlaDays={props.newSlaDays}
              AgreementName={props.AgreementName}
              AllocationSubTypeName={props.AllocationSubTypeName}
              AllocationName={props.AllocationName}
              editDialogOpen={props.editDialogOpen}
              handleDurationPopClick={props.handleDurationPopClick}
              handleEditClose={props.handleEditClose}
              onHandleEditSave={props.onHandleEditSave}
            />
          </div>
        </Dialog>
      }
    </div>
  );
};

const WorkFlowMapTable = (
  props: IWorkFlowMapGridStateProps & IEditActivityProps & IEditActivityValues
) => (
  <div>
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleSearch}
      margin="normal"
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />
    <WorkFlowMapListTable
      AllocationId={props.AllocationId}
      AllocationSubTypeId={props.AllocationSubTypeId}
      AgreementId={props.AgreementId}
      ActivityId={props.ActivityId}
      handleEditDurationChange={props.handleEditDurationChange}
      AllocationName={props.AllocationName}
      AllocationSubTypeName={props.AllocationSubTypeName}
      AgreementName={props.AgreementName}
      newSlaDays={props.newSlaDays}
      onHandleEditSave={props.onHandleEditSave}
      editDialogOpen={props.editDialogOpen}
      handleEditClose={props.handleEditClose}
      handleDurationPopClick={props.handleDurationPopClick}
      workFlowMapList={props.workFlowMapList}
      count={props.count}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      searchInput={props.searchInput}
    />
    <Pager
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />
  </div>
);
export default WorkFlowMapTable;
