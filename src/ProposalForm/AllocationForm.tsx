import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup
  // FormControlLabel,
  // Radio,
  // RadioGroup
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as React from "react";
import { IAllocationFormProps } from "../DefaultLayout/HomePage";

const AllocationForm = (props: IAllocationFormProps) => (
  <div className="innerpage-container">
    <div className="inner-header-titile">
      <h2>Land allocation</h2>
    </div>
    <div className="application-card">
      <div className="white-card">
        <div className="flex-row">
          <div className="proposal-img-card">
            <img className="application-img" src="/images/Artboard.jpg" />
            <div className="start-proposal">
              <FormControl component="fieldset">
                <h2 className="proposal-text">Start Proposal</h2>
                <h5>Select With In AGC/Out Of AGC</h5>
                <FormGroup>
                  <FormControlLabel
                    className="start-proposal-text"
                    control={
                      <Checkbox
                        checked={props.WithInAGC}
                        // tslint:disable-next-line:jsx-no-lambda
                        onChange={event => {
                          props.handleWithInAGCChange(event);
                        }}
                        color="primary"
                      />
                    }
                    label="With In AGC"
                  />
                  <FormControlLabel
                    className="start-proposal-text start-proposal-text1"
                    control={
                      <Checkbox
                        checked={props.OutOfAGC}
                        // tslint:disable-next-line:jsx-no-lambda
                        onChange={event => {
                          props.handleOutOfAGCChange(event);
                        }}
                        // value="OutOfAGC"
                        color="primary"
                      />
                    }
                    label="Out Of AGC"
                  />
                </FormGroup>
              </FormControl>
              <div className="width-proposal">
                <Button
                  className="proposal-btn"
                  onClick={
                    // tslint:disable-next-line:jsx-no-lambda
                    () => {
                      // props.history.push("/page/proposalForm");
                      props.handleTownShipIdsClick();
                    }
                  }
                >
                  Create Proposal
                </Button>
              </div>
            </div>
          </div>
          <div className="gom-data">
            <p>
              The function of Land Management system is to protect the state
              ownership of land and the public land of Amaravati against
              plundering and waste and to strengthen socialist land relations.
              It is very important to establish proper order in the use of lands
              at their enterprises, to delineate the exact separation of public
              lands from personal plots and to keep exact land records. Land
              allocation provides a systematic check on the correct use of land.
            </p>
            <div className="proposal-main">
              <div className="proposal-grid">
                <img className="proposal-img" src="/images/image2pro.png" />
                <div>
                  <h5>1.Select</h5>
                  <p>Open the Agreement Form.</p>
                </div>
              </div>
              <div className="proposal-grid">
                <img className="proposal-img" src="/images/imagepro.png" />
                <div>
                  <h5>2.Complete</h5>
                  <p>Walk through our easy to use form generation process.</p>
                </div>
              </div>
              <div className="proposal-grid">
                <img className="proposal-img" src="/images/image3pro.png" />
                <div>
                  <h5>3.Download</h5>
                  <p>Download and store your legal document.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AllocationForm;
