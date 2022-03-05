import express from 'express';
import {tokenize} from 'express-basistheory-tokenize';

const app = express();

app.use(express.json());
app.use(tokenize({
    apiKey: "key_4qUtg83MpoVnDemfJwbzcN", 
    tokenize: {
        "/": ["the_number", "dope", "killer"]
    }
}));

app.post('/', function (req, res) {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3111)