<template>
<div>
  <v-container class="hidden-sm-and-down">
    <v-tabs 
      background-color="transparent" 
      center-active 
      hide-slider 
      height="38"
      class="ct-transform" >
      <v-tab 
        v-for="tab in tabs" 
        :key="tab.id"
        v-on:click="activeTab = tab.title"
        :class="[activeTab == tab.title ? 
        'ct-active': '',
        'nav-tab mr-2 px-6 white--text font-weight-regular']"
      >{{ tab.title }}</v-tab>
    </v-tabs>
  </v-container>
 
  <v-tabs 
    class="hidden-md-and-up ct-transform" 
    background-color="transparent" 
    center-active 
    hide-slider height="38">
    <v-tab 
      v-for="tab in tabs" 
      :key="tab.id"
      v-on:click="activeTab = tab.title"
      :class="[activeTab == tab.title ? 
          'ct-active': 
          '', 'nav-tab  white--text font-weight-regular ct-sm']"
    >{{ tab.title }}</v-tab>
  </v-tabs>

  <transition v-enter>

  <component v-bind:is="activeTab"></component>
  </transition>
</div>
</template>

<script>


  import About from './tabs/About'
  import Portfolio from './tabs/Portfolio'
  import Work from './tabs/Work'
  import Education from './tabs/Education'
  import Skills from './tabs/Skills'

  export default {
    name: 'MainTab',

    data: () => ({
      activeTab: "About",
      tabs: [
          { id: 1, title: 'About' },
          { id: 2, title: 'Portfolio' },
          { id: 3, title: 'Work' },
          { id: 4, title: 'Education' },
          { id: 5, title: 'Skills' }
      ]
    }),

    components: {
       About,
       Portfolio,
       Work,
       Education,
       Skills
    }
  }

</script>

<style scoped>

.nav-tab {
  border-radius: 2rem;
}

.ct-active {
  background-color: #956BE3;
  color: white;
  opacity: 1 !important;
 
}

.nav-tab {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1rem;
  text-transform: capitalize;
  opacity: 0.8;
  transition: 0.2s;
}



.ct-transform {
  transform: translateX(20px)
}

@media only screen and (max-width: 630px) {
  .ct-transform {
  transform: translateX(-20px)
}
}

</style>