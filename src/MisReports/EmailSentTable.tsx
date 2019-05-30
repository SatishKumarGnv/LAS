import { IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
// tslint:disable-next-line:ordered-imports
import * as moment from "moment";
import * as React from "react";
import Workbook from "react-excel-workbook";
import {
  IEmailSentStateProps,
  IEmailSentStateTableValues
} from "../Container/ReportEmailSentState";
import Pager from "../Masters/Pager";

interface IEmailSentReportTableValues {
  readonly emailSentTableValues: IEmailSentStateTableValues;
}

export interface IEmailSentReportTableProps {
  readonly emailSentTableList: ReadonlyArray<IEmailSentStateTableValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

const EmailSentReportTableItems = (props: IEmailSentReportTableValues) => (
  <TableRow>
    <TableCell>{props.emailSentTableValues.TemplateName}</TableCell>
    <TableCell>{props.emailSentTableValues.FromEmail}</TableCell>
    <TableCell>{props.emailSentTableValues.ToEmail}</TableCell>
    <TableCell>{props.emailSentTableValues.EmailSubject}</TableCell>
    <TableCell>
      {props.emailSentTableValues.EmailSentDate !== null
        ? moment(props.emailSentTableValues.EmailSentDate).format("DD/MM/YYYY")
        : ""}
    </TableCell>
    <TableCell>{props.emailSentTableValues.EmailProcessedBy}</TableCell>
  </TableRow>
);

export const EmailSentReportListTable = (props: IEmailSentReportTableProps) => {
  return (
    <div className="table-card">
      <div className="row text-center excel-btn">
        <Workbook
          filename="EmailSent.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.emailSentTableList.map(it => {
              return {
                ...it,

                EmailSentDate: emailsentConvert(it.EmailSentDate)
              };
            })}
            name="Sheet A"
          >
            <Workbook.Column
              label="Application/Module Name"
              value="TemplateName"
            />
            <Workbook.Column label="From Email" value="FromEmail" />
            <Workbook.Column label="To Email" value="ToEmail" />
            <Workbook.Column label="Email Subject" value="EmailSubject" />
            <Workbook.Column label="Email Sent Date" value="EmailSentDate" />
            <Workbook.Column
              label="Email ProcessedBy"
              value="EmailProcessedBy"
            />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Application/Module Name</TableCell>
              <TableCell>From Email</TableCell>
              <TableCell>To Email</TableCell>
              <TableCell>Email Subject</TableCell>
              <TableCell>Email Sent Date</TableCell>
              <TableCell>Email Processed By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.emailSentTableList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.emailSentTableList
                .map((value, id) => (
                  <EmailSentReportTableItems
                    key={id}
                    emailSentTableValues={value}
                  />
                ))

                // search for all fields in table
                .filter(
                  (x: React.ReactElement<IEmailSentReportTableValues>) => {
                    return props.searchInput !== ""
                      ? x.props.emailSentTableValues.TemplateName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                          x.props.emailSentTableValues.FromEmail.toLowerCase().includes(
                            props.searchInput.toLowerCase()
                          ) ||
                          x.props.emailSentTableValues.ToEmail.toLowerCase().includes(
                            props.searchInput.toLowerCase()
                          ) ||
                          x.props.emailSentTableValues.EmailSubject.toLowerCase().includes(
                            props.searchInput.toLowerCase()
                          ) ||
                          emailSentDateIncludes(
                            props.searchInput,
                            x.props.emailSentTableValues.EmailSentDate
                          ) ||
                          x.props.emailSentTableValues.EmailProcessedBy.toLowerCase().includes(
                            props.searchInput.toLowerCase()
                          )
                      : true;
                  }
                )
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
const emailSentDateIncludes = (searchInput: string, emailSentDate?: string) => {
  if (emailSentDate) {
    return moment(emailSentDate)
      .format("DD/MM/YYYY")
      .includes(searchInput);
  } else {
    return false;
  }
};
const emailsentConvert = (emailSentDates?: string) => {
  if (emailSentDates) {
    return moment(emailSentDates).format("DD/MM/YYYY");
  } else {
    return "";
  }
};
const EmailSentReportTable = (props: IEmailSentStateProps) => (
  <div className="table-card">
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

    <EmailSentReportListTable
      emailSentTableList={props.emailSentTableList}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
      searchInput={props.searchInput}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
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
export default EmailSentReportTable;
