<template>
  <div>
      <tr> 
          <th>{{course.Name}}</th>
          <th>{{course.Hours}}</th>
          <th>{{course["Course Number"]}}</th>
          <button @click="$router.push('/api/courses/' + course.id)">View Course</button>
       
    </tr>
    
  </div>
</template>

<script>
export default {
  props: {
    course: Object
  }
  
}
</script>

<style></style>