<template>
  <v-container>
    <v-row>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        md="6"
        sm="6"
      >
        <v-card flat class="pa-6 rounde_me">
            <div class="title primary--text font-weight-bold">Google</div>

            <div class="d-flex justify-space-between">
                <p class="ct-body-text font-weight-thin grey--text">
                    User interface designer
                </p>

                <p class="ct-body-text font-weight-thin grey--text">
                    Dec 19 - Present 
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