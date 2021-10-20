import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    // disable: true,
    dark: false,
    themes: {
      light: {
        primary: '#1672cd',
        accent: '#1672cd',
        secondary: '#03a9f4',
        info: '#2196f3',
        warning: '#ff9800',
        error: '#f44336',
        danger: '#f44336',
        success: '#4c8750',

        // backgrounds
        black: '#000000',
        white: '#ffffff',
        warm: '#F2F0EB',
        cool: '#F9F9F9'
      },
      dark: {
        primary: '#1672cd',
        accent: '#1672cd',
        secondary: '#03a9f4',
        info: '#2196f3',
        warning: '#ff9800',
        error: '#f44336',
        danger: '#f44336',
        success: '#4c8750',

        // backgrounds
        black: '#000000',
        white: '#ffffff',
        warm: '#F2F0EB',
        cool: '#F9F9F9'
      }

    }
  }
};

export default new Vuetify(opts);
