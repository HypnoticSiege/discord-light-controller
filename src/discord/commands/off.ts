import { SlashCommandBuilder } from 'discord.js';
import lifxUtils from '../../lifx/utils';
import discordUtils from '../utils';
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('off')
		.setDescription('Turn off all of my lights!'),
    async execute(interaction: any) {
        try {
            await lifxUtils.powerAllOff();

            await discordUtils.logEmbed(interaction, {
                title: 'Lights turned OFF',
                color: 0xFF0000
            });

            await interaction.reply({
                content: "Successfully turned all lights off!",
                ephemeral: true,
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