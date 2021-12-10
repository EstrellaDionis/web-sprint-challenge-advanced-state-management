import React from 'react';
import Smurf from './Smurf';

import thunk from 'redux-thunk';
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions';

 const SmurfList = (props)=> {
    
    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        <Smurf smurf={props.smurfs}/>
    </div>);
}



const mapToState = (state) => {
    return {
        isLoading: state.loading,
        smurfs: state.smurfs
    }
  }

export default connect(mapToState, {fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.