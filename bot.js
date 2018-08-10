const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ادخلو سيرفرنا') {
    msg.reply('https://discord.gg/teKnWcX');
  }
});

client.login('NDc1Njc2NTI1NDQyODkxNzg4.DkihuA.-wdMifpviFrCiOzlYU1benc3BI8');
