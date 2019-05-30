import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {
  IAssetTreeItemProps,
  IAssetTreeListProps
} from "../Container/AssetTreeState";

const AssetTreeItems = (props: IAssetTreeItemProps) => (
  <TableRow>
    <TableCell>{props.assetTreeValues.Name}</TableCell>
    <TableCell>{props.assetTreeValues.Level}</TableCell>
    <TableCell>{props.assetTreeValues.Type}</TableCell>
    <TableCell>{props.assetTreeValues.FriendlyName}</TableCell>
    <TableCell>{props.assetTreeValues.ConditionIndex}</TableCell>
    <TableCell>{props.assetTreeValues.ReplacementCost}</TableCell>
    <TableCell>{props.assetTreeValues.Quantity}</TableCell>
  </TableRow>
);

const AssetTreeList = (props: IAssetTreeListProps) => (
  <div className="table-data">
  <Table className="final-table">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Level</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Friendly Name</TableCell>
        <TableCell>Condition Index</TableCell>
        <TableCell>Replcement Cost</TableCell>
        <TableCell>Quantity</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.assetTreeList.map((value, id) => (
        <AssetTreeItems key={id} assetTreeValues={value} />
      ))}
    </TableBody>
  </Table>
  </div>
);

export default AssetTreeList;
