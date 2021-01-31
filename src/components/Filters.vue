<template>
  <v-container class="col-sm-12 col-md-10 col-lg-8 col-xl-6" blue lighten-5>
    <v-row class="d-flex flex-column flex-sm-row align-center">
      <!-- filters title -->
      <v-col class="col-auto d-flex text-uppercase pb-1 pb-sm-3">
        <h2 ref="filters-title" class="blue--text">Filter:</h2>
      </v-col>

      <!-- filter of column -->
      <v-col class="d-flex align-center py-1 py-sm-3">
        <app-drop-down-list
          id="columns"
          :values="columnsData.values"
          name="columns"
          :textPlaceholder="columnsData.textPlaceholder"
          @changeSelect="changeColumn"
        />
      </v-col>

      <v-col class="col-auto d-flex align-center py-0 py-sm-3">
        +
      </v-col>

      <!-- filter of contain -->
      <v-col class="d-flex align-center py-1 py-sm-3">
        <app-drop-down-list
          id="conditions"
          :values="conditionsData.values"
          name="conditions"
          :textPlaceholder="conditionsData.textPlaceholder"
          @changeSelect="changeCondition"
        />
      </v-col>
      <v-col class="col-auto d-flex align-center py-0 py-sm-3">
        +
      </v-col>

      <!-- input of filter -->
      <v-col class="d-flex align-center pt-1 pt-sm-3">
        <app-input
          id="filterInput"
          name="filterInput"
          :textPlaceholder="inputData.textPlaceholder"
          @changeInput="inputChangeHandler"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import DropDownList from './common/DropDownList';
import Input from './common/Input';
import { filter } from '../js/helpers/filter';

export default {
  name: 'Filters',
  components: {
    AppDropDownList: DropDownList,
    AppInput: Input,
  },
  data() {
    return {
      inputValue: '',
      selectColumn: '',
      selectCondition: '',
      inputEmitTimer: null,
      columnsData: {
        values: ['Title', 'Quantity', 'Distance'],
        textPlaceholder: 'Column',
      },
      conditionsData: {
        values: ['Equal', 'Contain', 'More', 'Less'],
        textPlaceholder: 'Conditions',
      },
      inputData: {
        textPlaceholder: 'Search...',
      },
    };
  },
  computed: {
    ...mapGetters([
      'tableData',
      'tableDataFiltered',
      'tableDataFilteredPaginated',
      'paginationCurrentPage',
    ]),
  },
  methods: {
    ...mapActions(['setTableDataFiltered']),
    ...mapMutations(['SET_PAGINATION_CURRENT_PAGE']),

    /**
     * change column value
     * @param {String} value - name of column
     */
    changeColumn(value) {
      this.selectColumn = value;
    },

    /**
     * change condition value
     * @param {String} value - name of condition
     */
    changeCondition(value) {
      this.selectCondition = value;
    },

    /**
     * change input value
     * @param {String} value - value of input
     */
    changeInputValue(value) {
      this.inputValue = value;
    },

    /**
     * function - aggregator, for change event of input value
     * @param {String} value - value of input
     */
    inputChangeHandler(value) {
      clearTimeout(this.inputEmitTimer);

      const paginatedLength = this.tableDataFilteredPaginated.length + 1;

      this.inputEmitTimer = setTimeout(() => {
        this.changeInputValue(value);

        this.setTableDataFiltered(this.filterTable());

        if (paginatedLength > this.paginationCurrentPage) {
          this.SET_PAGINATION_CURRENT_PAGE(0);
        }
      }, 400);
    },

    /**
     * change tableData with selected filters
     * @return {Array}
     */
    filterTable() {
      const checkFields = [
        this.inputValue,
        this.selectColumn,
        this.selectCondition,
      ].every((elem) => elem);

      if (!checkFields) {
        return this.tableData;
      }

      return filter(
        this.tableData,
        this.selectColumn,
        this.selectCondition,
        this.inputValue
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
