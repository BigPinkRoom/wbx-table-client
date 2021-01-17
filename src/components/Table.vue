<template>
  <div>
    <v-container
      class="d-flex flex-column align-center"
      v-if="tableDataFiltered.length"
    >
      <!-- table title -->
      <v-row>
        <v-col>
          <h1>
            The Table
          </h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <table class="table__main text-caption text-sm-body-1">
            <!-- table headers -->
            <tr class="table__tr">
              <th class="table__th">Date</th>
              <th
                class="table__th"
                @click="
                  setTableDataFiltered(
                    sort.byText(tableDataFiltered, 'sortTitleUseMark')
                  )
                "
              >
                Title
                <span class="table__span">{{
                  sort.sortTitleUseMark ? '▲' : '▼'
                }}</span>
              </th>
              <th
                class="table__th"
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
                Quantity {{ sort.sortQuantityUseMark ? '▲' : '▼' }}
              </th>
              <th
                class="table__th"
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
                Distance {{ sort.sortDistanceUseMark ? '▲' : '▼' }}
              </th>
            </tr>

            <!-- table body -->
            <tr
              v-for="(item, index) in tableDataFilteredPaginated[currentPage]"
              :key="index"
              class="table__tr"
            >
              <td class="table__td">
                {{ new Date(item.date).toDateString() }}
              </td>
              <td class="table__td">{{ item.title }}</td>
              <td class="table__td">{{ item.quantity }}</td>
              <td class="table__td">{{ item.distance }}</td>
            </tr>
          </table>
        </v-col>
      </v-row>

      <!-- table pagination -->
      <v-row
        class="table-pagination col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 mt-1 mt-sm-3 px-0 px-sm-3"
      >
        <!-- pagination previous page-->
        <v-col class="col-3 col-sm-4 px-0 px-sm-3">
          <button class="table-pagination__button" @click="previousPage()">
            Prev
          </button>
        </v-col>

        <!-- pagination current page -->
        <v-col
          class="col-6 col-sm-4 table-pagination__text d-flex align-center justify-center px-0 px-sm-3"
        >
          <p class="ma-0">
            Page: {{ currentPage + 1 }}/{{ tableDataFilteredPaginated.length }}
          </p>
        </v-col>

        <!-- pagination next page -->
        <v-col class="col-3 col-sm-4 px-0 px-sm-3">
          <button class="table-pagination__button" @click="nextPage()">
            Next
          </button>
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

.table__td {
  padding: 8px;

  border: 1px solid #ddd;
}

.table__tr {
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
}

.table__main tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table__main tr:hover {
  background-color: #ddd;
}

.table__th {
  padding: 12px 8px 12px 8px;

  text-align: left;
  color: white;
  white-space: nowrap;

  background-color: #2196f3;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #1976d2;
  }
}

.table__span {
  float: right;
}

.table-pagination__button {
  width: 100%;
  padding: 5px 10px;

  color: #fff;
  outline: none;

  border-radius: 5px;
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
