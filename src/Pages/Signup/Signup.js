import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import LoginWithApp from "../LoginWithApp/LoginWithApp";
import PageSpinner from "../Shared/PageSpinner/PageSpinner";

const Signup = () => {
  const nameRef = useRef("")
  const emailRef = useRef("");
  const passRef = useRef("");

  const [check, setCheck] = useState(false)

  const [createUserWithEmailAndPassword, user, loading,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();

    const name = nameRef.current.value; 
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    console.log(name);
    
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
  };

  if(loading || updating){
    return <PageSpinner></PageSpinner>;
  }

  if(user){
        console.log(user);
        Swal.fire(
            'User Created',
            'Verification mail has been send',
            'success'
        )
        navigate("/login");
  }

  if (error) {
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
    });
  }

  // const handleCheck = ()=> {
  //   if (check === false) {
  //     setCheck(true);
  //   }
  //   else if(check === true){
  //     setCheck(false);
  //   }
  // }

  console.log(check);
    
  return (
    <div className="w-50 mx-auto px-3 py-4 mt-5">
      <h2 className="text-center text-primary">Signup</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Profile Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className={`${check ?"text-primary": "text-danger"}`} onClick={()=>{setCheck(!check)}} type="checkbox" label="accept Auto-Fixer's terms & conditions "/>
        </Form.Group>

        <Button disabled={!check} className="w-50 d-block mx-auto" variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <p className="my-3 text-center">
        Already have an account?{" "}
        <Link className="text-primary text-decoration-none" to={"/login"}>
          Login
        </Link>
      </p>
      <div>
        <LoginWithApp></LoginWithApp>
      </div>
    </div>
  );
};

export default Signup;
