import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import lifxUtils from '../../lifx/utils';
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('off')
		.setDescription('Turn off all of my lights!'),
    async execute(interaction: any) {
        try {
            const embed = new EmbedBuilder()
                .setColor(0xFF0000)
                .setTitle('Lights turned OFF')
                .setAuthor({
                    name: interaction.user.username + '#' + interaction.user.discriminator,
                    iconURL: interaction.user.avatarURL()
                })
                .setTimestamp()
                .setFooter({
                    text: "Hypnotic's Light Controller",
                    iconURL: "https://hypnoticsiege.net/assets/logo.png"
                })

            await lifxUtils.powerAllOff();

            await interaction.reply({
                content: "Successfully turned all lights off!",
                ephemeral: true,
            });

            await interaction.guild.channels.cache.get(process.env.discord_logging).send({
                embeds: [embed]
            });
        } catch (error) {
            await interaction.reply({
                content: "Could not turn lights off! You may have been rate-limited or we just cannot keep up with requests.",
                ephemeral: true
            });
            
            console.log(error)
        };
	},
};