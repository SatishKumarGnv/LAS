import * as React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
// import {
//   getAddAllocationValues

//   // postEditAllocationValues
// } from "../Api_Integration/AllocationTypeMasterService";
import { loader } from "src/DefaultLayout/HomePage";
import AddRejectionReasonForm from "src/Masters/RejectionReasons/AddRejectionReasons";
import {
  getAddRejectionValues,
  getAgreementSubTypeDetails,
  getAllocationSubTypeDetails,
  getAllocationTypeDetails,
  getRejectionTypeValues,
  postActivateID,
  postDeActivateId,
  postEditRejectionValues
} from "../Api_Integration/RejectionReasonsServices";
import RejectionTypeMasterForm from "../Masters/RejectionReasons/RejectionReasons";
export interface IRejectionTypeMasterValues {
  readonly RejectionId: number;
  readonly RejectionType: string;
  readonly AllocationTypeId: number;
  readonly AllocationSubTypeId: number;
  readonly AgreementTypeId: number;
  readonly AllocationSubTypeName: string;
  readonly AllocateToName: string;
  readonly AllocationTypeName: string;
  readonly Agreementname: string;
  readonly CreatedBy: number;
  readonly IsActive: string;
  readonly ReturnCode: number;
}

export interface IRejectionTypeMasterProps {
  readonly allocationTypeList: ReadonlyArray<IRejectionTypeMasterValues>;
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
  onHandleDeActivatePopUpOpen(rejectionValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(rejectionValues: IRejectionTypeMasterValues): void;
  onHandleEditActionClick(rejectionValues: IRejectionTypeMasterValues): void;
  onHandleNameChange(event: any): void;
  onHandleEditSave(
    values: IEditRejectionProps & IEditRejectionValues
  ): // AllocationId: number,
  // AllocationSubTypeId: number,
  // AllocationSubTypeName: string
  void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(event: IAddRejectionValues & IAddRejectionProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUpOpen(rejectionValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditRejectionValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly RejectionType: string;
  readonly AgreementId: number;
  readonly RejectionId: number;
}

export interface IEditRejectionProps {
  readonly rejectionValues: IRejectionTypeMasterValues;
  readonly allocationNameValues: ReadonlyArray<IAllocationTypeIdValues>;
  readonly allocationSubTypeValues: ReadonlyArray<IAllocationSubTypeValues>;
  readonly agreementValues: ReadonlyArray<IAgreementValues>;
  onHandleEditSave(event: IEditRejectionProps & IEditRejectionValues): void;
  // onHandleAddChange(event: any): void;
  handleAllocationTypeChange(event: any): void;
  handleAllocationSubtTypeChange(event: any): void;
  onHandleEditPopUpClose(): void;
}

export interface IAllocationSubTypeValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationName: string;
  readonly AllocationSubTypeName: null;
  readonly CreatedBy: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
}

export interface IAgreementValues {
  readonly AgreementId: number;
  readonly AgreementName: string;
  readonly AllocationTypeId: number;
  readonly AllocationSubTypeId: number;
  readonly CreatedBy: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
  readonly AllocateToName: null;
  readonly AllocationTypeName: null;
  readonly TypeOfAllocationId: number;
  readonly TypeOfAllocationName: null;
}
export interface IAddRejectionValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AgreementId: number;
  readonly RejectionType: string;
}

export interface IAddRejectionProps {
  readonly allocationNameValues: ReadonlyArray<IAllocationTypeIdValues>;
  readonly allocationSubTypeValues: ReadonlyArray<IAllocationSubTypeValues>;
  readonly agreementValues: ReadonlyArray<IAgreementValues>;
  onHandleAddSave(event: IAddRejectionValues & IAddRejectionProps): void;
  // onHandleAddChange(event: any): void;
  handleAllocationTypeChange(event: any): void;
  handleAllocationSubtTypeChange(event: any): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateRejectionProps {
  readonly AllocationId: number;
  onHandleActivateClick(event: any): void;
  onHandleActivatePopUpClose(): void;
}

export interface IAllocationTypeIdValues {
  readonly AllocationId: number;
  readonly AllocationSubTypeId: number;
  readonly AllocationName: string;
  readonly AllocationSubTypeName: null;
  readonly CreatedBy: number;
  readonly IsActive: boolean;
  readonly ReturnCode: number;
}

export interface IDeActivateRejectionProps {
  readonly AllocationId: number;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivateSave(event: any): void;
}

class RejectionTypeMasterState extends React.Component<
  IRejectionTypeMasterProps
> {
  public state = {
    activatePopUpOpen: false,
    addPopUpOpen: false,
    allocationNameValues: [],
    editFailPopUp: false,
    editSuccessPopUp: false,
    // tslint:disable-next-line:object-literal-sort-keys
    AllocationId: 0,
    AllocationTypeId: 0,
    AgreementTypeId: 0,
    AgreementId: 0,
    AllocationSubTypeName: "",
    AllocationSubTypeId: 0,
    RejectionType: "",
    count: 0,
    allocationTypeList: [],
    deActivatePopUpOpen: false,

    editPopUpOpen: false,
    open: false,
    open2: false,
    id: 0,
    newAllocationName: "",
    page: 0,
    rowsPerPage: 5,
    rejectionValues: {
      AgreementTypeId: 0,
      Agreementname: "",
      AllocateToName: "",
      AllocationSubTypeId: 0,
      AllocationSubTypeName: "",
      AllocationTypeId: 0,
      AllocationTypeName: "",
      CreatedBy: 0,
      IsActive: "",
      RejectionId: 0,
      RejectionType: "",
      ReturnCode: 0
    },
    searchInput: "",
    RejectionId: 0,
    dialog: false,
    dialog1: false,
    MaxAllocationSubTypeId: 0,
    allocationSubTypeValues: [],
    agreementValues: []
  };

  public async componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      const res1 = await getRejectionTypeValues();
      const res2 = await getAllocationTypeDetails();
      const res3 = await getAllocationSubTypeDetails(this.state.AllocationId);
      this.setState({
        ...this.state,
        MaxAllocationSubTypeId: res1.data
          .map((x: IRejectionTypeMasterValues) => x.AllocationSubTypeId)
          .filter((x: number, y: number) => x > y),
        allocationNameValues: res2.jsonData.AllocaitonTypeslist,
        allocationSubTypeValues: res3.objAllocationTypesList,
        allocationTypeList: res1.data,
        count: res1.data.length
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

  public handleAllocationTypeChange = (event: any) => {
    getAllocationSubTypeDetails(event.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          AllocationId: event.target.value,
          allocationSubTypeValues: res.objAllocationTypesList
        });
      })
      .catch(err => err);
  };

