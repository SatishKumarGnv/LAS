import { Button, Dialog } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as moment from "moment";
import * as React from "react";
import {
  getEmailGridValues,
  getEmailSentModuleValues
} from "../Api_Integration/ReportEmailService";
import EmailSentReportTable from "../MisReports/EmailSentTable";
import ReportEmailSentForm from "../MisReports/ReportEmailSent";
import { DateRange } from "./LoginAuditTrailState";
// UserDetailReportListTable
export interface IReportEmailSentStateValues {
  readonly TypeOfFilter: number;
  readonly FromDate: string;
  readonly ToDate: string;
  readonly TemplateId: number;
  readonly EmailApplicationModuleName: string;
}
export interface ISelectEmailModuleValues {
  readonly TemplateName: string;
  readonly TemplateId: number;
}
export interface ISelectEmailModuleProps {
  readonly selectEmailSentModuleValues: ReadonlyArray<ISelectEmailModuleValues>;
}
export interface IEmailSentStateTableValues {
  readonly TemplateName: string;
  readonly FromEmail: string;
  readonly ToEmail: string;
  readonly EmailSubject: string;
  readonly EmailSentDate: string;
  readonly EmailProcessedBy: string;
}
export interface IEmailSentStateProps {
  readonly emailSentTableList: ReadonlyArray<IEmailSentStateTableValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}
class EmailSentReportState extends React.Component<
  IEmailSentStateProps & ISelectEmailModuleProps,
  any
> {
  public readonly state = {
    dropDownOpen: false,
    emptyRows: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    FromDate: "",
    page: 0,
    rowsPerPage: 5,
    count: 0,
    EmailApplicationModuleName: "",
    searchInput: "",
    selectEmailSentModuleValues: [],
    ToDate: "",
    TypeOfFilter: 0,
    dialog: false,
    emailSentTableValues: [],
    Date: "",
    TemplateId: 0
  };
  constructor(props: IEmailSentStateProps & ISelectEmailModuleProps) {
    super(props);
  }
  public componentWillMount() {
    getEmailSentModuleValues()
      .then(res => {
        this.setState({
          ...this.state,
          selectEmailSentModuleValues: res.templateList.filter(
            (x: ISelectEmailModuleValues) =>
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
  public onHandleReportEmailSent = (values: IReportEmailSentStateValues) => {
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
      getEmailGridValues(
        this.state.TemplateId,
        this.state.FromDate,
        this.state.ToDate
      )
        .then(res => {
          this.setState({
            ...this.state,
            count: res.jsonData.data.length,
            emailSentTableValues: res.jsonData.data,
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
  // search input change
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
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.emailSentTableValues.filter(
      (x: IEmailSentStateTableValues) =>
        searchInput !== ""
          ? x.TemplateName.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.FromEmail.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.ToEmail.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.EmailSubject.toLowerCase().includes(searchInput.toLowerCase()) ||
            this.emailSentDateIncludes(searchInput, x.EmailSentDate) ||
            x.EmailProcessedBy.includes(searchInput)
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };

  public onHandleSearch2 = (event: any) => {
    this.setState({ ...this.state, searchInput2: event.target.value });
  };
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };
  public render() {
    return (
      <div className="innerpage-container">
        <div>
          <div className="inner-header-titile">
            <img src="/images/login-audit-icon.png" />
            <h2>Report on Emails Sent through Application</h2>
          </div>
          <ReportEmailSentForm
            onEmailSentReport={this.onHandleReportEmailSent}
            TypeOfFilter={this.state.TypeOfFilter}
            EmailApplicationModuleName={this.state.EmailApplicationModuleName}
            selectEmailSentModuleValues={this.state.selectEmailSentModuleValues}
            FromDate={this.state.FromDate}
            ToDate={this.state.ToDate}
            TemplateId={this.state.TemplateId}
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
                    Report on Emails Sent through Application
                  </Typography>
                </CardContent>
                <EmailSentReportTable
                  count={this.state.count}
                  emailSentTableList={this.state.emailSentTableValues}
                  page={this.state.page}
                  rowsPerPage={this.state.rowsPerPage}
                  searchInput={this.state.searchInput}
                  onHandleSearch={this.onHandleSearch}
                  onHandlePageChange={this.handleChangePage}
                  onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
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
export default EmailSentReportState;
