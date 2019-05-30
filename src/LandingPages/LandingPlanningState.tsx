import * as React from "react";

import { postLoginDetails } from "../Api_Integration/LoginService";
import LandingLoginPlanningForm from "./LandingPlanningLoginForm";

export interface ILoginState {
  readonly password: string;
  readonly username: string;
  readonly userId: number;
}

export default class LoginPlanningState extends React.Component<
  any,
  ILoginState
> {
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
          // const loc = window.location;
          window.location.href = "http://59.145.89.79/projects";
        } else {
          errors.setErrors({ password: "Invalid Credintials" });
        }
      })
      .catch(err => err);
  };

  public render() {
    return (
      <div>
        <LandingLoginPlanningForm
          onLogIn={this.handleSubmit}
          password={this.state.password}
          username={this.state.username}
          userId={this.state.userId}
        />
      </div>
    );
  }
}
