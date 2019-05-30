// import { Button } from "@material-ui/core";
// import * as React from "react";
// import { IChangeAvatarValues } from "src/Container/MyProfileState";

// const ChangeAvatar = (props: IChangeAvatarValues) => (
//   <div className="white-card change-grid">
//     <img className="choose-img" id="myImg" src={props.image} />
//     <input
//       accept="image/png, image/jpeg"
//       id="fileImage"
//       type="file"
//       name="image"
//       onChange={props.handleChange}
//     />
//     <Button className="save-btn" onClick={props.onImageClick}>
//       Submit
//     </Button>
//     <Button className="save-btn" onClick={props.onImageReset}>
//       Remove
//     </Button>
//   </div>
// );

// export default ChangeAvatar;
import Button from "@material-ui/core/Button";
import { Formik, FormikProps } from "formik";
import * as React from "react";
import { IChangeAvatarValues } from "../DefaultLayout/HomePage";

const ChangesAvatar = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  touched,
  errors
}: FormikProps<IChangeAvatarValues>) => {
  return (
    <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
      <div className="white-card change-grid">
        <img className="choose-img" id="Photo" src={values.Photo} />
        <input
          accept="image/png, image/jpeg"
          id="Photo"
          type="file"
          name="Photo"
          // tslint:disable-next-line:jsx-no-lambda
          onChange={evt => values.handleChange(evt)}
        />
        <Button
          type="submit"
          className="save-btn"
          disabled={values.disableChangeAvatarButton}
        >
          Submit
        </Button>
        <Button
          type="button"
          className="save-btn"
          disabled={ values.Photo === "/images/default.jpeg"? true : values.disableChangeAvatarButton}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={evt => values.onImageReset(evt, values.Photo)}
        >
          Remove
        </Button>
      </div>
    </form>
  );
};

const ChangeAvatar = (props: IChangeAvatarValues) => (
  <Formik
    initialValues={{ ...props }}
    onSubmit={props.onImageClick}
    onReset={props.handleReset}
    // tslint:disable-next-line:jsx-no-lambda
    render={(fprops: FormikProps<IChangeAvatarValues>) => (
      <ChangesAvatar
        {...fprops}
        values={{
          ...fprops.values,
          Photo: props.Photo,
          disableChangeAvatarButton: props.disableChangeAvatarButton
        }}
      />
    )}
  />
);

export default ChangeAvatar;
