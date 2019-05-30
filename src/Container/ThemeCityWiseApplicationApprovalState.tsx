import "chartjs-plugin-datalabels";
import * as React from "react";

// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Bar } from "react-chartjs-2";
import {
  getThemeCitywiseData,
  getTownShipApplicationData,
  getTownShipGridData,
  getTownShipListData,
  getTownShipPopUpData
} from "src/Api_Integration/ThemeCityApplicationService";
import ThemeCityTotalApplicationTableForm from "src/MisReports/ThemeCityTotalApplications";
import ThemeCityLandForm from "../MisReports/ThemeCityApplicationApproval";
import ThemeCityApplicationReportForm from "../MisReports/ThemeCityApplicationApprovalReport";
import { ISubmitApplicationPopUpValues } from "./SubmittedApplicationState";
// export interface ITownShipPopUpValues{
//    readonly
//  }
// export interface ITownShipPopUpProps {
//   // readonly applicationPopUpList: ReadonlyArray<ITownShipPopUpValues>;
//   readonly popUpid: string;
//   // readonly AllocateTo: string;
//   onHandleClose(): void;
// }
export interface IThemeCityReportWiseProps {
  onThemeCitySubmit(evt: any): void;
}
export interface ICityValues {
  readonly TownshipId: number;
  readonly TownshipName: string;
}

export interface IPopUpProps {
  readonly applicationPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly popUpid: string;
  onHandleDialogClose(): void;
}

export interface ISelectThemeCityProps {
  readonly selectThemeCityTypeValues: ReadonlyArray<ICityValues>;
  handleClick(evt: any): void;
}
export interface IThemeCityApprovalValues {
  readonly TownshipName: string;
  readonly TotalApplications: number;
  readonly Approved: number;
  readonly InProgress: number;
  readonly Rejected: number;
  readonly ApplicationId: string;
  readonly OrganiztionName: string;
  readonly AgreementTypeName: string;
  readonly ProjectName: string;
  readonly RequestLand: number;
  readonly LandonHold: number;
  readonly AllotedLand: string;
  readonly Status: string;
  readonly CurrentStatus: string;
  readonly NextActivivtyInfo: string;
  readonly LandAllocationType: number;
  readonly expandApplicationId: string;
}
export interface IThemeCityApplicationProps {
  readonly ApplicationMasterList: ReadonlyArray<IThemeCityApprovalValues>;
}
export interface ITownshipValueProps {
  readonly ThemeCityApprovalValues: IThemeCityApprovalValues;
}
export interface ITownShipExpandRowProps {
  readonly ApplicationMasterList: ReadonlyArray<IThemeCityApprovalValues>;
  readonly expandApplicationId: string;
  readonly open: boolean;
}

export interface IThemeCityApprovalTableValues {
  readonly ApplicationId: string;
  readonly OrganizationName: string;
  readonly AllocationProcess: string;
  readonly Projectname: string;
  readonly TownshipName: string;
  readonly RequestedLand: number;
}

// export interface IThemeCityApprovalTableProps {
//   readonly ThemeCityListTable: ReadonlyArray<IThemeCityApprovalTableValues>;
//   readonly page2: number;
//   readonly rowsPerPage2: number;
//   readonly count: number;
//   readonly searchInput2: string;
//   onHandleSearch(event: any): void;
//   onHandleChangeRowsPerPage(event: any): void;
//   onHandlePageChange(evt: any, page: number): void;
// }

export interface IThemeCityApprovalStateProps {
  readonly applicationPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly ApplicationMasterList: ReadonlyArray<IThemeCityApprovalValues>;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly count: number;
  readonly searchInput: string;
  readonly dialogExpandOpen: boolean;
  readonly dialogOpen: boolean;
  readonly popUpid: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
  onHandleClick(event: any): void;
  onHandleClose(): void;
  onHandleDialogClose(): void;
}

export interface ICapitalCityBarValues {
  readonly TownshipName: string;
  readonly TownshipId: number;
  readonly PipelineAmount: number;
  readonly ReceivedAmount: number;
  readonly GrossTotal: number;
  readonly TotalLand: number;
  readonly AvailableLand: number;
  readonly ReservedLand: number;
  readonly AllocatedLand: number;
  readonly StatusName: string;
  readonly Count: number;
}

export interface IThemeCityBarState {
  readonly barDataValues: ReadonlyArray<ICapitalCityBarValues>;
}

