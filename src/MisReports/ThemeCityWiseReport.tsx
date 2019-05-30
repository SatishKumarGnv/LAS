import * as React from "react";
import * as yup from "yup";

import { Formik, FormikProps } from "formik";

// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// import Typography from "@material-ui/core/Typography";

import {
  ICityValues,
  ISelectThemeCityProps,
  IThemeCityReportWiseProps
} from "../Container/ThemeCityReportState";
// import { getSelectDepartmentValues } from "./LoginAuditTrailService";

const ThemeCityInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors
}: FormikProps<ICityValues & ISelectThemeCityProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className="city-card">
      <FormControl className="select" required={true}>
        <h4>
          City Type <span className="star">*</span>
        </h4>
        <Select
          placeholder="Select"
          inputProps={{
            id: "TownshipId",
            name: "TownshipId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            handleChange(event);
            values.handleClick(event);
          }}
          value={values.TownshipId}
        >
          <MenuItem value={0}>All</MenuItem>
          {values.selectThemeCityTypeValues.map((e: ICityValues) => (
            <MenuItem key={e.TownshipId} value={e.TownshipId}>
              {e.TownshipName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  </form>
);

export const modelSchema = yup.object().shape({
  EmailApplicationModuleId: yup.number().required,
  fromDate: yup.date().required,
  toDate: yup.date().required,
  typesOfFilter: yup.number().required
});

export interface ISelectThemeCityReportProps {
  onThemeCitySubmit(values: ICityValues): void;
}
const ThemeCityReportForm = (
  props: IThemeCityReportWiseProps &
    ISelectThemeCityReportProps &
    ICityValues &
    ISelectThemeCityProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      onSubmit={props.onThemeCitySubmit}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<ICityValues & ISelectThemeCityProps>) => (
        <ThemeCityInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            selectThemeCityTypeValues: props.selectThemeCityTypeValues
          }}
        />
      )}
    />
  </div>
);

export default ThemeCityReportForm;
