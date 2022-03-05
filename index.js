import dotenv from "dotenv";
import express from "express";
import { tokenize, detokenize } from "express-basistheory-tokenize";

dotenv.config();
const app = express();

app.use(express.json());

// configure which dangerous values to tokenize before calling request code
app.use(
  tokenize({
    tokenize: {
      "/": ["the_number", "dope", "rad"],
    },
  })
);

// configure which properties to turn back into the raw values
app.use(
  detokenize({
    detokenize: {
      "/": ["the_number", "rad"],
    },
  })
);

app.post("/", function (req, res) {
  res.send(req.body);
});

app.listen(3111);
