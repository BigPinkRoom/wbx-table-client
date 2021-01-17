export default {
  /**
   * sort by text of table data array
   * @param {Array} array - sortable array
   * @param {String} useMarkString - name of use string mark (toggle true/false)
   * @return {Array} - sorted array
   */
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

  /**
   * sort by numbers of table data array
   * @param {Array} array - sortable array
   * @param {String} useMarkString - name of use string mark (toggle true/false)
   * @param {String} column- name of sortable column
   * @return {Array} - sorted array
   */
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
