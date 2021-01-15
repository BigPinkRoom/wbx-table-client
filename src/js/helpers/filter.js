export function filter(array, column, condition, inputValue) {
  const inputValueLower = inputValue.toLowerCase();
  const columnLower = column.toLowerCase();
  const method = condition.toLowerCase();

  const sortMethods = {
    equal() {
      return array.filter((element) => {
        return element[columnLower] == inputValueLower;
      });
    },
    contain() {
      return array.filter((element) => {
        return element[columnLower].toString().indexOf(inputValueLower) > -1;
      });
    },
    more() {
      return array.filter((element) => {
        if (isNaN(Number(inputValueLower)) || isNaN(element[columnLower])) {
          return null;
        }
        return element[columnLower] > Number(inputValueLower);
      });
    },
    less() {
      return array.filter((element) => {
        if (isNaN(Number(inputValueLower)) || isNaN(element[columnLower])) {
          return null;
        }
        return element[columnLower] < Number(inputValueLower);
      });
    },
  };
  console.log(sortMethods[method]());
  return sortMethods[method]();
}
