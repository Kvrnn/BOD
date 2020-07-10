// This line MUST be first, for discord.js to read the process envs!
require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", message => {
    if (message.author.bot) return;
    // The process.env.PREFIX is your bot's prefix in this case.
    if (message.content.indexOf(process.env.PREFIX) !== 0) return;

    // This is the usual argument parsing we love to use.
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // And our 2 real basic commands!
    if(command === 'ping') {
        message.channel.send('Pong!');
    } else
    if (command === 'blah') {
        message.channel.send('Meh.');
    }
});

// There's zero need to put something here. Discord.js uses process.env.CLIENT_TOKEN if it's available,
// and this is what is being used here. If on discord.js v12, it's DISCORD_TOKEN
client.login();