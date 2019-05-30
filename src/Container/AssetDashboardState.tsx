import * as React from "react";

import { getDashboardLandDetails } from "../Api_Integration/DashboardService";
import AssetDashboardForm from "../Asset-Management/AssetDashboard";

export interface IDashboardStateValues {
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
  readonly ThemeCityId: number;
  readonly TotalLandSize: number;
  readonly LogoImagePath: string;
  readonly VillageName: null;
  readonly PlotCode: null;
}
// export interface IDashboardPieChartStateValues {
//   readonly Count: number;
//   readonly StatusName: string;
//   readonly ThemeCityName: null;
//   readonly ThemeCityId: number;
// }

export interface IDashboardStateProps {
  readonly dashboardData: ReadonlyArray<IDashboardStateValues>;
  readonly date: string;
}

// export interface IDashboardPieChartStateProps {
//   readonly dashboardPieChartData: ReadonlyArray<IDashboardPieChartStateValues>;
// }

export class AssetDashboardState extends React.Component<IDashboardStateProps> {
  public state: IDashboardStateProps = {
    dashboardData: [],
    date: ""
  };
  constructor(props: any) {
    super(props);
  }
  // tslint:disable:no-console

  public componentWillMount() {
    getDashboardLandDetails()
      .then(res => {
        this.setState({
          ...this.state,
          dashboardData: res.aaData
        });
      })
      .catch(err => err);
  }

  public render() {
    return (
      <div>
        <AssetDashboardForm
          dashboardData={this.state.dashboardData}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default AssetDashboardState;
