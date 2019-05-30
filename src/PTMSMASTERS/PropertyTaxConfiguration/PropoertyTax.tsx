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
  IBudgetValues,
  IDistrictValues,
  IPropertyTaxFormProps,
  IPropertyTaxTableStateProps,
  IPropertyValues,
  ISelectDepartmentvalues
} from "src/DefaultLayout/HomePage";
import * as yup from "yup";
import PropoertyTaxTable from "./PropoertyTaxTable";

const PropertyTaxinnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}: FormikProps<IPropertyTaxFormProps & IPropertyTaxTableStateProps>) => {
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
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="inner-header-titile">
          <h2>Property Tax Configuration</h2>
        </div>
        <div className="white-card background-white-card">
          <div className="child-card-two">
            <h4>
              District <span className="star">*</span>
            </h4>
            <FormControl>
              <Select
                value={values.Description}
                name="Description"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  handleChange(event);
                  values.handleDescriptionChange(event);
                }}
              >
                {values.selectDistrictValues &&
                  values.selectDistrictValues.map(
                    (e: IDistrictValues, id: number) => (
                      <MenuItem
                        key={id}
                        className="select-dropdown-bottom"
                        value={e.Description}
                      >
                        {e.Description}
                      </MenuItem>
                    )
                  )}
              </Select>
              <div className="error-msg">
                {" "}
                {!!touched.Description && errors.Description ? (
                  <div> District Is Required</div>
                ) : (
                  ""
                )}
              </div>
            </FormControl>
            {/* </div> */}
          </div>
          {/* <div className="first-container"> */}
          <div className="child-card-two">
            <h4>
              Propoerty Type <span className="star">*</span>
            </h4>
            <FormControl
              error={!!(touched.PropertyTypeId && errors.PropertyTypeId)}
            >
              <Select
                value={values.PropertyTypeId}
                name="PropertyTypeId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  handleChange(event);
                  values.handlePropertyTypeIdChange(event);
                }}
              >
                {values.selectPropertyTypeValues &&
                  values.selectPropertyTypeValues.map(
                    (e: IPropertyValues, id: number) => (
                      <MenuItem
                        key={id}
                        className="select-dropdown-bottom"
                        value={e.PropertyTypeId}
                      >
                        {e.PropertyTypeName}
                      </MenuItem>
                    )
                  )}
              </Select>
              <div className="error-msg">
                {" "}
                {!!touched.PropertyTypeId && errors.PropertyTypeId ? (
                  <div>PropertyTypeId Is Required</div>
                ) : (
                  ""
                )}
              </div>
            </FormControl>
          </div>
          {/* </div> */}
          {/* <div className="first-container"> */}
          <div className="child-card-two">
            <h4>
              Budget Year <span className="star">*</span>
            </h4>
            <FormControl error={!!(touched.BudgetId && errors.BudgetId)}>
              <Select
                value={values.BudgetId}
                name="BudgetId"
                // tslint:disable-next-line:jsx-no-lambda
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  handleChange(event);
                  values.handleBudgetIdChange(event, values);
                }}
              >
                {values.selectBudgetValues &&
                  values.selectBudgetValues.map(
                    (e: IBudgetValues, id: number) => (
                      <MenuItem
                        key={id}
                        className="select-dropdown-bottom"
                        value={e.BudgetId}
                      >
                        {e.BudgetYear}
                      </MenuItem>
                    )
                  )}
              </Select>
              <div className="error-msg">
                {" "}
                {!!touched.BudgetId && errors.BudgetId ? (
                  <div> BudgetId Is Required</div>
                ) : (
                  ""
                )}
              </div>
            </FormControl>
          </div>

          <div className="child-card-two select-date-bd">
            <h4 className="date-label">
              From Date <span className="star">*</span>
            </h4>
            <input
              className="select-date-two"
              type="date"
              name="FromDate"
              max="9999-12-31"
              // onChange={handleChange}
              onBlur={handleBlur}
              value={values.FromDate}
            />
            <div className="error-msg">
              {touched.FromDate && errors.FromDate && (
                <div> From Date Is Required</div>
              )}
            </div>
          </div>
          <div className="child-card-two select-date-bd">
            <h4 className="date-label">
              To Date<span className="star">*</span>
            </h4>
            <input
              className="select-date-two"
              max="9999-12-31"
              type="date"
              name="ToDate"
              // onChange={handleChange}
              onBlur={handleBlur}
              value={values.ToDate}
            />
            <div className="error-msg">
              {touched.ToDate && errors.ToDate && (
                <div> To Date Is Required</div>
              )}
            </div>
          </div>
          <div className="bottom-save-btn">
            <Button
              className="save-btn"
              // className="loading"
              type="submit"
            >
              Get Tax Details
            </Button>
          </div>
          {values.getTaxDetailsChange ? (
            <div className="group-cards-note">
              <div className="work-flow-grid">
                <div className="child-card-collapse">
                  <h4>
                    Value<span className="star">*</span>
                  </h4>
                  <TextField
                    type="number"
                    name="copiedValue"
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handleValueChange(event);
                    }}
                    onBlur={handleBlur}
                    value={values.copiedValue}
                  />
                </div>
                {/* <div className="error-msg">
            {touched.value && errors.value && <div> value Is Required</div>}
           </div> */}
                <div className="child-card-collapse">
                  <Button
                    className="copy-values-btn"
                    // className="loading"
                    type="button"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() =>
                      values.handleCopyValuesClick(values.copiedValue)
                    }
                  >
                    Copy Values
                  </Button>
                </div>

                <div className="child-card-collapse">
                  <h4>
                    Percentage Value <span className="star">*</span>
                  </h4>
                  <TextField
                    type="number"
                    name="percentageValue"
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(event);
                      values.handleIncreasePercentageChange(event);
                    }}
                    onBlur={handleBlur}
                    value={values.percentageValue}
                  />
                  {/* <div className="error-msg"> here
            {touched.percentageValue && errors.percentageValue && <div> percentageValue Is Required</div>}
          </div> */}
                </div>
                <div className="child-card-collapse">
                  <Button
                    className={
                      values.incresePercentageButton
                        ? "disable-btn"
                        : "save-btn"
                    }
                    // className="loading"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() =>
                      values.handleIncreasePercentageClick(
                        values.percentageValue,
                        values.copiedValue
                      )
                    }
                    type="button"
                    disabled={values.incresePercentageButton}
                  >
                    Increase Percentage from Previous Year
                  </Button>
                </div>
              </div>
              {/* <div className="table-div"> */}
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
                        <img src="/images/table-icon.png" />
                        Tax Configuration Details
                      </Typography>
                    </CardContent>
                    <PropoertyTaxTable
                      handlePropertyTaxValueChange={
                        values.handlePropertyTaxValueChange
                      }
                      page={values.page}
                      rowsPerPage={values.rowsPerPage}
                      count={values.count}
                      searchInput={values.searchInput}
                      onHandlePageChange={values.onHandlePageChange}
                      onHandleChangeRowsPerPage={
                        values.onHandleChangeRowsPerPage
                      }
                      propertyTaxTableList={values.propertyTaxTableList}
                      onHandleSearch={values.onHandleSearch}
                      rowCount={values.rowCount}
                      numSelected={values.numSelected}
                      selected={values.selected}
                      handleSelectAllClick={values.handleSelectAllClick}
                      handleSelect={values.handleSelect}
                    />
                  </Card>
                </div>
              </div>

              <div className="copy-values-div">
                <div className="forword-grid-div">
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
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => {
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
                <div className="comments">
                  <h4>
                    Comments <span className="star">*</span>
                  </h4>
                  <TextField
                    name="Comments"
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={event => {
                      handleChange(event);
                      values.handlePropertyTaxCommentsChange(event, values);
                    }}
                    onBlur={handleBlur}
                    value={values.Comments}
                  />
                  {/* <div className="error-msg">
            {touched.percentageValue && errors.percentageValue && <div> percentageValue Is Required</div>}
          </div> */}
                </div>
              </div>
              <div className="button-alignment">
                <div className="bottom-save-btn">
                  {UserId === 21 ? (
                    <Button
                      className="save-btn"
                      // className="loading"
                      type="button"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() =>
                        values.handlePropertyTaxApproveClick(values)
                      }
                    >
                      Approve
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button
                    className="save-btn"
                    // className="loading"
                    type="button"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => values.handlePropertyTaxDraftSave(values)}
                  >
                    Save
                  </Button>

                  <Button
                    className="save-btn"
                    // className="loading"
                    type="button"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() =>
                      values.handlePropertyTaxSubmitSavePopUp(values)
                    }
                  >
                    Submit
                  </Button>
                </div>
              </div>
              {
                <Dialog
                  open={values.WarningPopUp}
                  // tslint:disable-next-line:jsx-no-lambda
                  // onClose={() => values.onHandleReviewPopUpClose()}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    Please select atleast one of the property type
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
                        onClick={() =>
                          values.handlePropertyTaxSubmitSave(values)
                        }
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
                    Property Tax Configuration Submitted Successfully
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
};
const modelSchema = yup.object().shape({
  // tslint:disable-next-line:object-literal-sort-keys
  BudgetId: yup
    .number()
    .min(1)
    .required(),
  Description: yup
    .string()
    .min(1)
    .required(),
  PropertyTypeId: yup
    .number()
    .min(1)
    .required()
});
export const PropertyTaxForm = (
  props: IPropertyTaxFormProps & IPropertyTaxTableStateProps
) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.handlePropertyTaxSubmit}
    // tslint:disable-next-line:jsx-no-lambda
    render={(
      fprops: FormikProps<IPropertyTaxFormProps & IPropertyTaxTableStateProps>
    ) => (
      <PropertyTaxinnerForm
        {...fprops}
        values={{
          ...fprops.values,
          BudgetId: props.BudgetId,
          Description: props.Description,
          FromDate: props.FromDate,
          PropertyTypeId: props.PropertyTypeId,
          RequestId: props.RequestId,
          ToDate: props.ToDate,
          UserId: props.UserId,
          WarningPopUp: props.WarningPopUp,
          copiedValue: props.copiedValue,
          forwardOpen: props.forwardOpen,
          getTaxDetailsChange: props.getTaxDetailsChange,
          handleSelectDepartmentChange: props.handleSelectDepartmentChange,
          percentageValue: props.percentageValue,
          propertyTaxTableList: props.propertyTaxTableList,
          reviewOpen: props.reviewOpen,
          selectBudgetValues: props.selectBudgetValues,
          selectDistrictValues: props.selectDistrictValues,
          selectPropertyTypeValues: props.selectPropertyTypeValues,
          successPopUp: props.successPopUp
        }}
      />
    )}
  />
);
export default PropertyTaxForm;
