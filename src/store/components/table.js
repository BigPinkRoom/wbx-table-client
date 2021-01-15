import wbxTableServerApi from '@/api/wbxTableServerApi';

export default {
  state: {
    tableData: [],
  },
  mutations: {
    SET_TABLE_DATA(state, payload) {
      tableData = payload;
    },
  },
  actions: {
    async setTableData({ commit }) {
      const tableData = await wbxTableServerApi();

      commit(SET_TABLE_DATA, tableData);
    },
  },
  getters: {},
};
