const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");

A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
سلام عليكم
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/teKnWcX ] 
الدعووة خاصة لك ... [ MedoxYT  ]
**`)
}).catch(console.error)
})
A7MD.login('NDc0MjE1OTYwMjc5MjUzMDI2.Dki55w.z2EFYO85GfWnRNePrV_u-1y00AU');
