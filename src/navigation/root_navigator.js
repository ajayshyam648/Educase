'use-strict'

import React, { Component } from "react";

import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from 'react-router-dom';

import { connect } from 'react-redux'; //Redux support
import * as Actions from '../redux/actions'; //Redux support

// all-screens
import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";
import EduBridge from "../screens/edubridge";
import EduLearn from "../screens/edulearn";
import EduLive from "../screens/edulive";
import EduSocial from "../screens/edusocial";

class RootNavigator extends Component {

  render() {

    return (
      <>
     
     <Router basename={window.location.pathname || ''}>
      
         <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/about' component={About} />
           <Route path='/contact' component={Contact} />
           <Route path='/edubridge' component={EduBridge} />
           <Route path='/edulearn' component={EduLearn} />
           <Route path='/edulive' component={EduLive} />
           <Route path='/edusocial' component={EduSocial} />
         </Switch>
       
     </Router>
     
      </>
    )
  }
}


function mapStateToProps(state){
  return {
    AppData: state.AppDataReducer
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateAppData: (AppData) => dispatch({type: Actions.UPDATE_APP_DATA, payload: AppData}),
});


export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
