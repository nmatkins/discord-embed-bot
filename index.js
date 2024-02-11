import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(
    `Ready to receive events in server: ${
      client.guilds.cache.size > 0 ? client.guilds.cache.first().name : "None"
    }`
  );
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const urls = message.content.match(/\bhttps?:\/\/\S+/gi) || [];
  urls.forEach((url) => {
    //add or modify these to change embed behavior
    if (url.includes("tiktok.com")) {
      let newURL = url.replace("tiktok.com", "vxtiktok.com");
      message.reply("EMBED: " + newURL);
    }
    if (url.includes("twitter.com")) {
      let newURL = url.replace("twitter.com", "vxtwitter.com");
      message.reply("EMBED: " + newURL);
    }
    if (url.includes("reddit.com")) {
      let newURL = url.replace("reddit.com", "rxddit.com");
      message.reply("EMBED: " + newURL);
    }
  });
});

client.login(process.env.TOKEN);
