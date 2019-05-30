import * as React from "react";
import AllocationTypeMasterForm, {
  IEditAllocationProps
} from "../Masters/AllocationTypeMaster/AllocationTypeMasterTable";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { loader } from "src/DefaultLayout/HomePage";
import {
  getAddAllocationValues,
  getAllocatedToList,
  getAllocationTypeValues,
  // getEditAllocationValues,
  // getEditAllocationValues,
  postActivateID,
  postDeActivateId,
  postEditAllocationValues
  // postEditAllocationValues
} from "../Api_Integration/AllocationTypeMasterService";
import AddAllocationMasterForm from "../Masters/AllocationTypeMaster/AddAllocationTypeMaster";

export interface IAllocationTypeMasterValues {
  readonly AllocationId: number;
  readonly AllocationName: string;
  readonly AllocationSubTypeId: number;
  readonly AllocationSubTypeName: string;
  readonly CreatedBy: number;
  readonly IsActive: string;
  readonly ReturnCode: number;
}

export interface IAllocationTypeMasterProps {
  readonly allocationTypeList: ReadonlyArray<IAllocationTypeMasterValues>;
  readonly searchInput: string;
  readonly count: number;
  readonly open: boolean;

  readonly open2: boolean;

  // readonly expandApplicationId: string;
  // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly editPopUpOpen: boolean;
  readonly addPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  readonly deActivatePopUpOpen: boolean;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(allocationValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(allocationValues: IAllocationTypeMasterValues): void;
  onHandleEditActionClick(allocationValues: IAllocationTypeMasterValues): void;
  onHandleNameChange(event: any): void;
  onHandleEditSave(
    values: IEditAllocationProps & IEditAllocationValues
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;
  // HandleEditAllocationChange(event: any): void;
  onHandleDropDownChange(event: any): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(values: IAddAllocaionValues & IAddAllocationProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUpOpen(allocationValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditAllocationValues {
  readonly AllocationId: number;
  readonly allocationName: string;
  readonly AllocationSubTypeId: number;
  readonly AllocationSubTypeName: string;
  readonly allocationNameValues: ReadonlyArray<IAllocationTypeMasterValues>;
}

export interface IAddAllocaionValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeName: string;
  readonly newAllocationName: string;

  readonly allocationNameValues: ReadonlyArray<IAllocationTypeMasterValues>;
  onHandleAddChange(event: any): void;
}

export interface IAddAllocationProps {
  readonly allocationTypeList: ReadonlyArray<IAllocationTypeMasterValues>;
  onHandleAddSave(values: IAddAllocaionValues & IAddAllocationProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateAllocationProps {
  readonly AllocationSubTypeId: number;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUpClose(): void;
}

class AllocationTypeMasterState extends React.Component<
  IAllocationTypeMasterProps
> {
  public state = {
    activatePopUpOpen: false,
    addPopUpOpen: false,
    allocationName: "",
    allocationNameValues: [],
    editSuccessPopUp: false,
    // tslint:disable-next-line:object-literal-sort-keys
    AllocationId: 0,
    AllocationSubTypeName: "",
    count: 0,
    AllocationSubTypeId: 0,
    allocationTypeList: [],
    deActivatePopUpOpen: false,
    dialog: false,
    editPopUpOpen: false,
    open: false,
    open2: false,
    id: 0,
    dialog1: false,
    newAllocationName: "",
    page: 0,
    rowsPerPage: 5,
    allocationValues: {
      AllocationId: 0,
      AllocationName: "",
      AllocationSubTypeId: 0,
      AllocationSubTypeName: "",
      CreatedBy: 0,
      IsActive: "",
      ReturnCode: 0
    },
    searchInput: "",
    MaxAllocationSubTypeId: 0
  };

  public async componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      const res1 = await getAllocationTypeValues();
      const res2 = await getAllocatedToList();

      this.setState({
        ...this.state,
        MaxAllocationSubTypeId: res1.jsonData.data
          .map((x: IAllocationTypeMasterValues) => x.AllocationSubTypeId)
          .filter((x: number, y: number) => x > y),
        allocationNameValues: res2.jsonData.AllocaitonTypeslist,
        allocationTypeList: res1.jsonData.data,
        count: res1.jsonData.data.length
      });
      if (loader != null) {
        loader.style.display = "none";
      }
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.log(err);
      if (loader != null) {
        loader.style.display = "none";
      }
    }
  }
  // for page change
  public readonly handleChangePage = (event: any, page: number) => {
    this.setState({ page });
  };

  // for rows change per page
  public readonly handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };
  public onHandleDropDownChange = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event.target.value);
  };
  //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
  //       this.setState(event.target.value)
  //   }

  // fetch Call for Pop Up details based on ID
  public onHandleActionClick = (
    allocationValues: IAllocationTypeMasterValues
  ) => {
    this.setState({
      ...this.state,
      allocationValues,
      open: allocationValues.IsActive.toString() === "true" ? true : false,
      open2: allocationValues.IsActive.toString() === "false" ? true : false
      //   //   allocationName: AllocationName,
      //   //   dropDownOpen: value === true ? event.currentTarget : null,
      //   //   dropDownOpen2: value === false ? event.currentTarget : null,

      //   //   // tslint:disable-next-line:object-literal-sort-keys
      //   //   AllocationId: id,
      //   //   AllocationSubTypeName,
      //   //   // tslint:disable-next-line:object-literal-sort-keys
      //   //   AllocationSubTypeId
    });
  };

  public onHandleAddChange = (event: any) => {
    this.setState({ ...this.state, newAllocationName: event.target.value });
  };

  // for Edit PopUp open
  public onHandleEditActionClick = (
    allocationValues: IAllocationTypeMasterValues
  ) => {
    this.setState({
      ...this.state,
      allocationValues,
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
    const searchInput = event.target.value;
    const data = this.state.allocationTypeList.filter(
      (x: IAllocationTypeMasterValues) =>
        searchInput !== ""
          ? x.AllocationName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            this.allocationNameIncludes(searchInput, x.AllocationSubTypeName) ||
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
  public onHandleDeActivatePopUpOpen = (allocationValues: any) => {
    this.setState({
      ...this.state,
      allocationValues,
      deActivatePopUpOpen: true,
      open: false
    });
  };
  public allocationNameIncludes = (
    searchInput: string,
    allocationName?: string
  ) => {
    if (allocationName) {
      return allocationName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return false;
    }
  };
  // Activate Popup open
  public onHandleActivatePopUpOpen = (allocationValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpen: true,
      allocationValues,
      open2: false
    });
  };

  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state, addPopUpOpen: true });
  };

