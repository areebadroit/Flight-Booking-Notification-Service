const express = require("express");
const { InfoController, EmailController } = require("../../controllers");

const router = express.Router();
// router.get("/info", (req, res) => {
//   return res.json({ message: "OK" });
// });
router.get("/info", InfoController.info);
router.post("/tickets", EmailController.create);
module.exports = router;
