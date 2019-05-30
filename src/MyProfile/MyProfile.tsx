import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import * as React from "react";

// import { Card, CardBody, Collapse } from "reactstrap";

import Tab from "@material-ui/core/Tab";

import Tabs from "@material-ui/core/Tabs";
// import TextField from "@material-ui/core/TextField";

// import Tooltip from "@material-ui/core/Tooltip";

import Typography from "@material-ui/core/Typography";
import {
  IChangeAvatarValues,
  IChangePasswordProps,
  IChangePasswordValues,
  IPersonalInfo,
  IPersonalInfoValueProps,
  IPersonalInfoValues,
  IProfileStateValues,
  ISelectDepartmentProps,
  ISelectFingerListProps,
  ISelectRoleProps
} from "../DefaultLayout/HomePage";
import ChangeAvatar from "../MyProfile/ChangeAvatar";
import ChangePasswordForm from "../MyProfile/ChangePassword";
import PersonalInfoForm from "./PersonalInfo";
// import PersonalInfoForm from "../MyProfile/Form";
// import ApplicationForm from "../Applications/ApplicationForm";

export function TabContainer(props: any) {
  return <Typography component="div">{props.children}</Typography>;
}

export const MyProfileTabsForm = (
  props: IProfileStateValues &
    IPersonalInfoValueProps &
    IPersonalInfoValues &
    IChangePasswordValues &
    IChangePasswordProps &
    ISelectRoleProps &
    ISelectDepartmentProps &
    ISelectFingerListProps &
    IChangeAvatarValues &
    IPersonalInfo
) => {
  return (
    <div className="dashboard-container ">
      <div className="inner-header-titile">
        {/* <img src="/images/login-audit-icon.png" /> */}
        <h2>My Profile </h2>
      </div>
      <div className="inner-header transparent-card">
        <AppBar className="app-bar" position="static">
          <Paper square={true}>
            <Tabs
              // className="main-tab"
              value={props.tabsValue}
              onChange={props.onTabChange}
              indicatorColor="primary"
              textColor="primary"
              // onChange={props.onTabChange}
            >
              <Tab label="Personal Info" value={0} />
              <Tab label="Change Avatar" value={1} />
              <Tab label="Change Password" value={2} />
            </Tabs>
          </Paper>
        </AppBar>
      </div>

      {props.tabsValue === 0 && (
        <TabContainer>
          <PersonalInfoForm
            formHandleChange={props.formHandleChange}
            handleEmailAddressChange={props.handleEmailAddressChange}
            handleMobileNumberChange={props.handleMobileNumberChange}
            handleDisplayChange={props.handleDisplayChange}
            handleMiddleNameChange={props.handleMiddleNameChange}
            handleSurNameChange={props.handleSurNameChange}
            handleFirstNameChange={props.handleFirstNameChange}
            Finger={props.Finger}
            DepartmentName={props.DepartmentName}
            UserName={props.UserName}
            ActionRequired={props.ActionRequired}
            Photo={props.Photo}
            Guid={props.Guid}
            ReEnterNewPassword={props.ReEnterNewPassword}
            RoleName={props.RoleName}
            myProfileValues={props.myProfileValues}
            FirstName={props.FirstName}
            MiddleName={props.MiddleName}
            SurName={props.SurName}
            DisplayName={props.DisplayName}
            Email={props.Email}
            PhoneNumber={props.PhoneNumber}
            onSave={props.onSave}
            RoleId={props.RoleId}
            UserId={props.UserId}
            ReturnCode={props.ReturnCode}
            CurrentPassword={props.CurrentPassword}
            NewPassword={props.NewPassword}
            EncryptedPassword={props.EncryptedPassword}
            roleTypeValues={props.roleTypeValues}
            Department={props.Department}
            departmentTypeValues={props.departmentTypeValues}
            handleSaveChangesClick={props.handleSaveChangesClick}
            onHandleClose={props.onHandleClose}
            handleCancelClickInfo={props.handleCancelClickInfo}
          />
        </TabContainer>
      )}

      {props.tabsValue === 1 && (
        <TabContainer>
          <ChangeAvatar
            disableChangeAvatarButton={props.disableChangeAvatarButton}
            Photo={props.Photo}
            onImageClick={props.onImageClick}
            handleChange={props.handleChange}
            onHandleClose={props.onHandleClose}
            onImageReset={props.onImageReset}
            handleReset={props.handleReset}
          />
        </TabContainer>
      )}
      {props.tabsValue === 2 && (
        <TabContainer>
          <ChangePasswordForm
            captureFingerPopUp={props.captureFingerPopUp}
            onHandleClose={props.onHandleClose}
            UserId={props.UserId}
            CurrentPassword={props.CurrentPassword}
            NewPassword={props.NewPassword}
            ReEnterNewPassword={props.ReEnterNewPassword}
            FingerId={props.FingerId}
            fingerTypeValues={props.fingerTypeValues}
            handleChangePassword={props.handleChangePassword}
            handleCaptureFingerClick={props.handleCaptureFingerClick}
            handleCancelClick={props.handleCancelClick}
          />
        </TabContainer>
      )}
    </div>
  );
};

export default MyProfileTabsForm;
