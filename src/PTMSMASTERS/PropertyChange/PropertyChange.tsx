import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IDistrictValues,
  IPropertyChange,
  IpropertyDetails,
  IPropertyDetailsProps,
  IPropertyDetailsStateProps,
  ISelectDepartmentvalues
} from "src/DefaultLayout/HomePage";
import { IPagerProps } from "src/Masters/Pager";
import { regex } from "src/ProposalForm/OrganizationForm";
import * as yup from "yup";
import PropertyChangeFloorForm from "./CurrentPropertyUsageChange";
import PropertyDetailsTableForm from "./PropertyDetailsTable";
import ProposedDetailsForm from "./ProposedPropertyUsagetype";

const PropertyChangeinnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<
  IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps &
    IPagerProps
>) => (
  <div className="innerpage-container">
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="inner-header-titile">
        <h2>Application For Property Usage Change</h2>
      </div>
      <div className="white-card">
        <div className="child-card-two">
          <h4>
            District <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.Description && errors.Description)}>
            <Select
              value={values.Description}
              name="Description"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleDistrictChange(event);
              }}
            >
              {values.selectDistrictValues &&
                values.selectDistrictValues.map(
                  (e: IDistrictValues, id: number) => (
                    <MenuItem
                      key={id}
                      defaultValue={values.Description}
                      className="select-dropdown-bottom"
                      value={e.Description}
                    >
                      {e.Description}
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.Description && errors.Description ? (
              <div className="error-msg">District Is Required</div>
            ) : (
              ""
            )}
          </FormControl>
          {/* </div> */}
        </div>
        {/* <div className="first-container"> */}
        <div className="child-card-two">
          <h4>
            Select Muncipality/Corporation <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.MunciId && errors.MunciId)}>
            <Select
              value={values.MunciId}
              name="MunciId"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleMuncipalityPropertyChange(event);
              }}
            >
              {values.selectMunciValues &&
                values.selectMunciValues.map(
                  (e: IDistrictValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.MunciId}
                    >
                      {e.Description}
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.MunciId && errors.MunciId ? (
              <div className="error-msg">
                Muncipality/Corporation Is Required
              </div>
            ) : (
              ""
            )}
          </FormControl>
        </div>
        {/* </div> */}
        {/* <div className="first-container"> */}
        <div className="child-card-two">
          <h4>
            Mandal <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.MandalId && errors.MandalId)}>
            <Select
              value={values.MandalId}
              name="MandalId"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleMandalPropertyChange(event);
              }}
            >
              {values.selectMandalValues &&
                values.selectMandalValues.map(
                  (e: IDistrictValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.MandalId}
                    >
                      {e.Description}
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.MandalId && errors.MandalId ? (
              <div className="error-msg">Mandal Is Required</div>
            ) : (
              ""
            )}
          </FormControl>
        </div>
        {/* </div> */}
        {/* <div className="first-container"> */}
        <div className="child-card-two">
          <h4>
            Township <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.TownId && errors.TownId)}>
            <Select
              value={values.TownId}
              name="TownId"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
              }}
            >
              {values.selectTownValues &&
                values.selectTownValues.map(
                  (e: IDistrictValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.TownId}
                    >
                      {e.Description}
                    </MenuItem>
                  )
                )}
            </Select>
            {!!touched.TownId && errors.TownId ? (
              <div className="error-msg">Township Is Required</div>
            ) : (
              ""
            )}
          </FormControl>
        </div>
        {/* </div> */}
        <div className="child-card-two">
          <h4>
            Name Of The Owner <span className="star">*</span>
          </h4>
          <TextField
            name="OwnerName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.OwnerName}
          />
          <div className="error-msg">
            {touched.OwnerName && errors.OwnerName && (
              <div> OwnerName Is Required</div>
            )}
          </div>
        </div>
        <div className="child-card-two">
          <h4>
            Owner Phone Number <span className="star">*</span>
          </h4>
          <TextField
            type="number"
            name="OwnerPhoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.OwnerPhoneNumber}
          />
          <div className="error-msg">
            {touched.OwnerPhoneNumber && errors.OwnerPhoneNumber && (
              <div> Enter Valid Phone Number </div>
            )}
          </div>
        </div>
        <div className="bottom-save-btn">
          <Button
            className="save-btn"
            // className="loading"
            type="submit"
          >
            Search
          </Button>
        </div>

        {values.propertyDetailsTableOpen ? (
          <div className="child-card-two">
            <div>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h4"
                    className="grap-heading"
                  >
                    {/* <img src="/images/table-icon.png" /> */}
                    Property Details
                  </Typography>
                </CardContent>
                <PropertyDetailsTableForm
                  dialogExpandOpen={values.dialogExpandOpen}
                  open={values.open}
                  onHandleClose={values.onHandleClose}
                  onHandlePropertyChangeExpandClick={
                    values.onHandlePropertyChangeExpandClick
                  }
                  RequestId={values.RequestId}
                  onhandleselectValuePopUpClose={
                    values.onhandleselectValuePopUpClose
                  }
                  selectValuePopUp={values.selectValuePopUp}
                  propertyValues={values.propertyValues}
                  selectedValue={values.selectedValue}
                  propertyId={values.propertyId}
                  searchInput={values.searchInput}
                  count={values.count}
                  page={values.page}
                  rowsPerPage={values.rowsPerPage}
                  handleSelectedValueChange={values.handleSelectedValueChange}
                  onHandleChangeRowsPerPage={values.onHandleChangeRowsPerPage}
                  onHandlePageChange={values.onHandlePageChange}
                  onHandleSearch={values.onHandleSearch}
                  propertyDetailsTableList={values.propertyDetailsTableList}
                />
              </Card>
            </div>
            <div className="bottom-save-btn">
              <Button
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handlePropertyChangeClick(values)}
                className="save-btn"
                // className="loading"
                type="button"
              >
                Get Details
              </Button>
            </div>
          </div>
        ) : (
          <div />
        )}

        {values.PropTable ? (
          <div className="over-data-one">
            <div className="child-card-two">
              <div>
                <Card>
                  <CardContent>
                    <Typography
                      gutterBottom={true}
                      variant="headline"
                      component="h4"
                      className="grap-heading"
                    >
                      {/* <img src="/images/table-icon.png" /> */}
                      Current Property Usage Type
                    </Typography>
                  </CardContent>
                  <PropertyChangeFloorForm
                    getFloorDetailValues={values.getFloorDetailValues}
                    PropTable={values.PropTable}
                    PropertyChangeList={values.PropertyChangeList}
                    handlePropertyChangeClick={values.handlePropertyChangeClick}
                  />
                </Card>
              </div>
            </div>
            {values.FloorArray.length !== 0 ? (
              <div className="child-card-two">
                <div>
                  <Card>
                    <CardContent>
                      <Typography
                        gutterBottom={true}
                        variant="headline"
                        component="h4"
                        className="grap-heading"
                      >
                        {/* <img src="/images/table-icon.png" /> */}
                        Proposed Property Usage Type
                      </Typography>
                    </CardContent>
                    <ProposedDetailsForm
                      PropertyTypeId={values.PropertyTypeId}
                      reasonForCreation={values.reasonForCreation}
                      TotalTaxAmount={values.TotalTaxAmount}
                      ProcessingFee={values.ProcessingFee}
                      TotalTax={values.TotalTax}
                      handleTaxChange={values.handleTaxChange}
                      handleUnstructeredLandChange={
                        values.handleUnstructeredLandChange
                      }
                      CategoryOwnershipId={values.CategoryOwnershipId}
                      CurrentMarketValue={values.CurrentMarketValue}
                      RegisteredDocumentValue={values.RegisteredDocumentValue}
                      LayoutPermitNumber={values.LayoutPermitNumber}
                      LayoutPermitDate={values.LayoutPermitDate}
                      EffectiveDate={values.EffectiveDate}
                      VacantLandArea={values.VacantLandArea}
                      PattaNumber={values.PattaNumber}
                      SurveyNumber={values.SurveyNumber}
                      handleNatureChange={values.handleNatureChange}
                      selectNatUsageValues={values.selectNatUsageValues}
                      NatureOfUsage={values.NatureOfUsage}
                      Occupancy={values.Occupancy}
                      handleOccupancyChange={values.handleOccupancyChange}
                      selectOccupancyValues={values.selectOccupancyValues}
                      BuildingClassification={values.BuildingClassification}
                      FloorNumber={values.FloorNumber}
                      handleBuildingClassificationChange={
                        values.handleBuildingClassificationChange
                      }
                      selectClassificationValues={
                        values.selectClassificationValues
                      }
                      handleFloorNumberIdChange={
                        values.handleFloorNumberIdChange
                      }
                      selectFloorValues={values.selectFloorValues}
                      onHandleAddClickRegProp={values.onHandleAddClickRegProp}
                      onDeleteClickRegProp={values.onDeleteClickRegProp}
                      FloorArray={values.FloorArray}
                      AddClickCount={values.AddClickCount}
                      handlePlinthAreaChange={values.handlePlinthAreaChange}
                      handleOccupantNameChange={values.handleOccupantNameChange}
                      handleLengthChange={values.handleLengthChange}
                      handleEffectiveFromDateChange={
                        values.handleEffectiveFromDateChange
                      }
                      handleConstructionDateChange={
                        values.handleConstructionDateChange
                      }
                      handleBuildingPlanChange={values.handleBuildingPlanChange}
                      handleBuildingDateChange={values.handleBuildingDateChange}
                      handleBreadthChange={values.handleBreadthChange}
                      handleBildingPermissionChange={
                        values.handleBildingPermissionChange
                      }
                      handleFirmNameChange={values.handleFirmNameChange}
                      South={values.South}
                      West={values.West}
                      East={values.East}
                      North={values.North}
                      aminityValues1={values.aminityValues1}
                      aminityTypes={values.aminityTypes}
                      handleMultiSelectAminityChange={
                        values.handleMultiSelectAminityChange
                      }
                      ApplicationId={values.ApplicationId}
                      mapOpen={values.mapOpen}
                      handleMapClose={values.handleMapClose}
                      handleMapOpenClick={values.handleMapOpenClick}
                      handleMapPopUpClose={values.handleMapPopUpClose}
                      wallId={values.wallId}
                      woodId={values.woodId}
                      selectwoodValues={values.selectwoodValues}
                      selectwallValues={values.selectwallValues}
                      roofId={values.roofId}
                      selectroofValues={values.selectroofValues}
                      EnumMasterID={values.EnumMasterID}
                      EnumMasterDesc={values.EnumMasterDesc}
                      selectfloorValues={values.selectfloorValues}
                      ExtentOfSite={values.ExtentOfSite}
                      CertificateNumber={values.CertificateNumber}
                      OccupancyCertificateDate={values.OccupancyCertificateDate}
                      handleRegBack={values.handleRegBack}
                      District={values.District}
                      Corporation={values.Corporation}
                      Mandal={values.Mandal}
                      TownShip={values.TownShip}
                      Village={values.Village}
                      Sector={values.Sector}
                      Colony={values.Colony}
                      Locality={values.Locality}
                      ZoneNo={values.ZoneNo}
                      WardNo={values.WardNo}
                      Block={values.Block}
                      Street={values.Street}
                      Enumerationblock={values.Enumerationblock}
                      PlotNo={values.PlotNo}
                      ElectionWard={values.ElectionWard}
                      DoorNo={values.DoorNo}
                      Pincode={values.Pincode}
                      activeStep={values.activeStep}
                      onPropertyHandleSubmit={values.onPropertyHandleSubmit}
                    />
                  </Card>
                </div>
              </div>
            ) : (
              <div />
            )}

            <div className="second-card">
              <div className="child-card">
                <Button
                  className="save-btn"
                  // className="loading"
                  type="button"
                >
                  Calculate
                </Button>
              </div>

              <div
                className="child-card"
                // className="TotalTax"
              >
                <h4>Total Tax Amount ₹</h4>
                <TextField
                  // defaultValue="₹"
                  name="TotalTaxAmount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.TotalTaxAmount}
                />
                {/* <div className="error-msg">
            {touched.OwnerName && errors.OwnerName && (
              <div> OwnerName Is Required</div>
            )}
          </div> */}
              </div>
              <div
                className="child-card"
                // className="processingFee"
              >
                <h4>Processing Fee ₹</h4>
                <TextField
                  // defaultValue="₹"
                  name="ProcessingFee"
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ProcessingFee}
                />
                {/* <div className="error-msg">
            {touched.OwnerName && errors.OwnerName && (
              <div> OwnerName Is Required</div>
            )}
          </div> */}
              </div>
            </div>
            {/* </div> */}
            <div className="second-card collapse-card-two">
              <FormControl className="forword-to">
                <div>
                  <h3>Forward To :</h3>
                </div>
                <div className="child-card select-dept">
                  <h4>Select Department User</h4>
                  <Select
                    style={{ width: "250px" }}
                    value={values.selectDepartmentId}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handleselectDepartmentChange(event);
                    }}
                    inputProps={{
                      id: "selectDepartmentId",
                      name: "selectDepartmentId"
                    }}
                  >
                    {values.selectDepartmentForwardList &&
                      values.selectDepartmentForwardList.map(
                        (x: ISelectDepartmentvalues, id: number) => (
                          <MenuItem
                            className="select-dropdown-bottom"
                            key={id}
                            value={x.UserId}
                          >
                            {x.DepartmentName} - {x.UserName}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </div>
              </FormControl>
            </div>
            <div className="bootom-submit">
              <Button
                className="save-btn"
                // className="loading"
                type="button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handlePropertyChangeDraftClick(values)}
              >
                Draft
              </Button>

              <Button
                className="save-btn"
                // className="loading"
                type="button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handlePropertyChangeSubmitPopUp(values)}
              >
                Submit
              </Button>
            </div>

            {
              <Dialog
                open={values.forwardOpen}
                // tslint:disable-next-line:jsx-no-lambda
                //  onClose={() => values.onHandleApprovePopUpClose()}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle
                  id="responsive-dialog-title"
                  className="popup-title"
                >
                  Confirmation For Forwarding
                </DialogTitle>
                <DialogContent>
                  You Are Forwarding To :
                  <b> {values.applicationSelectDepartmentName}</b>
                </DialogContent>
                <DialogActions>
                  <div className="popup-bottom-btn">
                    <Button
                      className="main-btn"
                      type="button"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => {
                        values.propertyChangeDraftPopUp
                          ? values.handlePropertyChangeDraftSaveAsDraft(values)
                          : values.handlePropertyChangeSubmit(values);
                      }}
                      color="primary"
                      autoFocus={true}
                    >
                      YES
                    </Button>
                    <Button
                      className="main-btn"
                      type="button"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => values.onHandleClose()}
                      color="secondary"
                      autoFocus={true}
                    >
                      No
                    </Button>
                  </div>
                </DialogActions>
              </Dialog>
            }
            {
              <Dialog
                open={values.reviewOpen}
                // tslint:disable-next-line:jsx-no-lambda
                // onClose={() => values.onHandleReviewPopUpClose()}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  Please Select Department User To Forward.
                </DialogTitle>

                <DialogActions className="btn-only-incenter">
                  <Button
                    className="btn-center"
                    // tslint:disable-next-line:jsx-no-lambda
                    color="primary"
                    autoFocus={true}
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => values.onHandleClose()}
                  >
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            }
            {
              <Dialog
                open={values.successPopUp}
                // tslint:disable-next-line:jsx-no-lambda
                // onClose={() => values.onHandleReviewPopUpClose()}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  Property Changed Submitted Successfully
                </DialogTitle>

                <DialogActions className="btn-only-incenter">
                  <Button
                    className="btn-center"
                    // tslint:disable-next-line:jsx-no-lambda
                    color="primary"
                    autoFocus={true}
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => values.onHandleClose()}
                  >
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            }
          </div>
        ) : (
          <div />
        )}
      </div>
    </form>
  </div>
);

