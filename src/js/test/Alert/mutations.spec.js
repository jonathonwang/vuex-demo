import { expect } from 'chai';
import { mutations } from '../../vuex/modules/Alert';
import Vue from 'vue';
// destructure assign mutations
const {
  SHOW_ALERT,
  HIDE_ALERT
} = mutations;

describe('Alert Mutations', () => {

  it('SHOW_ALERT', () => {
    let state = {
      alert: { status:'', message: '', visibility: 'hidden'}
    };
    let status = 'danger';
    let message = 'Danger Message';
    SHOW_ALERT(state, status, message);
    expect(state.alert.status).to.equal('danger');
    expect(state.alert.message).to.equal('Danger Message');
    expect(state.alert.visibility).to.equal('visible');
  }); // Show Alert

  it('HIDE_ALERT', () => {
    let state = {
      alert: { status:'danger', message: 'Danger Message', visibility: 'visible'}
    };
    HIDE_ALERT(state);
    expect(state.alert.visibility).to.equal('hidden');
  }); // Hide Alert

}); // Alert Mutations
