const snakeize = require('snakeize');

const getFormattedColumnNames = (object) => Object.keys(snakeize(object)).join(',');

const getFormattedPlaceholders = (object) => Object.keys(object).map(() => '?').join(',');

const getFormattedUpdateColumns = (object) => Object.keys(snakeize(object))
  .map((key) => `${key} = ?`)
  .join(', ');

module.exports = {
  getFormattedColumnNames,
  getFormattedPlaceholders,
  getFormattedUpdateColumns,
};
