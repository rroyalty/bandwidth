import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Landing from './views/Landing/landing'
import Browse from './views/Browse/Browse'
import About from './views/About/About'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import background from './detroit-punk-2.jpg'
import FAQ from '../src/views/faq/FAQ'
import './App.css';


import { IconButton, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


// const useStyles = makeStyles({
//   navbarDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`
//   },
//   navDisplayFlex: {
//     display: `flex`,
//     justifyContent: `space-between`
//   },
//   linkText: {
//     textDecoration: `none`,
//     textTransform: `uppercase`,
//     color: `white`
//   },
//   mobileNav: {
//     display: 'flex',
//     flexDirection: 'column',
//     color: 'black'
//   }
// });


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
          <Route exact path="/FAQ" component={FAQ}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Landing} />
        </Switch>

        </Container>
      </>
    </Router>
  );
}

export default App;
