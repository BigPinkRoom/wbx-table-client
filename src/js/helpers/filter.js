export function filter(array, column, condition, inputValue) {
  const inputValue = inputValue.toLowerCase();
  const method = condition.toLowerCase();
  sortMethods = {
    equal() {},
    contain() {
      return array.filter((element) => {
        element[column].toLowerCase().indexOf(inputValue) > -1;
      });
    },
    more() {},
    less() {},
  };
  return sortMethods[method]();
}
