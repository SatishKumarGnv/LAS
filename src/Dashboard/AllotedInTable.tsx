// import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Workbook from "react-excel-workbook";

import * as React from "react";

import { Button, Dialog, DialogTitle, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
// import {
//   IViewDetailsStateValues,
//   IViewDetailStateProps
// } from "../Container/ViewDetailsState";
import {
  IAllotedDetailsStateValues,
  IAllotedDetailStateProps,
  IAllotedExpandRowProps,
  IAllotedValueProps
} from "src/DefaultLayout/HomePage";
import Pager from "../Masters/Pager";
import ExpandAllotedRow from "./AllotedExpand";

// export interface IAllotedDetailsInnerProps {
//   readonly changeAllotedValues: IAllotedDetailsStateValues;
//   readonly expandApplicationId: string;
//   readonly open: boolean;
//   onHandleClick(event: IAllotedDetailsStateValues): void;
// }

export interface IViewProps {
  readonly selectedAllotedList: ReadonlyArray<IAllotedDetailsStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;

  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

const AllotedDetailsInnerForm = (props: IAllotedExpandRowProps) => (
  <TableRow>
    <TableCell
      className="table-btn-grid"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.handleClick(props.changeAllotedValues)}
    >
      {props.dialogExpandOpen &&
      props.changeAllotedValues.ApplicationId === props.expandApplicationId ? (
        <Button
          className="table-add-btn"
          id={props.changeAllotedValues.ApplicationId}
          // onClick={props.onHandleExpandPopUp}
        >
          -
        </Button>
      ) : (
        <Button
          className="table-add-btn"
          id={props.changeAllotedValues.ApplicationId}
        >
          +
        </Button>
      )}
      {props.changeAllotedValues.ApplicationId}
    </TableCell>

    <TableCell>{props.changeAllotedValues.OrganiztionName}</TableCell>
    <TableCell>{props.changeAllotedValues.RequiredLand}</TableCell>
    <TableCell>{props.changeAllotedValues.AllotedLand}</TableCell>
    <TableCell>{props.changeAllotedValues.ApplicationCurrentStatus}</TableCell>
  </TableRow>
);

export const AllotedDetailsTable = (
  props: IViewProps & IAllotedExpandRowProps & IAllotedValueProps
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="AllotedIn.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.selectedAllotedList} name="Sheet A">
            <Workbook.Column label="Application Id" value="ApplicationId" />
            <Workbook.Column
              label="Organizatiopn Name"
              value="OrganiztionName"
            />
            <Workbook.Column
              label="Requested Land Area(In Acres)"
              value="RequiredLand"
            />
            <Workbook.Column
              label="Land Alloted(In Acres)"
              value="AllotedLand"
            />
            <Workbook.Column label="Status" value="ApplicationCurrentStatus" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Application Id</TableCell>
              <TableCell>Organization Name</TableCell>
              <TableCell>Requested Land Area(In Acres)</TableCell>
              <TableCell>Land Allotted(In Acres)</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          {
            <Dialog
              open={props.dialogExpandOpen}
              onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              <div className="popup-title">
                <DialogTitle id="simple-dialog-title">
                  Application Details
                </DialogTitle>
              </div>
              <div id="simple-dialog-title">
                <ExpandAllotedRow
                  AllotedApprovalValues={props.AllotedApprovalValues}
                />
              </div>
            </Dialog>
          }
          <TableBody>
            {props.selectedAllotedList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.selectedAllotedList
                .map((value, id) => (
                  <AllotedDetailsInnerForm
                    key={id}
                    selectedAllotedList={props.selectedAllotedList}
                    changeAllotedValues={value}
                    expandApplicationId={props.expandApplicationId}
                    open={props.open}
                    handleClick={props.handleClick}
                    dialogExpandOpen={props.dialogExpandOpen}
                    onHandleClose={props.onHandleClose}
                  />
                ))

                // search for all fields in table
                .filter((x: React.ReactElement<IAllotedExpandRowProps>) => {
                  return props.searchInput !== ""
                    ? x.props.changeAllotedValues.ApplicationId.toLowerCase().includes(
                        props.searchInput.toLowerCase()
                      ) ||
                        x.props.changeAllotedValues.OrganiztionName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        x.props.changeAllotedValues.RequiredLand.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                        // x.props.changeViewValues.PlotCode.toString().includes(
                        //   props.searchInput
                        // ) ||
                        x.props.changeAllotedValues.AllotedLand.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase()) ||
                        x.props.changeAllotedValues.ApplicationCurrentStatus.toString()
                          .toLowerCase()
                          .includes(props.searchInput.toLowerCase())
                    : true;
                })
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export const AllotedDetailTableForm = (
  props: IAllotedDetailStateProps & IAllotedExpandRowProps & IViewProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleSearch1}
      margin="normal"
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    <AllotedDetailsTable
      changeAllotedValues={props.changeAllotedValues}
      selectedAllotedList={props.selectedAllotedList}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
      searchInput={props.searchInput}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      expandApplicationId={props.expandApplicationId}
      open={props.open}
      handleClick={props.handleClick}
      dialogExpandOpen={props.dialogExpandOpen}
      onHandleClose={props.onHandleClose}
      AllotedApprovalValues={props.changeAllotedValues}

      // onSelectAllClick={props.onSelectAllClick}
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
export default AllotedDetailTableForm;
