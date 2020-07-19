const Discord = require("discord.js");
const client =  new Discord.Client();
                require('dotenv').config();

client.on("ready", () => {
    client.user.setActivity("your loud ass at //", {
        type: "LISTENING"
    });
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
        message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp + "ms"}\``);
    } else
    if (command === 'blah') {
        message.channel.send('Meh.');
    } else
    if (command === 'credit') {
        message.channel.send(
            `This bot was fully developed by ${process.env.AUTHOR} and it's open source @ \<${process.env.GITHUB_REPO}\>`
        );
    } else
    if (command === 'invite') {
        command.channel.send("", { embed: {
                color: 0xe74c3c,
                title: "Send this to your friends so that",
                description: "Error was logged to console."
            }});
    } else
        if(command === 'prune'){
            let msgArgs = command.content.split(" ");
            if (/^[-]?[0-9]+$/.test(msgArgs[1]) && parseInt(msgArgs[1] > 0)) {
                command.channel.bulkDelete(parseInt(msgArgs[1]))
                    .then(messages => {
                        command.channel.send("", { embed: {
                                color: 0x2ecc71,
                                description: `${messages.size} message${(messages.size > 1) ? "s were" : " was"} deleted.`
                            }});
                    })
                    .catch((error) => {
                        console.error(error);
                        command.channel.send("", { embed: {
                                color: 0xe74c3c,
                                title: "Problem trying to prune.",
                                description: "Error was logged to console."
                            }});
                    });
            }
            else {
                command.channel.send("", { embed: {
                        color: 0xe74c3c,
                        description: "Must include a number greater than 0."
                    }});
            }
        }
});

// There's zero need to put something here. Discord.js uses process.env.CLIENT_TOKEN if it's available,
// and this is what is being used here. If on discord.js v12, it's DISCORD_TOKEN
client.login(process.env.CLIENT_TOKEN);