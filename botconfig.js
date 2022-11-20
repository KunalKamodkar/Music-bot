module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/B4cQAQxUXy", //Support Server Link
  Token: process.env.Token || "ODgyNzE2NzQ2MjQ5ODIyMjU4.GZvTh1.T2vr98Yxph9Y4M4F-Ze0wdA7rKrIHYG05-VKW0", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "882716746249822258", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "kvbsuLfs9JjONiwVvKJHalC0O68qkbD-", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is bot", //A Secret like a password
  IconURL:
    "https://media.discordapp.net/attachments/807822690521448481/882747543145041920/c30996be40bbd1bfd8e934a5289fde6c5539982b_512.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
   },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },*/
  

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "e38d6c1cce41498f8c678118a336ba93", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "cf27fe2cf05342c1b8b37b3401e71ec8", //Spotify Client Secret
  },
};
