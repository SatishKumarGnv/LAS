import * as React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as moment from "moment";

import {
  Checkbox,
  DialogContent,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Formik, FormikProps } from "formik";

import { ISearchValues } from "src/DefaultLayout/HomePage";
import {
  IapplicationProjectRulesValues,
  IGoValues,
  IMileStoneDropDownValues,
  IMileStoneValues
} from "src/DefaultLayout/HomePage";
import {
  IImagevalues,
  IProcessCommentsValues,
  IprojectRuleProps,
  ISelectDepartmentvalues,
  ITreeFormValues
} from "../DefaultLayout/HomePage";

export interface IApplicationFormProps {
  readonly uploadSuccessPopUp: boolean;
  readonly forwardOpen: boolean;
  readonly values: ReadonlyArray<ISearchValues>;
  readonly parcelValues: ReadonlyArray<any>;
  readonly isRuleSatisfied: boolean;
  handleinitialChange(event: any): void;
  handleInitialAllocatedLandChange(event: any): void;
  handleMilestoneBasedParcelNumberChange(event: any): void;
  handleMilestoneSurveyNumberChange(event: any, index: number): void;
}

const ApplicationInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<
  ITreeFormValues & IApplicationFormProps & IprojectRuleProps & IImagevalues
>) => {
  const item: any = localStorage.getItem("userDetails");
  let user: any;
  let UserName: string;
  let UserId: number;
  if (item) {
    user = JSON.parse(item);
    UserId = user !== null || user !== undefined ? user.model.UserId : 0;
    UserName = user !== null || user !== undefined ? user.model.UserName : 0;
  } else {
    UserId = 0;
    UserName = "";
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="group-btn-grid">
          <button className="group-button">
            {" "}
            <img src="/images/preview.png" />
            Preview
          </button>
          <button
            type="button"
            className="group-button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onExpandAll()}
          >
            <img src="/images/expand.png" />
            Expand All
          </button>
          <button
            type="button"
            className="group-button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onCollapseAll()}
          >
            <img src="/images/collapse.png" />
            Collapse All
          </button>
        </div>
        <div className="group-collapse">
          <ExpansionPanel
            id="panel1"
            expanded={values.panel1 || values.expanded === "panel1"}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={() => values.onHandlePanelChange("panel1")}
          >
            <ExpansionPanelSummary
              className="collapse-add"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                className={
                  values.panel1 || (values.expanded === "panel1") === false
                    ? "collapse-title"
                    : "collapse-btn"
                }
              >
                Organization Details
              </Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <Typography>
                <div className="collapse-card">
                  <div className="child-card">
                    <h4>Land allocation to</h4>
                    <TextField
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={handleChange}
                      id="AllocationTo"
                      margin="normal"
                      value={
                        values.searchArray &&
                        values.searchArray.map(
                          (x: ISearchValues) => x.AllocationTo
                        )
                      }
                    />
                  </div>
                  <div className="child-card">
                    <h4>Allocation type</h4>
                    <TextField
                      onChange={handleChange}
                      id="AllocationTypeName"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AllocationTypeName
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Organization Name</h4>
                    <TextField
                      onChange={handleChange}
                      id="OrganiztionName"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.OrganiztionName
                      )}
                    />
                  </div>

                  <div className="child-card">
                    <h4>Phone Number</h4>
                    <TextField
                      onChange={handleChange}
                      id="OrgPhoneNumber"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.OrgPhoneNumber
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Email Address</h4>
                    <TextField
                      onChange={handleChange}
                      id="OrgEmailid"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.OrgEmailid
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>House No, Building Name</h4>
                    <TextField
                      onChange={handleChange}
                      id="OrgAddress1"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.OrgAddress1
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Street Name, Locality</h4>
                    <TextField
                      onChange={handleChange}
                      id="OrgAddress2"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.OrgAddress2
                      )}
                    />
                  </div>
                  {values.searchArray &&
                  values.searchArray.filter(
                    (x: ISearchValues) => x.AllocationTo !== "Government"
                  )[0] ? (
                    <div className="child-card-flex">
                      <div className="child-card-collapse">
                        <h4>Registration Number</h4>
                        <TextField
                          onChange={handleChange}
                          id="OrgRegistrationNumber"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.OrgRegistrationNumber
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>GST Number</h4>
                        <TextField
                          onChange={handleChange}
                          id="OrgGST"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.OrgGST
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Country</h4>
                        <TextField
                          id="OrgCountryName"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.OrgCountryName
                          )}
                        />
                      </div>
                      <br />
                      <div className="child-card-collapse">
                        <h4>State</h4>
                        <TextField
                          onChange={handleChange}
                          id="OrgStateName"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.OrgStateName
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>City</h4>
                        <TextField
                          onChange={handleChange}
                          id="OrgCityName"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.OrgCityName
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Zip Code</h4>
                        <TextField
                          onChange={handleChange}
                          id="OrgZipCode"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.OrgZipCode
                          )}
                        />
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            id="panel2"
            expanded={values.panel2 || values.expanded === "panel2"}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={() => values.onHandlePanelChange("panel2")}
          >
            <ExpansionPanelSummary
              className="collapse-add"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                className={
                  values.panel2 || (values.expanded === "panel2") === false
                    ? "collapse-title"
                    : "collapse-btn"
                }
              >
                Authorization Details
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <div className="collapse-card">
                  <div className="child-card">
                    <h4>Authorized person name</h4>
                    <TextField
                      onChange={handleChange}
                      id="AuthPersonName"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AuthPersonName
                      )}
                    />
                    {"  "}
                  </div>
                  <div className="child-card">
                    <h4>Relation Type</h4>
                    <TextField
                      onChange={handleChange}
                      id="RelationTypeInName"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.RelationTypeInName
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Relation Name</h4>
                    <TextField
                      onChange={handleChange}
                      id="RelationName"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.RelationName
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Date Of Birth</h4>
                    <TextField
                      onChange={handleChange}
                      id="DateOfBirth"
                      margin="normal"
                      value={values.searchArray.map((x: ISearchValues) =>
                        moment(x.DateOfBirth).format("YYYY-MM-DD")
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Email Id for future communication</h4>
                    <TextField
                      onChange={handleChange}
                      id="AuthEmailId"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AuthEmailId
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Phone Number</h4>
                    <TextField
                      onChange={handleChange}
                      id="AuthPhoneNumber"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AuthPhoneNumber
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>House No,Building Name</h4>
                    <TextField
                      onChange={handleChange}
                      id="AuthAddress1"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AuthAddress1
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Street Name, Locality</h4>
                    <TextField
                      onChange={handleChange}
                      id="AuthAddress2"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AuthAddress2
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Photo Id Type</h4>
                    <TextField
                      onChange={handleChange}
                      id="AuthPhotoIdType"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AuthPhotoIdType
                      )}
                    />
                  </div>
                  <div className="child-card text-field-width">
                    <h4>Photo Id Number</h4>
                    <TextField
                      id="AuthPhotoIdNumber"
                      margin="normal"
                      value={
                        values.searchArray.map(
                          (x: ISearchValues) => x.AuthPhotoIdNumber
                        )[0]
                      }
                    />
                  </div>
                  <div>
                    <h4>Photo Id Path</h4>
                    <img
                      className="choose-img-two"
                      id="images"
                      src={
                        "http://" +
                        values.searchArray.map(
                          (x: ISearchValues) => x.AuthPhotoIdPath
                        )[0]
                      }
                    />
                    {/* <input
                      accept="image/png, image/jpeg"
                      id="images"
                      type="file"
                      name="images"
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={evt => values.handleImageChange(evt)}
                    /> */}
                  </div>
                </div>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            id="panel3"
            expanded={values.panel3 || values.expanded === "panel3"}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={() => values.onHandlePanelChange("panel3")}
          >
            <ExpansionPanelSummary
              className="collapse-add"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                className={
                  values.panel3 || (values.expanded === "panel3") === false
                    ? "collapse-title"
                    : "collapse-btn"
                }
              >
                Project Details
              </Typography>
            </ExpansionPanelSummary>

            <div className="collapse-card collapse-card-new">
              {/* <div className="child-card">
            <h4>City Type</h4>
            <TextField
              id="AuthPhotoIdNumber"
              defaultValue="City Type"
              margin="normal"
              value={values.searchArray.map(
                (x: ISearchValues) => x.AuthPhotoIdNumber
              )}
            />
            {"  "}
          </div> */}
              <div className="child-card">
                <h4>Project Name</h4>
                <TextField
                  onChange={handleChange}
                  id="ProjectTitle"
                  margin="normal"
                  value={values.searchArray.map(
                    (x: ISearchValues) => x.ProjectTitle
                  )}
                />
                {"  "}
              </div>
              <div className="child-card">
                <h4>Project Purpose</h4>
                <TextField
                  onChange={handleChange}
                  id="ProjPurpose"
                  margin="normal"
                  value={values.searchArray.map(
                    (x: ISearchValues) => x.ProjPurpose
                  )}
                />
              </div>
              <div className="child-card">
                <h4>Project Description</h4>
                <TextField
                  multiline={true}
                  onChange={handleChange}
                  id="ProjDescription"
                  margin="normal"
                  value={values.searchArray.map(
                    (x: ISearchValues) => x.ProjDescription
                  )}
                />
              </div>

              {/* <TextField
              id="name"
              margin="normal"
              value={values.searchArray.map(x => x.AuthPhotoIdNumber)}
            /> */}
            </div>
          </ExpansionPanel>

          <ExpansionPanel
            id="panel4"
            expanded={values.panel4 || values.expanded === "panel4"}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={() => values.onHandlePanelChange("panel4")}
          >
            <ExpansionPanelSummary
              className="collapse-add"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                className={
                  values.panel4 || (values.expanded === "panel4") === false
                    ? "collapse-title"
                    : "collapse-btn"
                }
              >
                Land Allocation Details
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <div className="collapse-card">
                  <div className="child-card">
                    <h4>Land Allocation Types</h4>
                    <TextField
                      onChange={handleChange}
                      id="LandAllocationType"
                      margin="normal"
                      value={
                        values.searchArray.map(
                          (x: ISearchValues) => x.LandAllocationType
                        )[0]
                      }
                    />

                    {"  "}
                  </div>

                  <div className="child-card">
                    <h4> Allocation available land area(in Acres)</h4>
                    <TextField
                      onChange={handleChange}
                      id="AvailableLandArea"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AvailableLandArea
                      )}
                    />
                    {"  "}
                  </div>
                  <div className="child-card">
                    <h4>Requested Land Area(in Acres)</h4>
                    <TextField
                      onChange={handleChange}
                      id="RequiredLandArea"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.RequiredLandArea
                      )}
                    />
                    {/* <label> Lease Details</label> */}
                  </div>
                  <div className="child-card">
                    <h4>Register Or Not Register</h4>
                    <TextField
                      onChange={handleChange}
                      id="RegisteredOrNot"
                      margin="normal"
                      value={
                        values.searchArray.map(
                          (x: ISearchValues) => x.RegisteredOrNot
                        )[0]
                          ? "Registered"
                          : "NotRegistered"
                      }
                    />
                  </div>
                  {/* <div className="child-card">
                    <h4>Initial Allocation Land Area(in Acres)</h4>
                    <TextField
                      onChange={handleChange}
                      id="InitialAllocationInAcres"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.InitialAllocationInAcres
                      )}
                    />
                  </div> */}

                  <div className="child-card">
                    <h4>Lease Tenure</h4>
                    <TextField
                      onChange={handleChange}
                      id="TenurePeriod"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.TenurePeriod
                      )}
                      // defaultValue="Lease Tenure"
                    />
                    {"  "}
                  </div>
                  <div className="child-card ">
                    <h4>Total Lease amount</h4>
                    <TextField
                      onChange={handleChange}
                      id="LeaseAmountperAnnum"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.TotalLandCost
                      )}
                    />
                  </div>
                  <div className="child-card ">
                    <h4>Total Land Cost</h4>
                    <TextField
                      onChange={handleChange}
                      id="TotalLandCost"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.TotalLandCost
                      )}
                    />
                  </div>
                  <div className="child-card ">
                    <h4>Amount Paid</h4>
                    <TextField
                      onChange={handleChange}
                      id="AmountPaid"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AmountPaid
                      )}
                    />
                  </div>
                  <div className="child-card ">
                    <h4>Amount To Be Paid</h4>
                    <TextField
                      onChange={handleChange}
                      id="AmountTobePaid"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AmountTobePaid
                      )}
                    />
                    {"  "}
                  </div>
                  <div className="child-card">
                    <h4>Lease Start Date</h4>
                    <TextField
                      onChange={handleChange}
                      id="LeaseStartDate"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.LeaseStartDate
                      )}
                    />
                    {"  "}
                  </div>
                  <div className="child-card">
                    <h4>Lease End Date</h4>
                    <TextField
                      onChange={handleChange}
                      id="LeaseEndDate"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.LeaseEndDate
                      )}
                    />
                  </div>
                </div>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            id="panel5"
            expanded={values.panel5 || values.expanded === "panel5"}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={() => values.onHandlePanelChange("panel5")}
          >
            <ExpansionPanelSummary
              className="collapse-add"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                className={
                  values.panel5 || (values.expanded === "panel5") === false
                    ? "collapse-title"
                    : "collapse-btn"
                }
              >
                Planning Department
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <div className="collapse-card ">
                  <div className="child-card">
                    <h4>At Time Of Allocation Available Land Area(in Acres)</h4>

                    <TextField
                      onChange={handleChange}
                      // tslint:disable-next-line:jsx-no-lambda
                      // onChange={(event: any) => {
                      //   handleChange(event);
                      //   values.handleinitialChange(event);
                      // }}
                      id="AvailableLandArea"
                      name="AvailableLandArea"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.AvailableLandArea
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Requested Land Area(in Acres)</h4>
                    <TextField
                      onChange={handleChange}
                      id="RequiredLandArea"
                      name="RequiredLandArea"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.RequiredLandArea
                      )}
                    />
                  </div>

                  {UserName === "PlanningOfficer" && UserId === 31 ? (
                    <div className="width-grid title-row">
                      <div className="child-card">
                        <h4>
                          Allocated Land Area(in Acres){" "}
                          <span className="star"> *</span>
                        </h4>

                        <TextField
                          onChange={handleChange}
                          // tslint:disable-next-line:jsx-no-lambda
                          // onChange={(event: any) => {
                          //   handleChange(event);
                          //   values.handleinitialChange(event);
                          // }}
                          id="LandAreaAllotedByEstates"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.LandAreaAllotedByEstates
                          )}
                        />
                      </div>
                      <div className="child-card">
                        <h4>Parcel Number</h4>
                        <TextField
                          // tslint:disable-next-line:jsx-no-lambda
                          onChange={event => {
                            handleChange(event);
                            values.handleParcelNumberChange(event);
                          }}
                          id="ParcelId"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.ParcelId
                          )}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="child-card-two">
                        <h4>Allocated Land Area(in Acres)</h4>

                        <TextField
                          id="initialLandArea"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.InitialAllocationLandSize
                          )}
                        />
                      </div>
                    </div>
                  )}

                  {/* <div className="child-card">
                <h4>Allocated Land Area(in Acres)</h4>
                <TextField
                  id="name"
                  margin="normal"
                  // value={values.searchArray.map(x => x.LeaseEndDate)}
                />
              </div> */}

                  {UserName === "PlanningOfficer" && UserId === 31 ? (
                    <div className="child-card-two map-btn-grid">
                      <Button
                        className="map-btn"
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={event => {
                          // this.values.history.push("/map");
                          // this.values.history.push("/map");
                          values.handleMapOpenClick();
                        }}
                      >
                        MAP
                      </Button>
                    </div>
                  ) : (
                    <div />
                  )}
                  {values.searchArray &&
                  values.searchArray.map(
                    (x: ISearchValues) => x.LandAllocationType
                  )[0] !== "Complete" ? (
                    <div className="child-card-flex-two ">
                      <div className="child-card">
                        <h4>Initial Requested Land Area(in Acres)</h4>
                        <TextField
                          // tslint:disable-next-line:jsx-no-lambda
                          // onChange={event => {
                          //   handleChange(event);
                          //   values.handleInitialLandChange(event);
                          // }}
                          id="InitialAllocationInAcres"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.InitialAllocationInAcres
                          )}
                        />
                      </div>
                      <div className="child-card">
                        <h4>Initial Allocated Land(In Acres)</h4>
                        <TextField
                          // tslint:disable-next-line:jsx-no-lambda
                          onChange={event => {
                            handleChange(event);
                            values.handleInitialAllocatedLandChange(event);
                          }}
                          id="InitialAllocatedSurveyNumber"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.InitialAllocatedSurveyNumber
                          )}
                        />
                      </div>
                      <div className="child-card">
                        <h4>Initial Parcel Number</h4>
                        <TextField
                          // tslint:disable-next-line:jsx-no-lambda
                          // onChange={event => {
                          //   handleChange(event);
                          //   values.handleParcelChange(event);
                          // }}
                          id="InitialAllocatedParcelNumber"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.InitialAllocatedParcelNumber
                          )}
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {UserName === "PlanningOfficer" && UserId === 31 ? (
                    <div className="width-grid-one">
                      <div className="violet-color-title">
                        <h3>GOM Details</h3>
                      </div>
                      {values.ProjectDetailsArray &&
                      values.ProjectDetailsArray.length > 0
                        ? values.ProjectDetailsArray.map(
                            (x: IGoValues, index: number) => (
                              <React.Fragment key={index}>
                                <div className="child-card-flex-two">
                                  <div className="child-card-two">
                                    <h4>GOM Number</h4>

                                    <TextField
                                      type="text"
                                      name={`ProjectDetailsArray.${index}.GoNumber`}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      // onChange={event => {
                                      //   handleChange(event);
                                      //   values.handleGoNumberChange(
                                      //     event,
                                      //     x,
                                      //     index
                                      //   );
                                      // }}
                                      onBlur={handleBlur}
                                      value={x.GoNumber}
                                    />
                                  </div>
                                  <div className="child-card-two">
                                    <h4>GOM Date</h4>
                                    <TextField
                                      name={`ProjectDetailsArray.${index}.GoDate`}
                                      type="date"
                                      id="GoDate"
                                      value={x.GoDate}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      // onChange={event => {
                                      //   handleChange(event);
                                      //   values.handleGoDateChange(
                                      //     event,
                                      //     x,
                                      //     index
                                      //   );
                                      // }}
                                    />
                                  </div>
                                </div>
                              </React.Fragment>
                            )
                          )
                        : null}
                    </div>
                  ) : (
                    ""
                  )}
                  {values.searchArray &&
                  values.searchArray.map(
                    (x: ISearchValues) => x.LandAllocationType
                  )[0] !== "Complete" ? (
                    <div className="width-grid-one">
                      <div className="violet-color-title">
                        <h3>Milestone Details</h3>
                      </div>
                      <div className="child-card-data">
                        {values.MileStoneArray &&
                        values.MileStoneArray.length > 0
                          ? values.MileStoneArray.map(
                              (x: IMileStoneValues, index: number) => (
                                <div
                                  key={index}
                                  className="child-card-flex-two"
                                >
                                  <h3 className="child-card-flex-two">
                                    MileStone
                                    {index + 1}
                                  </h3>

                                  <div className="child-card-two">
                                    <h4>MileStone Name</h4>

                                    <TextField
                                      type="number"
                                      name={`MileStoneArray.${index}.RuleId`}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      // onChange={event => {
                                      //   handleChange(event);
                                      //   values.handleLandReleaseChange(
                                      //     event,
                                      //     index
                                      //   );
                                      // }}
                                      onBlur={handleBlur}
                                      value={x.RuleId}
                                    />
                                  </div>
                                  <div className="child-card-two">
                                    <h4>
                                      Land Release(In Acres)
                                      <span className="star"> *</span>
                                    </h4>

                                    <TextField
                                      type="number"
                                      name={`MileStoneArray.${index}.LandRelease`}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      // onChange={event => {
                                      //   handleChange(event);
                                      //   values.handleLandReleaseChange(
                                      //     event,
                                      //     index
                                      //   );
                                      // }}
                                      onBlur={handleBlur}
                                      value={x.LandRelease}
                                    />
                                  </div>
                                  <div className="child-card-two">
                                    <h4>Effective Date Of Completion</h4>

                                    <TextField
                                      type="date"
                                      // id="date"
                                      value={x.DateOfCompletion}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      // onChange={event => {
                                      //   handleChange(event);
                                      //   values.handleDateOfCompletionChange(
                                      //     event,
                                      //     index
                                      //   );
                                      // }}
                                      name={`MileStoneArray.${index}.DateOfCompletion`}
                                    />
                                  </div>
                                  <div className="child-card-two">
                                    <h4>
                                      Activities Planned to be Completed During
                                      this period
                                    </h4>
                                    {x.mileStoneValues
                                      .filter((y: IMileStoneDropDownValues) =>
                                        x.ProjectRuleTypes.find(
                                          (z: string) => z === y.RuleName
                                        )
                                      )
                                      .map(y => (
                                        <div className="title-row">
                                          <img
                                            className="select-img"
                                            src="/images/radio.png"
                                          />
                                          <li>{y.RuleName}</li>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              )
                            )
                          : null}
                      </div>

                      {UserName === "PlanningOfficer" &&
                      values.searchArray &&
                      (values.searchArray.some(
                        x => x.AllocationTypeName === "Lease1"
                      ) ||
                        values.searchArray.some(
                          x => x.AllocationTypeName === "Lease"
                        )) ? (
                        <div className="child-card">
                          <h4>Milestone Based Parcel Number(in Acres)</h4>
                          <TextField
                            // tslint:disable-next-line:jsx-no-lambda
                            onChange={event => {
                              handleChange(event);
                              values.handleMilestoneBasedParcelNumberChange(
                                event
                              );
                            }}
                            id="ParcelId"
                            margin="normal"
                            value={values.parcelValues.map(x => x.ParcelId)}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <div>
                          <h3>
                            Activities Planned to be Completed During this
                            period
                          </h3>
                          <li>
                            {values.applicationProjectRules &&
                              values.applicationProjectRules.map(
                                (x: IapplicationProjectRulesValues) =>
                                  x.RuleName
                              )}
                          </li>
                        </div> */}
                    </div>
                  ) : (
                    <div />
                  )}

                  {// UserId === 31 || UserId === 32
                  UserName === "PlanningOfficer" ? (
                    <div className="child-card-flex">
                      <div className="child-card-collapse">
                        <h4>District</h4>
                        <TextField
                          onChange={handleChange}
                          id="District"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.District
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Mandal</h4>
                        <TextField
                          onChange={handleChange}
                          id="Mandal"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Mandal
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Village</h4>
                        <TextField
                          onChange={handleChange}
                          id="Village"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Village
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Township</h4>
                        <TextField
                          onChange={handleChange}
                          id="TownShip"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Township
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Sector</h4>
                        <TextField
                          onChange={handleChange}
                          id="Sector"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Sector
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Colony</h4>
                        <TextField
                          onChange={handleChange}
                          id="Colony"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Colony
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Block</h4>
                        <TextField
                          onChange={handleChange}
                          id="Block"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Block
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Plot</h4>
                        <TextField
                          onChange={handleChange}
                          id="Plot"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Plot
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Survey Number</h4>
                        <TextField
                          onChange={handleChange}
                          id="SurveyNumber"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.SurveyNumber
                          )}
                        />
                      </div>
                      <div className="child-card-collapse">
                        <h4>Boundaries</h4>
                        <TextField
                          onChange={handleChange}
                          id="Boundaries"
                          margin="normal"
                          value={values.searchArray.map(
                            (x: ISearchValues) => x.Boundaries
                          )}
                        />
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                {UserId === 31 ? (
                  <div className="child-card">
                    <h4> Project Rules </h4>

                    <ul>
                      <li>
                        {values.applicationProjectRules &&
                          values.applicationProjectRules.map(
                            (x: IapplicationProjectRulesValues, id: number) => (
                              <div>
                                <div className="title-row">
                                  <img
                                    className="select-img"
                                    src="/images/radio.png"
                                  />
                                  <li>{x.RuleName}</li>
                                </div>
                                <FormControlLabel
                                  className="comment-txt-select"
                                  key={id}
                                  control={
                                    <Checkbox
                                      checked={x.IsVerified}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      onChange={event => {
                                        values.handleRuleSatisfiedChange(
                                          event,
                                          x.RuleId
                                        );
                                      }}
                                      // value={`${x.IsVerified}`}
                                    />
                                  }
                                  label="Is the Rule Satisfied?"
                                />
                                {x.IsVerified === true ? (
                                  <div>
                                    {values.mileStoneValues &&
                                    values.mileStoneValues
                                      .filter((y: IMileStoneDropDownValues) =>
                                        values.applicationProjectRules.find(
                                          (z: IapplicationProjectRulesValues) =>
                                            z.RuleName === y.RuleName
                                        )
                                      )
                                      .map(
                                        (y: IMileStoneDropDownValues) =>
                                          y.ProjRuleTypeId
                                      )[0] === 2 ? (
                                      <div className="child-card">
                                        <h2>
                                          Targetted value based on Role
                                          <span className="star"> *</span>
                                        </h2>
                                        <TextField
                                          onChange={handleChange}
                                          name="targetValue"
                                          defaultValue={values.targetValue}
                                          // className={classes.textField}
                                          margin="normal"
                                        />
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    <div className="child-card">
                                      <h4 />
                                      <img
                                        id="imageOfUser"
                                        className="Upload-grid-img"
                                        src={x.DocumentPath}
                                      />

                                      <input
                                        accept="image/png, image/jpeg"
                                        id="ruleImage"
                                        type="file"
                                        name="ruleImage"
                                        // tslint:disable-next-line:jsx-no-lambda
                                        onChange={evt =>
                                          values.handleRuleImageChange(
                                            evt,
                                            x.RuleId
                                          )
                                        }
                                      />
                                      <div className="forgot-container">
                                        <label htmlFor="flat-button-file">
                                          <Button
                                            className={
                                              !x.uploadPopUp
                                                ? "disable-btn"
                                                : "main-btn"
                                            }
                                            color="primary"
                                            disabled={!x.uploadPopUp}
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onClick={evt =>
                                              values.handleAppFormUploadImageClick(
                                                evt,
                                                x.DocumentPath,
                                                x.RuleId
                                              )
                                            }
                                            component="span"
                                          >
                                            Upload
                                          </Button>
                                        </label>
                                        <label htmlFor="flat-button-file">
                                          <Button
                                            className={
                                              !x.disabledeleteButton
                                                ? "disable-btn"
                                                : "main-btn"
                                            }
                                            color="primary"
                                            disabled={!x.disabledeleteButton}
                                            // tslint:disable-next-line:jsx-no-lambda
                                            onClick={evt =>
                                              values.handleRemoveImageClick(
                                                x.RuleId,
                                                document.getElementById(
                                                  "ruleImage"
                                                )
                                              )
                                            }
                                            component="span"
                                          >
                                            Delete
                                          </Button>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="child-card">
                                      {x.uploadSuccessPopUp ? (
                                        <FormControlLabel
                                          className="comment-txt-select"
                                          key={id}
                                          control={
                                            <Checkbox
                                              checked={x.IsDocumentVerified}
                                              // tslint:disable-next-line:jsx-no-lambda
                                              onClick={event =>
                                                values.handleDocumentVerifiedChange(
                                                  event,
                                                  x.RuleId
                                                )
                                              }
                                              // value={x.isDocumentVerified}
                                              color="primary"
                                            />
                                          }
                                          label="is Document Verified"
                                        />
                                      ) : (
                                        <div />
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  <div />
                                )}
                              </div>
                            )
                          )}
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="child-card">
                    <h4> Project Rules </h4>

                    <ul>
                      <li>
                        {values.applicationProjectRules &&
                          values.applicationProjectRules.map(
                            (x: IapplicationProjectRulesValues, id: number) => (
                              <div>
                                <div className="title-row">
                                  <img
                                    className="select-img"
                                    src="/images/radio.png"
                                  />
                                  <li>{x.RuleName}</li>
                                </div>
                                <FormControlLabel
                                  className="comment-txt-select"
                                  key={id}
                                  control={
                                    <Checkbox
                                      checked={x.IsVerified}
                                      // tslint:disable-next-line:jsx-no-lambda
                                      // onChange={event => {
                                      //   values.handleRuleSatisfiedChange(
                                      //     event,
                                      //     x.RuleId
                                      //   );
                                      // }}
                                      // value={`${x.IsVerified}`}
                                    />
                                  }
                                  label="Is the Rule Satisfied?"
                                />
                                {x.IsVerified === true ? (
                                  <div>
                                    {values.mileStoneValues &&
                                    values.mileStoneValues
                                      .filter((y: IMileStoneDropDownValues) =>
                                        values.applicationProjectRules.find(
                                          (z: IapplicationProjectRulesValues) =>
                                            z.RuleName === y.RuleName
                                        )
                                      )
                                      .map(
                                        (y: IMileStoneDropDownValues) =>
                                          y.ProjRuleTypeId
                                      )[0] === 2 ? (
                                      <div className="child-card">
                                        <h2>
                                          Targetted value based on Role
                                          <span className="star"> *</span>
                                        </h2>
                                        <TextField
                                          onChange={handleChange}
                                          name="targetValue"
                                          defaultValue={values.targetValue}
                                          // className={classes.textField}
                                          margin="normal"
                                        />
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    <div className="child-card">
                                      <h4 />
                                      <img
                                        id="ruleImage"
                                        className="Upload-grid-img"
                                        src={x.DocumentPath}
                                      />

                                      <input
                                        accept="image/png, image/jpeg"
                                        id="ruleImage"
                                        type="file"
                                        name="ruleImage"
                                        // tslint:disable-next-line:jsx-no-lambda
                                        // onChange={evt =>
                                        //   values.handleRuleImageChange(
                                        //     evt,
                                        //     x.RuleId
                                        //   )
                                        // }
                                      />

                                      <label htmlFor="flat-button-file">
                                        <Button
                                          className="map-btn"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          // onClick={evt =>
                                          //   values.handleAppFormUploadImageClick(
                                          //     evt,
                                          //     x.DocumentPath,
                                          //     x.RuleId
                                          //   )
                                          // }
                                          component="span"
                                        >
                                          Upload
                                        </Button>
                                      </label>
                                    </div>
                                    <div className="child-card">
                                      {x.DocumentPath !== "" ? (
                                        <FormControlLabel
                                          className="comment-txt-select"
                                          key={id}
                                          control={
                                            <Checkbox
                                              checked={x.IsDocumentVerified}
                                              // tslint:disable-next-line:jsx-no-lambda
                                              // onClick={event =>
                                              //   values.handleDocumentVerifiedChange(
                                              //     event,
                                              //     x.RuleId
                                              //   )
                                              // }
                                              // value={x.isDocumentVerified}
                                              color="primary"
                                            />
                                          }
                                          label="is Document Verified"
                                        />
                                      ) : (
                                        <div />
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  <div />
                                )}
                              </div>
                            )
                          )}
                      </li>
                    </ul>
                  </div>
                )}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            id="panel6"
            expanded={values.panel6 || values.expanded === "panel6"}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={() => values.onHandlePanelChange("panel6")}
          >
            <ExpansionPanelSummary
              className="collapse-add"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                className={
                  values.panel6 || (values.expanded === "panel6") === false
                    ? "collapse-title"
                    : "collapse-btn"
                }
              >
                Survey Department
              </Typography>
            </ExpansionPanelSummary>

            <div className="collapse-card">
              <div className="child-card">
                <h4>Allocated Land Area(In Acres)</h4>
                <TextField
                  onChange={handleChange}
                  id="name"
                  margin="normal"
                  // value={values.searchArray.map(x => x.LeaseEndDate)}
                />
                {"  "}
              </div>
              <div className="child-card">
                <h4>Parcel Number</h4>
                {UserName === "PlanningOfficer" &&
                values.searchArray &&
                (values.searchArray.some(
                  x => x.AllocationTypeName === "Lease1"
                ) ||
                  values.searchArray.some(
                    x => x.AllocationTypeName === "Lease"
                  )) &&
                UserId === 31 ? (
                  <TextField
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={(event: any) => {
                      {
                        handleChange(event);
                        values.handleParcelChange(event);
                      }
                    }}
                    id="ParcelId"
                    margin="normal"
                    value={values.searchArray.map(
                      (x: ISearchValues) => x.ParcelId
                    )}
                  />
                ) : (
                  <TextField
                    // tslint:disable-next-line:jsx-no-lambda

                    id="ParcelId"
                    margin="normal"
                    value={values.searchArray.map(
                      (x: ISearchValues) => x.ParcelId
                    )}
                  />
                )}
                {"  "}
              </div>
              {UserName === "LandsOfficer" ? (
                <div>
                  <div className="child-card">
                    <h4>
                      Survey Number <span className="star"> *</span>
                    </h4>
                    <TextField
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={event => {
                        handleChange(event);
                        values.handleSurveyNumberChange(event);
                      }}
                      id="SurveyNumber"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.SurveyNumber
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>
                      Bhudhaar Number <span className="star"> *</span>
                    </h4>
                    <TextField
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={event => {
                        handleChange(event);
                        values.handleBhudhaarNumberChange(event);
                      }}
                      id="Bhudhaar"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.Bhudhaar
                      )}
                    />
                  </div>
                </div>
              ) : (
                <div className="row-card">
                  <div className="child-card">
                    <h4>Survey Number</h4>
                    <TextField
                      onChange={handleChange}
                      id="SurveyNumber"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.SurveyNumber
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Bhudhaar Number</h4>
                    <TextField
                      onChange={handleChange}
                      id="Bhudhaar"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.Bhudhaar
                      )}
                    />
                  </div>
                </div>
              )}
              {values.searchArray &&
              values.searchArray.map(
                (x: ISearchValues) => x.LandAllocationType
              )[0] !== "Complete" ? (
                <div className="row-card">
                  <div className="child-card">
                    <h4>Initial Allocated Land Area(in Acres)</h4>
                    <TextField
                      // tslint:disable-next-line:jsx-no-lambda
                      // onChange={event => {
                      //   handleChange(event);
                      //   values.handleInitialLandChange(event);
                      // }}
                      onChange={handleChange}
                      id="InitialAllocationInAcres"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.InitialAllocationInAcres
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Initial Allocated Land Parcel Number</h4>
                    <TextField
                      // tslint:disable-next-line:jsx-no-lambda
                      // onChange={event => {
                      //   handleChange(event);
                      //   values.handleParcelChange(event);
                      // }}
                      id="InitialAllocatedParcelNumber"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.InitialAllocatedParcelNumber
                      )}
                    />
                  </div>
                  <div className="child-card">
                    <h4>Initial Allocated Land Survey Number</h4>
                    <TextField
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={event => {
                        handleChange(event);
                        values.handleSurveyChange(event);
                      }}
                      id="InitialAllocatedSurveyNumber"
                      margin="normal"
                      value={values.searchArray.map(
                        (x: ISearchValues) => x.InitialAllocatedSurveyNumber
                      )}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {values.searchArray &&
              values.searchArray.map(
                (x: ISearchValues) => x.LandAllocationType
              )[0] !== "Complete" &&
              values.searchArray.some(
                x => x.AllocationTypeName !== "Lease1"
              ) ? (
                <div className="child-card-flex-two">
                  {values.MileStoneArray && values.MileStoneArray.length > 0
                    ? values.MileStoneArray.map(
                        (x: IMileStoneValues, index: number) => (
                          <div className="child-card-flex-two">
                            <h3 className="child-card-flex-two">
                              MileStone {index + 1}
                            </h3>
                            <div className="child-card">
                              <h4>Allocated Land Area</h4>

                              <TextField
                                type="number"
                                name={`MileStoneArray.${index}.InitialAllocationLandSize`}
                                // tslint:disable-next-line:jsx-no-lambda
                                // onChange={event => {
                                //   handleChange(event);
                                //   values.handleLandReleaseChange(
                                //     event,
                                //     index
                                //   );
                                // }}
                                onBlur={handleBlur}
                                value={x.InitialAllocationLandSize}
                              />
                            </div>
                            <div className="child-card">
                              <h4>Parcel Number</h4>

                              <TextField
                                type="number"
                                name={`MileStoneArray.${index}.ParcelId`}
                                // tslint:disable-next-line:jsx-no-lambda
                                // onChange={event => {
                                //   handleChange(event);
                                //   values.handleLandReleaseChange(
                                //     event,
                                //     index
                                //   );
                                // }}
                                onBlur={handleBlur}
                                value={x.ParcelId}
                              />
                            </div>
                            <div className="child-card">
                              <h4>Survey Number</h4>

                              <TextField
                                type="date"
                                // id="date"
                                value={x.SurveyNumber}
                                // tslint:disable-next-line:jsx-no-lambda
                                // onChange={event => {
                                //   handleChange(event);
                                //   values.handleDateOfCompletionChange(
                                //     event,
                                //     index
                                //   );
                                // }}
                                name={`MileStoneArray.${index}.SurveyNumber`}
                              />
                            </div>
                          </div>
                        )
                      )
                    : null}
                </div>
              ) : (
                ""
              )}
              {values.searchArray &&
              values.searchArray.map(
                (x: ISearchValues) => x.LandAllocationType
              )[0] !== "Complete" &&
              values.searchArray.some(
                x => x.AllocationTypeName === "Lease1"
              ) ? (
                <div className="child-card-flex-two">
                  {values.MileStoneArray && values.MileStoneArray.length > 0
                    ? values.MileStoneArray.map(
                        (x: IMileStoneValues, index: number) => (
                          <div className="child-card-flex-two">
                            <h2 className="child-card-flex-two">
                              MileStone {index + 1}
                            </h2>
                            <div className="child-card">
                              <h4>Allocated Land Area</h4>

                              <TextField
                                type="number"
                                name={`MileStoneArray.${index}.InitialAllocationLandSize`}
                                // tslint:disable-next-line:jsx-no-lambda
                                // onChange={event => {
                                //   handleChange(event);
                                //   values.handleLandReleaseChange(
                                //     event,
                                //     index
                                //   );
                                // }}
                                onBlur={handleBlur}
                                value={x.InitialAllocationLandSize}
                              />
                            </div>
                            <div className="child-card">
                              <h4>Parcel Number</h4>

                              <TextField
                                type="number"
                                name={`MileStoneArray.${index}.ParcelId`}
                                // tslint:disable-next-line:jsx-no-lambda
                                // onChange={event => {
                                //   handleChange(event);
                                //   values.handleLandReleaseChange(
                                //     event,
                                //     index
                                //   );
                                // }}
                                onBlur={handleBlur}
                                value={x.ParcelId}
                              />
                            </div>
                            <div className="child-card">
                              <h4>Survey Number</h4>

                              <TextField
                                type="date"
                                // id="date"
                                value={x.SurveyNumber}
                                // tslint:disable-next-line:jsx-no-lambda
                                onChange={event => {
                                  handleChange(event);
                                  values.handleMilestoneSurveyNumberChange(
                                    event,
                                    index
                                  );
                                }}
                                name={`MileStoneArray.${index}.SurveyNumber`}
                              />
                            </div>
                          </div>
                        )
                      )
                    : null}
                </div>
              ) : (
                ""
              )}
            </div>
          </ExpansionPanel>
        </div>
        <Card className="white-card">
          <div className="second-card">
            <div className="child-card ">
              <h4 className="comment-txt">
                <img src="/images/comment.png" />
                Comments
              </h4>

              <TextField
                placeholder="Enter Your Comments Here.."
                multiline={true}
                rowsMax="4"
                id="Comments"
                margin="normal"
                value={values.Comments}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  values.handleProcessCommentsChange(event);
                }}
              />
            </div>
          </div>
          <br />
          <div className="collapse-card-two">
            <div className="second-card">
              <div className="child-card ">
                <h4 className="comment-txt">Previous Comments</h4>

                {values.ProcessComments.filter(
                  x =>
                    x ===
                    values.ProcessComments[values.ProcessComments.length - 1]
                ).map((x: IProcessCommentsValues, id: number) => (
                  <Table key={id}>
                    <TableHead>
                      <TableRow>
                        <TableCell> Status</TableCell>
                        <TableCell>Previous Comments</TableCell>
                        <TableCell>Updated On</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableCell>
                        <img className="select-img" src="/images/ticks.png" />
                      </TableCell>
                      <TableCell>
                        {/* {x.Comments.slice(8, x.Comments.length - 10)} */}
                        {x.CommentsBy}
                      </TableCell>
                      <TableCell>
                        {moment(x.CreatedOn).format("DD/MM/YYYY")}
                      </TableCell>
                    </TableBody>
                  </Table>
                ))}
              </div>
            </div>
          </div>
          <br />
          <div className="second-card collapse-card-two">
            <FormControl>
              <div className="second-card">
                <h3>Forward To :</h3>
              </div>
              <div className="child-card">
                <h4>Select Department User</h4>
                <Select
                  value={values.selectDepartmentId}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    values.handleselectDepartmentChange(event);
                  }}
                  inputProps={{
                    id: "selectDepartmentId",
                    name: "selectDepartmentId"
                  }}
                >
                  {values.selectDepartmentList &&
                    values.selectDepartmentList.map(
                      (x: ISelectDepartmentvalues, id: number) => (
                        <MenuItem
                          className="select-dropdown-bottom"
                          key={id}
                          value={x.UserId}
                        >
                          {x.DepartmentName} - {x.UserName}
                        </MenuItem>
                      )
                    )}
                </Select>
              </div>
            </FormControl>
          </div>
          <div className="approve-btn-grp">
            <Button
              className="normal-btn"
              type="button"
              // disabled={values.selectDepartmentId === 0 && values.Comments === ""}
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.onHandleForwardPopUpOpen({ ...values })}
            >
              <img src="/images/approve1.png" />
              Forward
            </Button>
            {"   "}
            {UserId === 36 ? (
              <Button
                className="normal-btn space-btn"
                type="button"
                // disabled={values.selectDepartmentId === 0 && values.Comments === ""}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={event =>
                  values.onHandleApprovePopUpOpen({ ...values })
                }
              >
                {/* <img src="/images/round-done-button(1).png" /> */}
                Approve
              </Button>
            ) : (
              <div />
            )}

            {/* <Button
          className="review-btn"
          type="button"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => values.onHandleReviewPopUpOpen()}
        >
          <img src="/images/review.png" /> Review
        </Button> */}
            {
              <Dialog
                open={values.reviewOpen}
                // tslint:disable-next-line:jsx-no-lambda
                // onClose={() => values.onHandleReviewPopUpClose()}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {values.Comments === "" ? "Please Enter Comments &" : ""}
                  {values.selectDepartmentId === 0
                    ? "Please Select Department User To Forward &"
                    : ""}
                  {values.applicationProjectRules.filter(
                    (x: IapplicationProjectRulesValues) => x.DocumentPath === ""
                  ).length > 0
                    ? "Select Project Rules & Upload Images"
                    : ""}
                  {values.applicationProjectRules.filter(
                    (x: IapplicationProjectRulesValues) =>
                      x.IsDocumentVerified === false
                  ).length > 0
                    ? " & Images have To Be Verified"
                    : ""}

                  {UserId === 31 &&
                  values.searchArray.map(
                    (x: ISearchValues) => x.LandAreaAllotedByEstates
                  )[0] === 0
                    ? "& Please Select Map Details"
                    : ""}
                  {UserId === 32 &&
                  values.searchArray.map(x => x.SurveyNumber)[0] === ""
                    ? "& Please Enter Survey Number"
                    : ""}
                  {UserId === 32 &&
                  values.searchArray.map(x => x.Bhudhaar)[0] === ""
                    ? "& Please Enter Bhudhaar Number"
                    : ""}
                </DialogTitle>

                <div className="login-card-main ">
                  <Button
                    className="nave-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    color="primary"
                    autoFocus={true}
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => values.onHandleReviewPopUpClose()}
                  >
                    OK
                  </Button>
                </div>
              </Dialog>
            }
            {
              <Dialog
                open={values.forwardOpen}
                // tslint:disable-next-line:jsx-no-lambda
                //  onClose={() => values.onHandleApprovePopUpClose()}
                aria-labelledby="responsive-dialog-title"
              >
                <div>
                  <DialogTitle
                    id="responsive-dialog-title"
                    className="popup-title"
                  >
                    Confirmation For Forwarding
                  </DialogTitle>
                </div>
                <DialogContent>
                  You Are Forwarding To :
                  <b> {values.applicationSelectDepartmentName}</b>
                </DialogContent>
                <DialogActions>
                  <div className="popup-bottom-btn">
                    <Button
                      className="main-btn"
                      type="button"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => values.onHandleApproveClick({ ...values })}
                      color="primary"
                      autoFocus={true}
                    >
                      YES
                    </Button>
                    <Button
                      className="main-btn"
                      type="button"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => values.onHandleApprovePopUpClose()}
                      color="secondary"
                      autoFocus={true}
                    >
                      No
                    </Button>
                  </div>
                </DialogActions>
              </Dialog>
            }
            {
              <Dialog
                open={values.ApproveOpen}
                // tslint:disable-next-line:jsx-no-lambda
                //  onClose={() => values.onHandleApprovePopUpClose()}
                aria-labelledby="responsive-dialog-title"
              >
                <div>Status Submitted Successfully</div>
                <Button
                  type="button"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => values.onHandleApprovePopUpClose()}
                >
                  OK
                </Button>
              </Dialog>
            }
            {
              <Dialog
                open={values.uploadSuccessPopUp}
                // tslint:disable-next-line:jsx-no-lambda
                //  onClose={() => values.onHandleApprovePopUpClose()}
                aria-labelledby="responsive-dialog-title"
              >
                <div className="pop-up">
                  <h3>Image Uploaded Successfully</h3>
                  <div className="popup-bottom-btn">
                    <Button
                      className="main-btn"
                      color="primary"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => values.onHandleApprovePopUpClose()}
                    >
                      ok
                    </Button>
                  </div>
                </div>
              </Dialog>
            }
            {/* <Button
          className="review-btn"
          type="button"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => values.onHandleReviewPopUpOpen()}
        >
          <img src="/images/review.png" /> Review
        </Button>

        {
          <Dialog
            open={values.reviewOpen}
            // tslint:disable-next-line:jsx-no-lambda
            // onClose={() => values.onHandleReviewPopUpClose()}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Select review reasons
            </DialogTitle>
            <DialogContent>
              <FormControl component="fieldset">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={gilad}
                        // onChange={this.handleChange("gilad")}
                        value="Need"
                      />
                    }
                    label="Need to Review the documents"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        //  checked={jason}
                        //  onChange={this.handleChange("jason")}
                        value="jason"
                      />
                    }
                    label="Review Test"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={antoine}
                        // onChange={this.handleChange("antoine")}
                        value="antoine"
                      />
                    }
                    label="Organisation Details are found Fake"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={antoine}
                        // onChange={this.handleChange("antoine")}
                        value="antoine"
                      />
                    }
                    label="Others"
                  />
                </FormGroup>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button
                className="save-btn"
                // tslint:disable-next-line:jsx-no-lambda
                color="primary"
                autoFocus={true}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.onHandleReviewPopUpClose()}
              >
                Cancel
              </Button>
              {/* <Button
                className="save-btn"
                // tslint:disable-next-line:jsx-no-lambda
                color="primary"
                autoFocus={true}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.onHandleReviewSuccessPopUp()}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        } */}
          </div>
        </Card>
      </div>
    </form>
  );
};
// const matching = (name: string) => {

