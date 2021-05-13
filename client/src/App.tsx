import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Landing from './views/Landing/landing'
import Browse from './views/Browse/Browse'
import About from './views/About/About'
import Footer from './components/Footer/Footer'


import Navbar from './components/Navbar/Navbar'
import background from './detroit-punk-2.jpg'



import './App.css';


import { Container } from "@material-ui/core";


const App: React.FC = (props: any): JSX.Element => {

  return (
    <Router>
      <>
        <Container maxWidth='xl' className="App bg" style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: "100vh",
        }}>
          <Navbar />
          <Switch>
            <Route exact path="/index" component={Landing} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Landing} />
          </Switch>

        </Container>
        {/* <Footer /> */}
      </>
    </Router>

  );
}

export default App;
