import Button from "@material-ui/core/Button";
import * as React from "react";

import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import MobileStepper from "@material-ui/core/MobileStepper";
import Popover from "@material-ui/core/Popover";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Login from "../Container/LoginState";
// import LoginAssetState from "./LandingAssetLoginState";
// import LoginPlanningState from "./LandingPlanningState";
import SelectRoleForm from "./SelectRoleForm";

interface IImageSliderValues {
  readonly imgPath: string;
  readonly label: string;
}

export interface IImageSliderProps {
  readonly activeStep: number;
  readonly dropDownOpen: any;
  readonly imageSlider: ReadonlyArray<IImageSliderValues>;
  readonly images2: ReadonlyArray<IImageSliderValues>;
}
export interface ISelectRoleValues {
  readonly id: number;
  readonly role: string;
}

export interface ISelectinnerRoleValues {
  readonly RoleId: number;
  readonly values: ReadonlyArray<ISelectRoleValues>;
}

export interface ISelectRoleProps {
  readonly open: boolean;
  readonly selectRoleId: number;
  readonly selectRoles: ReadonlyArray<ISelectRoleValues>;
  onHandleSubmit(event: any): void;
  handleDialogOpen1(): void;
  handleDialogClose(): void;
  handleLoginDialogOpen(event: any): void;
}

export interface ILandingLoginState {
  readonly userName: string;
  readonly userId: number;
  readonly password: string;
}

class ImageSliderState extends React.Component<
  IImageSliderProps & ILandingLoginState & any
