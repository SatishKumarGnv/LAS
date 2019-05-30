import Collapse from "@material-ui/core/Collapse";
import * as React from "react";
import {
  IPropertyChangeExpandValueProps,
  IPropertyChangeExpandValues,
  IPropertyDetailsValues
} from "src/DefaultLayout/HomePage";

const ExpandPropertyDetailsTable = (props: IPropertyChangeExpandValues) => {
  return (
    <div className="list-box">
      <li>
        <span> House Number/Building Name :</span>
        {props.propertyValues.Address}
      </li>
    </div>
  );
};

const PropertyDetailsTableExpand = (props: IPropertyChangeExpandValueProps) => (
  <Collapse in={props.open} timeout="auto" unmountOnExit={true}>
    <ExpandPropertyDetailsTable
      onHandleClose={props.onHandleClose}
      propertyValues={
        props.propertyDetailsTableList.filter(
          (x: IPropertyDetailsValues) => x.RequestId === props.RequestId
        )[0]
      }
    />
  </Collapse>
);

export default PropertyDetailsTableExpand;
