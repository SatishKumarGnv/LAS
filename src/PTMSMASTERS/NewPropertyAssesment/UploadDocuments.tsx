import FormControl from "@material-ui/core/FormControl";

import { Dialog, FormHelperText, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import MobileStepper from "@material-ui/core/MobileStepper";

import Select from "@material-ui/core/Select";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IGenderValues,
  INewPropertyUploadDocumentProps
} from "src/DefaultLayout/HomePage";
// import { host } from "src/Api_Integration/TabsSearchService";
import * as yup from "yup";

export interface IPropertyAssessmentDocumentTypeValues {
  readonly ID: number;
  readonly DocumentTypeDesc: string;
}

const NewPropertyUploadDocumentInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<INewPropertyUploadDocumentProps>) => (
  <div className="innerpage-container">
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="inner-header-titile">
        <h2>Upload Documents</h2>
      </div>
      <div>
        <div className="white-card background-white-card">
          <div className="doc-card">
            <h4>
              Document Type <span className="star"> *</span>
            </h4>
            <FormControl
              error={
                !!(
                  touched.PropertyAssessmentDocumentTypeId &&
                  errors.PropertyAssessmentDocumentTypeId
                )
              }
            >
              <Select
                value={values.PropertyAssessmentDocumentTypeId}
                name="PropertyAssessmentDocumentTypeId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  handleChange(event);
                }}
              >
                {values.PropertyAssessmentDocumentTypeValues &&
                  values.PropertyAssessmentDocumentTypeValues.map(
                    (e: IPropertyAssessmentDocumentTypeValues, id: number) => (
                      <MenuItem
                        key={id}
                        className="select-dropdown-bottom"
                        value={e.ID}
                      >
                        {e.DocumentTypeDesc}
                      </MenuItem>
                    )
                  )}
              </Select>
              {!!touched.PropertyAssessmentDocumentTypeId &&
              errors.PropertyAssessmentDocumentTypeId ? (
                <FormHelperText className="error-msg">
                  Select Document Type Is Required Field
                </FormHelperText>
              ) : (
                ""
              )}
            </FormControl>
          </div>
          <div className="doc-card">
            <img
              className="Upload-grid-img"
              id="imageOfUser"
              src={values.selectFile}
            />
            <input
              accept="image/png, image/jpeg"
              id="selectFile"
              type="file"
              placeholder="Select File"
              name="selectFile"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={event => {
                values.handleSelectFileUpload(event);
              }}
            />
            <div className="image-upload-btn">
              <Button
                type="button"
                className="save-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() =>
                  values.handlePropertyAssessmentUpload(
                    values.PropertyAssessmentDocumentTypeId
                  )
                }
              >
                Upload
              </Button>
            </div>
          </div>

          {
            <Dialog
              open={values.UploadPopUp}
              // onClose={props.onHandleDeActivatePopUpClose}
              aria-labelledby="simple-dialog-title"
            >
              <div className="pop-up">
                <h3>Image Uploaded Successfully</h3>
                <div className="popup-bottom-btn ">
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => values.handleUploadPopUpClose()}
                  >
                    Ok
                  </Button>
                </div>
              </div>
            </Dialog>
          }
          <div className="DocumentTypeBorder">
            <div className="doc-card">
              <h4>Document Type</h4>
              <FormControl
                error={
                  !!(
                    touched.NewPropertyDocumentTypeId &&
                    errors.NewPropertyDocumentTypeId
                  )
                }
              >
                <Select
                  value={values.NewPropertyDocumentTypeId}
                  name="NewPropertyDocumentTypeId"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    handleChange(event);
                  }}
                >
                  {values.NewPropertyDocumentTypeValues &&
                    values.NewPropertyDocumentTypeValues.map(
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
                {!!touched.NewPropertyDocumentTypeId &&
                errors.NewPropertyDocumentTypeId ? (
                  <FormHelperText className="error-msg">
                    Select Document Type Is Required Field
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            </div>
            {values.NewPropertyDocumentTypeId === 136 ? (
              <div className="first-container">
                <div className="child-card-collapse">
                  <h4>
                    Certificate No <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="CertificateNo"
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.CertificateNo}
                  />
                  <div className="error-msg">
                    {touched.CertificateNo && errors.CertificateNo && (
                      <div>Certificate No Is Required</div>
                    )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Certificate Date <span className="star"> *</span>
                  </h4>

                  <TextField
                    name="CertificateDate"
                    type="date"
                    value={values.CertificateDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="error-msg">
                    {touched.CertificateDate && errors.CertificateDate && (
                      <div>Enter Valid Certificate Date</div>
                    )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    MRO Proceeding Number <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="MROProceedingNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.MROProceedingNumber}
                  />
                  <div className="error-msg">
                    {touched.MROProceedingNumber &&
                      errors.MROProceedingNumber && (
                        <div>Enter Valid MRO Proceeding Number</div>
                      )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Number <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="RegisteredDocumentNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentNumber}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentNumber &&
                      errors.RegisteredDocumentNumber && (
                        <div>Registered Document Number Is Required</div>
                      )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Date <span className="star"> *</span>
                  </h4>
                  <TextField
                    type="date"
                    name="RegisteredDocumentDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentDate}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentDate &&
                      errors.RegisteredDocumentDate && (
                        <div>Registered Document Date Is Required</div>
                      )}
                  </div>
                </div>
              </div>
            ) : values.NewPropertyDocumentTypeId === 137 ||
              values.NewPropertyDocumentTypeId === 138 ? (
              <div className="first-container">
                <div className="child-card-collapse">
                  <h4>
                    Deed Number <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="DeedNumber"
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                    }}
                    onBlur={handleBlur}
                    value={values.DeedNumber}
                  />
                  <div className="error-msg">
                    {touched.DeedNumber && errors.DeedNumber && (
                      <div>Deed Number Is Required</div>
                    )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Deed Date <span className="star"> *</span>
                  </h4>

                  <TextField
                    type="date"
                    name="DeedDate"
                    value={values.DeedDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="error-msg">
                    {touched.DeedDate && errors.DeedDate && (
                      <div>Enter Valid Deed Date</div>
                    )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Number <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="RegisteredDocumentNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentNumber}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentNumber &&
                      errors.RegisteredDocumentNumber && (
                        <div>Registered Document Number Is Required</div>
                      )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Date <span className="star"> *</span>
                  </h4>
                  <TextField
                    type="date"
                    name="RegisteredDocumentDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentDate}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentDate &&
                      errors.RegisteredDocumentDate && (
                        <div>Registered Document Date Is Required</div>
                      )}
                  </div>
                </div>
              </div>
            ) : values.NewPropertyDocumentTypeId === 139 ? (
              <div className="first-container">
                <div className="child-card-collapse">
                  <h4>
                    Decreer Number <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="DecreeNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.DecreeNumber}
                  />
                  <div className="error-msg">
                    {touched.DecreeNumber && errors.DecreeNumber && (
                      <div>Enter Valid Decree Number</div>
                    )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Decree Date <span className="star"> *</span>
                  </h4>
                  <TextField
                    type="date"
                    name="DecreeDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.DecreeDate}
                  />
                  <div className="error-msg">
                    {touched.DecreeDate && errors.DecreeDate && (
                      <div>Decree Date Is Required</div>
                    )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Number <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="RegisteredDocumentNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentNumber}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentNumber &&
                      errors.RegisteredDocumentNumber && (
                        <div>Registered Document Number Is Required</div>
                      )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Date <span className="star"> *</span>
                  </h4>
                  <TextField
                    type="date"
                    name="RegisteredDocumentDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentDate}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentDate &&
                      errors.RegisteredDocumentDate && (
                        <div>Registered Document Date Is Required</div>
                      )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Court Name <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="CourtName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.CourtName}
                  />
                  <div className="error-msg">
                    {touched.CourtName && errors.CourtName && (
                      <div>Court Name Is Required</div>
                    )}
                  </div>
                </div>
              </div>
            ) : values.NewPropertyDocumentTypeId === 140 ? (
              <div className="first-container">
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Number <span className="star"> *</span>
                  </h4>
                  <TextField
                    name="RegisteredDocumentNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentNumber}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentNumber &&
                      errors.RegisteredDocumentNumber && (
                        <div>Registered Document Number Is Required</div>
                      )}
                  </div>
                </div>
                <div className="child-card-collapse">
                  <h4>
                    Registered Document Date <span className="star"> *</span>
                  </h4>
                  <TextField
                    type="date"
                    name="RegisteredDocumentDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.RegisteredDocumentDate}
                  />
                  <div className="error-msg">
                    {touched.RegisteredDocumentDate &&
                      errors.RegisteredDocumentDate && (
                        <div>Registered Document Date Is Required</div>
                      )}
                  </div>
                </div>
              </div>
            ) : values.NewPropertyDocumentTypeId === 141 ? (
              <div />
            ) : (
              <div />
            )}
          </div>

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
            >
              Save & Continue
            </Button>
          </div>
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

const modelSchema = yup.object().shape({
  NewPropertyDocumentTypeId: yup
    .number()
    .min(1)
    .required(),
  PropertyAssessmentDocumentTypeId: yup
    .number()
    .min(1)
    .required(),
  // tslint:disable-next-line:object-literal-sort-keys
  CertificateNo: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 136,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  CertificateDate: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 136,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  MROProceedingNumber: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 136,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),

  DeedNumber: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 137 || val === 138,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  DeedDate: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 137 || val === 138,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  RegisteredDocumentDate: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val =>
        val === 136 || val === 137 || val === 138 || val === 139 || val === 140,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  RegisteredDocumentNumber: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val =>
        val === 136 || val === 137 || val === 138 || val === 139 || val === 140,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  DecreeNumber: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 139,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  DecreeDate: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 139,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    }),
  CourtName: yup
    .string()
    .notRequired()
    .when("NewPropertyDocumentTypeId", {
      is: val => val === 139,
      then: yup.string().required(),
      // tslint:disable-next-line:object-literal-sort-keys
      otherwise: yup.string().notRequired()
    })
});

export const NewPropertyUploadDocumentForm = (
  props: INewPropertyUploadDocumentProps
) => (
  <Formik
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.onHandleNewPropertyUplaodDocSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<INewPropertyUploadDocumentProps>) => (
      <NewPropertyUploadDocumentInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          selectFile: props.selectFile,
          // tslint:disable-next-line:object-literal-sort-keys
          NewPropertyDocumentTypeValues: props.NewPropertyDocumentTypeValues,
          PropertyAssessmentDocumentTypeValues:
            props.PropertyAssessmentDocumentTypeValues,
          UploadPopUp: props.UploadPopUp,
          handleSelectFileUpload: props.handleSelectFileUpload
        }}
      />
    )}
  />
);

export default NewPropertyUploadDocumentForm;
