
<template>
  <div>
      <v-container>
        <v-row>
            <v-col>
                <H1>Course List</H1>
                <v-data-table
                    :headers="headers"
                    :items="courses"
                    :items-per-page="25"
                    class="elevation - 1"
                    mobile-breakpoint="0"
                    @click:row="selectRow"
                >
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
 
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
            dept: '',
            courses: [],
            headers: [
                {
                    text: 'Course Number',
                    align: 'left',
                    sortable: true,
                    value: 'number',
                    width: "150"
                },
                {
                    text: 'Course Name',
                    value: 'name',
                    align: 'left',
                    sortable: false,
                },
            ],
        };
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
