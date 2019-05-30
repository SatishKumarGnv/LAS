import * as React from "react";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Typography from "@material-ui/core/Typography";
import { IAssetDetailsValues } from "../Container/AssetTabDetailsState";
import AssetTaskForm from "./Assets";

export function TabContainer(props: any) {
  return <Typography component="div">{props.children}</Typography>;
}
const AssetTabForm = (props: IAssetDetailsValues) => (
  <div className="dashboard-container ">
    <div className="inner-header">
      <AppBar className="app-bar">
        <Tabs value={props.assetTabValue} onChange={props.onHandleTabChange}>
          <Tab label="Facility OverView" value={0} />
          <Tab label="Reports" value={1} />
          <Tab label="Tasks Work" value={2} />
          <Tab label="Assets" value={3} />
          <Tab label="Inspections" value={4} />
          <Tab label="Documents" value={5} />
        </Tabs>
      </AppBar>
      {props.assetTabValue === 0 && <TabContainer>Item One</TabContainer>}
      {props.assetTabValue === 1 && <TabContainer>Item Two</TabContainer>}
      {props.assetTabValue === 2 && <TabContainer>Item Three</TabContainer>}
      {props.assetTabValue === 3 && (
        <TabContainer>
          <AssetTaskForm
            taskListValues={props.taskListValues}
            scheduleListValues={props.scheduleListValues}
            workRequestListValues={props.workRequestListValues}
            workOrderListValues={props.workOrderListValues}
          />
        </TabContainer>
      )}
      {props.assetTabValue === 4 && <TabContainer>item 5</TabContainer>}
      {props.assetTabValue === 5 && <TabContainer>Item 6</TabContainer>}
    </div>
  </div>
);

export default AssetTabForm;
