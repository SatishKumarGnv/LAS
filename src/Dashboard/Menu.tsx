import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";

import * as React from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

// import { url } from "src/Api_Integration/Config";

import {
  ILogOutvalues,
  INotificationValues,
  IPrivillegesMenuProps,
  IProfileProps
} from "src/DefaultLayout/HomePage";
// import ProposalForm from "src/Container/ProposalFormState";

export interface IMenuClick {
  menuExpanded: string;
  menuExpanded2: string;
  menuExpanded3: string;
  LAS: false;
  Masters: false;
  PTMS: false;
  UserManagement: false;
  onHandleMenuPanelChange(panel: string): void;
  onHandleMenuPanel2Change(
    panel: string,
    panel1: string,
    arr: ReadonlyArray<string>
  ): void;
  onHandleMenuPanel3Change(panel: string, panel2: string, panel3: string): void;

  handleSubMenuClick(urlPath: string): void;
}

const PathName = (text: string) => {
  if (text === "EmailFailedReport") {
    return "/page/misReports/EmailFailReport";
  } else if (text === "LoginAuditTrailReport") {
    return "/page/misReports/loginAuditTrail";
  } else if (text === "EmailSentReport") {
    return "/page/misReports/EmailSentReport";
  } else if (text === "LandDetailsSummary") {
    return "/page/misReports/capitalCityLandSummary";
  } else if (text === "CityWiseStatusReports") {
    return "/page/misReports/themeCityWiseApproval";
  } else if (text === "CityWiseRevenueReport") {
    return "/page/misReports/themeCitywiseRevenueReport";
  } else if (text === "WorkFlowActivityApplicationMapping") {
    return "/page/workflowConfiguration/workflow";
  } else if (text === "WorkFlowActivity") {
    return "/page/workflowConfiguration/workFlowActivity";
  } else if (text === "WorkFlowActivityUserMapping") {
    return "/page/workflowConfiguration/workFlowUser";
  } else if (text === "CreateNewUser") {
    return "/page/userManagement/createNewUserForm";
  } else if (text === "BulkPasswordReset") {
    return "/page/userManagement/bulkPasswordReset";
  } else if (text === "ChangeRoleToUser") {
    return "/page/userManagement/changeUserRoleForm";
  } else if (text === "AllUsers") {
    return "/page/userManagement/allUsers";
  } else if (text === "Privileges") {
    return "/page/masters/privilegesMaster";
  } else if (text === "DocumentTypes") {
    return "/page/masters/DocumentTypeMaster";
  } else if (text === "DocumnetMapping") {
    return "/page/masters/documentMapping";
  } else if (text === "AllocationType") {
    return "/page/masters/AllocationTypeMaster";
  } else if (text === "EmailTemplate") {
    return "/page/masters/emailTemplate";
  } else if (text === "Roles") {
    return "/page/masters/roleTypeMaster";
  } else if (text === "LandAreaUnits") {
    return "/page/masters/landAreaUnits";
  } else if (text === "UnitsConversion") {
    return "/page/masters/unitConversions";
  } else if (text === "Rules") {
    return "/page/masters/projectRules";
  } else if (text === "Rejections") {
    return "/page/masters/rejectionRoles";
  } else if (text === "AgreementType") {
    return "/page/masters/agreementTypeMaster";
  } else if (text === "DraftApplications") {
    return "/page/landAllocation/draftApplication";
  } else if (text === "SubmitApplications") {
    return "/page/landAllocation/submittedApplication";
  } else if (text === "ApprovedApplications") {
    return "/page/landAllocation/approvedApplications";
  } else if (text === "ApplicationSearch") {
    return "/page/landAllocation/applicationsearch";
  } else if (text === "ProposalForm") {
    return "/page/landAllocation/AllocationForm";
  } else if (text === "Land-Allocation") {
    return "/page/landAllocation/AllocationForm";
  } else if (text === "PropertyDepartment") {
    return "/page/ptmsmasters/propertydepartmentmaster";
  } else if (text === "PropertyType") {
    return "/page/ptmsmasters/propertytypemaster";
  } else if (text === "AmenityMaster") {
    return "/page/ptmsmasters/aminities";
  } else if (text === "CategoryOwnership") {
    return "/page/ptmsmasters/category";
  } else if (text === "NatureUsage") {
    return "/page/ptmsmasters/natureusage";
  } else if (text === "BuildingClassification") {
    return "/page/ptmsmasters/buildingclassification";
  } else if (text === "NewAssessment") {
    return "/page/ptms/newpropertyregistration";
  } else if (text === "AssessmentPropertyChange") {
    return "/page/ptms/propertychange";
  } else if (text === "PropertyTaxConfiguration") {
    return "/page/ptms/propertytaxconfiguration";
  } else if (text === "SubmitDraftAssessments") {
    return "/page/ptms/submitdraftassessments";
  } 
  else if (text === "PropertySearchPayTax") {
    return "/page/ptms/propertysearchpaytax";
  }   
   else if (text === "#") {
    return "#";
  }

  return "/page/";
};
const getImages = (text: string) => {
  if (text === "Masters") {
    return "/images/menumasters.png";
  } else if (text === "User-Management") {
    return "/images/management.png";
  } else if (text === "LAS") {
    return "/images/las.png";
  }
  return "/images/land-allocation.png";
};

const get3Boolean = (expandedThird: string, thirdArray: any) => {
  return thirdArray.find((s: any) => s.MenuText === expandedThird)
    ? true
    : false;
};

