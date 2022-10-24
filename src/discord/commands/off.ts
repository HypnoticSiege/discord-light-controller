import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import lifxClient from '../../lifx/client';

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
        
        interaction.guild.channels.cache.get('1033886936718393344').send({
            embeds: [embed]
        })
	},
};