const express = require("express");
const posts = require("./routes/api/posts");

const mongoose = require("mongoose");

const CONNECTION_URL =
  "mongodb+srv://admin:1rZkJlo8eD01mCdV@cluster0.kmwff.mongodb.net/posts?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
// Body parser
app.use(express.json());
// Posts API Routes
app.use("/api/posts", posts);

const PORT = process.env.PORT || 3000;
