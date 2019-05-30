// import * as React from "react";

// import {
//   // HashRouter,
//   Link,
//   Route
// } from "react-router-dom";
// // import ApplicationSubmitState from "../Container/SubmittedApplicationState";
// // import LoginAuditTrailState from "../Container/LoginAuditTrailState";

// const Topic = ({ match }: any) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// // const example = () => <h1>hello please select topics </h1>;

// const MisReports = ({ match }: any) => (
//   <div className="dashboard-container">
//     <ul>
//       <li>
//         <Link to={`${match.url}/loginAuditTrail`}>Login Audit Trail</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/emailSent`}>Email Sent</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/emailFail`}>Eamil Fail</Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}:topicId`} component={Topic} />
//     {/* <Route exact={true} path={match.path} component={example} /> */}
//   </div>
// );

// export default MisReports;
