import FormControl from "@material-ui/core/FormControl";

import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

import { Formik, FormikProps } from "formik";
import * as React from "react";

import { FormHelperText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import {
  IDocumentMappingProps,
  IDocumentmappingValues,
  IDocumentProps,
  IDocumentPropValues,
  IProcessTypeProps,
  IProcessValues
} from "../DefaultLayout/HomePage";

const DocumentMappingInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<
  IDocumentmappingValues &
    IDocumentMappingProps &
    IProcessTypeProps &
    IProcessValues &
    IDocumentPropValues &
    IDocumentProps
>) => {
  return (
    <div className="innerpage-container">
      <div className="inner-header-titile">
        {/* <img src="/images/login-audit-icon.png" /> */}
        <h2>Document Mapping</h2>
      </div>

      <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
        <div className="white-card work-card ">
          <div className="child-card">
            <h4>Land Allocation To</h4>
            <FormControl
              error={!!(touched.AllocationId && errors.AllocationId)}
            >
              <Select
                name="AllocationId"
                value={values.AllocationId}
                inputProps={{
                  id: "AllocationId",
                  name: "AllocationId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                }}
              >
                {values.selectDocumentMappingValues.map((e: any) => (
                  <MenuItem
                    key={e.AllocationId}
                    className="select-dropdown-bottom"
                    value={e.AllocationId}
                  >
                    {e.AllocationName}
                  </MenuItem>
                ))}
              </Select>
              {!!touched.AllocationId && errors.AllocationId && (
                <FormHelperText className="error-msg">
                  Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="child-card">
            <h4>Process Type</h4>

            <FormControl error={!!(touched.ProcessId && errors.ProcessId)}>
              <Select
                name="ProcessId"
                value={values.ProcessId}
                inputProps={{
                  id: "ProcessId",
                  name: "ProcessId"
                }}
                // tslint:disable-next-line:jsx-no-lambda
                onChange={event => {
                  handleChange(event);
                  values.handleSelectProcessChange(values.AllocationId, event);
                }}
              >
                {values.selectProcessValues.map((e: any) => (
                  <MenuItem
                    key={e.Id}
                    className="select-dropdown-bottom"
                    value={e.Id}
                  >
                    {e.ApplicationTypeName}
                  </MenuItem>
                ))}
              </Select>
              {!!touched.ProcessId && errors.ProcessId && (
                <FormHelperText className="error-msg">
                  Process Type Is Required Field
                </FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="work-flow-grid ">
            <div className="child-card">
              <h4>Document Type</h4>
              <FormControl>
                <select
                  className="activities-list"
                  name="document"
                  value={values.document.map(x => x.PhotoIdTypeName)}
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleDocumentTypeChange(event);
                  }}
                  multiple={true}
                >
                  {values.documentList
                    .map((x: IDocumentPropValues) => x.PhotoIdTypeName)
                    .map((name, id) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                </select>
              </FormControl>
            </div>

            <br />
            <div className="sub-card sub-card activities-list child-card">
              <Button
                className="work-btn"
                type="button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() =>
                  values.handleSpecificSelectClick(values.documentList)
                }
              >
                <img src="/images/get.png" />
              </Button>

              <Button
                className="work-btn"
                type="button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handleAllSelectClick()}
              >
                <img src="/images/gettwo.png" />
              </Button>

              <Button
                className="work-btn"
                type="button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => values.handleAllLeftSelectClick()}
              >
                <img src="/images/leftgettwo.png" />
              </Button>

              <Button
                className="work-btn"
                type="button"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={event =>
                  values.handleLeftSelectClick(values.documentList2)
                }
              >
                <img src="/images/left.png" />
              </Button>
            </div>
            <br />

            <div className="child-card">
              <h4>Document Type</h4>
              <FormControl>
                <select
                  className="activities-list"
                  name="document2"
                  // tslint:disable-next-line:jsx-no-lambda
                  onChange={event => {
                    handleChange(event);
                    values.handleDocumentType2Change(event);
                  }}
                  multiple={true}
                  value={values.document2.map(x => x.PhotoIdTypeName)}
                >
                  {values.documentList2
                    .map((x: IDocumentPropValues) => x.PhotoIdTypeName)
                    .map((name, id) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                </select>
              </FormControl>
            </div>
          </div>
          <div className="bottom-save-btn">
            <Button type="submit" className="save-btn">
              SUBMIT
            </Button>

            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={(event: any) => values.handleCancelClick(event)}
              type="button"
              className="save-btn"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export const modelSchema = yup.object().shape({
  AllocationId: yup.number().required(),
  ProcessId: yup.number().required()
});

export const DocumentMappingForm = (
  props: IDocumentmappingValues &
    IDocumentMappingProps &
    IProcessTypeProps &
    IProcessValues &
    IDocumentPropValues &
    IDocumentProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props,
        AllocationId: props.AllocationId,
        ProcessId: props.ProcessId
      }}
      validationSchema={modelSchema}
      onSubmit={props.handleSubmit}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<
          IDocumentmappingValues &
            IDocumentMappingProps &
            IProcessTypeProps &
            IProcessValues &
            IDocumentPropValues &
            IDocumentProps
        >
      ) => (
        <DocumentMappingInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            selectDocumentMappingValues: props.selectDocumentMappingValues,
            selectProcessValues: props.selectProcessValues,
            // tslint:disable-next-line:object-literal-sort-keys
            documentList: props.documentList,
            document: props.document,
            document2: props.document2,
            documentList2: props.documentList2,
            handleDocumentTypeChange: props.handleDocumentTypeChange,
            handleDocumentType2Change: props.handleDocumentType2Change
          }}
        />
      )}
    />
  </div>
);

export default DocumentMappingForm;
