import {
  HIDE_ALERT,
  SHOW_ALERT
} from '../mutation-types';

// initial state
const state = {
  alert: { status:'', message: '', visibility: 'hidden'}
};

// mutations
const mutations = {
  [SHOW_ALERT] (state, status, message){
    state.alert.message = message;
    state.alert.status = status;
    state.alert.visibility = 'visible';
  },
  [HIDE_ALERT] (state){
    state.alert.visibility = 'hidden';
  }
};

export default {
  state,
  mutations
};
