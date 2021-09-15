
<template>
  <div>
    <h1>Course Home</h1>
    <button @click="$router.push('/api/courses/courseadd')">Add Course</button>
    <button @click="getNextPage(--index)">Prev</button>
    <button @click="getNextPage(++index)">Next</button>


         <table class="center">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Course Number</th>
                    <th>View Course</th>
                     <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.id" :course="course">
                    <td>{{course.Name}}</td>
                    <td>{{course.Hours}}</td>
                    <td>{{course["Course Number"]}}</td>

                    <router-link :to="{name: 'view', params: {id: course.id}}"><span>View Course</span></router-link>
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
            courses: {},
            index: 0
        };
    },
  created() {
      courseServices.getCourses(0) 
      .then(response => {
        this.courses = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    getNextPage(num){
      if (num < 0) //dont allow index more less than 0
      {
        num = 0;
        this.index = 0;
      }
      console.log("Number: " + num);
      console.log("Index: " + this.index);
      courseServices.getCourses(num * 50)
      .then(response => {
        this.courses = response.data
        })
        .catch(error => {
        console.log('There was an error:', error.response)
        })
        
    },

  }
}
</script>



<style>
table {
  border-collapse: collapse;
  width: 50%;

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
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
