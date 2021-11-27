import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const Signup = () => {
  const { register, handleSubmit } = useForm();

  // const { signInUsingGoogle,  } = useFirebase();
  const {
    signInUsingGoogle,
    setIsLoading,
    registerWihtEmailAndPassword,
    user,
  } = useFirebase();

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
    registerWihtEmailAndPassword(data.email, data.password, data.name);
    console.log(user);
  };

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
                <h4 className="text-center form-title">Please Register Here</h4>
                <input
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="logInFormInput"
                />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  className="logInFormInput"
                />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  className="logInFormInput"
                />
                <input type="submit" value="Submit" className="form-submit" />
              </form>
              <p className="text-center mt-3">
                Alreay Have An Account?{" "}
                <Link to="/login">
                  <span className="form-log-register">Login</span>
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
              src="https://i.ibb.co/415nXCb/Access-control-system-abstract-concept-vector-illustration-Security-system-authorize-entry-login-cre.jpg"
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

export default Signup;
