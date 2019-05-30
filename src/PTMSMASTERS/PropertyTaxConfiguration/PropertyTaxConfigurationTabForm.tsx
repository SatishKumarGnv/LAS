import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import * as React from "react";

// import { Card, CardBody, Collapse } from "reactstrap";

import Tab from "@material-ui/core/Tab";

import Tabs from "@material-ui/core/Tabs";

// import Tooltip from "@material-ui/core/Tooltip";

import Typography from "@material-ui/core/Typography";
import { IPropertyTaxConfigurationProps } from "src/DefaultLayout/HomePage";
import PropertyTaxForm from "./PropoertyTax";

export function TabContainer(props: any) {
  return <Typography component="div">{props.children}</Typography>;
}

export const PropertyTaxConfigurationTabForm = (
  props: IPropertyTaxConfigurationProps
) => {
  return (
    <div className="dashboard-container ">
      <div className="inner-header">
        <h2 className="inner-title">Property Tax Configuration</h2>

        <AppBar className="app-bar" position="static">
          <Paper square={true}>
            <Tabs
              // className="main-tab"
              value={props.propertyTaxStep}
              onChange={props.onHandlePropertyTaxStepChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <img src="/images/application-icon.svg" />
              <Tab label="Property Tax Configuration" value={0} />
              <img src="/images/note-icon.svg" />
              <Tab label="Approval History" value={1} />
              <img src="/images/document-icon.svg" />
              <Tab label="Audit Trail" value={2} />
            </Tabs>
          </Paper>
        </AppBar>
      </div>

      {props.propertyTaxStep === 0 && (
        <TabContainer>
          <PropertyTaxForm
            handleValueChange={props.handleValueChange}
            handlePropertyTypeIdChange={props.handlePropertyTypeIdChange}
            RequestId={props.RequestId}
            handlePropertyTaxApproveClick={props.handlePropertyTaxApproveClick}
            incresePercentageButton={props.incresePercentageButton}
            handleIncreasePercentageChange={
              props.handleIncreasePercentageChange
            }
            successPopUp={props.successPopUp}
            WarningPopUp={props.WarningPopUp}
            handlePropertyTaxCommentsChange={
              props.handlePropertyTaxCommentsChange
            }
            onHandleClose={props.onHandleClose}
            forwardOpen={props.forwardOpen}
            handlePropertyTaxSubmitSavePopUp={
              props.handlePropertyTaxSubmitSavePopUp
            }
            reviewOpen={props.reviewOpen}
            applicationSelectDepartmentName={
              props.applicationSelectDepartmentName
            }
            Comments={props.Comments}
            handlePropertyTaxDraftSave={props.handlePropertyTaxDraftSave}
            handlePropertyTaxSubmitSave={props.handlePropertyTaxSubmitSave}
            handlePropertyTaxValueChange={props.handlePropertyTaxValueChange}
            UserId={props.UserId}
            ptmsSelectDepartmentList={props.ptmsSelectDepartmentList}
            handleSelectDepartmentChange={props.handleSelectDepartmentChange}
            onHandleSearch={props.onHandleSearch}
            selected={props.selected}
            propertyTaxTableList={props.propertyTaxTableList}
            page={props.page}
            rowsPerPage={props.rowsPerPage}
            count={props.count}
            searchInput={props.searchInput}
            onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
            onHandlePageChange={props.onHandlePageChange}
            numSelected={props.numSelected}
            rowCount={props.rowCount}
            handleSelectAllClick={props.handleSelectAllClick}
            handleSelect={props.handleSelect}
            handleBudgetIdChange={props.handleBudgetIdChange}
            getTaxDetailsChange={props.getTaxDetailsChange}
            percentageValue={props.percentageValue}
            copiedValue={props.copiedValue}
            handleIncreasePercentageClick={props.handleIncreasePercentageClick}
            handleCopyValuesClick={props.handleCopyValuesClick}
            handleDescriptionChange={props.handleDescriptionChange}
            Description={props.Description}
            BudgetId={props.BudgetId}
            PropertyTypeId={props.PropertyTypeId}
            FromDate={props.FromDate}
            ToDate={props.ToDate}
            selectBudgetValues={props.selectBudgetValues}
            selectDistrictValues={props.selectDistrictValues}
            selectPropertyTypeValues={props.selectPropertyTypeValues}
            handlePropertyTaxSubmit={props.handlePropertyTaxSubmit}
          />
        </TabContainer>
      )}

      {props.propertyTaxStep === 1 && <TabContainer>hello</TabContainer>}
      {props.propertyTaxStep === 2 && <TabContainer>third me</TabContainer>}
    </div>
  );
};

export default PropertyTaxConfigurationTabForm;
