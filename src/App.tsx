import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ForgotPasswordState from "./Container/ForgotPasswordState";
import UnAuthorizedLogIn from "./Dashboard/UnAuthorizedLogIn";
// import Login from "./Container/LoginState";
import HomePage from "./DefaultLayout/HomePage";
import ImageSliderState from "./LandingPages/ImageSlideLoginState";

// import logo from "./logo.svg";
// import createBrowserHistory from "history/createBrowserHistory";

class App extends React.Component {
  public signup = (data: any) => {
    const d = data;
    return d;
  };

  public render() {
    // const history = createBrowserHistory();

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={ImageSliderState} />
            <Route path="/login/unauthorized" component={UnAuthorizedLogIn} />
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/forgotPassword" component={ForgotPasswordState} />
            <Route path="/page" component={HomePage} />
            <Route path="/" component={ImageSliderState} />
            {/* <Route
              exact={true}
              path="/page/resetpassword"
              component={ResetPasswordForm}
            /> */}
          </Switch>
        </BrowserRouter>

        {/* <Route
          render={
            <Login /> ? (
              <Redirect
                to="/dashboard"
              />
            ) : (
              <Login />
            )
          }
        /> */}
      </div>
    );
  }
}

export default App;
