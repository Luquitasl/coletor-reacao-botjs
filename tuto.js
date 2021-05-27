message.channel.send("msg").then(msg => {

let filtro = (reaction, user) => {
return reaction.emoji.name === "✅" && user.id === message.author.id
// Aqui você pode usar qualquer Emoji, DESDE que siga o parametro correto.
// No message.author.id, ele vai limitar que apensa o author que executou o comando poder usar, você pode usar uma variavel para não ser limitada para apenas o autor.
}

let collector = msg.createReactionCollector(filtro, {timeout: 30000}) // Criando o collector, no timeout o tempo funciona em millisegundos, a cada 1000ms = 1s | então o tempo que foi utilizado foi 30 segundos.

collector.on("collect", r => {
    msg.edit("nova mensagem") // Aqui usaremos, para editar a mensagem, mas você pode buscar por outras funções.
  })

/*
collector.end("collect" r => {
msg.edit("Terminou o coletor.)
})
*/

}) 
