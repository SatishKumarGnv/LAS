import * as React from "react";
import { IExpandValueProps } from "./ApprovedApplications";

const ExpandRow = (props: IExpandValueProps) => {
  return (
    <div className="popup-text">
      <li>
        <b>Organization Name</b> :{" "}
        {props.approvedApplicationValues.OrganiztionName}
      </li>
      <li>
        <b>Registration Number</b> :{" "}
        {props.approvedApplicationValues.RegistrationNumber}
      </li>
      <li>
        <b>Land allocation to</b> : {props.approvedApplicationValues.AllocateTo}
      </li>
      <li>
        <b>Allocation Type Name</b> :{" "}
        {props.approvedApplicationValues.AllocationName}
      </li>
      <li>
        <b>Township Name</b> : {props.approvedApplicationValues.ThemecityName}
      </li>
      <li>
        <b> Project Name</b> : {props.approvedApplicationValues.ProjectName}
      </li>
    </div>
  );
};

export default ExpandRow;
