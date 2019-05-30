// import * as yup from "yup";

// import FormControl from "@material-ui/core/FormControl";

// // import { InputLabel } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import Checkbox from "@material-ui/core/Checkbox";
// import Input from "@material-ui/core/Input";
// // import InputLabel from "@material-ui/core/InputLabel";
// import ListItemText from "@material-ui/core/ListItemText";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import TextField from "@material-ui/core/TextField";
// // import { getDaysInMonth } from "date-fns";
// import { Field, FieldArray, Form, Formik, FormikProps, getIn } from "formik";
// // import * as moment from "moment";
// import * as React from "react";
// import { isArray } from "util";
// import {
//   IConditionValueProps,
//   IMileStoneDetailsProps,
//   IMileStoneDetailsStateValues,
//   IMilestoneDropDownProps,
//   IMileStoneDropDownValues,
//   IMileStoneValues,
//   IProjectValuesProps,
//   IRuleTypeValuesProps
// } from "../DefaultLayout/HomePage";

// // tslint:disable-next-line:ordered-imports
// // import { isToday, isFuture } from "date-fns";
// // import * as yup from "yup";

// const MilestoneDetailsInnerForm = ({
//   values,
//   handleChange,
//   handleBlur,
//   handleSubmit,
//   touched,
//   errors
// }: FormikProps<
//   IMileStoneValues &
//     IMilestoneDropDownProps &
//     IMileStoneDetailsStateValues &
//     IMileStoneDetailsProps &
//     IRuleTypeValuesProps &
//     IProjectValuesProps &
//     IConditionValueProps
// >) => (
//   <div>
//     <h2>MileStone {values.AddMilestoneClickCount + 1}</h2>

//     <Form>
//       <FieldArray
//         name="MileStoneArray"
//         // tslint:disable-next-line:jsx-no-lambda
//         render={helpers => (
//           <div>
//             {values.MileStoneArray && values.MileStoneArray.length > 0
//               ? values.MileStoneArray.map(
//                   (x: IMileStoneValues, index: number) => (
//                     <React.Fragment key={index}>
//                       <div className="child-card">
//                         <h4>MileStone Name</h4>
//                         <Field
//                           name={`MileStoneArray.${index}.RuleId`}
//                           render={() => {
//                             return (
//                               <FormControl>
//                                 <Select
//                                   name={`MileStoneArray.${index}.RuleId`}
//                                  
//                                   value={x.RuleId}
//                                   inputProps={{
//                                     id: "RuleId",
//                                     name: "RuleId"
//                                   }}
//                                   // tslint:disable-next-line:jsx-no-lambda
//                                   onChange={event => {
//                                     handleChange(event);
//                                     values.handleMileStoneChange(
//                                       event,
//                                       index,
//                                       values
//                                     );
//                                   }}
//                                 >
//                                   <MenuItem
//                                     className="select-dropdown-bottom"
//                                     value={1}
//                                   >
//                                     1 Year
//                                   </MenuItem>
//                                   <MenuItem
//                                     className="select-dropdown-bottom"
//                                     value={2}
//                                   >
//                                     2 Years
//                                   </MenuItem>
//                                   <MenuItem
//                                     className="select-dropdown-bottom"
//                                     value={3}
//                                   >
//                                     3 Years
//                                   </MenuItem>
//                                   <MenuItem
//                                     className="select-dropdown-bottom"
//                                     value={4}
//                                   >
//                                     4 Years
//                                   </MenuItem>
//                                   <MenuItem
//                                     className="select-dropdown-bottom"
//                                     value={5}
//                                   >
//                                     5 Years
//                                   </MenuItem>
//                                 </Select>
//                               </FormControl>
//                             );
//                           }}
//                         />
//                         <ErrorMessage
//                           name={`MileStoneArray.${index}.RuleId`}
//                           className="error-msg"
//                           index={index}
//                           value={x.RuleId}
//                         />
//                       </div>
//                       <div className="child-card">
//                         <h4>
//                           Land Release(In Acres)
//                           <span className="star"> *</span>
//                         </h4>
//                         <Field
//                           name={`MileStoneArray.${index}.LandRelease`}
//                           render={() => {
//                             return (
//                               <TextField
//                                 type="number"
//                                
//                                 name={`MileStoneArray.${index}.LandRelease`}
//                                 // tslint:disable-next-line:jsx-no-lambda
//                                 onChange={event => {
//                                   handleChange(event);
//                                   values.handleLandReleaseChange(event, index);
//                                 }}
//                                 onBlur={handleBlur}
//                                 value={x.LandRelease}
//                               />
//                             );
//                           }}
//                         />
//                         <ErrorMessage
//                           name={`MileStoneArray.${index}.LandRelease`}
//                           className="error-msg"
//                           index={index}
//                           value={x.LandRelease}
//                         />
//                       </div>
//                       <div className="child-card">
//                         <h4>Effective Date Of Completion</h4>

