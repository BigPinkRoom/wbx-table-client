import { getTableDataApi } from '../../api/wbx-table-server-api';

export default {
  state: {
    tableData: [],
  },
  mutations: {
    SET_TABLE_DATA(state, payload) {
      state.tableData = payload;
    },
  },
  actions: {
    async setTableData({ commit }) {
      const tableData = await getTableDataApi();

      commit('SET_TABLE_DATA', tableData);
    },
  },
  getters: {
    tableData(state) {
      return state.tableData;
    },
  },
};
