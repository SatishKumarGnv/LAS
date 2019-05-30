import * as React from "react";
import { ISubmitApplicationPopUpProps } from "../Container/SubmittedApplicationState";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

export const ProposalFormPopUp = (props: ISubmitApplicationPopUpProps) => (
  <div className="dilog-box">
    <List>
      {props.applicationPopUpList
        .filter(x => x.ApplicationId === props.popUpid)
        .map((value, id) => (
          <li>
            <ol>
              <ListSubheader className="list-title">
                Organiztion Details
              </ListSubheader>
              <ListItem key={id} className="dilog-list">
                <ListItemText className="first-child">
                  <span className="text-bold"> Organization Name </span> :{" "}
                  {value.OrganiztionName}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold"> Street Name,Locality</span> :{" "}
                  {value.AuthAddress2}
                </ListItemText>

                <ListItemText>
                  {" "}
                  <span className="text-bold">GST Number </span> :{" "}
                  {value.OrgGST}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold"> Phone Number </span> :{" "}
                  {value.OrgPhoneNumber}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold"> Email Id </span> :{" "}
                  {value.OrgEmailid}
                </ListItemText>
                <ListItemText>Address1 : {value.OrgAddress1}</ListItemText>

                {props.AllocateTo === "Government" ? (
                  <li>
                    <ListItemText>
                      <span className="text-bold">City </span> :{" "}
                      {value.OrgCityName}
                    </ListItemText>
                    <ListItemText>
                      <span className="text-bold">State </span> :{" "}
                      {value.OrgStateName}
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
              <ListSubheader className="list-title">
                Authorization Details
              </ListSubheader>
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
                  <span className="text-bold"> Phone Id Type </span> :{" "}
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
                  <span className="text-bold">Address1 </span> :{" "}
                  {value.AuthAddress1}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">Street Name</span> :{" "}
                  {value.AuthAddress2}
                </ListItemText>
              </ListItem>
            </ol>
            <Divider />
            <ol>
              <ListSubheader className="list-title">
                Agreement Details
              </ListSubheader>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="text-bold"> Project Name </span> :{" "}
                  {value.ProjectTitle}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">Project Purpose </span> :{" "}
                  {value.ProjPurpose}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">City Type </span> :{" "}
                  {value.TownshipName}
                </ListItemText>

                <ListItemText className="img-container">
                  <span className="text-bold"> Project Description </span> :{" "}
                  {value.ProjDescription}
                </ListItemText>
              </ListItem>
            </ol>
            <Divider />
            <ol>
              <ListSubheader className="list-title">Land Details</ListSubheader>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="text-bold">
                    {" "}
                    Available Land Area(in Acres)
                  </span>{" "}
                  : {value.AvailableLandArea}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">
                    {" "}
                    Requested Land Area(in Acres){" "}
                  </span>{" "}
                  : {value.RequiredLandArea}
                </ListItemText>
              </ListItem>
            </ol>
            <Divider />
            <ol>
              <ListSubheader className="list-title">
                Lease Details
              </ListSubheader>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="text-bold"> Lease Tenure </span> :{" "}
                  {value.TenurePeriod}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold"> Lease Start Date </span> :{" "}
                  {value.LeaseStartDate}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold"> Lease End Date </span> :{" "}
                  {value.LeaseEndDate}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">Lease Amount </span> :{" "}
                  {value.LeaseAmountperAcre}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold"> Total Lease Amount </span> :{" "}
                  {value.LeaseAmountperAnnum}
                </ListItemText>
              </ListItem>
            </ol>
          </li>
        ))}
    </List>
    <div className="cls-btn">
      <Button color="primary" onClick={props.onHandleClose}>
        Close
      </Button>
    </div>
  </div>
);

export default ProposalFormPopUp;
