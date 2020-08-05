'use-strict'

//Dependencies
import React, { Component } from "react";



// Navigation
import RootNavigator from "./navigation/root_navigator";
import {withRouter} from 'react-router-dom';


class App extends Component {


  // Renders UI
  render() {

    return(
    	
      <div className="main-container">
      
        <RootNavigator/>

      </div>

    )

  }

}



export default withRouter(App);
