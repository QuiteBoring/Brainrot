const { Client, GatewayIntentBits, EmbedBuilder, Colors } = require("discord.js");
const { generateOutput } = require("./utils"); 
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.once("ready", () => {
    console.log("Ready!"); 
});

client.on("messageCreate", (message) => {
    if (message.content.toLowerCase() === "m.brainrot") {
        message.channel.send({ embeds: [
            new EmbedBuilder()
                .setTitle("🧠 Brainrot 🧟")
                .setDescription(generateOutput())
                .setColor(Colors.DarkGreen)
                .setTimestamp(Date.now())
                .setFooter({ text: "Brainrot Generator" })
        ]});
    }
});

client.login("PUT BOT TOKEN HERE");