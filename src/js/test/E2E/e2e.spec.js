import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

describe('Vuex E2E Test', () => {
  before( () => {
    casper.start('http://vuex.app/');
  });

  it('Retrieve Front Page', () => {
    casper.then( () => {
      'Vuex | Test'.should.matchTitle;
      casper.fetchText('h1').should.equal('Todo');
      casper.getHTML('button.btn.btn-primary').should.equal('<span class="fa fa-plus"></span>');
    });
  });

  // it('Create Task on Form Submit With Input', () => {
  //   casper.then( () => {
  //     casper.echo(casper.getHTML('.task-container'));
  //     'form'.should.be.inDOM.and.be.visible;
  //     casper.fill('form', {
  //       taskinput: 'casperjs'
  //     }, true);
  //     casper.click('form button');
  //     casper.then( () => {
  //       let taskLength = document.getElementsByClassName('task').length;
  //       casper.echo(taskLength);
  //       casper.echo(document.getElementsByClassName('task-container'));
  //       casper.getFormValues('form').taskinput.should.equal('');
  //     });
  //   });
  // });
});
