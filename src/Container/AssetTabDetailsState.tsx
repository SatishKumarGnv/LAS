import * as React from "react";

import AssetTabForm from "../Asset-Management/AssetTabForm";

export interface ITaskItemValues {
  readonly id: number;
  readonly task: string;
  readonly lastDatePerformed: string;
  readonly lastMeter: number;
}

export interface ITaskItemProps {
  readonly taskItemValues: ITaskItemValues;
}

export interface ITaskListProps {
  readonly taskListValues: ReadonlyArray<ITaskItemValues>;
}
export interface IScheduleItemValues {
  readonly select: boolean;
  readonly id: number;
  readonly taskName: string;
  readonly previousDate: string;
  readonly nextDate: string;
}

export interface IScheduleItemProps {
  readonly scheduleValues: IScheduleItemValues;
}

export interface IScheduleListProps {
  readonly scheduleListValues: ReadonlyArray<IScheduleItemValues>;
}

export interface IWorkRequestValues {
  readonly id: number;
  readonly status: string;
  readonly statusDate: string;
  readonly description: string;
  readonly date: string;
  readonly open: string;
}

export interface IWorkRequestProps {
  readonly workRequestValues: IWorkRequestValues;
}

export interface IWorkRequestListProps {
  readonly workRequestListValues: ReadonlyArray<IWorkRequestValues>;
}

export interface IWorkOrderValues {
  readonly id: number;
  readonly status: string;
  readonly description: string;
  readonly task: string;
  readonly type: string;
  readonly plannedStart: string;
  readonly start: string;
  readonly end: string;
}

export interface IWorkOrderProps {
  readonly workOrderValues: IWorkOrderValues;
}

export interface IWorkOrderListProps {
  readonly workOrderListValues: ReadonlyArray<IWorkOrderValues>;
}

export interface IAssetDetailsValues {
  readonly assetTabValue: number;
  readonly taskListValues: ReadonlyArray<ITaskItemValues>;
  readonly scheduleListValues: ReadonlyArray<IScheduleItemValues>;
  readonly workRequestListValues: ReadonlyArray<IWorkRequestValues>;
  readonly workOrderListValues: ReadonlyArray<IWorkOrderValues>;

  onHandleTabChange(event: any, value: number): void;
}

class AssetTabDetailsState extends React.Component<IAssetDetailsValues> {
  public state = {
    assetTabValue: 0,
    scheduleListValues: [
      {
        id: 1,
        nextDate: "",
        previousDate: "",
        select: false,
        taskName: "idk"
      }
    ],
    taskListValues: [
      { id: 1, task: "jim", lastDatePerformed: "", lastMeter: 1 },
      { id: 2, task: "jim", lastDatePerformed: "", lastMeter: 1 }
    ],
    workOrderListValues: [
      {
        description: "",
        end: "",
        id: 1,
        plannedStart: "",
        start: "",
        status: "sh",
        task: "",
        type: ""
      }
    ],
    workRequestListValues: [
      {
        date: "",
        description: "",
        id: 1,
        open: "",
        status: "sh",
        statusDate: ""
      }
    ]
  };

  constructor(props: IAssetDetailsValues) {
    super(props);
  }

  public onHandleTabChange = (event: any, value: number) => {
    this.setState({ ...this.state, assetTabValue: value });
  };

  public render() {
    return (
      <AssetTabForm
        assetTabValue={this.state.assetTabValue}
        onHandleTabChange={this.onHandleTabChange}
        taskListValues={this.state.taskListValues}
        scheduleListValues={this.state.scheduleListValues}
        workRequestListValues={this.state.workRequestListValues}
        workOrderListValues={this.state.workOrderListValues}
      />
    );
  }
}

export default AssetTabDetailsState;
