<template>
  <v-container>
    <v-row >
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        sm="6"
        md="6"
      >
        
        <v-card flat class="pa-6 rounde_me">
            <div class="title primary--text font-weight-bold">California Institute of Technology</div>
            <div class="d-flex justify-space-between">
                <p class="ct-body-text font-weight-thin dark--text">
                    M.Sc in HCI,  Dec 19 - Present
                </p>
                <p class="ct-body-text font-weight-thin dark--text">
                    University
                </p>
            </div>
            <p class="ct-body-text text-content">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes.</p>
        </v-card>



      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
    name: 'Work',
    data() {
        return {
            data: 'Work Section'
        }
    }
}
</script>

<style scoped>
  .ct-body-text {
      font-size: 0.9rem;
  }

  .ct-card {
      min-width: 22rem;
  }

  .rounde_me {
      border-radius: 1rem !important;
  }

  .text-content {
      font-size: 0.8rem;
      color: '#D9D8D8';
      font-weight: 300 !important;
  }
</style>