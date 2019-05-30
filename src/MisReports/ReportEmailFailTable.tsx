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
  IEmailFailStateProps,
  IEmailFailStateTableValues
} from "../Container/ReportEmailFailState";

import Pager from "../Masters/Pager";

interface IEmailSentReportTableValues {
  readonly emailFailTableValues: IEmailFailStateTableValues;
}

export interface IEmailSentReportTableProps {
  readonly emailFailTableList: ReadonlyArray<IEmailFailStateTableValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
}

const EmailFailReportTableItems = (props: IEmailSentReportTableValues) => (
  <TableRow>
    <TableCell>{props.emailFailTableValues.TemplateName}</TableCell>
    <TableCell>{props.emailFailTableValues.FromEmail}</TableCell>
    <TableCell>{props.emailFailTableValues.ToEmail}</TableCell>
    <TableCell>{props.emailFailTableValues.EmailSubject}</TableCell>
    <TableCell>
      {props.emailFailTableValues.EmailSentDate !== null
        ? moment(props.emailFailTableValues.EmailSentDate!!).format(
            "DD/MM/YYYY"
          )
        : ""}
    </TableCell>
    <TableCell>{props.emailFailTableValues.EmailProcessedBy}</TableCell>
  </TableRow>
);

export const EmailFailReportListTable = (props: IEmailSentReportTableProps) => {
  return (
    <div className="table-card">
      <div className="row text-center excel-btn">
        <Workbook
          filename="EmailFail.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.emailFailTableList.map(it => {
              return {
                ...it,

                EmailSentDate: emailsentConverts(it.EmailSentDate)
              };
            })}
            name="Sheet A"
          >
            <Workbook.Column label="Application Name" value="TemplateName" />
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
              <TableCell>Application Name</TableCell>
              <TableCell>From Email</TableCell>
              <TableCell>To Email</TableCell>
              <TableCell>Email Subject</TableCell>
              <TableCell>Email Sent Date</TableCell>
              <TableCell>Email Processed By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.emailFailTableList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.emailFailTableList
                .map((value, id) => (
                  <EmailFailReportTableItems
                    key={id}
                    emailFailTableValues={value}
                  />
                ))

                // search for all fields in table
                .filter(
                  (x: React.ReactElement<IEmailSentReportTableValues>) => {
                    return props.searchInput !== ""
                      ? x.props.emailFailTableValues.TemplateName.toLowerCase().includes(
                          props.searchInput.toLowerCase()
                        ) ||
                          fromEmailIncludes(
                            props.searchInput,
                            x.props.emailFailTableValues.FromEmail
                          ) ||
                          toEmailIncludes(
                            props.searchInput,
                            x.props.emailFailTableValues.ToEmail
                          ) ||
                          x.props.emailFailTableValues.EmailSubject.toString().includes(
                            props.searchInput
                          ) ||
                          emailSentDateIncludes(
                            props.searchInput,
                            x.props.emailFailTableValues.EmailSentDate
                          ) ||
                          x.props.emailFailTableValues.EmailProcessedBy.toString()
                            .toLowerCase()
                            .includes(props.searchInput.toLowerCase())
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
const fromEmailIncludes = (searchInput: string, fromEmail?: string) => {
  if (fromEmail) {
    return fromEmail.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};

const emailsentConverts = (emailsent?: string) => {
  if (emailsent) {
    return moment(emailsent).format("DD/MM/YYYY");
  } else {
    return "";
  }
};
const toEmailIncludes = (searchInput: string, toEmail?: string) => {
  if (toEmail) {
    return toEmail.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
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
const EmailFailReportTable = (props: IEmailFailStateProps) => (
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
    <EmailFailReportListTable
      emailFailTableList={props.emailFailTableList}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      count={props.count}
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
export default EmailFailReportTable;
