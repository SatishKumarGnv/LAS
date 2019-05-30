// import Button from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as React from "react";
// import { IMatchParams } from "src/Container/ApplicationState";
// import { ICreateProposalProps } from "src/Container/ProposalState";

import DialogActions from "@material-ui/core/DialogActions";
import {
  IAuthorisedProps,
  IAuthorizedPersonValues,
  IChangeValues,
  IConditionValueProps,
  ICreateProposalProps,
  IDetailsFromMap,
  ILandallocationFormStatevalues,
  // tslint:disable-next-line:ordered-imports
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
  IRuleTypeValuesProps,
  ISelectAgrementTypeProps,
  ISelectAllocationProps,
  ISelectCountryProps,
  ISelectLandAllocationProps,
  ISelectStateProps,
  ISelectThemeCityProps,
  ISelectTypeOfAllocationProps,
  // ITownshipValues,
  ISourceValueProps,
  // IUnitValues,
  IUnitProps,
  IWitnessDetailsProps,
  IWitnessDetailsStateValues,
  IwitnessValues
} from "../DefaultLayout/HomePage";
import EditRuleForm from "./EditRuleForm";
import LandAllocationForm, {
  ILandSaveAndContinueProps
} from "./LandAllocationForm";
// import MilestoneDetailsForm from "./MileStoneDetails";

