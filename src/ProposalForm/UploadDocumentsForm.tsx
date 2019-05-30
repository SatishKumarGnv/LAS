import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";

import {
  Button,
  // Dialog,
  // InputLabel,
  // tslint:disable-next-line:ordered-imports
  // InputLabel,
  // DialogContent,
  // DialogTitle,
  Dialog,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import { ISelectDepartmentvalues } from "src/DefaultLayout/HomePage";

import {
  IAuthorisedProps,
  IAuthorizedPersonValues,
  IChangeValues,
  IConditionValueProps,
  ICreateProposalProps,
  IDetailsFromMap,
  IDocumentPropValues,
  ILandallocationFormStatevalues,
  ILandAllocationValues,
  // tslint:disable-next-line:ordered-imports
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
  ISourceValueProps,
  // ITownshipValues,
  ISubmitProps,
  // IUnitValues,
  IUnitProps,
  IUploadDocumentValues,
  IWitnessDetailsProps,
  IWitnessDetailsStateValues,
  IwitnessValues
} from "../DefaultLayout/HomePage";

const UploadDocumentInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<
  IUploadDocumentValues &
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
    IDetailsFromMap &
    ISubmitProps
>) => (
  <div className="dashboard-container">
    <div className="inner-header-titile">
      <h2>Upload Documents</h2>
    </div>
    <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
      <div className="white-card-form">
        <div className="white-card-auth over-data">
          {values.documentList2.map((x: IDocumentPropValues, key: number) => (
            <div className="Upload-grid" key={key}>
              <h4 className="child-card">{x.PhotoIdTypeName}</h4>
              <div className="img-border">
                <img
                  className="Upload-grid-img"
                  id="imageOfUser"
                  src={x.FileType}
                />
              </div>
              <div className="set-width">
                <input
                  className="popup-city"
                  accept="image/png, image/jpeg"
                  id={`${x.PhotoId}`}
                  type="file"
                  name={x.PhotoIdTypeName}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={evt =>
                    values.handleUploadImageChange(
                      evt,
                      `${x.PhotoId}`,
                      x.PhotoId
                    )
                  }
                  maxLength={50}
                />
              </div>

              {values.fileSize < 51200 ? (
                <div id={`${key}`}>max size is 50MB</div>
              ) : (
                ""
              )}

              <br />
              <Button
                className={
                  !x.buttonUpload
                    ? "disable-btn remove-btn"
                    : "main-btn remove-btn"
                }
                component="span"
                disabled={!x.buttonUpload}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={event =>
                  values.handleUploadButtonClick(
                    event,
                    `${x.PhotoId}`,
                    x.PhotoId
                  )
                }
              >
                <img src="/images/upload.png" />
              </Button>

              <Button
                className="main-btn remove-btn btn btn-blue"
                component="span"
                // disabled={values.disabledeleteButton}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() =>
                  values.handleDeleteimageClick(
                    x.PhotoId,
                    `${x.PhotoId}`,
                    document.getElementById(`${x.PhotoId}`)
                  )
                }
              >
                <img src="/images/delete.png" />
              </Button>
            </div>
          ))}
          {
            <Dialog
              open={values.imageWarningPopUp}
              // tslint:disable-next-line:jsx-no-lambda
              // onClose={() => values.onHandleReviewPopUpClose()}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Image Maximum Size should be 50 MB
              </DialogTitle>

              <div className="login-card-main">
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  color="primary"
                  autoFocus={true}
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => values.onHandleClose()}
                >
                  OK
                </Button>
              </div>
            </Dialog>
          }
          <div className="forword-grid">
            <label className="select-label">Forward To : </label>

            <FormControl>
              <div>
                <label className="select-labeltext">
                  Select Department User
                </label>
                <Select
                  className="forword-select-line"
                  value={values.UserId}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    handleChange(event);
                    values.handleSelectDepartmentChange(event);
                  }}
                  inputProps={{
                    id: "age-simple",
                    name: "UserId"
                  }}
                >
                  {values.selectDepartmentList &&
                    values.selectDepartmentList.map(
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
                {!!touched.UserId && errors.UserId && (
                  <div className="error-msg">
                    Department User Is Required Field
                  </div>
                )}
              </div>
            </FormControl>
          </div>
          <div className="child-card ">
            <h4
            // className="comment-txt"
            >
              <img src="/images/comment.png" />
              Comments
            </h4>

            <TextField
              placeholder="Enter Your Comments Here.."
              multiline={true}
              rowsMax="4"
              id="Comments"
              margin="normal"
              value={values.Comments}
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                handleChange(event);
                values.handleCommentsChange(event);
              }}
            />
            {!!touched.Comments && errors.Comments && (
              <div className="error-msg">Comments is Required Field</div>
            )}
          </div>

          <div className="title-btn">
            <Button
              type="button"
              className="reset-btn"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.handleBack()}
            >
              Back
            </Button>
            {/* <Button type="reset" className="reset-btn">
            Reset
          </Button> */}
            <Button
              type="submit"
              // disabled={values.UserId === 0}
              className="save-btn"
            >
              Submit
            </Button>
            <Button
              className="save-btn"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.onHandleSaveAsDraft({ ...values })}
              color="primary"
              autoFocus={true}
              // disabled={props.check1 === false}
            >
              Save As Draft
            </Button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export interface IUploadDocumentProps {
  readonly uploadPopUp: boolean;
  readonly pdfPath: string;
  handleUploadPopUpClose(): void;
  onSubmit(values: IUploadDocumentValues): void;
}

const modelSchema = yup.object().shape({
  Comments: yup.string().required(),
  UserId: yup
    .number()
    .min(1)
    .required()
});
const UploadDocumentForm = (
  props: IUploadDocumentProps &
    IUploadDocumentValues &
    ILandallocationFormStatevalues &
    ILandAllocationValues &
    ISelectLandAllocationProps &
    ISelectThemeCityProps &
    IUnitProps &
    ILeaseTenureProps &
    ILeaseValues &
    IwitnessValues &
    IMileStoneDetailsProps &
    IMileStoneDetailsStateValues &
    IMilestoneDropDownProps &
    IRuleTypeValuesProps &
    IProjectValuesProps &
    ISourceValueProps &
    IConditionValueProps &
    IProjectRuleTypeProps &
    ICreateProposalProps &
    IRelationTypeProps &
    IWitnessDetailsProps &
    IWitnessDetailsStateValues &
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
    IDetailsFromMap &
    ISubmitProps
) => (
  <Formik
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.onSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<
        IUploadDocumentValues &
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
          IDetailsFromMap &
          ISubmitProps
      >
    ) => (
      <UploadDocumentInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          WarningPopUp: props.WarningPopUp,
          disableUploadButton: props.disableUploadButton,
          documentList2: props.documentList2,
          fileSize: props.fileSize,
          image1: props.image1,
          image2: props.image2,
          image3: props.image3,
          imageWarningPopUp: props.imageWarningPopUp,
          selectDepartmentList: props.selectDepartmentList,
          // tslint:disable-next-line:object-literal-sort-keys
          FirstName: props.FirstName,
          LastName: props.LastName,
          // tslint:disable-next-line:object-literal-sort-keys
          AuthorisedPersonEmailAddress: props.AuthorisedPersonEmailAddress,
          MobileNumber: props.MobileNumber,
          HouseNo: props.HouseNo,
          StreetName: props.StreetName,
          PhotoIdNumber: props.PhotoIdNumber,
          PhotoIdType: props.PhotoIdType
        }}
      />
    )}
  />
);

export default UploadDocumentForm;
