import * as React from "react";
import AgreementTypeMasterForm, {
  IEditAgreementProps
} from "../Masters/AgreementTypeMaster/AgreementTypeMaster";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { loader } from "src/DefaultLayout/HomePage";
import AddAgreementMasterForm from "src/Masters/AgreementTypeMaster/AddAgreementType";
import {
  getAddAgreementValues,
  getAgreementDetails,
  getAgreementTypeValues,
  getAllocationSubTypeDetails,
  getAllocationTypeDetails,
  postActivateID,
  postDeActivateId,
  postEditAgreementValues
} from "../Api_Integration/AgreementTypeMasterService";

export interface IAgreementTypeMasterValues {
  readonly AgreementId: number;
  readonly AgreementName: string;
  readonly AllocationTypeId: number;
  readonly AllocationSubTypeId: number;
  readonly CreatedBy: number;
  readonly IsActive: string;
  readonly ReturnCode: number;
  readonly AllocateToName: string;
  readonly AllocationTypeName: string;
  readonly TypeOfAllocationId: number;
  readonly TypeOfAllocationName: null;
}

export interface IAgreementTypeAllocationDetails {
  readonly AllocationName: string;
  readonly AllocationId: number;

  handleLandAllocationClick(e: React.ChangeEvent<HTMLSelectElement>): void;
}
export interface IAgreementTypeAllocationSubTypeDetails {
  readonly AllocationName: string;
  readonly AllocationId: number;
}
export interface IAgreementTypeDetails {
  readonly AllocationName: string;
  readonly AllocationId: number;
}

export interface IAgreementTypeMasterProps {
  readonly allocationTypeList: ReadonlyArray<IAgreementTypeMasterValues>;
  readonly searchInput: string;
  readonly count: number;
  readonly open: boolean;

  readonly open2: boolean;

  readonly editPopUpOpen: boolean;
  readonly addPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  readonly deActivatePopUpOpen: boolean;
  handleEditAllocationChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(
    agreementValues: IAgreementTypeMasterValues
  ): void;
  onHandleDeActivateSave(id: number): void;
  onHandleActionClick(agreementValues: IAgreementTypeMasterValues): void;
  onHandleEditActionClick(agreementValues: IAgreementTypeMasterValues): void;
  onHandleNameChange(event: React.ChangeEvent<HTMLInputElement>): void;
  handleLandAllocationClick(e: React.ChangeEvent<HTMLSelectElement>): void;
  onHandleEditSave(values: IEditAgreementProps & IEditAgreementValues): void;

  onHandleDropDownChange(event: React.ChangeEvent<HTMLSelectElement>): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(values: IAddAgreementProps & IAddAgreementValues): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: React.ChangeEvent<HTMLInputElement>): void;
  onHandleActivatePopUpOpen(agreementValues: IAgreementTypeMasterValues): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(id: number): void;
}

export interface IEditAgreementValues {
  readonly AgreementId: number;
  readonly AgreementName: string;
  readonly AllocationTypeId: number;
  readonly AllocationSubTypeId: number;
  // readonly AllocateToName: string;
  // readonly TypeOfAllocationId: number;
  // readonly TypeOfAllocationName: null;

  // readonly AllocationId: number;
  // readonly allocationName: string;

  // readonly AllocationSubTypeId: number;
  // readonly AllocationSubTypeName: string;
  readonly allocationNameValues: ReadonlyArray<IAgreementTypeAllocationDetails>;
  readonly allocationTypeValues: ReadonlyArray<
    IAgreementTypeAllocationSubTypeDetails
  >;
  readonly EditAgreementValues: ReadonlyArray<IAgreementTypeMasterValues>;
}

export interface IAddAgreementValues {
  readonly AllocationTypeId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationSubTypeName: string;
  readonly newAgreementName: string;
  readonly AllocationName: string;
  readonly allocationTypeValues: ReadonlyArray<
    IAgreementTypeAllocationSubTypeDetails
  >;
  readonly allocationNameValues: ReadonlyArray<IAgreementTypeAllocationDetails>;
  onHandleAddChange(event: any): void;
}

