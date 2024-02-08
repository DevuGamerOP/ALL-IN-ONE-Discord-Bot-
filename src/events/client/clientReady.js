const Discord = require('discord.js');
const chalk = require('chalk');
const { random } = require('mathjs');

module.exports = async (client) => {
    const startLogs = new Discord.WebhookClient({
        id: client.webhooks.startLogs.id,
        token: client.webhooks.startLogs.token,
    });

    console.log(`\u001b[0m`);
    console.log(chalk.blue(chalk.bold(`Bot`)), (chalk.white(`>>`)), chalk.green(`Started on`), chalk.red(`${client.guilds.cache.size}`), chalk.green(`servers!`))


    setInterval(async function () {
                let statuttext;
                if (process.env.DISCORD_STATUS) {
                    statuttext = process.env.DISCORD_STATUS.split(', ');
                } else {
                    statuttext = [
                        `・❓┆/help`,
                        `・💻┆${client.guilds.cache.size} servers`,
                        `・📨┆dsc.gg/heaven-mc`,
                        `・🎉┆Managing {client.users.cache.size} Users`,
                        `・🏷️┆/bot support`
                    ];
                }
                const randomText = statuttext[Math.floor(Math.random() * statuttext.length)];
                client.user.setPresence({ activities: [{ name: randomText, type: Discord.ActivityType.Playing }], status: 'idle' });

    }, 50000)

    client.player.init(client.user.id);
}

