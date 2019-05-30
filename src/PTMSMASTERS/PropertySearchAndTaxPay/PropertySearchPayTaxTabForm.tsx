import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import * as React from "react";

// import { Card, CardBody, Collapse } from "reactstrap";

import Tab from "@material-ui/core/Tab";

import Tabs from "@material-ui/core/Tabs";

// import Tooltip from "@material-ui/core/Tooltip";

import Typography from "@material-ui/core/Typography";
import {
  IDistrictValues,
  IPropertySearchResultTaxValues
} from "src/DefaultLayout/HomePage";
import CartTableList from "./CartTable";
import ConfirmationForm, { IConfirmationProps } from "./ComfirmationForm";
import PayerInfoForm from "./PayerInfoForm";
import PaymentInfoForm, { IPaymentInfoProps } from "./PaymentInfoForm";
import PropertySearchResultTable from "./PropertySearchResultTaxDetailsTable";
import SearchSessionForm, { ISearchSessionProps } from "./SearchSessionForm";

export function TabContainer(props: any) {
  return <Typography component="div">{props.children}</Typography>;
}

export interface IPropertySearchPayTaxTabFormProps {
  readonly propertySearchPayTaxTabValue: number;
  readonly OwnerName: string;
  readonly Description: string;
  readonly MunciId: number;
  readonly MandalId: number;
  readonly TownId: number;
  readonly selectDistrictValues: ReadonlyArray<IDistrictValues>;
  readonly selectMunciValues: ReadonlyArray<IDistrictValues>;
  readonly selectMandalValues: ReadonlyArray<IDistrictValues>;
  readonly selectTownValues: ReadonlyArray<IDistrictValues>;
  readonly propertySearchResultTaxList: ReadonlyArray<
    IPropertySearchResultTaxValues
  >;
  readonly popUpid: string;
  readonly propertySearchResultViewPopUpValues: IPropertySearchResultTaxValues;

  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  readonly open: boolean;
  readonly dialogOpen: boolean;
  readonly propertySearchPayBillValues: ReadonlyArray<
    IPropertySearchResultTaxValues
  >;
  readonly payableAmount: number;
  readonly paymentMode: string;
  readonly selectUserName: number;
  readonly selectUserNameValues: ReadonlyArray<any>;
  readonly bookReceiptNumber: number;
  readonly payerName: string;
  readonly emailId: string;
  readonly mobileNumber: string;
  readonly houseNoBuildingName: string;
  readonly isPayerOwner: boolean;
  readonly successPopUp: boolean;
  readonly viewBillPopUpOpen: boolean;
  readonly finalpath: string;

  handleConfirmationClick(values: IConfirmationProps): void;
  handlePopUpClose(): void;

  handlePayerInfoChange(event: any, name: string): void;