//                         <Field
//                           name={`MileStoneArray.${index}.DateOfCompletion`}
//                           render={() => {
//                             return (
//                               <TextField
//                                
//                                 type="date"
//                                 // id="date"
//                                 value={x.DateOfCompletion}
//                                 // tslint:disable-next-line:jsx-no-lambda
//                                 onChange={event => {
//                                   handleChange(event);
//                                   values.handleDateOfCompletionChange(
//                                     event,
//                                     index
//                                   );
//                                 }}
//                                 name={`MileStoneArray.${index}.DateOfCompletion`}
//                               />
//                             );
//                           }}
//                         />
//                         <ErrorMessage
//                           className="error-msg"
//                           name={`MileStoneArray.${index}.DateOfCompletion`}
//                           index={index}
//                           value={x.DateOfCompletion}
//                         />
//                       </div>
//                       <div className="bottom-save-btn ">
//                         <Button
//                           type="button"
//                           className="reset-btn"
//                           onClick={values.handlePopUpOpenClick}
//                         >
//                           Add New rule Type
//                         </Button>
//                       </div>
//                       <div className="child-card ">
//                         <h4>Project Rule</h4>

//                         <Field
//                           name={`MileStoneArray.${index}.ProjectRuleTypes`}
//                           render={() => {
//                             return (
//                               <FormControl>
//                                 {/* <InputLabel htmlFor="select-multiple-checkbox">
//                                   Project Rules
//                                 </InputLabel> */}
//                                 <Select
//                                   name={`MileStoneArray.${index}.ProjectRuleTypes`}
//                                  
//                                   multiple={true}
//                                   // name="ProjectRuleTypes"
//                                   value={x.ProjectRuleTypes.map(
//                                     (y: string) => y
//                                   )}
//                                   // tslint:disable-next-line:jsx-no-lambda
//                                   onChange={event => {
//                                     handleChange(event);
//                                     values.handleMultiSelectMileStoneChange(
//                                       event,
//                                       index
//                                     );
//                                   }}
//                                   input={
//                                     <Input id="select-multiple-checkbox" />
//                                   }
//                                   // tslint:disable-next-line:jsx-no-lambda
//                                   renderValue={(selected: string[] | string) =>
//                                     isArray(selected)
//                                       ? selected.join(", ")
//                                       : selected
//                                   }
//                                   // MenuProps={MenuProps}
//                                 >
//                                   {x.mileStoneValues
//                                     .map(
//                                       (y: IMileStoneDropDownValues) =>
//                                         y.RuleName
//                                     )
//                                     .map(name => (
//                                       <MenuItem key={name} value={name}>
//                                         <Checkbox
//                                           checked={
//                                             x.ProjectRuleTypes.indexOf(name) >
//                                             -1
//                                           }
//                                         />
//                                         <ListItemText primary={name} />
//                                       </MenuItem>
//                                     ))}
//                                 </Select>
//                               </FormControl>
//                             );
//                           }}
//                         />
//                         <ErrorMessage
//                           name={`MileStoneArray.${index}.ProjectRuleTypes`}
//                           className="error-msg"
//                           index={index}
//                           value={x.ProjectRuleTypes}
//                         />
//                       </div>
//                       {x.AddMilestoneClickCount === 0 ? (
//                         <div />
//                       ) : (
//                         <div className="continue-btn">
//                           <Button
//                             className="delete-btn"
//                             type="button"
//                             // tslint:disable-next-line:jsx-no-lambda
//                             onClick={() => {
//                               helpers.remove(index);
//                               values.onMileStoneDeleteClick(index);
//                             }}
//                           >
//                             Delete
//                           </Button>
//                         </div>
//                       )}
//                       {values.MileStoneArray.length === index + 1 ? (
//                         <div className="continue-btn">
//                           <Button
//                             className="save-btn add-btn"
//                             type="button"
//                             // tslint:disable-next-line:jsx-no-lambda
//                             onClick={() => {
//                               helpers.insert(index + 1, {
//                                 AddMilestoneClickCount:
//                                   values.AddMilestoneClickCount + 1,
//                                 LandRelease: "",
//                                 RuleName: "",
//                                 id: values.AddMilestoneClickCount + 1,
//                                 // tslint:disable-next-line:object-literal-sort-keys
//                                 RuleId: 0,
//                                 DateOfCompletion: "",
//                                 mileStoneValues: values.mileStoneValues,
//                                 ProjectRuleTypes: values.ProjectRuleTypes,
//                                 ProjectTypeId: 0,
//                                 ruleTypeValues: values.ruleTypeValues,
//                                 sourceTypeValues: values.sourceTypeValues,
//                                 RuleSourceTypeId: 0,
//                                 ConditionTypeId: 0,
//                                 ConditionTypeValues: values.ConditionTypeValues,
//                                 projectValues: values.projectValues
//                               });
//                               values.onMileStoneAddClick(index + 1);
//                             }}
//                           >
//                             + Add Another Milestone
//                           </Button>
//                         </div>
//                       ) : (
//                         <div />
//                       )}
//                     </React.Fragment>
//                   )
//                 )
//               : null}
//             <div>
//               <Button
//                 className="save-btn"
//                 type="submit"
//                 // tslint:disable-next-line:jsx-no-lambda
//                 // onClick={() => {
//                 //   values.onWitnessSaveAndContinue(values.WitnessDetailsFormArray);
//                 // }}
//               >
//                 Milestone Save
//               </Button>
//             </div>
//           </div>
//         )}
//       />
//     </Form>
//   </div>
// );

