import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInWithEmailAndPassword(email, pass);
  };

  if (user) {
    Swal.fire({
      title: "Welcome",
      text: "Successfully logged in",
      icon: "success",
    });
    navigate(from, { replace: true });
  }

  if (loading) {
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  }

  if (error) {
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
    });
  }

  return (
    <div className="w-50 mx-auto px-3 py-4 mt-5">
      <h2 className="text-center text-primary">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="my-2">
          New User?{" "}
          <Link className="text-primary text-decoration-none" to={"/signup"}>
            Signup
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
