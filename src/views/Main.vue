<template>
  <v-container>
    <v-row>
      <v-col>
        <app-filter></app-filter>
        <app-table></app-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Filter from '../components/Filter';
import Table from '../components/Table';

export default {
  name: 'Main',
  components: {
    AppFilter: Filter,
    AppTable: Table,
  },
};
</script>
