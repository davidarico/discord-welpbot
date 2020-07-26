const discord = require('discord.js')

const config = require('../config')
const command = require('./commands') 

const client = new discord.Client()

client.on('ready', () => {
    console.log(`${client.user.tag} logged in`)
})

client.on('message', msg => {

    if(msg.content[0] != config.prefix) {
        return
    }
    let message = msg.content.substr(1)
    let baseCommand = message.split(' ')[0]
    let response = command[baseCommand] ? command[baseCommand](message.split(' ').splice(1).join(' ')) : 'Bruh I dont know this command'
    msg.channel.send(response)

})

client.login(config.token)