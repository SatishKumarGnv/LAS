import { Button, Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// import ToggleButton from "@material-ui/lab/ToggleButton";
// import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import MenuItem from "@material-ui/core/MenuItem";
import RichTextEditor from "react-rte";

import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import * as React from "react";
import {
  IEmailTemplateStateValues,
  IEmailTemplateValues,
  ISelectEmailTemplateProps
  //  ITemplateArrayProps
} from "../Container/EmailTemplateState";
const EmailTemplateInnerForm = (
  props: IEmailTemplateStateValues & ISelectEmailTemplateProps
) => {
  return (
    <div className="innerpage-container">
      <div className="inner-header-titile">
        {/* <img src="/images/login-audit-icon.png" /> */}
        <h2>Email Template Form</h2>
      </div>

      <form autoComplete="off">
        <div className="white-card">
          {/* <div className="dashboard-container"> */}
          <div className="child-card">
            <h4>Select Process</h4>
            <FormControl>
              <Select
                value={props.TemplateId}
                inputProps={{
                  id: "TemplateId",
                  name: "TemplateId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  // handleChange(event);

                  props.handleClick(
                    event,
                    document.getElementById("emailtemplateimage")
                  );
                }}
              >
                {props.selectEmailTemplateValues.map(
                  (e: IEmailTemplateValues) => (
                    <MenuItem
                      key={e.TemplateId}
                      className="select-dropdown-bottom"
                      value={e.TemplateId}
                    >
                      {e.TemplateName}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </div>
          <div className="child-card">
            <h4>Email Template Name</h4>
            <TextField
              name="TemplateName"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                // handleChange()
                props.handleTemplateNameChange(event);
              }}
              // onBlur={handleBlur}
              value={props.TemplateName}
            />
          </div>

          <div className="row-card">
            <div className="child-card">
              <h4>
                Enter Subject (This will appear as a subject in the email)
              </h4>
              <TextField
                name="Subject"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  // handleChange
                  props.handleEnterSubjectChange(event);
                }}
                //  onBlur={handleBlur}
                value={props.Subject}
              />
            </div>
            <div className="child-card">
              <h4>
                Enter CC Email IDs (Comma Separate for multiple email IDs)
              </h4>
              <TextField
                name="CCEmail"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  props.handleCCEmailChange(event);
                }}
                // onBlur={handleBlur}
                value={props.CCEmail}
              />
            </div>

            <div className="second-card">
              <div className="child-card">
                <img
                  className="choose-img-email"
                  id="image"
                  src={props.image}
                />
                <input
                  className="forword-select"
                  accept="image/png, image/jpeg"
                  id="emailtemplateimage"
                  type="file"
                  name="image"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    // handleChange(event);
                    props.handleImageChange(event.target.files);
                  }}
                />
              </div>
            </div>
            <div className="second-card">
              <h3>
                {" "}
                Email Body <span className="star">*</span>
              </h3>
              <RichTextEditor
                name="value"
                value={props.value}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: any) => props.onChange(event)}
              />
            </div>
          </div>

          <Grid container={true} spacing={16}>
            <div className="send-email-btn">
              <h4>Send Email Notifications</h4>
              <div>
                <Button
                  className="main-btn"
                  // name="SendEmailNotifications"
                  type="button"
                  color={
                    props.SendEmailNotifications === 1 ? "primary" : "secondary"
                  }
                  // value={props.SendEmailNotifications}
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={event => props.handleToggleChange(event)}
                >
                  YES
                </Button>
                <Button
                  className="main-btn"
                  // value={props.SendEmailNotifications}
                  color={
                    props.SendEmailNotifications === 0 ? "primary" : "secondary"
                  }
                  type="button"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={event => props.handleToggleChange(event)}
                >
                  NO
                </Button>
              </div>
            </div>
          </Grid>
          <div className="bottom-save-btn">
            <Button
              className={
                props.TemplateId === 0
                  ? props.TemplateName === "" &&
                    props.CCEmail === "" &&
                    props.Subject === ""
                    ? "disable-btn"
                    : "save-btn"
                  : "save-btn"
              }
              type="button"
              disabled={
                props.TemplateId === 0
                  ? props.TemplateName === "" &&
                    props.CCEmail === "" &&
                    props.Subject === ""
                    ? true
                    : false
                  : false
              }
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => {
                props.handleSubmit(props);
              }}
            >
              Submit
            </Button>
            <Button
              className="save-btn"
              type="reset"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => {
                props.handleEmailTemplateReset();
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export const EmailTemplateForm = (
  props: IEmailTemplateStateValues & ISelectEmailTemplateProps
) => (
  <div>
    <EmailTemplateInnerForm
      handleEmailTemplateReset={props.handleEmailTemplateReset}
      handleToggleChange={props.handleToggleChange}
      SendEmailNotifications={props.SendEmailNotifications}
      image={props.image}
      EmailBodyWithoutHeader={props.EmailBodyWithoutHeader}
      handleCCEmailChange={props.handleCCEmailChange}
      handleTemplateNameChange={props.handleTemplateNameChange}
      handleEnterSubjectChange={props.handleEnterSubjectChange}
      onHandleSMTPPopUp={props.onHandleSMTPPopUp}
      onChange={props.onChange}
      handleTextBodyChange={props.handleTextBodyChange}
      handleImageChange={props.handleImageChange}
      handleClick={props.handleClick}
      handleSubmit={props.handleSubmit}
      value={props.value}
      HtmlContent={props.HtmlContent}
      Subject={props.Subject}
      TemplateName={props.TemplateName}
      CCEmail={props.CCEmail}
      TemplateId={props.TemplateId}
      TemplateArray={props.TemplateArray}
      selectEmailTemplateValues={props.selectEmailTemplateValues}
    />
  </div>
);

export default EmailTemplateForm;
