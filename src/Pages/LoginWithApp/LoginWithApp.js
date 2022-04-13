import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import auth from "../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import PageSpinner from "../Shared/PageSpinner/PageSpinner";

const LoginWithApp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    signInWithGoogle();
  };

  const handleGitHub = () => {
    signInWithGithub();
  };

  if (googleUser || githubUser) {
    Swal.fire({
      title: "Welcome",
      text: "Successfully logged in",
      icon: "success",
    });
    navigate(from, { replace: true });
  }

  if (googleLoading || githubLoading) {
    <PageSpinner></PageSpinner>;
  }

  if (googleError || githubError) {
    Swal.fire({
      title: "Error",
      text: googleError.message,
      icon: "error",
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-50 px-2">
          <hr />
        </div>
        <div className="">or</div>
        <div className="w-50 px-2">
          <hr />
        </div>
      </div>

      <button
        onClick={handleGoogle}
        className="btn btn-white border border-2 text-primary w-75 d-block mx-auto my-2 d-flex justify-content-center align-items-center"
      >
        <FcGoogle></FcGoogle>
        <span className="mx-2">Continue with Google</span>
      </button>
      <button
        onClick={handleGitHub}
        className="btn btn-white border border-2 text-primary w-75 d-block mx-auto my-2 d-flex justify-content-center align-items-center"
      >
        <FaGithub color="black"></FaGithub>
        <span className="mx-2">Continue with GitHub</span>
      </button>
      <button className="btn btn-white border border-2 text-primary w-75 d-block mx-auto my-2 d-flex justify-content-center align-items-center">
        <FaFacebookF></FaFacebookF>
        <span className="mx-2">Continue with Facebook</span>
      </button>
    </>
  );
};

export default LoginWithApp;
