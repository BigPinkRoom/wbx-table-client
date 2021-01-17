<template>
  <div>
    <v-container
      class="d-flex flex-column align-center"
      v-if="tableDataFiltered.length"
    >
      <!-- table title -->
      <v-row>
        <v-col>
          <h1>The Table</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <table class="table__main">
            <!-- table headers -->
            <tr>
              <th>Date</th>
              <th
                @click="
                  setTableDataFiltered(
                    sort.byText(tableDataFiltered, 'sortTitleUseMark')
                  )
                "
              >
                Title {{ sort.sortTitleUseMark ? '▲' : '▼' }}
              </th>
              <th
                @click="
                  setTableDataFiltered(
                    sort.byNumbers(
                      tableDataFiltered,
                      'sortQuantityUseMark',
                      'quantity'
                    )
                  )
                "
              >
                Quantity
              </th>
              <th
                @click="
                  setTableDataFiltered(
                    sort.byNumbers(
                      tableDataFiltered,
                      'sortDistanceUseMark',
                      'distance'
                    )
                  )
                "
              >
                Distance
              </th>
            </tr>

            <!-- table body -->
            <tr
              v-for="(item, index) in tableDataFilteredPaginated[currentPage]"
              :key="index"
            >
              <td>{{ new Date(item.date).toDateString() }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.distance }}</td>
            </tr>
          </table>
        </v-col>
      </v-row>

      <!-- table pagination -->
      <v-row class="table-pagination mt-3">
        <!-- pagination previous page-->
        <v-col class="col-auto">
          <button class="table-pagination__button" @click="previousPage()">
            Prev
          </button>
        </v-col>

        <!-- pagination current page -->
        <v-col class="col-auto table-pagination__text d-flex align-center">
          Page: {{ currentPage + 1 }}
        </v-col>

        <!-- pagination next page -->
        <v-col class="col-auto">
          <button class="table-pagination__button" @click="nextPage()">
            Next
          </button>
        </v-col>

        <!-- pagination all pages length -->
        <v-col class="col-auto table-pagination__text d-flex align-center">
          Total pages: {{ tableDataFilteredPaginated.length }}
        </v-col>
      </v-row>
    </v-container>
    <v-container class="table-else__container d-flex align-center" v-else>
      <v-row>
        <v-col class="table-else__text d-flex align-center justify-center">
          <h3>
            Please wait (first loading can be long - for 15 seconds. Heroku)...
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import sort from '../js/helpers/sorts';

export default {
  name: 'Table',
  data() {
    return {
      title: '',
      quantity: '',
      distance: '',
      currentPage: 0,
      sort,
    };
  },
  computed: {
    ...mapGetters(['tableDataFiltered', 'tableDataFilteredPaginated']),
  },
  methods: {
    ...mapActions(['setTableDataFiltered']),

    /**
     * change to next page on pagination
     */
    nextPage() {
      if (this.currentPage < this.tableDataFilteredPaginated.length - 1) {
        this.currentPage++;
      } else {
        return null;
      }
    },

    /**
     * change to previous page on pagination
     */
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      } else {
        return null;
      }
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

  cursor: pointer;
}

.table-pagination__button {
  padding: 5px 10px;

  color: #fff;
  outline: none;

  border-radius: 8px;
  background-color: #2196f3;
  &:hover {
    background-color: #1976d2;
  }
}

.table-else__container {
  height: 25vh;
}

.table-else__text {
  animation: blink 2s infinite;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
