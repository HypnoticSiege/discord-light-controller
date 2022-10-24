import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import lifxClient from '../../lifx/client';
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('on')
		.setDescription('Turn on all of my lights!'),
    async execute(interaction: any) {
        await lifxClient.power.all('on').then(() => {
            return interaction.reply({
                content: "Successfully turned all lights on!",
                ephemeral: true,
            });
        });

        const embed = new EmbedBuilder()
            .setColor(0x00FF00)
            .setTitle('Lights turned ON')
            .setAuthor({
                name: interaction.user.username + '#' + interaction.user.discriminator,
                iconURL: interaction.user.avatarURL()
            })
            .setTimestamp()
            .setFooter({
                text: "Hypnotic's Light Controller",
                iconURL: "https://hypnoticsiege.net/assets/logo.png"
            })
        
        try {
            interaction.guild.channels.cache.get(process.env.discord_logging).send({
                embeds: [embed]
            });
        } catch (error) {
            return interaction.reply({
                content: "Could not log!",
                ephemeral: true
            })
        };
	},
};