// const errorDisplay = (name: any, error: any, index: any) => {
//   switch (error) {
//     case error:
//       if (name === `MileStoneArray.${index}.DateOfCompletion`) {
//         return (
//           <div className="error-msg">
//             "Please Select Date From Current Date"
//           </div>
//         );
//       }
//     default:
//       return <div className="error-msg">"RequiredField"</div>;
//   }
// };

// const ErrorMessage = ({ name, index, value }: any) => (
//   <Field
//     name={name}
//     // tslint:disable-next-line:jsx-no-lambda
//     render={({ form }: any) => {
//       const touch = getIn(form.touched, name);
//       const error = getIn(form.errors, name);
//       return touch && error ? errorDisplay(name, error, index) : null;
//       // (
//       //   <div className="error-msg">"RequiredField"</div>
//       // ) : name === `MileStoneArray.${index}.DateOfCompletion` ? (
//       //   !isMilestoneDateOfCompletion(value) ? (
//       //     <div className="error-msg">
//       //       Select date from current date till end of this month
//       //     </div>
//       //   ) : null
//       // ) : null;
//     }}
//   />
// );

// // const isMilestoneDateOfCompletion = (date: string) => {
// //   if (date === "") {
// //     return true;
// //   } else {
// //     // const x = new Date();
// //     // // const y = x.getFullYear();
// //     // // const m = x.getMonth() + 1;

// //     // // const daysInMonth = getDaysInMonth(new Date(y, m));

// //     // const currentDate = moment(x).format("YYYY-MM-DD");
// //     // // const endDate = y + "-" + m + "-" + daysInMonth;
// //     // const goDateResult = new Date(currentDate) >= new Date(date);
// //     // //  new Date(date) <= new Date(endDate);

// //     return isToday(date) && isFuture(date);
// //   }
// // };

// // export const dateOfBirth = (date: any) =>
// //   Date.parse(
// //     new Date().getFullYear() +
// //       "-" +
// //       (new Date().getMonth() + 1) +
// //       "-" +
// //       new Date().getDate()
// //   ) -
// //     Date.parse(date) <
// //   662688000000;

// const dateOfCompletion = new Date();

// export const modelSchema = yup.object().shape({
//   MileStoneArray: yup
//     .array()
//     .of(
//       yup.object().shape({
//         DateOfCompletion: yup
//           .date()
//           .max(dateOfCompletion, `Please select date from Current Date`)
//           .required("DateOfCompletion required"),
//         LandRelease: yup.number().required(),
//         RuleId: yup
//           .number()
//           .min(1)
//           .required()
//       })
//     )
//     .required("required")
// });
// export const MilestoneDetailsForm = (
//   props: IMilestoneDropDownProps &
//     IMileStoneDetailsStateValues &
//     IMileStoneDetailsProps &
//     IRuleTypeValuesProps &
//     IProjectValuesProps &
//     IConditionValueProps &
//     IMileStoneValues
// ) => (
//   <div>
//     <Formik
//       validationSchema={modelSchema}
//       initialValues={{
//         ...props,
//         MileStoneArray: props.MileStoneArray,
//         ProjectRuleTypes: props.ProjectRuleTypes,

//         mileStoneValues: props.mileStoneValues
//       }}
//       onSubmit={props.onMileStoneSave}
//       // tslint:disable-next-line:jsx-no-lambda
//       render={(
//         fprops: FormikProps<
//           IMileStoneValues &
//             IMilestoneDropDownProps &
//             IMileStoneDetailsStateValues &
//             IMileStoneDetailsProps &
//             IRuleTypeValuesProps &
//             IProjectValuesProps &
//             IConditionValueProps
//         >
//       ) => (
//         <MilestoneDetailsInnerForm
//           {...fprops}
//           values={{
//             ...fprops.values,
//             MileStoneArray: props.MileStoneArray,
//             ProjectRuleTypes: props.ProjectRuleTypes,
//             RuleId: props.RuleId,
//             activeStep: props.activeStep,
//             mileStoneValues: props.mileStoneValues,
//             onMileStoneSave: props.onMileStoneSave,
//             ruleTypeValues: props.ruleTypeValues
//           }}
//         />
//       )}
//     />
//   </div>
// );

// export default MilestoneDetailsForm;
