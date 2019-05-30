import * as React from "react";

import { postLoginDetails } from "../Api_Integration/LoginService";
import LandingLoginForm from "./LandingLogin";

export interface ILoginState {
  readonly password: string;
  readonly username: string;
  readonly userId: number;
}

export default class LoginAssetState extends React.Component<any, ILoginState> {
  public readonly state: ILoginState = {
    password: "",
    userId: 0,
    username: ""
  };
  constructor(props: any) {
    super(props);
  }

  public readonly handleSubmit = (values: ILoginState, errors: any) => {
    postLoginDetails(values)
      .then(res => {
        this.setState({
          password: res.Password,
          userId: res.UserId,
          username: res.UserName
        });
        if (this.state.userId > 0) {
          localStorage.setItem("userDetails", JSON.stringify(res));
          window.location.href = "http://103.210.72.231:83/";
        } else {
          errors.setErrors({ password: "Invalid Credentials" });
        }
      })
      .catch(err => err);
  };

  public render() {
    return (
      <div>
        <LandingLoginForm
          onLogIn={this.handleSubmit}
          password={this.state.password}
          username={this.state.username}
          userId={this.state.userId}
        />
      </div>
    );
  }
}
