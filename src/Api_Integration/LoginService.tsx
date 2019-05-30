import { ILoginState } from "../Container/LoginState";

// import { ILoginFormValues } from "./LogIn";

export const postLoginDetails = async (props: ILoginState) => {
  // Make a request for a user with a given ID
  return fetch(
    `http://sadaptms.com:894/api/LoginAPI/ValidateUser?UserName=${
      props.username
    }&Password=${props.password}`,
    {
      credentials: "include",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      method: "POST"
      // mode: "cors"
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw res;
  });
};
