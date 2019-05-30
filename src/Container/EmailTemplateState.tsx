import * as React from "react";

// import WitnessDetailsForm from "../ProposalForm/WitnessDetails";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import RichTextEditor from "react-rte";
import { loader } from "src/DefaultLayout/HomePage";
import EmailTemplateForm from "src/Masters/EmailTemplate";
import SMTPPopUpForm from "src/Masters/SMTPPopUpForm";
import {
  GetAllTemplateNames,
  GetEmailSettings,
  GetEmailTemplate,
  postEmailTemplateValues,
  SaveEmailSettings,
  uploadFile
  // postEmailTemplateValues
} from "../Api_Integration/EmailTemplateService";

export interface IEmailTemplateStateValues {
  readonly SendEmailNotifications: number;
  readonly image: string;
  readonly EmailBodyWithoutHeader: string;
  readonly Subject: string;
  readonly TemplateName: string;
  readonly CCEmail: string;
  readonly TemplateId: number;
  readonly HtmlContent: string;
  readonly TemplateArray: ReadonlyArray<ITemplateArrayProps>;
  readonly value: string;
  // readonly alignment: string;
  handleSubmit(e: any): void;
  handleClick(e: any, image: any): void;
  handleImageChange(event: any): void;
  handleTextBodyChange(event: any): void;
  onChange(event: any): void;
  handleTemplateNameChange(event: any): void;
  handleCCEmailChange(event: any): void;
  handleEnterSubjectChange(event: any): void;
  handleToggleChange(event: any): void;
  onHandleSMTPPopUp(): void;
  handleEmailTemplateReset(): void;
}

export interface ITemplateArrayProps {
  Body: null;
  Subject: string;
  UserName: null;
  ReturnCode: number;
  CCEmail: string;
  TemplateName: string;
  TemplateCode: number;
  Template: number;
  ReturnMessage: null;
  UserId: number;
  HeaderImage: string;
  EmailBodyWithoutHeader: string;
  CreatedOn: null;
  CreatedBy: number;
  ModifiedOn: null;
  ModifiedBy: number;
  IsActive: boolean;
  HtmlContent: string;
  TemplateId: number;
  SendEmailNotifications: number;
  Host: string;
  HostUserId: string;
  Password: string;
  SMTPport: number;
  FromEmail: string;
}

export interface ISMTPValues {
  readonly FromEmail: string;
  readonly Host: string;
  readonly HostUserId: string;
  readonly Password: string;
  readonly SMTPport: number;
  // onHandleChange(event: any): void;
}

export interface IEmailTemplateValues {
  readonly TemplateId: number;
  readonly TemplateName: string;
  handleClick(e: any, image: any): void;
}
export interface ISelectEmailTemplateProps {
  readonly selectEmailTemplateValues: ReadonlyArray<IEmailTemplateValues>;
}

export interface ISMTPDataProps {
  readonly SMTPData: ReadonlyArray<ITemplateArrayProps>;
  onHandleSMTPSubmit(values: ISMTPDataProps & ISMTPValues): void;
  onHandleSMTPClose(): void;
}

const item: any = localStorage.getItem("userDetails");
let user: any;
if (item) {
  user = JSON.parse(item);
}

class EmailTemplateState extends React.Component<
  IEmailTemplateValues & ISelectEmailTemplateProps & IEmailTemplateStateValues
