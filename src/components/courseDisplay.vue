<template>
  <tr>
    
      <th>{{course.id}}</th>
      <th>{{course.Hours}}</th>
      <th>{{course["Course Number"]}}</th>
      <th>{{course.Level}}</th>
      <th>{{course.id}}</th>
        
    <!--
      <td>
      <span v-if="!editCourse">{{course.id}}</span>
      <input v-model="course.id" type="text" v-if="editCourse" />
    </td>
    <td>
      <span v-if="!editCourse">{{course["Course Number"]}}</span>
      <input v-model='course["Course Number"]' type="text" v-if="editCourse" />
    </td>
    <td>
      <span v-if="!editCourse">{{course.Name}}</span>
      <input v-model="course.Name" type="text" v-if="editCourse" />
    </td>
    <td>
      <span v-if="!editCourse">{{course.Level}}</span>
      <input v-model="course.Level" type="text" v-if="editCourse" />
    </td>
    <td>
      <span v-if="!editCourse">{{course.Hours}}</span>
      <input v-model="course.Hours" type="text" v-if="editCourse" />
    </td>
    <td>
      <span v-if="!editItem">{{course.Description}}</span>
      <input v-model="course.Description" type="text" v-if="editCourse" />
    </td>
    <td>
      <span v-if="!editCourse">{{course.Dept}}</span>
      <input v-model="course.Dept" type="text" v-if="editCourse" />
    </td>
    <td>
      <button v-if="!editCourse" @click="editForm">edit</button>
      <button v-if="editCourse" @click="updateCourse">save</button>
      <button @click="deleteCourse()">delete</button>
    </td>
  -->
  </tr>
  
</template>

<script>
export default {
  props: {
    course: Object
  }
  
}
</script>

<style></style>