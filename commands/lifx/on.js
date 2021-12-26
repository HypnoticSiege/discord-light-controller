module.exports = {
    name: "on",
    aliases: ["lights-on", "lightson"],
    description: "Turn all the lights on!",

    run: async(client, message, args) => {
        await client.lifx.power.all('on');
        message.reply('Turned lights on!')
    }
};