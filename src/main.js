import {createApp} from "vue"
import {createRouter, createWebHashHistory} from "vue-router"

import "./style.css"
import App from "./App.vue"
import Home from "./pages/Home.vue"

const routes = [
  {name: "root", path: "/", component: Home},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount("#app")
