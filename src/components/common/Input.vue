<template>
  <input
    :id="id"
    v-model="inputValue"
    :name="name"
    :placeholder="textPlaceholder"
    class="input__input"
    type="text"
    @input="delayEmit()"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: String,
    id: String,
    textPlaceholder: String,
    inputEventEmitName: String,
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    /**
     * delay emit of 'input' component
     */
    delayEmit() {
      this.$emit(this.inputEventEmitName, this.inputValue);
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
