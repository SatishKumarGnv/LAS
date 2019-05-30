import Collapse from "@material-ui/core/Collapse";
import * as React from "react";
import { ISubmitExpandRowProps } from "../Container/SubmittedApplicationState";
import ExpandSubmitRow from "./Submittedexpand";

const SubmitExpandRow = (props: ISubmitExpandRowProps) => (
  <Collapse in={props.open} timeout="auto" unmountOnExit={true}>
    <ExpandSubmitRow
      applicationValues={
        props.applicationList.filter(
          x => x.ApplicationId === props.expandApplicationId
        )[0]
      }
    />
  </Collapse>
);

export default SubmitExpandRow;