const LandAllocationTabForm = (
  props: ILandallocationFormStatevalues &
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
    ICreateProposalProps &
    IWitnessDetailsStateValues &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IWitnessDetailsStateValues &
    IwitnessValues &
    IAuthorizedPersonValues &
    IRelationTypeProps &
    IPhotoIdTypeProps &
    IAuthorisedProps &
    IChangeValues &
    IProposalTabStateValues &
    IDetailsFromMap &
    ISelectAllocationProps &
    ISelectCountryProps &
    ISelectStateProps &
    ISelectAgrementTypeProps &
    ISelectTypeOfAllocationProps &
    IDetailsFromMap
  // IMatchParams
) => (
  <div>
    <LandAllocationForm
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
      AuthRelationTypeId={props.AuthRelationTypeId}
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
      // authorisedPersonEmailAddress={props.authorisedPersonEmailAddress}
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
      RelationTypeName={props.RelationTypeName}
      RelationName={props.RelationName}
      AuthorisedPersonEmailAddress={props.AuthorisedPersonEmailAddress}
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
      handleMultiSelectMileStoneChange={props.handleMultiSelectMileStoneChange}
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
      RequiredLandSizeBeforeAllocation={props.RequiredLandSizeBeforeAllocation}
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

      // mapPopUpOpen={props.mapPopUpOpen}
      // handleEditMapDetails={props.handleEditMapDetails}
      // handleMapClose={props.handleMapClose}
      // handleMapPopUpClose={props.handleMapPopUpClose}
      // enterApplicationId={props.enterApplicationId}
      // SuccessMileStonePopUp={props.SuccessMileStonePopUp}
      // handleAvailableLandAreaChange={props.handleAvailableLandAreaChange}
      // handleInitialAllocationLandSizeChange={
      //   props.handleInitialAllocationLandSizeChange
      // }
      // handleUnitChange={props.handleUnitChange}
      // activeStep={props.activeStep}
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
      // handleMileStoneChange={props.handleMileStoneChange}
      // handlePopoverClose={props.handlePopoverClose}
      // handlePopoverOpen={props.handlePopoverOpen}
      // anchorEl={props.anchorEl}
      // PopOverForAcres={props.PopOverForAcres}
      // handleProjectPurpose={props.handleProjectPurpose}
      // handleProjectDescriptionChange={props.handleProjectDescriptionChange}
      // handleProjectNameChange={props.handleProjectNameChange}
      // handleGoDateChange={props.handleGoDateChange}
      // handleGoNumberChange={props.handleGoNumberChange}
      // handleLeaseAmountChange={props.handleLeaseAmountChange}
      // handleLeaseTenureChange={props.handleLeaseTenureChange}
      // handleRequiredLandSizeChange={props.handleRequiredLandSizeChange}
      // milestonePopUp={props.milestonePopUp}
      // handleMilestonePopUpClose={props.handleMilestonePopUpClose}
      // handleInitialConvertedChange={props.handleInitialConvertedChange}
      // handleConvertedChange={props.handleConvertedChange}
      // handleTownshipClick={props.handleTownshipClick}
      // townshipValues={props.townshipValues}
      // handleDateOfCompletionChange={props.handleDateOfCompletionChange}
      // handleLandReleaseChange={props.handleLandReleaseChange}
      // handleMultiSelectMileStoneChange={props.handleMultiSelectMileStoneChange}
      // sourceTypeValues={props.sourceTypeValues}
      // handleConditionTypeChange={props.handleConditionTypeChange}
      // handleSourceTypeChange={props.handleSourceTypeChange}
      // maxValue={props.maxValue}
      // minValue={props.minValue}
      // value={props.value}
      // ConditionTypeId={props.ConditionTypeId}
      // ConditionTypeValues={props.ConditionTypeValues}
      // RuleSourceTypeId={props.RuleSourceTypeId}
      // onMileStoneDeleteClick={props.onMileStoneDeleteClick}
      // // handleSubmit={props.handleSubmit}
      // AddMilestoneClickCount={props.AddMilestoneClickCount}
      // LandRelease={props.LandRelease}
      // RuleName={props.RuleName}
      // RuleId={props.RuleId}
      // DateOfCompletion={props.DateOfCompletion}
      // ProjectRuleTypes={props.ProjectRuleTypes}
      // handleProjectTypeChange={props.handleProjectTypeChange}
      // MileStoneNewRuleSubmit={props.MileStoneNewRuleSubmit}
      // mileStoneValues={props.mileStoneValues}
      // ruleTypeValues={props.ruleTypeValues}
      // ruleName={props.ruleName}
      // ruleName1={props.ruleName1}
      // ruleName2={props.ruleName2}
      // ProjectTypeId={props.ProjectTypeId}
      // handleEditRuleTypeSubmit={props.handleEditRuleTypeSubmit}
      // onHandleClose={props.onHandleClose}
      // PopUpOpen={props.PopUpOpen}
      // handlePopUpOpenClick={props.handlePopUpOpenClick}
      // handleMultiSelectChange={props.handleMultiSelectChange}
      // onMileStoneAddClick={props.onMileStoneAddClick}
      // MileStoneArray={props.MileStoneArray}
      // handleBack={props.handleBack}
      // onMileStoneSave={props.onMileStoneSave}
      // handleLeaseStartDateChange={props.handleLeaseStartDateChange}
      // onHandleLandAllocationSaveandContinue={
      //   props.onHandleLandAllocationSaveandContinue
      // } // handleLandSubmit={props.handleLandSubmit}
      // LandAllocationAllValues={props.LandAllocationAllValues}
      // projectRules={props.projectRules}
      // LandSize={props.LandSize}
      // LandSizeType={props.LandSizeType}
      // InitialAllocation={props.InitialAllocation}
      // TotalBudget={props.TotalBudget}
      // PricePerUnit={props.PricePerUnit}
      // requiredLandUnitId={props.requiredLandUnitId}
      // RequiredLandSizeBeforeAllocation={props.RequiredLandSizeBeforeAllocation}
      // RenewalAmountPercentage={props.RenewalAmountPercentage}
      // RenewalForEvery={props.RenewalForEvery}
      // initialUnitId={props.initialUnitId}
      // ApplicationId={props.ApplicationId}
      // InitialAllocationLandSize={props.InitialAllocationLandSize}
      // TotalLeaseAmount={props.TotalLeaseAmount}
      // handleSelectMultiChange={props.handleSelectMultiChange}
      // projectValues={props.projectValues}
      // projectTypes={props.projectTypes}
      // handleLandDetailsChangeClick={props.handleLandDetailsChangeClick}
      // handleThemeCityChange={props.handleThemeCityChange}
      // leaseTenure={props.leaseTenure}
      // Number={props.Number}
      // UnitId={props.UnitId}
      // UnitName={props.UnitName}
      // unitValues={props.unitValues}
      // LandAllocationId={props.LandAllocationId}
      // LandAllocationTypeName={props.LandAllocationTypeName}
      // RequiredLandSize={props.RequiredLandSize}
      // LeaseAmount={props.LeaseAmount}
      // LeaseStartDate={props.LeaseStartDate}
      // LeaseEndDate={props.LeaseEndDate}
      // GoNumber={props.GoNumber}
      // GoDate={props.GoDate}
      // ProjectName={props.ProjectName}
      // ProjectPurpose={props.ProjectPurpose}
      // ProjectDescription={props.ProjectDescription}
      // TownshipId={props.TownshipId}
      // TownshipName={props.TownshipName}
      // // onSubmit={this.onHandleSubmit}
      // // handleClick={this.handleClick}
      // selectLandAllocationTypeValues={props.selectLandAllocationTypeValues}
      // selectThemeCityTypeValues={props.selectThemeCityTypeValues}
      // AllocationId={props.AllocationId}
      // AllocationName={props.AllocationName}
    />
    <br />
    <br />

    {
      <Dialog
        open={props.PopUpOpen}
        // onClose={props.onHandleClose}
        aria-labelledby="simple-dialog-title"
      >
        <div className="popup-title">
          <DialogTitle id="simple-dialog-title">Create New Rule</DialogTitle>
        </div>
        <div id="simple-dialog-title" className="pop-up">
          <EditRuleForm
            handleAddRuleNameChange={props.handleAddRuleNameChange}
            handleMaxValueChange={props.handleMaxValueChange}
            handleMinValueChange={props.handleMinValueChange}
            handleValueChange={props.handleValueChange}
            handleMilestonePopUpClose={props.handleMilestonePopUpClose}
            milestonePopUp={props.milestonePopUp}
            handleSourceTypeChange={props.handleSourceTypeChange}
            handleProjectTypeChange={props.handleProjectTypeChange}
            MileStoneNewRuleSubmit={props.MileStoneNewRuleSubmit}
            ruleTypeValues={props.ruleTypeValues}
            ruleName={props.ruleName}
            ruleName1={props.ruleName1}
            ruleName2={props.ruleName2}
            ProjectTypeId={props.ProjectTypeId}
            handleConditionTypeChange={props.handleConditionTypeChange}
            minValue={props.minValue}
            maxValue={props.maxValue}
            value={props.value}
            ConditionTypeId={props.ConditionTypeId}
            ConditionTypeValues={props.ConditionTypeValues}
            RuleSourceTypeId={props.RuleSourceTypeId}
            sourceTypeValues={props.sourceTypeValues}
            TownshipId={props.TownshipId}
            TownshipName={props.TownshipName}
            selectThemeCityTypeValues={props.selectThemeCityTypeValues}
            onHandleClose={props.onHandleClose}
          />
        </div>
      </Dialog>
    }
    {
      <Dialog
        open={props.milestonePopUp}
        // onClose={props.onHandleClose}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Please Fill All the Required Fields
        </DialogTitle>
        <DialogActions className="btn-only-incenter">
          <Button
            className="btn-center"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => props.handleMilestonePopUpClose()}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    }
    {
      <Dialog
        open={props.SuccessMileStonePopUp}
        // onClose={props.onHandleClose}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          You have Successfully added the New Rule Type
        </DialogTitle>
        <DialogActions className="btn-only-incenter">
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button
            className="btn-center"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => props.handleMilestonePopUpClose()}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    }
    {/* <Button
      className="delete-btn"
      // disabled={this.state.activeStep === 0}
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => props.handleBack()}
    >
      Back
    </Button> */}

    {/* <Button
      className="save-btn add-btn"
      type="button"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() => {
        //  props.handleLandSubmit(props.LandAllocationAllValues);
        // props.ProjectName,
        // props.ProjectPurpose,
        // props.ThemeCityId,
        // props.ProjectDescription,
        // " props.ProjectStartDate",
        // " props.ProjectEndDate",
        // props.TotalBudget,
        // " props.ProjectFundedBy",
        // "  props.ProjectCoordinator",
        // props.projectRules,
        // props.ApplicationId,
        // props.LandAllocationId,
        // props.RequiredLandSize,
        // props.RequiredLandSize,
        // props.UnitId,
        // props.LandSize,
        // props.LandSizeType,
        // props.Number,
        // props.LeaseAmount,
        // props.LeaseStartDate,
        // props.LeaseEndDate,
        // props.RenewalForEvery,
        // props.RenewalAmountPercentage,
        // props.TotalLeaseAmount,
        // props.MileStoneArray,
        // props.PricePerUnit,
        // props.TotalLeaseAmount,
        // props.InitialAllocationLandSize,
        // props.initialUnitId,
        // props.InitialAllocation,
        // props.GoNumber,
        // props.GoDate
      }}
    >
      Save & Continue
    </Button> */}
  </div>
);

export default LandAllocationTabForm;
