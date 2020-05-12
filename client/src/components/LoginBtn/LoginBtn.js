import React from "react";
import { Button } from "reactstrap";
import auth0Client from "../../utils/Auth";

export default function FormDialog() {
  return (
    <div className="d-flex justify-content-center">
      <Button outline color="info" onClick={auth0Client.signIn}>
        Get Started
      </Button>
    </div>
  );
}
