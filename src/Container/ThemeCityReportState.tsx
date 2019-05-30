// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import * as moment from "moment";

// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { Bar } from "react-chartjs-2";
import {
  getThemeCitywiseData,
  getTownShipData
} from "../Api_Integration/ThemeCityReportService";
import ThemeCityReportForm from "../MisReports/ThemeCityWiseReport";
// import { getThemeCitywiseData } from "../Api_Integration/ThemeCityReportService";
export interface IThemeCityReportWiseProps {
  onThemeCitySubmit(evt: any): void;
}
export interface ICityValues {
  readonly TownshipId: number;
  readonly TownshipName: string;
}
export interface ISelectThemeCityProps {
  readonly selectThemeCityTypeValues: ReadonlyArray<ICityValues>;
  handleClick(evt: any): void;
}

class ThemeCityReportState extends React.Component<
  ISelectThemeCityProps & IThemeCityReportWiseProps,
  any
> {
  public readonly state = {
    barDataValues: [],
    // tslint:disable-next-line:object-literal-sort-keys
    TownshipId: 0,
    TownshipName: "",
    selectThemeCityTypeValues: []
  };
  constructor(props: ISelectThemeCityProps & IThemeCityReportWiseProps) {
    super(props);
  }

  public componentWillMount() {
    getTownShipData()
      .then(res => {
        this.setState({
          ...this.state,
          selectThemeCityTypeValues: res.townshipViewModelLst
        });
      })
      .catch(err => err);
    getThemeCitywiseData(this.state.TownshipId)
      .then(res => {
        this.setState({
          ...this.state,
          barDataValues: res.objRevenueDetailList
        });
      })
      .catch(err => err);
  }

  public handleClick = (evt: any) => {
    getThemeCitywiseData(evt.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          barDataValues: res.objRevenueDetailList
        });
      })
      .catch(err => err);
  };
  public onThemeCitySubmit = (evt: any) =>
    // tslint:disable-next-line:no-console
    console.log(evt);

  public printDiv = (divId: string) => {
    // tslint:disable-next-line:no-console
    const base64 = document.getElementsByTagName("canvas")[0].toDataURL();

    const imagedata = atob(base64.split(",")[1]);
    const arraybuffer = new ArrayBuffer(imagedata.length);
    const view = new Uint8Array(arraybuffer);
    for (let i = 0; i < imagedata.length; i++) {
      // tslint:disable-next-line:no-bitwise
      view[i] = imagedata.charCodeAt(i) & 0xff;
    }
    try {
      const blob = new Blob([arraybuffer], {
        type: "application/octet-stream"
      });
      const url = window.URL.createObjectURL(blob);
      location.href = url;
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.log(e);
    }
  };

  public render() {
    const options = {
      scaleShowVerticalLines: false,
      scales: {
        plugins: {
          datalabels: {
            display: true
          }
        },
        xAxes: [
          {
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
              labelString: "Total Amount(in Crores)"
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

    const barData = {
      labels: this.state.barDataValues.map((x: any) => x.TownshipName),

      datasets: [
        {
          backgroundColor: "rgb(254, 198, 35)",
          data: this.state.barDataValues.map((x: any) => x.PipelineAmount),
          label: "Pipeline Amount"
        },
        {
          backgroundColor: "rgb(255, 91, 85)",
          data: this.state.barDataValues.map((x: any) => x.ReceivedAmount),
          label: "Received Amount"
        },
        {
          backgroundColor: "rgb(103, 201, 210)",
          data: this.state.barDataValues.map((x: any) => x.GrossTotal),
          label: "Gross Total"
        }
      ]
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
    const barData1 = {
      labels: this.state.barDataValues.map((x: any) => x.TownshipName),

      datasets: [
        {
          backgroundColor: "rgb(254, 198, 35)",
          data: this.state.barDataValues.map((x: any) => x.PipelineAmount),
          label: "Pipeline Amount"
        },
        {
          backgroundColor: "rgb(255, 91, 85)",
          data: this.state.barDataValues.map((x: any) => x.ReceivedAmount),
          label: "ReceivedAmount"
        },

        {
          backgroundColor: "rgb(103, 201, 210)",
          data: this.state.barDataValues.map((x: any) => x.GrossTotal),
          label: "Gross Total"
        },
        {
          backgroundColor: "rgba(62, 183, 117)",
          data: this.state.barDataValues.map((x: any) => x.TotalLand),
          label: "Total Land"
        }
      ]
    };

    return (
      <div className="innerpage-container">
        <div className="inner-header-titile">
          <img src="/images/login-audit-icon.png" />
          <h2>Township Wise Revenue Report </h2>
        </div>
        <div className="graph-card">
          <Card className="title-card">
            <CardContent className="title-card">
              <div className="title-row">
                <Typography
                  gutterBottom={true}
                  variant="headline"
                  component="h4"
                  className="grap-heading"
                >
                  <img src="/images/table-icon.png" />
                  Township Wise Revenue Report
                </Typography>
                <Button
                  className="doc-btn"
                  type="button"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.printDiv("printableArea")}
                >
                  Print Chart
                </Button>
              </div>
            </CardContent>
            <div className="graph-card">
              <ThemeCityReportForm
                selectThemeCityTypeValues={this.state.selectThemeCityTypeValues}
                onThemeCitySubmit={this.onThemeCitySubmit}
                TownshipId={this.state.TownshipId}
                TownshipName={this.state.TownshipName}
                handleClick={this.handleClick}
              />
              {this.state.TownshipId === 0 ? (
                <div id="printableArea" className="chart-wrapper">
                  <Bar data={barData1} options={options1} />
                </div>
              ) : (
                <div id="printableArea" className="chart-wrapper">
                  <Bar data={barData} options={options} />
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default ThemeCityReportState;
