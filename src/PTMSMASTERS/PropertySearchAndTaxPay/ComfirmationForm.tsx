// tslint:disable-next-line:ordered-imports
import { List, ListItem, Dialog } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as React from "react";

export interface IConfirmationProps {
  readonly payerName: string;
  readonly emailId: string;
  readonly mobileNumber: string;
  readonly houseNoBuildingName: string;
  readonly paymentMode: string;
  readonly selectUserName: number;
  readonly bookReceiptNumber: number;
  readonly taxAmount: number;
  readonly propertyType: string;
  readonly ChequeNumber: string;
  readonly ChequeDate: string;
  readonly OwnerName: string;
  readonly referanceID: string;
  readonly successPopUp: boolean;
  handleConfirmationClick(values: IConfirmationProps): void;
  handlePopUpClose(): void;
}

const ConfirmationForm = (props: IConfirmationProps) => (
  <div>
    <div className="white-card background-white-card">
      <div className="child-card">
        <List>
          <ListItem className="dilog-list">
            <span>Payer Name</span>
            <span className="confirm-align">: {props.payerName}</span>
          </ListItem>
          <ListItem className="dilog-list">
            <span>Email Id for future communication</span>
            <span className="confirm-align">: {props.emailId}</span>
          </ListItem>
          <ListItem className="dilog-list">
            <span>Mobile Number</span>
            <span className="confirm-align">: {props.mobileNumber}</span>
          </ListItem>
          <ListItem className="dilog-list">
            <span>Property Type</span>
            <span className="confirm-align">: {props.propertyType}</span>
          </ListItem>
          <ListItem className="dilog-list">
            <span>House Number,Building Name</span>
            <span className="confirm-align">: {props.houseNoBuildingName}</span>
          </ListItem>
          <ListItem className="dilog-list">
            <span>Tax Amount</span>
            <span className="confirm-align">: {props.taxAmount}</span>
          </ListItem>
        </List>
      </div>
      <div className="bottom-save-btn">
        <Button
          className="save-btn"
          // className="loading"
          type="button"
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => props.handleConfirmationClick(props)}
          // tslint:disable-next-line:jsx-no-lambda
        >
          Cofirm
        </Button>
      </div>
      {
        <Dialog
          open={props.successPopUp}
          // onClose={this.onHandleAddPopUpClose}
          aria-labelledby="simple-dialog-title"
        >
          <div id="simple-dialog-title">
            Payment Details Confirmed Successfully
            <div className="popup-bottom-btn">
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => props.handlePopUpClose()}
              >
                OK
              </Button>
            </div>
          </div>
        </Dialog>
      }
    </div>
  </div>
);

export default ConfirmationForm;