class ThemeCityApprovalState extends React.Component<
  IThemeCityApprovalStateProps & IThemeCityBarState,
  any
> {
  public state = {
    barDataValues: [],
    labels: [],
    popUpid: "",
    // tslint:disable-next-line:object-literal-sort-keys
    ThemeCityList: [],
    applicationPopUpList: [],

    ApplicationMasterList: [],
    ThemeCityListTable: [],
    selectThemeCityTypeValues: [],
    emptyRows: 0,
    open: false,
    dialogOpen: false,
    TownshipId: 0,
    TownshipName: "",
    page: 0,
    rowsPerPage: 5,
    count: 0,
    searchInput: "",
    ThemeCityApprovalValues: {
      AgreementTypeName: "",
      AllotedLand: "",
      ApplicationId: "",
      Approved: 0,
      CurrentStatus: "",
      InProgress: 0,
      LandAllocationType: 0,
      LandonHold: 0,
      NextActivivtyInfo: "",
      OrganiztionName: "",
      ProjectName: "",
      Rejected: 0,
      RequestLand: 0,
      Status: "",
      TotalApplications: 0,
      TownshipName: "",
      expandApplicationId: ""
    },

    expandApplicationId: "",
    dialogExpandOpen: false
  };

  constructor(
    props: IThemeCityApprovalStateProps &
      IThemeCityApprovalStateProps &
      IThemeCityBarState
  ) {
    super(props);
  }

  public componentWillMount() {
    getTownShipListData()
      .then(res => {
        this.setState({
          ...this.state,
          selectThemeCityTypeValues: res.townshipViewModelLst
        });
      })
      .catch(err => err);
    // getTownShipGridData(this.state.TownshipId)
    //   .then(res => {
    //     this.setState({
    //       ...this.state,
    //       ApplicationMasterList: res.aaData,
    //       count: res.aaData.length
    //     });
    //   })
    //   // tslint:disable-next-line:no-console
    //   .catch(err => console.log(err));

    getTownShipApplicationData()
      .then(res => {
        this.setState({
          ...this.state,
          ApplicationMasterList: res.aaData,
          barDataValues: res.aaData,
          count: res.aaData.length
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));

    // getThemeCitywiseData(this.state.TownshipId)
    //   .then(res => {
    //     // tslint:disable-next-line:no-console
    //     console.log(res);
    //     this.setState({
    //       ...this.state,

    //       barDataValues: res

    //       //  labels: res.StatusName
    //     });
    //   })
    //   .catch(err => err);
  }
  public onHandleClick = (event: IThemeCityApprovalValues) => {
    this.setState({
      ...this.state,
      ThemeCityApprovalValues: event,
      expandApplicationId: event.ApplicationId,
      open: !this.state.open,
      // tslint:disable-next-line:object-literal-sort-keys
      dialogExpandOpen: true
    });
  };
  public handleChangePage = (event: any, p: number) => {
    this.setState({ ...this.state, page: p });
  };
  public handleClick = (evt: any) => {
    
    if (evt.target.value !== 0) {
      getThemeCitywiseData(evt.target.value)
        .then(res => {
        
          this.setState({
            ...this.state,
            TownshipId: evt.target.value,
            barDataValues: res.model.filter(
              (x: ICapitalCityBarValues) => x.TownshipId === evt.target.value
            )

            //  labels: res.StatusName
          });
          // tslint:disable-next-line:no-console
          console.log(
            res.model.filter(
              (x: ICapitalCityBarValues) => x.TownshipId === evt.target.value
            )
          );
        })
        .catch(err => err);
      getTownShipGridData(evt.target.value)
        .then(res => {
          this.setState({
            ...this.state,
            ApplicationMasterList: res.aaData,
            count: res.aaData.length
          });
        })
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      getTownShipApplicationData()
        .then(res => {
          this.setState({
            ...this.state,
            ApplicationMasterList: res.aaData,
            TownshipId: evt.target.value,
            barDataValues: res.aaData,
            count: res.aaData.length
          });
        })
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    }
  };

  public onThemeCitySubmit = (evt: any) =>
    // tslint:disable-next-line:no-console
    console.log(evt);

  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };
  public onHandleActionClick = (event: any) => {
    getTownShipPopUpData(event.ApplicationId).then(res => {
      this.setState({
        ...this.state,
        // AllocateTo: value,
        applicationPopUpList: res.applicationDetailsViewModelLst,

        dialogOpen: true,
        popUpid: event.ApplicationId
      });
    });
  };

  public onHandleSearch = (event: any) => {
    // tslint:disable-next-line:no-console
    const searchInput = event.target.value;
    const data = this.state.ApplicationMasterList.filter(
      (x: IThemeCityApprovalValues) =>
        searchInput !== ""
          ? x.TotalApplications.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            x.InProgress.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            x.Approved.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            x.TownshipName.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.Rejected.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };
  public onHandleSearch1 = (event: any) => {
    // tslint:disable-next-line:no-console
    const searchInput = event.target.value;
    const data = this.state.ApplicationMasterList.filter(
      (x: IThemeCityApprovalValues) =>
        searchInput !== ""
          ? x.ApplicationId.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.OrganiztionName.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            x.ProjectName.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            x.RequestLand.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };
  public printDiv = (divId: string) => {
    // tslint:disable-next-line:no-console
    const base64 = document.getElementsByTagName("canvas")[0].toDataURL();

    const imagedata = atob(base64.split(",")[1]);
    // Use typed arrays to convert the binary data to a Blob
    const arraybuffer = new ArrayBuffer(imagedata.length);
    const view = new Uint8Array(arraybuffer);
    for (let i = 0; i < imagedata.length; i++) {
      // tslint:disable-next-line:no-bitwise
      view[i] = imagedata.charCodeAt(i) & 0xff;
    }
    try {
      // This is the recommended method:
      const blob = new Blob([arraybuffer], {
        type: "application/octet-stream"
      });
      const url = window.URL.createObjectURL(blob);
      location.href = url;
    } catch (e) {
      // The BlobBuilder API has been deprecated in favour of Blob, but older
      // browsers don't know about the Blob constructor
      // IE10 also supports BlobBuilder, but since the `Blob` constructor
      //  also works, there's no need to add `MSBlobBuilder`.
      // var bb = new (window.WebKitBlobBuilder || window.MozBlobBuilder)();
      // bb.append(arraybuffer);
      // var blob = bb.getBlob("application/octet-stream"); // <-- Here's the Blob
    }
  };
  public handleClose = () => {
    this.setState({ ...this.state, dialogOpen: false });
  };
  public onHandleClose = () => {
    this.setState({ dialogExpandOpen: false });
  };

  public handleDownload = () => {
    this.setState({ open: true });
    setTimeout(() => {
      window.print();
    }, 1000);
  };

  public render() {
    const options = {
      barValueSpacing: 5,
      scales: {
        plugins: {
          datalabels: {
            display: true,
            xAxisID: "bar-x-axis1"
          }
        },
        xAxes: [
          {
            fullWidth: true,
            id: "bar-x-axis1",

            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,

              labelString: "Total Revenue Chart"
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Total Amount(in Crores)"
            },
            // stacked: true,
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },

      tooltips: {
        enabled: true,
        intersect: true,
        isAnimationActive: false,
        // tslint:disable-next-line:object-literal-sort-keys
        bezierCurve: false,
        onAnimationComplete: () => alert("done")
      }
    };

    const bar = {
      datasets: [
        {
          backgroundColor: "rgb(255,215,0)",
          data: this.state.barDataValues.map(
            (x: ICapitalCityBarValues) => x.Count
          ),
          label: "Township Wise Allocation Proposal Status Report"
        }
      ],
      labels: ["In Progress", "Approved", "Rejected"]
    };

    const options1 = {
      scaleShowVerticalLines: false,
      scales: {
        plugins: {
          datalabels: {
            display: true
          }
        },
        xAxes: [
          {
            ticks: {
              // stepSize: 1,
              // // tslint:disable-next-line:object-literal-sort-keys
              // min: 0,
              autoSkip: false
            },
            // tslint:disable-next-line:object-literal-sort-keys
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: "Total Revenue Chart"
            },
            stacked: true
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Total Amount(In Crores)"
            },
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },

      tooltips: {
        enabled: true,
        intersect: true,
        isAnimationActive: false,
        // tslint:disable-next-line:object-literal-sort-keys
        bezierCurve: false,
        onAnimationComplete: () => alert("done")
      }
    };
    // const options = {
    //   tooltips: {
    //     // custom: CustomTooltips,
    //     enabled: false
    //   },

    //   // tslint:disable-next-line:object-literal-sort-keys
    //   maintainAspectRatio: false,
    //   // tslint:disable-next-line:object-literal-sort-keys
    //   legend: {
    //     display: false
    //   },
    //   plugins: {
    //     datalabels: {
    //       color: "black",
    //       display: true
    //     }
    //   },
    //   scales: {
    //     xAxes: [
    //       {
    //         ticks: {
    //           autoSkip: false
    //         }
    //       }
    //     ],
    //     yAxes: [
    //       {
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }
    //     ]
    //   }
    // };
    const barData = {
      labels: this.state.barDataValues.map((x: any) => x.TownshipName),

      datasets: [
        {
          backgroundColor: "rgb(254, 198, 35)",
          data: this.state.barDataValues.map((x: any) => x.TotalApplications),
          label: "Total Applications"
        }
      ]
    };
    return (
      <div className="innerpage-container">
        <div className="inner-header-titile">
          <img src="/images/login-audit-icon.png" />
          <h2> Township Wise Application Approval Status Report</h2>
        </div>
        <Card className="graph-card">
          <CardContent>
            <div className="title-row">
              <Typography
                gutterBottom={true}
                variant="headline"
                component="h4"
                className="grap-heading"
              >
                <img src="/images/table-icon.png" />
                Township Wise Allocation Proposals Status Report
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    type="button"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.printDiv("printableArea")}
                  >
                    Print Chart
                  </Button>
                </div>
              </Typography>
            </div>
          </CardContent>
          <div className="graph-card">
            <ThemeCityApplicationReportForm
              selectThemeCityTypeValues={this.state.selectThemeCityTypeValues}
              onThemeCitySubmit={this.onThemeCitySubmit}
              TownshipId={this.state.TownshipId}
              TownshipName={this.state.TownshipName}
              handleClick={this.handleClick}
            />
            {this.state.TownshipId === 0 ? (
              <div id="printableArea" className="chart-wrapper">
                <Bar data={barData} options={options1} />
              </div>
            ) : (
              <div id="printableArea" className="chart-wrapper">
                <Bar data={bar} options={options} />
              </div>
            )}
          </div>
        </Card>
        {this.state.TownshipId === 0 ? (
          <div className="graph-card">
            <Card>
              <CardContent>
                <Typography
                  gutterBottom={true}
                  variant="headline"
                  component="h4"
                  className="grap-heading"
                >
                  <img src="/images/table-icon.png" />
                  Township Wise Detail Data
                </Typography>
              </CardContent>
              <ThemeCityTotalApplicationTableForm
                applicationPopUpList={this.state.applicationPopUpList}
                popUpid={this.state.popUpid}
                onHandleDialogClose={this.handleClose}
                count={this.state.count}
                page={this.state.page}
                rowsPerPage={this.state.rowsPerPage}
                searchInput={this.state.searchInput}
                onHandleSearch={this.onHandleSearch}
                onHandlePageChange={this.handleChangePage}
                onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                ApplicationMasterList={this.state.ApplicationMasterList}
                onHandleClick={this.onHandleClick}
                ThemeCityApprovalValues={this.state.ThemeCityApprovalValues}
                expandApplicationId={this.state.expandApplicationId}
                dialogExpandOpen={this.state.dialogExpandOpen}
                onHandleClose={this.onHandleClose}
                onHandleActionClick={this.onHandleActionClick}
                dialogOpen={this.state.dialogOpen}
              />
            </Card>
          </div>
        ) : (
          <div className="graph-card">
            <Card>
              <CardContent>
                <Typography
                  gutterBottom={true}
                  variant="headline"
                  component="h4"
                  className="grap-heading"
                >
                  <img src="/images/table-icon.png" />
                  Township Wise Detail Data
                </Typography>
              </CardContent>
              <ThemeCityLandForm
                applicationPopUpList={this.state.applicationPopUpList}
                popUpid={this.state.popUpid}
                onHandleDialogClose={this.handleClose}
                count={this.state.count}
                page={this.state.page}
                rowsPerPage={this.state.rowsPerPage}
                searchInput={this.state.searchInput}
                onHandleSearch={this.onHandleSearch1}
                onHandlePageChange={this.handleChangePage}
                onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
                ApplicationMasterList={this.state.ApplicationMasterList}
                onHandleClick={this.onHandleClick}
                ThemeCityApprovalValues={this.state.ThemeCityApprovalValues}
                expandApplicationId={this.state.expandApplicationId}
                dialogExpandOpen={this.state.dialogExpandOpen}
                onHandleClose={this.onHandleClose}
                onHandleActionClick={this.onHandleActionClick}
                dialogOpen={this.state.dialogOpen}
              />
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default ThemeCityApprovalState;
