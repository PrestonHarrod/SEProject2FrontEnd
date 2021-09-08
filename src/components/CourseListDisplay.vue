<template>
  <div>
    <span> {{ course.name}} </span>
    <span> {{course.hours}} </span>
    <span> {{course["Course Number"]}} </span>
    <router-link :to="{ name: 'edit', params: { id: list.id } }">
      <span>edit</span>
    </router-link>
    <span>|</span>
    <router-link :to="{ name: 'delete', params: { id: list.id } }">
      <span>delete</span>
    </router-link>
    <span>)</span>
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