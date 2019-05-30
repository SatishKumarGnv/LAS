import * as React from "react";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import DoughnutChart from "react-chartjs-2";
// import { Link } from "react-router-dom";
import {
  IDashboardApprovalProps,
  IDashboardStateProps,
  IPTMSDashboardItems
} from "../DefaultLayout/HomePage";

const item: any = localStorage.getItem("userDetails");
let user: any;
let UserId: any;
// let RoleId: any;
if (item) {
  user = JSON.parse(item);
  // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
  UserId = user !== null || user !== undefined ? user.model.UserId : 0;
}

export interface IDashboardValues {
  readonly District: number;
  readonly Mandal: number;
  readonly Village: number;
  readonly ApplicationId: null;
  readonly LandSize: number;
  readonly TownshipName: string;
  readonly ProjectType: null;
  readonly ProjectSubType: null;
  readonly LeaseTenure: null;
  readonly LeaseStartDate: null;

  readonly LeaseEndDate: null;
  readonly MandalName: null;
  readonly DistrictName: null;
  readonly PropertyImage: null;
  readonly KMLpath: null;
  readonly AvailableLandSize: number;
  readonly TownshipId: number;
  readonly TotalLandSize: number;
  readonly LogoImagePath: string;
  readonly VillageName: null;
  readonly PlotCode: null;
}
export interface IDashboardPieChartValues {
  readonly Count: number;
  readonly StatusName: string;
  readonly ThemeCityName: null;
  readonly ThemeCityId: number;
}

export interface IDashboardPieChartProps {
  readonly dashboardPieChartData: ReadonlyArray<IDashboardPieChartValues>;
  printDiv: any;
  readonly TotalDashboardPieChartCount: number;
}

export const SpecificOptions = (props: IDashboardValues) => {
  switch (props) {
    case props:
      if (props.TownshipName === "Township 1") {
        return "media-bg";
      } else if (props.TownshipName === "Township 2") {
        return "justice-bg";
      } else if (props.TownshipName === "Township 3") {
        return "electronics-bg";
      } else if (props.TownshipName === "Township 4") {
        return "knowledge-city";
      } else if (props.TownshipName === "Township 5") {
        return "finance-city";
      } else if (props.TownshipName === "Township 6") {
        return "tourism-city";
      } else if (props.TownshipName === "Township 7") {
        return "health-city";
      } else if (props.TownshipName === "Township 8") {
        return "sports-bg";
      } else if (props.TownshipName === "Township 9") {
        return "government-city";
      } else if (props.TownshipName === "Township 10") {
        return "sports-city";
      } else if (props.TownshipName === "Township 11") {
        return "justice-city";
      } else if (props.TownshipName === "Township 12") {
        return "electronics-city";
      } else if (props.TownshipName === "Township 13") {
        return "media-bg";
      } else if (props.TownshipName === "Township 14") {
        return "justice-bg";
      } else if (props.TownshipName === "Township 15") {
        return "electronics-bg";
      } else if (props.TownshipName === "Township 16") {
        return "knowledge-city";
      } else if (props.TownshipName === "Township 17") {
        return "finance-city";
      } else if (props.TownshipName === "Township 18") {
        return "tourism-city";
      } else if (props.TownshipName === "Township 19") {
        return "health-city";
      } else if (props.TownshipName === "Township 20") {
        return "sports-bg";
      } else if (props.TownshipName === "Township 21") {
        return "government-city";
      } else if (props.TownshipName === "Township 22") {
        return "sports-city";
      } else if (props.TownshipName === "Township 23") {
        return "justice-city";
      } else if (props.TownshipName === "Township 24") {
        return "electronics-city";
      } else if (props.TownshipName === "Township 25") {
        return "media-bg";
      } else if (props.TownshipName === "Township 26") {
        return "justice-bg";
      } else if (props.TownshipName === "Township 27") {
        return "electronics-bg";
      } else if (props.TownshipName === "Township 28") {
        return "knowledge-city";
      }

    default:
      return "";
  }
};

export const SpecificImageOptions = (props: IDashboardValues) => {
  switch (props) {
    case props:
      if (props.LogoImagePath === "Town_ship.png") {
        return "/images/town.png";
      } else if (props.LogoImagePath === "SportsCity.png") {
        return "/images/sports.png";
      } else if (props.LogoImagePath === "MediaCity.png") {
        return "/images/media.png";
      } else if (props.LogoImagePath === "GovernmentCity.png") {
        return "/images/government.png";
      } else if (props.LogoImagePath === "FinancialCity.png") {
        return "/images/finance.png";
      } else if (props.LogoImagePath === "KnowledgeCity.png") {
        return "/images/knowledge.png";
      } else if (props.LogoImagePath === "JusticeCity.png") {
        return "/images/justice.png";
      } else if (props.LogoImagePath === "HealthCity.png") {
        return "/images/health.png";
      } else if (props.LogoImagePath === "TourismCity.png") {
        return "/images/tourism.png";
      }

    default:
      return "";
  }
};

