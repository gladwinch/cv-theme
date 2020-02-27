<template>
  <v-container>
    <v-row>
      <v-col
        v-for="image in images"
        :key="image.id"
        cols="12"
        md="4"
        sm="6"
      >
        <v-img :src="getImgUrl(image.id)" 
            max-height="350" max-width="350" 
            min-height="270" min-width="270" 
            aspect-ratio="1" class="ct-image mx-auto"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>

export default {
    name: 'Portfolio',
    data() {
        return {
            images: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 }
            ]
            
        }
    },

    methods: {
        getImgUrl(id) {
           let image = require.context('../../assets/portfolio', false, /\.png$/)
           return image('./' + id + ".png")
        }
    }
}
</script>

<style scoped>
 .ct-image {
     border-radius: 20px !important;
 }
</style>