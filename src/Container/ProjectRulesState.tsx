import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

import {
  getConditionValues,
  getProjectRulesMasterValues,
  getProjectRuleTypes,
  getSourceTypes,
  getThemeCityTypes,
  postActivateID,
  postAddRuleTypeValues,
  postDeActivateId,
  postEditProjectRuleValues
} from "src/Api_Integration/RulesTypeMasterService";
import AddProjectRulesForm from "src/Masters/ProjectRules/AddProjectRules";
import ProjectTypeMasterForm from "src/Masters/ProjectRules/ProjectRules";

export interface IProjectRulesTypeStateValues {
  readonly TownshipId: number;
  readonly TownshipName: string;
  readonly RuleId: number;
  readonly RuleName: string;
  readonly IsActive: string;
}
export interface IProjectRuleDetails {
  readonly RuleName: string;
  readonly TownshipId: number | undefined;
  readonly RuleSourceTypeId: number | undefined;
  readonly ConditionTypeId: number | undefined;
  readonly ProjRuleTypeId: number | undefined;
}
export interface IThemeCityValues {
  readonly TownshipId: number | undefined;
  readonly TownshipName: string;
}
export interface IThemeCityProps {
  readonly themeCityValues: ReadonlyArray<IThemeCityValues>;
  handleSubmit(e: any): void;
}

export interface ISourceValues {
  readonly RuleSourceTypeId: number | undefined;
  readonly SourceName: string;
}
export interface ISourceProps {
  readonly sourceValues: ReadonlyArray<ISourceValues>;
  handleSourceTypeChange(event: any): void;
}
export interface IConditionValues {
  readonly ConditionTypeId: number | undefined;
  readonly ConditionName: string;
}
export interface IconditionProps {
  readonly maxValue: number | undefined;
  readonly minValue: number | undefined;
  readonly value: number | undefined;
  readonly conditionValues: ReadonlyArray<IConditionValues>;
  handleConditionChange(event: any): void;

  handleValueChange(event: any): void;
  handleMaxValueChange(event: any): void;
  handleMinValueChange(event: any): void;
}
export interface IProjectValues {
  readonly ProjRuleTypeId: number;
  readonly RuleType: string;
}
export interface IProjectProps {
  readonly projectRuleValues: ReadonlyArray<IProjectValues>;
}
export interface IRule {
  handleRuleNameChange(event: any): void;
  handleRuleType(event: any): void;
}
export interface IProjectRulesMasterStateProps {
  readonly projectRulesTypeMasterList: ReadonlyArray<
    IProjectRulesTypeStateValues
  >;
  readonly emptyRows: number;
  readonly searchInput: string;
  readonly open: boolean;
  readonly open2: boolean;

  readonly editPopUpOpen: boolean;
  readonly addPopUpOpen: boolean;
  readonly activatePopUpOpen: boolean;

  readonly deActivatePopUpOpen: boolean;
  onHandleDeActivatePopUpClose(): void;
  onHandleDeActivatePopUpOpen(projectValues: any): void;
  onHandleDeActivateSave(event: any): void;
  // onHandleClick(event: any): void;
  onHandleActionClick(projectValues: any): void;
  onHandleEditActionClick(): void;
  onHandleEditSave(event: any, name: string): void;

  onHandleEditPopUpClose(): void;
  onHandleClose(): void;
  onHandleClose2(): void;

  onHandleAddSave(
    event: IProjectRuleDetails &
      IAddprojectRuleValues &
      IAddProjectRuleProps &
      IThemeCityProps &
      ISourceProps &
      IconditionProps &
      IProjectProps
  ): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
  onHandleSearch(event: any): void;
  onHandleActivatePopUp(projectValues: any): void;
  onHandleActivePopUpClose(): void;
  onHandleActivateClick(event: any): void;
}

export interface IEditDocumentValues {
  readonly id: number;
  ProjectName: string;
  onHandleEditNameChange(event: any): void;
}

export interface IAddprojectRuleValues {
  readonly id: number;
  readonly newProjectName: string;
  onHandleAddChange(event: any, ruleTypeId: number): void;
}

