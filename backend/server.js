const express = require("express");
const chats =  require("./data/data");
console.log(chats)
const app= express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`test on ${PORT}`));


app.get("/api", (req,res) => {
    res.send("first api work");
})

app.get("/api/chat", (req,res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req,res) => {
    const targetChat  = chats.find(chat => chat.id === req.params._id);
    res.send(targetChat);
})

