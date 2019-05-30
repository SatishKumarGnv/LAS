import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import * as React from "react";

// import { Card, CardBody, Collapse } from "reactstrap";

import Tab from "@material-ui/core/Tab";

import Tabs from "@material-ui/core/Tabs";
import TextField from "@material-ui/core/TextField";

// import Tooltip from "@material-ui/core/Tooltip";

import Typography from "@material-ui/core/Typography";
import ApplicationForm, {
  IApplicationFormProps
} from "../Applications/ApplicationForm";
import {
  IApplicationState,
  IDocumentRepositoryState,
  IImagevalues,
  IprojectRuleProps,
  ITreeFormValues
} from "../DefaultLayout/HomePage";
// import ApprovalForm from "./ApprovalFlow";
import DocumentRepository from "./DocumentRepository";
// import DocumentState from "../Container/DocumentState";
// import DocumentRepository from "./DocumentRepository";
import NoteFileForm from "./NoteFile";

export function TabContainer(props: any) {
  return <Typography component="div">{props.children}</Typography>;
}

export const TabsForm = (
  props: IApplicationState &
    IDocumentRepositoryState &
    ITreeFormValues &
    IApplicationFormProps &
    IprojectRuleProps &
    IImagevalues
) => {
  return (
    <div className="dashboard-container ">
      <div className="inner-header">
        <h2 className="inner-title">Application Details</h2>
        <div className="search-bar-container">
          <div className="search-bar">
            <TextField
              id="search"
              // label="Search field"
              value={props.searchDataId}
              type="search"
              onChange={props.onHandleChange}
              margin="normal"
            />
          </div>
          <button
            className="get-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => props.onHandleSearch(props.searchDataId)}
          >
            Get Details <img src="/images/get.png" />
          </button>
        </div>
        <AppBar className="app-bar" position="static">
          <Paper square={true}>
            <Tabs
              // className="main-tab"
              value={props.ApplicationtabsValue}
              onChange={props.onTabChange}
              indicatorColor="primary"
              textColor="primary"
              // onChange={props.onTabChange}
            >
              <img src="/images/application-icon.svg" />
              <Tab label="Application Form" value={0} />
              <img src="/images/note-icon.svg" />
              <Tab label="Note Files" value={1} />
              <img src="/images/document-icon.svg" />
              <Tab label="Document Repository" value={2} />
              {/* <img src="/images/approval-icon.svg" />
              <Tab label="Approval Flow" value={3} /> */}
            </Tabs>
          </Paper>
        </AppBar>
      </div>

      {props.ApplicationtabsValue === 0 && (
        <TabContainer>
          <ApplicationForm
            handleRemoveImageClick={props.handleRemoveImageClick}
            uploadSuccessPopUp={props.uploadSuccessPopUp}
            handleMilestoneSurveyNumberChange={
              props.handleMilestoneSurveyNumberChange
            }
            handleMilestoneBasedParcelNumberChange={
              props.handleMilestoneBasedParcelNumberChange
            }
            forwardOpen={props.forwardOpen}
            handleInitialAllocatedLandChange={
              props.handleInitialAllocatedLandChange
            }
            searchArray={props.searchArray}
            searchDataId={props.searchDataId}
            ProjectDetailsArray={props.ProjectDetailsArray}
            handleSurveyChange={props.handleSurveyChange}
            handleInitialLandChange={props.handleInitialLandChange}
            mileStoneValues={props.mileStoneValues}
            handleSurveyNumberChange={props.handleSurveyNumberChange}
            handleBhudhaarNumberChange={props.handleBhudhaarNumberChange}
            AddMilestoneClickCount={props.AddMilestoneClickCount}
            MileStoneArray={props.MileStoneArray}
            handleParcelNumberChange={props.handleParcelNumberChange}
            handleDocumentVerifiedChange={props.handleDocumentVerifiedChange}
            onHandleForwardPopUpOpen={props.onHandleForwardPopUpOpen}
            handleinitialChange={props.handleinitialChange}
            handleParcelChange={props.handleParcelChange}
            handleAppFormUploadImageClick={props.handleAppFormUploadImageClick}
            ApplicationId={props.searchDataId}
            ruleImage={props.ruleImage}
            handleRuleImageChange={props.handleRuleImageChange}
            targetValue={props.targetValue}
            isRuleSatisfied={props.isRuleSatisfied}
            handleRuleSatisfiedChange={props.handleRuleSatisfiedChange}
            applicationSelectDepartmentName={
              props.applicationSelectDepartmentName
            }
            onHandleApprovePopUpClose={props.onHandleApprovePopUpClose}
            Comments={props.Comments}
            handleProcessCommentsChange={props.handleProcessCommentsChange}
            ProcessComments={props.ProcessComments}
            selectDepartmentId={props.selectDepartmentId}
            handleselectDepartmentChange={props.handleselectDepartmentChange}
            selectDepartmentList={props.selectDepartmentList}
            expanded={props.expanded}
            panel1={props.panel1}
            panel2={props.panel2}
            panel3={props.panel3}
            panel4={props.panel4}
            panel5={props.panel5}
            panel6={props.panel6}
            onHandleApproveClick={props.onHandleApproveClick}
            onHandleReviewClick={props.onHandleReviewClick}
            onHandlePanelChange={props.onHandlePanelChange}
            onExpandAll={props.onExpandAll}
            onCollapseAll={props.onCollapseAll}
            values={props.searchArray}
            mapOpen={props.mapOpen}
            ApproveOpen={props.ApproveOpen}
            onHandleApprovePopUpOpen={props.onHandleApprovePopUpOpen}
            onHandleReviewPopUpClose={props.onHandleReviewPopUpClose}
            onHandleReviewPopUpOpen={props.onHandleReviewPopUpOpen}
            reviewOpen={props.reviewOpen}
            handleMapClose={props.handleMapClose}
            handleMapOpenClick={props.handleMapOpenClick}
            reviewSuccessOpen={props.reviewSuccessOpen}
            onHandleReviewSuccessPopUp={props.onHandleReviewSuccessPopUp}
            applicationProjectRules={props.applicationProjectRules}
            parcelValues={props.parcelValues}
            applicationimages={props.applicationimages}
            handleImageChange={props.handleImageChange}
          />
        </TabContainer>
      )}

      {props.ApplicationtabsValue === 1 && (
        <TabContainer>
          <NoteFileForm
            noteFiles={props.noteFiles}
            searchArray={props.searchArray}
          />
        </TabContainer>
      )}
      {props.ApplicationtabsValue === 2 && (
        <TabContainer>
          <DocumentRepository
            documentList2={props.documentList2}
            applicationimage={props.applicationimage}
            handleClick={props.handleClick}
            applicationimage2={props.applicationimage2}
          />
        </TabContainer>
      )}
      {/* {props.ApplicationtabsValue === 3 && (
        <TabContainer>
          <ApprovalForm
            approvalFiles={props.approvalFiles}
            searchArray={props.searchArray}
          />
        </TabContainer>
      )} */}
    </div>
  );
};

export default TabsForm;
