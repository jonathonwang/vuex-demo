import Vue from 'vue';
import FormGroup from './components/FormGroup.vue';
import Alert from './components/Alert.vue';
import store from './vuex/store';

new Vue({
  el: 'body',
  store, // Inject Store Into All Components
  components: { FormGroup, Alert }
});
