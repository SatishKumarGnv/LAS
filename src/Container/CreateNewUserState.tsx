import * as React from "react";

import { Button, Dialog, DialogTitle } from "@material-ui/core";
import { getAllGridDetails } from "src/Api_Integration/AllUsersService";
import {
  getDepartmentNames,
  getFingerNames,
  // getProjectTypeNames,
  getRoleNames,
  postAllValues
} from "src/Api_Integration/CreateNewUserService";
import { loader } from "src/DefaultLayout/HomePage";
import CreateNewUserForm from "src/Masters/CreateNewUser";
import CreateNewUserPopUp from "src/Masters/CreateNewUserPopUp";
// import CreateNewUserPopUp from "src/Masters/CreateNewUserPopUp";
// import CreateNewUserPopUp from "src/Masters/CreateNewUserPopUp";

export interface ICreateNewUserValues {
  readonly imageWarningPopUp: boolean;
  // readonly ProjectTypeIds: ReadonlyArray<number>;
  readonly displayName: string;
  readonly emailAddress: string;
  readonly firstName: string;
  readonly middleName: string;
  readonly phoneNumber: string;
  readonly surName: string;
  readonly userName: string;
  readonly gender: string;
  readonly department: string;
  readonly selectRole: string;
  readonly DepartmentId: number;
  readonly RoleId: number;
  readonly DepartmentName: string;
  readonly RoleName: string;
  readonly FingerId: number;
  readonly FingerName: string;
  readonly BioMetricRequest: string;
  readonly image: string;
  readonly imageSrc: string;
  readonly userImage: boolean;
  handleRoleIdChange(
    evt: any,
    values: IDepartmentProps &
      IRoleProps &
      IFingerProps &
      IDepartmentValues &
      IFingerValues &
      ICreateNewUserValues
  ): void;
  handleImageChange(evt: any): void;
  handleuserImageClick(evt: any, image1FileControl: any): void;
  handleCaptureFingerPopUp(fingerid: number): void;
  // handleProjectTypeChange(
  //   event: any,
  //   val: IDepartmentProps &
  //     IRoleProps &
  //     IFingerProps &
  //     IDepartmentValues &
  //     IFingerValues &
  //     ICreateNewUserValues
  // ): void;
  handleFingerIdChange(event: any): void;
  handleGenderChange(event: any): void;
  onHandleClose(): void;
}

export interface ISpaceValues {
  Space: any;
}
export interface IDepartmentValues {
  readonly DepartmentId: number | undefined;
  readonly DepartmentName: string;
}
export interface IDepartmentProps {
  readonly departmentList: ReadonlyArray<IDepartmentValues>;
}
export interface IRoleValues {
  readonly RoleId: number;
  readonly RoleName: string;
}
export interface IRoleProps {
  readonly roleList: ReadonlyArray<IRoleValues>;
}
export interface IFingerValues {
  readonly FingerId: number;
  readonly FingerName: string;
}
export interface IFingerProps {
  readonly fingerList: ReadonlyArray<IFingerValues>;
}

export interface IPoPUpValues {
  onHandleClose(): void;
}
class CreateNewUserState extends React.Component<
  IDepartmentProps &
    IDepartmentValues &
    IRoleValues &
    IRoleProps &
    IFingerValues &
    ICreateNewUserValues &
    IFingerProps &
    IPoPUpValues &
    any
