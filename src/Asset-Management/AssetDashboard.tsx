import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { IDashboardStateProps } from "../Container/AssetDashboardState";

const AssetDashboard = (props: IDashboardStateProps) => (
  <div className="dashboard-container">
    <div className="first-container">
      <div className="first-sub">
        <div className="slider-container">
          <img src="images/slider-img" />
        </div>

        <div className="right-container-two">
          <div className="asset-apcrd-container">
            <div className="asset-conainer">
              <img src="images/asset.png" />
              <h3>Land Allocation System</h3>
            </div>
            <div className="apcrd-conainer">
              <img src="images/apcrda.png" />
              <h3>APCRDA Esp Tool</h3>
            </div>
          </div>
        </div>
      </div>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        //  className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Card>
        <CardContent>Requested List</CardContent>
      </Card>
      <div className="media-container">
        <div className="electronics-bg">
          <img src="images/asset.png" alt="asset tree" />
          <h6>Asset Tree</h6>
        </div>
      </div>
      <div className="media-container">
        <div className="sports-bg">
          <img src="images/asset.png" alt="Bulk Validation" />
          <h6>Bulk Validation</h6>
        </div>
      </div>
      <div className="media-container">
        <div className="knowledge-city">
          <img src="images/asset.png" alt="Component List" />
          <h6>Component List</h6>
        </div>
      </div>
      <div className="media-container">
        <div className="government-city">
          <img src="images/asset.png" alt="Facility List" />
          <h6>Facility List</h6>
        </div>
      </div>
      <div className="media-container">
        <div className="finance-city">
          <img src="images/asset.png" alt="Asset List" />
          <h6>Asset List</h6>
        </div>
      </div>
      <div className="media-container">
        <div className="tourism-city">
          <img src="images/asset.png" alt="Remedial List" />
          <h6>Remedial List</h6>
        </div>
      </div>
    </div>

    <Card>
      <CardContent>Document List</CardContent>
    </Card>
  </div>
);

const AssetDashboardForm = (props: IDashboardStateProps) => (
  <AssetDashboard dashboardData={props.dashboardData} date={props.date} />
);

export default AssetDashboardForm;
