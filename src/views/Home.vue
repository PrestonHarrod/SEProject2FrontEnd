<template>
  <div>
    <h1>Course Home</h1>
    <td>
      <button @click="$router.push('/api/courses/courseadd')">
        Add Course
      </button>
    </td>

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
          <router-link :to="{name: 'view', params: {id: course.id}}"
            ><span>View Course</span></router-link
          >
          <button class="delete-btn" @click="doDelete(courses, course.id)">
            Delete
          </button>
          <confirm-dialog ref="confirmDialog"></confirm-dialog>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import CourseListDisplay from '@/components/CourseListDisplay.vue'
import courseServices from '@/services/courseServices.js'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
export default {
    components: {ConfirmDialog},
    data() {
        return {
            courses: {},
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
  },
  methods: {
    async doDelete(courses, id) {
            const ok = await this.$refs.confirmDialog.show({
                title: 'Delete Course',
                message: 'Are you sure you want to delete this course? It cannot be undone.',
                okButton: 'Delete Forever',
            })
            // If you throw an error, the method will terminate here unless you surround it wil try/catch
            if (ok) {
                courseServices.deleteCourse(id)
      .then(() => {
        this.courses.forEach((course,i) => {
          if (course.id == id) {
            this.courses.splice(i, 1);
          }
        })

        })
            } else {
                alert('You chose not to delete this course. Doing nothing now.')
            }
          }
      },
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background-color: #811429;
  color: white;
}
.delete-btn {
  margin-left: 100px;
  padding: 0.5em 1em;
  background-color: #eccfc9;
  color: #c5391a;
  border: 2px solid #ea3f1b;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
