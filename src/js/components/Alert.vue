<style lang="sass">
</style>

<template>
  <div>
    <div id="alert" transition="alert" v-if="alertVisibility == 'visible'" class="alert alert-{{alertStatus}} text-center" role="alert">
      <span class="text-capitalize" transition="message" transition-mode="out-in">
        <span class="fa" :class="{'fa-exclamation-circle': alertStatus == 'danger', 'fa-info-circle': alertStatus == 'info', 'fa-check-circle-o': alertStatus == 'success'}"></span>
        {{alertMessage}}
      </span>
      <span class="pull-right close-alert" @click.prevent="hideAlert($event)">&times;</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import * as actions from '../vuex/actions';
export default {
  vuex: {
    getters: {
      alertVisibility: state => state.Alert.alert.visibility,
      alertMessage: state => state.Alert.alert.message,
      alertStatus: state => state.Alert.alert.status,
    },
    actions
  }
}
</script>
