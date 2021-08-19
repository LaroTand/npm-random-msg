const messages = ["Edwin", "Michelle", "Diego", "Marisa", "Arturo", "Rumia", "Remilia", "Pepe"]

const randomMsg = () => {
    const randomNumber = Math.floor(Math.random() * messages.length)
    const message = messages[randomNumber]
    console.log(message)
}

module.exports = { randomMsg }