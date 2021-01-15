<template>
  <v-app>
    <v-main>
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </v-main>
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
