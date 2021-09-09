<template>
  <div>
    <H1>Course Edit</H1>
    <h2>Editing {{course.Name}}</h2>


    <form @submit.prevent="updateCourse">
      Name:
      <input v-model="course.Name" type="text" id="id">
      <input type="submit" name="submit" v-on:click.prevent="updateCourse()" >
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
    <button name="add" v-on:click.prevent="addForm()">Add Course</button>
 <center>
  <table>
    <ListItemDisplay v-for="course in courses" :key="course.id"  :course="course" @deleteCourse="deleteCourse(course.id)" @updateCourse="updateCourse(course)"/>

  </table>
  </center>
  
  
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
      courses:{},
    }
  },
  created() {
      courseServices.getList(this.id)
      .then(response => {
        this.course = response.data.course
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
         courseServices.getCourses(this.id)
      .then(response => {
        this.items = response.data.courses;
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
          this.$router.push({ name: 'course' })
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