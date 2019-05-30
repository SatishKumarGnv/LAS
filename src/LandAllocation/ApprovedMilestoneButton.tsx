import * as React from "react";
import { withRouter } from "react-router-dom";
// this also works with react-router-native

const ApprovedButton = withRouter(({ history }) => (
  <button
    type="button"
    // tslint:disable-next-line:jsx-no-lambda
    onClick={() => {
      history.push("/milestone");
    }}
  >
    MileStone Details
  </button>
));
export default ApprovedButton;
