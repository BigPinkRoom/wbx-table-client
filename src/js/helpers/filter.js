/**
 * filter of table data array
 * @param {Array} array - filterable array
 * @param {String} column - name of filterable column
 * @param {String} condition - name of filterable condition
 * @param {String} inputValue - name of filterable input value
 * @return {Array} - filtered array
 */
export function filter(array, column, condition, inputValue) {
  const inputValueLower = inputValue.toLowerCase();
  const columnLower = column.toLowerCase();
  const method = condition.toLowerCase();

  const sortMethods = {
    equal() {
      return array.filter((element) => {
        return element[columnLower].toString().toLowerCase() == inputValueLower;
      });
    },
    contain() {
      return array.filter((element) => {
        return (
          element[columnLower]
            .toString()
            .toLowerCase()
            .indexOf(inputValueLower) > -1
        );
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

  let result = sortMethods[method]();

  if (!result.length) {
    result = [
      {
        date: Date.now(),
        title: 'Not found',
        quantity: 0,
        distance: 0,
      },
    ];
  }

  return result;
}
