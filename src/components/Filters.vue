<template>
  <v-container class="col-8" blue lighten-5>
    <v-row>
      <v-col class="d-flex col-auto text-uppercase">
        <h2 class="blue--text">Filter:</h2>
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        <app-drop-down-list
          id="columns"
          name="columns"
          :values="['Title', 'Quantity', 'Distance']"
          @changeSelect="changeColumn"
        />
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        +
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        <app-drop-down-list
          id="conditions"
          name="conditions"
          :values="['Equal', 'Contain', 'More', 'Less']"
          @changeSelect="changeCondition"
        />
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        +
      </v-col>
      <v-col class="d-flex align-center">
        <app-input
          @inputChange="inputChangeHandler"
          name="filterInput"
          id="filterInput"
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

    changeColumn(value) {
      this.selectColumn = value;
    },
    changeCondition(value) {
      this.selectCondition = value;
    },

    changeInputValue(value) {
      this.inputValue = value;
    },

    inputChangeHandler(value) {
      this.changeInputValue(value);

      this.setTableDataFiltered(this.filterTable());
    },

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

<style></style>
