<template>
  <form action="" class="drop-down-list_form">
    <select :name="name" :id="id" class="drop-down-list__select">
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

<style lang="scss" scoped>
.drop-down-list__select {
  appearance: button;
  -webkit-appearance: button;
}
</style>
