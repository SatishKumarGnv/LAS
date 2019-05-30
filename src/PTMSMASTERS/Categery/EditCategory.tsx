import { Button } from "@material-ui/core";

import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IEditCategoryValues } from "src/DefaultLayout/HomePage";
import { IEditCategoryProps } from "./Category";

const EditDocumentTypeInnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IEditCategoryProps & IEditCategoryValues>) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <div className="popup-title">
          <h2>Edit Category Ownership</h2>
        </div>
        <div className="child-card">
          <h4>
            Category Ownership Name <span className="star">*</span>
          </h4>
          <TextField
            name="CategoryOwnershipName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.CategoryOwnershipName}
          />
          <div className="error-msg">
            {touched.CategoryOwnershipName && errors.CategoryOwnershipName && (
              <div>Category Ownership Name Is Required</div>
            )}
          </div>
        </div>

        <div className="popup-bottom-btn">
          <Button
            className="main-btn"
            type="button"
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => values.onHandleEditPopUpClose()}
          >
            cancel
          </Button>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button className="main-btn" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export const modelSchema = yup.object().shape({
  CategoryOwnershipName: yup.string().required()
});

export const EditCategoryTypeForm = (
  props: IEditCategoryProps & IEditCategoryValues
) => (
  <div>
    <Formik
      initialValues={{
        ...props
      }}
      validationSchema={modelSchema}
      onSubmit={props.onHandleEditSaveCategory}
      // tslint:disable-next-line:jsx-no-lambda
      render={(
        fprops: FormikProps<IEditCategoryProps & IEditCategoryValues>
      ) => (
        <EditDocumentTypeInnerForm
          {...fprops}
          values={{
            ...fprops.values,
            categoryValues: props.categoryValues,
            onHandleEditPopUpClose: props.onHandleEditPopUpClose,
            onHandleEditSaveCategory: props.onHandleEditSaveCategory
          }}
        />
      )}
    />
  </div>
);

export default EditCategoryTypeForm;
