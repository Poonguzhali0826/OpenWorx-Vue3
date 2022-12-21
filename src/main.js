import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
const app = createApp(App)

app.use(router)
app.use(bootstrap)
library.add(fas);
library.add(faFacebook)
library.add(faTwitter)
library.add(faLinkedinIn)
library.add(faInstagram)
app.component('fa', FontAwesomeIcon)
// app.use(bodyParser.urlencoded({ extended: true }));
app.mount('#app')
