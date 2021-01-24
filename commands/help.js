const Discord = require("discord.js");
const config = require('../config.json');

module.exports = {
  name: "help",
  description: "Lists all the commands the bot supports",
  usage: `c!help`,
  execute(message, args) {
    
    

      const { commands } = message.client;
    if (!args.length) {

      const data = commands.map(command => command.name).join(`\n`)

      const embed = new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setTitle(`**Here's a list of all my commands:**`)
      .setDescription(data)
      .addField('\n**You can send \`c!help [command name]\` to get info on a specific command!**', '** **')
      .setFooter(`Requested by: ${message.author.tag}`)

      message.channel.send(embed)
      return
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name)

    if (!command) {
      return message.channel.send(`${message.author} This command does not exist. If it does, check your spelling`)
    }



    if (command.description && command.usage) {
      
    const embed = new Discord.MessageEmbed()
    .setColor("#ffffff")
    .setTitle(`**Name:** ${command.name}`)
    .setDescription(`**About:** ${command.description} \n **Usage:** ${command.usage}`)
    .setFooter(`Requested by: ${message.author.tag}`)
    message.channel.send(embed)
    }

  },
};
