<template>
  <div>
    <h1>Course Home</h1>
                        <td><button @click="$router.push('/api/courses/courseadd')">Add Course</button></td>

         <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Course Number</th>
                    <th>Course Details</th>
                     <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.id" :course="course">
                    <td>{{course.Name}}</td>
                    <td>{{course.Hours}}</td>
                    <td>{{course["Course Number"]}}</td>
                    <td><button @click="$router.push('/api/courses/' + course.id)">View Course</button></td>

                </tr>
            </tbody>
        </table>
 

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



<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even){background-color: #f2f2f2}
th {
  background-color: #811429
;
  color: white;
}
</style>