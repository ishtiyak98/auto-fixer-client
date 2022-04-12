import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const Signup = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;
    
    createUserWithEmailAndPassword(email, pass);
  };

  if(user){
        console.log(user);
        Swal.fire(
            'User Created',
            'You can login now',
            'success'
        )
        navigate("/login");
    }
    
  return (
    <div className="w-50 mx-auto px-3 py-4 mt-5">
      <h2 className="text-center text-primary">Signup</h2>
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

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
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
          Already have an account?{" "}
          <Link className="text-primary text-decoration-none" to={"/login"}>
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
