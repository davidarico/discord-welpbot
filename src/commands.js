const owoify = require('owoify-js').default

const champs = require('./league-champs')
const insults = require('./insults')

const fs = require('fs')
const bible = JSON.parse(fs.readFileSync('./src/bible-quotes.json'))

module.exports = {
    test: () => {
        return 'test yourself before you wreck yourself'
    },
    help: function () {
        let message = 'Current commands are:'
        let commands = Object.keys(this)
        for(let i = 0; i < commands.length; i++) {
            message = `${message}\n${commands[i]}`
        }
        return message
    },
    uwu: (message) => {
        if(!message) {
            return owoify('Master, I am unsure what you want me to say! OvO~~')
        }
        return owoify(message)
    },
    jungle: () => {
        let champ = champs[Math.floor(Math.random() * champs.length)]
        return `Eugene will play ${champ} jungle this game... godspeed...`
    },
    source: () => {
        return 'https://github.com/davidarico/discord-welpbot'
    },
    insult: (message, users) => {
        return `<@!${users[Math.floor(Math.random() * users.length)]}> is a ${insults[Math.floor(Math.random() * insults.length)]} ${insults[Math.floor(Math.random() * insults.length)]}`
    },
    uwuinsult: (message, users) => {
        let base =  owoify(`is a ${insults[Math.floor(Math.random() * insults.length)]} ${insults[Math.floor(Math.random() * insults.length)]}`)
        return `<@!${users[Math.floor(Math.random() * users.length)]}> ${base}`
    },
    fit: () => {
        return 'https://www.youtube.com/watch?v=ZSl_dMPdwfA'
    },
    bible: () => {
        return bible.bible[Math.floor(Math.random() * bible.bible.length)]
    }
}