import * as React from "react";

import { Button, DialogActions, DialogContent } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { postForgotPassword } from "../Api_Integration/LogOutService";
import ForgotPasswordForm, {
  IForgotPasswordValues
} from "../ForgotPassword/ForgotPassword";

export interface IForgotPasswordState {
  readonly Email: string;
  readonly UserName: string;
  handleForgotPassword(evt: any): void;
}

// const calLogin = () => {
//   window.location.href = "http://192.168.100.18:3000/login";
// };

export default class ForgotPasswordState extends React.Component<
  IForgotPasswordValues & IForgotPasswordState & any
> {
  public state = {
    Email: "",
    UserName: "",
    dialogOpen: false,
    dialogOpen1: false
  };
  constructor(props: IForgotPasswordValues & IForgotPasswordState & any) {
    super(props);
  }

  public handleForgotPassword = (values: IForgotPasswordValues) => {
    postForgotPassword(values)
      .then(res => {
        this.setState({
          Email: res.Email,
          UserName: res.UserName,
          dialogOpen: res.model.ReturnCode === 0 ? true : false,
          dialogOpen1: res.model.ReturnCode === 1 ? true : false
        });
        //  setTimeout(calLogin, 3000);
      })

      // tslint:disable-next-line:no-console
      .catch(err => console.log(err));
  };

  public handleClose = () => {
    this.setState({
      ...this.state,
      dialogOpen: false
    });
    this.props.history.push("192.168.100.18:3000/login");
  };

  public handleClose1 = () => {
    this.setState({
      ...this.state,
      dialogOpen1: false
    });
  };
  public render() {
    return (
      <div>
        <ForgotPasswordForm
          onSubmit={this.handleForgotPassword}
          Email={this.state.Email}
          UserName={this.state.UserName}
          handleForgotPassword={this.handleForgotPassword}
        />

        {
          <Dialog
            // fullScreen={true}
            open={this.state.dialogOpen}
            // onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
              Password reset link has sent to your email id, Please update your
              password
            </DialogContent>
            <DialogActions>
              <div className="align-submit-middle">
                <Button className="save-btn" onClick={this.handleClose}>
                  OK
                </Button>
              </div>
            </DialogActions>
          </Dialog>
        }

        {
          <Dialog
            // fullScreen={true}
            open={this.state.dialogOpen1}
            // onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
              UserName and Email Address Doesn't Exist
            </DialogContent>
            <DialogActions>
              <div className="align-submit-middle">
                <Button className="save-btn" onClick={this.handleClose1}>
                  OK
                </Button>
              </div>
            </DialogActions>
          </Dialog>
        }
      </div>
    );
  }
}
