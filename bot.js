const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NjQwNjgwNDAyNTgzMDI3NzEz.Xb9aBw.zlWM2mYuAEuXDzpcCm8QgoHRu_4')

client.on('ready', ()=>{
    console.log('Bot on!');
})

client.on('message', message => {
    if(message.author.bot)
     return;
    
    if(message.content.toLowerCase() === 'hello')
        message.channel.send('Hi!');
})