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
            <th @click="sortByTitle()">Title</th>
            <th @click="sortByNumbers(sortQuantityUse, 'quantity')">
              Quantity
            </th>
            <th @click="sortByNumbers(sortDistanceUse, 'distance')">
              Distance
            </th>
          </tr>
          <tr v-for="(item, index) in paginatedTable[currentPage]" :key="index">
            <td>{{ new Date(item.date).toDateString() }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.distance }}</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <button @click="currentPage--">Prev</button>
      </v-col>
      <v-col>
        <button @click="currentPage++">Next</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Table',
  data() {
    return {
      title: '',
      quantity: '',
      distance: '',
      sortTitleUse: false,
      sortQuantityUse: false,
      sortDistanceUse: false,
      currentPage: 10,
    };
  },
  computed: {
    ...mapGetters(['tableDataFiltered']),
    paginatedTable: {
      get: function() {
        let array = [];
        let subArray = [];
        let count = 0;
        this.tableDataFiltered.forEach((element) => {
          if (count === 10) {
            count = 0;
            array.push(subArray);
            subArray = [];
          } else {
            subArray.push(element);
            count++;
          }
        });

        return array;
      },
    },
    methods: {
      ...mapActions(['setTableDataFiltered']),
      sortByTitle() {
        let sortedArray;

        if (this.sortTitleUse) {
          sortedArray = this.tableDataFiltered.sort((a, b) => {
            let titleA = a.title.toLowerCase();
            let titleB = b.title.toLowerCase();

            if (titleA < titleB) {
              return -1;
            }

            if (titleA > titleB) {
              return 1;
            }

            return 0;
          });
        } else {
          sortedArray = this.tableDataFiltered.sort((a, b) => {
            let titleA = a.title.toLowerCase();
            let titleB = b.title.toLowerCase();

            if (titleA < titleB) {
              return 1;
            }

            if (titleA > titleB) {
              return -1;
            }

            return 0;
          });
        }

        this.sortTitleUse = !this.sortTitleUse;

        this.setTableDataFiltered(sortedArray);
      },

      sortByNumbers(isUse, column) {
        let sortedArray;
        if (this[isUse]) {
          sortedArray = this.tableDataFiltered.sort((a, b) => {
            return a[column] - b[column];
          });
        } else {
          sortedArray = this.tableDataFiltered.sort((a, b) => {
            return b[column] - a[column];
          });
        }

        this[isUse] = !this[isUse];

        this.setTableDataFiltered(sortedArray);
      },
    },
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
