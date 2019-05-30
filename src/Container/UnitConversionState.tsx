import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import {
  getUnitConversionGridValues,
  postActivateID,
  postAddUnitConversionTypeValues,
  postDeActivateId,
  postEditUnitConversionTypeValues
} from "src/Api_Integration/UnitConversionService";
import AddUnitConversionTypeForm from "src/Masters/UnitConversions/AddUnitConversion";
import UnitConversionTypeMasterForm, {
  IEditUnitProps
} from "src/Masters/UnitConversions/UnitConversionTypeMaster";
// import { ISubmitApplicationPopUpValues } from "./SubmittedApplicationState";
// import Pager from './Pager'

export interface IUnitConversionTypeStateValues {
  readonly UnitId: number;
  readonly UnitName: string;

  readonly ConvertToUnitName: string;
  readonly IsActive: string;
  readonly ConvertValue: number;
  readonly UnitConvertionId: number;
  readonly ReturnCode: number;
}
export interface IUnitConversionTypeMasterStateProps {
  readonly UnitTypeMasterList: ReadonlyArray<IUnitConversionTypeStateValues>;
  readonly emptyRows: number;
  readonly searchInput: string;
  readonly open: boolean;
  readonly open2: boolean;

  // readonly expandApplicationId: string;
  // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly editPopUpOpen: boolean;
  readonly addPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  readonly deActivatePopUpOpen: boolean;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(unitValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(unitValues: any): void;
  onHandleEditActionClick(unitValues: any): void;
  onHandleEditSave(values: IEditUnitProps & IEditUnitConversionValues): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(
    values: IAddUnitConversionValues & IAddUnitConversionProps
  ): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUp(unitValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditUnitConversionValues {
  readonly UnitConvertionId: number;
  readonly UnitName: string;
  // onHandleEditNameChange(event: any): void;
}

export interface IAddUnitConversionValues {
  readonly UnitConvertionId: number;
  readonly newUnitName: string;
  onHandleAddChange(event: any): void;
}

export interface IAddUnitConversionProps {
  readonly UnitTypeMasterList: ReadonlyArray<IUnitConversionTypeStateValues>;
  onHandleAddSave(
    values: IAddUnitConversionValues & IAddUnitConversionProps
  ): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateProps {
  readonly id: number;
  onHandleActivateClick(event: any): void;
  onHandleActivePopUpClose(): void;
}

class UnitConversionTypeMasterState extends React.Component<
  IUnitConversionTypeMasterStateProps &
    IEditUnitConversionValues &
    IUnitConversionTypeStateValues
> {
  public readonly state = {
    UnitConversionTypeMasterList: [],
    activatePopUpOpen: false,
    addPopUpOpen: false,
    deActivatePopUpOpen: false,
    // tslint:disable-next-line:object-literal-sort-keys
    UnitName: "",
    open: false,
    open2: false,
    editPopUpOpen: false,
    unitValues: {
      UnitId: 0,
      UnitName: "",

      // tslint:disable-next-line:object-literal-sort-keys
      ConvertToUnitName: "",
      IsActive: "",
      // tslint:disable-next-line:object-literal-sort-keys
      ConvertValue: 0,
      UnitConvertionId: 0,
      ReturnCode: 0
    },
    UnitConvertionId: 0,
    newUnitName: "",
    page: 0,
    count: 0,
    rowsPerPage: 5,
    searchInput: ""
  };
  constructor(
    props: IUnitConversionTypeMasterStateProps &
      IEditUnitConversionValues &
      IUnitConversionTypeStateValues
  ) {
    super(props);
  }
  public componentWillMount() {
    // getting data for the documenttypemaster table
    getUnitConversionGridValues()
      .then(res => {
        this.setState({
          ...this.state,
          UnitConversionTypeMasterList: res.jsonData.data,
          count: res.jsonData.data.length
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  }
  // for page change
  public readonly handleChangePage = (event: any, page: number) => {
    this.setState({ page });
  };

  // for rows change per page
  public readonly handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
  //       this.setState(event.target.value)
  //   }

  // fetch Call for Pop Up details based on ID
  public onHandleActionClick = (unitValues: any) => {
    this.setState({
      ...this.state,
      unitValues,
      // tslint:disable-next-line:object-literal-sort-keys
      open: unitValues.IsActive === true ? true : false,
      open2: unitValues.IsActive === false ? true : false
    });
  };

  public onHandleEditNameChange = (event: any) => {
    this.setState({ ...this.state, UnitName: event.target.value });
  };

  public onHandleAddChange = (event: any) => {
    this.setState({ ...this.state, newUnitName: event.target.value });
  };

  // for Edit PopUp open
  public onHandleEditActionClick = (unitValues: any) => {
    this.setState({
      ...this.state,
      editPopUpOpen: true,
      open: false
    });
  };

  public getActivestate = (state: string) => {
    switch (state) {
      case "Active".toLowerCase():
        return "true";
      case "InActive".toLowerCase():
        return "false";
      default:
        return state;
    }
  };

  // for Search Input Change
  public onHandleSearch = (event: any) => {
    // tslint:disable-next-line:no-console
    const searchInput = event.target.value;
    const data = this.state.UnitConversionTypeMasterList.filter(
      (x: IUnitConversionTypeStateValues) =>
        searchInput !== ""
          ? x.UnitName.toLowerCase().includes(searchInput.toLowerCase()) ||
            x.ConvertToUnitName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            x.ConvertValue.toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            x.IsActive.toString()
              .toLowerCase()
              .includes(this.getActivestate(searchInput.toLowerCase()))
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };

  // deActivate Popup open
  public onHandleDeActivatePopUpOpen = (unitValues: any) => {
    this.setState({
      ...this.state,
      deActivatePopUpOpen: true,
      open: false,
      unitValues
    });
  };

  // Activate Popup open
  public onHandleActivatePopUpOpen = (unitValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpen: true,
      open2: false,
      unitValues
    });
  };

  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state, addPopUpOpen: true });
  };

  // fetch call for Edited Document Id Save
  public onHandleEditSave = (
    values: IEditUnitProps & IEditUnitConversionValues
  ) => {
    // fetch call for Edit values Save
    postEditUnitConversionTypeValues(
      values,
      this.state.unitValues.UnitConvertionId
    ).then(res => {
      this.setState({
        ...this.state,
        // UnitConvertionId: event,
        UnitName: name,
        // documentTypeMasterList: res,
        editPopUpOpen: false
      });
    });
  };

  // fetch call for Deactivate DocumentId
  public onHandleDeActivateSave = (event: any) => {
    postDeActivateId(event)
      .then(res => {
        this.setState({
          ...this.state,
          deActivatePopUpOpen: false
          //  DocumentTypeMasterList: res,
        });
      })
      .then(() =>
        getUnitConversionGridValues().then(res => {
          this.setState({
            ...this.state,
            UnitConversionTypeMasterList: res.jsonData.data
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // To Close Dialog PopUp
  public onHandleClose1 = () => {
    this.setState({ ...this.state, open: false });
  };

  // To Close Dialog PopUp
  public onHandleClose2 = () => {
    this.setState({ ...this.state, open2: false });
  };

  // To Close Edit PopUp Close
  public onHandleEditPopUpClose = () => {
    this.setState({ ...this.state, editPopUpOpen: false });
  };

  // to Close Add PopUp
  public onHandleAddPopUpClose = () => {
    this.setState({ ...this.state, addPopUpOpen: false, newUnitName: "" });
  };

  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClose = () => {
    this.setState({ ...this.state, deActivatePopUpOpen: false });
  };

  // To Close Activate PopUp Close
  public onHandleActivatePopUpClose = () => {
    this.setState({ ...this.state, activatePopUpOpen: false });
  };

  public onHandleAddSave = (
    values: IAddUnitConversionValues & IAddUnitConversionProps
  ) => {
    postAddUnitConversionTypeValues(
      this.state.UnitConversionTypeMasterList.length + 1,
      values.newUnitName
    )
      .then(res => {
        this.setState({
          ...this.state,
          UnitConversionTypeMasterList: [
            ...this.state.UnitConversionTypeMasterList,
            ...res
          ],
          addPopUpOpen: false
        });
      })
      .then(() =>
        getUnitConversionGridValues().then(res => {
          this.setState({
            ...this.state,
            UnitConversionTypeMasterList: res.jsonData.data,
            count: res.jsonData.data.length,
            newUnitName: ""
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public onHandleActivateClick = (event: any) => {
    postActivateID(event)
      .then(res => {
        this.setState({
          ...this.state,
          // UnitConversionTypeMasterList: res,
          activatePopUpOpen: false
        });
      })
      .then(() =>
        getUnitConversionGridValues().then(res => {
          this.setState({
            ...this.state,
            UnitConversionTypeMasterList: res.jsonData.data
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public render() {
    const { UnitConversionTypeMasterList, rowsPerPage, page } = this.state;

    const emptyRows =
      rowsPerPage -
      Math.min(
        rowsPerPage,
        UnitConversionTypeMasterList.length - page * rowsPerPage
      );
    return (
      <div className="innerpage-container">
        <div className="graph-card">
          <Card className="title-card">
            <CardContent className="title-card">
              <div className="title-row">
                <Typography
                  gutterBottom={true}
                  variant="headline"
                  component="h4"
                  className="grap-heading"
                >
                  {/* <img src="/images/table-icon.png" /> */}
                  Unit Conversions
                </Typography>
              </div>
            </CardContent>
            {
              <Dialog
                open={this.state.addPopUpOpen}
                onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                    Add unit type
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddUnitConversionTypeForm
                    UnitConvertionId={this.state.UnitConvertionId}
                    newUnitName={this.state.newUnitName}
                    UnitTypeMasterList={this.state.UnitConversionTypeMasterList}
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  />
                </div>
              </Dialog>
            }
            <UnitConversionTypeMasterForm
              onHandleActivatePopUp={this.onHandleActivatePopUpOpen}
              onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
              activatePopUpOpen={this.state.activatePopUpOpen}
              onHandleActivateClick={this.onHandleActivateClick}
              searchInput={this.state.searchInput}
              onHandleSearch={this.onHandleSearch}
              addPopUpOpen={this.state.addPopUpOpen}
              onHandleAddPopUp={this.onHandleAddPopUpOpen}
              onHandleAddPopUpClose={this.onHandleAddPopUpClose}
              onHandleAddSave={this.onHandleAddSave}
              UnitConvertionId={this.state.UnitConvertionId}
              UnitName={this.state.UnitName}
              // onHandleEditNameChange={this.onHandleEditNameChange}
              onHandleEditSave={this.onHandleEditSave}
              deActivatePopUpOpen={this.state.deActivatePopUpOpen}
              onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
              onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
              onHandleDeActivateSave={this.onHandleDeActivateSave}
              editPopUpOpen={this.state.editPopUpOpen}
              onHandleEditActionClick={this.onHandleEditActionClick}
              onHandleEditPopUpClose={this.onHandleEditPopUpClose}
              emptyRows={emptyRows}
              count={this.state.count}
              page={page}
              rowsPerPage={this.state.rowsPerPage}
              open={this.state.open}
              open2={this.state.open2}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              onHandlePageChange={this.handleChangePage}
              onHandleActionClick={this.onHandleActionClick}
              onHandleClose={this.onHandleClose1}
              onHandleClose2={this.onHandleClose2}
              UnitTypeMasterList={this.state.UnitConversionTypeMasterList}
              unitValues={this.state.unitValues}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default UnitConversionTypeMasterState;
