import * as React from "react";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { IPopUpProps } from "src/Container/ThemeCityWiseApplicationApprovalState";

const TownShipPopUp = (props: IPopUpProps) => (
  <div className="dilog-box pop-up">
    <div className="cls-btn">
      {/* <Button color="primary" onClick={props.onHandleDialogClose}>
        X
      </Button> */}
    </div>
    <List>
      {props.applicationPopUpList
        .filter(x => x.ApplicationId === props.popUpid)
        .map((value, id) => (
          <li>
            <ol>
              <ListSubheader>Organization Details</ListSubheader>
              <ListItem key={id} className="dilog-list">
                <ListItemText className="first-child">
                  Organization Name : {value.OrganiztionName}
                </ListItemText>
                <ListItemText>
                  Phone Number : {value.OrgPhoneNumber}
                </ListItemText>
                <br />
                <ListItemText>Email Address: {value.OrgEmailid}</ListItemText>
                <ListItemText>Address1 : {value.OrgAddress1}</ListItemText>
                <ListItemText>
                  Street Name , Locality : {value.OrgAddress2}
                </ListItemText>
                <br />
                {/* <ListItemText>Email Id : {value.OrgEmailid}</ListItemText>
                <ListItemText>Address1 : {value.OrgAddress1}</ListItemText>
                <br />
                {props.AllocateTo === "Government" ? (
                  <li>
                    <ListItemText>City: {value.OrgCityName}</ListItemText>
                    <ListItemText>State : {value.OrgStateName}</ListItemText>
                    <br />

                    <ListItemText>
                      Country : {value.OrgCountryName}
                    </ListItemText>
                    <br />

                    <ListItemText>Zip Code : {value.OrgZipCode}</ListItemText>
                  </li>
                ) : (
                  "" */}
                {/* )} */}
              </ListItem>
            </ol>
            <Divider />
            <ol>
              <ListSubheader>Authorization Details</ListSubheader>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  First Name : {value.AuthPersonName}
                </ListItemText>
                <ListItemText>Last Name : {value.LastName}</ListItemText>
                <br />

                <ListItemText>Email Address : {value.AuthEmailId}</ListItemText>

                <ListItemText>
                  Phone Number : {value.AuthPhoneNumber}
                </ListItemText>
                <ListItemText>
                  Photo Id Type : {value.AuthPhotoIdType}
                </ListItemText>
                <br />

                <ListItemText>
                  Photo Id Number : {value.AuthPhotoIdNumber}
                </ListItemText>
                <ListItemText>
                  House No ,Building Name: {value.AuthAddress1}
                </ListItemText>
                <br />

                <ListItemText>
                  Street Name , Locality: {value.AuthAddress2}
                </ListItemText>
              </ListItem>
            </ol>
            <Divider />
            <ol>
              <ListSubheader>Agreement Details</ListSubheader>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  Project Name : {value.ProjectTitle}
                </ListItemText>
                <br />
                <ListItemText>
                  Project Purpose : {value.ProjPurpose}
                </ListItemText>
                <br />

                <ListItemText>
                  Theme City Type: {value.TownshipName}
                </ListItemText>
                <br />

                <ListItemText>
                  Project Description : {value.ProjDescription}
                </ListItemText>
              </ListItem>
            </ol>
            <Divider />
            <ol>
              <ListSubheader>Land Details</ListSubheader>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  Available Land Area(in Acres) : {value.AvailableLandArea}
                </ListItemText>
                <br />

                <ListItemText>
                  Requested Land Area(in Acres) : {value.RequiredLandArea}
                </ListItemText>
              </ListItem>
            </ol>
            <Divider />
          </li>
        ))}
    </List>
    <div className="cls-btn">
      <Button color="primary" onClick={props.onHandleDialogClose}>
        Close
      </Button>
    </div>
  </div>
);

export default TownShipPopUp;
