const { Router } = require("express");
const contactRouter = Router();
const contactController = require("../controllers/contactController");

contactRouter.post("/contacts", contactController.postContact);

module.exports = contactRouter;
