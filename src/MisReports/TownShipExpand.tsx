import * as React from "react";
import { ITownshipValueProps } from "../Container/ThemeCityWiseApplicationApprovalState";

const ExpandTownShipRow = (props: ITownshipValueProps) => {
  
  return (
    <div className="list-box">
      <li>
        <span> Land on Hold :</span>
        {props.ThemeCityApprovalValues.LandonHold}
      </li>
      <li>
        <span>Allotted Land :</span>
        {props.ThemeCityApprovalValues.AllotedLand}
      </li>
      <li>
        <span> Status :</span>
        {props.ThemeCityApprovalValues.Status}
      </li>
      <li>
        <span> Current Status :</span>
        {props.ThemeCityApprovalValues.CurrentStatus}
      </li>
      <li>
        <span> Next Activity Info :</span>
        {props.ThemeCityApprovalValues.NextActivivtyInfo}
      </li>
      <li>
        <span> Land Allocation Type :</span>
        {props.ThemeCityApprovalValues.LandAllocationType}
      </li>
    </div>
  );
};

export default ExpandTownShipRow;
