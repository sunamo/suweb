const express = require("express");
const app = express();

const { validateEmail } = require("myutil");

const port = process.env.PORT || 3000;

app.get("/validateEmail", (req, res) => {
  const { email } = req.query;
  res.json({ valid: validateEmail(email) });
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