const Menu = (
  props: ILogOutvalues &
    INotificationValues &
    IProfileProps &
    IPrivillegesMenuProps &
    IMenuClick
) => {
  const item: any = localStorage.getItem("userDetails");

  let user;

  if (item) {
    user = JSON.parse(item);
  }

  return (
    <div className="side-menu">
      <div className="side-menu-header">
        <Link to="/page/dashboard">
          <img src="/images/logo-crda.jpg" />

          <h5 className=" menu-text">Land Allocation System</h5>
        </Link>
      </div>

      <div className="user-details">
        <img
          //  src={`${url}ImageFiles/UserImages/${props.ProfileDetails.Photo}`}

          src={props.Photo1}
          className="user-img"
        />

        <div className="user-text menu-text">
          <label className="user-name ">
            {props.ProfileDetails.DisplayName}
          </label>
        </div>
      </div>

      <ul className="menu-list mainmenu">
        <li className="btn active">
          <Link to="/page/dashboard">
            <img src="/images/dashboard.png" />

            <span className="menu-text"> Dashboard</span>
          </Link>
        </li>

        {user && user.RoleId ? "/page" : ""}

        {user && user.model.RoleId ? (
          <div>
            {props.menuItems.map((x: any, index: number) => (
              <ul className="super-admin-list" key={index}>
                <li>
                  {/* <span className="list-item ">
                    <img src="/images/land-allocation.png" />

                    <a className="menu-text">{x.MenuText}</a>
                  </span> */}
                  <div>
                    <ul className="group-collapse1">
                      <ExpansionPanel
                        key={index}
                        className="master-list"
                        expanded={
                          props.menuExpanded === x.MenuText ? true : false
                        }
                        // tslint:disable-next-line:jsx-no-lambda
                        onChange={() =>
                          props.onHandleMenuPanelChange(x.MenuText)
                        }
                      >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>
                            <img src={getImages(x.MenuText)} />
                            {x.MenuText}
                          </Typography>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>
                          {x.List &&
                            x.List.map((y: any, r: number) => {
                              return y.List && y.List.length === 0 ? (
                                <div key={r}>
                                  <li className="btn active">
                                    <a
                                      // tslint:disable-next-line:jsx-no-lambda
                                      onClick={event =>
                                        props.handleSubMenuClick(
                                          PathName(y.ActionName)
                                        )
                                      }
                                    >
                                      <img src="/images/menu-arrow.png" />
                                      <span className="menu-text">
                                        {y.MenuText}
                                      </span>
                                    </a>
                                  </li>
                                </div>
                              ) : (
                                <ExpansionPanel
                                  className="master-list-two"
                                  key={r}
                                  expanded={
                                    props.menuExpanded2 === y.MenuText ||
                                    get3Boolean(props.menuExpanded3, y.List)
                                      ? true
                                      : false
                                  }
                                  onClick={
                                    // tslint:disable-next-line:jsx-no-lambda
                                    () => {
                                      props.onHandleMenuPanel2Change(
                                        x.MenuText,
                                        y.MenuText,
                                        y.List.map((s: any) => s.MenuText)
                                      );
                                    }
                                  }
                                >
                                  <ExpansionPanelSummary
                                    className="list-content"
                                    expandIcon={<ExpandMoreIcon />}
                                  >
                                    {/* tslint:disable-next-line:jsx-no-lambda*/}
                                    <Typography>{y.MenuText}</Typography>
                                  </ExpansionPanelSummary>

                                  <ExpansionPanelDetails>
                                    {y.List &&
                                      y.List.map((z: any, k: number) => (
                                        <li className="btn active" key={k}>
                                          <a
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onClick={() => {
                                              props.handleSubMenuClick(
                                                PathName(z.ActionName)
                                              );
                                              props.onHandleMenuPanel3Change(
                                                x.MenuText,
                                                y.MenuText,
                                                z.MenuText
                                              );
                                            }}
                                          >
                                            <img src="/images/menu-arrow.png" />
                                            <span>{z.MenuText}</span>
                                          </a>
                                        </li>
                                      ))}
                                  </ExpansionPanelDetails>
                                </ExpansionPanel>
                              );
                            })}

                          {/* </Typography> */}
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </ul>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ) : null}

        <li>
          {/* tslint:disable-next-line:jsx-no-lambda*/}
          <a onClick={event => props.handleClick(event)}>
            {" "}
            <img src="/images/notifications.png" />
            <span className="menu-text"> Notifications</span>
          </a>
        </li>

        <li>
          <Link to="/page/myProfile">
            {" "}
            {<img src="/images/user-two.png" />}
            <span className="menu-text"> My Profile</span>
          </Link>
        </li>

        {
          <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">Notifications</DialogTitle>

            <DialogContent>
              You Have {props.notifications.length} Pending Tasks
              <a className="view-link" href="/page/dashboard">
                View All
              </a>
            </DialogContent>

            <div id="simple-dialog-title">
              {props.notifications.length !== 0 ? (
                props.notifications.map((x: any, id: number) => (
                  <li key={id}>{x.ApplicationId}</li>
                ))
              ) : (
                <div />
              )}
            </div>
          </Dialog>
        }

        <li>
          <Link to="/login">
            <img src="/images/logout.png" />
            <Button className="menu-logout-btn" onClick={props.handleLogOut}>
              Logout
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
