module.exports = async(client, message) => {
    const config = require('../config');
    if (message.author.bot) return;
    if (message.content.indexOf(config.discord.prefix) !== 0) return;

    const args = message.content.slice(config.discord.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let command = client.commands.get(cmd);

    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);

    if (client.config.colors.find(x => x.name == cmd.toLowerCase())) {
        const color = client.config.colors.find(x => x.name == cmd.toLowerCase());
        await client.lifx.color.all({
            hex: color.hex
        });
        message.reply(`Set color to ${color.name}`)
    };
};