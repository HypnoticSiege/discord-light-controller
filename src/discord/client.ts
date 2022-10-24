require('dotenv').config();
import * as fs from 'node:fs';
import * as path from 'node:path';
import { Client, Collection } from 'discord.js';

const discordClient = new Client({
    intents: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536],
    partials: [0,1,2,3,4,5,6],
    allowedMentions: {
        parse: ['users', 'roles', 'everyone'],
        repliedUser: true
    }
});

discordClient.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    discordClient.commands.set(command.data.name, command);
};

discordClient.login(process.env.discord_token);

declare module "discord.js" {
  export interface Client {
    commands: Collection<unknown, any>
  }
};

export default discordClient;