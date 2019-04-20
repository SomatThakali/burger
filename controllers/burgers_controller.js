const express = require("express");

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all(data => {
    let hbsObject = {
      burgers: data
    };
    console.log("Object is ", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.create(["burger_name"], [req.body.burger_name], data => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  console.log(req.params.id);
  console.log("condition", condition);
  burger.update(
    {
      devoured: true
    },
    condition,
    result => {
      res.redirect("/");
    }
  );
});

router.delete("/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  burger.delete(condition, result => {
    // if (result.affectedRows == 0) {
    //   // If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
