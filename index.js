const Discord = require('discord.js');
const Lifx = require('lifxjs');
const config = require('./config');
const { readdir } = require('fs');

const lifx = new Lifx();
const client = new Discord.Client();

client.login(config.discord.token);
lifx.init({ appToken: config.lifx.token });
client.lifx = lifx;
client.config = config;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

//Command Handler
["command"].forEach(handler => {
    require(`./handlers/command`)(client);
})

//Event Handler
readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        try {
            client.on(eventName, event.bind(null, client));
            console.log(`Loaded ${eventName} Event!`);
        } catch (err) {
            console.error(err)
        };
    });
});

client.on('ready', () => {
    const application = require('./app/app');
    application(client)
    console.log(`Logged in as ${client.user.tag}!`);
});