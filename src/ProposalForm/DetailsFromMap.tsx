import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import {
  IDetailsFromMap,
  IProposalTabStateValues
} from "../DefaultLayout/HomePage";

const DetailsFromMapForm = (
  values: IDetailsFromMap & IProposalTabStateValues
) => {
  return (
    <div className="map-card">
      <div className="map-title">
        <img src="/images/login-audit-icon.png" />
        <h2>Details From Map</h2>
      </div>
      <div className="">
        <div className="white-card1 background-white-card">
          <div className="child-card">
            <h4>Requested Land Area(in Acres)</h4>
            <TextField
              name="AvailableLandArea"
              margin="normal"
              value={values.AvailableLandArea}
            />
          </div>
          <div className="child-card">
            <h4>Select Plot Codes/Parcel Numbers</h4>
            <TextField name="Plot" margin="normal" value={values.Plot} />
          </div>

          <div className="child-card">
            <Button
              className="eye-btn"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => {
                values.handleEditMapDetails(values);
              }}
            >
              Edit/ change Plot Details
            </Button>
            {
              <Dialog
                className="map-view"
                open={values.mapPopUpOpen}
                onClose={values.handleMapPopUpClose}
                aria-labelledby="responsive-dialog-title"
              >
                <div>
                  <DialogActions>
                    <iframe
                      src={`http://192.168.100.18:3000/UAIMSMap/index.html?applicationId=${
                        values.enterApplicationId
                      }`}
                      height="900"
                      width="2000"
                      // tslint:disable-next-line:jsx-no-lambda
                      // dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}
                    />
                    <div>
                      <Button
                        className="main-btn"
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={() =>
                          values.handleMapClose(values.enterApplicationId)
                        }
                      >
                        Capture Map Values
                      </Button>
                      <br />
                      <Button
                        className="main-btn skip-map-btn"
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={() => values.handleMapPopUpClose()}
                      >
                        Skip Map
                      </Button>
                    </div>
                  </DialogActions>
                </div>
              </Dialog>
            }
          </div>

          <div className="child-card">
            <h4>District</h4>
            <TextField
              name="District"
              margin="normal"
              value={values.District}
            />
          </div>
          <div className="child-card">
            <h4>Mandal</h4>
            <TextField name="Mandal" margin="normal" value={values.Mandal} />
          </div>
          <div className="child-card">
            <h4>Village</h4>
            <TextField name="Village" margin="normal" value={values.Village} />
          </div>
          <div className="child-card">
            <h4>Township</h4>
            <TextField
              name="TownShip"
              margin="normal"
              value={values.TownShip}
            />
          </div>
          <div className="child-card">
            <h4>Sector</h4>
            <TextField name="Sector" margin="normal" value={values.Sector} />
          </div>
          <div className="child-card">
            <h4>Colony</h4>
            <TextField
              name="Colony"
              id="Colony"
              margin="normal"
              value={values.Colony}
            />
          </div>
          <div className="child-card">
            <h4>Block</h4>
            <div className="jss0150 jss0151">
              <TextField
                name="Block"
                id="Block"
                margin="normal"
                value={values.Block}
              />
            </div>
            <h4>Plot</h4>
            <div className="jss0150 jss0151">
              <TextField name="Plot" margin="normal" value={values.Plot} />
            </div>
          </div>

          {/* <div className="child-card">
        <h4>Survey Number</h4>
        <TextField
         
          id="SurveyNumberByPlanning"
          margin="normal"
          value={values.SurveyNumberByPlanning}
        />
      </div> */}
          <div className="child-card-two">
            <h4 className="textarea#Boundaries;jss0298">Boundaries</h4>
            <TextField
              rows="4"
              name="Boundaries"
              id="Boundaries"
              multiline={true}
              // rowsMax="4"
              value={values.Boundaries}
              margin="normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFromMapForm;
