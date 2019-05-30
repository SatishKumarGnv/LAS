import * as React from "react";

// import { ITablePaginationProps } from './StateMaintain';

import Pager, { IPagerProps } from "src/Masters/Pager";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";

import { IconButton } from "@material-ui/core";
// import Popover from "@material-ui/core/Popover";
import TableRow from "@material-ui/core/TableRow";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";

import {
  IActivateCategoryProps,
  ICategoryTypeMasterStateProps,
  ICategoryTypeStateValues,
  IEditCategoryValues
} from "src/DefaultLayout/HomePage";
import { getActivestate } from "../Aminities/Aminities";
import ActivateCategoryTypeForm from "./ActivateCategory";
import DeActivateCategoryTypeForm from "./DeActivateCategory";
import { EditCategoryTypeForm } from "./EditCategory";
export interface ICategoryTypeProps {
  readonly categoryValues: ICategoryTypeStateValues;

  onHandleActionClickCategory(categoryValues: ICategoryTypeStateValues): void;

  onHandleEditActionClickCategory(
    categoryValues: ICategoryTypeStateValues
  ): void;
  onHandleDeActivatePopUpOpencategory(
    categoryValues: ICategoryTypeStateValues
  ): void;
  onHandleActivatePopUpOpenCategory(
    categoryValues: ICategoryTypeStateValues
  ): void;
}

