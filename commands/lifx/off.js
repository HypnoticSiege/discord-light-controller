module.exports = {
    name: "off",
    description: "Turn all the lights off!",

    run: async(client, message, args) => {
        await client.lifx.power.all('off');
        message.reply('Turned lights off!')
    }
};