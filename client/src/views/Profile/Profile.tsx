import React from "react";
import { Container } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';


const Profile: React.FC = (): JSX.Element => {
  const  user:any  = useAuth0();
  // const { name, picture, email } = user;
  console.log(user)


  return (
    <div>
      <Container className="bg">
        {/* className="row align-items-center profile-header" */}
      <div >
        {/* className="col-md-2 mb-3" */}
        <div >
          <img
            src={user.user.picture}
            alt="Profile"
            // className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{user.user.name}</h2>
          {console.log(user)}
          <p className="lead text-muted">{user.user.email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {/* {JSON.stringify(user, null, 2)} */}
      
        </pre>
      </div>
    </Container>
    </div>
  );
};

export default Profile;