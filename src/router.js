import {createRouter, createWebHistory} from 'vue-router'
import CourseList from './views/Home.vue'
import CourseAdd from './views/AddCourse.vue'
  const routes = [
    {
      path: '/api/courses',
      name: 'list',
      component: CourseList
    },
    {
      path: '/api/courses/courseadd',
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


















