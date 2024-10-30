import { createRouter, createWebHashHistory } from "vue-router"  


const router = createRouter({
  history: createWebHashHistory(),  

  routes: [
    {
      path: "/", 
      redirect: "/tools"
    }, 
    // tools
    {
      name: "toolsComponent",
      path: "/tools", 
      component: () => import("@/views/content/tools/leftContent/toolsContent/index.vue"),
      children: [
      ]
    }, 
    // code
    {
      name: "codeComponent",
      path: "/code", 
      component: () => import("@/views/content/tools/leftContent/codeContent/index.vue")
    }, 
    // view
    {
      name: "viewsComponent", 
      path: "/view", 
      component: () => import("@/views/content/tools/leftContent/viewsContent/index.vue")
    }
  ]
})

export default router