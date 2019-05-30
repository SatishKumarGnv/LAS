// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { getDay, getMonth, getYear } from "date-fns";
// import * as moment from "moment";
// import { getDay, getMonth, getYear } from "date-fns";
import * as React from "react";

// import { getDashboardLandDetails } from "src/Api_Integration/DashboardService";
import SubmitPopUpInnerForm from "src/ProposalForm/SubmitPopUpForm";
import UploadDocumentForm, {
  IUploadDocumentProps
} from "src/ProposalForm/UploadDocumentsForm";

import CreateProposalTownshipForm from "src/ProposalForm/CreateProposalTownshipForm";
import { ILandSaveAndContinueProps } from "src/ProposalForm/LandAllocationForm";
// import { IMatchParams } from "./ApplicationState";
//  import {  ISelectDepartmentvalues } from "./ApplicationState";
// import { IDashboardStateValues } from "./Dashboard";
import {
  IAuthorisedProps,
  IAuthorizedPersonValues,
  IChangeValues,
  IConditionValueProps,
  ICountryValues,
  ICreateProposalProps,
  IDetailsFromMap,
  ILandallocationFormStatevalues,
  ILandAllocationValues,
  ILeaseTenureProps,
  ILeaseValues,
  IMileStoneDetailsProps,
  IMileStoneDetailsStateValues,
  IMilestoneDropDownProps,
  IPhotoIdTypeProps,
  IProjectRuleTypeProps,
  IProjectValuesProps,
  IProposalTabStateValues,
  IRelationTypeProps,
  IResetValues,
  IRuleTypeValuesProps,
  ISelectAgrementTypeProps,
  ISelectAllocationProps,
  ISelectCountryProps,
  ISelectLandAllocationProps,
  ISelectStateProps,
  ISelectThemeCityProps,
  ISelectTypeOfAllocationProps,
  ISourceValueProps,
  IStateValues,
  ISubmitPopUpProps,
  // IUnitValues,
  ISubmitProps,
  IUnitProps,
  IUploadDocumentValues,
  IWitnessDetailsProps,
  IWitnessDetailsStateValues,
  IwitnessValues
} from "../DefaultLayout/HomePage";
import AuthorizedPersonForm, {
  IAuthorizedSaveAndContinueProps
} from "../ProposalForm/AuthorizedPersonForm";
import LandAllocationTabForm from "../ProposalForm/LandAllocationTabForm";
import OrganizationForm, {
  IOrganizationSaveAndContinueProps
} from "../ProposalForm/OrganizationForm";
import { WitnessDetailsForm } from "../ProposalForm/WitnessDetails";
// import WitnessDetails from "../ProposalForm/WitnessDetailsForm";
// import AuthorizedPersonForm from "../ProposalForm/AuthorizedPersonForm";
// import { LandAllocationForm } from "../ProposalForm/LandAllocationForm";
// import ProposalForm from "../ProposalForm/OrganizationForm";
// import WitnessDetailsMain from "../ProposalForm/WitnessDetailsForm";