> {
  public readonly state = {
    imageWarningPopUp: false,

    ProjectTypeIds: [],
    selectFingerPopUp: false,
    // tslint:disable-next-line:object-literal-sort-keys
    BioMetricRequest: "",
    DepartmentId: 0,
    DepartmentName: "",
    RoleId: 0,
    RoleName: "",
    department: "",
    departmentList: [],
    dialog: false,
    dialogOpen: false,
    dialogOpen2: false,

    displayName: "",
    emailAddress: "",
    fingerList: [],
    firstName: "",
    userImage: false,
    // tslint:disable-next-line:object-literal-sort-keys
    gender: "0",
    middleName: "",
    phoneNumber: "",
    roleList: [],
    selectRole: "",
    surName: "",
    userName: "",
    // tslint:disable-next-line:object-literal-sort-keys
    FingerId: 0,
    FingerName: "",
    image: "",
    imageSrc: "",
    postValues: [],
    captureFingerPopUp: false,
    AllUserValues: [],
    dialogOpen3: false,
    ProjectType: [],
    projectTypeValues: []
  };
  constructor(
    props: IDepartmentProps &
      IDepartmentValues &
      IRoleProps &
      IRoleValues &
      IFingerValues &
      IFingerProps &
      ICreateNewUserValues &
      IPoPUpValues
  ) {
    super(props);
  }

  public async componentWillMount() {
    try {
      if (loader != null) {
        loader.style.display = "block";
      }
      const res1 = await getDepartmentNames();
      const res2 = await getRoleNames();
      const res3 = await getFingerNames();
      //  const res4 = await getProjectTypeNames();

      this.setState({
        ...this.state,
        departmentList: res1.departmentMasterViewModel,
        fingerList: res3.fingersListVM,
        //   projectTypeValues: res4.fingersListVM,
        roleList: res2.rolelist.filter(
          (x: IRoleValues) => x.RoleName !== null && x.RoleName !== undefined
        )
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

  public onHandleClose = () => {
    this.setState({ ...this.state, dialogOpen: false });
    this.props.history.push("/page/dashboard");
  };

  public onHandleClose1 = () => {
    this.setState({ ...this.state, imageWarningPopUp: false });
  };
  public onHandleClos2 = () => {
    this.setState({
      ...this.state,
      BioMetricRequest: "",
      dialogOpen3: false,
      // tslint:disable-next-line:object-literal-sort-keys
      DepartmentId: 0,
      DepartmentName: "",
      RoleId: 0,
      RoleName: "",
      department: "",

      AllUserValues: [],
      dialogOpen: false,
      dialogOpen2: false,
      displayName: "",
      emailAddress: "",

      firstName: "",
      gender: "0",
      middleName: "",
      phoneNumber: "",

      selectRole: "",
      surName: "",
      userName: "",
      // tslint:disable-next-line:object-literal-sort-keys
      FingerId: 0,
      FingerName: "",
      image: "",
      imageSrc: ""
    });
  };
  public handleuserImageClick = (evt: any, image1FileControl: any) => {
    image1FileControl.value = null;
    this.setState({
      image: "",
      userImage: false
    });
  };

  public Space = (event: any) => {
    // if (event.value.match(/\s/g)) {
    //   alert("space is disabled");
    //   event.value = event.value.replace(/\s/g, "");
    // }
    if (event.target.value.match(/\s/g) !== " ") {
      this.state.userName = event.target.value;
    } else {
      this.setState({ ...this.state });
      alert("yes");
    }
  };
  public handleImageChange = (evt: any) => {
    const file = evt.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        ...this.state,

        image: reader.result
      });
    };
    if (file) {
      const fileSize = file.size;
      if (fileSize > 51200) {
        reader.readAsDataURL(file);
        this.setState({
          ...this.state,
          image: reader.result,
          userImage: true
        });
      } else {
        this.setState({ ...this.state, imageWarningPopUp: true });
      }
    } else {
      this.setState({
        ...this.state,

        image: "",
        userImage: false
      });
    }
  };

  public handleDialogClose = () => {
    this.setState({
      captureFingerPopUp: false,
      dialog: false,
      selectFingerPopUp: false
    });
  };

  public handleCaptureFingerPopUp = (fingerid: number) => {
    if (fingerid === 0) {
      this.setState({ ...this.state, selectFingerPopUp: true });
    } else {
      this.setState({ ...this.state, captureFingerPopUp: true });
    }
  };
  public onSubmit = (
    evt: IDepartmentProps &
      IRoleProps &
      IFingerProps &
      IDepartmentValues &
      IFingerValues &
      ICreateNewUserValues
  ) => {
    if (
      evt.RoleId !== 0 &&
      evt.DepartmentId !== 0
      // &&
      // this.state.AllUserValues.filter((x: any) => x.Email === evt.emailAddress)
      //   .length === 0
    ) {
      // const ProjectType = this.state.projectTypeValues
      //   .filter((x: IProjectTypeValues) =>
      //     evt.ProjectType.find((y: string) => y !== x.ProjectName)
      //   )
      //   .map((x: IProjectTypeValues) => x.ProjectTypeId);

      postAllValues(evt, this.state.image)
        .then(res => {
          this.setState({
            ...this.state,
            dialogOpen: res.data === 0 ? true : false,
            dialogOpen2: res.data === 3 ? true : false,
            dialogOpen3: res.data === 1 ? true : false,

            postValues: res.data
          });
        })
        .catch(err => err);
    }
  };

  public handleRoleIdChange = (
    event: any,
    values: IDepartmentProps &
      IRoleProps &
      IFingerProps &
      IDepartmentValues &
      IFingerValues &
      ICreateNewUserValues
  ) => {
    getAllGridDetails(event.target.value)
      .then(res => {
        this.setState({
          ...this.state,
          AllUserValues: res.aaData.filter(
            (e: any) => e.Email === values.emailAddress
          ),
          RoleId: event.target.value
        });
      })
      .catch(err => err);
  };
  public handleReset = () => [
    this.setState({
      ...this.state,
      BioMetricRequest: "",
      DepartmentId: 0,
      DepartmentName: "",
      RoleId: 0,
      RoleName: "",
      department: "",

      AllUserValues: [],
      dialogOpen: false,
      dialogOpen2: false,
      displayName: "",
      emailAddress: "",

      firstName: "",
      gender: "0",
      middleName: "",
      phoneNumber: "",

      selectRole: "",
      surName: "",
      userName: "",
      // tslint:disable-next-line:object-literal-sort-keys
      FingerId: 0,
      FingerName: "",
      image: "",
      imageSrc: ""
    })
  ];

  // public handleProjectTypeChange = (
  //   event: any,
  //   values: IDepartmentProps &
  //     IRoleProps &
  //     IFingerProps &
  //     IDepartmentValues &
  //     IFingerValues &
  //     ICreateNewUserValues
  // ) => {
  //   // tslint:disable-next-line:no-console
  //   console.log(
  //     event.target.value,
  //     this.state.projectTypeValues
  //       .filter((x: IProjectTypeValues) =>
  //         this.state.ProjectType.find(y => y === x.ProjectName)
  //       )
  //       .map((x: IProjectTypeValues) => x.ProjectTypeId)
  //   );
  //   this.setState({
  //     ...this.state,
  //     ProjectType: event.target.value,
  //     ProjectTypeIds: this.state.projectTypeValues
  //       .filter((x: IProjectTypeValues) =>
  //         event.target.value.find((y: string) => y === x.ProjectName)
  //       )
  //       .map((x: IProjectTypeValues) => x.ProjectTypeId)
  //   });
  // };

  public handleFingerIdChange = (event: any) => {
    this.setState({ ...this.state, FingerId: event.target.value });
  };

  public handleGenderChange = (event: any) => {
    this.setState({ ...this.state, gender: event.target.value });
  };
  public render() {
    return (
      <div className="innerpage-container">
        <div>
          <div className="inner-header-titile">
            <h2>Create New User Form</h2>
          </div>

          <CreateNewUserForm
            handleGenderChange={this.handleGenderChange}
            onHandleClose={this.onHandleClose1}
            imageWarningPopUp={this.state.imageWarningPopUp}
            handleFingerIdChange={this.handleFingerIdChange}
            //  ProjectTypeIds={this.state.ProjectTypeIds}
            //  ProjectTypeValues={this.state.projectTypeValues}
            //    handleProjectTypeChange={this.handleProjectTypeChange}
            handleRoleIdChange={this.handleRoleIdChange}
            handleCaptureFingerPopUp={this.handleCaptureFingerPopUp}
            imageSrc={this.state.imageSrc}
            departmentList={this.state.departmentList}
            roleList={this.state.roleList}
            fingerList={this.state.fingerList}
            onSubmit={this.onSubmit}
            BioMetricRequest={this.state.BioMetricRequest}
            displayName={this.state.displayName}
            emailAddress={this.state.emailAddress}
            firstName={this.state.firstName}
            middleName={this.state.middleName}
            phoneNumber={this.state.phoneNumber}
            surName={this.state.surName}
            userName={this.state.userName}
            gender={this.state.gender}
            department={this.state.department}
            selectRole={this.state.selectRole}
            DepartmentId={this.state.DepartmentId}
            RoleId={this.state.RoleId}
            DepartmentName={this.state.DepartmentName}
            RoleName={this.state.RoleName}
            FingerId={this.state.FingerId}
            FingerName={this.state.FingerName}
            handleImageChange={this.handleImageChange}
            image={this.state.image}
            handleuserImageClick={this.handleuserImageClick}
            handleReset={this.handleReset}
            userImage={this.state.userImage}
          />
        </div>

        {
          <Dialog
            open={this.state.dialogOpen}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              User Created Successfully
            </DialogTitle>
            <div id="simple-dialog-title">
              <CreateNewUserPopUp onHandleClose={this.onHandleClose} />
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialogOpen2}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Email Already Exists
            </DialogTitle>
            <div id="simple-dialog-title">
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <Button className="main-btn" onClick={() => this.onHandleClos2()}>
                Ok
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.dialogOpen3}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              User Name Already Exists
            </DialogTitle>
            <div id="simple-dialog-title">
              {/* tslint:disable-next-line:jsx-no-lambda */}
              <Button className="main-btn" onClick={() => this.onHandleClos2()}>
                Ok
              </Button>
            </div>
          </Dialog>
        }

        {
          <Dialog
            open={this.state.captureFingerPopUp}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Capture Finger Device is Not Connected the System
            </DialogTitle>
            <div className="popup-bottom-btn">
              <Button
                className="save-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handleDialogClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
        {
          <Dialog
            open={this.state.selectFingerPopUp}
            // onClose={props.onHandleClose}
            aria-labelledby="simple-dialog-title"
          >
            <DialogTitle id="simple-dialog-title">
              Please Select the Finger Id
            </DialogTitle>
            <div className="popup-bottom-btn">
              <Button
                className="main-btn"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.handleDialogClose()}
              >
                OK
              </Button>
            </div>
          </Dialog>
        }
      </div>
    );
  }
}

export default CreateNewUserState;
