import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  IAddUnitConversionProps,
  IAddUnitConversionValues
} from "src/Container/UnitConversionState";
import * as yup from "yup";

const AddUnitConversionTypeInnerForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit
}: FormikProps<IAddUnitConversionValues & IAddUnitConversionProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <h4>
        {" "}
        Land Area Type Name <span className="star">*</span>
      </h4>

      <TextField
       
        name="newUnitName"
        value={values.newUnitName}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={event => {
          handleChange(event);
          values.onHandleAddChange(event);
        }}
        margin="normal"
      />
      <div className="error-msg">
        {touched.newUnitName && errors.newUnitName && (
          <div>Unit Name Is Required</div>
        )}
      </div>
      <br />
      <Button
        className="main-btn"
        color="secondary"
        onClick={values.onHandleAddPopUpClose}
      >
        Cancel
      </Button>
      <Button
        className="main-btn"
        color="primary"
        type="submit"
        // tslint:disable-next-line:jsx-no-lambda
        // onClick={() =>
        //   props.onHandleAddSave(
        //     props.UnitTypeMasterList.length + 1,
        //     props.newUnitName
        //   )
        // }
      >
        Save
      </Button>
    </div>
  </form>
);
export const modelSchema = yup.object().shape({
  newUnitName: yup.string().required()
});

const AddUnitConversionTypeForm = (
  props: IAddUnitConversionValues & IAddUnitConversionProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IAddUnitConversionValues & IAddUnitConversionProps>
      ) => (
        <AddUnitConversionTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            UnitConvertionId: props.UnitConvertionId,
            UnitTypeMasterList: props.UnitTypeMasterList,
            newUnitName: props.newUnitName,
            onHandleAddChange: props.onHandleAddChange,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpClose: props.onHandleAddPopUpClose,
            onHandleAddSave: props.onHandleAddSave
          }}
        />
      )}
    />
  </div>
);

export default AddUnitConversionTypeForm;
