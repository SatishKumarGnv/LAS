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
  IActivateBuildingClassificationMasterProps,
  IBuildingClassificationMasterItems,
  IBuildingClassificationMasterProps,
  IBuildingClassificationMasterValues,
  IDeActivateBuildingClassificationMasterProps,
  IEditBuildingClassificationMasterValues
} from "src/DefaultLayout/HomePage";
import Pager from "src/Masters/Pager";
import { getActivestate } from "../Aminities/Aminities";
import ActivateBuildingClassificationForm from "./ActivateBuildingClassingForm";
import DeActivateBuildingClassificationForm from "./DeActivateBuildingClassificationForm";
import { EditBuildingClassificationForm } from "./EditBuildingClassificationForm";

const BuildingClassificationInnerItems = (
  props: IBuildingClassificationMasterItems
) => (
  <TableRow>
    <TableCell>{props.buildingClassificationItems.PropertyTypeDesc}</TableCell>
    <TableCell>
      {props.buildingClassificationItems.BuildingClassificationName}
    </TableCell>

    <TableCell>
      {props.buildingClassificationItems.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      <div>
        {props.buildingClassificationItems.IsActive.toString() === "true" ? (
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleBuildingClassificationEditClick(
                  props.buildingClassificationItems
                )
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleBuildingClassificationDeActivatePopUp(
                  props.buildingClassificationItems
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
              props.onHandleBuildingClassificationActivatePopUp(
                props.buildingClassificationItems
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

const BuildingClassificationMasterList = (
  props: IBuildingClassificationMasterProps & IBuildingClassificationMasterItems
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="BuildingClassification.xlsx"
        element={
          <button>
            <img src="/images/excel.png" /> Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.buildingClassificationList.map(
            (x: IBuildingClassificationMasterValues) => ({
              ...x,
              IsActive: x.IsActive ? "Active" : "InActive"
            })
          )}
          name="Sheet A"
        >
          <Workbook.Column
            label="Property Type Name"
            value="PropertyTypeDesc"
          />
          <Workbook.Column
            label="Building Classification"
            value="BuildingClassificationName"
          />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Property Type Name</TableCell>
            <TableCell>Building Classification </TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.buildingClassificationList.length !== 0 ? (
            props.buildingClassificationList
              .filter(x =>
                props.searchInput !== ""
                  ? x.BuildingClassificationName.toLowerCase().includes(
                      props.searchInput.toLowerCase()
                    ) ||
                    x.PropertyTypeDesc.toLowerCase().includes(
                      props.searchInput.toLowerCase()
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
              .map((value: IBuildingClassificationMasterValues, id: number) => (
                <BuildingClassificationInnerItems
                  searchInput={props.searchInput}
                  onHandleSearch={props.onHandleSearch}
                  onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
                  onHandlePageChange={props.onHandlePageChange}
                  rowsPerPage={props.rowsPerPage}
                  page={props.page}
                  buildingClassificationCount={
                    props.buildingClassificationCount
                  }
                  activateBuildingClassificationPopUp={
                    props.activateBuildingClassificationPopUp
                  }
                  deActivateBuildingClassificationPopUp={
                    props.deActivateBuildingClassificationPopUp
                  }
                  editBuildingClassificationPopUp={
                    props.editBuildingClassificationPopUp
                  }
                  addBuildingClassificationPopUpOpen={
                    props.addBuildingClassificationPopUpOpen
                  }
                  buildingClassificationItems={value}
                  onHandleBuildingClassificationActivatePopUp={
                    props.onHandleBuildingClassificationActivatePopUp
                  }
                  onHandleBuildingClassificationDeActivatePopUp={
                    props.onHandleBuildingClassificationDeActivatePopUp
                  }
                  onHandleBuildingClassificationEditClick={
                    props.onHandleBuildingClassificationEditClick
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

const BuildingClassificationTableForm = (
  props: IBuildingClassificationMasterProps &
    IBuildingClassificationMasterItems &
    IEditBuildingClassificationMasterValues &
    IDeActivateBuildingClassificationMasterProps &
    IActivateBuildingClassificationMasterProps
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

    {props.buildingClassificationList.length === 0 ? (
      <div />
    ) : (
      <div>
        <BuildingClassificationMasterList
          buildingClassificationList={props.buildingClassificationList}
          searchInput={props.searchInput}
          onHandleSearch={props.onHandleSearch}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          buildingClassificationCount={props.buildingClassificationCount}
          activateBuildingClassificationPopUp={
            props.activateBuildingClassificationPopUp
          }
          deActivateBuildingClassificationPopUp={
            props.deActivateBuildingClassificationPopUp
          }
          editBuildingClassificationPopUp={
            props.editBuildingClassificationPopUp
          }
          addBuildingClassificationPopUpOpen={
            props.addBuildingClassificationPopUpOpen
          }
          buildingClassificationItems={props.buildingClassificationItems}
          onHandleBuildingClassificationActivatePopUp={
            props.onHandleBuildingClassificationActivatePopUp
          }
          onHandleBuildingClassificationDeActivatePopUp={
            props.onHandleBuildingClassificationDeActivatePopUp
          }
          onHandleBuildingClassificationEditClick={
            props.onHandleBuildingClassificationEditClick
          }
        />
        <Pager
          count={props.buildingClassificationCount}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
        />

        {
          <Dialog
            open={props.editBuildingClassificationPopUp}
            // onClose={props.onHandleEditPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <EditBuildingClassificationForm
                handlePropertyTypeIdChange={props.handlePropertyTypeIdChange}
                onHandleBuildingClassificationNameChange={
                  props.onHandleBuildingClassificationNameChange
                }
                propertyTypeDropDownValues={props.propertyTypeDropDownValues}
                PropertyTypeId={props.PropertyTypeId}
                BuildingClassificationName={props.BuildingClassificationName}
                onHandleEditPropertyDepartmetNameChange={
                  props.onHandleEditPropertyDepartmetNameChange
                }
                BuildingClassificationId={props.BuildingClassificationId}
                buildingClassificationItems={props.buildingClassificationItems}
                onHandleEditPopUpClose={props.onHandleEditPopUpClose}
                onHandleEditSave={props.onHandleEditSave}
              />
            </div>
          </Dialog>
        }

        {
          <Dialog
            open={props.deActivateBuildingClassificationPopUp}
            // onClose={props.onHandleDeActivatePopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <DeActivateBuildingClassificationForm
                BuildingClassificationId={
                  props.buildingClassificationItems.BuildingClassificationId
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
            open={props.activateBuildingClassificationPopUp}
            // onClose={props.onHandleActivePopUpClose}
            aria-labelledby="Active-dialog-title"
          >
            <div id="Active-dialog-title">
              <ActivateBuildingClassificationForm
                BuildingClassificationId={
                  props.buildingClassificationItems.BuildingClassificationId
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

export default BuildingClassificationTableForm;