const Dashboard = (
  props: IDashboardStateProps &
    IDashboardPieChartProps &
    IDashboardApprovalProps
) => (
  <div className="dashboard-container">
    <div className="first-container">
      <div className="first-sub">
        <div className="slider-container">
          <img src="/images/slider-img" />
        </div>

        <div className="right-container-one">
          <div className="graph-main-container">
            <div className="graph-container">
              <h4 className="heading-chart">Application Status Till Date</h4>
              <h4>
                Total Application Count : {props.TotalDashboardPieChartCount}
              </h4>

              <DoughnutChart
                className="chart"
                data={{
                  datasets: [
                    {
                      data:
                        props.dashboardPieChartData &&
                        props.dashboardPieChartData.map(x => x.Count),

                      backgroundColor: [
                        "rgba(27 ,179 ,243 )",
                        "rgba(62, 183, 117)",
                        "rgba(233, 195, 23)"
                      ]
                    }
                  ],

                  labels:
                    props.dashboardPieChartData &&
                    props.dashboardPieChartData.map(x => x.StatusName)
                }}
                option={{
                  animation: {
                    animateRotate: false,
                    animateScale: true
                  },
                  circumference: Math.PI,
                  cutoutPercentage: 0,
                  legend: {
                    position: "left"
                  },
                  rotation: -Math.PI
                }}
              />
              <div className="title-btn">
                <Button
                  type="button"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => props.printDiv("printableArea")}
                >
                  <img src="/images/down1.png" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container-two">
          <div className="asset-apcrd-container">
            <div className="asset-conainer">
              <img src="/images/asset.png" />
              <h3 id="asset">
                <a className="dashboard-text">Asset Manager</a>
              </h3>
            </div>
            <div className="apcrd-conainer">
              <img src="/images/apcrda.png" />
              <h5>APCRDA Esp Tool</h5>
            </div>
            <div className="map-conainer">
              <img src="/images/villa.png" />
              <h5>PTMS</h5>
            </div>
            <div className="map-conainer">
              <img src="/images/home-map.png" />
              <h5>Amaravati Map</h5>
            </div>
          </div>
        </div>
      </div>
      {props.dashboardData &&
        props.dashboardData.map((x, TownshipId) => {
          TownshipId = TownshipId + 1;
          return (
            <div className="media-container" key={TownshipId}>
              <div className={SpecificOptions(x) || "electronics-bg"}>
                <img src={SpecificImageOptions(x)} />
                <h6>{x.TownshipName}</h6>
              </div>

              <div
                className="text-container"
                // tslint:disable-next-line:jsx-no-lambda
              >
                <h4>{x.TownshipName}</h4>
                <h6 className="first-heading">Available Land Size</h6>
                <label>{x.AvailableLandSize}Acres</label>

                <h6 className="second-heading">Total Land Size</h6>
                <label>{x.TotalLandSize}Acres</label>

                <div className="dashboard-link">
                  <button
                    // href={`/page/viewDetails/${x.TownshipId}`}
                    className="dashboard-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => props.handleClick(TownshipId)}
                  >
                    View Details
                  </button>
                  <button
                    // href={`/page/viewDetails/${x.TownshipId}`}
                    className="dashboard-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => props.handleOnClick(TownshipId)}
                  >
                    Allocated/In-ProgressList
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    {UserId === 21 ? (
      <div>
        <div className="waiting-container">
          <img src="/images/hand.png" />

          <h6>PTMS Pending Items</h6>
        </div>
        <ul className="Waiting-list">
          {props.DashboardPendingItems &&
          props.DashboardPendingItems.length !== 0 ? (
            <Table className="pending-table">
              <TableHead>
                <TableCell>Request Id</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Status</TableCell>
              </TableHead>
              <TableBody>
                {props.DashboardPendingItems &&
                  props.DashboardPendingItems.map((x: IPTMSDashboardItems) => (
                    <TableRow key={x.RequestId}>
                      <TableCell>
                        <Button
                          className="pending-btn" // tslint:disable-next-line:jsx-no-lambda
                          onClick={() =>
                            props.handlePTMSDashboardPendingItems(x.RequestId)
                          }
                        >
                          {x.RequestId}
                        </Button>
                      </TableCell>
                      <TableCell>{x.ApplicantName}</TableCell>
                      <TableCell>{x.ApplicationStatus}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          ) : (
            <div />
          )}
        </ul>
        <div className="waiting-container">
          <img src="/images/hand.png" />

          <h6>PTMS Property Change Pending Items </h6>
        </div>
        <ul className="Waiting-list">
          {props.dashboardPropertyChangePendingItems &&
          props.dashboardPropertyChangePendingItems.length !== 0 ? (
            <Table className="pending-table">
              <TableHead>
                <TableCell>Request Id</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Status</TableCell>
              </TableHead>
              <TableBody>
                {props.dashboardPropertyChangePendingItems &&
                  props.dashboardPropertyChangePendingItems.map(
                    (x: IPTMSDashboardItems) => (
                      <TableRow key={x.RequestId}>
                        <TableCell>
                          <Button
                            className="pending-btn"
                            // tslint:disable-next-line:jsx-no-lambda
                            onClick={() =>
                              props.handleDashboardPropertyChangePendingItems(
                                x.RequestId
                              )
                            }
                          >
                            {x.RequestId}
                          </Button>
                        </TableCell>
                        <TableCell>{x.ApplicantName}</TableCell>
                        <TableCell>{x.ApplicationStatus}</TableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          ) : (
            <div />
          )}
        </ul>
        <div className="waiting-container">
          <img src="/images/hand.png" />

          <h6> PTMS Property Tax Pending Items </h6>
        </div>
        <ul className="Waiting-list">
          {props.dashboardPropertyTaxPendingItems &&
          props.dashboardPropertyTaxPendingItems.length !== 0 ? (
            <Table className="pending-table">
              <TableHead>
                <TableCell>Request Id</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Status</TableCell>
              </TableHead>
              <TableBody>
                {props.dashboardPropertyTaxPendingItems &&
                  props.dashboardPropertyTaxPendingItems.map(
                    (x: IPTMSDashboardItems) => (
                      <TableRow key={x.RequestId}>
                        <TableCell>
                          <Button
                            className="pending-btn"
                            // tslint:disable-next-line:jsx-no-lambda
                            onClick={() =>
                              props.handleDashboardPropertyTaxPendingItems(
                                x.RequestId
                              )
                            }
                          >
                            {" "}
                            {x.RequestId}
                          </Button>
                        </TableCell>
                        <TableCell>{x.ApplicantName}</TableCell>
                        <TableCell>{x.ApplicationStatus}</TableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          ) : (
            <div />
          )}
        </ul>
      </div>
    ) : (
      <div>
        <div className="waiting-container">
          <img src="/images/hand.png" />
          {UserId === 35 || UserId === 36 ? (
            <h6>Waiting for Approval Applications/Approved Applications </h6>
          ) : (
            <h6>Waiting for Approval Applications </h6>
          )}
        </div>
        <ul className="Waiting-list">
          {props.dashboardApprovalData &&
          props.dashboardApprovalData.length !== 0 ? (
            props.dashboardApprovalData.map((x, id: number) => (
              <li key={id}>
                <a
                  href={`/page/tabsform/${x.ApplicationId}`}
                  className="left-heading"
                >
                  Application {x.ApplicationId} of {x.OrganizationName}
                </a>
              </li>
            ))
          ) : (
            <div />
          )}
        </ul>
      </div>
    )}
  </div>
);

const DashboardForm = (
  props: IDashboardStateProps &
    IDashboardPieChartProps &
    IDashboardApprovalProps
) => (
  <Dashboard
    handleDashboardPropertyChangePendingItems={
      props.handleDashboardPropertyChangePendingItems
    }
    handleDashboardPropertyTaxPendingItems={
      props.handleDashboardPropertyTaxPendingItems
    }
    handlePTMSDashboardPendingItems={props.handlePTMSDashboardPendingItems}
    TotalDashboardPieChartCount={props.TotalDashboardPieChartCount}
    dashboardPropertyChangePendingItems={
      props.dashboardPropertyChangePendingItems
    }
    dashboardPropertyTaxPendingItems={props.dashboardPropertyTaxPendingItems}
    DashboardPendingItems={props.DashboardPendingItems}
    dashboardApprovalData={props.dashboardApprovalData}
    dashboardLinkData={props.dashboardLinkData}
    dashboardData={props.dashboardData}
    // onHandleDashboardLink={props.onHandleDashboardLink}
    dashboardPieChartData={props.dashboardPieChartData}
    handleClick={props.handleClick}
    handleOnClick={props.handleOnClick}
    printDiv={props.printDiv}
  />
);

export default DashboardForm;
