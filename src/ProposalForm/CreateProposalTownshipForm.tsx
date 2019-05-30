import * as React from "react";

// import Button from "@material-ui/core/Button";
import {
  SpecificImageOptions,
  SpecificOptions
} from "src/Dashboard/Dashboard1";
import { IDashboardStateValues } from "src/DefaultLayout/HomePage";
import { ICreateProposalProps } from "../DefaultLayout/HomePage";

const CreateProposalTownshipInnerForm = (values: ICreateProposalProps) => (
  <div className="dashboard-container">
    <div className="first-container">
      {values.townshipValues.map((x: IDashboardStateValues, index: number) => {
        return (
          <div
            className="media-container"
            key={index}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => {
              values.handleTownshipClick(x.TownshipId);
            }}
          >
            <div className={SpecificOptions(x) || "electronics-bg"}>
              <img src={SpecificImageOptions(x)} />
              <h6>{x.TownshipName}</h6>
            </div>

            <div className="text-container">
              <h4>{x.TownshipName}</h4>
              <h6 className="first-heading">Available Land Size</h6>
              <label>{x.AvailableLandSize}</label>

              <h6 className="second-heading">Total Land Size</h6>
              <label>{x.TotalLandSize}</label>

              <div>
                <a className="signup-button">Allocated /In-Progress-List</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const CreateProposalTownshipForm = (props: ICreateProposalProps) => (
  <div>
    <CreateProposalTownshipInnerForm
      TownshipId={props.TownshipId}
      townshipValues={props.townshipValues}
      handleTownshipClick={props.handleTownshipClick}
    />
  </div>
);

export default CreateProposalTownshipForm;
