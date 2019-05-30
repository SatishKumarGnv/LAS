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

import { Card, CardContent, Typography } from "@material-ui/core";
import { IPropertySearchResultTaxValues } from "src/DefaultLayout/HomePage";

export interface IApplicationProps {
  readonly propertySearchResultTaxValues: IPropertySearchResultTaxValues;
}

export interface IPropertySearchResultTaxTableListProps {
  readonly propertySearchPayBillValues: ReadonlyArray<
    IPropertySearchResultTaxValues
  >;
}

const PropertySearchResultTaxTableItems = (props: IApplicationProps) => (
  <TableRow>
    <TableCell>{props.propertySearchResultTaxValues.RequestId}</TableCell>
    <TableCell>{props.propertySearchResultTaxValues.OwnerName}</TableCell>
    <TableCell>{props.propertySearchResultTaxValues.Status}</TableCell>
    <TableCell>{props.propertySearchResultTaxValues.PropertyType}</TableCell>
    <TableCell>{props.propertySearchResultTaxValues.TaxAmount}</TableCell>
  </TableRow>
);

export const PropertySearchResultTaxTableList = (
  props: IPropertySearchResultTaxTableListProps
) => {
  return (
    <div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Applicant Name</TableCell>
              <TableCell>Owner Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Property Type</TableCell>
              <TableCell>Tax Amount</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.propertySearchPayBillValues.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title">No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.propertySearchPayBillValues.map(value => (
                <PropertySearchResultTaxTableItems
                  key={value.AssessmentID}
                  propertySearchResultTaxValues={value}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export interface ICartTableStateProps {
  readonly propertySearchPayBillValues: ReadonlyArray<
    IPropertySearchResultTaxValues
  >;
  handlePayTaxActionClick(): void;
}

const CartTableList = (props: ICartTableStateProps) => (
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
              unsecured
            </Typography>
          </div>
        </CardContent>
        <div className="table-card">
          <PropertySearchResultTaxTableList
            propertySearchPayBillValues={props.propertySearchPayBillValues}
          />
        </div>
        <Button
          className="save-btn paytaxbtn"
          color="primary"
          type="button"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => props.handlePayTaxActionClick()}
        >
          Pay Tax
        </Button>
      </Card>
    </div>
  </div>
);
export default CartTableList;
