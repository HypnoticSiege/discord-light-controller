const ejs = require('ejs');
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

module.exports = async(client) => {
    const dataDir = path.resolve(`${process.cwd()}${path.sep}app`);
    const templateDir = path.resolve(`${dataDir}${path.sep}views${path.sep}pages`);

    app.engine("html", ejs.renderFile);
    app.set("view engine", "html");
    app.use("/", express.static(path.resolve(`${dataDir}${path.sep}assets`)));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    const renderTemplate = (res, req, template, data = {}) => {
        const baseData = {
            bot: client,
            path: req.path,
        };
        res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
    };

    const lights = await client.lifx.get.all();

    app.get("/", (req, res) => {
        renderTemplate(res, req, "index.ejs");
    });

    app.listen(client.config.dashboard.port);

};