  // fetch call for Edited Document Id Save
  public onHandleEditSave = (
    event: IEditAllocationProps & IEditAllocationValues
    // id: number,
    // AllocationSubTypeId: number,
    // AllocationSubTypeName: string
  ) => {
    // fetch call for Edit values Save
    postEditAllocationValues(
      event.AllocationId,
      event.AllocationSubTypeId,
      event.AllocationSubTypeName
    )
      .then(res => {
        this.setState({
          ...this.state,
          // allocationName: name,
          AllocationSubTypeName: event.AllocationSubTypeName,
          // tslint:disable-next-line:object-literal-sort-keys
          AllocationSubTypeId: event.AllocationSubTypeId,
          // allocationTypeList: res,
          // tslint:disable-next-line:object-literal-sort-keys
          AllocationId: event.AllocationId,
          editPopUpOpen: false,
          editSuccessPopUp: true
        });
      })
      .then(() =>
        getAllocationTypeValues().then(res => {
          this.setState({
            ...this.state,
            allocationTypeList: res.jsonData.data,
            newAllocationName: ""
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
          //  allocationTypeList: res,
          deActivatePopUpOpen: false
        });
      })
      .then(() =>
        getAllocationTypeValues().then(res => {
          this.setState({
            ...this.state,
            allocationTypeList: res.jsonData.data,
            newAllocationName: ""
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // To Close Dialog PopUp
  public onHandleClose = () => {
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
    this.setState({ ...this.state, addPopUpOpen: false });
  };

  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClose = () => {
    this.setState({ ...this.state, deActivatePopUpOpen: false });
  };

  // To Close Activate PopUp Close
  public onHandleActivatePopUpClose = () => {
    this.setState({ ...this.state, activatePopUpOpen: false });
  };
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };

  public onHandleAddSave = (
    values: IAddAllocaionValues & IAddAllocationProps
  ) => {
    if (
      this.state.allocationTypeList.filter(
        (x: IAllocationTypeMasterValues) =>
          x.AllocationSubTypeName === values.newAllocationName
      ).length === 0
    ) {
      getAddAllocationValues(
        values.AllocationId,
        //   this.state.MaxAllocationSubTypeId,
        values.newAllocationName
      )
        .then(res => {
          this.setState({
            ...this.state.allocationTypeList,
            res
          });
        })
        .then(() => {
          this.setState({
            ...this.state,
            addPopUpOpen: false
          });
        })
        .then(() =>
          getAllocationTypeValues().then(res => {
            this.setState({
              ...this.state,
              allocationTypeList: res.jsonData.data,
              count: res.jsonData.data.length,
              dialog: true,
              newAllocationName: ""
            });
          })
        )
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        AllocationSubTypeName: "",
        dialog1: true
      });
    }
  };

  public onHandleActivateClick = (event: any) => {
    postActivateID(event)
      .then(res => {
        this.setState({
          ...this.state,
          activatePopUpOpen: false
          // allocationTypeList: res
        });
      })
      .then(() =>
        getAllocationTypeValues().then(res => {
          this.setState({
            ...this.state,
            allocationTypeList: res.jsonData.data,
            newAllocationName: ""
          });
        })
      )
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  public handlePopUpClose1 = () => {
    this.setState({
      dialog1: false
    });
  };
  public onHandleNameChange = (event: any) => {
    this.setState({ ...this.state, AllocationSubTypeName: event.target.value });
  };

  // public HandleEditAllocationChange = (event: any) => {
  //   this.setState({
  //     ...this.state,
  //     AllocationId: event.target.value,
  //     allocationValues: {
  //       ...this.state.allocationValues,
  //       AllocationId: event.target.value
  //     }
  //   });
  // };

  public onHandleEditSuccessPopUpClose = () => {
    this.setState({ ...this.state, editSuccessPopUp: false });
  };

  public render() {
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
                  {/* <img src="/images/graph-icon.png" /> */}
                  Allocation Type Master
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
                    Add Allocation Type
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddAllocationMasterForm
                    allocationNameValues={this.state.allocationNameValues}
                    AllocationId={this.state.AllocationId}
                    AllocationSubTypeName={this.state.AllocationSubTypeName}
                    newAllocationName={this.state.newAllocationName}
                    allocationTypeList={this.state.allocationTypeList}
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  />
                </div>
              </Dialog>
            }
            <AllocationTypeMasterForm
              // HandleEditAllocationChange={this.HandleEditAllocationChange}
              onHandleNameChange={this.onHandleNameChange}
              onHandleDropDownChange={this.onHandleDropDownChange}
              open2={this.state.open2}
              allocationNameValues={this.state.allocationNameValues}
              allocationTypeList={this.state.allocationTypeList}
              searchInput={this.state.searchInput}
              count={this.state.count}
              open={this.state.open}
              editPopUpOpen={this.state.editPopUpOpen}
              addPopUpOpen={this.state.addPopUpOpen}
              activatePopUpOpen={this.state.activatePopUpOpen}
              deActivatePopUpOpen={this.state.deActivatePopUpOpen}
              onHandleActivatePopUpOpen={this.onHandleActivatePopUpOpen}
              onHandleActivePopUpClose={this.onHandleActivatePopUpClose}
              onHandleActivateClick={this.onHandleActivateClick}
              onHandleSearch={this.onHandleSearch}
              onHandleAddPopUp={this.onHandleAddPopUpOpen}
              onHandleAddPopUpClose={this.onHandleAddPopUpClose}
              onHandleAddSave={this.onHandleAddSave}
              AllocationId={this.state.AllocationId}
              allocationName={this.state.allocationName}
              AllocationSubTypeName={this.state.AllocationSubTypeName}
              onHandleEditSave={this.onHandleEditSave}
              AllocationSubTypeId={this.state.AllocationSubTypeId}
              onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
              onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
              onHandleDeActivateSave={this.onHandleDeActivateSave}
              onHandleEditActionClick={this.onHandleEditActionClick}
              onHandleEditPopUpClose={this.onHandleEditPopUpClose}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              onHandlePageChange={this.handleChangePage}
              onHandleActionClick={this.onHandleActionClick}
              onHandleClose={this.onHandleClose}
              onHandleClose2={this.onHandleClose2}
              allocationValues={this.state.allocationValues}
            />
          </Card>
        </div>
        {
          <Dialog
            open={this.state.editSuccessPopUp}
            onClose={this.onHandleEditSuccessPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div className="popup-title">
              <DialogTitle id="simple-dialog-title">
                You have successfully updated allocation type
              </DialogTitle>
            </div>
            <div id="simple-dialog-title">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.onHandleEditSuccessPopUpClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialog}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have successfully added allocation type
              <div className="popup-bottom-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="main-btn"
                  // tslint:disable-next-line:jsx-no-lambda
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
            open={this.state.dialog1}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Allocation type already existed, please add new allocation type.
              <div className="title-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="save-btn"
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

export default AllocationTypeMasterState;
