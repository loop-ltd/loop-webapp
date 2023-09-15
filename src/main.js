import {createApp} from "vue"
import {createRouter, createWebHashHistory} from "vue-router"

import "./style.css"
import App from "./App.vue"
import Home from "./pages/Home.vue"
import Onboarding from "./pages/Onboarding.vue"
import Cards from "./pages/Cards.vue"
import Supporters from "./pages/Supporters.vue"

const routes = [
  {name: "root", path: "/", component: Home},
  {name: "onboarding", path: "/onboarding", component: Onboarding},
  {name: "cards", path: "/cards", component: Cards},
  {name: "supporters", path: "/supporters", component: Supporters},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount("#app")
