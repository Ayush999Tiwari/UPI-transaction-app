const express = require('express');
const cors = require("cors"); // Cross-Origin Resource sharing
//it controls how a web page ruuning on one domain can request resources from another domain
//broesers(by default) block requsts made from one origin to another to protect users from malicious websites
//Cors header = server you are requesting data from needs to allow your domain by sending specific HTTP headers
//developers use the cors middleware to easily configure which domains are allowed to access their server
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
const PORT = 5000; // ya jo bhi port use karna hai
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
