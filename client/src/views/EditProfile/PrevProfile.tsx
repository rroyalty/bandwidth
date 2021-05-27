import React from "react";
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


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