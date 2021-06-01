import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  function handleLoginSubmit() {
    history.push("/login");
  }
  function handleSignUpSubmit() {
    history.push("/signup");
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Form onSubmit={handleLoginSubmit}>
            <Button className="w-100 mb-5" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleSignUpSubmit}>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
