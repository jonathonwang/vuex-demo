import { expect } from 'chai';
import { mutations } from '../../vuex/modules/Task';
import Vue from 'vue';
// destructure assign mutations
const {
  CREATE_TASK,
  UPDATE_NEW_TASK,
  CLEAR_NEW_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  UNCOMPLETE_TASK,
  CLEAR_COMPLETED_TASKS,
} = mutations;

describe('Task Mutations', () => {
  it('CREATE_TASK', () => {
    let state = {
      tasks: [],
      newTask: 'Hello World',
    };
    CREATE_TASK(state,state.newTask);
    expect(state.tasks[0].title).to.equal('Hello World');
    expect(state.tasks[0].status).to.equal(0);
  });
  it('UPDATE_NEW_TASK', ()=> {
    let state = {
      tasks: [],
      newTask: ''
    };
    let newTitle = 'Hello World';
    UPDATE_NEW_TASK(state, newTitle);
    expect(state.newTask).to.equal('Hello World');
  });
  it('CLEAR_NEW_TASK', () => {
    let state = {
      tasks: [],
      newTask: 'Hello World',
    };
    CLEAR_NEW_TASK(state);
    expect(state.newTask).to.equal('');
  });
  it('DELETE_TASK', () => {
    let taskToDelete = {title: 'Hello World', status: 0};
    let state = {
      tasks: [ taskToDelete ],
      newTask: ''
    };
    DELETE_TASK(state,taskToDelete);
    expect(state.tasks.length).to.equal(0);
  });
  it('COMPLETE_TASK', () => {
    let taskToComplete = {title: 'Hello World', status: 0};
    let state = {
      tasks: [ taskToComplete ],
      newTask: ''
    };
    COMPLETE_TASK(state,taskToComplete);
    expect(state.tasks[0].status).to.equal(1);
  });
  it('UNCOMPLETE_TASK', () => {
    let taskToUncomplete = {title: 'Hello World', status: 1};
    let state = {
      tasks: [ taskToUncomplete ],
      newTask: ''
    };
    UNCOMPLETE_TASK(state,taskToUncomplete);
    expect(state.tasks[0].status).to.equal(0);
  });
  it('CLEAR_COMPLETED_TASKS', () => {
    let tasksToClear = [ {title: 'Hello World', status: 1}, {title: 'Hello World2', status: 1}, {title: 'Hello World3', status: 1}, {title: 'Hello World4', status: 1} ];
    let incompleteTask = {title: 'Not Done', status: 0};
    let state = {
      tasks: [...tasksToClear,incompleteTask],
      newTask: ''
    };
    CLEAR_COMPLETED_TASKS(state,tasksToClear);
    expect(state.tasks.length).to.equal(1);
    expect(state.tasks[0].status).to.equal(0);
  });
});