export interface IAddAgreementProps {
  readonly allocationTypeList: ReadonlyArray<IAgreementTypeMasterValues>;
  handleLandAllocationClick(event: React.ChangeEvent<HTMLSelectElement>): void;
  onHandleAddSave(event: IAddAgreementValues & IAddAgreementProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateAgreementProps {
  readonly AgreementId: number;
  onHandleActivateClick(id: number): void;
  onHandleActivatePopUpClose(): void;
}

class AgreementTypeMasterState extends React.Component<
  IAgreementTypeMasterProps
> {
  public state = {
    activatePopUpOpen: false,
    addPopUpOpen: false,
    allocationName: "",
    // tslint:disable-next-line:object-literal-sort-keys
    AgreementName: "",
    AllocationTypeId: 0,
    CreatedBy: 0,
    IsActive: "",
    ReturnCode: 0,
    editSuccessPopUp: false,
    count: 0,
    AllocateToName: "",
    AllocationTypeName: "",
    TypeOfAllocationId: 0,
    TypeOfAllocationName: null,
    allocationNameValues: [],
    allocationTypeValues: [],
    // tslint:disable-next-line:object-literal-sort-keys
    AllocationId: 0,
    AllocationSubTypeName: "",
    AllocationSubTypeId: 0,
    allocationTypeList: [],
    deActivatePopUpOpen: false,
    dialog: false,
    editPopUpOpen: false,
    open: false,
    dialog1: false,
    open2: false,
    id: 0,
    newAgreementName: "",
    page: 0,
    AgreementId: 0,
    rowsPerPage: 5,
    AllocationName: "",
    agreementValues: {
      AgreementId: 0,
      AgreementName: "",
      AllocationTypeId: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      AllocationSubTypeId: 0,
      CreatedBy: 0,
      IsActive: "",
      ReturnCode: 0,
      AllocateToName: "",
      AllocationTypeName: "",
      TypeOfAllocationId: 0,
      TypeOfAllocationName: null
    },
    EditAgreementValues: [],
    searchInput: "",
    MaxAllocationSubTypeId: 0
  };

  public async componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      const res1 = await getAgreementTypeValues();
      const res2 = await getAllocationTypeDetails();
      const res3 = await getAllocationSubTypeDetails(
        this.state.AllocationTypeId
      );
      this.setState({
        ...this.state,
        MaxAllocationSubTypeId: res1.jsonData.data
          .map((x: IAgreementTypeMasterValues) => x.AllocationSubTypeId)
          .filter((x: number, y: number) => x > y),
        allocationNameValues: res2.jsonData.AllocaitonTypeslist,
        allocationTypeList: res1.jsonData.data,
        allocationTypeValues: res3.objAllocationTypesList,
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
  public onHandleDropDownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // tslint:disable-next-line:no-console
    console.log(event.target.value);
  };
  //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
  //       this.setState(event.target.value)
  //   }

  // fetch Call for Pop Up details based on ID
  public onHandleActionClick = (
    agreementValues: IAgreementTypeMasterValues
  ) => {
    this.setState({
      ...this.state,
      agreementValues,
      open: agreementValues.IsActive.toString() === "true" ? true : false,
      open2: agreementValues.IsActive.toString() === "false" ? true : false
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
    this.setState({ ...this.state, newAgreementName: event.target.value });
  };
  public agreementIncludes = (searchInput: string, agreementName?: string) => {
    if (agreementName) {
      return agreementName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return false;
    }
  };
  // for Edit PopUp open
  public onHandleEditActionClick = (
    agreementValues: IAgreementTypeMasterValues
  ) => {
    getAgreementDetails(this.state.agreementValues.AgreementId)
      .then(res => {
        this.setState({
          ...this.state,
          // AgreementId: res.data[0].AgreementId,
          // AgreementName: res.data[0].AgreementName,
          // AllocationSubTypeId: res.data[0].AllocationSubTypeId,
          // AllocationTypeId: res.data[0].AllocationTypeId,
          EditAgreementValues: res.jsonData.data,
          agreementValues,
          editPopUpOpen: true,
          open: false
        });
      }) // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  // for Search Input Change
  public onHandleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value;
    const data = this.state.allocationTypeList.filter(
      (x: IAgreementTypeMasterValues) =>
        searchInput !== ""
          ? this.allocationIncludes(searchInput, x.AllocateToName) ||
            this.allocationTypeIncludes(searchInput, x.AllocationTypeName) ||
            this.agreementIncludes(searchInput, x.AgreementName) ||
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
  public onHandleRefresh = () => {
    getAgreementTypeValues()
      .then(res => {
        this.setState({
          ...this.state,
          allocationTypeList: res.jsonData.data,
          newAgreementName: ""
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
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
  public allocationIncludes = (
    searchInput: string,
    allocationName?: string
  ) => {
    if (allocationName) {
      return allocationName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return "";
    }
  };
  public allocationTypeIncludes = (
    searchInput: string,
    allocationTypeName?: string
  ) => {
    if (allocationTypeName) {
      return allocationTypeName
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    } else {
      return "";
    }
  };
  // deActivate Popup open
  public onHandleDeActivatePopUpOpen = (agreementValues: any) => {
    this.setState({
      ...this.state,
      agreementValues,
      deActivatePopUpOpen: true,
      open: false
    });
  };

  // Activate Popup open
  public onHandleActivatePopUpOpen = (agreementValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpen: true,
      agreementValues,
      open2: false
    });
  };

  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state, addPopUpOpen: true });
  };

  // fetch call for Edited Document Id Save
  public onHandleEditSave = (
    event: IEditAgreementProps & IEditAgreementValues
    // id: number,
    // AllocationSubTypeId: number,
    // AllocationSubTypeName: string
  ) => {
    // fetch call for Edit values Save
    postEditAgreementValues(
      event.AllocationTypeId,
      event.AllocationSubTypeId,
      event.AgreementName,
      event.AgreementId
    )
      .then(res => {
        this.setState({
          ...this.state,
          // allocationName: name,
          AgreementName: event.AgreementName,
          // tslint:disable-next-line:object-literal-sort-keys
          AllocationSubTypeId: event.AllocationSubTypeId,
          // allocationTypeList: res,
          // tslint:disable-next-line:object-literal-sort-keys
          AgreementId: event.AgreementId,
          AllocationTypeId: event.AllocationTypeId,
          editPopUpOpen: false
        });
      })
      .then(() =>
        getAgreementTypeValues().then(res => {
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
  public onHandleDeActivateSave = (id: number) => {
    postDeActivateId(id)
      .then(res => {
        this.setState({
          ...this.state,
          //  allocationTypeList: res,
          deActivatePopUpOpen: false
        });
      })
      .then(() =>
        getAgreementTypeValues().then(res => {
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
  public handleLandAllocationClick = (event: any) => {
    getAllocationSubTypeDetails(event.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          AllocationTypeId: event.target.value,
          EditAgreementValues: this.state.EditAgreementValues.map(
            (x: IAgreementTypeMasterValues) => {
              return {
                AgreementId: x.AgreementId,
                AgreementName: x.AgreementName,
                AllocateToName: x.AllocateToName,
                AllocationSubTypeId: x.AllocationSubTypeId,
                AllocationTypeId: event.target.value,
                AllocationTypeName: x.AllocationTypeName,
                CreatedBy: x.CreatedBy,
                IsActive: x.IsActive,
                ReturnCode: x.ReturnCode,
                TypeOfAllocationId: x.TypeOfAllocationId,
                TypeOfAllocationName: x.TypeOfAllocationName
              };
            }
          ),
          allocationTypeValues: res.objAllocationTypesList
        });
      })
      .catch(err =>
        // tslint:disable-next-line:no-console
        console.log(err)
      );
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

  public onHandleAddSave = (
    values: IAddAgreementValues & IAddAgreementProps
  ) => {
    if (
      this.state.allocationTypeList.filter(
        (x: IAgreementTypeMasterValues) =>
          x.AgreementName === values.newAgreementName
      ).length === 0
    ) {
      getAddAgreementValues(values)
        .then(res => {
          this.setState({
            AllocationTypeId: 0,
            addPopUpOpen: false,
            allocationTypeList: [...this.state.allocationTypeList, res]
          });
        })
        .then(() =>
          getAgreementTypeValues().then(res => {
            this.setState({
              ...this.state,
              allocationTypeList: res.jsonData.data,
              count: res.jsonData.data.length,
              dialog: true,
              newAgreementName: ""
            });
          })
        )
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        dialog1: true,
        newAgreementName: ""
      });
    }
  };
  public handlePopUpClose1 = () => {
    this.setState({
      dialog1: false,
      newAgreementName: ""
    });
  };
  public onHandleActivateClick = (id: number) => {
    postActivateID(id)
      .then(res => {
        this.setState({
          ...this.state,
          activatePopUpOpen: false
          // allocationTypeList: res
        });
      })
      .then(() =>
        getAgreementTypeValues().then(res => {
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

  public onHandleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, AgreementName: event.target.value });
  };
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };

  public handleEditAllocationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      ...this.state,
      AllocationSubTypeId: event.target.value,
      EditAgreementValues: this.state.EditAgreementValues.map(
        (x: IAgreementTypeMasterValues) => {
          return {
            AgreementId: x.AgreementId,
            AgreementName: x.AgreementName,
            AllocateToName: x.AllocateToName,
            AllocationSubTypeId: event.target.value,
            AllocationTypeId: x.AllocationTypeId,
            AllocationTypeName: x.AllocationTypeName,
            CreatedBy: x.CreatedBy,
            IsActive: x.IsActive,
            ReturnCode: x.ReturnCode,
            TypeOfAllocationId: x.TypeOfAllocationId,
            TypeOfAllocationName: x.TypeOfAllocationName
          };
        }
      )
    });
  };

  // public handleAddAllocationChange = (event: any) => {
  //   getAllocationSubTypeDetails(event.target.value).then(res => {
  //     this.setState({
  //       ...this.state,
  //       allocationTypeValues: res,
  //       AllocationId: event.target.value,
  //       AllocationName: this.state.allocationNameValues
  //         .filter(
  //           (x: IAgreementTypeAllocationDetails) =>
  //             x.AllocationId === event.target.value
  //         )
  //         .map((y: IAgreementTypeAllocationDetails) => y.AllocationName)[0]
  //     });
  //   });
  // };

  public handleEditSuccessPopUpClose = () => {
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
                  Agreement Type Master
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
                    Add Agreement Type
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddAgreementMasterForm
                    allocationTypeValues={this.state.allocationTypeValues}
                    handleLandAllocationClick={this.handleLandAllocationClick}
                    AllocationName={this.state.AllocationName}
                    AllocationSubTypeId={this.state.AllocationSubTypeId}
                    allocationNameValues={this.state.allocationNameValues}
                    AllocationTypeId={this.state.AllocationTypeId}
                    AllocationSubTypeName={this.state.AllocationSubTypeName}
                    newAgreementName={this.state.newAgreementName}
                    allocationTypeList={this.state.allocationTypeList}
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  />
                </div>
              </Dialog>
            }
            <AgreementTypeMasterForm
              EditAgreementValues={this.state.EditAgreementValues}
              handleEditAllocationChange={this.handleEditAllocationChange}
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
              AgreementId={this.state.AgreementId}
              //  allocationName={this.state.allocationName}
              //   AgreementName={this.state.AgreementName}
              onHandleEditSave={this.onHandleEditSave}
              // AllocationSubTypeName={this.state.AgreementName}
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
              agreementValues={this.state.agreementValues}
              AllocationId={this.state.AllocationId}
              AllocationName={this.state.AllocationName}
              allocationTypeValues={this.state.allocationTypeValues}
              AgreementName={this.state.AgreementName}
              AllocationTypeId={this.state.AllocationTypeId}
              CreatedBy={this.state.CreatedBy}
              IsActive={this.state.IsActive}
              ReturnCode={this.state.ReturnCode}
              AllocateToName={this.state.AllocateToName}
              AllocationTypeName={this.state.AllocationTypeName}
              TypeOfAllocationId={this.state.TypeOfAllocationId}
              TypeOfAllocationName={this.state.TypeOfAllocationName}
              handleLandAllocationClick={this.handleLandAllocationClick}

              //   AgreementId={this.state.AgreementId}
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
              You have successfully added agreement type name
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
              Agreement name already existed, please add new agreement type
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

        {
          <Dialog
            open={this.state.editSuccessPopUp}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have successfully updated agreement type
              <div className="title-btn">
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handleEditSuccessPopUpClose()}
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

export default AgreementTypeMasterState;
