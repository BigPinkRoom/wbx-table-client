export default {
  byText(array, useMarkString) {
    let sortedArray;

    sortedArray = array.sort((a, b) => {
      let titleA = a.title.toLowerCase();
      let titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return this[useMarkString] ? 1 : -1;
      }

      if (titleA > titleB) {
        return this[useMarkString] ? -1 : 1;
      }

      return 0;
    });

    this[useMarkString] = !this[useMarkString];

    return sortedArray;
  },

  byNumbers(array, useMarkString, column) {
    let sortedArray;

    if (this[useMarkString]) {
      sortedArray = array.sort((a, b) => {
        return a[column] - b[column];
      });
    } else {
      sortedArray = array.sort((a, b) => {
        return b[column] - a[column];
      });
    }

    this[useMarkString] = !this[useMarkString];

    return sortedArray;
  },
};
