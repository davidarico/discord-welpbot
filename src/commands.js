const owoify = require('owoify-js').default

const champs = require('./league-champs')
const insults = require('./insults')

module.exports = {
    test: () => {
        return 'test yourself before you wreck yourself'
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
    }
}