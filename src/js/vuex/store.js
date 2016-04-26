import Vue from 'vue';
import Vuex from 'vuex';

import Task from './modules/Task.js';
import Alert from './modules/Alert.js';

Vue.use(Vuex);

// Importing Modules to create the Mutations and Initial States
// Must remember to prepend module name to beginning before state in getters for Vue Components
// ex: state.Task.status
export default new Vuex.Store({
  modules: {
    Task,
    Alert
  }
});
