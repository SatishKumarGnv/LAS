import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";

import * as React from "react";
import {
  IAddCategoryProps,
  IAddCategoryValues
} from "src/DefaultLayout/HomePage";

const AddDocumentTypeInnerForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched
}: FormikProps<IAddCategoryValues & IAddCategoryProps>) => (
  <form onSubmit={handleSubmit} autoComplete="off">
    {/* <div className="white-card-form"> */}
    <div>
      <div className="child-card">
        <h4>
          Category Ownership Name <span className="star">*</span>{" "}
        </h4>
        <TextField
          name="newCategoryName"
          // required={true}

          value={values.newCategoryName}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={event => {
            handleChange(event);
            values.onHandleAddChangeCategory(event);
          }}
          margin="normal"
        />
        <div className="error-msg">
          {touched.newCategoryName && errors.newCategoryName && (
            <div>Category Ownership Name Is Required Field</div>
          )}
        </div>
      </div>
      <div className="popup-bottom-btn">
        <Button
          className="main-btn"
          color="secondary"
          onClick={values.onHandleAddPopUpCloseCategory}
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
  newCategoryName: yup.string().required()
});

const AddCategoryTypeForm = (props: IAddCategoryValues & IAddCategoryProps) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleAddSaveCategory}
      // tslint:disable-next-line:jsx-no-lambda
      render={(fprops: FormikProps<IAddCategoryValues & IAddCategoryProps>) => (
        <AddDocumentTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            CategoryOwnershipId: props.CategoryOwnershipId,
            categoryTypeMasterList: props.categoryTypeMasterList,
            newCategoryName: props.newCategoryName,
            onHandleAddChangeCategory: props.onHandleAddChangeCategory,
            onHandleAddPopUp: props.onHandleAddPopUp,
            onHandleAddPopUpCloseCategory: props.onHandleAddPopUpCloseCategory,
            onHandleAddSaveCategory: props.onHandleAddSaveCategory
          }}
        />
      )}
    />
  </div>
);

export default AddCategoryTypeForm;
