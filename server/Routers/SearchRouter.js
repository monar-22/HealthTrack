const express = require("express");
const SearchService = require("../services/SearchService");
const SearchRouter = express.Router();

// SearchRouter.get("/docs/:specialist", async (req, res) => {
//   var { specialist } = req.query;
//   var docs = await SearchService.getBySpecialist(specialist);
//   res.json(docs);
// });


SearchRouter.get("/docs/:specialist", async (req, res) => {
  var { specialist } = req.params;
  res.json(await SearchService.getBySpecialist(specialist));
});

module.exports = SearchRouter;