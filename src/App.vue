<template>
  <v-app>

    <v-content class="secondary">
      <Header />
      <MainTab />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import MainTab from './components/MainTab'

export default {
  name: 'App',

  components: {
    Header,
    MainTab
  },

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  font-family: 'Montserrat';
  line-height: 17px;
}

.ct-background {
 background-color: 'red' !important;
}

</style>
