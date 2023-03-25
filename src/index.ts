import discordClient from './discord/client';
import lifxClient from './lifx/client';
import { Events } from 'discord.js';

discordClient.once(Events.ClientReady, async (c:any) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

discordClient.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = discordClient.commands.get(interaction.commandName);

    if (!command) {
        await interaction.reply({
            content: "Could not find command! Please contact the Developer!",
            ephemeral: true
        });
        return;
    };

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: "There was an internal issue while executing this command!",
            ephemeral: true
        });
    };
});