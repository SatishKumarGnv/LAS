import { DialogTitle } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import {
  getDocumentTypeMasterValues,
  postActivateID,
  postAddDocumentTypeValues,
  postDeActivateId,
  postEditDocumentTypeValues
} from "../Api_Integration/DocumentTypeMasterService";
import AddDocumentTypeForm from "../Masters/DocumentTypeMaster/AddDocumentTypeForm";
import DocumentTypeMasterForm, {
  IEditDocumentProps
} from "../Masters/DocumentTypeMaster/DocumentTypeMaster";
// import { ISubmitApplicationPopUpValues } from "./SubmittedApplicationState";
// import Pager from './Pager'
export interface IDocumentMasterTypeStateValues {
  readonly CreatedBy: number;
  readonly CreatedOn: string;
  readonly DocumentId: number;
  readonly DocumentName: string;
  readonly IsActive: boolean;
  readonly ModifiedBy: number;
  readonly ModifiedOn: string;
  readonly ReturnCode: number;
}
export interface IDocumentTypeMasterStateProps {
  readonly documentTypeMasterList: ReadonlyArray<
    IDocumentMasterTypeStateValues
  >;
  readonly searchInput: string;
  readonly open: boolean;
  readonly open2: boolean;
  readonly ClickOpen: boolean;
  readonly dropDownOpen: any;
  readonly dropDownOpen2: any;
  // readonly expandApplicationId: string;
  // readonly documentPopUpList: ReadonlyArray<ISubmitApplicationPopUpValues>;
  readonly editPopUpOpen: boolean;
  readonly addPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;
  readonly deActivatePopUpOpen: boolean;
  readonly documentValues: IDocumentMasterTypeStateValues;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(documentValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(documentValues: IDocumentMasterTypeStateValues): void;
  onHandleEditActionClick(): void;
  onHandleEditSave(values: IEditDocumentProps & IEditDocumentValues): void;
  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;
  onHandleAddSave(values: IAddDocumentValues & IAddDocumentProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUp(documentValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}
export interface IEditDocumentValues {
  readonly DocumentId: number;
  readonly DocumentName: string;
  // onHandleEditNameChange(event: any): void;
}
export interface IAddDocumentValues {
  readonly DocumentId: number;
  readonly newDocumentName: string;
  onHandleAddChange(event: any): void;
}
export interface IAddDocumentProps {
  readonly documentTypeMasterList: ReadonlyArray<
    IDocumentMasterTypeStateValues
  >;
  onHandleAddSave(values: IAddDocumentValues & IAddDocumentProps): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}
export interface IActivateProps {
  readonly id: number;
  onHandleActivateClick(event: any): void;
  onHandleActivePopUpClose(): void;
}
class DocumentTypeMasterState extends React.Component<
  IDocumentTypeMasterStateProps & IEditDocumentValues
> {
  public readonly state = {
    DocumentName: "",
    DocumentTypeMasterList: [],
    activatePopUpOpen: false,
    addPopUpOpen: false,
    deActivatePopUpOpen: false,
    editSuccessPopUp: false,
    open: false,
    open2: false,
    // tslint:disable-next-line:object-literal-sort-keys
    editPopUpOpen: false,
    // tslint:disable-next-line:object-literal-sort-keys
    documentValues: {},
    DocumentId: 0,
    newDocumentName: "",
    page: 0,
    count: 0,
    dialog1: false,
    rowsPerPage: 5,
    searchInput: "",
    DocumentPopUp: false,
    dialog: false
  };
  constructor(props: IDocumentTypeMasterStateProps & IEditDocumentValues) {
    super(props);
  }
  public componentWillMount() {
    // getting data for the documenttypemaster table
    getDocumentTypeMasterValues()
      .then(res => {
        this.setState({
          ...this.state,
          DocumentTypeMasterList: res.jsonData.data,
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
  public onHandleRefresh = () => {
    getDocumentTypeMasterValues()
      .then(res => {
        this.setState({
          ...this.state,
          DocumentTypeMasterList: res.jsonData.data,
          newDocumentName: ""
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  // for rows change per page
  public readonly handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };
  //   public readonly handleChangeForLandAllocationSearch=(event:any) => {
  //       this.setState(event.target.value)
  //   }
  // fetch Call for Pop Up details based on ID
  public onHandleActionClick = (
    documentValues: IDocumentMasterTypeStateValues
  ) => {
    this.setState({
      ...this.state,
      documentValues
      // open: documentValues.IsActive === true ? true : false,
      // open2: documentValues.IsActive === false ? true : false
      // tslint:disable-next-line:object-literal-sort-keys
      // documentName: name,
      // dropDownOpen: value === true ? event.currentTarget : null,
      // dropDownOpen2: value === false ? event.currentTarget : null,
      // id
    });
  };
  public onHandleEditNameChange = (event: any) => {
    this.setState({ ...this.state, DocumentName: event.target.value });
  };
  public onHandleAddChange = (event: any) => {
    this.setState({ ...this.state, newDocumentName: event.target.value });
  };
  // for Edit PopUp open
  public onHandleEditActionClick = (
    documentValues: IDocumentMasterTypeStateValues
  ) => {
    this.setState({
      ...this.state,
      documentValues,
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
  public onHandleSearch = (event: any) => {
    // tslint:disable-next-line:no-console
    const searchInput = event.target.value;
    const data = this.state.DocumentTypeMasterList.filter(
      (x: IDocumentMasterTypeStateValues) =>
        searchInput !== ""
          ? this.documentNameIncludes(searchInput, x.DocumentName) ||
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
  public onHandleDeActivatePopUpOpen = (documentValues: any) => {
    this.setState({
      ...this.state,
      deActivatePopUpOpen: true,
      documentValues,
      open: false
    });
  };
  // Activate Popup open
  public onHandleActivatePopUpOpen = (documentValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpen: true,
      documentValues,
      open2: false
    });
  };
  // add Popup open
  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state, addPopUpOpen: true });
  };
  // fetch call for Edited Document Id Save
  public onHandleEditSave = (
    values: IEditDocumentProps & IEditDocumentValues
  ) => {
    // fetch call for Edit values Save
    postEditDocumentTypeValues(values)
      .then(res => {
        this.setState({
          ...this.state,
          DocumentId: values.DocumentId,
          DocumentName: values.DocumentName,
          DocumentTypeMasterList: this.state.DocumentTypeMasterList.map(
            (x: IDocumentMasterTypeStateValues) =>
              x.DocumentId === values.DocumentId
                ? { ...x, DocumentName: res.model.DocumentName }
                : x
          ),
          // documentTypeMasterList: res,
          editPopUpOpen: false,
          editSuccessPopUp: true
        });
      })
      .then(() =>
        getDocumentTypeMasterValues().then(res => {
          this.setState({
            ...this.state,
            DocumentTypeMasterList: res.jsonData.data,
            count: res.jsonData.data.length
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
          //  DocumentTypeMasterList: res,
        });
      })
      .then(() =>
        getDocumentTypeMasterValues().then(res => {
          this.setState({
            ...this.state,
            DocumentTypeMasterList: res.jsonData.data
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
    this.setState({ ...this.state, addPopUpOpen: false, newDocumentName: "" });
  };
  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClose = () => {
    this.setState({ ...this.state, deActivatePopUpOpen: false });
  };
  // To Close Activate PopUp Close
  public onHandleActivatePopUpClose = () => {
    this.setState({ ...this.state, activatePopUpOpen: false });
  };
  public documentNameIncludes = (
    searchInput: string,
    documentName?: string
  ) => {
    if (documentName) {
      return documentName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return false;
    }
  };
  public onHandleAddSave = (values: IAddDocumentValues & IAddDocumentProps) => {
    if (
      this.state.DocumentTypeMasterList.filter(
        (x: IDocumentMasterTypeStateValues) =>
          x.DocumentName === values.newDocumentName
      ).length === 0
    ) {
      postAddDocumentTypeValues(
        // this.state.DocumentTypeMasterList.length,
        this.state.DocumentTypeMasterList.length + 1,
        values.newDocumentName
      )
        .then(res => {
          this.setState({
            ...this.state,
            DocumentTypeMasterList: [
              ...this.state.DocumentTypeMasterList,
              res.model
            ]
          });
        })
        .then(() =>
          getDocumentTypeMasterValues().then(res => {
            this.setState({
              ...this.state,
              DocumentTypeMasterList: res.jsonData.data,
              addPopUpOpen: false,
              count: res.jsonData.data.length,
              dialog: true,

              newDocumentName: ""
            });
          })
        )
        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        dialog1: true,
        newDocumentName: ""
      });
    }
  };
  public onHandleActivateClick = (
    event: any,
    documentValues: IDocumentMasterTypeStateValues
  ) => {
    postActivateID(event)
      .then(res => {
        this.setState({
          ...this.state,
          //  DocumentTypeMasterList: res,
          activatePopUpOpen: false
        });
      })
      .then(() =>
        getDocumentTypeMasterValues().then(res => {
          this.setState({
            ...this.state,
            DocumentTypeMasterList: res.jsonData.data,
            newDocumentName: ""
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };
  public handleDocuementPopUpClose = () => {
    this.setState({ ...this.state, DocumentPopUp: false });
  };
  public handlePopUpClose = () => {
    this.setState({
      dialog: false
    });
  };
  public handlePopUpClose1 = () => {
    this.setState({
      dialog1: false
    });
  };

  public onHandleEditSuccessPopUpClose = () => {
    this.setState({ ...this.state, editSuccessPopUp: false });
  };
  public render() {
    // const { DocumentTypeMasterList, rowsPerPage, page } = this.state;
    // const open = Boolean(this.state.dropDownOpen);
    // const open2 = Boolean(this.state.dropDownOpen2);
    // const emptyRows =
    //   rowsPerPage -
    //   Math.min(rowsPerPage, DocumentTypeMasterList.length - page * rowsPerPage);
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
                  Document Type Master
                </Typography>
                <div className="title-btn">
                  <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleAddPopUpOpen()}
                  >
                    + Add
                  </Button>
                  {/* <Button
                    className="doc-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleRefresh()}
                  >
                    Refresh
                  </Button> */}
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
                  <DialogTitle id="simple-dialog-title" className="title">
                    Create New Document
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddDocumentTypeForm
                    DocumentId={this.state.DocumentId}
                    newDocumentName={this.state.newDocumentName}
                    documentTypeMasterList={this.state.DocumentTypeMasterList}
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                  />
                </div>
              </Dialog>
            }

            {
              <Dialog
                open={this.state.editSuccessPopUp}
                onClose={this.onHandleEditSuccessPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div>
                  <DialogTitle id="simple-dialog-title">
                    You have successfully updated document
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  {/*  tslint:disable-next-line:jsx-no-lambda */}
                  <Button
                    className="save-btn"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.onHandleEditSuccessPopUpClose()}
                  >
                    OK
                  </Button>
                </div>
              </Dialog>
            }
            {/* {
              <Dialog
                open={this.state.addPopUpOpen}
                onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <DialogTitle id="simple-dialog-title">
                  Please Fill the Field
                </DialogTitle>
                <div id="simple-dialog-title">
                  tslint:disable-next-line:jsx-no-lambda
                  <Button onClick={() => this.handleDocuementPopUpClose()}>
                    OK
                  </Button>
                </div>
              </Dialog>
            } */}
            <DocumentTypeMasterForm
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
              DocumentId={this.state.DocumentId}
              DocumentName={this.state.DocumentName}
              onHandleEditNameChange={this.onHandleEditNameChange}
              onHandleEditSave={this.onHandleEditSave}
              deActivatePopUpOpen={this.state.deActivatePopUpOpen}
              onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
              onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
              onHandleDeActivateSave={this.onHandleDeActivateSave}
              editPopUpOpen={this.state.editPopUpOpen}
              onHandleEditActionClick={this.onHandleEditActionClick}
              onHandleEditPopUpClose={this.onHandleEditPopUpClose}
              // emptyRows={emptyRows}
              count={this.state.count}
              page={this.state.page}
              rowsPerPage={this.state.rowsPerPage}
              open={this.state.open}
              open2={this.state.open2}
              onHandleChangeRowsPerPage={this.handleChangeRowsPerPage}
              onHandlePageChange={this.handleChangePage}
              onHandleActionClick={this.onHandleActionClick}
              onHandleClose={this.onHandleClose1}
              onHandleClose2={this.onHandleClose2}
              documentTypeMasterList={this.state.DocumentTypeMasterList}
              documentValues={this.state.documentValues}
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
              You have successfully added document
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
            open={this.state.dialog1}
            // onClose={this.onHandleAddPopUpClose}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Document name already existed, please add new document name.
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <div className="popup-bottom-btn">
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
export default DocumentTypeMasterState;
