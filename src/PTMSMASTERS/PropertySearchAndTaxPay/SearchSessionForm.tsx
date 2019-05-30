import { FormControl, MenuItem, Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IDistrictValues } from "src/DefaultLayout/HomePage";
import * as yup from "yup";

export interface ISearchSessionProps {
  readonly OwnerName: string;
  readonly Description: string;
  readonly MunciId: number;
  readonly MandalId: number;
  readonly TownId: number;
  readonly selectDistrictValues: ReadonlyArray<IDistrictValues>;
  readonly selectMunciValues: ReadonlyArray<IDistrictValues>;
  readonly selectMandalValues: ReadonlyArray<IDistrictValues>;
  readonly selectTownValues: ReadonlyArray<IDistrictValues>;
  handleSeachSessionSumbit(event: ISearchSessionProps): void;
  handleMuncipalityPropertyChange(event: any): void;
  handleDescriptionChange(event: any): void;
  handleMandalChange(event: any): void;
  handleSearchSessionReset(): void;
}

const SearchSessionInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<ISearchSessionProps>) => (
  <div>
    <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
      <div className="inner-header-titile">
        <h4>Search by one of these options.</h4>
        <h2>Option 1: Mailing Address</h2>
      </div>
      <div className="white-card">
        {/* <div className="child-card">
       <div className="first-container"> */}
        <div className="child-card-two">
          <h4>
            District <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.Description && errors.Description)}>
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
                <div>District Is Required</div>
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
            Muncipality or Corporation <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.MunciId && errors.MunciId)}>
            <Select
              value={values.MunciId}
              name="MunciId"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleMuncipalityPropertyChange(event);
              }}
            >
              {values.selectMunciValues &&
                values.selectMunciValues.map(
                  (e: IDistrictValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.MunciId}
                    >
                      {e.Description}
                    </MenuItem>
                  )
                )}
            </Select>
            <div className="error-msg">
              {" "}
              {!!touched.MunciId && errors.MunciId ? (
                <div>Muncipality/Corporation Is Required</div>
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
            Mandal <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.MandalId && errors.MandalId)}>
            <Select
              value={values.MandalId}
              name="MandalId"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
                values.handleMandalChange(event);
              }}
            >
              {values.selectMandalValues &&
                values.selectMandalValues.map(
                  (e: IDistrictValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.MandalId}
                    >
                      {e.Description}
                    </MenuItem>
                  )
                )}
            </Select>
            <div className="error-msg">
              {" "}
              {!!touched.MandalId && errors.MandalId ? (
                <div> Mandal Is Required</div>
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
            Township <span className="star">*</span>
          </h4>
          <FormControl error={!!(touched.TownId && errors.TownId)}>
            <Select
              value={values.TownId}
              name="TownId"
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                handleChange(event);
              }}
            >
              {values.selectTownValues &&
                values.selectTownValues.map(
                  (e: IDistrictValues, id: number) => (
                    <MenuItem
                      key={id}
                      className="select-dropdown-bottom"
                      value={e.TownId}
                    >
                      {e.Description}
                    </MenuItem>
                  )
                )}
            </Select>
            <div className="error-msg">
              {" "}
              {!!touched.TownId && errors.TownId ? (
                <div> Township Is Required</div>
              ) : (
                ""
              )}
            </div>
          </FormControl>
        </div>
        {/* </div> */}
        <div className="child-card-two">
          <h4>
            Name Of The Owner <span className="star">*</span>
          </h4>
          <TextField
            name="OwnerName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.OwnerName}
          />
          <div className="error-msg">
            {touched.OwnerName && errors.OwnerName && (
              <div> OwnerName Is Required</div>
            )}
          </div>
        </div>

        <div className="bottom-save-btn">
          <Button
            className="save-btn"
            // className="loading"
            type="submit"
          >
            Begin Search
          </Button>
          <Button
            className="save-btn"
            // className="loading"
            type="reset"
          >
            New Search Session
          </Button>
        </div>
      </div>
    </form>
  </div>
);

const modelSchema = yup.object().shape({
  // tslint:disable-next-line:object-literal-sort-keys
  Description: yup
    .string()
    .min(1)
    .required(),
  MandalId: yup
    .number()
    .min(1)
    .required(),
  MunciId: yup
    .number()
    .min(1)
    .required(),
  OwnerName: yup.string().required(),

  TownId: yup
    .number()
    .min(1)
    .required()
});
export const SearchSessionForm = (props: ISearchSessionProps) => (
  <Formik
    enableReinitialize={true}
    initialValues={{
      ...props
    }}
    validationSchema={modelSchema}
    onSubmit={props.handleSeachSessionSumbit}
    onReset={props.handleSearchSessionReset}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<ISearchSessionProps>) => (
      <SearchSessionInnerForm
        {...fprops}
        values={{
          ...fprops.values,
          selectDistrictValues: props.selectDistrictValues,
          selectMunciValues: props.selectMunciValues
        }}
      />
    )}
  />
);
export default SearchSessionForm;
