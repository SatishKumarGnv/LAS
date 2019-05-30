import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import * as React from "react";
import {
  IAddAminitiesProps,
  IAddAminitiesValues
} from "src/DefaultLayout/HomePage";

const AddDocumentTypeInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched
}: FormikProps<IAddAminitiesValues & IAddAminitiesProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    {/* <div className="white-card-form"> */}
    <div>
      <div className="child-card">
        <h4>
          Amenity Name <span className="star">*</span>{" "}
        </h4>
        <TextField
          name="newAminityName"
          // required={true}

          value={values.newAminityName}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            handleChange(event);
            values.onHandleAddChangeAminity(event);
          }}
          margin="normal"
        />
        <div className="error-msg">
          {touched.newAminityName && errors.newAminityName && (
            <div>Amenity Name Is Required Field</div>
          )}
        </div>
      </div>
      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          color="secondary"
          onClick={values.onHandleAddPopUpCloseAminity}
        >
          Cancel
        </Button>
        <Button
          className="main-btn"
          color="primary"
          type="submit"
          // tslint:disable-next-line:jsx-no-lambda
          // onClick={() =>
          //   values.onHandleAddSave(
          //     values.documentTypeMasterList.length + 1,
          //     values.newDocumentName
          //   )
          // }
        >
          Save
        </Button>
      </div>
    </div>
    {/* </div> */}
  </form>
);

export const modelSchema = yup.object().shape({
  newAminityName: yup.string().required()
});

const AddAminityTypeForm = (
  props: IAddAminitiesValues & IAddAminitiesProps
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSaveAminity}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IAddAminitiesValues & IAddAminitiesProps>
      ) => (
        <AddDocumentTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            AmenitiesId: props.AmenitiesId,
            documentTypeMasterList: props.documentTypeMasterList,
            newAminityName: props.newAminityName,
            onHandleAddChangeAminity: props.onHandleAddChangeAminity,
            onHandleAddPopUpAminity: props.onHandleAddPopUpAminity,
            onHandleAddPopUpCloseAminity: props.onHandleAddPopUpCloseAminity,
            onHandleAddSaveAminity: props.onHandleAddSaveAminity
          }}
        />
      )}
    />
  </div>
);

export default AddAminityTypeForm;
