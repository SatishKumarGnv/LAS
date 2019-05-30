import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// tslint:disable-next-line:ordered-imports
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";
// import Typography from "@material-ui/core/Typography";
import {
  ILoginAuditTrailStateValues,
  ISelectDepartmentProps
} from "../Container/LoginAuditTrailState";
// import { getSelectDepartmentValues } from "./LoginAuditTrailService";
const LoginAuditInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors
}: FormikProps<ILoginAuditTrailStateValues & ISelectDepartmentProps>) => (
  // tslint:disable-next-line:jsx-no-lambda
  <form onSubmit={handleSubmit}>
    <div className="white-card card-report">
      <FormControl className="select" required={true}>
        <h4>
          Select Department<span className="star"> *</span>
        </h4>
        <Select
          placeholder="Select"
          inputProps={{
            id: "DepartmentId",
            name: "DepartmentId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            handleChange(event);
          }}
          value={values.DepartmentId}
        >
          {values.selectDepartmentArrayValues.map((e: any) => (
            <MenuItem
              className="select-dropdown-bottom"
              key={e.DepartmentId}
              value={e.DepartmentId}
            >
              {e.DepartmentName}
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
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            handleChange(event);
          }}
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
                max="9999-12-31"
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
      {/* {values.TypeOfFilter === 3 ? (subMonths(new Date(),3)
}   */}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="genarate-btn"
        // tslint:disable-next-line:jsx-no-lambda
        // onClick={event => values.onHandleGenerateReport(event)}
      >
        <img className="generate-img" src="/images/generat.png" />
        Generate Report
      </Button>
    </div>
  </form>
);
export const modelSchema = yup.object().shape({
  fromDate: yup.date().required,
  selectDepartment: yup.number().required,
  toDate: yup.date().required,
  typesOfFilter: yup.number().required
});
// export interface ILoginAuditTrailProps {
//   onGenerateReport(
//     values: ILoginAuditTrailStateValues & ISelectDepartmentProps
//   ): void;
// }
const LoginAuditTrailForm = (
  props: //  ILoginAuditTrailProps &
  ILoginAuditTrailStateValues & ISelectDepartmentProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      onSubmit={props.onHandleGenerateReport}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          ILoginAuditTrailStateValues & ISelectDepartmentProps
        >
      ) => (
        <LoginAuditInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            FromDate: props.FromDate,
            ToDate: props.ToDate,
            selectDepartmentArrayValues: props.selectDepartmentArrayValues
          }}
        />
      )}
    />
  </div>
);
export default LoginAuditTrailForm;
