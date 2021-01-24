const Discord = require("discord.js");
const config = require('../config.json');

module.exports = {
    name: "ban",
    description: "bans a user from a server",
    usage: `c!ban <user> {reason}`,
    execute(message, args) {
        if (!args.length) return message.channel.send(`You need to mention a user to ban! 🤣`)  
        if (!message.member.roles.cache.find((r) => r.name === "Admin")) return message.channel.send(`You dont have permission to use that command!😡`)
        let author = message.author.id
        let user = message.mentions.members.first();
        if (message.member.roles.cache.find((w) => w.name === "Admin") && user.id === author.id) { 
            return message.channel.send(`What are you? Stupid? You cant ban yourself!`)
        }
        if (message.member.roles.cache.find((e) => e.name === "Admin") && user) {
            user.ban({reason: args[2] })
            message.channel.send(`<@${user.id}> has been banned`)
        }
    
    }
}