const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const GENERALCHATID = '617737877840986165';
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.on('guildMemberAdd', member => {
    const newUser = member.user.username;
    console.log('user joining server: ', newUser);
    if (newUser === 'xandermonkey10') {
        member.guild.channels.get(GENERALCHATID).send("u da man");
    }
});

client.login(auth.token);