> {
  public state = {
    Subject: "",
    sendEmailNotifyPopUp: false,
    // tslint:disable-next-line:object-literal-sort-keys
    EmailTemplateName: "",
    CCEmail: "",
    TemplateId: 0,
    TemplateName: "",
    HtmlContent: "",
    selectEmailTemplateValues: [],
    TemplateArray: [],
    EmailArray: [],
    image: "",
    value: RichTextEditor.createEmptyValue(),
    SMTPPopUpOpen: false,
    SMTPData: [],
    Host: "",
    HostUserId: "",
    FromEmail: "",
    Password: "",
    SMTPport: 0,
    EmailBodyWithoutHeader: "",
    SendEmailNotifications: 0,
    HeaderImage: "",
    change: "",
    editorPopUp: false,
    dialog: false,
    dialog1: false,
    succesEditorPopUp: false
  };

  constructor(
    props: IEmailTemplateValues &
      ISelectEmailTemplateProps &
      IEmailTemplateStateValues
  ) {
    super(props);
  }

  public async componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      const res1 = await GetAllTemplateNames();
      const res2 = await GetEmailSettings();

      this.setState({
        ...this.state,
        selectEmailTemplateValues: res1.templateList,
        // tslint:disable-next-line:object-literal-sort-keys
        FromEmail: res2.jsonData.data.map(
          (x: ITemplateArrayProps) => x.FromEmail
        ),
        Host: res2.jsonData.data.map((x: ITemplateArrayProps) => x.Host),
        HostUserId: res2.jsonData.data.map(
          (x: ITemplateArrayProps) => x.HostUserId
        ),
        Password: res2.jsonData.data.map(
          (x: ITemplateArrayProps) => x.Password
        ),
        SMTPData: res2.jsonData.data,
        SMTPport: res2.jsonData.data.map((x: ITemplateArrayProps) => x.SMTPport)
      });
      if (loader != null) {
        loader.style.display = "none";
      }
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
      if (loader != null) {
        loader.style.display = "none";
      }
    }
  }

  public onImageChange = () => {
    //  `<img src="${}" style="width: 533px;">`.replace('<p>')
  };

  public onChange = (value: any) => {
    this.setState({ ...this.state, value });
    if (this.props.onChange) {
      this.props.onChange(value.toString("html"));
    }
  };

  public handleClick = (
    e: React.ChangeEvent<HTMLSelectElement>,
    image: any
  ) => {
    image.value = null;
    GetEmailTemplate(e.currentTarget.textContent)
      .then(res => {
        this.setState({
          ...this.state,
          CCEmail: res.templatenamelist.map(
            (x: ITemplateArrayProps) => x.CCEmail
          )[0],
          SendEmailNotifications: res.templatenamelist.map(
            (x: ITemplateArrayProps) => x.SendEmailNotifications
          )[0],
          Subject: res.templatenamelist.map(
            (x: ITemplateArrayProps) => x.Subject
          )[0],
          TemplateArray: res.templatenamelist,
          TemplateId: e.target.value,
          TemplateName: res.templatenamelist.map(
            (x: ITemplateArrayProps) => x.TemplateName
          )[0],
          // tslint:disable-next-line:object-literal-sort-keys
          HtmlContent: res.templatenamelist.map(
            (x: ITemplateArrayProps) => x.HtmlContent
          )[0],
          // image: res.templatenamelist.map(
          //   (x: ITemplateArrayProps) => x.HeaderImage
          // )[0],
          value: RichTextEditor.createValueFromString(
            res.templatenamelist.map(
              (x: ITemplateArrayProps) => x.HtmlContent
            )[0],
            "html"
          ),
          image: ""
          // value: res.map(
          //   (x: ITemplateArrayProps) => x.EmailBodyWithoutHeader
          // )[0]
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  public onHandleSubmit = (
    event: IEmailTemplateStateValues & ISelectEmailTemplateProps
  ) => {
    if (
      (event.TemplateId !== 0 &&
        event.TemplateName &&
        event.CCEmail &&
        event.Subject &&
        user! == null) ||
      user !== undefined
    ) {
      postEmailTemplateValues(
        event,
        this.state.value,
        this.state.image,
        this.state.SendEmailNotifications,
        user.RoleId
      )
        .then(res => {
          this.setState({
            ...this.state,

            succesEditorPopUp: true
          });
        })
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({ ...this.state, editorPopUp: true });
    }
  };
  public handleTextBodyChange = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event);
  };
  public handleImageChange = (files: FileList) => {
    const file = files[0];
    const reader = new FileReader();

    if (file) {
      uploadFile(file)
        .then((imgUrl: any) => {
          const arr = imgUrl;
          this.setState({
            ...this.state,
            image: arr[0].HeadrerImagePath
          });
        })
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));

      reader.onloadend = () => {
        this.setState({
          ...this.state,

          image: reader.result
        });
      };

      reader.readAsDataURL(file);
      this.setState({
        ...this.state,

        image: reader.result
      });
    }
  };

  public onHandleSMTPPopUp = () => {
    this.setState({ ...this.state, SMTPPopUpOpen: true });
  };

  public onHandleSMTPClose = () => {
    this.setState({ ...this.state, SMTPPopUpOpen: false });
  };
  // public onHandleChange = () => {
  //   this.setState({
  //     dialog1: true
  //   });
  // };
  public onHandleSMTPSubmit = (values: ISMTPDataProps & ISMTPValues) => {
    SaveEmailSettings(values).then(res => {
      this.setState({
        ...this.state,
        SMTPPopUpOpen: false,
        dialog: true
      });
    });
  };

  public handleCCEmailChange = (event: any) => {
    this.setState({
      ...this.state,

      CCEmail: event.target.value
    });
  };

  public handleTemplateNameChange = (event: any) => {
    this.setState({
      ...this.state,
      TemplateName: event.target.value
    });
  };

  public handleEnterSubjectChange = (event: any) => {
    this.setState({
      ...this.state,

      Subject: event.target.value
    });
  };

  public handleEditorPopUpClose = () => {
    this.setState({
      ...this.state,
      editorPopUp: false
    });
  };

  public handleToggleChange = (event: any) => {
    this.setState({
      ...this.state,
      SendEmailNotifications: event.currentTarget.textContent === "YES" ? 1 : 0,
      sendEmailNotifyPopUp:
        event.currentTarget.textContent === "YES" ? true : false
    });
  };

  public handleSuccessPopUpClose = () => {
    this.setState({
      ...this.state,
      CCEmail: "",
      EmailBodyWithoutHeader: "",
      EmailTemplateName: "",
      HeaderImage: "",
      HtmlContent: "",
      SendEmailNotifications: 0,
      Subject: "",
      TemplateArray: [],
      TemplateId: 0,
      TemplateName: "",
      change: "",
      image: "",
      value: RichTextEditor.createEmptyValue(),
      // tslint:disable-next-line:object-literal-sort-keys
      dialog: false,
      dialog1: false,
      succesEditorPopUp: false
    });
  };

  public handleSendNotifyPopUpClose = () => {
    this.setState({
      ...this.state,
      sendEmailNotifyPopUp: false
    });
  };

  public handleEmailTemplateReset = () => {
    this.setState({
      ...this.state,
      CCEmail: "",
      EmailBodyWithoutHeader: "",
      EmailTemplateName: "",
      HeaderImage: "",
      HtmlContent: "",
      SendEmailNotifications: 0,
      Subject: "",
      TemplateArray: [],
      TemplateId: 0,
      TemplateName: "",
      change: this.state.change + 1,
      image: "",
      value: RichTextEditor.createEmptyValue()
    });
  };
  public render() {
    return (
      <div>
        <EmailTemplateForm
          handleEmailTemplateReset={this.handleEmailTemplateReset}
          handleToggleChange={this.handleToggleChange}
          SendEmailNotifications={this.state.SendEmailNotifications}
          image={this.state.image}
          EmailBodyWithoutHeader={this.state.EmailBodyWithoutHeader}
          handleCCEmailChange={this.handleCCEmailChange}
          handleTemplateNameChange={this.handleTemplateNameChange}
          handleEnterSubjectChange={this.handleEnterSubjectChange}
          onHandleSMTPPopUp={this.onHandleSMTPPopUp}
          onChange={this.onChange}
          value={this.state.value}
          // alignment={this.state.alignment}
          handleTextBodyChange={this.handleTextBodyChange}
          handleImageChange={this.handleImageChange}
          Subject={this.state.Subject}
          TemplateName={this.state.TemplateName}
          CCEmail={this.state.CCEmail}
          handleSubmit={this.onHandleSubmit}
          selectEmailTemplateValues={this.state.selectEmailTemplateValues}
          TemplateId={this.state.TemplateId}
          handleClick={this.handleClick}
          TemplateArray={this.state.TemplateArray}
          HtmlContent={this.state.HtmlContent}
        />

        {
          <Dialog
            open={this.state.sendEmailNotifyPopUp}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Email notifications will be sent to the mail
            </DialogTitle>
            <div className="popup-bottom-btn popup-bottom-second-btn">
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handleSendNotifyPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.SMTPPopUpOpen}
            onClose={this.onHandleSMTPClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">SMTP Settings</DialogTitle>
            <div id="simple-dialog-title">
              <SMTPPopUpForm
                FromEmail={this.state.FromEmail}
                Host={this.state.Host}
                HostUserId={this.state.HostUserId}
                Password={this.state.Password}
                SMTPport={this.state.SMTPport}
                onHandleSMTPClose={this.onHandleSMTPClose}
                SMTPData={this.state.SMTPData}
                onHandleSMTPSubmit={this.onHandleSMTPSubmit}
                // onHandleChange={this.onHandleChange}
              />
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.editorPopUp}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Please Fill All The Fields
            </DialogTitle>
            <div className="popup-bottom-btn popup-bottom-second-btn">
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handleEditorPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }

        {
          <Dialog
            open={this.state.dialog}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Already existed please add new name
            </DialogTitle>
            <div className="popup-bottom-btn popup-bottom-second-btn">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handleSuccessPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialog1}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              You Have Successfully Added Email Settings
            </DialogTitle>
            <div className="popup-bottom-btn popup-bottom-second-btn">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handleSuccessPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.succesEditorPopUp}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Record Inserted Successfully
            </DialogTitle>
            <div className="popup-bottom-btn popup-bottom-second-btn">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handleSuccessPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
      </div>
    );
  }
}

export default EmailTemplateState;
