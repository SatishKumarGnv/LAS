import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import { DialogTitle } from "@material-ui/core";
import AddlandAreaTypeForm from "src/Masters/LandAreaUnits/AddLandAreaForm";
import LandAreaTypeMasterForm, {
  IEditLandAreaProps
} from "src/Masters/LandAreaUnits/LandAreaUnits";
import {
  getLandAreaUnitValues,
  postActivateID,
  postAddLandAreaValues,
  postDeActivateId,
  postEditlandAreaValues
} from "../Api_Integration/LandAreaUnitsService";

export interface ILandAreaUnitsStateValues {
  readonly UnitsName?: string;
  readonly CreatedOn: string;
  readonly CreatedBy: number;
  readonly ModifiedOn: string;
  readonly ModifiedBy: number;
  readonly UnitsId: number;
  readonly IsActive: string;
  readonly ReturnCode: number;
}
export interface ILandAreaUnitsStateProps {
  readonly LandAreaList: ReadonlyArray<ILandAreaUnitsStateValues>;
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
  onHandleDeActivatePopUpOpen(landAreaValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(landAreaValues: any): void;
  onHandleEditActionClick(landAreaValues: any): void;
  onHandleEditSave(values: IEditLandAreaProps & IEditLandAreaValues): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;
  onHandleAddSave(values: IAddLandAreaValues & IAddLandAreaProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUp(landAreaValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditLandAreaValues {
  readonly UnitsId: number;
  readonly UnitsName: string;
  // onHandleEditNameChange(event: any): void;
}

export interface IAddLandAreaValues {
  readonly id: number;
  readonly landAreaName: string;
  onHandleAddChange(event: any): void;
}

export interface IAddLandAreaProps {
  readonly LandAreaList: ReadonlyArray<ILandAreaUnitsStateValues>;
  onHandleAddSave(values: IAddLandAreaValues & IAddLandAreaProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateProps {
  readonly UnitsId: number;
  onHandleActivateClick(event: any): void;
  onHandleActivePopUpClose(): void;
}

class LandAreaTypeMasterState extends React.Component<
  ILandAreaUnitsStateProps & IEditLandAreaValues
> {
  public readonly state = {
    LandAreaList: [],
    UnitsId: 0,
    UnitsName: "",
    activatePopUpOpen: false,
    addPopUpOpen: false,
    count: 0,
    deActivatePopUpOpen: false,
    dialog: false,
    dialog1: false,
    documentName: "",
    editPopUpOpen: false,
    editSuccessPopUp: false,
    id: 0,
    landAreaName: "",
    landAreaValues: {
      CreatedBy: 0,
      CreatedOn: "",
      IsActive: "",
      ModifiedBy: 0,
      ModifiedOn: "",
      ReturnCode: 0,
      UnitsId: 0,
      UnitsName: ""
    },
    open: false,
    open2: false,
    page: 0,
    rowsPerPage: 5,
    searchInput: ""
  };
  constructor(props: ILandAreaUnitsStateProps & IEditLandAreaValues) {
    super(props);
  }
  public componentWillMount() {
    // getting data for the documenttypemaster table
    getLandAreaUnitValues()
      .then(res => {
        this.setState({
          ...this.state,
          LandAreaList: res.jsonData.data,
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

  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };
  public onHandleActionClick = (landAreaValues: any) => {
    // tslint:disable-next-line:no-console
    this.setState({
      ...this.state,
      landAreaValues,
      open: landAreaValues.IsActive === true ? true : false,
      open2: landAreaValues.IsActive === false ? true : false
      // tslint:disable-next-line:object-literal-sort-keys
      // documentName: name,
      // dropDownOpen: value === true ? event.currentTarget : null,
      // dropDownOpen2: value === false ? event.currentTarget : null,
      // id
    });
  };

  public onHandleEditNameChange = (event: any) => {
    this.setState({ ...this.state, UnitsName: event.target.value });
  };

  public onHandleAddChange = (event: any) => {
    this.setState({ ...this.state, landAreaName: event.target.value });
  };

  // for Edit PopUp open
  public onHandleEditActionClick = (landAreaValues: any) => {
    this.setState({
      ...this.state,
      editPopUpOpen: true,
      landAreaValues,
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
    const searchInput = event.target.value;
    const data = this.state.LandAreaList.filter(
      (x: ILandAreaUnitsStateValues) =>
        searchInput !== ""
          ? this.unitsNameIncludes(searchInput, x.UnitsName) ||
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
  public onHandleDeActivatePopUpOpen = (landAreaValues: any) => {
    this.setState({
      ...this.state,
      deActivatePopUpOpen: true,
      landAreaValues,
      open: false
    });
  };

  // Activate Popup open
  public onHandleActivatePopUpOpen = (landAreaValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpen: true,
      landAreaValues,
      open2: false
    });
  };

  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state, addPopUpOpen: true });
  };
  public unitsNameIncludes = (searchInput: string, unitsName?: string) => {
    if (unitsName) {
      return unitsName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return "";
    }
  };
  // fetch call for Edited Document Id Save
  public onHandleEditSave = (
    values: IEditLandAreaProps & IEditLandAreaValues
  ) => {
   
    // fetch call for Edit values Save

    postEditlandAreaValues(values)
      .then(res => {
        this.setState({
          ...this.state,
          UnitsName: values.UnitsName,
          editPopUpOpen: false,
          // tslint:disable-next-line:object-literal-sort-keys
          // LandAreaList: res,
          // tslint:disable-next-line:object-literal-sort-keys
          UnitsId: values.UnitsId,
          editSuccessPopUp: true
        });
      })
      .then(() =>
        getLandAreaUnitValues().then(res => {
          this.setState({
            ...this.state,
            LandAreaList: res.jsonData.data
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // fetch call for Deactivate DocumentId
  public onHandleDeActivateSave = (event: any) => {
    postDeActivateId(event)
      .then(res => {
        this.setState({
          ...this.state,
          deActivatePopUpOpen: false
          // LandAreaList: res
        });
      })
      .then(() =>
        getLandAreaUnitValues().then(res => {
          this.setState({
            ...this.state,
            LandAreaList: res.jsonData.data
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  public handlePopUpClose1 = () => {
    this.setState({
      dialog1: false,
      newRoleName: ""
    });
  };
  // To Close Dialog PopUp
  public onHandleClose1 = () => {
    this.setState({ ...this.state, open: false });
  };
  public onHandleClose2 = () => {
    this.setState({ ...this.state, open2: false });
  };
  // To Close Edit PopUp Close
  public onHandleEditPopUpClose = () => {
    this.setState({ ...this.state, editPopUpOpen: false });
  };

  // to Close Add PopUp
  public onHandleAddPopUpClose = () => {
    this.setState({ ...this.state, addPopUpOpen: false, landAreaName: "" });
  };

  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClose = () => {
    this.setState({ ...this.state, deActivatePopUpOpen: false });
  };

  // To Close Activate PopUp Close
  public onHandleActivatePopUpClose = () => {
    this.setState({ ...this.state, activatePopUpOpen: false });
  };

  public onHandleAddSave = (values: IAddLandAreaValues & IAddLandAreaProps) => {
    if (
      this.state.LandAreaList.filter(
        (x: ILandAreaUnitsStateValues) => x.UnitsName === values.landAreaName
      ).length === 0
    ) {
      postAddLandAreaValues(
        this.state.LandAreaList.length + 1,
        values.landAreaName
      )
        .then(res => {
          this.setState({
            // LandAreaList: [...this.state.LandAreaList, res],
            addPopUpOpen: false,
            dialog: true
          });
        })
        .then(() =>
          getLandAreaUnitValues().then(res => {
            this.setState({
              ...this.state,
              LandAreaList: res.jsonData.data,
              count: res.jsonData.data.length,
              landAreaName: ""
            });
          })
        )

        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        dialog1: true,
        landAreaName: ""
      });
    }
  };

  public onHandleActivateClick = (event: any) => {
    postActivateID(event)
      .then(res => {
        this.setState({
          ...this.state,

          activatePopUpOpen: false
        });
      })
      .then(() =>
        getLandAreaUnitValues().then(res => {
          this.setState({
            ...this.state,
            LandAreaList: res.jsonData.data
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public onHandleEditSuccessPopUpClose = () => {
    this.setState({ ...this.state, editSuccessPopUp: false });
  };

  public render() {
    const { LandAreaList, rowsPerPage, page } = this.state;
    // const open = Boolean(this.state.dropDownOpen);
    // const open2 = Boolean(this.state.dropDownOpen2);

    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, LandAreaList.length - page * rowsPerPage);
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
                  Land Area Units
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpen()}
                  >
                    + Add
                  </Button>
                </div>
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
                    Add Units Name
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddlandAreaTypeForm
                    id={this.state.id}
                    landAreaName={this.state.landAreaName}
                    LandAreaList={this.state.LandAreaList}
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  />
                </div>
              </Dialog>
            }
            <LandAreaTypeMasterForm
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
              UnitsId={this.state.UnitsId}
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
              open2={this.state.open2}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              onHandlePageChange={this.handleChangePage}
              onHandleActionClick={this.onHandleActionClick}
              onHandleClose={this.onHandleClose1}
              onHandleClose2={this.onHandleClose2}
              LandAreaList={this.state.LandAreaList}
              // UnitsId={this.state.UnitsId}
              UnitsName={this.state.UnitsName}
              landAreaValues={this.state.landAreaValues}
              open={this.state.open}
            />
          </Card>
        </div>
        {
          <Dialog
            open={this.state.dialog}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have successfully added land area unit
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
                <Button
                  className="main-btn" // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handlePopUpClose()}
                >
                  OK
                </Button>
              </div>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.editSuccessPopUp}
            onClose={this.onHandleEditSuccessPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div className="popup-title">
              <DialogTitle id="simple-dialog-title">
                You have successfully updated Land Area Units
              </DialogTitle>
            </div>
            <div id="simple-dialog-title">
              <Button
                className="main-btn"
                //  tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.onHandleEditSuccessPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialog1}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Land area unit name already existed, please add new land area unit
              name.
              <div className="popup-bottom-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handlePopUpClose1()}
                >
                  OK
                </Button>
              </div>
            </div>
          </Dialog>
        }
      </div>
    );
  }
}

export default LandAreaTypeMasterState;
