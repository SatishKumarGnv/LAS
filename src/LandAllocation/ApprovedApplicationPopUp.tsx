import * as React from "react";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { IApprovedApplicationPopUpProps } from "../Container/ApprovedApplicationState";

export const ApprovedApplicationPopUp = (
  props: IApprovedApplicationPopUpProps
) => (
  <div className="dilog-box-two pop-up">
    <h2>Approved Application Details</h2>
    {/* <div className="popup-close-btn">
      <Button
        type="button "
        // tslint:disable-next-line:jsx-no-lambda
        // onClick={props.handleClose}
      >
         <img src="/images/download-img" alt="download" /> 
      </Button> 
    </div> */}
    <List className="popup-firsttext">
      {props.approvedApplicationPopUpList.map((value, id) => (
        <li>
          <ol>
            <ListSubheader className="list-title-two">
              Organiztion Details
            </ListSubheader>
            <ListItem key={id} className="dilog-list">
              <ListItemText className="first-child">
                <span className="text-bold"> With In AGC </span> :{" "}
                {value.WithInAGC ? "true" : "false"}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Out Of AGC </span> :{" "}
                {value.OutOfAGC ? "true" : "false"}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Allocation Type Name </span> :{" "}
                {value.AllocationTo}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Allocation SubType Name </span> :{" "}
                {value.AllocationTypeName}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Agreement Type Name </span> :{" "}
                {value.AgreementTypeName}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Organization Name </span> :{" "}
                {value.OrganiztionName}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Phone Number </span> :{" "}
                {value.OrgPhoneNumber}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Email Address </span> :{" "}
                {value.OrgEmailid}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Address1 </span> :{" "}
                {value.OrgAddress1}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold"> Street Name, Locality </span> :{" "}
                {value.OrgAddress2}
              </ListItemText>
            </ListItem>
            <ListItem>
              {" "}
              {value.AllocationTo === "Private" ? (
                <div>
                  <ListItemText className="first-child">
                    <span className="text-bold"> Registration Number</span> :{" "}
                    {value.OrgRegistrationNumber}
                  </ListItemText>
                  <ListItemText className="first-child">
                    <span className="text-bold"> GST Number </span> :{" "}
                    {value.OrgGST}
                  </ListItemText>
                  <ListItemText className="first-child">
                    <span className="text-bold"> Country Name </span> :{" "}
                    {value.OrgCountryName}
                  </ListItemText>
                  <ListItemText className="first-child">
                    <span className="text-bold"> State Name </span> :{" "}
                    {value.OrgStateName}
                  </ListItemText>
                  <ListItemText className="first-child">
                    <span className="text-bold"> City Name </span> :{" "}
                    {value.OrgCityName}
                  </ListItemText>
                  <ListItemText className="first-child">
                    <span className="text-bold"> Zip Code </span> :{" "}
                    {value.OrgZipCode}
                  </ListItemText>
                </div>
              ) : (
                <div />
              )}
            </ListItem>
          </ol>
          <Divider />
          <ol>
            <ListSubheader className="list-title-two">
              Authorization Details
            </ListSubheader>
            <ListItem className="dilog-list">
              <ListItemText className="first-child">
                <span className="text-bold"> First Name </span> :{" "}
                {value.FirstName}
              </ListItemText>
              <ListItemText>
                <span className="text-bold"> Last Name </span> :{" "}
                {value.LastName}
              </ListItemText>

              <ListItemText>
                <span className="text-bold"> Email Address</span> :{" "}
                {value.AuthEmailId}
              </ListItemText>
              <ListItemText>
                <span className="text-bold"> Phone Number </span> :{" "}
                {value.AuthPhoneNumber}
              </ListItemText>

              <ListItemText>
                <span className="text-bold"> Photo Id Type</span> :{" "}
                {value.AuthPhotoIdType}
              </ListItemText>
              <ListItemText>
                <span className="text-bold"> Photo Id Number </span> :{" "}
                {value.AuthPhotoIdNumber}
              </ListItemText>
              <ListItemText>
                <span className="text-bold"> House No,Building Name </span> :{" "}
                {value.AuthAddress1}
              </ListItemText>
              <ListItemText>
                <span className="text-bold"> Street Name, Locality </span> :{" "}
                {value.AuthAddress2}
              </ListItemText>
            </ListItem>
          </ol>
          <Divider />
          <ol>
            <ListSubheader className="list-title-two">
              Agreement Details
            </ListSubheader>
            <ListItem className="dilog-list">
              <ListItemText className="first-child">
                <span className="text-bold"> Project Name </span> :{" "}
                {value.ProjectTitle}
              </ListItemText>
              <ListItemText>
                <span className="text-bold"> Project Purpose </span> :{" "}
                {value.ProjPurpose}
              </ListItemText>

              <ListItemText>
                <span className="text-bold"> Township Name</span> :{" "}
                {value.TownshipName}
              </ListItemText>
              <ListItemText>
                <span className="text-bold"> Project Description </span> :{" "}
                {value.ProjDescription}
              </ListItemText>
            </ListItem>
          </ol>
          <Divider />
          <ol>
            <ListSubheader className="list-title-two">
              Land Details
            </ListSubheader>
            <ListItem className="dilog-list">
              <ListItemText className="first-child">
                <span className="text-bold">Available Land Area(In Acres)</span>{" "}
                : {value.AvailableLandArea}
              </ListItemText>
              <ListItemText className="first-child">
                <span className="text-bold">Requested Land Area(In Acres)</span>{" "}
                : {value.RequiredLandAreaBeforeAllocation}
              </ListItemText>
              {value.LandAllocationType !== "Complete" ? (
                <ListItemText>
                  <span className="text-bold">
                    Allocated Land Area(In Acres)
                  </span>{" "}
                  : {value.InitialAllocationLandSize}
                </ListItemText>
              ) : (
                ""
              )}
            </ListItem>
          </ol>
          <Divider />
          {value.AgreementTypeName === "Lease" ? (
            <ol>
              <ListSubheader className="list-title-two">
                Lease Details
              </ListSubheader>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="submit-text-align"> Lease Tenure </span> :
                  {value.LeaseTenure}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Lease Amount(In Acrea)</span> :{" "}
                  {value.LeaseAmountperAcre}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Total Land Cost</span> :{" "}
                  {value.TotalLandCost}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Amount Paid</span> :{" "}
                  {value.AmountPaid}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Amount To Be Paid</span> :{" "}
                  {value.AmountTobePaid}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Lease Start Date</span> :{" "}
                  {value.LeaseStartDate}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">Lease End Date </span> :{" "}
                  {value.LeaseEndDate}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">Registered Or Not </span> :{" "}
                  {value.RegisteredOrNot}
                </ListItemText>
              </ListItem>
            </ol>
          ) : (
            ""
          )}

          <Divider />

          {value.GOMDetails &&
            value.GOMDetails.length !== 0 &&
            value.GOMDetails.map(y => (
              <ol>
                <ListSubheader className="list-title-two">
                  GOM Details
                </ListSubheader>
                <ListItem className="dilog-list">
                  <ListItemText className="first-child">
                    <span className="text-bold">GOM Number</span> :{" "}
                    {y.GOMNumber}
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">GOM Date</span> :{" "}
                    {y.GOMDate_str}
                  </ListItemText>
                </ListItem>
              </ol>
            ))}
        </li>
      ))}
    </List>
    <Button
      className="save-btn"
      type="button "
      // tslint:disable-next-line:jsx-no-lambda
      onClick={props.handleClose}
    >
      Close
    </Button>
  </div>
);

export default ApprovedApplicationPopUp;