//   if (name !== null && name !== undefined) {
//     const regex = /[Lease]/g;
//     const found = name.match(regex);

//     if (found) {
//       found.join("");

//       return true;
//     }
//     return false;
//   }
//   return false;
// };

const ApplicationForm = (
  values: ITreeFormValues &
    IApplicationFormProps &
    IprojectRuleProps &
    IImagevalues
) => (
  <Formik
    initialValues={{
      ...values
    }}
    onSubmit={values.onHandleApproveClick}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<
        ITreeFormValues &
          IApplicationFormProps &
          IprojectRuleProps &
          IImagevalues
      >
    ) => (
      <ApplicationInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          ApplicationId: values.ApplicationId,
          Comments: values.Comments,
          ProcessComments: values.ProcessComments,
          searchDataId: values.searchDataId,
          // tslint:disable-next-line:object-literal-sort-keys
          expanded: values.expanded,
          handleAppFormUploadImageClick: values.handleAppFormUploadImageClick,
          handleDocumentVerifiedChange: values.handleDocumentVerifiedChange,
          handleParcelNumberChange: values.handleParcelNumberChange,
          handleProcessCommentsChange: values.handleProcessCommentsChange,
          handleRuleImageChange: values.handleRuleImageChange,
          handleRuleSatisfiedChange: values.handleRuleSatisfiedChange,
          handleselectDepartmentChange: values.handleselectDepartmentChange,
          isRuleSatisfied: values.isRuleSatisfied,
          onHandleApprovePopUpClose: values.onHandleApprovePopUpClose,
          onHandleForwardPopUpOpen: values.onHandleForwardPopUpOpen,
          ruleImage: values.ruleImage,
          selectDepartmentId: values.selectDepartmentId,
          selectDepartmentList: values.selectDepartmentList,
          // tslint:disable-next-line:object-literal-sort-keys
          applicationSelectDepartmentName:
            values.applicationSelectDepartmentName,
          targetValue: values.targetValue,
          // tslint:disable-next-line:object-literal-sort-keys
          panel1: values.panel1,
          panel2: values.panel2,
          panel3: values.panel3,
          panel4: values.panel4,
          panel5: values.panel5,
          panel6: values.panel6,
          onHandleApproveClick: values.onHandleApproveClick,
          onHandleReviewClick: values.onHandleReviewClick,
          onHandlePanelChange: values.onHandlePanelChange,
          onExpandAll: values.onExpandAll,
          onCollapseAll: values.onCollapseAll,
          searchArray: values.searchArray,
          mapOpen: values.mapOpen,
          ApproveOpen: values.ApproveOpen,
          onHandleApprovePopUpOpen: values.onHandleApprovePopUpOpen,
          onHandleReviewPopUpClose: values.onHandleReviewPopUpClose,
          onHandleReviewPopUpOpen: values.onHandleReviewPopUpOpen,
          reviewOpen: values.reviewOpen,
          handleMapClose: values.handleMapClose,
          handleMapOpenClick: values.handleMapOpenClick,
          reviewSuccessOpen: values.reviewSuccessOpen,
          onHandleReviewSuccessPopUp: values.onHandleReviewSuccessPopUp,
          applicationProjectRules: values.applicationProjectRules,
          applicationimages: values.applicationimages,
          handleImageChange: values.handleImageChange,
          forwardOpen: values.forwardOpen,
          parcelValues: values.parcelValues,
          MileStoneArray: values.MileStoneArray,
          ProjectDetailsArray: values.ProjectDetailsArray,
          uploadSuccessPopUp: values.uploadSuccessPopUp
        }}
      />
    )}
  />
);

export default ApplicationForm;