export interface IEditCategoryProps {
  readonly categoryValues: ICategoryTypeStateValues;
  onHandleEditSaveCategory(values: any): void;
  onHandleEditActionClickCategory(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IDeActivatecategoryProps {
  readonly CategoryOwnershipId: number;
  onHandleDeActivatePopUpCloseCategory(): void;
  onHandleDeActivateSaveCategory(event: any): void;

  //
}

const DocumentTypeMasterItems = (props: ICategoryTypeProps) => (
  <TableRow>
    <TableCell>{props.categoryValues.CategoryOwnershipName}</TableCell>
    <TableCell>
      {props.categoryValues.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      <div>
        {props.categoryValues.IsActive.toString() === "true" ? (
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleEditActionClickCategory(props.categoryValues)
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleDeActivatePopUpOpencategory(props.categoryValues)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        ) : (
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleActivatePopUpOpenCategory(props.categoryValues)
            }
          >
            <img src="/images/active1.png" />
          </Button>
        )}
      </div>
    </TableCell>
  </TableRow>
);
// const getActivestateCategory = (state: string) => {
//   switch (state) {
//     case "Active".toLowerCase():
//       return "true";
//     case "InActive".toLowerCase():
//       return "false";
//     default:
//       return state;
//   }
// };
const CategoryTypeMasterList = (
  props: ICategoryTypeMasterStateProps &
    ICategoryTypeProps &
    IPagerProps &
    IEditCategoryValues &
    IDeActivatecategoryProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="Category.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" /> Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.categoryTypeMasterList.map(x => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column
            label="Category Ownership Name"
            value="CategoryOwnershipName"
          />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Category Ownership Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.categoryTypeMasterList.length !== 0 ? (
            props.categoryTypeMasterList
              .filter(x =>
                props.searchCategoryInput !== ""
                  ? documentNameIncludes(
                      props.searchCategoryInput,
                      x.CategoryOwnershipName
                    ) ||
                    x.IsActive.toString().includes(
                      getActivestate(props.searchCategoryInput.toLowerCase())
                    )
                  : x
              )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <DocumentTypeMasterItems
                  onHandleActivatePopUpOpenCategory={
                    props.onHandleActivatePopUpOpenCategory
                  }
                  key={id}
                  categoryValues={value}
                  // onHandleEditNameChange={props.onHandleEditNameChange}

                  onHandleDeActivatePopUpOpencategory={
                    props.onHandleDeActivatePopUpOpencategory
                  }
                  onHandleActionClickCategory={
                    props.onHandleActionClickCategory
                  }
                  onHandleEditActionClickCategory={
                    props.onHandleEditActionClickCategory
                  }
                />
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={12} style={{ textAlign: "center" }}>
                <h2 className="no-dtat-title">No data available in list</h2>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);
export const documentNameIncludes = (
  searchCategoryInput: string,
  documentName?: string
) => {
  if (documentName) {
    return documentName
      .toLowerCase()
      .includes(searchCategoryInput.toLowerCase());
  } else {
    return false;
  }
};

const CategoryTypeMasterForm = (
  props: ICategoryTypeMasterStateProps &
    ICategoryTypeProps &
    IEditCategoryValues &
    IEditCategoryProps &
    IDeActivatecategoryProps &
    IActivateCategoryProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="searchCategoryInput"
      placeholder="Search field"
      type="search"
      value={props.searchCategoryInput}
      margin="normal"
      onChange={props.onHandleSearchCategory}
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    {props.categoryTypeMasterList.length === 0 ? (
      <div />
    ) : (
      <div>
        <CategoryTypeMasterList
          onHandleActivatePopUpOpenCategory={
            props.onHandleActivatePopUpOpenCategory
          }
          countCategory={props.countCategory}
          pageCategory={props.pageCategory}
          rowsPerPageCategory={props.rowsPerPageCategory}
          activatePopUpOpenCategory={props.activatePopUpOpenCategory}
          openCategory={props.openCategory}
          open2Category={props.open2Category}
          CategoryOwnershipId={props.CategoryOwnershipId}
          CategoryOwnershipName={props.CategoryOwnershipName}
          // onHandleEditNameChange={props.onHandleEditNameChange}
          deActivatePopUpOpenCategory={props.deActivatePopUpOpenCategory}
          onHandleDeActivatePopUpCloseCategory={
            props.onHandleDeActivatePopUpCloseCategory
          }
          onHandleDeActivatePopUpOpencategory={
            props.onHandleDeActivatePopUpOpencategory
          }
          onHandleDeActivateSaveCategory={props.onHandleDeActivateSaveCategory}
          editPopUpOpenCategory={props.editPopUpOpenCategory}
          onHandleEditActionClickCategory={
            props.onHandleEditActionClickCategory
          }
          categoryTypeMasterList={props.categoryTypeMasterList}
          count={props.countCategory}
          page={props.pageCategory}
          rowsPerPage={props.rowsPerPageCategory}
          onHandlePageChange={props.onHandlePageChange}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandleActionClickCategory={props.onHandleActionClickCategory}
          //  emptyRows={props.emptyRows}
          onHandleSearchCategory={props.onHandleSearchCategory}
          searchCategoryInput={props.searchCategoryInput}
          categoryValues={props.categoryValues}
        />
        <Pager
          count={props.countCategory}
          page={props.pageCategory}
          rowsPerPage={props.rowsPerPageCategory}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
        />

        {
          <Dialog
            open={props.editPopUpOpenCategory}
            // onClose={props.onHandleEditPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <EditCategoryTypeForm
                CategoryOwnershipId={props.categoryValues.CategoryOwnershipId}
                CategoryOwnershipName={
                  props.categoryValues.CategoryOwnershipName
                }
                categoryValues={props.categoryValues}
                onHandleEditActionClickCategory={
                  props.onHandleEditActionClickCategory
                }
                onHandleEditSaveCategory={props.onHandleEditSaveCategory}
                onHandleEditPopUpClose={props.onHandleEditPopUpClose}
                // onHandleEditNameChange={props.onHandleEditNameChange}
              />
            </div>
          </Dialog>
        }

        {
          <Dialog
            open={props.deActivatePopUpOpenCategory}
            // onClose={props.onHandleDeActivatePopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <DeActivateCategoryTypeForm
                CategoryOwnershipId={props.categoryValues.CategoryOwnershipId}
                onHandleDeActivatePopUpCloseCategory={
                  props.onHandleDeActivatePopUpCloseCategory
                }
                onHandleDeActivateSaveCategory={
                  props.onHandleDeActivateSaveCategory
                }
              />
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={props.activatePopUpOpenCategory}
            aria-labelledby="Active-dialog-title"
          >
            <div id="Active-dialog-title">
              <ActivateCategoryTypeForm
                CategoryOwnershipId={props.categoryValues.CategoryOwnershipId}
                onHandleActivateClickCategory={
                  props.onHandleActivateClickCategory
                }
                onHandleActivatePopUpCloseCategory={
                  props.onHandleActivatePopUpCloseCategory
                }
              />
            </div>
          </Dialog>
        }
      </div>
    )}
  </div>
);

export default CategoryTypeMasterForm;
