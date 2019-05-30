import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";

import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
  IProcessFeeProps,
  ISelectDepartmentvalues
} from "src/DefaultLayout/HomePage";
import NewPropertyRegistrationReviewForm from "./NewPropertyRegistrationReviewForm";

const ProcessFeeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IProcessFeeProps>) => {
  const item: any = localStorage.getItem("userDetails");
  let user: any;
  let UserId: any;
  // let RoleId: any;
  if (item) {
    user = JSON.parse(item);
    // RoleId = user !== null || user !== undefined ? user.model.RoleId: 0;
    UserId = user !== null || user !== undefined ? user.model.UserId : 0;
  }
  return (
    <div className="innerpage-container">
      <form onSubmit={handleSubmit}>
        <div className="inner-header-titile">
          <h2>Process Fee</h2>
        </div>
        <div className="white-card background-white-card">
          <div className="payment-border">
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Payment Mode</FormLabel>
              <RadioGroup
                // aria-label="Gender"
                name="paymentMode"
                //  className={classes.group}
                value={values.paymentMode}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Cash Payment"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Net Banking"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Credit Card"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <br />
          <div className="forword-grid">
            <label className="select-label-two">Forward To : </label>

            <FormControl error={!!(touched.UserId && errors.UserId)}>
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
                  {values.ptmsSelectDepartmentList &&
                    values.ptmsSelectDepartmentList.map(
                      (x: ISelectDepartmentvalues, id: number) => (
                        <MenuItem
                          className="select-dropdown-bottom"
                          key={id}
                          value={x.DepartmentId}
                        >
                          {x.DepartmentName} - {x.UserName}
                        </MenuItem>
                      )
                    )}
                </Select>
                {!!(touched.UserId && errors.UserId) && (
                  <FormHelperText className="error-msg">
                    Department User Is Required Field
                  </FormHelperText>
                )}
              </div>
            </FormControl>
          </div>
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
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.handleProcessFeeSaveAsDraftClick(values)}
          >
            Save As Draft
          </Button>
          <Button
            className="save-btn"
            // className="loading"
            type="submit"
            // tslint:disable-next-line:jsx-no-lambda
            // onClick={() => values.onHandleProcessFeeSubmitPopUp(values)}
          >
            Submit
          </Button>
          {UserId === 21 ? (
            <Button
              className="save-btn"
              // className="loading"
              type="button"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => values.onHandleProcessFeeSubmit(values)}
            >
              Approve
            </Button>
          ) : (
            <div />
          )}

          {
            <Dialog
              open={values.forwardOpen}
              // tslint:disable-next-line:jsx-no-lambda
              //  onClose={() => values.onHandleApprovePopUpClose()}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title" className="popup-title">
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
                    onClick={() => values.onHandleProcessFeeSubmit(values)}
                    color="primary"
                  >
                    YES
                  </Button>
                  <Button
                    className="main-btn"
                    type="button"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => values.onHandlePopUpClose()}
                    color="secondary"
                  >
                    No
                  </Button>
                </div>
              </DialogActions>
            </Dialog>
          }
          {
            <Dialog
              open={values.assessmentReviewPopUp}
              // tslint:disable-next-line:jsx-no-lambda
              // onClose={() => values.onHandleReviewPopUpClose()}
              aria-labelledby="responsive-dialog-title"
            >
              {/* <DialogTitle id="responsive-dialog-title">
             Full Data (Preview)
           </DialogTitle> */}

              <DialogActions>
                <div>
                  <NewPropertyRegistrationReviewForm ReviewValues={values} />
                </div>
              </DialogActions>
            </Dialog>
          }
          {
            <Dialog
              className="map-view"
              open={values.popUpOpen}
              aria-labelledby="responsive-dialog-title"
            >
              <div>
                <DialogActions>
                  <iframe
                    src={`http://${values.AssessmentPdfPath}`}
                    height="900"
                    width="2000"
                    // tslint:disable-next-line:jsx-no-lambda
                    // dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}
                  />
                  <div>
                    <Button
                      className="main-btn skip-map-btn"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => values.handleAssessmentClose()}
                    >
                      ok
                    </Button>
                  </div>
                </DialogActions>
              </div>
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
                  onClick={() => values.onHandlePopUpClose()}
                >
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          }
        </div>
      </form>
    </div>
  );
};

const modelSchema = yup.object().shape({
  UserId: yup
    .number()
    .min(1)
    .required(),
  paymentMode: yup.string().required()
});

const ProcessFeeForm = (props: IProcessFeeProps) => (
  <Formik
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.onHandleProcessFeeSubmitPopUp}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<IProcessFeeProps>) => (
      <ProcessFeeInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          AssessmentPdfPath: props.AssessmentPdfPath,
          applicationSelectDepartmentName:
            props.applicationSelectDepartmentName,
          forwardOpen: props.forwardOpen,
          // tslint:disable-next-line:object-literal-sort-keys
          assessmentReviewPopUp: props.assessmentReviewPopUp,
          onHandleProcessFeeSubmitPopUp: props.onHandleProcessFeeSubmitPopUp,
          popUpOpen: props.popUpOpen,
          reviewOpen: props.reviewOpen,
          ptmsSelectDepartmentList: props.ptmsSelectDepartmentList,
          onHandleProcessFeeSubmit: props.onHandleProcessFeeSubmit
        }}
      />
    )}
  />
);

export default ProcessFeeForm;
