// <template>
//   <v-container>
//     <v-row>
//       <v-col class="pagination__left">
//         <a href="#" @click="changePage(prevPage)">Prev</a>
//       </v-col>
//       <v-col class="pagination__right">
//         <a href="#" @click="changePage(nextPage)>Next</a>
//       </v-col>
//     </v-row>
//   </v-container>
// </template>

// <script>
// export default {
//   name: 'Pagination',
//   props: {
//     current: {
//       type: Number,
//       default: 1,
//     },
//   },
//   computed: {
//     prevPage() {
//       return this.current - 1;
//     },
//     nextPage() {
//       return this.current + 1;
//     },
//   },

//   methods: {
//     changePage: function(page) {
//       this.$emit('page-changed', page);
//     },
//   },
// };
// </script>

// <style></style>
