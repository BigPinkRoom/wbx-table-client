<template>
  <v-container>
    <v-row>
      <v-col>
        Filter:
      </v-col>
      <v-col>
        <app-drop-down-list />
      </v-col>
      <v-col>
        <app-drop-down-list />
      </v-col>
      <v-col>
        <app-input />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DropDownList from './common/DropDownList';
import Input from './common/Input';

export default {
  name: 'Filter',
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
