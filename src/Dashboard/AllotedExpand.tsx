import * as React from "react";
import { IAllotedValueProps } from "../DefaultLayout/HomePage";

const ExpandAllotedRow = (props: IAllotedValueProps) => {
  return (
    <div className="list-box">
      <li>
        <b>Registration Number</b> :{props.AllotedApprovalValues.LandonHold}
      </li>
      <li>
        <b> Land Allocation To</b>:{props.AllotedApprovalValues.AllocateTo}
      </li>
      <li>
        <b> Allocation Type Name</b>:
        {props.AllotedApprovalValues.AllocationName}
      </li>
      <li>
        <b>Project Name </b>:{props.AllotedApprovalValues.ProjectName}
      </li>
      <li>
        <b>Current Status</b>:{props.AllotedApprovalValues.Status}
      </li>
    </div>
  );
};

export default ExpandAllotedRow;
