<template>
<v-container>
  <v-card
    max-width="500"
    class="mx-auto"
    flat
  >
    <v-list class="secondary">
      <v-list-item
        v-for="skill in skills"
        :key="skill.id"
        class="mb-5 pa-2 px-4 ct-box align-center"
      >
        <v-list-item-icon>
           <v-list-item-title v-text="skill.skill" class="ct-width primary--text"></v-list-item-title>
        </v-list-item-icon>

        <v-list-item-content>
          <v-progress-linear
            rounded
            height="7"
            v-model="skill.progress"
            color="primary accent-4 ct-progress"
          ></v-progress-linear>
        </v-list-item-content>

        <v-list-item-avatar class="primary--text">
          {{ skill.progress }}%
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-card>
</v-container>
</template>


<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                { id: 1, skill: 'Photoshop', progress: 54 },
                { id: 2, skill: 'Illustrator', progress: 84 },
                { id: 3, skill: 'Figma', progress: 90 },
                { id: 4, skill: 'Adobe XD', progress: 65 }
            ]
        }
    }
}
</script>

<style>

  .ct-width {
      min-width: 5.5rem;
  }

  

  .ct-box {
      border-radius: 0.4rem !important;
      background-color: white !important;
  }

  @media only screen and (max-width: 500px) {
    .ct-width {
      min-width: 5rem;
  }
}
</style>