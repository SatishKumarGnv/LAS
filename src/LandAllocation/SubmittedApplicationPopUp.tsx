import * as React from "react";
import { ISubmitApplicationPopUpProps } from "../Container/SubmittedApplicationState";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as moment from "moment";
import { IGoValues, IMileStoneValues } from "src/DefaultLayout/HomePage";

export const SubmitApplicationPopUp = (props: ISubmitApplicationPopUpProps) => (
  <div>
    {/* <div className="popup-close-btn">
      <Button color="primary" onClick={props.onHandleClose}>
        X
      </Button>
    </div> */}

    <div>
      <List>
        {props.applicationPopUpList &&
          props.applicationPopUpList
            .filter(x => x.ApplicationId === props.popUpid)
            .map((value, id) => (
              <li>
                <ol>
                  <ListSubheader>Organization Details</ListSubheader>
                  <ListItem key={id} className="dilog-list">
                    <ListItemText className="first-child">
                      <span className="text-bold">With In AGC</span> :{" "}
                      {value.WithInAGC ? "true" : "false"}
                    </ListItemText>
                    <ListItemText className="first-child">
                      <span className="text-bold">Out Of AGC</span> :{" "}
                      {value.OutOfAGC ? "true" : "false"}
                    </ListItemText>
                    <ListItemText className="first-child">
                      <span className="text-bold"> Allocation Name </span> :{" "}
                      {value.AllocationTo}
                    </ListItemText>
                    <ListItemText className="first-child">
                      <span className="text-bold">
                        {" "}
                        Allocation SubType Name{" "}
                      </span>{" "}
                      : {value.AllocationTypeName}
                    </ListItemText>
                    <ListItemText className="first-child">
                      <span className="text-bold"> Agreement type Name </span> :{" "}
                      {value.AgreementTypeName}
                    </ListItemText>
                    <ListItemText className="first-child">
                      <span className="text-bold"> Organization Name </span> :{" "}
                      {value.OrganiztionName}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold">Registration Number</span> :{" "}
                      {value.OrgRegistrationNumber}
                    </ListItemText>

                    <ListItemText>
                      <span className="text-bold"> Phone Number </span> :{" "}
                      {value.OrgPhoneNumber}
                    </ListItemText>

                    <ListItemText>
                      <span className="text-bold">Email Id </span> :{" "}
                      {value.OrgEmailid}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold">House No:</span> :{" "}
                      {value.OrgAddress1}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold">Street Name / Locality</span>{" "}
                      : {value.OrgAddress2}
                    </ListItemText>

                    {props.AllocateTo === "Private" ? (
                      <li>
                        <ListItemText>
                          <span className="text-bold popup-city">City </span> :{" "}
                          {value.OrgCityName}
                        </ListItemText>
                        <ListItemText>
                          <span className="text-bold">State </span> :{" "}
                          {value.OrgStateName}
                        </ListItemText>
                        <ListItemText>
                          <span className="text-bold">GST Number</span> :{" "}
                          {value.OrgGST}
                        </ListItemText>
                        <ListItemText>
                          <span className="text-bold"> Country </span> :{" "}
                          {value.OrgCountryName}
                        </ListItemText>

                        <ListItemText>
                          <span className="text-bold">Zip Code </span> :{" "}
                          {value.OrgZipCode}
                        </ListItemText>
                      </li>
                    ) : (
                      ""
                    )}
                  </ListItem>
                </ol>
                <Divider />
                <ol>
                  <ListSubheader>Authorization Details</ListSubheader>
                  <ListItem className="dilog-list">
                    <ListItemText className="first-child">
                      <span className="text-bold"> First Name </span> :{" "}
                      {value.AuthPersonName}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold">Last Name </span> :{" "}
                      {value.LastName}
                    </ListItemText>

                    <ListItemText>
                      <span className="text-bold">Email Id </span> :{" "}
                      {value.AuthEmailId}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold"> Photo Id Type </span> :{" "}
                      {value.AuthPhotoIdType}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold"> Phone Number </span> :{" "}
                      {value.AuthPhoneNumber}
                    </ListItemText>

                    <ListItemText>
                      <span className="text-bold">Photo Id Number </span>:{" "}
                      {value.AuthPhotoIdNumber}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold">House No</span> :{" "}
                      {value.AuthAddress1}
                    </ListItemText>

                    <ListItemText>
                      <span className="text-bold"> Street Name </span>:{" "}
                      {value.AuthAddress2}
                    </ListItemText>
                  </ListItem>
                </ol>
                <Divider />
                <ol>
                  <ListSubheader>Agreement Details</ListSubheader>
                  <ListItem className="dilog-list">
                    <ListItemText className="first-child">
                      <span className="text-bold"> Project Name </span> :{" "}
                      {value.ProjectTitle}
                    </ListItemText>

                    <ListItemText>
                      {" "}
                      <span className="text-bold"> Project Purpose : </span>
                      {value.ProjPurpose}
                    </ListItemText>

                    <ListItemText>
                      {" "}
                      <span className="text-bold">Township Name</span> :
                      {value.TownshipName === ""
                        ? "Township 0"
                        : value.TownshipName}
                    </ListItemText>

                    <ListItemText>
                      <span className="text-bold">Project Description </span>:
                      {value.ProjDescription}
                    </ListItemText>
                  </ListItem>
                </ol>
                <Divider />
                <ol>
                  <ListSubheader>Land Details</ListSubheader>
                  <ListItem className="dilog-list">
                    <ListItemText className="first-child">
                      <span className="text-bold">
                        {" "}
                        Available Land Area(in Acres){" "}
                      </span>{" "}
                      : {value.AvailableLandArea}
                    </ListItemText>

                    <ListItemText>
                      <span className="text-bold">
                        {" "}
                        Requested Land Area(in Acres)
                      </span>{" "}
                      : {value.RequiredLandArea}
                    </ListItemText>
                  </ListItem>
                </ol>
                <Divider />
                {props.AllocateTo === "Private" ? (
                  <ol>
                    <ListSubheader>Lease Details</ListSubheader>
                    <ListItem className="dilog-list">
                      <ListItemText className="first-child">
                        <span className="text-bold"> Lease Tenure </span> :{" "}
                        {value.TenurePeriod}
                      </ListItemText>

                      <ListItemText>
                        <span className="text-bold">Lease Start Date </span> :{" "}
                        {value.LeaseStartDate}
                      </ListItemText>

                      <ListItemText>
                        <span className="text-bold">Lease End Date </span> :{" "}
                        {value.LeaseEndDate}
                      </ListItemText>

                      <ListItemText>
                        <span className="text-bold">Lease Amount </span> :{" "}
                        {value.LeaseAmountperAcre}
                      </ListItemText>

                      <ListItemText>
                        <span className="text-bold">Total Lease Amount </span> :{" "}
                        {value.LeaseAmountperAnnum}
                      </ListItemText>
                    </ListItem>
                  </ol>
                ) : (
                  <div />
                )}
                <Divider />
                {value.GOMDetails &&
                value.GOMDetails.length !== 0 &&
                (value.GOMDetails.map((x: IGoValues) => x.GoNumber)[0] !== "" ||
                  value.GOMDetails.map((x: IGoValues) => x.GoDate)[0] !==
                    "") ? (
                  <div>
                    <List className="margin-for-list">
                      <h4
                        style={{
                          color: "#09a1e2 !important",
                          fontSize: "20px !important",
                          fontWeight: "bold",
                          marginLeft: "145px"
                        }}
                        className="list-title"
                      >
                        GOM Details
                      </h4>

                      <Table style={{ border: "none !important" }}>
                        <TableHead>
                          <TableRow>
                            <TableCell>GOM Number</TableCell>
                            <TableCell>GOM Date</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {value.GOMDetails.map((x: IGoValues) => (
                            <TableRow key={x.id}>
                              <TableCell>{x.GOMNumber}</TableCell>
                              <TableCell>{x.GOMDate_str}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </List>
                  </div>
                ) : (
                  <div />
                )}
                <Divider />

                {props.MileStoneArray &&
                props.MileStoneArray.length !== 0 &&
                (props.MileStoneArray.map(
                  (x: IMileStoneValues) => x.ReleaseLandArea
                )[0] !== "" ||
                  props.MileStoneArray.map(
                    (x: IMileStoneValues) => x.EffectiveDate
                  )[0] !== "" ||
                  props.MileStoneArray.map(
                    (x: IMileStoneValues) => x.MilestoneYear
                  )[0] !== 0) ? (
                  <div>
                    <List className="margin-for-list">
                      <h4
                        style={{
                          color: "#09a1e2 !important",
                          fontSize: "20px !important",
                          fontWeight: "bold",
                          marginLeft: "145px"
                        }}
                        className="list-title"
                      >
                        Milestone Details
                      </h4>

                      <Table style={{ border: "none !important" }}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Milestone Year</TableCell>
                            <TableCell>Land Release</TableCell>
                            <TableCell>Effective Date Of Birth</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.MileStoneArray.map((x: IMileStoneValues) => (
                            <TableRow key={x.id}>
                              <TableCell>{x.MilestoneYear}</TableCell>
                              <TableCell>{x.ReleaseLandArea}</TableCell>

                              <TableCell>
                                {moment(x.EffectiveDate).format("YYYY-MM-DD")}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </List>
                  </div>
                ) : (
                  <div />
                )}
              </li>
            ))}
      </List>
    </div>
    <div className="cls-btn">
      <Button color="primary" onClick={props.onHandleClose}>
        Close
      </Button>
    </div>
  </div>
);

export default SubmitApplicationPopUp;
