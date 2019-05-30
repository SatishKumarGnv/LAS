import * as React from "react";

import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

export interface IApplicationStateActionProps {
  readonly page: number;
  readonly count: number;
  readonly rowsPerPage: number;
  onChangePage(event: any, page: number): void;
}

class TablePaginationActions extends React.Component<
  any,
  IApplicationStateActionProps
> {
  public handleBackButtonClick = (event: any) => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  public handleNextButtonClick = (event: any) => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  public render() {
    const { page, count, rowsPerPage } = this.props;

    return (
      <div className="page-arrow">
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        {count === 0 ? this.props.page : this.props.page + 1}
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
    );
  }
}

export default TablePaginationActions;
