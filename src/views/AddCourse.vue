<template>
  <div>
    <H1>Add Course</H1>
    

    <form @submit.prevent="addCourse">
      Department:
      <input v-model="course.Dept" type="text" id="courseDept">  
      <br>
      Course Number:
      <input v-model="course['Course Number']" type="text" id="courseNumber">   
      <br>
      Level:
      <input v-model="course.Level" type="text" id="courseLevel">   
      <br>
      Hours:
      <input v-model="course.Hours" type="text" id="courseHours">
      <br>
      Course Name:
      <input v-model="course.Name" type="text" id="courseName">
      <br>
      Description:
      <input v-model="course.Description" type="text" id="courseDescription">
      <br>
      <button name="submit" v-on:click.prevent="addCourse()">Submit</button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>

    </form>
  </div>
</template>

<script>
import courseServices from '@/services/courseServices.js'
export default {
  data() {
    return {
      course: {}
    }
  },
  methods: {
    addCourse() {
     
        courseServices.addCourse(this.course)
        .then(() => {
          this.$router.push({ name: 'course' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'course' })
    },
  }
}
</script>

<style scoped>
</style>