// import * as React from "react";

// import Button from "@material-ui/core/Button";
// import { Formik, FormikProps } from "formik";

// import TextField from "@material-ui/core/TextField";

// const PersonalInfo = ({
//   values,
//   handleChange,
//   handleBlur,
//   handleSubmit,
//   touched,
//   errors
// }: FormikProps<any>) => {

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <div className="white-card ">
//         <div className="child-card">
//           <h4>
//             First Name <span className="star">*</span>
//           </h4>
//           <TextField
//            
//             name="FirstName"
//             type="text"
//             // tslint:disable-next-line:jsx-no-lambda
//             onChange={(event: any) => {
//               handleChange(event), values.formHandleChange(event);
//             }}
//             value={values.FirstName}
//           />

//           <div className="error-msg">
//             {!!(touched.FirstName && errors.FirstName) && (
//               <div>First Name Required</div>
//             )}
//           </div>
//         </div>

//         <div className="child-card">
//           <h4>
//             Surname <span className="star">*</span>
//           </h4>
//           <TextField
//            
//             name="SurName"
//             // tslint:disable-next-line:jsx-no-lambda
//             onChange={event => {
//               handleChange(event);
//               values.handleSurNameChange(event);
//             }}
//             onBlur={handleBlur}
//             value={values.myProfileValues.SurName}
//           />
//           <div className="error-msg">
//             {!!(touched.SurName && errors.SurName) && (
//               <div>Surname Is Required </div>
//             )}
//           </div>
//         </div>

//         <div className="bottom-save-btn">
//           <Button
//             // tslint:disable-next-line:jsx-no-lambda
//             onClick={(event: any) => values.handleCancelClickInfo(event)}
//             className="reset-btn"
//             type="submit"
//           >
//             Cancel
//           </Button>
//           <Button
//             className="save-btn"
//             type="submit"
//             // onClick={values.handleSaveChangesClick}
//           >
//             Save Changes
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// };
// export const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

// export interface IPersonalInfoProps {
//   onSave(values: any): void;
// }

// const PersonalInfoForm = (props: any) => {

//   return (
//     <Formik
//       validationSchema={props.modelSchema}
//       initialValues={...props.myProfileValues}
//       onSubmit={props.onSave}
//       // tslint:disable-next-line:jsx-no-lambda
//       render={(fprops: FormikProps<any>) => (
//         <PersonalInfo
//           {...fprops}
//           values={{
//             ...fprops.values,
//             departmentTypeValues: props.departmentTypeValues,
//             handleCancelClickInfo: props.handleCancelClickInfo,
//             modelSchema: props.modelSchema,
//             myProfileValues: props.myProfileValues,
//             roleTypeValues: props.roleTypeValues
//           }}
//         />
//       )}
//     />
//   );
// };

// export default PersonalInfoForm;
