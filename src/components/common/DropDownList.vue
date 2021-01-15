<template>
  <form action="">
    <label :for="name">Choose a car:</label>
    <select :name="name" :id="id">
      <option v-for="(value, index) in values" :key="index" value="value">
        {{ value }}
      </option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'Input',
  props: {
    id: String,
    values: String,
    name: String,
  },
};
</script>

<style></style>
