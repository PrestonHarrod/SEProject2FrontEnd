<template>
  <div>
      <tr> 
          <th>{{course.Name}}</th>
          <th>{{course.Hours}}</th>
          <th>{{course["Course Number"]}}</th>
        <th> <router-link :to="{ name: 'edit', params: { id: course.id } }">
      <span>edit</span>
    </router-link></th>
    <th><router-link :to="{ name: 'delete', params: { id: course.id } }">
      <span>delete</span> 
      </router-link> </th>
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