<template>
  <form action="">
    <label :for="name">Choose a car:</label>
    <select :name="name" :id="id">
      <option v-for="value in values" value="volvo">Volvo</option>
    </select>
    <br /><br />
    <input type="submit" value="Submit" />
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
