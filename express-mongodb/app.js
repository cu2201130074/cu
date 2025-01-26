const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.MONGODB_URI;

mongoose.connect(uri
).then(() => console.log("データベース接続に成功しました"))
.catch((err) => console.log(err));

app.listen(3000, () => {
console.log("サーバが起動しました。")
})
