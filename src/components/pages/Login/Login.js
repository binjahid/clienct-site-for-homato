import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signInUsingGoogle, setIsLoading, loginUsingEmai } = useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirectUri = location.state?.from || "/home";
  const googleRedirect = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Logged In", { autoClose: 3000 });
        history.push(redirectUri);
      })
      .finally(() => setIsLoading(false))
      .catch((erro) => {
        toast.error("Failed To login", {
          autoClose: 3000,
        });
      });
  };

  const onSubmit = (data) => {
    loginUsingEmai(data.email, data.password);
  };
  // console.log(location.state?.from);
  return (
    <div className="container">
      <div className="row-container p-5">
        <div className="row shadow">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center ">
            <div className="formSecondaryContainer">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="form-container"
              >
                <h4 className="text-center form-title">
                  Enter Your Email And Password To Login
                </h4>
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="logInFormInput"
                />
                <input
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="logInFormInput"
                />
                <input type="submit" value="Submit" className="form-submit" />
              </form>
              <p className="text-center mt-3">
                Don't Have Any Account?{" "}
                <Link to="/register">
                  <span className="form-log-register">Register</span>
                </Link>
              </p>
              <div className="google-sign-in text-center">
                <p className="form-or">Or</p>
                <button className="googleSingInIcon" onClick={googleRedirect}>
                  <img
                    src="https://i.ibb.co/kKrwk7K/icons8-google-48.png"
                    alt=""
                    width="30px"
                  />
                  Google
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <img
              src="https://i.ibb.co/Twk2Zjp/4957136.jpg"
              alt=""
              height="500px"
              width="500px"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
