<template>
  <div>
    <router-link to="/api/courses">Course List</router-link>
    <p></p>
    <span> Name | Hours | Course Number | Hours | Level</span>
  <table> <courseDisplay v-for="course in courses" :key="course.id"  :course="course"/>

  </table>
  
  
  </div>
</template>

<script>
import courseServices from '@/services/courseServices.js'
import courseDisplay from '@/components/courseDisplay.vue'
export default {
  props: ['id'],
  components: {
    courseDisplay,
 
  },
  data() {
    return {
      course: {},
    }
  },
  created() {
      courseServices.getCourse(this.id)
      .then(response => {
        this.course = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
        
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  methods: {
    addForm(){
      this.addCourseDisplay = true;
    },
    updateCourse() {
      courseServices.updateCourse(this.id, this.course)
        .then(() => {
          this.$router.push({ name: 'view' })
        })
        .catch(error => {
         console.log(error)
        })
    },
     addCourse(course) {
      courseServices.addCourse(this.id, course)
        .then((response) => {
          course.id = response.data.courseid;
          this.items.push(course);
          this.addCourseDisplay = false;
        })
        .catch(error => {
         this.message = error.data.message
        })
    },
    cancel() {
      this.$router.push({ name: 'course' })
    },
    updateItem(course){
      courseServices.updateCourse(this.id, course.id, course)
      .then(() => {
          
        })
        .catch(error => {
         this.message = error.response.data.message
        })
    },
    deleteCourse(id){
    courseServices.deleteCourse(this.id, id)
      .then(() => {
        this.courses.forEach((course,i) => {
          if (course.id == id) {
            this.courses.splice(i, 1);
          }
        })
          
        })
        .catch(error => {
         this.message = error.response.data.message
        })
    },
    
}
}
</script>

<style></style> 