const modelSchema = yup.object().shape({
  // tslint:disable-next-line:object-literal-sort-keys
  Description: yup
    .string()
    .min(1)
    .required(),
  MandalId: yup
    .number()
    .min(1)
    .required(),
  MunciId: yup
    .number()
    .min(1)
    .required(),
  OwnerName: yup.string().required(),
  OwnerPhoneNumber: yup
    .string()
    .max(16)
    .matches(regex)
    .required(),
  TownId: yup
    .number()
    .min(1)
    .required()
});
export const PropertyChangeForm = (
  props: IPropertyChange &
    IpropertyDetails &
    IPropertyDetailsStateProps &
    IPropertyDetailsProps &
    IPagerProps
) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.handleSubmitProperty}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<
        IPropertyChange &
          IpropertyDetails &
          IPropertyDetailsStateProps &
          IPropertyDetailsProps &
          IPagerProps
      >
    ) => (
      <PropertyChangeinnerForm
        {...fprops}
        values={{
          ...fprops.values,
          CategoryOwnershipId: props.CategoryOwnershipId,
          FloorArray: props.FloorArray,
          ProcessingFee: props.ProcessingFee,
          PropTable: props.PropTable,
          PropertyTypeId: props.PropertyTypeId,
          TotalTaxAmount: props.TotalTaxAmount,
          forwardOpen: props.forwardOpen,
          getFloorDetailValues: props.getFloorDetailValues,
          propertyDetailsTableList: props.propertyDetailsTableList,
          reviewOpen: props.reviewOpen,
          selectClassificationValues: props.selectClassificationValues,
          selectDepartmentForwardList: props.selectDepartmentForwardList,
          selectDistrictValues: props.selectDistrictValues,
          selectMunciValues: props.selectMunciValues,
          selectNatUsageValues: props.selectNatUsageValues,
          successPopUp: props.successPopUp
        }}
      />
    )}
  />
);
export default PropertyChangeForm;
