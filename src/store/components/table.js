import { getTableDataApi } from '../../api/wbx-table-server-api';

export default {
  state: {
    tableData: [],
    tableDataFiltered: [],
    paginationCurrentPage: 0,
  },
  mutations: {
    SET_TABLE_DATA(state, payload) {
      state.tableData = payload;
    },
    SET_TABLE_DATA_FILTERED(state, payload) {
      state.tableDataFiltered = payload;
    },
    SET_PAGINATION_CURRENT_PAGE(state, payload) {
      state.paginationCurrentPage = payload;
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
    tableDataFilteredPaginated(state) {
      let array = [];
      let subArray = [];
      let count = 0;

      state.tableDataFiltered.forEach((element) => {
        if (count === 10) {
          count = 0;
          array.push(subArray);
          subArray = [];
        } else {
          subArray.push(element);
          count++;
        }
      });

      if (array.length === 0) {
        array.push(subArray);
      }

      return array;
    },

    paginationCurrentPage(state) {
      return state.paginationCurrentPage;
    },
  },
};
