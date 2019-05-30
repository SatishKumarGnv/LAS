import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";
import {
  IAddLandAreaProps,
  IAddLandAreaValues
} from "../../Container/LandAreaUnitsState";

const AddLandAreaTypeInnerForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleReset
}: FormikProps<IAddLandAreaValues & IAddLandAreaProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    <div>
      <h4>
        Land Area Unit Name<span className="star">*</span>
      </h4>
      <TextField
        name="landAreaName"
        value={values.landAreaName}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={event => {
          handleChange(event);
          values.onHandleAddChange(event);
        }}
        margin="normal"
      />
      <div className="error-msg">
        {touched.landAreaName && errors.landAreaName && (
          <div>Land Area Name Is Required</div>
        )}
      </div>
      <br />
      <div className="popup-bottom-btn">
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
          //     props.LandAreaList.length + 1,
          //     props.landAreaName
          //   )
          // }
        >
          Save
        </Button>
      </div>
    </div>
  </form>
);

export const modelSchema = yup.object().shape({
  landAreaName: yup.string().required()
});

const AddlandAreaTypeForm = (props: IAddLandAreaValues & IAddLandAreaProps) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSave}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddLandAreaValues & IAddLandAreaProps>) => (
        <AddLandAreaTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            LandAreaList: props.LandAreaList,
            id: props.id,
            landAreaName: props.landAreaName,
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

export default AddlandAreaTypeForm;
