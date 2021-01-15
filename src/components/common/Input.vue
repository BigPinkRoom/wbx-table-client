<template>
  <form action="">
    <label :for="name">Choose a car:</label>
    <select :name="name" :id="id">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
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
