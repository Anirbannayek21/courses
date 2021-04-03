import React from "react";
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Common from "./Common";
import Contact from "./Contact";
import Service from "./Service";
import web from "./img/img1.svg"
import web2 from "./img/img2.svg"
import Navbarmy from "./Navbarmy";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbarmy/>
      {(location.pathname ==="/service")?null:<br/>}
      <Switch>
      <Route exact path="/" render={()=>
          <Common
            title="Grow your business with"
            name="Nayek school"
            para = "We are team of talanted developer making websites"
            btn="Get started"
            img={web}
            link="/service"
          />
        }/>
        <Route exact path="/about" render={()=>
        <Common
          title="Welcome to About Page"
          name="Nayek school"
          para = "We are team of talanted developer making websites"
          btn="Contact us"
          img={web2}
          link="/contact"
        />
        }/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
