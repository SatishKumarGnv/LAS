import { Collapse } from "@material-ui/core";
import * as React from "react";
import { IApplicationProps } from "./SubmittedApplication";
import ExpandSubmitRow from "./Submittedexpand";

const ExpandData = (props: IApplicationProps) => {
  return (
    <Collapse
      in={
        props.open &&
        props.applicationValues.ApplicationId === props.expandApplicationId
      }
      timeout="auto"
      unmountOnExit={true}
    >
      <ExpandSubmitRow applicationValues={props.applicationValues} />
    </Collapse>
  );
};

export default ExpandData;
