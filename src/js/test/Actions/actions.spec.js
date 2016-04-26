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
    if (mutation.payload) {
      expect(mutation.payload).to.deep.equal(payload);
    }
    count++;
    if (count >= expectedMutations.length) {
      done();
    }
  };
  // call the action with mocked store and arguments
  action({dispatch}, state, ...args);

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
      newTask: '',
    };
    testAction(actions.createNewTask, [], state, [
      { name: 'CREATE_TASK' },
      { name: 'CLEAR_NEW_TASK' },
      { name: 'SHOW_ALERT' }
    ], done );
  });

  it('hideAlert', (done) => {
    let state = {
      alert: { status:'danger', message: 'Danger Message', visibility: 'visible' }
    };
    testAction(actions.hideAlert, [], state, [
      { name: 'HIDE_ALERT' },
    ], done );
  });


});
