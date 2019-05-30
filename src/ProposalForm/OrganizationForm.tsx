import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";

import {
  DialogActions,
  DialogTitle,
  FormHelperText
  //  InputAdornment
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import MenuItem from "@material-ui/core/MenuItem";
import MobileStepper from "@material-ui/core/MobileStepper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Formik, FormikProps } from "formik";
import * as React from "react";
// import { host } from "src/Api_Integration/TabsSearchService";
import * as yup from "yup";
import {
  IAgremmentTypeValues,
  IAllocationValues,
  ICountryValues,
  // ICreateProposalProps,
  ICreateProposalProps,
  IDetailsFromMap,
  IProposalTabStateValues,
  ISelectAgrementTypeProps,
  ISelectAllocationProps,
  ISelectCountryProps,
  ISelectStateProps,
  ISelectTypeOfAllocationProps,
  IStateValues,
  ITypeOfAllocationValues
} from "../DefaultLayout/HomePage";
// import { phoneregex } from "./AuthorizedPersonForm";
import DetailsFromMapForm from "./DetailsFromMap";

const ProposalTabInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<
  IProposalTabStateValues &
    ICountryValues &
    IStateValues &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    IDetailsFromMap
>) => (
  <div className="innerpage-container">
    <form onSubmit={handleSubmit} autoComplete="off">
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

      {
        <Dialog
          open={values.selectMapValuesPopUp}
          //  onClose={this.handleDeletePopUpClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">
            Please Select Map Values
          </DialogTitle>
          <DialogActions>
            <Button
              className="save-btn"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.handleMapSelectClick()}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      }
      <div className="inner-header-titile">
        <h2>Organization basic information</h2>
      </div>
      <div className=".white-card-form ">
        <div className="white-card">
          <div className="white-card-inner">
            <FormControl component="fieldset">
              <h4>
                Land Allocated To <span className="star">*</span>
              </h4>

              <RadioGroup
                className="radio-button"
                name="landAllocatedTo"
                value={values.landAllocatedTo}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleLandAllocationClick(event);
                }}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Government"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Private"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="white-card-form">
        <div className="white-card background-white-card">
          <div className="child-card">
            <h4>
              Allocation To <span className="star"> *</span>
            </h4>
            <FormControl
              error={
                !!(touched.AllocationSubTypeId && errors.AllocationSubTypeId)
              }
            >
              <Select
                value={values.AllocationSubTypeId}
                name="AllocationSubTypeId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  handleChange(event);
                  values.handleAllocationChange(event);
                }}
              >
                {values.selectAllocationTypeValues.map(
                  (e: IAllocationValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.AllocationId}
                    >
                      {e.AllocationName}
                    </MenuItem>
                  )
                )}
              </Select>
              {!!touched.AllocationSubTypeId && errors.AllocationSubTypeId ? (
                <FormHelperText className="error-msg">
                  Select Allocation To Is Required Field
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </div>

          <div className="child-card">
            <h4>
              Agreement Type<span className="star"> *</span>
            </h4>
            <FormControl
              error={!!(touched.AgreementTypeId && errors.AgreementTypeId)}
            >
              <Select
                value={values.AgreementTypeId}
                name="AgreementTypeId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleAgreementChange(event);
                }}
              >
                {values.agreementTypeValues.map(
                  (e: IAgremmentTypeValues, id: number) => (
                    <MenuItem
                      className="select-dropdown-bottom"
                      key={id}
                      value={e.AgreementId}
                    >
                      {e.AgreementName}
                    </MenuItem>
                  )
                )}
              </Select>
              {!!(touched.AgreementTypeId && errors.AgreementTypeId) && (
                <FormHelperText className="error-msg">
                  Agreement Type Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>
          {values.landAllocatedTo === "1" ? (
            <div className="child-card">
              <h4>
                Type Of Allocation <span className="star"> *</span>
              </h4>

              <FormControl
                error={
                  !!(touched.TypeOfAllocationId && errors.TypeOfAllocationId)
                }
              >
                <Select
                  value={values.TypeOfAllocationId}
                  name="TypeOfAllocationId"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleTypeOfAllocationChange(event, values);
                  }}
                >
                  {values.typesOfAllocationValues.map(
                    (e: ITypeOfAllocationValues, id: number) => (
                      <MenuItem
                        key={id}
                        className="select-dropdown-bottom"
                        value={e.TypeOfAllocationId}
                      >
                        {e.TypeOfAllocationName}
                      </MenuItem>
                    )
                  )}
                </Select>
                {!!touched.TypeOfAllocationId && errors.TypeOfAllocationId && (
                  <FormHelperText className="error-msg">
                    Type Of Allocation Is Required Field
                  </FormHelperText>
                )}
              </FormControl>
            </div>
          ) : (
            ""
          )}
          <div className="child-card">
            <h4>
              Organization Name <span className="star">*</span>
            </h4>
            <TextField
              name="OrganizationName"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
              }}
              onBlur={handleBlur}
              value={values.OrganizationName}
            />
            <div className="error-msg">
              {touched.OrganizationName && errors.OrganizationName && (
                <div>Organization Name Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Org Phone Number <span className="star">*</span>
            </h4>

            <TextField
              name="OrgPhoneNumber"
              type="number"
              value={values.OrgPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="error-msg">
              {touched.OrgPhoneNumber && errors.OrgPhoneNumber && (
                <div>Enter Valid Phone Number</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Org Email Address <span className="star">*</span>
            </h4>
            <TextField
              name="OrgEmailAddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.OrgEmailAddress}
              type="email"
            />
            <div className="error-msg">
              {touched.OrgEmailAddress && errors.OrgEmailAddress && (
                <div>Enter Valid Email Address </div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              House No,Building Name <span className="star">*</span>
            </h4>
            <TextField
              name="HouseNoBuildingName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.HouseNoBuildingName}
            />
            <div className="error-msg">
              {touched.HouseNoBuildingName && errors.HouseNoBuildingName && (
                <div>House NO,Building Name Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card">
            <h4>
              Street Name,Locality <span className="star">*</span>
            </h4>
            <TextField
              name="StreetNameLocality"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.StreetNameLocality}
            />
            <div className="error-msg">
              {touched.StreetNameLocality && errors.StreetNameLocality && (
                <div>Street Name,Locality Is Required</div>
              )}
            </div>
          </div>

          {values.landAllocatedTo === "2" ? (
            <div className="second-card">
              <div className="child-card">
                <h4>
                  Registration Number <span className="star">*</span>
                </h4>
                <TextField
                  name="RegistrationNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.RegistrationNumber}
                />
                <div className="error-msg">
                  {touched.RegistrationNumber && errors.RegistrationNumber && (
                    <div>Registration Number Is Required </div>
                  )}
                </div>
              </div>
              <div className="child-card">
                <h4>
                  City <span className="star">*</span>
                </h4>
                <TextField
                  name="City"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.City}
                />
                <div className="error-msg">
                  {touched.City && errors.City && <div>City Is Required </div>}
                </div>
              </div>
              <div className="child-card">
                <h4>
                  GST Number <span className="star">*</span>
                </h4>
                <TextField
                  name="GSTNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.GSTNumber}
                  error={!!(touched.GSTNumber && errors.GSTNumber)}
                />
                <div className="error-msg">
                  {touched.GSTNumber && errors.GSTNumber && (
                    <div>Please Enter GST Number Like:29ABCDE1234F2Z5</div>
                  )}
                </div>
              </div>
              <div className="child-card">
                <h4>
                  Zip Code <span className="star">*</span>
                </h4>
                <TextField
                  name="ZipCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ZipCode}
                />
                <div className="error-msg">
                  {touched.ZipCode && errors.ZipCode && (
                    <div>Zip Code Is Required </div>
                  )}
                </div>
              </div>
              <div className="child-card">
                <h4>
                  Country <span className="star"> *</span>
                </h4>
                <FormControl error={!!(touched.CountryId && errors.CountryId)}>
                  <Select
                    name="CountryId"
                    placeholder="--Select--"
                    value={values.CountryId}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handleCountryClick(event, values);
                    }}
                  >
                    {values.selectCountryValues.map(
                      (e: ICountryValues, id: number) => (
                        <MenuItem
                          key={id}
                          className="select-dropdown-bottom"
                          value={e.CountryId}
                        >
                          {e.CountryName}
                        </MenuItem>
                      )
                    )}
                  </Select>
                  {!!touched.CountryId && errors.CountryId && (
                    <FormHelperText className="error-msg">
                      Country Is Required Field
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
              <div className="child-card">
                <h4>
                  State <span className="star"> *</span>
                </h4>
                <FormControl error={!!(touched.StateId && errors.StateId)}>
                  <Select
                    placeholder="--Select--"
                    name="StateId"
                    value={values.StateId}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handleStateChange(event);
                    }}
                  >
                    {values.selectStateValues.map(
                      (e: IStateValues, id: number) => (
                        <MenuItem
                          key={id}
                          className="select-dropdown-bottom"
                          value={e.StateId}
                        >
                          {e.StateName}
                        </MenuItem>
                      )
                    )}
                  </Select>
                  {!!touched.StateId && errors.StateId && (
                    <FormHelperText className="error-msg">
                      State Is Required Field
                    </FormHelperText>
                  )}
                </FormControl>
              </div>
            </div>
          ) : (
            ""
          )}

          {values.mapDataValues === true ? (
            <DetailsFromMapForm
              handleMapSelectClick={values.handleMapSelectClick}
              handleAllocationChange={values.handleAllocationChange}
              handleLandAllocationClick={values.handleLandAllocationClick}
              handleCountryClick={values.handleCountryClick}
              handleAgreementChange={values.handleAgreementChange}
              handleTypeOfAllocationChange={values.handleTypeOfAllocationChange}
              handleBack={values.handleBack}
              handleStateChange={values.handleStateChange}
              TownshipId={values.TownshipId}
              OutOfAGC={values.OutOfAGC}
              buttonDisable1={values.buttonDisable1}
              WithInAGC={values.WithInAGC}
              mapPopUpOpen={values.mapPopUpOpen}
              LandAllocatedToId={values.LandAllocatedToId}
              landAllocatedTo={values.landAllocatedTo}
              allocationTypeId={values.allocationTypeId}
              AuthorisedPersonEmailAddress={values.AuthorisedPersonEmailAddress}
              AgreementTypeId={values.AgreementTypeId}
              enterApplicationId={values.enterApplicationId}
              mobileNumber={values.mobileNumber}
              agreementTypeValues={values.agreementTypeValues}
              typesOfAllocationValues={values.typesOfAllocationValues}
              AllocationName={values.AllocationName}
              AllocationId={values.AllocationId}
              AllocationSubTypeId={values.AllocationSubTypeId}
              CountryId={values.CountryId}
              CountryName={values.CountryName}
              StateId={values.StateId}
              StateName={values.StateName}
              TypeOfAllocationId={values.TypeOfAllocationId}
              AllocationType={values.AllocationType}
              OrganizationName={values.OrganizationName}
              OrgPhoneNumber={values.OrgPhoneNumber}
              OrgEmailAddress={values.OrgEmailAddress}
              HouseNoBuildingName={values.HouseNoBuildingName}
              StreetNameLocality={values.StreetNameLocality}
              GSTNumber={values.GSTNumber}
              City={values.City}
              WitnessName={values.WitnessName}
              ZipCode={values.ZipCode}
              RegistrationNumber={values.RegistrationNumber}
              selectMapValuesPopUp={values.selectMapValuesPopUp}
              handleMapPopUpClose1={values.handleMapPopUpClose1}
              handleEditMapDetails={values.handleEditMapDetails}
              activeStep={values.activeStep}
              mapDataValues={values.mapDataValues}
              handleMapClose={values.handleMapClose}
              handleMapPopUpClose={values.handleMapPopUpClose}
              Village={values.Village}
              TownShip={values.TownShip}
              ParcelId={values.ParcelId}
              Mandal={values.Mandal}
              GeometryDataFromMap={values.GeometryDataFromMap}
              GeometricString={values.GeometricString}
              CompleteDetails={values.CompleteDetails}
              District={values.District}
              Boundaries={values.Boundaries}
              Colony={values.Colony}
              Block={values.Block}
              Plot={values.Plot}
              GlobalId={values.GlobalId}
              TempGlobalId={values.TempGlobalId}
              Sector={values.Sector}
              SurveyNumberByPlanning={values.SurveyNumberByPlanning}
              AvailableLandArea={values.AvailableLandArea}
            />
          ) : (
            ""
          )}

          <div className="bottom-save-btn">
            <Button
              className="reset-btn"
              //  disabled={this.state.activeStep === 0}
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.handleBack()}
            >
              Back
            </Button>

            <Button
              className="save-btn"
              // className="loading"
              type="submit"
              //  disabled={values.buttonDisable1}
            >
              Save & Continue
            </Button>
          </div>
        </div>
      </div>
      <div className="white-card-form white-bottom-margin">
        <div className="bottom-card">
          Completed : Step {values.activeStep + 1} of 5
          <div className="background-bar">
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

export interface IOrganizationSaveAndContinueProps {
  onHandleOrganizationSaveandContinue(
    values: IProposalTabStateValues &
      ISelectAllocationProps &
      ISelectCountryProps &
      ISelectStateProps
  ): void;
}
export const gst = /[0-9]{2}[a-zA-Z]{4,5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}/;

export const regex = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){9}\d$/;

const modelSchema = yup.object().shape({
  AgreementTypeId: yup
    .number()
    .min(1)
    .required(),
  AllocationSubTypeId: yup
    .number()
    .min(1)
    .required(),

  HouseNoBuildingName: yup.string().required(),
  OrgEmailAddress: yup
    .string()
    .email()
    .required(),

  TypeOfAllocationId: yup
    .number()
    .min(1)
    .required(),

  OrgPhoneNumber: yup
    .string()
    .max(16)
    .matches(regex)
    .required(),
  OrganizationName: yup.string().required(),
  StreetNameLocality: yup.string().required()
  // ZipCode: yup.string().required()
});

const modelSchema2 = yup.object().shape({
  AgreementTypeId: yup
    .number()
    .min(1)
    .required(),
  AllocationSubTypeId: yup
    .number()
    .min(1)
    .required(),
  // .mixed()
  // .notOneOf([undefined])
  //  .min(1)
  GSTNumber: yup
    .string()
    .max(15)
    .matches(gst)
    .required("GST Number Is Required"),
  // tslint:disable-next-line:object-literal-sort-keys
  City: yup.string().required(),
  CountryId: yup
    .number()
    .min(1)
    .required(),
  HouseNoBuildingName: yup.string().required(),
  OrgEmailAddress: yup
    .string()
    .email()
    .required(),
  StateId: yup
    .number()
    .min(1)
    .required(),
  // TypeOfAllocationId: yup.number().required(),

  OrgPhoneNumber: yup
    .string()
    .max(16)
    .matches(regex)
    .required(),
  OrganizationName: yup.string().required(),
  RegistrationNumber: yup.string().required(),
  StreetNameLocality: yup.string().required(),
  ZipCode: yup.string().required()
});

export const OrganizationForm = (
  props: IProposalTabStateValues &
    IDetailsFromMap &
    IOrganizationSaveAndContinueProps &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    ICreateProposalProps
) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props,
      AgreementTypeId: props.AgreementTypeId
      // buttonDisable1: props.buttonDisable1
      // AgreementTypeId: props.AgreementTypeId,
      // AllocationSubTypeId: props.AllocationSubTypeId

      // CountryId: undefined,
      // OrgPhoneNumber: props.OrgPhoneNumber,
      // StateId: props.selectStateValues.StateId
      // TypeOfAllocationId: undefined
    }}
    validationSchema={
      props.landAllocatedTo === "1" ? modelSchema : modelSchema2
    }
    onSubmit={props.onHandleOrganizationSaveandContinue}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<
        IProposalTabStateValues &
          ISelectAllocationProps &
          ISelectCountryProps &
          ISelectStateProps &
          IDetailsFromMap
      >
    ) => (
      <ProposalTabInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          AvailableLandArea: props.AvailableLandArea,
          // tslint:disable-next-line:object-literal-sort-keys
          AgreementTypeId: props.AgreementTypeId,

          Block: props.Block,
          Boundaries: props.Boundaries,
          Colony: props.Colony,
          CompleteDetails: props.CompleteDetails,
          District: props.District,
          GeometricString: props.GeometricString,
          GeometryDataFromMap: props.GeometryDataFromMap,
          GlobalId: props.GlobalId,
          Mandal: props.Mandal,
          ParcelId: props.ParcelId,
          Plot: props.Plot,
          Sector: props.Sector,
          SurveyNumberByPlanning: props.SurveyNumberByPlanning,
          TempGlobalId: props.TempGlobalId,
          TownShip: props.TownShip,
          Village: props.Village,
          activeStep: props.activeStep,
          agreementTypeValues: props.agreementTypeValues,
          landAllocatedTo: props.landAllocatedTo,
          selectAllocationTypeValues: props.selectAllocationTypeValues,
          selectCountryValues: props.selectCountryValues,
          selectStateValues: props.selectStateValues,
          typesOfAllocationValues: props.typesOfAllocationValues,
          // tslint:disable-next-line:object-literal-sort-keys
          mapDataValues: props.mapDataValues,
          handleMapClose: props.handleMapClose,
          handleMapPopUpClose: props.handleMapPopUpClose,
          handleMapPopUpClose1: props.handleMapPopUpClose1,

          mapPopUpOpen: props.mapPopUpOpen,
          AllocationSubTypeId: props.AllocationSubTypeId,
          CountryId: props.CountryId,
          StateId: props.StateId,
          TypeOfAllocationId: props.TypeOfAllocationId,
          buttonDisable1: props.buttonDisable1
        }}
      />
    )}
  />
);

export default OrganizationForm;
