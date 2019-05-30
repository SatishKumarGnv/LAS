import * as React from "react";

// import { ITablePaginationProps } from './StateMaintain';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

// import DialogTitle from "@material-ui/core/DialogTitle";

import {
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Radio
} from "@material-ui/core";
// import Popover from "@material-ui/core/Popover";
import TableRow from "@material-ui/core/TableRow";
// import { ITablePaginationProps } from './StateMaintain';
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";

import {
  IPropertyDetailsProps,
  IPropertyDetailsStateProps
} from "src/DefaultLayout/HomePage";
import Pager, { IPagerProps } from "src/Masters/Pager";
import PropertyDetailsTableExpand from "./PropertyDetailsTableExpand";

const PropertyDetailsMasterItems = (props: IPropertyDetailsProps) => (
  <TableRow>
    <TableCell
      className="table-btn-grid"
      // tslint:disable-next-line:jsx-no-lambda
      onClick={() =>
        props.onHandlePropertyChangeExpandClick(props.propertyValues.RequestId)
      }
    >
      {props.open && props.propertyValues.RequestId === props.RequestId ? (
        <Button
          className="table-add-btn"
          id={`${props.propertyValues.RequestId}`}
          // onClick={props.onHandleExpandPopUp}
        >
          -
        </Button>
      ) : (
        <Button className="table-add-btn" id={props.propertyValues.RequestId}>
          +
        </Button>
      )}

      <Radio
        checked={props.selectedValue === props.propertyValues.RequestId}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={() => {
          props.handleSelectedValueChange(props.propertyValues);
        }}
        value={`${props.selectedValue}`}
        name="radio-button-demo"
        aria-label="A"
      />
    </TableCell>

    <TableCell>{props.propertyValues.OwnerName}</TableCell>
    <TableCell>{props.propertyValues.PropertyType}</TableCell>
    <TableCell>{props.propertyValues.Email}</TableCell>
    <TableCell>{props.propertyValues.House_Door_no}</TableCell>
    <TableCell>{props.propertyValues.TownShip}</TableCell>
  </TableRow>
);

const PropertyDetailsMasterList = (
  props: IPropertyDetailsStateProps & IPropertyDetailsProps & IPagerProps
) => (
  <div>
    <div className="row text-center excel-btn">
      <Workbook
        filename="PropertyDetails.xlsx"
        element={
          <button>
            {" "}
            <img src="/images/excel.png" /> Export
          </button>
        }
      >
        <Workbook.Sheet data={props.propertyDetailsTableList} name="Sheet A">
          <Workbook.Column label="Owner Name" value="OwnerName" />
          <Workbook.Column label="Property Type" value="PropertyType" />
          <Workbook.Column
            label="EmailId for Future Communication"
            value="Email"
          />

          <Workbook.Column label="House No" value="House_Door_no" />

          <Workbook.Column label="TownShip" value="TownShip" />
        </Workbook.Sheet>
      </Workbook>
    </div>
    <div className="table-data">
      <Table className="final-table">
        <TableHead>
          <TableRow>
            <TableCell>Select</TableCell>
            <TableCell>Owner Name</TableCell>
            <TableCell>Property Type</TableCell>
            <TableCell>Email Id For Future Communication</TableCell>
            <TableCell>House No/ Door No</TableCell>
            <TableCell>Township</TableCell>
          </TableRow>
        </TableHead>
        {
          <Dialog
            open={props.dialogExpandOpen}
            onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <div className="popup-title title-row">
              <DialogTitle id="simple-dialog-title" className="dialog-title">
                Application Details
              </DialogTitle>

              <Button
                className="popup-close-btn"
                color="primary"
                onClick={props.onHandleClose}
              >
                X
              </Button>
            </div>
            <div id="simple-dialog-title">
              <PropertyDetailsTableExpand
                onHandleClose={props.onHandleClose}
                propertyDetailsTableList={props.propertyDetailsTableList}
                RequestId={props.RequestId}
                open={props.open}
              />
            </div>
          </Dialog>
        }
        <TableBody>
          {props.propertyDetailsTableList.length !== 0 ? (
            props.propertyDetailsTableList
              .filter(x =>
                props.searchInput !== ""
                  ? documentNameIncludes(props.searchInput, x.OwnerName) ||
                    documentNameIncludes(props.searchInput, x.PropertyType) ||
                    documentNameIncludes(props.searchInput, x.House_Door_no) ||
                    documentNameIncludes(props.searchInput, x.TownShip) ||
                    documentNameIncludes(props.searchInput, x.Email)
                  : x
              )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((value, id) => (
                <PropertyDetailsMasterItems
                  open={props.open}
                  onHandlePropertyChangeExpandClick={
                    props.onHandlePropertyChangeExpandClick
                  }
                  RequestId={props.RequestId}
                  selectValuePopUp={props.selectValuePopUp}
                  key={id}
                  propertyId={props.propertyId}
                  propertyValues={value}
                  selectedValue={props.selectedValue}
                  handleSelectedValueChange={props.handleSelectedValueChange}
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
const documentNameIncludes = (searchInput: string, documentName?: string) => {
  if (documentName) {
    return documentName.toLowerCase().includes(searchInput.toLowerCase());
  } else {
    return false;
  }
};

const PropertyDetailsTableForm = (
  props: IPropertyDetailsStateProps & IPropertyDetailsProps & IPagerProps
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

    {props.propertyDetailsTableList.length === 0 ? (
      <div />
    ) : (
      <div>
        <PropertyDetailsMasterList
          dialogExpandOpen={props.dialogExpandOpen}
          open={props.open}
          onHandleClose={props.onHandleClose}
          onHandlePropertyChangeExpandClick={
            props.onHandlePropertyChangeExpandClick
          }
          RequestId={props.RequestId}
          onhandleselectValuePopUpClose={props.onhandleselectValuePopUpClose}
          selectValuePopUp={props.selectValuePopUp}
          propertyValues={props.propertyValues}
          propertyId={props.propertyId}
          selectedValue={props.selectedValue}
          handleSelectedValueChange={props.handleSelectedValueChange}
          propertyDetailsTableList={props.propertyDetailsTableList}
          count={props.count}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandleSearch={props.onHandleSearch}
          searchInput={props.searchInput}
        />
        {
          <Dialog
            open={props.selectValuePopUp}
            // onClose={props.onHandleDeActivatePopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div className="pop-up">
              <h3>Please Select the Anyone of the Radio Button</h3>
              <div className="popup-bottom-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => props.onhandleselectValuePopUpClose()}
                >
                  Ok
                </Button>
              </div>
            </div>
          </Dialog>
        }
        <Pager
          count={props.count}
          page={props.page}
          rowsPerPage={props.rowsPerPage}
          onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
          onHandlePageChange={props.onHandlePageChange}
        />
      </div>
    )}
  </div>
);

export default PropertyDetailsTableForm;
