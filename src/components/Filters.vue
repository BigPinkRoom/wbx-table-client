<template>
  <v-container class="col-md-8" blue lighten-5>
    <v-row class="d-flex flex-column flex-sm-row align-center">
      <!-- filters title -->
      <v-col class="col-auto d-flex text-uppercase">
        <h2 class="blue--text">Filter:</h2>
      </v-col>

      <!-- filter of column -->
      <v-col class="col-auto d-flex align-center ">
        <app-drop-down-list
          id="columns"
          :values="['Title', 'Quantity', 'Distance']"
          name="columns"
          @changeSelect="changeColumn"
        />
      </v-col>

      <v-col class="col-auto d-flex align-center ">
        +
      </v-col>

      <!-- filter of contain -->
      <v-col class="col-auto d-flex align-center ">
        <app-drop-down-list
          id="conditions"
          :values="['Equal', 'Contain', 'More', 'Less']"
          name="conditions"
          @changeSelect="changeCondition"
        />
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        +
      </v-col>

      <!-- input of filter -->
      <v-col class="d-flex align-center">
        <app-input
          id="filterInput"
          name="filterInput"
          @inputChange="inputChangeHandler"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
    };
  },
  computed: {
    ...mapGetters(['tableData', 'tableDataFiltered']),
  },
  methods: {
    ...mapActions(['setTableDataFiltered']),

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
      this.changeInputValue(value);

      this.setTableDataFiltered(this.filterTable());
    },

    /**
     * change tableData with selected filters
     * @return {Array}
     */
    filterTable() {
      if (this.inputValue == '') {
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
