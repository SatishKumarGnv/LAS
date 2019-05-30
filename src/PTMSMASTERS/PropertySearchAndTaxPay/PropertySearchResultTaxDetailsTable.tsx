import * as React from "react";

import Button from "@material-ui/core/Button";
// import Collapse from "@material-ui/core/Collapse";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Workbook from "react-excel-workbook";

import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  IconButton,
  Typography
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { IPropertySearchResultTaxValues } from "src/DefaultLayout/HomePage";
import Pager from "src/Masters/Pager";

export interface IPropertySearchResultViewPopUpValues {
  readonly propertySearchResultTaxValues: IPropertySearchResultTaxValues;
}
export interface IApplicationProps {
  readonly propertySearchResultTaxValues: IPropertySearchResultTaxValues;
  readonly open: boolean;
  readonly dialogOpen: boolean;
  readonly popUpid: string;
  readonly propertySearchResultViewPopUpValues: IPropertySearchResultTaxValues;

  onHandleSearchResultViewActionClick(
    values: IPropertySearchResultTaxValues
  ): void;
  onHandlePayBillActionClick(values: IPropertySearchResultTaxValues): void;
  onHandleClose(): void;
}

export interface IPropertySearchResultTaxTableListProps {
  readonly propertySearchResultTaxList: ReadonlyArray<
    IPropertySearchResultTaxValues
  >;
  readonly propertySearchResultViewPopUpValues: IPropertySearchResultTaxValues;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  readonly open: boolean;
  readonly dialogOpen: boolean;
  readonly popUpid: string;

  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleSearchResultViewActionClick(
    values: IPropertySearchResultTaxValues
  ): void;
  onHandlePayBillActionClick(values: IPropertySearchResultTaxValues): void;
  onHandleClose(): void;
}

const PropertySearchResultTaxTableItems = (props: IApplicationProps) => (
  <TableRow>
    <TableCell
    // className="table-btn-grid"
    // tslint:disable-next-line:jsx-no-lambda
    >
      <Button
        className="save-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandleSearchResultViewActionClick(
            props.propertySearchResultTaxValues
          )
        }
      >
        {/* <img src="/images/eye.png" /> */}
        View Bill
      </Button>
    </TableCell>
    <TableCell>{props.propertySearchResultTaxValues.RequestId}</TableCell>
    <TableCell>{props.propertySearchResultTaxValues.OwnerName}</TableCell>
    <TableCell>{props.propertySearchResultTaxValues.Status}</TableCell>
    <TableCell>{props.propertySearchResultTaxValues.PropertyType}</TableCell>
    <TableCell>
      {props.propertySearchResultTaxValues.TaxAmount.toString()}
    </TableCell>
    <TableCell>
      <Button
        className="save-btn"
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() =>
          props.onHandlePayBillActionClick(props.propertySearchResultTaxValues)
        }
      >
        Pay Bill
      </Button>
    </TableCell>
  </TableRow>
);

