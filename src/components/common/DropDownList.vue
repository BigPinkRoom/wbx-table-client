<template>
  <form action="" class="drop-down-list_form">
    <select :name="name" :id="id" class="drop-down-list__select">
      <option v-for="(value, index) in values" :key="index" :value="value">
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
  background-color: #fff;
  border: 3px solid #90caf9;
  border-radius: 4px;

  appearance: button;
  -webkit-appearance: button;

  outline: none;
  &:focus {
    border: 3px solid #42a5f5;
  }
}
</style>
