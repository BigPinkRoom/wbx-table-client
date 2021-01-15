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
          values="['Title', 'Quantity', 'Distance']"
        />
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        +
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        <app-drop-down-list
          id="conditions"
          name="conditions"
          values="['Equal', 'Contain', 'More', 'Less']"
        />
      </v-col>
      <v-col class="col-auto d-flex align-center ">
        +
      </v-col>
      <v-col class="d-flex align-center">
        <app-input @changeInput="filter()" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import DropDownList from './common/DropDownList';
import Input from './common/Input';
// import { filter } from '../js/helpers/filter';

export default {
  name: 'Filters',
  components: {
    AppDropDownList: DropDownList,
    AppInput: Input,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    ...mapActions('setTableDataFiltered'),

    filter() {
      console.log('test');
    },
  },
};
</script>

<style></style>
