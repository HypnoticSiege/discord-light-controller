import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import lifxClient from '../../lifx/client';
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('off')
		.setDescription('Turn off all of my lights!'),
    async execute(interaction: any) {
        await lifxClient.power.all('off').then(() => {
            return interaction.reply({
                content: "Successfully turned all lights off!",
                ephemeral: true,
            });
        });

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