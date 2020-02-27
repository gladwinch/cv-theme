<template>
<v-container >
  <v-card
    class="pa-6 ct-card hidden-sm-and-down"
    flat
  >
    <v-card-text>
      <div class="ct-heading text-center primary--text mb-6">
        About
      </div>
      <div color="ct-card-body">
        {{ description }}
      </div>
    </v-card-text>
  </v-card>

  <div class="hidden-md-and-up pa-4">
  <div class="primary--text title">
    About
  </div>
  <p class="ct-mobile-body font-weight-regular">
    {{ description }}
  </p>
  </div>
</v-container>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            data: 'About Section',
            description: "I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop...I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop...I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop...  I'm Conor, I'm a product manager from London. I'm currently looking for new permanent job opportunities within London area that will allow my career to develop..."
        }
    }
}
</script>

<style scoped>
  .ct-heading {
      font-size: 1.8rem;
  }

  .ct-card {
    border-radius: 2rem !important;
  }

  .ct-card-body {
      color: rgb(148, 147, 147);
      font-size: 1.5rem;
      line-height: 2rem;
  }

  .ct-mobile-body {
    color: rgb(73, 73, 73);
    line-height: 1.5rem;
    font-size: 0.9rem;
  }
</style>