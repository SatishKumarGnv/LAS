import * as React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  IActivatePropertyDepartmentProps,
  IDeActivatePropertyDepartmentProps,
  IEditPropertyDepartmentValues,
  IPropertDepartmentMasterProps,
  IPropertyDepartmentMasterItems,
  IPropertyDepartmentMasterValues
} from "src/DefaultLayout/HomePage";
import Pager from "src/Masters/Pager";
import { getActivestate } from "../Aminities/Aminities";
import { documentNameIncludes } from "../Categery/Category";
import ActivatePropertyDepartmentForm from "./ActivatePropertyDepartmentForm";
import DeActivatePropertyDepartmentForm from "./DeActivatePropertyDepartmentForm";
import EditPropertyDepartmentForm from "./EditPropertyDepartmentForm";

const ProportyDepartmentMasterItems = (
  props: IPropertyDepartmentMasterItems
) => (
  <TableRow>
    <TableCell>{props.propertyDepartmentItems.CategoryOwnershipDesc}</TableCell>
    <TableCell>
      {props.propertyDepartmentItems.PropertyDepartmentName}
    </TableCell>

    <TableCell>
      {props.propertyDepartmentItems.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      <div>
        {props.propertyDepartmentItems.IsActive.toString() === "true" ? (
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandlePropertyDepartmentEditClick(
                  props.propertyDepartmentItems
                )
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandlePropertyDepartmentDeActivatePopUp(
                  props.propertyDepartmentItems
                )
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        ) : (
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandlePropertyDepartmentActivatePopUp(
                props.propertyDepartmentItems
              )
            }
          >
            <img src="/images/active1.png" />
          </Button>
        )}
      </div>
    </TableCell>
  </TableRow>
);

