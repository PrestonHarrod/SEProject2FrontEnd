import {createRouter, createWebHistory} from 'vue-router'
import CourseList from './views/Home.vue'
import CourseView from './views/courseView.vue'
import CourseAdd from './views/AddCourse.vue'

  const routes = [
    {
      path: '/api/courses',
      name: 'list',
      component: CourseList
    },
    {
      path: '/api/courses/:id',
      name: 'view',
      component: CourseView,
      props: true
    },
    {
        path: '/api/courses/courseAdd',
        name: 'add',
        component: CourseAdd,
        props: true
      }
    
  ];
  const router = createRouter({
      history: createWebHistory(),
      routes,
  });
export default router; 