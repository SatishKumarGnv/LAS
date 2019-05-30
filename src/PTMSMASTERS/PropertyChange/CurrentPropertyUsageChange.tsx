import * as React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import {
  IPropChangeProps,
  IPropertyChangesValues
} from "src/DefaultLayout/HomePage";

export interface IChangePropertyTypeProps {
  readonly changeValues: IPropertyChangesValues;
}

const DocumentTypeMasterItems = (props: IChangePropertyTypeProps) => (
  <TableRow>
    <TableCell>{props.changeValues.FloorNo_str}</TableCell>
    <TableCell>{props.changeValues.ClassificationOfBuilding_str}</TableCell>
    <TableCell>{props.changeValues.NatureOfUsage_str}</TableCell>
    <TableCell>{props.changeValues.Firmname}</TableCell>
    <TableCell>{props.changeValues.Occupancy_str}</TableCell>
    <TableCell>{props.changeValues.Occupancy}</TableCell>
    <TableCell>{props.changeValues.Length}</TableCell>
    <TableCell>{props.changeValues.Breadth}</TableCell>
  </TableRow>
);

const PropertyChangeTypeList = (props: IPropChangeProps) => (
  <div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Floor No</TableCell>
            <TableCell>Classification Of Building</TableCell>
            <TableCell>Nature Of Usage</TableCell>
            <TableCell>Firm Name</TableCell>
            <TableCell>Occupancy</TableCell>
            <TableCell>Occupancy Name </TableCell>
            <TableCell>Length</TableCell>
            <TableCell>Breadth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.PropertyChangeList.length !== 0 ? (
            props.PropertyChangeList.map((values, id) => (
              <DocumentTypeMasterItems changeValues={values} key={id} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);

const PropertyChangeFloorForm = (props: IPropChangeProps) => (
  <div className="table-card">
    {/* <div className="card-title">
      <h3>Current Property Usage Type</h3>
    </div> */}
    <PropertyChangeTypeList
      getFloorDetailValues={props.getFloorDetailValues}
      handlePropertyChangeClick={props.handlePropertyChangeClick}
      PropTable={props.PropTable}
      PropertyChangeList={props.getFloorDetailValues}
    />
  </div>
);

export default PropertyChangeFloorForm;
