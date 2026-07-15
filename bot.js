const tmi = require("tmi.js");

const client = new tmi.Client({
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: [process.env.CHANNEL]
});

client.connect();

client.on("connected", () => {
    console.log("Bot Connected!");
});

client.on("message", (channel, tags, message, self) => {
    if (self) return;

    const command = message.toLowerCase();

    if (command === "!hello") {
        client.say(channel, `Hello @${tags.username}!`);
    }

    if (command === "!discord") {
        client.say(channel, "Join the Discord: https://discord.gg/yourserver");
    }

    if (command === "!youtube") {
        client.say(channel, "YouTube: https://youtube.com/@yourchannel");
    }

    if (command === "!twitter") {
        client.say(channel, "Twitter/X: https://x.com/yourname");
    }

    if (command === "!commands") {
        client.say(channel, "Commands: !hello !discord !youtube !twitter !uptime !socials !rules !follow !bot !creator !game !website !lurk !bye !ping !time !quote !info !help !github");
    }

    if (command === "!uptime") {
        client.say(channel, "The stream is currently live!");
    }

    if (command === "!socials") {
        client.say(channel, "Check out my socials!");
    }

    if (command === "!rules") {
        client.say(channel, "Be respectful, no spam, and have fun!");
    }

    if (command === "!follow") {
        client.say(channel, "Don't forget to follow the channel!");
    }

    if (command === "!bot") {
        client.say(channel, "I am a custom Twitch bot!");
    }

    if (command === "!creator") {
        client.say(channel, "This bot was created by the streamer!");
    }

    if (command === "!game") {
        client.say(channel, "Currently playing a game!");
    }

    if (command === "!website") {
        client.say(channel, "Website: https://example.com");
    }

    if (command === "!lurk") {
        client.say(channel, `Thanks for lurking @${tags.username}!`);
    }

    if (command === "!bye") {
        client.say(channel, `Goodbye @${tags.username}!`);
    }

    if (command === "!ping") {
        client.say(channel, "Pong!");
    }

    if (command === "!time") {
        client.say(channel, `Current time: ${new Date().toLocaleTimeString()}`);
    }

    if (command === "!quote") {
        client.say(channel, "Stay tuned for an amazing stream!");
    }

    if (command === "!info") {
        client.say(channel, "Welcome to the stream! Thanks for watching.");
    }

    if (command === "!help") {
        client.say(channel, "Type !commands to see all available commands.");
    }

    if (command === "!github") {
        client.say(channel, "GitHub: https://github.com/yourname");
    }
});