export interface IAddProjectRuleProps {
  readonly projectRulesTypeMasterList: ReadonlyArray<
    IProjectRulesTypeStateValues
  >;
  onHandleAddSave(
    event: IProjectRuleDetails &
      IAddprojectRuleValues &
      IAddProjectRuleProps &
      IThemeCityProps &
      ISourceProps &
      IconditionProps &
      IProjectProps
  ): void;
  onHandleAddPopUp(): void;
  onHandleAddPopUpClose(): void;
}

export interface IActivateProps {
  readonly id: number;
  onHandleActivateClick(event: any): void;
  onHandleActivePopUpClose(): void;
}

class ProjectRulesTypeMasterState extends React.Component<
  IProjectRulesMasterStateProps & IEditDocumentValues
> {
  public readonly state = {
    ProjectName: "",
    ProjectRulesMasterList: [],
    activatePopUpOpen: false,
    addPopUpOpen: false,
    deActivatePopUpOpen: false,
    open: false,
    open2: false,
    // tslint:disable-next-line:object-literal-sort-keys
    editPopUpOpen: false,
    id: 0,
    count: 0,
    dialog: false,
    dialog1: false,
    newProjectName: "",
    page: 0,
    projectRulesTypeMasterList: [],
    rowsPerPage: 5,
    searchInput: "",
    // tslint:disable-next-line:object-literal-sort-keys
    RuleName: "",
    TownshipId: 0,
    themeCityValues: [],
    sourceValues: [],
    projectValues: {
      TownshipId: 0,
      TownshipName: "",
      // tslint:disable-next-line:object-literal-sort-keys
      RuleId: 0,
      RuleName: "",
      IsActive: ""
    },
    conditionValues: [],
    projectRuleValues: [],
    RuleSourceTypeId: 0,
    ConditionTypeId: 0,
    ProjRuleTypeId: 0,
    minValue: 0,
    maxValue: 0,
    value: 0,
    ConditionTypeName: "",
    AddSavePopUp: false,
    SourceTypeName: ""
  };
  constructor(props: IProjectRulesMasterStateProps & IEditDocumentValues) {
    super(props);
  }
  public componentWillMount() {
    getProjectRulesMasterValues()
      .then(res => {
        this.setState({
          ...this.state,
          count: res.jsonData.data.length,
          projectRulesTypeMasterList: res.jsonData.data
        });
      })
      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));

    getThemeCityTypes()
      .then(res => {
        this.setState({
          ...this.state,

          themeCityValues: res.townshipViewModelLst
        });
      })
      .catch(err => err);
    getSourceTypes()
      .then(res => {
        this.setState({
          ...this.state,

          sourceValues: res.objDetails
        });
      })
      .catch(err => err);
    getConditionValues()
      .then(res => {
        this.setState({
          ...this.state,

          conditionValues: res.objDetails
        });
      })
      .catch(err => err);
    getProjectRuleTypes()
      .then(res => {
        this.setState({
          ...this.state,

          projectRuleValues: res.objProjRuleTypes
        });
      })
      .catch(err => err);
  }
  // for page change
  public readonly handleChangePage = (event: any, page: number) => {
    this.setState({ page });
  };

  // for rows change per page
  public readonly handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  public onHandleActionClick = (projectValues: any) => {
    this.setState({
      ...this.state,
      open: projectValues.IsActive === true ? true : false,
      open2: projectValues.IsActive === false ? true : false,
      projectValues
    });
  };

  public onHandleEditNameChange = (event: any) => {
    this.setState({ ...this.state, documentName: event.target.value });
  };

  public onHandleAddChange = (event: any, ruleTypeId: number) => {
    if (ruleTypeId === 1) {
      this.setState({ ...this.state, newProjectName: event.target.value });
    } else if (ruleTypeId === 2 && event.ConditionTypeId !== 6) {
      this.setState({
        ...this.state,
        newProjectName:
          this.state.SourceTypeName +
          this.state.ConditionTypeName +
          this.state.value
      });
    } else if (ruleTypeId === 2) {
      this.setState({
        ...this.state,
        newProjectName:
          this.state.SourceTypeName +
          this.state.ConditionTypeName +
          this.state.maxValue +
          "and" +
          this.state.minValue
      });
    }
  };

  // for Edit PopUp open
  public onHandleEditActionClick = () => {
    this.setState({
      ...this.state,
      editPopUpOpen: true,
      open: false
    });
  };

  // for Search Input Change
  public onHandleSearch = (event: any) => {
    const searchInput = event.target.value;
    const data = this.state.projectRulesTypeMasterList.filter(
      (x: IProjectRulesTypeStateValues) =>
        searchInput !== ""
          ? this.themeCityNameIncludes(searchInput, x.TownshipName) ||
            x.IsActive.toString()
              .toLowerCase()
              .includes(this.getActivestate(searchInput.toLowerCase())) ||
            this.ruleNameIncludes(searchInput, x.RuleName)
          : x
    );
    this.setState({
      ...this.state,
      count: data.length,
      searchInput
    });
  };
  public ruleNameIncludes = (searchInput: string, ruleName?: string) => {
    if (ruleName) {
      return ruleName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return "";
    }
  };
  public handlePopUpClose = () => {
    this.setState({
      ...this.state,

      dialog: false
    });
  };
  public handlePopUpClose1 = () => {
    this.setState({
      dialog1: false
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
  // deActivate Popup open
  public onHandleDeActivatePopUpOpen = (projectValues: any) => {
    this.setState({
      ...this.state,
      deActivatePopUpOpen: true,
      open: false,
      projectValues
    });
  };
  public themeCityNameIncludes = (searchInput: string, cityName?: string) => {
    if (cityName) {
      return cityName.toLowerCase().includes(searchInput.toLowerCase());
    } else {
      return "";
    }
  };
  // Activate Popup open
  public onHandleActivatePopUpOpen = (projectValues: any) => {
    this.setState({
      ...this.state,
      activatePopUpOpen: true,
      open2: false,
      projectValues
    });
  };

  public onHandleAddPopUpOpen = () => {
    this.setState({ ...this.state, addPopUpOpen: true });
  };

  public onHandleEditSave = (event: any) => {
    postEditProjectRuleValues(event)
      .then(res => {
        this.setState({
          ...this.state,
          documentName: name,
          editPopUpOpen: false,
          id: event
        });
      })
      .then(() =>
        getProjectRulesMasterValues().then(res => {
          this.setState({
            ...this.state,
            count: res.jsonData.data.length,
            projectRulesTypeMasterList: res.jsonData.data
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public onHandleDeActivateSave = (event: any) => {
    postDeActivateId(event)
      .then(res => {
        this.setState({
          ...this.state,
          deActivatePopUpOpen: false
        });
      })
      .then(() =>
        getProjectRulesMasterValues().then(res => {
          this.setState({
            ...this.state,

            count: res.jsonData.data.length,
            projectRulesTypeMasterList: res.jsonData.data
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
    this.setState({
      ...this.state,
      ConditionTypeId: 0,
      RuleSourceTypeId: 0,
      addPopUpOpen: false,
      maxValue: 0,
      minValue: 0,
      newProjectName: "",
      value: 0
    });
  };

  // To Close Edit PopUp Close
  public onHandleDeActivatePopUpClose = () => {
    this.setState({ ...this.state, deActivatePopUpOpen: false });
  };

  // To Close Activate PopUp Close
  public onHandleActivatePopUpClose = () => {
    this.setState({ ...this.state, activatePopUpOpen: false });
  };
  public handleSubmit = (e: any) => {
    // tslint:disable-next-line:no-console
    console.log(e);
  };
  public onHandleAddSave = (
    event: IProjectRuleDetails &
      IAddprojectRuleValues &
      IAddProjectRuleProps &
      IThemeCityProps &
      ISourceProps &
      IconditionProps &
      IProjectProps
  ) => {
    if (
      event.ProjRuleTypeId === 1 &&
      event.newProjectName !== "" &&
      event.TownshipId !== 0 &&
      this.state.ProjectRulesMasterList.filter(
        (x: IProjectRulesTypeStateValues) => event.newProjectName === x.RuleName
      ).length === 0
    ) {
      postAddRuleTypeValues(event, event.newProjectName).then(res => {
        this.setState({
          AddSavePopUp: false,
          // ProjectRulesMasterList: [...this.state.ProjectRulesMasterList, res],
          addPopUpOpen: false,
          dialog: true
        });
      });

      getProjectRulesMasterValues()
        .then(res => {
          this.setState({
            ...this.state,
            ProjRuleTypeId: 0,
            TownshipId: 0,
            count: res.jsonData.data.length,
            projectRulesTypeMasterList: res.jsonData.data,

            ConditionTypeId: 0,
            RuleSourceTypeId: 0,
            addPopUpOpen: false,
            maxValue: 0,
            minValue: 0,
            newProjectName: "",
            value: 0
          });
        }) // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else if (
      event.ProjRuleTypeId === 2 &&
      event.ConditionTypeId !== 0 &&
      event.RuleSourceTypeId !== 0 &&
      event.TownshipId !== 0 &&
      (event.value !== 0 || (event.minValue !== 0 && event.maxValue !== 0)) &&
      this.state.ProjectRulesMasterList.filter(
        (x: IProjectRulesTypeStateValues) => event.newProjectName === x.RuleName
      ).length === 0
    ) {
      postAddRuleTypeValues(event, this.state.newProjectName).then(res => {
        this.setState({
          AddSavePopUp: false,
          // ProjectRulesMasterList: [...this.state.ProjectRulesMasterList, res],
          addPopUpOpen: false
        });
      });

      getProjectRulesMasterValues()
        .then(res => {
          this.setState({
            ...this.state,
            AddSavePopUp: false,
            ConditionTypeId: 0,
            ProjRuleTypeId: 0,
            RuleSourceTypeId: 0,
            TownshipId: 0,
            count: res.jsonData.data.length,
            dialog: true,
            maxValue: 0,
            minValue: 0,
            newProjectName: "",
            projectRulesTypeMasterList: res.jsonData.data,
            value: 0
          });
        })

        // tslint:disable-next-line:no-console
        .catch(err => console.log(err));
    } else {
      this.setState({
        ...this.state,
        AddSavePopUp: true,
        ConditionTypeId: "",
        ProjRuleTypeId: "",
        RuleSourceTypeId: "",
        TownshipId: "",

        maxValue: "",
        minValue: "",
        newProjectName: "",

        value: ""
      });
    }
  };

  public onHandleActivateClick = (event: any) => {
    postActivateID(event)
      .then(res => {
        this.setState({
          ...this.state,
          // ProjectRulesMasterList: res,
          activatePopUpOpen: false
        });
      })
      .then(() =>
        getProjectRulesMasterValues().then(res => {
          this.setState({
            ...this.state,
            count: res.jsonData.data.length,
            projectRulesTypeMasterList: res.jsonData.data
          });
        })
      )

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public handleSourceTypeChange = (event: any) => {
    this.setState({
      ...this.state,
      RuleSourceTypeId: event.target.value,
      SourceTypeName: this.state.sourceValues
        .filter((x: ISourceValues) => x.RuleSourceTypeId === event.target.value)
        .map((x: ISourceValues) => x.SourceName)[0],
      newProjectName: this.state.sourceValues
        .filter((x: ISourceValues) => x.RuleSourceTypeId === event.target.value)
        .map((x: ISourceValues) => x.SourceName)[0]
    });
  };
  public handleConditionChange = (event: any) => {
    this.setState({
      ...this.state,
      ConditionTypeId: event.target.value,
      ConditionTypeName: this.state.conditionValues
        .filter(
          (x: IConditionValues) => x.ConditionTypeId === event.target.value
        )
        .map((x: IConditionValues) => x.ConditionName)[0],
      newProjectName:
        this.state.SourceTypeName +
        " " +
        this.state.conditionValues
          .filter(
            (x: IConditionValues) => x.ConditionTypeId === event.target.value
          )
          .map((x: IConditionValues) => x.ConditionName)[0]
    });
  };
  public handleRuleNameChange = (event: any) => {
    this.setState({
      newProjectName: event.target.value
    });
  };
  public handleRuleType = (event: any) => {
    this.setState({
      newProjectName: ""
    });
  };
  public handleValueChange = (event: any) => {
    this.setState({
      ...this.state,
      newProjectName:
        this.state.SourceTypeName +
        " " +
        "should be" +
        " " +
        this.state.ConditionTypeName +
        " " +
        event.target.value,
      value: event.target.value
    });
  };

  public handleMaxValueChange = (event: any) => {
    this.setState({
      ...this.state,
      maxValue: event.target.value
    });
  };

  public handleMinValueChange = (event: any) => {
    this.setState({
      ...this.state,
      minValue: event.target.value,
      newProjectName:
        this.state.SourceTypeName +
        "should be" +
        this.state.ConditionTypeName +
        this.state.maxValue +
        "and" +
        event.target.value
    });
  };

  public handleAddSavePopUpClose = () => {
    this.setState({ ...this.state, AddSavePopUp: false });
  };

  public render() {
    const { ProjectRulesMasterList, rowsPerPage, page } = this.state;

    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, ProjectRulesMasterList.length - page * rowsPerPage);
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
                  Project Rules
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
                // onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <div className="popup-title">
                  <DialogTitle id="simple-dialog-title">
                    Add Rule Name
                  </DialogTitle>
                </div>
                <div id="simple-dialog-title">
                  <AddProjectRulesForm
                    handleMaxValueChange={this.handleMaxValueChange}
                    handleMinValueChange={this.handleMinValueChange}
                    handleValueChange={this.handleValueChange}
                    handleSourceTypeChange={this.handleSourceTypeChange}
                    handleConditionChange={this.handleConditionChange}
                    maxValue={this.state.maxValue}
                    minValue={this.state.minValue}
                    value={this.state.value}
                    id={this.state.id}
                    newProjectName={this.state.newProjectName}
                    projectRulesTypeMasterList={
                      this.state.projectRulesTypeMasterList
                    }
                    onHandleAddPopUp={this.onHandleAddPopUpOpen}
                    onHandleAddSave={this.onHandleAddSave}
                    onHandleAddChange={this.onHandleAddChange}
                    onHandleAddPopUpClose={this.onHandleAddPopUpClose}
                    RuleName={this.state.RuleName}
                    TownshipId={this.state.TownshipId}
                    themeCityValues={this.state.themeCityValues}
                    sourceValues={this.state.sourceValues}
                    conditionValues={this.state.conditionValues}
                    projectRuleValues={this.state.projectRuleValues}
                    handleSubmit={this.handleSubmit}
                    RuleSourceTypeId={this.state.RuleSourceTypeId}
                    ConditionTypeId={this.state.ConditionTypeId}
                    ProjRuleTypeId={this.state.ProjRuleTypeId}
                    handleRuleNameChange={this.handleRuleNameChange}
                    handleRuleType={this.handleRuleType}
                  />
                </div>
              </Dialog>
            }
            {
              <Dialog
                open={this.state.AddSavePopUp}
                //  onClose={this.onHandleAddPopUpClose}
                aria-labelledby="simple-dialog-title"
              >
                <DialogTitle id="simple-dialog-title" />
                <div id="simple-dialog-title">
                  Please Fill All The Fields
                  <div className="popup-bottom-btn">
                    <Button
                      className="save-btn"
                      // tslint:disable-next-line:jsx-no-lambda
                      onClick={() => this.handleAddSavePopUpClose()}
                    >
                      OK
                    </Button>
                  </div>
                </div>
              </Dialog>
            }
            <ProjectTypeMasterForm
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
              id={this.state.id}
              ProjectName={this.state.ProjectName}
              onHandleEditNameChange={this.onHandleEditNameChange}
              onHandleEditSave={this.onHandleEditSave}
              deActivatePopUpOpen={this.state.deActivatePopUpOpen}
              onHandleDeActivatePopUpClose={this.onHandleDeActivatePopUpClose}
              onHandleDeActivatePopUpOpen={this.onHandleDeActivatePopUpOpen}
              onHandleDeActivateSave={this.onHandleDeActivateSave}
              editPopUpOpen={this.state.editPopUpOpen}
              onHandleEditActionClick={this.onHandleEditActionClick}
              onHandleEditPopUpClose={this.onHandleEditPopUpClose}
              emptyRows={emptyRows}
              projectValues={this.state.projectValues}
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
              projectRulesTypeMasterList={this.state.projectRulesTypeMasterList}
            />
          </Card>
        </div>
        {
          <Dialog
            open={this.state.dialog}
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              New rule added successfully
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
            aria-labelledby="simple-dialog-title"
          >
            <div id="simple-dialog-title">
              Rule name already existed, please add new rule name.
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

export default ProjectRulesTypeMasterState;
