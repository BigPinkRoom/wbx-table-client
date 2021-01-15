<template>
  <v-container class="col-6" grey lighten-3>
    <v-row>
      <v-col class="col-auto text-uppercase">
        Filter:
      </v-col>
      <v-col class="col-auto">
        <app-drop-down-list
          :id="columns"
          :name="columns"
          :values="['Title', 'Quantity', 'Distance']"
        />
      </v-col>
      <v-col class="col-auto">
        <app-drop-down-list
          :id="conditions"
          :name="conditions"
          :values="['Equal', 'Contain', 'More than', 'Less than']"
        />
      </v-col>
      <v-col class="col-auto">
        <app-input />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DropDownList from './common/DropDownList';
import Input from './common/Input';

export default {
  name: 'Filters',
  components: {
    AppDropDownList: DropDownList,
    AppInput: Input,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
