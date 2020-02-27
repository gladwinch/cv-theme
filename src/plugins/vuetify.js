// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#956BE3',
                secondary: '#E5E5E5',
                accent: '#B48FEE',
                anchor: '#B48FEE',
            
            },
            dark: {
                primary: '#38AF2C',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            }
        },
    },
    dark: true,
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
})

export default vuetify