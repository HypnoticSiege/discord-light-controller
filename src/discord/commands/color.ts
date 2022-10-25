import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import lifxUtils from '../../lifx/utils';
import discordUtils from '../utils';
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('color')
        .setDescription('Change all my lights colors!')
        .addStringOption(option => option.setName('color').setDescription('Color to set lights').setRequired(true)),
    async execute(interaction: any) {
        try {
            let color = interaction.options.getString('color');
            let setColor = await lifxUtils.setColor(color);

            await discordUtils.logEmbed(interaction, {
                title: `Changed color to \`${color}\``,
                color: setColor
            });
            
            await interaction.reply({
                content: `Successfully changed light color to \`${color}\``,
                ephemeral: true,
            });
        } catch (error) {
            await interaction.reply({
                content: "Could not change color! You may have been rate-limited or we just cannot keep up with requests.",
                ephemeral: true
            });
            
            console.log(error)
        };
	},
};