import { getTableDataApi } from '../../api/wbx-table-server-api';

export default {
  state: {
    tableData: [],
    tableDataFiltered: [],
  },
  mutations: {
    SET_TABLE_DATA(state, payload) {
      state.tableData = payload;
    },
    SET_TABLE_DATA_FILTERED(state, payload) {
      state.tableDataFiltered = payload;
    },
  },
  actions: {
    async setTableData({ commit }) {
      const tableData = await getTableDataApi();

      commit('SET_TABLE_DATA', tableData);
    },
    setTableDataFiltered({ commit }, payload) {
      commit('SET_TABLE_DATA_FILTERED', payload);
    },
  },
  getters: {
    tableData(state) {
      return state.tableData;
    },
    tableDataFiltered(state) {
      return state.tableDataFiltered;
    },
  },
};
