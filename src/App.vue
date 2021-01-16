<template>
  <v-app>
    <app-header class="mb-5"></app-header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from './components/common/TheHeader';
import Footer from './components/common/TheFooter';

export default {
  name: 'App',
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
  data: () => ({
    //
  }),
};
</script>