const ProposalForm = (
  props: IRelationTypeProps &
    IDetailsFromMap &
    IAuthorizedSaveAndContinueProps &
    IPhotoIdTypeProps &
    IProposalTabStateValues &
    ILandAllocationValues &
    ICountryValues &
    IStateValues &
    IAuthorisedProps &
    ISelectLandAllocationProps &
    IWitnessDetailsProps &
    IMileStoneDetailsProps &
    IWitnessDetailsStateValues &
    IUnitProps &
    IResetValues &
    IChangeValues &
    ILeaseTenureProps &
    ILeaseValues &
    IRuleTypeValuesProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IProposalTabStateValues &
    IOrganizationSaveAndContinueProps &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    IAuthorizedPersonValues &
    IAuthorizedSaveAndContinueProps &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IWitnessDetailsProps &
    ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ILandSaveAndContinueProps &
    ISubmitPopUpProps &
    ICreateProposalProps &
    IOrganizationSaveAndContinueProps &
    IUploadDocumentProps &
    IUploadDocumentValues &
    ISubmitProps &
    IwitnessValues
  // IUnitValues &
) => (
  <div>
    {props.activeStep === -1 ? (
      <CreateProposalTownshipForm
        TownshipId={props.TownshipId}
        townshipValues={props.townshipValues}
        handleTownshipClick={props.handleTownshipClick}
      />
    ) : props.activeStep === 0 ? (
      <OrganizationForm
        TownshipId={props.TownshipId}
        WithInAGC={props.WithInAGC}
        OutOfAGC={props.OutOfAGC}
        handleMapPopUpClose1={props.handleMapPopUpClose1}
        AuthorisedPersonEmailAddress={props.AuthorisedPersonEmailAddress}
        buttonDisable1={props.buttonDisable1}
        selectMapValuesPopUp={props.selectMapValuesPopUp}
        handleMapSelectClick={props.handleMapSelectClick}
        townshipValues={props.townshipValues}
        handleTownshipClick={props.handleTownshipClick}
        handleEditMapDetails={props.handleEditMapDetails}
        // handleOrganizationNameChange={props.handleOrganizationNameChange}
        // handleOrgCityChange={props.handleOrgCityChange}
        // handleOrgEmailAddressChange={props.handleOrgEmailAddressChange}
        // handleOrgGSTNumberChange={props.handleOrgGSTNumberChange}
        // handleOrgHouseNumberChange={props.handleOrgHouseNumberChange}
        // handleOrgRegistrationNumberChange={
        //   props.handleOrgRegistrationNumberChange
        // }
        // handleOrgStreetNameChange={props.handleOrgStreetNameChange}
        // handleZipCodeChange={props.handleZipCodeChange}
        // handleOrgPhoneNumberChange={props.handleOrgPhoneNumberChange}
        mapPopUpOpen={props.mapPopUpOpen}
        handleMapClose={props.handleMapClose}
        handleMapPopUpClose={props.handleMapPopUpClose}
        mapDataValues={props.mapDataValues}
        Village={props.Village}
        AvailableLandArea={props.AvailableLandArea}
        Block={props.Block}
        Plot={props.Plot}
        TempGlobalId={props.TempGlobalId}
        SurveyNumberByPlanning={props.SurveyNumberByPlanning}
        Mandal={props.Mandal}
        District={props.District}
        Boundaries={props.Boundaries}
        Colony={props.Colony}
        CompleteDetails={props.CompleteDetails}
        GeometricString={props.GeometricString}
        GeometryDataFromMap={props.GeometryDataFromMap}
        GlobalId={props.GlobalId}
        ParcelId={props.ParcelId}
        Sector={props.Sector}
        TownShip={props.TownShip}
        onHandleOrganizationSaveandContinue={
          props.onHandleOrganizationSaveandContinue
        }
        handleStateChange={props.handleStateChange}
        handleTypeOfAllocationChange={props.handleTypeOfAllocationChange}
        handleAgreementChange={props.handleAgreementChange}
        activeStep={props.activeStep}
        TypeOfAllocationId={props.TypeOfAllocationId}
        handleBack={props.handleBack}
        LandAllocatedToId={props.LandAllocatedToId}
        AllocationSubTypeId={props.AllocationSubTypeId}
        typesOfAllocationValues={props.typesOfAllocationValues}
        landAllocatedTo={props.landAllocatedTo}
        // authorizedPersonName={props.authorizedPersonName}
        allocationTypeId={props.allocationTypeId}
        OrganizationName={props.OrganizationName}
        AgreementTypeId={props.AgreementTypeId}
        enterApplicationId={props.enterApplicationId}
        mobileNumber={props.mobileNumber}
        OrgPhoneNumber={props.OrgPhoneNumber}
        OrgEmailAddress={props.OrgEmailAddress}
        HouseNoBuildingName={props.HouseNoBuildingName}
        StreetNameLocality={props.StreetNameLocality}
        GSTNumber={props.GSTNumber}
        handleCountryClick={props.handleCountryClick}
        // Country={props.Country}
        // State={props.State}
        City={props.City}
        ZipCode={props.ZipCode}
        RegistrationNumber={props.RegistrationNumber}
        // GstNumber={props.GSTNumber}
        agreementTypeValues={props.agreementTypeValues}
        // selectThemeCityTYpeValues={props.selectThemeCityTYpeValues}
        selectAllocationTypeValues={props.selectAllocationTypeValues}
        selectCountryValues={props.selectCountryValues}
        selectStateValues={props.selectStateValues}
        AllocationType={props.allocationTypeId}
        AllocationName={props.AllocationName}
        AllocationId={props.AllocationId}
        CountryId={props.CountryId}
        CountryName={props.CountryName}
        handleLandAllocationClick={props.handleLandAllocationClick}
        handleAllocationChange={props.handleAllocationChange}
        StateId={props.StateId}
        WitnessName={props.WitnessName}
        StateName={props.StateName}
      />
    ) : props.activeStep === 1 ? (
      <AuthorizedPersonForm
        onHandleClose={props.onHandleClose}
        imageWarningPopUp={props.imageWarningPopUp}
        TownshipId={props.TownshipId}
        WithInAGC={props.WithInAGC}
        OutOfAGC={props.OutOfAGC}
        buttonDisable2={props.buttonDisable2}
        buttonDisable1={props.buttonDisable1}
        handleMapPopUpClose1={props.handleMapPopUpClose1}
        selectMapValuesPopUp={props.selectMapValuesPopUp}
        handleMapSelectClick={props.handleMapSelectClick}
        handleTownshipClick={props.handleTownshipClick}
        townshipValues={props.townshipValues}
        handleEditMapDetails={props.handleEditMapDetails}
        authImage={props.authImage}
        // handleOrganizationNameChange={props.handleOrganizationNameChange}
        // handleOrgCityChange={props.handleOrgCityChange}
        // handleOrgEmailAddressChange={props.handleOrgEmailAddressChange}
        // handleOrgGSTNumberChange={props.handleOrgGSTNumberChange}
        // handleOrgHouseNumberChange={props.handleOrgHouseNumberChange}
        // handleOrgRegistrationNumberChange={
        //   props.handleOrgRegistrationNumberChange
        // }
        // handleOrgStreetNameChange={props.handleOrgStreetNameChange}
        // handleZipCodeChange={props.handleZipCodeChange}
        // handleOrgPhoneNumberChange={props.handleOrgPhoneNumberChange}
        mapPopUpOpen={props.mapPopUpOpen}
        handleMapClose={props.handleMapClose}
        handleMapPopUpClose={props.handleMapPopUpClose}
        mapDataValues={props.mapDataValues}
        Village={props.Village}
        AvailableLandArea={props.AvailableLandArea}
        Block={props.Block}
        Plot={props.Plot}
        TempGlobalId={props.TempGlobalId}
        SurveyNumberByPlanning={props.SurveyNumberByPlanning}
        Mandal={props.Mandal}
        District={props.District}
        Boundaries={props.Boundaries}
        Colony={props.Colony}
        CompleteDetails={props.CompleteDetails}
        GeometricString={props.GeometricString}
        GeometryDataFromMap={props.GeometryDataFromMap}
        GlobalId={props.GlobalId}
        ParcelId={props.ParcelId}
        Sector={props.Sector}
        TownShip={props.TownShip}
        handleStateChange={props.handleStateChange}
        handleTypeOfAllocationChange={props.handleTypeOfAllocationChange}
        handleAgreementChange={props.handleAgreementChange}
        activeStep={props.activeStep}
        TypeOfAllocationId={props.TypeOfAllocationId}
        handleBack={props.handleBack}
        LandAllocatedToId={props.LandAllocatedToId}
        AllocationSubTypeId={props.AllocationSubTypeId}
        typesOfAllocationValues={props.typesOfAllocationValues}
        landAllocatedTo={props.landAllocatedTo}
        // authorizedPersonName={props.authorizedPersonName}
        allocationTypeId={props.allocationTypeId}
        OrganizationName={props.OrganizationName}
        AuthorisedPersonEmailAddress={props.AuthorisedPersonEmailAddress}
        AgreementTypeId={props.AgreementTypeId}
        enterApplicationId={props.enterApplicationId}
        mobileNumber={props.mobileNumber}
        OrgPhoneNumber={props.OrgPhoneNumber}
        OrgEmailAddress={props.OrgEmailAddress}
        HouseNoBuildingName={props.HouseNoBuildingName}
        StreetNameLocality={props.StreetNameLocality}
        GSTNumber={props.GSTNumber}
        handleCountryClick={props.handleCountryClick}
        // Country={props.Country}
        // State={props.State}
        City={props.City}
        ZipCode={props.ZipCode}
        RegistrationNumber={props.RegistrationNumber}
        // GstNumber={props.GSTNumber}
        agreementTypeValues={props.agreementTypeValues}
        // selectThemeCityTYpeValues={props.selectThemeCityTYpeValues}
        selectAllocationTypeValues={props.selectAllocationTypeValues}
        selectCountryValues={props.selectCountryValues}
        selectStateValues={props.selectStateValues}
        AllocationType={props.allocationTypeId}
        AllocationName={props.AllocationName}
        AllocationId={props.AllocationId}
        CountryId={props.CountryId}
        CountryName={props.CountryName}
        handleLandAllocationClick={props.handleLandAllocationClick}
        handleAllocationChange={props.handleAllocationChange}
        StateId={props.StateId}
        WitnessName={props.WitnessName}
        StateName={props.StateName}
        AuthDateOfBirth={props.AuthDateOfBirth}
        handleAuthMobileNumberChange={props.handleAuthMobileNumberChange}
        handleAuthDateOfBirthChange={props.handleAuthDateOfBirthChange}
        handleAuthRelationNameChange={props.handleAuthRelationNameChange}
        handleAuthorisedPersonEmailAddresshChange={
          props.handleAuthorisedPersonEmailAddresshChange
        }
        handleFirstNameChange={props.handleFirstNameChange}
        handleLastNameChange={props.handleLastNameChange}
        handleRemoveImage={props.handleRemoveImage}
        // handleHouseNoChange={props.handleHouseNoChange}
        // handleStreetNameChange={props.handleStreetNameChange}
        authorisedPersonValues={props.authorisedPersonValues}
        handleUploadImageClick={props.handleUploadImageClick}
        PhotoIdTypeName={props.PhotoIdTypeName}
        handlePhotoIdChange={props.handlePhotoIdChange}
        handleRelationChange={props.handleRelationChange}
        // HouseNoBuildingName={props.HouseNoBuildingName}
        // StreetNameLocality={props.StreetNameLocality}
        check={props.check}
        photoIdValues={props.photoIdValues}
        relationTypeValues={props.relationTypeValues}
        FirstName={props.FirstName}
        LastName={props.LastName}
        AuthRelationTypeId={props.AuthRelationTypeId}
        RelationTypeName={props.RelationTypeName}
        RelationName={props.RelationName}
        // DateOfBirth={props.DateOfBirth}
        MobileNumber={props.MobileNumber}
        HouseNo={props.HouseNo}
        StreetName={props.StreetName}
        PhotoIdNumber={props.PhotoIdNumber}
        PhotoIdType={props.PhotoIdType}
        handleCheckClick={props.handleCheckClick}
        onHandleAuthorisedSaveandContinue={
          props.onHandleAuthorisedSaveandContinue
        }
        handleHouseNoChange={props.handleHouseNoChange}
        handleStreetNameChange={props.handleStreetNameChange}
        onReset={props.onReset}
      />
    ) : props.activeStep === 2 ? (
      <div>
        <WitnessDetailsForm
          onHandleClose={props.onHandleClose}
          imageWarningPopUp={props.imageWarningPopUp}
          TownshipId={props.TownshipId}
          WithInAGC={props.WithInAGC}
          OutOfAGC={props.OutOfAGC}
          buttonDisable2={props.buttonDisable2}
          buttonDisable3={props.buttonDisable3}
          buttonDisable1={props.buttonDisable1}
          handleMapPopUpClose1={props.handleMapPopUpClose1}
          selectMapValuesPopUp={props.selectMapValuesPopUp}
          handleMapSelectClick={props.handleMapSelectClick}
          handleEditMapDetails={props.handleEditMapDetails}
          // handleOrganizationNameChange={props.handleOrganizationNameChange}
          // handleOrgCityChange={props.handleOrgCityChange}
          // handleOrgEmailAddressChange={props.handleOrgEmailAddressChange}
          // handleOrgGSTNumberChange={props.handleOrgGSTNumberChange}
          // handleOrgHouseNumberChange={props.handleOrgHouseNumberChange}
          // handleOrgRegistrationNumberChange={
          //   props.handleOrgRegistrationNumberChange
          // }
          // handleOrgStreetNameChange={props.handleOrgStreetNameChange}
          // handleZipCodeChange={props.handleZipCodeChange}
          // handleOrgPhoneNumberChange={props.handleOrgPhoneNumberChange}
          mapPopUpOpen={props.mapPopUpOpen}
          handleMapClose={props.handleMapClose}
          handleMapPopUpClose={props.handleMapPopUpClose}
          mapDataValues={props.mapDataValues}
          Village={props.Village}
          AvailableLandArea={props.AvailableLandArea}
          Block={props.Block}
          Plot={props.Plot}
          TempGlobalId={props.TempGlobalId}
          SurveyNumberByPlanning={props.SurveyNumberByPlanning}
          Mandal={props.Mandal}
          District={props.District}
          Boundaries={props.Boundaries}
          Colony={props.Colony}
          CompleteDetails={props.CompleteDetails}
          GeometricString={props.GeometricString}
          GeometryDataFromMap={props.GeometryDataFromMap}
          GlobalId={props.GlobalId}
          ParcelId={props.ParcelId}
          Sector={props.Sector}
          TownShip={props.TownShip}
          handleStateChange={props.handleStateChange}
          handleTypeOfAllocationChange={props.handleTypeOfAllocationChange}
          handleAgreementChange={props.handleAgreementChange}
          activeStep={props.activeStep}
          TypeOfAllocationId={props.TypeOfAllocationId}
          handleBack={props.handleBack}
          LandAllocatedToId={props.LandAllocatedToId}
          AllocationSubTypeId={props.AllocationSubTypeId}
          typesOfAllocationValues={props.typesOfAllocationValues}
          landAllocatedTo={props.landAllocatedTo}
          // authorizedPersonName={props.authorizedPersonName}
          allocationTypeId={props.allocationTypeId}
          OrganizationName={props.OrganizationName}
          AuthorisedPersonEmailAddress={props.AuthorisedPersonEmailAddress}
          AgreementTypeId={props.AgreementTypeId}
          enterApplicationId={props.enterApplicationId}
          mobileNumber={props.mobileNumber}
          OrgPhoneNumber={props.OrgPhoneNumber}
          OrgEmailAddress={props.OrgEmailAddress}
          HouseNoBuildingName={props.HouseNoBuildingName}
          StreetNameLocality={props.StreetNameLocality}
          GSTNumber={props.GSTNumber}
          handleCountryClick={props.handleCountryClick}
          // Country={props.Country}
          // State={props.State}
          City={props.City}
          ZipCode={props.ZipCode}
          RegistrationNumber={props.RegistrationNumber}
          // GstNumber={props.GSTNumber}
          agreementTypeValues={props.agreementTypeValues}
          // selectThemeCityTYpeValues={props.selectThemeCityTYpeValues}
          // selectAllocationTypeValues={props.selectAllocationTypeValues}
          // selectCountryValues={props.selectCountryValues}
          // selectStateValues={props.selectStateValues}
          AllocationType={props.allocationTypeId}
          AllocationName={props.AllocationName}
          AllocationId={props.AllocationId}
          CountryId={props.CountryId}
          CountryName={props.CountryName}
          handleLandAllocationClick={props.handleLandAllocationClick}
          handleAllocationChange={props.handleAllocationChange}
          StateId={props.StateId}
          WitnessName={props.WitnessName}
          StateName={props.StateName}
          // LandAllocatedToId={props.LandAllocatedToId}
          // landAllocatedTo={props.landAllocatedTo}
          // mapDataValues={props.mapDataValues}
          //  mapPopUpOpen={props.mapPopUpOpen}
          handleAuthMobileNumberChange={props.handleAuthMobileNumberChange}
          handleAuthDateOfBirthChange={props.handleAuthDateOfBirthChange}
          handleAuthRelationNameChange={props.handleAuthRelationNameChange}
          handleAuthorisedPersonEmailAddresshChange={
            props.handleAuthorisedPersonEmailAddresshChange
          }
          handleFirstNameChange={props.handleFirstNameChange}
          handleLastNameChange={props.handleLastNameChange}
          handleRemoveImage={props.handleRemoveImage}
          handleUploadImageClick={props.handleUploadImageClick}
          handlePhotoIdChange={props.handlePhotoIdChange}
          handleRelationChange={props.handleRelationChange}
          PhotoIdTypeName={props.PhotoIdTypeName}
          // OrgPhoneNumber={props.OrgPhoneNumber}
          authImage={props.authImage}
          // authorisedPersonEmailAddress={props.authorisedPersonEmailAddress}
          authorisedPersonValues={props.authorisedPersonValues}
          PhotoIdNumber={props.PhotoIdNumber}
          PhotoIdType={props.PhotoIdType}
          handleCheckClick={props.handleCheckClick}
          handleHouseNoChange={props.handleHouseNoChange}
          handleStreetNameChange={props.handleStreetNameChange}
          // onReset={props.onReset}
          AuthDateOfBirth={props.AuthDateOfBirth}
          check={props.check}
          photoIdValues={props.photoIdValues}
          FirstName={props.FirstName}
          LastName={props.LastName}
          AuthRelationTypeId={props.AuthRelationTypeId}
          RelationTypeName={props.RelationTypeName}
          RelationName={props.RelationName}
          // DateOfBirth={props.DateOfBirth}
          MobileNumber={props.MobileNumber}
          HouseNo={props.HouseNo}
          StreetName={props.StreetName}
          // PhotoIdNumber={props.PhotoIdNumber}
          //  PhotoIdType={props.PhotoIdType}
          handleDateChange={props.handleDateChange}
          handleRelationNameChange={props.handleRelationNameChange}
          handleRelationTypeIdChange={props.handleRelationTypeIdChange}
          handleWitnessNameChange={props.handleWitnessNameChange}
          handleSubmit={props.handleSubmit}
          //  activeStep={props.activeStep}
          //  handleBack={props.handleBack}
          WitnessDetailsFormArray={props.WitnessDetailsFormArray}
          onHandleAddClick={props.onHandleAddClick}
          onWitnessSaveAndContinue={props.onWitnessSaveAndContinue}
          AddClickCount={props.AddClickCount}
          onDeleteClick={props.onDeleteClick}
          // WitnessName={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.WitnessName)[0]
          // }
          // RelationName={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.RelationName)[0]
          // }
          // handleSubmit={props.onWitnessSaveAndContinue}
          // RelationTypeId={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.RelationTypeId)[0]
          // }
          relationTypeValues={props.relationTypeValues}
          // DateOfBirth={props.DateOfBirth}
        />
        {/* <WitnessDetails
                handleDateChange={props.handleDateChange}
                handleRelationNameChange={props.handleRelationNameChange}
                handleRelationTypeIdChange={props.handleRelationTypeIdChange}
                handleWitnessNameChange={props.handleWitnessNameChange}
                onDeleteClick={props.onDeleteClick}
                AddClickCount={props.AddClickCount}
                handleSubmit={props.onHandleSubmit}
                activeStep={props.activeStep}
                handleBack={props.handleBack}
                WitnessDetailsFormArray={props.WitnessDetailsFormArray}
                onHandleAddClick={props.onHandleAddClick}
                onWitnessSaveAndContinue={props.onWitnessSaveAndContinue}
              /> */}
      </div>
    ) : props.activeStep === 3 ? (
      <div>
        <LandAllocationTabForm
          RelationTypeAndName={props.RelationTypeAndName}
          imageWarningPopUp={props.imageWarningPopUp}
          RelationDateOfBirth={props.RelationDateOfBirth}
          RelationType={props.RelationType}
          InitialAllocationSizeInAcres={props.InitialAllocationSizeInAcres}
          WithInAGC={props.WithInAGC}
          OutOfAGC={props.OutOfAGC}
          handleAddRuleNameChange={props.handleAddRuleNameChange}
          handleMaxValueChange={props.handleMaxValueChange}
          handleMinValueChange={props.handleMinValueChange}
          handleValueChange={props.handleValueChange}
          registerOrNot={props.registerOrNot}
          handleRegisterOrNotChange={props.handleRegisterOrNotChange}
          TotalLandCost={props.TotalLandCost}
          AmountPaid={props.AmountPaid}
          AmountToBePaid={props.AmountToBePaid}
          handleAmountPaidChange={props.handleAmountPaidChange}
          handleTotalLandCostChange={props.handleTotalLandCostChange}
          onAddGoValuesClick={props.onAddGoValuesClick}
          AddGoValueClickCount={props.AddGoValueClickCount}
          onGoValuesDeleteClick={props.onGoValuesDeleteClick}
          ProjectDetailsArray={props.ProjectDetailsArray}
          buttonDisable1={props.buttonDisable1}
          buttonDisable2={props.buttonDisable2}
          buttonDisable3={props.buttonDisable3}
          buttonDisable4={props.buttonDisable4}
          handleMapPopUpClose1={props.handleMapPopUpClose1}
          selectMapValuesPopUp={props.selectMapValuesPopUp}
          handleMapSelectClick={props.handleMapSelectClick}
          handleProjectPurposeChange={props.handleProjectPurposeChange}
          TownshipId={props.TownshipId}
          RelationTypeArray={props.relationTypeValues}
          id={props.AddMilestoneClickCount}
          handleEditMapDetails={props.handleEditMapDetails}
          // handleOrganizationNameChange={props.handleOrganizationNameChange}
          // handleOrgCityChange={props.handleOrgCityChange}
          // handleOrgEmailAddressChange={props.handleOrgEmailAddressChange}
          // handleOrgGSTNumberChange={props.handleOrgGSTNumberChange}
          // handleOrgHouseNumberChange={props.handleOrgHouseNumberChange}
          // handleOrgRegistrationNumberChange={
          //   props.handleOrgRegistrationNumberChange
          // }
          // handleOrgStreetNameChange={props.handleOrgStreetNameChange}
          // handleZipCodeChange={props.handleZipCodeChange}
          // handleOrgPhoneNumberChange={props.handleOrgPhoneNumberChange}
          mapPopUpOpen={props.mapPopUpOpen}
          handleMapClose={props.handleMapClose}
          handleMapPopUpClose={props.handleMapPopUpClose}
          mapDataValues={props.mapDataValues}
          Village={props.Village}
          AvailableLandArea={props.AvailableLandArea}
          Block={props.Block}
          Plot={props.Plot}
          TempGlobalId={props.TempGlobalId}
          SurveyNumberByPlanning={props.SurveyNumberByPlanning}
          Mandal={props.Mandal}
          District={props.District}
          Boundaries={props.Boundaries}
          Colony={props.Colony}
          CompleteDetails={props.CompleteDetails}
          GeometricString={props.GeometricString}
          GeometryDataFromMap={props.GeometryDataFromMap}
          GlobalId={props.GlobalId}
          ParcelId={props.ParcelId}
          Sector={props.Sector}
          TownShip={props.TownShip}
          handleStateChange={props.handleStateChange}
          handleTypeOfAllocationChange={props.handleTypeOfAllocationChange}
          handleAgreementChange={props.handleAgreementChange}
          activeStep={props.activeStep}
          TypeOfAllocationId={props.TypeOfAllocationId}
          handleBack={props.handleBack}
          LandAllocatedToId={props.LandAllocatedToId}
          AllocationSubTypeId={props.AllocationSubTypeId}
          typesOfAllocationValues={props.typesOfAllocationValues}
          landAllocatedTo={props.landAllocatedTo}
          // authorizedPersonName={props.authorizedPersonName}
          allocationTypeId={props.allocationTypeId}
          OrganizationName={props.OrganizationName}
          AuthorisedPersonEmailAddress={props.AuthorisedPersonEmailAddress}
          AgreementTypeId={props.AgreementTypeId}
          enterApplicationId={props.enterApplicationId}
          mobileNumber={props.mobileNumber}
          OrgPhoneNumber={props.OrgPhoneNumber}
          OrgEmailAddress={props.OrgEmailAddress}
          HouseNoBuildingName={props.HouseNoBuildingName}
          StreetNameLocality={props.StreetNameLocality}
          GSTNumber={props.GSTNumber}
          handleCountryClick={props.handleCountryClick}
          // Country={props.CountryId}
          //  State={props.StateId}
          City={props.City}
          ZipCode={props.ZipCode}
          RegistrationNumber={props.RegistrationNumber}
          // GstNumber={props.GSTNumber}
          agreementTypeValues={props.agreementTypeValues}
          //  selectThemeCityTYpeValues={props.selectThemeCityTYpeValues}
          selectAllocationTypeValues={props.selectAllocationTypeValues}
          selectCountryValues={props.selectCountryValues}
          selectStateValues={props.selectStateValues}
          AllocationType={props.allocationTypeId}
          AllocationName={props.AllocationName}
          AllocationId={props.AllocationId}
          CountryId={props.CountryId}
          CountryName={props.CountryName}
          handleLandAllocationClick={props.handleLandAllocationClick}
          handleAllocationChange={props.handleAllocationChange}
          StateId={props.StateId}
          WitnessName={props.WitnessName}
          StateName={props.StateName}
          // LandAllocatedToId={props.LandAllocatedToId}
          // landAllocatedTo={props.landAllocatedTo}
          // mapDataValues={props.mapDataValues}
          //  mapPopUpOpen={props.mapPopUpOpen}
          handleAuthMobileNumberChange={props.handleAuthMobileNumberChange}
          handleAuthDateOfBirthChange={props.handleAuthDateOfBirthChange}
          handleAuthRelationNameChange={props.handleAuthRelationNameChange}
          handleAuthorisedPersonEmailAddresshChange={
            props.handleAuthorisedPersonEmailAddresshChange
          }
          handleFirstNameChange={props.handleFirstNameChange}
          handleLastNameChange={props.handleLastNameChange}
          handleRemoveImage={props.handleRemoveImage}
          handleUploadImageClick={props.handleUploadImageClick}
          handlePhotoIdChange={props.handlePhotoIdChange}
          handleRelationChange={props.handleRelationChange}
          PhotoIdTypeName={props.PhotoIdTypeName}
          authImage={props.authImage}
          // authorisedPersonEmailAddress={props.authorisedPersonEmailAddress}
          authorisedPersonValues={props.authorisedPersonValues}
          PhotoIdNumber={props.PhotoIdNumber}
          PhotoIdType={props.PhotoIdType}
          handleCheckClick={props.handleCheckClick}
          handleHouseNoChange={props.handleHouseNoChange}
          handleStreetNameChange={props.handleStreetNameChange}
          // onReset={props.onReset}
          AuthDateOfBirth={props.AuthDateOfBirth}
          check={props.check}
          photoIdValues={props.photoIdValues}
          FirstName={props.FirstName}
          LastName={props.LastName}
          AuthRelationTypeId={props.AuthRelationTypeId}
          RelationTypeName={props.RelationTypeName}
          RelationName={props.RelationName}
          MobileNumber={props.MobileNumber}
          HouseNo={props.HouseNo}
          StreetName={props.StreetName}
          // PhotoIdNumber={props.PhotoIdNumber}
          //  PhotoIdType={props.PhotoIdType}
          handleDateChange={props.handleDateChange}
          handleRelationNameChange={props.handleRelationNameChange}
          handleRelationTypeIdChange={props.handleRelationTypeIdChange}
          handleWitnessNameChange={props.handleWitnessNameChange}
          handleSubmit={props.handleSubmit}
          //  activeStep={props.activeStep}
          //  handleBack={props.handleBack}
          WitnessDetailsFormArray={props.WitnessDetailsFormArray}
          onHandleAddClick={props.onHandleAddClick}
          onWitnessSaveAndContinue={props.onWitnessSaveAndContinue}
          AddClickCount={props.AddClickCount}
          onDeleteClick={props.onDeleteClick}
          // WitnessName={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.WitnessName)[0]
          // }
          // RelationName={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.RelationName)[0]
          // }
          // handleSubmit={props.onWitnessSaveAndContinue}
          // RelationTypeId={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.RelationTypeId)[0]
          // }
          relationTypeValues={props.relationTypeValues}
          // handleMapClose={props.handleMapClose}
          // handleMapPopUpClose={props.handleMapPopUpClose}
          //  enterApplicationId={props.enterApplicationId}
          //  mapPopUpOpen={props.mapPopUpOpen}
          // handleEditMapDetails={props.handleEditMapDetails}
          SuccessMileStonePopUp={props.SuccessMileStonePopUp}
          handleAvailableLandAreaChange={props.handleAvailableLandAreaChange}
          handleInitialAllocationLandSizeChange={
            props.handleInitialAllocationLandSizeChange
          }
          handleUnitChange={props.handleUnitChange}
          // Village={props.Village}
          // TownShip={props.TownShip}
          // ParcelId={props.ParcelId}
          // Mandal={props.Mandal}
          // GeometryDataFromMap={props.GeometryDataFromMap}
          // GeometricString={props.GeometricString}
          // CompleteDetails={props.CompleteDetails}
          // District={props.District}
          // Boundaries={props.Boundaries}
          // Colony={props.Colony}
          // Block={props.Block}
          // Plot={props.Plot}
          // GlobalId={props.GlobalId}
          // TempGlobalId={props.TempGlobalId}
          // Sector={props.Sector}
          // SurveyNumberByPlanning={props.SurveyNumberByPlanning}
          // AvailableLandArea={props.AvailableLandArea}
          // mapDataValues={props.mapDataValues}
          handleMileStoneChange={props.handleMileStoneChange}
          handlePopoverClose={props.handlePopoverClose}
          handlePopoverOpen={props.handlePopoverOpen}
          anchorEl={props.anchorEl}
          PopOverForAcres={props.PopOverForAcres}
          handleProjectPurpose={props.handleProjectPurpose}
          handleProjectDescriptionChange={props.handleProjectDescriptionChange}
          handleProjectNameChange={props.handleProjectNameChange}
          handleGoDateChange={props.handleGoDateChange}
          handleGoNumberChange={props.handleGoNumberChange}
          handleLeaseAmountChange={props.handleLeaseAmountChange}
          handleLeaseTenureChange={props.handleLeaseTenureChange}
          handleRequiredLandSizeChange={props.handleRequiredLandSizeChange}
          handleInitialConvertedChange={props.handleInitialConvertedChange}
          handleConvertedChange={props.handleConvertedChange}
          handleMilestonePopUpClose={props.handleMilestonePopUpClose}
          milestonePopUp={props.milestonePopUp}
          onHandleLandAllocationSaveandContinue={
            props.onHandleLandAllocationSaveandContinue
          }
          handleTownshipClick={props.handleTownshipClick}
          townshipValues={props.townshipValues}
          handleMultiSelectMileStoneChange={
            props.handleMultiSelectMileStoneChange
          }
          handleLandReleaseChange={props.handleLandReleaseChange}
          handleDateOfCompletionChange={props.handleDateOfCompletionChange}
          handleLeaseStartDateChange={props.handleLeaseStartDateChange}
          // activeStep={props.activeStep}
          LandAllocationAllValues={props.LandAllocationAllValues}
          // handleLandSubmit={props.handleLandSubmit}
          ruleName1={props.ruleName1}
          ruleName2={props.ruleName2}
          handleSourceTypeChange={props.handleSourceTypeChange}
          ruleName={props.ruleName}
          LandSize={props.LandSize}
          LandSizeType={props.LandSizeType}
          projectRules={props.projectRules}
          InitialAllocation={props.InitialAllocation}
          TotalBudget={props.TotalBudget}
          PricePerUnit={props.PricePerUnit}
          RequiredLandSizeBeforeAllocation={
            props.RequiredLandSizeBeforeAllocation
          }
          requiredLandUnitId={props.requiredLandUnitId}
          RenewalAmountPercentage={props.RenewalAmountPercentage}
          RenewalForEvery={props.RenewalForEvery}
          initialUnitId={props.initialUnitId}
          TotalLeaseAmount={props.TotalLeaseAmount}
          InitialAllocationLandSize={props.InitialAllocationLandSize}
          ApplicationId={props.enterApplicationId}
          handleSelectMultiChange={props.handleSelectMultiChange}
          projectTypes={props.projectTypes}
          projectValues={props.projectValues}
          handleConditionTypeChange={props.handleConditionTypeChange}
          minValue={props.minValue}
          maxValue={props.maxValue}
          value={props.value}
          ConditionTypeId={props.ConditionTypeId}
          ConditionTypeValues={props.ConditionTypeValues}
          RuleSourceTypeId={props.RuleSourceTypeId}
          sourceTypeValues={props.sourceTypeValues}
          handleProjectTypeChange={props.handleProjectTypeChange}
          handleLandDetailsChangeClick={props.handleLandDetailsChangeClick}
          MileStoneNewRuleSubmit={props.MileStoneNewRuleSubmit}
          ProjectTypeId={props.ProjectTypeId}
          handleEditRuleTypeSubmit={props.handleEditRuleTypeSubmit}
          onHandleClose={props.onHandleClose}
          PopUpOpen={props.PopUpOpen}
          handlePopUpOpenClick={props.handlePopUpOpenClick}
          handleMultiSelectChange={props.handleMultiSelectChange}
          ProjectRuleTypes={props.ProjectRuleTypes}
          handleThemeCityChange={props.handleThemeCityChange}
          mileStoneValues={props.mileStoneValues}
          MileStoneArray={props.MileStoneArray}
          RuleId={props.RuleId}
          RuleName={props.RuleName}
          LandRelease={props.LandRelease}
          DateOfCompletion={props.DateOfCompletion}
          AddMilestoneClickCount={props.AddMilestoneClickCount}
          onMileStoneSave={props.onMileStoneSave}
          // handleBack={props.handleBack}
          onMileStoneAddClick={props.onMileStoneAddClick}
          onMileStoneDeleteClick={props.onMileStoneDeleteClick}
          // handleSubmit={props.onHandleSubmit}
          leaseTenure={props.leaseTenure}
          Number={props.Number}
          UnitId={props.UnitId}
          UnitName={props.UnitName}
          unitValues={props.unitValues}
          LandAllocationId={props.LandAllocationId}
          LandAllocationTypeName={props.LandAllocationTypeName}
          RequiredLandSize={props.RequiredLandSize}
          LeaseAmount={props.LeaseAmount}
          LeaseStartDate={props.LeaseStartDate}
          LeaseEndDate={props.LeaseEndDate}
          GoNumber={props.GoNumber}
          GoDate={props.GoDate}
          ProjectName={props.ProjectName}
          ProjectPurpose={props.ProjectPurpose}
          ProjectDescription={props.ProjectDescription}
          TownshipName={props.TownshipName}
          // onSubmit={props.onHandleSubmit}
          // handleClick={props.handleClick}
          selectLandAllocationTypeValues={props.selectLandAllocationTypeValues}
          selectThemeCityTypeValues={props.selectThemeCityTypeValues}
          // AllocationId={props.AllocationId}
          ruleTypeValues={props.ruleTypeValues}
        />
      </div>
    ) : props.activeStep === 4 ? (
      <div>
        <UploadDocumentForm
                RelationTypeAndName={props.RelationTypeAndName}

          handleCommentsChange={props.handleCommentsChange}
          Comments={props.Comments}
          pdfPath={props.pdfPath}
          onHandleSaveAsDraft={props.onHandleSaveAsDraft}
          imageWarningPopUp={props.imageWarningPopUp}
          RelationDateOfBirth={props.RelationDateOfBirth}
          uploadPopUp={props.uploadPopUp}
          handleUploadPopUpClose={props.handleUploadPopUpClose}
          InitialAllocationSizeInAcres={props.InitialAllocationSizeInAcres}
          projectTypes={props.projectTypes}
          WithInAGC={props.WithInAGC}
          OutOfAGC={props.OutOfAGC}
          disabledeleteButton={props.disabledeleteButton}
          fileSize={props.fileSize}
          handleAddRuleNameChange={props.handleAddRuleNameChange}
          handleMaxValueChange={props.handleMaxValueChange}
          handleMinValueChange={props.handleMinValueChange}
          handleValueChange={props.handleValueChange}
          disableUploadButton={props.disableUploadButton}
          registerOrNot={props.registerOrNot}
          handleRegisterOrNotChange={props.handleRegisterOrNotChange}
          TotalLandCost={props.TotalLandCost}
          AmountPaid={props.AmountPaid}
          AmountToBePaid={props.AmountToBePaid}
          handleAmountPaidChange={props.handleAmountPaidChange}
          handleTotalLandCostChange={props.handleTotalLandCostChange}
          onAddGoValuesClick={props.onAddGoValuesClick}
          AddGoValueClickCount={props.AddGoValueClickCount}
          onGoValuesDeleteClick={props.onGoValuesDeleteClick}
          ProjectDetailsArray={props.ProjectDetailsArray}
          RelationType={props.RelationType}
          buttonDisable1={props.buttonDisable1}
          buttonDisable2={props.buttonDisable2}
          buttonDisable3={props.buttonDisable3}
          buttonDisable4={props.buttonDisable4}
          submitPopUp={props.submitPopUp}
          SuccesPopUpOpen={props.SuccesPopUpOpen}
          WarningPopUp={props.WarningPopUp}
          uploadPopUpOpen={props.uploadPopUpOpen}
          onHandleWarningPopupClose={props.onHandleWarningPopupClose}
          handleSubmitPopUpOpen={props.handleSubmitPopUpOpen}
          onUploadPopUpClose={props.onUploadPopUpClose}
          handleDownload={props.handleDownload}
          handleMapPopUpClose1={props.handleMapPopUpClose1}
          selectMapValuesPopUp={props.selectMapValuesPopUp}
          handleMapSelectClick={props.handleMapSelectClick}
          handleUploadButtonClick={props.handleUploadButtonClick}
          handleDeleteimageClick={props.handleDeleteimageClick}
          handleProjectPurposeChange={props.handleProjectPurposeChange}
          TownshipId={props.TownshipId}
          RelationTypeArray={props.relationTypeValues}
          id={props.AddMilestoneClickCount}
          handleEditMapDetails={props.handleEditMapDetails}
          // handleOrganizationNameChange={props.handleOrganizationNameChange}
          // handleOrgCityChange={props.handleOrgCityChange}
          // handleOrgEmailAddressChange={props.handleOrgEmailAddressChange}
          // handleOrgGSTNumberChange={props.handleOrgGSTNumberChange}
          // handleOrgHouseNumberChange={props.handleOrgHouseNumberChange}
          // handleOrgRegistrationNumberChange={
          //   props.handleOrgRegistrationNumberChange
          // }
          // handleOrgStreetNameChange={props.handleOrgStreetNameChange}
          // handleZipCodeChange={props.handleZipCodeChange}
          // handleOrgPhoneNumberChange={props.handleOrgPhoneNumberChange}
          mapPopUpOpen={props.mapPopUpOpen}
          handleMapClose={props.handleMapClose}
          handleMapPopUpClose={props.handleMapPopUpClose}
          mapDataValues={props.mapDataValues}
          Village={props.Village}
          AvailableLandArea={props.AvailableLandArea}
          Block={props.Block}
          Plot={props.Plot}
          TempGlobalId={props.TempGlobalId}
          SurveyNumberByPlanning={props.SurveyNumberByPlanning}
          Mandal={props.Mandal}
          District={props.District}
          Boundaries={props.Boundaries}
          Colony={props.Colony}
          CompleteDetails={props.CompleteDetails}
          GeometricString={props.GeometricString}
          GeometryDataFromMap={props.GeometryDataFromMap}
          GlobalId={props.GlobalId}
          ParcelId={props.ParcelId}
          Sector={props.Sector}
          TownShip={props.TownShip}
          handleStateChange={props.handleStateChange}
          handleTypeOfAllocationChange={props.handleTypeOfAllocationChange}
          handleAgreementChange={props.handleAgreementChange}
          activeStep={props.activeStep}
          TypeOfAllocationId={props.TypeOfAllocationId}
          handleBack={props.handleBack}
          LandAllocatedToId={props.LandAllocatedToId}
          AllocationSubTypeId={props.AllocationSubTypeId}
          typesOfAllocationValues={props.typesOfAllocationValues}
          landAllocatedTo={props.landAllocatedTo}
          // authorizedPersonName={props.authorizedPersonName}
          allocationTypeId={props.allocationTypeId}
          OrganizationName={props.OrganizationName}
          AuthorisedPersonEmailAddress={props.AuthorisedPersonEmailAddress}
          AgreementTypeId={props.AgreementTypeId}
          enterApplicationId={props.enterApplicationId}
          mobileNumber={props.mobileNumber}
          OrgPhoneNumber={props.OrgPhoneNumber}
          OrgEmailAddress={props.OrgEmailAddress}
          HouseNoBuildingName={props.HouseNoBuildingName}
          StreetNameLocality={props.StreetNameLocality}
          GSTNumber={props.GSTNumber}
          handleCountryClick={props.handleCountryClick}
          // Country={props.CountryId}
          //  State={props.StateId}
          City={props.City}
          ZipCode={props.ZipCode}
          RegistrationNumber={props.RegistrationNumber}
          // GstNumber={props.GSTNumber}
          agreementTypeValues={props.agreementTypeValues}
          //  selectThemeCityTYpeValues={props.selectThemeCityTYpeValues}
          selectAllocationTypeValues={props.selectAllocationTypeValues}
          selectCountryValues={props.selectCountryValues}
          selectStateValues={props.selectStateValues}
          AllocationType={props.allocationTypeId}
          AllocationName={props.AllocationName}
          AllocationId={props.AllocationId}
          CountryId={props.CountryId}
          CountryName={props.CountryName}
          handleLandAllocationClick={props.handleLandAllocationClick}
          handleAllocationChange={props.handleAllocationChange}
          StateId={props.StateId}
          WitnessName={props.WitnessName}
          StateName={props.StateName}
          // LandAllocatedToId={props.LandAllocatedToId}
          // landAllocatedTo={props.landAllocatedTo}
          // mapDataValues={props.mapDataValues}
          //  mapPopUpOpen={props.mapPopUpOpen}
          handleAuthMobileNumberChange={props.handleAuthMobileNumberChange}
          handleAuthDateOfBirthChange={props.handleAuthDateOfBirthChange}
          handleAuthRelationNameChange={props.handleAuthRelationNameChange}
          handleAuthorisedPersonEmailAddresshChange={
            props.handleAuthorisedPersonEmailAddresshChange
          }
          handleFirstNameChange={props.handleFirstNameChange}
          handleLastNameChange={props.handleLastNameChange}
          handleRemoveImage={props.handleRemoveImage}
          handleUploadImageClick={props.handleUploadImageClick}
          handlePhotoIdChange={props.handlePhotoIdChange}
          handleRelationChange={props.handleRelationChange}
          PhotoIdTypeName={props.PhotoIdTypeName}
          authImage={props.authImage}
          // authorisedPersonEmailAddress={props.authorisedPersonEmailAddress}
          authorisedPersonValues={props.authorisedPersonValues}
          PhotoIdNumber={props.PhotoIdNumber}
          PhotoIdType={props.PhotoIdType}
          handleCheckClick={props.handleCheckClick}
          handleHouseNoChange={props.handleHouseNoChange}
          handleStreetNameChange={props.handleStreetNameChange}
          // onReset={props.onReset}
          AuthDateOfBirth={props.AuthDateOfBirth}
          check={props.check}
          photoIdValues={props.photoIdValues}
          FirstName={props.FirstName}
          LastName={props.LastName}
          AuthRelationTypeId={props.AuthRelationTypeId}
          RelationTypeName={props.RelationTypeName}
          RelationName={props.RelationName}
          MobileNumber={props.MobileNumber}
          HouseNo={props.HouseNo}
          StreetName={props.StreetName}
          // PhotoIdNumber={props.PhotoIdNumber}
          //  PhotoIdType={props.PhotoIdType}
          handleDateChange={props.handleDateChange}
          handleRelationNameChange={props.handleRelationNameChange}
          handleRelationTypeIdChange={props.handleRelationTypeIdChange}
          handleWitnessNameChange={props.handleWitnessNameChange}
          handleSubmit={props.handleSubmit}
          //  activeStep={props.activeStep}
          //  handleBack={props.handleBack}
          WitnessDetailsFormArray={props.WitnessDetailsFormArray}
          onHandleAddClick={props.onHandleAddClick}
          onWitnessSaveAndContinue={props.onWitnessSaveAndContinue}
          AddClickCount={props.AddClickCount}
          onDeleteClick={props.onDeleteClick}
          // WitnessName={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.WitnessName)[0]
          // }
          // RelationName={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.RelationName)[0]
          // }
          // handleSubmit={props.onWitnessSaveAndContinue}
          // RelationTypeId={
          //   props.WitnessDetailsFormArray.filter(
          //     x => x.AddClickCount === props.AddClickCount
          //   ).map(x => x.RelationTypeId)[0]
          // }
          relationTypeValues={props.relationTypeValues}
          // handleMapClose={props.handleMapClose}
          // handleMapPopUpClose={props.handleMapPopUpClose}
          //  enterApplicationId={props.enterApplicationId}
          //  mapPopUpOpen={props.mapPopUpOpen}
          // handleEditMapDetails={props.handleEditMapDetails}
          SuccessMileStonePopUp={props.SuccessMileStonePopUp}
          handleAvailableLandAreaChange={props.handleAvailableLandAreaChange}
          handleInitialAllocationLandSizeChange={
            props.handleInitialAllocationLandSizeChange
          }
          handleUnitChange={props.handleUnitChange}
          // Village={props.Village}
          // TownShip={props.TownShip}
          // ParcelId={props.ParcelId}
          // Mandal={props.Mandal}
          // GeometryDataFromMap={props.GeometryDataFromMap}
          // GeometricString={props.GeometricString}
          // CompleteDetails={props.CompleteDetails}
          // District={props.District}
          // Boundaries={props.Boundaries}
          // Colony={props.Colony}
          // Block={props.Block}
          // Plot={props.Plot}
          // GlobalId={props.GlobalId}
          // TempGlobalId={props.TempGlobalId}
          // Sector={props.Sector}
          // SurveyNumberByPlanning={props.SurveyNumberByPlanning}
          // AvailableLandArea={props.AvailableLandArea}
          // mapDataValues={props.mapDataValues}
          handleMileStoneChange={props.handleMileStoneChange}
          handlePopoverClose={props.handlePopoverClose}
          handlePopoverOpen={props.handlePopoverOpen}
          anchorEl={props.anchorEl}
          PopOverForAcres={props.PopOverForAcres}
          handleProjectPurpose={props.handleProjectPurpose}
          handleProjectDescriptionChange={props.handleProjectDescriptionChange}
          handleProjectNameChange={props.handleProjectNameChange}
          handleGoDateChange={props.handleGoDateChange}
          handleGoNumberChange={props.handleGoNumberChange}
          handleLeaseAmountChange={props.handleLeaseAmountChange}
          handleLeaseTenureChange={props.handleLeaseTenureChange}
          handleRequiredLandSizeChange={props.handleRequiredLandSizeChange}
          handleInitialConvertedChange={props.handleInitialConvertedChange}
          handleConvertedChange={props.handleConvertedChange}
          handleMilestonePopUpClose={props.handleMilestonePopUpClose}
          milestonePopUp={props.milestonePopUp}
          handleTownshipClick={props.handleTownshipClick}
          townshipValues={props.townshipValues}
          handleMultiSelectMileStoneChange={
            props.handleMultiSelectMileStoneChange
          }
          handleLandReleaseChange={props.handleLandReleaseChange}
          handleDateOfCompletionChange={props.handleDateOfCompletionChange}
          handleLeaseStartDateChange={props.handleLeaseStartDateChange}
          // activeStep={props.activeStep}
          LandAllocationAllValues={props.LandAllocationAllValues}
          // handleLandSubmit={props.handleLandSubmit}
          ruleName1={props.ruleName1}
          ruleName2={props.ruleName2}
          handleSourceTypeChange={props.handleSourceTypeChange}
          ruleName={props.ruleName}
          LandSize={props.LandSize}
          LandSizeType={props.LandSizeType}
          projectRules={props.projectRules}
          InitialAllocation={props.InitialAllocation}
          TotalBudget={props.TotalBudget}
          PricePerUnit={props.PricePerUnit}
          RequiredLandSizeBeforeAllocation={
            props.RequiredLandSizeBeforeAllocation
          }
          requiredLandUnitId={props.requiredLandUnitId}
          RenewalAmountPercentage={props.RenewalAmountPercentage}
          RenewalForEvery={props.RenewalForEvery}
          initialUnitId={props.initialUnitId}
          TotalLeaseAmount={props.TotalLeaseAmount}
          InitialAllocationLandSize={props.InitialAllocationLandSize}
          ApplicationId={props.enterApplicationId}
          handleSelectMultiChange={props.handleSelectMultiChange}
          projectValues={props.projectValues}
          handleConditionTypeChange={props.handleConditionTypeChange}
          minValue={props.minValue}
          maxValue={props.maxValue}
          value={props.value}
          ConditionTypeId={props.ConditionTypeId}
          ConditionTypeValues={props.ConditionTypeValues}
          RuleSourceTypeId={props.RuleSourceTypeId}
          sourceTypeValues={props.sourceTypeValues}
          handleProjectTypeChange={props.handleProjectTypeChange}
          handleLandDetailsChangeClick={props.handleLandDetailsChangeClick}
          MileStoneNewRuleSubmit={props.MileStoneNewRuleSubmit}
          ProjectTypeId={props.ProjectTypeId}
          handleEditRuleTypeSubmit={props.handleEditRuleTypeSubmit}
          onHandleClose={props.onHandleClose}
          PopUpOpen={props.PopUpOpen}
          handlePopUpOpenClick={props.handlePopUpOpenClick}
          handleMultiSelectChange={props.handleMultiSelectChange}
          ProjectRuleTypes={props.ProjectRuleTypes}
          handleThemeCityChange={props.handleThemeCityChange}
          mileStoneValues={props.mileStoneValues}
          MileStoneArray={props.MileStoneArray}
          RuleId={props.RuleId}
          RuleName={props.RuleName}
          LandRelease={props.LandRelease}
          DateOfCompletion={props.DateOfCompletion}
          AddMilestoneClickCount={props.AddMilestoneClickCount}
          onMileStoneSave={props.onMileStoneSave}
          // handleBack={props.handleBack}
          onMileStoneAddClick={props.onMileStoneAddClick}
          onMileStoneDeleteClick={props.onMileStoneDeleteClick}
          // handleSubmit={props.onHandleSubmit}
          leaseTenure={props.leaseTenure}
          Number={props.Number}
          UnitId={props.UnitId}
          UnitName={props.UnitName}
          unitValues={props.unitValues}
          LandAllocationId={props.LandAllocationId}
          LandAllocationTypeName={props.LandAllocationTypeName}
          RequiredLandSize={props.RequiredLandSize}
          LeaseAmount={props.LeaseAmount}
          LeaseStartDate={props.LeaseStartDate}
          LeaseEndDate={props.LeaseEndDate}
          GoNumber={props.GoNumber}
          GoDate={props.GoDate}
          ProjectName={props.ProjectName}
          ProjectPurpose={props.ProjectPurpose}
          ProjectDescription={props.ProjectDescription}
          TownshipName={props.TownshipName}
          // onSubmit={props.onHandleSubmit}
          // handleClick={props.handleClick}
          selectLandAllocationTypeValues={props.selectLandAllocationTypeValues}
          selectThemeCityTypeValues={props.selectThemeCityTypeValues}
          // AllocationId={props.AllocationId}
          ruleTypeValues={props.ruleTypeValues}
          Uploadimages={props.Uploadimages}
          documentList2={props.documentList2}
          selectDepartmentName={props.selectDepartmentName}
          handleSelectDepartmentChange={props.handleSelectDepartmentChange}
          UserId={props.UserId}
          selectDepartmentList={props.selectDepartmentList}
          // activeStep={props.activeStep}
          // handleBack={props.handleBack}
          onSubmit={props.onSubmit}
          image1={props.image1}
          image2={props.image2}
          image3={props.image3}
          handleUploadImageChange={props.handleUploadImageChange}
          handleUploadImage2Change={props.handleUploadImage2Change}
          handleUploadImage3Change={props.handleUploadImage3Change}
        />
        {
          <Dialog
            open={props.WarningPopUp}
            // tslint:disable-next-line:jsx-no-lambda
            //  onClose={() => props.onHandleApprovePopUpClose()}
            aria-labelledby="responsive-dialog-title"
          >
            <div className="popup-title">
              <DialogTitle id="simple-dialog-title" className="title">
                Upload documents/image files
              </DialogTitle>
            </div>
            <div id="simple-dialog-title">
              <DialogContent>
                Please upload document files
                <div className="popup-bottom-btn">
                  <Button
                    className="main-btn"
                    onClick={() =>
                      // tslint:disable-next-line:jsx-no-lambda
                      {
                        props.onHandleWarningPopupClose();
                      }
                    }
                  >
                    OK
                  </Button>
                </div>
              </DialogContent>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={props.uploadPopUp}
            // tslint:disable-next-line:jsx-no-lambda
            //  onClose={() => props.onHandleApprovePopUpClose()}
            aria-labelledby="responsive-dialog-title"
          >
            <div className="pop-up">
              <DialogTitle id="simple-dialog-title" className="title">
                Image Uploaded Successfully
              </DialogTitle>
            </div>
            <DialogActions>
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => props.handleUploadPopUpClose()}
                >
                  Ok
                </Button>
              </div>
            </DialogActions>
          </Dialog>
        }
        {
          <Dialog
            open={props.uploadPopUpOpen}
            // tslint:disable-next-line:jsx-no-lambda
            //  onClose={() => props.onHandleApprovePopUpClose()}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title" className="popup-title">
              Confirmation For Forwarding
            </DialogTitle>
            <DialogContent>
              You Are Forwarding To :<b> {props.selectDepartmentName}</b>
            </DialogContent>
            <div className="popup-bottom-btn">
              <Button
                className="main-btn"
                onClick={() =>
                  // tslint:disable-next-line:jsx-no-lambda
                  {
                    //   props.handleDownload(props.SubmitValues);
                    props.handleSubmitPopUpOpen();
                  }
                }
              >
                YES
              </Button>
              <Button
                className="main-btn"
                onClick={() =>
                  // tslint:disable-next-line:jsx-no-lambda
                  props.onUploadPopUpClose()
                }
              >
                No
              </Button>
            </div>

            <DialogActions />
          </Dialog>
        }
        {
          <Dialog
            className="dilogbox-title"
            open={props.submitPopUp}
            // tslint:disable-next-line:jsx-no-lambda
            //  onClose={() => props.onHandleApprovePopUpClose()}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Review Details
            </DialogTitle>
            <DialogContent>
              <SubmitPopUpInnerForm
                projectTypes={props.projectTypes}
                projectValues={props.projectValues}
                SuccesPopUpOpen={props.SuccesPopUpOpen}
                documentList2={props.documentList2}
                handleRedirectToDashboardClick={
                  props.handleRedirectToDashboardClick
                }
                check1={props.check1}
                handleSubmitCheck={props.handleSubmitCheck}
                SubmitValues={props.SubmitValues}
                onHandleSaveAsDraft={props.onHandleSaveAsDraft}
                onHandleFinalSubmit={props.onHandleFinalSubmit}
                // onHandleSubmitClose={props.onHandleSubmitClose}
                handleClose={props.handleClose}
              />
            </DialogContent>
            <DialogActions />
          </Dialog>
        }
        {
          <Dialog
            open={props.SuccesPopUpOpen}
            // tslint:disable-next-line:jsx-no-lambda
            //  onClose={() => props.onHandleApprovePopUpClose()}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Successfully submitted
            </DialogTitle>
            <DialogContent>
              <SubmitPopUpInnerForm
                projectTypes={props.projectTypes}
                projectValues={props.projectValues}
                SuccesPopUpOpen={props.SuccesPopUpOpen}
                documentList2={props.documentList2}
                handleRedirectToDashboardClick={
                  props.handleRedirectToDashboardClick
                }
                check1={props.check1}
                handleSubmitCheck={props.handleSubmitCheck}
                SubmitValues={props.SubmitValues}
                onHandleSaveAsDraft={props.onHandleSaveAsDraft}
                onHandleFinalSubmit={props.onHandleFinalSubmit}
                // onHandleSubmitClose={props.onHandleSubmitClose}
                handleClose={props.handleClose}
              />
            </DialogContent>
            <DialogActions>
              <Button
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => {
                  location.href = `${props.pdfPath}`;
                }}
                id="myButton"
                className="save-btn"
                type="button"
                // onClick={() =>
                //   // tslint:disable-next-line:jsx-no-lambda
                //   {
                //     props.handleDownload("printdata");
                //   }
                // }
              >
                Dowload
              </Button>
              <Button
                className="save-btn"
                type="button"
                onClick={() =>
                  // tslint:disable-next-line:jsx-no-lambda
                  props.handleRedirectToDashboardClick()
                }
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        }
      </div>
    ) : (
      ""
    )}
  </div>
);

// getAgreementTypeValues()
//   .then(res => {
//     props.setState({
//       ...props,
//       agreementTypeValues: res
//     });
//   })
//   .catch(err => err);

// getCityTypeValues()
//   .then(res => {
//     props.setState({
//       ...props,

//       selectThemeCityTYpeValues: res
//     });
//   })
//   .catch(err => err);

//   public render() {
//     // tslint:disable-next-line:no-console
//     console.log(props.WitnessDetailsFormArray);
//     const { TownshipId } = props.props.match.params.id;
//     // tslint:disable-next-line:no-console
//     console.log(TownshipId);

//     // const townshipValues = props.townshipValues.filter(
//     //   (x: IDashboardStateValues) => x.TownshipId === TownshipId
//     // );

//     // tslint:disable-next-line:no-console
//     console.log(props.props.match);

//   }
// }
export default ProposalForm;
