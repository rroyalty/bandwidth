import React from "react";
import { Container, Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios'
import { RootState } from "../../redux/store";


const PrevProfile: React.FC = (): JSX.Element => {

    return (
      <div>
        <Container className="bg">
          <h2>Profile Edited!</h2>
          <img src="https://media.giphy.com/media/hogi8ozWopwA3vzJS0/giphy.gif" alt="guitar" />
          <div>
            <Button>
              <Link to="/find">Find other users!</Link>
            </Button>
          </div>
        </Container>
      </div>
    );
  };

  export default PrevProfile;