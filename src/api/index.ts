import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.status(201);
    res.json({
        title: "Hello, World!"
    });
});

app.listen(8080, function () {
    console.log("[INFO] API Online")
});