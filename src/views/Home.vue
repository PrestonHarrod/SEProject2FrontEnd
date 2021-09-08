<template>
  <div>
    <H1>Courses Home</H1>
    <CourseListDisplay v-for="course in courses" :key="course.id" :list="course"/> 
  </div>
</template>

<script>
import CourseListDisplay from '@/components/CourseListDisplay.vue'
import courseServices from '@/services/courseServices.js'


export default {
  components: {
    CourseListDisplay,

  },
  data() {
    return {
      courses: [],


    }
  },
  created() {
      courseServices.getCourses() 
      .then(response => {
        this.courses = response.data.courses
      })
      .catch(error => {
        this.message = error.data.message
      })
  }
}
</script>

<style></style>