> {
  public state = {
    activeStep: 0,
    dropDownOpen: null,

    imageSlider: [
      {
        imgPath: "/images/slider1.jpg",
        label: "Amaravati"
      },
      {
        imgPath: "/images/slider2.jpg",
        label: "Asset"
      },
      {
        imgPath: "/images/slider3.jpg",
        label: "Planning"
      },
      {
        imgPath: "/images/slider4.jpg",
        label: "LMS"
      }
    ],
    // tslint:disable-next-line:object-literal-sort-keys
    images2: [
      {
        imgPath: "/images/General.jpg",
        label: "Amaravati"
      },
      {
        imgPath: "/images/lms.jpg",
        label: "LMS"
      },
      {
        imgPath: "/images/Assets.jpg",
        label: "Assets"
      },
      {
        imgPath: "/images/Planing.jpg",
        label: "Planning"
      }
    ],
    selectRoleId: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    RoleId: 0,
    selectRoles: [
      {
        id: 1,
        role: "Land Management System"
      },
      { id: 2, role: "Asset Management System" },
      { id: 3, role: "Envisioning and Scenario Planning" }
    ],
    values: [
      { id: 4, role: "Land Allocation System" },
      { id: 5, role: "Property Tax Management System" }
    ],

    // tslint:disable-next-line:object-literal-sort-keys
    dialogOpen1: false,
    dialogOpen2: false,
    dialogOpen3: false,
    password: "",
    userName: "",
    // tslint:disable-next-line:object-literal-sort-keys
    userId: 0,
    open2: false
  };
  public componentDidMount() {
    localStorage.removeItem("userDetails");
  }

  public onHandleLoginClick = (event: any) => {
    this.setState({
      ...this.state,
      dropDownOpen: event.currentTarget
      //  dialogOpen1: true
    });
  };

  public onHandleClose = () => {
    this.setState({
      dropDownOpen: null
    });
  };

  public handleNext = () => {
    this.setState({
      ...this.state,
      activeStep: this.state.activeStep + 1
    });
  };

  public handleBack = () => {
    this.setState({
      ...this.state,
      activeStep: this.state.activeStep - 1
    });
  };

  public handleStepChange = (activeStep: number) => {
    this.setState({ ...this.state, activeStep });
  };

  public handleDialogOpen1 = () => {
    this.setState({
      ...this.state,
      dialogOpen1: !this.state.dialogOpen1
    });
  };

  public handleLoginDialogOpen = (event: any) => {
    this.setState({
      ...this.state,
      selectRoleId: event.target.value <= 3 ? event.target.value : 0,
      // tslint:disable-next-line:object-literal-sort-keys
      RoleId: event.target.value > 3 ? event.target.value : 0,
      // open2: event.target.value === 1 ? true : false,
      dialogOpen1: event.target.value === 1 ? true : false,
      dialogOpen2: event.target.value === 2 ? true : false,
      dialogOpen3: event.target.value === 3 ? true : false
    });
  };

  public handleLoginDialogClose = () => {
    this.setState({
      ...this.state,
      open2: false,
      // tslint:disable-next-line:object-literal-sort-keys
      dialogOpen1: false,
      dialogOpen2: false,
      dialogOpen3: false,
      selectRoleId: 0,
      RoleId: 0
    });
  };

  public handleDialogClose = () => {
    this.setState({
      open2: false
    });
  };

  public onHandleSubmit = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event);
    // this.setState()
  };

  public onLoginSubmit = (event: any) => {
    // tslint:disable-next-line:no-console
    console.log(event);
  };

  public render() {
    const { activeStep } = this.state;
    const maxSteps = this.state.imageSlider.length;
    const { dropDownOpen } = this.state;
    const open = Boolean(dropDownOpen);
    return (
      <div>
        <div className="header">
          <div className="log-grid">
            <img className="header-logo" src="/images/logo-crda.jpg" />
            <img className="header-logo-main" src="/images/urban-logo.png" />
          </div>
          <nav className="site-nav">
            <ul>
              <li className="navbar">
                <a href="#0">Home</a>
              </li>
              <li className="navbar">
                <a href="#0">CONTACT US </a>
              </li>
              <div className="dropdown">
                <Button
                  className="btn btn-secondary dropdown-toggle login-btn"
                  type="button"
                  id="dropdownMenuButton"
                  // data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={this.onHandleLoginClick}
                >
                  LOGIN
                </Button>
                {
                  <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={this.state.dropDownOpen}
                    onClose={this.onHandleClose}
                    anchorOrigin={{
                      horizontal: "center",
                      vertical: "bottom"
                    }}
                    transformOrigin={{
                      horizontal: "center",
                      vertical: "top"
                    }}
                  >
                    <span
                      color="primary"
                      // tslint:disable-next-line:jsx-no-lambda
                    >
                      <SelectRoleForm
                        open={this.state.open2}
                        handleDialogOpen1={this.handleDialogOpen1}
                        handleDialogClose={this.handleDialogClose}
                        RoleId={this.state.RoleId}
                        values={this.state.values}
                        handleLoginDialogOpen={this.handleLoginDialogOpen}
                        selectRoleId={this.state.selectRoleId}
                        selectRoles={this.state.selectRoles}
                        onHandleSubmit={this.onHandleSubmit}
                      />
                    </span>
                  </Popover>
                }
              </div>
            </ul>
          </nav>
        </div>
        {/* {
          <Dialog
            open={this.state.open2}
            onClose={this.handleDialogClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogActions>
              <Button
                onClick={this.handleDialogOpen1}
                color="primary"
                className="land-btn"
              >
                Land Management System
              </Button>
              <Button
                className="land-btn"
                onClick={this.handleDialogOpen1}
                color="primary"
                //  autoFocus
              >
                Property Tax Management System
              </Button>
            </DialogActions>
          </Dialog>
        } */}
        {
          <Dialog
            open={this.state.dialogOpen1}
            onClose={this.handleLoginDialogClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>
              <Login
                onLogIn={this.onLoginSubmit}
                password={this.state.password}
                userName={this.state.userName}
                userId={this.state.userId}
              />
            </DialogContent>
          </Dialog>
        }
        {/* {
          <Dialog
            open={this.state.dialogOpen2}
            onClose={this.handleLoginDialogClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>
              <LoginAssetState
                onLogIn={this.onLoginSubmit}
                password={this.state.password}
                userName={this.state.userName}
                userId={this.state.userId}
              />
            </DialogContent>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialogOpen3}
            onClose={this.handleLoginDialogClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>
              <LoginPlanningState
                onLogIn={this.onLoginSubmit}
                password={this.state.password}
                userName={this.state.userName}
                userId={this.state.userId}
              />
            </DialogContent>
          </Dialog>
        } */}
        <div className="slideshow-container">
          <img
            className="myslides-img"
            src={this.state.imageSlider[activeStep].imgPath}
            alt={this.state.imageSlider[activeStep].label}
          />
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={this.handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
              </Button>
            }
          />
        </div>
        <h1 className="title">Amaravati Map</h1>
        <div className="img-grid">
          {this.state.images2.map((x, id: number) => (
            <div className="img-container" key={id}>
              <img src={x.imgPath} alt={x.label} />
              <div className="centered">{x.label} </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <p>©Copyright 2018. All rights reserved APCRDA.</p>
        </div>
      </div>
    );
  }
}

export default ImageSliderState;
