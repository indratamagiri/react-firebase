import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setDisableBalanceOnAdd, setAllowRegistration, setDisableBalanceOnEdit} from '../../actions/settingAction';

class Setting extends Component { 

  render() {
    const { setDisableBalanceOnAdd, setDisableBalanceOnEdit, setAllowRegistration} = this.porps.setting;
    
    return (
      <div>
        
      </div>
    )
  }
}

Setting.propTypes = {
    setting : PropTypes.object.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setAllowRegistration: setAllowRegistration
}

export default connect((state, porps) => ({
    auth: state.firebase.auth,
    setting: state.setting
}), { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit} 
)(Setting);
