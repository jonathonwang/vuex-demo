import { expect } from 'chai';
import * as actions from '../../vuex/actions';
import Vue from 'vue';



// helper for testing action with expected mutations
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0;
  // mock dispatch
  const dispatch = (name, ...payload) => {
    const mutation = expectedMutations[count];
    expect(mutation.name).to.equal(name);
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload);
    }
    count++;
    if (count >= expectedMutations.length) {
      done();
    }
  };
  // call the action with mocked store and arguments
  action({dispatch, state}, ...args);
  // check if no mutations should have been dispatched
  if (count === 0) {
    expect(expectedMutations.length).to.equal(0);
    done();
  }
};

// Action Tests
describe('Actions', () => {

  it('createNewTask', (done) => {
    let state = {
      tasks: [],
      newTask: 'Hello World'
    };
    testAction(actions.createNewTask, [state.newTask], state, [
      { name: 'CREATE_TASK', payload:[] },
      { name: 'CLEAR_NEW_TASK', payload:[] },
      { name: 'SHOW_ALERT', payload:['success','Task \"Hello World\" Successfully Created'] }
    ], done );
  });

  it('createNewTask No-Title', (done) => {
    let state = {
      tasks: [],
      newTask: ''
    };
    testAction(actions.createNewTask, [state.newTask], state, [
      { name: 'SHOW_ALERT', payload:['danger','New Task Cannot Be Empty'] }
    ], done );
  });

  it('createNewTask 2 Characters', (done) => {
    let state = {
      tasks: [],
      newTask: 'Yo'
    };
    testAction(actions.createNewTask, [state.newTask], state, [
      { name: 'SHOW_ALERT', payload:['danger', 'New Task Must Be At Least 3 Characters Long'] }
    ], done );
  });

  it('hideAlert', (done) => {
    let state = {
      alert: { status:'danger', message: 'Danger Message', visibility: 'visible' }
    };
    testAction(actions.hideAlert, [], state, [
      { name: 'HIDE_ALERT', payload:[] }
    ], done );
  });

  it('updateNewTask', (done) => {
    let newTask = 'Hello World';
    let state = {
      tasks: [],
      newTask: ''
    };
    testAction(actions.updateNewTask, [newTask], state, [
      { name: 'UPDATE_NEW_TASK', payload:['Hello World'] },
    ], done );
  });

  it('deleteTask', (done) => {
    let taskToDelete = {title: 'Hello World', status: 0};
    let state = {
      tasks: [taskToDelete],
      newTask: ''
    };
    testAction(actions.deleteTask, [taskToDelete], state, [
      { name: 'DELETE_TASK', payload: [ { title: 'Hello World', status: 0 } ] },
      { name: 'SHOW_ALERT', payload: ['info','Task \"Hello World\" Successfully Deleted'] }
    ], done );
  });

  it('toggleTaskStatus Complete', (done) => {
    let taskToToggle = {title: 'Hello World', status: 0};
    let state = {
      tasks: [taskToToggle],
      newTask: ''
    };
    testAction(actions.toggleTaskStatus, [taskToToggle], state, [
      { name: 'COMPLETE_TASK', payload:[ { title: 'Hello World', status: 0 } ] },
    ], done );
  });

  it('toggleTaskStatus Incomplete', (done) => {
    let taskToToggle = {title: 'Hello World', status: 1};
    let state = {
      tasks: [taskToToggle],
      newTask: ''
    };
    testAction(actions.toggleTaskStatus, [taskToToggle], state, [
      { name: 'UNCOMPLETE_TASK', payload:[ { title: 'Hello World', status: 1 } ] },
    ], done );
  });

  it('clearCompletedTasks', (done) => {
    let completedTasksToClear = [ {title: 'Hello World1', status: 1}, {title: 'Hello World2', status: 1}, {title: 'Hello World3', status: 1},];
    let state = {
      tasks: [...completedTasksToClear],
      newTask: ''
    };
    testAction(actions.clearCompletedTasks, [completedTasksToClear], state, [
      { name: 'CLEAR_COMPLETED_TASKS', payload:[ [{ status:1, title:'Hello World1' },{ status:1, title:'Hello World2' },{ status:1, title:'Hello World3' }] ] },
      { name: 'SHOW_ALERT', payload:['info','3 Completed Tasks Successfully Deleted'] }
    ], done );
  });


});
