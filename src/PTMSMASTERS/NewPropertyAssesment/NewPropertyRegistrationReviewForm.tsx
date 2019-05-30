import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
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
  // IAminityValues,
  IApartmentValues,
  ICategoryOwnershipDetails,
  IFloorValues,
  IGenderValues,
  IOwnershipValues,
  IProcessFeeProps,
  IPropertyDepartmentValues,
  IPropertyValues
} from "src/DefaultLayout/HomePage";
// import { FormHelperText } from "@material-ui/core";

export interface INewPropertyRegistrationReviewProps {
  readonly ReviewValues: IProcessFeeProps;
}
const NewPropertyRegistrationReviewForm = (
  values: INewPropertyRegistrationReviewProps
) => (
  <div
    className="below-overflow full-dat"
    // style={{ backgroundColor: "rgb(197, 225, 236)" }}
  >
    <div>
      <li>
        <div
          style={{
            display: "flex",
            fontSize: "1.5em"
          }}
        >
          <img
            src="/images/logo-crda.jpg"
            width="auto"
            height="60px"
            alt="block"
            style={{ verticalAlign: "middle" }}
          />
          <h3 className=" menu-text" style={{ marginLeft: "50px" }}>
            Full Data (Preview)
          </h3>
        </div>

        <div>
          <div className="border-differ details-border">
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
                Header Details
              </h4>

              <ListItem className="dilog-list">
                <div className="work-flow-grid row-card">
                  <ListItemText>
                    <span className="text-bold ">OwnerShip Category</span>
                  </ListItemText>
                  <ListItemText>
                    {values.ReviewValues.selectCategoryOwnershipValues
                      .filter(
                        (y: ICategoryOwnershipDetails) =>
                          y.CategoryOwnershipId ===
                          values.ReviewValues.CategoryOwnershipId
                      )
                      .map(
                        (y: ICategoryOwnershipDetails) =>
                          y.CategoryOwnershipName
                      )[0] === ""
                      ? "None"
                      : values.ReviewValues.selectCategoryOwnershipValues
                          .filter(
                            y =>
                              y.CategoryOwnershipId ===
                              values.ReviewValues.CategoryOwnershipId
                          )
                          .map(y => y.CategoryOwnershipName)[0]}
                  </ListItemText>
                </div>

                <div className="work-flow-grid row-card">
                  <ListItemText>
                    <div className="work-flow-grid">
                      <span className="text-bold ">Property Category</span>
                    </div>
                  </ListItemText>

                  <ListItemText>
                    {
                      values.ReviewValues.selectPropertyValues
                        .filter(
                          (y: IPropertyValues) =>
                            y.PropertyTypeId ===
                            values.ReviewValues.PropertyTypeId
                        )
                        .map((y: IPropertyValues) => y.PropertyTypeName)[0]
                    }{" "}
                  </ListItemText>
                </div>
                <div className="work-flow-grid row-card">
                  <ListItemText>
                    <div className="work-flow-grid">
                      <span className="text-bold ">
                        Appartment/Complex Name
                      </span>
                    </div>
                  </ListItemText>

                  <ListItemText>
                    <span>
                      {
                        values.ReviewValues.selectApartmentValues
                          .filter(
                            (y: IApartmentValues) =>
                              y.ApartmentNameId ===
                              values.ReviewValues.ApartmentNameId
                          )
                          .map((y: IApartmentValues) => y.ApartmentName)[0]
                      }
                    </span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid row-card">
                  <ListItemText>
                    <div className="work-flow-grid">
                      <span className="text-bold ">Property Department</span>
                    </div>
                  </ListItemText>

                  <ListItemText>
                    <span>
                      {
                        values.ReviewValues.selectDepartmentValues
                          .filter(
                            (y: IPropertyDepartmentValues) =>
                              y.PropertyDepartmentId ===
                              values.ReviewValues.PropertyDepartmentId
                          )
                          .map(
                            (y: IPropertyDepartmentValues) =>
                              y.PropertyDepartmentName
                          )[0]
                      }
                    </span>
                  </ListItemText>
                </div>
              </ListItem>
            </List>
          </div>
          <Divider />
          <div className="border-differ details-border">
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
                Ownership Details
              </h4>
              <Table style={{ border: "none !important" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Owner Name</TableCell>
                    <TableCell>Mobile Number</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Guardian Relation</TableCell>
                    <TableCell>Guardian</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {values.ReviewValues.OwnershipArray.map(
                    (x: IOwnershipValues) => (
                      <TableRow key={x.id}>
                        <TableCell>{x.OwnerName}</TableCell>
                        <TableCell>{x.MobileNo}</TableCell>
                        <TableCell>
                          {
                            x.selectGenderValues
                              .filter(
                                (y: IGenderValues) =>
                                  y.EnumMasterID === x.Gender
                              )
                              .map((y: IGenderValues) => y.EnumMasterDesc)[0]
                          }
                        </TableCell>
                        <TableCell>{x.EmailAddress}</TableCell>
                        <TableCell>
                          {
                            x.selectGuardianValues
                              .filter(
                                (y: IGenderValues) =>
                                  y.EnumMasterID === x.GuardianReg
                              )
                              .map((y: IGenderValues) => y.EnumMasterDesc)[0]
                          }
                        </TableCell>
                        <TableCell>{x.Guardian}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
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
                Location Details
              </h4>
              <ListItem className="dilog-list">
                <div className="work-flow-grid row-card">
                  <ListItemText className="first-child popup-row">
                    <span className="text-bold project-name list-text">
                      District Name
                    </span>
                  </ListItemText>
                  <ListItemText>
                    <span>{values.ReviewValues.District}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">Village</span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.Village}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text ">Colony</span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.Colony}</span>
                  </ListItemText>
                </div>{" "}
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">Ward No</span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.WardNo}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold  list-text">
                      Enumeration Block{" "}
                    </span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.Enumerationblock}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">Door No </span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.DoorNo}</span>
                  </ListItemText>
                </div>{" "}
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">
                      Corporation/Muncipality/NP
                    </span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.Corporation}</span>
                  </ListItemText>
                </div>{" "}
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">TownShip</span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.TownShip}</span>
                  </ListItemText>
                </div>{" "}
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">Locality</span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.Locality}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">Block No </span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.Block}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text">Plot No </span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.PlotNo}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text ">Pincode</span>
                  </ListItemText>
                  <ListItemText>
                    {" "}
                    <span>{values.ReviewValues.Pincode}</span>
                  </ListItemText>
                </div>
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
                Assessment Details
              </h4>

              <ListItem className="dilog-list">
                <div className="work-flow-grid">
                  <ListItemText className="first-child popup-row">
                    <span className="submitPopUp-text-align project-name">
                      Reason for Creation
                    </span>{" "}
                  </ListItemText>
                  <ListItemText
                  // style={{
                  //   justifyContent: "right",
                  //   marginLeft: "246px",
                  //   marginTop: "-24px"
                  // }}
                  >
                    New Property
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text ">
                      Occupancy Certificate Number
                    </span>
                  </ListItemText>

                  <ListItemText>
                    {values.ReviewValues.CertificateNumber}
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold  list-text">
                      Occupancy Certificate Date
                    </span>{" "}
                    :{" "}
                  </ListItemText>

                  <ListItemText>
                    <span>{values.ReviewValues.OccupancyCertificateDate}</span>
                  </ListItemText>
                </div>{" "}
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold list-text ">Extent of Site</span>{" "}
                    :{" "}
                  </ListItemText>

                  <ListItemText>
                    <span>{values.ReviewValues.ExtentOfSite}</span>
                  </ListItemText>
                </div>
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
                Construction Types
              </h4>

              <ListItem className="dilog-list">
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">Floor Type</span>
                  </ListItemText>
                  <ListItemText>
                    {
                      values.ReviewValues.selectfloorValues
                        .filter(
                          (y: IGenderValues) =>
                            y.EnumMasterID === values.ReviewValues.EnumMasterID
                        )
                        .map(y => y.EnumMasterDesc)[0]
                    }
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">Roof Type</span>
                  </ListItemText>

                  <ListItemText>
                    {
                      values.ReviewValues.selectroofValues
                        .filter(
                          y => y.EnumMasterID === values.ReviewValues.roofId
                        )
                        .map(y => y.EnumMasterDesc)[0]
                    }
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">Wood Type</span> :{" "}
                  </ListItemText>

                  <ListItemText>
                    <span>
                      {" "}
                      {
                        values.ReviewValues.selectwoodValues
                          .filter(
                            y => y.EnumMasterID === values.ReviewValues.woodId
                          )
                          .map(y => y.EnumMasterDesc)[0]
                      }
                    </span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">Wall Type</span> :{" "}
                  </ListItemText>

                  <ListItemText>
                    <span>
                      {
                        values.ReviewValues.selectwallValues
                          .filter(
                            y => y.EnumMasterID === values.ReviewValues.wallId
                          )
                          .map(y => y.EnumMasterDesc)[0]
                      }
                    </span>
                  </ListItemText>
                </div>
              </ListItem>
            </List>
          </div>
          <Divider />
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
                Amenities
              </h4>

              <ListItem className="dilog-list">
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">Aminity Types</span>
                  </ListItemText>
                  <ListItemText>
                    {values.ReviewValues.aminityTypes}
                  </ListItemText>
                </div>
              </ListItem>
            </List>
          </div>
          <Divider />
          <div className="border-differ details-border">
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
                Floor Details
              </h4>
              <Table style={{ border: "none !important" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Firm Name</TableCell>
                    <TableCell>Occupant Name</TableCell>
                    <TableCell>Floor Number</TableCell>
                    <TableCell>Construction Date</TableCell>
                    <TableCell>Effective From Date</TableCell>
                    <TableCell>Unstructered Land</TableCell>
                    <TableCell>Length</TableCell>
                    <TableCell>Breadth</TableCell>
                    <TableCell>Plinth Area</TableCell>
                    <TableCell>PlinthArea In BuildingPlan</TableCell>

                    <TableCell>Building Permission No</TableCell>

                    <TableCell>Building Permission Date</TableCell>

                    <TableCell>Building Classification</TableCell>
                    <TableCell>Nature Of Usage</TableCell>
                    <TableCell>Occupancy</TableCell>
                    <TableCell>Tax Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {values.ReviewValues.FloorArray.map((x: IFloorValues) => (
                    <TableRow key={x.id}>
                      <TableCell>{x.FirmName}</TableCell>
                      <TableCell>{x.OccupantName}</TableCell>
                      <TableCell>
                        {
                          x.selectFloorValues
                            .filter(
                              (y: IGenderValues) =>
                                y.EnumMasterID === x.FloorNumber
                            )
                            .map((y: IGenderValues) => y.EnumMasterDesc)[0]
                        }
                      </TableCell>
                      <TableCell>{x.ConstructionDate}</TableCell>
                      <TableCell>{x.EffectiveFromDate}</TableCell>
                      <TableCell>
                        {x.UnstructeredLand === 1 ? "YES" : "NO"}
                      </TableCell>
                      <TableCell>{x.Length}</TableCell>
                      <TableCell>{x.Breadth}</TableCell>
                      <TableCell>{x.PlinthArea}</TableCell>
                      <TableCell>{x.PlinthAreaInBuildingPlan}</TableCell>
                      <TableCell>{x.BuildingPermissionNo}</TableCell>
                      <TableCell>{x.BuildingPermissionDate}</TableCell>
                      <TableCell>
                        {
                          x.selectClassificationValues
                            .filter(
                              (y: IGenderValues) =>
                                y.EnumMasterID === x.BuildingClassification
                            )
                            .map((y: IGenderValues) => y.EnumMasterDesc)[0]
                        }
                      </TableCell>
                      <TableCell>
                        {
                          x.selectNatUsageValues
                            .filter(
                              (y: IGenderValues) =>
                                y.EnumMasterID === x.NatureOfUsage
                            )
                            .map((y: IGenderValues) => y.EnumMasterDesc)[0]
                        }
                      </TableCell>
                      <TableCell>
                        {
                          x.selectOccupancyValues
                            .filter(
                              (y: IGenderValues) =>
                                y.EnumMasterID === x.Occupancy
                            )
                            .map((y: IGenderValues) => y.EnumMasterDesc)[0]
                        }
                      </TableCell>
                      <TableCell>{x.taxAmount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
                Sourrounding Boundaries From Map
              </h4>

              <ListItem className="dilog-list">
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">North</span>
                  </ListItemText>
                  <ListItemText>{values.ReviewValues.North}</ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">East</span>
                  </ListItemText>

                  <ListItemText>{values.ReviewValues.East}</ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">West</span>
                  </ListItemText>

                  <ListItemText>
                    <span> {values.ReviewValues.West}</span>
                  </ListItemText>
                </div>
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">South</span>
                  </ListItemText>

                  <ListItemText>
                    <span>{values.ReviewValues.South}</span>
                  </ListItemText>
                </div>
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
                Upload Documents
              </h4>

              <ListItem className="dilog-list">
                <div className="work-flow-grid">
                  <ListItemText>
                    <span className="text-bold ">Document Type</span>
                  </ListItemText>
                  <ListItemText>
                    {
                      values.ReviewValues.NewPropertyDocumentTypeValues.filter(
                        (y: IGenderValues) =>
                          y.EnumMasterID ===
                          values.ReviewValues.NewPropertyDocumentTypeId
                      ).map((y: IGenderValues) => y.EnumMasterDesc)[0]
                    }
                  </ListItemText>
                </div>
                {values.ReviewValues.NewPropertyDocumentTypeId === 136 ? (
                  <div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">Certificate No</span>
                      </ListItemText>

                      <ListItemText>
                        {values.ReviewValues.CertificateNo}
                      </ListItemText>
                    </div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">Certificate Date</span>
                      </ListItemText>

                      <ListItemText>
                        <span> {values.ReviewValues.CertificateDate}</span>
                      </ListItemText>
                    </div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          MRO Proceeding Number
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>{values.ReviewValues.MROProceedingNumber}</span>
                      </ListItemText>
                    </div>

                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Date
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentDate}
                        </span>
                      </ListItemText>
                    </div>

                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Number
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentNumber}
                        </span>
                      </ListItemText>
                    </div>
                  </div>
                ) : values.ReviewValues.NewPropertyDocumentTypeId === 137 ||
                  values.ReviewValues.NewPropertyDocumentTypeId === 138 ? (
                  <div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">DeedNumber</span>
                      </ListItemText>

                      <ListItemText>
                        {values.ReviewValues.DeedNumber}
                      </ListItemText>
                    </div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">DeedDate</span>
                      </ListItemText>

                      <ListItemText>
                        <span> {values.ReviewValues.DeedDate}</span>
                      </ListItemText>
                    </div>

                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Date
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentDate}
                        </span>
                      </ListItemText>
                    </div>

                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Number
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentNumber}
                        </span>
                      </ListItemText>
                    </div>
                  </div>
                ) : values.ReviewValues.NewPropertyDocumentTypeId === 139 ? (
                  <div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">Decree Number</span>
                      </ListItemText>

                      <ListItemText>
                        <span> {values.ReviewValues.DecreeNumber}</span>
                      </ListItemText>
                    </div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">Decree Date</span>
                      </ListItemText>

                      <ListItemText>
                        <span>{values.ReviewValues.DecreeDate}</span>
                      </ListItemText>
                    </div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">Court Name</span>
                      </ListItemText>

                      <ListItemText>
                        <span>{values.ReviewValues.CourtName}</span>
                      </ListItemText>
                    </div>

                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Date
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentDate}
                        </span>
                      </ListItemText>
                    </div>

                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Number
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentNumber}
                        </span>
                      </ListItemText>
                    </div>
                  </div>
                ) : values.ReviewValues.NewPropertyDocumentTypeId === 140 ? (
                  <div>
                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Date
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentDate}
                        </span>
                      </ListItemText>
                    </div>

                    <div className="work-flow-grid">
                      <ListItemText>
                        <span className="text-bold ">
                          Registered Document Number
                        </span>
                      </ListItemText>

                      <ListItemText>
                        <span>
                          {values.ReviewValues.RegisteredDocumentNumber}
                        </span>
                      </ListItemText>
                    </div>
                  </div>
                ) : (
                  <div />
                )}
              </ListItem>
            </List>
          </div>
          <Divider />
        </div>
      </li>

      <div className="align-submit-middle">
        <Button
          type="button"
          className="save-btn"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() =>
            values.ReviewValues.onHandleRegistrationReviewSubmit(
              values.ReviewValues
            )
          }
          color="primary"
          autoFocus={true}
          // disabled={values.check1 === false}
        >
          OK
        </Button>
        <Button
          type="button"
          className="save-btn"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => values.ReviewValues.handleClose()}
          color="primary"
          autoFocus={true}
        >
          Cancel
        </Button>
      </div>
    </div>
  </div>
);

export default NewPropertyRegistrationReviewForm;
