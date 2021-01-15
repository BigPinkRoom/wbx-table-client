<template>
  <input
    type="text"
    :name="name"
    :id="id"
    class="input__input"
    v-model="inputValue"
    @change="delayEmit()"
  />
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
  },
  data() {
    return {
      inputValue: '',
      timer: null,
    };
  },
  methods: {
    delayEmit() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$emit('inputChange', this.inputValue);
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
.input__input {
  width: 100%;

  padding: 4px;

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