  handleContinueClick(): void;
  handleIsPayerOwnerChange(event: any, name: string): void;
  handleSelectUserNameChange(event: any): void;
  onHandleMakePaymentSubmit(values: IPaymentInfoProps): void;
  handlePayTaxActionClick(): void;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleSearch(event: any): void;
  onHandleSearchResultViewActionClick(
    values: IPropertySearchResultTaxValues
  ): void;
  onHandlePayBillActionClick(values: IPropertySearchResultTaxValues): void;
  onHandleClose(): void;
  PropertyNewSearchClick(): void;
  handleSeachSessionSumbit(event: ISearchSessionProps): void;
  handleMuncipalityPropertyChange(event: any): void;
  handleDescriptionChange(event: any): void;
  handleMandalChange(event: any): void;
  onPropertySearchPayTaxTabChange(event: any, value: number): void;
  handleSearchSessionReset(): void;
  handleViewBillPopUpClose(): void;
}
export const PropertySearchPayTaxTabForm = (
  props: IPropertySearchPayTaxTabFormProps
) => {
  return (
    <div className="dashboard-container ">
      <div className="inner-header">
        <h2 className="inner-title">Property Search And Pay Tax</h2>
      </div>
      <AppBar className="app-bar" position="static">
        <Paper square={true}>
          <Tabs
            // className="main-tab"
            value={props.propertySearchPayTaxTabValue}
            onChange={props.onPropertySearchPayTaxTabChange}
            indicatorColor="primary"
            textColor="primary"
            // onChange={props.onTabChange}
          >
            <img src="/images/application-icon.svg" />
            <Tab label="Search" value={0} />
            <img src="/images/note-icon.svg" />
            <Tab label="Search Results" value={1} />
            <img src="/images/document-icon.svg" />
            <Tab label="Cart" value={2} />
            <img src="/images/approval-icon.svg" />
            <Tab label="Payment Info" value={3} />
            <img src="/images/approval-icon.svg" />
            <Tab label="Payer Info" value={4} />
            <img src="/images/approval-icon.svg" />
            <Tab label="Confirmation" value={5} />
          </Tabs>
        </Paper>
      </AppBar>

      {props.propertySearchPayTaxTabValue === 0 && (
        <TabContainer>
          <SearchSessionForm
            handleSearchSessionReset={props.handleSearchSessionReset}
            OwnerName={props.OwnerName}
            TownId={props.TownId}
            Description={props.Description}
            MandalId={props.MandalId}
            MunciId={props.MunciId}
            handleMandalChange={props.handleMandalChange}
            handleDescriptionChange={props.handleDescriptionChange}
            handleMuncipalityPropertyChange={
              props.handleMuncipalityPropertyChange
            }
            handleSeachSessionSumbit={props.handleSeachSessionSumbit}
            selectDistrictValues={props.selectDistrictValues}
            selectMunciValues={props.selectMunciValues}
            selectMandalValues={props.selectMandalValues}
            selectTownValues={props.selectTownValues}
          />
        </TabContainer>
      )}

      {props.propertySearchPayTaxTabValue === 1 && (
        <TabContainer>
          <PropertySearchResultTable
            finalpath={props.finalpath}
            viewBillPopUpOpen={props.viewBillPopUpOpen}
            handleViewBillPopUpClose={props.handleViewBillPopUpClose}
            PropertyNewSearchClick={props.PropertyNewSearchClick}
            onHandleSearch={props.onHandleSearch}
            propertySearchResultViewPopUpValues={
              props.propertySearchResultViewPopUpValues
            }
            onHandlePayBillActionClick={props.onHandlePayBillActionClick}
            onHandleSearchResultViewActionClick={
              props.onHandleSearchResultViewActionClick
            }
            propertySearchResultTaxList={props.propertySearchResultTaxList}
            count={props.count}
            page={props.page}
            rowsPerPage={props.rowsPerPage}
            onHandlePageChange={props.onHandlePageChange}
            onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
            searchInput={props.searchInput}
            open={props.open}
            dialogOpen={props.dialogOpen}
            popUpid={props.popUpid}
            onHandleClose={props.onHandleClose}
          />
        </TabContainer>
      )}
      {props.propertySearchPayTaxTabValue === 2 && (
        <TabContainer>
          <CartTableList
            propertySearchPayBillValues={props.propertySearchPayBillValues}
            handlePayTaxActionClick={props.handlePayTaxActionClick}
          />
        </TabContainer>
      )}
      {props.propertySearchPayTaxTabValue === 3 && (
        <TabContainer>
          <PaymentInfoForm
            bookReceiptNumber={props.bookReceiptNumber}
            selectUserName={props.selectUserName}
            selectUserNameValues={props.selectUserNameValues}
            payableAmount={props.payableAmount}
            onHandleMakePaymentSubmit={props.onHandleMakePaymentSubmit}
            paymentMode={props.paymentMode}
            handleSelectUserNameChange={props.handleSelectUserNameChange}
          />
        </TabContainer>
      )}
      {props.propertySearchPayTaxTabValue === 4 && (
        <TabContainer>
          <PayerInfoForm
            mobileNumber={props.mobileNumber}
            houseNoBuildingName={props.houseNoBuildingName}
            emailId={props.emailId}
            payerName={props.payerName}
            isPayerOwner={props.isPayerOwner}
            handleContinueClick={props.handleContinueClick}
            handleIsPayerOwnerChange={props.handleIsPayerOwnerChange}
            handlePayerInfoChange={props.handlePayerInfoChange}
          />
        </TabContainer>
      )}
      {props.propertySearchPayTaxTabValue === 5 && (
        <TabContainer>
          <ConfirmationForm
            successPopUp={props.successPopUp}
            handlePopUpClose={props.handlePopUpClose}
            selectUserName={props.selectUserName}
            paymentMode={props.paymentMode}
            ChequeDate={""}
            ChequeNumber={""}
            bookReceiptNumber={props.bookReceiptNumber}
            OwnerName={props.OwnerName}
            referanceID={
              props.propertySearchPayBillValues.map(y => y.RequestId)[0]
            }
            handleConfirmationClick={props.handleConfirmationClick}
            taxAmount={
              props.propertySearchPayBillValues.map(y => y.TaxAmount)[0]
            }
            propertyType={
              props.propertySearchPayBillValues.map(y => y.PropertyType)[0]
            }
            mobileNumber={props.mobileNumber}
            houseNoBuildingName={props.houseNoBuildingName}
            emailId={props.emailId}
            payerName={props.payerName}
          />
        </TabContainer>
      )}
    </div>
  );
};

export default PropertySearchPayTaxTabForm;
