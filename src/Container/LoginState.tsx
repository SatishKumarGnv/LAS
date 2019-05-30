import * as React from "react";

import { postLoginDetails } from "../Api_Integration/LoginService";
import { getMenuItems } from "../Api_Integration/PriviligesMasterServices";
// tslint:disable-next-line:ordered-imports
import { IPersonalInfoValues } from "../DefaultLayout/HomePage";
import LoginForm from "../Login/LogIn";
// tslint:disable-next-line:ordered-imports

export interface ILoginState {
  readonly password: string;
  readonly username: string;
  readonly userId: number;
}

export interface IRoleValues {
  readonly RoleId: number;
}
export interface IUserDetails {
  readonly userDetails: IRoleValues;
}
export default class Login extends React.Component<
  ILoginState & IPersonalInfoValues & any
> {
  public readonly state = {
    password: "",
    userId: 0,
    username: "",
    // tslint:disable-next-line:object-literal-sort-keys
    userDetails: {
      RoleId: 0
    },
    redirectToReferrer: false
  };
  constructor(props: ILoginState & IPersonalInfoValues) {
    super(props);
  }

  public readonly handleSubmit = (values: ILoginState, errors: any) => {
    postLoginDetails(values)
      .then(res => {
        this.setState({
          password: res.model.Password,
          userId: res.model.UserId,
          username: res.model.UserName
        });
        // if (res.UserId === 0) {
        //   errors.setErrors({ userName: "Username or Password doesnt exists" });
        //   errors.setErrors({ password: "Username or Password doesnt exists" });
        // }

        if (this.state.userId > 0) {
          localStorage.setItem("userDetails", JSON.stringify(res));
          const userDetails = localStorage.getItem("userDetails");
          this.setState({
            ...this.state,
            userDetails
          });

          if (this.state.userDetails !== undefined || null) {
            getMenuItems(this.state.userDetails.RoleId).then(res1 => {
              this.setState({
                ...this.state,
                menuItems: res1.MenuList,
                redirectToReferrer: true
              });
            });
          }

          window.location.href = "http://192.168.100.18:3000/page/dashboard";
        } else if (this.state.userId === 0 && this.state.password === "") {
          errors.setErrors({ password: "Invalid Credentials" });
        }
      })
      .catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
      });
  };

  public render() {
    return (
      <div>
        <LoginForm
          onLogIn={this.handleSubmit}
          password={this.state.password}
          username={this.state.username}
          userId={this.state.userId}
        />
      </div>
    );
  }
}
