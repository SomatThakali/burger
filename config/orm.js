const connection = require("../config/connection.js");

/**
 *
 * @returns a string of question marks (?)
 * @param {...number} num - A positive number
 * @example
 * // returns "?,?,?"
 * printQuestionMarks(3);
 */
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

/**
 * Helper function to convert object key/value pairs to SQL syntax
 * @param {object[]} obj - The burger
 * @param {string} obj[].name - The name of the burger
 * @param {string} obj[].devoured - devoured or not
 * @returns {string}
 * @example
 * let obj = {name: 'Lana Del Grey'}
 * // returns  => ["name='Lana Del Grey'"]
 * objToSql(obj);
 */
function objToSql(obj) {
  let arr = [];

  for (let key in obj) {
    let value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
}

/**
 * Object for all our SQL statement functions.
 */
let orm = {
  selectAll: function(tableInput, callback) {
    let queryString = `SELECT * FROM ${tableInput};`;
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(table, cols, vals, callback) {
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(
      vals.length
    )})`;
    console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  updateOne: function(table, objColVals, condition, callback) {
    /* UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition]*/
    let queryString = `UPDATE ${table} SET ${objToSql(
      objColVals
    )} WHERE ${condition}`;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  delete: function(table, condition, callback) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;
