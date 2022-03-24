import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/tailwind.css'

library.add(faList)
library.add(faGrip)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
