import * as React from "react";
import { ISubmitValueProps } from "../Container/SubmittedApplicationState";

const ExpandSubmitRow = (props: ISubmitValueProps) => {
  return (
    <div className="list-box">
      <li>
        <span> Allocation Type Name :</span>
        {props.applicationValues.AllocationName}
      </li>
      <li>
        <span> Township Name :</span>
        {props.applicationValues.TownshipName === ""
          ? "Township 0"
          : props.applicationValues.TownshipName}
      </li>
      <li>
        <span>Project Name :</span>
        {props.applicationValues.ProjectName}
      </li>
      <li>
        <span> Requested Land Area(in Acres) :</span>
        {props.applicationValues.RequiredLand}
      </li>
      <li>
        <span>Next Activity Information :</span>
        {props.applicationValues.NextActivivtyInfo}
      </li>
    </div>
  );
};

export default ExpandSubmitRow;
