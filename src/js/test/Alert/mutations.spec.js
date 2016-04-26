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
  });
  it('HIDE_ALERT', () => {
    let state = {
      alert: { status:'danger', message: 'Danger Message', visibility: 'hidden'}
    };
    expect(state.alert.visibility).to.equal('hidden');
  });
});
