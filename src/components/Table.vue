<template>
  <v-container class="d-flex flex-column align-center">
    <v-row>
      <v-col>
        <h1>The Table</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table class="table__main">
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Distance</th>
          </tr>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.date }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.distance }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['tableData']),
  },
  beforeMount() {
    this.setTableData();
  },
  methods: {
    ...mapActions(['setTableData']),
  },
};
</script>

<style lang="scss" scoped>
.table__main {
  border: 1px solid gray;
  border-collapse: collapse;
}

.table__main td,
.table__main th {
  padding: 8px;

  border: 1px solid #ddd;
}

.table__main tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table__main tr:hover {
  background-color: #ddd;
}

.table__main th {
  padding-top: 12px;
  padding-bottom: 12px;

  text-align: left;
  color: white;

  background-color: #2196f3;
}
</style>
