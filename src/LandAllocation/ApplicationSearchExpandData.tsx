import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import { ISearchExpandRowProps } from "../Container/ApplicationSearchState";

const ExpandSearchRow = (props: ISearchExpandRowProps) => {
  return (
    <div>
      <List>
        <ListItem className="dilog-list">
          <div className="work-flow-grid row-card">
            <ListItemText>
              <span className="text-bold "> AllocationTo </span>
            </ListItemText>
            <ListItemText>
              {props.applicationTableValues[0].AllocationTypeName}
            </ListItemText>
          </div>
          <div className="work-flow-grid row-card">
            <ListItemText>
              <span className="text-bold ">Allocation Type Name </span>
            </ListItemText>
            <ListItemText>
              {props.applicationTableValues[0].AllocationSubTypeName}
            </ListItemText>
          </div>

          <div className="work-flow-grid row-card">
            <ListItemText>
              <span className="text-bold ">Agreement Type </span>
            </ListItemText>
            <ListItemText>
              {props.applicationTableValues[0].AgreementTypeName}
            </ListItemText>
          </div>

          <div className="work-flow-grid row-card">
            <ListItemText>
              <span className="text-bold ">UserName </span>
            </ListItemText>
            <ListItemText>
              {props.applicationTableValues[0].UserName}
            </ListItemText>
          </div>
          <div className="work-flow-grid row-card">
            <ListItemText>
              <span className="text-bold "> Email Id </span>
            </ListItemText>
            <ListItemText>
              {props.applicationTableValues[0].UserEmailAddress}
            </ListItemText>
          </div>
          <div className="work-flow-grid row-card">
            <ListItemText>
              <span className="text-bold "> Phone number </span>
            </ListItemText>
            <ListItemText>
              {props.applicationTableValues[0].UserPhoneNumber}
            </ListItemText>
          </div>
        </ListItem>
      </List>
    </div>
  );
};

export default ExpandSearchRow;
