import { ColorResolvable, EmbedBuilder, AttachmentBuilder } from 'discord.js';
require('dotenv').config();

const logEmbed = async function (interaction:any, opts: { title: string, color: ColorResolvable }) {
    const embed = new EmbedBuilder()
        .setColor(opts.color)
        .setTitle(opts.title)
        .setAuthor({
            name: interaction.user.username + '#' + interaction.user.discriminator,
            iconURL: interaction.user.avatarURL() as string
        })
        .setImage("attachment://buffer.jpg")
        .setTimestamp()
        .setFooter({
            text: "Hypnotic's Light Controller",
            iconURL: "https://hypnoticsiege.net/assets/logo.png"
        })
    
    const file = new AttachmentBuilder('./buffer.jpg');
    
    await interaction.guild.channels.cache.get(process.env.discord_logging).send({
        embeds: [embed]
    });
};

const discordUtils = {
    logEmbed
};

export default discordUtils;