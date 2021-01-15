import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  async created() {
    await this.$store.dispatch('setTableData');
    this.$store.dispatch(
      'setTableDataFiltered',
      this.$store.state.table.tableData
    );
  },
  render: (h) => h(App),
}).$mount('#app');
