import { SlashCommandBuilder } from 'discord.js';
import lifxUtils from '../../lifx/utils';
import discordUtils from '../utils';
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('on')
		.setDescription('Turn on all of my lights!'),
    async execute(interaction: any) {
        try {
            await lifxUtils.powerAllOn();

            await discordUtils.logEmbed(interaction, {
                title: 'Lights turned ON',
                color: 0x00FF00
            });

            await interaction.reply({
                content: "Successfully turned all lights on!",
                ephemeral: true,
            });
        } catch (error) {
            await interaction.reply({
                content: "Could not turn lights on! You may have been rate-limited or we just cannot keep up with requests.",
                ephemeral: true
            });
            
            console.log(error)
        };
	},
};