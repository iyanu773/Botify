module.exports = {
    name: 'commands',
    description: "List of Bot commands",
    execute(message, args){
        message.channel.send('Here is the list of commands:');
        message.channel.send(' =test - Check to see whether the bot is online');
        
        
    }
}