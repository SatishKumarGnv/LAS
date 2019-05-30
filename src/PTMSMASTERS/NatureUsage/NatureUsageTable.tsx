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
  IActivateNatureUsageProps,
  IDeActivateNatureUsageProps,
  IEditNatureUsageValues,
  INatureUsageMasterItems,
  INatureUsageMasterProps,
  INatureUsageMasterValues
} from "src/DefaultLayout/HomePage";
import Pager from "src/Masters/Pager";
import { getActivestate } from "../Aminities/Aminities";
import ActivateNatureUsageForm from "./ActivateNatureUsageForm";
import DeActivateNatureUsageForm from "./DeActivateNatureUsageForm";
import EditNatureUsageForm from "./EditNatureUsageForm";

const NatureUsageMasterItems = (props: INatureUsageMasterItems) => (
  <TableRow>
    <TableCell>{props.natureUsageItems.BuildingClassificationDesc}</TableCell>
    <TableCell>{props.natureUsageItems.NatureUsageName}</TableCell>

    <TableCell>
      {props.natureUsageItems.IsActive.toString() === "true"
        ? "Active"
        : "InActive"}
    </TableCell>
    <TableCell>
      <div>
        {props.natureUsageItems.IsActive.toString() === "true" ? (
          <div>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleNatureUsageEditClick(props.natureUsageItems)
              }
            >
              <img src="/images/edit1.png" />
            </Button>
            <Button
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() =>
                props.onHandleNatureUsageDeActivatePopUp(props.natureUsageItems)
              }
            >
              <img src="/images/inactive1.png" />
            </Button>
          </div>
        ) : (
          <Button
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() =>
              props.onHandleNatureUsageActivatePopUp(props.natureUsageItems)
            }
          >
            <img src="/images/active1.png" />
          </Button>
        )}
      </div>
    </TableCell>
  </TableRow>
);

const NatureUsageMasterList = (
  props: INatureUsageMasterProps & INatureUsageMasterItems
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="NatureUsageMaster.xlsx"
        element={
          <button>
            <img src="/images/excel.png" /> Export
          </button>
        }
      >
        <Workbook.Sheet
          data={props.NatureUsageList.map((x: any) => ({
            ...x,
            IsActive: x.IsActive ? "Active" : "InActive"
          }))}
          name="Sheet A"
        >
          <Workbook.Column
            label="Building Classification Name"
            value="BuildingClassificationDesc"
          />
          <Workbook.Column label="Nature Usage Name" value="NatureUsageName" />
          <Workbook.Column label="Status" value="IsActive" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Building Classification Name</TableCell>
            <TableCell>Nature Usage Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.NatureUsageList.length !== 0 ? (
            props.NatureUsageList.filter((x: INatureUsageMasterValues) =>
              props.searchInput !== ""
                ? x.BuildingClassificationDesc.toLowerCase().includes(
                    props.searchInput.toLowerCase()
                  ) ||
                  x.NatureUsageName.toLowerCase().includes(
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
              .map((value: INatureUsageMasterValues, id: number) => (
                <NatureUsageMasterItems
                  onHandleNatureUsageActivatePopUp={
                    props.onHandleNatureUsageActivatePopUp
                  }
                  onHandleNatureUsageDeActivatePopUp={
                    props.onHandleNatureUsageDeActivatePopUp
                  }
                  onHandleNatureUsageEditClick={
                    props.onHandleNatureUsageEditClick
                  }
                  searchInput={props.searchInput}
                  onHandleSearch={props.onHandleSearch}
                  onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
                  onHandlePageChange={props.onHandlePageChange}
                  rowsPerPage={props.rowsPerPage}
                  page={props.page}
                  NatureUsageCount={props.NatureUsageCount}
                  activateNatureUsagePopUp={props.activateNatureUsagePopUp}
                  deActivateNatureUsagePopUp={props.deActivateNatureUsagePopUp}
                  editNatureUsagePopUp={props.editNatureUsagePopUp}
                  addNatureUsagePopUpOpen={props.addNatureUsagePopUpOpen}
                  natureUsageItems={value}
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

const NatureUsageMasterForm = (
  props: INatureUsageMasterProps &
    INatureUsageMasterItems &
    IEditNatureUsageValues &
    IDeActivateNatureUsageProps &
    IActivateNatureUsageProps
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

    {props.NatureUsageList.length === 0 ? (
      <div />
    ) : (
      <div>
        <NatureUsageMasterList
          onHandleNatureUsageActivatePopUp={
            props.onHandleNatureUsageActivatePopUp
          }
          onHandleNatureUsageDeActivatePopUp={
            props.onHandleNatureUsageDeActivatePopUp
          }
          onHandleNatureUsageEditClick={props.onHandleNatureUsageEditClick}
          searchInput={props.searchInput}
          onHandleSearch={props.onHandleSearch}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          NatureUsageCount={props.NatureUsageCount}
          activateNatureUsagePopUp={props.activateNatureUsagePopUp}
          deActivateNatureUsagePopUp={props.deActivateNatureUsagePopUp}
          editNatureUsagePopUp={props.editNatureUsagePopUp}
          addNatureUsagePopUpOpen={props.addNatureUsagePopUpOpen}
          NatureUsageList={props.NatureUsageList}
          natureUsageItems={props.natureUsageItems}
        />
        <Pager
          count={props.NatureUsageCount}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
        />

        {
          <Dialog
            open={props.editNatureUsagePopUp}
            // onClose={props.onHandleEditPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <EditNatureUsageForm
                buildingClassificationDropDownData={
                  props.buildingClassificationDropDownData
                }
                BuildingClassificationName={props.BuildingClassificationName}
                handleBuildingClassificationIdChange={
                  props.handleBuildingClassificationIdChange
                }
                handleNatureUsageNameChange={props.handleNatureUsageNameChange}
                handlePropertyTypeIdChange={props.handlePropertyTypeIdChange}
                PropertyTypeDropDownDataValues={
                  props.PropertyTypeDropDownDataValues
                }
                NatureUsageId={props.NatureUsageId}
                NatureUsageName={props.NatureUsageName}
                NatureUsageList={props.NatureUsageList}
                PropertyTypeId={props.PropertyTypeId}
                BuildingClassificationId={props.BuildingClassificationId}
                natureUsageItems={props.natureUsageItems}
                onHandleEditPopUpClose={props.onHandleEditPopUpClose}
                onHandleEditSave={props.onHandleEditSave}
              />
            </div>
          </Dialog>
        }

        {
          <Dialog
            open={props.deActivateNatureUsagePopUp}
            // onClose={props.onHandleDeActivatePopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              <DeActivateNatureUsageForm
                NatureUsageId={props.NatureUsageId}
                onHandleDeActivePopUpClose={props.onHandleDeActivePopUpClose}
                onHandleNatureUsageDeActivateClick={
                  props.onHandleNatureUsageDeActivateClick
                }
              />
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={props.activateNatureUsagePopUp}
            // onClose={props.onHandleActivePopUpClose}
            aria-labelledby="Active-dialog-title"
          >
            <div id="Active-dialog-title">
              <ActivateNatureUsageForm
                NatureUsageId={props.NatureUsageId}
                onHandleNatureUsageActivateClick={
                  props.onHandleNatureUsageActivateClick
                }
                onHandleActivePopUpClose={props.onHandleActivePopUpClose}
              />
            </div>
          </Dialog>
        }
      </div>
    )}
  </div>
);

export default NatureUsageMasterForm;
