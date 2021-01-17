<template>
  <form action="" class="drop-down-list__form">
    <select
      :id="id"
      v-model="selectValue"
      :name="name"
      class="drop-down-list__select"
      @change="changeEmit()"
    >
      <option value="" disabled selected>{{ textPlaceholder }}</option>
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
    values: Array,
    name: String,
    textPlaceholder: String,
  },
  data() {
    return {
      selectValue: '',
    };
  },
  methods: {
    changeEmit() {
      this.$emit('changeSelect', this.selectValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down-list__form {
  width: 100%;
}

.drop-down-list__select {
  width: 100%;

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
