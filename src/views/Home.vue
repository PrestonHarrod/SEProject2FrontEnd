
<template>
  <div>
         <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Course Number</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.id" :course="course">
                    <td>{{course.Name}}</td>
                    <td>{{course.Hours}}</td>
                    <td>{{course["Course Number"]}}</td>
                    <td> <router-link :to="{ name: 'edit', params: { id: course.id } }"><span>Edit</span></router-link> </td>
                    <td> <router-link :to="{ name: 'delete', params: { id: course.id } }"><span>Delete</span></router-link> </td>
                </tr>
            </tbody>
        </table>
 
    <!-- <p>"hello"</p>
    <span> Name | Hours | Course Number </span>
    <table> <CourseListDisplay v-for="course in courses" :key="course.id" :course="course"/> </table>
  </div> -->
  </div>
</template>


<script>
//import CourseListDisplay from '@/components/CourseListDisplay.vue'
import courseServices from '@/services/courseServices.js'
export default {
    components: {},
    data() {
        return {
            courses: [],
        };
    },
  created() {
      courseServices.getCourses() 
      .then(response => {
        this.courses = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>



<style></style>
