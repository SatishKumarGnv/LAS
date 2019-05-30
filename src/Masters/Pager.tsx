import * as React from "react";

import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "../Container/TableAction";
// import { ITablePaginationProps } from './StateMaintain';

export interface IPagerProps {
  readonly count: number;
  readonly page: number;
  readonly rowsPerPage: number;
  onHandlePageChange(evt: any, value: any): void;
  onHandleChangeRowsPerPage(event: any): void;
}

const Pager = (props: IPagerProps) => (
  // <TablePagination
  //   component="div"
  //   count={props.count}
  //   rowsPerPage={props.rowsPerPage}
  //   page={props.page}
  //   backIconButtonProps={{
  //     "aria-label": "Previous Page"
  //   }}
  //   nextIconButtonProps={{
  //     "aria-label": "Next Page"
  //   }}
  //   onChangePage={props.onHandlePageChange}
  //   onChangeRowsPerPage={props.onHandleChangeRowsPerPage}
  // />
  <TablePagination
    component="div"
    colSpan={3}
    id={"Page"}
    count={props.count}
    rowsPerPage={props.rowsPerPage}
    page={props.page}
    onChangePage={props.onHandlePageChange}
    onChangeRowsPerPage={props.onHandleChangeRowsPerPage}
    ActionsComponent={TablePaginationActions}
  />
);

export default Pager;
