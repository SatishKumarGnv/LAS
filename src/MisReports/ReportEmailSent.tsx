// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";
import {
  IReportEmailSentStateValues,
  ISelectEmailModuleProps
} from "../Container/ReportEmailSentState";
// import { getSelectDepartmentValues } from "./LoginAuditTrailService";
const ReportEmailSentInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors
}: FormikProps<IReportEmailSentStateValues & ISelectEmailModuleProps>) => (
  <form onSubmit={handleSubmit}>
    <div className="white-card card-report">
      <FormControl className="select" required={true}>
        <h4>
          Email Application/Module Name <span className="star"> *</span>
        </h4>
        <Select
          placeholder="Select"
          inputProps={{
            id: "TemplateId",
            name: "TemplateId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={handleChange}
          value={values.TemplateId}
        >
          {values.selectEmailSentModuleValues.map((e: any) => (
            <MenuItem
              className="select-dropdown-bottom"
              key={e.TemplateId}
              value={e.TemplateId}
            >
              {e.TemplateName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="select" required={true}>
        <h4>
          Type Of Filter <span className="star"> *</span>
        </h4>
        <Select
          value={values.TypeOfFilter}
          onChange={handleChange}
          name="TypeOfFilter"
          placeholder="Select"
          inputProps={{
            id: "TypesOfFilter"
          }}
        >
          <MenuItem className="select-dropdown-bottom" value={1}>
            Current Month
          </MenuItem>
          <MenuItem className="select-dropdown-bottom" value={2}>
            Last Month
          </MenuItem>
          <MenuItem className="select-dropdown-bottom" value={3}>
            Last 3 Months
          </MenuItem>
          <MenuItem className="select-dropdown-bottom" value={4}>
            Last 6 Months
          </MenuItem>
          <MenuItem className="select-dropdown-bottom" value={5}>
            Current Year
          </MenuItem>
          <MenuItem className="select-dropdown-bottom" value={6}>
            Between Date Range
          </MenuItem>
        </Select>
      </FormControl>
      {values.TypeOfFilter === 6 ? (
        <div className="date-section">
          <div className="date-container">
            <label className="date-label">From Date</label>
            <div className="input-select-border">
              <input
                required={true}
                className="select-date"
                name="FromDate"
                type="date"
                defaultValue={values.FromDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="date-container">
            <label className="date-label">To Date</label>
            <div className="input-select-border">
              <input
                required={true}
                className="select-date"
                name="ToDate"
                type="date"
                defaultValue={values.ToDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="genarate-btn"
      >
        <img className="generate-img" src="/images/generat.png" />
        Generate Report
      </Button>
    </div>
  </form>
);
export const modelSchema = yup.object().shape({
  EmailApplicationModuleId: yup.number().required,
  fromDate: yup.date().required,
  toDate: yup.date().required,
  typesOfFilter: yup.number().required
});
export interface IReportEmailSentGenerateProps {
  onEmailSentReport(
    values: IReportEmailSentStateValues & ISelectEmailModuleProps
  ): void;
}
const ReportEmailSentForm = (
  props: IReportEmailSentGenerateProps &
    IReportEmailSentStateValues &
    ISelectEmailModuleProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      onSubmit={props.onEmailSentReport}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          IReportEmailSentStateValues & ISelectEmailModuleProps
        >
      ) => (
        <ReportEmailSentInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            selectEmailSentModuleValues: props.selectEmailSentModuleValues
          }}
        />
      )}
    />
  </div>
);
export default ReportEmailSentForm;
