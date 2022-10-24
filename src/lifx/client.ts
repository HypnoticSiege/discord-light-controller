require('dotenv').config()
import LifxJS = require("lifxjs");

const lifxClient = new LifxJS();
lifxClient.init({
    appToken: process.env.lifx_token as string
});

export default lifxClient;
