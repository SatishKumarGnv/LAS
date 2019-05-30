import * as React from "react";
import { IDraftValueProps } from "../DefaultLayout/HomePage";

export const DraftExpandRow = (props: IDraftValueProps) => {
  return (
    <div className="list-box">
      <li>
        <span> Requested Land Area(in acres) :</span>
        {props.draftApplicationValues.RequestLand}
      </li>
      <li>
        <span> Submitted Date :</span>
        {props.draftApplicationValues.SubmittedDate}
      </li>
      <li>
        <span> Allocation Type Name :</span>
        {props.draftApplicationValues.AllocationName}
      </li>
    </div>
  );
};

export default DraftExpandRow;
