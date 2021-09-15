<template>
  <div>
    <h1>Course Edit</h1>
    <h2>Editing: {{course.Name}}</h2>


      Name:
      <input v-model="course.Name" type="text" id="id">
      <p></p>
      Department:
        <input v-model="course.Dept" type="text" id="id">
        <p></p>
        Hours:
        <input v-model="course.Hours" type="text" id="id">
        <p></p>
        Level:
        <input v-model="course.Level" type="text" id="id">
        <p></p>
        Course Number:
        <input v-model='course["Course Number"]' type="text" id="id">
        <p></p>
        Description:
        <textarea v-model="course.Description" type="text" style='height:80px; width:500px; white-space: pre-line;' id="id"></textarea>
        <p></p>
      <input type="submit" name="submit" v-on:click.prevent="updateCourse(course)" >
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
 
  
  
  </div>
</template>

<script>
import courseServices from '@/services/courseServices.js'

export default {
  props: ['id'],
  components: {

  },
  data() {
    return {
      course: {},
    }
  },
  created() {
      courseServices.getCourse(this.id)
      .then(response => {
        this.course = response.data[0];
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })

  },
  methods: {
    
    cancel() {
      this.$router.push({ name: 'view' })
    },
    updateCourse(course){
      courseServices.updateCourse(this.id, course)
      .then(() => {
        this.$router.push({name: 'view'});
        })
        .catch(error => {
        console.log('There was an error:', error.response)
        })
        
    },
    deleteCourse(id){
    courseServices.deleteCourse(this.id)
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

<style>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style> 