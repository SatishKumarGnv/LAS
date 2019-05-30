import * as React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
import * as moment from "moment";
import Workbook from "react-excel-workbook";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import {
  IApprovedApplicationStateValues,
  IMilestoneStateProps
} from "../Container/ApprovedApplicationState";
// import { IApplicationStateProps } from "../Container/ApprovedApplicationState";

export interface IMilestoneValues {
  readonly mileStoneValues: IApprovedApplicationStateValues;
  readonly MileStoneIdopen: boolean;
  //   readonly dialogOpen: boolean;
  readonly expandMileStoneId: string;

  onHandleMilestoneClick(event: any): void;
  onHandleMilestoneExpandClose(): void;
}

export interface IMilestoneListProps {
  readonly milestoneList: ReadonlyArray<IApprovedApplicationStateValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly emptyRows: number;
  readonly searchInput: string;
  readonly MileStoneIdopen: boolean;
  readonly expandApplicationId: string;

  onHandleMilestoneClick(values: IApprovedApplicationStateValues): void;
  onHandleMilestoneExpandClose(): void;
}

const MilestoneInnerForm = (props: IMilestoneValues) => (
  <TableRow>
    <TableCell
      className="table-btn-grid-three"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.onHandleMilestoneClick(props.mileStoneValues)}
    >
      {props.MileStoneIdopen &&
      props.mileStoneValues.ApplicationId === props.expandMileStoneId ? (
        <Button
          className="table-add-btn"
          id={props.mileStoneValues.ApplicationId}
        >
          -
        </Button>
      ) : (
        <Button
          className="table-add-btn"
          id={props.mileStoneValues.ApplicationId}
        >
          +
        </Button>
      )}
      {props.mileStoneValues.ApplicationId}
    </TableCell>

    <TableCell>{props.mileStoneValues.ThemecityName}</TableCell>
    <TableCell>{props.mileStoneValues.OrganiztionName}</TableCell>
    <TableCell>
      {moment(props.mileStoneValues.MilestoneDate).format("DD/MM/YYYY")}
    </TableCell>

    <TableCell>{props.mileStoneValues.LandAreaAllottedByEstates}</TableCell>
    <TableCell>{props.mileStoneValues.Status}</TableCell>

    {
      <Dialog
        open={
          props.MileStoneIdopen &&
          props.mileStoneValues.ApplicationId === props.expandMileStoneId
        }
        onClose={props.onHandleMilestoneExpandClose}
      >
        <DialogActions className="dialog-actions">
          <ol>
            {/* <TableCell>
            Application Id: {props.approvedApplicationValues.ApplicationId}
          </TableCell> */}
            <li>
              <b> Land Allocation To</b> :{props.mileStoneValues.AllocateTo}
            </li>
            <li>
              <b>Allocation Type Name</b> :
              {props.mileStoneValues.AllocationName}
            </li>
            <li>
              <b>Agreement Type Name</b> :
              {props.mileStoneValues.AgreementTypeName}
            </li>
            <li>
              <b> Last Updated Date</b> :{" "}
              {moment(props.mileStoneValues.LastUpdatedDate).format(
                "DD/MM/YYYY"
              )}
            </li>
            <li>
              <b> First Name</b> : {props.mileStoneValues.FirstName}
            </li>
            <li>
              <b> Email</b> : {props.mileStoneValues.Email}
            </li>
            <li>
              <b> Phone Number</b> : {props.mileStoneValues.PhoneNumber}
            </li>
          </ol>
        </DialogActions>
      </Dialog>
    }
  </TableRow>
);

export const MileStoneListTable = (props: IMilestoneStateProps) => {
  return (
    <div className="table-data">
      <div className="row text-center bottom-btn excel-btn ">
        <Workbook
          filename="MilestoneTableDetails.xlsx"
          element={
            <button className="button-size">
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.milestoneList.map(it => {
              return {
                ...it,

                LastUpdatedDate: dateConvert(it.LastUpdatedDate)
              };
            })}
            name="Sheet A"
          >
            <Workbook.Column label="Application Id" value="ApplicationId" />
            <Workbook.Column label=" Theme City Name" value="ThemecityName" />
            <Workbook.Column
              label="Organization Name "
              value="OrganiztionName"
            />
            <Workbook.Column label="Milestone Date" value="MilestoneDate" />
            <Workbook.Column
              label="Land Released By Estates(In Acres) "
              value="LandAreaAllottedByEstates"
            />
            <Workbook.Column label="Actions" value="Status" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Application Id</TableCell>
            <TableCell> Theme City Name </TableCell>
            <TableCell>Organization Name </TableCell>
            <TableCell>Milestone Date</TableCell>
            <TableCell>Land Released By Estates(In Acres)</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.milestoneList.length === 0 ? (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          ) : (
            props.milestoneList.map(value => (
              <MilestoneInnerForm
                onHandleMilestoneExpandClose={
                  props.onHandleMilestoneExpandClose
                }
                mileStoneValues={value}
                expandMileStoneId={props.expandMilestoneId}
                key={value.ApplicationId}
                MileStoneIdopen={props.MileStoneIdopen}
                onHandleMilestoneClick={props.onHandleMilestoneClick}
              />
            ))
            // .slice(
            //   props.page * props.rowsPerPage,
            //   props.page * props.rowsPerPage + props.rowsPerPage
            // )
            // .filter(
            //   x =>
            //     props.searchInput !== ""
            //       ? x.props.applicationValues.OrganiztionName.includes(
            //           props.searchInput
            //         ) ||
            //         x.props.applicationValues.LandAllocationType.includes(
            //           props.searchInput
            //         ) ||
            //         // x.props.applicationValues.CurrentStatus.includes(
            //         //   props.searchInput
            //         // ) ||
            //         x.props.applicationValues.RegistrationNumber.includes(
            //           props.searchInput
            //         )
            //       : x
            // )
          )}
        </TableBody>
      </Table>
    </div>
  );
};
const dateConvert = (fromDate?: string) => {
  if (fromDate) {
    return moment(fromDate).format("DD/MM/YYYY");
  } else {
    return false;
  }
};

const MilestoneForm = (props: IMilestoneStateProps) => (
  <div className="innerpage-container">
    <div className="graph-card">
      <Card>
        <CardContent>
          <Typography
            gutterBottom={true}
            variant="headline"
            component="h4"
            className="grap-heading"
          >
            <img src="/images/table-icon.png" />
            Milestone Details
          </Typography>
        </CardContent>
        <MileStoneListTable
          onHandleMilestoneExpandClose={props.onHandleMilestoneExpandClose}
          handleMileIdClick={props.handleMileIdClick}
          milestoneList={props.milestoneList}
          expandMilestoneId={props.expandMilestoneId}
          MileStoneIdopen={props.MileStoneIdopen}
          Milepage={props.Milepage}
          // MileemptyRows={props.MileemptyRows}
          onHandleMilestoneClick={props.onHandleMilestoneClick} //   searchInput={props.searchInput}
        />
      </Card>
    </div>
  </div>
);
export default MilestoneForm;
