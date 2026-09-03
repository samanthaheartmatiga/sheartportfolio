import { createRouter, createWebHistory } from 'vue-router'

// Import main views/tabs based on your project structure
import HomeTab from '../components/Home/HomeTab.vue'
import AboutTab from '../components/About/AboutTab.vue'
import ContactTab from '../components/Contact/ContactTab.vue'
import WorksTab from '../components/Works/WorksTab.vue'
import ProjectDetailsTemplate from '../components/Works/MyWorks/ProjectDetailsTemplate.vue'

const routes = [
  { 
    path: '/', 
    redirect: '/home' 
  },
  { 
    path: '/home', 
    name: 'Home', 
    component: HomeTab 
  },
  { 
    path: '/about', 
    name: 'About', 
    component: AboutTab 
  },
  { 
    path: '/works', 
    name: 'Works', 
    component: WorksTab 
  },
  { 
    path: '/works/:id', 
    name: 'ProjectDetails', 
    component: ProjectDetailsTemplate,
    props: route => ({ projectId: route.params.id })
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: ContactTab 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'instant' }
  }
})

export default router