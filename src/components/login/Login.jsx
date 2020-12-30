import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import PasswordToggle from "./PasswordToggle";
import LoginValidations from "./LoginValidations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [emailid, setEmailid] = useState("");
  const [psword, setPsword] = useState("");
  const [emailidErr, setEmailErr] = useState({});
  const [pswordErr, setPswordErr] = useState({});
  const [passwordInputType, ToggleIcon] = PasswordToggle();
  const [loginMsg, setLoginMsg] = useState(false);

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(emailid);
    console.log(psword);

    const isValid = formValidation();

    if (isValid) {
      setEmailid("");
      setPsword("");
      setTimeout(() => {
        history.push("/home");
      }, 4000);

      setLoginMsg(true);

      toast.dark("login successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  const formValidation = () => {
    const emailidErr = {};
    const pswordErr = {};

    let isValid = true;
    console.log(emailid);
    console.log(psword);

    if (emailid === "") {
      emailidErr.emailidreq = "emali required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailid)) {
      emailidErr.emailerror = "Invalid email format";
      isValid = false;
    } else if (emailid.trim().length <= 5) {
      emailidErr.emailidErrorShort = "email is too short";
      isValid = false;
    } else if (emailid.trim().length > 25) {
      emailidErr.emilidErrorLong = "email is too long";
      isValid = false;
    }

    if (psword === "") {
      pswordErr.passwordreq = "password required";
      isValid = false;
    } else if (psword.trim().length < 6) {
      pswordErr.passwordErrorShort = "Password must be more than 6 characters";
      isValid = false;
    } else if (psword.trim().length > 12) {
      pswordErr.passwordErrorLong = "password is too long";
      isValid = false;
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/.test(psword)
    ) {
      pswordErr.passwordError = "Including A, a, 0-9 and Symbol";
      isValid = false;
    }
    setEmailErr(emailidErr);
    setPswordErr(pswordErr);

    return isValid;
  };

  toast.configure();

  return (
    <>
      <div className="login justify-content-between">
        <div className="loginBg">
          {/* {loginMsg && <LoginValidations setLoginMsg={setLoginMsg} />} */}
        </div>
        <div className="loginForm">
          <div className="text-center m-5">
            <FontAwesomeIcon icon="user" size="6x" />
          </div>
          <form className="p-4" onSubmit={onSubmit}>
            {/* <label htmlFor="email">Enter Your Email ID</label> */}
            <div className="form-group input-group mb-4 shadow">
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="envelope" />
                </span>
              </div>

              <input
                type="email"
                className="form-control"
                id="emaildid"
                placeholder="Enter Your Email ID"
                name="emailid"
                value={emailid}
                onChange={(e) => {
                  setEmailid(e.target.value);
                }}
              />
            </div>

            {Object.keys(emailidErr).map((key) => {
              return <div style={{ color: "red" }}>{emailidErr[key]}</div>;
            })}
            {/* <label htmlFor="password">Enter Your Password</label> */}
            <div className="form-group input-group mb-4 shadow">
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="lock" />
                </span>
              </div>
              <input
                type={passwordInputType}
                className="form-control"
                placeholder="Enter Your Password"
                id="psword"
                name="psword"
                value={psword}
                onChange={(e) => {
                  setPsword(e.target.value);
                }}
              />
              <span className="password-toggle-icon">{ToggleIcon}</span>
            </div>

            {Object.keys(pswordErr).map((key) => {
              return <div style={{ color: "red" }}>{pswordErr[key]}</div>;
            })}

            <button
              type="submit"
              className="btn btn-primary btn-block"
              //onClick={notify}
            >
              Login
            </button>

            <hr />
            <div className="mt-3 justify-content-between">
              <Link>Forgot Password?</Link>
              <div>
                <Link>Creat New Account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
