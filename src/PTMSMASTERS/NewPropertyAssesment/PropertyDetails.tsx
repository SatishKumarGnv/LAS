import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Field, FieldArray, Formik, FormikProps, getIn } from "formik";
import * as React from "react";
import * as yup from "yup";

import {
  Checkbox,
  Dialog,
  DialogActions,
  FormControl,
  Input,
  ListItemText,
  MenuItem,
  Select
} from "@material-ui/core";
import {
  IBuildingValues,
  IFloorValues,
  IGenderValues,
  INature,
  IpropertyDetails
} from "src/DefaultLayout/HomePage";
import { isArray } from "util";

const ErrorMessage = ({ name, index, value }: any) => (
  <Field
    name={name}
    // tslint:disable-next-line:jsx-no-lambda
    render={({ form }: any) => {
      const touch = getIn(form.touched, name);
      const error = getIn(form.errors, name);
      return touch && error ? errorDisplay(name, error, index) : null;
    }}
  />
);
const errorDisplay = (name: any, error: any, index: any) => {
  switch (error) {
    case error:
    default:
      return "Required Field";
  }
};
const ProposalTabInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IpropertyDetails>) => (
  <div className="innerpage-container">
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="inner-header-titile">
        <h2>Location Details</h2>
      </div>

      <div>
        <div className="white-card background-white-card">
          <div className="child-card">
            <Button
              className="map-btn"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.handleMapOpenClick()}
            >
              Select Map
            </Button>
            {
              <Dialog
                className="map-view"
                open={values.mapOpen}
                onClose={values.handleMapPopUpClose}
                aria-labelledby="responsive-dialog-title"
              >
                <div>
                  <DialogActions>
                    <iframe
                      src={`http://192.168.100.18:3000/UAIMSMap/index.html?applicationId=${
                        values.ApplicationId
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
                          values.handleMapClose(values.ApplicationId)
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
            <h4>
              District <span className="star">*</span>
            </h4>
            <TextField
              name="District"
              // tslint:disable-next-line:jsx-no-lambda
              // onChange={event => {
              //   // tslint:disable-next-line:jsx-no-lambda
              //   values.District === ""
              //     ? values.handleDistrictChange(event)
              //     : // tslint:disable-next-line:no-console
              //       console.log(values.District);
              // }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.District}
            />
            <div className="error-msg">
              {touched.District && errors.District && (
                <div>District Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Corporation/Muncipality/Np <span className="star">*</span>
            </h4>

            <TextField
              name="Corporation"
              value={values.Corporation}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.Corporation && errors.Corporation && (
                <div> Corporation/Muncipality/Np Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Mandal <span className="star">*</span>
            </h4>
            <TextField
              name="Mandal"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Mandal}
            />
            <div className="error-msg">
              {touched.Mandal && errors.Mandal && (
                <div>Mandal Is Required </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Village <span className="star">*</span>
            </h4>
            <TextField
              name="Village"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Village}
            />
            <div className="error-msg">
              {touched.Village && errors.Village && (
                <div>Village Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Township <span className="star">*</span>
            </h4>
            <TextField
              name="TownShip"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.TownShip}
            />
            <div className="error-msg">
              {touched.TownShip && errors.TownShip && (
                <div>Township Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Sector <span className="star">*</span>
            </h4>
            <TextField
              name="Sector"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Sector}
            />
            <div className="error-msg">
              {touched.Sector && errors.Sector && <div>Sector Is Required</div>}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Colony<span className="star">*</span>
            </h4>
            <TextField
              name="Colony"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Colony}
            />
            <div className="error-msg">
              {touched.Colony && errors.Colony && <div>Colony Is Required</div>}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Locality<span className="star">*</span>
            </h4>
            <TextField
              name="Locality"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Locality}
            />
            <div className="error-msg">
              {touched.Locality && errors.Locality && (
                <div>Locality Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Zone No<span className="star">*</span>
            </h4>
            <TextField
              name="ZoneNo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ZoneNo}
            />
            <div className="error-msg">
              {touched.ZoneNo && errors.ZoneNo && (
                <div>Zone No Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Ward No<span className="star">*</span>
            </h4>
            <TextField
              name="WardNo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.WardNo}
            />
            <div className="error-msg">
              {touched.WardNo && errors.WardNo && (
                <div>Ward No Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Block No <span className="star">*</span>
            </h4>
            <TextField
              name="Block"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Block}
            />
            <div className="error-msg">
              {touched.Block && errors.Block && <div>Block No Is Required</div>}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Street <span className="star">*</span>
            </h4>
            <TextField
              name="Street"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Street}
            />
            <div className="error-msg">
              {touched.Street && errors.Street && <div>Street Is Required</div>}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Enumeration block <span className="star">*</span>
            </h4>
            <TextField
              name="Enumerationblock"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Enumerationblock}
            />
            <div className="error-msg">
              {touched.Enumerationblock && errors.Enumerationblock && (
                <div>Enumeration block Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Plot No <span className="star">*</span>
            </h4>
            <TextField
              name="PlotNo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.PlotNo}
            />
            <div className="error-msg">
              {touched.PlotNo && errors.PlotNo && (
                <div>Plot No Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Election Ward <span className="star">*</span>
            </h4>
            <TextField
              name="ElectionWard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ElectionWard}
            />
            <div className="error-msg">
              {touched.ElectionWard && errors.ElectionWard && (
                <div>Election Ward Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Door No<span className="star">*</span>
            </h4>
            <TextField
              name="DoorNo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.DoorNo}
            />
            <div className="error-msg">
              {touched.DoorNo && errors.DoorNo && (
                <div>Door No Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Pincode <span className="star">*</span>
            </h4>
            <TextField
              name="Pincode"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Pincode}
            />
            <div className="error-msg">
              {touched.Pincode && errors.Pincode && (
                <div>Pincode Is Required</div>
              )}
            </div>
          </div>

          {values.CategoryOwnershipId === 1004 ? (
            <div>
              <div className="card-title">
                <h3>Vacant Land Details</h3>
              </div>
              <div className="first-container">
                <div className="child-card">
                  <h4>
                    Survey Number <span className="star">*</span>
                  </h4>
                  <TextField
                    name="SurveyNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.SurveyNumber}
                  />
                  <div className="error-msg">
                    {touched.SurveyNumber && errors.SurveyNumber && (
                      <div>Survey Number Is Required</div>
                    )}
                  </div>
                </div>
                <div className="child-card">
                  <h4>
                    Patta Number<span className="star">*</span>
                  </h4>

                  <TextField
                    name="PattaNumber"
                    value={values.PattaNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="error-msg">
                    {touched.PattaNumber && errors.PattaNumber && (
                      <div> Patta NumberIs Required</div>
                    )}
                  </div>
                </div>
                <div className="child-card">
                  <h4>
                    Vacant Land Area(in Sq.Mtrs) <span className="star">*</span>
                  </h4>
                  <TextField
                    name="VacantLandArea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.VacantLandArea}
                  />
                  <div className="error-msg">
                    {touched.VacantLandArea && errors.VacantLandArea && (
                      <div>Vacant Land Area Is Required </div>
                    )}
                  </div>
                </div>
                <div className="child-card">
                  <h4>
                    Current Market Value <span className="star">*</span>
                  </h4>
                  <TextField
                    name="CurrentMarketValue"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.CurrentMarketValue}
                  />
                  <div className="error-msg">
                    {touched.CurrentMarketValue &&
                      errors.CurrentMarketValue && (
                        <div>Current Market Value Is Required</div>
                      )}
                  </div>
                </div>
                <div className="child-card">
                  <h4>
                    Registered Document Value <span className="star">*</span>
                  </h4>
                  <TextField
                    type="number"
                    name="RegisteredDocumentValue"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentValue}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentValue &&
                      errors.RegisteredDocumentValue && (
                        <div>Registered Document Value Is Required</div>
                      )}
                  </div>
                </div>
                <div className="child-card ">
                  <h4>Effective Date</h4>
                  <input
                    className="select-date select-date-border"
                    max="9999-12-31"
                    name="EffectiveDate"
                    type="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.EffectiveDate}
                  />
                </div>
                <div className="child-card">
                  <h4>Layout Permit Number</h4>
                  <TextField
                    name="LayoutPermitNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.LayoutPermitNumber}
                  />
                </div>
                <div className="child-card ">
                  <h4>Layout Permit Date</h4>
                  <input
                    className="select-date select-date-border"
                    max="9999-12-31"
                    name="LayoutPermitDate"
                    type="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.LayoutPermitDate}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="card-title">
                <h3>Assessment Details</h3>
              </div>
              <div className="first-container">
                <div className="child-card">
                  <h4>
                    Reason For Creation <span className="star">*</span>
                  </h4>

                  <Select
                    className="forword-select"
                    value={values.reasonForCreation}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                      handleChange(event);
                      // values.handleSelectDepartmentChange(event);
                    }}
                    inputProps={{
                      id: "age-simple",
                      name: "reasonForCreation"
                    }}
                  >
                    <MenuItem className="select-dropdown-bottom" value={1}>
                      New Property
                    </MenuItem>
                  </Select>

                  {/* <div className="error-msg">
                    {touched.CertificateNumber && errors.CertificateNumber && (
                      <div> Occupancy Certificate Number Is Required</div>
                    )}
                  </div> */}
                </div>
                <div className="child-card">
                  <h4>
                    Occupancy Certificate Number <span className="star">*</span>
                  </h4>
                  <TextField
                    name="CertificateNumber"
                    type=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.CertificateNumber}
                  />
                  <div className="error-msg">
                    {touched.CertificateNumber && errors.CertificateNumber && (
                      <div> Occupancy Certificate Number Is Required</div>
                    )}
                  </div>
                </div>
                <div className="child-card ">
                  <h4>
                    Occupancy Certificate Date<span className="star">*</span>
                  </h4>
                  <input
                    type="date"
                    className="select-date select-date-border"
                    max="9999-12-31"
                    name="OccupancyCertificateDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.OccupancyCertificateDate}
                  />
                  <div className="error-msg">
                    {touched.OccupancyCertificateDate &&
                      errors.OccupancyCertificateDate && (
                        <div> Occupancy Certificate Date Is Required</div>
                      )}
                  </div>
                </div>

                <div className="child-card">
                  <h4>
                    Extent Of Site (Sq.Mtrs)<span className="star">*</span>
                  </h4>
                  <TextField
                    type="number"
                    name="ExtentOfSite"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ExtentOfSite}
                  />
                  <div className="error-msg">
                    {touched.ExtentOfSite && errors.ExtentOfSite && (
                      <div>Extent Of Site Is Required</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="card-title">
                <h3>Construction Types</h3>
              </div>
              <div className="first-container">
                <div className="child-card">
                  <h4>Floor Type</h4>
                  <FormControl
                  // error={!!(touched.EnumMasterID && errors.EnumMasterID)}
                  >
                    <Select
                      value={values.EnumMasterID}
                      name="EnumMasterID"
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={(
                        event: React.ChangeEvent<HTMLSelectElement>
                      ) => {
                        handleChange(event);
                      }}
                    >
                      {values.selectfloorValues &&
                        values.selectfloorValues.map(
                          (e: IGenderValues, id: number) => (
                            <MenuItem
                              key={id}
                              className="select-dropdown-bottom"
                              value={e.EnumMasterID}
                            >
                              {e.EnumMasterDesc}
                            </MenuItem>
                          )
                        )}
                    </Select>
                    {/* {!!touched.EnumMasterID && errors.EnumMasterID ? (
                      <FormHelperText className="error-msg">
                        Floor Type Is Required
                      </FormHelperText>
                    ) : (
                      ""
                    )} */}
                  </FormControl>
                </div>
                <div className="child-card">
                  <h4>Roof Type</h4>

                  <FormControl
                  // error={!!(touched.EnumMasterID && errors.EnumMasterID)}
                  >
                    <Select
                      value={values.roofId}
                      name="roofId"
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={(
                        event: React.ChangeEvent<HTMLSelectElement>
                      ) => {
                        handleChange(event);
                      }}
                    >
                      {values.selectroofValues &&
                        values.selectroofValues.map(
                          (e: IGenderValues, id: number) => (
                            <MenuItem
                              key={id}
                              className="select-dropdown-bottom"
                              value={e.EnumMasterID}
                            >
                              {e.EnumMasterDesc}
                            </MenuItem>
                          )
                        )}
                    </Select>
                    {/* {!!touched.roofId && errors.roofId ? (
                      <FormHelperText className="error-msg">
                        Roof Type Is Required
                      </FormHelperText>
                    ) : (
                      ""
                    )} */}
                  </FormControl>
                </div>
                <div className="child-card">
                  <h4>Wall Type</h4>
                  <FormControl
                  // error={!!(touched.wallId && errors.wallId)}
                  >
                    <Select
                      value={values.wallId}
                      name="wallId"
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={(
                        event: React.ChangeEvent<HTMLSelectElement>
                      ) => {
                        handleChange(event);
                      }}
                    >
                      {values.selectwallValues &&
                        values.selectwallValues.map(
                          (e: IGenderValues, id: number) => (
                            <MenuItem
                              key={id}
                              className="select-dropdown-bottom"
                              value={e.EnumMasterID}
                            >
                              {e.EnumMasterDesc}
                            </MenuItem>
                          )
                        )}
                    </Select>
                    {/* {!!touched.wallId && errors.wallId ? (
                      <FormHelperText className="error-msg">
                        Wall Type Is Required
                      </FormHelperText>
                    ) : (
                      ""
                    )} */}
                  </FormControl>
                </div>
                <div className="child-card">
                  <h4>Wood Type</h4>
                  <FormControl
                  // error={!!(touched.woodId && errors.woodId)}
                  >
                    <Select
                      value={values.woodId}
                      name="woodId"
                      // tslint:disable-next-line:jsx-no-lambda
                      onChange={(
                        event: React.ChangeEvent<HTMLSelectElement>
                      ) => {
                        handleChange(event);
                      }}
                    >
                      {values.selectwoodValues &&
                        values.selectwoodValues.map(
                          (e: IGenderValues, id: number) => (
                            <MenuItem
                              key={id}
                              className="select-dropdown-bottom"
                              value={e.EnumMasterID}
                            >
                              {e.EnumMasterDesc}
                            </MenuItem>
                          )
                        )}
                    </Select>
                    {/* {!!touched.woodId && errors.woodId ? (
                      <FormHelperText className="error-msg">
                        Wood Type Is Required
                      </FormHelperText>
                    ) : (
                      ""
                    )} */}
                  </FormControl>
                </div>
              </div>
              <div className="card-title">
                <h3>Amenities</h3>
              </div>
              <div className="child-card ">
                <FormControl
                // error={!!(touched.aminityTypes && errors.aminityTypes)}
                >
                  <h4>Select Amenities Here</h4>

                  <Select
                    multiple={true}
                    name="aminityTypes"
                    value={
                      values.aminityTypes && values.aminityTypes.map(x => x)
                    }
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handleMultiSelectAminityChange(event, values);
                    }}
                    input={<Input id="select-multiple-checkbox" />}
                    // tslint:disable-next-line:jsx-no-lambda
                    renderValue={(selected: string[] | string) =>
                      isArray(selected) ? selected.join(", ") : selected
                    }
                    // MenuProps={MenuProps}
                  >
                    {values.aminityValues1 &&
                      values.aminityValues1
                        .map(x => x.AmenitiesName)
                        .map((name, i) => (
                          <MenuItem className="" key={i} value={name}>
                            <Checkbox
                              checked={values.aminityTypes.indexOf(name) > -1}
                            />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                  </Select>
                  {/* {!!touched.aminityTypes && errors.aminityTypes && (
                    <FormHelperText className="error-msg">
                      Project Rules Is Required Field
                    </FormHelperText>
                  )} */}
                </FormControl>
              </div>

              <div className="card-title">
                <h3> Floor Details</h3>
              </div>
              <FieldArray
                name="FloorArray"
                // tslint:disable-next-line:jsx-no-lambda
                render={helpers => (
                  <div>
                    <div className="first-container">
                      {values.FloorArray && values.FloorArray.length > 0
                        ? values.FloorArray.map(
                            (x: IFloorValues, index: number) => (
                              <React.Fragment key={index}>
                                <div className="floor-border">
                                  <div className="child-card">
                                    <h4>
                                      Floor Number
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.FloorNumber`}
                                      render={() => {
                                        return (
                                          <FormControl>
                                            <Select
                                              name={`FloorArray.${index}.FloorNumber`}
                                              value={x.FloorNumber}
                                              onChange={(event: any) => {
                                                handleChange(event);
                                                values.handleFloorNumberIdChange(
                                                  event,
                                                  index,
                                                  values
                                                );
                                              }}
                                            >
                                              {x.selectFloorValues &&
                                                x.selectFloorValues.map(
                                                  (
                                                    e: IGenderValues,
                                                    id: number
                                                  ) => (
                                                    <MenuItem
                                                      key={id}
                                                      className="select-dropdown-bottom"
                                                      value={e.EnumMasterID}
                                                    >
                                                      {e.EnumMasterDesc}
                                                    </MenuItem>
                                                  )
                                                )}
                                            </Select>
                                          </FormControl>
                                        );
                                      }}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.FloorNumber`}
                                        index={index}
                                        value={x.FloorNumber}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Classification Of Building{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.BuildingClassification`}
                                      render={() => {
                                        return (
                                          <FormControl>
                                            <Select
                                              name={`FloorArray.${index}.BuildingClassification`}
                                              value={x.BuildingClassification}
                                              onChange={(event: any) => {
                                                handleChange(event);
                                                values.handleBuildingClassificationChange(
                                                  event,
                                                  index,
                                                  values
                                                );
                                              }}
                                            >
                                              {x.selectClassificationValues &&
                                                x.selectClassificationValues.map(
                                                  (
                                                    e: IBuildingValues,
                                                    id: number
                                                  ) => (
                                                    <MenuItem
                                                      key={id}
                                                      className="select-dropdown-bottom"
                                                      value={e.EnumMasterID}
                                                    >
                                                      {e.EnumMasterDesc}
                                                    </MenuItem>
                                                  )
                                                )}
                                            </Select>
                                          </FormControl>
                                        );
                                      }}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.BuildingClassification`}
                                        index={index}
                                        value={x.BuildingClassification}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Nature Of Usage{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.NatureOfUsage`}
                                      render={() => {
                                        return (
                                          <FormControl>
                                            <Select
                                              name={`FloorArray.${index}.NatureOfUsage`}
                                              value={x.NatureOfUsage}
                                              onChange={(event: any) => {
                                                handleChange(event);
                                                values.handleNatureChange(
                                                  event,
                                                  index,
                                                  values
                                                );
                                              }}
                                            >
                                              {x.selectNatUsageValues &&
                                                x.selectNatUsageValues.map(
                                                  (e: INature, id: number) => (
                                                    <MenuItem
                                                      key={id}
                                                      className="select-dropdown-bottom"
                                                      value={e.EnumMasterID}
                                                    >
                                                      {e.EnumMasterDesc}
                                                    </MenuItem>
                                                  )
                                                )}
                                            </Select>
                                          </FormControl>
                                        );
                                      }}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.NatureOfUsage`}
                                        index={index}
                                        value={x.NatureOfUsage}
                                      />
                                    </div>
                                  </div>

                                  <div className="child-card">
                                    <h4>
                                      Firm Name <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      className="select-textfield"
                                      name={`FloorArray.${index}.FirmName`}
                                      render={() => (
                                        <TextField
                                          type="text"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleFirmNameChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          onBlur={handleBlur}
                                          value={x.FirmName}
                                          name={`FloorArray.${index}.FirmName`}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.FirmName`}
                                        index={index}
                                        value={x.FirmName}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Occupancy <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.Occupancy`}
                                      render={() => {
                                        return (
                                          <FormControl>
                                            <Select
                                              name={`FloorArray.${index}.Occupancy`}
                                              value={x.Occupancy}
                                              onChange={(event: any) => {
                                                handleChange(event);
                                                values.handleOccupancyChange(
                                                  event,
                                                  index,
                                                  values
                                                );
                                              }}
                                            >
                                              {x.selectOccupancyValues &&
                                                x.selectOccupancyValues.map(
                                                  (
                                                    e: IGenderValues,
                                                    id: number
                                                  ) => (
                                                    <MenuItem
                                                      key={id}
                                                      className="select-dropdown-bottom"
                                                      value={e.EnumMasterID}
                                                    >
                                                      {e.EnumMasterDesc}
                                                    </MenuItem>
                                                  )
                                                )}
                                            </Select>
                                          </FormControl>
                                        );
                                      }}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.Occupancy`}
                                        index={index}
                                        value={x.Occupancy}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Occupant Name{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      className="select-textfield"
                                      name={`FloorArray.${index}.OccupantName`}
                                      render={() => (
                                        <TextField
                                          type="text"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleOccupantNameChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          onBlur={handleBlur}
                                          value={x.OccupantName}
                                          name={`FloorArray.${index}.OccupantName`}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.OccupantName`}
                                        index={index}
                                        value={x.OccupantName}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card ">
                                    <h4>
                                      Construction Date{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.ConstructionDate`}
                                      render={() => (
                                        <input
                                          className="select-date select-date-border"
                                          max="9999-12-31"
                                          type="date"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleConstructionDateChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.ConstructionDate`}
                                          value={x.ConstructionDate}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.ConstructionDate`}
                                        index={index}
                                        value={x.ConstructionDate}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card ">
                                    <h4>
                                      Effective From Date{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.EffectiveFromDate`}
                                      render={() => (
                                        <input
                                          className="select-date select-date-border"
                                          max="9999-12-31"
                                          type="date"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleEffectiveFromDateChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.EffectiveFromDate`}
                                          value={x.EffectiveFromDate}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.EffectiveFromDate`}
                                        index={index}
                                        value={x.EffectiveFromDate}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card-two">
                                    <h4>
                                      Unstructered Land{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.UnstructeredLand`}
                                      render={() => {
                                        return (
                                          <FormControl>
                                            <Select
                                              name={`FloorArray.${index}.UnstructeredLand`}
                                              value={x.UnstructeredLand}
                                              onChange={(event: any) => {
                                                handleChange(event);
                                                values.handleUnstructeredLandChange(
                                                  event,
                                                  index,
                                                  values
                                                );
                                              }}
                                            >
                                              <MenuItem
                                                className="select-dropdown-bottom"
                                                value={1}
                                              >
                                                YES
                                              </MenuItem>
                                              <MenuItem
                                                className="select-dropdown-bottom"
                                                value={2}
                                              >
                                                NO
                                              </MenuItem>
                                            </Select>
                                          </FormControl>
                                        );
                                      }}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.UnstructeredLand`}
                                        index={index}
                                        value={x.UnstructeredLand}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Length (Mtrs){" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.Length`}
                                      render={() => (
                                        <TextField
                                          type="number"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleLengthChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.Length`}
                                          value={x.Length}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.Length`}
                                        index={index}
                                        value={x.Length}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Breadth (Mtrs)
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.Breadth`}
                                      render={() => (
                                        <TextField
                                          type="number"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleBreadthChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.Breadth`}
                                          value={x.Breadth}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.Breadth`}
                                        index={index}
                                        value={x.Breadth}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Plinth Area (Sq.Mtrs)
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.PlinthArea`}
                                      render={() => (
                                        <TextField
                                          type="number"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          // onChange={(event: any) => {
                                          //   handleChange(event);
                                          //   values.handlePlinthAreaChange(
                                          //     event,
                                          //     index,
                                          //     values
                                          //   );
                                          // }}
                                          name={`FloorArray.${index}.PlinthArea`}
                                          value={x.PlinthArea}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.PlinthArea`}
                                        index={index}
                                        value={x.PlinthArea}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Building Permission No{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.BuildingPermissionNo`}
                                      render={() => (
                                        <TextField
                                          type="number"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleBildingPermissionChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.BuildingPermissionNo`}
                                          value={x.BuildingPermissionNo}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.BuildingPermissionNo`}
                                        index={index}
                                        value={x.BuildingPermissionNo}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card ">
                                    <h4>
                                      Building Permission Date{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.BuildingPermissionDate`}
                                      render={() => (
                                        <input
                                          className="select-date select-date-border"
                                          max="9999-12-31"
                                          type="date"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleBuildingDateChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.BuildingPermissionDate`}
                                          value={x.BuildingPermissionDate}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.BuildingPermissionDate`}
                                        index={index}
                                        value={x.BuildingPermissionDate}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Plinth Area in Building Plan{" "}
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.PlinthAreaInBuildingPlan`}
                                      render={() => (
                                        <TextField
                                          type="text"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleBuildingPlanChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.PlinthAreaInBuildingPlan`}
                                          value={x.PlinthAreaInBuildingPlan}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.PlinthAreaInBuildingPlan`}
                                        index={index}
                                        value={x.PlinthAreaInBuildingPlan}
                                      />
                                    </div>
                                  </div>
                                  <div className="child-card">
                                    <h4>
                                      Tax Amount
                                      <span className="star"> *</span>
                                    </h4>
                                    <Field
                                      name={`FloorArray.${index}.taxAmount`}
                                      render={() => (
                                        <TextField
                                          type="number"
                                          // tslint:disable-next-line:jsx-no-lambda
                                          onChange={(event: any) => {
                                            handleChange(event);
                                            values.handleTaxChange(
                                              event,
                                              index,
                                              values
                                            );
                                          }}
                                          name={`FloorArray.${index}.taxAmount`}
                                          value={x.taxAmount}
                                        />
                                      )}
                                    />
                                    <div className="error-msg">
                                      <ErrorMessage
                                        className="error-msg"
                                        name={`FloorArray.${index}.taxAmount`}
                                        index={index}
                                        value={x.taxAmount}
                                      />
                                    </div>
                                  </div>

                                  {index === 0 ? (
                                    <div />
                                  ) : (
                                    <div className="continue-btn saveand-btn">
                                      <Button
                                        className="main-btn"
                                        type="button"
                                        // tslint:disable-next-line:jsx-no-lambda
                                        onClick={() => {
                                          helpers.remove(index);
                                          values.onDeleteClickRegProp(index);
                                        }}
                                      >
                                        <img src="/images/delete.png" />
                                      </Button>
                                    </div>
                                  )}
                                </div>
                                {values.FloorArray.length === index + 1 ? (
                                  <div className="bottom-save-btn">
                                    <a
                                      className="text-link"
                                      type="button"
                                      // tslint:disable-next-line:jsx-no-lambda
                                      onClick={() => {
                                        helpers.insert(index + 1, {
                                          AddClickCount:
                                            values.AddClickCount + 1,
                                          BuildingClassification: 0,
                                          FirmName: "",
                                          FloorNumber: 0,
                                          NatureOfUsage: 0,
                                          Occupancy: 0,
                                          OccupantName: "",
                                          // tslint:disable-next-line:object-literal-sort-keys
                                          ConstructionDate: "",
                                          EffectiveFromDate: "",
                                          Length: "",
                                          taxAmount: 0,
                                          Breadth: "",
                                          PlinthArea: "",
                                          BuildingPermissionNo: "",
                                          BuildingPermissionDate: "",
                                          PlinthAreaInBuildingPlan: "",
                                          UnstructeredLand: 0,
                                          selectFloorValues:
                                            values.selectFloorValues,
                                          selectClassificationValues:
                                            values.selectClassificationValues,
                                          selectOccupancyValues:
                                            values.selectOccupancyValues,
                                          id: values.AddClickCount + 1
                                        });
                                        values.onHandleAddClickRegProp(
                                          index + 1
                                        );
                                      }}
                                    >
                                      Add Another
                                    </a>
                                  </div>
                                ) : (
                                  <div />
                                )}
                              </React.Fragment>
                            )
                          )
                        : null}
                    </div>
                  </div>
                )}
              />
            </div>
          )}
          <div className="child-card">
            <h4>Total Tax In ₹</h4>

            <TextField
              name="TotalTax"
              type="number"
              value={values.TotalTax === 0 ? undefined : values.TotalTax}
              // onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="card-title">
            <h3>Details Of Surrounding Boundaries Of The Property</h3>
          </div>
          <div className="first-container">
            <div className="child-card">
              <h4>
                North <span className="star">*</span>
              </h4>

              <TextField
                name="North"
                value={values.North}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="error-msg">
                {touched.North && errors.North && <div> North Is Required</div>}
              </div>
            </div>
            <div className="child-card">
              <h4>
                East<span className="star">*</span>
              </h4>

              <TextField
                name="East"
                value={values.East}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="error-msg">
                {touched.East && errors.East && <div> East Is Required</div>}
              </div>
            </div>
            <div className="child-card">
              <h4>
                West <span className="star">*</span>
              </h4>

              <TextField
                name="West"
                value={values.West}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="error-msg">
                {touched.West && errors.West && <div> West Is Required</div>}
              </div>
            </div>
            <div className="child-card">
              <h4>
                South <span className="star">*</span>
              </h4>

              <TextField
                name="South"
                value={values.South}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="error-msg">
                {touched.South && errors.South && <div> South Is Required</div>}
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-save-btn">
          <Button
            className="reset-btn"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.handleRegBack()}
          >
            Back
          </Button>

          <Button
            className="save-btn"
            // className="loading"
            type="submit"
          >
            Save & Continue
          </Button>
        </div>
      </div>

      <div>
        <div className="bottom-card">
          Completed : Step {values.activeStep + 1} of 5
          <div>
            <MobileStepper
              className="mobile-stepper"
              variant="progress"
              steps={5}
              position="static"
              activeStep={values.activeStep}
              nextButton={<KeyboardArrowRight />}
              backButton={<KeyboardArrowLeft />}
            />
          </div>
        </div>
      </div>
    </form>
  </div>
);

