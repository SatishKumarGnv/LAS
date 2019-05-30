import * as React from "react";

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
import {
  IDraftAssessmentPopUpValues,
  IGenderValues,
  IOwnerDetailsValues
} from "src/DefaultLayout/HomePage";

export interface IDraftAssessmentProps {
  readonly draftAssessmentPopUpValues: IDraftAssessmentPopUpValues;
  selectfloorValues: ReadonlyArray<IGenderValues>;
  selectroofValues: ReadonlyArray<IGenderValues>;
  selectwoodValues: ReadonlyArray<IGenderValues>;
  selectwallValues: ReadonlyArray<IGenderValues>;
  onHandleDraftAssessmentClose(): void;
}
export const DraftAssessmentPopUp = (props: IDraftAssessmentProps) => (
  <div
    className="below-overflow"
    // style={{ backgroundColor: "rgb(197, 225, 236)" }}
  >
    {/* <div className="popup-close-btn">
      <Button color="primary" onClick={props.onHandleClose}>
        X
      </Button>
    </div> */}

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
          </h4>{" "}
          <ListItem className="dilog-list">
            <div className="work-flow-grid row-card">
              <ListItemText className="first-child popup-row">
                <span className="text-bold project-name list-text">
                  Assessment Id
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.AssessmentID}
              </ListItemText>
            </div>

            <div className="work-flow-grid row-card">
              <ListItemText>
                <div className="work-flow-grid">
                  <span className="text-bold list-text ">
                    Category Ownership
                  </span>
                </div>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.CategoryOwnership}
              </ListItemText>
            </div>

            <div className="work-flow-grid row-card">
              <ListItemText>
                <div className="work-flow-grid">
                  <span className="text-bold list-text ">
                    Property Department{" "}
                  </span>
                </div>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.PropertyDepartment}
              </ListItemText>
            </div>

            <div className="work-flow-grid row-card">
              <ListItemText>
                <div className="work-flow-grid">
                  <span className="text-bold list-text "> Property Type</span>
                </div>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.PropertyType}
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
          {props.draftAssessmentPopUpValues.NewOwnerDetails &&
          props.draftAssessmentPopUpValues.NewOwnerDetails.length !== 0 ? (
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
                {props.draftAssessmentPopUpValues.NewOwnerDetails.map(
                  (y: IOwnerDetailsValues, i: number) => (
                    <TableRow key={y.OwnerName}>
                      <TableCell>{y.OwnerMobileNo}</TableCell>
                      <TableCell>{y.OwnerGender}</TableCell>
                      <TableCell>{y.OwnerEmail}</TableCell>
                      <TableCell>{y.OwnerGuardianRelation}</TableCell>
                      <TableCell>{y.OwnerGuardianName}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          ) : (
            <div />
          )}
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
                  DoorNo{" "}
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.DoorNo}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Pincode </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.Pincode}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Enumeration Block</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.EnumerationBlock_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text"> Locality ID </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.LocalityID_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">District</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.District_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">
                  Corporation/Municipality
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.CorpMunicipality_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Mandal</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.Mandal_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Township</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.Township_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Sector</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.Sector_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Colony</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.Colony_str}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Zone No</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.ZoneNo_str}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Ward No</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.WardNo_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Block No</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.BlockNo_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">ElectionWard</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.ElectionWard_str}
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
                  Reason For Creation{" "}
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.ReasonCreation === 1
                  ? "New Property"
                  : ""}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text ">
                  Occupancy Certificate Number
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.OccupancyCertificateNo}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">
                  Occupancy certificate Date
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.OccupancyCertificateDate_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Extent of Site</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.ExtentSite}
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
            <div className="work-flow-grid row-card">
              <ListItemText className="first-child popup-row">
                <span className="text-bold project-name list-text">
                  Floor Type
                </span>
              </ListItemText>
              <ListItemText>
                {
                  props.selectfloorValues
                    .filter(
                      y =>
                        y.EnumMasterID ===
                        props.draftAssessmentPopUpValues.FloorType
                    )
                    .map(y => y.EnumMasterDesc)[0]
                }
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Roof Type</span>
              </ListItemText>
              <ListItemText>
                {
                  props.selectroofValues
                    .filter(
                      y =>
                        y.EnumMasterID ===
                        props.draftAssessmentPopUpValues.RoofType
                    )
                    .map(y => y.EnumMasterDesc)[0]
                }
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Wall Type</span>
              </ListItemText>
              <ListItemText>
                {
                  props.selectwallValues
                    .filter(
                      y =>
                        y.EnumMasterID ===
                        props.draftAssessmentPopUpValues.WallType
                    )
                    .map(y => y.EnumMasterDesc)[0]
                }
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text"> Wood Type</span>
              </ListItemText>
              <ListItemText>
                {
                  props.selectwoodValues
                    .filter(
                      y =>
                        y.EnumMasterID ===
                        props.draftAssessmentPopUpValues.WoodType
                    )
                    .map(y => y.EnumMasterDesc)[0]
                }
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
            Amenities
          </h4>

          <ListItem className="dilog-list">
            <div className="work-flow-grid">
              <ListItemText className="first-child">
                <span className="text-bold list-text">Selected Amenities</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.Amenities}
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
            Floor Details
          </h4>
          {props.draftAssessmentPopUpValues.NewFloorDetails &&
          props.draftAssessmentPopUpValues.NewFloorDetails.length !== 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Floor Number</TableCell>
                  <TableCell>Classification Of Building</TableCell>
                  <TableCell>Nature Of Usage</TableCell>
                  <TableCell>Firm Name</TableCell>
                  <TableCell>Guardian Relation</TableCell>
                  <TableCell>Guardian</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.draftAssessmentPopUpValues.NewFloorDetails.map(
                  (y: any, i: number) => (
                    <TableRow key={y.OwnerName}>
                      <TableCell>{y.OwnerMobileNo}</TableCell>
                      <TableCell>{y.OwnerGender}</TableCell>
                      <TableCell>{y.OwnerEmail}</TableCell>
                      <TableCell>{y.OwnerGuardianRelation}</TableCell>
                      <TableCell>{y.OwnerGuardianName}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          ) : (
            <div />
          )}
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
            Surrounding Boudararies Details
          </h4>

          <ListItem className="dilog-list">
            <div className="work-flow-grid row-card">
              <ListItemText className="first-child popup-row">
                <span className="text-bold project-name list-text">North </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.North}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">South </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.South}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text"> East </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.East}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text"> West </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.West}
              </ListItemText>
            </div>
          </ListItem>
        </List>
      </div>
      <Divider />

      {props.draftAssessmentPopUpValues.DocumentType}
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
            <div className="work-flow-grid row-card">
              <ListItemText className="first-child popup-row">
                <span className="text-bold project-name list-text">
                  Document Type
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.DocumentType}
              </ListItemText>
            </div>
            <div className="work-flow-grid row-card">
              <ListItemText className="first-child popup-row">
                <span className="text-bold project-name list-text">
                  Certificate Number
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.CertificateNo}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text"> Certificate Date </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.CertificateDate}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">
                  MRO Proceeding Number
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.MROProceedingNo}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                {" "}
                <span className="text-bold list-text">
                  Registered Document Number
                </span>{" "}
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.RegisteredDocNo}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">
                  Registered Document Date
                </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.RegisteredDocDate_str}
              </ListItemText>
            </div>

            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Deed Number</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.DeedNo}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Deed Date </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.DeedDate_str}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Decree Number</span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.DecreeNo}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Decree Date </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.Decreedate}
              </ListItemText>
            </div>
            <div className="work-flow-grid">
              <ListItemText>
                <span className="text-bold list-text">Court Name </span>
              </ListItemText>
              <ListItemText>
                {props.draftAssessmentPopUpValues.CourtName}
              </ListItemText>
            </div>
          </ListItem>
        </List>
      </div>
      <div className="cls-btn">
        <Button color="primary" onClick={props.onHandleDraftAssessmentClose}>
          Close
        </Button>
      </div>
    </div>
  </div>
);

export default DraftAssessmentPopUp;
