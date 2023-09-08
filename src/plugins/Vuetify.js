import Vue from 'vue'

import Vuetify, {
  VRow,
  VCol,
  VChip,
  VTextarea,
  VTextField,
  VTooltip,
  VCheckbox,
  VRadio,
  VRadioGroup,
  VSelect,
  VCombobox,
  VAutocomplete,
  VLabel,
  VSwitch
} from 'vuetify/lib'

import { Ripple, Intersect, Touch, Resize, ClickOutside } from 'vuetify/lib/directives'

// https://wotamann.gitbook.io/vuetify-form-base/quickstart-1/installation
Vue.use(Vuetify, {
  components: {
    VRow,
    VTooltip,
    VCol,
    VChip,
    VTextarea,
    VTextField,
    VCheckbox,
    VRadioGroup,
    VRadio,
    VSelect,
    VCombobox,
    VAutocomplete,
    VLabel,
    VSwitch
  },
  directives: {
    Ripple,
    Intersect,
    Touch,
    Resize,
    ClickOutside
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    disabled: true,
    options: {
      cspNonce: 'qUeRkyPiE4u',
      customProperties: true,
      variations: 2
    },
    themes: {

      light: {
        background: '#e3e7ea',
        nav: '#1f2638',
        system: '#c471e5',
        anchor: '#2896E6',
        primary: '#3f51b5',
        secondary: '#f7f7f9',
        chip: '#ececf3',
        accent: '#495dd1',
        error: '#E64D4D',
        info: '#2896E6',
        success: '#64B46A',
        warning: '#f69a0f',
        white: '#FFFFFF',
        grey: '#292b2b',
        // NIST
        identify: '#45A8DD',
        protect: '#855196',
        detect: '#F99F14',
        respond: '#ED3643',
        recover: '#36B649'
      },

      dark: {
        background: '#272C41',
        nav: '#1f2638',
        system: '#c471e5',
        surface: '#FFBB11',
        anchor: '#2896E6',
        primary: '#3f51b5',
        secondary: '#1f2638',
        chip: '#23273A',
        accent: '#495dd1',
        error: '#E64D4D',
        info: '#2896E6',
        success: '#64B46A',
        warning: '#f69a0f',
        white: '#f5f6f8',
        grey: '#292b2b',
        // NIST
        identify: '#45A8DD',
        protect: '#855196',
        detect: '#F99F14',
        respond: '#ED3643',
        recover: '#36B649'
      }
    }

  }
})