  public handleAllocationSubtTypeChange = (event: any) => {
    getAgreementSubTypeDetails(this.state.AllocationId, event.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          AllocationSubTypeId: event.target.value,
          agreementValues: res.objAgreementTypesList
        });
      })
      .catch(err => err);
  };

  // for page change
  public readonly handleChangePage = (event: any, page: number) => {
    this.setState({ page });
  };

  // for rows change per page
  public readonly handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  public handlePopUpClose1 = () => {
    this.setState({
      RejectionType: "",
      dialog1: false
    });
  };
  public onHandleActionClick = (
    rejectionValues: IRejectionTypeMasterValues
  ) => {
 
    this.setState({
      ...this.state,
      open: rejectionValues.IsActive.toString() === "true" ? true : false,
      open2: rejectionValues.IsActive.toString() === "false" ? true : false,
      rejectionValues
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
    rejectionValues: IRejectionTypeMasterValues
  ) => {
    this.setState({
      ...this.state,
      AgreementId: this.state.agreementValues
        .filter(
          (x: IAgreementValues) =>
            x.AgreementName === rejectionValues.Agreementname
        )
        .map((y: IAgreementValues) => y.AgreementId)[0],
      AllocationId: this.state.allocationNameValues
        .filter(
          (x: IAllocationTypeIdValues) =>
            x.AllocationName === rejectionValues.AllocateToName
        )
        .map((x: IAllocationTypeIdValues) => x.AllocationId)[0],

      AllocationSubTypeId: this.state.allocationSubTypeValues
        .filter(
          (x: IAllocationSubTypeValues) =>
            x.AllocationName === rejectionValues.AllocationTypeName
        )
        .map((y: IAllocationSubTypeValues) => y.AllocationId)[0],

      editPopUpOpen: true,
      open: false,
      rejectionValues
    });

    // tslint:disable-next-line:no-console
    console.log(
      this.state.allocationSubTypeValues
        .filter(
          (x: IAllocationSubTypeValues) =>
            x.AllocationName === rejectionValues.AllocationTypeName
        )
        .map((y: IAllocationSubTypeValues) => y.AllocationId)[0]
    );
  };

  // for Search Input Change
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.allocationTypeList.filter(
      (x: IRejectionTypeMasterValues) =>
        searchInput !== ""
          ? x.AllocateToName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            x.AllocationTypeName.toLowerCase().includes(
              searchInput.toLowerCase()
            ) ||
            x.Agreementname.toLowerCase().includes(searchInput.toLowerCase()) ||
            this.rejectionNameIncludes(searchInput, x.RejectionType) ||
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
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };
  // deActivate Popup open
  public onHandleDeActivatePopUpOpen = (rejectionValues: any) => {
    this.setState({
      ...this.state,
      deActivatePopUpOpen: true,
      open: false,
      rejectionValues
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
  // Activate Popup open
  public onHandleActivatePopUpOpen = (rejectionValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpen: true,
      open2: false,
      rejectionValues
    });
  };
  public rejectionNameIncludes = (
    searchInput: string,
    rejectionName?: string
  ) => {
    if (rejectionName) {
      return rejectionName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return "";
    }
  };
  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({
      ...this.state,
      AgreementId: 0,
      AllocationId: 0,
      AllocationSubTypeId: 0,
      RejectionType: "",
      addPopUpOpen: true
    });
  };

  // fetch call for Edited Document Id Save
  public onHandleEditSave = (
    event: IEditRejectionValues & IEditRejectionProps
    // id: number,
    // AllocationSubTypeId: number,
    // AllocationSubTypeName: string
  ) => {
   
    if (
      event.AllocationId !== 0 &&
      event.AllocationSubTypeId !== 0 &&
      event.AgreementId !== 0 &&
      this.state.allocationTypeList.filter(
        (x: IRejectionTypeMasterValues) =>
          x.RejectionType === event.RejectionType
      ).length !== 0
    ) {
      // fetch call for Edit values Save
      postEditRejectionValues(
        event.AllocationId,
        event.AllocationSubTypeId,
        event.AgreementId,
        event.RejectionId,
        event.RejectionType
      )
        .then(res => {
          this.setState({
            ...this.state,
            // allocationName: name,
            AgreementTypeId: event.AgreementId,
            RejectionId: event.RejectionId,
            RejectionType: event.RejectionType,
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
          getRejectionTypeValues().then(res => {
            this.setState({ ...this.state, allocationTypeList: res.data });
          })
        )

        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));

      // getEditAllocationValues(event.AllocationId).then(res => {
      //   // tslint:disable-next-line:no-console
      //   console.log(res);
      // });
    } else {
      this.setState({ ...this.state, editFailPopUp: true });
    }
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
        getRejectionTypeValues().then(res => {
          this.setState({ ...this.state, allocationTypeList: res.data });
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
    this.setState({ ...this.state, addPopUpOpen: false, AgreementId: 0 });
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
    values: IAddRejectionValues & IAddRejectionProps
  ) => {
    if (
      this.state.allocationTypeList.filter(
        (x: IRejectionTypeMasterValues) =>
          x.RejectionType === values.RejectionType
      ).length === 0
    ) {
      getAddRejectionValues(values)
        .then(res => {
          this.setState({
            ...this.state,
            allocationTypeList: [...this.state.allocationTypeList, ...res],

            addPopUpOpen: false
          });
        })
        .then(() =>
          getRejectionTypeValues().then(res => {
            this.setState({
              ...this.state,
              RejectionType: "",
              allocationTypeList: res.data,
              count: res.data.length,
              dialog: true
            });
          })
        )

        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        RejectionType: "",
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
        getRejectionTypeValues().then(res => {
          this.setState({ ...this.state, allocationTypeList: res.data });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public onHandleNameChange = (event: any) => {
    
    this.setState({ ...this.state, RejectionType: event.target.value });
  };

  public handleEditSuccessPopUpClose = () => {
    this.setState({ ...this.state, editSuccessPopUp: false });
  };

  public handleEditFailPopUpClose = () => {
    this.setState({ ...this.state, editFailPopUp: false });
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
                  Rejection Reasons
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
                    Add Rejection Type
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddRejectionReasonForm
                    agreementValues={this.state.agreementValues}
                    handleAllocationSubtTypeChange={
                      this.handleAllocationSubtTypeChange
                    }
                    allocationTypeList={this.state.allocationTypeList}
                    allocationSubTypeValues={this.state.allocationSubTypeValues}
                    handleAllocationTypeChange={this.handleAllocationTypeChange}
                    RejectionType={this.state.RejectionType}
                    AgreementId={this.state.AgreementTypeId}
                    allocationNameValues={this.state.allocationNameValues}
                    AllocationId={this.state.AllocationId}
                    AllocationSubTypeId={this.state.AllocationSubTypeId}
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    //  onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  />
                </div>
              </Dialog>
            }
            <RejectionTypeMasterForm
              RejectionId={this.state.RejectionId}
              rejectionValues={this.state.rejectionValues}
              agreementValues={this.state.agreementValues}
              handleAllocationSubtTypeChange={
                this.handleAllocationSubtTypeChange
              }
              allocationSubTypeValues={this.state.allocationSubTypeValues}
              handleAllocationTypeChange={this.handleAllocationTypeChange}
              RejectionType={this.state.RejectionType}
              AgreementId={this.state.AgreementId}
              allocationNameValues={this.state.allocationNameValues}
              AllocationId={this.state.AllocationId}
              AllocationSubTypeId={this.state.AllocationSubTypeId}
              onHandleNameChange={this.onHandleNameChange}
              open2={this.state.open2}
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
              onHandleEditSave={this.onHandleEditSave}
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
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
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
            open={this.state.editSuccessPopUp}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              You have updated rejection reasons successfully
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
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
        {
          <Dialog
            open={this.state.editFailPopUp}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Please fill the Required Fields
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="title-btn">
                <Button
                  className="save-btn"
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => this.handleEditFailPopUpClose()}
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
              Reject reason existed, please add new reject reason.
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

export default RejectionTypeMasterState;
