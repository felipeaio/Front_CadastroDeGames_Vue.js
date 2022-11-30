import { createWebHistory, createRouter } from "vue-router"

const routes = [
    { path : '/', name: "home", 
        component : () => import("@/views/Home.vue") 
    },
    { path : '/games', name: "pro",
      component : () => import("@/views/games/Index.vue") 
    },
    { path : '/games/create', name : "pro-create", 
      component : () => import("@/views/games/Create.vue") 
    },
    {
      path: '/games/edit/:id', name: "pro-edit",
      component: () => import("@/views/games/Edit.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;