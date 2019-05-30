import * as React from "react";

// tslint:disable-next-line:ordered-imports
import { IconButton } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Workbook from "react-excel-workbook";
import {
  IRoleWorkFlowUserValues,
  IUserValues,
  IWorkFlowUserGridDataValues,
  IWorkFlowUserMapGridStateProps
} from "../Container/WorkFlowUserMappingState";
import Pager from "../Masters/Pager";

interface IWorkFlowMapProps {
  readonly workFlowUserValues: IWorkFlowUserGridDataValues;
  readonly selectRoleValues: ReadonlyArray<IRoleWorkFlowUserValues>;
  readonly selectUserValues: ReadonlyArray<any>;
  handleRoleClick(
    roleId: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ): void;
  handleUserClick(UserId: string, roleid: number, id: number): void;
}

const WorkFlowUserMapInnerForm = (props: IWorkFlowMapProps) => (
  <TableRow>
    <TableCell>{props.workFlowUserValues.AllocateToName}</TableCell>
    <TableCell>{props.workFlowUserValues.AllocationTypeName}</TableCell>
    <TableCell>{props.workFlowUserValues.AgreementTypeName}</TableCell>
    <TableCell>{props.workFlowUserValues.ActivityList}</TableCell>
    <TableCell>{props.workFlowUserValues.OrderNo}</TableCell>
    <TableCell>
      <FormControl>
        <Select
          value={props.workFlowUserValues.RoleId}
          inputProps={{
            id: "RoleId",
            name: "RoleId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            props.handleRoleClick(event, props.workFlowUserValues.id);
          }}
        >
          {props.selectRoleValues.map(
            (e: IRoleWorkFlowUserValues, id: number) => (
              <MenuItem
                key={id}
                className="select-dropdown-bottom"
                value={e.RoleId}
              >
                {e.RoleName}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </TableCell>
    <TableCell>
      <FormControl>
        <Select
          value={props.workFlowUserValues.UserId}
          inputProps={{
            id: "UserId",
            name: "UserId"
          }}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            props.handleUserClick(
              event.target.value,
              props.workFlowUserValues.RoleId,
              props.workFlowUserValues.id
            );
          }}
        >
          {props.selectUserValues
            .filter(x => x.RoleId === props.workFlowUserValues.RoleId)
            .map(x => x.UList)
            .reduce((res, arr) => [...res, ...arr], [])
            .map((e: IUserValues, id: number) => (
              <MenuItem
                key={id}
                className="select-dropdown-bottom"
                value={e.UserId}
              >
                {e.UserName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </TableCell>
  </TableRow>
);

export const WorkFlowUserMapListTable = (
  props: IWorkFlowUserMapGridStateProps
) => {
  return (
    <div>
      <div className="row text-center excel-btn">
        <Workbook
          filename="WorkFlowUserMapping.xlsx"
          element={
            <button>
              {" "}
              <img src="/images/excel.png" />
              Export
            </button>
          }
        >
          <Workbook.Sheet data={props.workFlowUserMapList} name="Sheet A">
            <Workbook.Column label="Allocation Name" value="AllocateToName" />
            <Workbook.Column
              label="Allocation Type Name"
              value="AllocationTypeName"
            />
            <Workbook.Column
              label="Agreement Type Name"
              value="AgreementTypeName"
            />
            <Workbook.Column label="Activity" value="ActivityList" />
            <Workbook.Column label="Activity Order" value="OrderNo" />
          </Workbook.Sheet>
        </Workbook>
      </div>
      <div className="table-data">
        <Table className="final-table">
          <TableHead>
            <TableRow>
              <TableCell>Allocation Name</TableCell>
              <TableCell>Allocation Type Name</TableCell>
              <TableCell>Agreement Type Name</TableCell>
              <TableCell>Activity</TableCell>
              <TableCell>Activity Order</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.workFlowUserMapList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={12} style={{ textAlign: "center" }}>
                  <h2 className="no-dtat-title"> No data available in list</h2>
                </TableCell>
              </TableRow>
            ) : (
              props.workFlowUserMapList
                .map((value, id) => (
                  <WorkFlowUserMapInnerForm
                    key={id}
                    workFlowUserValues={value}
                    selectRoleValues={props.selectRoleValues}
                    selectUserValues={props.selectUserValues}
                    handleRoleClick={props.handleRoleClick}
                    handleUserClick={props.handleUserClick}
                  />
                ))

                .filter((x: React.ReactElement<IWorkFlowMapProps>) => {
                  return props.searchInput !== ""
                    ? x.props.workFlowUserValues.AllocateToName.includes(
                        props.searchInput
                      ) ||
                        x.props.workFlowUserValues.AllocationTypeName.includes(
                          props.searchInput
                        ) ||
                        x.props.workFlowUserValues.AgreementTypeName.includes(
                          props.searchInput
                        ) ||
                        x.props.workFlowUserValues.ActivityList.includes(
                          props.searchInput
                        ) ||
                        x.props.workFlowUserValues.OrderNo.toString().includes(
                          props.searchInput
                        )
                    : true;
                })
                .slice(
                  props.page * props.rowsPerPage,
                  props.page * props.rowsPerPage + props.rowsPerPage
                )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const WorkFlowUserMapTable = (props: IWorkFlowUserMapGridStateProps) => (
  <div className="table-card ">
    <TextField
      className="inner-search"
      id="standard-search"
      placeholder="Search field"
      type="search"
      value={props.searchInput}
      onChange={props.onHandleSearch}
      margin="normal"
      InputProps={{
        endAdornment: (
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
        )
      }}
    />
    <WorkFlowUserMapListTable
      workFlowUserMapList={props.workFlowUserMapList}
      count={props.count}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      searchInput={props.searchInput}
      selectRoleValues={props.selectRoleValues}
      selectUserValues={props.selectUserValues}
      handleRoleClick={props.handleRoleClick}
      handleUserClick={props.handleUserClick}
      onHandleSearch={props.onHandleSearch}
    />
    <Pager
      count={props.count}
      page={props.page}
      rowsPerPage={props.rowsPerPage}
      onHandleChangeRowsPerPage={props.onHandleChangeRowsPerPage}
      onHandlePageChange={props.onHandlePageChange}
    />
  </div>
);
export default WorkFlowUserMapTable;