export const PropertySearchResultTaxTableList = (
  props: IPropertySearchResultTaxTableListProps
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="PropertyTaxDetails.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet
            data={props.propertySearchResultTaxList}
            name="Sheet A"
          >
            <Workbook.Column label="Assessment Id" value="AssessmentID" />
            <Workbook.Column label="Request Id" value="RequestId" />
            <Workbook.Column label="Owner Name" value="OwnerName" />
            <Workbook.Column label="Status" value="Status" />
            <Workbook.Column label="Property Type" value="PropertyType" />
            <Workbook.Column label="Tax Amount" value="TaxAmount" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>View Bill</TableCell>
              <TableCell>Referance ID</TableCell>
              <TableCell>Owner Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Property Type</TableCell>
              <TableCell>Tax Amount</TableCell>
              <TableCell>Pay Bill</TableCell>
            </TableRow>
          </TableHead>
          {/* {
            <Dialog
              className="pop-up"
              open={props.dialogOpen}
              onClose={props.onHandleClose}
              aria-labelledby="simple-dialog-title"
            >
              <DialogTitle id="simple-dialog-title">
                Property Search Result View Bill Details
              </DialogTitle>
              <div id="simple-dialog-title pop-up">
                <PropertySearchResultViewPopUp
                  propertySearchResultViewPopUpValues={
                    props.propertySearchResultViewPopUpValues
                  }
                  popUpid={props.popUpid}
                  onHandleClose={props.onHandleClose}
                />
              </div>
            </Dialog>
          } */}

          <TableBody>
            {props.propertySearchResultTaxList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.propertySearchResultTaxList
                .filter(x => {
                  return props.searchInput !== ""
                    ? registrationNumer(
                        props.searchInput,
                        x.AssessmentID.toString()
                      ) ||
                        registrationNumer(props.searchInput, x.OwnerName) ||
                        registrationNumer(props.searchInput, x.Status) ||
                        registrationNumer(props.searchInput, x.PropertyType) ||
                        registrationNumer(
                          props.searchInput,
                          x.TaxAmount.toString()
                        )
                    : true;
                })
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
                .map(value => (
                  <PropertySearchResultTaxTableItems
                    propertySearchResultViewPopUpValues={
                      props.propertySearchResultViewPopUpValues
                    }
                    onHandlePayBillActionClick={
                      props.onHandlePayBillActionClick
                    }
                    onHandleSearchResultViewActionClick={
                      props.onHandleSearchResultViewActionClick
                    }
                    popUpid={props.popUpid}
                    key={value.AssessmentID}
                    propertySearchResultTaxValues={value}
                    open={props.open}
                    dialogOpen={props.dialogOpen}
                    onHandleClose={props.onHandleClose}
                  />
                ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
const registrationNumer = (
  searchInput: string,
  registrationNumber?: string
) => {
  if (registrationNumber) {
    return registrationNumber.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};

export interface IPropertySearchResultStateProps {
  readonly propertySearchResultTaxList: ReadonlyArray<
    IPropertySearchResultTaxValues
  >;
  readonly finalpath: string;
  readonly popUpid: string;
  readonly propertySearchResultViewPopUpValues: IPropertySearchResultTaxValues;
  readonly viewBillPopUpOpen: boolean;
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  readonly searchInput: string;
  readonly open: boolean;
  readonly dialogOpen: boolean;
  onHandlePageChange(event: any, page: number): void;
  onHandleChangeRowsPerPage(event: any): void;
  onHandleSearch(event: any): void;
  onHandleSearchResultViewActionClick(
    values: IPropertySearchResultTaxValues
  ): void;
  onHandlePayBillActionClick(values: IPropertySearchResultTaxValues): void;
  onHandleClose(): void;
  PropertyNewSearchClick(): void;
  handleViewBillPopUpClose(): void;
}

const PropertySearchResultTable = (props: IPropertySearchResultStateProps) => (
  <div>
    <div className="graph-card">
      <Card className="title-card">
        <CardContent className="title-card">
          <div className="title-row">
            <Typography
              gutterBottom={true}
              variant="headline"
              component="h4"
              className="grap-heading"
            >
              {/* <img src="/images/table-icon.png" /> */}
              Property Tax Details
            </Typography>
          </div>
        </CardContent>
        <div className="table-card">
          <TextField
            className="inner-search"
            id="standard-search"
            placeholder="Search field"
            type="search"
            value={props.searchInput}
            onChange={props.onHandleSearch}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton aria-label="Search">
                  <Search />
                </IconButton>
              )
            }}
          />

          <PropertySearchResultTaxTableList
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
          <Pager
            count={props.count}
            page={props.page}
            rowsPerPage={props.rowsPerPage}
            onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
            onHandlePageChange={props.onHandlePageChange}
          />
          <h4 className="table-below-text">
            <strong> * </strong>Please verify the bill details and Amount due
            carefully. If you found any Discrepancies in the Bill, Please
            contact the Tax Collector for more Information.
          </h4>
          <br />
          <h4 className="table-below-text">
            <strong> * </strong>You can make any or all of the indicated
            payments/instalments via secure online payment gateway by specifying
            the corresponding amounts in the amount due column above, and then
            click on "Make Payment".
          </h4>
          {
            <Dialog
              className="map-view"
              open={props.viewBillPopUpOpen}
              // onClose={values.handleMapPopUpClose}
              aria-labelledby="responsive-dialog-title"
            >
              <div>
                <DialogActions>
                  <iframe
                    src={`http://${props.finalpath}`}
                    height="900"
                    width="2000"
                    // tslint:disable-next-line:jsx-no-lambda
                    // dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}
                  />
                  <div>
                    <Button
                      className="main-btn"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => props.handleViewBillPopUpClose()}
                    >
                      Close
                    </Button>
                    <br />
                  </div>
                </DialogActions>
              </div>
            </Dialog>
          }

          <div className="inner-header">
            <Button
              className="save-btn "
              color="primary"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => props.PropertyNewSearchClick()}
            >
              New Search
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
);
export default PropertySearchResultTable;
