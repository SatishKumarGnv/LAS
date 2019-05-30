import * as React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import {
  IScheduleItemProps,
  IScheduleListProps,
  ITaskItemProps,
  ITaskListProps,
  IWorkOrderListProps,
  IWorkOrderProps,
  IWorkRequestListProps,
  IWorkRequestProps
} from "../Container/AssetTabDetailsState";

const AssetTaskInnerForm = (props: ITaskItemProps) => (
  <TableRow>
    <TableCell>{props.taskItemValues.id}</TableCell>
    <TableCell>{props.taskItemValues.task}</TableCell>
    <TableCell>{props.taskItemValues.lastDatePerformed}</TableCell>
    <TableCell>{props.taskItemValues.lastMeter}</TableCell>
  </TableRow>
);

export const AssetTaskListTable = (props: ITaskListProps) => {
  return (
    <div className="table-data">
    <Table className="final-table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Task</TableCell>
          <TableCell>Last Date Performed</TableCell>
          <TableCell>Last Meter</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.taskListValues.map((value, id) => (
          <AssetTaskInnerForm key={id} taskItemValues={value} />
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

const AssetScheduleInnerForm = (props: IScheduleItemProps) => (
  <TableRow>
    <TableCell>{props.scheduleValues.select}</TableCell>
    <TableCell>{props.scheduleValues.id}</TableCell>
    <TableCell>{props.scheduleValues.taskName}</TableCell>
    <TableCell>{props.scheduleValues.previousDate}</TableCell>
    <TableCell>{props.scheduleValues.nextDate}</TableCell>
  </TableRow>
);

export const AssetScheduleListTable = (props: IScheduleListProps) => {
  return (
    <div className="table-data">
    <Table className="final-table">
      <TableHead>
        <TableRow>
          <TableCell>Select</TableCell>
          <TableCell>Id</TableCell>
          <TableCell>Task Name</TableCell>
          <TableCell>Last Meter</TableCell>
          <TableCell>Last Meter</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.scheduleListValues.map((value, id) => (
          <AssetScheduleInnerForm key={id} scheduleValues={value} />
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

const WorkRequestInnerForm = (props: IWorkRequestProps) => (
  <TableRow>
    <TableCell>{props.workRequestValues.id}</TableCell>
    <TableCell>{props.workRequestValues.status}</TableCell>
    <TableCell>{props.workRequestValues.statusDate}</TableCell>
    <TableCell>{props.workRequestValues.description}</TableCell>
    <TableCell>{props.workRequestValues.date}</TableCell>
    <TableCell>{props.workRequestValues.open}</TableCell>
  </TableRow>
);

export const WorkRequestListTable = (props: IWorkRequestListProps) => {
  return (
    <div className="table-data">
    <Table className="final-table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Status Date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Open</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.workRequestListValues.map((value, id) => (
          <WorkRequestInnerForm key={id} workRequestValues={value} />
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

const WorkOrderInnerForm = (props: IWorkOrderProps) => (
  <TableRow>
    <TableCell>{props.workOrderValues.id}</TableCell>
    <TableCell>{props.workOrderValues.status}</TableCell>
    <TableCell>{props.workOrderValues.task}</TableCell>
    <TableCell>{props.workOrderValues.type}</TableCell>
    <TableCell>{props.workOrderValues.description}</TableCell>
    <TableCell>{props.workOrderValues.start}</TableCell>
    <TableCell>{props.workOrderValues.end}</TableCell>
  </TableRow>
);

export const WorkOrderListTable = (props: IWorkOrderListProps) => {
  return (
    <div className="table-data">
    <Table className="final-table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Task</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Start</TableCell>
          <TableCell>End</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.workOrderListValues.map((value, id) => (
          <WorkOrderInnerForm key={id} workOrderValues={value} />
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

const AssetTaskForm = (
  props: ITaskListProps &
    IScheduleListProps &
    IWorkRequestListProps &
    IWorkOrderListProps
) => (
  <div className="dashboard-container">
    <Card className="graph-card">
      <CardContent>
        <Typography
          gutterBottom={true}
          variant="headline"
          component="h4"
          className="grap-heading"
        >
          <img src="images/table-icon.png" />
          Tasks
          <Button variant="contained" color="primary">
            Add Task
          </Button>
        </Typography>
      </CardContent>
      <AssetTaskListTable taskListValues={props.taskListValues} />
    </Card>
    <Card className="graph-card">
      <CardContent>
        <Typography
          gutterBottom={true}
          variant="headline"
          component="h4"
          className="grap-heading"
        >
          <img src="images/table-icon.png" />
          Schedule
          <Button variant="contained" color="primary">
            Create Work Order
          </Button>
        </Typography>
      </CardContent>
      <AssetScheduleListTable scheduleListValues={props.scheduleListValues} />
    </Card>
    <Card className="graph-card">
      <CardContent>
        <Typography
          gutterBottom={true}
          variant="headline"
          component="h4"
          className="grap-heading"
        >
          <img src="images/table-icon.png" />
          Work Request
        </Typography>
      </CardContent>
      <WorkRequestListTable
        workRequestListValues={props.workRequestListValues}
      />
    </Card>
    <Card className="graph-card">
      <CardContent>
        <Typography
          gutterBottom={true}
          variant="headline"
          component="h4"
          className="grap-heading"
        >
          <img src="images/table-icon.png" />
          Work Request
        </Typography>
      </CardContent>
      <WorkOrderListTable workOrderListValues={props.workOrderListValues} />
    </Card>
  </div>
);
export default AssetTaskForm;
