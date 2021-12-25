module.exports = {
    name: "color",
    description: "Set your lights to a color!",

    run: async(client, message, args) => {
        var hex = /^#([0-9a-f]{3}){1,2}$/i;

        if (hex.test(args.join(" ")) == true) {
            await client.lifx.color.all({
                hex: args.join(" ")
            });
            message.reply('Set color to ' + args.join(" "));
        } else if (client.config.colors.find(x => x.name == args.join(" ").toLowerCase())) {
            const color = client.config.colors.find(x => x.name == args.join(" ").toLowerCase())
            await client.lifx.color.all({
                hex: color.hex
            });
            message.reply('Set color to ' + args.join(" "))
        } else {
            message.reply("That's not a valid color!")
        }
    }
};