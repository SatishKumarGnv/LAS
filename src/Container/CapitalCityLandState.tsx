import "chartjs-plugin-datalabels";
import * as React from "react";

// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// import Button from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
// import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import { Bar } from "react-chartjs-2";
// import { isNullOrUndefined } from "util";
import {
  getTotalLandsForReportChart,
  getTotalLandsForReportTable
} from "../Api_Integration/CapitalCityLandService";
import CapitalCityLandForm from "../MisReports/CapitalCityLand";

export interface ICapitalCityLandStateValues {
  readonly TownshipName: string;
  readonly PipelineAmount: number;
  readonly ReceivedAmount: number;
  readonly GrossTotal: number;
  readonly TotalLand: number;
  readonly AvailableLand: number;
  readonly ReservedLand: number;
  readonly AllocatedLand: number;
}

export interface ICapitalCityLandStateProps {
  readonly capitalCityList: ReadonlyArray<ICapitalCityLandStateValues>;
  readonly count: number;

  readonly page: number;
  readonly rowsPerPage: number;
  readonly emptyRows: number;
  readonly searchInput: string;
  onHandleSearch(event: any): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandlePageChange(evt: any, page: number): void;
}

export interface ICapitalCityBarValues {
  readonly TownshipName: string;
  readonly PipelineAmount: number;
  readonly ReceivedAmount: number;
  readonly GrossTotal: number;
  readonly TotalLand: number;
  readonly AvailableLand: number;
  readonly ReservedLand: number;
  readonly AllocatedLand: number;
}

export interface IPrintProps {
  readonly wrapperElement: HTMLDivElement;
}

export interface ICapitalCityBarState {
  readonly barDataValues: ReadonlyArray<ICapitalCityBarValues>;
}

class CapitalCityLandState extends React.Component<
  ICapitalCityLandStateProps & ICapitalCityBarState & IPrintProps,
  any
> {
  public state = {
    barDataValues: [],
    capitalCityList: [],
    count: 0,
    emptyRows: 0,
    open: false,
    page: 0,
    rowsPerPage: 5,
    searchInput: ""
  };

  constructor(
    props: ICapitalCityLandStateProps & ICapitalCityBarState & IPrintProps
  ) {
    super(props);
  }

  public componentWillMount() {
    getTotalLandsForReportChart().then(res => {
      this.setState({ ...this.state, barDataValues: res.objTotalLandsList });
    });

    getTotalLandsForReportTable().then(res => {
      this.setState({
        ...this.state,
        capitalCityList: res.aaData,
        count: res.aaData.length
      });
    });
  }
  public handleChangePage = (event: any, p: number) => {
    this.setState({ ...this.state, page: p });
  };

  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ ...this.state, rowsPerPage: event.target.value });
  };

  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.capitalCityList.filter((x: any) =>
      searchInput !== ""
        ? x.TownshipName.toLowerCase().includes(searchInput.toLowerCase()) ||
          x.TotalLand.toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          x.AvailableLand.toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          x.ReservedLand.toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          x.AllocatedLand.toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        : true
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };
  public handleClose = () => {
    this.setState({ open: false });
  };

  public printDiv = (divId: string) => {
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

  public handleDownload = () => {
    this.setState({ open: true });
  };

  public render() {
    const emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        this.state.capitalCityList.length -
          this.state.page * this.state.rowsPerPage
      );

    const options = {
      backgroundColor: "#F5DEB3",
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
          data: this.state.barDataValues.map((x: any) => x.AvailableLand),
          label: "Available Land"
        },
        {
          backgroundColor: "rgb(255, 91, 85)",
          data: this.state.barDataValues.map((x: any) => x.AllocatedLand),
          label: "Allocated Land"
        },

        {
          backgroundColor: "rgb(103, 201, 210)",
          data: this.state.barDataValues.map((x: any) => x.ReservedLand),
          label: "Reserved Land"
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
          <h2> Capital City Lands Summary</h2>
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
                  Land Summary Report
                </Typography>
                <Button
                  className="doc-btn"
                  type="button"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.printDiv("printableArea")}
                >
                  Print Chart
                </Button>
                {/* <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <div
                    id="printableArea"
                    className="dashboard-container"
                    style={{ height: "600px", width: "1000px" }}
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.printDiv("printableArea")}
                  >
                    <Bar data={barData} options={options} />
                  </div>
                </Modal> */}
              </div>
            </CardContent>
            <div
              id="printableArea"
              className="chart-wrapper "
              style={{ backgroundColor: "#fff" }}
            >
              <Bar data={barData} options={options} />
            </div>
          </Card>
        </div>

        <div className="graph-card">
          <Card>
            <CardContent>
              <Typography
                gutterBottom={true}
                variant="headline"
                component="h4"
                className="grap-heading"
              >
                <img src="/images/graph-icon.png" />
                Land Detail Data
              </Typography>
            </CardContent>
            <CapitalCityLandForm
              count={this.state.count}
              capitalCityList={this.state.capitalCityList}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              emptyRows={emptyRows}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              onHandlePageChange={this.handleChangePage}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default CapitalCityLandState;
