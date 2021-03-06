const db = require("../models");

module.exports = {
  findOne: function (req, res) {
    console.log("finding");
    console.log(req.params);
    db.User.findOne({ email: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("creating");
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log(req.body);
    db.User.update(
      { email: req.params.id },
      { $set: { nickname: req.body.nickname } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
