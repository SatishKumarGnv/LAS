import { Button, Dialog } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as moment from "moment";
import * as React from "react";
import {
  getEmailFailGridValues,
  getEmailSentModuleValues
} from "../Api_Integration/ReportEmailService";
import ReportEmailFailForm from "../MisReports/ReportEmailFailForm";
import EmailFailReportTable from "../MisReports/ReportEmailFailTable";
import { DateRange } from "./LoginAuditTrailState";
export interface IReportEmailFailStateValues {
  readonly TemplateId: number;
  readonly TypeOfFilter: number;
  readonly FromDate: string;
  readonly ToDate: string;
  readonly EmailApplicationModuleName: string;
}
export interface ISelectEmailModuleValues {
  readonly TemplateName: string;
  readonly TemplateId: number;
}
export interface ISelectEmailModuleProps {
  readonly selectEmailFailModuleValues: ReadonlyArray<ISelectEmailModuleValues>;
}
export interface IEmailFailStateTableValues {
  readonly ApplicationModuleName: string;
  readonly TemplateName: string;
  readonly FromEmail: string;
  readonly ToEmail: string;
  readonly EmailSubject: string;
  readonly EmailSentDate: string;
  readonly EmailProcessedBy: string;
}
export interface IEmailFailStateProps {
  readonly emailFailTableList: ReadonlyArray<IEmailFailStateTableValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}
class EmailFailReportState extends React.Component<
  IEmailFailStateProps & ISelectEmailModuleProps,
  any
> {
  public readonly state = {
    TemplateId: 0,
    dropDownOpen: false,
    emptyRows: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    FromDate: "",
    page: 0,
    rowsPerPage: 5,
    EmailApplicationModuleName: "",
    searchInput: "",
    selectEmailFailModuleValues: [
      {
        TemplateId: 1,
        TemplateName: "User Registration"
      }
    ],
    ToDate: "",
    TypeOfFilter: 0,
    emailFailTableList: [],
    Date: "",
    dialog: false,
    count: 0
  };
  constructor(props: IEmailFailStateProps & ISelectEmailModuleProps) {
    super(props);
  }
  public componentWillMount() {
    getEmailSentModuleValues()
      .then(res => {
        this.setState({
          ...this.state,
          selectEmailFailModuleValues: res.templateList.filter(
            (x: IEmailFailStateTableValues) =>
              x.TemplateName !== null && x.TemplateName !== undefined
          )
        });
      })
      .catch(err => err);
  }
  // for table page change
  public handleChangePage = (event: any, p: number) => {
    this.setState({ ...this.state, page: p });
  };
  // for rows per page change
  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };
  // function calls for api
  public onHandleReportEmailFail = (values: IReportEmailFailStateValues) => {
    if (values.TypeOfFilter === 6) {
      this.setState({
        FromDate: values.FromDate,
        TemplateId: values.TemplateId,
        ToDate: values.ToDate,
        TypeOfFilter: values.TypeOfFilter
      });
    } else {
      const dates = DateRange(values.TypeOfFilter);
      this.setState({
        FromDate: moment(dates[0]).format("DD/MM/YYYY"),
        TemplateId: values.TemplateId,
        ToDate: moment(dates[1]).format("DD/MM/YYYY"),
        TypeOfFilter: values.TypeOfFilter
      });
    }
    if (values.TemplateId !== 0 && values.TypeOfFilter !== 0) {
      getEmailFailGridValues(
        this.state.TemplateId,
        this.state.FromDate,
        this.state.ToDate
      )
        .then(res => {
          this.setState({
            ...this.state,
            count: res.aaData.data.length,
            emailFailTableList: res.aaData.data,
            searchInput: ""
          });
        })
        .catch(err => err);
    } else {
      this.setState({
        dialog: true
      });
    }
  };
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };
  public fromEmailIncludes = (searchInput: string, fromEmail?: string) => {
    if (fromEmail) {
      return fromEmail.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return false;
    }
  };
  public toEmailIncludes = (searchInput: string, toEmail?: string) => {
    if (toEmail) {
      return toEmail.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return false;
    }
  };
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.emailFailTableList.filter(
      (x: IEmailFailStateTableValues) =>
        searchInput !== ""
          ? x.TemplateName.toLowerCase().includes(searchInput.toLowerCase()) ||
            this.fromEmailIncludes(searchInput) ||
            this.toEmailIncludes(searchInput) ||
            x.EmailSubject.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            this.emailSentDateIncludes(searchInput, x.EmailSentDate) ||
            x.EmailProcessedBy.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };
  public emailSentDateIncludes = (
    searchInput: string,
    emailSentDate?: string
  ) => {
    if (emailSentDate) {
      return moment(emailSentDate)
        .format("DD/MM/YYYY")
        .includes(searchInput);
    } else {
      return false;
    }
  };
  public onHandleSearch2 = (event: any) => {
    this.setState({ ...this.state, searchInput2: event.target.value });
  };
  public render() {
    return (
      <div className="innerpage-container">
        <div>
          <div className="inner-header-titile">
            <img src="/images/login-audit-icon.png" />
            <h2>Email Failed Report </h2>
          </div>
          <ReportEmailFailForm
            onEmailFailReport={this.onHandleReportEmailFail}
            TemplateId={this.state.TemplateId}
            TypeOfFilter={this.state.TypeOfFilter}
            EmailApplicationModuleName={this.state.EmailApplicationModuleName}
            selectEmailFailModuleValues={this.state.selectEmailFailModuleValues}
            FromDate={this.state.FromDate}
            ToDate={this.state.ToDate}
          />
          {this.state.TemplateId === 0 || this.state.TypeOfFilter === 0 ? (
            <div />
          ) : (
            <div className="reports-card">
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h4"
                    className="grap-heading"
                  >
                    <img src="/images/table-icon.png" />
                    Report On Emails Failed Through Application
                  </Typography>
                </CardContent>
                <EmailFailReportTable
                  count={this.state.count}
                  emailFailTableList={this.state.emailFailTableList}
                  page={this.state.page}
                  rowsPerPage={this.state.rowsPerPage}
                  searchInput={this.state.searchInput}
                  onHandleSearch={this.onHandleSearch}
                  onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                  onHandlePageChange={this.handleChangePage}
                />
              </Card>
            </div>
          )}
        </div>
        {
          <Dialog
            open={this.state.dialog}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Please select all the fields
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handlePopUpClose()}
                >
                  OK
                </Button>
              </div>
            </div>
          </Dialog>
        }
      </div>
    );
  }
}
export default EmailFailReportState;
