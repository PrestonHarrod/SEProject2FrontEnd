<template>
  <div>
<td> <router-link to="/api/courses">Go Back</router-link></td>
<p></p>
<td><router-link :to="{name: 'edit', params: {id: course.id}}"><span>Edit Course</span></router-link></td>
<p></p>
   


 <table class="center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Course Number</th>
                    <th>Level</th>
                    <th>Dept</th>
                    <th>Course Description</th>
                </tr>
            </thead>
            <tbody>
                    <td>{{course.Name}}</td>
                    <td>{{course.Hours}}</td>
                    <td>{{course["Course Number"]}}</td>
                    <td>{{course.Level}}</td>
                    <td>{{course.Dept}}</td>
                    <td>{{course.Description}}</td>
            </tbody>
        </table>

  </div>
</template>

<script>
import courseServices from '@/services/courseServices.js'
export default {
  props: ['id'],
  components: {},
  data() {
    return {
      course: {}
      
    }
  },
  created() {
      courseServices.getCourse(this.id)
      .then(response => {
        this.course = response.data[0],
        console.log(this.course)
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
          this.$router.push({ name: 'view'})
        .then(() => {
        })
        .catch(error => {
         console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
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

<style>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style> 