const modelSchema2 = yup.object().shape({
  // tslint:disable-next-line:object-literal-sort-keys
  District: yup.string().required(),
  Pincode: yup
    .string()
    .max(6)
    .required(),
  // tslint:disable-next-line:object-literal-sort-keys
  DoorNo: yup.string().required(),
  ElectionWard: yup.string().required(),
  PlotNo: yup.string().required(),
  Enumerationblock: yup.string().required(),
  Street: yup.string().required(),
  Block: yup.string().required(),
  WardNo: yup.string().required(),
  ZoneNo: yup.string().required(),
  Locality: yup.string().required(),
  Colony: yup.string().required(),
  Sector: yup.string().required(),
  TownShip: yup.string().required(),
  Village: yup.string().required(),
  Mandal: yup.string().required(),
  Corporation: yup.string().required(),
  North: yup.string().required(),
  East: yup.string().required(),
  West: yup.string().required(),
  South: yup.string().required(),
  SurveyNumber: yup.string().required(),
  PattaNumber: yup.string().required(),
  VacantLandArea: yup.string().required(),
  CurrentMarketValue: yup.string().required(),
  RegisteredDocumentValue: yup.string().required()
});

const modelSchema = yup.object().shape({
  FloorArray: yup
    .array()
    .of(
      yup.object().shape({
        FloorNumber: yup
          .number()
          .min(1)
          .required(),
        // tslint:disable-next-line:object-literal-sort-keys
        BuildingClassification: yup
          .number()
          .min(1)
          .required(),
        UnstructeredLand: yup
          .number()
          .min(1)
          .required(),
        Length: yup.string().required(),
        taxAmount: yup
          .number()
          .min(1)
          .required(),
        Breadth: yup.string().required(),
        FirmName: yup.string().required(),
        PlinthArea: yup.string().required(),
        BuildingPermissionDate: yup.string().required(),
        BuildingPermissionNo: yup.string().required(),
        EffectiveFromDate: yup.string().required(),
        OccupantName: yup.string().required(),
        ConstructionDate: yup.string().required(),
        PlinthAreaInBuildingPlan: yup.string().required(),
        NatureOfUsage: yup
          .number()
          .min(1)
          .required(),
        Occupancy: yup
          .number()
          .min(1)
          .required()
      })
    )
    .required("required"),
  // tslint:disable-next-line:object-literal-sort-keys
  District: yup.string().required(),
  Pincode: yup
    .string()
    .max(6)
    .required(),
  // tslint:disable-next-line:object-literal-sort-keys
  DoorNo: yup.string().required(),
  ElectionWard: yup.string().required(),
  PlotNo: yup.string().required(),
  Enumerationblock: yup.string().required(),
  Street: yup.string().required(),
  Block: yup.string().required(),
  WardNo: yup.string().required(),
  ZoneNo: yup.string().required(),
  Locality: yup.string().required(),
  Colony: yup.string().required(),
  Sector: yup.string().required(),
  TownShip: yup.string().required(),
  Village: yup.string().required(),
  Mandal: yup.string().required(),
  Corporation: yup.string().required(),
  ExtentOfSite: yup.string().required(),
  OccupancyCertificateDate: yup.string().required(),
  CertificateNumber: yup.string().required(),
  North: yup.string().required(),
  East: yup.string().required(),
  West: yup.string().required(),
  South: yup.string().required()
});

export const PropertyDetailsForm = (props: IpropertyDetails) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props
    }}
    validationSchema={
      props.CategoryOwnershipId === 1004 ? modelSchema2 : modelSchema
    }
    onSubmit={props.onPropertyHandleSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<IpropertyDetails>) => (
      <ProposalTabInnerForm
        {...fprops}
        values={{
          ...fprops.values,

          PropertyTypeId: props.PropertyTypeId,

          // tslint:disable-next-line:object-literal-sort-keys
          CategoryOwnershipId: props.CategoryOwnershipId,
          FloorArray: props.FloorArray,
          TotalTax: props.TotalTax,
          selectClassificationValues: props.selectClassificationValues,
          selectFloorValues: props.selectFloorValues,
          selectfloorValues: props.selectfloorValues,

          // tslint:disable-next-line:object-literal-sort-keys
          aminityTypes: props.aminityTypes,
          aminityValues1: props.aminityValues1,
          selectroofValues: props.selectroofValues,
          selectwallValues: props.selectwallValues,
          selectwoodValues: props.selectwoodValues,
          // tslint:disable-next-line:object-literal-sort-keys
          selectNatUsageValues: props.selectNatUsageValues
        }}
      />
    )}
  />
);

export default PropertyDetailsForm;