const PropertyDepartmentMasterList = (
  props: IPropertDepartmentMasterProps & IPropertyDepartmentMasterItems
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="PropertyDepartmentMaster.xlsx"
        element={
          <button>
            <img src="/images/excel.png" /> Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.propertyDepartmentMasterList.map((x: any) => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column
            label="CategoryOwnership Name"
            value="CategoryOwnershipDesc"
          />
          <Workbook.Column
            label="Property Department Name"
            value="PropertyDepartmentName"
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
            <TableCell>Property Department </TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.propertyDepartmentMasterList.length !== 0 ? (
            props.propertyDepartmentMasterList
              .filter(x =>
                props.searchInput !== ""
                  ? documentNameIncludes(
                      props.searchInput,
                      x.PropertyDepartmentName
                    ) ||
                    documentNameIncludes(
                      props.searchInput,
                      x.CategoryOwnershipDesc
                    ) ||
                    x.IsActive.toString().includes(
                      getActivestate(props.searchInput.toLowerCase())
                    )
                  : x
              )

              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value: IPropertyDepartmentMasterValues, id: number) => (
                <ProportyDepartmentMasterItems
                  searchInput={props.searchInput}
                  onHandleSearch={props.onHandleSearch}
                  onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
                  onHandlePageChange={props.onHandlePageChange}
                  rowsPerPage={props.rowsPerPage}
                  page={props.page}
                  propertyDepartmentcount={props.propertyDepartmentcount}
                  activatePropertyDepartmentPopUp={
                    props.activatePropertyDepartmentPopUp
                  }
                  deActivatePropertyDepartmentPopUp={
                    props.deActivatePropertyDepartmentPopUp
                  }
                  editPropertyDepartmentPopUp={
                    props.editPropertyDepartmentPopUp
                  }
                  addPropertyDepartmentPopUpOpen={
                    props.addPropertyDepartmentPopUpOpen
                  }
                  propertyDepartmentItems={value}
                  onHandlePropertyDepartmentActivatePopUp={
                    props.onHandlePropertyDepartmentActivatePopUp
                  }
                  onHandlePropertyDepartmentDeActivatePopUp={
                    props.onHandlePropertyDepartmentDeActivatePopUp
                  }
                  onHandlePropertyDepartmentEditClick={
                    props.onHandlePropertyDepartmentEditClick
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

const PropertyDepartmentMasterForm = (
  props: IPropertDepartmentMasterProps &
    IPropertyDepartmentMasterItems &
    IEditPropertyDepartmentValues &
    IDeActivatePropertyDepartmentProps &
    IActivatePropertyDepartmentProps
) => (
  <div className="table-card">
    <TextField
      className="inner-search"
      id="searchInput"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      margin="normal"
      onChange={props.onHandleSearch}
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />

    {props.propertyDepartmentMasterList.length === 0 ? (
      <div />
    ) : (
      <div>
        <PropertyDepartmentMasterList
          searchInput={props.searchInput}
          onHandleSearch={props.onHandleSearch}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          propertyDepartmentcount={props.propertyDepartmentcount}
          activatePropertyDepartmentPopUp={
            props.activatePropertyDepartmentPopUp
          }
          deActivatePropertyDepartmentPopUp={
            props.deActivatePropertyDepartmentPopUp
          }
          editPropertyDepartmentPopUp={props.editPropertyDepartmentPopUp}
          addPropertyDepartmentPopUpOpen={props.addPropertyDepartmentPopUpOpen}
          propertyDepartmentMasterList={props.propertyDepartmentMasterList}
          propertyDepartmentItems={props.propertyDepartmentItems}
          onHandlePropertyDepartmentActivatePopUp={
            props.onHandlePropertyDepartmentActivatePopUp
          }
          onHandlePropertyDepartmentDeActivatePopUp={
            props.onHandlePropertyDepartmentDeActivatePopUp
          }
          onHandlePropertyDepartmentEditClick={
            props.onHandlePropertyDepartmentEditClick
          }
        />
        <Pager
          count={props.propertyDepartmentcount}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
        />

        {
          <Dialog
            open={props.editPropertyDepartmentPopUp}
            // onClose={props.onHandleEditPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <EditPropertyDepartmentForm
                onHandleEditPropertyDepartmetNameChange={
                  props.onHandleEditPropertyDepartmetNameChange
                }
                PropertyDepartmentId={props.PropertyDepartmentId}
                CategoryOwnershipId={props.CategoryOwnershipId}
                propertyDepartmentItems={props.propertyDepartmentItems}
                PropertyDepartmentName={props.PropertyDepartmentName}
                categoryOwnerShipDropDownDataValues={
                  props.categoryOwnerShipDropDownDataValues
                }
                handleCategoryOwnershipIdChange={
                  props.handleCategoryOwnershipIdChange
                }
                handlePropertyDepartmentNameChange={
                  props.handlePropertyDepartmentNameChange
                }
                onHandleEditPopUpClose={props.onHandleEditPopUpClose}
                onHandleEditSave={props.onHandleEditSave}
              />
            </div>
          </Dialog>
        }

        {
          <Dialog
            open={props.deActivatePropertyDepartmentPopUp}
            // onClose={props.onHandleDeActivatePopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <DeActivatePropertyDepartmentForm
                PropertyDepartmentId={
                  props.propertyDepartmentItems.PropertyDepartmentId
                }
                onHandleDeActivatePopUpClose={
                  props.onHandleDeActivatePopUpClose
                }
                onHandleDeActivateSave={props.onHandleDeActivateSave}
              />
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={props.activatePropertyDepartmentPopUp}
            // onClose={props.onHandleActivePopUpClose}
            aria-labelledby="Active-dialog-title"
          >
            <div id="Active-dialog-title">
              <ActivatePropertyDepartmentForm
                PropertyDepartmentId={
                  props.propertyDepartmentItems.PropertyDepartmentId
                }
                onHandleActivateClick={props.onHandleActivateClick}
                onHandleActivePopUpClose={props.onHandleActivePopUpClose}
              />
            </div>
          </Dialog>
        }
      </div>
    )}
  </div>
);

export default PropertyDepartmentMasterForm;
