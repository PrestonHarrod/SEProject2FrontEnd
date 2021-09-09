<template>
  <div>
 
    <p>"hello"</p>
    <span> Name | Hours | Course Number </span>
    <table> <CourseListDisplay v-for="course in courses" :key="course.id" :course="course"/> </table>
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
      message : ""
       
      


    }
  },
  created() {
      courseServices.getCourses() 
      .then(response => {
        this.courses = response.data
        console.log("here")
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style></style>
