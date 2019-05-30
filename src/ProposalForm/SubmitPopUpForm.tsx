import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {
  IDocumentPropValues,
  IGoValues,
  ISubmitPopUpProps,
  IwitnessValues
} from "../DefaultLayout/HomePage";

const SubmitPopUpInnerForm = (props: ISubmitPopUpProps) => (
  <div
    className="below-overflow"
    // style={{ backgroundColor: "rgb(197, 225, 236)" }}
  >
    <div id="printdata">
      <li>
        {/* <div
          style={{
            borderBottom: "1px solid red",
            borderTop: "1px solid red",
            fontSize: "1.5em"
          }}
        >
          <h3 className=" menu-text"> Acknowledgement</h3>
        </div> */}
        {/* {props.SuccesPopUpOpen ? (
          <p
            style={{
              borderBottom: "#4e61a2 solid 4px !important",
              marginBottom: "14px !important"
            }}
          >
            <img
              style={{ height: "15px", width: "20px", float: "left" }}
              src="/images/logo-crda.jpg"
            />
            <h3
              // style={{
              //   marginLeft: "20px",
              //   marginTop: "-20px"
              // }}
              className="menu-text text-bold"
            >
              Land Allocation System Acknowledgement
            </h3>
          </p>
        ) : (
          <div />
        )} */}
        <div
        // style={{ backgroundColor: "rgb(197, 225, 236)" }}
        >
          <div className="border-differ">
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
                Organization Details
              </h4>

              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="submitPopUp-text-align"> With In AGC </span>{" "}
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {props.SubmitValues.WithInAGC ? "true" : "false"}
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">Out Of AGC</span>
                </ListItemText>

                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {props.SubmitValues.OutOfAGC ? "true" : "false"}
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Land Allocate To</span> :{" "}
                </ListItemText>

                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>
                    {props.SubmitValues.AllocationId === 1
                      ? "Government"
                      : "Private"}
                  </span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Allocation To</span> :{" "}
                </ListItemText>

                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.AllocationSubName}</span>
                </ListItemText>

                <ListItemText>
                  <span className="text-bold">Agreement Type Name</span>
                </ListItemText>

                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.AgreementName}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Organization Name</span>{" "}
                </ListItemText>

                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.OrganizationName}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Phone Number</span>{" "}
                </ListItemText>

                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.OrgPhoneNumber}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Email Address</span>{" "}
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.OrgEmailAddress}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">House No, Building Name</span>{" "}
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.HouseNoBuildingName}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Street Name, Locality</span>{" "}
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.StreetNameLocality}</span>
                </ListItemText>
                {props.SubmitValues.AllocationId === 1 ? (
                  <ListItem>
                    <ListItemText
                      style={{ marginLeft: "-8px", marginTop: "-16px" }}
                    >
                      <span className="text-bold">Type Of Allocation</span>{" "}
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "-66px",
                        marginTop: "-12px"
                      }}
                    >
                      <span>{props.SubmitValues.TypeOfAllocationName}</span>
                    </ListItemText>
                  </ListItem>
                ) : (
                  <ListItem
                    style={{ marginTop: "131px", marginBottom: "-50px" }}
                  >
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "-8px",
                        marginTop: "-260px"
                      }}
                    >
                      <span className="text-bold">City</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "214px",
                        marginTop: "-256px"
                      }}
                    >
                      {" "}
                      <span>{props.SubmitValues.City}</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "-280px",
                        marginTop: "-212px"
                      }}
                    >
                      <span className="text-bold">State</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "217px",
                        marginTop: "-213px"
                      }}
                    >
                      <span>{props.SubmitValues.StateName}</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "-280px",
                        marginTop: "-171px"
                      }}
                    >
                      <span className="text-bold">ZipCode</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "214px",
                        marginTop: "-171px"
                      }}
                    >
                      {" "}
                      <span>{props.SubmitValues.ZipCode}</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "-278px",
                        marginTop: "-133px",
                        minWidth: "187px"
                      }}
                    >
                      <span className="text-bold">GST Number</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "27px",
                        marginTop: "-128px"
                      }}
                    >
                      {" "}
                      <span>{props.SubmitValues.GSTNumber}</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "-277px",
                        marginTop: "-93px"
                      }}
                    >
                      <span className="text-bold">Country</span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "right",
                        marginLeft: "213px",
                        marginRight: "310px",
                        marginTop: "-84px"
                      }}
                    >
                      {" "}
                      <span>{props.SubmitValues.CountryName}</span>
                    </ListItemText>
                  </ListItem>
                )}
              </ListItem>
            </List>
          </div>
          <Divider />
          <div className="border-differ">
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
                Authorization Details
              </h4>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="text-bold first-name-align ">
                    First Name
                  </span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.AuthPersonName1}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Last Name</span>{" "}
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>{props.SubmitValues.AuthPersonName2}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Relation Type</span>{" "}
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>{props.SubmitValues.RelationTypeName}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Relation Name</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span> {props.SubmitValues.RelationName}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Date Of Birth</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>{props.SubmitValues.AuthDateOfBirth}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Email Address</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>{props.SubmitValues.AuthEmailId}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Phone Number</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>{props.SubmitValues.AuthPhoneNumber}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Photo Id Type</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>
                    {props.SubmitValues.AuthPhotoIdType === ""
                      ? "-"
                      : props.SubmitValues.AuthPhotoIdType}
                  </span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Photo Id Number</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>
                    {" "}
                    {props.SubmitValues.AuthPhotoIdNumber === ""
                      ? "-"
                      : props.SubmitValues.AuthPhotoIdNumber}
                  </span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">House No,Building Name </span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span> {props.SubmitValues.AuthAddress1}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Street Name, Locality</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span> {props.SubmitValues.AuthAddress2}</span>
                </ListItemText>
              </ListItem>
            </List>
          </div>

          <Divider />
          {props.SubmitValues.WitnessDetailsList &&
          props.SubmitValues.WitnessDetailsList.length !== 0 ? (
            <div className="border-differ">
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
                  Witness Details
                </h4>
                <div className="table-scroll-bar">
                  <Table
                    style={{
                      border: "none !important",
                      padding: "10px 10px 10px 10px"
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Witness Name</TableCell>
                        <TableCell>Relation Type</TableCell>
                        <TableCell>Relation Name</TableCell>
                        <TableCell>Date Of Birth</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.SubmitValues.WitnessDetailsList.map(
                        (x: IwitnessValues) => (
                          <TableRow key={x.id}>
                            <TableCell>{x.WitnessName}</TableCell>
                            <TableCell>{x.RelationTypeAndName}</TableCell>
                            <TableCell>{x.RelationName}</TableCell>
                            <TableCell>{x.RelationDateOfBirth}</TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              </List>
            </div>
          ) : (
            <div />
          )}
          <Divider />

          <div className="border-differ">
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
                Agreement Details
              </h4>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="text-bold project-name-align">
                    Project Name
                  </span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span> {props.SubmitValues.ProjectTitle}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Project Purpose</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>{props.SubmitValues.ProjPurpose}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Township Name</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"
                  }}
                >
                  {" "}
                  <span>{props.SubmitValues.TownshipName}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">Project Description</span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "246px",
                    marginTop: "-24px"

                    /* padding: 10px 10px 10px 10px; */
                    /* margin-bottom: 9px; */
                  }}
                  className=" prj-des"
                >
                  {" "}
                  <span>{props.SubmitValues.ProjDescription}</span>
                </ListItemText>
              </ListItem>
            </List>
          </div>
          <Divider />

          {props.SubmitValues.TypeOfAllocationName === "Lease" ? (
            <div className="border-differ">
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
                  Lease Details
                </h4>
                <ListItem className="dilog-list">
                  <ListItemText className="first-child">
                    <span className="text-bold"> Lease Tenure</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {" "}
                    <span>{props.SubmitValues.LeaseTenure}</span>
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">Lease Amount(In Acrea)</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {" "}
                    <span>{props.SubmitValues.LeaseAmount}</span>
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">Total Land Cost</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {" "}
                    <span> {props.SubmitValues.TotalLandCost}</span>
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">Amount Paid</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {props.SubmitValues.AmountPaid}
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">Amount To Be Paid</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {props.SubmitValues.AmountToBePaid}
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">Lease Start Date</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {" "}
                    <span>{props.SubmitValues.LeaseStartDate}</span>
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">Lease End Date</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {" "}
                    <span> {props.SubmitValues.LeaseEndDate}</span>
                  </ListItemText>
                  <ListItemText>
                    <span className="text-bold">Registered Or Not</span>
                  </ListItemText>
                  <ListItemText
                    style={{
                      justifyContent: "right",
                      marginLeft: "246px",
                      marginTop: "-24px"
                    }}
                  >
                    {" "}
                    <span>
                      {" "}
                      {props.SubmitValues.registerOrNot
                        ? "Registered"
                        : "Not Registered"}
                    </span>
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          ) : (
            <div />
          )}
          <Divider />
          {props.SubmitValues.ProjectDetailsArray.length !== 0 &&
          (props.SubmitValues.ProjectDetailsArray.map(
            (x: IGoValues) => x.GoNumber
          )[0] !== "" ||
            props.SubmitValues.ProjectDetailsArray.map(
              (x: IGoValues) => x.GoDate
            )[0] !== "") ? (
            <div className="border-differ">
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
                <div className="table-scroll-bar">
                  <Table style={{ border: "none !important" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>GOM Number</TableCell>
                        <TableCell>GOM Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.SubmitValues.ProjectDetailsArray.map(
                        (x: IGoValues) => (
                          <TableRow key={x.id}>
                            <TableCell>{x.GoNumber}</TableCell>
                            <TableCell>{x.GoDate}</TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </div>
              </List>
            </div>
          ) : (
            <div />
          )}

          <Divider />
          {props.SubmitValues.LandAllocationTypeId === 2 &&
          props.SubmitValues.MileStoneArray &&
          props.SubmitValues.MileStoneArray.length !== 0 ? (
            <div className="border-differ">
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
                <div className="table-scroll-bar">
                  <Table
                    style={{
                      border: "none !important",
                      padding: "10px 10px 10px 10px"
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Milestone Year</TableCell>
                        <TableCell>Land Release</TableCell>
                        <TableCell>Effective Date Of Completion</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.SubmitValues.MileStoneArray.map((x: any) => (
                        <TableRow key={x.RuleId}>
                          <TableCell>{x.RuleId}</TableCell>
                          <TableCell>{x.LandRelease}</TableCell>
                          <TableCell>{x.DateOfCompletion}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </List>
            </div>
          ) : (
            <div />
          )}
          <Divider />
          <div className="border-differ">
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
                Land Details
              </h4>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  <span className="text-bold">
                    {" "}
                    Available Land Area(in Acres)
                  </span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "300px",
                    marginTop: "-24px"
                  }}
                >
                  <span>{props.SubmitValues.AvailableLandArea}</span>
                </ListItemText>
                <ListItemText>
                  <span className="text-bold">
                    {" "}
                    Requested Land Area(in Acres)
                  </span>
                </ListItemText>
                <ListItemText
                  style={{
                    justifyContent: "right",
                    marginLeft: "301px",
                    marginTop: "-22px"
                  }}
                >
                  <span>
                    {props.SubmitValues.RequiredLandSizeBeforeAllocation}
                  </span>
                </ListItemText>
                {props.SubmitValues.LandAllocationTypeId === 2 ? (
                  <ListItem style={{ marginLeft: "-8px", marginTop: "-12px" }}>
                    <ListItemText>
                      <span className="text-bold">
                        Initial Allocation Land Size(in Acres)
                      </span>
                    </ListItemText>
                    <ListItemText
                      style={{
                        justifyContent: "left",
                        marginLeft: "-111px",
                        marginTop: "-1px"
                      }}
                    >
                      {" "}
                      <span>
                        {props.SubmitValues.InitialAllocationSizeInAcres}
                      </span>
                    </ListItemText>
                  </ListItem>
                ) : (
                  <div />
                )}
              </ListItem>
            </List>
          </div>
          <Divider />

          {props.SubmitValues.Uploadimages &&
          props.SubmitValues.Uploadimages.length !== 0 ? (
            <div className="border-differ">
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
                  Upload Documents
                </h4>
                {props.SubmitValues.Uploadimages.map(
                  (x: IDocumentPropValues) => (
                    <ListItem className="dilog-list" key={x.PhotoId}>
                      <ListItemText className="first-child">
                        <span className="text-bold"> {x.PhotoIdTypeName}</span>
                      </ListItemText>
                      <br />
                      <img
                        // className="choose-img-user"
                        style={{ height: "160px", width: "200px" }}
                        // style={{ position: "initial" }}
                        src={x.FileType}
                      />

                      <br />
                    </ListItem>
                  )
                )}
              </List>
            </div>
          ) : (
            <div />
          )}
        </div>
      </li>
      {/* <label htmlFor="flat-button-file">
          <Button className="map-btn" component="span">
            Upload
          </Button>
        </label> */}

      {/* <ol>
              <h4>Upload Documents</h4>
              <ListItem className="dilog-list">
                <ListItemText className="first-child">
                  upload1 : {value.TenurePeriod}
                </ListItemText>
                <br />
                <ListItemText>Upload2 : {value.LeaseStartDate}</ListItemText>
                <br />
                <ListItemText>Upload3 : {value.LeaseEndDate}</ListItemText>
                <br />
              </ListItem>
            </ol> */}
      {props.SuccesPopUpOpen === false ? (
        <div>
          <div className="align-color-submitpopup">
            <h4 className="note-txt">Note: </h4>
            <label className="label-css">
              Please check the details, if any Amendments required, press Cancel
              and do the corrections, if not go ahead and Submit.
            </label>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                name="check"
                className="font-color-change"
                checked={props.check1}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>,
                  checked: boolean
                ) => {
                  props.handleSubmitCheck(checked);
                }}
              />
            }
            label="I hereby declare that the details furnished above are true 
        and correct to the best of my knowledge and belief and 
        I undertake to inform you of any changes therein, immediately."
          />

          <div className="align-submit-middle">
            <Button
              className={props.check1 === false ? "disable-btn" : "save-btn"}
              // tslint:disable-next-line:jsx-no-lambda
              onClick={event => props.onHandleFinalSubmit(props.SubmitValues)}
              color="primary"
              autoFocus={true}
              disabled={props.check1 === false}
            >
              Submit
            </Button>
            <Button
              className="save-btn"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => props.handleClose()}
              color="primary"
              autoFocus={true}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  </div>
);

export default SubmitPopUpInnerForm;
