// constant that required Discord communication
const Discord = require('discord.js');

// prefix that tells bot it is going to be initialized
const prefix = '=';

// discord bot or client
const Bot = new Discord.Client();

const fs = require('fs');

Bot.commands = new Discord.Collection()

// tells bot to look in commands folder for java script files to use

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    Bot.commands.set(command.name, command);
}


Bot.once('ready', () =>{

    console.log('Botify is Online');
});




Bot.on('message', message =>{
    // if message doesn't start with prefix or if bot is the author, do nothing
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
  

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // list of commands taken from commands folder
    if(command === 'test'){
        
        Bot.commands.get('test').execute(message, args);
    }

    else if(command === 'commands'){
        
        Bot.commands.get('commands').execute(message, args);
    }

});

    

































// should be last line
Bot.login('ODUxMTk0Mzg3NzE1MDYzODE4.YL0ujA.zY3OTQwZDzP0KoMHYhNQBsV6LCc');