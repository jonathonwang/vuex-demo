import * as types from './mutation-types';

export const createNewTask = ({ dispatch }, newTask) => {
  if(newTask !== ''){
    dispatch(types.CREATE_TASK);
    dispatch(types.CLEAR_NEW_TASK);
    dispatch(types.SHOW_ALERT,'success',`Task "${newTask}" Successfully Created`);
  }
  else{
    dispatch(types.SHOW_ALERT,'danger','New Task Cannot Be Empty');
  }
};
export const hideAlert = ({ dispatch }) => {
  dispatch(types.HIDE_ALERT);
};
export const updateNewTask = ({ dispatch }, e) => {
  dispatch(types.UPDATE_NEW_TASK, e.target.value);
};
export const deleteTask = ({ dispatch }, task) => {
  dispatch(types.DELETE_TASK, task);
  dispatch(types.SHOW_ALERT,'info',`Task "${task.title}" Successfully Deleted`);
};
export const toggleTaskStatus = ({ dispatch }, task) => {
  if(task.status === 0){
    dispatch(types.COMPLETE_TASK, task);
  }
  else{
    dispatch(types.UNCOMPLETE_TASK, task);
  }
};
export const clearCompletedTasks = ({ dispatch }, completedTasks) => {
  dispatch(types.CLEAR_COMPLETED_TASKS, completedTasks);
  dispatch(types.SHOW_ALERT,'info',`${completedTasks.length} Completed Tasks Successfully Deleted`);
};
