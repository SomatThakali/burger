const orm = require("../config/orm.js");

let burger = {
  all: function(callback) {
    orm.selectAll("burgers", res => {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, res => {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, res => {
      callback(res);
    });
  },
  delete: function(condition, callback) {
    orm.delete("burgers", condition, res => {
      callback(res);
    });
  }
};

module.exports = burger;
