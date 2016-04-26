import {
  CREATE_TASK,
  CLEAR_NEW_TASK,
  UPDATE_NEW_TASK,
  DELETE_TASK,
  UNCOMPLETE_TASK,
  COMPLETE_TASK,
  CLEAR_COMPLETED_TASKS
} from '../mutation-types';

// initial state
export const state = {
  tasks: [],
  newTask: '',
};

// mutations
export const mutations = {
  [CREATE_TASK] (state, newTask) {
    let newTaskItem = {title: state.newTask, status: 0};
    state.tasks.push(newTaskItem);
  },
  [UPDATE_NEW_TASK] (state, newTitle) {
    state.newTask = newTitle;
  },
  [CLEAR_NEW_TASK] (state) {
    state.newTask = '';
  },
  [DELETE_TASK] (state, task) {
    state.tasks.$remove(task);
  },
  [COMPLETE_TASK] (state, task) {
    task.status = 1;
  },
  [UNCOMPLETE_TASK] (state, task) {
    task.status = 0;
  },
  [CLEAR_COMPLETED_TASKS] (state, completedTasks) {
    for(let task of completedTasks){
      state.tasks.$remove(task);
    }
  }
};

export default {
  state,
  mutations
};
